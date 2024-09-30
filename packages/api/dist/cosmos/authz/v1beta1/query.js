"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGranteeGrantsResponse = exports.QueryGranteeGrantsRequest = exports.QueryGranterGrantsResponse = exports.QueryGranterGrantsRequest = exports.QueryGrantsResponse = exports.QueryGrantsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const authz_1 = require("./authz");
const binary_1 = require("../../../binary");
function createBaseQueryGrantsRequest() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: "",
        pagination: undefined
    };
}
exports.QueryGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msgTypeUrl !== "") {
            writer.uint32(26).string(message.msgTypeUrl);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.msgTypeUrl = reader.string();
                    break;
                case 4:
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
        const message = createBaseQueryGrantsRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGrantsRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsRequest",
            value: exports.QueryGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
            value: exports.QueryGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
exports.QueryGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            authz_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(authz_1.Grant.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.Grant.toAmino(e) : undefined);
        }
        else {
            obj.grants = message.grants;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsResponse",
            value: exports.QueryGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
            value: exports.QueryGrantsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGranterGrantsRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
exports.QueryGranterGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranterGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
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
        const message = createBaseQueryGranterGrantsRequest();
        message.granter = object.granter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranterGrantsRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGranterGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranterGrantsRequest",
            value: exports.QueryGranterGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranterGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranterGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
            value: exports.QueryGranterGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGranterGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
exports.QueryGranterGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranterGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranterGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.grants = message.grants;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGranterGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranterGrantsResponse",
            value: exports.QueryGranterGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranterGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranterGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
            value: exports.QueryGranterGrantsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGranteeGrantsRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
exports.QueryGranteeGrantsRequest = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranteeGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
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
        const message = createBaseQueryGranteeGrantsRequest();
        message.grantee = object.grantee ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranteeGrantsRequest();
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGranteeGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranteeGrantsRequest",
            value: exports.QueryGranteeGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranteeGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranteeGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
            value: exports.QueryGranteeGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGranteeGrantsResponse() {
    return {
        grants: [],
        pagination: undefined
    };
}
exports.QueryGranteeGrantsResponse = {
    typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.grants) {
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGranteeGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGranteeGrantsResponse();
        message.grants = object.grants?.map(e => authz_1.GrantAuthorization.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? authz_1.GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.grants = message.grants;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGranteeGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGranteeGrantsResponse",
            value: exports.QueryGranteeGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGranteeGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGranteeGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
            value: exports.QueryGranteeGrantsResponse.encode(message).finish()
        };
    }
};
