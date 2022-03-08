/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Basket,
  BasketBalance,
} from '../../../../regen/ecocredit/basket/v1/types';
import {
  PageRequest,
  PageResponse,
} from '../../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'regen.ecocredit.basket.v1';

/** QueryBasketRequest is the Query/Basket request type. */
export interface QueryBasketRequest {
  $type: 'regen.ecocredit.basket.v1.QueryBasketRequest';
  /** basket_denom represents the denom of the basket to query. */
  basketDenom: string;
}

/** QueryBasketResponse is the Query/Basket response type. */
export interface QueryBasketResponse {
  $type: 'regen.ecocredit.basket.v1.QueryBasketResponse';
  /** basket is the queried basket. */
  basket?: Basket;
  /** classes are the credit classes that can be deposited in the basket. */
  classes: string[];
}

/** QueryBasketsRequest is the Query/Baskets request type. */
export interface QueryBasketsRequest {
  $type: 'regen.ecocredit.basket.v1.QueryBasketsRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBasketsResponse is the Query/Baskets response type. */
export interface QueryBasketsResponse {
  $type: 'regen.ecocredit.basket.v1.QueryBasketsResponse';
  /** baskets are the fetched baskets. */
  baskets: Basket[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */
export interface QueryBasketBalancesRequest {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalancesRequest';
  /** basket_denom is the denom of the basket. */
  basketDenom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBasketBalancesResponse is the Query/BasketBalances response type. */
export interface QueryBasketBalancesResponse {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalancesResponse';
  /** balances is a list of credit balances in the basket. */
  balances: BasketBalance[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */
export interface QueryBasketBalanceRequest {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalanceRequest';
  /** basket_denom is the denom of the basket. */
  basketDenom: string;
  /** batch_denom is the denom of the credit batch. */
  batchDenom: string;
}

/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */
export interface QueryBasketBalanceResponse {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalanceResponse';
  /** balance is the amount of the queried credit batch in the basket. */
  balance: string;
}

function createBaseQueryBasketRequest(): QueryBasketRequest {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketRequest',
    basketDenom: '',
  };
}

export const QueryBasketRequest = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketRequest' as const,

  encode(
    message: QueryBasketRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.basketDenom !== '') {
      writer.uint32(10).string(message.basketDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBasketRequest {
    return {
      $type: QueryBasketRequest.$type,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
    };
  },

  toJSON(message: QueryBasketRequest): unknown {
    const obj: any = {};
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketRequest>, I>>(
    object: I,
  ): QueryBasketRequest {
    const message = createBaseQueryBasketRequest();
    message.basketDenom = object.basketDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBasketRequest.$type, QueryBasketRequest);

function createBaseQueryBasketResponse(): QueryBasketResponse {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketResponse',
    basket: undefined,
    classes: [],
  };
}

export const QueryBasketResponse = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketResponse' as const,

  encode(
    message: QueryBasketResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.basket !== undefined) {
      Basket.encode(message.basket, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.classes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basket = Basket.decode(reader, reader.uint32());
          break;
        case 2:
          message.classes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBasketResponse {
    return {
      $type: QueryBasketResponse.$type,
      basket: isSet(object.basket) ? Basket.fromJSON(object.basket) : undefined,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryBasketResponse): unknown {
    const obj: any = {};
    message.basket !== undefined &&
      (obj.basket = message.basket ? Basket.toJSON(message.basket) : undefined);
    if (message.classes) {
      obj.classes = message.classes.map(e => e);
    } else {
      obj.classes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketResponse>, I>>(
    object: I,
  ): QueryBasketResponse {
    const message = createBaseQueryBasketResponse();
    message.basket =
      object.basket !== undefined && object.basket !== null
        ? Basket.fromPartial(object.basket)
        : undefined;
    message.classes = object.classes?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryBasketResponse.$type, QueryBasketResponse);

function createBaseQueryBasketsRequest(): QueryBasketsRequest {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketsRequest',
    pagination: undefined,
  };
}

export const QueryBasketsRequest = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketsRequest' as const,

  encode(
    message: QueryBasketsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketsRequest();
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

  fromJSON(object: any): QueryBasketsRequest {
    return {
      $type: QueryBasketsRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBasketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketsRequest>, I>>(
    object: I,
  ): QueryBasketsRequest {
    const message = createBaseQueryBasketsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBasketsRequest.$type, QueryBasketsRequest);

function createBaseQueryBasketsResponse(): QueryBasketsResponse {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketsResponse',
    baskets: [],
    pagination: undefined,
  };
}

export const QueryBasketsResponse = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketsResponse' as const,

  encode(
    message: QueryBasketsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.baskets) {
      Basket.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryBasketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baskets.push(Basket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBasketsResponse {
    return {
      $type: QueryBasketsResponse.$type,
      baskets: Array.isArray(object?.baskets)
        ? object.baskets.map((e: any) => Basket.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBasketsResponse): unknown {
    const obj: any = {};
    if (message.baskets) {
      obj.baskets = message.baskets.map(e =>
        e ? Basket.toJSON(e) : undefined,
      );
    } else {
      obj.baskets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketsResponse>, I>>(
    object: I,
  ): QueryBasketsResponse {
    const message = createBaseQueryBasketsResponse();
    message.baskets = object.baskets?.map(e => Basket.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBasketsResponse.$type, QueryBasketsResponse);

function createBaseQueryBasketBalancesRequest(): QueryBasketBalancesRequest {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketBalancesRequest',
    basketDenom: '',
    pagination: undefined,
  };
}

export const QueryBasketBalancesRequest = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalancesRequest' as const,

  encode(
    message: QueryBasketBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.basketDenom !== '') {
      writer.uint32(10).string(message.basketDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBasketBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
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

  fromJSON(object: any): QueryBasketBalancesRequest {
    return {
      $type: QueryBasketBalancesRequest.$type,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBasketBalancesRequest): unknown {
    const obj: any = {};
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketBalancesRequest>, I>>(
    object: I,
  ): QueryBasketBalancesRequest {
    const message = createBaseQueryBasketBalancesRequest();
    message.basketDenom = object.basketDenom ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBasketBalancesRequest.$type,
  QueryBasketBalancesRequest,
);

function createBaseQueryBasketBalancesResponse(): QueryBasketBalancesResponse {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketBalancesResponse',
    balances: [],
    pagination: undefined,
  };
}

export const QueryBasketBalancesResponse = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalancesResponse' as const,

  encode(
    message: QueryBasketBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.balances) {
      BasketBalance.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryBasketBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(BasketBalance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBasketBalancesResponse {
    return {
      $type: QueryBasketBalancesResponse.$type,
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => BasketBalance.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBasketBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e =>
        e ? BasketBalance.toJSON(e) : undefined,
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

  fromPartial<I extends Exact<DeepPartial<QueryBasketBalancesResponse>, I>>(
    object: I,
  ): QueryBasketBalancesResponse {
    const message = createBaseQueryBasketBalancesResponse();
    message.balances =
      object.balances?.map(e => BasketBalance.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBasketBalancesResponse.$type,
  QueryBasketBalancesResponse,
);

function createBaseQueryBasketBalanceRequest(): QueryBasketBalanceRequest {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketBalanceRequest',
    basketDenom: '',
    batchDenom: '',
  };
}

export const QueryBasketBalanceRequest = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalanceRequest' as const,

  encode(
    message: QueryBasketBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.basketDenom !== '') {
      writer.uint32(10).string(message.basketDenom);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBasketBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
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

  fromJSON(object: any): QueryBasketBalanceRequest {
    return {
      $type: QueryBasketBalanceRequest.$type,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QueryBasketBalanceRequest): unknown {
    const obj: any = {};
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketBalanceRequest>, I>>(
    object: I,
  ): QueryBasketBalanceRequest {
    const message = createBaseQueryBasketBalanceRequest();
    message.basketDenom = object.basketDenom ?? '';
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryBasketBalanceRequest.$type,
  QueryBasketBalanceRequest,
);

function createBaseQueryBasketBalanceResponse(): QueryBasketBalanceResponse {
  return {
    $type: 'regen.ecocredit.basket.v1.QueryBasketBalanceResponse',
    balance: '',
  };
}

export const QueryBasketBalanceResponse = {
  $type: 'regen.ecocredit.basket.v1.QueryBasketBalanceResponse' as const,

  encode(
    message: QueryBasketBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== '') {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBasketBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBasketBalanceResponse {
    return {
      $type: QueryBasketBalanceResponse.$type,
      balance: isSet(object.balance) ? String(object.balance) : '',
    };
  },

  toJSON(message: QueryBasketBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBasketBalanceResponse>, I>>(
    object: I,
  ): QueryBasketBalanceResponse {
    const message = createBaseQueryBasketBalanceResponse();
    message.balance = object.balance ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryBasketBalanceResponse.$type,
  QueryBasketBalanceResponse,
);

/** Msg is the regen.ecocredit.basket.v1beta1 Query service. */
export interface Query {
  /** Basket queries one basket by denom. */
  Basket(
    request: DeepPartial<QueryBasketRequest>,
  ): Promise<QueryBasketResponse>;
  /** Baskets lists all baskets in the ecocredit module. */
  Baskets(
    request: DeepPartial<QueryBasketsRequest>,
  ): Promise<QueryBasketsResponse>;
  /** BasketBalances lists the balance of each credit batch in the basket. */
  BasketBalances(
    request: DeepPartial<QueryBasketBalancesRequest>,
  ): Promise<QueryBasketBalancesResponse>;
  /** BasketBalance queries the balance of a specific credit batch in the basket. */
  BasketBalance(
    request: DeepPartial<QueryBasketBalanceRequest>,
  ): Promise<QueryBasketBalanceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Basket = this.Basket.bind(this);
    this.Baskets = this.Baskets.bind(this);
    this.BasketBalances = this.BasketBalances.bind(this);
    this.BasketBalance = this.BasketBalance.bind(this);
  }
  Basket(
    request: DeepPartial<QueryBasketRequest>,
  ): Promise<QueryBasketResponse> {
    const fromPartial = QueryBasketRequest.fromPartial(request);
    const data = QueryBasketRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Query',
      'Basket',
      data,
    );
    return promise.then(data =>
      QueryBasketResponse.decode(new _m0.Reader(data)),
    );
  }

  Baskets(
    request: DeepPartial<QueryBasketsRequest>,
  ): Promise<QueryBasketsResponse> {
    const fromPartial = QueryBasketsRequest.fromPartial(request);
    const data = QueryBasketsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Query',
      'Baskets',
      data,
    );
    return promise.then(data =>
      QueryBasketsResponse.decode(new _m0.Reader(data)),
    );
  }

  BasketBalances(
    request: DeepPartial<QueryBasketBalancesRequest>,
  ): Promise<QueryBasketBalancesResponse> {
    const fromPartial = QueryBasketBalancesRequest.fromPartial(request);
    const data = QueryBasketBalancesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Query',
      'BasketBalances',
      data,
    );
    return promise.then(data =>
      QueryBasketBalancesResponse.decode(new _m0.Reader(data)),
    );
  }

  BasketBalance(
    request: DeepPartial<QueryBasketBalanceRequest>,
  ): Promise<QueryBasketBalanceResponse> {
    const fromPartial = QueryBasketBalanceRequest.fromPartial(request);
    const data = QueryBasketBalanceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Query',
      'BasketBalance',
      data,
    );
    return promise.then(data =>
      QueryBasketBalanceResponse.decode(new _m0.Reader(data)),
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
