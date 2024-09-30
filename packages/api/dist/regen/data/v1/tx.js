"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRegisterResolverResponse = exports.MsgRegisterResolver = exports.MsgDefineResolverResponse = exports.MsgDefineResolver = exports.MsgAttestResponse = exports.MsgAttest = exports.MsgAnchorResponse = exports.MsgAnchor = void 0;
//@ts-nocheck
const types_1 = require("./types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgAnchor() {
    return {
        sender: "",
        contentHash: undefined
    };
}
exports.MsgAnchor = {
    typeUrl: "/regen.data.v1.MsgAnchor",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAnchor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAnchor();
        message.sender = object.sender ?? "";
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAnchor();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAnchor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen-ledger/MsgAnchor",
            value: exports.MsgAnchor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAnchor.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAnchor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgAnchor",
            value: exports.MsgAnchor.encode(message).finish()
        };
    }
};
function createBaseMsgAnchorResponse() {
    return {
        iri: "",
        timestamp: undefined
    };
}
exports.MsgAnchorResponse = {
    typeUrl: "/regen.data.v1.MsgAnchorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAnchorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAnchorResponse();
        message.iri = object.iri ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAnchorResponse();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAnchorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAnchorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAnchorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgAnchorResponse",
            value: exports.MsgAnchorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAttest() {
    return {
        attestor: "",
        contentHashes: []
    };
}
exports.MsgAttest = {
    typeUrl: "/regen.data.v1.MsgAttest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.attestor !== "") {
            writer.uint32(10).string(message.attestor);
        }
        for (const v of message.contentHashes) {
            types_1.ContentHash_Graph.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAttest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestor = reader.string();
                    break;
                case 2:
                    message.contentHashes.push(types_1.ContentHash_Graph.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAttest();
        message.attestor = object.attestor ?? "";
        message.contentHashes = object.contentHashes?.map(e => types_1.ContentHash_Graph.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAttest();
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        message.contentHashes = object.content_hashes?.map(e => types_1.ContentHash_Graph.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        if (message.contentHashes) {
            obj.content_hashes = message.contentHashes.map(e => e ? types_1.ContentHash_Graph.toAmino(e) : undefined);
        }
        else {
            obj.content_hashes = message.contentHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAttest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen-ledger/MsgAttest",
            value: exports.MsgAttest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAttest.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAttest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgAttest",
            value: exports.MsgAttest.encode(message).finish()
        };
    }
};
function createBaseMsgAttestResponse() {
    return {
        iris: [],
        timestamp: undefined
    };
}
exports.MsgAttestResponse = {
    typeUrl: "/regen.data.v1.MsgAttestResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.iris) {
            writer.uint32(10).string(v);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAttestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iris.push(reader.string());
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAttestResponse();
        message.iris = object.iris?.map(e => e) || [];
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAttestResponse();
        message.iris = object.iris?.map(e => e) || [];
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.iris) {
            obj.iris = message.iris.map(e => e);
        }
        else {
            obj.iris = message.iris;
        }
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAttestResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAttestResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAttestResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgAttestResponse",
            value: exports.MsgAttestResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDefineResolver() {
    return {
        manager: "",
        resolverUrl: ""
    };
}
exports.MsgDefineResolver = {
    typeUrl: "/regen.data.v1.MsgDefineResolver",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.manager !== "") {
            writer.uint32(10).string(message.manager);
        }
        if (message.resolverUrl !== "") {
            writer.uint32(18).string(message.resolverUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDefineResolver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.manager = reader.string();
                    break;
                case 2:
                    message.resolverUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDefineResolver();
        message.manager = object.manager ?? "";
        message.resolverUrl = object.resolverUrl ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDefineResolver();
        if (object.manager !== undefined && object.manager !== null) {
            message.manager = object.manager;
        }
        if (object.resolver_url !== undefined && object.resolver_url !== null) {
            message.resolverUrl = object.resolver_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.manager = message.manager === "" ? undefined : message.manager;
        obj.resolver_url = message.resolverUrl === "" ? undefined : message.resolverUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDefineResolver.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen-ledger/MsgDefineResolver",
            value: exports.MsgDefineResolver.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDefineResolver.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDefineResolver.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgDefineResolver",
            value: exports.MsgDefineResolver.encode(message).finish()
        };
    }
};
function createBaseMsgDefineResolverResponse() {
    return {
        resolverId: BigInt(0)
    };
}
exports.MsgDefineResolverResponse = {
    typeUrl: "/regen.data.v1.MsgDefineResolverResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.resolverId !== BigInt(0)) {
            writer.uint32(8).uint64(message.resolverId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDefineResolverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgDefineResolverResponse();
        message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? BigInt(object.resolverId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDefineResolverResponse();
        if (object.resolver_id !== undefined && object.resolver_id !== null) {
            message.resolverId = BigInt(object.resolver_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.resolver_id = message.resolverId !== BigInt(0) ? message.resolverId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDefineResolverResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDefineResolverResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDefineResolverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgDefineResolverResponse",
            value: exports.MsgDefineResolverResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterResolver() {
    return {
        manager: "",
        resolverId: BigInt(0),
        contentHashes: []
    };
}
exports.MsgRegisterResolver = {
    typeUrl: "/regen.data.v1.MsgRegisterResolver",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.manager !== "") {
            writer.uint32(10).string(message.manager);
        }
        if (message.resolverId !== BigInt(0)) {
            writer.uint32(16).uint64(message.resolverId);
        }
        for (const v of message.contentHashes) {
            types_1.ContentHash.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterResolver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.manager = reader.string();
                    break;
                case 2:
                    message.resolverId = reader.uint64();
                    break;
                case 3:
                    message.contentHashes.push(types_1.ContentHash.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterResolver();
        message.manager = object.manager ?? "";
        message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? BigInt(object.resolverId.toString()) : BigInt(0);
        message.contentHashes = object.contentHashes?.map(e => types_1.ContentHash.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterResolver();
        if (object.manager !== undefined && object.manager !== null) {
            message.manager = object.manager;
        }
        if (object.resolver_id !== undefined && object.resolver_id !== null) {
            message.resolverId = BigInt(object.resolver_id);
        }
        message.contentHashes = object.content_hashes?.map(e => types_1.ContentHash.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.manager = message.manager === "" ? undefined : message.manager;
        obj.resolver_id = message.resolverId !== BigInt(0) ? message.resolverId.toString() : undefined;
        if (message.contentHashes) {
            obj.content_hashes = message.contentHashes.map(e => e ? types_1.ContentHash.toAmino(e) : undefined);
        }
        else {
            obj.content_hashes = message.contentHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterResolver.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen-ledger/MsgRegisterResolver",
            value: exports.MsgRegisterResolver.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterResolver.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterResolver.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgRegisterResolver",
            value: exports.MsgRegisterResolver.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterResolverResponse() {
    return {};
}
exports.MsgRegisterResolverResponse = {
    typeUrl: "/regen.data.v1.MsgRegisterResolverResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterResolverResponse();
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
        const message = createBaseMsgRegisterResolverResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterResolverResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterResolverResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterResolverResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterResolverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.MsgRegisterResolverResponse",
            value: exports.MsgRegisterResolverResponse.encode(message).finish()
        };
    }
};
