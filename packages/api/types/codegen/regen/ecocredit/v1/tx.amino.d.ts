import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata, MsgUpdateBatchMetadata, MsgBridge, MsgBridgeReceive, MsgAddCreditType, MsgSetClassCreatorAllowlist, MsgAddClassCreator, MsgRemoveClassCreator, MsgUpdateClassFee, MsgAddAllowedBridgeChain, MsgRemoveAllowedBridgeChain } from "./tx";
export interface AminoMsgCreateClass extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateClass";
    value: {
        admin: string;
        issuers: string[];
        metadata: string;
        credit_type_abbrev: string;
        fee: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgCreateProject extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateProject";
    value: {
        admin: string;
        class_id: string;
        metadata: string;
        jurisdiction: string;
        reference_id: string;
    };
}
export interface AminoMsgCreateBatch extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateBatch";
    value: {
        issuer: string;
        project_id: string;
        issuance: {
            recipient: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_jurisdiction: string;
            retirement_reason: string;
        }[];
        metadata: string;
        start_date: {
            seconds: string;
            nanos: number;
        };
        end_date: {
            seconds: string;
            nanos: number;
        };
        open: boolean;
        origin_tx: {
            id: string;
            source: string;
            contract: string;
            note: string;
        };
    };
}
export interface AminoMsgMintBatchCredits extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgMintBatchCredits";
    value: {
        issuer: string;
        batch_denom: string;
        issuance: {
            recipient: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_jurisdiction: string;
            retirement_reason: string;
        }[];
        origin_tx: {
            id: string;
            source: string;
            contract: string;
            note: string;
        };
    };
}
export interface AminoMsgSealBatch extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgSealBatch";
    value: {
        issuer: string;
        batch_denom: string;
    };
}
export interface AminoMsgSend extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgSend";
    value: {
        sender: string;
        recipient: string;
        credits: {
            batch_denom: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_jurisdiction: string;
            retirement_reason: string;
        }[];
    };
}
export interface AminoMsgRetire extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgRetire";
    value: {
        owner: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
        jurisdiction: string;
        reason: string;
    };
}
export interface AminoMsgCancel extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCancel";
    value: {
        owner: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
        reason: string;
    };
}
export interface AminoMsgUpdateClassAdmin extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
    value: {
        admin: string;
        class_id: string;
        new_admin: string;
    };
}
export interface AminoMsgUpdateClassIssuers extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
    value: {
        admin: string;
        class_id: string;
        add_issuers: string[];
        remove_issuers: string[];
    };
}
export interface AminoMsgUpdateClassMetadata extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
    value: {
        admin: string;
        class_id: string;
        new_metadata: string;
    };
}
export interface AminoMsgUpdateProjectAdmin extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
    value: {
        admin: string;
        project_id: string;
        new_admin: string;
    };
}
export interface AminoMsgUpdateProjectMetadata extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
    value: {
        admin: string;
        project_id: string;
        new_metadata: string;
    };
}
export interface AminoMsgUpdateBatchMetadata extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateBatchMetadata";
    value: {
        issuer: string;
        batch_denom: string;
        new_metadata: string;
    };
}
export interface AminoMsgBridge extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgBridge";
    value: {
        owner: string;
        target: string;
        recipient: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgBridgeReceive extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgBridgeReceive";
    value: {
        issuer: string;
        class_id: string;
        project: {
            reference_id: string;
            jurisdiction: string;
            metadata: string;
        };
        batch: {
            recipient: string;
            amount: string;
            start_date: {
                seconds: string;
                nanos: number;
            };
            end_date: {
                seconds: string;
                nanos: number;
            };
            metadata: string;
        };
        origin_tx: {
            id: string;
            source: string;
            contract: string;
            note: string;
        };
    };
}
export interface AminoMsgAddCreditType extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgAddCreditType";
    value: {
        authority: string;
        credit_type: {
            abbreviation: string;
            name: string;
            unit: string;
            precision: number;
        };
    };
}
export interface AminoMsgSetClassCreatorAllowlist extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist";
    value: {
        authority: string;
        enabled: boolean;
    };
}
export interface AminoMsgAddClassCreator extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgAddClassCreator";
    value: {
        authority: string;
        creator: string;
    };
}
export interface AminoMsgRemoveClassCreator extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgRemoveClassCreator";
    value: {
        authority: string;
        creator: string;
    };
}
export interface AminoMsgUpdateClassFee extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassFee";
    value: {
        authority: string;
        fee: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgAddAllowedBridgeChain extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain";
    value: {
        authority: string;
        chain_name: string;
    };
}
export interface AminoMsgRemoveAllowedBridgeChain extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain";
    value: {
        authority: string;
        chain_name: string;
    };
}
export declare const AminoConverter: {
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: string;
        toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: MsgCreateClass) => AminoMsgCreateClass["value"];
        fromAmino: ({ admin, issuers, metadata, credit_type_abbrev, fee }: AminoMsgCreateClass["value"]) => MsgCreateClass;
    };
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: string;
        toAmino: ({ admin, classId, metadata, jurisdiction, referenceId }: MsgCreateProject) => AminoMsgCreateProject["value"];
        fromAmino: ({ admin, class_id, metadata, jurisdiction, reference_id }: AminoMsgCreateProject["value"]) => MsgCreateProject;
    };
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: string;
        toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx }: MsgCreateBatch) => AminoMsgCreateBatch["value"];
        fromAmino: ({ issuer, project_id, issuance, metadata, start_date, end_date, open, origin_tx }: AminoMsgCreateBatch["value"]) => MsgCreateBatch;
    };
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom, issuance, originTx }: MsgMintBatchCredits) => AminoMsgMintBatchCredits["value"];
        fromAmino: ({ issuer, batch_denom, issuance, origin_tx }: AminoMsgMintBatchCredits["value"]) => MsgMintBatchCredits;
    };
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom }: MsgSealBatch) => AminoMsgSealBatch["value"];
        fromAmino: ({ issuer, batch_denom }: AminoMsgSealBatch["value"]) => MsgSealBatch;
    };
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, recipient, credits }: MsgSend) => AminoMsgSend["value"];
        fromAmino: ({ sender, recipient, credits }: AminoMsgSend["value"]) => MsgSend;
    };
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: string;
        toAmino: ({ owner, credits, jurisdiction, reason }: MsgRetire) => AminoMsgRetire["value"];
        fromAmino: ({ owner, credits, jurisdiction, reason }: AminoMsgRetire["value"]) => MsgRetire;
    };
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: string;
        toAmino: ({ owner, credits, reason }: MsgCancel) => AminoMsgCancel["value"];
        fromAmino: ({ owner, credits, reason }: AminoMsgCancel["value"]) => MsgCancel;
    };
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: ({ admin, classId, newAdmin }: MsgUpdateClassAdmin) => AminoMsgUpdateClassAdmin["value"];
        fromAmino: ({ admin, class_id, new_admin }: AminoMsgUpdateClassAdmin["value"]) => MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: ({ admin, classId, addIssuers, removeIssuers }: MsgUpdateClassIssuers) => AminoMsgUpdateClassIssuers["value"];
        fromAmino: ({ admin, class_id, add_issuers, remove_issuers }: AminoMsgUpdateClassIssuers["value"]) => MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: ({ admin, classId, newMetadata }: MsgUpdateClassMetadata) => AminoMsgUpdateClassMetadata["value"];
        fromAmino: ({ admin, class_id, new_metadata }: AminoMsgUpdateClassMetadata["value"]) => MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: string;
        toAmino: ({ admin, projectId, newAdmin }: MsgUpdateProjectAdmin) => AminoMsgUpdateProjectAdmin["value"];
        fromAmino: ({ admin, project_id, new_admin }: AminoMsgUpdateProjectAdmin["value"]) => MsgUpdateProjectAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: string;
        toAmino: ({ admin, projectId, newMetadata }: MsgUpdateProjectMetadata) => AminoMsgUpdateProjectMetadata["value"];
        fromAmino: ({ admin, project_id, new_metadata }: AminoMsgUpdateProjectMetadata["value"]) => MsgUpdateProjectMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom, newMetadata }: MsgUpdateBatchMetadata) => AminoMsgUpdateBatchMetadata["value"];
        fromAmino: ({ issuer, batch_denom, new_metadata }: AminoMsgUpdateBatchMetadata["value"]) => MsgUpdateBatchMetadata;
    };
    "/regen.ecocredit.v1.MsgBridge": {
        aminoType: string;
        toAmino: ({ owner, target, recipient, credits }: MsgBridge) => AminoMsgBridge["value"];
        fromAmino: ({ owner, target, recipient, credits }: AminoMsgBridge["value"]) => MsgBridge;
    };
    "/regen.ecocredit.v1.MsgBridgeReceive": {
        aminoType: string;
        toAmino: ({ issuer, classId, project, batch, originTx }: MsgBridgeReceive) => AminoMsgBridgeReceive["value"];
        fromAmino: ({ issuer, class_id, project, batch, origin_tx }: AminoMsgBridgeReceive["value"]) => MsgBridgeReceive;
    };
    "/regen.ecocredit.v1.MsgAddCreditType": {
        aminoType: string;
        toAmino: ({ authority, creditType }: MsgAddCreditType) => AminoMsgAddCreditType["value"];
        fromAmino: ({ authority, credit_type }: AminoMsgAddCreditType["value"]) => MsgAddCreditType;
    };
    "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
        aminoType: string;
        toAmino: ({ authority, enabled }: MsgSetClassCreatorAllowlist) => AminoMsgSetClassCreatorAllowlist["value"];
        fromAmino: ({ authority, enabled }: AminoMsgSetClassCreatorAllowlist["value"]) => MsgSetClassCreatorAllowlist;
    };
    "/regen.ecocredit.v1.MsgAddClassCreator": {
        aminoType: string;
        toAmino: ({ authority, creator }: MsgAddClassCreator) => AminoMsgAddClassCreator["value"];
        fromAmino: ({ authority, creator }: AminoMsgAddClassCreator["value"]) => MsgAddClassCreator;
    };
    "/regen.ecocredit.v1.MsgRemoveClassCreator": {
        aminoType: string;
        toAmino: ({ authority, creator }: MsgRemoveClassCreator) => AminoMsgRemoveClassCreator["value"];
        fromAmino: ({ authority, creator }: AminoMsgRemoveClassCreator["value"]) => MsgRemoveClassCreator;
    };
    "/regen.ecocredit.v1.MsgUpdateClassFee": {
        aminoType: string;
        toAmino: ({ authority, fee }: MsgUpdateClassFee) => AminoMsgUpdateClassFee["value"];
        fromAmino: ({ authority, fee }: AminoMsgUpdateClassFee["value"]) => MsgUpdateClassFee;
    };
    "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
        aminoType: string;
        toAmino: ({ authority, chainName }: MsgAddAllowedBridgeChain) => AminoMsgAddAllowedBridgeChain["value"];
        fromAmino: ({ authority, chain_name }: AminoMsgAddAllowedBridgeChain["value"]) => MsgAddAllowedBridgeChain;
    };
    "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
        aminoType: string;
        toAmino: ({ authority, chainName }: MsgRemoveAllowedBridgeChain) => AminoMsgRemoveAllowedBridgeChain["value"];
        fromAmino: ({ authority, chain_name }: AminoMsgRemoveAllowedBridgeChain["value"]) => MsgRemoveAllowedBridgeChain;
    };
};
