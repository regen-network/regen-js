/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Params,
  ClassInfo,
  BatchInfo,
  CreditType,
} from '../../../regen/ecocredit/v1alpha1/types';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryParamsRequest';
}

/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryParamsResponse';
  /** params defines the parameters of the ecocredit module. */
  params?: Params;
}

/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryClassesRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryClassesResponse';
  /** classes are the fetched credit classes. */
  classes: ClassInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryClassInfoRequest';
  /** class_id is the unique ID of credit class to query. */
  classId: string;
}

/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryClassInfoResponse';
  /** info is the ClassInfo for the credit class. */
  info?: ClassInfo;
}

/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchesRequest';
  /** class_id is the unique ID of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchesResponse';
  /** batches are the fetched credit batches within the class. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchInfoRequest';
  /** batch_denom is the unique ID of credit batch to query. */
  batchDenom: string;
}

/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchInfoResponse';
  /** info is the BatchInfo for the credit batch. */
  info?: BatchInfo;
}

/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryBalanceRequest';
  /** account is the address of the account whose balance is being queried. */
  account: string;
  /** batch_denom is the unique ID of credit batch balance to query. */
  batchDenom: string;
}

/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryBalanceResponse';
  /** tradable_amount is the decimal number of tradable credits. */
  tradableAmount: string;
  /** retired_amount is the decimal number of retired credits. */
  retiredAmount: string;
}

/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
  $type: 'regen.ecocredit.v1alpha1.QuerySupplyRequest';
  /** batch_denom is the unique ID of credit batch to query. */
  batchDenom: string;
}

/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
  $type: 'regen.ecocredit.v1alpha1.QuerySupplyResponse';
  /**
   * tradable_supply is the decimal number of tradable credits in the batch
   * supply.
   */
  tradableSupply: string;
  /**
   * retired_supply is the decimal number of retired credits in the batch
   * supply.
   */
  retiredSupply: string;
}

/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryCreditTypesRequest';
}

/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryCreditTypesResponse';
  /** list of credit types */
  creditTypes: CreditType[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'regen.ecocredit.v1alpha1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryParamsRequest' as const,

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
    $type: 'regen.ecocredit.v1alpha1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryParamsResponse' as const,

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

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryClassesRequest',
    pagination: undefined,
  };
}

export const QueryClassesRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryClassesRequest' as const,

  encode(
    message: QueryClassesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesRequest {
    return {
      $type: QueryClassesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(
    object: I,
  ): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassesRequest.$type, QueryClassesRequest);

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryClassesResponse',
    classes: [],
    pagination: undefined,
  };
}

export const QueryClassesResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryClassesResponse' as const,

  encode(
    message: QueryClassesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassesResponse {
    return {
      $type: QueryClassesResponse.$type,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => ClassInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e =>
        e ? ClassInfo.toJSON(e) : undefined,
      );
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(
    object: I,
  ): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassesResponse.$type, QueryClassesResponse);

function createBaseQueryClassInfoRequest(): QueryClassInfoRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryClassInfoRequest',
    classId: '',
  };
}

export const QueryClassInfoRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryClassInfoRequest' as const,

  encode(
    message: QueryClassInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassInfoRequest {
    return {
      $type: QueryClassInfoRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: QueryClassInfoRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassInfoRequest>, I>>(
    object: I,
  ): QueryClassInfoRequest {
    const message = createBaseQueryClassInfoRequest();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryClassInfoRequest.$type, QueryClassInfoRequest);

function createBaseQueryClassInfoResponse(): QueryClassInfoResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryClassInfoResponse',
    info: undefined,
  };
}

export const QueryClassInfoResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryClassInfoResponse' as const,

  encode(
    message: QueryClassInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      ClassInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = ClassInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassInfoResponse {
    return {
      $type: QueryClassInfoResponse.$type,
      info: isSet(object.info) ? ClassInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: QueryClassInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? ClassInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassInfoResponse>, I>>(
    object: I,
  ): QueryClassInfoResponse {
    const message = createBaseQueryClassInfoResponse();
    message.info =
      object.info !== undefined && object.info !== null
        ? ClassInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassInfoResponse.$type, QueryClassInfoResponse);

function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryBatchesRequest',
    classId: '',
    pagination: undefined,
  };
}

export const QueryBatchesRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchesRequest' as const,

  encode(
    message: QueryBatchesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): QueryBatchesRequest {
    return {
      $type: QueryBatchesRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesRequest>, I>>(
    object: I,
  ): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    message.classId = object.classId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBatchesRequest.$type, QueryBatchesRequest);

function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryBatchesResponse',
    batches: [],
    pagination: undefined,
  };
}

export const QueryBatchesResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchesResponse' as const,

  encode(
    message: QueryBatchesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBatchesResponse {
    return {
      $type: QueryBatchesResponse.$type,
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => BatchInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e =>
        e ? BatchInfo.toJSON(e) : undefined,
      );
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesResponse>, I>>(
    object: I,
  ): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBatchesResponse.$type, QueryBatchesResponse);

function createBaseQueryBatchInfoRequest(): QueryBatchInfoRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryBatchInfoRequest',
    batchDenom: '',
  };
}

