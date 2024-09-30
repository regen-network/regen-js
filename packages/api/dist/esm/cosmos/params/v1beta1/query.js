//@ts-nocheck
import { ParamChange } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsRequest();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace === "" ? undefined : message.subspace;
        obj.key = message.key === "" ? undefined : message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        param: ParamChange.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.param !== undefined) {
            ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.param = ParamChange.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.param !== undefined && object.param !== null) {
            message.param = ParamChange.fromAmino(object.param);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.param = message.param ? ParamChange.toAmino(message.param) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubspacesRequest() {
    return {};
}
export const QuerySubspacesRequest = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesRequest();
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
        const message = createBaseQuerySubspacesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQuerySubspacesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubspacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesRequest",
            value: QuerySubspacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySubspacesRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubspacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
            value: QuerySubspacesRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubspacesResponse() {
    return {
        subspaces: []
    };
}
export const QuerySubspacesResponse = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.subspaces) {
            Subspace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspaces.push(Subspace.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => Subspace.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? Subspace.toAmino(e) : undefined);
        }
        else {
            obj.subspaces = message.subspaces;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubspacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesResponse",
            value: QuerySubspacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySubspacesResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubspacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
            value: QuerySubspacesResponse.encode(message).finish()
        };
    }
};
function createBaseSubspace() {
    return {
        subspace: "",
        keys: []
    };
}
export const Subspace = {
    typeUrl: "/cosmos.params.v1beta1.Subspace",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubspace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubspace();
        message.subspace = object.subspace ?? "";
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubspace();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace === "" ? undefined : message.subspace;
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = message.keys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Subspace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Subspace",
            value: Subspace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Subspace.decode(message.value);
    },
    toProto(message) {
        return Subspace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.Subspace",
            value: Subspace.encode(message).finish()
        };
    }
};
