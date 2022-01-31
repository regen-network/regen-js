import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { defaultRegistryTypes, StdFee } from '@cosmjs/stargate';
import { Registry, GeneratedType } from '@cosmjs/proto-signing';

import { ConnectionOptions } from '../api';
import { messageTypeRegistry } from '../generated/typeRegistry';
import { createStargateSigningClient } from './stargate-signing';

export interface MessageClient {
  readonly sign: (
    signerAddress: string,
    msg: any,
    fee: StdFee,
    memo: string,
  ) => Promise<Uint8Array>;
  readonly sendTokens: (
    amount: number,
    sender: string,
    recipient: string,
  ) => Promise<Uint8Array>;
  readonly broadcast: (signedTxBytes: Uint8Array) => Promise<string>;
}

export async function setupTxExtension(
  connection: ConnectionOptions,
): Promise<MessageClient> {
  const customRegistry: Array<[string, GeneratedType]> = [];
  messageTypeRegistry.forEach((value, key) => {
    customRegistry.push([`/${key}`, value]);
  });
  const registry = new Registry([...defaultRegistryTypes, ...customRegistry]);
  console.log('myRegistry', registry);

  const connectionOptions = {
    ...connection,
    registry,
  };
  const signingClient = await createStargateSigningClient(connectionOptions);

  const sign = async (
    signerAddress: string,
    msg: any,
    fee: StdFee,
    memo: string,
  ): Promise<Uint8Array> => {
    const msgAny = {
      typeUrl: `/${msg.$type}`,
      value: msg,
    };
    try {
      const txRaw = await signingClient.sign(
        signerAddress,
        [msgAny],
        fee,
        memo,
      );
      const txBytes = TxRaw.encode(txRaw).finish();

      return txBytes;
    } catch (err) {
      return Promise.reject(err);
    }
  };
  /**
   * Sign a transaction for sending tokens to a recipient
   */
  const sendTokens = async (
    amount: number,
    sender: string,
    recipient: string,
  ): Promise<Uint8Array> => {
    amount *= 1000000;
    amount = Math.floor(amount);

    const fee = {
      amount: [
        {
          denom: 'uregen',
          amount: '5000', //TODO: what should fee and gas be?
        },
      ],
      gas: '200000',
    };

    const msgSend = {
      fromAddress: sender,
      toAddress: recipient,
      amount: [
        {
          denom: 'uregen',
          amount: amount.toString(),
        },
      ],
    };
    const msgAny = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: msgSend,
    };

    try {
      const txRaw = await signingClient.sign(sender, [msgAny], fee, '');
      const txBytes = TxRaw.encode(txRaw).finish();

      return txBytes;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  /**
   * Broadcast a signed transaction and wait for transaction hash
   */
  const broadcast = async (signedTxBytes: Uint8Array): Promise<string> => {
    const result = await signingClient.broadcastTx(signedTxBytes);

    return result.transactionHash;
  };

  return {
    sign,
    sendTokens,
    broadcast,
  };
}
