import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.interchainAccount = this.interchainAccount.bind(this);
    }
    interchainAccount(request) {
        const data = QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("regen.intertx.v1.Query", "InterchainAccount", data);
        return promise.then(data => QueryInterchainAccountResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        interchainAccount(request) {
            return queryService.interchainAccount(request);
        }
    };
};
