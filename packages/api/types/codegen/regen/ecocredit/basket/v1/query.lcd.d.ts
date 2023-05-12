import { LCDClient } from "@osmonauts/lcd";
import { QueryBasketRequest, QueryBasketResponseSDKType, QueryBasketsRequest, QueryBasketsResponseSDKType, QueryBasketBalancesRequest, QueryBasketBalancesResponseSDKType, QueryBasketBalanceRequest, QueryBasketBalanceResponseSDKType, QueryBasketFeeRequest, QueryBasketFeeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    basket(params: QueryBasketRequest): Promise<QueryBasketResponseSDKType>;
    baskets(params?: QueryBasketsRequest): Promise<QueryBasketsResponseSDKType>;
    basketBalances(params: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponseSDKType>;
    basketBalance(params: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponseSDKType>;
    basketFee(_params?: QueryBasketFeeRequest): Promise<QueryBasketFeeResponseSDKType>;
}
