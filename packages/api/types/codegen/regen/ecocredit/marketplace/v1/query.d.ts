import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { AllowedDenom, AllowedDenomSDKType } from "./state";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
    /** sell_order_id is the id of the requested sell order. */
    sellOrderId: Long;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestSDKType {
    /** sell_order_id is the id of the requested sell order. */
    sell_order_id: Long;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
    /** sell_order contains all information related to a sell order. */
    sellOrder?: SellOrderInfo;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseSDKType {
    /** sell_order contains all information related to a sell order. */
    sell_order?: SellOrderInfoSDKType;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseSDKType {
    /** sell_orders is a list of sell orders. */
    sell_orders: SellOrderInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequest {
    /** batch_denom is an ecocredit denom */
    batchDenom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequestSDKType {
    /** batch_denom is an ecocredit denom */
    batch_denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponse;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponseSDKType {
    /** sell_orders is a list of sell orders. */
    sell_orders: SellOrderInfoSDKType[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequest {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequestSDKType {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponse;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponseSDKType {
    /** sell_orders is a list of sell orders. */
    sell_orders: SellOrderInfoSDKType[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponseSDKType;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponse {
    /**
     * allowed_denoms is a list of coin denoms allowed to use in the ask price of
     * sell orders.
     */
    allowedDenoms: AllowedDenom[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponse;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseSDKType {
    /**
     * allowed_denoms is a list of coin denoms allowed to use in the ask price of
     * sell orders.
     */
    allowed_denoms: AllowedDenomSDKType[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponseSDKType;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfo {
    /** id is the unique ID of sell order. */
    id: Long;
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** batch_denom is denom of the credit batch being sold. */
    batchDenom: string;
    /** quantity is the decimal quantity of credits being sold. */
    quantity: string;
    /** ask_denom is the denom used in the ask price of the sell order. */
    askDenom: string;
    /**
     * ask_amount is the amount that the seller is asking for each credit unit of
     * the batch. Each credit unit of the batch will be sold for at least the
     * ask_amount.
     */
    askAmount: string;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disableAutoRetire: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: Timestamp;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoSDKType {
    /** id is the unique ID of sell order. */
    id: Long;
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** batch_denom is denom of the credit batch being sold. */
    batch_denom: string;
    /** quantity is the decimal quantity of credits being sold. */
    quantity: string;
    /** ask_denom is the denom used in the ask price of the sell order. */
    ask_denom: string;
    /**
     * ask_amount is the amount that the seller is asking for each credit unit of
     * the batch. Each credit unit of the batch will be sold for at least the
     * ask_amount.
     */
    ask_amount: string;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disable_auto_retire: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: TimestampSDKType;
}
export declare const QuerySellOrderRequest: {
    encode(message: QuerySellOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderRequest;
    fromJSON(object: any): QuerySellOrderRequest;
    toJSON(message: QuerySellOrderRequest): unknown;
    fromPartial(object: Partial<QuerySellOrderRequest>): QuerySellOrderRequest;
};
export declare const QuerySellOrderResponse: {
    encode(message: QuerySellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderResponse;
    fromJSON(object: any): QuerySellOrderResponse;
    toJSON(message: QuerySellOrderResponse): unknown;
    fromPartial(object: Partial<QuerySellOrderResponse>): QuerySellOrderResponse;
};
export declare const QuerySellOrdersRequest: {
    encode(message: QuerySellOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersRequest;
    fromJSON(object: any): QuerySellOrdersRequest;
    toJSON(message: QuerySellOrdersRequest): unknown;
    fromPartial(object: Partial<QuerySellOrdersRequest>): QuerySellOrdersRequest;
};
export declare const QuerySellOrdersResponse: {
    encode(message: QuerySellOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersResponse;
    fromJSON(object: any): QuerySellOrdersResponse;
    toJSON(message: QuerySellOrdersResponse): unknown;
    fromPartial(object: Partial<QuerySellOrdersResponse>): QuerySellOrdersResponse;
};
export declare const QuerySellOrdersByBatchRequest: {
    encode(message: QuerySellOrdersByBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchRequest;
    fromJSON(object: any): QuerySellOrdersByBatchRequest;
    toJSON(message: QuerySellOrdersByBatchRequest): unknown;
    fromPartial(object: Partial<QuerySellOrdersByBatchRequest>): QuerySellOrdersByBatchRequest;
};
export declare const QuerySellOrdersByBatchResponse: {
    encode(message: QuerySellOrdersByBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchResponse;
    fromJSON(object: any): QuerySellOrdersByBatchResponse;
    toJSON(message: QuerySellOrdersByBatchResponse): unknown;
    fromPartial(object: Partial<QuerySellOrdersByBatchResponse>): QuerySellOrdersByBatchResponse;
};
export declare const QuerySellOrdersBySellerRequest: {
    encode(message: QuerySellOrdersBySellerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersBySellerRequest;
    fromJSON(object: any): QuerySellOrdersBySellerRequest;
    toJSON(message: QuerySellOrdersBySellerRequest): unknown;
    fromPartial(object: Partial<QuerySellOrdersBySellerRequest>): QuerySellOrdersBySellerRequest;
};
export declare const QuerySellOrdersBySellerResponse: {
    encode(message: QuerySellOrdersBySellerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersBySellerResponse;
    fromJSON(object: any): QuerySellOrdersBySellerResponse;
    toJSON(message: QuerySellOrdersBySellerResponse): unknown;
    fromPartial(object: Partial<QuerySellOrdersBySellerResponse>): QuerySellOrdersBySellerResponse;
};
export declare const QueryAllowedDenomsRequest: {
    encode(message: QueryAllowedDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsRequest;
    fromJSON(object: any): QueryAllowedDenomsRequest;
    toJSON(message: QueryAllowedDenomsRequest): unknown;
    fromPartial(object: Partial<QueryAllowedDenomsRequest>): QueryAllowedDenomsRequest;
};
export declare const QueryAllowedDenomsResponse: {
    encode(message: QueryAllowedDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsResponse;
    fromJSON(object: any): QueryAllowedDenomsResponse;
    toJSON(message: QueryAllowedDenomsResponse): unknown;
    fromPartial(object: Partial<QueryAllowedDenomsResponse>): QueryAllowedDenomsResponse;
};
export declare const SellOrderInfo: {
    encode(message: SellOrderInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderInfo;
    fromJSON(object: any): SellOrderInfo;
    toJSON(message: SellOrderInfo): unknown;
    fromPartial(object: Partial<SellOrderInfo>): SellOrderInfo;
};
