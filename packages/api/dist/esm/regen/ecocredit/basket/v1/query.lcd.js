//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.basket = this.basket.bind(this);
        this.baskets = this.baskets.bind(this);
        this.basketBalances = this.basketBalances.bind(this);
        this.basketBalance = this.basketBalance.bind(this);
        this.basketFee = this.basketFee.bind(this);
    }
    /* Basket queries one basket by denom. */
    async basket(params) {
        const endpoint = `regen/ecocredit/basket/v1/basket/${params.basketDenom}`;
        return await this.req.get(endpoint);
    }
    /* Baskets lists all baskets in the ecocredit module. */
    async baskets(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/basket/v1/baskets`;
        return await this.req.get(endpoint, options);
    }
    /* BasketBalances lists the balance of each credit batch in the basket. */
    async basketBalances(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/basket/v1/basket-balances/${params.basketDenom}`;
        return await this.req.get(endpoint, options);
    }
    /* BasketBalance queries the balance of a specific credit batch in the basket. */
    async basketBalance(params) {
        const endpoint = `regen/ecocredit/basket/v1/basket-balance/${params.basketDenom}/${params.batchDenom}`;
        return await this.req.get(endpoint);
    }
    /* BasketFee returns the basket creation fee. If not set, a basket creation
     fee is not required.
    
     Since Revision 2 */
    async basketFee(_params = {}) {
        const endpoint = `regen/ecocredit/basket/v1/basket-fee`;
        return await this.req.get(endpoint);
    }
}
