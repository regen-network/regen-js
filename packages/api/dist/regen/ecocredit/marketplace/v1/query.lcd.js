"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.sellOrder = this.sellOrder.bind(this);
        this.sellOrders = this.sellOrders.bind(this);
        this.sellOrdersByBatch = this.sellOrdersByBatch.bind(this);
        this.sellOrdersBySeller = this.sellOrdersBySeller.bind(this);
        this.allowedDenoms = this.allowedDenoms.bind(this);
    }
    /* SellOrder queries a sell order by its unique identifier. */
    async sellOrder(params) {
        const endpoint = `regen/ecocredit/marketplace/v1/sell-order/${params.sellOrderId}`;
        return await this.req.get(endpoint);
    }
    /* SellOrders queries a paginated list of all sell orders. */
    async sellOrders(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/marketplace/v1/sell-orders`;
        return await this.req.get(endpoint, options);
    }
    /* SellOrdersByBatch queries a paginated list of all sell orders based on
     the batch denom of the credits being sold. */
    async sellOrdersByBatch(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/marketplace/v1/sell-orders-by-batch/${params.batchDenom}`;
        return await this.req.get(endpoint, options);
    }
    /* SellOrdersBySeller queries a paginated list of all sell orders based on the
     account address of the seller. */
    async sellOrdersBySeller(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/marketplace/v1/sell-orders-by-seller/${params.seller}`;
        return await this.req.get(endpoint, options);
    }
    /* AllowedDenoms queries a paginated list of all bank denoms allowed to be
     used in the marketplace. */
    async allowedDenoms(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/marketplace/v1/allowed-denoms`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
