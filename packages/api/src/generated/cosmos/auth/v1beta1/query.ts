/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../base/query/v1beta1/pagination';
import { Any } from '../../../google/protobuf/any';
import { Params } from './auth';

export const protobufPackage = 'cosmos.auth.v1beta1';

/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  $type: 'cosmos.auth.v1beta1.QueryAccountsRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
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

/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountsRequest';
}

/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountsResponse';
  accounts: Any[];
}

/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountByNameRequest';
  name: string;
}

/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountByNameResponse';
  account?: Any;
}

/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {
  $type: 'cosmos.auth.v1beta1.Bech32PrefixRequest';
}

/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
  $type: 'cosmos.auth.v1beta1.Bech32PrefixResponse';
  bech32Prefix: string;
}

/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
  $type: 'cosmos.auth.v1beta1.AddressBytesToStringRequest';
  addressBytes: Uint8Array;
}

/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
  $type: 'cosmos.auth.v1beta1.AddressBytesToStringResponse';
  addressString: string;
}

/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
  $type: 'cosmos.auth.v1beta1.AddressStringToBytesRequest';
  addressString: string;
}

/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
  $type: 'cosmos.auth.v1beta1.AddressStringToBytesResponse';
  addressBytes: Uint8Array;
}

/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
  $type: 'cosmos.auth.v1beta1.QueryAccountAddressByIDRequest';
  /**
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   */
  id: Long;
}

/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
  $type: 'cosmos.auth.v1beta1.QueryAccountAddressByIDResponse';
  accountAddress: string;
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

function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return { $type: 'cosmos.auth.v1beta1.QueryModuleAccountsRequest' };
}

export const QueryModuleAccountsRequest = {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountsRequest' as const,

  encode(
    _: QueryModuleAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryModuleAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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

  fromJSON(_: any): QueryModuleAccountsRequest {
    return {
      $type: QueryModuleAccountsRequest.$type,
    };
  },

  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountsRequest>, I>>(
    _: I,
  ): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
};

messageTypeRegistry.set(
  QueryModuleAccountsRequest.$type,
  QueryModuleAccountsRequest,
);

function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    $type: 'cosmos.auth.v1beta1.QueryModuleAccountsResponse',
    accounts: [],
  };
}

