"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: "regen.basket/MsgCreate",
        toAmino: tx_1.MsgCreate.toAmino,
        fromAmino: tx_1.MsgCreate.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: "regen.basket/MsgPut",
        toAmino: tx_1.MsgPut.toAmino,
        fromAmino: tx_1.MsgPut.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: "regen.basket/MsgTake",
        toAmino: tx_1.MsgTake.toAmino,
        fromAmino: tx_1.MsgTake.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
        aminoType: "regen.basket/MsgUpdateBasketFee",
        toAmino: tx_1.MsgUpdateBasketFee.toAmino,
        fromAmino: tx_1.MsgUpdateBasketFee.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
        aminoType: "regen.basket/MsgUpdateCurator",
        toAmino: tx_1.MsgUpdateCurator.toAmino,
        fromAmino: tx_1.MsgUpdateCurator.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
        aminoType: "regen.basket/MsgUpdateDateCriteria",
        toAmino: tx_1.MsgUpdateDateCriteria.toAmino,
        fromAmino: tx_1.MsgUpdateDateCriteria.fromAmino
    }
};
