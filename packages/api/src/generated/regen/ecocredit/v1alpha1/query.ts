/* eslint-disable */
import { ClassInfo, BatchInfo } from '../../../regen/ecocredit/v1alpha1/types';
import { Reader, Writer } from 'protobufjs/minimal';


/**
 *  QueryClassInfoRequest is the Query/ClassInfo request type.
 */
export interface QueryClassInfoRequest {
  /**
   *  class_id is the unique ID of credit class to query.
   */
  classId: string;
}

/**
 *  QueryClassInfoResponse is the Query/ClassInfo request type.
 */
export interface QueryClassInfoResponse {
  /**
   *  info is the ClassInfo for the credit class.
   */
  info?: ClassInfo;
}

/**
 *  QueryBatchInfoRequest is the Query/BatchInfo request type.
 */
export interface QueryBatchInfoRequest {
  /**
   *  batch_denom is the unique ID of credit batch to query.
   */
  batchDenom: string;
}

/**
 *  QueryBatchInfoResponse is the Query/BatchInfo response type.
 */
export interface QueryBatchInfoResponse {
  /**
   *  info is the BatchInfo for the credit batch.
   */
  info?: BatchInfo;
}

/**
 *  QueryBalanceRequest is the Query/Balance request type.
 */
export interface QueryBalanceRequest {
  /**
   *  account is the address of the account whose balance is being queried.
   */
  account: string;
  /**
   *  batch_denom is the unique ID of credit batch balance to query.
   */
  batchDenom: string;
}

/**
 *  QueryBalanceResponse is the Query/Balance response type.
 */
export interface QueryBalanceResponse {
  /**
   *  tradable_units is the decimal number of tradable units.
   */
  tradableUnits: string;
  /**
   *  retired_units is the decimal number of retired units.
   */
  retiredUnits: string;
}

/**
 *  QuerySupplyRequest is the Query/Supply request type.
 */
export interface QuerySupplyRequest {
  /**
   *  batch_denom is the unique ID of credit batch to query.
   */
  batchDenom: string;
}

/**
 *  QuerySupplyResponse is the Query/Supply response type.
 */
export interface QuerySupplyResponse {
  /**
   *  tradable_units is the decimal number of tradable units in the batch supply.
   */
  tradableSupply: string;
  /**
   *  retired_supply is the decimal number of retired units in the batch supply.
   */
  retiredSupply: string;
}

/**
 *  QueryPrecisionRequest is the Query/Precision request type.
 */
export interface QueryPrecisionRequest {
  /**
   *  batch_denom is the unique ID of credit batch to query.
   */
  batchDenom: string;
}

/**
 *  QueryPrecisionResponse is the Query/Precision response type.
 */
export interface QueryPrecisionResponse {
  /**
   *  max_decimal_places is the maximum number of decimal places that can be used to represent some quantity of credit units.
   *  It is an experimental feature to concretely explore an idea proposed in https://github.com/cosmos/cosmos-sdk/issues/7113.
   */
  maxDecimalPlaces: number;
}

const baseQueryClassInfoRequest: object = {
  classId: "",
};

const baseQueryClassInfoResponse: object = {
};

const baseQueryBatchInfoRequest: object = {
  batchDenom: "",
};

const baseQueryBatchInfoResponse: object = {
};

const baseQueryBalanceRequest: object = {
  account: "",
  batchDenom: "",
};

const baseQueryBalanceResponse: object = {
  tradableUnits: "",
  retiredUnits: "",
};

const baseQuerySupplyRequest: object = {
  batchDenom: "",
};

const baseQuerySupplyResponse: object = {
  tradableSupply: "",
  retiredSupply: "",
};

const baseQueryPrecisionRequest: object = {
  batchDenom: "",
};

const baseQueryPrecisionResponse: object = {
  maxDecimalPlaces: 0,
};

/**
 *  Msg is the regen.ecocredit.v1alpha1 Query service.
 */
export interface Query {

  /**
   *  ClassInfo queries for information on a credit class.
   */
  ClassInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;

  /**
   *  BatchInfo queries for information on a credit batch.
   */
  BatchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;

  /**
   *  Balance queries the balance (both tradable and retired) of a given credit batch for a given account.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;

  /**
   *  Supply queries the tradable and retired supply of a credit batch.
   */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;

  /**
   *  Precision queries the number of decimal places that can be used to represent credit batch units.
   *  See Tx/SetPrecision for more details.
   */
  Precision(request: QueryPrecisionRequest): Promise<QueryPrecisionResponse>;

}

