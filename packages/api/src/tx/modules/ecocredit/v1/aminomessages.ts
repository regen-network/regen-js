import { AminoConverters } from '@cosmjs/stargate';
import { AminoMsg } from '@cosmjs/amino';
import {
  assert,
  assertDefinedAndNotNull,
  isNonNullObject,
} from '@cosmjs/utils';

import { Any } from 'cosmjs-types/google/protobuf/any';
import Long from 'long';

import { MsgCreateClass } from '../../../../generated/regen/ecocredit/v1/tx';
import { Coin } from '../../../../generated/cosmos/base/v1beta1/coin';

const msgCreateClassAminoType = 'regen.core/MsgCreateClass';

export interface AminoMsgCreateClass extends AminoMsg {
  readonly type: typeof msgCreateClassAminoType;
  readonly value: {
    readonly admin: string;
    readonly issuers: string[];
    readonly metadata: string;
    readonly credit_type_abbrev: string;
    readonly fee?: Coin;
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
          fee,
        };
      },
      fromAmino: ({
        admin,
        issuers,
        metadata,
        credit_type_abbrev,
        fee,
      }: AminoMsgCreateClass['value']): MsgCreateClass => {
        return {
          admin,
          issuers,
          metadata,
          creditTypeAbbrev: credit_type_abbrev,
          fee: fee && Coin.fromPartial(fee),
          $type: MsgCreateClass.$type,
        };
      },
    },
  };
}
