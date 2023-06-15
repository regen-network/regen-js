import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { Params, ParamsAmino, ParamsSDKType } from "./types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
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

export interface QueryCreditTypesRequest {}
export interface QueryCreditTypesRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest";
  value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */

export interface QueryCreditTypesRequestAmino {}
export interface QueryCreditTypesRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryCreditTypesRequest";
  value: QueryCreditTypesRequestAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */

export interface QueryCreditTypesRequestSDKType {}
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

export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the Query/Params request type. */

export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the Query/Params request type. */

export interface QueryParamsRequestSDKType {}
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

export interface QueryClassCreatorAllowlistRequest {}
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

export interface QueryClassCreatorAllowlistRequestAmino {}
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

export interface QueryClassCreatorAllowlistRequestSDKType {}
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

export interface QueryClassFeeRequest {}
export interface QueryClassFeeRequestProtoMsg {
  typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest";
  value: Uint8Array;
}
/**
 * QueryClassFeeRequest is the Query/ClassFee request type.
 * 
 * Since Revision 2
 */

export interface QueryClassFeeRequestAmino {}
export interface QueryClassFeeRequestAminoMsg {
  type: "/regen.ecocredit.v1.QueryClassFeeRequest";
  value: QueryClassFeeRequestAmino;
}
/**
 * QueryClassFeeRequest is the Query/ClassFee request type.
 * 
 * Since Revision 2
 */

export interface QueryClassFeeRequestSDKType {}
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

export interface QueryAllowedBridgeChainsRequest {}
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

export interface QueryAllowedBridgeChainsRequestAmino {}
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

export interface QueryAllowedBridgeChainsRequestSDKType {}
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

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}

export const QueryClassesRequest = {
  encode(message: QueryClassesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },

  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }

};

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}

export const QueryClassesResponse = {
  encode(message: QueryClassesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },

  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }

};

function createBaseQueryClassesByAdminRequest(): QueryClassesByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}

export const QueryClassesByAdminRequest = {
  encode(message: QueryClassesByAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAdminRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassesByAdminRequest>): QueryClassesByAdminRequest {
    const message = createBaseQueryClassesByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryClassesByAdminRequestAmino): QueryClassesByAdminRequest {
    return {
      admin: object.admin,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassesByAdminRequestAminoMsg): QueryClassesByAdminRequest {
    return QueryClassesByAdminRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassesByAdminRequestProtoMsg): QueryClassesByAdminRequest {
    return QueryClassesByAdminRequest.decode(message.value);
  },

  toProto(message: QueryClassesByAdminRequest): Uint8Array {
    return QueryClassesByAdminRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
      value: QueryClassesByAdminRequest.encode(message).finish()
    };
  }

};

function createBaseQueryClassesByAdminResponse(): QueryClassesByAdminResponse {
  return {
    classes: [],
    pagination: undefined
  };
}

export const QueryClassesByAdminResponse = {
  encode(message: QueryClassesByAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classes.push(ClassInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesByAdminResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByAdminResponse): unknown {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassesByAdminResponse>): QueryClassesByAdminResponse {
    const message = createBaseQueryClassesByAdminResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryClassesByAdminResponseAmino): QueryClassesByAdminResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => ClassInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseAmino {
    const obj: any = {};

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? ClassInfo.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassesByAdminResponseAminoMsg): QueryClassesByAdminResponse {
    return QueryClassesByAdminResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassesByAdminResponseProtoMsg): QueryClassesByAdminResponse {
    return QueryClassesByAdminResponse.decode(message.value);
  },

  toProto(message: QueryClassesByAdminResponse): Uint8Array {
    return QueryClassesByAdminResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
      value: QueryClassesByAdminResponse.encode(message).finish()
    };
  }

};

function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}

export const QueryClassRequest = {
  encode(message: QueryClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },

  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    return {
      classId: object.class_id
    };
  },

  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },

  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },

  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }

};

function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}

export const QueryClassResponse = {
  encode(message: QueryClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      ClassInfo.encode(message.class, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.class = ClassInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassResponse {
    return {
      class: isSet(object.class) ? ClassInfo.fromJSON(object.class) : undefined
    };
  },

  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? ClassInfo.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? ClassInfo.fromPartial(object.class) : undefined;
    return message;
  },

  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    return {
      class: object?.class ? ClassInfo.fromAmino(object.class) : undefined
    };
  },

  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? ClassInfo.toAmino(message.class) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },

  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }

};

function createBaseQueryClassIssuersRequest(): QueryClassIssuersRequest {
  return {
    classId: "",
    pagination: undefined
  };
}

export const QueryClassIssuersRequest = {
  encode(message: QueryClassIssuersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassIssuersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassIssuersRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassIssuersRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassIssuersRequest>): QueryClassIssuersRequest {
    const message = createBaseQueryClassIssuersRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryClassIssuersRequestAmino): QueryClassIssuersRequest {
    return {
      classId: object.class_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryClassIssuersRequest): QueryClassIssuersRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassIssuersRequestAminoMsg): QueryClassIssuersRequest {
    return QueryClassIssuersRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassIssuersRequestProtoMsg): QueryClassIssuersRequest {
    return QueryClassIssuersRequest.decode(message.value);
  },

  toProto(message: QueryClassIssuersRequest): Uint8Array {
    return QueryClassIssuersRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryClassIssuersRequest): QueryClassIssuersRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
      value: QueryClassIssuersRequest.encode(message).finish()
    };
  }

};

function createBaseQueryClassIssuersResponse(): QueryClassIssuersResponse {
  return {
    issuers: [],
    pagination: undefined
  };
}

export const QueryClassIssuersResponse = {
  encode(message: QueryClassIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.issuers) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassIssuersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuers.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassIssuersResponse): unknown {
    const obj: any = {};

    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassIssuersResponse>): QueryClassIssuersResponse {
    const message = createBaseQueryClassIssuersResponse();
    message.issuers = object.issuers?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryClassIssuersResponseAmino): QueryClassIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryClassIssuersResponse): QueryClassIssuersResponseAmino {
    const obj: any = {};

    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassIssuersResponseAminoMsg): QueryClassIssuersResponse {
    return QueryClassIssuersResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassIssuersResponseProtoMsg): QueryClassIssuersResponse {
    return QueryClassIssuersResponse.decode(message.value);
  },

  toProto(message: QueryClassIssuersResponse): Uint8Array {
    return QueryClassIssuersResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryClassIssuersResponse): QueryClassIssuersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
      value: QueryClassIssuersResponse.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsRequest(): QueryProjectsRequest {
  return {
    pagination: undefined
  };
}

export const QueryProjectsRequest = {
  encode(message: QueryProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsRequest>): QueryProjectsRequest {
    const message = createBaseQueryProjectsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsRequestAmino): QueryProjectsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsRequest): QueryProjectsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsRequestAminoMsg): QueryProjectsRequest {
    return QueryProjectsRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsRequestProtoMsg): QueryProjectsRequest {
    return QueryProjectsRequest.decode(message.value);
  },

  toProto(message: QueryProjectsRequest): Uint8Array {
    return QueryProjectsRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsRequest): QueryProjectsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
      value: QueryProjectsRequest.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsResponse(): QueryProjectsResponse {
  return {
    projects: [],
    pagination: undefined
  };
}

