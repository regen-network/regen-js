import { LCDClient } from "@cosmology/lcd";
import { QueryClassesRequest, QueryClassesResponseSDKType, QueryClassesByAdminRequest, QueryClassesByAdminResponseSDKType, QueryClassRequest, QueryClassResponseSDKType, QueryClassIssuersRequest, QueryClassIssuersResponseSDKType, QueryProjectsRequest, QueryProjectsResponseSDKType, QueryProjectsByClassRequest, QueryProjectsByClassResponseSDKType, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponseSDKType, QueryProjectsByAdminRequest, QueryProjectsByAdminResponseSDKType, QueryProjectRequest, QueryProjectResponseSDKType, QueryBatchesRequest, QueryBatchesResponseSDKType, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponseSDKType, QueryBatchesByClassRequest, QueryBatchesByClassResponseSDKType, QueryBatchesByProjectRequest, QueryBatchesByProjectResponseSDKType, QueryBatchRequest, QueryBatchResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QueryBalancesRequest, QueryBalancesResponseSDKType, QueryBalancesByBatchRequest, QueryBalancesByBatchResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryCreditTypesRequest, QueryCreditTypesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryCreditTypeRequest, QueryCreditTypeResponseSDKType, QueryClassCreatorAllowlistRequest, QueryClassCreatorAllowlistResponseSDKType, QueryAllowedClassCreatorsRequest, QueryAllowedClassCreatorsResponseSDKType, QueryClassFeeRequest, QueryClassFeeResponseSDKType, QueryAllowedBridgeChainsRequest, QueryAllowedBridgeChainsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    classes(params?: QueryClassesRequest): Promise<QueryClassesResponseSDKType>;
    classesByAdmin(params: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponseSDKType>;
    class(params: QueryClassRequest): Promise<QueryClassResponseSDKType>;
    classIssuers(params: QueryClassIssuersRequest): Promise<QueryClassIssuersResponseSDKType>;
    projects(params?: QueryProjectsRequest): Promise<QueryProjectsResponseSDKType>;
    projectsByClass(params: QueryProjectsByClassRequest): Promise<QueryProjectsByClassResponseSDKType>;
    projectsByReferenceId(params: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponseSDKType>;
    projectsByAdmin(params: QueryProjectsByAdminRequest): Promise<QueryProjectsByAdminResponseSDKType>;
    project(params: QueryProjectRequest): Promise<QueryProjectResponseSDKType>;
    batches(params?: QueryBatchesRequest): Promise<QueryBatchesResponseSDKType>;
    batchesByIssuer(params: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponseSDKType>;
    batchesByClass(params: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponseSDKType>;
    batchesByProject(params: QueryBatchesByProjectRequest): Promise<QueryBatchesByProjectResponseSDKType>;
    batch(params: QueryBatchRequest): Promise<QueryBatchResponseSDKType>;
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    balances(params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType>;
    balancesByBatch(params: QueryBalancesByBatchRequest): Promise<QueryBalancesByBatchResponseSDKType>;
    allBalances(params?: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
    supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    creditTypes(_params?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    creditType(params: QueryCreditTypeRequest): Promise<QueryCreditTypeResponseSDKType>;
    classCreatorAllowlist(_params?: QueryClassCreatorAllowlistRequest): Promise<QueryClassCreatorAllowlistResponseSDKType>;
    allowedClassCreators(params?: QueryAllowedClassCreatorsRequest): Promise<QueryAllowedClassCreatorsResponseSDKType>;
    classFee(_params?: QueryClassFeeRequest): Promise<QueryClassFeeResponseSDKType>;
    allowedBridgeChains(_params?: QueryAllowedBridgeChainsRequest): Promise<QueryAllowedBridgeChainsResponseSDKType>;
}
