/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Any } from '../../../google/protobuf/any';
import { Params } from '../../../cosmos/auth/v1beta1/auth';

export const protobufPackage = 'cosmos.auth.v1beta1';

/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
  $type: 'cosmos.auth.v1beta1.QueryAccountsRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
  $type: 'cosmos.auth.v1beta1.QueryAccountsResponse';
  /** accounts are the existing accounts */
  accounts: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  $type: 'cosmos.auth.v1beta1.QueryAccountRequest';
  /** address defines the address to query for. */
  address: string;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  $type: 'cosmos.auth.v1beta1.QueryAccountResponse';
  /** account defines the account of the corresponding address. */
  account?: Any;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: 'cosmos.auth.v1beta1.QueryParamsRequest';
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: 'cosmos.auth.v1beta1.QueryParamsResponse';
  /** params defines the parameters of the module. */
  params?: Params;
}

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    $type: 'cosmos.auth.v1beta1.QueryAccountsRequest',
    pagination: undefined,
  };
}

export const QueryAccountsRequest = {
  $type: 'cosmos.auth.v1beta1.QueryAccountsRequest' as const,

  encode(
    message: QueryAccountsRequest,
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
  ): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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

  fromJSON(object: any): QueryAccountsRequest {
    return {
      $type: QueryAccountsRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(
    object: I,
  ): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAccountsRequest.$type, QueryAccountsRequest);

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    $type: 'cosmos.auth.v1beta1.QueryAccountsResponse',
    accounts: [],
    pagination: undefined,
  };
}

export const QueryAccountsResponse = {
  $type: 'cosmos.auth.v1beta1.QueryAccountsResponse' as const,

  encode(
    message: QueryAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAccountsResponse {
    return {
      $type: QueryAccountsResponse.$type,
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountsResponse>, I>>(
    object: I,
  ): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAccountsResponse.$type, QueryAccountsResponse);

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return { $type: 'cosmos.auth.v1beta1.QueryAccountRequest', address: '' };
}

export const QueryAccountRequest = {
  $type: 'cosmos.auth.v1beta1.QueryAccountRequest' as const,

  encode(
    message: QueryAccountRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountRequest {
    return {
      $type: QueryAccountRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(
    object: I,
  ): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryAccountRequest.$type, QueryAccountRequest);

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    $type: 'cosmos.auth.v1beta1.QueryAccountResponse',
    account: undefined,
  };
}

export const QueryAccountResponse = {
  $type: 'cosmos.auth.v1beta1.QueryAccountResponse' as const,

  encode(
    message: QueryAccountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    return {
      $type: QueryAccountResponse.$type,
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined,
    };
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountResponse>, I>>(
    object: I,
  ): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromPartial(object.account)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAccountResponse.$type, QueryAccountResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'cosmos.auth.v1beta1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'cosmos.auth.v1beta1.QueryParamsRequest' as const,

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
    $type: 'cosmos.auth.v1beta1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'cosmos.auth.v1beta1.QueryParamsResponse' as const,

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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Accounts returns all the existing accounts */
  Accounts(
    request: DeepPartial<QueryAccountsRequest>,
  ): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  Account(
    request: DeepPartial<QueryAccountRequest>,
  ): Promise<QueryAccountResponse>;
  /** Params queries all parameters. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Accounts = this.Accounts.bind(this);
    this.Account = this.Account.bind(this);
    this.Params = this.Params.bind(this);
  }
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'Accounts',
      data,
    );
    return promise.then(data =>
      QueryAccountsResponse.decode(new _m0.Reader(data)),
    );
  }

  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'Account',
      data,
    );
    return promise.then(data =>
      QueryAccountResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
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
