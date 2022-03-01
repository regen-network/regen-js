/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Params,
  ValidatorSigningInfo,
} from '../../../cosmos/slashing/v1beta1/slashing';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'cosmos.slashing.v1beta1';

/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
  $type: 'cosmos.slashing.v1beta1.QueryParamsRequest';
}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  $type: 'cosmos.slashing.v1beta1.QueryParamsResponse';
  params?: Params;
}

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfoRequest';
  /** cons_address is the address to query signing info of */
  consAddress: string;
}

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfoResponse';
  /** val_signing_info is the signing info of requested val cons address */
  valSigningInfo?: ValidatorSigningInfo;
}

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfosRequest';
  pagination?: PageRequest;
}

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfosResponse';
  /** info is the signing info of all validators */
  info: ValidatorSigningInfo[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'cosmos.slashing.v1beta1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'cosmos.slashing.v1beta1.QueryParamsRequest' as const,

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
    $type: 'cosmos.slashing.v1beta1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'cosmos.slashing.v1beta1.QueryParamsResponse' as const,

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

function createBaseQuerySigningInfoRequest(): QuerySigningInfoRequest {
  return {
    $type: 'cosmos.slashing.v1beta1.QuerySigningInfoRequest',
    consAddress: '',
  };
}

export const QuerySigningInfoRequest = {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfoRequest' as const,

  encode(
    message: QuerySigningInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.consAddress !== '') {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySigningInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySigningInfoRequest {
    return {
      $type: QuerySigningInfoRequest.$type,
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : '',
    };
  },

  toJSON(message: QuerySigningInfoRequest): unknown {
    const obj: any = {};
    message.consAddress !== undefined &&
      (obj.consAddress = message.consAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySigningInfoRequest>, I>>(
    object: I,
  ): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    message.consAddress = object.consAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySigningInfoRequest.$type, QuerySigningInfoRequest);

function createBaseQuerySigningInfoResponse(): QuerySigningInfoResponse {
  return {
    $type: 'cosmos.slashing.v1beta1.QuerySigningInfoResponse',
    valSigningInfo: undefined,
  };
}

export const QuerySigningInfoResponse = {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfoResponse' as const,

  encode(
    message: QuerySigningInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(
        message.valSigningInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySigningInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valSigningInfo = ValidatorSigningInfo.decode(
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

  fromJSON(object: any): QuerySigningInfoResponse {
    return {
      $type: QuerySigningInfoResponse.$type,
      valSigningInfo: isSet(object.valSigningInfo)
        ? ValidatorSigningInfo.fromJSON(object.valSigningInfo)
        : undefined,
    };
  },

  toJSON(message: QuerySigningInfoResponse): unknown {
    const obj: any = {};
    message.valSigningInfo !== undefined &&
      (obj.valSigningInfo = message.valSigningInfo
        ? ValidatorSigningInfo.toJSON(message.valSigningInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySigningInfoResponse>, I>>(
    object: I,
  ): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    message.valSigningInfo =
      object.valSigningInfo !== undefined && object.valSigningInfo !== null
        ? ValidatorSigningInfo.fromPartial(object.valSigningInfo)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySigningInfoResponse.$type,
  QuerySigningInfoResponse,
);

function createBaseQuerySigningInfosRequest(): QuerySigningInfosRequest {
  return {
    $type: 'cosmos.slashing.v1beta1.QuerySigningInfosRequest',
    pagination: undefined,
  };
}

export const QuerySigningInfosRequest = {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfosRequest' as const,

  encode(
    message: QuerySigningInfosRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySigningInfosRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
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

  fromJSON(object: any): QuerySigningInfosRequest {
    return {
      $type: QuerySigningInfosRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySigningInfosRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySigningInfosRequest>, I>>(
    object: I,
  ): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySigningInfosRequest.$type,
  QuerySigningInfosRequest,
);

function createBaseQuerySigningInfosResponse(): QuerySigningInfosResponse {
  return {
    $type: 'cosmos.slashing.v1beta1.QuerySigningInfosResponse',
    info: [],
    pagination: undefined,
  };
}

export const QuerySigningInfosResponse = {
  $type: 'cosmos.slashing.v1beta1.QuerySigningInfosResponse' as const,

  encode(
    message: QuerySigningInfosResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySigningInfosResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(
            ValidatorSigningInfo.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QuerySigningInfosResponse {
    return {
      $type: QuerySigningInfosResponse.$type,
      info: Array.isArray(object?.info)
        ? object.info.map((e: any) => ValidatorSigningInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySigningInfosResponse): unknown {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e =>
        e ? ValidatorSigningInfo.toJSON(e) : undefined,
      );
    } else {
      obj.info = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySigningInfosResponse>, I>>(
    object: I,
  ): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info =
      object.info?.map(e => ValidatorSigningInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySigningInfosResponse.$type,
  QuerySigningInfosResponse,
);

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Params queries the parameters of slashing module */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /** SigningInfo queries the signing info of given cons address */
  SigningInfo(
    request: DeepPartial<QuerySigningInfoRequest>,
  ): Promise<QuerySigningInfoResponse>;
  /** SigningInfos queries signing info of all validators */
  SigningInfos(
    request: DeepPartial<QuerySigningInfosRequest>,
  ): Promise<QuerySigningInfosResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SigningInfo = this.SigningInfo.bind(this);
    this.SigningInfos = this.SigningInfos.bind(this);
  }
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.slashing.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  SigningInfo(
    request: DeepPartial<QuerySigningInfoRequest>,
  ): Promise<QuerySigningInfoResponse> {
    const fromPartial = QuerySigningInfoRequest.fromPartial(request);
    const data = QuerySigningInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.slashing.v1beta1.Query',
      'SigningInfo',
      data,
    );
    return promise.then(data =>
      QuerySigningInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  SigningInfos(
    request: DeepPartial<QuerySigningInfosRequest>,
  ): Promise<QuerySigningInfosResponse> {
    const fromPartial = QuerySigningInfosRequest.fromPartial(request);
    const data = QuerySigningInfosRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.slashing.v1beta1.Query',
      'SigningInfos',
      data,
    );
    return promise.then(data =>
      QuerySigningInfosResponse.decode(new _m0.Reader(data)),
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
