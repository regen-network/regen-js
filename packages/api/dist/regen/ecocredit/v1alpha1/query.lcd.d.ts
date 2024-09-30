import { LCDClient } from "@cosmology/lcd";
import { QueryClassesRequest, QueryClassesResponseSDKType, QueryClassInfoRequest, QueryClassInfoResponseSDKType, QueryBatchesRequest, QueryBatchesResponseSDKType, QueryBatchInfoRequest, QueryBatchInfoResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryCreditTypesRequest, QueryCreditTypesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    classes(params?: QueryClassesRequest): Promise<QueryClassesResponseSDKType>;
    classInfo(params: QueryClassInfoRequest): Promise<QueryClassInfoResponseSDKType>;
    batches(params: QueryBatchesRequest): Promise<QueryBatchesResponseSDKType>;
    batchInfo(params: QueryBatchInfoRequest): Promise<QueryBatchInfoResponseSDKType>;
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    creditTypes(_params?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
