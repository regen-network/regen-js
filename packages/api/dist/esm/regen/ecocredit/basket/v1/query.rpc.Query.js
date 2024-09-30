import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBasketRequest, QueryBasketResponse, QueryBasketsRequest, QueryBasketsResponse, QueryBasketBalancesRequest, QueryBasketBalancesResponse, QueryBasketBalanceRequest, QueryBasketBalanceResponse, QueryBasketFeeRequest, QueryBasketFeeResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.basket = this.basket.bind(this);
        this.baskets = this.baskets.bind(this);
        this.basketBalances = this.basketBalances.bind(this);
        this.basketBalance = this.basketBalance.bind(this);
        this.basketFee = this.basketFee.bind(this);
    }
    basket(request) {
        const data = QueryBasketRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Basket", data);
        return promise.then(data => QueryBasketResponse.decode(new BinaryReader(data)));
    }
    baskets(request = {
        pagination: undefined
    }) {
        const data = QueryBasketsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Baskets", data);
        return promise.then(data => QueryBasketsResponse.decode(new BinaryReader(data)));
    }
    basketBalances(request) {
        const data = QueryBasketBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalances", data);
        return promise.then(data => QueryBasketBalancesResponse.decode(new BinaryReader(data)));
    }
    basketBalance(request) {
        const data = QueryBasketBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalance", data);
        return promise.then(data => QueryBasketBalanceResponse.decode(new BinaryReader(data)));
    }
    basketFee(request = {}) {
        const data = QueryBasketFeeRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketFee", data);
        return promise.then(data => QueryBasketFeeResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        basket(request) {
            return queryService.basket(request);
        },
        baskets(request) {
            return queryService.baskets(request);
        },
        basketBalances(request) {
            return queryService.basketBalances(request);
        },
        basketBalance(request) {
            return queryService.basketBalance(request);
        },
        basketFee(request) {
            return queryService.basketFee(request);
        }
    };
};
