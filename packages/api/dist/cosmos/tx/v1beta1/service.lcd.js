"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.getTx = this.getTx.bind(this);
        this.getTxsEvent = this.getTxsEvent.bind(this);
        this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    }
    /* GetTx fetches a tx by hash. */
    async getTx(params) {
        const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
        return await this.req.get(endpoint);
    }
    /* GetTxsEvent fetches txs by event. */
    async getTxsEvent(params) {
        const options = {
            params: {}
        };
        if (typeof params?.events !== "undefined") {
            options.params.events = params.events;
        }
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        if (typeof params?.orderBy !== "undefined") {
            options.params.order_by = params.orderBy;
        }
        if (typeof params?.page !== "undefined") {
            options.params.page = params.page;
        }
        if (typeof params?.limit !== "undefined") {
            options.params.limit = params.limit;
        }
        const endpoint = `cosmos/tx/v1beta1/txs`;
        return await this.req.get(endpoint, options);
    }
    /* GetBlockWithTxs fetches a block with decoded txs.
    
     Since: cosmos-sdk 0.45.2 */
    async getBlockWithTxs(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
