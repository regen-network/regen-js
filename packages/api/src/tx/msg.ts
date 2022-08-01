import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import {
  defaultRegistryTypes,
  StdFee,
  DeliverTxResponse,
  AminoTypes,
  createAuthzAminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFreegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  AminoConverters,
} from '@cosmjs/stargate';
import { Registry, GeneratedType, EncodeObject } from '@cosmjs/proto-signing';

import { SigningConnectionOptions } from '../api';
import { messageTypeRegistry } from '../generated/typeRegistry';
import { createStargateSigningClient } from './stargate-signing';
import { createEcocreditAminoConverters } from './modules';
import { MsgCreateClass, MsgSend } from '../generated/regen/ecocredit/v1/tx';

export interface MessageClient {
  readonly sign: (
    signerAddress: string,
    msg: any,
    fee: StdFee,
    memo: string,
  ) => Promise<Uint8Array>;
  readonly broadcast: (signedTxBytes: Uint8Array) => Promise<DeliverTxResponse>;
}

function createDefaultTypes(): AminoConverters {
  return {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters('regen'),
    ...createIbcAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createEcocreditAminoConverters(),
  };
}

export async function setupTxExtension(
  connection: SigningConnectionOptions,
): Promise<MessageClient> {
  const customRegistry: Array<[string, GeneratedType]> = [
    [MsgCreateClass.$type, MsgCreateClass],
    [MsgSend.$type, MsgSend],
  ];
  messageTypeRegistry.forEach((value, key) => {
    customRegistry.push([`/${key}`, value]);
  });
  const registry = new Registry([...defaultRegistryTypes, ...customRegistry]);
  const aminoTypes = new AminoTypes(createDefaultTypes());

  const signingClient = await createStargateSigningClient(
    connection.endpoint,
    connection.signer,
    { ...connection.clientOptions, registry, aminoTypes },
  );

  /**
   * Sign a transaction with msgs
   */
  const sign = async (
    signerAddress: string,
    msgs: any[],
    fee: StdFee,
    memo: string,
  ): Promise<Uint8Array> => {
    const msgsAny: EncodeObject[] = [];
    for (const msg of msgs) {
      msgsAny.push({
        typeUrl: `/${msg.$type}`,
        value: (({ $type, ...rest }) => rest)(msg),
      });
    }
    try {
      const txRaw = await signingClient.sign(signerAddress, msgsAny, fee, memo);
      const txBytes = TxRaw.encode(txRaw).finish();

      return txBytes;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  /**
   * Broadcast a signed transaction and wait for the deliver tx response
   */
  const broadcast = async (
    signedTxBytes: Uint8Array,
  ): Promise<DeliverTxResponse> => {
    try {
      const result = await signingClient.broadcastTx(signedTxBytes);

      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return {
    sign,
    broadcast,
  };
}
