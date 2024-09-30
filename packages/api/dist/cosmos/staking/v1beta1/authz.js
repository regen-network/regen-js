"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeAuthorization_Validators = exports.StakeAuthorization = exports.authorizationTypeToJSON = exports.authorizationTypeFromJSON = exports.AuthorizationTypeAmino = exports.AuthorizationTypeSDKType = exports.AuthorizationType = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
    AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType || (exports.AuthorizationType = AuthorizationType = {}));
exports.AuthorizationTypeSDKType = AuthorizationType;
exports.AuthorizationTypeAmino = AuthorizationType;
function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHORIZATION_TYPE_DELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case "AUTHORIZATION_TYPE_UNDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case "AUTHORIZATION_TYPE_REDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
exports.authorizationTypeFromJSON = authorizationTypeFromJSON;
function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
        case AuthorizationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authorizationTypeToJSON = authorizationTypeToJSON;
function createBaseStakeAuthorization() {
    return {
        $typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        maxTokens: undefined,
        allowList: undefined,
        denyList: undefined,
        authorizationType: 0
    };
}
exports.StakeAuthorization = {
    typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxTokens !== undefined) {
            coin_1.Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowList !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
        }
        if (message.denyList !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorizationType !== 0) {
            writer.uint32(32).int32(message.authorizationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxTokens = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowList = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.denyList = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authorizationType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization();
        message.maxTokens = object.maxTokens !== undefined && object.maxTokens !== null ? coin_1.Coin.fromPartial(object.maxTokens) : undefined;
        message.allowList = object.allowList !== undefined && object.allowList !== null ? exports.StakeAuthorization_Validators.fromPartial(object.allowList) : undefined;
        message.denyList = object.denyList !== undefined && object.denyList !== null ? exports.StakeAuthorization_Validators.fromPartial(object.denyList) : undefined;
        message.authorizationType = object.authorizationType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStakeAuthorization();
        if (object.max_tokens !== undefined && object.max_tokens !== null) {
            message.maxTokens = coin_1.Coin.fromAmino(object.max_tokens);
        }
        if (object.allow_list !== undefined && object.allow_list !== null) {
            message.allowList = exports.StakeAuthorization_Validators.fromAmino(object.allow_list);
        }
        if (object.deny_list !== undefined && object.deny_list !== null) {
            message.denyList = exports.StakeAuthorization_Validators.fromAmino(object.deny_list);
        }
        if (object.authorization_type !== undefined && object.authorization_type !== null) {
            message.authorizationType = object.authorization_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_tokens = message.maxTokens ? coin_1.Coin.toAmino(message.maxTokens) : undefined;
        obj.allow_list = message.allowList ? exports.StakeAuthorization_Validators.toAmino(message.allowList) : undefined;
        obj.deny_list = message.denyList ? exports.StakeAuthorization_Validators.toAmino(message.denyList) : undefined;
        obj.authorization_type = message.authorizationType === 0 ? undefined : message.authorizationType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StakeAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StakeAuthorization",
            value: exports.StakeAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StakeAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.StakeAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
            value: exports.StakeAuthorization.encode(message).finish()
        };
    }
};
function createBaseStakeAuthorization_Validators() {
    return {
        address: []
    };
}
exports.StakeAuthorization_Validators = {
    typeUrl: "/cosmos.staking.v1beta1.Validators",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.address) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization_Validators();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.address) {
            obj.address = message.address.map(e => e);
        }
        else {
            obj.address = message.address;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StakeAuthorization_Validators.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validators",
            value: exports.StakeAuthorization_Validators.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StakeAuthorization_Validators.decode(message.value);
    },
    toProto(message) {
        return exports.StakeAuthorization_Validators.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validators",
            value: exports.StakeAuthorization_Validators.encode(message).finish()
        };
    }
};