export const QueryProjectsResponse = {
  encode(message: QueryProjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsResponse): unknown {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsResponse>): QueryProjectsResponse {
    const message = createBaseQueryProjectsResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsResponseAmino): QueryProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsResponse): QueryProjectsResponseAmino {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
    } else {
      obj.projects = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsResponseAminoMsg): QueryProjectsResponse {
    return QueryProjectsResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsResponseProtoMsg): QueryProjectsResponse {
    return QueryProjectsResponse.decode(message.value);
  },

  toProto(message: QueryProjectsResponse): Uint8Array {
    return QueryProjectsResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsResponse): QueryProjectsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
      value: QueryProjectsResponse.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsByClassRequest(): QueryProjectsByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}

export const QueryProjectsByClassRequest = {
  encode(message: QueryProjectsByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsByClassRequest>): QueryProjectsByClassRequest {
    const message = createBaseQueryProjectsByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsByClassRequestAmino): QueryProjectsByClassRequest {
    return {
      classId: object.class_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsByClassRequest): QueryProjectsByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsByClassRequestAminoMsg): QueryProjectsByClassRequest {
    return QueryProjectsByClassRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsByClassRequestProtoMsg): QueryProjectsByClassRequest {
    return QueryProjectsByClassRequest.decode(message.value);
  },

  toProto(message: QueryProjectsByClassRequest): Uint8Array {
    return QueryProjectsByClassRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsByClassRequest): QueryProjectsByClassRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassRequest",
      value: QueryProjectsByClassRequest.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsByClassResponse(): QueryProjectsByClassResponse {
  return {
    projects: [],
    pagination: undefined
  };
}

export const QueryProjectsByClassResponse = {
  encode(message: QueryProjectsByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsByClassResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsByClassResponse): unknown {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsByClassResponse>): QueryProjectsByClassResponse {
    const message = createBaseQueryProjectsByClassResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsByClassResponseAmino): QueryProjectsByClassResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsByClassResponse): QueryProjectsByClassResponseAmino {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
    } else {
      obj.projects = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsByClassResponseAminoMsg): QueryProjectsByClassResponse {
    return QueryProjectsByClassResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsByClassResponseProtoMsg): QueryProjectsByClassResponse {
    return QueryProjectsByClassResponse.decode(message.value);
  },

  toProto(message: QueryProjectsByClassResponse): Uint8Array {
    return QueryProjectsByClassResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsByClassResponse): QueryProjectsByClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassResponse",
      value: QueryProjectsByClassResponse.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsByReferenceIdRequest(): QueryProjectsByReferenceIdRequest {
  return {
    referenceId: "",
    pagination: undefined
  };
}

export const QueryProjectsByReferenceIdRequest = {
  encode(message: QueryProjectsByReferenceIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByReferenceIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.referenceId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsByReferenceIdRequest {
    return {
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsByReferenceIdRequest): unknown {
    const obj: any = {};
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsByReferenceIdRequest>): QueryProjectsByReferenceIdRequest {
    const message = createBaseQueryProjectsByReferenceIdRequest();
    message.referenceId = object.referenceId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsByReferenceIdRequestAmino): QueryProjectsByReferenceIdRequest {
    return {
      referenceId: object.reference_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestAmino {
    const obj: any = {};
    obj.reference_id = message.referenceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsByReferenceIdRequestAminoMsg): QueryProjectsByReferenceIdRequest {
    return QueryProjectsByReferenceIdRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsByReferenceIdRequestProtoMsg): QueryProjectsByReferenceIdRequest {
    return QueryProjectsByReferenceIdRequest.decode(message.value);
  },

  toProto(message: QueryProjectsByReferenceIdRequest): Uint8Array {
    return QueryProjectsByReferenceIdRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
      value: QueryProjectsByReferenceIdRequest.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsByReferenceIdResponse(): QueryProjectsByReferenceIdResponse {
  return {
    projects: [],
    pagination: undefined
  };
}

export const QueryProjectsByReferenceIdResponse = {
  encode(message: QueryProjectsByReferenceIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByReferenceIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsByReferenceIdResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsByReferenceIdResponse): unknown {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsByReferenceIdResponse>): QueryProjectsByReferenceIdResponse {
    const message = createBaseQueryProjectsByReferenceIdResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsByReferenceIdResponseAmino): QueryProjectsByReferenceIdResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseAmino {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
    } else {
      obj.projects = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsByReferenceIdResponseAminoMsg): QueryProjectsByReferenceIdResponse {
    return QueryProjectsByReferenceIdResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsByReferenceIdResponseProtoMsg): QueryProjectsByReferenceIdResponse {
    return QueryProjectsByReferenceIdResponse.decode(message.value);
  },

  toProto(message: QueryProjectsByReferenceIdResponse): Uint8Array {
    return QueryProjectsByReferenceIdResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
      value: QueryProjectsByReferenceIdResponse.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsByAdminRequest(): QueryProjectsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}

export const QueryProjectsByAdminRequest = {
  encode(message: QueryProjectsByAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByAdminRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsByAdminRequest>): QueryProjectsByAdminRequest {
    const message = createBaseQueryProjectsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsByAdminRequestAmino): QueryProjectsByAdminRequest {
    return {
      admin: object.admin,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsByAdminRequest): QueryProjectsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsByAdminRequestAminoMsg): QueryProjectsByAdminRequest {
    return QueryProjectsByAdminRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsByAdminRequestProtoMsg): QueryProjectsByAdminRequest {
    return QueryProjectsByAdminRequest.decode(message.value);
  },

  toProto(message: QueryProjectsByAdminRequest): Uint8Array {
    return QueryProjectsByAdminRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsByAdminRequest): QueryProjectsByAdminRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminRequest",
      value: QueryProjectsByAdminRequest.encode(message).finish()
    };
  }

};

function createBaseQueryProjectsByAdminResponse(): QueryProjectsByAdminResponse {
  return {
    projects: [],
    pagination: undefined
  };
}

export const QueryProjectsByAdminResponse = {
  encode(message: QueryProjectsByAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByAdminResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectsByAdminResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProjectsByAdminResponse): unknown {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projects = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectsByAdminResponse>): QueryProjectsByAdminResponse {
    const message = createBaseQueryProjectsByAdminResponse();
    message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectsByAdminResponseAmino): QueryProjectsByAdminResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => ProjectInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryProjectsByAdminResponse): QueryProjectsByAdminResponseAmino {
    const obj: any = {};

    if (message.projects) {
      obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
    } else {
      obj.projects = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectsByAdminResponseAminoMsg): QueryProjectsByAdminResponse {
    return QueryProjectsByAdminResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectsByAdminResponseProtoMsg): QueryProjectsByAdminResponse {
    return QueryProjectsByAdminResponse.decode(message.value);
  },

  toProto(message: QueryProjectsByAdminResponse): Uint8Array {
    return QueryProjectsByAdminResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectsByAdminResponse): QueryProjectsByAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminResponse",
      value: QueryProjectsByAdminResponse.encode(message).finish()
    };
  }

};

function createBaseQueryProjectRequest(): QueryProjectRequest {
  return {
    projectId: ""
  };
}

export const QueryProjectRequest = {
  encode(message: QueryProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectRequest {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: QueryProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectRequest>): QueryProjectRequest {
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },

  fromAmino(object: QueryProjectRequestAmino): QueryProjectRequest {
    return {
      projectId: object.project_id
    };
  },

  toAmino(message: QueryProjectRequest): QueryProjectRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId;
    return obj;
  },

  fromAminoMsg(object: QueryProjectRequestAminoMsg): QueryProjectRequest {
    return QueryProjectRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectRequestProtoMsg): QueryProjectRequest {
    return QueryProjectRequest.decode(message.value);
  },

  toProto(message: QueryProjectRequest): Uint8Array {
    return QueryProjectRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectRequest): QueryProjectRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
      value: QueryProjectRequest.encode(message).finish()
    };
  }

};

function createBaseQueryProjectResponse(): QueryProjectResponse {
  return {
    project: undefined
  };
}

export const QueryProjectResponse = {
  encode(message: QueryProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.project !== undefined) {
      ProjectInfo.encode(message.project, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.project = ProjectInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProjectResponse {
    return {
      project: isSet(object.project) ? ProjectInfo.fromJSON(object.project) : undefined
    };
  },

  toJSON(message: QueryProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? ProjectInfo.toJSON(message.project) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProjectResponse>): QueryProjectResponse {
    const message = createBaseQueryProjectResponse();
    message.project = object.project !== undefined && object.project !== null ? ProjectInfo.fromPartial(object.project) : undefined;
    return message;
  },

  fromAmino(object: QueryProjectResponseAmino): QueryProjectResponse {
    return {
      project: object?.project ? ProjectInfo.fromAmino(object.project) : undefined
    };
  },

  toAmino(message: QueryProjectResponse): QueryProjectResponseAmino {
    const obj: any = {};
    obj.project = message.project ? ProjectInfo.toAmino(message.project) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryProjectResponseAminoMsg): QueryProjectResponse {
    return QueryProjectResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryProjectResponseProtoMsg): QueryProjectResponse {
    return QueryProjectResponse.decode(message.value);
  },

  toProto(message: QueryProjectResponse): Uint8Array {
    return QueryProjectResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryProjectResponse): QueryProjectResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
      value: QueryProjectResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {
    pagination: undefined
  };
}

export const QueryBatchesRequest = {
  encode(message: QueryBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesRequest>): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesRequestAmino): QueryBatchesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesRequest): QueryBatchesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesRequestAminoMsg): QueryBatchesRequest {
    return QueryBatchesRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesRequestProtoMsg): QueryBatchesRequest {
    return QueryBatchesRequest.decode(message.value);
  },

  toProto(message: QueryBatchesRequest): Uint8Array {
    return QueryBatchesRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesRequest): QueryBatchesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
      value: QueryBatchesRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {
    batches: [],
    pagination: undefined
  };
}

export const QueryBatchesResponse = {
  encode(message: QueryBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesResponse): unknown {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesResponse>): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesResponseAmino): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesResponse): QueryBatchesResponseAmino {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesResponseAminoMsg): QueryBatchesResponse {
    return QueryBatchesResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesResponseProtoMsg): QueryBatchesResponse {
    return QueryBatchesResponse.decode(message.value);
  },

  toProto(message: QueryBatchesResponse): Uint8Array {
    return QueryBatchesResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesResponse): QueryBatchesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
      value: QueryBatchesResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesByIssuerRequest(): QueryBatchesByIssuerRequest {
  return {
    issuer: "",
    pagination: undefined
  };
}

