"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization_ToAmino = exports.Authorization_FromAmino = exports.Authorization_InterfaceDecoder = exports.GrantQueueItem = exports.GrantAuthorization = exports.Grant = exports.GenericAuthorization = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const authz_1 = require("../../bank/v1beta1/authz");
const authz_2 = require("../../staking/v1beta1/authz");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenericAuthorization() {
    return {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: ""
    };
}
exports.GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenericAuthorization();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg === "" ? undefined : message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: exports.GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: exports.GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: undefined
    };
}
exports.Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = (0, exports.Authorization_InterfaceDecoder)(reader);
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? any_1.Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = (0, exports.Authorization_FromAmino)(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? (0, exports.Authorization_ToAmino)(message.authorization) : undefined;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: exports.Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Grant.decode(message.value);
    },
    toProto(message) {
        return exports.Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
function createBaseGrantAuthorization() {
    return {
        granter: "",
        grantee: "",
        authorization: undefined,
        expiration: undefined
    };
}
exports.GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantAuthorization();
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
                    message.authorization = (0, exports.Authorization_InterfaceDecoder)(reader);
                    break;
                case 4:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = object.authorization !== undefined && object.authorization !== null ? any_1.Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantAuthorization();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = (0, exports.Authorization_FromAmino)(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.authorization = message.authorization ? (0, exports.Authorization_ToAmino)(message.authorization) : undefined;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: exports.GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: exports.GrantAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrantQueueItem() {
    return {
        msgTypeUrls: []
    };
}
exports.GrantQueueItem = {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.msgTypeUrls) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantQueueItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrls.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantQueueItem();
        message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.msgTypeUrls) {
            obj.msg_type_urls = message.msgTypeUrls.map(e => e);
        }
        else {
            obj.msg_type_urls = message.msgTypeUrls;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GrantQueueItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantQueueItem",
            value: exports.GrantQueueItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GrantQueueItem.decode(message.value);
    },
    toProto(message) {
        return exports.GrantQueueItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
            value: exports.GrantQueueItem.encode(message).finish()
        };
    }
};
const Authorization_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return exports.GenericAuthorization.decode(data.value);
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return authz_1.SendAuthorization.decode(data.value);
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return authz_2.StakeAuthorization.decode(data.value);
        default:
            return data;
    }
};
exports.Authorization_InterfaceDecoder = Authorization_InterfaceDecoder;
const Authorization_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/GenericAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                value: exports.GenericAuthorization.encode(exports.GenericAuthorization.fromPartial(exports.GenericAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SendAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
                value: authz_1.SendAuthorization.encode(authz_1.SendAuthorization.fromPartial(authz_1.SendAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/StakeAuthorization":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
                value: authz_2.StakeAuthorization.encode(authz_2.StakeAuthorization.fromPartial(authz_2.StakeAuthorization.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Authorization_FromAmino = Authorization_FromAmino;
const Authorization_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return {
                type: "cosmos-sdk/GenericAuthorization",
                value: exports.GenericAuthorization.toAmino(exports.GenericAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return {
                type: "cosmos-sdk/SendAuthorization",
                value: authz_1.SendAuthorization.toAmino(authz_1.SendAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return {
                type: "cosmos-sdk/StakeAuthorization",
                value: authz_2.StakeAuthorization.toAmino(authz_2.StakeAuthorization.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Authorization_ToAmino = Authorization_ToAmino;
