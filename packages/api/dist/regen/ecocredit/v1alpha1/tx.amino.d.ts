import { MsgCreateClass, MsgCreateBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata } from "./tx";
export declare const AminoConverter: {
    "/regen.ecocredit.v1alpha1.MsgCreateClass": {
        aminoType: string;
        toAmino: (message: MsgCreateClass) => import("./tx").MsgCreateClassAmino;
        fromAmino: (object: import("./tx").MsgCreateClassAmino) => MsgCreateClass;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
        aminoType: string;
        toAmino: (message: MsgCreateBatch) => import("./tx").MsgCreateBatchAmino;
        fromAmino: (object: import("./tx").MsgCreateBatchAmino) => MsgCreateBatch;
    };
    "/regen.ecocredit.v1alpha1.MsgSend": {
        aminoType: string;
        toAmino: (message: MsgSend) => import("./tx").MsgSendAmino;
        fromAmino: (object: import("./tx").MsgSendAmino) => MsgSend;
    };
    "/regen.ecocredit.v1alpha1.MsgRetire": {
        aminoType: string;
        toAmino: (message: MsgRetire) => import("./tx").MsgRetireAmino;
        fromAmino: (object: import("./tx").MsgRetireAmino) => MsgRetire;
    };
    "/regen.ecocredit.v1alpha1.MsgCancel": {
        aminoType: string;
        toAmino: (message: MsgCancel) => import("./tx").MsgCancelAmino;
        fromAmino: (object: import("./tx").MsgCancelAmino) => MsgCancel;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassAdmin) => import("./tx").MsgUpdateClassAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassAdminAmino) => MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassIssuers) => import("./tx").MsgUpdateClassIssuersAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassIssuersAmino) => MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateClassMetadata) => import("./tx").MsgUpdateClassMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateClassMetadataAmino) => MsgUpdateClassMetadata;
    };
};
