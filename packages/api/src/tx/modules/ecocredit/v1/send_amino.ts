import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import {
  MsgSend,
  MsgSend_SendCredits,
} from '../../../../generated/regen/ecocredit/v1/tx';

const msgSendAminoType = 'regen.core/MsgSend';

interface AminoMsgSend_SendCredits {
  $type: MsgSend_SendCredits['$type'];
  batch_denom: string;
  tradable_amount: string;
  retired_amount: string;
  retirement_jurisdiction: string;
}

export interface AminoMsgSend extends AminoMsg {
  readonly type: typeof msgSendAminoType;
  readonly value: {
    readonly sender: string;
    readonly recipient: string;
    readonly credits: AminoMsgSend_SendCredits[];
  };
}

export function isAminoMsgSend(msg: AminoMsg): msg is AminoMsgSend {
  return msg.type === msgSendAminoType;
}

export function ecocreditSendConverter(): AminoConverter {
  return {
    aminoType: msgSendAminoType,
    toAmino: ({
      sender,
      recipient,
      credits,
    }: MsgSend): AminoMsgSend['value'] => {
      return {
        sender,
        recipient,
        credits: credits.map(credit => {
          return {
            $type: credit.$type,
            batch_denom: credit.batchDenom,
            tradable_amount: credit.tradableAmount,
            retired_amount: credit.retiredAmount,
            retirement_jurisdiction: credit.retirementJurisdiction,
          };
        }),
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
        credits: credits.map(credit => {
          return {
            $type: credit.$type,
            batchDenom: credit.batch_denom,
            tradableAmount: credit.tradable_amount,
            retiredAmount: credit.retired_amount,
            retirementJurisdiction: credit.retirement_jurisdiction,
          };
        }),
      };
    },
  };
}
