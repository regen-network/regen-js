"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: "regen.marketplace/MsgSell",
        toAmino: tx_1.MsgSell.toAmino,
        fromAmino: tx_1.MsgSell.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: "regen.marketplace/MsgUpdateSellOrders",
        toAmino: tx_1.MsgUpdateSellOrders.toAmino,
        fromAmino: tx_1.MsgUpdateSellOrders.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: "regen.marketplace/MsgCancelSellOrder",
        toAmino: tx_1.MsgCancelSellOrder.toAmino,
        fromAmino: tx_1.MsgCancelSellOrder.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: "regen.marketplace/MsgBuyDirect",
        toAmino: tx_1.MsgBuyDirect.toAmino,
        fromAmino: tx_1.MsgBuyDirect.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
        aminoType: "regen.marketplace/MsgAddAllowedDenom",
        toAmino: tx_1.MsgAddAllowedDenom.toAmino,
        fromAmino: tx_1.MsgAddAllowedDenom.fromAmino
    },
    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
        aminoType: "regen.marketplace/MsgRemoveAllowedDenom",
        toAmino: tx_1.MsgRemoveAllowedDenom.toAmino,
        fromAmino: tx_1.MsgRemoveAllowedDenom.fromAmino
    }
};
