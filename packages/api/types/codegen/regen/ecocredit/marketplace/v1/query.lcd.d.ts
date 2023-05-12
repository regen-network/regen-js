import { LCDClient } from "@osmonauts/lcd";
import { QuerySellOrderRequest, QuerySellOrderResponseSDKType, QuerySellOrdersRequest, QuerySellOrdersResponseSDKType, QuerySellOrdersByBatchRequest, QuerySellOrdersByBatchResponseSDKType, QuerySellOrdersBySellerRequest, QuerySellOrdersBySellerResponseSDKType, QueryAllowedDenomsRequest, QueryAllowedDenomsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    sellOrder(params: QuerySellOrderRequest): Promise<QuerySellOrderResponseSDKType>;
    sellOrders(params?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponseSDKType>;
    sellOrdersByBatch(params: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponseSDKType>;
    sellOrdersBySeller(params: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponseSDKType>;
    allowedDenoms(params?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponseSDKType>;
}