export const QueryBatchesByIssuerRequest = {
  encode(message: QueryBatchesByIssuerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByIssuerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesByIssuerRequest {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesByIssuerRequest): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesByIssuerRequest>): QueryBatchesByIssuerRequest {
    const message = createBaseQueryBatchesByIssuerRequest();
    message.issuer = object.issuer ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesByIssuerRequestAmino): QueryBatchesByIssuerRequest {
    return {
      issuer: object.issuer,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesByIssuerRequestAminoMsg): QueryBatchesByIssuerRequest {
    return QueryBatchesByIssuerRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesByIssuerRequestProtoMsg): QueryBatchesByIssuerRequest {
    return QueryBatchesByIssuerRequest.decode(message.value);
  },

  toProto(message: QueryBatchesByIssuerRequest): Uint8Array {
    return QueryBatchesByIssuerRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
      value: QueryBatchesByIssuerRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesByIssuerResponse(): QueryBatchesByIssuerResponse {
  return {
    batches: [],
    pagination: undefined
  };
}

export const QueryBatchesByIssuerResponse = {
  encode(message: QueryBatchesByIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByIssuerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesByIssuerResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesByIssuerResponse): unknown {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesByIssuerResponse>): QueryBatchesByIssuerResponse {
    const message = createBaseQueryBatchesByIssuerResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesByIssuerResponseAmino): QueryBatchesByIssuerResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseAmino {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesByIssuerResponseAminoMsg): QueryBatchesByIssuerResponse {
    return QueryBatchesByIssuerResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesByIssuerResponseProtoMsg): QueryBatchesByIssuerResponse {
    return QueryBatchesByIssuerResponse.decode(message.value);
  },

  toProto(message: QueryBatchesByIssuerResponse): Uint8Array {
    return QueryBatchesByIssuerResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
      value: QueryBatchesByIssuerResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesByClassRequest(): QueryBatchesByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}

export const QueryBatchesByClassRequest = {
  encode(message: QueryBatchesByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesByClassRequest>): QueryBatchesByClassRequest {
    const message = createBaseQueryBatchesByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesByClassRequestAmino): QueryBatchesByClassRequest {
    return {
      classId: object.class_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesByClassRequestAminoMsg): QueryBatchesByClassRequest {
    return QueryBatchesByClassRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesByClassRequestProtoMsg): QueryBatchesByClassRequest {
    return QueryBatchesByClassRequest.decode(message.value);
  },

  toProto(message: QueryBatchesByClassRequest): Uint8Array {
    return QueryBatchesByClassRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
      value: QueryBatchesByClassRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesByProjectRequest(): QueryBatchesByProjectRequest {
  return {
    projectId: "",
    pagination: undefined
  };
}

export const QueryBatchesByProjectRequest = {
  encode(message: QueryBatchesByProjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByProjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByProjectRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesByProjectRequest {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesByProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesByProjectRequest>): QueryBatchesByProjectRequest {
    const message = createBaseQueryBatchesByProjectRequest();
    message.projectId = object.projectId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesByProjectRequestAmino): QueryBatchesByProjectRequest {
    return {
      projectId: object.project_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesByProjectRequest): QueryBatchesByProjectRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesByProjectRequestAminoMsg): QueryBatchesByProjectRequest {
    return QueryBatchesByProjectRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesByProjectRequestProtoMsg): QueryBatchesByProjectRequest {
    return QueryBatchesByProjectRequest.decode(message.value);
  },

  toProto(message: QueryBatchesByProjectRequest): Uint8Array {
    return QueryBatchesByProjectRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesByProjectRequest): QueryBatchesByProjectRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectRequest",
      value: QueryBatchesByProjectRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesByProjectResponse(): QueryBatchesByProjectResponse {
  return {
    batches: [],
    pagination: undefined
  };
}

export const QueryBatchesByProjectResponse = {
  encode(message: QueryBatchesByProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByProjectResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesByProjectResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesByProjectResponse): unknown {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesByProjectResponse>): QueryBatchesByProjectResponse {
    const message = createBaseQueryBatchesByProjectResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesByProjectResponseAmino): QueryBatchesByProjectResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesByProjectResponse): QueryBatchesByProjectResponseAmino {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesByProjectResponseAminoMsg): QueryBatchesByProjectResponse {
    return QueryBatchesByProjectResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesByProjectResponseProtoMsg): QueryBatchesByProjectResponse {
    return QueryBatchesByProjectResponse.decode(message.value);
  },

  toProto(message: QueryBatchesByProjectResponse): Uint8Array {
    return QueryBatchesByProjectResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesByProjectResponse): QueryBatchesByProjectResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectResponse",
      value: QueryBatchesByProjectResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBatchesByClassResponse(): QueryBatchesByClassResponse {
  return {
    batches: [],
    pagination: undefined
  };
}

export const QueryBatchesByClassResponse = {
  encode(message: QueryBatchesByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesByClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batches.push(BatchInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchesByClassResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesByClassResponse): unknown {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchesByClassResponse>): QueryBatchesByClassResponse {
    const message = createBaseQueryBatchesByClassResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchesByClassResponseAmino): QueryBatchesByClassResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => BatchInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseAmino {
    const obj: any = {};

    if (message.batches) {
      obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchesByClassResponseAminoMsg): QueryBatchesByClassResponse {
    return QueryBatchesByClassResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchesByClassResponseProtoMsg): QueryBatchesByClassResponse {
    return QueryBatchesByClassResponse.decode(message.value);
  },

  toProto(message: QueryBatchesByClassResponse): Uint8Array {
    return QueryBatchesByClassResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
      value: QueryBatchesByClassResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBatchRequest(): QueryBatchRequest {
  return {
    batchDenom: ""
  };
}

export const QueryBatchRequest = {
  encode(message: QueryBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: QueryBatchRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchRequest>): QueryBatchRequest {
    const message = createBaseQueryBatchRequest();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },

  fromAmino(object: QueryBatchRequestAmino): QueryBatchRequest {
    return {
      batchDenom: object.batch_denom
    };
  },

  toAmino(message: QueryBatchRequest): QueryBatchRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },

  fromAminoMsg(object: QueryBatchRequestAminoMsg): QueryBatchRequest {
    return QueryBatchRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchRequestProtoMsg): QueryBatchRequest {
    return QueryBatchRequest.decode(message.value);
  },

  toProto(message: QueryBatchRequest): Uint8Array {
    return QueryBatchRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchRequest): QueryBatchRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
      value: QueryBatchRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBatchResponse(): QueryBatchResponse {
  return {
    batch: undefined
  };
}

export const QueryBatchResponse = {
  encode(message: QueryBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      BatchInfo.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batch = BatchInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBatchResponse {
    return {
      batch: isSet(object.batch) ? BatchInfo.fromJSON(object.batch) : undefined
    };
  },

  toJSON(message: QueryBatchResponse): unknown {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? BatchInfo.toJSON(message.batch) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBatchResponse>): QueryBatchResponse {
    const message = createBaseQueryBatchResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? BatchInfo.fromPartial(object.batch) : undefined;
    return message;
  },

  fromAmino(object: QueryBatchResponseAmino): QueryBatchResponse {
    return {
      batch: object?.batch ? BatchInfo.fromAmino(object.batch) : undefined
    };
  },

  toAmino(message: QueryBatchResponse): QueryBatchResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? BatchInfo.toAmino(message.batch) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBatchResponseAminoMsg): QueryBatchResponse {
    return QueryBatchResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBatchResponseProtoMsg): QueryBatchResponse {
    return QueryBatchResponse.decode(message.value);
  },

  toProto(message: QueryBatchResponse): Uint8Array {
    return QueryBatchResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBatchResponse): QueryBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
      value: QueryBatchResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: "",
    batchDenom: ""
  };
}

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.batchDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },

  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    return {
      address: object.address,
      batchDenom: object.batch_denom
    };
  },

  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.batch_denom = message.batchDenom;
    return obj;
  },

  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },

  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: undefined
  };
}

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      BatchBalanceInfo.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balance = BatchBalanceInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance) ? BatchBalanceInfo.fromJSON(object.balance) : undefined
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? BatchBalanceInfo.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? BatchBalanceInfo.fromPartial(object.balance) : undefined;
    return message;
  },

  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    return {
      balance: object?.balance ? BatchBalanceInfo.fromAmino(object.balance) : undefined
    };
  },

  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? BatchBalanceInfo.toAmino(message.balance) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },

  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {
    address: "",
    pagination: undefined
  };
}

export const QueryBalancesRequest = {
  encode(message: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBalancesRequestAmino): QueryBalancesRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBalancesRequest): QueryBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.decode(message.value);
  },

  toProto(message: QueryBalancesRequest): Uint8Array {
    return QueryBalancesRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
      value: QueryBalancesRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    balances: [],
    pagination: undefined
  };
}

