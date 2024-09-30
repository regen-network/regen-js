//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseClassInfo() {
    return {
        classId: "",
        admin: "",
        issuers: [],
        metadata: new Uint8Array(),
        creditType: undefined,
        numBatches: BigInt(0)
    };
}
export const ClassInfo = {
    typeUrl: "/regen.ecocredit.v1alpha1.ClassInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        for (const v of message.issuers) {
            writer.uint32(26).string(v);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(34).bytes(message.metadata);
        }
        if (message.creditType !== undefined) {
            CreditType.encode(message.creditType, writer.uint32(42).fork()).ldelim();
        }
        if (message.numBatches !== BigInt(0)) {
            writer.uint32(48).uint64(message.numBatches);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.issuers.push(reader.string());
                    break;
                case 4:
                    message.metadata = reader.bytes();
                    break;
                case 5:
                    message.creditType = CreditType.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.numBatches = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClassInfo();
        message.classId = object.classId ?? "";
        message.admin = object.admin ?? "";
        message.issuers = object.issuers?.map(e => e) || [];
        message.metadata = object.metadata ?? new Uint8Array();
        message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
        message.numBatches = object.numBatches !== undefined && object.numBatches !== null ? BigInt(object.numBatches.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassInfo();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.issuers = object.issuers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = CreditType.fromAmino(object.credit_type);
        }
        if (object.num_batches !== undefined && object.num_batches !== null) {
            message.numBatches = BigInt(object.num_batches);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.issuers) {
            obj.issuers = message.issuers.map(e => e);
        }
        else {
            obj.issuers = message.issuers;
        }
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
        obj.num_batches = message.numBatches !== BigInt(0) ? message.numBatches.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClassInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClassInfo.decode(message.value);
    },
    toProto(message) {
        return ClassInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.ClassInfo",
            value: ClassInfo.encode(message).finish()
        };
    }
};
function createBaseBatchInfo() {
    return {
        classId: "",
        batchDenom: "",
        issuer: "",
        totalAmount: "",
        metadata: new Uint8Array(),
        amountCancelled: "",
        startDate: undefined,
        endDate: undefined,
        projectLocation: ""
    };
}
export const BatchInfo = {
    typeUrl: "/regen.ecocredit.v1alpha1.BatchInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.issuer !== "") {
            writer.uint32(26).string(message.issuer);
        }
        if (message.totalAmount !== "") {
            writer.uint32(34).string(message.totalAmount);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        if (message.amountCancelled !== "") {
            writer.uint32(50).string(message.amountCancelled);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.projectLocation !== "") {
            writer.uint32(74).string(message.projectLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.issuer = reader.string();
                    break;
                case 4:
                    message.totalAmount = reader.string();
                    break;
                case 5:
                    message.metadata = reader.bytes();
                    break;
                case 6:
                    message.amountCancelled = reader.string();
                    break;
                case 7:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.projectLocation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchInfo();
        message.classId = object.classId ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.issuer = object.issuer ?? "";
        message.totalAmount = object.totalAmount ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        message.amountCancelled = object.amountCancelled ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.projectLocation = object.projectLocation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchInfo();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.total_amount !== undefined && object.total_amount !== null) {
            message.totalAmount = object.total_amount;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        if (object.amount_cancelled !== undefined && object.amount_cancelled !== null) {
            message.amountCancelled = object.amount_cancelled;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
        }
        if (object.project_location !== undefined && object.project_location !== null) {
            message.projectLocation = object.project_location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        obj.amount_cancelled = message.amountCancelled === "" ? undefined : message.amountCancelled;
        obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
        obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
        obj.project_location = message.projectLocation === "" ? undefined : message.projectLocation;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchInfo.decode(message.value);
    },
    toProto(message) {
        return BatchInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.BatchInfo",
            value: BatchInfo.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        creditClassFee: [],
        allowedClassCreators: [],
        allowlistEnabled: false,
        creditTypes: [],
        basketCreationFee: []
    };
}
export const Params = {
    typeUrl: "/regen.ecocredit.v1alpha1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.creditClassFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowedClassCreators) {
            writer.uint32(18).string(v);
        }
        if (message.allowlistEnabled === true) {
            writer.uint32(24).bool(message.allowlistEnabled);
        }
        for (const v of message.creditTypes) {
            CreditType.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.basketCreationFee) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditClassFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.allowedClassCreators.push(reader.string());
                    break;
                case 3:
                    message.allowlistEnabled = reader.bool();
                    break;
                case 4:
                    message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.basketCreationFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.creditClassFee = object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
        message.allowedClassCreators = object.allowedClassCreators?.map(e => e) || [];
        message.allowlistEnabled = object.allowlistEnabled ?? false;
        message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
        message.basketCreationFee = object.basketCreationFee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.creditClassFee = object.credit_class_fee?.map(e => Coin.fromAmino(e)) || [];
        message.allowedClassCreators = object.allowed_class_creators?.map(e => e) || [];
        if (object.allowlist_enabled !== undefined && object.allowlist_enabled !== null) {
            message.allowlistEnabled = object.allowlist_enabled;
        }
        message.creditTypes = object.credit_types?.map(e => CreditType.fromAmino(e)) || [];
        message.basketCreationFee = object.basket_creation_fee?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.creditClassFee) {
            obj.credit_class_fee = message.creditClassFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.credit_class_fee = message.creditClassFee;
        }
        if (message.allowedClassCreators) {
            obj.allowed_class_creators = message.allowedClassCreators.map(e => e);
        }
        else {
            obj.allowed_class_creators = message.allowedClassCreators;
        }
        obj.allowlist_enabled = message.allowlistEnabled === false ? undefined : message.allowlistEnabled;
        if (message.creditTypes) {
            obj.credit_types = message.creditTypes.map(e => e ? CreditType.toAmino(e) : undefined);
        }
        else {
            obj.credit_types = message.creditTypes;
        }
        if (message.basketCreationFee) {
            obj.basket_creation_fee = message.basketCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.basket_creation_fee = message.basketCreationFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseCreditType() {
    return {
        name: "",
        abbreviation: "",
        unit: "",
        precision: 0
    };
}
export const CreditType = {
    typeUrl: "/regen.ecocredit.v1alpha1.CreditType",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.abbreviation !== "") {
            writer.uint32(18).string(message.abbreviation);
        }
        if (message.unit !== "") {
            writer.uint32(26).string(message.unit);
        }
        if (message.precision !== 0) {
            writer.uint32(32).uint32(message.precision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreditType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.abbreviation = reader.string();
                    break;
                case 3:
                    message.unit = reader.string();
                    break;
                case 4:
                    message.precision = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreditType();
        message.name = object.name ?? "";
        message.abbreviation = object.abbreviation ?? "";
        message.unit = object.unit ?? "";
        message.precision = object.precision ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreditType();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.abbreviation !== undefined && object.abbreviation !== null) {
            message.abbreviation = object.abbreviation;
        }
        if (object.unit !== undefined && object.unit !== null) {
            message.unit = object.unit;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
        obj.unit = message.unit === "" ? undefined : message.unit;
        obj.precision = message.precision === 0 ? undefined : message.precision;
        return obj;
    },
    fromAminoMsg(object) {
        return CreditType.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreditType.decode(message.value);
    },
    toProto(message) {
        return CreditType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.CreditType",
            value: CreditType.encode(message).finish()
        };
    }
};
function createBaseCreditTypeSeq() {
    return {
        abbreviation: "",
        seqNumber: BigInt(0)
    };
}
export const CreditTypeSeq = {
    typeUrl: "/regen.ecocredit.v1alpha1.CreditTypeSeq",
    encode(message, writer = BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        if (message.seqNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.seqNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreditTypeSeq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.abbreviation = reader.string();
                    break;
                case 2:
                    message.seqNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreditTypeSeq();
        message.abbreviation = object.abbreviation ?? "";
        message.seqNumber = object.seqNumber !== undefined && object.seqNumber !== null ? BigInt(object.seqNumber.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreditTypeSeq();
        if (object.abbreviation !== undefined && object.abbreviation !== null) {
            message.abbreviation = object.abbreviation;
        }
        if (object.seq_number !== undefined && object.seq_number !== null) {
            message.seqNumber = BigInt(object.seq_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
        obj.seq_number = message.seqNumber !== BigInt(0) ? message.seqNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CreditTypeSeq.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreditTypeSeq.decode(message.value);
    },
    toProto(message) {
        return CreditTypeSeq.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.CreditTypeSeq",
            value: CreditTypeSeq.encode(message).finish()
        };
    }
};
