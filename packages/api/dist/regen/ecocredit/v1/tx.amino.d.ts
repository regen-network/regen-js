import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata, MsgUpdateBatchMetadata, MsgBridge, MsgBridgeReceive, MsgAddCreditType, MsgSetClassCreatorAllowlist, MsgAddClassCreator, MsgRemoveClassCreator, MsgUpdateClassFee, MsgAddAllowedBridgeChain, MsgRemoveAllowedBridgeChain } from "./tx";
export declare const AminoConverter: {
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: string;
        toAmino: (message: MsgCreateClass) => import("./tx").MsgCreateClassAmino;
        fromAmino: (object: import("./tx").MsgCreateClassAmino) => MsgCreateClass;
    };
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: string;
        toAmino: (message: MsgCreateProject) => import("./tx").MsgCreateProjectAmino;
        fromAmino: (object: import("./tx").MsgCreateProjectAmino) => MsgCreateProject;
    };
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: string;
        toAmino: (message: MsgCreateBatch) => import("./tx").MsgCreateBatchAmino;
        fromAmino: (object: import("./tx").MsgCreateBatchAmino) => MsgCreateBatch;
    };
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: string;
        toAmino: (message: MsgMintBatchCredits) => import("./tx").MsgMintBatchCreditsAmino;
        fromAmino: (object: import("./tx").MsgMintBatchCreditsAmino) => MsgMintBatchCredits;
    };
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: string;
        toAmino: (message: MsgSealBatch) => import("./tx").MsgSealBatchAmino;
        fromAmino: (object: import("./tx").MsgSealBatchAmino) => MsgSealBatch;
    };
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: string;
        toAmino: (message: MsgSend) => import("./tx").MsgSendAmino;
        fromAmino: (object: import("./tx").MsgSendAmino) => MsgSend;
    };
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: string;
        toAmino: (message: MsgRetire) => import("./tx").MsgRetireAmino;
        fromAmino: (object: import("./tx").MsgRetireAmino) => MsgRetire;
    };
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: string;
        toAmino: (message: MsgCancel) => import("./tx").MsgCancelAmino;
        fromAmino: (object: import("./tx").MsgCancelAmino) => MsgCancel;
    };
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassAdmin) => import("./tx").MsgUpdateClassAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassAdminAmino) => MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassIssuers) => import("./tx").MsgUpdateClassIssuersAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassIssuersAmino) => MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassMetadata) => import("./tx").MsgUpdateClassMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassMetadataAmino) => MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateProjectAdmin) => import("./tx").MsgUpdateProjectAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateProjectAdminAmino) => MsgUpdateProjectAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateProjectMetadata) => import("./tx").MsgUpdateProjectMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateProjectMetadataAmino) => MsgUpdateProjectMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateBatchMetadata) => import("./tx").MsgUpdateBatchMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateBatchMetadataAmino) => MsgUpdateBatchMetadata;
    };
    "/regen.ecocredit.v1.MsgBridge": {
        aminoType: string;
        toAmino: (message: MsgBridge) => import("./tx").MsgBridgeAmino;
        fromAmino: (object: import("./tx").MsgBridgeAmino) => MsgBridge;
    };
    "/regen.ecocredit.v1.MsgBridgeReceive": {
        aminoType: string;
        toAmino: (message: MsgBridgeReceive) => import("./tx").MsgBridgeReceiveAmino;
        fromAmino: (object: import("./tx").MsgBridgeReceiveAmino) => MsgBridgeReceive;
    };
    "/regen.ecocredit.v1.MsgAddCreditType": {
        aminoType: string;
        toAmino: (message: MsgAddCreditType) => import("./tx").MsgAddCreditTypeAmino;
        fromAmino: (object: import("./tx").MsgAddCreditTypeAmino) => MsgAddCreditType;
    };
    "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
        aminoType: string;
        toAmino: (message: MsgSetClassCreatorAllowlist) => import("./tx").MsgSetClassCreatorAllowlistAmino;
        fromAmino: (object: import("./tx").MsgSetClassCreatorAllowlistAmino) => MsgSetClassCreatorAllowlist;
    };
    "/regen.ecocredit.v1.MsgAddClassCreator": {
        aminoType: string;
        toAmino: (message: MsgAddClassCreator) => import("./tx").MsgAddClassCreatorAmino;
        fromAmino: (object: import("./tx").MsgAddClassCreatorAmino) => MsgAddClassCreator;
    };
    "/regen.ecocredit.v1.MsgRemoveClassCreator": {
        aminoType: string;
        toAmino: (message: MsgRemoveClassCreator) => import("./tx").MsgRemoveClassCreatorAmino;
        fromAmino: (object: import("./tx").MsgRemoveClassCreatorAmino) => MsgRemoveClassCreator;
    };
    "/regen.ecocredit.v1.MsgUpdateClassFee": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassFee) => import("./tx").MsgUpdateClassFeeAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassFeeAmino) => MsgUpdateClassFee;
    };
    "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
        aminoType: string;
        toAmino: (message: MsgAddAllowedBridgeChain) => import("./tx").MsgAddAllowedBridgeChainAmino;
        fromAmino: (object: import("./tx").MsgAddAllowedBridgeChainAmino) => MsgAddAllowedBridgeChain;
    };
    "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
        aminoType: string;
        toAmino: (message: MsgRemoveAllowedBridgeChain) => import("./tx").MsgRemoveAllowedBridgeChainAmino;
        fromAmino: (object: import("./tx").MsgRemoveAllowedBridgeChainAmino) => MsgRemoveAllowedBridgeChain;
    };
};
