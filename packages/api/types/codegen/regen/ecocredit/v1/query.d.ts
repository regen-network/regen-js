import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { Params, ParamsAmino, ParamsSDKType } from "./types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesRequest";
    value: Uint8Array;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesRequest";
    value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesResponse";
    value: Uint8Array;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseAmino {
    /** classes are the fetched credit classes. */
    classes: ClassInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesResponse";
    value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
    classes: ClassInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequest {
    /** admin is the address of the admin of the class. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassesByAdminRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest";
    value: Uint8Array;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestAmino {
    /** admin is the address of the admin of the class. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassesByAdminRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesByAdminRequest";
    value: QueryClassesByAdminRequestAmino;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassesByAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse";
    value: Uint8Array;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseAmino {
    /** classes are the fetched credit classes. */
    classes: ClassInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassesByAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesByAdminResponse";
    value: QueryClassesByAdminResponseAmino;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseSDKType {
    classes: ClassInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
}
export interface QueryClassRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassRequest";
    value: Uint8Array;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
}
export interface QueryClassRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassRequest";
    value: QueryClassRequestAmino;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestSDKType {
    class_id: string;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponse {
    /** class is the fetched credit class. */
    class?: ClassInfo;
}
export interface QueryClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassResponse";
    value: Uint8Array;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseAmino {
    /** class is the fetched credit class. */
    class?: ClassInfoAmino;
}
export interface QueryClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassResponse";
    value: QueryClassResponseAmino;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseSDKType {
    class?: ClassInfoSDKType;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassIssuersRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest";
    value: Uint8Array;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassIssuersRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassIssuersRequest";
    value: QueryClassIssuersRequestAmino;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponse {
    /** issuers is a list of issuers for the credit class */
    issuers: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassIssuersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse";
    value: Uint8Array;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseAmino {
    /** issuers is a list of issuers for the credit class */
    issuers: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassIssuersResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassIssuersResponse";
    value: QueryClassIssuersResponseAmino;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseSDKType {
    issuers: string[];
    pagination?: PageResponseSDKType;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProjectsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest";
    value: Uint8Array;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProjectsRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsRequest";
    value: QueryProjectsRequestAmino;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProjectsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse";
    value: Uint8Array;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseAmino {
    /** projects are the fetched projects. */
    projects: ProjectInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProjectsResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsResponse";
    value: QueryProjectsResponseAmino;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseSDKType {
    projects: ProjectInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProjectsByClassRequest is the Query/ProjectsByClass request type. */
export interface QueryProjectsByClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProjectsByClassRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassRequest";
    value: Uint8Array;
}
/** QueryProjectsByClassRequest is the Query/ProjectsByClass request type. */
export interface QueryProjectsByClassRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProjectsByClassRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByClassRequest";
    value: QueryProjectsByClassRequestAmino;
}
/** QueryProjectsByClassRequest is the Query/ProjectsByClass request type. */
export interface QueryProjectsByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryProjectsByClassResponse is the Query/ProjectsByClass response type. */
export interface QueryProjectsByClassResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProjectsByClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassResponse";
    value: Uint8Array;
}
/** QueryProjectsByClassResponse is the Query/ProjectsByClass response type. */
export interface QueryProjectsByClassResponseAmino {
    /** projects are the fetched projects. */
    projects: ProjectInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProjectsByClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByClassResponse";
    value: QueryProjectsByClassResponseAmino;
}
/** QueryProjectsByClassResponse is the Query/ProjectsByClass response type. */
export interface QueryProjectsByClassResponseSDKType {
    projects: ProjectInfoSDKType[];
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
export interface QueryProjectsByReferenceIdRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest";
    value: Uint8Array;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestAmino {
    /** reference_id is the project reference id. */
    reference_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProjectsByReferenceIdRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest";
    value: QueryProjectsByReferenceIdRequestAmino;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestSDKType {
    reference_id: string;
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
export interface QueryProjectsByReferenceIdResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse";
    value: Uint8Array;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseAmino {
    /** projects are the fetched projects. */
    projects: ProjectInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProjectsByReferenceIdResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse";
    value: QueryProjectsByReferenceIdResponseAmino;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseSDKType {
    projects: ProjectInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProjectsByAdminRequest is the Query/ProjectByAdmin request type. */
export interface QueryProjectsByAdminRequest {
    /** admin is the account address of project admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProjectsByAdminRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminRequest";
    value: Uint8Array;
}
/** QueryProjectsByAdminRequest is the Query/ProjectByAdmin request type. */
export interface QueryProjectsByAdminRequestAmino {
    /** admin is the account address of project admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProjectsByAdminRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByAdminRequest";
    value: QueryProjectsByAdminRequestAmino;
}
/** QueryProjectsByAdminRequest is the Query/ProjectByAdmin request type. */
export interface QueryProjectsByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryProjectsByAdminResponse is the Query/ProjectByAdmin response type. */
export interface QueryProjectsByAdminResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProjectsByAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminResponse";
    value: Uint8Array;
}
/** QueryProjectsByAdminResponse is the Query/ProjectByAdmin response type. */
export interface QueryProjectsByAdminResponseAmino {
    /** projects are the fetched projects. */
    projects: ProjectInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProjectsByAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByAdminResponse";
    value: QueryProjectsByAdminResponseAmino;
}
/** QueryProjectsByAdminResponse is the Query/ProjectByAdmin response type. */
export interface QueryProjectsByAdminResponseSDKType {
    projects: ProjectInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
}
export interface QueryProjectRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectRequest";
    value: Uint8Array;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestAmino {
    /** project_id is the unique identifier of the project to query. */
    project_id: string;
}
export interface QueryProjectRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectRequest";
    value: QueryProjectRequestAmino;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestSDKType {
    project_id: string;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponse {
    /** project is the fetched project. */
    project?: ProjectInfo;
}
export interface QueryProjectResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectResponse";
    value: Uint8Array;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseAmino {
    /** project is the fetched project. */
    project?: ProjectInfoAmino;
}
export interface QueryProjectResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectResponse";
    value: QueryProjectResponseAmino;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseSDKType {
    project?: ProjectInfoSDKType;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest";
    value: Uint8Array;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesRequest";
    value: QueryBatchesRequestAmino;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse";
    value: Uint8Array;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseAmino {
    /** batches are the fetched credit batches. */
    batches: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesResponse";
    value: QueryBatchesResponseAmino;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequest {
    /** issuer is the address that issued the batch */
    issuer: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesByIssuerRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest";
    value: Uint8Array;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestAmino {
    /** issuer is the address that issued the batch */
    issuer: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesByIssuerRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest";
    value: QueryBatchesByIssuerRequestAmino;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestSDKType {
    issuer: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesByIssuerResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse";
    value: Uint8Array;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseAmino {
    /** batches are the fetched credit batches. */
    batches: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesByIssuerResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse";
    value: QueryBatchesByIssuerResponseAmino;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesByClassRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest";
    value: Uint8Array;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesByClassRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByClassRequest";
    value: QueryBatchesByClassRequestAmino;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByProjectRequest is the Query/BatchesByProject request type. */
export interface QueryBatchesByProjectRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesByProjectRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectRequest";
    value: Uint8Array;
}
/** QueryBatchesByProjectRequest is the Query/BatchesByProject request type. */
export interface QueryBatchesByProjectRequestAmino {
    /** project_id is the unique identifier of the project to query. */
    project_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesByProjectRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByProjectRequest";
    value: QueryBatchesByProjectRequestAmino;
}
/** QueryBatchesByProjectRequest is the Query/BatchesByProject request type. */
export interface QueryBatchesByProjectRequestSDKType {
    project_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByProjectResponse is the Query/BatchesByProject response type. */
export interface QueryBatchesByProjectResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesByProjectResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectResponse";
    value: Uint8Array;
}
/** QueryBatchesByProjectResponse is the Query/BatchesByProject response type. */
export interface QueryBatchesByProjectResponseAmino {
    /** batches are the fetched credit batches. */
    batches: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesByProjectResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByProjectResponse";
    value: QueryBatchesByProjectResponseAmino;
}
/** QueryBatchesByProjectResponse is the Query/BatchesByProject response type. */
export interface QueryBatchesByProjectResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesByClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse";
    value: Uint8Array;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseAmino {
    /** batches are the fetched credit batches. */
    batches: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesByClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByClassResponse";
    value: QueryBatchesByClassResponseAmino;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
export interface QueryBatchRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchRequest";
    value: Uint8Array;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestAmino {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom: string;
}
export interface QueryBatchRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchRequest";
    value: QueryBatchRequestAmino;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestSDKType {
    batch_denom: string;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponse {
    /** batch is the fetched credit batch. */
    batch?: BatchInfo;
}
export interface QueryBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchResponse";
    value: Uint8Array;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseAmino {
    /** batch is the fetched credit batch. */
    batch?: BatchInfoAmino;
}
export interface QueryBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchResponse";
    value: QueryBatchResponseAmino;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseSDKType {
    batch?: BatchInfoSDKType;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestAmino {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
    address: string;
    batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
    /** balance is the balance of the given account. */
    balance?: BatchBalanceInfo;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the given account. */
    balance?: BatchBalanceInfoAmino;
}
export interface QueryBalanceResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
    balance?: BatchBalanceInfoSDKType;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequest {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBalancesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest";
    value: Uint8Array;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestAmino {
    /** address is the address of the account whose balance is being queried. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBalancesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalancesRequest";
    value: QueryBalancesRequestAmino;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestSDKType {
    address: string;
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
export interface QueryBalancesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse";
    value: Uint8Array;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseAmino {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBalancesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalancesResponse";
    value: QueryBalancesResponseAmino;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseSDKType {
    balances: BatchBalanceInfoSDKType[];
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
export interface QueryBalancesByBatchRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchRequest";
    value: Uint8Array;
}
/**
 * QueryBalancesByBatchRequest is the Query/BalancesByBatch request type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchRequestAmino {
    /** batch_denom is the denom of the batch to query by. */
    batch_denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBalancesByBatchRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalancesByBatchRequest";
    value: QueryBalancesByBatchRequestAmino;
}
/**
 * QueryBalancesByBatchRequest is the Query/BalancesByBatch request type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchRequestSDKType {
    batch_denom: string;
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
export interface QueryBalancesByBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchResponse";
    value: Uint8Array;
}
/**
 * QueryBalancesByBatchResponse is the Query/BalancesByBatch response type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchResponseAmino {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBalancesByBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalancesByBatchResponse";
    value: QueryBalancesByBatchResponseAmino;
}
/**
 * QueryBalancesByBatchResponse is the Query/BalancesByBatch response type.
 *
 * Since Revision 2
 */
export interface QueryBalancesByBatchResponseSDKType {
    balances: BatchBalanceInfoSDKType[];
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
export interface QueryAllBalancesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryAllBalancesRequest";
    value: Uint8Array;
}
/**
 * QueryAllBalancesRequest is the Query/AllBalances request type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllBalancesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryAllBalancesRequest";
    value: QueryAllBalancesRequestAmino;
}
/**
 * QueryAllBalancesRequest is the Query/AllBalances request type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesRequestSDKType {
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
export interface QueryAllBalancesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryAllBalancesResponse";
    value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the Query/AllBalances response type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesResponseAmino {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllBalancesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryAllBalancesResponse";
    value: QueryAllBalancesResponseAmino;
}
/**
 * QueryAllBalancesResponse is the Query/AllBalances response type.
 *
 * Since Revision 2
 */
export interface QueryAllBalancesResponseSDKType {
    balances: BatchBalanceInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest";
    value: Uint8Array;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestAmino {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "/regen.ecocredit.v1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
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
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse";
    value: Uint8Array;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseAmino {
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
export interface QuerySupplyResponseAminoMsg {
    type: "/regen.ecocredit.v1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
    tradable_amount: string;
    retired_amount: string;
    cancelled_amount: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
}
export interface QueryCreditTypesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest";
    value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestAmino {
}
export interface QueryCreditTypesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryCreditTypesRequest";
    value: QueryCreditTypesRequestAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
    /** credit_types are the fetched credit types. */
    creditTypes: CreditType[];
}
export interface QueryCreditTypesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse";
    value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseAmino {
    /** credit_types are the fetched credit types. */
    credit_types: CreditTypeAmino[];
}
export interface QueryCreditTypesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryCreditTypesResponse";
    value: QueryCreditTypesResponseAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
    credit_types: CreditTypeSDKType[];
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
    /** params defines the parameters of the ecocredit module. */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the ecocredit module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryCreditTypeRequest is the Query/CreditType request type */
export interface QueryCreditTypeRequest {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
export interface QueryCreditTypeRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypeRequest";
    value: Uint8Array;
}
/** QueryCreditTypeRequest is the Query/CreditType request type */
export interface QueryCreditTypeRequestAmino {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
export interface QueryCreditTypeRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryCreditTypeRequest";
    value: QueryCreditTypeRequestAmino;
}
/** QueryCreditTypeRequest is the Query/CreditType request type */
export interface QueryCreditTypeRequestSDKType {
    abbreviation: string;
}
/** QueryCreditTypeResponse is the Query/CreditType response type */
export interface QueryCreditTypeResponse {
    /** credit_type is the fetched credit type. */
    creditType?: CreditType;
}
export interface QueryCreditTypeResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypeResponse";
    value: Uint8Array;
}
/** QueryCreditTypeResponse is the Query/CreditType response type */
export interface QueryCreditTypeResponseAmino {
    /** credit_type is the fetched credit type. */
    credit_type?: CreditTypeAmino;
}
export interface QueryCreditTypeResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryCreditTypeResponse";
    value: QueryCreditTypeResponseAmino;
}
/** QueryCreditTypeResponse is the Query/CreditType response type */
export interface QueryCreditTypeResponseSDKType {
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
export interface ClassInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassInfo";
    value: Uint8Array;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoAmino {
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
export interface ClassInfoAminoMsg {
    type: "/regen.ecocredit.v1.ClassInfo";
    value: ClassInfoAmino;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoSDKType {
    id: string;
    admin: string;
    metadata: string;
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
export interface ProjectInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ProjectInfo";
    value: Uint8Array;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoAmino {
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
export interface ProjectInfoAminoMsg {
    type: "/regen.ecocredit.v1.ProjectInfo";
    value: ProjectInfoAmino;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoSDKType {
    id: string;
    admin: string;
    class_id: string;
    jurisdiction: string;
    metadata: string;
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
export interface BatchInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchInfo";
    value: Uint8Array;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoAmino {
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
    start_date?: TimestampAmino;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: TimestampAmino;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuance_date?: TimestampAmino;
    /**
     * open determines whether or not the credit batch is open, i.e. whether or
     * not new credits can be minted to the credit batch.
     */
    open: boolean;
}
export interface BatchInfoAminoMsg {
    type: "/regen.ecocredit.v1.BatchInfo";
    value: BatchInfoAmino;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoSDKType {
    issuer: string;
    project_id: string;
    denom: string;
    metadata: string;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
    issuance_date?: TimestampSDKType;
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
export interface BatchBalanceInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo";
    value: Uint8Array;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoAmino {
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
export interface BatchBalanceInfoAminoMsg {
    type: "/regen.ecocredit.v1.BatchBalanceInfo";
    value: BatchBalanceInfoAmino;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoSDKType {
    address: string;
    batch_denom: string;
    tradable_amount: string;
    retired_amount: string;
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
export interface QueryClassCreatorAllowlistRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest";
    value: Uint8Array;
}
/**
 * QueryClassCreatorAllowlistRequest is the Query/ClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistRequestAmino {
}
export interface QueryClassCreatorAllowlistRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest";
    value: QueryClassCreatorAllowlistRequestAmino;
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
export interface QueryClassCreatorAllowlistResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse";
    value: Uint8Array;
}
/**
 * QueryClassCreatorAllowlistResponse is the Query/ClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistResponseAmino {
    /**
     * enabled determines whether or not the allowlist for creating credit classes
     * is enabled.
     */
    enabled: boolean;
}
export interface QueryClassCreatorAllowlistResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse";
    value: QueryClassCreatorAllowlistResponseAmino;
}
/**
 * QueryClassCreatorAllowlistResponse is the Query/ClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface QueryClassCreatorAllowlistResponseSDKType {
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
export interface QueryAllowedClassCreatorsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest";
    value: Uint8Array;
}
/**
 * QueryAllowedClassCreatorsRequest is the Query/AllowedClassCreators request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllowedClassCreatorsRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest";
    value: QueryAllowedClassCreatorsRequestAmino;
}
/**
 * QueryAllowedClassCreatorsRequest is the Query/AllowedClassCreators request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsRequestSDKType {
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
export interface QueryAllowedClassCreatorsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse";
    value: Uint8Array;
}
/**
 * QueryAllowedClassCreatorsResponse is the Query/AllowedClassCreators response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsResponseAmino {
    /** class_creators is the list of allowed credit class creators. */
    class_creators: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllowedClassCreatorsResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse";
    value: QueryAllowedClassCreatorsResponseAmino;
}
/**
 * QueryAllowedClassCreatorsResponse is the Query/AllowedClassCreators response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedClassCreatorsResponseSDKType {
    class_creators: string[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryClassFeeRequest is the Query/ClassFee request type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeRequest {
}
export interface QueryClassFeeRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest";
    value: Uint8Array;
}
/**
 * QueryClassFeeRequest is the Query/ClassFee request type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeRequestAmino {
}
export interface QueryClassFeeRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassFeeRequest";
    value: QueryClassFeeRequestAmino;
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
export interface QueryClassFeeResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassFeeResponse";
    value: Uint8Array;
}
/**
 * QueryClassFeeResponse is the Query/ClassFee response type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeResponseAmino {
    /**
     * fee is the credit class creation fee. If not set, a credit class creation
     * fee is not required.
     */
    fee?: CoinAmino;
}
export interface QueryClassFeeResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassFeeResponse";
    value: QueryClassFeeResponseAmino;
}
/**
 * QueryClassFeeResponse is the Query/ClassFee response type.
 *
 * Since Revision 2
 */
export interface QueryClassFeeResponseSDKType {
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
export interface QueryAllowedBridgeChainsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest";
    value: Uint8Array;
}
/**
 * QueryAllowedBridgeChainsRequest is the Query/AllowedBridgeChains request
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsRequestAmino {
}
export interface QueryAllowedBridgeChainsRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest";
    value: QueryAllowedBridgeChainsRequestAmino;
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
export interface QueryAllowedBridgeChainsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse";
    value: Uint8Array;
}
/**
 * QueryAllowedBridgeChainsResponse is the Query/AllowedBridgeChains response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsResponseAmino {
    /**
     * allowed_bridge_chains is a list of chains that are allowed to be used in
     * bridge operations.
     */
    allowed_bridge_chains: string[];
}
export interface QueryAllowedBridgeChainsResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse";
    value: QueryAllowedBridgeChainsResponseAmino;
}
/**
 * QueryAllowedBridgeChainsResponse is the Query/AllowedBridgeChains response
 * type.
 *
 * Since Revision 2
 */
export interface QueryAllowedBridgeChainsResponseSDKType {
    allowed_bridge_chains: string[];
}
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest;
    fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest;
    toAmino(message: QueryClassesRequest): QueryClassesRequestAmino;
    fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest;
    fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest;
    toProto(message: QueryClassesRequest): Uint8Array;
    toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse;
    fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse;
    toAmino(message: QueryClassesResponse): QueryClassesResponseAmino;
    fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse;
    fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse;
    toProto(message: QueryClassesResponse): Uint8Array;
    toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg;
};
export declare const QueryClassesByAdminRequest: {
    encode(message: QueryClassesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminRequest;
    fromJSON(object: any): QueryClassesByAdminRequest;
    toJSON(message: QueryClassesByAdminRequest): unknown;
    fromPartial(object: Partial<QueryClassesByAdminRequest>): QueryClassesByAdminRequest;
    fromAmino(object: QueryClassesByAdminRequestAmino): QueryClassesByAdminRequest;
    toAmino(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestAmino;
    fromAminoMsg(object: QueryClassesByAdminRequestAminoMsg): QueryClassesByAdminRequest;
    fromProtoMsg(message: QueryClassesByAdminRequestProtoMsg): QueryClassesByAdminRequest;
    toProto(message: QueryClassesByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestProtoMsg;
};
export declare const QueryClassesByAdminResponse: {
    encode(message: QueryClassesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminResponse;
    fromJSON(object: any): QueryClassesByAdminResponse;
    toJSON(message: QueryClassesByAdminResponse): unknown;
    fromPartial(object: Partial<QueryClassesByAdminResponse>): QueryClassesByAdminResponse;
    fromAmino(object: QueryClassesByAdminResponseAmino): QueryClassesByAdminResponse;
    toAmino(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseAmino;
    fromAminoMsg(object: QueryClassesByAdminResponseAminoMsg): QueryClassesByAdminResponse;
    fromProtoMsg(message: QueryClassesByAdminResponseProtoMsg): QueryClassesByAdminResponse;
    toProto(message: QueryClassesByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseProtoMsg;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest;
    fromAmino(object: QueryClassRequestAmino): QueryClassRequest;
    toAmino(message: QueryClassRequest): QueryClassRequestAmino;
    fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest;
    fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest;
    toProto(message: QueryClassRequest): Uint8Array;
    toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse;
    fromAmino(object: QueryClassResponseAmino): QueryClassResponse;
    toAmino(message: QueryClassResponse): QueryClassResponseAmino;
    fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse;
    fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse;
    toProto(message: QueryClassResponse): Uint8Array;
    toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg;
};
export declare const QueryClassIssuersRequest: {
    encode(message: QueryClassIssuersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersRequest;
    fromJSON(object: any): QueryClassIssuersRequest;
    toJSON(message: QueryClassIssuersRequest): unknown;
    fromPartial(object: Partial<QueryClassIssuersRequest>): QueryClassIssuersRequest;
    fromAmino(object: QueryClassIssuersRequestAmino): QueryClassIssuersRequest;
    toAmino(message: QueryClassIssuersRequest): QueryClassIssuersRequestAmino;
    fromAminoMsg(object: QueryClassIssuersRequestAminoMsg): QueryClassIssuersRequest;
    fromProtoMsg(message: QueryClassIssuersRequestProtoMsg): QueryClassIssuersRequest;
    toProto(message: QueryClassIssuersRequest): Uint8Array;
    toProtoMsg(message: QueryClassIssuersRequest): QueryClassIssuersRequestProtoMsg;
};
export declare const QueryClassIssuersResponse: {
    encode(message: QueryClassIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersResponse;
    fromJSON(object: any): QueryClassIssuersResponse;
    toJSON(message: QueryClassIssuersResponse): unknown;
    fromPartial(object: Partial<QueryClassIssuersResponse>): QueryClassIssuersResponse;
    fromAmino(object: QueryClassIssuersResponseAmino): QueryClassIssuersResponse;
    toAmino(message: QueryClassIssuersResponse): QueryClassIssuersResponseAmino;
    fromAminoMsg(object: QueryClassIssuersResponseAminoMsg): QueryClassIssuersResponse;
    fromProtoMsg(message: QueryClassIssuersResponseProtoMsg): QueryClassIssuersResponse;
    toProto(message: QueryClassIssuersResponse): Uint8Array;
    toProtoMsg(message: QueryClassIssuersResponse): QueryClassIssuersResponseProtoMsg;
};
export declare const QueryProjectsRequest: {
    encode(message: QueryProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsRequest;
    fromJSON(object: any): QueryProjectsRequest;
    toJSON(message: QueryProjectsRequest): unknown;
    fromPartial(object: Partial<QueryProjectsRequest>): QueryProjectsRequest;
    fromAmino(object: QueryProjectsRequestAmino): QueryProjectsRequest;
    toAmino(message: QueryProjectsRequest): QueryProjectsRequestAmino;
    fromAminoMsg(object: QueryProjectsRequestAminoMsg): QueryProjectsRequest;
    fromProtoMsg(message: QueryProjectsRequestProtoMsg): QueryProjectsRequest;
    toProto(message: QueryProjectsRequest): Uint8Array;
    toProtoMsg(message: QueryProjectsRequest): QueryProjectsRequestProtoMsg;
};
export declare const QueryProjectsResponse: {
    encode(message: QueryProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsResponse;
    fromJSON(object: any): QueryProjectsResponse;
    toJSON(message: QueryProjectsResponse): unknown;
    fromPartial(object: Partial<QueryProjectsResponse>): QueryProjectsResponse;
    fromAmino(object: QueryProjectsResponseAmino): QueryProjectsResponse;
    toAmino(message: QueryProjectsResponse): QueryProjectsResponseAmino;
    fromAminoMsg(object: QueryProjectsResponseAminoMsg): QueryProjectsResponse;
    fromProtoMsg(message: QueryProjectsResponseProtoMsg): QueryProjectsResponse;
    toProto(message: QueryProjectsResponse): Uint8Array;
    toProtoMsg(message: QueryProjectsResponse): QueryProjectsResponseProtoMsg;
};
export declare const QueryProjectsByClassRequest: {
    encode(message: QueryProjectsByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByClassRequest;
    fromJSON(object: any): QueryProjectsByClassRequest;
    toJSON(message: QueryProjectsByClassRequest): unknown;
    fromPartial(object: Partial<QueryProjectsByClassRequest>): QueryProjectsByClassRequest;
    fromAmino(object: QueryProjectsByClassRequestAmino): QueryProjectsByClassRequest;
    toAmino(message: QueryProjectsByClassRequest): QueryProjectsByClassRequestAmino;
    fromAminoMsg(object: QueryProjectsByClassRequestAminoMsg): QueryProjectsByClassRequest;
    fromProtoMsg(message: QueryProjectsByClassRequestProtoMsg): QueryProjectsByClassRequest;
    toProto(message: QueryProjectsByClassRequest): Uint8Array;
    toProtoMsg(message: QueryProjectsByClassRequest): QueryProjectsByClassRequestProtoMsg;
};
export declare const QueryProjectsByClassResponse: {
    encode(message: QueryProjectsByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByClassResponse;
    fromJSON(object: any): QueryProjectsByClassResponse;
    toJSON(message: QueryProjectsByClassResponse): unknown;
    fromPartial(object: Partial<QueryProjectsByClassResponse>): QueryProjectsByClassResponse;
    fromAmino(object: QueryProjectsByClassResponseAmino): QueryProjectsByClassResponse;
    toAmino(message: QueryProjectsByClassResponse): QueryProjectsByClassResponseAmino;
    fromAminoMsg(object: QueryProjectsByClassResponseAminoMsg): QueryProjectsByClassResponse;
    fromProtoMsg(message: QueryProjectsByClassResponseProtoMsg): QueryProjectsByClassResponse;
    toProto(message: QueryProjectsByClassResponse): Uint8Array;
    toProtoMsg(message: QueryProjectsByClassResponse): QueryProjectsByClassResponseProtoMsg;
};
export declare const QueryProjectsByReferenceIdRequest: {
    encode(message: QueryProjectsByReferenceIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdRequest;
    fromJSON(object: any): QueryProjectsByReferenceIdRequest;
    toJSON(message: QueryProjectsByReferenceIdRequest): unknown;
    fromPartial(object: Partial<QueryProjectsByReferenceIdRequest>): QueryProjectsByReferenceIdRequest;
    fromAmino(object: QueryProjectsByReferenceIdRequestAmino): QueryProjectsByReferenceIdRequest;
    toAmino(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestAmino;
    fromAminoMsg(object: QueryProjectsByReferenceIdRequestAminoMsg): QueryProjectsByReferenceIdRequest;
    fromProtoMsg(message: QueryProjectsByReferenceIdRequestProtoMsg): QueryProjectsByReferenceIdRequest;
    toProto(message: QueryProjectsByReferenceIdRequest): Uint8Array;
    toProtoMsg(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestProtoMsg;
};
export declare const QueryProjectsByReferenceIdResponse: {
    encode(message: QueryProjectsByReferenceIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdResponse;
    fromJSON(object: any): QueryProjectsByReferenceIdResponse;
    toJSON(message: QueryProjectsByReferenceIdResponse): unknown;
    fromPartial(object: Partial<QueryProjectsByReferenceIdResponse>): QueryProjectsByReferenceIdResponse;
    fromAmino(object: QueryProjectsByReferenceIdResponseAmino): QueryProjectsByReferenceIdResponse;
    toAmino(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseAmino;
    fromAminoMsg(object: QueryProjectsByReferenceIdResponseAminoMsg): QueryProjectsByReferenceIdResponse;
    fromProtoMsg(message: QueryProjectsByReferenceIdResponseProtoMsg): QueryProjectsByReferenceIdResponse;
    toProto(message: QueryProjectsByReferenceIdResponse): Uint8Array;
    toProtoMsg(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseProtoMsg;
};
export declare const QueryProjectsByAdminRequest: {
    encode(message: QueryProjectsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByAdminRequest;
    fromJSON(object: any): QueryProjectsByAdminRequest;
    toJSON(message: QueryProjectsByAdminRequest): unknown;
    fromPartial(object: Partial<QueryProjectsByAdminRequest>): QueryProjectsByAdminRequest;
    fromAmino(object: QueryProjectsByAdminRequestAmino): QueryProjectsByAdminRequest;
    toAmino(message: QueryProjectsByAdminRequest): QueryProjectsByAdminRequestAmino;
    fromAminoMsg(object: QueryProjectsByAdminRequestAminoMsg): QueryProjectsByAdminRequest;
    fromProtoMsg(message: QueryProjectsByAdminRequestProtoMsg): QueryProjectsByAdminRequest;
    toProto(message: QueryProjectsByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryProjectsByAdminRequest): QueryProjectsByAdminRequestProtoMsg;
};
export declare const QueryProjectsByAdminResponse: {
    encode(message: QueryProjectsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByAdminResponse;
    fromJSON(object: any): QueryProjectsByAdminResponse;
    toJSON(message: QueryProjectsByAdminResponse): unknown;
    fromPartial(object: Partial<QueryProjectsByAdminResponse>): QueryProjectsByAdminResponse;
    fromAmino(object: QueryProjectsByAdminResponseAmino): QueryProjectsByAdminResponse;
    toAmino(message: QueryProjectsByAdminResponse): QueryProjectsByAdminResponseAmino;
    fromAminoMsg(object: QueryProjectsByAdminResponseAminoMsg): QueryProjectsByAdminResponse;
    fromProtoMsg(message: QueryProjectsByAdminResponseProtoMsg): QueryProjectsByAdminResponse;
    toProto(message: QueryProjectsByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryProjectsByAdminResponse): QueryProjectsByAdminResponseProtoMsg;
};
export declare const QueryProjectRequest: {
    encode(message: QueryProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectRequest;
    fromJSON(object: any): QueryProjectRequest;
    toJSON(message: QueryProjectRequest): unknown;
    fromPartial(object: Partial<QueryProjectRequest>): QueryProjectRequest;
    fromAmino(object: QueryProjectRequestAmino): QueryProjectRequest;
    toAmino(message: QueryProjectRequest): QueryProjectRequestAmino;
    fromAminoMsg(object: QueryProjectRequestAminoMsg): QueryProjectRequest;
    fromProtoMsg(message: QueryProjectRequestProtoMsg): QueryProjectRequest;
    toProto(message: QueryProjectRequest): Uint8Array;
    toProtoMsg(message: QueryProjectRequest): QueryProjectRequestProtoMsg;
};
export declare const QueryProjectResponse: {
    encode(message: QueryProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectResponse;
    fromJSON(object: any): QueryProjectResponse;
    toJSON(message: QueryProjectResponse): unknown;
    fromPartial(object: Partial<QueryProjectResponse>): QueryProjectResponse;
    fromAmino(object: QueryProjectResponseAmino): QueryProjectResponse;
    toAmino(message: QueryProjectResponse): QueryProjectResponseAmino;
    fromAminoMsg(object: QueryProjectResponseAminoMsg): QueryProjectResponse;
    fromProtoMsg(message: QueryProjectResponseProtoMsg): QueryProjectResponse;
    toProto(message: QueryProjectResponse): Uint8Array;
    toProtoMsg(message: QueryProjectResponse): QueryProjectResponseProtoMsg;
};
export declare const QueryBatchesRequest: {
    encode(message: QueryBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest;
    fromJSON(object: any): QueryBatchesRequest;
    toJSON(message: QueryBatchesRequest): unknown;
    fromPartial(object: Partial<QueryBatchesRequest>): QueryBatchesRequest;
    fromAmino(object: QueryBatchesRequestAmino): QueryBatchesRequest;
    toAmino(message: QueryBatchesRequest): QueryBatchesRequestAmino;
    fromAminoMsg(object: QueryBatchesRequestAminoMsg): QueryBatchesRequest;
    fromProtoMsg(message: QueryBatchesRequestProtoMsg): QueryBatchesRequest;
    toProto(message: QueryBatchesRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesRequest): QueryBatchesRequestProtoMsg;
};
export declare const QueryBatchesResponse: {
    encode(message: QueryBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesResponse;
    fromJSON(object: any): QueryBatchesResponse;
    toJSON(message: QueryBatchesResponse): unknown;
    fromPartial(object: Partial<QueryBatchesResponse>): QueryBatchesResponse;
    fromAmino(object: QueryBatchesResponseAmino): QueryBatchesResponse;
    toAmino(message: QueryBatchesResponse): QueryBatchesResponseAmino;
    fromAminoMsg(object: QueryBatchesResponseAminoMsg): QueryBatchesResponse;
    fromProtoMsg(message: QueryBatchesResponseProtoMsg): QueryBatchesResponse;
    toProto(message: QueryBatchesResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesResponse): QueryBatchesResponseProtoMsg;
};
export declare const QueryBatchesByIssuerRequest: {
    encode(message: QueryBatchesByIssuerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerRequest;
    fromJSON(object: any): QueryBatchesByIssuerRequest;
    toJSON(message: QueryBatchesByIssuerRequest): unknown;
    fromPartial(object: Partial<QueryBatchesByIssuerRequest>): QueryBatchesByIssuerRequest;
    fromAmino(object: QueryBatchesByIssuerRequestAmino): QueryBatchesByIssuerRequest;
    toAmino(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestAmino;
    fromAminoMsg(object: QueryBatchesByIssuerRequestAminoMsg): QueryBatchesByIssuerRequest;
    fromProtoMsg(message: QueryBatchesByIssuerRequestProtoMsg): QueryBatchesByIssuerRequest;
    toProto(message: QueryBatchesByIssuerRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestProtoMsg;
};
export declare const QueryBatchesByIssuerResponse: {
    encode(message: QueryBatchesByIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerResponse;
    fromJSON(object: any): QueryBatchesByIssuerResponse;
    toJSON(message: QueryBatchesByIssuerResponse): unknown;
    fromPartial(object: Partial<QueryBatchesByIssuerResponse>): QueryBatchesByIssuerResponse;
    fromAmino(object: QueryBatchesByIssuerResponseAmino): QueryBatchesByIssuerResponse;
    toAmino(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseAmino;
    fromAminoMsg(object: QueryBatchesByIssuerResponseAminoMsg): QueryBatchesByIssuerResponse;
    fromProtoMsg(message: QueryBatchesByIssuerResponseProtoMsg): QueryBatchesByIssuerResponse;
    toProto(message: QueryBatchesByIssuerResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseProtoMsg;
};
export declare const QueryBatchesByClassRequest: {
    encode(message: QueryBatchesByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassRequest;
    fromJSON(object: any): QueryBatchesByClassRequest;
    toJSON(message: QueryBatchesByClassRequest): unknown;
    fromPartial(object: Partial<QueryBatchesByClassRequest>): QueryBatchesByClassRequest;
    fromAmino(object: QueryBatchesByClassRequestAmino): QueryBatchesByClassRequest;
    toAmino(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestAmino;
    fromAminoMsg(object: QueryBatchesByClassRequestAminoMsg): QueryBatchesByClassRequest;
    fromProtoMsg(message: QueryBatchesByClassRequestProtoMsg): QueryBatchesByClassRequest;
    toProto(message: QueryBatchesByClassRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestProtoMsg;
};
export declare const QueryBatchesByProjectRequest: {
    encode(message: QueryBatchesByProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByProjectRequest;
    fromJSON(object: any): QueryBatchesByProjectRequest;
    toJSON(message: QueryBatchesByProjectRequest): unknown;
    fromPartial(object: Partial<QueryBatchesByProjectRequest>): QueryBatchesByProjectRequest;
    fromAmino(object: QueryBatchesByProjectRequestAmino): QueryBatchesByProjectRequest;
    toAmino(message: QueryBatchesByProjectRequest): QueryBatchesByProjectRequestAmino;
    fromAminoMsg(object: QueryBatchesByProjectRequestAminoMsg): QueryBatchesByProjectRequest;
    fromProtoMsg(message: QueryBatchesByProjectRequestProtoMsg): QueryBatchesByProjectRequest;
    toProto(message: QueryBatchesByProjectRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesByProjectRequest): QueryBatchesByProjectRequestProtoMsg;
};
export declare const QueryBatchesByProjectResponse: {
    encode(message: QueryBatchesByProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByProjectResponse;
    fromJSON(object: any): QueryBatchesByProjectResponse;
    toJSON(message: QueryBatchesByProjectResponse): unknown;
    fromPartial(object: Partial<QueryBatchesByProjectResponse>): QueryBatchesByProjectResponse;
    fromAmino(object: QueryBatchesByProjectResponseAmino): QueryBatchesByProjectResponse;
    toAmino(message: QueryBatchesByProjectResponse): QueryBatchesByProjectResponseAmino;
    fromAminoMsg(object: QueryBatchesByProjectResponseAminoMsg): QueryBatchesByProjectResponse;
    fromProtoMsg(message: QueryBatchesByProjectResponseProtoMsg): QueryBatchesByProjectResponse;
    toProto(message: QueryBatchesByProjectResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesByProjectResponse): QueryBatchesByProjectResponseProtoMsg;
};
export declare const QueryBatchesByClassResponse: {
    encode(message: QueryBatchesByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassResponse;
    fromJSON(object: any): QueryBatchesByClassResponse;
    toJSON(message: QueryBatchesByClassResponse): unknown;
    fromPartial(object: Partial<QueryBatchesByClassResponse>): QueryBatchesByClassResponse;
    fromAmino(object: QueryBatchesByClassResponseAmino): QueryBatchesByClassResponse;
    toAmino(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseAmino;
    fromAminoMsg(object: QueryBatchesByClassResponseAminoMsg): QueryBatchesByClassResponse;
    fromProtoMsg(message: QueryBatchesByClassResponseProtoMsg): QueryBatchesByClassResponse;
    toProto(message: QueryBatchesByClassResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseProtoMsg;
};
export declare const QueryBatchRequest: {
    encode(message: QueryBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest;
    fromJSON(object: any): QueryBatchRequest;
    toJSON(message: QueryBatchRequest): unknown;
    fromPartial(object: Partial<QueryBatchRequest>): QueryBatchRequest;
    fromAmino(object: QueryBatchRequestAmino): QueryBatchRequest;
    toAmino(message: QueryBatchRequest): QueryBatchRequestAmino;
    fromAminoMsg(object: QueryBatchRequestAminoMsg): QueryBatchRequest;
    fromProtoMsg(message: QueryBatchRequestProtoMsg): QueryBatchRequest;
    toProto(message: QueryBatchRequest): Uint8Array;
    toProtoMsg(message: QueryBatchRequest): QueryBatchRequestProtoMsg;
};
export declare const QueryBatchResponse: {
    encode(message: QueryBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse;
    fromJSON(object: any): QueryBatchResponse;
    toJSON(message: QueryBatchResponse): unknown;
    fromPartial(object: Partial<QueryBatchResponse>): QueryBatchResponse;
    fromAmino(object: QueryBatchResponseAmino): QueryBatchResponse;
    toAmino(message: QueryBatchResponse): QueryBatchResponseAmino;
    fromAminoMsg(object: QueryBatchResponseAminoMsg): QueryBatchResponse;
    fromProtoMsg(message: QueryBatchResponseProtoMsg): QueryBatchResponse;
    toProto(message: QueryBatchResponse): Uint8Array;
    toProtoMsg(message: QueryBatchResponse): QueryBatchResponseProtoMsg;
};
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryBalancesRequest: {
    encode(message: QueryBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest;
    fromJSON(object: any): QueryBalancesRequest;
    toJSON(message: QueryBalancesRequest): unknown;
    fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest;
    fromAmino(object: QueryBalancesRequestAmino): QueryBalancesRequest;
    toAmino(message: QueryBalancesRequest): QueryBalancesRequestAmino;
    fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest;
    fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest;
    toProto(message: QueryBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg;
};
export declare const QueryBalancesResponse: {
    encode(message: QueryBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse;
    fromJSON(object: any): QueryBalancesResponse;
    toJSON(message: QueryBalancesResponse): unknown;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
    fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse;
    toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino;
    fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse;
    fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse;
    toProto(message: QueryBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg;
};
export declare const QueryBalancesByBatchRequest: {
    encode(message: QueryBalancesByBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesByBatchRequest;
    fromJSON(object: any): QueryBalancesByBatchRequest;
    toJSON(message: QueryBalancesByBatchRequest): unknown;
    fromPartial(object: Partial<QueryBalancesByBatchRequest>): QueryBalancesByBatchRequest;
    fromAmino(object: QueryBalancesByBatchRequestAmino): QueryBalancesByBatchRequest;
    toAmino(message: QueryBalancesByBatchRequest): QueryBalancesByBatchRequestAmino;
    fromAminoMsg(object: QueryBalancesByBatchRequestAminoMsg): QueryBalancesByBatchRequest;
    fromProtoMsg(message: QueryBalancesByBatchRequestProtoMsg): QueryBalancesByBatchRequest;
    toProto(message: QueryBalancesByBatchRequest): Uint8Array;
    toProtoMsg(message: QueryBalancesByBatchRequest): QueryBalancesByBatchRequestProtoMsg;
};
export declare const QueryBalancesByBatchResponse: {
    encode(message: QueryBalancesByBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesByBatchResponse;
    fromJSON(object: any): QueryBalancesByBatchResponse;
    toJSON(message: QueryBalancesByBatchResponse): unknown;
    fromPartial(object: Partial<QueryBalancesByBatchResponse>): QueryBalancesByBatchResponse;
    fromAmino(object: QueryBalancesByBatchResponseAmino): QueryBalancesByBatchResponse;
    toAmino(message: QueryBalancesByBatchResponse): QueryBalancesByBatchResponseAmino;
    fromAminoMsg(object: QueryBalancesByBatchResponseAminoMsg): QueryBalancesByBatchResponse;
    fromProtoMsg(message: QueryBalancesByBatchResponseProtoMsg): QueryBalancesByBatchResponse;
    toProto(message: QueryBalancesByBatchResponse): Uint8Array;
    toProtoMsg(message: QueryBalancesByBatchResponse): QueryBalancesByBatchResponseProtoMsg;
};
export declare const QueryAllBalancesRequest: {
    encode(message: QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    fromPartial(object: Partial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
    fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest;
    toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino;
    fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest;
    fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest;
    toProto(message: QueryAllBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg;
};
export declare const QueryAllBalancesResponse: {
    encode(message: QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    fromPartial(object: Partial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
    fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse;
    toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino;
    fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse;
    fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse;
    toProto(message: QueryAllBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
export declare const QueryCreditTypesRequest: {
    encode(_: QueryCreditTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesRequest;
    fromJSON(_: any): QueryCreditTypesRequest;
    toJSON(_: QueryCreditTypesRequest): unknown;
    fromPartial(_: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest;
    fromAmino(_: QueryCreditTypesRequestAmino): QueryCreditTypesRequest;
    toAmino(_: QueryCreditTypesRequest): QueryCreditTypesRequestAmino;
    fromAminoMsg(object: QueryCreditTypesRequestAminoMsg): QueryCreditTypesRequest;
    fromProtoMsg(message: QueryCreditTypesRequestProtoMsg): QueryCreditTypesRequest;
    toProto(message: QueryCreditTypesRequest): Uint8Array;
    toProtoMsg(message: QueryCreditTypesRequest): QueryCreditTypesRequestProtoMsg;
};
export declare const QueryCreditTypesResponse: {
    encode(message: QueryCreditTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesResponse;
    fromJSON(object: any): QueryCreditTypesResponse;
    toJSON(message: QueryCreditTypesResponse): unknown;
    fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse;
    fromAmino(object: QueryCreditTypesResponseAmino): QueryCreditTypesResponse;
    toAmino(message: QueryCreditTypesResponse): QueryCreditTypesResponseAmino;
    fromAminoMsg(object: QueryCreditTypesResponseAminoMsg): QueryCreditTypesResponse;
    fromProtoMsg(message: QueryCreditTypesResponseProtoMsg): QueryCreditTypesResponse;
    toProto(message: QueryCreditTypesResponse): Uint8Array;
    toProtoMsg(message: QueryCreditTypesResponse): QueryCreditTypesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryCreditTypeRequest: {
    encode(message: QueryCreditTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeRequest;
    fromJSON(object: any): QueryCreditTypeRequest;
    toJSON(message: QueryCreditTypeRequest): unknown;
    fromPartial(object: Partial<QueryCreditTypeRequest>): QueryCreditTypeRequest;
    fromAmino(object: QueryCreditTypeRequestAmino): QueryCreditTypeRequest;
    toAmino(message: QueryCreditTypeRequest): QueryCreditTypeRequestAmino;
    fromAminoMsg(object: QueryCreditTypeRequestAminoMsg): QueryCreditTypeRequest;
    fromProtoMsg(message: QueryCreditTypeRequestProtoMsg): QueryCreditTypeRequest;
    toProto(message: QueryCreditTypeRequest): Uint8Array;
    toProtoMsg(message: QueryCreditTypeRequest): QueryCreditTypeRequestProtoMsg;
};
export declare const QueryCreditTypeResponse: {
    encode(message: QueryCreditTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeResponse;
    fromJSON(object: any): QueryCreditTypeResponse;
    toJSON(message: QueryCreditTypeResponse): unknown;
    fromPartial(object: Partial<QueryCreditTypeResponse>): QueryCreditTypeResponse;
    fromAmino(object: QueryCreditTypeResponseAmino): QueryCreditTypeResponse;
    toAmino(message: QueryCreditTypeResponse): QueryCreditTypeResponseAmino;
    fromAminoMsg(object: QueryCreditTypeResponseAminoMsg): QueryCreditTypeResponse;
    fromProtoMsg(message: QueryCreditTypeResponseProtoMsg): QueryCreditTypeResponse;
    toProto(message: QueryCreditTypeResponse): Uint8Array;
    toProtoMsg(message: QueryCreditTypeResponse): QueryCreditTypeResponseProtoMsg;
};
export declare const ClassInfo: {
    encode(message: ClassInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo;
    fromJSON(object: any): ClassInfo;
    toJSON(message: ClassInfo): unknown;
    fromPartial(object: Partial<ClassInfo>): ClassInfo;
    fromAmino(object: ClassInfoAmino): ClassInfo;
    toAmino(message: ClassInfo): ClassInfoAmino;
    fromAminoMsg(object: ClassInfoAminoMsg): ClassInfo;
    fromProtoMsg(message: ClassInfoProtoMsg): ClassInfo;
    toProto(message: ClassInfo): Uint8Array;
    toProtoMsg(message: ClassInfo): ClassInfoProtoMsg;
};
export declare const ProjectInfo: {
    encode(message: ProjectInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfo;
    fromJSON(object: any): ProjectInfo;
    toJSON(message: ProjectInfo): unknown;
    fromPartial(object: Partial<ProjectInfo>): ProjectInfo;
    fromAmino(object: ProjectInfoAmino): ProjectInfo;
    toAmino(message: ProjectInfo): ProjectInfoAmino;
    fromAminoMsg(object: ProjectInfoAminoMsg): ProjectInfo;
    fromProtoMsg(message: ProjectInfoProtoMsg): ProjectInfo;
    toProto(message: ProjectInfo): Uint8Array;
    toProtoMsg(message: ProjectInfo): ProjectInfoProtoMsg;
};
export declare const BatchInfo: {
    encode(message: BatchInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo;
    fromJSON(object: any): BatchInfo;
    toJSON(message: BatchInfo): unknown;
    fromPartial(object: Partial<BatchInfo>): BatchInfo;
    fromAmino(object: BatchInfoAmino): BatchInfo;
    toAmino(message: BatchInfo): BatchInfoAmino;
    fromAminoMsg(object: BatchInfoAminoMsg): BatchInfo;
    fromProtoMsg(message: BatchInfoProtoMsg): BatchInfo;
    toProto(message: BatchInfo): Uint8Array;
    toProtoMsg(message: BatchInfo): BatchInfoProtoMsg;
};
export declare const BatchBalanceInfo: {
    encode(message: BatchBalanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalanceInfo;
    fromJSON(object: any): BatchBalanceInfo;
    toJSON(message: BatchBalanceInfo): unknown;
    fromPartial(object: Partial<BatchBalanceInfo>): BatchBalanceInfo;
    fromAmino(object: BatchBalanceInfoAmino): BatchBalanceInfo;
    toAmino(message: BatchBalanceInfo): BatchBalanceInfoAmino;
    fromAminoMsg(object: BatchBalanceInfoAminoMsg): BatchBalanceInfo;
    fromProtoMsg(message: BatchBalanceInfoProtoMsg): BatchBalanceInfo;
    toProto(message: BatchBalanceInfo): Uint8Array;
    toProtoMsg(message: BatchBalanceInfo): BatchBalanceInfoProtoMsg;
};
export declare const QueryClassCreatorAllowlistRequest: {
    encode(_: QueryClassCreatorAllowlistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassCreatorAllowlistRequest;
    fromJSON(_: any): QueryClassCreatorAllowlistRequest;
    toJSON(_: QueryClassCreatorAllowlistRequest): unknown;
    fromPartial(_: Partial<QueryClassCreatorAllowlistRequest>): QueryClassCreatorAllowlistRequest;
    fromAmino(_: QueryClassCreatorAllowlistRequestAmino): QueryClassCreatorAllowlistRequest;
    toAmino(_: QueryClassCreatorAllowlistRequest): QueryClassCreatorAllowlistRequestAmino;
    fromAminoMsg(object: QueryClassCreatorAllowlistRequestAminoMsg): QueryClassCreatorAllowlistRequest;
    fromProtoMsg(message: QueryClassCreatorAllowlistRequestProtoMsg): QueryClassCreatorAllowlistRequest;
    toProto(message: QueryClassCreatorAllowlistRequest): Uint8Array;
    toProtoMsg(message: QueryClassCreatorAllowlistRequest): QueryClassCreatorAllowlistRequestProtoMsg;
};
export declare const QueryClassCreatorAllowlistResponse: {
    encode(message: QueryClassCreatorAllowlistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassCreatorAllowlistResponse;
    fromJSON(object: any): QueryClassCreatorAllowlistResponse;
    toJSON(message: QueryClassCreatorAllowlistResponse): unknown;
    fromPartial(object: Partial<QueryClassCreatorAllowlistResponse>): QueryClassCreatorAllowlistResponse;
    fromAmino(object: QueryClassCreatorAllowlistResponseAmino): QueryClassCreatorAllowlistResponse;
    toAmino(message: QueryClassCreatorAllowlistResponse): QueryClassCreatorAllowlistResponseAmino;
    fromAminoMsg(object: QueryClassCreatorAllowlistResponseAminoMsg): QueryClassCreatorAllowlistResponse;
    fromProtoMsg(message: QueryClassCreatorAllowlistResponseProtoMsg): QueryClassCreatorAllowlistResponse;
    toProto(message: QueryClassCreatorAllowlistResponse): Uint8Array;
    toProtoMsg(message: QueryClassCreatorAllowlistResponse): QueryClassCreatorAllowlistResponseProtoMsg;
};
export declare const QueryAllowedClassCreatorsRequest: {
    encode(message: QueryAllowedClassCreatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedClassCreatorsRequest;
    fromJSON(object: any): QueryAllowedClassCreatorsRequest;
    toJSON(message: QueryAllowedClassCreatorsRequest): unknown;
    fromPartial(object: Partial<QueryAllowedClassCreatorsRequest>): QueryAllowedClassCreatorsRequest;
    fromAmino(object: QueryAllowedClassCreatorsRequestAmino): QueryAllowedClassCreatorsRequest;
    toAmino(message: QueryAllowedClassCreatorsRequest): QueryAllowedClassCreatorsRequestAmino;
    fromAminoMsg(object: QueryAllowedClassCreatorsRequestAminoMsg): QueryAllowedClassCreatorsRequest;
    fromProtoMsg(message: QueryAllowedClassCreatorsRequestProtoMsg): QueryAllowedClassCreatorsRequest;
    toProto(message: QueryAllowedClassCreatorsRequest): Uint8Array;
    toProtoMsg(message: QueryAllowedClassCreatorsRequest): QueryAllowedClassCreatorsRequestProtoMsg;
};
export declare const QueryAllowedClassCreatorsResponse: {
    encode(message: QueryAllowedClassCreatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedClassCreatorsResponse;
    fromJSON(object: any): QueryAllowedClassCreatorsResponse;
    toJSON(message: QueryAllowedClassCreatorsResponse): unknown;
    fromPartial(object: Partial<QueryAllowedClassCreatorsResponse>): QueryAllowedClassCreatorsResponse;
    fromAmino(object: QueryAllowedClassCreatorsResponseAmino): QueryAllowedClassCreatorsResponse;
    toAmino(message: QueryAllowedClassCreatorsResponse): QueryAllowedClassCreatorsResponseAmino;
    fromAminoMsg(object: QueryAllowedClassCreatorsResponseAminoMsg): QueryAllowedClassCreatorsResponse;
    fromProtoMsg(message: QueryAllowedClassCreatorsResponseProtoMsg): QueryAllowedClassCreatorsResponse;
    toProto(message: QueryAllowedClassCreatorsResponse): Uint8Array;
    toProtoMsg(message: QueryAllowedClassCreatorsResponse): QueryAllowedClassCreatorsResponseProtoMsg;
};
export declare const QueryClassFeeRequest: {
    encode(_: QueryClassFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassFeeRequest;
    fromJSON(_: any): QueryClassFeeRequest;
    toJSON(_: QueryClassFeeRequest): unknown;
    fromPartial(_: Partial<QueryClassFeeRequest>): QueryClassFeeRequest;
    fromAmino(_: QueryClassFeeRequestAmino): QueryClassFeeRequest;
    toAmino(_: QueryClassFeeRequest): QueryClassFeeRequestAmino;
    fromAminoMsg(object: QueryClassFeeRequestAminoMsg): QueryClassFeeRequest;
    fromProtoMsg(message: QueryClassFeeRequestProtoMsg): QueryClassFeeRequest;
    toProto(message: QueryClassFeeRequest): Uint8Array;
    toProtoMsg(message: QueryClassFeeRequest): QueryClassFeeRequestProtoMsg;
};
export declare const QueryClassFeeResponse: {
    encode(message: QueryClassFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassFeeResponse;
    fromJSON(object: any): QueryClassFeeResponse;
    toJSON(message: QueryClassFeeResponse): unknown;
    fromPartial(object: Partial<QueryClassFeeResponse>): QueryClassFeeResponse;
    fromAmino(object: QueryClassFeeResponseAmino): QueryClassFeeResponse;
    toAmino(message: QueryClassFeeResponse): QueryClassFeeResponseAmino;
    fromAminoMsg(object: QueryClassFeeResponseAminoMsg): QueryClassFeeResponse;
    fromProtoMsg(message: QueryClassFeeResponseProtoMsg): QueryClassFeeResponse;
    toProto(message: QueryClassFeeResponse): Uint8Array;
    toProtoMsg(message: QueryClassFeeResponse): QueryClassFeeResponseProtoMsg;
};
export declare const QueryAllowedBridgeChainsRequest: {
    encode(_: QueryAllowedBridgeChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBridgeChainsRequest;
    fromJSON(_: any): QueryAllowedBridgeChainsRequest;
    toJSON(_: QueryAllowedBridgeChainsRequest): unknown;
    fromPartial(_: Partial<QueryAllowedBridgeChainsRequest>): QueryAllowedBridgeChainsRequest;
    fromAmino(_: QueryAllowedBridgeChainsRequestAmino): QueryAllowedBridgeChainsRequest;
    toAmino(_: QueryAllowedBridgeChainsRequest): QueryAllowedBridgeChainsRequestAmino;
    fromAminoMsg(object: QueryAllowedBridgeChainsRequestAminoMsg): QueryAllowedBridgeChainsRequest;
    fromProtoMsg(message: QueryAllowedBridgeChainsRequestProtoMsg): QueryAllowedBridgeChainsRequest;
    toProto(message: QueryAllowedBridgeChainsRequest): Uint8Array;
    toProtoMsg(message: QueryAllowedBridgeChainsRequest): QueryAllowedBridgeChainsRequestProtoMsg;
};
export declare const QueryAllowedBridgeChainsResponse: {
    encode(message: QueryAllowedBridgeChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBridgeChainsResponse;
    fromJSON(object: any): QueryAllowedBridgeChainsResponse;
    toJSON(message: QueryAllowedBridgeChainsResponse): unknown;
    fromPartial(object: Partial<QueryAllowedBridgeChainsResponse>): QueryAllowedBridgeChainsResponse;
    fromAmino(object: QueryAllowedBridgeChainsResponseAmino): QueryAllowedBridgeChainsResponse;
    toAmino(message: QueryAllowedBridgeChainsResponse): QueryAllowedBridgeChainsResponseAmino;
    fromAminoMsg(object: QueryAllowedBridgeChainsResponseAminoMsg): QueryAllowedBridgeChainsResponse;
    fromProtoMsg(message: QueryAllowedBridgeChainsResponseProtoMsg): QueryAllowedBridgeChainsResponse;
    toProto(message: QueryAllowedBridgeChainsResponse): Uint8Array;
    toProtoMsg(message: QueryAllowedBridgeChainsResponse): QueryAllowedBridgeChainsResponseProtoMsg;
};
