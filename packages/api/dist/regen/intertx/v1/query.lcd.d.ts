import { LCDClient } from "@cosmology/lcd";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    interchainAccount(params: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponseSDKType>;
}
