/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ClassInfo, BatchInfo } from '../../../regen/ecocredit/v1alpha1/types';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

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
  /** tradable_units is the decimal number of tradable units. */
  tradableUnits: string;
  /** retired_units is the decimal number of retired units. */
  retiredUnits: string;
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
  /** tradable_units is the decimal number of tradable units in the batch supply. */
  tradableSupply: string;
  /** retired_supply is the decimal number of retired units in the batch supply. */
  retiredSupply: string;
}

/** QueryPrecisionRequest is the Query/Precision request type. */
export interface QueryPrecisionRequest {
  $type: 'regen.ecocredit.v1alpha1.QueryPrecisionRequest';
  /** batch_denom is the unique ID of credit batch to query. */
  batchDenom: string;
}

/** QueryPrecisionResponse is the Query/Precision response type. */
export interface QueryPrecisionResponse {
  $type: 'regen.ecocredit.v1alpha1.QueryPrecisionResponse';
  /**
   * max_decimal_places is the maximum number of decimal places that can be used to represent some quantity of credit units.
   * It is an experimental feature to concretely explore an idea proposed in https://github.com/cosmos/cosmos-sdk/issues/7113.
   */
  maxDecimalPlaces: number;
}

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
    tradableUnits: '',
    retiredUnits: '',
  };
}

export const QueryBalanceResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryBalanceResponse' as const,

  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tradableUnits !== '') {
      writer.uint32(10).string(message.tradableUnits);
    }
    if (message.retiredUnits !== '') {
      writer.uint32(18).string(message.retiredUnits);
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
          message.tradableUnits = reader.string();
          break;
        case 2:
          message.retiredUnits = reader.string();
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
      tradableUnits: isSet(object.tradableUnits)
        ? String(object.tradableUnits)
        : '',
      retiredUnits: isSet(object.retiredUnits)
        ? String(object.retiredUnits)
        : '',
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.tradableUnits !== undefined &&
      (obj.tradableUnits = message.tradableUnits);
    message.retiredUnits !== undefined &&
      (obj.retiredUnits = message.retiredUnits);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I,
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.tradableUnits = object.tradableUnits ?? '';
    message.retiredUnits = object.retiredUnits ?? '';
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

function createBaseQueryPrecisionRequest(): QueryPrecisionRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryPrecisionRequest',
    batchDenom: '',
  };
}

export const QueryPrecisionRequest = {
  $type: 'regen.ecocredit.v1alpha1.QueryPrecisionRequest' as const,

  encode(
    message: QueryPrecisionRequest,
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
  ): QueryPrecisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrecisionRequest();
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

  fromJSON(object: any): QueryPrecisionRequest {
    return {
      $type: QueryPrecisionRequest.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QueryPrecisionRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPrecisionRequest>, I>>(
    object: I,
  ): QueryPrecisionRequest {
    const message = createBaseQueryPrecisionRequest();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryPrecisionRequest.$type, QueryPrecisionRequest);

function createBaseQueryPrecisionResponse(): QueryPrecisionResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.QueryPrecisionResponse',
    maxDecimalPlaces: 0,
  };
}

export const QueryPrecisionResponse = {
  $type: 'regen.ecocredit.v1alpha1.QueryPrecisionResponse' as const,

  encode(
    message: QueryPrecisionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.maxDecimalPlaces !== 0) {
      writer.uint32(8).uint32(message.maxDecimalPlaces);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryPrecisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPrecisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxDecimalPlaces = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPrecisionResponse {
    return {
      $type: QueryPrecisionResponse.$type,
      maxDecimalPlaces: isSet(object.maxDecimalPlaces)
        ? Number(object.maxDecimalPlaces)
        : 0,
    };
  },

  toJSON(message: QueryPrecisionResponse): unknown {
    const obj: any = {};
    message.maxDecimalPlaces !== undefined &&
      (obj.maxDecimalPlaces = Math.round(message.maxDecimalPlaces));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPrecisionResponse>, I>>(
    object: I,
  ): QueryPrecisionResponse {
    const message = createBaseQueryPrecisionResponse();
    message.maxDecimalPlaces = object.maxDecimalPlaces ?? 0;
    return message;
  },
};

messageTypeRegistry.set(QueryPrecisionResponse.$type, QueryPrecisionResponse);

/** Msg is the regen.ecocredit.v1alpha1 Query service. */
export interface Query {
  /** ClassInfo queries for information on a credit class. */
  ClassInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
  /** BatchInfo queries for information on a credit batch. */
  BatchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
  /** Balance queries the balance (both tradable and retired) of a given credit batch for a given account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Supply queries the tradable and retired supply of a credit batch. */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * Precision queries the number of decimal places that can be used to represent credit batch units.
   * See Tx/SetPrecision for more details.
   */
  Precision(request: QueryPrecisionRequest): Promise<QueryPrecisionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ClassInfo = this.ClassInfo.bind(this);
    this.BatchInfo = this.BatchInfo.bind(this);
    this.Balance = this.Balance.bind(this);
    this.Supply = this.Supply.bind(this);
    this.Precision = this.Precision.bind(this);
  }
  ClassInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
    const data = QueryClassInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'ClassInfo',
      data,
    );
    return promise.then(data =>
      QueryClassInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  BatchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
    const data = QueryBatchInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'BatchInfo',
      data,
    );
    return promise.then(data =>
      QueryBatchInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Balance',
      data,
    );
    return promise.then(data =>
      QueryBalanceResponse.decode(new _m0.Reader(data)),
    );
  }

  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Supply',
      data,
    );
    return promise.then(data =>
      QuerySupplyResponse.decode(new _m0.Reader(data)),
    );
  }

  Precision(request: QueryPrecisionRequest): Promise<QueryPrecisionResponse> {
    const data = QueryPrecisionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Query',
      'Precision',
      data,
    );
    return promise.then(data =>
      QueryPrecisionResponse.decode(new _m0.Reader(data)),
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
