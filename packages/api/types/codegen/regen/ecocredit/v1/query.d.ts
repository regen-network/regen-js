import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType, CreditTypeSDKType } from "./state";
import { Params, ParamsSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
    /** classes are the fetched credit classes. */
    classes: ClassInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequest {
    /** admin is the address of the admin of the class. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestSDKType {
    /** admin is the address of the admin of the class. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseSDKType {
    /** classes are the fetched credit classes. */
    classes: ClassInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestSDKType {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponse {
    /** class is the fetched credit class. */
    class?: ClassInfo;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseSDKType {
    /** class is the fetched credit class. */
    class?: ClassInfoSDKType;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestSDKType {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponse {
    /** issuers is a list of issuers for the credit class */
    issuers: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseSDKType {
    /** issuers is a list of issuers for the credit class */
    issuers: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseSDKType {
    /** projects are the fetched projects. */
    projects: ProjectInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryProjectsByClassRequest is the Query/ProjectsByClass request type. */
export interface QueryProjectsByClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryProjectsByClassRequest is the Query/ProjectsByClass request type. */
export interface QueryProjectsByClassRequestSDKType {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryProjectsByClassResponse is the Query/ProjectsByClass response type. */
export interface QueryProjectsByClassResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryProjectsByClassResponse is the Query/ProjectsByClass response type. */
export interface QueryProjectsByClassResponseSDKType {
    /** projects are the fetched projects. */
    projects: ProjectInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequest {
    /** reference_id is the project reference id. */
    referenceId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestSDKType {
    /** reference_id is the project reference id. */
    reference_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseSDKType {
    /** projects are the fetched projects. */
    projects: ProjectInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryProjectsByAdminRequest is the Query/ProjectByAdmin request type. */
export interface QueryProjectsByAdminRequest {
    /** admin is the account address of project admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryProjectsByAdminRequest is the Query/ProjectByAdmin request type. */
export interface QueryProjectsByAdminRequestSDKType {
    /** admin is the account address of project admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryProjectsByAdminResponse is the Query/ProjectByAdmin response type. */
export interface QueryProjectsByAdminResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryProjectsByAdminResponse is the Query/ProjectByAdmin response type. */
export interface QueryProjectsByAdminResponseSDKType {
    /** projects are the fetched projects. */
    projects: ProjectInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestSDKType {
    /** project_id is the unique identifier of the project to query. */
    project_id: string;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponse {
    /** project is the fetched project. */
    project?: ProjectInfo;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseSDKType {
    /** project is the fetched project. */
    project?: ProjectInfoSDKType;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
    /** batches are the fetched credit batches. */
    batches: BatchInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequest {
    /** issuer is the address that issued the batch */
    issuer: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestSDKType {
    /** issuer is the address that issued the batch */
    issuer: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseSDKType {
    /** batches are the fetched credit batches. */
    batches: BatchInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestSDKType {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByProjectRequest is the Query/BatchesByProject request type. */
export interface QueryBatchesByProjectRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBatchesByProjectRequest is the Query/BatchesByProject request type. */
export interface QueryBatchesByProjectRequestSDKType {
    /** project_id is the unique identifier of the project to query. */
    project_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByProjectResponse is the Query/BatchesByProject response type. */
export interface QueryBatchesByProjectResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryBatchesByProjectResponse is the Query/BatchesByProject response type. */
export interface QueryBatchesByProjectResponseSDKType {
    /** batches are the fetched credit batches. */
    batches: BatchInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseSDKType {
    /** batches are the fetched credit batches. */
    batches: BatchInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestSDKType {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom: string;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponse {
    /** batch is the fetched credit batch. */
    batch?: BatchInfo;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseSDKType {
    /** batch is the fetched credit batch. */
    batch?: BatchInfoSDKType;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
    /** balance is the balance of the given account. */
    balance?: BatchBalanceInfo;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
    /** balance is the balance of the given account. */
    balance?: BatchBalanceInfoSDKType;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequest {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestSDKType {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponse {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseSDKType {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QueryBalancesByBatchRequest is the Query/BalancesByBatch request type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchRequest {
    /** batch_denom is the denom of the batch to query by. */
    batchDenom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryBalancesByBatchRequest is the Query/BalancesByBatch request type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchRequestSDKType {
    /** batch_denom is the denom of the batch to query by. */
    batch_denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryBalancesByBatchResponse is the Query/BalancesByBatch response type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchResponse {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryBalancesByBatchResponse is the Query/BalancesByBatch response type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchResponseSDKType {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QueryAllBalancesRequest is the Query/AllBalances request type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAllBalancesRequest is the Query/AllBalances request type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllBalancesResponse is the Query/AllBalances response type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesResponse {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllBalancesResponse is the Query/AllBalances response type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesResponseSDKType {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
    /**
     * tradable_amount is the decimal number of tradable credits in the batch
     * supply.
     */
    tradableAmount: string;
    /**
     * retired_amount is the decimal number of retired credits in the batch
     * supply.
     */
    retiredAmount: string;
    /**
     * cancelled_amount is the decimal number of cancelled credits in the batch
     * supply.
     */
    cancelledAmount: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
    /**
     * tradable_amount is the decimal number of tradable credits in the batch
     * supply.
     */
    tradable_amount: string;
    /**
     * retired_amount is the decimal number of retired credits in the batch
     * supply.
     */
    retired_amount: string;
    /**
     * cancelled_amount is the decimal number of cancelled credits in the batch
     * supply.
     */
    cancelled_amount: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
    /** credit_types are the fetched credit types. */
    creditTypes: CreditType[];
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
    /** credit_types are the fetched credit types. */
    credit_types: CreditTypeSDKType[];
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
    /** params defines the parameters of the ecocredit module. */
    params?: Params;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
    /** params defines the parameters of the ecocredit module. */
    params?: ParamsSDKType;
}
/** QueryCreditTypeRequest is the Query/CreditType request type */
export interface QueryCreditTypeRequest {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
/** QueryCreditTypeRequest is the Query/CreditType request type */
export interface QueryCreditTypeRequestSDKType {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
/** QueryCreditTypeResponse is the Query/CreditType response type */
export interface QueryCreditTypeResponse {
    /** credit_type is the fetched credit type. */
    creditType?: CreditType;
}
/** QueryCreditTypeResponse is the Query/CreditType response type */
export interface QueryCreditTypeResponseSDKType {
    /** credit_type is the fetched credit type. */
    credit_type?: CreditTypeSDKType;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfo {
    /** id is the unique identifier of the credit class. */
    id: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** metadata is the arbitrary metadata attached to the credit class. */
    metadata: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type within which this
     * credit class was created.
     */
    creditTypeAbbrev: string;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoSDKType {
    /** id is the unique identifier of the credit class. */
    id: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** metadata is the arbitrary metadata attached to the credit class. */
    metadata: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type within which this
     * credit class was created.
     */
    credit_type_abbrev: string;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfo {
    /** id is the unique identifier of the project. */
    id: string;
    /** admin is the admin of the project. */
    admin: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project was created.
     */
    classId: string;
    /**
     * jurisdiction is the jurisdiction of the project. Full documentation can be
     * found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is the arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string that can be use to reference project. */
    referenceId: string;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoSDKType {
    /** id is the unique identifier of the project. */
    id: string;
    /** admin is the admin of the project. */
    admin: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project was created.
     */
    class_id: string;
    /**
     * jurisdiction is the jurisdiction of the project. Full documentation can be
     * found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is the arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string that can be use to reference project. */
    reference_id: string;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfo {
    /**
     * issuer is the address that created the batch and the address authorized to
     * mint new credits to the credit batch if the credit batch is open.
     */
    issuer: string;
    /**
     * project_id is the unique identifier of the project within which this credit
     * batch was created.
     */
    projectId: string;
    /**
     * denom is the unique identifier of the credit batch formed from the project
     * name, batch sequence number and dates.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate?: Timestamp;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Timestamp;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate?: Timestamp;
    /**
     * open determines whether or not the credit batch is open, i.e. whether or
     * not new credits can be minted to the credit batch.
     */
    open: boolean;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoSDKType {
    /**
     * issuer is the address that created the batch and the address authorized to
     * mint new credits to the credit batch if the credit batch is open.
     */
    issuer: string;
    /**
     * project_id is the unique identifier of the project within which this credit
     * batch was created.
     */
    project_id: string;
    /**
     * denom is the unique identifier of the credit batch formed from the project
     * name, batch sequence number and dates.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date?: TimestampSDKType;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: TimestampSDKType;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuance_date?: TimestampSDKType;
    /**
     * open determines whether or not the credit batch is open, i.e. whether or
     * not new credits can be minted to the credit batch.
     */
    open: boolean;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfo {
    /** address is the address of the account that owns the credits. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** tradable_amount is the total number of tradable credits owned by address. */
    tradableAmount: string;
    /** retired_amount is the total number of retired credits owned by address. */
    retiredAmount: string;
    /**
     * escrowed_amount is the total number of escrowed credits owned by address
     * and held in escrow by the marketplace. Credits are held in escrow when a
     * sell order is created and taken out of escrow when the sell order is either
     * cancelled, updated with a reduced quantity, or processed.
     */
    escrowedAmount: string;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoSDKType {
    /** address is the address of the account that owns the credits. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
    /** tradable_amount is the total number of tradable credits owned by address. */
    tradable_amount: string;
    /** retired_amount is the total number of retired credits owned by address. */
    retired_amount: string;
    /**
     * escrowed_amount is the total number of escrowed credits owned by address
     * and held in escrow by the marketplace. Credits are held in escrow when a
     * sell order is created and taken out of escrow when the sell order is either
     * cancelled, updated with a reduced quantity, or processed.
     */
    escrowed_amount: string;
}
/**
 * QueryClassCreatorAllowlistRequest is the Query/ClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistRequest {
}
/**
 * QueryClassCreatorAllowlistRequest is the Query/ClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistRequestSDKType {
}
/**
 * QueryClassCreatorAllowlistResponse is the Query/ClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistResponse {
    /**
     * enabled determines whether or not the allowlist for creating credit classes
     * is enabled.
     */
    enabled: boolean;
}
/**
 * QueryClassCreatorAllowlistResponse is the Query/ClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistResponseSDKType {
    /**
     * enabled determines whether or not the allowlist for creating credit classes
     * is enabled.
     */
    enabled: boolean;
}
/**
 * QueryAllowedClassCreatorsRequest is the Query/AllowedClassCreators request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAllowedClassCreatorsRequest is the Query/AllowedClassCreators request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllowedClassCreatorsResponse is the Query/AllowedClassCreators response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsResponse {
    /** class_creators is the list of allowed credit class creators. */
    classCreators: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllowedClassCreatorsResponse is the Query/AllowedClassCreators response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsResponseSDKType {
    /** class_creators is the list of allowed credit class creators. */
    class_creators: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QueryClassFeeRequest is the Query/ClassFee request type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeRequest {
}
/**
 * QueryClassFeeRequest is the Query/ClassFee request type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeRequestSDKType {
}
/**
 * QueryClassFeeResponse is the Query/ClassFee response type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeResponse {
    /**
     * fee is the credit class creation fee. If not set, a credit class creation
     * fee is not required.
     */
    fee?: Coin;
}
/**
 * QueryClassFeeResponse is the Query/ClassFee response type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeResponseSDKType {
    /**
     * fee is the credit class creation fee. If not set, a credit class creation
     * fee is not required.
     */
    fee?: CoinSDKType;
}
/**
 * QueryAllowedBridgeChainsRequest is the Query/AllowedBridgeChains request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsRequest {
}
/**
 * QueryAllowedBridgeChainsRequest is the Query/AllowedBridgeChains request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsRequestSDKType {
}
/**
 * QueryAllowedBridgeChainsResponse is the Query/AllowedBridgeChains response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsResponse {
    /**
     * allowed_bridge_chains is a list of chains that are allowed to be used in
     * bridge operations.
     */
    allowedBridgeChains: string[];
}
/**
 * QueryAllowedBridgeChainsResponse is the Query/AllowedBridgeChains response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsResponseSDKType {
    /**
     * allowed_bridge_chains is a list of chains that are allowed to be used in
     * bridge operations.
     */
    allowed_bridge_chains: string[];
}
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse;
};
export declare const QueryClassesByAdminRequest: {
    encode(message: QueryClassesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminRequest;
    fromJSON(object: any): QueryClassesByAdminRequest;
    toJSON(message: QueryClassesByAdminRequest): unknown;
    fromPartial(object: Partial<QueryClassesByAdminRequest>): QueryClassesByAdminRequest;
};
export declare const QueryClassesByAdminResponse: {
    encode(message: QueryClassesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminResponse;
    fromJSON(object: any): QueryClassesByAdminResponse;
    toJSON(message: QueryClassesByAdminResponse): unknown;
    fromPartial(object: Partial<QueryClassesByAdminResponse>): QueryClassesByAdminResponse;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse;
};
export declare const QueryClassIssuersRequest: {
    encode(message: QueryClassIssuersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersRequest;
    fromJSON(object: any): QueryClassIssuersRequest;
    toJSON(message: QueryClassIssuersRequest): unknown;
    fromPartial(object: Partial<QueryClassIssuersRequest>): QueryClassIssuersRequest;
};
export declare const QueryClassIssuersResponse: {
    encode(message: QueryClassIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersResponse;
    fromJSON(object: any): QueryClassIssuersResponse;
    toJSON(message: QueryClassIssuersResponse): unknown;
    fromPartial(object: Partial<QueryClassIssuersResponse>): QueryClassIssuersResponse;
};
export declare const QueryProjectsRequest: {
    encode(message: QueryProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsRequest;
    fromJSON(object: any): QueryProjectsRequest;
    toJSON(message: QueryProjectsRequest): unknown;
    fromPartial(object: Partial<QueryProjectsRequest>): QueryProjectsRequest;
};
export declare const QueryProjectsResponse: {
    encode(message: QueryProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsResponse;
    fromJSON(object: any): QueryProjectsResponse;
    toJSON(message: QueryProjectsResponse): unknown;
    fromPartial(object: Partial<QueryProjectsResponse>): QueryProjectsResponse;
};
export declare const QueryProjectsByClassRequest: {
    encode(message: QueryProjectsByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByClassRequest;
    fromJSON(object: any): QueryProjectsByClassRequest;
    toJSON(message: QueryProjectsByClassRequest): unknown;
    fromPartial(object: Partial<QueryProjectsByClassRequest>): QueryProjectsByClassRequest;
};
export declare const QueryProjectsByClassResponse: {
    encode(message: QueryProjectsByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByClassResponse;
    fromJSON(object: any): QueryProjectsByClassResponse;
    toJSON(message: QueryProjectsByClassResponse): unknown;
    fromPartial(object: Partial<QueryProjectsByClassResponse>): QueryProjectsByClassResponse;
};
export declare const QueryProjectsByReferenceIdRequest: {
    encode(message: QueryProjectsByReferenceIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdRequest;
    fromJSON(object: any): QueryProjectsByReferenceIdRequest;
    toJSON(message: QueryProjectsByReferenceIdRequest): unknown;
    fromPartial(object: Partial<QueryProjectsByReferenceIdRequest>): QueryProjectsByReferenceIdRequest;
};
export declare const QueryProjectsByReferenceIdResponse: {
    encode(message: QueryProjectsByReferenceIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdResponse;
    fromJSON(object: any): QueryProjectsByReferenceIdResponse;
    toJSON(message: QueryProjectsByReferenceIdResponse): unknown;
    fromPartial(object: Partial<QueryProjectsByReferenceIdResponse>): QueryProjectsByReferenceIdResponse;
};
export declare const QueryProjectsByAdminRequest: {
    encode(message: QueryProjectsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByAdminRequest;
    fromJSON(object: any): QueryProjectsByAdminRequest;
    toJSON(message: QueryProjectsByAdminRequest): unknown;
    fromPartial(object: Partial<QueryProjectsByAdminRequest>): QueryProjectsByAdminRequest;
};
export declare const QueryProjectsByAdminResponse: {
    encode(message: QueryProjectsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByAdminResponse;
    fromJSON(object: any): QueryProjectsByAdminResponse;
    toJSON(message: QueryProjectsByAdminResponse): unknown;
    fromPartial(object: Partial<QueryProjectsByAdminResponse>): QueryProjectsByAdminResponse;
};
export declare const QueryProjectRequest: {
    encode(message: QueryProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectRequest;
    fromJSON(object: any): QueryProjectRequest;
    toJSON(message: QueryProjectRequest): unknown;
    fromPartial(object: Partial<QueryProjectRequest>): QueryProjectRequest;
};
export declare const QueryProjectResponse: {
    encode(message: QueryProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectResponse;
    fromJSON(object: any): QueryProjectResponse;
    toJSON(message: QueryProjectResponse): unknown;
    fromPartial(object: Partial<QueryProjectResponse>): QueryProjectResponse;
};
export declare const QueryBatchesRequest: {
    encode(message: QueryBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest;
    fromJSON(object: any): QueryBatchesRequest;
    toJSON(message: QueryBatchesRequest): unknown;
    fromPartial(object: Partial<QueryBatchesRequest>): QueryBatchesRequest;
};
export declare const QueryBatchesResponse: {
    encode(message: QueryBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesResponse;
    fromJSON(object: any): QueryBatchesResponse;
    toJSON(message: QueryBatchesResponse): unknown;
    fromPartial(object: Partial<QueryBatchesResponse>): QueryBatchesResponse;
};
export declare const QueryBatchesByIssuerRequest: {
    encode(message: QueryBatchesByIssuerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerRequest;
    fromJSON(object: any): QueryBatchesByIssuerRequest;
    toJSON(message: QueryBatchesByIssuerRequest): unknown;
    fromPartial(object: Partial<QueryBatchesByIssuerRequest>): QueryBatchesByIssuerRequest;
};
export declare const QueryBatchesByIssuerResponse: {
    encode(message: QueryBatchesByIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerResponse;
    fromJSON(object: any): QueryBatchesByIssuerResponse;
    toJSON(message: QueryBatchesByIssuerResponse): unknown;
    fromPartial(object: Partial<QueryBatchesByIssuerResponse>): QueryBatchesByIssuerResponse;
};
export declare const QueryBatchesByClassRequest: {
    encode(message: QueryBatchesByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassRequest;
    fromJSON(object: any): QueryBatchesByClassRequest;
    toJSON(message: QueryBatchesByClassRequest): unknown;
    fromPartial(object: Partial<QueryBatchesByClassRequest>): QueryBatchesByClassRequest;
};
export declare const QueryBatchesByProjectRequest: {
    encode(message: QueryBatchesByProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByProjectRequest;
    fromJSON(object: any): QueryBatchesByProjectRequest;
    toJSON(message: QueryBatchesByProjectRequest): unknown;
    fromPartial(object: Partial<QueryBatchesByProjectRequest>): QueryBatchesByProjectRequest;
};
export declare const QueryBatchesByProjectResponse: {
    encode(message: QueryBatchesByProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByProjectResponse;
    fromJSON(object: any): QueryBatchesByProjectResponse;
    toJSON(message: QueryBatchesByProjectResponse): unknown;
    fromPartial(object: Partial<QueryBatchesByProjectResponse>): QueryBatchesByProjectResponse;
};
export declare const QueryBatchesByClassResponse: {
    encode(message: QueryBatchesByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassResponse;
    fromJSON(object: any): QueryBatchesByClassResponse;
    toJSON(message: QueryBatchesByClassResponse): unknown;
    fromPartial(object: Partial<QueryBatchesByClassResponse>): QueryBatchesByClassResponse;
};
export declare const QueryBatchRequest: {
    encode(message: QueryBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest;
    fromJSON(object: any): QueryBatchRequest;
    toJSON(message: QueryBatchRequest): unknown;
    fromPartial(object: Partial<QueryBatchRequest>): QueryBatchRequest;
};
export declare const QueryBatchResponse: {
    encode(message: QueryBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse;
    fromJSON(object: any): QueryBatchResponse;
    toJSON(message: QueryBatchResponse): unknown;
    fromPartial(object: Partial<QueryBatchResponse>): QueryBatchResponse;
};
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryBalancesRequest: {
    encode(message: QueryBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest;
    fromJSON(object: any): QueryBalancesRequest;
    toJSON(message: QueryBalancesRequest): unknown;
    fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest;
};
export declare const QueryBalancesResponse: {
    encode(message: QueryBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse;
    fromJSON(object: any): QueryBalancesResponse;
    toJSON(message: QueryBalancesResponse): unknown;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
};
export declare const QueryBalancesByBatchRequest: {
    encode(message: QueryBalancesByBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesByBatchRequest;
    fromJSON(object: any): QueryBalancesByBatchRequest;
    toJSON(message: QueryBalancesByBatchRequest): unknown;
    fromPartial(object: Partial<QueryBalancesByBatchRequest>): QueryBalancesByBatchRequest;
};
export declare const QueryBalancesByBatchResponse: {
    encode(message: QueryBalancesByBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesByBatchResponse;
    fromJSON(object: any): QueryBalancesByBatchResponse;
    toJSON(message: QueryBalancesByBatchResponse): unknown;
    fromPartial(object: Partial<QueryBalancesByBatchResponse>): QueryBalancesByBatchResponse;
};
export declare const QueryAllBalancesRequest: {
    encode(message: QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    fromPartial(object: Partial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
};
export declare const QueryAllBalancesResponse: {
    encode(message: QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    fromPartial(object: Partial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
};
export declare const QueryCreditTypesRequest: {
    encode(_: QueryCreditTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesRequest;
    fromJSON(_: any): QueryCreditTypesRequest;
    toJSON(_: QueryCreditTypesRequest): unknown;
    fromPartial(_: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest;
};
export declare const QueryCreditTypesResponse: {
    encode(message: QueryCreditTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesResponse;
    fromJSON(object: any): QueryCreditTypesResponse;
    toJSON(message: QueryCreditTypesResponse): unknown;
    fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCreditTypeRequest: {
    encode(message: QueryCreditTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeRequest;
    fromJSON(object: any): QueryCreditTypeRequest;
    toJSON(message: QueryCreditTypeRequest): unknown;
    fromPartial(object: Partial<QueryCreditTypeRequest>): QueryCreditTypeRequest;
};
export declare const QueryCreditTypeResponse: {
    encode(message: QueryCreditTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeResponse;
    fromJSON(object: any): QueryCreditTypeResponse;
    toJSON(message: QueryCreditTypeResponse): unknown;
    fromPartial(object: Partial<QueryCreditTypeResponse>): QueryCreditTypeResponse;
};
export declare const ClassInfo: {
    encode(message: ClassInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo;
    fromJSON(object: any): ClassInfo;
    toJSON(message: ClassInfo): unknown;
    fromPartial(object: Partial<ClassInfo>): ClassInfo;
};
export declare const ProjectInfo: {
    encode(message: ProjectInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfo;
    fromJSON(object: any): ProjectInfo;
    toJSON(message: ProjectInfo): unknown;
    fromPartial(object: Partial<ProjectInfo>): ProjectInfo;
};
export declare const BatchInfo: {
    encode(message: BatchInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo;
    fromJSON(object: any): BatchInfo;
    toJSON(message: BatchInfo): unknown;
    fromPartial(object: Partial<BatchInfo>): BatchInfo;
};
export declare const BatchBalanceInfo: {
    encode(message: BatchBalanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalanceInfo;
    fromJSON(object: any): BatchBalanceInfo;
    toJSON(message: BatchBalanceInfo): unknown;
    fromPartial(object: Partial<BatchBalanceInfo>): BatchBalanceInfo;
};
export declare const QueryClassCreatorAllowlistRequest: {
    encode(_: QueryClassCreatorAllowlistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassCreatorAllowlistRequest;
    fromJSON(_: any): QueryClassCreatorAllowlistRequest;
    toJSON(_: QueryClassCreatorAllowlistRequest): unknown;
    fromPartial(_: Partial<QueryClassCreatorAllowlistRequest>): QueryClassCreatorAllowlistRequest;
};
export declare const QueryClassCreatorAllowlistResponse: {
    encode(message: QueryClassCreatorAllowlistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassCreatorAllowlistResponse;
    fromJSON(object: any): QueryClassCreatorAllowlistResponse;
    toJSON(message: QueryClassCreatorAllowlistResponse): unknown;
    fromPartial(object: Partial<QueryClassCreatorAllowlistResponse>): QueryClassCreatorAllowlistResponse;
};
export declare const QueryAllowedClassCreatorsRequest: {
    encode(message: QueryAllowedClassCreatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedClassCreatorsRequest;
    fromJSON(object: any): QueryAllowedClassCreatorsRequest;
    toJSON(message: QueryAllowedClassCreatorsRequest): unknown;
    fromPartial(object: Partial<QueryAllowedClassCreatorsRequest>): QueryAllowedClassCreatorsRequest;
};
export declare const QueryAllowedClassCreatorsResponse: {
    encode(message: QueryAllowedClassCreatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedClassCreatorsResponse;
    fromJSON(object: any): QueryAllowedClassCreatorsResponse;
    toJSON(message: QueryAllowedClassCreatorsResponse): unknown;
    fromPartial(object: Partial<QueryAllowedClassCreatorsResponse>): QueryAllowedClassCreatorsResponse;
};
export declare const QueryClassFeeRequest: {
    encode(_: QueryClassFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassFeeRequest;
    fromJSON(_: any): QueryClassFeeRequest;
    toJSON(_: QueryClassFeeRequest): unknown;
    fromPartial(_: Partial<QueryClassFeeRequest>): QueryClassFeeRequest;
};
export declare const QueryClassFeeResponse: {
    encode(message: QueryClassFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassFeeResponse;
    fromJSON(object: any): QueryClassFeeResponse;
    toJSON(message: QueryClassFeeResponse): unknown;
    fromPartial(object: Partial<QueryClassFeeResponse>): QueryClassFeeResponse;
};
export declare const QueryAllowedBridgeChainsRequest: {
    encode(_: QueryAllowedBridgeChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBridgeChainsRequest;
    fromJSON(_: any): QueryAllowedBridgeChainsRequest;
    toJSON(_: QueryAllowedBridgeChainsRequest): unknown;
    fromPartial(_: Partial<QueryAllowedBridgeChainsRequest>): QueryAllowedBridgeChainsRequest;
};
export declare const QueryAllowedBridgeChainsResponse: {
    encode(message: QueryAllowedBridgeChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBridgeChainsResponse;
    fromJSON(object: any): QueryAllowedBridgeChainsResponse;
    toJSON(message: QueryAllowedBridgeChainsResponse): unknown;
    fromPartial(object: Partial<QueryAllowedBridgeChainsResponse>): QueryAllowedBridgeChainsResponse;
};
