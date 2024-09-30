import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySellOrderRequest, QuerySellOrderResponse, QuerySellOrdersRequest, QuerySellOrdersResponse, QuerySellOrdersByBatchRequest, QuerySellOrdersByBatchResponse, QuerySellOrdersBySellerRequest, QuerySellOrdersBySellerResponse, QueryAllowedDenomsRequest, QueryAllowedDenomsResponse } from "./query";
export class QueryClientImpl {
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
        const data = QuerySellOrderRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrder", data);
        return promise.then(data => QuerySellOrderResponse.decode(new BinaryReader(data)));
    }
    sellOrders(request = {
        pagination: undefined
    }) {
        const data = QuerySellOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrders", data);
        return promise.then(data => QuerySellOrdersResponse.decode(new BinaryReader(data)));
    }
    sellOrdersByBatch(request) {
        const data = QuerySellOrdersByBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByBatch", data);
        return promise.then(data => QuerySellOrdersByBatchResponse.decode(new BinaryReader(data)));
    }
    sellOrdersBySeller(request) {
        const data = QuerySellOrdersBySellerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersBySeller", data);
        return promise.then(data => QuerySellOrdersBySellerResponse.decode(new BinaryReader(data)));
    }
    allowedDenoms(request = {
        pagination: undefined
    }) {
        const data = QueryAllowedDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "AllowedDenoms", data);
        return promise.then(data => QueryAllowedDenomsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
