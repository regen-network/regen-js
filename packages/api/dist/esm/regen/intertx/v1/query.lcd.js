export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.interchainAccount = this.interchainAccount.bind(this);
    }
    /* QueryInterchainAccount returns the interchain account for given owner
     address on a given connection pair */
    async interchainAccount(params) {
        const endpoint = `regen/intertx/v1/interchain-account/${params.owner}/${params.connectionId}`;
        return await this.req.get(endpoint);
    }
}