export const QueryModuleAccountsResponse = {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountsResponse' as const,

  encode(
    message: QueryModuleAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountsResponse {
    return {
      $type: QueryModuleAccountsResponse.$type,
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountsResponse>, I>>(
    object: I,
  ): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryModuleAccountsResponse.$type,
  QueryModuleAccountsResponse,
);

function createBaseQueryModuleAccountByNameRequest(): QueryModuleAccountByNameRequest {
  return {
    $type: 'cosmos.auth.v1beta1.QueryModuleAccountByNameRequest',
    name: '',
  };
}

export const QueryModuleAccountByNameRequest = {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountByNameRequest' as const,

  encode(
    message: QueryModuleAccountByNameRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryModuleAccountByNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountByNameRequest {
    return {
      $type: QueryModuleAccountByNameRequest.$type,
      name: isSet(object.name) ? String(object.name) : '',
    };
  },

  toJSON(message: QueryModuleAccountByNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryModuleAccountByNameRequest>, I>>(
    object: I,
  ): QueryModuleAccountByNameRequest {
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = object.name ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryModuleAccountByNameRequest.$type,
  QueryModuleAccountByNameRequest,
);

function createBaseQueryModuleAccountByNameResponse(): QueryModuleAccountByNameResponse {
  return {
    $type: 'cosmos.auth.v1beta1.QueryModuleAccountByNameResponse',
    account: undefined,
  };
}

export const QueryModuleAccountByNameResponse = {
  $type: 'cosmos.auth.v1beta1.QueryModuleAccountByNameResponse' as const,

  encode(
    message: QueryModuleAccountByNameResponse,
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
  ): QueryModuleAccountByNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();
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

  fromJSON(object: any): QueryModuleAccountByNameResponse {
    return {
      $type: QueryModuleAccountByNameResponse.$type,
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined,
    };
  },

  toJSON(message: QueryModuleAccountByNameResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryModuleAccountByNameResponse>, I>,
  >(object: I): QueryModuleAccountByNameResponse {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromPartial(object.account)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryModuleAccountByNameResponse.$type,
  QueryModuleAccountByNameResponse,
);

function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return { $type: 'cosmos.auth.v1beta1.Bech32PrefixRequest' };
}

export const Bech32PrefixRequest = {
  $type: 'cosmos.auth.v1beta1.Bech32PrefixRequest' as const,

  encode(
    _: Bech32PrefixRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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

  fromJSON(_: any): Bech32PrefixRequest {
    return {
      $type: Bech32PrefixRequest.$type,
    };
  },

  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bech32PrefixRequest>, I>>(
    _: I,
  ): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
};

messageTypeRegistry.set(Bech32PrefixRequest.$type, Bech32PrefixRequest);

function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return {
    $type: 'cosmos.auth.v1beta1.Bech32PrefixResponse',
    bech32Prefix: '',
  };
}

export const Bech32PrefixResponse = {
  $type: 'cosmos.auth.v1beta1.Bech32PrefixResponse' as const,

  encode(
    message: Bech32PrefixResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bech32Prefix !== '') {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Bech32PrefixResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bech32PrefixResponse {
    return {
      $type: Bech32PrefixResponse.$type,
      bech32Prefix: isSet(object.bech32Prefix)
        ? String(object.bech32Prefix)
        : '',
    };
  },

  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined &&
      (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bech32PrefixResponse>, I>>(
    object: I,
  ): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? '';
    return message;
  },
};

messageTypeRegistry.set(Bech32PrefixResponse.$type, Bech32PrefixResponse);

function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return {
    $type: 'cosmos.auth.v1beta1.AddressBytesToStringRequest',
    addressBytes: new Uint8Array(),
  };
}

export const AddressBytesToStringRequest = {
  $type: 'cosmos.auth.v1beta1.AddressBytesToStringRequest' as const,

  encode(
    message: AddressBytesToStringRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressBytesToStringRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringRequest {
    return {
      $type: AddressBytesToStringRequest.$type,
      addressBytes: isSet(object.addressBytes)
        ? bytesFromBase64(object.addressBytes)
        : new Uint8Array(),
    };
  },

  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined
          ? message.addressBytes
          : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressBytesToStringRequest>, I>>(
    object: I,
  ): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(
  AddressBytesToStringRequest.$type,
  AddressBytesToStringRequest,
);

function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return {
    $type: 'cosmos.auth.v1beta1.AddressBytesToStringResponse',
    addressString: '',
  };
}

export const AddressBytesToStringResponse = {
  $type: 'cosmos.auth.v1beta1.AddressBytesToStringResponse' as const,

  encode(
    message: AddressBytesToStringResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addressString !== '') {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressBytesToStringResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringResponse {
    return {
      $type: AddressBytesToStringResponse.$type,
      addressString: isSet(object.addressString)
        ? String(object.addressString)
        : '',
    };
  },

  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined &&
      (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressBytesToStringResponse>, I>>(
    object: I,
  ): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  AddressBytesToStringResponse.$type,
  AddressBytesToStringResponse,
);

function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return {
    $type: 'cosmos.auth.v1beta1.AddressStringToBytesRequest',
    addressString: '',
  };
}

export const AddressStringToBytesRequest = {
  $type: 'cosmos.auth.v1beta1.AddressStringToBytesRequest' as const,

  encode(
    message: AddressStringToBytesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addressString !== '') {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressStringToBytesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesRequest {
    return {
      $type: AddressStringToBytesRequest.$type,
      addressString: isSet(object.addressString)
        ? String(object.addressString)
        : '',
    };
  },

  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined &&
      (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressStringToBytesRequest>, I>>(
    object: I,
  ): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  AddressStringToBytesRequest.$type,
  AddressStringToBytesRequest,
);

function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return {
    $type: 'cosmos.auth.v1beta1.AddressStringToBytesResponse',
    addressBytes: new Uint8Array(),
  };
}

export const AddressStringToBytesResponse = {
  $type: 'cosmos.auth.v1beta1.AddressStringToBytesResponse' as const,

  encode(
    message: AddressStringToBytesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AddressStringToBytesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesResponse {
    return {
      $type: AddressStringToBytesResponse.$type,
      addressBytes: isSet(object.addressBytes)
        ? bytesFromBase64(object.addressBytes)
        : new Uint8Array(),
    };
  },

  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined
          ? message.addressBytes
          : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressStringToBytesResponse>, I>>(
    object: I,
  ): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(
  AddressStringToBytesResponse.$type,
  AddressStringToBytesResponse,
);

function createBaseQueryAccountAddressByIDRequest(): QueryAccountAddressByIDRequest {
  return {
    $type: 'cosmos.auth.v1beta1.QueryAccountAddressByIDRequest',
    id: Long.ZERO,
  };
}

export const QueryAccountAddressByIDRequest = {
  $type: 'cosmos.auth.v1beta1.QueryAccountAddressByIDRequest' as const,

  encode(
    message: QueryAccountAddressByIDRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAccountAddressByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDRequest {
    return {
      $type: QueryAccountAddressByIDRequest.$type,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.ZERO,
    };
  },

  toJSON(message: QueryAccountAddressByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountAddressByIDRequest>, I>>(
    object: I,
  ): QueryAccountAddressByIDRequest {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(
  QueryAccountAddressByIDRequest.$type,
  QueryAccountAddressByIDRequest,
);

function createBaseQueryAccountAddressByIDResponse(): QueryAccountAddressByIDResponse {
  return {
    $type: 'cosmos.auth.v1beta1.QueryAccountAddressByIDResponse',
    accountAddress: '',
  };
}

export const QueryAccountAddressByIDResponse = {
  $type: 'cosmos.auth.v1beta1.QueryAccountAddressByIDResponse' as const,

  encode(
    message: QueryAccountAddressByIDResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountAddress !== '') {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAccountAddressByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDResponse {
    return {
      $type: QueryAccountAddressByIDResponse.$type,
      accountAddress: isSet(object.accountAddress)
        ? String(object.accountAddress)
        : '',
    };
  },

  toJSON(message: QueryAccountAddressByIDResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountAddressByIDResponse>, I>>(
    object: I,
  ): QueryAccountAddressByIDResponse {
    const message = createBaseQueryAccountAddressByIDResponse();
    message.accountAddress = object.accountAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryAccountAddressByIDResponse.$type,
  QueryAccountAddressByIDResponse,
);

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts
   *
   * Since: cosmos-sdk 0.43
   */
  Accounts(
    request: DeepPartial<QueryAccountsRequest>,
  ): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  Account(
    request: DeepPartial<QueryAccountRequest>,
  ): Promise<QueryAccountResponse>;
  /**
   * AccountAddressByID returns account address based on account number.
   *
   * Since: cosmos-sdk 0.46.2
   */
  AccountAddressByID(
    request: DeepPartial<QueryAccountAddressByIDRequest>,
  ): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   *
   * Since: cosmos-sdk 0.46
   */
  ModuleAccounts(
    request: DeepPartial<QueryModuleAccountsRequest>,
  ): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  ModuleAccountByName(
    request: DeepPartial<QueryModuleAccountByNameRequest>,
  ): Promise<QueryModuleAccountByNameResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   *
   * Since: cosmos-sdk 0.46
   */
  Bech32Prefix(
    request: DeepPartial<Bech32PrefixRequest>,
  ): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   *
   * Since: cosmos-sdk 0.46
   */
  AddressBytesToString(
    request: DeepPartial<AddressBytesToStringRequest>,
  ): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   *
   * Since: cosmos-sdk 0.46
   */
  AddressStringToBytes(
    request: DeepPartial<AddressStringToBytesRequest>,
  ): Promise<AddressStringToBytesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Accounts = this.Accounts.bind(this);
    this.Account = this.Account.bind(this);
    this.AccountAddressByID = this.AccountAddressByID.bind(this);
    this.Params = this.Params.bind(this);
    this.ModuleAccounts = this.ModuleAccounts.bind(this);
    this.ModuleAccountByName = this.ModuleAccountByName.bind(this);
    this.Bech32Prefix = this.Bech32Prefix.bind(this);
    this.AddressBytesToString = this.AddressBytesToString.bind(this);
    this.AddressStringToBytes = this.AddressStringToBytes.bind(this);
  }
  Accounts(
    request: DeepPartial<QueryAccountsRequest>,
  ): Promise<QueryAccountsResponse> {
    const fromPartial = QueryAccountsRequest.fromPartial(request);
    const data = QueryAccountsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'Accounts',
      data,
    );
    return promise.then(data =>
      QueryAccountsResponse.decode(new _m0.Reader(data)),
    );
  }

  Account(
    request: DeepPartial<QueryAccountRequest>,
  ): Promise<QueryAccountResponse> {
    const fromPartial = QueryAccountRequest.fromPartial(request);
    const data = QueryAccountRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'Account',
      data,
    );
    return promise.then(data =>
      QueryAccountResponse.decode(new _m0.Reader(data)),
    );
  }

  AccountAddressByID(
    request: DeepPartial<QueryAccountAddressByIDRequest>,
  ): Promise<QueryAccountAddressByIDResponse> {
    const fromPartial = QueryAccountAddressByIDRequest.fromPartial(request);
    const data = QueryAccountAddressByIDRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'AccountAddressByID',
      data,
    );
    return promise.then(data =>
      QueryAccountAddressByIDResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  ModuleAccounts(
    request: DeepPartial<QueryModuleAccountsRequest>,
  ): Promise<QueryModuleAccountsResponse> {
    const fromPartial = QueryModuleAccountsRequest.fromPartial(request);
    const data = QueryModuleAccountsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'ModuleAccounts',
      data,
    );
    return promise.then(data =>
      QueryModuleAccountsResponse.decode(new _m0.Reader(data)),
    );
  }

  ModuleAccountByName(
    request: DeepPartial<QueryModuleAccountByNameRequest>,
  ): Promise<QueryModuleAccountByNameResponse> {
    const fromPartial = QueryModuleAccountByNameRequest.fromPartial(request);
    const data = QueryModuleAccountByNameRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'ModuleAccountByName',
      data,
    );
    return promise.then(data =>
      QueryModuleAccountByNameResponse.decode(new _m0.Reader(data)),
    );
  }

  Bech32Prefix(
    request: DeepPartial<Bech32PrefixRequest>,
  ): Promise<Bech32PrefixResponse> {
    const fromPartial = Bech32PrefixRequest.fromPartial(request);
    const data = Bech32PrefixRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'Bech32Prefix',
      data,
    );
    return promise.then(data =>
      Bech32PrefixResponse.decode(new _m0.Reader(data)),
    );
  }

  AddressBytesToString(
    request: DeepPartial<AddressBytesToStringRequest>,
  ): Promise<AddressBytesToStringResponse> {
    const fromPartial = AddressBytesToStringRequest.fromPartial(request);
    const data = AddressBytesToStringRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'AddressBytesToString',
      data,
    );
    return promise.then(data =>
      AddressBytesToStringResponse.decode(new _m0.Reader(data)),
    );
  }

  AddressStringToBytes(
    request: DeepPartial<AddressStringToBytesRequest>,
  ): Promise<AddressStringToBytesResponse> {
    const fromPartial = AddressStringToBytesRequest.fromPartial(request);
    const data = AddressStringToBytesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.auth.v1beta1.Query',
      'AddressStringToBytes',
      data,
    );
    return promise.then(data =>
      AddressStringToBytesResponse.decode(new _m0.Reader(data)),
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
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
