/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Params,
  ValidatorOutstandingRewards,
  ValidatorAccumulatedCommission,
  ValidatorSlashEvent,
  DelegationDelegatorReward,
} from '../../../cosmos/distribution/v1beta1/distribution';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'cosmos.distribution.v1beta1';

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: 'cosmos.distribution.v1beta1.QueryParamsRequest';
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: 'cosmos.distribution.v1beta1.QueryParamsResponse';
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest';
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse';
  rewards?: ValidatorOutstandingRewards;
}

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorCommissionRequest';
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorCommissionResponse';
  /** commission defines the commision the validator received. */
  commission?: ValidatorAccumulatedCommission;
}

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorSlashesRequest';
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: Long;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorSlashesResponse';
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationRewardsRequest';
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationRewardsResponse';
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest';
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse';
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest';
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse';
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest';
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse';
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
  $type: 'cosmos.distribution.v1beta1.QueryCommunityPoolRequest';
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  $type: 'cosmos.distribution.v1beta1.QueryCommunityPoolResponse';
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'cosmos.distribution.v1beta1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryParamsRequest' as const,

  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): QueryParamsRequest {
    return {
      $type: QueryParamsRequest.$type,
    };
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryParamsResponse' as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryParamsResponse {
    return {
      $type: QueryParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    $type:
      'cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest',
    validatorAddress: '',
  };
}

export const QueryValidatorOutstandingRewardsRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest' as const,

  encode(
    message: QueryValidatorOutstandingRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    return {
      $type: QueryValidatorOutstandingRewardsRequest.$type,
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
    };
  },

  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsRequest>, I>
  >(object: I): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryValidatorOutstandingRewardsRequest.$type,
  QueryValidatorOutstandingRewardsRequest,
);

function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    $type:
      'cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse',
    rewards: undefined,
  };
}

export const QueryValidatorOutstandingRewardsResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse' as const,

  encode(
    message: QueryValidatorOutstandingRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(
        message.rewards,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    return {
      $type: QueryValidatorOutstandingRewardsResponse.$type,
      rewards: isSet(object.rewards)
        ? ValidatorOutstandingRewards.fromJSON(object.rewards)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined &&
      (obj.rewards = message.rewards
        ? ValidatorOutstandingRewards.toJSON(message.rewards)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsResponse>, I>
  >(object: I): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards =
      object.rewards !== undefined && object.rewards !== null
        ? ValidatorOutstandingRewards.fromPartial(object.rewards)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryValidatorOutstandingRewardsResponse.$type,
  QueryValidatorOutstandingRewardsResponse,
);

function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryValidatorCommissionRequest',
    validatorAddress: '',
  };
}

export const QueryValidatorCommissionRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorCommissionRequest' as const,

  encode(
    message: QueryValidatorCommissionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryValidatorCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryValidatorCommissionRequest {
    return {
      $type: QueryValidatorCommissionRequest.$type,
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
    };
  },

  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionRequest>, I>>(
    object: I,
  ): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryValidatorCommissionRequest.$type,
  QueryValidatorCommissionRequest,
);

function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryValidatorCommissionResponse',
    commission: undefined,
  };
}

