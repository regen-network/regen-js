import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySellOrderRequest, QuerySellOrderResponse, QuerySellOrdersRequest, QuerySellOrdersResponse, QuerySellOrdersByBatchRequest, QuerySellOrdersByBatchResponse, QuerySellOrdersBySellerRequest, QuerySellOrdersBySellerResponse, QueryAllowedDenomsRequest, QueryAllowedDenomsResponse } from "./query";
/** Msg is the regen.ecocredit.marketplace.v1 Query service. */
export interface Query {
    /** SellOrder queries a sell order by its unique identifier. */
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
    /** SellOrders queries a paginated list of all sell orders. */
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
    /**
     * SellOrdersByBatch queries a paginated list of all sell orders based on
     * the batch denom of the credits being sold.
     */
    sellOrdersByBatch(request: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponse>;
    /**
     * SellOrdersBySeller queries a paginated list of all sell orders based on the
     * account address of the seller.
     */
    sellOrdersBySeller(request: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponse>;
    /**
     * AllowedDenoms queries a paginated list of all bank denoms allowed to be
     * used in the marketplace.
     */
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
    sellOrdersByBatch(request: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponse>;
    sellOrdersBySeller(request: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponse>;
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
    sellOrdersByBatch(request: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponse>;
    sellOrdersBySeller(request: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponse>;
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
};
