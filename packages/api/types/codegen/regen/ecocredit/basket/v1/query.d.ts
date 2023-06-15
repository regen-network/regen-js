import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Basket, BasketAmino, BasketSDKType, BasketBalance, BasketBalanceAmino, BasketBalanceSDKType } from "./state";
import { DateCriteria, DateCriteriaAmino, DateCriteriaSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
    basket_denom: string;
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
    classes: string[];
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
    baskets: BasketAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
    /**
     * baskets_info are the fetched baskets.
     *
     * Since Revision 1
     */
    baskets_info: BasketInfoAmino[];
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
    basket_denom: string;
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
    balances: BasketBalanceAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
    /**
     * balances_info is a list of credit balances in the basket.
     *
     * Since Revision 1
     */
    balances_info: BasketBalanceInfoAmino[];
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
    basket_denom: string;
    /** batch_denom is the denom of the credit batch. */
    batch_denom: string;
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
    balance: string;
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
    date_criteria?: DateCriteriaAmino;
    /** exponent is the exponent for converting credits to/from basket tokens. */
    exponent: number;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     */
    curator: string;
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
    batch_denom: string;
    /** balance is the amount of ecocredits held in the basket */
    balance: string;
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
export interface QueryBasketFeeRequest {
}
export interface QueryBasketFeeRequestProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest";
    value: Uint8Array;
}
/**
 * QueryBasketFeeRequest is the Query/BasketFee request type.
 *
 * Since Revision 2
 */
