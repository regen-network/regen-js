/* eslint-disable */
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from '../../../cosmos/distribution/v1beta1/distribution';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { DecCoin } from '../../../cosmos/base/v1beta1/coin';
import { Reader, Writer, util, configure } from 'protobufjs/minimal';
import * as Long from 'long';


/**
 *  QueryParamsRequest is the request type for the Query/Params RPC method.
 */
export interface QueryParamsRequest {
}

/**
 *  QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface QueryParamsResponse {
  /**
   *  params defines the parameters of the module.
   */
  params?: Params;
}

/**
 *  QueryValidatorOutstandingRewardsRequest is the request type for the
 *  Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /**
   *  validator_address defines the validator address to query for.
   */
  validatorAddress: string;
}

/**
 *  QueryValidatorOutstandingRewardsResponse is the response type for the
 *  Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards?: ValidatorOutstandingRewards;
}

/**
 *  QueryValidatorCommissionRequest is the request type for the
 *  Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /**
   *  validator_address defines the validator address to query for.
   */
  validatorAddress: string;
}

/**
 *  QueryValidatorCommissionResponse is the response type for the
 *  Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /**
   *  commission defines the commision the validator received.
   */
  commission?: ValidatorAccumulatedCommission;
}

/**
 *  QueryValidatorSlashesRequest is the request type for the
 *  Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /**
   *  validator_address defines the validator address to query for.
   */
  validatorAddress: string;
  /**
   *  starting_height defines the optional starting height to query the slashes.
   */
  startingHeight: number;
  /**
   *  starting_height defines the optional ending height to query the slashes.
   */
  endingHeight: number;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryValidatorSlashesResponse is the response type for the
 *  Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /**
   *  slashes defines the slashes the validator received.
   */
  slashes: ValidatorSlashEvent[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryDelegationRewardsRequest is the request type for the
 *  Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /**
   *  delegator_address defines the delegator address to query for.
   */
  delegatorAddress: string;
  /**
   *  validator_address defines the validator address to query for.
   */
  validatorAddress: string;
}

/**
 *  QueryDelegationRewardsResponse is the response type for the
 *  Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /**
   *  rewards defines the rewards accrued by a delegation.
   */
  rewards: DecCoin[];
}

/**
 *  QueryDelegationTotalRewardsRequest is the request type for the
 *  Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /**
   *  delegator_address defines the delegator address to query for.
   */
  delegatorAddress: string;
}

/**
 *  QueryDelegationTotalRewardsResponse is the response type for the
 *  Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /**
   *  rewards defines all the rewards accrued by a delegator.
   */
  rewards: DelegationDelegatorReward[];
  /**
   *  total defines the sum of all the rewards.
   */
  total: DecCoin[];
}

/**
 *  QueryDelegatorValidatorsRequest is the request type for the
 *  Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /**
   *  delegator_address defines the delegator address to query for.
   */
  delegatorAddress: string;
}

/**
 *  QueryDelegatorValidatorsResponse is the response type for the
 *  Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /**
   *  validators defines the validators a delegator is delegating for.
   */
  validators: string[];
}

/**
 *  QueryDelegatorWithdrawAddressRequest is the request type for the
 *  Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /**
   *  delegator_address defines the delegator address to query for.
   */
  delegatorAddress: string;
}

/**
 *  QueryDelegatorWithdrawAddressResponse is the response type for the
 *  Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /**
   *  withdraw_address defines the delegator address to query for.
   */
  withdrawAddress: string;
}

/**
 *  QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 *  method.
 */
export interface QueryCommunityPoolRequest {
}

/**
 *  QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 *  RPC method.
 */
export interface QueryCommunityPoolResponse {
  /**
   *  pool defines community pool's coins.
   */
  pool: DecCoin[];
}

const baseQueryParamsRequest: object = {
};

const baseQueryParamsResponse: object = {
};

const baseQueryValidatorOutstandingRewardsRequest: object = {
  validatorAddress: "",
};

const baseQueryValidatorOutstandingRewardsResponse: object = {
};

const baseQueryValidatorCommissionRequest: object = {
  validatorAddress: "",
};

const baseQueryValidatorCommissionResponse: object = {
};

const baseQueryValidatorSlashesRequest: object = {
  validatorAddress: "",
  startingHeight: 0,
  endingHeight: 0,
};

const baseQueryValidatorSlashesResponse: object = {
};

const baseQueryDelegationRewardsRequest: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

const baseQueryDelegationRewardsResponse: object = {
};

const baseQueryDelegationTotalRewardsRequest: object = {
  delegatorAddress: "",
};

const baseQueryDelegationTotalRewardsResponse: object = {
};

const baseQueryDelegatorValidatorsRequest: object = {
  delegatorAddress: "",
};

