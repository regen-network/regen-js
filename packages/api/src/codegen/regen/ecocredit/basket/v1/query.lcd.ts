import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBasketRequest, QueryBasketResponseSDKType, QueryBasketsRequest, QueryBasketsResponseSDKType, QueryBasketBalancesRequest, QueryBasketBalancesResponseSDKType, QueryBasketBalanceRequest, QueryBasketBalanceResponseSDKType, QueryBasketFeeRequest, QueryBasketFeeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.basket = this.basket.bind(this);
    this.baskets = this.baskets.bind(this);
    this.basketBalances = this.basketBalances.bind(this);
    this.basketBalance = this.basketBalance.bind(this);
    this.basketFee = this.basketFee.bind(this);
  }
  /* Basket queries one basket by denom. */


  async basket(params: QueryBasketRequest): Promise<QueryBasketResponseSDKType> {
    const endpoint = `regen/ecocredit/basket/v1/basket/${params.basketDenom}`;
    return await this.req.get<QueryBasketResponseSDKType>(endpoint);
  }
  /* Baskets lists all baskets in the ecocredit module. */


  async baskets(params: QueryBasketsRequest = {
    pagination: undefined
  }): Promise<QueryBasketsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `regen/ecocredit/basket/v1/baskets`;
    return await this.req.get<QueryBasketsResponseSDKType>(endpoint, options);
  }
  /* BasketBalances lists the balance of each credit batch in the basket. */


  async basketBalances(params: QueryBasketBalancesRequest): Promise<QueryBasketBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `regen/ecocredit/basket/v1/basket-balances/${params.basketDenom}`;
    return await this.req.get<QueryBasketBalancesResponseSDKType>(endpoint, options);
  }
  /* BasketBalance queries the balance of a specific credit batch in the basket. */


  async basketBalance(params: QueryBasketBalanceRequest): Promise<QueryBasketBalanceResponseSDKType> {
    const endpoint = `regen/ecocredit/basket/v1/basket-balance/${params.basketDenom}/${params.batchDenom}`;
    return await this.req.get<QueryBasketBalanceResponseSDKType>(endpoint);
  }
  /* BasketFee returns the basket creation fee. If not set, a basket creation
   fee is not required.
  
   Since Revision 2 */


  async basketFee(_params: QueryBasketFeeRequest = {}): Promise<QueryBasketFeeResponseSDKType> {
    const endpoint = `regen/ecocredit/basket/v1/basket-fee`;
    return await this.req.get<QueryBasketFeeResponseSDKType>(endpoint);
  }

}