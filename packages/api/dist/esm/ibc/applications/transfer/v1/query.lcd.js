//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.denomTrace = this.denomTrace.bind(this);
        this.denomTraces = this.denomTraces.bind(this);
        this.params = this.params.bind(this);
        this.denomHash = this.denomHash.bind(this);
        this.escrowAddress = this.escrowAddress.bind(this);
    }
    /* DenomTrace queries a denomination trace information. */
    async denomTrace(params) {
        const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
        return await this.req.get(endpoint);
    }
    /* DenomTraces queries all denomination traces. */
    async denomTraces(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `ibc/apps/transfer/v1/denom_traces`;
        return await this.req.get(endpoint, options);
    }
    /* Params queries all parameters of the ibc-transfer module. */
    async params(_params = {}) {
        const endpoint = `ibc/apps/transfer/v1/params`;
        return await this.req.get(endpoint);
    }
    /* DenomHash queries a denomination hash information. */
    async denomHash(params) {
        const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
        return await this.req.get(endpoint);
    }
    /* EscrowAddress returns the escrow address for a particular port and channel id. */
    async escrowAddress(params) {
        const endpoint = `ibc/apps/transfer/v1/channels/${params.channelId}/ports/${params.portId}/escrow_address`;
        return await this.req.get(endpoint);
    }
}
