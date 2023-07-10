import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { AllowedDenom, AllowedDenomAmino, AllowedDenomSDKType } from "./state";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
    /** sell_order_id is the id of the requested sell order. */
    sellOrderId: Long;
}
export interface QuerySellOrderRequestProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest";
    value: Uint8Array;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestAmino {
    /** sell_order_id is the id of the requested sell order. */
    sell_order_id: string;
}
export interface QuerySellOrderRequestAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest";
    value: QuerySellOrderRequestAmino;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestSDKType {
    sell_order_id: Long;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
    /** sell_order contains all information related to a sell order. */
    sellOrder: SellOrderInfo;
}
export interface QuerySellOrderResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse";
    value: Uint8Array;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseAmino {
    /** sell_order contains all information related to a sell order. */
    sell_order?: SellOrderInfoAmino;
}
export interface QuerySellOrderResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse";
    value: QuerySellOrderResponseAmino;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseSDKType {
    sell_order: SellOrderInfoSDKType;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QuerySellOrdersRequestProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest";
    value: Uint8Array;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QuerySellOrdersRequestAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest";
    value: QuerySellOrdersRequestAmino;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QuerySellOrdersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse";
    value: Uint8Array;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseAmino {
    /** sell_orders is a list of sell orders. */
    sell_orders: SellOrderInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QuerySellOrdersResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse";
    value: QuerySellOrdersResponseAmino;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseSDKType {
    sell_orders: SellOrderInfoSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequest {
    /** batch_denom is an ecocredit denom */
    batchDenom: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QuerySellOrdersByBatchRequestProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest";
    value: Uint8Array;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequestAmino {
    /** batch_denom is an ecocredit denom */
    batch_denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QuerySellOrdersByBatchRequestAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest";
    value: QuerySellOrdersByBatchRequestAmino;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequestSDKType {
    batch_denom: string;
    pagination: PageRequestSDKType;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines an optional pagination for the response. */
    pagination: PageResponse;
}
export interface QuerySellOrdersByBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse";
    value: Uint8Array;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponseAmino {
    /** sell_orders is a list of sell orders. */
    sell_orders: SellOrderInfoAmino[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QuerySellOrdersByBatchResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse";
    value: QuerySellOrdersByBatchResponseAmino;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponseSDKType {
    sell_orders: SellOrderInfoSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequest {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QuerySellOrdersBySellerRequestProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest";
    value: Uint8Array;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequestAmino {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QuerySellOrdersBySellerRequestAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest";
    value: QuerySellOrdersBySellerRequestAmino;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequestSDKType {
    seller: string;
    pagination: PageRequestSDKType;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines an optional pagination for the response. */
    pagination: PageResponse;
}
export interface QuerySellOrdersBySellerResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse";
    value: Uint8Array;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponseAmino {
    /** sell_orders is a list of sell orders. */
    sell_orders: SellOrderInfoAmino[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QuerySellOrdersBySellerResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse";
    value: QuerySellOrdersBySellerResponseAmino;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponseSDKType {
    sell_orders: SellOrderInfoSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryAllowedDenomsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest";
    value: Uint8Array;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllowedDenomsRequestAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest";
    value: QueryAllowedDenomsRequestAmino;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponse {
    /**
     * allowed_denoms is a list of coin denoms allowed to use in the ask price of
     * sell orders.
     */
    allowedDenoms: AllowedDenom[];
    /** pagination defines an optional pagination for the response. */
    pagination: PageResponse;
}
export interface QueryAllowedDenomsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse";
    value: Uint8Array;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseAmino {
    /**
     * allowed_denoms is a list of coin denoms allowed to use in the ask price of
     * sell orders.
     */
    allowed_denoms: AllowedDenomAmino[];
    /** pagination defines an optional pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllowedDenomsResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse";
    value: QueryAllowedDenomsResponseAmino;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseSDKType {
    allowed_denoms: AllowedDenomSDKType[];
    pagination: PageResponseSDKType;
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
    expiration: Timestamp;
}
export interface SellOrderInfoProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo";
    value: Uint8Array;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoAmino {
    /** id is the unique ID of sell order. */
    id: string;
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
    expiration?: TimestampAmino;
}
export interface SellOrderInfoAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.SellOrderInfo";
    value: SellOrderInfoAmino;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoSDKType {
    id: Long;
    seller: string;
    batch_denom: string;
    quantity: string;
    ask_denom: string;
    ask_amount: string;
    disable_auto_retire: boolean;
    expiration: TimestampSDKType;
}
export declare const QuerySellOrderRequest: {
    encode(message: QuerySellOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderRequest;
    fromJSON(object: any): QuerySellOrderRequest;
    toJSON(message: QuerySellOrderRequest): unknown;
    fromPartial(object: Partial<QuerySellOrderRequest>): QuerySellOrderRequest;
    fromAmino(object: QuerySellOrderRequestAmino): QuerySellOrderRequest;
    toAmino(message: QuerySellOrderRequest): QuerySellOrderRequestAmino;
    fromAminoMsg(object: QuerySellOrderRequestAminoMsg): QuerySellOrderRequest;
    fromProtoMsg(message: QuerySellOrderRequestProtoMsg): QuerySellOrderRequest;
    toProto(message: QuerySellOrderRequest): Uint8Array;
    toProtoMsg(message: QuerySellOrderRequest): QuerySellOrderRequestProtoMsg;
};
export declare const QuerySellOrderResponse: {
    encode(message: QuerySellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderResponse;
    fromJSON(object: any): QuerySellOrderResponse;
    toJSON(message: QuerySellOrderResponse): unknown;
    fromPartial(object: Partial<QuerySellOrderResponse>): QuerySellOrderResponse;
    fromAmino(object: QuerySellOrderResponseAmino): QuerySellOrderResponse;
    toAmino(message: QuerySellOrderResponse): QuerySellOrderResponseAmino;
    fromAminoMsg(object: QuerySellOrderResponseAminoMsg): QuerySellOrderResponse;
    fromProtoMsg(message: QuerySellOrderResponseProtoMsg): QuerySellOrderResponse;
    toProto(message: QuerySellOrderResponse): Uint8Array;
    toProtoMsg(message: QuerySellOrderResponse): QuerySellOrderResponseProtoMsg;
};
export declare const QuerySellOrdersRequest: {
    encode(message: QuerySellOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersRequest;
    fromJSON(object: any): QuerySellOrdersRequest;
    toJSON(message: QuerySellOrdersRequest): unknown;
    fromPartial(object: Partial<QuerySellOrdersRequest>): QuerySellOrdersRequest;
    fromAmino(object: QuerySellOrdersRequestAmino): QuerySellOrdersRequest;
    toAmino(message: QuerySellOrdersRequest): QuerySellOrdersRequestAmino;
    fromAminoMsg(object: QuerySellOrdersRequestAminoMsg): QuerySellOrdersRequest;
    fromProtoMsg(message: QuerySellOrdersRequestProtoMsg): QuerySellOrdersRequest;
    toProto(message: QuerySellOrdersRequest): Uint8Array;
    toProtoMsg(message: QuerySellOrdersRequest): QuerySellOrdersRequestProtoMsg;
};
export declare const QuerySellOrdersResponse: {
    encode(message: QuerySellOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersResponse;
    fromJSON(object: any): QuerySellOrdersResponse;
    toJSON(message: QuerySellOrdersResponse): unknown;
    fromPartial(object: Partial<QuerySellOrdersResponse>): QuerySellOrdersResponse;
    fromAmino(object: QuerySellOrdersResponseAmino): QuerySellOrdersResponse;
    toAmino(message: QuerySellOrdersResponse): QuerySellOrdersResponseAmino;
    fromAminoMsg(object: QuerySellOrdersResponseAminoMsg): QuerySellOrdersResponse;
    fromProtoMsg(message: QuerySellOrdersResponseProtoMsg): QuerySellOrdersResponse;
    toProto(message: QuerySellOrdersResponse): Uint8Array;
    toProtoMsg(message: QuerySellOrdersResponse): QuerySellOrdersResponseProtoMsg;
};
export declare const QuerySellOrdersByBatchRequest: {
    encode(message: QuerySellOrdersByBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchRequest;
    fromJSON(object: any): QuerySellOrdersByBatchRequest;
    toJSON(message: QuerySellOrdersByBatchRequest): unknown;
    fromPartial(object: Partial<QuerySellOrdersByBatchRequest>): QuerySellOrdersByBatchRequest;
    fromAmino(object: QuerySellOrdersByBatchRequestAmino): QuerySellOrdersByBatchRequest;
    toAmino(message: QuerySellOrdersByBatchRequest): QuerySellOrdersByBatchRequestAmino;
    fromAminoMsg(object: QuerySellOrdersByBatchRequestAminoMsg): QuerySellOrdersByBatchRequest;
    fromProtoMsg(message: QuerySellOrdersByBatchRequestProtoMsg): QuerySellOrdersByBatchRequest;
    toProto(message: QuerySellOrdersByBatchRequest): Uint8Array;
    toProtoMsg(message: QuerySellOrdersByBatchRequest): QuerySellOrdersByBatchRequestProtoMsg;
};
export declare const QuerySellOrdersByBatchResponse: {
    encode(message: QuerySellOrdersByBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchResponse;
    fromJSON(object: any): QuerySellOrdersByBatchResponse;
    toJSON(message: QuerySellOrdersByBatchResponse): unknown;
    fromPartial(object: Partial<QuerySellOrdersByBatchResponse>): QuerySellOrdersByBatchResponse;
    fromAmino(object: QuerySellOrdersByBatchResponseAmino): QuerySellOrdersByBatchResponse;
    toAmino(message: QuerySellOrdersByBatchResponse): QuerySellOrdersByBatchResponseAmino;
    fromAminoMsg(object: QuerySellOrdersByBatchResponseAminoMsg): QuerySellOrdersByBatchResponse;
    fromProtoMsg(message: QuerySellOrdersByBatchResponseProtoMsg): QuerySellOrdersByBatchResponse;
    toProto(message: QuerySellOrdersByBatchResponse): Uint8Array;
    toProtoMsg(message: QuerySellOrdersByBatchResponse): QuerySellOrdersByBatchResponseProtoMsg;
};
export declare const QuerySellOrdersBySellerRequest: {
    encode(message: QuerySellOrdersBySellerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersBySellerRequest;
    fromJSON(object: any): QuerySellOrdersBySellerRequest;
    toJSON(message: QuerySellOrdersBySellerRequest): unknown;
    fromPartial(object: Partial<QuerySellOrdersBySellerRequest>): QuerySellOrdersBySellerRequest;
    fromAmino(object: QuerySellOrdersBySellerRequestAmino): QuerySellOrdersBySellerRequest;
    toAmino(message: QuerySellOrdersBySellerRequest): QuerySellOrdersBySellerRequestAmino;
    fromAminoMsg(object: QuerySellOrdersBySellerRequestAminoMsg): QuerySellOrdersBySellerRequest;
    fromProtoMsg(message: QuerySellOrdersBySellerRequestProtoMsg): QuerySellOrdersBySellerRequest;
    toProto(message: QuerySellOrdersBySellerRequest): Uint8Array;
    toProtoMsg(message: QuerySellOrdersBySellerRequest): QuerySellOrdersBySellerRequestProtoMsg;
};
export declare const QuerySellOrdersBySellerResponse: {
    encode(message: QuerySellOrdersBySellerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersBySellerResponse;
    fromJSON(object: any): QuerySellOrdersBySellerResponse;
    toJSON(message: QuerySellOrdersBySellerResponse): unknown;
    fromPartial(object: Partial<QuerySellOrdersBySellerResponse>): QuerySellOrdersBySellerResponse;
    fromAmino(object: QuerySellOrdersBySellerResponseAmino): QuerySellOrdersBySellerResponse;
    toAmino(message: QuerySellOrdersBySellerResponse): QuerySellOrdersBySellerResponseAmino;
    fromAminoMsg(object: QuerySellOrdersBySellerResponseAminoMsg): QuerySellOrdersBySellerResponse;
    fromProtoMsg(message: QuerySellOrdersBySellerResponseProtoMsg): QuerySellOrdersBySellerResponse;
    toProto(message: QuerySellOrdersBySellerResponse): Uint8Array;
    toProtoMsg(message: QuerySellOrdersBySellerResponse): QuerySellOrdersBySellerResponseProtoMsg;
};
export declare const QueryAllowedDenomsRequest: {
    encode(message: QueryAllowedDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsRequest;
    fromJSON(object: any): QueryAllowedDenomsRequest;
    toJSON(message: QueryAllowedDenomsRequest): unknown;
    fromPartial(object: Partial<QueryAllowedDenomsRequest>): QueryAllowedDenomsRequest;
    fromAmino(object: QueryAllowedDenomsRequestAmino): QueryAllowedDenomsRequest;
    toAmino(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestAmino;
    fromAminoMsg(object: QueryAllowedDenomsRequestAminoMsg): QueryAllowedDenomsRequest;
    fromProtoMsg(message: QueryAllowedDenomsRequestProtoMsg): QueryAllowedDenomsRequest;
    toProto(message: QueryAllowedDenomsRequest): Uint8Array;
    toProtoMsg(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestProtoMsg;
};
export declare const QueryAllowedDenomsResponse: {
    encode(message: QueryAllowedDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsResponse;
    fromJSON(object: any): QueryAllowedDenomsResponse;
    toJSON(message: QueryAllowedDenomsResponse): unknown;
    fromPartial(object: Partial<QueryAllowedDenomsResponse>): QueryAllowedDenomsResponse;
    fromAmino(object: QueryAllowedDenomsResponseAmino): QueryAllowedDenomsResponse;
    toAmino(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseAmino;
    fromAminoMsg(object: QueryAllowedDenomsResponseAminoMsg): QueryAllowedDenomsResponse;
    fromProtoMsg(message: QueryAllowedDenomsResponseProtoMsg): QueryAllowedDenomsResponse;
    toProto(message: QueryAllowedDenomsResponse): Uint8Array;
    toProtoMsg(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseProtoMsg;
};
export declare const SellOrderInfo: {
    encode(message: SellOrderInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderInfo;
    fromJSON(object: any): SellOrderInfo;
    toJSON(message: SellOrderInfo): unknown;
    fromPartial(object: Partial<SellOrderInfo>): SellOrderInfo;
    fromAmino(object: SellOrderInfoAmino): SellOrderInfo;
    toAmino(message: SellOrderInfo): SellOrderInfoAmino;
    fromAminoMsg(object: SellOrderInfoAminoMsg): SellOrderInfo;
    fromProtoMsg(message: SellOrderInfoProtoMsg): SellOrderInfo;
    toProto(message: SellOrderInfo): Uint8Array;
    toProtoMsg(message: SellOrderInfo): SellOrderInfoProtoMsg;
};
