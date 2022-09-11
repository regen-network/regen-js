import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { Duration } from '../../../../../generated/google/protobuf/duration';
import { MsgCreate } from '../../../../../generated/regen/ecocredit/basket/v1/tx';
import { DateCriteria } from '../../../../../generated/regen/ecocredit/basket/v1/types';

const msgCreateAminoType = 'regen.basket/MsgCreate';

export const createTypeUrl = '/' + MsgCreate.$type;

export interface AminoDateCriteria {
  $type: DateCriteria['$type'];
  min_start_date?: Date;
  start_date_window?: Duration;
  years_in_the_past: number;
}

export interface AminoMsgCreate extends AminoMsg {
  readonly type: typeof msgCreateAminoType;
  readonly value: {
    readonly curator: string;
    readonly name: string;
    readonly description: string;
    readonly exponent: number;
    readonly disable_auto_retire: boolean;
    readonly credit_type_abbrev: string;
    readonly allowed_classes: string[];
    readonly date_criteria?: AminoDateCriteria;
    readonly fee: AminoCoin[];
  };
}

export function isAminoMsgCreateBasket(msg: AminoMsg): msg is AminoMsgCreate {
  return msg.type === msgCreateAminoType;
}

export function createBasketConverter(): AminoConverter {
  return {
    aminoType: msgCreateAminoType,
    toAmino: ({
      curator,
      name,
      description,
      exponent,
      disableAutoRetire,
      creditTypeAbbrev,
      allowedClasses,
      dateCriteria,
      fee,
    }: MsgCreate): AminoMsgCreate['value'] => {
      return {
        curator,
        name,
        description,
        exponent,
        disable_auto_retire: disableAutoRetire,
        credit_type_abbrev: creditTypeAbbrev,
        allowed_classes: allowedClasses,
        date_criteria: dateCriteria && {
          $type: dateCriteria?.$type,
          min_start_date: dateCriteria?.minStartDate,
          start_date_window: dateCriteria?.startDateWindow,
          years_in_the_past: dateCriteria?.yearsInThePast,
        },
        fee: fee,
      };
    },
    fromAmino: ({
      curator,
      name,
      description,
      exponent,
      disable_auto_retire,
      credit_type_abbrev,
      allowed_classes,
      date_criteria,
      fee,
    }: AminoMsgCreate['value']): Partial<MsgCreate> => {
      return {
        curator,
        name,
        description,
        exponent,
        disableAutoRetire: disable_auto_retire,
        creditTypeAbbrev: credit_type_abbrev,
        allowedClasses: allowed_classes,
        dateCriteria: date_criteria && {
          $type: date_criteria.$type,
          minStartDate: date_criteria.min_start_date,
          startDateWindow: date_criteria.start_date_window,
          yearsInThePast: date_criteria.years_in_the_past,
        },
        fee: fee.map(f => {
          return {
            $type: 'cosmos.base.v1beta1.Coin',
            amount: f.amount,
            denom: f.denom,
          };
        }),
      };
    },
  };
}