export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      BatchBalanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBalancesResponse): unknown {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.decode(message.value);
  },

  toProto(message: QueryBalancesResponse): Uint8Array {
    return QueryBalancesResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
      value: QueryBalancesResponse.encode(message).finish()
    };
  }

};

function createBaseQueryBalancesByBatchRequest(): QueryBalancesByBatchRequest {
  return {
    batchDenom: "",
    pagination: undefined
  };
}

export const QueryBalancesByBatchRequest = {
  encode(message: QueryBalancesByBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesByBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesByBatchRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalancesByBatchRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBalancesByBatchRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBalancesByBatchRequest>): QueryBalancesByBatchRequest {
    const message = createBaseQueryBalancesByBatchRequest();
    message.batchDenom = object.batchDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBalancesByBatchRequestAmino): QueryBalancesByBatchRequest {
    return {
      batchDenom: object.batch_denom,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBalancesByBatchRequest): QueryBalancesByBatchRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBalancesByBatchRequestAminoMsg): QueryBalancesByBatchRequest {
    return QueryBalancesByBatchRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBalancesByBatchRequestProtoMsg): QueryBalancesByBatchRequest {
    return QueryBalancesByBatchRequest.decode(message.value);
  },

  toProto(message: QueryBalancesByBatchRequest): Uint8Array {
    return QueryBalancesByBatchRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryBalancesByBatchRequest): QueryBalancesByBatchRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchRequest",
      value: QueryBalancesByBatchRequest.encode(message).finish()
    };
  }

};

