//@ts-nocheck
import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseBaseVestingAccount() {
    return {
        baseAccount: undefined,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: BigInt(0)
    };
}
export const BaseVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.originalVesting) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatedFree) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegatedVesting) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.originalVesting.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBaseVestingAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.originalVesting = object.originalVesting?.map(e => Coin.fromPartial(e)) || [];
        message.delegatedFree = object.delegatedFree?.map(e => Coin.fromPartial(e)) || [];
        message.delegatedVesting = object.delegatedVesting?.map(e => Coin.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBaseVestingAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = BaseAccount.fromAmino(object.base_account);
        }
        message.originalVesting = object.original_vesting?.map(e => Coin.fromAmino(e)) || [];
        message.delegatedFree = object.delegated_free?.map(e => Coin.fromAmino(e)) || [];
        message.delegatedVesting = object.delegated_vesting?.map(e => Coin.fromAmino(e)) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = BigInt(object.end_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
        if (message.originalVesting) {
            obj.original_vesting = message.originalVesting.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.original_vesting = message.originalVesting;
        }
        if (message.delegatedFree) {
            obj.delegated_free = message.delegatedFree.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.delegated_free = message.delegatedFree;
        }
        if (message.delegatedVesting) {
            obj.delegated_vesting = message.delegatedVesting.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.delegated_vesting = message.delegatedVesting;
        }
        obj.end_time = message.endTime !== BigInt(0) ? message.endTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BaseVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseVestingAccount",
            value: BaseVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BaseVestingAccount.decode(message.value);
    },
    toProto(message) {
        return BaseVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
            value: BaseVestingAccount.encode(message).finish()
        };
    }
};
function createBaseContinuousVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: BigInt(0)
    };
}
export const ContinuousVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContinuousVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseContinuousVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContinuousVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ContinuousVestingAccount",
            value: ContinuousVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ContinuousVestingAccount.decode(message.value);
    },
    toProto(message) {
        return ContinuousVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
            value: ContinuousVestingAccount.encode(message).finish()
        };
    }
};
function createBaseDelayedVestingAccount() {
    return {
        baseVestingAccount: undefined
    };
}
export const DelayedVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelayedVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelayedVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelayedVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelayedVestingAccount",
            value: DelayedVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelayedVestingAccount.decode(message.value);
    },
    toProto(message) {
        return DelayedVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
            value: DelayedVestingAccount.encode(message).finish()
        };
    }
};
function createBasePeriod() {
    return {
        length: BigInt(0),
        amount: []
    };
}
export const Period = {
    typeUrl: "/cosmos.vesting.v1beta1.Period",
    encode(message, writer = BinaryWriter.create()) {
        if (message.length !== BigInt(0)) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = reader.int64();
                    break;
                case 2:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeriod();
        message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriod();
        if (object.length !== undefined && object.length !== null) {
            message.length = BigInt(object.length);
        }
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.length = message.length !== BigInt(0) ? message.length.toString() : undefined;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Period.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Period",
            value: Period.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Period.decode(message.value);
    },
    toProto(message) {
        return Period.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.Period",
            value: Period.encode(message).finish()
        };
    }
};
function createBasePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: BigInt(0),
        vestingPeriods: []
    };
}
export const PeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(16).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                case 3:
                    message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeriodicVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriodicVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        message.vestingPeriods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : undefined;
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = message.vestingPeriods;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicVestingAccount",
            value: PeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return PeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
            value: PeriodicVestingAccount.encode(message).finish()
        };
    }
};
function createBasePermanentLockedAccount() {
    return {
        baseVestingAccount: undefined
    };
}
export const PermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePermanentLockedAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePermanentLockedAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PermanentLockedAccount",
            value: PermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return PermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
            value: PermanentLockedAccount.encode(message).finish()
        };
    }
};