export class QueryClientImpl implements Query {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  ClassInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
    const data = QueryClassInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "ClassInfo", data);
    return promise.then(data => QueryClassInfoResponse.decode(new Reader(data)));
  }

  BatchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
    const data = QueryBatchInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "BatchInfo", data);
    return promise.then(data => QueryBatchInfoResponse.decode(new Reader(data)));
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new Reader(data)));
  }

  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new Reader(data)));
  }

  Precision(request: QueryPrecisionRequest): Promise<QueryPrecisionResponse> {
    const data = QueryPrecisionRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Precision", data);
    return promise.then(data => QueryPrecisionResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'regen.ecocredit.v1alpha1'

export const QueryClassInfoRequest = {
  encode(message: QueryClassInfoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.classId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryClassInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClassInfoRequest } as QueryClassInfoRequest;
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
    const message = { ...baseQueryClassInfoRequest } as QueryClassInfoRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassInfoRequest>): QueryClassInfoRequest {
    const message = { ...baseQueryClassInfoRequest } as QueryClassInfoRequest;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
  toJSON(message: QueryClassInfoRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
};

export const QueryClassInfoResponse = {
  encode(message: QueryClassInfoResponse, writer: Writer = Writer.create()): Writer {
    if (message.info !== undefined && message.info !== undefined) {
      ClassInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryClassInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClassInfoResponse } as QueryClassInfoResponse;
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
    const message = { ...baseQueryClassInfoResponse } as QueryClassInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = ClassInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassInfoResponse>): QueryClassInfoResponse {
    const message = { ...baseQueryClassInfoResponse } as QueryClassInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = ClassInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
  toJSON(message: QueryClassInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? ClassInfo.toJSON(message.info) : undefined);
    return obj;
  },
};

export const QueryBatchInfoRequest = {
  encode(message: QueryBatchInfoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.batchDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryBatchInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBatchInfoRequest } as QueryBatchInfoRequest;
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
    const message = { ...baseQueryBatchInfoRequest } as QueryBatchInfoRequest;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchInfoRequest>): QueryBatchInfoRequest {
    const message = { ...baseQueryBatchInfoRequest } as QueryBatchInfoRequest;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  toJSON(message: QueryBatchInfoRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
};

export const QueryBatchInfoResponse = {
  encode(message: QueryBatchInfoResponse, writer: Writer = Writer.create()): Writer {
    if (message.info !== undefined && message.info !== undefined) {
      BatchInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryBatchInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBatchInfoResponse } as QueryBatchInfoResponse;
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
    const message = { ...baseQueryBatchInfoResponse } as QueryBatchInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = BatchInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBatchInfoResponse>): QueryBatchInfoResponse {
    const message = { ...baseQueryBatchInfoResponse } as QueryBatchInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = BatchInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
  toJSON(message: QueryBatchInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? BatchInfo.toJSON(message.info) : undefined);
    return obj;
  },
};

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.account);
    writer.uint32(18).string(message.batchDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
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
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
};

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.tradableUnits);
    writer.uint32(18).string(message.retiredUnits);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
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
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.tradableUnits !== undefined && object.tradableUnits !== null) {
      message.tradableUnits = String(object.tradableUnits);
    } else {
      message.tradableUnits = "";
    }
    if (object.retiredUnits !== undefined && object.retiredUnits !== null) {
      message.retiredUnits = String(object.retiredUnits);
    } else {
      message.retiredUnits = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.tradableUnits !== undefined && object.tradableUnits !== null) {
      message.tradableUnits = object.tradableUnits;
    } else {
      message.tradableUnits = "";
    }
    if (object.retiredUnits !== undefined && object.retiredUnits !== null) {
      message.retiredUnits = object.retiredUnits;
    } else {
      message.retiredUnits = "";
    }
    return message;
  },
  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.tradableUnits !== undefined && (obj.tradableUnits = message.tradableUnits);
    message.retiredUnits !== undefined && (obj.retiredUnits = message.retiredUnits);
    return obj;
  },
};

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.batchDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QuerySupplyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
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
    const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
};

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.tradableSupply);
    writer.uint32(18).string(message.retiredSupply);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QuerySupplyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
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
    const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
    if (object.tradableSupply !== undefined && object.tradableSupply !== null) {
      message.tradableSupply = String(object.tradableSupply);
    } else {
      message.tradableSupply = "";
    }
    if (object.retiredSupply !== undefined && object.retiredSupply !== null) {
      message.retiredSupply = String(object.retiredSupply);
    } else {
      message.retiredSupply = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
    if (object.tradableSupply !== undefined && object.tradableSupply !== null) {
      message.tradableSupply = object.tradableSupply;
    } else {
      message.tradableSupply = "";
    }
    if (object.retiredSupply !== undefined && object.retiredSupply !== null) {
      message.retiredSupply = object.retiredSupply;
    } else {
      message.retiredSupply = "";
    }
    return message;
  },
  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.tradableSupply !== undefined && (obj.tradableSupply = message.tradableSupply);
    message.retiredSupply !== undefined && (obj.retiredSupply = message.retiredSupply);
    return obj;
  },
};

export const QueryPrecisionRequest = {
  encode(message: QueryPrecisionRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.batchDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPrecisionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPrecisionRequest } as QueryPrecisionRequest;
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
    const message = { ...baseQueryPrecisionRequest } as QueryPrecisionRequest;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPrecisionRequest>): QueryPrecisionRequest {
    const message = { ...baseQueryPrecisionRequest } as QueryPrecisionRequest;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  toJSON(message: QueryPrecisionRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
};

export const QueryPrecisionResponse = {
  encode(message: QueryPrecisionResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.maxDecimalPlaces);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPrecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPrecisionResponse } as QueryPrecisionResponse;
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
    const message = { ...baseQueryPrecisionResponse } as QueryPrecisionResponse;
    if (object.maxDecimalPlaces !== undefined && object.maxDecimalPlaces !== null) {
      message.maxDecimalPlaces = Number(object.maxDecimalPlaces);
    } else {
      message.maxDecimalPlaces = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPrecisionResponse>): QueryPrecisionResponse {
    const message = { ...baseQueryPrecisionResponse } as QueryPrecisionResponse;
    if (object.maxDecimalPlaces !== undefined && object.maxDecimalPlaces !== null) {
      message.maxDecimalPlaces = object.maxDecimalPlaces;
    } else {
      message.maxDecimalPlaces = 0;
    }
    return message;
  },
  toJSON(message: QueryPrecisionResponse): unknown {
    const obj: any = {};
    message.maxDecimalPlaces !== undefined && (obj.maxDecimalPlaces = message.maxDecimalPlaces);
    return obj;
  },
};

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