function createBaseQueryBalancesByBatchResponse(): QueryBalancesByBatchResponse {
  return {
    balances: [],
    pagination: undefined
  };
}

export const QueryBalancesByBatchResponse = {
  encode(message: QueryBalancesByBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      BatchBalanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesByBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesByBatchResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalancesByBatchResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBalancesByBatchResponse): unknown {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryBalancesByBatchResponse>): QueryBalancesByBatchResponse {
    const message = createBaseQueryBalancesByBatchResponse();
    message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryBalancesByBatchResponseAmino): QueryBalancesByBatchResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryBalancesByBatchResponse): QueryBalancesByBatchResponseAmino {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryBalancesByBatchResponseAminoMsg): QueryBalancesByBatchResponse {
    return QueryBalancesByBatchResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryBalancesByBatchResponseProtoMsg): QueryBalancesByBatchResponse {
    return QueryBalancesByBatchResponse.decode(message.value);
  },

  toProto(message: QueryBalancesByBatchResponse): Uint8Array {
    return QueryBalancesByBatchResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryBalancesByBatchResponse): QueryBalancesByBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchResponse",
      value: QueryBalancesByBatchResponse.encode(message).finish()
    };
  }

};

function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllBalancesRequest = {
  encode(message: QueryAllBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllBalancesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllBalancesRequest>): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.decode(message.value);
  },

  toProto(message: QueryAllBalancesRequest): Uint8Array {
    return QueryAllBalancesRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.encode(message).finish()
    };
  }

};

function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return {
    balances: [],
    pagination: undefined
  };
}

export const QueryAllBalancesResponse = {
  encode(message: QueryAllBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      BatchBalanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllBalancesResponse>): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => BatchBalanceInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino {
    const obj: any = {};

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.decode(message.value);
  },

  toProto(message: QueryAllBalancesResponse): Uint8Array {
    return QueryAllBalancesResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.encode(message).finish()
    };
  }

};

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    batchDenom: ""
  };
}

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },

  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    return {
      batchDenom: object.batch_denom
    };
  },

  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },

  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },

  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },

  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }

};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    tradableAmount: "",
    retiredAmount: "",
    cancelledAmount: ""
  };
}

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradableAmount !== "") {
      writer.uint32(10).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(18).string(message.retiredAmount);
    }

    if (message.cancelledAmount !== "") {
      writer.uint32(26).string(message.cancelledAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tradableAmount = reader.string();
          break;

        case 2:
          message.retiredAmount = reader.string();
          break;

        case 3:
          message.cancelledAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return {
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : ""
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },

  fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.cancelledAmount = object.cancelledAmount ?? "";
    return message;
  },

  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    return {
      tradableAmount: object.tradable_amount,
      retiredAmount: object.retired_amount,
      cancelledAmount: object.cancelled_amount
    };
  },

  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.cancelled_amount = message.cancelledAmount;
    return obj;
  },

  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },

  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },

  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }

};

function createBaseQueryCreditTypesRequest(): QueryCreditTypesRequest {
  return {};
}

export const QueryCreditTypesRequest = {
  encode(_: QueryCreditTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryCreditTypesRequest {
    return {};
  },

  toJSON(_: QueryCreditTypesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },

  fromAmino(_: QueryCreditTypesRequestAmino): QueryCreditTypesRequest {
    return {};
  },

  toAmino(_: QueryCreditTypesRequest): QueryCreditTypesRequestAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: QueryCreditTypesRequestAminoMsg): QueryCreditTypesRequest {
    return QueryCreditTypesRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCreditTypesRequestProtoMsg): QueryCreditTypesRequest {
    return QueryCreditTypesRequest.decode(message.value);
  },

  toProto(message: QueryCreditTypesRequest): Uint8Array {
    return QueryCreditTypesRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryCreditTypesRequest): QueryCreditTypesRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
      value: QueryCreditTypesRequest.encode(message).finish()
    };
  }

};

function createBaseQueryCreditTypesResponse(): QueryCreditTypesResponse {
  return {
    creditTypes: []
  };
}

export const QueryCreditTypesResponse = {
  encode(message: QueryCreditTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.creditTypes) ? object.creditTypes.map((e: any) => CreditType.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryCreditTypesResponse): unknown {
    const obj: any = {};

    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e => e ? CreditType.toJSON(e) : undefined);
    } else {
      obj.creditTypes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: QueryCreditTypesResponseAmino): QueryCreditTypesResponse {
    return {
      creditTypes: Array.isArray(object?.credit_types) ? object.credit_types.map((e: any) => CreditType.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryCreditTypesResponse): QueryCreditTypesResponseAmino {
    const obj: any = {};

    if (message.creditTypes) {
      obj.credit_types = message.creditTypes.map(e => e ? CreditType.toAmino(e) : undefined);
    } else {
      obj.credit_types = [];
    }

    return obj;
  },

  fromAminoMsg(object: QueryCreditTypesResponseAminoMsg): QueryCreditTypesResponse {
    return QueryCreditTypesResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCreditTypesResponseProtoMsg): QueryCreditTypesResponse {
    return QueryCreditTypesResponse.decode(message.value);
  },

  toProto(message: QueryCreditTypesResponse): Uint8Array {
    return QueryCreditTypesResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryCreditTypesResponse): QueryCreditTypesResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
      value: QueryCreditTypesResponse.encode(message).finish()
    };
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },

  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },

  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }

};

function createBaseQueryCreditTypeRequest(): QueryCreditTypeRequest {
  return {
    abbreviation: ""
  };
}

export const QueryCreditTypeRequest = {
  encode(message: QueryCreditTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCreditTypeRequest {
    return {
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : ""
    };
  },

  toJSON(message: QueryCreditTypeRequest): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },

  fromPartial(object: Partial<QueryCreditTypeRequest>): QueryCreditTypeRequest {
    const message = createBaseQueryCreditTypeRequest();
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },

  fromAmino(object: QueryCreditTypeRequestAmino): QueryCreditTypeRequest {
    return {
      abbreviation: object.abbreviation
    };
  },

  toAmino(message: QueryCreditTypeRequest): QueryCreditTypeRequestAmino {
    const obj: any = {};
    obj.abbreviation = message.abbreviation;
    return obj;
  },

  fromAminoMsg(object: QueryCreditTypeRequestAminoMsg): QueryCreditTypeRequest {
    return QueryCreditTypeRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCreditTypeRequestProtoMsg): QueryCreditTypeRequest {
    return QueryCreditTypeRequest.decode(message.value);
  },

  toProto(message: QueryCreditTypeRequest): Uint8Array {
    return QueryCreditTypeRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryCreditTypeRequest): QueryCreditTypeRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryCreditTypeRequest",
      value: QueryCreditTypeRequest.encode(message).finish()
    };
  }

};

function createBaseQueryCreditTypeResponse(): QueryCreditTypeResponse {
  return {
    creditType: undefined
  };
}

