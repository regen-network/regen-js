//@ts-nocheck
import { ContentHash } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseQueryAnchorByIRIRequest() {
    return {
        iri: ""
    };
}
export const QueryAnchorByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAnchorByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAnchorByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAnchorByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest",
            value: QueryAnchorByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnchorByIRIResponse() {
    return {
        anchor: undefined
    };
}
export const QueryAnchorByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.anchor !== undefined) {
            AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anchor = AnchorInfo.decode(reader, reader.uint32());
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
        message.anchor = object.anchor !== undefined && object.anchor !== null ? AnchorInfo.fromPartial(object.anchor) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByIRIResponse();
        if (object.anchor !== undefined && object.anchor !== null) {
            message.anchor = AnchorInfo.fromAmino(object.anchor);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.anchor = message.anchor ? AnchorInfo.toAmino(message.anchor) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAnchorByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAnchorByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAnchorByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse",
            value: QueryAnchorByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAnchorByHashRequest() {
    return {
        contentHash: undefined
    };
}
export const QueryAnchorByHashRequest = {
    typeUrl: "/regen.data.v1.QueryAnchorByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAnchorByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAnchorByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAnchorByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByHashRequest",
            value: QueryAnchorByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAnchorByHashResponse() {
    return {
        anchor: undefined
    };
}
export const QueryAnchorByHashResponse = {
    typeUrl: "/regen.data.v1.QueryAnchorByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.anchor !== undefined) {
            AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAnchorByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anchor = AnchorInfo.decode(reader, reader.uint32());
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
        message.anchor = object.anchor !== undefined && object.anchor !== null ? AnchorInfo.fromPartial(object.anchor) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAnchorByHashResponse();
        if (object.anchor !== undefined && object.anchor !== null) {
            message.anchor = AnchorInfo.fromAmino(object.anchor);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.anchor = message.anchor ? AnchorInfo.toAmino(message.anchor) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAnchorByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAnchorByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAnchorByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAnchorByHashResponse",
            value: QueryAnchorByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByAttestorRequest() {
    return {
        attestor: "",
        pagination: undefined
    };
}
export const QueryAttestationsByAttestorRequest = {
    typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.attestor !== "") {
            writer.uint32(10).string(message.attestor);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByAttestorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestor = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByAttestorRequest();
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsByAttestorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsByAttestorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsByAttestorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest",
            value: QueryAttestationsByAttestorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByAttestorResponse() {
    return {
        attestations: [],
        pagination: undefined
    };
}
export const QueryAttestationsByAttestorResponse = {
    typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attestations) {
            AttestationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByAttestorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(AttestationInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByAttestorResponse();
        message.attestations = object.attestations?.map(e => AttestationInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsByAttestorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsByAttestorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsByAttestorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse",
            value: QueryAttestationsByAttestorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
export const QueryAttestationsByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest",
            value: QueryAttestationsByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByIRIResponse() {
    return {
        attestations: [],
        pagination: undefined
    };
}
export const QueryAttestationsByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attestations) {
            AttestationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(AttestationInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByIRIResponse();
        message.attestations = object.attestations?.map(e => AttestationInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse",
            value: QueryAttestationsByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
export const QueryAttestationsByHashRequest = {
    typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest",
            value: QueryAttestationsByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsByHashResponse() {
    return {
        attestations: [],
        pagination: undefined
    };
}
export const QueryAttestationsByHashResponse = {
    typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attestations) {
            AttestationInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(AttestationInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestationsByHashResponse();
        message.attestations = object.attestations?.map(e => AttestationInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse",
            value: QueryAttestationsByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolverRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryResolverRequest = {
    typeUrl: "/regen.data.v1.QueryResolverRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryResolverRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolverRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolverRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverRequest",
            value: QueryResolverRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolverResponse() {
    return {
        resolver: undefined
    };
}
export const QueryResolverResponse = {
    typeUrl: "/regen.data.v1.QueryResolverResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.resolver !== undefined) {
            ResolverInfo.encode(message.resolver, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolverResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolver = ResolverInfo.decode(reader, reader.uint32());
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
        message.resolver = object.resolver !== undefined && object.resolver !== null ? ResolverInfo.fromPartial(object.resolver) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolverResponse();
        if (object.resolver !== undefined && object.resolver !== null) {
            message.resolver = ResolverInfo.fromAmino(object.resolver);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.resolver = message.resolver ? ResolverInfo.toAmino(message.resolver) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolverResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolverResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolverResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverResponse",
            value: QueryResolverResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
export const QueryResolversByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
            value: QueryResolversByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIResponse() {
    return {
        resolvers: [],
        pagination: undefined
    };
}
export const QueryResolversByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.resolvers) {
            ResolverInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvers.push(ResolverInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIResponse();
        message.resolvers = object.resolvers?.map(e => ResolverInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolvers) {
            obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
        }
        else {
            obj.resolvers = message.resolvers;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
            value: QueryResolversByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
export const QueryResolversByHashRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
            value: QueryResolversByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashResponse() {
    return {
        resolvers: [],
        pagination: undefined
    };
}
export const QueryResolversByHashResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.resolvers) {
            ResolverInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvers.push(ResolverInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashResponse();
        message.resolvers = object.resolvers?.map(e => ResolverInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolvers) {
            obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
        }
        else {
            obj.resolvers = message.resolvers;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
            value: QueryResolversByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByURLRequest() {
    return {
        url: "",
        pagination: undefined
    };
}
export const QueryResolversByURLRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByURLRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByURLRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByURLRequest();
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.url = message.url === "" ? undefined : message.url;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByURLRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByURLRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByURLRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByURLRequest",
            value: QueryResolversByURLRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByURLResponse() {
    return {
        resolvers: [],
        pagination: undefined
    };
}
export const QueryResolversByURLResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByURLResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.resolvers) {
            ResolverInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByURLResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolvers.push(ResolverInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByURLResponse();
        message.resolvers = object.resolvers?.map(e => ResolverInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolvers) {
            obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
        }
        else {
            obj.resolvers = message.resolvers;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByURLResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByURLResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByURLResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByURLResponse",
            value: QueryResolversByURLResponse.encode(message).finish()
        };
    }
};
function createBaseConvertIRIToHashRequest() {
    return {
        iri: ""
    };
}
export const ConvertIRIToHashRequest = {
    typeUrl: "/regen.data.v1.ConvertIRIToHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ConvertIRIToHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConvertIRIToHashRequest.decode(message.value);
    },
    toProto(message) {
        return ConvertIRIToHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertIRIToHashRequest",
            value: ConvertIRIToHashRequest.encode(message).finish()
        };
    }
};
function createBaseConvertIRIToHashResponse() {
    return {
        contentHash: undefined
    };
}
export const ConvertIRIToHashResponse = {
    typeUrl: "/regen.data.v1.ConvertIRIToHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConvertIRIToHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConvertIRIToHashResponse();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConvertIRIToHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConvertIRIToHashResponse.decode(message.value);
    },
    toProto(message) {
        return ConvertIRIToHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertIRIToHashResponse",
            value: ConvertIRIToHashResponse.encode(message).finish()
        };
    }
};
function createBaseConvertHashToIRIRequest() {
    return {
        contentHash: undefined
    };
}
export const ConvertHashToIRIRequest = {
    typeUrl: "/regen.data.v1.ConvertHashToIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConvertHashToIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConvertHashToIRIRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConvertHashToIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConvertHashToIRIRequest.decode(message.value);
    },
    toProto(message) {
        return ConvertHashToIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertHashToIRIRequest",
            value: ConvertHashToIRIRequest.encode(message).finish()
        };
    }
};
function createBaseConvertHashToIRIResponse() {
    return {
        iri: ""
    };
}
export const ConvertHashToIRIResponse = {
    typeUrl: "/regen.data.v1.ConvertHashToIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ConvertHashToIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConvertHashToIRIResponse.decode(message.value);
    },
    toProto(message) {
        return ConvertHashToIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ConvertHashToIRIResponse",
            value: ConvertHashToIRIResponse.encode(message).finish()
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
export const AnchorInfo = {
    typeUrl: "/regen.data.v1.AnchorInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAnchorInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        const message = createBaseAnchorInfo();
        message.iri = object.iri ?? "";
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAnchorInfo();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AnchorInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AnchorInfo.decode(message.value);
    },
    toProto(message) {
        return AnchorInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.AnchorInfo",
            value: AnchorInfo.encode(message).finish()
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
export const AttestationInfo = {
    typeUrl: "/regen.data.v1.AttestationInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.attestor !== "") {
            writer.uint32(18).string(message.attestor);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AttestationInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AttestationInfo.decode(message.value);
    },
    toProto(message) {
        return AttestationInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.AttestationInfo",
            value: AttestationInfo.encode(message).finish()
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
export const ResolverInfo = {
    typeUrl: "/regen.data.v1.ResolverInfo",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ResolverInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResolverInfo.decode(message.value);
    },
    toProto(message) {
        return ResolverInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ResolverInfo",
            value: ResolverInfo.encode(message).finish()
        };
    }
};
