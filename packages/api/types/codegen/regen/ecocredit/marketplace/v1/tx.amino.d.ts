import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect, MsgAddAllowedDenom, MsgRemoveAllowedDenom } from "./tx";
export declare const AminoConverter: {
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: (message: MsgSell) => import("./tx").MsgSellAmino;
        fromAmino: (object: import("./tx").MsgSellAmino) => MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: (message: MsgUpdateSellOrders) => import("./tx").MsgUpdateSellOrdersAmino;
        fromAmino: (object: import("./tx").MsgUpdateSellOrdersAmino) => MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelSellOrder) => import("./tx").MsgCancelSellOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelSellOrderAmino) => MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: (message: MsgBuyDirect) => import("./tx").MsgBuyDirectAmino;
        fromAmino: (object: import("./tx").MsgBuyDirectAmino) => MsgBuyDirect;
    };
    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
        aminoType: string;
        toAmino: (message: MsgAddAllowedDenom) => import("./tx").MsgAddAllowedDenomAmino;
        fromAmino: (object: import("./tx").MsgAddAllowedDenomAmino) => MsgAddAllowedDenom;
    };
    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
        aminoType: string;
        toAmino: (message: MsgRemoveAllowedDenom) => import("./tx").MsgRemoveAllowedDenomAmino;
        fromAmino: (object: import("./tx").MsgRemoveAllowedDenomAmino) => MsgRemoveAllowedDenom;
    };
};
