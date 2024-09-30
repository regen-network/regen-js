//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseDataID() {
    return {
        id: new Uint8Array(),
        iri: ""
    };
}
export const DataID = {
    typeUrl: "/regen.data.v1.DataID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.iri !== "") {
            writer.uint32(18).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDataID();
        message.id = object.id ?? new Uint8Array();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDataID();
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return DataID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DataID.decode(message.value);
    },
    toProto(message) {
        return DataID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.DataID",
            value: DataID.encode(message).finish()
        };
    }
};
function createBaseDataAnchor() {
    return {
        id: new Uint8Array(),
        timestamp: undefined
    };
}
export const DataAnchor = {
    typeUrl: "/regen.data.v1.DataAnchor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAnchor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDataAnchor();
        message.id = object.id ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDataAnchor();
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DataAnchor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DataAnchor.decode(message.value);
    },
    toProto(message) {
        return DataAnchor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.DataAnchor",
            value: DataAnchor.encode(message).finish()
        };
    }
};
function createBaseDataAttestor() {
    return {
        id: new Uint8Array(),
        attestor: new Uint8Array(),
        timestamp: undefined
    };
}
export const DataAttestor = {
    typeUrl: "/regen.data.v1.DataAttestor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.attestor.length !== 0) {
            writer.uint32(18).bytes(message.attestor);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataAttestor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.attestor = reader.bytes();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDataAttestor();
        message.id = object.id ?? new Uint8Array();
        message.attestor = object.attestor ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDataAttestor();
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = bytesFromBase64(object.attestor);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        obj.attestor = message.attestor ? base64FromBytes(message.attestor) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DataAttestor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DataAttestor.decode(message.value);
    },
    toProto(message) {
        return DataAttestor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.DataAttestor",
            value: DataAttestor.encode(message).finish()
        };
    }
};
function createBaseResolver() {
    return {
        id: BigInt(0),
        url: "",
        manager: new Uint8Array()
    };
}
export const Resolver = {
    typeUrl: "/regen.data.v1.Resolver",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.manager.length !== 0) {
            writer.uint32(26).bytes(message.manager);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResolver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.manager = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResolver();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.url = object.url ?? "";
        message.manager = object.manager ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResolver();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.manager !== undefined && object.manager !== null) {
            message.manager = bytesFromBase64(object.manager);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.url = message.url === "" ? undefined : message.url;
        obj.manager = message.manager ? base64FromBytes(message.manager) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Resolver.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Resolver.decode(message.value);
    },
    toProto(message) {
        return Resolver.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.Resolver",
            value: Resolver.encode(message).finish()
        };
    }
};
function createBaseDataResolver() {
    return {
        id: new Uint8Array(),
        resolverId: BigInt(0)
    };
}
export const DataResolver = {
    typeUrl: "/regen.data.v1.DataResolver",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.resolverId !== BigInt(0)) {
            writer.uint32(16).uint64(message.resolverId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataResolver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.resolverId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDataResolver();
        message.id = object.id ?? new Uint8Array();
        message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? BigInt(object.resolverId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDataResolver();
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        if (object.resolver_id !== undefined && object.resolver_id !== null) {
            message.resolverId = BigInt(object.resolver_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        obj.resolver_id = message.resolverId !== BigInt(0) ? message.resolverId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DataResolver.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DataResolver.decode(message.value);
    },
    toProto(message) {
        return DataResolver.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.DataResolver",
            value: DataResolver.encode(message).finish()
        };
    }
};
