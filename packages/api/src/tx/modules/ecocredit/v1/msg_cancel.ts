import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgCancel } from '../../../../generated/regen/ecocredit/v1/tx';
import { Credits } from '../../../../generated/regen/ecocredit/v1/types';

const msgCancelAminoType = 'regen.core/MsgCancel';

export interface AminoCredits {
  $type: Credits['$type'];
  batch_denom: string;
  amount: string;
}

export interface AminoMsgCancel extends AminoMsg {
  readonly type: typeof msgCancelAminoType;
  readonly value: {
    owner: string;
    credits: AminoCredits[];
    reason: string;
  };
}

export function isAminoMsgSend(msg: AminoMsg): msg is AminoMsgCancel {
  return msg.type === msgCancelAminoType;
}

let cancelConverter: AminoConverter = {
  aminoType: '/regen.ecocredit.v1.MsgCancel',
  toAmino: ({ owner, credits, reason }: MsgCancel): AminoMsgCancel['value'] => {
    return {
      owner,
      credits: credits.map(credit => {
        return {
          $type: credit.$type,
          batch_denom: credit.batchDenom,
          amount: credit.amount,
        };
      }),
      reason,
    };
  },
  fromAmino: ({
    owner,
    credits,
    reason,
  }: AminoMsgCancel['value']): Partial<MsgCancel> => {
    return {
      owner,
      credits: credits.map(credit => {
        return {
          $type: credit.$type,
          batchDenom: credit.batch_denom,
          amount: credit.amount,
        };
      }),
      reason,
    };
  },
};
