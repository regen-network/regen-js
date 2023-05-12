/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  DelegationResponse,
  HistoricalInfo,
  Params,
  Pool,
  RedelegationResponse,
  UnbondingDelegation,
  Validator,
} from "./staking";

export const protobufPackage = "cosmos.staking.v1beta1";

/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  $type: "cosmos.staking.v1beta1.QueryValidatorsRequest";
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  $type: "cosmos.staking.v1beta1.QueryValidatorsResponse";
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  $type: "cosmos.staking.v1beta1.QueryValidatorRequest";
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  $type: "cosmos.staking.v1beta1.QueryValidatorResponse";
  /** validator defines the validator info. */
  validator?: Validator;
}

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  $type: "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  $type: "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  $type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  $type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  $type: "cosmos.staking.v1beta1.QueryDelegationRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  $type: "cosmos.staking.v1beta1.QueryDelegationResponse";
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse?: DelegationResponse;
}

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  $type: "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  $type: "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
  /** unbond defines the unbonding information of a delegation. */
  unbond?: UnbondingDelegation;
}

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  $type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  $type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  $type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  $type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  $type: "cosmos.staking.v1beta1.QueryRedelegationsRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  $type: "cosmos.staking.v1beta1.QueryRedelegationsResponse";
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
  /** validator defines the validator info. */
  validator?: Validator;
}

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  $type: "cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
  /** height defines at which height to query the historical info. */
  height: Long;
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  $type: "cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfo;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  $type: "cosmos.staking.v1beta1.QueryPoolRequest";
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  $type: "cosmos.staking.v1beta1.QueryPoolResponse";
  /** pool defines the pool info. */
  pool?: Pool;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: "cosmos.staking.v1beta1.QueryParamsRequest";
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: "cosmos.staking.v1beta1.QueryParamsResponse";
  /** params holds all the parameters of this module. */
  params?: Params;
}

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return { $type: "cosmos.staking.v1beta1.QueryValidatorsRequest", status: "", pagination: undefined };
}

