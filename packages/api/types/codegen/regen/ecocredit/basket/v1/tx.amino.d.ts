import { AminoMsg } from "@cosmjs/amino";
import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export interface AminoMsgCreate extends AminoMsg {
    type: "/regen.ecocredit.basket.v1.MsgCreate";
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
    type: "/regen.ecocredit.basket.v1.MsgPut";
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
    type: "/regen.ecocredit.basket.v1.MsgTake";
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
    type: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee";
    value: {
        authority: string;
        fee: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgUpdateCurator extends AminoMsg {
    type: "/regen.ecocredit.basket.v1.MsgUpdateCurator";
    value: {
        curator: string;
        denom: string;
        new_curator: string;
    };
}
export interface AminoMsgUpdateDateCriteria extends AminoMsg {
    type: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria";
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
export declare const AminoConverter: {
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: string;
        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: MsgCreate) => AminoMsgCreate["value"];
        fromAmino: ({ curator, name, description, exponent, disable_auto_retire, credit_type_abbrev, allowed_classes, date_criteria, fee }: AminoMsgCreate["value"]) => MsgCreate;
    };
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: string;
        toAmino: ({ owner, basketDenom, credits }: MsgPut) => AminoMsgPut["value"];
        fromAmino: ({ owner, basket_denom, credits }: AminoMsgPut["value"]) => MsgPut;
    };
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: string;
        toAmino: ({ owner, basketDenom, amount, retirementLocation, retireOnTake, retirementJurisdiction, retirementReason }: MsgTake) => AminoMsgTake["value"];
        fromAmino: ({ owner, basket_denom, amount, retirement_location, retire_on_take, retirement_jurisdiction, retirement_reason }: AminoMsgTake["value"]) => MsgTake;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
        aminoType: string;
        toAmino: ({ authority, fee }: MsgUpdateBasketFee) => AminoMsgUpdateBasketFee["value"];
        fromAmino: ({ authority, fee }: AminoMsgUpdateBasketFee["value"]) => MsgUpdateBasketFee;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
        aminoType: string;
        toAmino: ({ curator, denom, newCurator }: MsgUpdateCurator) => AminoMsgUpdateCurator["value"];
        fromAmino: ({ curator, denom, new_curator }: AminoMsgUpdateCurator["value"]) => MsgUpdateCurator;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
        aminoType: string;
        toAmino: ({ authority, denom, newDateCriteria }: MsgUpdateDateCriteria) => AminoMsgUpdateDateCriteria["value"];
        fromAmino: ({ authority, denom, new_date_criteria }: AminoMsgUpdateDateCriteria["value"]) => MsgUpdateDateCriteria;
    };
};
