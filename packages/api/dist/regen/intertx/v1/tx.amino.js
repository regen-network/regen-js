"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.intertx.v1.MsgRegisterAccount": {
        aminoType: "/regen.intertx.v1.MsgRegisterAccount",
        toAmino: tx_1.MsgRegisterAccount.toAmino,
        fromAmino: tx_1.MsgRegisterAccount.fromAmino
    },
    "/regen.intertx.v1.MsgSubmitTx": {
        aminoType: "/regen.intertx.v1.MsgSubmitTx",
        toAmino: tx_1.MsgSubmitTx.toAmino,
        fromAmino: tx_1.MsgSubmitTx.fromAmino
    }
};
