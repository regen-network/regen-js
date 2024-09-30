"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRemoveAllowedBridgeChainResponse = exports.MsgRemoveAllowedBridgeChain = exports.MsgAddAllowedBridgeChainResponse = exports.MsgAddAllowedBridgeChain = exports.MsgUpdateClassFeeResponse = exports.MsgUpdateClassFee = exports.MsgRemoveClassCreatorResponse = exports.MsgRemoveClassCreator = exports.MsgSetClassCreatorAllowlistResponse = exports.MsgSetClassCreatorAllowlist = exports.MsgAddClassCreatorResponse = exports.MsgAddClassCreator = exports.MsgBridgeReceiveResponse = exports.MsgBridgeReceive_Project = exports.MsgBridgeReceive_Batch = exports.MsgBridgeReceive = exports.MsgBridgeResponse = exports.MsgUpdateBatchMetadataResponse = exports.MsgUpdateBatchMetadata = exports.MsgBridge = exports.MsgUpdateProjectMetadataResponse = exports.MsgUpdateProjectMetadata = exports.MsgUpdateProjectAdminResponse = exports.MsgUpdateProjectAdmin = exports.MsgUpdateClassMetadataResponse = exports.MsgUpdateClassMetadata = exports.MsgUpdateClassIssuersResponse = exports.MsgUpdateClassIssuers = exports.MsgUpdateClassAdminResponse = exports.MsgUpdateClassAdmin = exports.MsgCancelResponse = exports.MsgCancel = exports.MsgRetireResponse = exports.MsgRetire = exports.MsgSendResponse = exports.MsgSend_SendCredits = exports.MsgSend = exports.MsgSealBatchResponse = exports.MsgSealBatch = exports.MsgMintBatchCreditsResponse = exports.MsgMintBatchCredits = exports.MsgCreateBatchResponse = exports.MsgCreateBatch = exports.MsgCreateProjectResponse = exports.MsgCreateProject = exports.MsgCreateClassResponse = exports.MsgCreateClass = exports.MsgAddCreditTypeResponse = exports.MsgAddCreditType = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const types_1 = require("./types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const state_1 = require("./state");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgAddCreditType() {
    return {
        authority: "",
        creditType: undefined
    };
}
exports.MsgAddCreditType = {
    typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.creditType !== undefined) {
            state_1.CreditType.encode(message.creditType, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCreditType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.creditType = state_1.CreditType.decode(reader, reader.uint32());
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
        message.creditType = object.creditType !== undefined && object.creditType !== null ? state_1.CreditType.fromPartial(object.creditType) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddCreditType();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = state_1.CreditType.fromAmino(object.credit_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.credit_type = message.creditType ? state_1.CreditType.toAmino(message.creditType) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddCreditType.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgAddCreditType",
            value: exports.MsgAddCreditType.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddCreditType.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddCreditType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
            value: exports.MsgAddCreditType.encode(message).finish()
        };
    }
};
function createBaseMsgAddCreditTypeResponse() {
    return {};
}
exports.MsgAddCreditTypeResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgAddCreditTypeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAddCreditTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddCreditTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse",
            value: exports.MsgAddCreditTypeResponse.encode(message).finish()
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
exports.MsgCreateClass = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            coin_1.Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
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
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
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
            message.fee = coin_1.Coin.fromAmino(object.fee);
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
        obj.fee = message.fee ? coin_1.Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateClass.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCreateClass",
            value: exports.MsgCreateClass.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClass.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
            value: exports.MsgCreateClass.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClassResponse() {
    return {
        classId: ""
    };
}
exports.MsgCreateClassResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
            value: exports.MsgCreateClassResponse.encode(message).finish()
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
exports.MsgCreateProject = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateProject.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCreateProject",
            value: exports.MsgCreateProject.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProject.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
            value: exports.MsgCreateProject.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProjectResponse() {
    return {
        projectId: ""
    };
}
exports.MsgCreateProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProjectResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
            value: exports.MsgCreateProjectResponse.encode(message).finish()
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
exports.MsgCreateBatch = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        for (const v of message.issuance) {
            types_1.BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(56).bool(message.open);
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.issuance.push(types_1.BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.open = reader.bool();
                    break;
                case 8:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
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
        message.issuance = object.issuance?.map(e => types_1.BatchIssuance.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.open = object.open ?? false;
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
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
        message.issuance = object.issuance?.map(e => types_1.BatchIssuance.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_date));
        }
        if (object.open !== undefined && object.open !== null) {
            message.open = object.open;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? types_1.BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.start_date = message.startDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startDate)) : undefined;
        obj.end_date = message.endDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBatch.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCreateBatch",
            value: exports.MsgCreateBatch.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
            value: exports.MsgCreateBatch.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatchResponse() {
    return {
        batchDenom: ""
    };
}
exports.MsgCreateBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
            value: exports.MsgCreateBatchResponse.encode(message).finish()
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
exports.MsgMintBatchCredits = {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        for (const v of message.issuance) {
            types_1.BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.issuance.push(types_1.BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
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
        message.issuance = object.issuance?.map(e => types_1.BatchIssuance.fromPartial(e)) || [];
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
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
        message.issuance = object.issuance?.map(e => types_1.BatchIssuance.fromAmino(e)) || [];
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? types_1.BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMintBatchCredits.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgMintBatchCredits",
            value: exports.MsgMintBatchCredits.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMintBatchCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintBatchCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
            value: exports.MsgMintBatchCredits.encode(message).finish()
        };
    }
};
function createBaseMsgMintBatchCreditsResponse() {
    return {};
}
exports.MsgMintBatchCreditsResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgMintBatchCreditsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMintBatchCreditsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintBatchCreditsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
            value: exports.MsgMintBatchCreditsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSealBatch() {
    return {
        issuer: "",
        batchDenom: ""
    };
}
exports.MsgSealBatch = {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSealBatch.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgSealBatch",
            value: exports.MsgSealBatch.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSealBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSealBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
            value: exports.MsgSealBatch.encode(message).finish()
        };
    }
};
function createBaseMsgSealBatchResponse() {
    return {};
}
exports.MsgSealBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSealBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSealBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSealBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
            value: exports.MsgSealBatchResponse.encode(message).finish()
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
exports.MsgSend = {
    typeUrl: "/regen.ecocredit.v1.MsgSend",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.credits) {
            exports.MsgSend_SendCredits.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.credits.push(exports.MsgSend_SendCredits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => exports.MsgSend_SendCredits.fromPartial(e)) || [];
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
        message.credits = object.credits?.map(e => exports.MsgSend_SendCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgSend_SendCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgSend",
            value: exports.MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSend",
            value: exports.MsgSend.encode(message).finish()
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
exports.MsgSend_SendCredits = {
    typeUrl: "/regen.ecocredit.v1.SendCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSend_SendCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSend_SendCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend_SendCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.SendCredits",
            value: exports.MsgSend_SendCredits.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
            value: exports.MsgSendResponse.encode(message).finish()
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
exports.MsgRetire = {
    typeUrl: "/regen.ecocredit.v1.MsgRetire",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.credits) {
            types_1.Credits.encode(v, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.credits.push(types_1.Credits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => types_1.Credits.fromPartial(e)) || [];
        message.jurisdiction = object.jurisdiction ?? "";
        message.reason = object.reason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.credits = object.credits?.map(e => types_1.Credits.fromAmino(e)) || [];
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
            obj.credits = message.credits.map(e => e ? types_1.Credits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.reason = message.reason === "" ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetire.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgRetire",
            value: exports.MsgRetire.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRetire.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRetire",
            value: exports.MsgRetire.encode(message).finish()
        };
    }
};
function createBaseMsgRetireResponse() {
    return {};
}
exports.MsgRetireResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRetireResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetireResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetireResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
            value: exports.MsgRetireResponse.encode(message).finish()
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
exports.MsgCancel = {
    typeUrl: "/regen.ecocredit.v1.MsgCancel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.credits) {
            types_1.Credits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.reason !== "") {
            writer.uint32(26).string(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.credits.push(types_1.Credits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => types_1.Credits.fromPartial(e)) || [];
        message.reason = object.reason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.credits = object.credits?.map(e => types_1.Credits.fromAmino(e)) || [];
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? types_1.Credits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.reason = message.reason === "" ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgCancel",
            value: exports.MsgCancel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCancel",
            value: exports.MsgCancel.encode(message).finish()
        };
    }
};
function createBaseMsgCancelResponse() {
    return {};
}
exports.MsgCancelResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
            value: exports.MsgCancelResponse.encode(message).finish()
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
exports.MsgUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassAdmin",
            value: exports.MsgUpdateClassAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
            value: exports.MsgUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdminResponse() {
    return {};
}
exports.MsgUpdateClassAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
            value: exports.MsgUpdateClassAdminResponse.encode(message).finish()
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
exports.MsgUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassIssuers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassIssuers",
            value: exports.MsgUpdateClassIssuers.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
            value: exports.MsgUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuersResponse() {
    return {};
}
exports.MsgUpdateClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
            value: exports.MsgUpdateClassIssuersResponse.encode(message).finish()
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
exports.MsgUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassMetadata",
            value: exports.MsgUpdateClassMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
            value: exports.MsgUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadataResponse() {
    return {};
}
exports.MsgUpdateClassMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
            value: exports.MsgUpdateClassMetadataResponse.encode(message).finish()
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
exports.MsgUpdateProjectAdmin = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateProjectAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateProjectAdmin",
            value: exports.MsgUpdateProjectAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
            value: exports.MsgUpdateProjectAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectAdminResponse() {
    return {};
}
exports.MsgUpdateProjectAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateProjectAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
            value: exports.MsgUpdateProjectAdminResponse.encode(message).finish()
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
exports.MsgUpdateProjectMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateProjectMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateProjectMetadata",
            value: exports.MsgUpdateProjectMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
            value: exports.MsgUpdateProjectMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectMetadataResponse() {
    return {};
}
exports.MsgUpdateProjectMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateProjectMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
            value: exports.MsgUpdateProjectMetadataResponse.encode(message).finish()
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
exports.MsgBridge = {
    typeUrl: "/regen.ecocredit.v1.MsgBridge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            types_1.Credits.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.credits.push(types_1.Credits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => types_1.Credits.fromPartial(e)) || [];
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
        message.credits = object.credits?.map(e => types_1.Credits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.target = message.target === "" ? undefined : message.target;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? types_1.Credits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBridge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgBridge",
            value: exports.MsgBridge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBridge.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBridge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridge",
            value: exports.MsgBridge.encode(message).finish()
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
exports.MsgUpdateBatchMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateBatchMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateBatchMetadata",
            value: exports.MsgUpdateBatchMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateBatchMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateBatchMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
            value: exports.MsgUpdateBatchMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateBatchMetadataResponse() {
    return {};
}
exports.MsgUpdateBatchMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateBatchMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateBatchMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateBatchMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse",
            value: exports.MsgUpdateBatchMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeResponse() {
    return {};
}
exports.MsgBridgeResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBridgeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBridgeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBridgeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse",
            value: exports.MsgBridgeResponse.encode(message).finish()
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
exports.MsgBridgeReceive = {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.project !== undefined) {
            exports.MsgBridgeReceive_Project.encode(message.project, writer.uint32(26).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            exports.MsgBridgeReceive_Batch.encode(message.batch, writer.uint32(34).fork()).ldelim();
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.project = exports.MsgBridgeReceive_Project.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.batch = exports.MsgBridgeReceive_Batch.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
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
        message.project = object.project !== undefined && object.project !== null ? exports.MsgBridgeReceive_Project.fromPartial(object.project) : undefined;
        message.batch = object.batch !== undefined && object.batch !== null ? exports.MsgBridgeReceive_Batch.fromPartial(object.batch) : undefined;
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
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
            message.project = exports.MsgBridgeReceive_Project.fromAmino(object.project);
        }
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = exports.MsgBridgeReceive_Batch.fromAmino(object.batch);
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.project = message.project ? exports.MsgBridgeReceive_Project.toAmino(message.project) : undefined;
        obj.batch = message.batch ? exports.MsgBridgeReceive_Batch.toAmino(message.batch) : undefined;
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBridgeReceive.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgBridgeReceive",
            value: exports.MsgBridgeReceive.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBridgeReceive.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBridgeReceive.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
            value: exports.MsgBridgeReceive.encode(message).finish()
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
exports.MsgBridgeReceive_Batch = {
    typeUrl: "/regen.ecocredit.v1.Batch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_date));
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
        obj.start_date = message.startDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startDate)) : undefined;
        obj.end_date = message.endDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endDate)) : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBridgeReceive_Batch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBridgeReceive_Batch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBridgeReceive_Batch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Batch",
            value: exports.MsgBridgeReceive_Batch.encode(message).finish()
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
exports.MsgBridgeReceive_Project = {
    typeUrl: "/regen.ecocredit.v1.Project",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBridgeReceive_Project.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBridgeReceive_Project.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBridgeReceive_Project.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Project",
            value: exports.MsgBridgeReceive_Project.encode(message).finish()
        };
    }
};
function createBaseMsgBridgeReceiveResponse() {
    return {
        batchDenom: "",
        projectId: ""
    };
}
exports.MsgBridgeReceiveResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBridgeReceiveResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBridgeReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBridgeReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse",
            value: exports.MsgBridgeReceiveResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddClassCreator() {
    return {
        authority: "",
        creator: ""
    };
}
exports.MsgAddClassCreator = {
    typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgAddClassCreator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgAddClassCreator",
            value: exports.MsgAddClassCreator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddClassCreator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddClassCreator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
            value: exports.MsgAddClassCreator.encode(message).finish()
        };
    }
};
function createBaseMsgAddClassCreatorResponse() {
    return {};
}
exports.MsgAddClassCreatorResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgAddClassCreatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAddClassCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddClassCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse",
            value: exports.MsgAddClassCreatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetClassCreatorAllowlist() {
    return {
        authority: "",
        enabled: false
    };
}
exports.MsgSetClassCreatorAllowlist = {
    typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSetClassCreatorAllowlist.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgSetClassCreatorAllowlist",
            value: exports.MsgSetClassCreatorAllowlist.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetClassCreatorAllowlist.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetClassCreatorAllowlist.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
            value: exports.MsgSetClassCreatorAllowlist.encode(message).finish()
        };
    }
};
function createBaseMsgSetClassCreatorAllowlistResponse() {
    return {};
}
exports.MsgSetClassCreatorAllowlistResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSetClassCreatorAllowlistResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetClassCreatorAllowlistResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetClassCreatorAllowlistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse",
            value: exports.MsgSetClassCreatorAllowlistResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveClassCreator() {
    return {
        authority: "",
        creator: ""
    };
}
exports.MsgRemoveClassCreator = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRemoveClassCreator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgRemoveClassCreator",
            value: exports.MsgRemoveClassCreator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveClassCreator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveClassCreator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
            value: exports.MsgRemoveClassCreator.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveClassCreatorResponse() {
    return {};
}
exports.MsgRemoveClassCreatorResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRemoveClassCreatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveClassCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveClassCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse",
            value: exports.MsgRemoveClassCreatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassFee() {
    return {
        authority: "",
        fee: undefined
    };
}
exports.MsgUpdateClassFee = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
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
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassFee();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = coin_1.Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.fee = message.fee ? coin_1.Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassFee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgUpdateClassFee",
            value: exports.MsgUpdateClassFee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassFee.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
            value: exports.MsgUpdateClassFee.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassFeeResponse() {
    return {};
}
exports.MsgUpdateClassFeeResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClassFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse",
            value: exports.MsgUpdateClassFeeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddAllowedBridgeChain() {
    return {
        authority: "",
        chainName: ""
    };
}
exports.MsgAddAllowedBridgeChain = {
    typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.chainName !== "") {
            writer.uint32(18).string(message.chainName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgAddAllowedBridgeChain.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgAddAllowedBridgeChain",
            value: exports.MsgAddAllowedBridgeChain.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddAllowedBridgeChain.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddAllowedBridgeChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
            value: exports.MsgAddAllowedBridgeChain.encode(message).finish()
        };
    }
};
function createBaseMsgAddAllowedBridgeChainResponse() {
    return {};
}
exports.MsgAddAllowedBridgeChainResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgAddAllowedBridgeChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAddAllowedBridgeChainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddAllowedBridgeChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse",
            value: exports.MsgAddAllowedBridgeChainResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveAllowedBridgeChain() {
    return {
        authority: "",
        chainName: ""
    };
}
exports.MsgRemoveAllowedBridgeChain = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.chainName !== "") {
            writer.uint32(18).string(message.chainName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRemoveAllowedBridgeChain.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen/MsgRemoveAllowedBridgeChain",
            value: exports.MsgRemoveAllowedBridgeChain.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveAllowedBridgeChain.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveAllowedBridgeChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
            value: exports.MsgRemoveAllowedBridgeChain.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveAllowedBridgeChainResponse() {
    return {};
}
exports.MsgRemoveAllowedBridgeChainResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRemoveAllowedBridgeChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveAllowedBridgeChainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveAllowedBridgeChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse",
            value: exports.MsgRemoveAllowedBridgeChainResponse.encode(message).finish()
        };
    }
};
