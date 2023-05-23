import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../../helpers";
import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export interface AminoMsgCreate extends AminoMsg {
  type: "regen.basket/MsgCreate";
  value: {
    curator: string;
    name: string;
    description: string;
    exponent: number;
    disable_auto_retire: boolean;
    credit_type_abbrev: string;
    allowed_classes: string[];
    date_criteria: {
      min_start_date: {
        seconds: string;
        nanos: number;
      };
      start_date_window: {
        seconds: string;
        nanos: number;
      };
      years_in_the_past: number;
    };
    fee: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgPut extends AminoMsg {
  type: "regen.basket/MsgPut";
  value: {
    owner: string;
    basket_denom: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgTake extends AminoMsg {
  type: "regen.basket/MsgTake";
  value: {
    owner: string;
    basket_denom: string;
    amount: string;
    retirement_location: string;
    retire_on_take: boolean;
    retirement_jurisdiction: string;
    retirement_reason: string;
  };
}
export interface AminoMsgUpdateBasketFee extends AminoMsg {
  type: "regen.basket/MsgUpdateBasketFee";
  value: {
    authority: string;
    fee: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUpdateCurator extends AminoMsg {
  type: "regen.basket/MsgUpdateCurator";
  value: {
    curator: string;
    denom: string;
    new_curator: string;
  };
}
export interface AminoMsgUpdateDateCriteria extends AminoMsg {
  type: "regen.basket/MsgUpdateDateCriteria";
  value: {
    authority: string;
    denom: string;
    new_date_criteria: {
      min_start_date: {
        seconds: string;
        nanos: number;
      };
      start_date_window: {
        seconds: string;
        nanos: number;
      };
      years_in_the_past: number;
    };
  };
}
export const AminoConverter = {
  "/regen.ecocredit.basket.v1.MsgCreate": {
    aminoType: "regen.basket/MsgCreate",
    toAmino: ({
      curator,
      name,
      description,
      exponent,
      disableAutoRetire,
      creditTypeAbbrev,
      allowedClasses,
      dateCriteria,
      fee
    }: MsgCreate): AminoMsgCreate["value"] => {
      return {
        curator,
        name,
        description,
        exponent,
        disable_auto_retire: disableAutoRetire,
        credit_type_abbrev: creditTypeAbbrev,
        allowed_classes: allowedClasses,
        date_criteria: {
          min_start_date: dateCriteria.minStartDate,
          start_date_window: (dateCriteria.startDateWindow * 1_000_000_000).toString(),
          years_in_the_past: dateCriteria.yearsInThePast
        },
        fee: fee.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
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
      fee
    }: AminoMsgCreate["value"]): MsgCreate => {
      return {
        curator,
        name,
        description,
        exponent,
        disableAutoRetire: disable_auto_retire,
        creditTypeAbbrev: credit_type_abbrev,
        allowedClasses: allowed_classes,
        dateCriteria: {
          minStartDate: date_criteria.min_start_date,
          startDateWindow: {
            seconds: Long.fromNumber(Math.floor(parseInt(date_criteria.start_date_window) / 1_000_000_000)),
            nanos: parseInt(date_criteria.start_date_window) % 1_000_000_000
          },
          yearsInThePast: date_criteria.years_in_the_past
        },
        fee: fee.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/regen.ecocredit.basket.v1.MsgPut": {
    aminoType: "regen.basket/MsgPut",
    toAmino: ({
      owner,
      basketDenom,
      credits
    }: MsgPut): AminoMsgPut["value"] => {
      return {
        owner,
        basket_denom: basketDenom,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      basket_denom,
      credits
    }: AminoMsgPut["value"]): MsgPut => {
      return {
        owner,
        basketDenom: basket_denom,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/regen.ecocredit.basket.v1.MsgTake": {
    aminoType: "regen.basket/MsgTake",
    toAmino: ({
      owner,
      basketDenom,
      amount,
      retirementLocation,
      retireOnTake,
      retirementJurisdiction,
      retirementReason
    }: MsgTake): AminoMsgTake["value"] => {
      return {
        owner,
        basket_denom: basketDenom,
        amount,
        retirement_location: retirementLocation,
        retire_on_take: retireOnTake,
        retirement_jurisdiction: retirementJurisdiction,
        retirement_reason: retirementReason
      };
    },
    fromAmino: ({
      owner,
      basket_denom,
      amount,
      retirement_location,
      retire_on_take,
      retirement_jurisdiction,
      retirement_reason
    }: AminoMsgTake["value"]): MsgTake => {
      return {
        owner,
        basketDenom: basket_denom,
        amount,
        retirementLocation: retirement_location,
        retireOnTake: retire_on_take,
        retirementJurisdiction: retirement_jurisdiction,
        retirementReason: retirement_reason
      };
    }
  },
  "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
    aminoType: "regen.basket/MsgUpdateBasketFee",
    toAmino: ({
      authority,
      fee
    }: MsgUpdateBasketFee): AminoMsgUpdateBasketFee["value"] => {
      return {
        authority,
        fee: {
          denom: fee.denom,
          amount: Long.fromValue(fee.amount).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      fee
    }: AminoMsgUpdateBasketFee["value"]): MsgUpdateBasketFee => {
      return {
        authority,
        fee: {
          denom: fee.denom,
          amount: fee.amount
        }
      };
    }
  },
  "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
    aminoType: "regen.basket/MsgUpdateCurator",
    toAmino: ({
      curator,
      denom,
      newCurator
    }: MsgUpdateCurator): AminoMsgUpdateCurator["value"] => {
      return {
        curator,
        denom,
        new_curator: newCurator
      };
    },
    fromAmino: ({
      curator,
      denom,
      new_curator
    }: AminoMsgUpdateCurator["value"]): MsgUpdateCurator => {
      return {
        curator,
        denom,
        newCurator: new_curator
      };
    }
  },
  "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
    aminoType: "regen.basket/MsgUpdateDateCriteria",
    toAmino: ({
      authority,
      denom,
      newDateCriteria
    }: MsgUpdateDateCriteria): AminoMsgUpdateDateCriteria["value"] => {
      return {
        authority,
        denom,
        new_date_criteria: {
          min_start_date: newDateCriteria.minStartDate,
          start_date_window: (newDateCriteria.startDateWindow * 1_000_000_000).toString(),
          years_in_the_past: newDateCriteria.yearsInThePast
        }
      };
    },
    fromAmino: ({
      authority,
      denom,
      new_date_criteria
    }: AminoMsgUpdateDateCriteria["value"]): MsgUpdateDateCriteria => {
      return {
        authority,
        denom,
        newDateCriteria: {
          minStartDate: new_date_criteria.min_start_date,
          startDateWindow: {
            seconds: Long.fromNumber(Math.floor(parseInt(new_date_criteria.start_date_window) / 1_000_000_000)),
            nanos: parseInt(new_date_criteria.start_date_window) % 1_000_000_000
          },
          yearsInThePast: new_date_criteria.years_in_the_past
        }
      };
    }
  }
};