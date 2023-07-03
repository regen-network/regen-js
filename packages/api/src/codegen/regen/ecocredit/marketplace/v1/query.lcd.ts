import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QuerySellOrderRequest, QuerySellOrderResponseSDKType, QuerySellOrdersRequest, QuerySellOrdersResponseSDKType, QuerySellOrdersByBatchRequest, QuerySellOrdersByBatchResponseSDKType, QuerySellOrdersBySellerRequest, QuerySellOrdersBySellerResponseSDKType, QueryAllowedDenomsRequest, QueryAllowedDenomsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.sellOrder = this.sellOrder.bind(this);
    this.sellOrders = this.sellOrders.bind(this);
    this.sellOrdersByBatch = this.sellOrdersByBatch.bind(this);
    this.sellOrdersBySeller = this.sellOrdersBySeller.bind(this);
    this.allowedDenoms = this.allowedDenoms.bind(this);
  }
  /* SellOrder queries a sell order by its unique identifier. */
  async sellOrder(params: QuerySellOrderRequest): Promise<QuerySellOrderResponseSDKType> {
    const endpoint = `regen/ecocredit/marketplace/v1/sell-order/${params.sellOrderId}`;
    return await this.req.get<QuerySellOrderResponseSDKType>(endpoint);
  }
  /* SellOrders queries a paginated list of all sell orders. */
  async sellOrders(params: QuerySellOrdersRequest = {
    pagination: undefined
  }): Promise<QuerySellOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/marketplace/v1/sell-orders`;
    return await this.req.get<QuerySellOrdersResponseSDKType>(endpoint, options);
  }
  /* SellOrdersByBatch queries a paginated list of all sell orders based on
   the batch denom of the credits being sold. */
  async sellOrdersByBatch(params: QuerySellOrdersByBatchRequest): Promise<QuerySellOrdersByBatchResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/marketplace/v1/sell-orders-by-batch/${params.batchDenom}`;
    return await this.req.get<QuerySellOrdersByBatchResponseSDKType>(endpoint, options);
  }
  /* SellOrdersBySeller queries a paginated list of all sell orders based on the
   account address of the seller. */
  async sellOrdersBySeller(params: QuerySellOrdersBySellerRequest): Promise<QuerySellOrdersBySellerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/marketplace/v1/sell-orders-by-seller/${params.seller}`;
    return await this.req.get<QuerySellOrdersBySellerResponseSDKType>(endpoint, options);
  }
  /* AllowedDenoms queries a paginated list of all bank denoms allowed to be
   used in the marketplace. */
  async allowedDenoms(params: QueryAllowedDenomsRequest = {
    pagination: undefined
  }): Promise<QueryAllowedDenomsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/marketplace/v1/allowed-denoms`;
    return await this.req.get<QueryAllowedDenomsResponseSDKType>(endpoint, options);
  }
}