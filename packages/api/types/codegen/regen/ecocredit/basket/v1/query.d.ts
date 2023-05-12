import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Basket, BasketSDKType, BasketBalance, BasketBalanceSDKType } from "./state";
import { DateCriteria, DateCriteriaSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export interface QueryBasketFeeRequest {
}
/**
 * QueryBasketFeeRequest is the Query/BasketFee request type.
 *
 * Since Revision 2
 */
export interface QueryBasketFeeRequestSDKType {
}
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
export declare const QueryBasketRequest: {
    encode(message: QueryBasketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketRequest;
    fromJSON(object: any): QueryBasketRequest;
    toJSON(message: QueryBasketRequest): unknown;
    fromPartial(object: Partial<QueryBasketRequest>): QueryBasketRequest;
};
export declare const QueryBasketResponse: {
    encode(message: QueryBasketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketResponse;
    fromJSON(object: any): QueryBasketResponse;
    toJSON(message: QueryBasketResponse): unknown;
    fromPartial(object: Partial<QueryBasketResponse>): QueryBasketResponse;
};
export declare const QueryBasketsRequest: {
    encode(message: QueryBasketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsRequest;
    fromJSON(object: any): QueryBasketsRequest;
    toJSON(message: QueryBasketsRequest): unknown;
    fromPartial(object: Partial<QueryBasketsRequest>): QueryBasketsRequest;
};
export declare const QueryBasketsResponse: {
    encode(message: QueryBasketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsResponse;
    fromJSON(object: any): QueryBasketsResponse;
    toJSON(message: QueryBasketsResponse): unknown;
    fromPartial(object: Partial<QueryBasketsResponse>): QueryBasketsResponse;
};
export declare const QueryBasketBalancesRequest: {
    encode(message: QueryBasketBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesRequest;
    fromJSON(object: any): QueryBasketBalancesRequest;
    toJSON(message: QueryBasketBalancesRequest): unknown;
    fromPartial(object: Partial<QueryBasketBalancesRequest>): QueryBasketBalancesRequest;
};
export declare const QueryBasketBalancesResponse: {
    encode(message: QueryBasketBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesResponse;
    fromJSON(object: any): QueryBasketBalancesResponse;
    toJSON(message: QueryBasketBalancesResponse): unknown;
    fromPartial(object: Partial<QueryBasketBalancesResponse>): QueryBasketBalancesResponse;
};
export declare const QueryBasketBalanceRequest: {
    encode(message: QueryBasketBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceRequest;
    fromJSON(object: any): QueryBasketBalanceRequest;
    toJSON(message: QueryBasketBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBasketBalanceRequest>): QueryBasketBalanceRequest;
};
export declare const QueryBasketBalanceResponse: {
    encode(message: QueryBasketBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceResponse;
    fromJSON(object: any): QueryBasketBalanceResponse;
    toJSON(message: QueryBasketBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBasketBalanceResponse>): QueryBasketBalanceResponse;
};
export declare const BasketInfo: {
    encode(message: BasketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketInfo;
    fromJSON(object: any): BasketInfo;
    toJSON(message: BasketInfo): unknown;
    fromPartial(object: Partial<BasketInfo>): BasketInfo;
};
export declare const BasketBalanceInfo: {
    encode(message: BasketBalanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalanceInfo;
    fromJSON(object: any): BasketBalanceInfo;
    toJSON(message: BasketBalanceInfo): unknown;
    fromPartial(object: Partial<BasketBalanceInfo>): BasketBalanceInfo;
};
export declare const QueryBasketFeeRequest: {
    encode(_: QueryBasketFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketFeeRequest;
    fromJSON(_: any): QueryBasketFeeRequest;
    toJSON(_: QueryBasketFeeRequest): unknown;
    fromPartial(_: Partial<QueryBasketFeeRequest>): QueryBasketFeeRequest;
};
export declare const QueryBasketFeeResponse: {
    encode(message: QueryBasketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketFeeResponse;
    fromJSON(object: any): QueryBasketFeeResponse;
    toJSON(message: QueryBasketFeeResponse): unknown;
    fromPartial(object: Partial<QueryBasketFeeResponse>): QueryBasketFeeResponse;
};