export const QueryValidatorCommissionResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorCommissionResponse' as const,

  encode(
    message: QueryValidatorCommissionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(
        message.commission,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionResponse {
    return {
      $type: QueryValidatorCommissionResponse.$type,
      commission: isSet(object.commission)
        ? ValidatorAccumulatedCommission.fromJSON(object.commission)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? ValidatorAccumulatedCommission.toJSON(message.commission)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryValidatorCommissionResponse>, I>
  >(object: I): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? ValidatorAccumulatedCommission.fromPartial(object.commission)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryValidatorCommissionResponse.$type,
  QueryValidatorCommissionResponse,
);

function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryValidatorSlashesRequest',
    validatorAddress: '',
    startingHeight: Long.UZERO,
    endingHeight: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryValidatorSlashesRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorSlashesRequest' as const,

  encode(
    message: QueryValidatorSlashesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.startingHeight.isZero()) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (!message.endingHeight.isZero()) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryValidatorSlashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64() as Long;
          break;
        case 3:
          message.endingHeight = reader.uint64() as Long;
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSlashesRequest {
    return {
      $type: QueryValidatorSlashesRequest.$type,
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      startingHeight: isSet(object.startingHeight)
        ? Long.fromString(object.startingHeight)
        : Long.UZERO,
      endingHeight: isSet(object.endingHeight)
        ? Long.fromString(object.endingHeight)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined &&
      (obj.startingHeight = (message.startingHeight || Long.UZERO).toString());
    message.endingHeight !== undefined &&
      (obj.endingHeight = (message.endingHeight || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesRequest>, I>>(
    object: I,
  ): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? '';
    message.startingHeight =
      object.startingHeight !== undefined && object.startingHeight !== null
        ? Long.fromValue(object.startingHeight)
        : Long.UZERO;
    message.endingHeight =
      object.endingHeight !== undefined && object.endingHeight !== null
        ? Long.fromValue(object.endingHeight)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryValidatorSlashesRequest.$type,
  QueryValidatorSlashesRequest,
);

function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryValidatorSlashesResponse',
    slashes: [],
    pagination: undefined,
  };
}

export const QueryValidatorSlashesResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryValidatorSlashesResponse' as const,

  encode(
    message: QueryValidatorSlashesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryValidatorSlashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(
            ValidatorSlashEvent.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QueryValidatorSlashesResponse {
    return {
      $type: QueryValidatorSlashesResponse.$type,
      slashes: Array.isArray(object?.slashes)
        ? object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(e =>
        e ? ValidatorSlashEvent.toJSON(e) : undefined,
      );
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesResponse>, I>>(
    object: I,
  ): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes =
      object.slashes?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryValidatorSlashesResponse.$type,
  QueryValidatorSlashesResponse,
);

function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegationRewardsRequest',
    delegatorAddress: '',
    validatorAddress: '',
  };
}

export const QueryDelegationRewardsRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationRewardsRequest' as const,

  encode(
    message: QueryDelegationRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryDelegationRewardsRequest {
    return {
      $type: QueryDelegationRewardsRequest.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
    };
  },

  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsRequest>, I>>(
    object: I,
  ): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegationRewardsRequest.$type,
  QueryDelegationRewardsRequest,
);

function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegationRewardsResponse',
    rewards: [],
  };
}

export const QueryDelegationRewardsResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationRewardsResponse' as const,

  encode(
    message: QueryDelegationRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsResponse {
    return {
      $type: QueryDelegationRewardsResponse.$type,
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsResponse>, I>>(
    object: I,
  ): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegationRewardsResponse.$type,
  QueryDelegationRewardsResponse,
);

function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest',
    delegatorAddress: '',
  };
}

export const QueryDelegationTotalRewardsRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest' as const,

  encode(
    message: QueryDelegationTotalRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    return {
      $type: QueryDelegationTotalRewardsRequest.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
    };
  },

  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegationTotalRewardsRequest>, I>
  >(object: I): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegationTotalRewardsRequest.$type,
  QueryDelegationTotalRewardsRequest,
);

function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse',
    rewards: [],
    total: [],
  };
}

export const QueryDelegationTotalRewardsResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse' as const,

  encode(
    message: QueryDelegationTotalRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(
            DelegationDelegatorReward.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    return {
      $type: QueryDelegationTotalRewardsResponse.$type,
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e))
        : [],
      total: Array.isArray(object?.total)
        ? object.total.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e =>
        e ? DelegationDelegatorReward.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegationTotalRewardsResponse>, I>
  >(object: I): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards =
      object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegationTotalRewardsResponse.$type,
  QueryDelegationTotalRewardsResponse,
);

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest',
    delegatorAddress: '',
  };
}

export const QueryDelegatorValidatorsRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest' as const,

  encode(
    message: QueryDelegatorValidatorsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      $type: QueryDelegatorValidatorsRequest.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegatorValidatorsRequest.$type,
  QueryDelegatorValidatorsRequest,
);

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse',
    validators: [],
  };
}

export const QueryDelegatorValidatorsResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse' as const,

  encode(
    message: QueryDelegatorValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      $type: QueryDelegatorValidatorsResponse.$type,
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>
  >(object: I): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegatorValidatorsResponse.$type,
  QueryDelegatorValidatorsResponse,
);

