import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClass, MsgCreateBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata } from "./tx";
export interface AminoMsgCreateClass extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCreateClass";
    value: {
        admin: string;
        issuers: string[];
        metadata: Uint8Array;
        credit_type_name: string;
    };
}
export interface AminoMsgCreateBatch extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCreateBatch";
    value: {
        issuer: string;
        class_id: string;
        issuance: {
            recipient: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_location: string;
        }[];
        metadata: Uint8Array;
        start_date: {
            seconds: string;
            nanos: number;
        };
        end_date: {
            seconds: string;
            nanos: number;
        };
        project_location: string;
    };
}
export interface AminoMsgSend extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgSend";
    value: {
        sender: string;
        recipient: string;
        credits: {
            batch_denom: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_location: string;
        }[];
    };
}
export interface AminoMsgRetire extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgRetire";
    value: {
        holder: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
        location: string;
    };
}
export interface AminoMsgCancel extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCancel";
    value: {
        holder: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgUpdateClassAdmin extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin";
    value: {
        admin: string;
        class_id: string;
        new_admin: string;
    };
}
export interface AminoMsgUpdateClassIssuers extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers";
    value: {
        admin: string;
        class_id: string;
        issuers: string[];
    };
}
export interface AminoMsgUpdateClassMetadata extends AminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata";
    value: {
        admin: string;
        class_id: string;
        metadata: Uint8Array;
    };
}
export declare const AminoConverter: {
    "/regen.ecocredit.v1alpha1.MsgCreateClass": {
        aminoType: string;
        toAmino: ({ admin, issuers, metadata, creditTypeName }: MsgCreateClass) => AminoMsgCreateClass["value"];
        fromAmino: ({ admin, issuers, metadata, credit_type_name }: AminoMsgCreateClass["value"]) => MsgCreateClass;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
        aminoType: string;
        toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: MsgCreateBatch) => AminoMsgCreateBatch["value"];
        fromAmino: ({ issuer, class_id, issuance, metadata, start_date, end_date, project_location }: AminoMsgCreateBatch["value"]) => MsgCreateBatch;
    };
    "/regen.ecocredit.v1alpha1.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, recipient, credits }: MsgSend) => AminoMsgSend["value"];
        fromAmino: ({ sender, recipient, credits }: AminoMsgSend["value"]) => MsgSend;
    };
    "/regen.ecocredit.v1alpha1.MsgRetire": {
        aminoType: string;
        toAmino: ({ holder, credits, location }: MsgRetire) => AminoMsgRetire["value"];
        fromAmino: ({ holder, credits, location }: AminoMsgRetire["value"]) => MsgRetire;
    };
    "/regen.ecocredit.v1alpha1.MsgCancel": {
        aminoType: string;
        toAmino: ({ holder, credits }: MsgCancel) => AminoMsgCancel["value"];
        fromAmino: ({ holder, credits }: AminoMsgCancel["value"]) => MsgCancel;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: ({ admin, classId, newAdmin }: MsgUpdateClassAdmin) => AminoMsgUpdateClassAdmin["value"];
        fromAmino: ({ admin, class_id, new_admin }: AminoMsgUpdateClassAdmin["value"]) => MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: ({ admin, classId, issuers }: MsgUpdateClassIssuers) => AminoMsgUpdateClassIssuers["value"];
        fromAmino: ({ admin, class_id, issuers }: AminoMsgUpdateClassIssuers["value"]) => MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: ({ admin, classId, metadata }: MsgUpdateClassMetadata) => AminoMsgUpdateClassMetadata["value"];
        fromAmino: ({ admin, class_id, metadata }: AminoMsgUpdateClassMetadata["value"]) => MsgUpdateClassMetadata;
    };
};