export const QueryBatchInfoRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchInfoRequest' as const,

  encode(
    message: QueryBatchInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchInfoRequest {
    return {
      $type: QueryBatchInfoRequest.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QueryBatchInfoRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchInfoRequest>, I>>(
    object: I,
  ): QueryBatchInfoRequest {
    const message = createBaseQueryBatchInfoRequest();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBatchInfoRequest.$type, QueryBatchInfoRequest);

function createBaseQueryBatchInfoResponse(): QueryBatchInfoResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryBatchInfoResponse',
    info: undefined,
  };
}

export const QueryBatchInfoResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryBatchInfoResponse' as const,

  encode(
    message: QueryBatchInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      BatchInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BatchInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchInfoResponse {
    return {
      $type: QueryBatchInfoResponse.$type,
      info: isSet(object.info) ? BatchInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: QueryBatchInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? BatchInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchInfoResponse>, I>>(
    object: I,
  ): QueryBatchInfoResponse {
    const message = createBaseQueryBatchInfoResponse();
    message.info =
      object.info !== undefined && object.info !== null
        ? BatchInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBatchInfoResponse.$type, QueryBatchInfoResponse);

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryBalanceRequest',
    account: '',
    batchDenom: '',
  };
}

export const QueryBalanceRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryBalanceRequest' as const,

  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      $type: QueryBalanceRequest.$type,
      account: isSet(object.account) ? String(object.account) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I,
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.account = object.account ?? '';
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceRequest.$type, QueryBalanceRequest);

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryBalanceResponse',
    tradableAmount: '',
    retiredAmount: '',
  };
}

export const QueryBalanceResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryBalanceResponse' as const,

  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tradableAmount !== '') {
      writer.uint32(10).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
      writer.uint32(18).string(message.retiredAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradableAmount = reader.string();
          break;
        case 2:
          message.retiredAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      $type: QueryBalanceResponse.$type,
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I,
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceResponse.$type, QueryBalanceResponse);

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QuerySupplyRequest',
    batchDenom: '',
  };
}

export const QuerySupplyRequest = {
  $type: 'regen.ecocredit.v1alpha1.QuerySupplyRequest' as const,

  encode(
    message: QuerySupplyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      $type: QuerySupplyRequest.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
    object: I,
  ): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyRequest.$type, QuerySupplyRequest);

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QuerySupplyResponse',
    tradableSupply: '',
    retiredSupply: '',
  };
}

