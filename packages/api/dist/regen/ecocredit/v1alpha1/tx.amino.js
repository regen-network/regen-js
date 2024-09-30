"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.v1alpha1.MsgCreateClass": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgCreateClass",
        toAmino: tx_1.MsgCreateClass.toAmino,
        fromAmino: tx_1.MsgCreateClass.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
        toAmino: tx_1.MsgCreateBatch.toAmino,
        fromAmino: tx_1.MsgCreateBatch.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgSend": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgSend",
        toAmino: tx_1.MsgSend.toAmino,
        fromAmino: tx_1.MsgSend.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgRetire": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgRetire",
        toAmino: tx_1.MsgRetire.toAmino,
        fromAmino: tx_1.MsgRetire.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgCancel": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgCancel",
        toAmino: tx_1.MsgCancel.toAmino,
        fromAmino: tx_1.MsgCancel.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
        toAmino: tx_1.MsgUpdateClassAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateClassAdmin.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
        toAmino: tx_1.MsgUpdateClassIssuers.toAmino,
        fromAmino: tx_1.MsgUpdateClassIssuers.fromAmino
    },
    "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
        aminoType: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
        toAmino: tx_1.MsgUpdateClassMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateClassMetadata.fromAmino
    }
};
