"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_cryptoPubKey_ToAmino = exports.Cosmos_cryptoPubKey_FromAmino = exports.Cosmos_cryptoPubKey_InterfaceDecoder = exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatusAmino = exports.BondStatusSDKType = exports.BondStatus = void 0;
//@ts-nocheck
const types_1 = require("../../../tendermint/types/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
const proto_signing_1 = require("@cosmjs/proto-signing");
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (exports.BondStatus = BondStatus = {}));
exports.BondStatusSDKType = BondStatus;
exports.BondStatusAmino = BondStatus;
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
function createBaseHistoricalInfo() {
    return {
        header: types_1.Header.fromPartial({}),
        valset: []
    };
}
exports.HistoricalInfo = {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => exports.Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHistoricalInfo();
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromAmino(object.header);
        }
        message.valset = object.valset?.map(e => exports.Validator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = message.valset;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: exports.HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return exports.HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: exports.HistoricalInfo.encode(message).finish()
        };
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        maxRate: "",
        maxChangeRate: ""
    };
}
exports.CommissionRates = {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.rate, 18).atomics);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.maxRate, 18).atomics);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.maxRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.maxChangeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.maxRate = object.maxRate ?? "";
        message.maxChangeRate = object.maxChangeRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommissionRates();
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        if (object.max_rate !== undefined && object.max_rate !== null) {
            message.maxRate = object.max_rate;
        }
        if (object.max_change_rate !== undefined && object.max_change_rate !== null) {
            message.maxChangeRate = object.max_change_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.rate = message.rate === "" ? undefined : message.rate;
        obj.max_rate = message.maxRate === "" ? undefined : message.maxRate;
        obj.max_change_rate = message.maxChangeRate === "" ? undefined : message.maxChangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: exports.CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommissionRates.decode(message.value);
    },
    toProto(message) {
        return exports.CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: exports.CommissionRates.encode(message).finish()
        };
    }
};
function createBaseCommission() {
    return {
        commissionRates: exports.CommissionRates.fromPartial({}),
        updateTime: new Date()
    };
}
exports.Commission = {
    typeUrl: "/cosmos.staking.v1beta1.Commission",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commissionRates !== undefined) {
            exports.CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commissionRates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? exports.CommissionRates.fromPartial(object.commissionRates) : undefined;
        message.updateTime = object.updateTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommission();
        if (object.commission_rates !== undefined && object.commission_rates !== null) {
            message.commissionRates = exports.CommissionRates.fromAmino(object.commission_rates);
        }
        if (object.update_time !== undefined && object.update_time !== null) {
            message.updateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.update_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commissionRates ? exports.CommissionRates.toAmino(message.commissionRates) : undefined;
        obj.update_time = message.updateTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.updateTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: exports.Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Commission.decode(message.value);
    },
    toProto(message) {
        return exports.Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: exports.Commission.encode(message).finish()
        };
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: ""
    };
}
exports.Description = {
    typeUrl: "/cosmos.staking.v1beta1.Description",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.securityContact = object.securityContact ?? "";
        message.details = object.details ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDescription();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        if (object.security_contact !== undefined && object.security_contact !== null) {
            message.securityContact = object.security_contact;
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.identity = message.identity === "" ? undefined : message.identity;
        obj.website = message.website === "" ? undefined : message.website;
        obj.security_contact = message.securityContact === "" ? undefined : message.securityContact;
        obj.details = message.details === "" ? undefined : message.details;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: exports.Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Description.decode(message.value);
    },
    toProto(message) {
        return exports.Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: exports.Description.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: exports.Description.fromPartial({}),
        unbondingHeight: BigInt(0),
        unbondingTime: new Date(),
        commission: exports.Commission.fromPartial({}),
        minSelfDelegation: ""
    };
}
exports.Validator = {
    typeUrl: "/cosmos.staking.v1beta1.Validator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            any_1.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.delegatorShares, 18).atomics);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbondingHeight !== BigInt(0)) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = (0, exports.Cosmos_cryptoPubKey_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? any_1.Any.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = object.description !== undefined && object.description !== null ? exports.Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt(0);
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? exports.Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.operator_address !== undefined && object.operator_address !== null) {
            message.operatorAddress = object.operator_address;
        }
        if (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null) {
            message.consensusPubkey = (0, proto_signing_1.encodePubkey)(object.consensus_pubkey);
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = object.jailed;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            message.tokens = object.tokens;
        }
        if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
            message.delegatorShares = object.delegator_shares;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = exports.Description.fromAmino(object.description);
        }
        if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
            message.unbondingHeight = BigInt(object.unbonding_height);
        }
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbondingTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.unbonding_time));
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = exports.Commission.fromAmino(object.commission);
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
        obj.consensus_pubkey = message.consensusPubkey ? (0, proto_signing_1.decodePubkey)(message.consensusPubkey) : undefined;
        obj.jailed = message.jailed === false ? undefined : message.jailed;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.tokens = message.tokens === "" ? undefined : message.tokens;
        obj.delegator_shares = message.delegatorShares === "" ? undefined : message.delegatorShares;
        obj.description = message.description ? exports.Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbondingHeight !== BigInt(0) ? message.unbondingHeight.toString() : undefined;
        obj.unbonding_time = message.unbondingTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.unbondingTime)) : undefined;
        obj.commission = message.commission ? exports.Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
