import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Basket, BasketSDKType, BasketBalance, BasketBalanceSDKType } from "./state";
import { DateCriteria, DateCriteriaSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** QueryBasketRequest is the Query/Basket request type. */

export interface QueryBasketRequest {
  /** basket_denom represents the denom of the basket to query. */
  basketDenom: string;
}
/** QueryBasketRequest is the Query/Basket request type. */

export interface QueryBasketRequestSDKType {
  /** basket_denom represents the denom of the basket to query. */
  basket_denom: string;
}
/** QueryBasketResponse is the Query/Basket response type. */

export interface QueryBasketResponse {
  /**
   * basket is the queried basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated using Basket
   * but will be updated to use BasketInfo in the next version. In the meantime
   * basket_info is available using BasketInfo.
   */

  /** @deprecated */
  basket?: Basket;
  /** classes are the credit classes that can be deposited in the basket. */

  classes: string[];
  /**
   * basket_info is the queried basket.
   * 
   * Since Revision 1
   */

  basketInfo?: BasketInfo;
}
/** QueryBasketResponse is the Query/Basket response type. */

export interface QueryBasketResponseSDKType {
  /**
   * basket is the queried basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated using Basket
   * but will be updated to use BasketInfo in the next version. In the meantime
   * basket_info is available using BasketInfo.
   */

  /** @deprecated */
  basket?: BasketSDKType;
  /** classes are the credit classes that can be deposited in the basket. */

  classes: string[];
  /**
   * basket_info is the queried basket.
   * 
   * Since Revision 1
   */

  basket_info?: BasketInfoSDKType;
}
/** QueryBasketsRequest is the Query/Baskets request type. */

export interface QueryBasketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryBasketsRequest is the Query/Baskets request type. */

export interface QueryBasketsRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}
/** QueryBasketsResponse is the Query/Baskets response type. */

export interface QueryBasketsResponse {
  /**
   * baskets are the fetched baskets.
   * 
   * Deprecated (Since Revision 1): This field is still populated using Basket
   * but will be updated to use BasketInfo in the next version. In the meantime
   * baskets_info is available using BasketInfo.
   */

  /** @deprecated */
  baskets: Basket[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
  /**
   * baskets_info are the fetched baskets.
   * 
   * Since Revision 1
   */

  basketsInfo: BasketInfo[];
}
/** QueryBasketsResponse is the Query/Baskets response type. */

export interface QueryBasketsResponseSDKType {
  /**
   * baskets are the fetched baskets.
   * 
   * Deprecated (Since Revision 1): This field is still populated using Basket
   * but will be updated to use BasketInfo in the next version. In the meantime
   * baskets_info is available using BasketInfo.
   */

  /** @deprecated */
  baskets: BasketSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
  /**
   * baskets_info are the fetched baskets.
   * 
   * Since Revision 1
   */

  baskets_info: BasketInfoSDKType[];
}
/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */

export interface QueryBasketBalancesRequest {
  /** basket_denom is the denom of the basket. */
  basketDenom: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */

export interface QueryBasketBalancesRequestSDKType {
  /** basket_denom is the denom of the basket. */
  basket_denom: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryBasketBalancesResponse is the Query/BasketBalances response type. */

export interface QueryBasketBalancesResponse {
  /**
   * balances is a list of credit balances in the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated using
   * BasketBalance but will be updated to use BasketBalanceInfo in the next
   * version. In the meantime baskets_info is available using BasketBalanceInfo.
   */

  /** @deprecated */
  balances: BasketBalance[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
  /**
   * balances_info is a list of credit balances in the basket.
   * 
   * Since Revision 1
   */

  balancesInfo: BasketBalanceInfo[];
}
/** QueryBasketBalancesResponse is the Query/BasketBalances response type. */

export interface QueryBasketBalancesResponseSDKType {
  /**
   * balances is a list of credit balances in the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated using
   * BasketBalance but will be updated to use BasketBalanceInfo in the next
   * version. In the meantime baskets_info is available using BasketBalanceInfo.
   */

  /** @deprecated */
  balances: BasketBalanceSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
  /**
   * balances_info is a list of credit balances in the basket.
   * 
   * Since Revision 1
   */

