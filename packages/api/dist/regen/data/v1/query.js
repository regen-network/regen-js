"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolverInfo = exports.AttestationInfo = exports.AnchorInfo = exports.ConvertHashToIRIResponse = exports.ConvertHashToIRIRequest = exports.ConvertIRIToHashResponse = exports.ConvertIRIToHashRequest = exports.QueryResolversByURLResponse = exports.QueryResolversByURLRequest = exports.QueryResolversByHashResponse = exports.QueryResolversByHashRequest = exports.QueryResolversByIRIResponse = exports.QueryResolversByIRIRequest = exports.QueryResolverResponse = exports.QueryResolverRequest = exports.QueryAttestationsByHashResponse = exports.QueryAttestationsByHashRequest = exports.QueryAttestationsByIRIResponse = exports.QueryAttestationsByIRIRequest = exports.QueryAttestationsByAttestorResponse = exports.QueryAttestationsByAttestorRequest = exports.QueryAnchorByHashResponse = exports.QueryAnchorByHashRequest = exports.QueryAnchorByIRIResponse = exports.QueryAnchorByIRIRequest = void 0;
//@ts-nocheck
const types_1 = require("./types");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryAnchorByIRIRequest() {
    return {
        iri: ""
    };
}
exports.QueryAnchorByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryAnchorByIRIRequest();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnchorByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAnchorByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnchorByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest",
            value: exports.QueryAnchorByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnchorByIRIResponse() {
    return {
        anchor: undefined
    };
}
exports.QueryAnchorByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.anchor !== undefined) {
            exports.AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anchor = exports.AnchorInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAnchorByIRIResponse();
        message.anchor = object.anchor !== undefined && object.anchor !== null ? exports.AnchorInfo.fromPartial(object.anchor) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByIRIResponse();
        if (object.anchor !== undefined && object.anchor !== null) {
            message.anchor = exports.AnchorInfo.fromAmino(object.anchor);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.anchor = message.anchor ? exports.AnchorInfo.toAmino(message.anchor) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnchorByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAnchorByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnchorByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse",
            value: exports.QueryAnchorByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAnchorByHashRequest() {
    return {
        contentHash: undefined
    };
}
exports.QueryAnchorByHashRequest = {
    typeUrl: "/regen.data.v1.QueryAnchorByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryAnchorByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnchorByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAnchorByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnchorByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByHashRequest",
            value: exports.QueryAnchorByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnchorByHashResponse() {
    return {
        anchor: undefined
    };
}
exports.QueryAnchorByHashResponse = {
    typeUrl: "/regen.data.v1.QueryAnchorByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.anchor !== undefined) {
            exports.AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anchor = exports.AnchorInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAnchorByHashResponse();
        message.anchor = object.anchor !== undefined && object.anchor !== null ? exports.AnchorInfo.fromPartial(object.anchor) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByHashResponse();
        if (object.anchor !== undefined && object.anchor !== null) {
            message.anchor = exports.AnchorInfo.fromAmino(object.anchor);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.anchor = message.anchor ? exports.AnchorInfo.toAmino(message.anchor) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAnchorByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAnchorByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAnchorByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByHashResponse",
            value: exports.QueryAnchorByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByAttestorRequest() {
    return {
        attestor: "",
        pagination: undefined
    };
}
exports.QueryAttestationsByAttestorRequest = {
    typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.attestor !== "") {
            writer.uint32(10).string(message.attestor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByAttestorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestor = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsByAttestorRequest();
        message.attestor = object.attestor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByAttestorRequest();
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsByAttestorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsByAttestorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsByAttestorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest",
            value: exports.QueryAttestationsByAttestorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByAttestorResponse() {
    return {
        attestations: [],
        pagination: undefined
    };
}
exports.QueryAttestationsByAttestorResponse = {
    typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attestations) {
            exports.AttestationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByAttestorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(exports.AttestationInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsByAttestorResponse();
        message.attestations = object.attestations?.map(e => exports.AttestationInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByAttestorResponse();
        message.attestations = object.attestations?.map(e => exports.AttestationInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? exports.AttestationInfo.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsByAttestorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsByAttestorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsByAttestorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse",
            value: exports.QueryAttestationsByAttestorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
exports.QueryAttestationsByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsByIRIRequest();
        message.iri = object.iri ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest",
            value: exports.QueryAttestationsByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByIRIResponse() {
    return {
        attestations: [],
        pagination: undefined
    };
}
exports.QueryAttestationsByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attestations) {
            exports.AttestationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(exports.AttestationInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsByIRIResponse();
        message.attestations = object.attestations?.map(e => exports.AttestationInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByIRIResponse();
        message.attestations = object.attestations?.map(e => exports.AttestationInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? exports.AttestationInfo.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse",
            value: exports.QueryAttestationsByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
exports.QueryAttestationsByHashRequest = {
    typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest",
            value: exports.QueryAttestationsByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByHashResponse() {
    return {
        attestations: [],
        pagination: undefined
    };
}
exports.QueryAttestationsByHashResponse = {
    typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attestations) {
            exports.AttestationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(exports.AttestationInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsByHashResponse();
        message.attestations = object.attestations?.map(e => exports.AttestationInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByHashResponse();
        message.attestations = object.attestations?.map(e => exports.AttestationInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? exports.AttestationInfo.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse",
            value: exports.QueryAttestationsByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolverRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryResolverRequest = {
    typeUrl: "/regen.data.v1.QueryResolverRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolverRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolverRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolverRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolverRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolverRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolverRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverRequest",
            value: exports.QueryResolverRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolverResponse() {
    return {
        resolver: undefined
    };
}
exports.QueryResolverResponse = {
    typeUrl: "/regen.data.v1.QueryResolverResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.resolver !== undefined) {
            exports.ResolverInfo.encode(message.resolver, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolver = exports.ResolverInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolverResponse();
        message.resolver = object.resolver !== undefined && object.resolver !== null ? exports.ResolverInfo.fromPartial(object.resolver) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolverResponse();
        if (object.resolver !== undefined && object.resolver !== null) {
            message.resolver = exports.ResolverInfo.fromAmino(object.resolver);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.resolver = message.resolver ? exports.ResolverInfo.toAmino(message.resolver) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolverResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolverResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverResponse",
            value: exports.QueryResolverResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
exports.QueryResolversByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByIRIRequest();
        message.iri = object.iri ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
            value: exports.QueryResolversByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIResponse() {
    return {
        resolvers: [],
        pagination: undefined
    };
}
exports.QueryResolversByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.resolvers) {
            exports.ResolverInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvers.push(exports.ResolverInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByIRIResponse();
        message.resolvers = object.resolvers?.map(e => exports.ResolverInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIResponse();
        message.resolvers = object.resolvers?.map(e => exports.ResolverInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolvers) {
            obj.resolvers = message.resolvers.map(e => e ? exports.ResolverInfo.toAmino(e) : undefined);
        }
        else {
            obj.resolvers = message.resolvers;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
            value: exports.QueryResolversByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
exports.QueryResolversByHashRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
            value: exports.QueryResolversByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashResponse() {
    return {
        resolvers: [],
        pagination: undefined
    };
}
exports.QueryResolversByHashResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.resolvers) {
            exports.ResolverInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvers.push(exports.ResolverInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByHashResponse();
        message.resolvers = object.resolvers?.map(e => exports.ResolverInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashResponse();
        message.resolvers = object.resolvers?.map(e => exports.ResolverInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolvers) {
            obj.resolvers = message.resolvers.map(e => e ? exports.ResolverInfo.toAmino(e) : undefined);
        }
        else {
            obj.resolvers = message.resolvers;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
            value: exports.QueryResolversByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByURLRequest() {
    return {
        url: "",
        pagination: undefined
    };
}
exports.QueryResolversByURLRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByURLRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByURLRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByURLRequest();
        message.url = object.url ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByURLRequest();
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.url = message.url === "" ? undefined : message.url;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByURLRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByURLRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByURLRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByURLRequest",
            value: exports.QueryResolversByURLRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByURLResponse() {
    return {
        resolvers: [],
        pagination: undefined
    };
}
exports.QueryResolversByURLResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByURLResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.resolvers) {
            exports.ResolverInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByURLResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvers.push(exports.ResolverInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByURLResponse();
        message.resolvers = object.resolvers?.map(e => exports.ResolverInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByURLResponse();
        message.resolvers = object.resolvers?.map(e => exports.ResolverInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolvers) {
            obj.resolvers = message.resolvers.map(e => e ? exports.ResolverInfo.toAmino(e) : undefined);
        }
        else {
            obj.resolvers = message.resolvers;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByURLResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByURLResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByURLResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByURLResponse",
            value: exports.QueryResolversByURLResponse.encode(message).finish()
        };
    }
};
function createBaseConvertIRIToHashRequest() {
    return {
        iri: ""
    };
}
exports.ConvertIRIToHashRequest = {
    typeUrl: "/regen.data.v1.ConvertIRIToHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConvertIRIToHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseConvertIRIToHashRequest();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConvertIRIToHashRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConvertIRIToHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConvertIRIToHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConvertIRIToHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertIRIToHashRequest",
            value: exports.ConvertIRIToHashRequest.encode(message).finish()
        };
    }
};
function createBaseConvertIRIToHashResponse() {
    return {
        contentHash: undefined
    };
}
exports.ConvertIRIToHashResponse = {
    typeUrl: "/regen.data.v1.ConvertIRIToHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConvertIRIToHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseConvertIRIToHashResponse();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConvertIRIToHashResponse();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConvertIRIToHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConvertIRIToHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConvertIRIToHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertIRIToHashResponse",
            value: exports.ConvertIRIToHashResponse.encode(message).finish()
        };
    }
};
function createBaseConvertHashToIRIRequest() {
    return {
        contentHash: undefined
    };
}
exports.ConvertHashToIRIRequest = {
    typeUrl: "/regen.data.v1.ConvertHashToIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConvertHashToIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseConvertHashToIRIRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConvertHashToIRIRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConvertHashToIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConvertHashToIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConvertHashToIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertHashToIRIRequest",
            value: exports.ConvertHashToIRIRequest.encode(message).finish()
        };
    }
};
function createBaseConvertHashToIRIResponse() {
    return {
        iri: ""
    };
}
exports.ConvertHashToIRIResponse = {
    typeUrl: "/regen.data.v1.ConvertHashToIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConvertHashToIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseConvertHashToIRIResponse();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConvertHashToIRIResponse();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConvertHashToIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConvertHashToIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConvertHashToIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertHashToIRIResponse",
            value: exports.ConvertHashToIRIResponse.encode(message).finish()
        };
    }
};
function createBaseAnchorInfo() {
    return {
        iri: "",
        contentHash: undefined,
        timestamp: undefined
    };
}
exports.AnchorInfo = {
    typeUrl: "/regen.data.v1.AnchorInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAnchorInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = createBaseAnchorInfo();
        message.iri = object.iri ?? "";
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAnchorInfo();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AnchorInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AnchorInfo.decode(message.value);
    },
    toProto(message) {
        return exports.AnchorInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.AnchorInfo",
            value: exports.AnchorInfo.encode(message).finish()
        };
    }
};
function createBaseAttestationInfo() {
    return {
        iri: "",
        attestor: "",
        timestamp: undefined
    };
}
exports.AttestationInfo = {
    typeUrl: "/regen.data.v1.AttestationInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.attestor !== "") {
            writer.uint32(18).string(message.attestor);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestationInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.attestor = reader.string();
                    break;
                case 3:
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
        const message = createBaseAttestationInfo();
        message.iri = object.iri ?? "";
        message.attestor = object.attestor ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttestationInfo();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AttestationInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AttestationInfo.decode(message.value);
    },
    toProto(message) {
        return exports.AttestationInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.AttestationInfo",
            value: exports.AttestationInfo.encode(message).finish()
        };
    }
};
function createBaseResolverInfo() {
    return {
        id: BigInt(0),
        url: "",
        manager: ""
    };
}
exports.ResolverInfo = {
    typeUrl: "/regen.data.v1.ResolverInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.manager !== "") {
            writer.uint32(26).string(message.manager);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResolverInfo();
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
                    message.manager = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResolverInfo();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.url = object.url ?? "";
        message.manager = object.manager ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResolverInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.manager !== undefined && object.manager !== null) {
            message.manager = object.manager;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.url = message.url === "" ? undefined : message.url;
        obj.manager = message.manager === "" ? undefined : message.manager;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResolverInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResolverInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ResolverInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ResolverInfo",
            value: exports.ResolverInfo.encode(message).finish()
        };
    }
};
