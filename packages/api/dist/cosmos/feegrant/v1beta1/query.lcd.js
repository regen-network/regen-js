"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.allowance = this.allowance.bind(this);
        this.allowances = this.allowances.bind(this);
        this.allowancesByGranter = this.allowancesByGranter.bind(this);
    }
    /* Allowance returns fee granted to the grantee by the granter. */
    async allowance(params) {
        const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
        return await this.req.get(endpoint);
    }
    /* Allowances returns all the grants for address. */
    async allowances(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
        return await this.req.get(endpoint, options);
    }
    /* AllowancesByGranter returns all the grants given by an address
    
     Since: cosmos-sdk 0.46 */
    async allowancesByGranter(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
