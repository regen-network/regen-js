"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const vesting_1 = require("./vesting");
const binary_1 = require("../../../binary");
function createBaseMsgCreateVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: [],
        endTime: BigInt(0),
        delayed: false
    };
}
exports.MsgCreateVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(32).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endTime = reader.int64();
                    break;
                case 5:
                    message.delayed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        message.delayed = object.delayed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = BigInt(object.end_time);
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.end_time = message.endTime !== BigInt(0) ? message.endTime.toString() : undefined;
        obj.delayed = message.delayed === false ? undefined : message.delayed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
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
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePermanentLockedAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: []
    };
}
exports.MsgCreatePermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePermanentLockedAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePermanentLockedAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
exports.MsgCreatePermanentLockedAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePermanentLockedAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePeriodicVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        startTime: BigInt(0),
        vestingPeriods: []
    };
}
exports.MsgCreatePeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(24).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.startTime = reader.int64();
                    break;
                case 4:
                    message.vestingPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePeriodicVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        message.vestingPeriods = object.vestingPeriods?.map(e => vesting_1.Period.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePeriodicVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        message.vestingPeriods = object.vesting_periods?.map(e => vesting_1.Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : undefined;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? vesting_1.Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = message.vestingPeriods;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
            value: exports.MsgCreatePeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
            value: exports.MsgCreatePeriodicVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
exports.MsgCreatePeriodicVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
        };
    }
};
