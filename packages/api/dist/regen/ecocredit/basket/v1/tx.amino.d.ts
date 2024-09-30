import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export declare const AminoConverter: {
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: string;
        toAmino: (message: MsgCreate) => import("./tx").MsgCreateAmino;
        fromAmino: (object: import("./tx").MsgCreateAmino) => MsgCreate;
    };
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: string;
        toAmino: (message: MsgPut) => import("./tx").MsgPutAmino;
        fromAmino: (object: import("./tx").MsgPutAmino) => MsgPut;
    };
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: string;
        toAmino: (message: MsgTake) => import("./tx").MsgTakeAmino;
        fromAmino: (object: import("./tx").MsgTakeAmino) => MsgTake;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
        aminoType: string;
        toAmino: (message: MsgUpdateBasketFee) => import("./tx").MsgUpdateBasketFeeAmino;
        fromAmino: (object: import("./tx").MsgUpdateBasketFeeAmino) => MsgUpdateBasketFee;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
        aminoType: string;
        toAmino: (message: MsgUpdateCurator) => import("./tx").MsgUpdateCuratorAmino;
        fromAmino: (object: import("./tx").MsgUpdateCuratorAmino) => MsgUpdateCurator;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
        aminoType: string;
        toAmino: (message: MsgUpdateDateCriteria) => import("./tx").MsgUpdateDateCriteriaAmino;
        fromAmino: (object: import("./tx").MsgUpdateDateCriteriaAmino) => MsgUpdateDateCriteria;
    };
};
