//@ts-nocheck
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.basket = this.basket.bind(this);
    this.baskets = this.baskets.bind(this);
    this.basketBalances = this.basketBalances.bind(this);
    this.basketBalance = this.basketBalance.bind(this);
    this.basketFee = this.basketFee.bind(this);
  }
  basket(request: QueryBasketRequest): Promise<QueryBasketResponse> {
    const data = QueryBasketRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Basket", data);
    return promise.then(data => QueryBasketResponse.decode(new BinaryReader(data)));
  }
  baskets(request: QueryBasketsRequest = {
    pagination: undefined
  }): Promise<QueryBasketsResponse> {
    const data = QueryBasketsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "Baskets", data);
    return promise.then(data => QueryBasketsResponse.decode(new BinaryReader(data)));
  }
  basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse> {
    const data = QueryBasketBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalances", data);
    return promise.then(data => QueryBasketBalancesResponse.decode(new BinaryReader(data)));
  }
  basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse> {
    const data = QueryBasketBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketBalance", data);
    return promise.then(data => QueryBasketBalanceResponse.decode(new BinaryReader(data)));
  }
  basketFee(request: QueryBasketFeeRequest = {}): Promise<QueryBasketFeeResponse> {
    const data = QueryBasketFeeRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.basket.v1.Query", "BasketFee", data);
    return promise.then(data => QueryBasketFeeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    basket(request: QueryBasketRequest): Promise<QueryBasketResponse> {
      return queryService.basket(request);
    },
    baskets(request?: QueryBasketsRequest): Promise<QueryBasketsResponse> {
      return queryService.baskets(request);
    },
    basketBalances(request: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponse> {
      return queryService.basketBalances(request);
    },
    basketBalance(request: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponse> {
      return queryService.basketBalance(request);
    },
    basketFee(request?: QueryBasketFeeRequest): Promise<QueryBasketFeeResponse> {
      return queryService.basketFee(request);
    }
  };
};