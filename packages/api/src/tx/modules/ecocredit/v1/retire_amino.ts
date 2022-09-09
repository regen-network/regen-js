import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgRetire } from '../../../../generated/regen/ecocredit/v1/tx';
import { AminoCredits } from './aminomessages';

const msgRetireAminoType = 'regen.core/MsgRetire';

export const retireTypeUrl = "/" + MsgRetire.$type;

export interface AminoMsgRetire extends AminoMsg {
  readonly type: typeof msgRetireAminoType;
  readonly value: {
    readonly owner: string;
    readonly credits: AminoCredits[];
    readonly jurisdiction: string;
  };
}

export function isAminoMsgRetire(msg: AminoMsg): msg is AminoMsgRetire {
  return msg.type === msgRetireAminoType;
}

let retireAminoConverter: AminoConverter = {
  aminoType: msgRetireAminoType,
  toAmino: ({
    owner,
    credits,
    jurisdiction,
  }: MsgRetire): AminoMsgRetire['value'] => {
    return {
      owner,
      credits: credits.map(credit => {
        return {
          $type: credit.$type,
          batch_denom: credit.batchDenom,
          amount: credit.amount,
        };
      }),
      jurisdiction,
    };
  },
  fromAmino: ({
    owner,
    credits,
    jurisdiction,
  }: AminoMsgRetire['value']): Partial<MsgRetire> => {
    return {
      owner,
      credits: credits.map(credit => {
        return {
          $type: credit.$type,
          batchDenom: credit.batch_denom,
          amount: credit.amount,
        };
      }),
      jurisdiction,
    };
  },
};
