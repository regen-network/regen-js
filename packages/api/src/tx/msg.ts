import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { assert } from '@cosmjs/utils';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';

import { ConnectionOptions } from '../api';
import { createStargateSigningClient } from './stargate-signing';

export const protobufPackage = 'regen.tx.v1alpha1';

export interface MessageClient {
  readonly tx: {
    readonly sign: (
      amount: number,
      sender: string,
      recipient: string,
    ) => Promise<Uint8Array>;
    readonly broadcast: (signedTxBytes: Uint8Array) => Promise<string>;
  };
}

export async function setupTxExtension(
  connection: ConnectionOptions,
): Promise<MessageClient> {
  const registry = new Registry([
    ...defaultRegistryTypes,
    // ["/my.custom.MsgXxx", MsgXxx], // Replace with your own type URL and Msg class
  ]);

  const connectionOptions = {
    ...connection,
    registry,
  };
  const signingClient = await createStargateSigningClient(connectionOptions);

  /**
   * Sign a transaction for sending tokens to a recipient
   */
  const sign = async (
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
          amount: '100', //TODO: what should fee and gas be?
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
      alert(`Client sign error: ${err}`);
      return Promise.reject();
    }
  };

  /**
   * Broadcast a signed transaction and wait for transaction hash
   */
  const broadcast = async (signedTxBytes: Uint8Array): Promise<string> => {
    const result = await signingClient.broadcastTx(signedTxBytes);
    // assertIsBroadcastTxSuccess(result);

    return result.transactionHash;
  };

  return {
    tx: {
      sign,
      broadcast,
    },
  };
}
