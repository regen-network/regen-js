import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * QueryInterchainAccount returns the interchain account for given owner
     * address on a given connection pair
     */
    interchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    interchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    interchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
};
