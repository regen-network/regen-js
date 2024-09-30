//@ts-nocheck
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount, ModuleAccount } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
            value: QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
export const QueryAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => AccountI_FromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? AccountI_ToAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsResponse",
            value: QueryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
            value: QueryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
export const QueryAccountRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
            value: QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountResponse() {
    return {
        account: undefined
    };
}
export const QueryAccountResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = AccountI_InterfaceDecoder(reader);
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
        message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = AccountI_FromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? AccountI_ToAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountResponse",
            value: QueryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
            value: QueryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
export const QueryModuleAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryModuleAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsRequest",
            value: QueryModuleAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
            value: QueryModuleAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsResponse() {
    return {
        accounts: []
    };
}
export const QueryModuleAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(Any.decode(reader, reader.uint32()));
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
        message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => ModuleAccountI_FromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? ModuleAccountI_ToAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsResponse",
            value: QueryModuleAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
            value: QueryModuleAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountByNameRequest() {
    return {
        name: ""
    };
}
export const QueryModuleAccountByNameRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryModuleAccountByNameRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountByNameRequest",
            value: QueryModuleAccountByNameRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountByNameRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountByNameRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
            value: QueryModuleAccountByNameRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountByNameResponse() {
    return {
        account: undefined
    };
}
export const QueryModuleAccountByNameResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = ModuleAccountI_InterfaceDecoder(reader);
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
        message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = ModuleAccountI_FromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? ModuleAccountI_ToAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountByNameResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountByNameResponse",
            value: QueryModuleAccountByNameResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountByNameResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountByNameResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
            value: QueryModuleAccountByNameResponse.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixRequest() {
    return {};
}
export const Bech32PrefixRequest = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Bech32PrefixRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixRequest",
            value: Bech32PrefixRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Bech32PrefixRequest.decode(message.value);
    },
    toProto(message) {
        return Bech32PrefixRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
            value: Bech32PrefixRequest.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixResponse() {
    return {
        bech32Prefix: ""
    };
}
export const Bech32PrefixResponse = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Bech32PrefixResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixResponse",
            value: Bech32PrefixResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Bech32PrefixResponse.decode(message.value);
    },
    toProto(message) {
        return Bech32PrefixResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
            value: Bech32PrefixResponse.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringRequest() {
    return {
        addressBytes: new Uint8Array()
    };
}
export const AddressBytesToStringRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.addressBytes = bytesFromBase64(object.address_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes ? base64FromBytes(message.addressBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AddressBytesToStringRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringRequest",
            value: AddressBytesToStringRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressBytesToStringRequest.decode(message.value);
    },
    toProto(message) {
        return AddressBytesToStringRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
            value: AddressBytesToStringRequest.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringResponse() {
    return {
        addressString: ""
    };
}
export const AddressBytesToStringResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return AddressBytesToStringResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringResponse",
            value: AddressBytesToStringResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressBytesToStringResponse.decode(message.value);
    },
    toProto(message) {
        return AddressBytesToStringResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
            value: AddressBytesToStringResponse.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesRequest() {
    return {
        addressString: ""
    };
}
export const AddressStringToBytesRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return AddressStringToBytesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesRequest",
            value: AddressStringToBytesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressStringToBytesRequest.decode(message.value);
    },
    toProto(message) {
        return AddressStringToBytesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
            value: AddressStringToBytesRequest.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesResponse() {
    return {
        addressBytes: new Uint8Array()
    };
}
export const AddressStringToBytesResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.addressBytes = bytesFromBase64(object.address_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.addressBytes ? base64FromBytes(message.addressBytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AddressStringToBytesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesResponse",
            value: AddressStringToBytesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressStringToBytesResponse.decode(message.value);
    },
    toProto(message) {
        return AddressStringToBytesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
            value: AddressStringToBytesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountAddressByIDRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryAccountAddressByIDRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).int64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAccountAddressByIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountAddressByIDRequest",
            value: QueryAccountAddressByIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountAddressByIDRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountAddressByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
            value: QueryAccountAddressByIDRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountAddressByIDResponse() {
    return {
        accountAddress: ""
    };
}
export const QueryAccountAddressByIDResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAccountAddressByIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountAddressByIDResponse",
            value: QueryAccountAddressByIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountAddressByIDResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountAddressByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
            value: QueryAccountAddressByIDResponse.encode(message).finish()
        };
    }
};
export const AccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return BaseAccount.decode(data.value);
        default:
            return data;
    }
};
export const AccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BaseAccount":
            return Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: BaseAccount.encode(BaseAccount.fromPartial(BaseAccount.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const AccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return {
                type: "cosmos-sdk/BaseAccount",
                value: BaseAccount.toAmino(BaseAccount.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
export const ModuleAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return ModuleAccount.decode(data.value);
        default:
            return data;
    }
};
export const ModuleAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ModuleAccount":
            return Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
                value: ModuleAccount.encode(ModuleAccount.fromPartial(ModuleAccount.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const ModuleAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return {
                type: "cosmos-sdk/ModuleAccount",
                value: ModuleAccount.toAmino(ModuleAccount.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
