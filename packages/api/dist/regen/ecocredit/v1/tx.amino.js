"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: "regen/MsgCreateClass",
        toAmino: tx_1.MsgCreateClass.toAmino,
        fromAmino: tx_1.MsgCreateClass.fromAmino
    },
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: "regen/MsgCreateProject",
        toAmino: tx_1.MsgCreateProject.toAmino,
        fromAmino: tx_1.MsgCreateProject.fromAmino
    },
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: "regen/MsgCreateBatch",
        toAmino: tx_1.MsgCreateBatch.toAmino,
        fromAmino: tx_1.MsgCreateBatch.fromAmino
    },
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: "regen/MsgMintBatchCredits",
        toAmino: tx_1.MsgMintBatchCredits.toAmino,
        fromAmino: tx_1.MsgMintBatchCredits.fromAmino
    },
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: "regen/MsgSealBatch",
        toAmino: tx_1.MsgSealBatch.toAmino,
        fromAmino: tx_1.MsgSealBatch.fromAmino
    },
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: "regen/MsgSend",
        toAmino: tx_1.MsgSend.toAmino,
        fromAmino: tx_1.MsgSend.fromAmino
    },
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: "regen/MsgRetire",
        toAmino: tx_1.MsgRetire.toAmino,
        fromAmino: tx_1.MsgRetire.fromAmino
    },
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: "regen/MsgCancel",
        toAmino: tx_1.MsgCancel.toAmino,
        fromAmino: tx_1.MsgCancel.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: "regen/MsgUpdateClassAdmin",
        toAmino: tx_1.MsgUpdateClassAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateClassAdmin.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: "regen/MsgUpdateClassIssuers",
        toAmino: tx_1.MsgUpdateClassIssuers.toAmino,
        fromAmino: tx_1.MsgUpdateClassIssuers.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: "regen/MsgUpdateClassMetadata",
        toAmino: tx_1.MsgUpdateClassMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateClassMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: "regen/MsgUpdateProjectAdmin",
        toAmino: tx_1.MsgUpdateProjectAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateProjectAdmin.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: "regen/MsgUpdateProjectMetadata",
        toAmino: tx_1.MsgUpdateProjectMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateProjectMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
        aminoType: "regen/MsgUpdateBatchMetadata",
        toAmino: tx_1.MsgUpdateBatchMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateBatchMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgBridge": {
        aminoType: "regen/MsgBridge",
        toAmino: tx_1.MsgBridge.toAmino,
        fromAmino: tx_1.MsgBridge.fromAmino
    },
    "/regen.ecocredit.v1.MsgBridgeReceive": {
        aminoType: "regen/MsgBridgeReceive",
        toAmino: tx_1.MsgBridgeReceive.toAmino,
        fromAmino: tx_1.MsgBridgeReceive.fromAmino
    },
    "/regen.ecocredit.v1.MsgAddCreditType": {
        aminoType: "regen/MsgAddCreditType",
        toAmino: tx_1.MsgAddCreditType.toAmino,
        fromAmino: tx_1.MsgAddCreditType.fromAmino
    },
    "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
        aminoType: "regen/MsgSetClassCreatorAllowlist",
        toAmino: tx_1.MsgSetClassCreatorAllowlist.toAmino,
        fromAmino: tx_1.MsgSetClassCreatorAllowlist.fromAmino
    },
    "/regen.ecocredit.v1.MsgAddClassCreator": {
        aminoType: "regen/MsgAddClassCreator",
        toAmino: tx_1.MsgAddClassCreator.toAmino,
        fromAmino: tx_1.MsgAddClassCreator.fromAmino
    },
    "/regen.ecocredit.v1.MsgRemoveClassCreator": {
        aminoType: "regen/MsgRemoveClassCreator",
        toAmino: tx_1.MsgRemoveClassCreator.toAmino,
        fromAmino: tx_1.MsgRemoveClassCreator.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassFee": {
        aminoType: "regen/MsgUpdateClassFee",
        toAmino: tx_1.MsgUpdateClassFee.toAmino,
        fromAmino: tx_1.MsgUpdateClassFee.fromAmino
    },
    "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
        aminoType: "regen/MsgAddAllowedBridgeChain",
        toAmino: tx_1.MsgAddAllowedBridgeChain.toAmino,
        fromAmino: tx_1.MsgAddAllowedBridgeChain.fromAmino
    },
    "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
        aminoType: "regen/MsgRemoveAllowedBridgeChain",
        toAmino: tx_1.MsgRemoveAllowedBridgeChain.toAmino,
        fromAmino: tx_1.MsgRemoveAllowedBridgeChain.fromAmino
    }
};
