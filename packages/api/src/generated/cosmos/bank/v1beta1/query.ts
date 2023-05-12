/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Metadata, Params } from "./bank";

export const protobufPackage = "cosmos.bank.v1beta1";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  $type: "cosmos.bank.v1beta1.QueryBalanceRequest";
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  $type: "cosmos.bank.v1beta1.QueryBalanceResponse";
  /** balance is the balance of the coin. */
  balance?: Coin;
}

/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
  $type: "cosmos.bank.v1beta1.QueryAllBalancesRequest";
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
  $type: "cosmos.bank.v1beta1.QueryAllBalancesResponse";
  /** balances is the balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequest {
  $type: "cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponse {
  $type: "cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
  /** balances is the spendable balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
  $type: "cosmos.bank.v1beta1.QueryTotalSupplyRequest";
  /**
   * pagination defines an optional pagination for the request.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageRequest;
}

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
  $type: "cosmos.bank.v1beta1.QueryTotalSupplyResponse";
  /** supply is the supply of the coins */
  supply: Coin[];
  /**
   * pagination defines the pagination in the response.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageResponse;
}

/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  $type: "cosmos.bank.v1beta1.QuerySupplyOfRequest";
  /** denom is the coin denom to query balances for. */
  denom: string;
}

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  $type: "cosmos.bank.v1beta1.QuerySupplyOfResponse";
  /** amount is the supply of the coin. */
  amount?: Coin;
}

/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
  $type: "cosmos.bank.v1beta1.QueryParamsRequest";
}

/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
  $type: "cosmos.bank.v1beta1.QueryParamsResponse";
  params?: Params;
}

/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
  $type: "cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
  $type: "cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
  /** metadata provides the client information for all the registered tokens. */
  metadatas: Metadata[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
  $type: "cosmos.bank.v1beta1.QueryDenomMetadataRequest";
  /** denom is the coin denom to query the metadata for. */
  denom: string;
}

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
  $type: "cosmos.bank.v1beta1.QueryDenomMetadataResponse";
  /** metadata describes and provides all the client information for the requested token. */
  metadata?: Metadata;
}

/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
  $type: "cosmos.bank.v1beta1.QueryDenomOwnersRequest";
  /** denom defines the coin denomination to query all account holders for. */
  denom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwner {
  $type: "cosmos.bank.v1beta1.DenomOwner";
  /** address defines the address that owns a particular denomination. */
  address: string;
  /** balance is the balance of the denominated coin for an account. */
  balance?: Coin;
}

/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponse {
  $type: "cosmos.bank.v1beta1.QueryDenomOwnersResponse";
  denomOwners: DenomOwner[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { $type: "cosmos.bank.v1beta1.QueryBalanceRequest", address: "", denom: "" };
}

export const QueryBalanceRequest = {
  $type: "cosmos.bank.v1beta1.QueryBalanceRequest" as const,

  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
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
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    return QueryBalanceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceRequest.$type, QueryBalanceRequest);

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return { $type: "cosmos.bank.v1beta1.QueryBalanceResponse", balance: undefined };
}

export const QueryBalanceResponse = {
  $type: "cosmos.bank.v1beta1.QueryBalanceResponse" as const,

  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
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
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    return QueryBalanceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceResponse.$type, QueryBalanceResponse);

function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return { $type: "cosmos.bank.v1beta1.QueryAllBalancesRequest", address: "", pagination: undefined };
}

