import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Basket, BasketAmino, BasketSDKType, BasketBalance, BasketBalanceAmino, BasketBalanceSDKType } from "./state";
import { DateCriteria, DateCriteriaAmino, DateCriteriaSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** QueryBasketRequest is the Query/Basket request type. */
export interface QueryBasketRequest {
  /** basket_denom represents the denom of the basket to query. */
  basketDenom: string;
}
export interface QueryBasketRequestProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketRequest";
  value: Uint8Array;
}
/** QueryBasketRequest is the Query/Basket request type. */
export interface QueryBasketRequestAmino {
  /** basket_denom represents the denom of the basket to query. */
  basket_denom?: string;
}
export interface QueryBasketRequestAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketRequest";
  value: QueryBasketRequestAmino;
}
/** QueryBasketRequest is the Query/Basket request type. */
export interface QueryBasketRequestSDKType {
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
export interface QueryBasketResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketResponse";
  value: Uint8Array;
}
/** QueryBasketResponse is the Query/Basket response type. */
export interface QueryBasketResponseAmino {
  /**
   * basket is the queried basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated using Basket
   * but will be updated to use BasketInfo in the next version. In the meantime
   * basket_info is available using BasketInfo.
   */
  /** @deprecated */
  basket?: BasketAmino;
  /** classes are the credit classes that can be deposited in the basket. */
  classes?: string[];
  /**
   * basket_info is the queried basket.
   * 
   * Since Revision 1
   */
  basket_info?: BasketInfoAmino;
}
export interface QueryBasketResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketResponse";
  value: QueryBasketResponseAmino;
}
/** QueryBasketResponse is the Query/Basket response type. */
export interface QueryBasketResponseSDKType {
  /** @deprecated */
  basket?: BasketSDKType;
  classes: string[];
  basket_info?: BasketInfoSDKType;
}
/** QueryBasketsRequest is the Query/Baskets request type. */
export interface QueryBasketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryBasketsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsRequest";
  value: Uint8Array;
}
/** QueryBasketsRequest is the Query/Baskets request type. */
export interface QueryBasketsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryBasketsRequestAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketsRequest";
  value: QueryBasketsRequestAmino;
}
/** QueryBasketsRequest is the Query/Baskets request type. */
export interface QueryBasketsRequestSDKType {
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
export interface QueryBasketsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsResponse";
  value: Uint8Array;
}
/** QueryBasketsResponse is the Query/Baskets response type. */
export interface QueryBasketsResponseAmino {
  /**
   * baskets are the fetched baskets.
   * 
   * Deprecated (Since Revision 1): This field is still populated using Basket
   * but will be updated to use BasketInfo in the next version. In the meantime
   * baskets_info is available using BasketInfo.
   */
  /** @deprecated */
  baskets?: BasketAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /**
   * baskets_info are the fetched baskets.
   * 
   * Since Revision 1
   */
  baskets_info?: BasketInfoAmino[];
}
export interface QueryBasketsResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketsResponse";
  value: QueryBasketsResponseAmino;
}
/** QueryBasketsResponse is the Query/Baskets response type. */
export interface QueryBasketsResponseSDKType {
  /** @deprecated */
  baskets: BasketSDKType[];
  pagination?: PageResponseSDKType;
  baskets_info: BasketInfoSDKType[];
}
/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */
export interface QueryBasketBalancesRequest {
  /** basket_denom is the denom of the basket. */
  basketDenom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryBasketBalancesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesRequest";
  value: Uint8Array;
}
/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */
export interface QueryBasketBalancesRequestAmino {
  /** basket_denom is the denom of the basket. */
  basket_denom?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryBasketBalancesRequestAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketBalancesRequest";
  value: QueryBasketBalancesRequestAmino;
}
/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */
export interface QueryBasketBalancesRequestSDKType {
  basket_denom: string;
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
export interface QueryBasketBalancesResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesResponse";
  value: Uint8Array;
}
/** QueryBasketBalancesResponse is the Query/BasketBalances response type. */
export interface QueryBasketBalancesResponseAmino {
  /**
   * balances is a list of credit balances in the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated using
   * BasketBalance but will be updated to use BasketBalanceInfo in the next
   * version. In the meantime baskets_info is available using BasketBalanceInfo.
   */
  /** @deprecated */
  balances?: BasketBalanceAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
  /**
   * balances_info is a list of credit balances in the basket.
   * 
   * Since Revision 1
   */
  balances_info?: BasketBalanceInfoAmino[];
}
export interface QueryBasketBalancesResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketBalancesResponse";
  value: QueryBasketBalancesResponseAmino;
}
/** QueryBasketBalancesResponse is the Query/BasketBalances response type. */
export interface QueryBasketBalancesResponseSDKType {
  /** @deprecated */
  balances: BasketBalanceSDKType[];
  pagination?: PageResponseSDKType;
  balances_info: BasketBalanceInfoSDKType[];
}
/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */
export interface QueryBasketBalanceRequest {
  /** basket_denom is the denom of the basket. */
  basketDenom: string;
  /** batch_denom is the denom of the credit batch. */
  batchDenom: string;
}
export interface QueryBasketBalanceRequestProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceRequest";
  value: Uint8Array;
}
/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */
export interface QueryBasketBalanceRequestAmino {
  /** basket_denom is the denom of the basket. */
  basket_denom?: string;
  /** batch_denom is the denom of the credit batch. */
  batch_denom?: string;
}
export interface QueryBasketBalanceRequestAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketBalanceRequest";
  value: QueryBasketBalanceRequestAmino;
}
/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */
export interface QueryBasketBalanceRequestSDKType {
  basket_denom: string;
  batch_denom: string;
}
/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */
export interface QueryBasketBalanceResponse {
  /** balance is the amount of the queried credit batch in the basket. */
  balance: string;
}
export interface QueryBasketBalanceResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceResponse";
  value: Uint8Array;
}
/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */
export interface QueryBasketBalanceResponseAmino {
  /** balance is the amount of the queried credit batch in the basket. */
  balance?: string;
}
export interface QueryBasketBalanceResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketBalanceResponse";
  value: QueryBasketBalanceResponseAmino;
}
/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */
export interface QueryBasketBalanceResponseSDKType {
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
export interface BasketInfoProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.BasketInfo";
  value: Uint8Array;
}
/** BasketInfo is the human-readable basket information. */
export interface BasketInfoAmino {
  /** basket_denom is the basket bank denom. */
  basket_denom?: string;
  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */
  name?: string;
  /**
   * disable_auto_retire indicates whether or not the credits will be retired
   * upon withdraw from the basket.
   */
  disable_auto_retire?: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */
  credit_type_abbrev?: string;
  /** date_criteria is the date criteria for batches admitted to the basket. */
  date_criteria?: DateCriteriaAmino;
  /** exponent is the exponent for converting credits to/from basket tokens. */
  exponent?: number;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   */
  curator?: string;
}
export interface BasketInfoAminoMsg {
  type: "/regen.ecocredit.basket.v1.BasketInfo";
  value: BasketInfoAmino;
}
/** BasketInfo is the human-readable basket information. */
export interface BasketInfoSDKType {
  basket_denom: string;
  name: string;
  disable_auto_retire: boolean;
  credit_type_abbrev: string;
  date_criteria?: DateCriteriaSDKType;
  exponent: number;
  curator: string;
}
/** BasketBalanceInfo is the human-readable basket balance information. */
export interface BasketBalanceInfo {
  /** batch_denom is the denom of the credit batch */
  batchDenom: string;
  /** balance is the amount of ecocredits held in the basket */
  balance: string;
}
export interface BasketBalanceInfoProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.BasketBalanceInfo";
  value: Uint8Array;
}
/** BasketBalanceInfo is the human-readable basket balance information. */
export interface BasketBalanceInfoAmino {
  /** batch_denom is the denom of the credit batch */
  batch_denom?: string;
  /** balance is the amount of ecocredits held in the basket */
  balance?: string;
}
export interface BasketBalanceInfoAminoMsg {
  type: "/regen.ecocredit.basket.v1.BasketBalanceInfo";
  value: BasketBalanceInfoAmino;
}
/** BasketBalanceInfo is the human-readable basket balance information. */
export interface BasketBalanceInfoSDKType {
  batch_denom: string;
  balance: string;
}
/**
 * QueryBasketFeeRequest is the Query/BasketFee request type.
 * 
 * Since Revision 2
 */
