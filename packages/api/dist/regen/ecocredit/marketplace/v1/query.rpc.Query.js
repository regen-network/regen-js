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
        this.sellOrder = this.sellOrder.bind(this);
        this.sellOrders = this.sellOrders.bind(this);
        this.sellOrdersByBatch = this.sellOrdersByBatch.bind(this);
        this.sellOrdersBySeller = this.sellOrdersBySeller.bind(this);
        this.allowedDenoms = this.allowedDenoms.bind(this);
    }
    sellOrder(request) {
        const data = query_1.QuerySellOrderRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrder", data);
        return promise.then(data => query_1.QuerySellOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    sellOrders(request = {
        pagination: undefined
    }) {
        const data = query_1.QuerySellOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrders", data);
        return promise.then(data => query_1.QuerySellOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    sellOrdersByBatch(request) {
        const data = query_1.QuerySellOrdersByBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByBatch", data);
        return promise.then(data => query_1.QuerySellOrdersByBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    sellOrdersBySeller(request) {
        const data = query_1.QuerySellOrdersBySellerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersBySeller", data);
        return promise.then(data => query_1.QuerySellOrdersBySellerResponse.decode(new binary_1.BinaryReader(data)));
    }
    allowedDenoms(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllowedDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "AllowedDenoms", data);
        return promise.then(data => query_1.QueryAllowedDenomsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        sellOrder(request) {
            return queryService.sellOrder(request);
        },
        sellOrders(request) {
            return queryService.sellOrders(request);
        },
        sellOrdersByBatch(request) {
            return queryService.sellOrdersByBatch(request);
        },
        sellOrdersBySeller(request) {
            return queryService.sellOrdersBySeller(request);
        },
        allowedDenoms(request) {
            return queryService.allowedDenoms(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