const baseQueryDelegatorValidatorsResponse: object = {
  validators: "",
};

const baseQueryDelegatorWithdrawAddressRequest: object = {
  delegatorAddress: "",
};

const baseQueryDelegatorWithdrawAddressResponse: object = {
  withdrawAddress: "",
};

const baseQueryCommunityPoolRequest: object = {
};

const baseQueryCommunityPoolResponse: object = {
};

/**
 *  Query defines the gRPC querier service for distribution module.
 */
export interface Query {

  /**
   *  Params queries params of the distribution module.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;

  /**
   *  ValidatorOutstandingRewards queries rewards of a validator address.
   */
  ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;

  /**
   *  ValidatorCommission queries accumulated commission for a validator.
   */
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;

  /**
   *  ValidatorSlashes queries slash events of a validator.
   */
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;

  /**
   *  DelegationRewards queries the total rewards accrued by a delegation.
   */
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;

  /**
   *  DelegationTotalRewards queries the total rewards accrued by a each
   *  validator.
   */
  DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;

  /**
   *  DelegatorValidators queries the validators of a delegator.
   */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;

  /**
   *  DelegatorWithdrawAddress queries withdraw address of a delegator.
   */
  DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;

  /**
   *  CommunityPool queries the community pool coins.
   */
  CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;

}

export class QueryClientImpl implements Query {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new Reader(data)));
  }

  ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new Reader(data)));
  }

  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new Reader(data)));
  }

  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new Reader(data)));
  }

  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new Reader(data)));
  }

  DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new Reader(data)));
  }

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new Reader(data)));
  }

  DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new Reader(data)));
  }

  CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const protobufPackage = 'cosmos.distribution.v1beta1'

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined && message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
};

export const QueryValidatorOutstandingRewardsRequest = {
  encode(message: QueryValidatorOutstandingRewardsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorOutstandingRewardsRequest } as QueryValidatorOutstandingRewardsRequest;
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
    const message = { ...baseQueryValidatorOutstandingRewardsRequest } as QueryValidatorOutstandingRewardsRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    const message = { ...baseQueryValidatorOutstandingRewardsRequest } as QueryValidatorOutstandingRewardsRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
};