export interface QueryBasketFeeRequest {}
export interface QueryBasketFeeRequestProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest";
  value: Uint8Array;
}
/**
 * QueryBasketFeeRequest is the Query/BasketFee request type.
 * 
 * Since Revision 2
 */
export interface QueryBasketFeeRequestAmino {}
export interface QueryBasketFeeRequestAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest";
  value: QueryBasketFeeRequestAmino;
}
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
export interface QueryBasketFeeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeResponse";
  value: Uint8Array;
}
/**
 * QueryBasketFeeResponse is the Query/BasketFee response type.
 * 
 * Since Revision 2
 */
export interface QueryBasketFeeResponseAmino {
  /**
   * fee is the basket creation fee. If not set, a basket creation fee is not
   * required.
   */
  fee?: CoinAmino;
}
export interface QueryBasketFeeResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.QueryBasketFeeResponse";
  value: QueryBasketFeeResponseAmino;
}
/**
 * QueryBasketFeeResponse is the Query/BasketFee response type.
 * 
 * Since Revision 2
 */
export interface QueryBasketFeeResponseSDKType {
  fee?: CoinSDKType;
}
function createBaseQueryBasketRequest(): QueryBasketRequest {
  return {
    basketDenom: ""
  };
}
export const QueryBasketRequest = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketRequest",
  encode(message: QueryBasketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketRequestAmino): QueryBasketRequest {
    const message = createBaseQueryBasketRequest();
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    return message;
  },
  toAmino(message: QueryBasketRequest): QueryBasketRequestAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    return obj;
  },
  fromAminoMsg(object: QueryBasketRequestAminoMsg): QueryBasketRequest {
    return QueryBasketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketRequestProtoMsg): QueryBasketRequest {
    return QueryBasketRequest.decode(message.value);
  },
  toProto(message: QueryBasketRequest): Uint8Array {
    return QueryBasketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketRequest): QueryBasketRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketRequest",
      value: QueryBasketRequest.encode(message).finish()
    };
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
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketResponse",
  encode(message: QueryBasketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketResponseAmino): QueryBasketResponse {
    const message = createBaseQueryBasketResponse();
    if (object.basket !== undefined && object.basket !== null) {
      message.basket = Basket.fromAmino(object.basket);
    }
    message.classes = object.classes?.map(e => e) || [];
    if (object.basket_info !== undefined && object.basket_info !== null) {
      message.basketInfo = BasketInfo.fromAmino(object.basket_info);
    }
    return message;
  },
  toAmino(message: QueryBasketResponse): QueryBasketResponseAmino {
    const obj: any = {};
    obj.basket = message.basket ? Basket.toAmino(message.basket) : undefined;
    if (message.classes) {
      obj.classes = message.classes.map(e => e);
    } else {
      obj.classes = message.classes;
    }
    obj.basket_info = message.basketInfo ? BasketInfo.toAmino(message.basketInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBasketResponseAminoMsg): QueryBasketResponse {
    return QueryBasketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketResponseProtoMsg): QueryBasketResponse {
    return QueryBasketResponse.decode(message.value);
  },
  toProto(message: QueryBasketResponse): Uint8Array {
    return QueryBasketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketResponse): QueryBasketResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketResponse",
      value: QueryBasketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBasketsRequest(): QueryBasketsRequest {
  return {
    pagination: undefined
  };
}
export const QueryBasketsRequest = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsRequest",
  encode(message: QueryBasketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketsRequestAmino): QueryBasketsRequest {
    const message = createBaseQueryBasketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBasketsRequest): QueryBasketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBasketsRequestAminoMsg): QueryBasketsRequest {
    return QueryBasketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketsRequestProtoMsg): QueryBasketsRequest {
    return QueryBasketsRequest.decode(message.value);
  },
  toProto(message: QueryBasketsRequest): Uint8Array {
    return QueryBasketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketsRequest): QueryBasketsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsRequest",
      value: QueryBasketsRequest.encode(message).finish()
    };
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
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsResponse",
  encode(message: QueryBasketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketsResponseAmino): QueryBasketsResponse {
    const message = createBaseQueryBasketsResponse();
    message.baskets = object.baskets?.map(e => Basket.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.basketsInfo = object.baskets_info?.map(e => BasketInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBasketsResponse): QueryBasketsResponseAmino {
    const obj: any = {};
    if (message.baskets) {
      obj.baskets = message.baskets.map(e => e ? Basket.toAmino(e) : undefined);
    } else {
      obj.baskets = message.baskets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.basketsInfo) {
      obj.baskets_info = message.basketsInfo.map(e => e ? BasketInfo.toAmino(e) : undefined);
    } else {
      obj.baskets_info = message.basketsInfo;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBasketsResponseAminoMsg): QueryBasketsResponse {
    return QueryBasketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketsResponseProtoMsg): QueryBasketsResponse {
    return QueryBasketsResponse.decode(message.value);
  },
  toProto(message: QueryBasketsResponse): Uint8Array {
    return QueryBasketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketsResponse): QueryBasketsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsResponse",
      value: QueryBasketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBasketBalancesRequest(): QueryBasketBalancesRequest {
  return {
    basketDenom: "",
    pagination: undefined
  };
}
export const QueryBasketBalancesRequest = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesRequest",
  encode(message: QueryBasketBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketBalancesRequestAmino): QueryBasketBalancesRequest {
    const message = createBaseQueryBasketBalancesRequest();
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBasketBalancesRequest): QueryBasketBalancesRequestAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBasketBalancesRequestAminoMsg): QueryBasketBalancesRequest {
    return QueryBasketBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketBalancesRequestProtoMsg): QueryBasketBalancesRequest {
    return QueryBasketBalancesRequest.decode(message.value);
  },
  toProto(message: QueryBasketBalancesRequest): Uint8Array {
    return QueryBasketBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketBalancesRequest): QueryBasketBalancesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesRequest",
      value: QueryBasketBalancesRequest.encode(message).finish()
    };
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
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesResponse",
  encode(message: QueryBasketBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketBalancesResponseAmino): QueryBasketBalancesResponse {
    const message = createBaseQueryBasketBalancesResponse();
    message.balances = object.balances?.map(e => BasketBalance.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    message.balancesInfo = object.balances_info?.map(e => BasketBalanceInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBasketBalancesResponse): QueryBasketBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BasketBalance.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    if (message.balancesInfo) {
      obj.balances_info = message.balancesInfo.map(e => e ? BasketBalanceInfo.toAmino(e) : undefined);
    } else {
      obj.balances_info = message.balancesInfo;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBasketBalancesResponseAminoMsg): QueryBasketBalancesResponse {
    return QueryBasketBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketBalancesResponseProtoMsg): QueryBasketBalancesResponse {
    return QueryBasketBalancesResponse.decode(message.value);
  },
  toProto(message: QueryBasketBalancesResponse): Uint8Array {
    return QueryBasketBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketBalancesResponse): QueryBasketBalancesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesResponse",
      value: QueryBasketBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBasketBalanceRequest(): QueryBasketBalanceRequest {
  return {
    basketDenom: "",
    batchDenom: ""
  };
}
export const QueryBasketBalanceRequest = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceRequest",
  encode(message: QueryBasketBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketBalanceRequestAmino): QueryBasketBalanceRequest {
    const message = createBaseQueryBasketBalanceRequest();
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: QueryBasketBalanceRequest): QueryBasketBalanceRequestAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: QueryBasketBalanceRequestAminoMsg): QueryBasketBalanceRequest {
    return QueryBasketBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketBalanceRequestProtoMsg): QueryBasketBalanceRequest {
    return QueryBasketBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBasketBalanceRequest): Uint8Array {
    return QueryBasketBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketBalanceRequest): QueryBasketBalanceRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceRequest",
      value: QueryBasketBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBasketBalanceResponse(): QueryBasketBalanceResponse {
  return {
    balance: ""
  };
}
export const QueryBasketBalanceResponse = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceResponse",
  encode(message: QueryBasketBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketBalanceResponseAmino): QueryBasketBalanceResponse {
    const message = createBaseQueryBasketBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: QueryBasketBalanceResponse): QueryBasketBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === "" ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: QueryBasketBalanceResponseAminoMsg): QueryBasketBalanceResponse {
    return QueryBasketBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketBalanceResponseProtoMsg): QueryBasketBalanceResponse {
    return QueryBasketBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBasketBalanceResponse): Uint8Array {
    return QueryBasketBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketBalanceResponse): QueryBasketBalanceResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceResponse",
      value: QueryBasketBalanceResponse.encode(message).finish()
    };
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
  typeUrl: "/regen.ecocredit.basket.v1.BasketInfo",
  encode(message: BasketInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): BasketInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: BasketInfoAmino): BasketInfo {
    const message = createBaseBasketInfo();
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
      message.disableAutoRetire = object.disable_auto_retire;
    }
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    if (object.date_criteria !== undefined && object.date_criteria !== null) {
      message.dateCriteria = DateCriteria.fromAmino(object.date_criteria);
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = object.curator;
    }
    return message;
  },
  toAmino(message: BasketInfo): BasketInfoAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    obj.name = message.name === "" ? undefined : message.name;
    obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
    obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
    obj.date_criteria = message.dateCriteria ? DateCriteria.toAmino(message.dateCriteria) : undefined;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    obj.curator = message.curator === "" ? undefined : message.curator;
    return obj;
  },
  fromAminoMsg(object: BasketInfoAminoMsg): BasketInfo {
    return BasketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BasketInfoProtoMsg): BasketInfo {
    return BasketInfo.decode(message.value);
  },
  toProto(message: BasketInfo): Uint8Array {
    return BasketInfo.encode(message).finish();
  },
  toProtoMsg(message: BasketInfo): BasketInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.BasketInfo",
      value: BasketInfo.encode(message).finish()
    };
  }
};
function createBaseBasketBalanceInfo(): BasketBalanceInfo {
  return {
    batchDenom: "",
    balance: ""
  };
}
export const BasketBalanceInfo = {
  typeUrl: "/regen.ecocredit.basket.v1.BasketBalanceInfo",
  encode(message: BasketBalanceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BasketBalanceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: BasketBalanceInfoAmino): BasketBalanceInfo {
    const message = createBaseBasketBalanceInfo();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: BasketBalanceInfo): BasketBalanceInfoAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.balance = message.balance === "" ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: BasketBalanceInfoAminoMsg): BasketBalanceInfo {
    return BasketBalanceInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BasketBalanceInfoProtoMsg): BasketBalanceInfo {
    return BasketBalanceInfo.decode(message.value);
  },
  toProto(message: BasketBalanceInfo): Uint8Array {
    return BasketBalanceInfo.encode(message).finish();
  },
  toProtoMsg(message: BasketBalanceInfo): BasketBalanceInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.BasketBalanceInfo",
      value: BasketBalanceInfo.encode(message).finish()
    };
  }
};
function createBaseQueryBasketFeeRequest(): QueryBasketFeeRequest {
  return {};
}
export const QueryBasketFeeRequest = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest",
  encode(_: QueryBasketFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: QueryBasketFeeRequestAmino): QueryBasketFeeRequest {
    const message = createBaseQueryBasketFeeRequest();
    return message;
  },
  toAmino(_: QueryBasketFeeRequest): QueryBasketFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBasketFeeRequestAminoMsg): QueryBasketFeeRequest {
    return QueryBasketFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketFeeRequestProtoMsg): QueryBasketFeeRequest {
    return QueryBasketFeeRequest.decode(message.value);
  },
  toProto(message: QueryBasketFeeRequest): Uint8Array {
    return QueryBasketFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketFeeRequest): QueryBasketFeeRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest",
      value: QueryBasketFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBasketFeeResponse(): QueryBasketFeeResponse {
  return {
    fee: undefined
  };
}
export const QueryBasketFeeResponse = {
  typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeResponse",
  encode(message: QueryBasketFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBasketFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBasketFeeResponseAmino): QueryBasketFeeResponse {
    const message = createBaseQueryBasketFeeResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: QueryBasketFeeResponse): QueryBasketFeeResponseAmino {
    const obj: any = {};
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBasketFeeResponseAminoMsg): QueryBasketFeeResponse {
    return QueryBasketFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBasketFeeResponseProtoMsg): QueryBasketFeeResponse {
    return QueryBasketFeeResponse.decode(message.value);
  },
  toProto(message: QueryBasketFeeResponse): Uint8Array {
    return QueryBasketFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBasketFeeResponse): QueryBasketFeeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeResponse",
      value: QueryBasketFeeResponse.encode(message).finish()
    };
  }
};