"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCommunityPoolResponse = exports.QueryCommunityPoolRequest = exports.QueryDelegatorWithdrawAddressResponse = exports.QueryDelegatorWithdrawAddressRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryDelegationTotalRewardsResponse = exports.QueryDelegationTotalRewardsRequest = exports.QueryDelegationRewardsResponse = exports.QueryDelegationRewardsRequest = exports.QueryValidatorSlashesResponse = exports.QueryValidatorSlashesRequest = exports.QueryValidatorCommissionResponse = exports.QueryValidatorCommissionRequest = exports.QueryValidatorOutstandingRewardsResponse = exports.QueryValidatorOutstandingRewardsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const distribution_1 = require("./distribution");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
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
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: distribution_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? distribution_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = distribution_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? distribution_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
    return {
        validatorAddress: ""
    };
}
exports.QueryValidatorOutstandingRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
            value: exports.QueryValidatorOutstandingRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorOutstandingRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorOutstandingRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
            value: exports.QueryValidatorOutstandingRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
    return {
        rewards: distribution_1.ValidatorOutstandingRewards.fromPartial({})
    };
}
exports.QueryValidatorOutstandingRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rewards !== undefined) {
            distribution_1.ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards = distribution_1.ValidatorOutstandingRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        message.rewards = object.rewards !== undefined && object.rewards !== null ? distribution_1.ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorOutstandingRewards.fromAmino(object.rewards);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.rewards = message.rewards ? distribution_1.ValidatorOutstandingRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
            value: exports.QueryValidatorOutstandingRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorOutstandingRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorOutstandingRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
            value: exports.QueryValidatorOutstandingRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionRequest() {
    return {
        validatorAddress: ""
    };
}
exports.QueryValidatorCommissionRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryValidatorCommissionRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorCommissionRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorCommissionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionRequest",
            value: exports.QueryValidatorCommissionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorCommissionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorCommissionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
            value: exports.QueryValidatorCommissionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionResponse() {
    return {
        commission: distribution_1.ValidatorAccumulatedCommission.fromPartial({})
    };
}
exports.QueryValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commission !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorCommissionResponse();
        message.commission = object.commission !== undefined && object.commission !== null ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorCommissionResponse();
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = distribution_1.ValidatorAccumulatedCommission.fromAmino(object.commission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission = message.commission ? distribution_1.ValidatorAccumulatedCommission.toAmino(message.commission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionResponse",
            value: exports.QueryValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
            value: exports.QueryValidatorCommissionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesRequest() {
    return {
        validatorAddress: "",
        startingHeight: BigInt(0),
        endingHeight: BigInt(0),
        pagination: undefined
    };
}
exports.QueryValidatorSlashesRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.startingHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.startingHeight);
        }
        if (message.endingHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.endingHeight);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.startingHeight = reader.uint64();
                    break;
                case 3:
                    message.endingHeight = reader.uint64();
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
        const message = createBaseQueryValidatorSlashesRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        message.startingHeight = object.startingHeight !== undefined && object.startingHeight !== null ? BigInt(object.startingHeight.toString()) : BigInt(0);
        message.endingHeight = object.endingHeight !== undefined && object.endingHeight !== null ? BigInt(object.endingHeight.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorSlashesRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.starting_height !== undefined && object.starting_height !== null) {
            message.startingHeight = BigInt(object.starting_height);
        }
        if (object.ending_height !== undefined && object.ending_height !== null) {
            message.endingHeight = BigInt(object.ending_height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.starting_height = message.startingHeight !== BigInt(0) ? message.startingHeight.toString() : undefined;
        obj.ending_height = message.endingHeight !== BigInt(0) ? message.endingHeight.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorSlashesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesRequest",
            value: exports.QueryValidatorSlashesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorSlashesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorSlashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
            value: exports.QueryValidatorSlashesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesResponse() {
    return {
        slashes: [],
        pagination: undefined
    };
}
exports.QueryValidatorSlashesResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.slashes) {
            distribution_1.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slashes.push(distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
        const message = createBaseQueryValidatorSlashesResponse();
        message.slashes = object.slashes?.map(e => distribution_1.ValidatorSlashEvent.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorSlashesResponse();
        message.slashes = object.slashes?.map(e => distribution_1.ValidatorSlashEvent.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? distribution_1.ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.slashes = message.slashes;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorSlashesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesResponse",
            value: exports.QueryValidatorSlashesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorSlashesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorSlashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
            value: exports.QueryValidatorSlashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsRequest() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.QueryDelegationRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
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
        const message = createBaseQueryDelegationRewardsRequest();
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
        const message = createBaseQueryDelegationRewardsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegationRewardsRequest();
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
        return exports.QueryDelegationRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsRequest",
            value: exports.QueryDelegationRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
            value: exports.QueryDelegationRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsResponse() {
    return {
        rewards: []
    };
}
exports.QueryDelegationRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRewardsResponse();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegationRewardsResponse();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = message.rewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsResponse",
            value: exports.QueryDelegationRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
            value: exports.QueryDelegationRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsRequest() {
    return {
        delegatorAddress: ""
    };
}
exports.QueryDelegationTotalRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegationTotalRewardsRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationTotalRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
            value: exports.QueryDelegationTotalRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationTotalRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationTotalRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
            value: exports.QueryDelegationTotalRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsResponse() {
    return {
        rewards: [],
        total: []
    };
}
exports.QueryDelegationTotalRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rewards) {
            distribution_1.DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(distribution_1.DelegationDelegatorReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = object.rewards?.map(e => distribution_1.DelegationDelegatorReward.fromPartial(e)) || [];
        message.total = object.total?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = object.rewards?.map(e => distribution_1.DelegationDelegatorReward.fromAmino(e)) || [];
        message.total = object.total?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? distribution_1.DelegationDelegatorReward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = message.rewards;
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.total = message.total;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationTotalRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
            value: exports.QueryDelegationTotalRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationTotalRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationTotalRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
            value: exports.QueryDelegationTotalRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegatorAddress: ""
    };
}
exports.QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
            value: exports.QueryDelegatorValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
            value: exports.QueryDelegatorValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: []
    };
}
exports.QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = message.validators;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
            value: exports.QueryDelegatorValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
            value: exports.QueryDelegatorValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
    return {
        delegatorAddress: ""
    };
}
exports.QueryDelegatorWithdrawAddressRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
            value: exports.QueryDelegatorWithdrawAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorWithdrawAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorWithdrawAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
            value: exports.QueryDelegatorWithdrawAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
    return {
        withdrawAddress: ""
    };
}
exports.QueryDelegatorWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.withdrawAddress !== "") {
            writer.uint32(10).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdrawAddress = object.withdraw_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
            value: exports.QueryDelegatorWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
            value: exports.QueryDelegatorWithdrawAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolRequest() {
    return {};
}
exports.QueryCommunityPoolRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolRequest();
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
        const message = createBaseQueryCommunityPoolRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCommunityPoolRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCommunityPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolRequest",
            value: exports.QueryCommunityPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCommunityPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCommunityPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
            value: exports.QueryCommunityPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolResponse() {
    return {
        pool: []
    };
}
exports.QueryCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.pool = message.pool;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolResponse",
            value: exports.QueryCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
            value: exports.QueryCommunityPoolResponse.encode(message).finish()
        };
    }
};