export const QueryCreditTypeResponse = {
  encode(message: QueryCreditTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreditTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creditType = CreditType.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCreditTypeResponse {
    return {
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined
    };
  },

  toJSON(message: QueryCreditTypeResponse): unknown {
    const obj: any = {};
    message.creditType !== undefined && (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCreditTypeResponse>): QueryCreditTypeResponse {
    const message = createBaseQueryCreditTypeResponse();
    message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
    return message;
  },

  fromAmino(object: QueryCreditTypeResponseAmino): QueryCreditTypeResponse {
    return {
      creditType: object?.credit_type ? CreditType.fromAmino(object.credit_type) : undefined
    };
  },

  toAmino(message: QueryCreditTypeResponse): QueryCreditTypeResponseAmino {
    const obj: any = {};
    obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryCreditTypeResponseAminoMsg): QueryCreditTypeResponse {
    return QueryCreditTypeResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCreditTypeResponseProtoMsg): QueryCreditTypeResponse {
    return QueryCreditTypeResponse.decode(message.value);
  },

  toProto(message: QueryCreditTypeResponse): Uint8Array {
    return QueryCreditTypeResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryCreditTypeResponse): QueryCreditTypeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryCreditTypeResponse",
      value: QueryCreditTypeResponse.encode(message).finish()
    };
  }

};

function createBaseClassInfo(): ClassInfo {
  return {
    id: "",
    admin: "",
    metadata: "",
    creditTypeAbbrev: ""
  };
}

export const ClassInfo = {
  encode(message: ClassInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }

    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.metadata = reader.string();
          break;

        case 4:
          message.creditTypeAbbrev = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : ""
    };
  },

  toJSON(message: ClassInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    return obj;
  },

  fromPartial(object: Partial<ClassInfo>): ClassInfo {
    const message = createBaseClassInfo();
    message.id = object.id ?? "";
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    return message;
  },

  fromAmino(object: ClassInfoAmino): ClassInfo {
    return {
      id: object.id,
      admin: object.admin,
      metadata: object.metadata,
      creditTypeAbbrev: object.credit_type_abbrev
    };
  },

  toAmino(message: ClassInfo): ClassInfoAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    return obj;
  },

  fromAminoMsg(object: ClassInfoAminoMsg): ClassInfo {
    return ClassInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: ClassInfoProtoMsg): ClassInfo {
    return ClassInfo.decode(message.value);
  },

  toProto(message: ClassInfo): Uint8Array {
    return ClassInfo.encode(message).finish();
  },

  toProtoMsg(message: ClassInfo): ClassInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassInfo",
      value: ClassInfo.encode(message).finish()
    };
  }

};

function createBaseProjectInfo(): ProjectInfo {
  return {
    id: "",
    admin: "",
    classId: "",
    jurisdiction: "",
    metadata: "",
    referenceId: ""
  };
}

export const ProjectInfo = {
  encode(message: ProjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }

    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }

    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }

    if (message.referenceId !== "") {
      writer.uint32(50).string(message.referenceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.admin = reader.string();
          break;

        case 3:
          message.classId = reader.string();
          break;

        case 4:
          message.jurisdiction = reader.string();
          break;

        case 5:
          message.metadata = reader.string();
          break;

        case 6:
          message.referenceId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProjectInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },

  toJSON(message: ProjectInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },

  fromPartial(object: Partial<ProjectInfo>): ProjectInfo {
    const message = createBaseProjectInfo();
    message.id = object.id ?? "";
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },

  fromAmino(object: ProjectInfoAmino): ProjectInfo {
    return {
      id: object.id,
      admin: object.admin,
      classId: object.class_id,
      jurisdiction: object.jurisdiction,
      metadata: object.metadata,
      referenceId: object.reference_id
    };
  },

  toAmino(message: ProjectInfo): ProjectInfoAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.jurisdiction = message.jurisdiction;
    obj.metadata = message.metadata;
    obj.reference_id = message.referenceId;
    return obj;
  },

  fromAminoMsg(object: ProjectInfoAminoMsg): ProjectInfo {
    return ProjectInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: ProjectInfoProtoMsg): ProjectInfo {
    return ProjectInfo.decode(message.value);
  },

  toProto(message: ProjectInfo): Uint8Array {
    return ProjectInfo.encode(message).finish();
  },

  toProtoMsg(message: ProjectInfo): ProjectInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ProjectInfo",
      value: ProjectInfo.encode(message).finish()
    };
  }

};

function createBaseBatchInfo(): BatchInfo {
  return {
    issuer: "",
    projectId: "",
    denom: "",
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    issuanceDate: undefined,
    open: false
  };
}

export const BatchInfo = {
  encode(message: BatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(42).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(50).fork()).ldelim();
    }

    if (message.issuanceDate !== undefined) {
      Timestamp.encode(message.issuanceDate, writer.uint32(58).fork()).ldelim();
    }

    if (message.open === true) {
      writer.uint32(64).bool(message.open);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        case 2:
          message.projectId = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.issuanceDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 8:
          message.open = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchInfo {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      issuanceDate: isSet(object.issuanceDate) ? fromJsonTimestamp(object.issuanceDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false
    };
  },

  toJSON(message: BatchInfo): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.issuanceDate !== undefined && (obj.issuanceDate = fromTimestamp(message.issuanceDate).toISOString());
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },

  fromPartial(object: Partial<BatchInfo>): BatchInfo {
    const message = createBaseBatchInfo();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.denom = object.denom ?? "";
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.issuanceDate = object.issuanceDate !== undefined && object.issuanceDate !== null ? Timestamp.fromPartial(object.issuanceDate) : undefined;
    message.open = object.open ?? false;
    return message;
  },

  fromAmino(object: BatchInfoAmino): BatchInfo {
    return {
      issuer: object.issuer,
      projectId: object.project_id,
      denom: object.denom,
      metadata: object.metadata,
      startDate: object?.start_date ? Timestamp.fromAmino(object.start_date) : undefined,
      endDate: object?.end_date ? Timestamp.fromAmino(object.end_date) : undefined,
      issuanceDate: object?.issuance_date ? Timestamp.fromAmino(object.issuance_date) : undefined,
      open: object.open
    };
  },

  toAmino(message: BatchInfo): BatchInfoAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.project_id = message.projectId;
    obj.denom = message.denom;
    obj.metadata = message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(message.startDate) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(message.endDate) : undefined;
    obj.issuance_date = message.issuanceDate ? Timestamp.toAmino(message.issuanceDate) : undefined;
    obj.open = message.open;
    return obj;
  },

  fromAminoMsg(object: BatchInfoAminoMsg): BatchInfo {
    return BatchInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: BatchInfoProtoMsg): BatchInfo {
    return BatchInfo.decode(message.value);
  },

  toProto(message: BatchInfo): Uint8Array {
    return BatchInfo.encode(message).finish();
  },

  toProtoMsg(message: BatchInfo): BatchInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchInfo",
      value: BatchInfo.encode(message).finish()
    };
  }

};

function createBaseBatchBalanceInfo(): BatchBalanceInfo {
  return {
    address: "",
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: "",
    escrowedAmount: ""
  };
}

