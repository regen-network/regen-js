"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleAccountI_ToAmino = exports.ModuleAccountI_FromAmino = exports.ModuleAccountI_InterfaceDecoder = exports.AccountI_ToAmino = exports.AccountI_FromAmino = exports.AccountI_InterfaceDecoder = exports.QueryAccountAddressByIDResponse = exports.QueryAccountAddressByIDRequest = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.QueryModuleAccountByNameResponse = exports.QueryModuleAccountByNameRequest = exports.QueryModuleAccountsResponse = exports.QueryModuleAccountsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const any_1 = require("../../../google/protobuf/any");
const auth_1 = require("./auth");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: exports.QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
            value: exports.QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.QueryAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => (0, exports.AccountI_FromAmino)(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? (0, exports.AccountI_ToAmino)(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsResponse",
            value: exports.QueryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
            value: exports.QueryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: exports.QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
            value: exports.QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountResponse() {
    return {
        account: undefined
    };
}
exports.QueryAccountResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = (0, exports.AccountI_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? any_1.Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = (0, exports.AccountI_FromAmino)(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? (0, exports.AccountI_ToAmino)(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountResponse",
            value: exports.QueryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
            value: exports.QueryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
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
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: auth_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = auth_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? auth_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = auth_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? auth_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
exports.QueryModuleAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsRequest();
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
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsRequest",
            value: exports.QueryModuleAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
            value: exports.QueryModuleAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsResponse() {
    return {
        accounts: []
    };
}
exports.QueryModuleAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => (0, exports.ModuleAccountI_FromAmino)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? (0, exports.ModuleAccountI_ToAmino)(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsResponse",
            value: exports.QueryModuleAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
            value: exports.QueryModuleAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountByNameRequest() {
    return {
        name: ""
    };
}
exports.QueryModuleAccountByNameRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameRequest();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountByNameRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountByNameRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountByNameRequest",
            value: exports.QueryModuleAccountByNameRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountByNameRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountByNameRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
            value: exports.QueryModuleAccountByNameRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountByNameResponse() {
    return {
        account: undefined
    };
}
exports.QueryModuleAccountByNameResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = (0, exports.ModuleAccountI_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        message.account = object.account !== undefined && object.account !== null ? any_1.Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = (0, exports.ModuleAccountI_FromAmino)(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? (0, exports.ModuleAccountI_ToAmino)(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleAccountByNameResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountByNameResponse",
            value: exports.QueryModuleAccountByNameResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleAccountByNameResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleAccountByNameResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
            value: exports.QueryModuleAccountByNameResponse.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixRequest() {
    return {};
}
exports.Bech32PrefixRequest = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixRequest();
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
        const message = createBaseBech32PrefixRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseBech32PrefixRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bech32PrefixRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixRequest",
            value: exports.Bech32PrefixRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Bech32PrefixRequest.decode(message.value);
    },
    toProto(message) {
        return exports.Bech32PrefixRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
            value: exports.Bech32PrefixRequest.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixResponse() {
    return {
        bech32Prefix: ""
    };
}
exports.Bech32PrefixResponse = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32Prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBech32PrefixResponse();
        message.bech32Prefix = object.bech32Prefix ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBech32PrefixResponse();
        if (object.bech32_prefix !== undefined && object.bech32_prefix !== null) {
            message.bech32Prefix = object.bech32_prefix;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_prefix = message.bech32Prefix === "" ? undefined : message.bech32Prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bech32PrefixResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixResponse",
            value: exports.Bech32PrefixResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Bech32PrefixResponse.decode(message.value);
    },
    toProto(message) {
        return exports.Bech32PrefixResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
            value: exports.Bech32PrefixResponse.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringRequest() {
    return {
        addressBytes: new Uint8Array()
    };
}
exports.AddressBytesToStringRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressBytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringRequest();
        message.addressBytes = object.addressBytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddressBytesToStringRequest();
        if (object.address_bytes !== undefined && object.address_bytes !== null) {
            message.addressBytes = (0, helpers_1.bytesFromBase64)(object.address_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes ? (0, helpers_1.base64FromBytes)(message.addressBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressBytesToStringRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringRequest",
            value: exports.AddressBytesToStringRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressBytesToStringRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AddressBytesToStringRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
            value: exports.AddressBytesToStringRequest.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringResponse() {
    return {
        addressString: ""
    };
}
exports.AddressBytesToStringResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressString = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringResponse();
        message.addressString = object.addressString ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddressBytesToStringResponse();
        if (object.address_string !== undefined && object.address_string !== null) {
            message.addressString = object.address_string;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.addressString === "" ? undefined : message.addressString;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressBytesToStringResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringResponse",
            value: exports.AddressBytesToStringResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressBytesToStringResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AddressBytesToStringResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
            value: exports.AddressBytesToStringResponse.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesRequest() {
    return {
        addressString: ""
    };
}
exports.AddressStringToBytesRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressString = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesRequest();
        message.addressString = object.addressString ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddressStringToBytesRequest();
        if (object.address_string !== undefined && object.address_string !== null) {
            message.addressString = object.address_string;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.addressString === "" ? undefined : message.addressString;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressStringToBytesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesRequest",
            value: exports.AddressStringToBytesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressStringToBytesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AddressStringToBytesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
            value: exports.AddressStringToBytesRequest.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesResponse() {
    return {
        addressBytes: new Uint8Array()
    };
}
exports.AddressStringToBytesResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressBytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesResponse();
        message.addressBytes = object.addressBytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAddressStringToBytesResponse();
        if (object.address_bytes !== undefined && object.address_bytes !== null) {
            message.addressBytes = (0, helpers_1.bytesFromBase64)(object.address_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes ? (0, helpers_1.base64FromBytes)(message.addressBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AddressStringToBytesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesResponse",
            value: exports.AddressStringToBytesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AddressStringToBytesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AddressStringToBytesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
            value: exports.AddressStringToBytesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountAddressByIDRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryAccountAddressByIDRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).int64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountAddressByIDRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountAddressByIDRequest();
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
        return exports.QueryAccountAddressByIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountAddressByIDRequest",
            value: exports.QueryAccountAddressByIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountAddressByIDRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountAddressByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
            value: exports.QueryAccountAddressByIDRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountAddressByIDResponse() {
    return {
        accountAddress: ""
    };
}
exports.QueryAccountAddressByIDResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountAddressByIDResponse();
        message.accountAddress = object.accountAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountAddressByIDResponse();
        if (object.account_address !== undefined && object.account_address !== null) {
            message.accountAddress = object.account_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountAddressByIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountAddressByIDResponse",
            value: exports.QueryAccountAddressByIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountAddressByIDResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountAddressByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
            value: exports.QueryAccountAddressByIDResponse.encode(message).finish()
        };
    }
};
const AccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return auth_1.BaseAccount.decode(data.value);
        default:
            return data;
    }
};
exports.AccountI_InterfaceDecoder = AccountI_InterfaceDecoder;
const AccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BaseAccount":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: auth_1.BaseAccount.encode(auth_1.BaseAccount.fromPartial(auth_1.BaseAccount.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.AccountI_FromAmino = AccountI_FromAmino;
const AccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return {
                type: "cosmos-sdk/BaseAccount",
                value: auth_1.BaseAccount.toAmino(auth_1.BaseAccount.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.AccountI_ToAmino = AccountI_ToAmino;
const ModuleAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return auth_1.ModuleAccount.decode(data.value);
        default:
            return data;
    }
};
exports.ModuleAccountI_InterfaceDecoder = ModuleAccountI_InterfaceDecoder;
const ModuleAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ModuleAccount":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
                value: auth_1.ModuleAccount.encode(auth_1.ModuleAccount.fromPartial(auth_1.ModuleAccount.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.ModuleAccountI_FromAmino = ModuleAccountI_FromAmino;
const ModuleAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return {
                type: "cosmos-sdk/ModuleAccount",
                value: auth_1.ModuleAccount.toAmino(auth_1.ModuleAccount.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.ModuleAccountI_ToAmino = ModuleAccountI_ToAmino;
