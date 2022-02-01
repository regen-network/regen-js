import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { defaultRegistryTypes, StdFee } from '@cosmjs/stargate';
import { Registry, GeneratedType } from '@cosmjs/proto-signing';

import { SigningConnectionOptions } from '../api';
import { messageTypeRegistry } from '../generated/typeRegistry';
import { createStargateSigningClient } from './stargate-signing';

export interface MessageClient {
  readonly sign: (
    signerAddress: string,
    msg: any,
    fee: StdFee,
    memo: string,
  ) => Promise<Uint8Array>;
  readonly broadcast: (signedTxBytes: Uint8Array) => Promise<string>;
}

export async function setupTxExtension(
  connection: SigningConnectionOptions,
): Promise<MessageClient> {
  const customRegistry: Array<[string, GeneratedType]> = [];
  messageTypeRegistry.forEach((value, key) => {
    customRegistry.push([`/${key}`, value]);
  });
  const registry = new Registry([...defaultRegistryTypes, ...customRegistry]);

  const signingClient = await createStargateSigningClient(
    connection.endpoint,
    connection.signer,
    { ...connection.clientOptions, registry },
  );

  /**
   * Sign a transaction with msgs
   * TODO support array of msgs instead of single msg
   */
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
   * Broadcast a signed transaction and wait for transaction hash
   */
  const broadcast = async (signedTxBytes: Uint8Array): Promise<string> => {
    const result = await signingClient.broadcastTx(signedTxBytes);

    return result.transactionHash;
  };

  return {
    sign,
    broadcast,
  };
}
