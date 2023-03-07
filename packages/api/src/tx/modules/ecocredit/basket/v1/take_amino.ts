import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgTake } from '../../../../../generated/regen/ecocredit/basket/v1/tx';

const msgTakeAminoType = 'regen.basket/MsgTake';

export const takeTypeUrl = '/' + MsgTake.$type;

export interface AminoMsgTake extends AminoMsg {
  readonly type: typeof msgTakeAminoType;
  readonly value: {
    readonly owner: string;
    readonly basket_denom: string;
    readonly amount: string;
    readonly retire_on_take?: boolean;
    readonly retirement_jurisdiction?: string;
    readonly retirement_reason?: string;
  };
}

export function isAminoMsgTake(msg: AminoMsg): msg is AminoMsgTake {
  return msg.type === msgTakeAminoType;
}

export function takeConverter(): AminoConverter {
  return {
    aminoType: msgTakeAminoType,
    toAmino: ({
      owner,
      basketDenom,
      amount,
      retireOnTake,
      retirementJurisdiction,
      retirementReason,
    }: MsgTake): AminoMsgTake['value'] => {
      return {
        owner,
        basket_denom: basketDenom,
        amount,
        retire_on_take: retireOnTake || undefined,
        retirement_jurisdiction: retirementJurisdiction || undefined,
        retirement_reason: retirementReason || undefined,
      };
    },
    fromAmino: ({
      owner,
      basket_denom,
      amount,
      retire_on_take,
      retirement_jurisdiction,
      retirement_reason,
    }: AminoMsgTake['value']): Partial<MsgTake> => {
      return {
        owner,
        basketDenom: basket_denom,
        amount,
        retireOnTake: retire_on_take,
        retirementJurisdiction: retirement_jurisdiction,
        retirementReason: retirement_reason,
      };
    },
  };
}