export const BatchBalanceInfo = {
  encode(message: BatchBalanceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    if (message.tradableAmount !== "") {
      writer.uint32(26).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(34).string(message.retiredAmount);
    }

    if (message.escrowedAmount !== "") {
      writer.uint32(42).string(message.escrowedAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalanceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchBalanceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.batchDenom = reader.string();
          break;

        case 3:
          message.tradableAmount = reader.string();
          break;

        case 4:
          message.retiredAmount = reader.string();
          break;

        case 5:
          message.escrowedAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BatchBalanceInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      escrowedAmount: isSet(object.escrowedAmount) ? String(object.escrowedAmount) : ""
    };
  },

  toJSON(message: BatchBalanceInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.escrowedAmount !== undefined && (obj.escrowedAmount = message.escrowedAmount);
    return obj;
  },

  fromPartial(object: Partial<BatchBalanceInfo>): BatchBalanceInfo {
    const message = createBaseBatchBalanceInfo();
    message.address = object.address ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.escrowedAmount = object.escrowedAmount ?? "";
    return message;
  },

  fromAmino(object: BatchBalanceInfoAmino): BatchBalanceInfo {
    return {
      address: object.address,
      batchDenom: object.batch_denom,
      tradableAmount: object.tradable_amount,
      retiredAmount: object.retired_amount,
      escrowedAmount: object.escrowed_amount
    };
  },

  toAmino(message: BatchBalanceInfo): BatchBalanceInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.batch_denom = message.batchDenom;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.escrowed_amount = message.escrowedAmount;
    return obj;
  },

  fromAminoMsg(object: BatchBalanceInfoAminoMsg): BatchBalanceInfo {
    return BatchBalanceInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: BatchBalanceInfoProtoMsg): BatchBalanceInfo {
    return BatchBalanceInfo.decode(message.value);
  },

  toProto(message: BatchBalanceInfo): Uint8Array {
    return BatchBalanceInfo.encode(message).finish();
  },

  toProtoMsg(message: BatchBalanceInfo): BatchBalanceInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
      value: BatchBalanceInfo.encode(message).finish()
    };
  }

};

function createBaseQueryClassCreatorAllowlistRequest(): QueryClassCreatorAllowlistRequest {
  return {};
}

export const QueryClassCreatorAllowlistRequest = {
  encode(_: QueryClassCreatorAllowlistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassCreatorAllowlistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassCreatorAllowlistRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryClassCreatorAllowlistRequest {
    return {};
  },

  toJSON(_: QueryClassCreatorAllowlistRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryClassCreatorAllowlistRequest>): QueryClassCreatorAllowlistRequest {
    const message = createBaseQueryClassCreatorAllowlistRequest();
    return message;
  },

  fromAmino(_: QueryClassCreatorAllowlistRequestAmino): QueryClassCreatorAllowlistRequest {
    return {};
  },

  toAmino(_: QueryClassCreatorAllowlistRequest): QueryClassCreatorAllowlistRequestAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: QueryClassCreatorAllowlistRequestAminoMsg): QueryClassCreatorAllowlistRequest {
    return QueryClassCreatorAllowlistRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassCreatorAllowlistRequestProtoMsg): QueryClassCreatorAllowlistRequest {
    return QueryClassCreatorAllowlistRequest.decode(message.value);
  },

  toProto(message: QueryClassCreatorAllowlistRequest): Uint8Array {
    return QueryClassCreatorAllowlistRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryClassCreatorAllowlistRequest): QueryClassCreatorAllowlistRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest",
      value: QueryClassCreatorAllowlistRequest.encode(message).finish()
    };
  }

};

function createBaseQueryClassCreatorAllowlistResponse(): QueryClassCreatorAllowlistResponse {
  return {
    enabled: false
  };
}

export const QueryClassCreatorAllowlistResponse = {
  encode(message: QueryClassCreatorAllowlistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassCreatorAllowlistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassCreatorAllowlistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassCreatorAllowlistResponse {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message: QueryClassCreatorAllowlistResponse): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(object: Partial<QueryClassCreatorAllowlistResponse>): QueryClassCreatorAllowlistResponse {
    const message = createBaseQueryClassCreatorAllowlistResponse();
    message.enabled = object.enabled ?? false;
    return message;
  },

  fromAmino(object: QueryClassCreatorAllowlistResponseAmino): QueryClassCreatorAllowlistResponse {
    return {
      enabled: object.enabled
    };
  },

  toAmino(message: QueryClassCreatorAllowlistResponse): QueryClassCreatorAllowlistResponseAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },

  fromAminoMsg(object: QueryClassCreatorAllowlistResponseAminoMsg): QueryClassCreatorAllowlistResponse {
    return QueryClassCreatorAllowlistResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassCreatorAllowlistResponseProtoMsg): QueryClassCreatorAllowlistResponse {
    return QueryClassCreatorAllowlistResponse.decode(message.value);
  },

  toProto(message: QueryClassCreatorAllowlistResponse): Uint8Array {
    return QueryClassCreatorAllowlistResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryClassCreatorAllowlistResponse): QueryClassCreatorAllowlistResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse",
      value: QueryClassCreatorAllowlistResponse.encode(message).finish()
    };
  }

};

function createBaseQueryAllowedClassCreatorsRequest(): QueryAllowedClassCreatorsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllowedClassCreatorsRequest = {
  encode(message: QueryAllowedClassCreatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedClassCreatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedClassCreatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllowedClassCreatorsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllowedClassCreatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllowedClassCreatorsRequest>): QueryAllowedClassCreatorsRequest {
    const message = createBaseQueryAllowedClassCreatorsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryAllowedClassCreatorsRequestAmino): QueryAllowedClassCreatorsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllowedClassCreatorsRequest): QueryAllowedClassCreatorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAllowedClassCreatorsRequestAminoMsg): QueryAllowedClassCreatorsRequest {
    return QueryAllowedClassCreatorsRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAllowedClassCreatorsRequestProtoMsg): QueryAllowedClassCreatorsRequest {
    return QueryAllowedClassCreatorsRequest.decode(message.value);
  },

  toProto(message: QueryAllowedClassCreatorsRequest): Uint8Array {
    return QueryAllowedClassCreatorsRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAllowedClassCreatorsRequest): QueryAllowedClassCreatorsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest",
      value: QueryAllowedClassCreatorsRequest.encode(message).finish()
    };
  }

};

function createBaseQueryAllowedClassCreatorsResponse(): QueryAllowedClassCreatorsResponse {
  return {
    classCreators: [],
    pagination: undefined
  };
}

