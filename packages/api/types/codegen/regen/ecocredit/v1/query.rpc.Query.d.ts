import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassesByAdminRequest, QueryClassesByAdminResponse, QueryClassRequest, QueryClassResponse, QueryClassIssuersRequest, QueryClassIssuersResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectsByClassRequest, QueryProjectsByClassResponse, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponse, QueryProjectsByAdminRequest, QueryProjectsByAdminResponse, QueryProjectRequest, QueryProjectResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponse, QueryBatchesByClassRequest, QueryBatchesByClassResponse, QueryBatchesByProjectRequest, QueryBatchesByProjectResponse, QueryBatchRequest, QueryBatchResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesRequest, QueryBalancesResponse, QueryBalancesByBatchRequest, QueryBalancesByBatchResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse, QueryCreditTypeRequest, QueryCreditTypeResponse, QueryClassCreatorAllowlistRequest, QueryClassCreatorAllowlistResponse, QueryAllowedClassCreatorsRequest, QueryAllowedClassCreatorsResponse, QueryClassFeeRequest, QueryClassFeeResponse, QueryAllowedBridgeChainsRequest, QueryAllowedBridgeChainsResponse } from "./query";
/** Msg is the regen.ecocredit.v1 Query service. */
export interface Query {
    /** Classes queries for all credit classes with pagination. */
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    /**
     * ClassesByAdmin queries for all credit classes with a specific admin
     * address.
     */
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
    /** Class queries for information on a credit class. */
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** ClassIssuers queries for the addresses of the issuers for a credit class. */
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
    /** Projects queries for all projects with pagination. */
    projects(request?: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    /** ProjectsByClass queries for all projects within a class with pagination. */
    projectsByClass(request: QueryProjectsByClassRequest): Promise<QueryProjectsByClassResponse>;
    /**
     * ProjectsByReferenceId queries for all projects by reference-id with
     * pagination.
     */
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
    /**
     * ProjectsByAdmin queries for all projects by admin with
     * pagination.
     */
    projectsByAdmin(request: QueryProjectsByAdminRequest): Promise<QueryProjectsByAdminResponse>;
    /** Project queries for information on a project. */
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    /** Batches queries for all batches with pagination. */
    batches(request?: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    /** BatchesByIssuer queries all batches issued from a given issuer address. */
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
    /** BatchesByClass queries all batches issued from a given class. */
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
    /**
     * BatchesByProject queries for all batches from a given project with
     * pagination.
     */
    batchesByProject(request: QueryBatchesByProjectRequest): Promise<QueryBatchesByProjectResponse>;
    /** Batch queries for information on a credit batch. */
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account address.
     */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Balances queries all credit balances the given account holds. */
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
    /**
     * BalancesByBatch queries all credit balances from a given batch.
     *
     * Since Revision 2
     */
    balancesByBatch(request: QueryBalancesByBatchRequest): Promise<QueryBalancesByBatchResponse>;
    /**
     * AllBalances queries all credit balances.
     *
     * Since Revision 2
     */
    allBalances(request?: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /** Supply queries the tradable and retired supply of a credit batch. */
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    /**
     * Params queries the ecocredit module parameters.
     *
     * Deprecated (Since Revision 2): This rpc will be removed in the next
     * version.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** CreditType queries credit type information by abbreviation. */
    creditType(request: QueryCreditTypeRequest): Promise<QueryCreditTypeResponse>;
    /**
     * ClassCreatorAllowlist queries the credit class creator allowlist
     * enabled setting.
     *
     * Since Revision 2
     */
    classCreatorAllowlist(request?: QueryClassCreatorAllowlistRequest): Promise<QueryClassCreatorAllowlistResponse>;
    /**
     * AllowedClassCreators queries allowed credit class creators list.
     *
     * Since Revision 2
     */
    allowedClassCreators(request?: QueryAllowedClassCreatorsRequest): Promise<QueryAllowedClassCreatorsResponse>;
    /**
     * ClassFee returns the credit class creation fee. If not set, a credit class
     * creation fee is not required.
     *
     * Since Revision 2
     */
    classFee(request?: QueryClassFeeRequest): Promise<QueryClassFeeResponse>;
    /**
     * AllowedBridgeChains queries the list of chains allowed to be used in bridge
     * operations.
     *
     * Since Revision 2
     */
    allowedBridgeChains(request?: QueryAllowedBridgeChainsRequest): Promise<QueryAllowedBridgeChainsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
    projects(request?: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    projectsByClass(request: QueryProjectsByClassRequest): Promise<QueryProjectsByClassResponse>;
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
    projectsByAdmin(request: QueryProjectsByAdminRequest): Promise<QueryProjectsByAdminResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    batches(request?: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
    batchesByProject(request: QueryBatchesByProjectRequest): Promise<QueryBatchesByProjectResponse>;
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
    balancesByBatch(request: QueryBalancesByBatchRequest): Promise<QueryBalancesByBatchResponse>;
    allBalances(request?: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    creditType(request: QueryCreditTypeRequest): Promise<QueryCreditTypeResponse>;
    classCreatorAllowlist(request?: QueryClassCreatorAllowlistRequest): Promise<QueryClassCreatorAllowlistResponse>;
    allowedClassCreators(request?: QueryAllowedClassCreatorsRequest): Promise<QueryAllowedClassCreatorsResponse>;
    classFee(request?: QueryClassFeeRequest): Promise<QueryClassFeeResponse>;
    allowedBridgeChains(request?: QueryAllowedBridgeChainsRequest): Promise<QueryAllowedBridgeChainsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
    projects(request?: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    projectsByClass(request: QueryProjectsByClassRequest): Promise<QueryProjectsByClassResponse>;
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
    projectsByAdmin(request: QueryProjectsByAdminRequest): Promise<QueryProjectsByAdminResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    batches(request?: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
    batchesByProject(request: QueryBatchesByProjectRequest): Promise<QueryBatchesByProjectResponse>;
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
    balancesByBatch(request: QueryBalancesByBatchRequest): Promise<QueryBalancesByBatchResponse>;
    allBalances(request?: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    creditType(request: QueryCreditTypeRequest): Promise<QueryCreditTypeResponse>;
    classCreatorAllowlist(request?: QueryClassCreatorAllowlistRequest): Promise<QueryClassCreatorAllowlistResponse>;
    allowedClassCreators(request?: QueryAllowedClassCreatorsRequest): Promise<QueryAllowedClassCreatorsResponse>;
    classFee(request?: QueryClassFeeRequest): Promise<QueryClassFeeResponse>;
    allowedBridgeChains(request?: QueryAllowedBridgeChainsRequest): Promise<QueryAllowedBridgeChainsResponse>;
};
