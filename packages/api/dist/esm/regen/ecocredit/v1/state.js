//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseCreditType() {
    return {
        abbreviation: "",
        name: "",
        unit: "",
        precision: 0
    };
}
export const CreditType = {
    typeUrl: "/regen.ecocredit.v1.CreditType",
    encode(message, writer = BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
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
                    message.abbreviation = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
        message.abbreviation = object.abbreviation ?? "";
        message.name = object.name ?? "";
        message.unit = object.unit ?? "";
        message.precision = object.precision ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreditType();
        if (object.abbreviation !== undefined && object.abbreviation !== null) {
            message.abbreviation = object.abbreviation;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
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
        obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
        obj.name = message.name === "" ? undefined : message.name;
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
            typeUrl: "/regen.ecocredit.v1.CreditType",
            value: CreditType.encode(message).finish()
        };
    }
};
function createBaseClass() {
    return {
        key: BigInt(0),
        id: "",
        admin: new Uint8Array(),
        metadata: "",
        creditTypeAbbrev: ""
    };
}
export const Class = {
    typeUrl: "/regen.ecocredit.v1.Class",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.admin.length !== 0) {
            writer.uint32(26).bytes(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(42).string(message.creditTypeAbbrev);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.admin = reader.bytes();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.creditTypeAbbrev = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClass();
        message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
        message.id = object.id ?? "";
        message.admin = object.admin ?? new Uint8Array();
        message.metadata = object.metadata ?? "";
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClass();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = bytesFromBase64(object.admin);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key !== BigInt(0) ? message.key.toString() : undefined;
        obj.id = message.id === "" ? undefined : message.id;
        obj.admin = message.admin ? base64FromBytes(message.admin) : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        return obj;
    },
    fromAminoMsg(object) {
        return Class.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Class.decode(message.value);
    },
    toProto(message) {
        return Class.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Class",
            value: Class.encode(message).finish()
        };
    }
};
function createBaseClassIssuer() {
    return {
        classKey: BigInt(0),
        issuer: new Uint8Array()
    };
}
export const ClassIssuer = {
    typeUrl: "/regen.ecocredit.v1.ClassIssuer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.classKey);
        }
        if (message.issuer.length !== 0) {
            writer.uint32(18).bytes(message.issuer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassIssuer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classKey = reader.uint64();
                    break;
                case 2:
                    message.issuer = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClassIssuer();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.issuer = object.issuer ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassIssuer();
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = bytesFromBase64(object.issuer);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
        obj.issuer = message.issuer ? base64FromBytes(message.issuer) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClassIssuer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClassIssuer.decode(message.value);
    },
    toProto(message) {
        return ClassIssuer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassIssuer",
            value: ClassIssuer.encode(message).finish()
        };
    }
};
function createBaseProject() {
    return {
        key: BigInt(0),
        id: "",
        admin: new Uint8Array(),
        classKey: BigInt(0),
        jurisdiction: "",
        metadata: "",
        referenceId: ""
    };
}
export const Project = {
    typeUrl: "/regen.ecocredit.v1.Project",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.admin.length !== 0) {
            writer.uint32(26).bytes(message.admin);
        }
        if (message.classKey !== BigInt(0)) {
            writer.uint32(32).uint64(message.classKey);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(42).string(message.jurisdiction);
        }
        if (message.metadata !== "") {
            writer.uint32(50).string(message.metadata);
        }
        if (message.referenceId !== "") {
            writer.uint32(58).string(message.referenceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.admin = reader.bytes();
                    break;
                case 4:
                    message.classKey = reader.uint64();
                    break;
                case 5:
                    message.jurisdiction = reader.string();
                    break;
                case 6:
                    message.metadata = reader.string();
                    break;
                case 7:
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
        const message = createBaseProject();
        message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
        message.id = object.id ?? "";
        message.admin = object.admin ?? new Uint8Array();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.jurisdiction = object.jurisdiction ?? "";
        message.metadata = object.metadata ?? "";
        message.referenceId = object.referenceId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseProject();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = bytesFromBase64(object.admin);
        }
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key !== BigInt(0) ? message.key.toString() : undefined;
        obj.id = message.id === "" ? undefined : message.id;
        obj.admin = message.admin ? base64FromBytes(message.admin) : undefined;
        obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        return obj;
    },
    fromAminoMsg(object) {
        return Project.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Project.decode(message.value);
    },
    toProto(message) {
        return Project.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Project",
            value: Project.encode(message).finish()
        };
    }
};
function createBaseBatch() {
    return {
        key: BigInt(0),
        issuer: new Uint8Array(),
        projectKey: BigInt(0),
        denom: "",
        metadata: "",
        startDate: undefined,
        endDate: undefined,
        issuanceDate: undefined,
        open: false
    };
}
export const Batch = {
    typeUrl: "/regen.ecocredit.v1.Batch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.issuer.length !== 0) {
            writer.uint32(18).bytes(message.issuer);
        }
        if (message.projectKey !== BigInt(0)) {
            writer.uint32(24).uint64(message.projectKey);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.issuanceDate !== undefined) {
            Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(72).bool(message.open);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.issuer = reader.bytes();
                    break;
                case 3:
                    message.projectKey = reader.uint64();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.open = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatch();
        message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
        message.issuer = object.issuer ?? new Uint8Array();
        message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? BigInt(object.projectKey.toString()) : BigInt(0);
        message.denom = object.denom ?? "";
        message.metadata = object.metadata ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.issuanceDate = object.issuanceDate ?? undefined;
        message.open = object.open ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatch();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key);
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = bytesFromBase64(object.issuer);
        }
        if (object.project_key !== undefined && object.project_key !== null) {
            message.projectKey = BigInt(object.project_key);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
        }
        if (object.issuance_date !== undefined && object.issuance_date !== null) {
            message.issuanceDate = fromTimestamp(Timestamp.fromAmino(object.issuance_date));
        }
        if (object.open !== undefined && object.open !== null) {
            message.open = object.open;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key !== BigInt(0) ? message.key.toString() : undefined;
        obj.issuer = message.issuer ? base64FromBytes(message.issuer) : undefined;
        obj.project_key = message.projectKey !== BigInt(0) ? message.projectKey.toString() : undefined;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
        obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
        obj.issuance_date = message.issuanceDate ? Timestamp.toAmino(toTimestamp(message.issuanceDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        return obj;
    },
    fromAminoMsg(object) {
        return Batch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Batch.decode(message.value);
    },
    toProto(message) {
        return Batch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Batch",
            value: Batch.encode(message).finish()
        };
    }
};
function createBaseClassSequence() {
    return {
        creditTypeAbbrev: "",
        nextSequence: BigInt(0)
    };
}
export const ClassSequence = {
    typeUrl: "/regen.ecocredit.v1.ClassSequence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(10).string(message.creditTypeAbbrev);
        }
        if (message.nextSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 2:
                    message.nextSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClassSequence();
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassSequence();
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.next_sequence !== undefined && object.next_sequence !== null) {
            message.nextSequence = BigInt(object.next_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.next_sequence = message.nextSequence !== BigInt(0) ? message.nextSequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClassSequence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClassSequence.decode(message.value);
    },
    toProto(message) {
        return ClassSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassSequence",
            value: ClassSequence.encode(message).finish()
        };
    }
};
function createBaseProjectSequence() {
    return {
        classKey: BigInt(0),
        nextSequence: BigInt(0)
    };
}
export const ProjectSequence = {
    typeUrl: "/regen.ecocredit.v1.ProjectSequence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.classKey);
        }
        if (message.nextSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classKey = reader.uint64();
                    break;
                case 2:
                    message.nextSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProjectSequence();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseProjectSequence();
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.next_sequence !== undefined && object.next_sequence !== null) {
            message.nextSequence = BigInt(object.next_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
        obj.next_sequence = message.nextSequence !== BigInt(0) ? message.nextSequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ProjectSequence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProjectSequence.decode(message.value);
    },
    toProto(message) {
        return ProjectSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ProjectSequence",
            value: ProjectSequence.encode(message).finish()
        };
    }
};
function createBaseBatchSequence() {
    return {
        projectKey: BigInt(0),
        nextSequence: BigInt(0)
    };
}
export const BatchSequence = {
    typeUrl: "/regen.ecocredit.v1.BatchSequence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.projectKey);
        }
        if (message.nextSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectKey = reader.uint64();
                    break;
                case 2:
                    message.nextSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchSequence();
        message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? BigInt(object.projectKey.toString()) : BigInt(0);
        message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchSequence();
        if (object.project_key !== undefined && object.project_key !== null) {
            message.projectKey = BigInt(object.project_key);
        }
        if (object.next_sequence !== undefined && object.next_sequence !== null) {
            message.nextSequence = BigInt(object.next_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_key = message.projectKey !== BigInt(0) ? message.projectKey.toString() : undefined;
        obj.next_sequence = message.nextSequence !== BigInt(0) ? message.nextSequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchSequence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchSequence.decode(message.value);
    },
    toProto(message) {
        return BatchSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchSequence",
            value: BatchSequence.encode(message).finish()
        };
    }
};
function createBaseBatchBalance() {
    return {
        batchKey: BigInt(0),
        address: new Uint8Array(),
        tradableAmount: "",
        retiredAmount: "",
        escrowedAmount: ""
    };
}
export const BatchBalance = {
    typeUrl: "/regen.ecocredit.v1.BatchBalance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchKey);
        }
        if (message.address.length !== 0) {
            writer.uint32(18).bytes(message.address);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(26).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(34).string(message.retiredAmount);
        }
        if (message.escrowedAmount !== "") {
            writer.uint32(42).string(message.escrowedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchKey = reader.uint64();
                    break;
                case 2:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.tradableAmount = reader.string();
                    break;
                case 4:
                    message.retiredAmount = reader.string();
                    break;
                case 5:
                    message.escrowedAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchBalance();
        message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
        message.address = object.address ?? new Uint8Array();
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.escrowedAmount = object.escrowedAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchBalance();
        if (object.batch_key !== undefined && object.batch_key !== null) {
            message.batchKey = BigInt(object.batch_key);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.escrowed_amount !== undefined && object.escrowed_amount !== null) {
            message.escrowedAmount = object.escrowed_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_key = message.batchKey !== BigInt(0) ? message.batchKey.toString() : undefined;
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.escrowed_amount = message.escrowedAmount === "" ? undefined : message.escrowedAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchBalance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchBalance.decode(message.value);
    },
    toProto(message) {
        return BatchBalance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchBalance",
            value: BatchBalance.encode(message).finish()
        };
    }
};
function createBaseBatchSupply() {
    return {
        batchKey: BigInt(0),
        tradableAmount: "",
        retiredAmount: "",
        cancelledAmount: ""
    };
}
export const BatchSupply = {
    typeUrl: "/regen.ecocredit.v1.BatchSupply",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchKey);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.cancelledAmount !== "") {
            writer.uint32(34).string(message.cancelledAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchKey = reader.uint64();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.cancelledAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchSupply();
        message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.cancelledAmount = object.cancelledAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchSupply();
        if (object.batch_key !== undefined && object.batch_key !== null) {
            message.batchKey = BigInt(object.batch_key);
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
            message.cancelledAmount = object.cancelled_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_key = message.batchKey !== BigInt(0) ? message.batchKey.toString() : undefined;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchSupply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchSupply.decode(message.value);
    },
    toProto(message) {
        return BatchSupply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchSupply",
            value: BatchSupply.encode(message).finish()
        };
    }
};
function createBaseOriginTxIndex() {
    return {
        classKey: BigInt(0),
        id: "",
        source: ""
    };
}
export const OriginTxIndex = {
    typeUrl: "/regen.ecocredit.v1.OriginTxIndex",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.classKey);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.source !== "") {
            writer.uint32(26).string(message.source);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOriginTxIndex();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classKey = reader.uint64();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOriginTxIndex();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.id = object.id ?? "";
        message.source = object.source ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOriginTxIndex();
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
        obj.id = message.id === "" ? undefined : message.id;
        obj.source = message.source === "" ? undefined : message.source;
        return obj;
    },
    fromAminoMsg(object) {
        return OriginTxIndex.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OriginTxIndex.decode(message.value);
    },
    toProto(message) {
        return OriginTxIndex.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.OriginTxIndex",
            value: OriginTxIndex.encode(message).finish()
        };
    }
};
function createBaseBatchContract() {
    return {
        batchKey: BigInt(0),
        classKey: BigInt(0),
        contract: ""
    };
}
export const BatchContract = {
    typeUrl: "/regen.ecocredit.v1.BatchContract",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchKey);
        }
        if (message.classKey !== BigInt(0)) {
            writer.uint32(16).uint64(message.classKey);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchKey = reader.uint64();
                    break;
                case 2:
                    message.classKey = reader.uint64();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchContract();
        message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchContract();
        if (object.batch_key !== undefined && object.batch_key !== null) {
            message.batchKey = BigInt(object.batch_key);
        }
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_key = message.batchKey !== BigInt(0) ? message.batchKey.toString() : undefined;
        obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
        obj.contract = message.contract === "" ? undefined : message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchContract.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchContract.decode(message.value);
    },
    toProto(message) {
        return BatchContract.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchContract",
            value: BatchContract.encode(message).finish()
        };
    }
};
function createBaseClassCreatorAllowlist() {
    return {
        enabled: false
    };
}
export const ClassCreatorAllowlist = {
    typeUrl: "/regen.ecocredit.v1.ClassCreatorAllowlist",
    encode(message, writer = BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassCreatorAllowlist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseClassCreatorAllowlist();
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassCreatorAllowlist();
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return ClassCreatorAllowlist.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClassCreatorAllowlist.decode(message.value);
    },
    toProto(message) {
        return ClassCreatorAllowlist.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassCreatorAllowlist",
            value: ClassCreatorAllowlist.encode(message).finish()
        };
    }
};
function createBaseAllowedClassCreator() {
    return {
        address: new Uint8Array()
    };
}
export const AllowedClassCreator = {
    typeUrl: "/regen.ecocredit.v1.AllowedClassCreator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedClassCreator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllowedClassCreator();
        message.address = object.address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedClassCreator();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AllowedClassCreator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AllowedClassCreator.decode(message.value);
    },
    toProto(message) {
        return AllowedClassCreator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.AllowedClassCreator",
            value: AllowedClassCreator.encode(message).finish()
        };
    }
};
function createBaseClassFee() {
    return {
        fee: undefined
    };
}
export const ClassFee = {
    typeUrl: "/regen.ecocredit.v1.ClassFee",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseClassFee();
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassFee();
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClassFee.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClassFee.decode(message.value);
    },
    toProto(message) {
        return ClassFee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassFee",
            value: ClassFee.encode(message).finish()
        };
    }
};
function createBaseAllowedBridgeChain() {
    return {
        chainName: ""
    };
}
export const AllowedBridgeChain = {
    typeUrl: "/regen.ecocredit.v1.AllowedBridgeChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chainName !== "") {
            writer.uint32(10).string(message.chainName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedBridgeChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseAllowedBridgeChain();
        message.chainName = object.chainName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedBridgeChain();
        if (object.chain_name !== undefined && object.chain_name !== null) {
            message.chainName = object.chain_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_name = message.chainName === "" ? undefined : message.chainName;
        return obj;
    },
    fromAminoMsg(object) {
        return AllowedBridgeChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AllowedBridgeChain.decode(message.value);
    },
    toProto(message) {
        return AllowedBridgeChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.AllowedBridgeChain",
            value: AllowedBridgeChain.encode(message).finish()
        };
    }
};
