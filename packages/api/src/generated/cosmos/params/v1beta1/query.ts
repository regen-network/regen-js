/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ParamChange } from './params';

export const protobufPackage = 'cosmos.params.v1beta1';

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: 'cosmos.params.v1beta1.QueryParamsRequest';
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */
  key: string;
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: 'cosmos.params.v1beta1.QueryParamsResponse';
  /** param defines the queried parameter. */
  param?: ParamChange;
}

/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequest {
  $type: 'cosmos.params.v1beta1.QuerySubspacesRequest';
}

/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponse {
  $type: 'cosmos.params.v1beta1.QuerySubspacesResponse';
  subspaces: Subspace[];
}

/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Subspace {
  $type: 'cosmos.params.v1beta1.Subspace';
  subspace: string;
  keys: string[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    $type: 'cosmos.params.v1beta1.QueryParamsRequest',
    subspace: '',
    key: '',
  };
}

export const QueryParamsRequest = {
  $type: 'cosmos.params.v1beta1.QueryParamsRequest' as const,

  encode(
    message: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.subspace !== '') {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== '') {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return {
      $type: QueryParamsRequest.$type,
      subspace: isSet(object.subspace) ? String(object.subspace) : '',
      key: isSet(object.key) ? String(object.key) : '',
    };
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    object: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? '';
    message.key = object.key ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    $type: 'cosmos.params.v1beta1.QueryParamsResponse',
    param: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'cosmos.params.v1beta1.QueryParamsResponse' as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = ParamChange.decode(reader, reader.uint32());
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
      param: isSet(object.param)
        ? ParamChange.fromJSON(object.param)
        : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.param !== undefined &&
      (obj.param = message.param
        ? ParamChange.toJSON(message.param)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.param =
      object.param !== undefined && object.param !== null
        ? ParamChange.fromPartial(object.param)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return { $type: 'cosmos.params.v1beta1.QuerySubspacesRequest' };
}

export const QuerySubspacesRequest = {
  $type: 'cosmos.params.v1beta1.QuerySubspacesRequest' as const,

  encode(
    _: QuerySubspacesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySubspacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
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

  fromJSON(_: any): QuerySubspacesRequest {
    return {
      $type: QuerySubspacesRequest.$type,
    };
  },

  toJSON(_: QuerySubspacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspacesRequest>, I>>(
    _: I,
  ): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
};

messageTypeRegistry.set(QuerySubspacesRequest.$type, QuerySubspacesRequest);

function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    $type: 'cosmos.params.v1beta1.QuerySubspacesResponse',
    subspaces: [],
  };
}

export const QuerySubspacesResponse = {
  $type: 'cosmos.params.v1beta1.QuerySubspacesResponse' as const,

  encode(
    message: QuerySubspacesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySubspacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspacesResponse {
    return {
      $type: QuerySubspacesResponse.$type,
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySubspacesResponse): unknown {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e =>
        e ? Subspace.toJSON(e) : undefined,
      );
    } else {
      obj.subspaces = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspacesResponse>, I>>(
    object: I,
  ): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces =
      object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QuerySubspacesResponse.$type, QuerySubspacesResponse);

function createBaseSubspace(): Subspace {
  return { $type: 'cosmos.params.v1beta1.Subspace', subspace: '', keys: [] };
}

export const Subspace = {
  $type: 'cosmos.params.v1beta1.Subspace' as const,

  encode(
    message: Subspace,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.subspace !== '') {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subspace {
    return {
      $type: Subspace.$type,
      subspace: isSet(object.subspace) ? String(object.subspace) : '',
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Subspace): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Subspace>, I>>(object: I): Subspace {
    const message = createBaseSubspace();
    message.subspace = object.subspace ?? '';
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Subspace.$type, Subspace);

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params queries a specific parameter of a module, given its subspace and
   * key.
   */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /**
   * Subspaces queries for all registered subspaces and all keys for a subspace.
   *
   * Since: cosmos-sdk 0.46
   */
  Subspaces(
    request: DeepPartial<QuerySubspacesRequest>,
  ): Promise<QuerySubspacesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Subspaces = this.Subspaces.bind(this);
  }
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.params.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  Subspaces(
    request: DeepPartial<QuerySubspacesRequest>,
  ): Promise<QuerySubspacesResponse> {
    const fromPartial = QuerySubspacesRequest.fromPartial(request);
    const data = QuerySubspacesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.params.v1beta1.Query',
      'Subspaces',
      data,
    );
    return promise.then(data =>
      QuerySubspacesResponse.decode(new _m0.Reader(data)),
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
