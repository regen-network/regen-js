import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBasketRequest, QueryBasketResponse, QueryBasketsRequest, QueryBasketsResponse, QueryBasketBalancesRequest, QueryBasketBalancesResponse, QueryBasketBalanceRequest, QueryBasketBalanceResponse, QueryBasketFeeRequest, QueryBasketFeeResponse } from "./query";
/** Msg is the regen.ecocredit.basket.v1 Query service. */
export interface Query {
    /** Basket queries one basket by denom. */
    basket(request: QueryBasketRequest): Promise<QueryBasketResponse>;
    /** Baskets lists all baskets in the ecocredit module. */
    baskets(request?: QueryBasketsRequest): Promise<QueryBasketsResponse>;
    /** BasketBalances lists the balance of each credit batch in the basket. */
    basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse>;
    /** BasketBalance queries the balance of a specific credit batch in the basket. */
    basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse>;
    /**
     * BasketFee returns the basket creation fee. If not set, a basket creation
     * fee is not required.
     *
     * Since Revision 2
     */
    basketFee(request?: QueryBasketFeeRequest): Promise<QueryBasketFeeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    basket(request: QueryBasketRequest): Promise<QueryBasketResponse>;
    baskets(request?: QueryBasketsRequest): Promise<QueryBasketsResponse>;
    basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse>;
    basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse>;
    basketFee(request?: QueryBasketFeeRequest): Promise<QueryBasketFeeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    basket(request: QueryBasketRequest): Promise<QueryBasketResponse>;
    baskets(request?: QueryBasketsRequest): Promise<QueryBasketsResponse>;
    basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse>;
    basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse>;
    basketFee(request?: QueryBasketFeeRequest): Promise<QueryBasketFeeResponse>;
};
