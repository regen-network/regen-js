import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassInfoRequest, QueryClassInfoResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchInfoRequest, QueryBatchInfoResponse, QueryBalanceRequest, QueryBalanceResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Msg is the regen.ecocredit.v1alpha1 Query service. */
export interface Query {
    /** Classes queries for all credit classes with pagination. */
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    /** ClassInfo queries for information on a credit class. */
    classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
    /** Batches queries for all batches in the given credit class with pagination. */
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    /** BatchInfo queries for information on a credit batch. */
    batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Supply queries the tradable and retired supply of a credit batch. */
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    /** Params queries the ecocredit module parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
