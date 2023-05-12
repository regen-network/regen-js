import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgRetire } from '../../../../generated/regen/ecocredit/v1/tx';
import { Credits } from '../../../../generated/regen/ecocredit/v1/types';
import { AminoCredits } from './msg_cancel';

const msgRetireAminoType = 'regen/MsgRetire';

export const retireTypeUrl = '/' + MsgRetire.$type;

export interface AminoMsgRetire extends AminoMsg {
  readonly type: typeof msgRetireAminoType;
  readonly value: {
    readonly owner: string;
    readonly credits: AminoCredits[];
    readonly jurisdiction: string;
    readonly reason?: string;
  };
}

export function isAminoMsgRetire(msg: AminoMsg): msg is AminoMsgRetire {
  return msg.type === msgRetireAminoType;
}

export function retireAminoConverter(): AminoConverter {
  return {
    aminoType: msgRetireAminoType,
    toAmino: ({
      owner,
      credits,
      jurisdiction,
      reason,
    }: MsgRetire): AminoMsgRetire['value'] => {
      return {
        owner,
        credits: credits.map(credit => {
          return {
            batch_denom: credit.batchDenom,
            amount: credit.amount,
          };
        }),
        jurisdiction,
        reason: reason || undefined,
      };
    },
    fromAmino: ({
      owner,
      credits,
      jurisdiction,
      reason,
    }: AminoMsgRetire['value']): Partial<MsgRetire> => {
      return {
        owner,
        credits: credits.map(credit => {
          return {
            $type: Credits.$type,
            batchDenom: credit.batch_denom || '',
            amount: credit?.amount || '',
          };
        }),
        jurisdiction,
        reason: reason || '',
      };
    },
  };
}
