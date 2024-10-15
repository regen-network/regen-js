//@ts-nocheck
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sellOrder = this.sellOrder.bind(this);
    this.sellOrders = this.sellOrders.bind(this);
    this.sellOrdersByBatch = this.sellOrdersByBatch.bind(this);
    this.sellOrdersBySeller = this.sellOrdersBySeller.bind(this);
    this.allowedDenoms = this.allowedDenoms.bind(this);
  }
  sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse> {
    const data = QuerySellOrderRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrder", data);
    return promise.then(data => QuerySellOrderResponse.decode(new BinaryReader(data)));
  }
  sellOrders(request: QuerySellOrdersRequest = {
    pagination: undefined
  }): Promise<QuerySellOrdersResponse> {
    const data = QuerySellOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrders", data);
    return promise.then(data => QuerySellOrdersResponse.decode(new BinaryReader(data)));
  }
  sellOrdersByBatch(request: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponse> {
    const data = QuerySellOrdersByBatchRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersByBatch", data);
    return promise.then(data => QuerySellOrdersByBatchResponse.decode(new BinaryReader(data)));
  }
  sellOrdersBySeller(request: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponse> {
    const data = QuerySellOrdersBySellerRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "SellOrdersBySeller", data);
    return promise.then(data => QuerySellOrdersBySellerResponse.decode(new BinaryReader(data)));
  }
  allowedDenoms(request: QueryAllowedDenomsRequest = {
    pagination: undefined
  }): Promise<QueryAllowedDenomsResponse> {
    const data = QueryAllowedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Query", "AllowedDenoms", data);
    return promise.then(data => QueryAllowedDenomsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse> {
      return queryService.sellOrder(request);
    },
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse> {
      return queryService.sellOrders(request);
    },
    sellOrdersByBatch(request: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponse> {
      return queryService.sellOrdersByBatch(request);
    },
    sellOrdersBySeller(request: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponse> {
      return queryService.sellOrdersBySeller(request);
    },
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse> {
      return queryService.allowedDenoms(request);
    }
  };
};