export interface QueryBasketFeeRequestAmino {
}
export interface QueryBasketFeeRequestAminoMsg {
    type: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest";
    value: QueryBasketFeeRequestAmino;
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
export declare const QueryBasketRequest: {
    encode(message: QueryBasketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketRequest;
    fromJSON(object: any): QueryBasketRequest;
    toJSON(message: QueryBasketRequest): unknown;
    fromPartial(object: Partial<QueryBasketRequest>): QueryBasketRequest;
    fromAmino(object: QueryBasketRequestAmino): QueryBasketRequest;
    toAmino(message: QueryBasketRequest): QueryBasketRequestAmino;
    fromAminoMsg(object: QueryBasketRequestAminoMsg): QueryBasketRequest;
    fromProtoMsg(message: QueryBasketRequestProtoMsg): QueryBasketRequest;
    toProto(message: QueryBasketRequest): Uint8Array;
    toProtoMsg(message: QueryBasketRequest): QueryBasketRequestProtoMsg;
};
export declare const QueryBasketResponse: {
    encode(message: QueryBasketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketResponse;
    fromJSON(object: any): QueryBasketResponse;
    toJSON(message: QueryBasketResponse): unknown;
    fromPartial(object: Partial<QueryBasketResponse>): QueryBasketResponse;
    fromAmino(object: QueryBasketResponseAmino): QueryBasketResponse;
    toAmino(message: QueryBasketResponse): QueryBasketResponseAmino;
    fromAminoMsg(object: QueryBasketResponseAminoMsg): QueryBasketResponse;
    fromProtoMsg(message: QueryBasketResponseProtoMsg): QueryBasketResponse;
    toProto(message: QueryBasketResponse): Uint8Array;
    toProtoMsg(message: QueryBasketResponse): QueryBasketResponseProtoMsg;
};
export declare const QueryBasketsRequest: {
    encode(message: QueryBasketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsRequest;
    fromJSON(object: any): QueryBasketsRequest;
    toJSON(message: QueryBasketsRequest): unknown;
    fromPartial(object: Partial<QueryBasketsRequest>): QueryBasketsRequest;
    fromAmino(object: QueryBasketsRequestAmino): QueryBasketsRequest;
    toAmino(message: QueryBasketsRequest): QueryBasketsRequestAmino;
    fromAminoMsg(object: QueryBasketsRequestAminoMsg): QueryBasketsRequest;
    fromProtoMsg(message: QueryBasketsRequestProtoMsg): QueryBasketsRequest;
    toProto(message: QueryBasketsRequest): Uint8Array;
    toProtoMsg(message: QueryBasketsRequest): QueryBasketsRequestProtoMsg;
};
export declare const QueryBasketsResponse: {
    encode(message: QueryBasketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsResponse;
    fromJSON(object: any): QueryBasketsResponse;
    toJSON(message: QueryBasketsResponse): unknown;
    fromPartial(object: Partial<QueryBasketsResponse>): QueryBasketsResponse;
    fromAmino(object: QueryBasketsResponseAmino): QueryBasketsResponse;
    toAmino(message: QueryBasketsResponse): QueryBasketsResponseAmino;
    fromAminoMsg(object: QueryBasketsResponseAminoMsg): QueryBasketsResponse;
    fromProtoMsg(message: QueryBasketsResponseProtoMsg): QueryBasketsResponse;
    toProto(message: QueryBasketsResponse): Uint8Array;
    toProtoMsg(message: QueryBasketsResponse): QueryBasketsResponseProtoMsg;
};
export declare const QueryBasketBalancesRequest: {
    encode(message: QueryBasketBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesRequest;
    fromJSON(object: any): QueryBasketBalancesRequest;
    toJSON(message: QueryBasketBalancesRequest): unknown;
    fromPartial(object: Partial<QueryBasketBalancesRequest>): QueryBasketBalancesRequest;
    fromAmino(object: QueryBasketBalancesRequestAmino): QueryBasketBalancesRequest;
    toAmino(message: QueryBasketBalancesRequest): QueryBasketBalancesRequestAmino;
    fromAminoMsg(object: QueryBasketBalancesRequestAminoMsg): QueryBasketBalancesRequest;
    fromProtoMsg(message: QueryBasketBalancesRequestProtoMsg): QueryBasketBalancesRequest;
    toProto(message: QueryBasketBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryBasketBalancesRequest): QueryBasketBalancesRequestProtoMsg;
};
export declare const QueryBasketBalancesResponse: {
    encode(message: QueryBasketBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesResponse;
    fromJSON(object: any): QueryBasketBalancesResponse;
    toJSON(message: QueryBasketBalancesResponse): unknown;
    fromPartial(object: Partial<QueryBasketBalancesResponse>): QueryBasketBalancesResponse;
    fromAmino(object: QueryBasketBalancesResponseAmino): QueryBasketBalancesResponse;
    toAmino(message: QueryBasketBalancesResponse): QueryBasketBalancesResponseAmino;
    fromAminoMsg(object: QueryBasketBalancesResponseAminoMsg): QueryBasketBalancesResponse;
    fromProtoMsg(message: QueryBasketBalancesResponseProtoMsg): QueryBasketBalancesResponse;
    toProto(message: QueryBasketBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryBasketBalancesResponse): QueryBasketBalancesResponseProtoMsg;
};
export declare const QueryBasketBalanceRequest: {
    encode(message: QueryBasketBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceRequest;
    fromJSON(object: any): QueryBasketBalanceRequest;
    toJSON(message: QueryBasketBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBasketBalanceRequest>): QueryBasketBalanceRequest;
    fromAmino(object: QueryBasketBalanceRequestAmino): QueryBasketBalanceRequest;
    toAmino(message: QueryBasketBalanceRequest): QueryBasketBalanceRequestAmino;
    fromAminoMsg(object: QueryBasketBalanceRequestAminoMsg): QueryBasketBalanceRequest;
    fromProtoMsg(message: QueryBasketBalanceRequestProtoMsg): QueryBasketBalanceRequest;
    toProto(message: QueryBasketBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBasketBalanceRequest): QueryBasketBalanceRequestProtoMsg;
};
export declare const QueryBasketBalanceResponse: {
    encode(message: QueryBasketBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceResponse;
    fromJSON(object: any): QueryBasketBalanceResponse;
    toJSON(message: QueryBasketBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBasketBalanceResponse>): QueryBasketBalanceResponse;
    fromAmino(object: QueryBasketBalanceResponseAmino): QueryBasketBalanceResponse;
    toAmino(message: QueryBasketBalanceResponse): QueryBasketBalanceResponseAmino;
    fromAminoMsg(object: QueryBasketBalanceResponseAminoMsg): QueryBasketBalanceResponse;
    fromProtoMsg(message: QueryBasketBalanceResponseProtoMsg): QueryBasketBalanceResponse;
    toProto(message: QueryBasketBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBasketBalanceResponse): QueryBasketBalanceResponseProtoMsg;
};
export declare const BasketInfo: {
    encode(message: BasketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketInfo;
    fromJSON(object: any): BasketInfo;
    toJSON(message: BasketInfo): unknown;
    fromPartial(object: Partial<BasketInfo>): BasketInfo;
    fromAmino(object: BasketInfoAmino): BasketInfo;
    toAmino(message: BasketInfo): BasketInfoAmino;
    fromAminoMsg(object: BasketInfoAminoMsg): BasketInfo;
    fromProtoMsg(message: BasketInfoProtoMsg): BasketInfo;
    toProto(message: BasketInfo): Uint8Array;
    toProtoMsg(message: BasketInfo): BasketInfoProtoMsg;
};
export declare const BasketBalanceInfo: {
    encode(message: BasketBalanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalanceInfo;
    fromJSON(object: any): BasketBalanceInfo;
    toJSON(message: BasketBalanceInfo): unknown;
    fromPartial(object: Partial<BasketBalanceInfo>): BasketBalanceInfo;
    fromAmino(object: BasketBalanceInfoAmino): BasketBalanceInfo;
    toAmino(message: BasketBalanceInfo): BasketBalanceInfoAmino;
    fromAminoMsg(object: BasketBalanceInfoAminoMsg): BasketBalanceInfo;
    fromProtoMsg(message: BasketBalanceInfoProtoMsg): BasketBalanceInfo;
    toProto(message: BasketBalanceInfo): Uint8Array;
    toProtoMsg(message: BasketBalanceInfo): BasketBalanceInfoProtoMsg;
};
export declare const QueryBasketFeeRequest: {
    encode(_: QueryBasketFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketFeeRequest;
    fromJSON(_: any): QueryBasketFeeRequest;
    toJSON(_: QueryBasketFeeRequest): unknown;
    fromPartial(_: Partial<QueryBasketFeeRequest>): QueryBasketFeeRequest;
    fromAmino(_: QueryBasketFeeRequestAmino): QueryBasketFeeRequest;
    toAmino(_: QueryBasketFeeRequest): QueryBasketFeeRequestAmino;
    fromAminoMsg(object: QueryBasketFeeRequestAminoMsg): QueryBasketFeeRequest;
    fromProtoMsg(message: QueryBasketFeeRequestProtoMsg): QueryBasketFeeRequest;
    toProto(message: QueryBasketFeeRequest): Uint8Array;
    toProtoMsg(message: QueryBasketFeeRequest): QueryBasketFeeRequestProtoMsg;
};
export declare const QueryBasketFeeResponse: {
    encode(message: QueryBasketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketFeeResponse;
    fromJSON(object: any): QueryBasketFeeResponse;
    toJSON(message: QueryBasketFeeResponse): unknown;
    fromPartial(object: Partial<QueryBasketFeeResponse>): QueryBasketFeeResponse;
    fromAmino(object: QueryBasketFeeResponseAmino): QueryBasketFeeResponse;
    toAmino(message: QueryBasketFeeResponse): QueryBasketFeeResponseAmino;
    fromAminoMsg(object: QueryBasketFeeResponseAminoMsg): QueryBasketFeeResponse;
    fromProtoMsg(message: QueryBasketFeeResponseProtoMsg): QueryBasketFeeResponse;
    toProto(message: QueryBasketFeeResponse): Uint8Array;
    toProtoMsg(message: QueryBasketFeeResponse): QueryBasketFeeResponseProtoMsg;
};