  balances_info: BasketBalanceInfoSDKType[];
}
/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */

export interface QueryBasketBalanceRequest {
  /** basket_denom is the denom of the basket. */
  basketDenom: string;
  /** batch_denom is the denom of the credit batch. */

  batchDenom: string;
}
/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */

export interface QueryBasketBalanceRequestSDKType {
  /** basket_denom is the denom of the basket. */
  basket_denom: string;
  /** batch_denom is the denom of the credit batch. */

  batch_denom: string;
}
/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */

export interface QueryBasketBalanceResponse {
  /** balance is the amount of the queried credit batch in the basket. */
  balance: string;
}
/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */

export interface QueryBasketBalanceResponseSDKType {
  /** balance is the amount of the queried credit batch in the basket. */
  balance: string;
}
/** BasketInfo is the human-readable basket information. */

export interface BasketInfo {
  /** basket_denom is the basket bank denom. */
  basketDenom: string;
  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */

  name: string;
  /**
   * disable_auto_retire indicates whether or not the credits will be retired
   * upon withdraw from the basket.
   */

  disableAutoRetire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */

  creditTypeAbbrev: string;
  /** date_criteria is the date criteria for batches admitted to the basket. */

  dateCriteria?: DateCriteria;
  /** exponent is the exponent for converting credits to/from basket tokens. */

  exponent: number;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   */

  curator: string;
}
/** BasketInfo is the human-readable basket information. */

export interface BasketInfoSDKType {
  /** basket_denom is the basket bank denom. */
  basket_denom: string;
  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */

  name: string;
  /**
   * disable_auto_retire indicates whether or not the credits will be retired
   * upon withdraw from the basket.
   */

  disable_auto_retire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */

  credit_type_abbrev: string;
  /** date_criteria is the date criteria for batches admitted to the basket. */

  date_criteria?: DateCriteriaSDKType;
  /** exponent is the exponent for converting credits to/from basket tokens. */

  exponent: number;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   */

  curator: string;
}
/** BasketBalanceInfo is the human-readable basket balance information. */

export interface BasketBalanceInfo {
  /** batch_denom is the denom of the credit batch */
  batchDenom: string;
  /** balance is the amount of ecocredits held in the basket */

  balance: string;
}
/** BasketBalanceInfo is the human-readable basket balance information. */

export interface BasketBalanceInfoSDKType {
  /** batch_denom is the denom of the credit batch */
  batch_denom: string;
  /** balance is the amount of ecocredits held in the basket */

  balance: string;
}
/**
 * QueryBasketFeeRequest is the Query/BasketFee request type.
 * 
 * Since Revision 2
 */

export interface QueryBasketFeeRequest {}
/**
 * QueryBasketFeeRequest is the Query/BasketFee request type.
 * 
 * Since Revision 2
 */

export interface QueryBasketFeeRequestSDKType {}
/**
 * QueryBasketFeeResponse is the Query/BasketFee response type.
 * 
 * Since Revision 2
 */

export interface QueryBasketFeeResponse {
  /**
   * fee is the basket creation fee. If not set, a basket creation fee is not
   * required.
   */
  fee?: Coin;
}
/**
 * QueryBasketFeeResponse is the Query/BasketFee response type.
 * 
 * Since Revision 2
 */

export interface QueryBasketFeeResponseSDKType {
  /**
   * fee is the basket creation fee. If not set, a basket creation fee is not
   * required.
   */
  fee?: CoinSDKType;
}

function createBaseQueryBasketRequest(): QueryBasketRequest {
  return {
    basketDenom: ""
  };
}

export const QueryBasketRequest = {
  encode(message: QueryBasketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
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
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : ""
    };
  },

  toJSON(message: QueryBasketRequest): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketRequest>): QueryBasketRequest {
    const message = createBaseQueryBasketRequest();
    message.basketDenom = object.basketDenom ?? "";
    return message;
  }

};

function createBaseQueryBasketResponse(): QueryBasketResponse {
  return {
    basket: undefined,
    classes: [],
    basketInfo: undefined
  };
}

export const QueryBasketResponse = {
  encode(message: QueryBasketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basket !== undefined) {
      Basket.encode(message.basket, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.classes) {
      writer.uint32(18).string(v!);
    }

    if (message.basketInfo !== undefined) {
      BasketInfo.encode(message.basketInfo, writer.uint32(26).fork()).ldelim();
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

        case 3:
          message.basketInfo = BasketInfo.decode(reader, reader.uint32());
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
      basket: isSet(object.basket) ? Basket.fromJSON(object.basket) : undefined,
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => String(e)) : [],
      basketInfo: isSet(object.basketInfo) ? BasketInfo.fromJSON(object.basketInfo) : undefined
    };
  },

