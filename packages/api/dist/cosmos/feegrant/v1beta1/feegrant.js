"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeAllowanceI_ToAmino = exports.FeeAllowanceI_FromAmino = exports.FeeAllowanceI_InterfaceDecoder = exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseBasicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        spendLimit: [],
        expiration: undefined
    };
}
exports.BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = createBaseBasicAllowance();
        message.spendLimit = object.spendLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasicAllowance();
        message.spendLimit = object.spend_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = message.spendLimit;
        }
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BasicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BasicAllowance",
            value: exports.BasicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BasicAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.BasicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
            value: exports.BasicAllowance.encode(message).finish()
        };
    }
};
function createBasePeriodicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        basic: exports.BasicAllowance.fromPartial({}),
        period: duration_1.Duration.fromPartial({}),
        periodSpendLimit: [],
        periodCanSpend: [],
        periodReset: new Date()
    };
}
exports.PeriodicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.periodSpendLimit) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.periodCanSpend) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.periodSpendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? exports.BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period !== undefined && object.period !== null ? duration_1.Duration.fromPartial(object.period) : undefined;
        message.periodSpendLimit = object.periodSpendLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.periodCanSpend = object.periodCanSpend?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.periodReset = object.periodReset ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriodicAllowance();
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = exports.BasicAllowance.fromAmino(object.basic);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = duration_1.Duration.fromAmino(object.period);
        }
        message.periodSpendLimit = object.period_spend_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.periodCanSpend = object.period_can_spend?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.period_reset !== undefined && object.period_reset !== null) {
            message.periodReset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.period_reset));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basic = message.basic ? exports.BasicAllowance.toAmino(message.basic) : undefined;
        obj.period = message.period ? duration_1.Duration.toAmino(message.period) : undefined;
        if (message.periodSpendLimit) {
            obj.period_spend_limit = message.periodSpendLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_spend_limit = message.periodSpendLimit;
        }
        if (message.periodCanSpend) {
            obj.period_can_spend = message.periodCanSpend.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_can_spend = message.periodCanSpend;
        }
        obj.period_reset = message.periodReset ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.periodReset)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeriodicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicAllowance",
            value: exports.PeriodicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodicAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
            value: exports.PeriodicAllowance.encode(message).finish()
        };
    }
};
function createBaseAllowedMsgAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        allowance: undefined,
        allowedMessages: []
    };
}
exports.AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowedMessages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = (0, exports.FeeAllowanceI_InterfaceDecoder)(reader);
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllowedMsgAllowance();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        message.allowedMessages = object.allowedMessages?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedMsgAllowance();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = (0, exports.FeeAllowanceI_FromAmino)(object.allowance);
        }
        message.allowedMessages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? (0, exports.FeeAllowanceI_ToAmino)(message.allowance) : undefined;
        if (message.allowedMessages) {
            obj.allowed_messages = message.allowedMessages.map(e => e);
        }
        else {
            obj.allowed_messages = message.allowedMessages;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllowedMsgAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllowedMsgAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.AllowedMsgAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
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
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = (0, exports.FeeAllowanceI_InterfaceDecoder)(reader);
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
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = (0, exports.FeeAllowanceI_FromAmino)(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.allowance = message.allowance ? (0, exports.FeeAllowanceI_ToAmino)(message.allowance) : undefined;
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
            typeUrl: "/cosmos.feegrant.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
const FeeAllowanceI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return exports.BasicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return exports.PeriodicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return exports.AllowedMsgAllowance.decode(data.value);
        default:
            return data;
    }
};
exports.FeeAllowanceI_InterfaceDecoder = FeeAllowanceI_InterfaceDecoder;
const FeeAllowanceI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BasicAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: exports.BasicAllowance.encode(exports.BasicAllowance.fromPartial(exports.BasicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PeriodicAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                value: exports.PeriodicAllowance.encode(exports.PeriodicAllowance.fromPartial(exports.PeriodicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/AllowedMsgAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                value: exports.AllowedMsgAllowance.encode(exports.AllowedMsgAllowance.fromPartial(exports.AllowedMsgAllowance.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.FeeAllowanceI_FromAmino = FeeAllowanceI_FromAmino;
const FeeAllowanceI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return {
                type: "cosmos-sdk/BasicAllowance",
                value: exports.BasicAllowance.toAmino(exports.BasicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return {
                type: "cosmos-sdk/PeriodicAllowance",
                value: exports.PeriodicAllowance.toAmino(exports.PeriodicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return {
                type: "cosmos-sdk/AllowedMsgAllowance",
                value: exports.AllowedMsgAllowance.toAmino(exports.AllowedMsgAllowance.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.FeeAllowanceI_ToAmino = FeeAllowanceI_ToAmino;