function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest',
    delegatorAddress: '',
  };
}

export const QueryDelegatorWithdrawAddressRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest' as const,

  encode(
    message: QueryDelegatorWithdrawAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    return {
      $type: QueryDelegatorWithdrawAddressRequest.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
    };
  },

  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressRequest>, I>
  >(object: I): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegatorWithdrawAddressRequest.$type,
  QueryDelegatorWithdrawAddressRequest,
);

function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse',
    withdrawAddress: '',
  };
}

export const QueryDelegatorWithdrawAddressResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse' as const,

  encode(
    message: QueryDelegatorWithdrawAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.withdrawAddress !== '') {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    return {
      $type: QueryDelegatorWithdrawAddressResponse.$type,
      withdrawAddress: isSet(object.withdrawAddress)
        ? String(object.withdrawAddress)
        : '',
    };
  },

  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined &&
      (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressResponse>, I>
  >(object: I): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryDelegatorWithdrawAddressResponse.$type,
  QueryDelegatorWithdrawAddressResponse,
);

function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return { $type: 'cosmos.distribution.v1beta1.QueryCommunityPoolRequest' };
}

export const QueryCommunityPoolRequest = {
  $type: 'cosmos.distribution.v1beta1.QueryCommunityPoolRequest' as const,

  encode(
    _: QueryCommunityPoolRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): QueryCommunityPoolRequest {
    return {
      $type: QueryCommunityPoolRequest.$type,
    };
  },

  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolRequest>, I>>(
    _: I,
  ): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
};

messageTypeRegistry.set(
  QueryCommunityPoolRequest.$type,
  QueryCommunityPoolRequest,
);

function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.QueryCommunityPoolResponse',
    pool: [],
  };
}

export const QueryCommunityPoolResponse = {
  $type: 'cosmos.distribution.v1beta1.QueryCommunityPoolResponse' as const,

  encode(
    message: QueryCommunityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityPoolResponse {
    return {
      $type: QueryCommunityPoolResponse.$type,
      pool: Array.isArray(object?.pool)
        ? object.pool.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolResponse>, I>>(
    object: I,
  ): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryCommunityPoolResponse.$type,
  QueryCommunityPoolResponse,
);

/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards(
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission(
    request: DeepPartial<QueryValidatorCommissionRequest>,
  ): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes(
    request: DeepPartial<QueryValidatorSlashesRequest>,
  ): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards(
    request: DeepPartial<QueryDelegationRewardsRequest>,
  ): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  DelegationTotalRewards(
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
  ): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress(
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  CommunityPool(
    request: DeepPartial<QueryCommunityPoolRequest>,
  ): Promise<QueryCommunityPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(
      this,
    );
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(
      request,
    ).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'ValidatorOutstandingRewards',
      data,
    );
    return promise.then(data =>
      QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)),
    );
  }

  ValidatorCommission(
    request: QueryValidatorCommissionRequest,
  ): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'ValidatorCommission',
      data,
    );
    return promise.then(data =>
      QueryValidatorCommissionResponse.decode(new _m0.Reader(data)),
    );
  }

  ValidatorSlashes(
    request: QueryValidatorSlashesRequest,
  ): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'ValidatorSlashes',
      data,
    );
    return promise.then(data =>
      QueryValidatorSlashesResponse.decode(new _m0.Reader(data)),
    );
  }

  DelegationRewards(
    request: QueryDelegationRewardsRequest,
  ): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'DelegationRewards',
      data,
    );
    return promise.then(data =>
      QueryDelegationRewardsResponse.decode(new _m0.Reader(data)),
    );
  }

  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'DelegationTotalRewards',
      data,
    );
    return promise.then(data =>
      QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)),
    );
  }

  DelegatorValidators(
    request: QueryDelegatorValidatorsRequest,
  ): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'DelegatorValidators',
      data,
    );
    return promise.then(data =>
      QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)),
    );
  }

  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'DelegatorWithdrawAddress',
      data,
    );
    return promise.then(data =>
      QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)),
    );
  }

  CommunityPool(
    request: QueryCommunityPoolRequest,
  ): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Query',
      'CommunityPool',
      data,
    );
    return promise.then(data =>
      QueryCommunityPoolResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
