"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryBasketRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Basket", data);
        return promise.then(data => query_1.QueryBasketResponse.decode(new binary_1.BinaryReader(data)));
    }
    baskets(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryBasketsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Baskets", data);
        return promise.then(data => query_1.QueryBasketsResponse.decode(new binary_1.BinaryReader(data)));
    }
    basketBalances(request) {
        const data = query_1.QueryBasketBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalances", data);
        return promise.then(data => query_1.QueryBasketBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    basketBalance(request) {
        const data = query_1.QueryBasketBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalance", data);
        return promise.then(data => query_1.QueryBasketBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    basketFee(request = {}) {
        const data = query_1.QueryBasketFeeRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketFee", data);
        return promise.then(data => query_1.QueryBasketFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