exports.ValAddresses = {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = message.addresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: exports.ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValAddresses.decode(message.value);
    },
    toProto(message) {
        return exports.ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: exports.ValAddresses.encode(message).finish()
        };
    }
};
function createBaseDVPair() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.DVPair = {
    typeUrl: "/cosmos.staking.v1beta1.DVPair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPair();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: exports.DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPair.decode(message.value);
    },
    toProto(message) {
        return exports.DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: exports.DVPair.encode(message).finish()
        };
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
exports.DVPairs = {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = message.pairs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: exports.DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPairs.decode(message.value);
    },
    toProto(message) {
        return exports.DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: exports.DVPairs.encode(message).finish()
        };
    }
};
function createBaseDVVTriplet() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: ""
    };
}
exports.DVVTriplet = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplet();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress === "" ? undefined : message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress === "" ? undefined : message.validatorDstAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: exports.DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: exports.DVVTriplet.encode(message).finish()
        };
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
exports.DVVTriplets = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = message.triplets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: exports.DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: exports.DVVTriplets.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        shares: ""
    };
}
exports.Delegation = {
    typeUrl: "/cosmos.staking.v1beta1.Delegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.shares, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.shares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = object.shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.shares = message.shares === "" ? undefined : message.shares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: exports.Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Delegation.decode(message.value);
    },
    toProto(message) {
        return exports.Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: exports.Delegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        entries: []
    };
}
exports.UnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: exports.UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: exports.UnbondingDelegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: BigInt(0),
        completionTime: new Date(),
        initialBalance: "",
        balance: ""
    };
}
exports.UnbondingDelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initialBalance = object.initial_balance;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completionTime)) : undefined;
        obj.initial_balance = message.initialBalance === "" ? undefined : message.initialBalance;
        obj.balance = message.balance === "" ? undefined : message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: BigInt(0),
        completionTime: new Date(),
        initialBalance: "",
        sharesDst: ""
    };
}
exports.RedelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.sharesDst, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.sharesDst = object.sharesDst ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initialBalance = object.initial_balance;
        }
        if (object.shares_dst !== undefined && object.shares_dst !== null) {
            message.sharesDst = object.shares_dst;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completionTime)) : undefined;
        obj.initial_balance = message.initialBalance === "" ? undefined : message.initialBalance;
        obj.shares_dst = message.sharesDst === "" ? undefined : message.sharesDst;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: exports.RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: exports.RedelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        entries: []
    };
}
exports.Redelegation = {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress === "" ? undefined : message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress === "" ? undefined : message.validatorDstAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: exports.Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Redelegation.decode(message.value);
    },
    toProto(message) {
        return exports.Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: exports.Redelegation.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        unbondingTime: duration_1.Duration.fromPartial({}),
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
        minCommissionRate: ""
    };
}
exports.Params = {
    typeUrl: "/cosmos.staking.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.unbondingTime !== undefined) {
            duration_1.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minCommissionRate !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                case 6:
                    message.minCommissionRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? duration_1.Duration.fromPartial(object.unbondingTime) : undefined;
        message.maxValidators = object.maxValidators ?? 0;
        message.maxEntries = object.maxEntries ?? 0;
        message.historicalEntries = object.historicalEntries ?? 0;
        message.bondDenom = object.bondDenom ?? "";
        message.minCommissionRate = object.minCommissionRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbondingTime = duration_1.Duration.fromAmino(object.unbonding_time);
        }
        if (object.max_validators !== undefined && object.max_validators !== null) {
            message.maxValidators = object.max_validators;
        }
        if (object.max_entries !== undefined && object.max_entries !== null) {
            message.maxEntries = object.max_entries;
        }
        if (object.historical_entries !== undefined && object.historical_entries !== null) {
            message.historicalEntries = object.historical_entries;
        }
        if (object.bond_denom !== undefined && object.bond_denom !== null) {
            message.bondDenom = object.bond_denom;
        }
        if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
            message.minCommissionRate = object.min_commission_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.unbonding_time = message.unbondingTime ? duration_1.Duration.toAmino(message.unbondingTime) : undefined;
        obj.max_validators = message.maxValidators === 0 ? undefined : message.maxValidators;
        obj.max_entries = message.maxEntries === 0 ? undefined : message.maxEntries;
        obj.historical_entries = message.historicalEntries === 0 ? undefined : message.historicalEntries;
        obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
        obj.min_commission_rate = message.minCommissionRate === "" ? undefined : message.minCommissionRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: exports.Delegation.fromPartial({}),
        balance: coin_1.Coin.fromPartial({})
    };
}
exports.DelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? exports.Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegationResponse();
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = exports.Delegation.fromAmino(object.delegation);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? exports.Delegation.toAmino(message.delegation) : undefined;
        obj.balance = message.balance ? coin_1.Coin.toAmino(message.balance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: exports.DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: exports.DelegationResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: exports.RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
exports.RedelegationEntryResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.redelegationEntry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? exports.RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntryResponse();
        if (object.redelegation_entry !== undefined && object.redelegation_entry !== null) {
            message.redelegationEntry = exports.RedelegationEntry.fromAmino(object.redelegation_entry);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegationEntry ? exports.RedelegationEntry.toAmino(message.redelegationEntry) : undefined;
        obj.balance = message.balance === "" ? undefined : message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: exports.Redelegation.fromPartial({}),
        entries: []
    };
}
exports.RedelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? exports.Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationResponse();
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = exports.Redelegation.fromAmino(object.redelegation);
        }
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? exports.Redelegation.toAmino(message.redelegation) : undefined;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: exports.RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: exports.RedelegationResponse.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        notBondedTokens: "",
        bondedTokens: ""
    };
}
exports.Pool = {
    typeUrl: "/cosmos.staking.v1beta1.Pool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.notBondedTokens = object.notBondedTokens ?? "";
        message.bondedTokens = object.bondedTokens ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.not_bonded_tokens !== undefined && object.not_bonded_tokens !== null) {
            message.notBondedTokens = object.not_bonded_tokens;
        }
        if (object.bonded_tokens !== undefined && object.bonded_tokens !== null) {
            message.bondedTokens = object.bonded_tokens;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.not_bonded_tokens = message.notBondedTokens ?? "";
        obj.bonded_tokens = message.bondedTokens ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: exports.Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Cosmos_cryptoPubKey_InterfaceDecoder = Cosmos_cryptoPubKey_InterfaceDecoder;
const Cosmos_cryptoPubKey_FromAmino = (content) => {
    return (0, proto_signing_1.encodePubkey)(content);
};
exports.Cosmos_cryptoPubKey_FromAmino = Cosmos_cryptoPubKey_FromAmino;
const Cosmos_cryptoPubKey_ToAmino = (content) => {
    return (0, proto_signing_1.decodePubkey)(content);
};
exports.Cosmos_cryptoPubKey_ToAmino = Cosmos_cryptoPubKey_ToAmino;
