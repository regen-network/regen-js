import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { assert } from '@cosmjs/utils';
// import {
//   assertIsBroadcastTxSuccess,
//   SigningStargateClient,
//   BroadcastTxResponse,
// } from '@cosmjs/stargate';

import { ConnectionOptions } from '../api';
import { createStargateSigningClient } from './stargate-signing';

export interface MessageClient {
  readonly tx: {
    readonly signSend: (
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
  const signingClient = await createStargateSigningClient(connection);

  /**
   * Sign a transaction for sending tokens to a reciptient
   */
  const signSend = async (
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
      signSend,
      broadcast,
    },
  };
}