export const QueryAllBalancesRequest = {
  $type: "cosmos.bank.v1beta1.QueryAllBalancesRequest" as const,

  encode(message: QueryAllBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest {
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
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllBalancesRequest.$type, QueryAllBalancesRequest);

function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return { $type: "cosmos.bank.v1beta1.QueryAllBalancesResponse", balances: [], pagination: undefined };
}

export const QueryAllBalancesResponse = {
  $type: "cosmos.bank.v1beta1.QueryAllBalancesResponse" as const,

  encode(message: QueryAllBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse {
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
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllBalancesResponse.$type, QueryAllBalancesResponse);

function createBaseQuerySpendableBalancesRequest(): QuerySpendableBalancesRequest {
  return { $type: "cosmos.bank.v1beta1.QuerySpendableBalancesRequest", address: "", pagination: undefined };
}

export const QuerySpendableBalancesRequest = {
  $type: "cosmos.bank.v1beta1.QuerySpendableBalancesRequest" as const,

  encode(message: QuerySpendableBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesRequest();
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

  fromJSON(object: any): QuerySpendableBalancesRequest {
    return {
      $type: QuerySpendableBalancesRequest.$type,
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySpendableBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest {
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySpendableBalancesRequest.$type, QuerySpendableBalancesRequest);

function createBaseQuerySpendableBalancesResponse(): QuerySpendableBalancesResponse {
  return { $type: "cosmos.bank.v1beta1.QuerySpendableBalancesResponse", balances: [], pagination: undefined };
}

export const QuerySpendableBalancesResponse = {
  $type: "cosmos.bank.v1beta1.QuerySpendableBalancesResponse" as const,

  encode(message: QuerySpendableBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesResponse();
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

  fromJSON(object: any): QuerySpendableBalancesResponse {
    return {
      $type: QuerySpendableBalancesResponse.$type,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySpendableBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySpendableBalancesResponse.$type, QuerySpendableBalancesResponse);

function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return { $type: "cosmos.bank.v1beta1.QueryTotalSupplyRequest", pagination: undefined };
}

export const QueryTotalSupplyRequest = {
  $type: "cosmos.bank.v1beta1.QueryTotalSupplyRequest" as const,

  encode(message: QueryTotalSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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

  fromJSON(object: any): QueryTotalSupplyRequest {
    return {
      $type: QueryTotalSupplyRequest.$type,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryTotalSupplyRequest.$type, QueryTotalSupplyRequest);

function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return { $type: "cosmos.bank.v1beta1.QueryTotalSupplyResponse", supply: [], pagination: undefined };
}

export const QueryTotalSupplyResponse = {
  $type: "cosmos.bank.v1beta1.QueryTotalSupplyResponse" as const,

  encode(message: QueryTotalSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      $type: QueryTotalSupplyResponse.$type,
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supply = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryTotalSupplyResponse.$type, QueryTotalSupplyResponse);

function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return { $type: "cosmos.bank.v1beta1.QuerySupplyOfRequest", denom: "" };
}

export const QuerySupplyOfRequest = {
  $type: "cosmos.bank.v1beta1.QuerySupplyOfRequest" as const,

  encode(message: QuerySupplyOfRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfRequest {
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
    return { $type: QuerySupplyOfRequest.$type, denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QuerySupplyOfRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyOfRequest.$type, QuerySupplyOfRequest);

function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return { $type: "cosmos.bank.v1beta1.QuerySupplyOfResponse", amount: undefined };
}

export const QuerySupplyOfResponse = {
  $type: "cosmos.bank.v1beta1.QuerySupplyOfResponse" as const,

  encode(message: QuerySupplyOfResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfResponse {
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
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyOfResponse.$type, QuerySupplyOfResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: "cosmos.bank.v1beta1.QueryParamsRequest" };
}

export const QueryParamsRequest = {
  $type: "cosmos.bank.v1beta1.QueryParamsRequest" as const,

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
  return { $type: "cosmos.bank.v1beta1.QueryParamsResponse", params: undefined };
}

export const QueryParamsResponse = {
  $type: "cosmos.bank.v1beta1.QueryParamsResponse" as const,

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

function createBaseQueryDenomsMetadataRequest(): QueryDenomsMetadataRequest {
  return { $type: "cosmos.bank.v1beta1.QueryDenomsMetadataRequest", pagination: undefined };
}

export const QueryDenomsMetadataRequest = {
  $type: "cosmos.bank.v1beta1.QueryDenomsMetadataRequest" as const,

  encode(message: QueryDenomsMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataRequest();
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

  fromJSON(object: any): QueryDenomsMetadataRequest {
    return {
      $type: QueryDenomsMetadataRequest.$type,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomsMetadataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest {
    return QueryDenomsMetadataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest {
    const message = createBaseQueryDenomsMetadataRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomsMetadataRequest.$type, QueryDenomsMetadataRequest);

function createBaseQueryDenomsMetadataResponse(): QueryDenomsMetadataResponse {
  return { $type: "cosmos.bank.v1beta1.QueryDenomsMetadataResponse", metadatas: [], pagination: undefined };
}

export const QueryDenomsMetadataResponse = {
  $type: "cosmos.bank.v1beta1.QueryDenomsMetadataResponse" as const,

  encode(message: QueryDenomsMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metadatas) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(Metadata.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDenomsMetadataResponse {
    return {
      $type: QueryDenomsMetadataResponse.$type,
      metadatas: Array.isArray(object?.metadatas) ? object.metadatas.map((e: any) => Metadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomsMetadataResponse): unknown {
    const obj: any = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.metadatas = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse {
    return QueryDenomsMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map((e) => Metadata.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomsMetadataResponse.$type, QueryDenomsMetadataResponse);

function createBaseQueryDenomMetadataRequest(): QueryDenomMetadataRequest {
  return { $type: "cosmos.bank.v1beta1.QueryDenomMetadataRequest", denom: "" };
}

export const QueryDenomMetadataRequest = {
  $type: "cosmos.bank.v1beta1.QueryDenomMetadataRequest" as const,

  encode(message: QueryDenomMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataRequest();
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

  fromJSON(object: any): QueryDenomMetadataRequest {
    return { $type: QueryDenomMetadataRequest.$type, denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryDenomMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest {
    return QueryDenomMetadataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest {
    const message = createBaseQueryDenomMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryDenomMetadataRequest.$type, QueryDenomMetadataRequest);

function createBaseQueryDenomMetadataResponse(): QueryDenomMetadataResponse {
  return { $type: "cosmos.bank.v1beta1.QueryDenomMetadataResponse", metadata: undefined };
}

export const QueryDenomMetadataResponse = {
  $type: "cosmos.bank.v1beta1.QueryDenomMetadataResponse" as const,

  encode(message: QueryDenomMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomMetadataResponse {
    return {
      $type: QueryDenomMetadataResponse.$type,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: QueryDenomMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse {
    return QueryDenomMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse {
    const message = createBaseQueryDenomMetadataResponse();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomMetadataResponse.$type, QueryDenomMetadataResponse);

function createBaseQueryDenomOwnersRequest(): QueryDenomOwnersRequest {
  return { $type: "cosmos.bank.v1beta1.QueryDenomOwnersRequest", denom: "", pagination: undefined };
}

export const QueryDenomOwnersRequest = {
  $type: "cosmos.bank.v1beta1.QueryDenomOwnersRequest" as const,

  encode(message: QueryDenomOwnersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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

  fromJSON(object: any): QueryDenomOwnersRequest {
    return {
      $type: QueryDenomOwnersRequest.$type,
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomOwnersRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest {
    return QueryDenomOwnersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest {
    const message = createBaseQueryDenomOwnersRequest();
    message.denom = object.denom ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomOwnersRequest.$type, QueryDenomOwnersRequest);

function createBaseDenomOwner(): DenomOwner {
  return { $type: "cosmos.bank.v1beta1.DenomOwner", address: "", balance: undefined };
}

export const DenomOwner = {
  $type: "cosmos.bank.v1beta1.DenomOwner" as const,

  encode(message: DenomOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomOwner {
    return {
      $type: DenomOwner.$type,
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: DenomOwner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DenomOwner>): DenomOwner {
    return DenomOwner.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DenomOwner>): DenomOwner {
    const message = createBaseDenomOwner();
    message.address = object.address ?? "";
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(DenomOwner.$type, DenomOwner);

function createBaseQueryDenomOwnersResponse(): QueryDenomOwnersResponse {
  return { $type: "cosmos.bank.v1beta1.QueryDenomOwnersResponse", denomOwners: [], pagination: undefined };
}

export const QueryDenomOwnersResponse = {
  $type: "cosmos.bank.v1beta1.QueryDenomOwnersResponse" as const,

  encode(message: QueryDenomOwnersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDenomOwnersResponse {
    return {
      $type: QueryDenomOwnersResponse.$type,
      denomOwners: Array.isArray(object?.denomOwners) ? object.denomOwners.map((e: any) => DenomOwner.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomOwnersResponse): unknown {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denomOwners = message.denomOwners.map((e) => e ? DenomOwner.toJSON(e) : undefined);
    } else {
      obj.denomOwners = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse {
    return QueryDenomOwnersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denomOwners?.map((e) => DenomOwner.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomOwnersResponse.$type, QueryDenomOwnersResponse);

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: DeepPartial<QueryBalanceRequest>): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */
  AllBalances(request: DeepPartial<QueryAllBalancesRequest>): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   *
   * Since: cosmos-sdk 0.46
   */
  SpendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>): Promise<QuerySpendableBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */
  TotalSupply(request: DeepPartial<QueryTotalSupplyRequest>): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */
  SupplyOf(request: DeepPartial<QuerySupplyOfRequest>): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  Params(request: DeepPartial<QueryParamsRequest>): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  DenomMetadata(request: DeepPartial<QueryDenomMetadataRequest>): Promise<QueryDenomMetadataResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  DenomsMetadata(request: DeepPartial<QueryDenomsMetadataRequest>): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   *
   * Since: cosmos-sdk 0.46
   */
  DenomOwners(request: DeepPartial<QueryDenomOwnersRequest>): Promise<QueryDenomOwnersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.bank.v1beta1.Query";
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.SpendableBalances = this.SpendableBalances.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomMetadata = this.DenomMetadata.bind(this);
    this.DenomsMetadata = this.DenomsMetadata.bind(this);
    this.DenomOwners = this.DenomOwners.bind(this);
  }
  Balance(request: DeepPartial<QueryBalanceRequest>): Promise<QueryBalanceResponse> {
    const fromPartial = QueryBalanceRequest.fromPartial(request);
    const data = QueryBalanceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  AllBalances(request: DeepPartial<QueryAllBalancesRequest>): Promise<QueryAllBalancesResponse> {
    const fromPartial = QueryAllBalancesRequest.fromPartial(request);
    const data = QueryAllBalancesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AllBalances", data);
    return promise.then((data) => QueryAllBalancesResponse.decode(new _m0.Reader(data)));
  }

  SpendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>): Promise<QuerySpendableBalancesResponse> {
    const fromPartial = QuerySpendableBalancesRequest.fromPartial(request);
    const data = QuerySpendableBalancesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "SpendableBalances", data);
    return promise.then((data) => QuerySpendableBalancesResponse.decode(new _m0.Reader(data)));
  }

  TotalSupply(request: DeepPartial<QueryTotalSupplyRequest>): Promise<QueryTotalSupplyResponse> {
    const fromPartial = QueryTotalSupplyRequest.fromPartial(request);
    const data = QueryTotalSupplyRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "TotalSupply", data);
    return promise.then((data) => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
  }

  SupplyOf(request: DeepPartial<QuerySupplyOfRequest>): Promise<QuerySupplyOfResponse> {
    const fromPartial = QuerySupplyOfRequest.fromPartial(request);
    const data = QuerySupplyOfRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "SupplyOf", data);
    return promise.then((data) => QuerySupplyOfResponse.decode(new _m0.Reader(data)));
  }

  Params(request: DeepPartial<QueryParamsRequest>): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  DenomMetadata(request: DeepPartial<QueryDenomMetadataRequest>): Promise<QueryDenomMetadataResponse> {
    const fromPartial = QueryDenomMetadataRequest.fromPartial(request);
    const data = QueryDenomMetadataRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DenomMetadata", data);
    return promise.then((data) => QueryDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

  DenomsMetadata(request: DeepPartial<QueryDenomsMetadataRequest>): Promise<QueryDenomsMetadataResponse> {
    const fromPartial = QueryDenomsMetadataRequest.fromPartial(request);
    const data = QueryDenomsMetadataRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DenomsMetadata", data);
    return promise.then((data) => QueryDenomsMetadataResponse.decode(new _m0.Reader(data)));
  }

  DenomOwners(request: DeepPartial<QueryDenomOwnersRequest>): Promise<QueryDenomOwnersResponse> {
    const fromPartial = QueryDenomOwnersRequest.fromPartial(request);
    const data = QueryDenomOwnersRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "DenomOwners", data);
    return promise.then((data) => QueryDenomOwnersResponse.decode(new _m0.Reader(data)));
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
