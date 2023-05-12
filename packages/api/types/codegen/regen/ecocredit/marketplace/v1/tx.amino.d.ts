import { AminoMsg } from "@cosmjs/amino";
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect, MsgAddAllowedDenom, MsgRemoveAllowedDenom } from "./tx";
export interface AminoMsgSell extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgSell";
    value: {
        seller: string;
        orders: {
            batch_denom: string;
            quantity: string;
            ask_price: {
                denom: string;
                amount: string;
            };
            disable_auto_retire: boolean;
            expiration: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export interface AminoMsgUpdateSellOrders extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
    value: {
        seller: string;
        updates: {
            sell_order_id: string;
            new_quantity: string;
            new_ask_price: {
                denom: string;
                amount: string;
            };
            disable_auto_retire: boolean;
            new_expiration: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export interface AminoMsgCancelSellOrder extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
    value: {
        seller: string;
        sell_order_id: string;
    };
}
export interface AminoMsgBuyDirect extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgBuyDirect";
    value: {
        buyer: string;
        orders: {
            batch_denom: string;
            quantity: string;
            ask_price: {
                denom: string;
                amount: string;
            };
            disable_auto_retire: boolean;
            expiration: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export interface AminoMsgAddAllowedDenom extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom";
    value: {
        authority: string;
        bank_denom: string;
        display_denom: string;
        exponent: number;
    };
}
export interface AminoMsgRemoveAllowedDenom extends AminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom";
    value: {
        authority: string;
        denom: string;
    };
}
export declare const AminoConverter: {
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: ({ seller, orders }: MsgSell) => AminoMsgSell["value"];
        fromAmino: ({ seller, orders }: AminoMsgSell["value"]) => MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: ({ seller, updates }: MsgUpdateSellOrders) => AminoMsgUpdateSellOrders["value"];
        fromAmino: ({ seller, updates }: AminoMsgUpdateSellOrders["value"]) => MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: ({ seller, sellOrderId }: MsgCancelSellOrder) => AminoMsgCancelSellOrder["value"];
        fromAmino: ({ seller, sell_order_id }: AminoMsgCancelSellOrder["value"]) => MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: ({ buyer, orders }: MsgBuyDirect) => AminoMsgBuyDirect["value"];
        fromAmino: ({ buyer, orders }: AminoMsgBuyDirect["value"]) => MsgBuyDirect;
    };
    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
        aminoType: string;
        toAmino: ({ authority, bankDenom, displayDenom, exponent }: MsgAddAllowedDenom) => AminoMsgAddAllowedDenom["value"];
        fromAmino: ({ authority, bank_denom, display_denom, exponent }: AminoMsgAddAllowedDenom["value"]) => MsgAddAllowedDenom;
    };
    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
        aminoType: string;
        toAmino: ({ authority, denom }: MsgRemoveAllowedDenom) => AminoMsgRemoveAllowedDenom["value"];
        fromAmino: ({ authority, denom }: AminoMsgRemoveAllowedDenom["value"]) => MsgRemoveAllowedDenom;
    };
};
