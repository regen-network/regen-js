/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Params } from '../../../cosmos/bank/v1beta1/bank';

export const protobufPackage = 'cosmos.bank.v1beta1';

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  $type: 'cosmos.bank.v1beta1.QueryBalanceRequest';
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  $type: 'cosmos.bank.v1beta1.QueryBalanceResponse';
  /** balance is the balance of the coin. */
  balance?: Coin;
}

/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
  $type: 'cosmos.bank.v1beta1.QueryAllBalancesRequest';
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
  $type: 'cosmos.bank.v1beta1.QueryAllBalancesResponse';
  /** balances is the balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
  $type: 'cosmos.bank.v1beta1.QueryTotalSupplyRequest';
}

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
  $type: 'cosmos.bank.v1beta1.QueryTotalSupplyResponse';
  /** supply is the supply of the coins */
  supply: Coin[];
}

/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  $type: 'cosmos.bank.v1beta1.QuerySupplyOfRequest';
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  $type: 'cosmos.bank.v1beta1.QuerySupplyOfResponse';
  /** amount is the supply of the coin. */
  amount?: Coin;
}

/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
  $type: 'cosmos.bank.v1beta1.QueryParamsRequest';
}

/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
  $type: 'cosmos.bank.v1beta1.QueryParamsResponse';
  params?: Params;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    $type: 'cosmos.bank.v1beta1.QueryBalanceRequest',
    address: '',
    denom: '',
  };
}

export const QueryBalanceRequest = {
  $type: 'cosmos.bank.v1beta1.QueryBalanceRequest' as const,

  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
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
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
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
      address: isSet(object.address) ? String(object.address) : '',
      denom: isSet(object.denom) ? String(object.denom) : '',
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I,
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? '';
    message.denom = object.denom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceRequest.$type, QueryBalanceRequest);

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    $type: 'cosmos.bank.v1beta1.QueryBalanceResponse',
    balance: undefined,
  };
}

export const QueryBalanceResponse = {
  $type: 'cosmos.bank.v1beta1.QueryBalanceResponse' as const,

  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
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
          message.balance = Coin.decode(reader, reader.uint32());
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
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I,
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceResponse.$type, QueryBalanceResponse);

function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return {
    $type: 'cosmos.bank.v1beta1.QueryAllBalancesRequest',
    address: '',
    pagination: undefined,
  };
}

export const QueryAllBalancesRequest = {
  $type: 'cosmos.bank.v1beta1.QueryAllBalancesRequest' as const,

  encode(
    message: QueryAllBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAllBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryAllBalancesRequest {
    return {
      $type: QueryAllBalancesRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(
    object: I,
  ): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.address = object.address ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllBalancesRequest.$type, QueryAllBalancesRequest);

function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return {
    $type: 'cosmos.bank.v1beta1.QueryAllBalancesResponse',
    balances: [],
    pagination: undefined,
  };
}

export const QueryAllBalancesResponse = {
  $type: 'cosmos.bank.v1beta1.QueryAllBalancesResponse' as const,

  encode(
    message: QueryAllBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBalancesResponse {
    return {
      $type: QueryAllBalancesResponse.$type,
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(
    object: I,
  ): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryAllBalancesResponse.$type,
  QueryAllBalancesResponse,
);

function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return { $type: 'cosmos.bank.v1beta1.QueryTotalSupplyRequest' };
}

export const QueryTotalSupplyRequest = {
  $type: 'cosmos.bank.v1beta1.QueryTotalSupplyRequest' as const,

  encode(
    _: QueryTotalSupplyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTotalSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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

  fromJSON(_: any): QueryTotalSupplyRequest {
    return {
      $type: QueryTotalSupplyRequest.$type,
    };
  },

  toJSON(_: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(
    _: I,
  ): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryTotalSupplyRequest.$type, QueryTotalSupplyRequest);

function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return { $type: 'cosmos.bank.v1beta1.QueryTotalSupplyResponse', supply: [] };
}

export const QueryTotalSupplyResponse = {
  $type: 'cosmos.bank.v1beta1.QueryTotalSupplyResponse' as const,

  encode(
    message: QueryTotalSupplyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTotalSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      $type: QueryTotalSupplyResponse.$type,
      supply: Array.isArray(object?.supply)
        ? object.supply.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supply = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(
    object: I,
  ): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryTotalSupplyResponse.$type,
  QueryTotalSupplyResponse,
);

function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return { $type: 'cosmos.bank.v1beta1.QuerySupplyOfRequest', denom: '' };
}

export const QuerySupplyOfRequest = {
  $type: 'cosmos.bank.v1beta1.QuerySupplyOfRequest' as const,

  encode(
    message: QuerySupplyOfRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySupplyOfRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyOfRequest {
    return {
      $type: QuerySupplyOfRequest.$type,
      denom: isSet(object.denom) ? String(object.denom) : '',
    };
  },

  toJSON(message: QuerySupplyOfRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(
    object: I,
  ): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyOfRequest.$type, QuerySupplyOfRequest);

function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return {
    $type: 'cosmos.bank.v1beta1.QuerySupplyOfResponse',
    amount: undefined,
  };
}

export const QuerySupplyOfResponse = {
  $type: 'cosmos.bank.v1beta1.QuerySupplyOfResponse' as const,

  encode(
    message: QuerySupplyOfResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySupplyOfResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyOfResponse {
    return {
      $type: QuerySupplyOfResponse.$type,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: QuerySupplyOfResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(
    object: I,
  ): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyOfResponse.$type, QuerySupplyOfResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'cosmos.bank.v1beta1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'cosmos.bank.v1beta1.QueryParamsRequest' as const,

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
    $type: 'cosmos.bank.v1beta1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'cosmos.bank.v1beta1.QueryParamsResponse' as const,

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
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */
  AllBalances(
    request: QueryAllBalancesRequest,
  ): Promise<QueryAllBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */
  TotalSupply(
    request: QueryTotalSupplyRequest,
  ): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.Params = this.Params.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.bank.v1beta1.Query',
      'Balance',
      data,
    );
    return promise.then(data =>
      QueryBalanceResponse.decode(new _m0.Reader(data)),
    );
  }

  AllBalances(
    request: QueryAllBalancesRequest,
  ): Promise<QueryAllBalancesResponse> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.bank.v1beta1.Query',
      'AllBalances',
      data,
    );
    return promise.then(data =>
      QueryAllBalancesResponse.decode(new _m0.Reader(data)),
    );
  }

  TotalSupply(
    request: QueryTotalSupplyRequest,
  ): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.bank.v1beta1.Query',
      'TotalSupply',
      data,
    );
    return promise.then(data =>
      QueryTotalSupplyResponse.decode(new _m0.Reader(data)),
    );
  }

  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.bank.v1beta1.Query',
      'SupplyOf',
      data,
    );
    return promise.then(data =>
      QuerySupplyOfResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.bank.v1beta1.Query',
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