  toJSON(message: QueryBasketResponse): unknown {
    const obj: any = {};
    message.basket !== undefined && (obj.basket = message.basket ? Basket.toJSON(message.basket) : undefined);

    if (message.classes) {
      obj.classes = message.classes.map(e => e);
    } else {
      obj.classes = [];
    }

    message.basketInfo !== undefined && (obj.basketInfo = message.basketInfo ? BasketInfo.toJSON(message.basketInfo) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketResponse>): QueryBasketResponse {
    const message = createBaseQueryBasketResponse();
    message.basket = object.basket !== undefined && object.basket !== null ? Basket.fromPartial(object.basket) : undefined;
    message.classes = object.classes?.map(e => e) || [];
    message.basketInfo = object.basketInfo !== undefined && object.basketInfo !== null ? BasketInfo.fromPartial(object.basketInfo) : undefined;
    return message;
  }

};

function createBaseQueryBasketsRequest(): QueryBasketsRequest {
  return {
    pagination: undefined
  };
}

export const QueryBasketsRequest = {
  encode(message: QueryBasketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBasketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketsRequest>): QueryBasketsRequest {
    const message = createBaseQueryBasketsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBasketsResponse(): QueryBasketsResponse {
  return {
    baskets: [],
    pagination: undefined,
    basketsInfo: []
  };
}

export const QueryBasketsResponse = {
  encode(message: QueryBasketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.baskets) {
      Basket.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.basketsInfo) {
      BasketInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsResponse {
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

        case 3:
          message.basketsInfo.push(BasketInfo.decode(reader, reader.uint32()));
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
      baskets: Array.isArray(object?.baskets) ? object.baskets.map((e: any) => Basket.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      basketsInfo: Array.isArray(object?.basketsInfo) ? object.basketsInfo.map((e: any) => BasketInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryBasketsResponse): unknown {
    const obj: any = {};

    if (message.baskets) {
      obj.baskets = message.baskets.map(e => e ? Basket.toJSON(e) : undefined);
    } else {
      obj.baskets = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);

    if (message.basketsInfo) {
      obj.basketsInfo = message.basketsInfo.map(e => e ? BasketInfo.toJSON(e) : undefined);
    } else {
      obj.basketsInfo = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryBasketsResponse>): QueryBasketsResponse {
    const message = createBaseQueryBasketsResponse();
    message.baskets = object.baskets?.map(e => Basket.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.basketsInfo = object.basketsInfo?.map(e => BasketInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBasketBalancesRequest(): QueryBasketBalancesRequest {
  return {
    basketDenom: "",
    pagination: undefined
  };
}

export const QueryBasketBalancesRequest = {
  encode(message: QueryBasketBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesRequest {
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
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBasketBalancesRequest): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketBalancesRequest>): QueryBasketBalancesRequest {
    const message = createBaseQueryBasketBalancesRequest();
    message.basketDenom = object.basketDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBasketBalancesResponse(): QueryBasketBalancesResponse {
  return {
    balances: [],
    pagination: undefined,
    balancesInfo: []
  };
}

export const QueryBasketBalancesResponse = {
  encode(message: QueryBasketBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      BasketBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.balancesInfo) {
      BasketBalanceInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesResponse {
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

        case 3:
          message.balancesInfo.push(BasketBalanceInfo.decode(reader, reader.uint32()));
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
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BasketBalance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      balancesInfo: Array.isArray(object?.balancesInfo) ? object.balancesInfo.map((e: any) => BasketBalanceInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryBasketBalancesResponse): unknown {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BasketBalance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);

    if (message.balancesInfo) {
      obj.balancesInfo = message.balancesInfo.map(e => e ? BasketBalanceInfo.toJSON(e) : undefined);
    } else {
      obj.balancesInfo = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryBasketBalancesResponse>): QueryBasketBalancesResponse {
    const message = createBaseQueryBasketBalancesResponse();
    message.balances = object.balances?.map(e => BasketBalance.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.balancesInfo = object.balancesInfo?.map(e => BasketBalanceInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryBasketBalanceRequest(): QueryBasketBalanceRequest {
  return {
    basketDenom: "",
    batchDenom: ""
  };
}

export const QueryBasketBalanceRequest = {
  encode(message: QueryBasketBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceRequest {
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
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: QueryBasketBalanceRequest): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketBalanceRequest>): QueryBasketBalanceRequest {
    const message = createBaseQueryBasketBalanceRequest();
    message.basketDenom = object.basketDenom ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};

function createBaseQueryBasketBalanceResponse(): QueryBasketBalanceResponse {
  return {
    balance: ""
  };
}

export const QueryBasketBalanceResponse = {
  encode(message: QueryBasketBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceResponse {
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
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },

  toJSON(message: QueryBasketBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketBalanceResponse>): QueryBasketBalanceResponse {
    const message = createBaseQueryBasketBalanceResponse();
    message.balance = object.balance ?? "";
    return message;
  }

};

function createBaseBasketInfo(): BasketInfo {
  return {
    basketDenom: "",
    name: "",
    disableAutoRetire: false,
    creditTypeAbbrev: "",
    dateCriteria: undefined,
    exponent: 0,
    curator: ""
  };
}

export const BasketInfo = {
  encode(message: BasketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.disableAutoRetire === true) {
      writer.uint32(24).bool(message.disableAutoRetire);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }

    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(message.dateCriteria, writer.uint32(42).fork()).ldelim();
    }

    if (message.exponent !== 0) {
      writer.uint32(48).uint32(message.exponent);
    }

    if (message.curator !== "") {
      writer.uint32(58).string(message.curator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.disableAutoRetire = reader.bool();
          break;

        case 4:
          message.creditTypeAbbrev = reader.string();
          break;

        case 5:
          message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
          break;

        case 6:
          message.exponent = reader.uint32();
          break;

        case 7:
          message.curator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketInfo {
    return {
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      name: isSet(object.name) ? String(object.name) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      dateCriteria: isSet(object.dateCriteria) ? DateCriteria.fromJSON(object.dateCriteria) : undefined,
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      curator: isSet(object.curator) ? String(object.curator) : ""
    };
  },

  toJSON(message: BasketInfo): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.name !== undefined && (obj.name = message.name);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.dateCriteria !== undefined && (obj.dateCriteria = message.dateCriteria ? DateCriteria.toJSON(message.dateCriteria) : undefined);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.curator !== undefined && (obj.curator = message.curator);
    return obj;
  },

  fromPartial(object: Partial<BasketInfo>): BasketInfo {
    const message = createBaseBasketInfo();
    message.basketDenom = object.basketDenom ?? "";
    message.name = object.name ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
    message.exponent = object.exponent ?? 0;
    message.curator = object.curator ?? "";
    return message;
  }

};

function createBaseBasketBalanceInfo(): BasketBalanceInfo {
  return {
    batchDenom: "",
    balance: ""
  };
}

export const BasketBalanceInfo = {
  encode(message: BasketBalanceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalanceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketBalanceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        case 2:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketBalanceInfo {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },

  toJSON(message: BasketBalanceInfo): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: Partial<BasketBalanceInfo>): BasketBalanceInfo {
    const message = createBaseBasketBalanceInfo();
    message.batchDenom = object.batchDenom ?? "";
    message.balance = object.balance ?? "";
    return message;
  }

};

function createBaseQueryBasketFeeRequest(): QueryBasketFeeRequest {
  return {};
}

export const QueryBasketFeeRequest = {
  encode(_: QueryBasketFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketFeeRequest();

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

  fromJSON(_: any): QueryBasketFeeRequest {
    return {};
  },

  toJSON(_: QueryBasketFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryBasketFeeRequest>): QueryBasketFeeRequest {
    const message = createBaseQueryBasketFeeRequest();
    return message;
  }

};

function createBaseQueryBasketFeeResponse(): QueryBasketFeeResponse {
  return {
    fee: undefined
  };
}

export const QueryBasketFeeResponse = {
  encode(message: QueryBasketFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBasketFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBasketFeeResponse {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: QueryBasketFeeResponse): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBasketFeeResponse>): QueryBasketFeeResponse {
    const message = createBaseQueryBasketFeeResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};