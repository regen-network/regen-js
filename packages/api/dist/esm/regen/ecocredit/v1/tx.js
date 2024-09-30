//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BatchIssuance, OriginTx, Credits } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { CreditType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseMsgAddCreditType() {
    return {
        authority: "",
        creditType: undefined
    };
}
export const MsgAddCreditType = {
    typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.creditType !== undefined) {
            CreditType.encode(message.creditType, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCreditType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.creditType = CreditType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddCreditType();
        message.authority = object.authority ?? "";
        message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddCreditType();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = CreditType.fromAmino(object.credit_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddCreditType.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgAddCreditType",
            value: MsgAddCreditType.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAddCreditType.decode(message.value);
    },
    toProto(message) {
        return MsgAddCreditType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
            value: MsgAddCreditType.encode(message).finish()
        };
    }
};
function createBaseMsgAddCreditTypeResponse() {
    return {};
}
export const MsgAddCreditTypeResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCreditTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgAddCreditTypeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddCreditTypeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddCreditTypeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddCreditTypeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddCreditTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse",
            value: MsgAddCreditTypeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClass() {
    return {
        admin: "",
        issuers: [],
        metadata: "",
        creditTypeAbbrev: "",
        fee: undefined
    };
}
export const MsgCreateClass = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.issuers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(34).string(message.creditTypeAbbrev);
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.issuers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 5:
                    message.fee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClass();
        message.admin = object.admin ?? "";
        message.issuers = object.issuers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClass();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.issuers = object.issuers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.issuers) {
            obj.issuers = message.issuers.map(e => e);
        }
        else {
            obj.issuers = message.issuers;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClass.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCreateClass",
            value: MsgCreateClass.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateClass.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
            value: MsgCreateClass.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClassResponse() {
    return {
        classId: ""
    };
}
export const MsgCreateClassResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClassResponse();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClassResponse();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateClassResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
            value: MsgCreateClassResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProject() {
    return {
        admin: "",
        classId: "",
        metadata: "",
        jurisdiction: "",
        referenceId: ""
    };
}
export const MsgCreateProject = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(34).string(message.jurisdiction);
        }
        if (message.referenceId !== "") {
            writer.uint32(42).string(message.referenceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.jurisdiction = reader.string();
                    break;
                case 5:
                    message.referenceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateProject();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.metadata = object.metadata ?? "";
        message.jurisdiction = object.jurisdiction ?? "";
        message.referenceId = object.referenceId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProject();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateProject.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCreateProject",
            value: MsgCreateProject.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateProject.decode(message.value);
    },
    toProto(message) {
        return MsgCreateProject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
            value: MsgCreateProject.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProjectResponse() {
    return {
        projectId: ""
    };
}
export const MsgCreateProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateProjectResponse();
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProjectResponse();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateProjectResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
            value: MsgCreateProjectResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatch() {
    return {
        issuer: "",
        projectId: "",
        issuance: [],
        metadata: "",
        startDate: undefined,
        endDate: undefined,
        open: false,
        originTx: undefined
    };
}
export const MsgCreateBatch = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        for (const v of message.issuance) {
            BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(56).bool(message.open);
        }
        if (message.originTx !== undefined) {
            OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.open = reader.bool();
                    break;
                case 8:
                    message.originTx = OriginTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBatch();
        message.issuer = object.issuer ?? "";
        message.projectId = object.projectId ?? "";
        message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.open = object.open ?? false;
        message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatch();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        message.issuance = object.issuance?.map(e => BatchIssuance.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
        }
        if (object.open !== undefined && object.open !== null) {
            message.open = object.open;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
        obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBatch.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCreateBatch",
            value: MsgCreateBatch.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateBatch.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
            value: MsgCreateBatch.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatchResponse() {
    return {
        batchDenom: ""
    };
}
export const MsgCreateBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBatchResponse();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatchResponse();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
            value: MsgCreateBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMintBatchCredits() {
    return {
        issuer: "",
        batchDenom: "",
        issuance: [],
        originTx: undefined
    };
}
export const MsgMintBatchCredits = {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        for (const v of message.issuance) {
            BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.originTx !== undefined) {
            OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintBatchCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.originTx = OriginTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMintBatchCredits();
        message.issuer = object.issuer ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.issuance = object.issuance?.map(e => BatchIssuance.fromPartial(e)) || [];
        message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMintBatchCredits();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        message.issuance = object.issuance?.map(e => BatchIssuance.fromAmino(e)) || [];
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintBatchCredits.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgMintBatchCredits",
            value: MsgMintBatchCredits.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMintBatchCredits.decode(message.value);
    },
    toProto(message) {
        return MsgMintBatchCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
            value: MsgMintBatchCredits.encode(message).finish()
        };
    }
};
function createBaseMsgMintBatchCreditsResponse() {
    return {};
}
export const MsgMintBatchCreditsResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintBatchCreditsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgMintBatchCreditsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgMintBatchCreditsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintBatchCreditsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintBatchCreditsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintBatchCreditsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
            value: MsgMintBatchCreditsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSealBatch() {
    return {
        issuer: "",
        batchDenom: ""
    };
}
export const MsgSealBatch = {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSealBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSealBatch();
        message.issuer = object.issuer ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSealBatch();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSealBatch.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgSealBatch",
            value: MsgSealBatch.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSealBatch.decode(message.value);
    },
    toProto(message) {
        return MsgSealBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
            value: MsgSealBatch.encode(message).finish()
        };
    }
};
function createBaseMsgSealBatchResponse() {
    return {};
}
export const MsgSealBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSealBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSealBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSealBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSealBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSealBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSealBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
            value: MsgSealBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSend() {
    return {
        sender: "",
        recipient: "",
        credits: []
    };
}
export const MsgSend = {
    typeUrl: "/regen.ecocredit.v1.MsgSend",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.credits) {
            MsgSend_SendCredits.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.credits.push(MsgSend_SendCredits.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.credits = object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.credits = object.credits?.map(e => MsgSend_SendCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgSend",
            value: MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSend.decode(message.value);
    },
    toProto(message) {
        return MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSend",
            value: MsgSend.encode(message).finish()
        };
    }
};
function createBaseMsgSend_SendCredits() {
    return {
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: "",
        retirementJurisdiction: "",
        retirementReason: ""
    };
}
export const MsgSend_SendCredits = {
    typeUrl: "/regen.ecocredit.v1.SendCredits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.retirementJurisdiction !== "") {
            writer.uint32(34).string(message.retirementJurisdiction);
        }
        if (message.retirementReason !== "") {
            writer.uint32(42).string(message.retirementReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend_SendCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.retirementJurisdiction = reader.string();
                    break;
                case 5:
                    message.retirementReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend_SendCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.retirementJurisdiction = object.retirementJurisdiction ?? "";
        message.retirementReason = object.retirementReason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend_SendCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
            message.retirementJurisdiction = object.retirement_jurisdiction;
        }
        if (object.retirement_reason !== undefined && object.retirement_reason !== null) {
            message.retirementReason = object.retirement_reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
        obj.retirement_reason = message.retirementReason === "" ? undefined : message.retirementReason;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSend_SendCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSend_SendCredits.decode(message.value);
    },
    toProto(message) {
        return MsgSend_SendCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.SendCredits",
            value: MsgSend_SendCredits.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
            value: MsgSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRetire() {
    return {
        owner: "",
        credits: [],
        jurisdiction: "",
        reason: ""
    };
}
export const MsgRetire = {
    typeUrl: "/regen.ecocredit.v1.MsgRetire",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.credits) {
            Credits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.jurisdiction !== "") {
            writer.uint32(26).string(message.jurisdiction);
        }
        if (message.reason !== "") {
            writer.uint32(34).string(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.credits.push(Credits.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.jurisdiction = reader.string();
                    break;
                case 4:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRetire();
        message.owner = object.owner ?? "";
        message.credits = object.credits?.map(e => Credits.fromPartial(e)) || [];
        message.jurisdiction = object.jurisdiction ?? "";
        message.reason = object.reason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.credits = object.credits?.map(e => Credits.fromAmino(e)) || [];
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? Credits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.reason = message.reason === "" ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRetire.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgRetire",
            value: MsgRetire.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRetire.decode(message.value);
    },
    toProto(message) {
        return MsgRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRetire",
            value: MsgRetire.encode(message).finish()
        };
    }
};
function createBaseMsgRetireResponse() {
    return {};
}
export const MsgRetireResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetireResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRetireResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRetireResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRetireResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRetireResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRetireResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
            value: MsgRetireResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancel() {
    return {
        owner: "",
        credits: [],
        reason: ""
    };
}
export const MsgCancel = {
    typeUrl: "/regen.ecocredit.v1.MsgCancel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.credits) {
            Credits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.reason !== "") {
            writer.uint32(26).string(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.credits.push(Credits.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancel();
        message.owner = object.owner ?? "";
        message.credits = object.credits?.map(e => Credits.fromPartial(e)) || [];
        message.reason = object.reason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.credits = object.credits?.map(e => Credits.fromAmino(e)) || [];
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? Credits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.reason = message.reason === "" ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCancel",
            value: MsgCancel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCancel.decode(message.value);
    },
    toProto(message) {
        return MsgCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCancel",
            value: MsgCancel.encode(message).finish()
        };
    }
};
function createBaseMsgCancelResponse() {
    return {};
}
export const MsgCancelResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
            value: MsgCancelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdmin() {
    return {
        admin: "",
        classId: "",
        newAdmin: ""
    };
}
export const MsgUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassAdmin();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassAdmin",
            value: MsgUpdateClassAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
            value: MsgUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdminResponse() {
    return {};
}
export const MsgUpdateClassAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
            value: MsgUpdateClassAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuers() {
    return {
        admin: "",
        classId: "",
        addIssuers: [],
        removeIssuers: []
    };
}
export const MsgUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        for (const v of message.addIssuers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.removeIssuers) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassIssuers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.addIssuers.push(reader.string());
                    break;
                case 4:
                    message.removeIssuers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassIssuers();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.addIssuers = object.addIssuers?.map(e => e) || [];
        message.removeIssuers = object.removeIssuers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassIssuers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        message.addIssuers = object.add_issuers?.map(e => e) || [];
        message.removeIssuers = object.remove_issuers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        if (message.addIssuers) {
            obj.add_issuers = message.addIssuers.map(e => e);
        }
        else {
            obj.add_issuers = message.addIssuers;
        }
        if (message.removeIssuers) {
            obj.remove_issuers = message.removeIssuers.map(e => e);
        }
        else {
            obj.remove_issuers = message.removeIssuers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassIssuers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassIssuers",
            value: MsgUpdateClassIssuers.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
            value: MsgUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuersResponse() {
    return {};
}
export const MsgUpdateClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassIssuersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassIssuersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassIssuersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
            value: MsgUpdateClassIssuersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadata() {
    return {
        admin: "",
        classId: "",
        newMetadata: ""
    };
}
export const MsgUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.newMetadata !== "") {
            writer.uint32(26).string(message.newMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.newMetadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassMetadata();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.newMetadata = object.newMetadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.new_metadata !== undefined && object.new_metadata !== null) {
            message.newMetadata = object.new_metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.new_metadata = message.newMetadata === "" ? undefined : message.newMetadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassMetadata",
            value: MsgUpdateClassMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
            value: MsgUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadataResponse() {
    return {};
}
export const MsgUpdateClassMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
            value: MsgUpdateClassMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectAdmin() {
    return {
        admin: "",
        projectId: "",
        newAdmin: ""
    };
}
export const MsgUpdateProjectAdmin = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateProjectAdmin();
        message.admin = object.admin ?? "";
        message.projectId = object.projectId ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateProjectAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateProjectAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateProjectAdmin",
            value: MsgUpdateProjectAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateProjectAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateProjectAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
            value: MsgUpdateProjectAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectAdminResponse() {
    return {};
}
export const MsgUpdateProjectAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateProjectAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateProjectAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateProjectAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateProjectAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateProjectAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
            value: MsgUpdateProjectAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectMetadata() {
    return {
        admin: "",
        projectId: "",
        newMetadata: ""
    };
}
export const MsgUpdateProjectMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.newMetadata !== "") {
            writer.uint32(26).string(message.newMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.newMetadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateProjectMetadata();
        message.admin = object.admin ?? "";
        message.projectId = object.projectId ?? "";
        message.newMetadata = object.newMetadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateProjectMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        if (object.new_metadata !== undefined && object.new_metadata !== null) {
            message.newMetadata = object.new_metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.new_metadata = message.newMetadata === "" ? undefined : message.newMetadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateProjectMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateProjectMetadata",
            value: MsgUpdateProjectMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateProjectMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateProjectMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
            value: MsgUpdateProjectMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectMetadataResponse() {
    return {};
}
export const MsgUpdateProjectMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateProjectMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateProjectMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateProjectMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateProjectMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateProjectMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
            value: MsgUpdateProjectMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBridge() {
    return {
        owner: "",
        target: "",
        recipient: "",
        credits: []
    };
}
export const MsgBridge = {
    typeUrl: "/regen.ecocredit.v1.MsgBridge",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.target !== "") {
            writer.uint32(18).string(message.target);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.credits) {
            Credits.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBridge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.target = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.credits.push(Credits.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBridge();
        message.owner = object.owner ?? "";
        message.target = object.target ?? "";
        message.recipient = object.recipient ?? "";
        message.credits = object.credits?.map(e => Credits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBridge();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = object.target;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.credits = object.credits?.map(e => Credits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.target = message.target === "" ? undefined : message.target;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? Credits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBridge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgBridge",
            value: MsgBridge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBridge.decode(message.value);
    },
    toProto(message) {
        return MsgBridge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridge",
            value: MsgBridge.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBatchMetadata() {
    return {
        issuer: "",
        batchDenom: "",
        newMetadata: ""
    };
}
export const MsgUpdateBatchMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.newMetadata !== "") {
            writer.uint32(26).string(message.newMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBatchMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.newMetadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateBatchMetadata();
        message.issuer = object.issuer ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.newMetadata = object.newMetadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateBatchMetadata();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.new_metadata !== undefined && object.new_metadata !== null) {
            message.newMetadata = object.new_metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.new_metadata = message.newMetadata === "" ? undefined : message.newMetadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateBatchMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateBatchMetadata",
            value: MsgUpdateBatchMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateBatchMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateBatchMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
            value: MsgUpdateBatchMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBatchMetadataResponse() {
    return {};
}
export const MsgUpdateBatchMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBatchMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateBatchMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateBatchMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateBatchMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateBatchMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateBatchMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse",
            value: MsgUpdateBatchMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeResponse() {
    return {};
}
export const MsgBridgeResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBridgeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgBridgeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBridgeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBridgeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBridgeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBridgeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse",
            value: MsgBridgeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeReceive() {
    return {
        issuer: "",
        classId: "",
        project: undefined,
        batch: undefined,
        originTx: undefined
    };
}
export const MsgBridgeReceive = {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.project !== undefined) {
            MsgBridgeReceive_Project.encode(message.project, writer.uint32(26).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            MsgBridgeReceive_Batch.encode(message.batch, writer.uint32(34).fork()).ldelim();
        }
        if (message.originTx !== undefined) {
            OriginTx.encode(message.originTx, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBridgeReceive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.project = MsgBridgeReceive_Project.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.batch = MsgBridgeReceive_Batch.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originTx = OriginTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBridgeReceive();
        message.issuer = object.issuer ?? "";
        message.classId = object.classId ?? "";
        message.project = object.project !== undefined && object.project !== null ? MsgBridgeReceive_Project.fromPartial(object.project) : undefined;
        message.batch = object.batch !== undefined && object.batch !== null ? MsgBridgeReceive_Batch.fromPartial(object.batch) : undefined;
        message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBridgeReceive();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.project !== undefined && object.project !== null) {
            message.project = MsgBridgeReceive_Project.fromAmino(object.project);
        }
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = MsgBridgeReceive_Batch.fromAmino(object.batch);
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.project = message.project ? MsgBridgeReceive_Project.toAmino(message.project) : undefined;
        obj.batch = message.batch ? MsgBridgeReceive_Batch.toAmino(message.batch) : undefined;
        obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBridgeReceive.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgBridgeReceive",
            value: MsgBridgeReceive.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBridgeReceive.decode(message.value);
    },
    toProto(message) {
        return MsgBridgeReceive.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
            value: MsgBridgeReceive.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeReceive_Batch() {
    return {
        recipient: "",
        amount: "",
        startDate: undefined,
        endDate: undefined,
        metadata: ""
    };
}
export const MsgBridgeReceive_Batch = {
    typeUrl: "/regen.ecocredit.v1.Batch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBridgeReceive_Batch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBridgeReceive_Batch();
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBridgeReceive_Batch();
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
        obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBridgeReceive_Batch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBridgeReceive_Batch.decode(message.value);
    },
    toProto(message) {
        return MsgBridgeReceive_Batch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Batch",
            value: MsgBridgeReceive_Batch.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeReceive_Project() {
    return {
        referenceId: "",
        jurisdiction: "",
        metadata: ""
    };
}
export const MsgBridgeReceive_Project = {
    typeUrl: "/regen.ecocredit.v1.Project",
    encode(message, writer = BinaryWriter.create()) {
        if (message.referenceId !== "") {
            writer.uint32(10).string(message.referenceId);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(18).string(message.jurisdiction);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBridgeReceive_Project();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referenceId = reader.string();
                    break;
                case 2:
                    message.jurisdiction = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBridgeReceive_Project();
        message.referenceId = object.referenceId ?? "";
        message.jurisdiction = object.jurisdiction ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBridgeReceive_Project();
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBridgeReceive_Project.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBridgeReceive_Project.decode(message.value);
    },
    toProto(message) {
        return MsgBridgeReceive_Project.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Project",
            value: MsgBridgeReceive_Project.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeReceiveResponse() {
    return {
        batchDenom: "",
        projectId: ""
    };
}
export const MsgBridgeReceiveResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBridgeReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBridgeReceiveResponse();
        message.batchDenom = object.batchDenom ?? "";
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBridgeReceiveResponse();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBridgeReceiveResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBridgeReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBridgeReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse",
            value: MsgBridgeReceiveResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddClassCreator() {
    return {
        authority: "",
        creator: ""
    };
}
export const MsgAddClassCreator = {
    typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddClassCreator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddClassCreator();
        message.authority = object.authority ?? "";
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddClassCreator();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.creator = message.creator === "" ? undefined : message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddClassCreator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgAddClassCreator",
            value: MsgAddClassCreator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAddClassCreator.decode(message.value);
    },
    toProto(message) {
        return MsgAddClassCreator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
            value: MsgAddClassCreator.encode(message).finish()
        };
    }
};
function createBaseMsgAddClassCreatorResponse() {
    return {};
}
export const MsgAddClassCreatorResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddClassCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgAddClassCreatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddClassCreatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddClassCreatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddClassCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddClassCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse",
            value: MsgAddClassCreatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetClassCreatorAllowlist() {
    return {
        authority: "",
        enabled: false
    };
}
export const MsgSetClassCreatorAllowlist = {
    typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetClassCreatorAllowlist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSetClassCreatorAllowlist();
        message.authority = object.authority ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetClassCreatorAllowlist();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetClassCreatorAllowlist.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgSetClassCreatorAllowlist",
            value: MsgSetClassCreatorAllowlist.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetClassCreatorAllowlist.decode(message.value);
    },
    toProto(message) {
        return MsgSetClassCreatorAllowlist.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
            value: MsgSetClassCreatorAllowlist.encode(message).finish()
        };
    }
};
function createBaseMsgSetClassCreatorAllowlistResponse() {
    return {};
}
export const MsgSetClassCreatorAllowlistResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetClassCreatorAllowlistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSetClassCreatorAllowlistResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetClassCreatorAllowlistResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetClassCreatorAllowlistResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetClassCreatorAllowlistResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetClassCreatorAllowlistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse",
            value: MsgSetClassCreatorAllowlistResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveClassCreator() {
    return {
        authority: "",
        creator: ""
    };
}
export const MsgRemoveClassCreator = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveClassCreator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveClassCreator();
        message.authority = object.authority ?? "";
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRemoveClassCreator();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.creator = message.creator === "" ? undefined : message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRemoveClassCreator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgRemoveClassCreator",
            value: MsgRemoveClassCreator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRemoveClassCreator.decode(message.value);
    },
    toProto(message) {
        return MsgRemoveClassCreator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
            value: MsgRemoveClassCreator.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveClassCreatorResponse() {
    return {};
}
export const MsgRemoveClassCreatorResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveClassCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveClassCreatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRemoveClassCreatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRemoveClassCreatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRemoveClassCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRemoveClassCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse",
            value: MsgRemoveClassCreatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassFee() {
    return {
        authority: "",
        fee: undefined
    };
}
export const MsgUpdateClassFee = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.fee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassFee();
        message.authority = object.authority ?? "";
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassFee();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassFee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassFee",
            value: MsgUpdateClassFee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClassFee.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
            value: MsgUpdateClassFee.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassFeeResponse() {
    return {};
}
export const MsgUpdateClassFeeResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassFeeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassFeeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassFeeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse",
            value: MsgUpdateClassFeeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddAllowedBridgeChain() {
    return {
        authority: "",
        chainName: ""
    };
}
export const MsgAddAllowedBridgeChain = {
    typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.chainName !== "") {
            writer.uint32(18).string(message.chainName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAllowedBridgeChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.chainName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddAllowedBridgeChain();
        message.authority = object.authority ?? "";
        message.chainName = object.chainName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddAllowedBridgeChain();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.chain_name !== undefined && object.chain_name !== null) {
            message.chainName = object.chain_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.chain_name = message.chainName === "" ? undefined : message.chainName;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddAllowedBridgeChain.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgAddAllowedBridgeChain",
            value: MsgAddAllowedBridgeChain.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAddAllowedBridgeChain.decode(message.value);
    },
    toProto(message) {
        return MsgAddAllowedBridgeChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
            value: MsgAddAllowedBridgeChain.encode(message).finish()
        };
    }
};
function createBaseMsgAddAllowedBridgeChainResponse() {
    return {};
}
export const MsgAddAllowedBridgeChainResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAllowedBridgeChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgAddAllowedBridgeChainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddAllowedBridgeChainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddAllowedBridgeChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddAllowedBridgeChainResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddAllowedBridgeChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse",
            value: MsgAddAllowedBridgeChainResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveAllowedBridgeChain() {
    return {
        authority: "",
        chainName: ""
    };
}
export const MsgRemoveAllowedBridgeChain = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.chainName !== "") {
            writer.uint32(18).string(message.chainName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveAllowedBridgeChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.chainName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveAllowedBridgeChain();
        message.authority = object.authority ?? "";
        message.chainName = object.chainName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRemoveAllowedBridgeChain();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.chain_name !== undefined && object.chain_name !== null) {
            message.chainName = object.chain_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.chain_name = message.chainName === "" ? undefined : message.chainName;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRemoveAllowedBridgeChain.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgRemoveAllowedBridgeChain",
            value: MsgRemoveAllowedBridgeChain.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRemoveAllowedBridgeChain.decode(message.value);
    },
    toProto(message) {
        return MsgRemoveAllowedBridgeChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
            value: MsgRemoveAllowedBridgeChain.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveAllowedBridgeChainResponse() {
    return {};
}
export const MsgRemoveAllowedBridgeChainResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveAllowedBridgeChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveAllowedBridgeChainResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRemoveAllowedBridgeChainResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRemoveAllowedBridgeChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRemoveAllowedBridgeChainResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRemoveAllowedBridgeChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse",
            value: MsgRemoveAllowedBridgeChainResponse.encode(message).finish()
        };
    }
};