export const QueryValidatorOutstandingRewardsResponse = {
  encode(message: QueryValidatorOutstandingRewardsResponse, writer: Writer = Writer.create()): Writer {
    if (message.rewards !== undefined && message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorOutstandingRewardsResponse } as QueryValidatorOutstandingRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    const message = { ...baseQueryValidatorOutstandingRewardsResponse } as QueryValidatorOutstandingRewardsResponse;
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromJSON(object.rewards);
    } else {
      message.rewards = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    const message = { ...baseQueryValidatorOutstandingRewardsResponse } as QueryValidatorOutstandingRewardsResponse;
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromPartial(object.rewards);
    } else {
      message.rewards = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
};

export const QueryValidatorCommissionRequest = {
  encode(message: QueryValidatorCommissionRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorCommissionRequest } as QueryValidatorCommissionRequest;
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
    const message = { ...baseQueryValidatorCommissionRequest } as QueryValidatorCommissionRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = { ...baseQueryValidatorCommissionRequest } as QueryValidatorCommissionRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
};

export const QueryValidatorCommissionResponse = {
  encode(message: QueryValidatorCommissionResponse, writer: Writer = Writer.create()): Writer {
    if (message.commission !== undefined && message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorCommissionResponse } as QueryValidatorCommissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionResponse {
    const message = { ...baseQueryValidatorCommissionResponse } as QueryValidatorCommissionResponse;
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromJSON(object.commission);
    } else {
      message.commission = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = { ...baseQueryValidatorCommissionResponse } as QueryValidatorCommissionResponse;
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromPartial(object.commission);
    } else {
      message.commission = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
    return obj;
  },
};

export const QueryValidatorSlashesRequest = {
  encode(message: QueryValidatorSlashesRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddress);
    writer.uint32(16).uint64(message.startingHeight);
    writer.uint32(24).uint64(message.endingHeight);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorSlashesRequest } as QueryValidatorSlashesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.endingHeight = longToNumber(reader.uint64() as Long);
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
    const message = { ...baseQueryValidatorSlashesRequest } as QueryValidatorSlashesRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = Number(object.startingHeight);
    } else {
      message.startingHeight = 0;
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = Number(object.endingHeight);
    } else {
      message.endingHeight = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = { ...baseQueryValidatorSlashesRequest } as QueryValidatorSlashesRequest;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = object.startingHeight;
    } else {
      message.startingHeight = 0;
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = object.endingHeight;
    } else {
      message.endingHeight = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined && (obj.startingHeight = message.startingHeight);
    message.endingHeight !== undefined && (obj.endingHeight = message.endingHeight);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryValidatorSlashesResponse = {
  encode(message: QueryValidatorSlashesResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorSlashesResponse } as QueryValidatorSlashesResponse;
    message.slashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
    const message = { ...baseQueryValidatorSlashesResponse } as QueryValidatorSlashesResponse;
    message.slashes = [];
    if (object.slashes !== undefined && object.slashes !== null) {
      for (const e of object.slashes) {
        message.slashes.push(ValidatorSlashEvent.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = { ...baseQueryValidatorSlashesResponse } as QueryValidatorSlashesResponse;
    message.slashes = [];
    if (object.slashes !== undefined && object.slashes !== null) {
      for (const e of object.slashes) {
        message.slashes.push(ValidatorSlashEvent.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegationRewardsRequest = {
  encode(message: QueryDelegationRewardsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationRewardsRequest } as QueryDelegationRewardsRequest;
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
    const message = { ...baseQueryDelegationRewardsRequest } as QueryDelegationRewardsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = { ...baseQueryDelegationRewardsRequest } as QueryDelegationRewardsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
};

export const QueryDelegationRewardsResponse = {
  encode(message: QueryDelegationRewardsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationRewardsResponse } as QueryDelegationRewardsResponse;
    message.rewards = [];
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
    const message = { ...baseQueryDelegationRewardsResponse } as QueryDelegationRewardsResponse;
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = { ...baseQueryDelegationRewardsResponse } as QueryDelegationRewardsResponse;
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
};

export const QueryDelegationTotalRewardsRequest = {
  encode(message: QueryDelegationTotalRewardsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationTotalRewardsRequest } as QueryDelegationTotalRewardsRequest;
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
    const message = { ...baseQueryDelegationTotalRewardsRequest } as QueryDelegationTotalRewardsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = { ...baseQueryDelegationTotalRewardsRequest } as QueryDelegationTotalRewardsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
};

export const QueryDelegationTotalRewardsResponse = {
  encode(message: QueryDelegationTotalRewardsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationTotalRewardsResponse } as QueryDelegationTotalRewardsResponse;
    message.rewards = [];
    message.total = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
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
    const message = { ...baseQueryDelegationTotalRewardsResponse } as QueryDelegationTotalRewardsResponse;
    message.rewards = [];
    message.total = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DelegationDelegatorReward.fromJSON(e));
      }
    }
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = { ...baseQueryDelegationTotalRewardsResponse } as QueryDelegationTotalRewardsResponse;
    message.rewards = [];
    message.total = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DelegationDelegatorReward.fromPartial(e));
      }
    }
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
};

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
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
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
};

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
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
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(e);
      }
    }
    return message;
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
};

export const QueryDelegatorWithdrawAddressRequest = {
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorWithdrawAddressRequest } as QueryDelegatorWithdrawAddressRequest;
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
    const message = { ...baseQueryDelegatorWithdrawAddressRequest } as QueryDelegatorWithdrawAddressRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = { ...baseQueryDelegatorWithdrawAddressRequest } as QueryDelegatorWithdrawAddressRequest;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    return message;
  },
  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
};

export const QueryDelegatorWithdrawAddressResponse = {
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.withdrawAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorWithdrawAddressResponse } as QueryDelegatorWithdrawAddressResponse;
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
    const message = { ...baseQueryDelegatorWithdrawAddressResponse } as QueryDelegatorWithdrawAddressResponse;
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = String(object.withdrawAddress);
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = { ...baseQueryDelegatorWithdrawAddressResponse } as QueryDelegatorWithdrawAddressResponse;
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = object.withdrawAddress;
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },
  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
};

export const QueryCommunityPoolRequest = {
  encode(_: QueryCommunityPoolRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommunityPoolRequest } as QueryCommunityPoolRequest;
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
    const message = { ...baseQueryCommunityPoolRequest } as QueryCommunityPoolRequest;
    return message;
  },
  fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = { ...baseQueryCommunityPoolRequest } as QueryCommunityPoolRequest;
    return message;
  },
  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const QueryCommunityPoolResponse = {
  encode(message: QueryCommunityPoolResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommunityPoolResponse } as QueryCommunityPoolResponse;
    message.pool = [];
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
    const message = { ...baseQueryCommunityPoolResponse } as QueryCommunityPoolResponse;
    message.pool = [];
    if (object.pool !== undefined && object.pool !== null) {
      for (const e of object.pool) {
        message.pool.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = { ...baseQueryCommunityPoolResponse } as QueryCommunityPoolResponse;
    message.pool = [];
    if (object.pool !== undefined && object.pool !== null) {
      for (const e of object.pool) {
        message.pool.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;