export const QuerySupplyResponse = {
  $type: 'regen.ecocredit.v1alpha1.QuerySupplyResponse' as const,

  encode(
    message: QuerySupplyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tradableSupply !== '') {
      writer.uint32(10).string(message.tradableSupply);
    }
    if (message.retiredSupply !== '') {
      writer.uint32(18).string(message.retiredSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradableSupply = reader.string();
          break;
        case 2:
          message.retiredSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return {
      $type: QuerySupplyResponse.$type,
      tradableSupply: isSet(object.tradableSupply)
        ? String(object.tradableSupply)
        : '',
      retiredSupply: isSet(object.retiredSupply)
        ? String(object.retiredSupply)
        : '',
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.tradableSupply !== undefined &&
      (obj.tradableSupply = message.tradableSupply);
    message.retiredSupply !== undefined &&
      (obj.retiredSupply = message.retiredSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(
    object: I,
  ): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.tradableSupply = object.tradableSupply ?? '';
    message.retiredSupply = object.retiredSupply ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyResponse.$type, QuerySupplyResponse);

function createBaseQueryCreditTypesRequest(): QueryCreditTypesRequest {
  return { $type: 'regen.ecocredit.v1alpha1.QueryCreditTypesRequest' };
}

export const QueryCreditTypesRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryCreditTypesRequest' as const,

  encode(
    _: QueryCreditTypesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCreditTypesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesRequest();
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

  fromJSON(_: any): QueryCreditTypesRequest {
    return {
      $type: QueryCreditTypesRequest.$type,
    };
  },

  toJSON(_: QueryCreditTypesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCreditTypesRequest>, I>>(
    _: I,
  ): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryCreditTypesRequest.$type, QueryCreditTypesRequest);

function createBaseQueryCreditTypesResponse(): QueryCreditTypesResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryCreditTypesResponse',
    creditTypes: [],
  };
}

export const QueryCreditTypesResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryCreditTypesResponse' as const,

  encode(
    message: QueryCreditTypesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCreditTypesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCreditTypesResponse {
    return {
      $type: QueryCreditTypesResponse.$type,
      creditTypes: Array.isArray(object?.creditTypes)
        ? object.creditTypes.map((e: any) => CreditType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryCreditTypesResponse): unknown {
    const obj: any = {};
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e =>
        e ? CreditType.toJSON(e) : undefined,
      );
    } else {
      obj.creditTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCreditTypesResponse>, I>>(
    object: I,
  ): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes =
      object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryCreditTypesResponse.$type,
  QueryCreditTypesResponse,
);

/** Msg is the regen.ecocredit.v1alpha1 Query service. */
export interface Query {
  /** Classes queries for all credit classes with pagination. */
  Classes(
    request: DeepPartial<QueryClassesRequest>,
  ): Promise<QueryClassesResponse>;
  /** ClassInfo queries for information on a credit class. */
  ClassInfo(
    request: DeepPartial<QueryClassInfoRequest>,
  ): Promise<QueryClassInfoResponse>;
  /** Batches queries for all batches in the given credit class with pagination. */
  Batches(
    request: DeepPartial<QueryBatchesRequest>,
  ): Promise<QueryBatchesResponse>;
  /** BatchInfo queries for information on a credit batch. */
  BatchInfo(
    request: DeepPartial<QueryBatchInfoRequest>,
  ): Promise<QueryBatchInfoResponse>;
  /**
   * Balance queries the balance (both tradable and retired) of a given credit
   * batch for a given account.
   */
  Balance(
    request: DeepPartial<QueryBalanceRequest>,
  ): Promise<QueryBalanceResponse>;
  /** Supply queries the tradable and retired supply of a credit batch. */
  Supply(
    request: DeepPartial<QuerySupplyRequest>,
  ): Promise<QuerySupplyResponse>;
  /**
   * CreditTypes returns the list of allowed types that credit classes can have.
   * See Types/CreditType for more details.
   */
  CreditTypes(
    request: DeepPartial<QueryCreditTypesRequest>,
  ): Promise<QueryCreditTypesResponse>;
  /** Params queries the ecocredit module parameters. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Classes = this.Classes.bind(this);
    this.ClassInfo = this.ClassInfo.bind(this);
    this.Batches = this.Batches.bind(this);
    this.BatchInfo = this.BatchInfo.bind(this);
    this.Balance = this.Balance.bind(this);
    this.Supply = this.Supply.bind(this);
    this.CreditTypes = this.CreditTypes.bind(this);
    this.Params = this.Params.bind(this);
  }
  Classes(
    request: DeepPartial<QueryClassesRequest>,
  ): Promise<QueryClassesResponse> {
    const fromPartial = QueryClassesRequest.fromPartial(request);
    const data = QueryClassesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Classes',
      data,
    );
    return promise.then(data =>
      QueryClassesResponse.decode(new _m0.Reader(data)),
    );
  }

  ClassInfo(
    request: DeepPartial<QueryClassInfoRequest>,
  ): Promise<QueryClassInfoResponse> {
    const fromPartial = QueryClassInfoRequest.fromPartial(request);
    const data = QueryClassInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'ClassInfo',
      data,
    );
    return promise.then(data =>
      QueryClassInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  Batches(
    request: DeepPartial<QueryBatchesRequest>,
  ): Promise<QueryBatchesResponse> {
    const fromPartial = QueryBatchesRequest.fromPartial(request);
    const data = QueryBatchesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Batches',
      data,
    );
    return promise.then(data =>
      QueryBatchesResponse.decode(new _m0.Reader(data)),
    );
  }

  BatchInfo(
    request: DeepPartial<QueryBatchInfoRequest>,
  ): Promise<QueryBatchInfoResponse> {
    const fromPartial = QueryBatchInfoRequest.fromPartial(request);
    const data = QueryBatchInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'BatchInfo',
      data,
    );
    return promise.then(data =>
      QueryBatchInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  Balance(
    request: DeepPartial<QueryBalanceRequest>,
  ): Promise<QueryBalanceResponse> {
    const fromPartial = QueryBalanceRequest.fromPartial(request);
    const data = QueryBalanceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Balance',
      data,
    );
    return promise.then(data =>
      QueryBalanceResponse.decode(new _m0.Reader(data)),
    );
  }

  Supply(
    request: DeepPartial<QuerySupplyRequest>,
  ): Promise<QuerySupplyResponse> {
    const fromPartial = QuerySupplyRequest.fromPartial(request);
    const data = QuerySupplyRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Supply',
      data,
    );
    return promise.then(data =>
      QuerySupplyResponse.decode(new _m0.Reader(data)),
    );
  }

  CreditTypes(
    request: DeepPartial<QueryCreditTypesRequest>,
  ): Promise<QueryCreditTypesResponse> {
    const fromPartial = QueryCreditTypesRequest.fromPartial(request);
    const data = QueryCreditTypesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'CreditTypes',
      data,
    );
    return promise.then(data =>
      QueryCreditTypesResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