export const QueryAllowedClassCreatorsResponse = {
  encode(message: QueryAllowedClassCreatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classCreators) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedClassCreatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedClassCreatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classCreators.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllowedClassCreatorsResponse {
    return {
      classCreators: Array.isArray(object?.classCreators) ? object.classCreators.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllowedClassCreatorsResponse): unknown {
    const obj: any = {};

    if (message.classCreators) {
      obj.classCreators = message.classCreators.map(e => e);
    } else {
      obj.classCreators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllowedClassCreatorsResponse>): QueryAllowedClassCreatorsResponse {
    const message = createBaseQueryAllowedClassCreatorsResponse();
    message.classCreators = object.classCreators?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromAmino(object: QueryAllowedClassCreatorsResponseAmino): QueryAllowedClassCreatorsResponse {
    return {
      classCreators: Array.isArray(object?.class_creators) ? object.class_creators.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllowedClassCreatorsResponse): QueryAllowedClassCreatorsResponseAmino {
    const obj: any = {};

    if (message.classCreators) {
      obj.class_creators = message.classCreators.map(e => e);
    } else {
      obj.class_creators = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAllowedClassCreatorsResponseAminoMsg): QueryAllowedClassCreatorsResponse {
    return QueryAllowedClassCreatorsResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAllowedClassCreatorsResponseProtoMsg): QueryAllowedClassCreatorsResponse {
    return QueryAllowedClassCreatorsResponse.decode(message.value);
  },

  toProto(message: QueryAllowedClassCreatorsResponse): Uint8Array {
    return QueryAllowedClassCreatorsResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAllowedClassCreatorsResponse): QueryAllowedClassCreatorsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse",
      value: QueryAllowedClassCreatorsResponse.encode(message).finish()
    };
  }

};

function createBaseQueryClassFeeRequest(): QueryClassFeeRequest {
  return {};
}

export const QueryClassFeeRequest = {
  encode(_: QueryClassFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassFeeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryClassFeeRequest {
    return {};
  },

  toJSON(_: QueryClassFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryClassFeeRequest>): QueryClassFeeRequest {
    const message = createBaseQueryClassFeeRequest();
    return message;
  },

  fromAmino(_: QueryClassFeeRequestAmino): QueryClassFeeRequest {
    return {};
  },

  toAmino(_: QueryClassFeeRequest): QueryClassFeeRequestAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: QueryClassFeeRequestAminoMsg): QueryClassFeeRequest {
    return QueryClassFeeRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassFeeRequestProtoMsg): QueryClassFeeRequest {
    return QueryClassFeeRequest.decode(message.value);
  },

  toProto(message: QueryClassFeeRequest): Uint8Array {
    return QueryClassFeeRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryClassFeeRequest): QueryClassFeeRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest",
      value: QueryClassFeeRequest.encode(message).finish()
    };
  }

};

function createBaseQueryClassFeeResponse(): QueryClassFeeResponse {
  return {
    fee: undefined
  };
}

export const QueryClassFeeResponse = {
  encode(message: QueryClassFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassFeeResponse {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: QueryClassFeeResponse): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryClassFeeResponse>): QueryClassFeeResponse {
    const message = createBaseQueryClassFeeResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },

  fromAmino(object: QueryClassFeeResponseAmino): QueryClassFeeResponse {
    return {
      fee: object?.fee ? Coin.fromAmino(object.fee) : undefined
    };
  },

  toAmino(message: QueryClassFeeResponse): QueryClassFeeResponseAmino {
    const obj: any = {};
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryClassFeeResponseAminoMsg): QueryClassFeeResponse {
    return QueryClassFeeResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryClassFeeResponseProtoMsg): QueryClassFeeResponse {
    return QueryClassFeeResponse.decode(message.value);
  },

  toProto(message: QueryClassFeeResponse): Uint8Array {
    return QueryClassFeeResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryClassFeeResponse): QueryClassFeeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryClassFeeResponse",
      value: QueryClassFeeResponse.encode(message).finish()
    };
  }

};

function createBaseQueryAllowedBridgeChainsRequest(): QueryAllowedBridgeChainsRequest {
  return {};
}

export const QueryAllowedBridgeChainsRequest = {
  encode(_: QueryAllowedBridgeChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBridgeChainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedBridgeChainsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryAllowedBridgeChainsRequest {
    return {};
  },

  toJSON(_: QueryAllowedBridgeChainsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryAllowedBridgeChainsRequest>): QueryAllowedBridgeChainsRequest {
    const message = createBaseQueryAllowedBridgeChainsRequest();
    return message;
  },

  fromAmino(_: QueryAllowedBridgeChainsRequestAmino): QueryAllowedBridgeChainsRequest {
    return {};
  },

  toAmino(_: QueryAllowedBridgeChainsRequest): QueryAllowedBridgeChainsRequestAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: QueryAllowedBridgeChainsRequestAminoMsg): QueryAllowedBridgeChainsRequest {
    return QueryAllowedBridgeChainsRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAllowedBridgeChainsRequestProtoMsg): QueryAllowedBridgeChainsRequest {
    return QueryAllowedBridgeChainsRequest.decode(message.value);
  },

  toProto(message: QueryAllowedBridgeChainsRequest): Uint8Array {
    return QueryAllowedBridgeChainsRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAllowedBridgeChainsRequest): QueryAllowedBridgeChainsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest",
      value: QueryAllowedBridgeChainsRequest.encode(message).finish()
    };
  }

};

function createBaseQueryAllowedBridgeChainsResponse(): QueryAllowedBridgeChainsResponse {
  return {
    allowedBridgeChains: []
  };
}

export const QueryAllowedBridgeChainsResponse = {
  encode(message: QueryAllowedBridgeChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedBridgeChains) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBridgeChainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedBridgeChainsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowedBridgeChains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllowedBridgeChainsResponse {
    return {
      allowedBridgeChains: Array.isArray(object?.allowedBridgeChains) ? object.allowedBridgeChains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryAllowedBridgeChainsResponse): unknown {
    const obj: any = {};

    if (message.allowedBridgeChains) {
      obj.allowedBridgeChains = message.allowedBridgeChains.map(e => e);
    } else {
      obj.allowedBridgeChains = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryAllowedBridgeChainsResponse>): QueryAllowedBridgeChainsResponse {
    const message = createBaseQueryAllowedBridgeChainsResponse();
    message.allowedBridgeChains = object.allowedBridgeChains?.map(e => e) || [];
    return message;
  },

  fromAmino(object: QueryAllowedBridgeChainsResponseAmino): QueryAllowedBridgeChainsResponse {
    return {
      allowedBridgeChains: Array.isArray(object?.allowed_bridge_chains) ? object.allowed_bridge_chains.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryAllowedBridgeChainsResponse): QueryAllowedBridgeChainsResponseAmino {
    const obj: any = {};

    if (message.allowedBridgeChains) {
      obj.allowed_bridge_chains = message.allowedBridgeChains.map(e => e);
    } else {
      obj.allowed_bridge_chains = [];
    }

    return obj;
  },

  fromAminoMsg(object: QueryAllowedBridgeChainsResponseAminoMsg): QueryAllowedBridgeChainsResponse {
    return QueryAllowedBridgeChainsResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAllowedBridgeChainsResponseProtoMsg): QueryAllowedBridgeChainsResponse {
    return QueryAllowedBridgeChainsResponse.decode(message.value);
  },

  toProto(message: QueryAllowedBridgeChainsResponse): Uint8Array {
    return QueryAllowedBridgeChainsResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAllowedBridgeChainsResponse): QueryAllowedBridgeChainsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse",
      value: QueryAllowedBridgeChainsResponse.encode(message).finish()
    };
  }

};