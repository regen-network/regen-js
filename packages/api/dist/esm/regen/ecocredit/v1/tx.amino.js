//@ts-nocheck
import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata, MsgUpdateBatchMetadata, MsgBridge, MsgBridgeReceive, MsgAddCreditType, MsgSetClassCreatorAllowlist, MsgAddClassCreator, MsgRemoveClassCreator, MsgUpdateClassFee, MsgAddAllowedBridgeChain, MsgRemoveAllowedBridgeChain } from "./tx";
export const AminoConverter = {
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: "regen/MsgCreateClass",
        toAmino: MsgCreateClass.toAmino,
        fromAmino: MsgCreateClass.fromAmino
    },
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: "regen/MsgCreateProject",
        toAmino: MsgCreateProject.toAmino,
        fromAmino: MsgCreateProject.fromAmino
    },
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: "regen/MsgCreateBatch",
        toAmino: MsgCreateBatch.toAmino,
        fromAmino: MsgCreateBatch.fromAmino
    },
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: "regen/MsgMintBatchCredits",
        toAmino: MsgMintBatchCredits.toAmino,
        fromAmino: MsgMintBatchCredits.fromAmino
    },
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: "regen/MsgSealBatch",
        toAmino: MsgSealBatch.toAmino,
        fromAmino: MsgSealBatch.fromAmino
    },
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: "regen/MsgSend",
        toAmino: MsgSend.toAmino,
        fromAmino: MsgSend.fromAmino
    },
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: "regen/MsgRetire",
        toAmino: MsgRetire.toAmino,
        fromAmino: MsgRetire.fromAmino
    },
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: "regen/MsgCancel",
        toAmino: MsgCancel.toAmino,
        fromAmino: MsgCancel.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: "regen/MsgUpdateClassAdmin",
        toAmino: MsgUpdateClassAdmin.toAmino,
        fromAmino: MsgUpdateClassAdmin.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: "regen/MsgUpdateClassIssuers",
        toAmino: MsgUpdateClassIssuers.toAmino,
        fromAmino: MsgUpdateClassIssuers.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: "regen/MsgUpdateClassMetadata",
        toAmino: MsgUpdateClassMetadata.toAmino,
        fromAmino: MsgUpdateClassMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: "regen/MsgUpdateProjectAdmin",
        toAmino: MsgUpdateProjectAdmin.toAmino,
        fromAmino: MsgUpdateProjectAdmin.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: "regen/MsgUpdateProjectMetadata",
        toAmino: MsgUpdateProjectMetadata.toAmino,
        fromAmino: MsgUpdateProjectMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
        aminoType: "regen/MsgUpdateBatchMetadata",
        toAmino: MsgUpdateBatchMetadata.toAmino,
        fromAmino: MsgUpdateBatchMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgBridge": {
        aminoType: "regen/MsgBridge",
        toAmino: MsgBridge.toAmino,
        fromAmino: MsgBridge.fromAmino
    },
    "/regen.ecocredit.v1.MsgBridgeReceive": {
        aminoType: "regen/MsgBridgeReceive",
        toAmino: MsgBridgeReceive.toAmino,
        fromAmino: MsgBridgeReceive.fromAmino
    },
    "/regen.ecocredit.v1.MsgAddCreditType": {
        aminoType: "regen/MsgAddCreditType",
        toAmino: MsgAddCreditType.toAmino,
        fromAmino: MsgAddCreditType.fromAmino
    },
    "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
        aminoType: "regen/MsgSetClassCreatorAllowlist",
        toAmino: MsgSetClassCreatorAllowlist.toAmino,
        fromAmino: MsgSetClassCreatorAllowlist.fromAmino
    },
    "/regen.ecocredit.v1.MsgAddClassCreator": {
        aminoType: "regen/MsgAddClassCreator",
        toAmino: MsgAddClassCreator.toAmino,
        fromAmino: MsgAddClassCreator.fromAmino
    },
    "/regen.ecocredit.v1.MsgRemoveClassCreator": {
        aminoType: "regen/MsgRemoveClassCreator",
        toAmino: MsgRemoveClassCreator.toAmino,
        fromAmino: MsgRemoveClassCreator.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassFee": {
        aminoType: "regen/MsgUpdateClassFee",
        toAmino: MsgUpdateClassFee.toAmino,
        fromAmino: MsgUpdateClassFee.fromAmino
    },
    "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
        aminoType: "regen/MsgAddAllowedBridgeChain",
        toAmino: MsgAddAllowedBridgeChain.toAmino,
        fromAmino: MsgAddAllowedBridgeChain.fromAmino
    },
    "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
        aminoType: "regen/MsgRemoveAllowedBridgeChain",
        toAmino: MsgRemoveAllowedBridgeChain.toAmino,
        fromAmino: MsgRemoveAllowedBridgeChain.fromAmino
    }
};
