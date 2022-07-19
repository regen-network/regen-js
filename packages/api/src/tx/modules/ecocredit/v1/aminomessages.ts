import { AminoConverters } from '@cosmjs/stargate';
import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';

import {
  MsgCreateClass,
  MsgSend,
  MsgSend_SendCredits,
} from '../../../../generated/regen/ecocredit/v1/tx';
import { Coin } from '../../../../generated/cosmos/base/v1beta1/coin';

// Ref: https://github.com/regen-network/regen-ledger/blob/v4.0.0-beta1/x/ecocredit/core/codec.go#L16
const msgCreateClassAminoType = 'regen.core/MsgCreateClass';
const msgSendAminoType = 'regen.core/MsgSend';

export interface AminoMsgCreateClass extends AminoMsg {
  readonly type: typeof msgCreateClassAminoType;
  readonly value: {
    readonly admin: string;
    readonly issuers: string[];
    readonly metadata: string;
    readonly credit_type_abbrev: string;
    readonly fee?: AminoCoin;
  };
}

export interface AminoMsgSend extends AminoMsg {
  readonly type: typeof msgSendAminoType;
  readonly value: {
    readonly sender: string;
    readonly recipient: string;
    readonly credits: MsgSend_SendCredits[];
  };
}

export function isAminoMsgCreateClass(
  msg: AminoMsg,
): msg is AminoMsgCreateClass {
  return msg.type === msgCreateClassAminoType;
}

export function createEcocreditAminoConverters(): AminoConverters {
  return {
    '/regen.ecocredit.v1.MsgCreateClass': {
      aminoType: msgCreateClassAminoType,
      toAmino: ({
        admin,
        issuers,
        metadata,
        creditTypeAbbrev,
        fee,
      }: MsgCreateClass): AminoMsgCreateClass['value'] => {
        return {
          admin,
          issuers,
          metadata,
          credit_type_abbrev: creditTypeAbbrev,
          fee: fee && { amount: fee.amount, denom: fee.denom },
        };
      },
      fromAmino: ({
        admin,
        issuers,
        metadata,
        credit_type_abbrev,
        fee,
      }: AminoMsgCreateClass['value']): Partial<MsgCreateClass> => {
        return {
          admin,
          issuers,
          metadata,
          creditTypeAbbrev: credit_type_abbrev,
          fee: fee && Coin.fromPartial(fee),
        };
      },
    },
    '/regen.ecocredit.v1.MsgSend': {
      aminoType: msgSendAminoType,
      toAmino: ({
        sender,
        recipient,
        credits,
      }: MsgSend): AminoMsgSend['value'] => {
        return {
          sender,
          recipient,
          credits,
        };
      },
      fromAmino: ({
        sender,
        recipient,
        credits,
      }: AminoMsgSend['value']): Partial<MsgSend> => {
        return {
          sender,
          recipient,
          credits,
        };
      },
    },
  };
}