export const QueryValidatorsRequest = {
  $type: "cosmos.staking.v1beta1.QueryValidatorsRequest" as const,

  encode(message: QueryValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsRequest {
    return {
      $type: QueryValidatorsRequest.$type,
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorsRequest.$type, QueryValidatorsRequest);

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return { $type: "cosmos.staking.v1beta1.QueryValidatorsResponse", validators: [], pagination: undefined };
}

export const QueryValidatorsResponse = {
  $type: "cosmos.staking.v1beta1.QueryValidatorsResponse" as const,

  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorsResponse {
    return {
      $type: QueryValidatorsResponse.$type,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorsResponse.$type, QueryValidatorsResponse);

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return { $type: "cosmos.staking.v1beta1.QueryValidatorRequest", validatorAddr: "" };
}

export const QueryValidatorRequest = {
  $type: "cosmos.staking.v1beta1.QueryValidatorRequest" as const,

  encode(message: QueryValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorRequest {
    return {
      $type: QueryValidatorRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest {
    return QueryValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorRequest.$type, QueryValidatorRequest);

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return { $type: "cosmos.staking.v1beta1.QueryValidatorResponse", validator: undefined };
}

export const QueryValidatorResponse = {
  $type: "cosmos.staking.v1beta1.QueryValidatorResponse" as const,

  encode(message: QueryValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorResponse {
    return {
      $type: QueryValidatorResponse.$type,
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
    };
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse {
    return QueryValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? Validator.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorResponse.$type, QueryValidatorResponse);

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return { $type: "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest", validatorAddr: "", pagination: undefined };
}

export const QueryValidatorDelegationsRequest = {
  $type: "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest" as const,

  encode(message: QueryValidatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationsRequest {
    return {
      $type: QueryValidatorDelegationsRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorDelegationsRequest.$type, QueryValidatorDelegationsRequest);

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    $type: "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
    delegationResponses: [],
    pagination: undefined,
  };
}

export const QueryValidatorDelegationsResponse = {
  $type: "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse" as const,

  encode(message: QueryValidatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorDelegationsResponse {
    return {
      $type: QueryValidatorDelegationsResponse.$type,
      delegationResponses: Array.isArray(object?.delegationResponses)
        ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorDelegationsResponse.$type, QueryValidatorDelegationsResponse);

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    $type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
    validatorAddr: "",
    pagination: undefined,
  };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  $type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest" as const,

  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    return {
      $type: QueryValidatorUnbondingDelegationsRequest.$type,
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
  ): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorUnbondingDelegationsRequest.$type, QueryValidatorUnbondingDelegationsRequest);

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    $type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
    unbondingResponses: [],
    pagination: undefined,
  };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  $type: "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse" as const,

  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    return {
      $type: QueryValidatorUnbondingDelegationsResponse.$type,
      unbondingResponses: Array.isArray(object?.unbondingResponses)
        ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>,
  ): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryValidatorUnbondingDelegationsResponse.$type, QueryValidatorUnbondingDelegationsResponse);

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return { $type: "cosmos.staking.v1beta1.QueryDelegationRequest", delegatorAddr: "", validatorAddr: "" };
}

export const QueryDelegationRequest = {
  $type: "cosmos.staking.v1beta1.QueryDelegationRequest" as const,

  encode(message: QueryDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRequest {
    return {
      $type: QueryDelegationRequest.$type,
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest {
    return QueryDelegationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryDelegationRequest.$type, QueryDelegationRequest);

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return { $type: "cosmos.staking.v1beta1.QueryDelegationResponse", delegationResponse: undefined };
}

export const QueryDelegationResponse = {
  $type: "cosmos.staking.v1beta1.QueryDelegationResponse" as const,

  encode(message: QueryDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationResponse {
    return {
      $type: QueryDelegationResponse.$type,
      delegationResponse: isSet(object.delegationResponse)
        ? DelegationResponse.fromJSON(object.delegationResponse)
        : undefined,
    };
  },

  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse
      ? DelegationResponse.toJSON(message.delegationResponse)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse {
    return QueryDelegationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = (object.delegationResponse !== undefined && object.delegationResponse !== null)
      ? DelegationResponse.fromPartial(object.delegationResponse)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegationResponse.$type, QueryDelegationResponse);

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return { $type: "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest", delegatorAddr: "", validatorAddr: "" };
}

export const QueryUnbondingDelegationRequest = {
  $type: "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest" as const,

  encode(message: QueryUnbondingDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationRequest {
    return {
      $type: QueryUnbondingDelegationRequest.$type,
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create(base?: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryUnbondingDelegationRequest.$type, QueryUnbondingDelegationRequest);

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return { $type: "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse", unbond: undefined };
}

export const QueryUnbondingDelegationResponse = {
  $type: "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse" as const,

  encode(message: QueryUnbondingDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationResponse {
    return {
      $type: QueryUnbondingDelegationResponse.$type,
      unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined,
    };
  },

  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined &&
      (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = (object.unbond !== undefined && object.unbond !== null)
      ? UnbondingDelegation.fromPartial(object.unbond)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryUnbondingDelegationResponse.$type, QueryUnbondingDelegationResponse);

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return { $type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest", delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorDelegationsRequest = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest" as const,

  encode(message: QueryDelegatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    return {
      $type: QueryDelegatorDelegationsRequest.$type,
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorDelegationsRequest.$type, QueryDelegatorDelegationsRequest);

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    $type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
    delegationResponses: [],
    pagination: undefined,
  };
}

export const QueryDelegatorDelegationsResponse = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse" as const,

  encode(message: QueryDelegatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    return {
      $type: QueryDelegatorDelegationsResponse.$type,
      delegationResponses: Array.isArray(object?.delegationResponses)
        ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorDelegationsResponse.$type, QueryDelegatorDelegationsResponse);

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    $type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
    delegatorAddr: "",
    pagination: undefined,
  };
}

export const QueryDelegatorUnbondingDelegationsRequest = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest" as const,

  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    return {
      $type: QueryDelegatorUnbondingDelegationsRequest.$type,
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
  ): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorUnbondingDelegationsRequest.$type, QueryDelegatorUnbondingDelegationsRequest);

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    $type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
    unbondingResponses: [],
    pagination: undefined,
  };
}

export const QueryDelegatorUnbondingDelegationsResponse = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse" as const,

  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    return {
      $type: QueryDelegatorUnbondingDelegationsResponse.$type,
      unbondingResponses: Array.isArray(object?.unbondingResponses)
        ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>,
  ): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorUnbondingDelegationsResponse.$type, QueryDelegatorUnbondingDelegationsResponse);

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    $type: "cosmos.staking.v1beta1.QueryRedelegationsRequest",
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: undefined,
  };
}

export const QueryRedelegationsRequest = {
  $type: "cosmos.staking.v1beta1.QueryRedelegationsRequest" as const,

  encode(message: QueryRedelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
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

  fromJSON(object: any): QueryRedelegationsRequest {
    return {
      $type: QueryRedelegationsRequest.$type,
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      srcValidatorAddr: isSet(object.srcValidatorAddr) ? String(object.srcValidatorAddr) : "",
      dstValidatorAddr: isSet(object.dstValidatorAddr) ? String(object.dstValidatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryRedelegationsRequest.$type, QueryRedelegationsRequest);

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    $type: "cosmos.staking.v1beta1.QueryRedelegationsResponse",
    redelegationResponses: [],
    pagination: undefined,
  };
}

export const QueryRedelegationsResponse = {
  $type: "cosmos.staking.v1beta1.QueryRedelegationsResponse" as const,

  encode(message: QueryRedelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRedelegationsResponse {
    return {
      $type: QueryRedelegationsResponse.$type,
      redelegationResponses: Array.isArray(object?.redelegationResponses)
        ? object.redelegationResponses.map((e: any) => RedelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map((e) =>
        e ? RedelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map((e) => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryRedelegationsResponse.$type, QueryRedelegationsResponse);

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return { $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest", delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorValidatorsRequest = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest" as const,

  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorValidatorsRequest.$type, QueryDelegatorValidatorsRequest);

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return { $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse", validators: [], pagination: undefined };
}

export const QueryDelegatorValidatorsResponse = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse" as const,

  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      $type: QueryDelegatorValidatorsResponse.$type,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorValidatorsResponse.$type, QueryDelegatorValidatorsResponse);

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return { $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest", delegatorAddr: "", validatorAddr: "" };
}

export const QueryDelegatorValidatorRequest = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest" as const,

  encode(message: QueryDelegatorValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorRequest {
    return {
      $type: QueryDelegatorValidatorRequest.$type,
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorValidatorRequest.$type, QueryDelegatorValidatorRequest);

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return { $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse", validator: undefined };
}

export const QueryDelegatorValidatorResponse = {
  $type: "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse" as const,

  encode(message: QueryDelegatorValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorResponse {
    return {
      $type: QueryDelegatorValidatorResponse.$type,
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? Validator.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDelegatorValidatorResponse.$type, QueryDelegatorValidatorResponse);

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return { $type: "cosmos.staking.v1beta1.QueryHistoricalInfoRequest", height: Long.ZERO };
}

export const QueryHistoricalInfoRequest = {
  $type: "cosmos.staking.v1beta1.QueryHistoricalInfoRequest" as const,

  encode(message: QueryHistoricalInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoRequest {
    return {
      $type: QueryHistoricalInfoRequest.$type,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
    };
  },

  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryHistoricalInfoRequest.$type, QueryHistoricalInfoRequest);

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return { $type: "cosmos.staking.v1beta1.QueryHistoricalInfoResponse", hist: undefined };
}

export const QueryHistoricalInfoResponse = {
  $type: "cosmos.staking.v1beta1.QueryHistoricalInfoResponse" as const,

  encode(message: QueryHistoricalInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoResponse {
    return {
      $type: QueryHistoricalInfoResponse.$type,
      hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined,
    };
  },

  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = (object.hist !== undefined && object.hist !== null)
      ? HistoricalInfo.fromPartial(object.hist)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryHistoricalInfoResponse.$type, QueryHistoricalInfoResponse);

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { $type: "cosmos.staking.v1beta1.QueryPoolRequest" };
}

export const QueryPoolRequest = {
  $type: "cosmos.staking.v1beta1.QueryPoolRequest" as const,

  encode(_: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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

  fromJSON(_: any): QueryPoolRequest {
    return { $type: QueryPoolRequest.$type };
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    return QueryPoolRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryPoolRequest.$type, QueryPoolRequest);

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { $type: "cosmos.staking.v1beta1.QueryPoolResponse", pool: undefined };
}

export const QueryPoolResponse = {
  $type: "cosmos.staking.v1beta1.QueryPoolResponse" as const,

  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return { $type: QueryPoolResponse.$type, pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    return QueryPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryPoolResponse.$type, QueryPoolResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: "cosmos.staking.v1beta1.QueryParamsRequest" };
}

export const QueryParamsRequest = {
  $type: "cosmos.staking.v1beta1.QueryParamsRequest" as const,

  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return { $type: QueryParamsRequest.$type };
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { $type: "cosmos.staking.v1beta1.QueryParamsResponse", params: undefined };
}

export const QueryParamsResponse = {
  $type: "cosmos.staking.v1beta1.QueryParamsResponse" as const,

  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

/** Query defines the gRPC querier service. */
export interface Query {
  /** Validators queries all validators that match the given status. */
  Validators(request: DeepPartial<QueryValidatorsRequest>): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  Validator(request: DeepPartial<QueryValidatorRequest>): Promise<QueryValidatorResponse>;
  /** ValidatorDelegations queries delegate info for given validator. */
  ValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
  ): Promise<QueryValidatorDelegationsResponse>;
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  ValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  Delegation(request: DeepPartial<QueryDelegationRequest>): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  UnbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>): Promise<QueryUnbondingDelegationResponse>;
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  DelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
  ): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  DelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /** Redelegations queries redelegations of given address. */
  Redelegations(request: DeepPartial<QueryRedelegationsRequest>): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  DelegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  DelegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  HistoricalInfo(request: DeepPartial<QueryHistoricalInfoRequest>): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  Pool(request: DeepPartial<QueryPoolRequest>): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  Params(request: DeepPartial<QueryParamsRequest>): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.staking.v1beta1.Query";
    this.rpc = rpc;
    this.Validators = this.Validators.bind(this);
    this.Validator = this.Validator.bind(this);
    this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
    this.ValidatorUnbondingDelegations = this.ValidatorUnbondingDelegations.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
    this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
    this.DelegatorUnbondingDelegations = this.DelegatorUnbondingDelegations.bind(this);
    this.Redelegations = this.Redelegations.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorValidator = this.DelegatorValidator.bind(this);
    this.HistoricalInfo = this.HistoricalInfo.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Params = this.Params.bind(this);
  }
  Validators(request: DeepPartial<QueryValidatorsRequest>): Promise<QueryValidatorsResponse> {
    const fromPartial = QueryValidatorsRequest.fromPartial(request);
    const data = QueryValidatorsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Validators", data);
    return promise.then((data) => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  Validator(request: DeepPartial<QueryValidatorRequest>): Promise<QueryValidatorResponse> {
    const fromPartial = QueryValidatorRequest.fromPartial(request);
    const data = QueryValidatorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Validator", data);
    return promise.then((data) => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  ValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
  ): Promise<QueryValidatorDelegationsResponse> {
    const fromPartial = QueryValidatorDelegationsRequest.fromPartial(request);
    const data = QueryValidatorDelegationsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ValidatorDelegations", data);
    return promise.then((data) => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  ValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
  ): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const fromPartial = QueryValidatorUnbondingDelegationsRequest.fromPartial(request);
    const data = QueryValidatorUnbondingDelegationsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ValidatorUnbondingDelegations", data);
    return promise.then((data) => QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  Delegation(request: DeepPartial<QueryDelegationRequest>): Promise<QueryDelegationResponse> {
    const fromPartial = QueryDelegationRequest.fromPartial(request);
    const data = QueryDelegationRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Delegation", data);
    return promise.then((data) => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }

  UnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
  ): Promise<QueryUnbondingDelegationResponse> {
    const fromPartial = QueryUnbondingDelegationRequest.fromPartial(request);
    const data = QueryUnbondingDelegationRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UnbondingDelegation", data);
    return promise.then((data) => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  DelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
  ): Promise<QueryDelegatorDelegationsResponse> {
    const fromPartial = QueryDelegatorDelegationsRequest.fromPartial(request);
    const data = QueryDelegatorDelegationsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DelegatorDelegations", data);
    return promise.then((data) => QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const fromPartial = QueryDelegatorUnbondingDelegationsRequest.fromPartial(request);
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DelegatorUnbondingDelegations", data);
    return promise.then((data) => QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  Redelegations(request: DeepPartial<QueryRedelegationsRequest>): Promise<QueryRedelegationsResponse> {
    const fromPartial = QueryRedelegationsRequest.fromPartial(request);
    const data = QueryRedelegationsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Redelegations", data);
    return promise.then((data) => QueryRedelegationsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
  ): Promise<QueryDelegatorValidatorsResponse> {
    const fromPartial = QueryDelegatorValidatorsRequest.fromPartial(request);
    const data = QueryDelegatorValidatorsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>): Promise<QueryDelegatorValidatorResponse> {
    const fromPartial = QueryDelegatorValidatorRequest.fromPartial(request);
    const data = QueryDelegatorValidatorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DelegatorValidator", data);
    return promise.then((data) => QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
  }

  HistoricalInfo(request: DeepPartial<QueryHistoricalInfoRequest>): Promise<QueryHistoricalInfoResponse> {
    const fromPartial = QueryHistoricalInfoRequest.fromPartial(request);
    const data = QueryHistoricalInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "HistoricalInfo", data);
    return promise.then((data) => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: DeepPartial<QueryPoolRequest>): Promise<QueryPoolResponse> {
    const fromPartial = QueryPoolRequest.fromPartial(request);
    const data = QueryPoolRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  Params(request: DeepPartial<QueryParamsRequest>): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
