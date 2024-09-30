"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subspace = exports.QuerySubspacesResponse = exports.QuerySubspacesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const params_1 = require("./params");
const binary_1 = require("../../../binary");
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        param: params_1.ParamChange.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.param !== undefined) {
            params_1.ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.param = params_1.ParamChange.decode(reader, reader.uint32());
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
        message.param = object.param !== undefined && object.param !== null ? params_1.ParamChange.fromPartial(object.param) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.param !== undefined && object.param !== null) {
            message.param = params_1.ParamChange.fromAmino(object.param);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.param = message.param ? params_1.ParamChange.toAmino(message.param) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubspacesRequest() {
    return {};
}
exports.QuerySubspacesRequest = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QuerySubspacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesRequest",
            value: exports.QuerySubspacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySubspacesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubspacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
            value: exports.QuerySubspacesRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubspacesResponse() {
    return {
        subspaces: []
    };
}
exports.QuerySubspacesResponse = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.subspaces) {
            exports.Subspace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspaces.push(exports.Subspace.decode(reader, reader.uint32()));
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
        message.subspaces = object.subspaces?.map(e => exports.Subspace.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => exports.Subspace.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? exports.Subspace.toAmino(e) : undefined);
        }
        else {
            obj.subspaces = message.subspaces;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubspacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesResponse",
            value: exports.QuerySubspacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySubspacesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubspacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
            value: exports.QuerySubspacesResponse.encode(message).finish()
        };
    }
};
function createBaseSubspace() {
    return {
        subspace: "",
        keys: []
    };
}
exports.Subspace = {
    typeUrl: "/cosmos.params.v1beta1.Subspace",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.Subspace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Subspace",
            value: exports.Subspace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Subspace.decode(message.value);
    },
    toProto(message) {
        return exports.Subspace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.Subspace",
            value: exports.Subspace.encode(message).finish()
        };
    }
};
