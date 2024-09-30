//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.balance = this.balance.bind(this);
        this.allBalances = this.allBalances.bind(this);
        this.spendableBalances = this.spendableBalances.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.params = this.params.bind(this);
        this.denomMetadata = this.denomMetadata.bind(this);
        this.denomsMetadata = this.denomsMetadata.bind(this);
        this.denomOwners = this.denomOwners.bind(this);
    }
    /* Balance queries the balance of a single coin for a single account. */
    async balance(params) {
        const options = {
            params: {}
        };
        if (typeof params?.denom !== "undefined") {
            options.params.denom = params.denom;
        }
        const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
        return await this.req.get(endpoint, options);
    }
    /* AllBalances queries the balance of all coins for a single account. */
    async allBalances(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
        return await this.req.get(endpoint, options);
    }
    /* SpendableBalances queries the spenable balance of all coins for a single
     account.
    
     Since: cosmos-sdk 0.46 */
    async spendableBalances(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
        return await this.req.get(endpoint, options);
    }
    /* TotalSupply queries the total supply of all coins. */
    async totalSupply(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/bank/v1beta1/supply`;
        return await this.req.get(endpoint, options);
    }
    /* SupplyOf queries the supply of a single coin. */
    async supplyOf(params) {
        const options = {
            params: {}
        };
        if (typeof params?.denom !== "undefined") {
            options.params.denom = params.denom;
        }
        const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
        return await this.req.get(endpoint, options);
    }
    /* Params queries the parameters of x/bank module. */
    async params(_params = {}) {
        const endpoint = `cosmos/bank/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* DenomsMetadata queries the client metadata of a given coin denomination. */
    async denomMetadata(params) {
        const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
        return await this.req.get(endpoint);
    }
    /* DenomsMetadata queries the client metadata for all registered coin
     denominations. */
    async denomsMetadata(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
        return await this.req.get(endpoint, options);
    }
    /* DenomOwners queries for all account addresses that own a particular token
     denomination.
    
     Since: cosmos-sdk 0.46 */
    async denomOwners(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
        return await this.req.get(endpoint, options);
    }
}
