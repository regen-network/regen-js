/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Params } from '../../../regen/ecocredit/v1/types';
import { CreditType } from '../../../regen/ecocredit/v1/state';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.ecocredit.v1';

/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
  $type: 'regen.ecocredit.v1.QueryClassesRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
  $type: 'regen.ecocredit.v1.QueryClassesResponse';
  /** classes are the fetched credit classes. */
  classes: ClassInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequest {
  $type: 'regen.ecocredit.v1.QueryClassesByAdminRequest';
  /** admin is the address of the admin of the class. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponse {
  $type: 'regen.ecocredit.v1.QueryClassesByAdminResponse';
  /** classes are the fetched credit classes. */
  classes: ClassInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequest {
  $type: 'regen.ecocredit.v1.QueryClassRequest';
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
}

/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponse {
  $type: 'regen.ecocredit.v1.QueryClassResponse';
  /** class is the fetched credit class. */
  class?: ClassInfo;
}

/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequest {
  $type: 'regen.ecocredit.v1.QueryClassIssuersRequest';
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponse {
  $type: 'regen.ecocredit.v1.QueryClassIssuersResponse';
  /** issuers is a list of issuers for the credit class */
  issuers: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
  $type: 'regen.ecocredit.v1.QueryProjectsRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
  $type: 'regen.ecocredit.v1.QueryProjectsResponse';
  /** projects are the fetched projects. */
  projects: ProjectInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProjectsByClassRequest is the Query/ProjectsByClass request type. */
export interface QueryProjectsByClassRequest {
  $type: 'regen.ecocredit.v1.QueryProjectsByClassRequest';
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProjectsByClassResponse is the Query/ProjectsByClass response type. */
export interface QueryProjectsByClassResponse {
  $type: 'regen.ecocredit.v1.QueryProjectsByClassResponse';
  /** projects are the fetched projects. */
  projects: ProjectInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequest {
  $type: 'regen.ecocredit.v1.QueryProjectsByReferenceIdRequest';
  /** reference_id is the project reference id. */
  referenceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponse {
  $type: 'regen.ecocredit.v1.QueryProjectsByReferenceIdResponse';
  /** projects are the fetched projects. */
  projects: ProjectInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProjectsByAdminRequest is the Query/ProjectByAdmin request type. */
export interface QueryProjectsByAdminRequest {
  $type: 'regen.ecocredit.v1.QueryProjectsByAdminRequest';
  /** admin is the account address of project admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProjectsByAdminResponse is the Query/ProjectByAdmin response type. */
export interface QueryProjectsByAdminResponse {
  $type: 'regen.ecocredit.v1.QueryProjectsByAdminResponse';
  /** projects are the fetched projects. */
  projects: ProjectInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequest {
  $type: 'regen.ecocredit.v1.QueryProjectRequest';
  /** project_id is the unique identifier of the project to query. */
  projectId: string;
}

/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponse {
  $type: 'regen.ecocredit.v1.QueryProjectResponse';
  /** project is the fetched project. */
  project?: ProjectInfo;
}

/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
  $type: 'regen.ecocredit.v1.QueryBatchesRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
  $type: 'regen.ecocredit.v1.QueryBatchesResponse';
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequest {
  $type: 'regen.ecocredit.v1.QueryBatchesByIssuerRequest';
  /** issuer is the address that issued the batch */
  issuer: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponse {
  $type: 'regen.ecocredit.v1.QueryBatchesByIssuerResponse';
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequest {
  $type: 'regen.ecocredit.v1.QueryBatchesByClassRequest';
  /** class_id is the unique identifier of the credit class to query. */
  classId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBatchesByProjectRequest is the Query/BatchesByProject request type. */
export interface QueryBatchesByProjectRequest {
  $type: 'regen.ecocredit.v1.QueryBatchesByProjectRequest';
  /** project_id is the unique identifier of the project to query. */
  projectId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBatchesByProjectResponse is the Query/BatchesByProject response type. */
export interface QueryBatchesByProjectResponse {
  $type: 'regen.ecocredit.v1.QueryBatchesByProjectResponse';
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponse {
  $type: 'regen.ecocredit.v1.QueryBatchesByClassResponse';
  /** batches are the fetched credit batches. */
  batches: BatchInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequest {
  $type: 'regen.ecocredit.v1.QueryBatchRequest';
  /** batch_denom is the unique identifier of the credit batch to query. */
  batchDenom: string;
}

/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponse {
  $type: 'regen.ecocredit.v1.QueryBatchResponse';
  /** batch is the fetched credit batch. */
  batch?: BatchInfo;
}

/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
  $type: 'regen.ecocredit.v1.QueryBalanceRequest';
  /** address is the address of the account whose balance is being queried. */
  address: string;
  /** batch_denom is the unique identifier of the credit batch to query. */
  batchDenom: string;
}

/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
  $type: 'regen.ecocredit.v1.QueryBalanceResponse';
  /** balance is the balance of the given account. */
  balance?: BatchBalanceInfo;
}

/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequest {
  $type: 'regen.ecocredit.v1.QueryBalancesRequest';
  /** address is the address of the account whose balance is being queried. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponse {
  $type: 'regen.ecocredit.v1.QueryBalancesResponse';
  /**
   * balances are a list of balances from different credit batches that the
   * account holds.
   */
  balances: BatchBalanceInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
  $type: 'regen.ecocredit.v1.QuerySupplyRequest';
  /** batch_denom is the unique identifier of the credit batch to query. */
  batchDenom: string;
}

/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
  $type: 'regen.ecocredit.v1.QuerySupplyResponse';
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

/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
  $type: 'regen.ecocredit.v1.QueryCreditTypesRequest';
}

/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
  $type: 'regen.ecocredit.v1.QueryCreditTypesResponse';
  /** credit_types are the fetched credit types. */
  creditTypes: CreditType[];
}

/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
  $type: 'regen.ecocredit.v1.QueryParamsRequest';
}

/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
  $type: 'regen.ecocredit.v1.QueryParamsResponse';
  /** params defines the parameters of the ecocredit module. */
  params?: Params;
}

/** QueryCreditTypeRequest is the Query/CreditType request type */
export interface QueryCreditTypeRequest {
  $type: 'regen.ecocredit.v1.QueryCreditTypeRequest';
  /** abbreviation is the abbreviation of the credit type. */
  abbreviation: string;
}

/** QueryCreditTypeResponse is the Query/CreditType response type */
export interface QueryCreditTypeResponse {
  $type: 'regen.ecocredit.v1.QueryCreditTypeResponse';
  /** credit_type is the fetched credit type. */
  creditType?: CreditType;
}

/** ClassInfo is the human-readable credit class information. */
export interface ClassInfo {
  $type: 'regen.ecocredit.v1.ClassInfo';
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

/** ProjectInfo is the human-readable project information. */
export interface ProjectInfo {
  $type: 'regen.ecocredit.v1.ProjectInfo';
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

/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfo {
  $type: 'regen.ecocredit.v1.BatchInfo';
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
  startDate?: Date;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate?: Date;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuanceDate?: Date;
  /**
   * open determines whether or not the credit batch is open, i.e. whether or
   * not new credits can be minted to the credit batch.
   */
  open: boolean;
}

/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfo {
  $type: 'regen.ecocredit.v1.BatchBalanceInfo';
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

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryClassesRequest',
    pagination: undefined,
  };
}

export const QueryClassesRequest = {
  $type: 'regen.ecocredit.v1.QueryClassesRequest' as const,

  encode(
    message: QueryClassesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
      $type: QueryClassesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(
    object: I,
  ): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassesRequest.$type, QueryClassesRequest);

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryClassesResponse',
    classes: [],
    pagination: undefined,
  };
}

export const QueryClassesResponse = {
  $type: 'regen.ecocredit.v1.QueryClassesResponse' as const,

  encode(
    message: QueryClassesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassesResponse {
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
      $type: QueryClassesResponse.$type,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => ClassInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e =>
        e ? ClassInfo.toJSON(e) : undefined,
      );
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(
    object: I,
  ): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassesResponse.$type, QueryClassesResponse);

function createBaseQueryClassesByAdminRequest(): QueryClassesByAdminRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryClassesByAdminRequest',
    admin: '',
    pagination: undefined,
  };
}

export const QueryClassesByAdminRequest = {
  $type: 'regen.ecocredit.v1.QueryClassesByAdminRequest' as const,

  encode(
    message: QueryClassesByAdminRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassesByAdminRequest {
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
      $type: QueryClassesByAdminRequest.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesByAdminRequest>, I>>(
    object: I,
  ): QueryClassesByAdminRequest {
    const message = createBaseQueryClassesByAdminRequest();
    message.admin = object.admin ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClassesByAdminRequest.$type,
  QueryClassesByAdminRequest,
);

function createBaseQueryClassesByAdminResponse(): QueryClassesByAdminResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryClassesByAdminResponse',
    classes: [],
    pagination: undefined,
  };
}

export const QueryClassesByAdminResponse = {
  $type: 'regen.ecocredit.v1.QueryClassesByAdminResponse' as const,

  encode(
    message: QueryClassesByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.classes) {
      ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassesByAdminResponse {
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
      $type: QueryClassesByAdminResponse.$type,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => ClassInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesByAdminResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e =>
        e ? ClassInfo.toJSON(e) : undefined,
      );
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesByAdminResponse>, I>>(
    object: I,
  ): QueryClassesByAdminResponse {
    const message = createBaseQueryClassesByAdminResponse();
    message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClassesByAdminResponse.$type,
  QueryClassesByAdminResponse,
);

function createBaseQueryClassRequest(): QueryClassRequest {
  return { $type: 'regen.ecocredit.v1.QueryClassRequest', classId: '' };
}

export const QueryClassRequest = {
  $type: 'regen.ecocredit.v1.QueryClassRequest' as const,

  encode(
    message: QueryClassRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
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
      $type: QueryClassRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassRequest>, I>>(
    object: I,
  ): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryClassRequest.$type, QueryClassRequest);

function createBaseQueryClassResponse(): QueryClassResponse {
  return { $type: 'regen.ecocredit.v1.QueryClassResponse', class: undefined };
}

export const QueryClassResponse = {
  $type: 'regen.ecocredit.v1.QueryClassResponse' as const,

  encode(
    message: QueryClassResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
      $type: QueryClassResponse.$type,
      class: isSet(object.class) ? ClassInfo.fromJSON(object.class) : undefined,
    };
  },

  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class ? ClassInfo.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassResponse>, I>>(
    object: I,
  ): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class =
      object.class !== undefined && object.class !== null
        ? ClassInfo.fromPartial(object.class)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassResponse.$type, QueryClassResponse);

function createBaseQueryClassIssuersRequest(): QueryClassIssuersRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryClassIssuersRequest',
    classId: '',
    pagination: undefined,
  };
}

export const QueryClassIssuersRequest = {
  $type: 'regen.ecocredit.v1.QueryClassIssuersRequest' as const,

  encode(
    message: QueryClassIssuersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassIssuersRequest {
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
      $type: QueryClassIssuersRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassIssuersRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassIssuersRequest>, I>>(
    object: I,
  ): QueryClassIssuersRequest {
    const message = createBaseQueryClassIssuersRequest();
    message.classId = object.classId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClassIssuersRequest.$type,
  QueryClassIssuersRequest,
);

function createBaseQueryClassIssuersResponse(): QueryClassIssuersResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryClassIssuersResponse',
    issuers: [],
    pagination: undefined,
  };
}

export const QueryClassIssuersResponse = {
  $type: 'regen.ecocredit.v1.QueryClassIssuersResponse' as const,

  encode(
    message: QueryClassIssuersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.issuers) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassIssuersResponse {
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
      $type: QueryClassIssuersResponse.$type,
      issuers: Array.isArray(object?.issuers)
        ? object.issuers.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassIssuersResponse): unknown {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassIssuersResponse>, I>>(
    object: I,
  ): QueryClassIssuersResponse {
    const message = createBaseQueryClassIssuersResponse();
    message.issuers = object.issuers?.map(e => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClassIssuersResponse.$type,
  QueryClassIssuersResponse,
);

function createBaseQueryProjectsRequest(): QueryProjectsRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsRequest',
    pagination: undefined,
  };
}

export const QueryProjectsRequest = {
  $type: 'regen.ecocredit.v1.QueryProjectsRequest' as const,

  encode(
    message: QueryProjectsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsRequest {
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
      $type: QueryProjectsRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectsRequest>, I>>(
    object: I,
  ): QueryProjectsRequest {
    const message = createBaseQueryProjectsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProjectsRequest.$type, QueryProjectsRequest);

function createBaseQueryProjectsResponse(): QueryProjectsResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsResponse',
    projects: [],
    pagination: undefined,
  };
}

export const QueryProjectsResponse = {
  $type: 'regen.ecocredit.v1.QueryProjectsResponse' as const,

  encode(
    message: QueryProjectsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsResponse {
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
      $type: QueryProjectsResponse.$type,
      projects: Array.isArray(object?.projects)
        ? object.projects.map((e: any) => ProjectInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsResponse): unknown {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e =>
        e ? ProjectInfo.toJSON(e) : undefined,
      );
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectsResponse>, I>>(
    object: I,
  ): QueryProjectsResponse {
    const message = createBaseQueryProjectsResponse();
    message.projects =
      object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProjectsResponse.$type, QueryProjectsResponse);

function createBaseQueryProjectsByClassRequest(): QueryProjectsByClassRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsByClassRequest',
    classId: '',
    pagination: undefined,
  };
}

export const QueryProjectsByClassRequest = {
  $type: 'regen.ecocredit.v1.QueryProjectsByClassRequest' as const,

  encode(
    message: QueryProjectsByClassRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsByClassRequest {
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
      $type: QueryProjectsByClassRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectsByClassRequest>, I>>(
    object: I,
  ): QueryProjectsByClassRequest {
    const message = createBaseQueryProjectsByClassRequest();
    message.classId = object.classId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProjectsByClassRequest.$type,
  QueryProjectsByClassRequest,
);

function createBaseQueryProjectsByClassResponse(): QueryProjectsByClassResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsByClassResponse',
    projects: [],
    pagination: undefined,
  };
}

export const QueryProjectsByClassResponse = {
  $type: 'regen.ecocredit.v1.QueryProjectsByClassResponse' as const,

  encode(
    message: QueryProjectsByClassResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsByClassResponse {
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
      $type: QueryProjectsByClassResponse.$type,
      projects: Array.isArray(object?.projects)
        ? object.projects.map((e: any) => ProjectInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsByClassResponse): unknown {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e =>
        e ? ProjectInfo.toJSON(e) : undefined,
      );
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectsByClassResponse>, I>>(
    object: I,
  ): QueryProjectsByClassResponse {
    const message = createBaseQueryProjectsByClassResponse();
    message.projects =
      object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProjectsByClassResponse.$type,
  QueryProjectsByClassResponse,
);

function createBaseQueryProjectsByReferenceIdRequest(): QueryProjectsByReferenceIdRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsByReferenceIdRequest',
    referenceId: '',
    pagination: undefined,
  };
}

export const QueryProjectsByReferenceIdRequest = {
  $type: 'regen.ecocredit.v1.QueryProjectsByReferenceIdRequest' as const,

  encode(
    message: QueryProjectsByReferenceIdRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.referenceId !== '') {
      writer.uint32(10).string(message.referenceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsByReferenceIdRequest {
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
      $type: QueryProjectsByReferenceIdRequest.$type,
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsByReferenceIdRequest): unknown {
    const obj: any = {};
    message.referenceId !== undefined &&
      (obj.referenceId = message.referenceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryProjectsByReferenceIdRequest>, I>,
  >(object: I): QueryProjectsByReferenceIdRequest {
    const message = createBaseQueryProjectsByReferenceIdRequest();
    message.referenceId = object.referenceId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProjectsByReferenceIdRequest.$type,
  QueryProjectsByReferenceIdRequest,
);

function createBaseQueryProjectsByReferenceIdResponse(): QueryProjectsByReferenceIdResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsByReferenceIdResponse',
    projects: [],
    pagination: undefined,
  };
}

export const QueryProjectsByReferenceIdResponse = {
  $type: 'regen.ecocredit.v1.QueryProjectsByReferenceIdResponse' as const,

  encode(
    message: QueryProjectsByReferenceIdResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsByReferenceIdResponse {
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
      $type: QueryProjectsByReferenceIdResponse.$type,
      projects: Array.isArray(object?.projects)
        ? object.projects.map((e: any) => ProjectInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsByReferenceIdResponse): unknown {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e =>
        e ? ProjectInfo.toJSON(e) : undefined,
      );
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryProjectsByReferenceIdResponse>, I>,
  >(object: I): QueryProjectsByReferenceIdResponse {
    const message = createBaseQueryProjectsByReferenceIdResponse();
    message.projects =
      object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProjectsByReferenceIdResponse.$type,
  QueryProjectsByReferenceIdResponse,
);

function createBaseQueryProjectsByAdminRequest(): QueryProjectsByAdminRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsByAdminRequest',
    admin: '',
    pagination: undefined,
  };
}

export const QueryProjectsByAdminRequest = {
  $type: 'regen.ecocredit.v1.QueryProjectsByAdminRequest' as const,

  encode(
    message: QueryProjectsByAdminRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsByAdminRequest {
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
      $type: QueryProjectsByAdminRequest.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectsByAdminRequest>, I>>(
    object: I,
  ): QueryProjectsByAdminRequest {
    const message = createBaseQueryProjectsByAdminRequest();
    message.admin = object.admin ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProjectsByAdminRequest.$type,
  QueryProjectsByAdminRequest,
);

function createBaseQueryProjectsByAdminResponse(): QueryProjectsByAdminResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectsByAdminResponse',
    projects: [],
    pagination: undefined,
  };
}

export const QueryProjectsByAdminResponse = {
  $type: 'regen.ecocredit.v1.QueryProjectsByAdminResponse' as const,

  encode(
    message: QueryProjectsByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.projects) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectsByAdminResponse {
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
      $type: QueryProjectsByAdminResponse.$type,
      projects: Array.isArray(object?.projects)
        ? object.projects.map((e: any) => ProjectInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProjectsByAdminResponse): unknown {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e =>
        e ? ProjectInfo.toJSON(e) : undefined,
      );
    } else {
      obj.projects = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectsByAdminResponse>, I>>(
    object: I,
  ): QueryProjectsByAdminResponse {
    const message = createBaseQueryProjectsByAdminResponse();
    message.projects =
      object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProjectsByAdminResponse.$type,
  QueryProjectsByAdminResponse,
);

function createBaseQueryProjectRequest(): QueryProjectRequest {
  return { $type: 'regen.ecocredit.v1.QueryProjectRequest', projectId: '' };
}

export const QueryProjectRequest = {
  $type: 'regen.ecocredit.v1.QueryProjectRequest' as const,

  encode(
    message: QueryProjectRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectId !== '') {
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
      $type: QueryProjectRequest.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
    };
  },

  toJSON(message: QueryProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectRequest>, I>>(
    object: I,
  ): QueryProjectRequest {
    const message = createBaseQueryProjectRequest();
    message.projectId = object.projectId ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryProjectRequest.$type, QueryProjectRequest);

function createBaseQueryProjectResponse(): QueryProjectResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryProjectResponse',
    project: undefined,
  };
}

export const QueryProjectResponse = {
  $type: 'regen.ecocredit.v1.QueryProjectResponse' as const,

  encode(
    message: QueryProjectResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.project !== undefined) {
      ProjectInfo.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProjectResponse {
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
      $type: QueryProjectResponse.$type,
      project: isSet(object.project)
        ? ProjectInfo.fromJSON(object.project)
        : undefined,
    };
  },

  toJSON(message: QueryProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? ProjectInfo.toJSON(message.project)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectResponse>, I>>(
    object: I,
  ): QueryProjectResponse {
    const message = createBaseQueryProjectResponse();
    message.project =
      object.project !== undefined && object.project !== null
        ? ProjectInfo.fromPartial(object.project)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProjectResponse.$type, QueryProjectResponse);

function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesRequest',
    pagination: undefined,
  };
}

export const QueryBatchesRequest = {
  $type: 'regen.ecocredit.v1.QueryBatchesRequest' as const,

  encode(
    message: QueryBatchesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
      $type: QueryBatchesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesRequest>, I>>(
    object: I,
  ): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBatchesRequest.$type, QueryBatchesRequest);

function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesResponse',
    batches: [],
    pagination: undefined,
  };
}

export const QueryBatchesResponse = {
  $type: 'regen.ecocredit.v1.QueryBatchesResponse' as const,

  encode(
    message: QueryBatchesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesResponse {
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
      $type: QueryBatchesResponse.$type,
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => BatchInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e =>
        e ? BatchInfo.toJSON(e) : undefined,
      );
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesResponse>, I>>(
    object: I,
  ): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBatchesResponse.$type, QueryBatchesResponse);

function createBaseQueryBatchesByIssuerRequest(): QueryBatchesByIssuerRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesByIssuerRequest',
    issuer: '',
    pagination: undefined,
  };
}

export const QueryBatchesByIssuerRequest = {
  $type: 'regen.ecocredit.v1.QueryBatchesByIssuerRequest' as const,

  encode(
    message: QueryBatchesByIssuerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.issuer !== '') {
      writer.uint32(10).string(message.issuer);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesByIssuerRequest {
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
      $type: QueryBatchesByIssuerRequest.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesByIssuerRequest): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesByIssuerRequest>, I>>(
    object: I,
  ): QueryBatchesByIssuerRequest {
    const message = createBaseQueryBatchesByIssuerRequest();
    message.issuer = object.issuer ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBatchesByIssuerRequest.$type,
  QueryBatchesByIssuerRequest,
);

function createBaseQueryBatchesByIssuerResponse(): QueryBatchesByIssuerResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesByIssuerResponse',
    batches: [],
    pagination: undefined,
  };
}

export const QueryBatchesByIssuerResponse = {
  $type: 'regen.ecocredit.v1.QueryBatchesByIssuerResponse' as const,

  encode(
    message: QueryBatchesByIssuerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesByIssuerResponse {
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
      $type: QueryBatchesByIssuerResponse.$type,
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => BatchInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesByIssuerResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e =>
        e ? BatchInfo.toJSON(e) : undefined,
      );
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesByIssuerResponse>, I>>(
    object: I,
  ): QueryBatchesByIssuerResponse {
    const message = createBaseQueryBatchesByIssuerResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBatchesByIssuerResponse.$type,
  QueryBatchesByIssuerResponse,
);

function createBaseQueryBatchesByClassRequest(): QueryBatchesByClassRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesByClassRequest',
    classId: '',
    pagination: undefined,
  };
}

export const QueryBatchesByClassRequest = {
  $type: 'regen.ecocredit.v1.QueryBatchesByClassRequest' as const,

  encode(
    message: QueryBatchesByClassRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesByClassRequest {
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
      $type: QueryBatchesByClassRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesByClassRequest>, I>>(
    object: I,
  ): QueryBatchesByClassRequest {
    const message = createBaseQueryBatchesByClassRequest();
    message.classId = object.classId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBatchesByClassRequest.$type,
  QueryBatchesByClassRequest,
);

function createBaseQueryBatchesByProjectRequest(): QueryBatchesByProjectRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesByProjectRequest',
    projectId: '',
    pagination: undefined,
  };
}

export const QueryBatchesByProjectRequest = {
  $type: 'regen.ecocredit.v1.QueryBatchesByProjectRequest' as const,

  encode(
    message: QueryBatchesByProjectRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectId !== '') {
      writer.uint32(10).string(message.projectId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesByProjectRequest {
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
      $type: QueryBatchesByProjectRequest.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesByProjectRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesByProjectRequest>, I>>(
    object: I,
  ): QueryBatchesByProjectRequest {
    const message = createBaseQueryBatchesByProjectRequest();
    message.projectId = object.projectId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBatchesByProjectRequest.$type,
  QueryBatchesByProjectRequest,
);

function createBaseQueryBatchesByProjectResponse(): QueryBatchesByProjectResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesByProjectResponse',
    batches: [],
    pagination: undefined,
  };
}

export const QueryBatchesByProjectResponse = {
  $type: 'regen.ecocredit.v1.QueryBatchesByProjectResponse' as const,

  encode(
    message: QueryBatchesByProjectResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesByProjectResponse {
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
      $type: QueryBatchesByProjectResponse.$type,
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => BatchInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesByProjectResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e =>
        e ? BatchInfo.toJSON(e) : undefined,
      );
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesByProjectResponse>, I>>(
    object: I,
  ): QueryBatchesByProjectResponse {
    const message = createBaseQueryBatchesByProjectResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBatchesByProjectResponse.$type,
  QueryBatchesByProjectResponse,
);

function createBaseQueryBatchesByClassResponse(): QueryBatchesByClassResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryBatchesByClassResponse',
    batches: [],
    pagination: undefined,
  };
}

export const QueryBatchesByClassResponse = {
  $type: 'regen.ecocredit.v1.QueryBatchesByClassResponse' as const,

  encode(
    message: QueryBatchesByClassResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.batches) {
      BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBatchesByClassResponse {
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
      $type: QueryBatchesByClassResponse.$type,
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => BatchInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBatchesByClassResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e =>
        e ? BatchInfo.toJSON(e) : undefined,
      );
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesByClassResponse>, I>>(
    object: I,
  ): QueryBatchesByClassResponse {
    const message = createBaseQueryBatchesByClassResponse();
    message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBatchesByClassResponse.$type,
  QueryBatchesByClassResponse,
);

function createBaseQueryBatchRequest(): QueryBatchRequest {
  return { $type: 'regen.ecocredit.v1.QueryBatchRequest', batchDenom: '' };
}

export const QueryBatchRequest = {
  $type: 'regen.ecocredit.v1.QueryBatchRequest' as const,

  encode(
    message: QueryBatchRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
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
      $type: QueryBatchRequest.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QueryBatchRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchRequest>, I>>(
    object: I,
  ): QueryBatchRequest {
    const message = createBaseQueryBatchRequest();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBatchRequest.$type, QueryBatchRequest);

function createBaseQueryBatchResponse(): QueryBatchResponse {
  return { $type: 'regen.ecocredit.v1.QueryBatchResponse', batch: undefined };
}

export const QueryBatchResponse = {
  $type: 'regen.ecocredit.v1.QueryBatchResponse' as const,

  encode(
    message: QueryBatchResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
      $type: QueryBatchResponse.$type,
      batch: isSet(object.batch) ? BatchInfo.fromJSON(object.batch) : undefined,
    };
  },

  toJSON(message: QueryBatchResponse): unknown {
    const obj: any = {};
    message.batch !== undefined &&
      (obj.batch = message.batch ? BatchInfo.toJSON(message.batch) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchResponse>, I>>(
    object: I,
  ): QueryBatchResponse {
    const message = createBaseQueryBatchResponse();
    message.batch =
      object.batch !== undefined && object.batch !== null
        ? BatchInfo.fromPartial(object.batch)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBatchResponse.$type, QueryBatchResponse);

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryBalanceRequest',
    address: '',
    batchDenom: '',
  };
}

export const QueryBalanceRequest = {
  $type: 'regen.ecocredit.v1.QueryBalanceRequest' as const,

  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.batchDenom !== '') {
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
      $type: QueryBalanceRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I,
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? '';
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceRequest.$type, QueryBalanceRequest);

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryBalanceResponse',
    balance: undefined,
  };
}

export const QueryBalanceResponse = {
  $type: 'regen.ecocredit.v1.QueryBalanceResponse' as const,

  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== undefined) {
      BatchBalanceInfo.encode(
        message.balance,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBalanceResponse {
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
      $type: QueryBalanceResponse.$type,
      balance: isSet(object.balance)
        ? BatchBalanceInfo.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? BatchBalanceInfo.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I,
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? BatchBalanceInfo.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceResponse.$type, QueryBalanceResponse);

function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryBalancesRequest',
    address: '',
    pagination: undefined,
  };
}

export const QueryBalancesRequest = {
  $type: 'regen.ecocredit.v1.QueryBalancesRequest' as const,

  encode(
    message: QueryBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBalancesRequest {
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
      $type: QueryBalancesRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalancesRequest>, I>>(
    object: I,
  ): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.address = object.address ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBalancesRequest.$type, QueryBalancesRequest);

function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryBalancesResponse',
    balances: [],
    pagination: undefined,
  };
}

export const QueryBalancesResponse = {
  $type: 'regen.ecocredit.v1.QueryBalancesResponse' as const,

  encode(
    message: QueryBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.balances) {
      BatchBalanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(
            BatchBalanceInfo.decode(reader, reader.uint32()),
          );
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
      $type: QueryBalancesResponse.$type,
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => BatchBalanceInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e =>
        e ? BatchBalanceInfo.toJSON(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalancesResponse>, I>>(
    object: I,
  ): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances =
      object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBalancesResponse.$type, QueryBalancesResponse);

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { $type: 'regen.ecocredit.v1.QuerySupplyRequest', batchDenom: '' };
}

export const QuerySupplyRequest = {
  $type: 'regen.ecocredit.v1.QuerySupplyRequest' as const,

  encode(
    message: QuerySupplyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
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
      $type: QuerySupplyRequest.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
    object: I,
  ): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyRequest.$type, QuerySupplyRequest);

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    $type: 'regen.ecocredit.v1.QuerySupplyResponse',
    tradableAmount: '',
    retiredAmount: '',
    cancelledAmount: '',
  };
}

export const QuerySupplyResponse = {
  $type: 'regen.ecocredit.v1.QuerySupplyResponse' as const,

  encode(
    message: QuerySupplyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tradableAmount !== '') {
      writer.uint32(10).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
      writer.uint32(18).string(message.retiredAmount);
    }
    if (message.cancelledAmount !== '') {
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
      $type: QuerySupplyResponse.$type,
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
      cancelledAmount: isSet(object.cancelledAmount)
        ? String(object.cancelledAmount)
        : '',
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    message.cancelledAmount !== undefined &&
      (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(
    object: I,
  ): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    message.cancelledAmount = object.cancelledAmount ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyResponse.$type, QuerySupplyResponse);

function createBaseQueryCreditTypesRequest(): QueryCreditTypesRequest {
  return { $type: 'regen.ecocredit.v1.QueryCreditTypesRequest' };
}

export const QueryCreditTypesRequest = {
  $type: 'regen.ecocredit.v1.QueryCreditTypesRequest' as const,

  encode(
    _: QueryCreditTypesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCreditTypesRequest {
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
    return {
      $type: QueryCreditTypesRequest.$type,
    };
  },

  toJSON(_: QueryCreditTypesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCreditTypesRequest>, I>>(
    _: I,
  ): QueryCreditTypesRequest {
    const message = createBaseQueryCreditTypesRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryCreditTypesRequest.$type, QueryCreditTypesRequest);

function createBaseQueryCreditTypesResponse(): QueryCreditTypesResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryCreditTypesResponse',
    creditTypes: [],
  };
}

export const QueryCreditTypesResponse = {
  $type: 'regen.ecocredit.v1.QueryCreditTypesResponse' as const,

  encode(
    message: QueryCreditTypesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCreditTypesResponse {
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
      $type: QueryCreditTypesResponse.$type,
      creditTypes: Array.isArray(object?.creditTypes)
        ? object.creditTypes.map((e: any) => CreditType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryCreditTypesResponse): unknown {
    const obj: any = {};
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e =>
        e ? CreditType.toJSON(e) : undefined,
      );
    } else {
      obj.creditTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCreditTypesResponse>, I>>(
    object: I,
  ): QueryCreditTypesResponse {
    const message = createBaseQueryCreditTypesResponse();
    message.creditTypes =
      object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryCreditTypesResponse.$type,
  QueryCreditTypesResponse,
);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'regen.ecocredit.v1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'regen.ecocredit.v1.QueryParamsRequest' as const,

  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    return {
      $type: QueryParamsRequest.$type,
    };
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { $type: 'regen.ecocredit.v1.QueryParamsResponse', params: undefined };
}

export const QueryParamsResponse = {
  $type: 'regen.ecocredit.v1.QueryParamsResponse' as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
      $type: QueryParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

function createBaseQueryCreditTypeRequest(): QueryCreditTypeRequest {
  return {
    $type: 'regen.ecocredit.v1.QueryCreditTypeRequest',
    abbreviation: '',
  };
}

export const QueryCreditTypeRequest = {
  $type: 'regen.ecocredit.v1.QueryCreditTypeRequest' as const,

  encode(
    message: QueryCreditTypeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abbreviation !== '') {
      writer.uint32(10).string(message.abbreviation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCreditTypeRequest {
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
      $type: QueryCreditTypeRequest.$type,
      abbreviation: isSet(object.abbreviation)
        ? String(object.abbreviation)
        : '',
    };
  },

  toJSON(message: QueryCreditTypeRequest): unknown {
    const obj: any = {};
    message.abbreviation !== undefined &&
      (obj.abbreviation = message.abbreviation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCreditTypeRequest>, I>>(
    object: I,
  ): QueryCreditTypeRequest {
    const message = createBaseQueryCreditTypeRequest();
    message.abbreviation = object.abbreviation ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryCreditTypeRequest.$type, QueryCreditTypeRequest);

function createBaseQueryCreditTypeResponse(): QueryCreditTypeResponse {
  return {
    $type: 'regen.ecocredit.v1.QueryCreditTypeResponse',
    creditType: undefined,
  };
}

export const QueryCreditTypeResponse = {
  $type: 'regen.ecocredit.v1.QueryCreditTypeResponse' as const,

  encode(
    message: QueryCreditTypeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCreditTypeResponse {
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
      $type: QueryCreditTypeResponse.$type,
      creditType: isSet(object.creditType)
        ? CreditType.fromJSON(object.creditType)
        : undefined,
    };
  },

  toJSON(message: QueryCreditTypeResponse): unknown {
    const obj: any = {};
    message.creditType !== undefined &&
      (obj.creditType = message.creditType
        ? CreditType.toJSON(message.creditType)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCreditTypeResponse>, I>>(
    object: I,
  ): QueryCreditTypeResponse {
    const message = createBaseQueryCreditTypeResponse();
    message.creditType =
      object.creditType !== undefined && object.creditType !== null
        ? CreditType.fromPartial(object.creditType)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryCreditTypeResponse.$type, QueryCreditTypeResponse);

function createBaseClassInfo(): ClassInfo {
  return {
    $type: 'regen.ecocredit.v1.ClassInfo',
    id: '',
    admin: '',
    metadata: '',
    creditTypeAbbrev: '',
  };
}

export const ClassInfo = {
  $type: 'regen.ecocredit.v1.ClassInfo' as const,

  encode(
    message: ClassInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.admin !== '') {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== '') {
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
      $type: ClassInfo.$type,
      id: isSet(object.id) ? String(object.id) : '',
      admin: isSet(object.admin) ? String(object.admin) : '',
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
      creditTypeAbbrev: isSet(object.creditTypeAbbrev)
        ? String(object.creditTypeAbbrev)
        : '',
    };
  },

  toJSON(message: ClassInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined &&
      (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassInfo>, I>>(
    object: I,
  ): ClassInfo {
    const message = createBaseClassInfo();
    message.id = object.id ?? '';
    message.admin = object.admin ?? '';
    message.metadata = object.metadata ?? '';
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? '';
    return message;
  },
};

messageTypeRegistry.set(ClassInfo.$type, ClassInfo);

function createBaseProjectInfo(): ProjectInfo {
  return {
    $type: 'regen.ecocredit.v1.ProjectInfo',
    id: '',
    admin: '',
    classId: '',
    jurisdiction: '',
    metadata: '',
    referenceId: '',
  };
}

export const ProjectInfo = {
  $type: 'regen.ecocredit.v1.ProjectInfo' as const,

  encode(
    message: ProjectInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.admin !== '') {
      writer.uint32(18).string(message.admin);
    }
    if (message.classId !== '') {
      writer.uint32(26).string(message.classId);
    }
    if (message.jurisdiction !== '') {
      writer.uint32(34).string(message.jurisdiction);
    }
    if (message.metadata !== '') {
      writer.uint32(42).string(message.metadata);
    }
    if (message.referenceId !== '') {
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
      $type: ProjectInfo.$type,
      id: isSet(object.id) ? String(object.id) : '',
      admin: isSet(object.admin) ? String(object.admin) : '',
      classId: isSet(object.classId) ? String(object.classId) : '',
      jurisdiction: isSet(object.jurisdiction)
        ? String(object.jurisdiction)
        : '',
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : '',
    };
  },

  toJSON(message: ProjectInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.jurisdiction !== undefined &&
      (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.referenceId !== undefined &&
      (obj.referenceId = message.referenceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProjectInfo>, I>>(
    object: I,
  ): ProjectInfo {
    const message = createBaseProjectInfo();
    message.id = object.id ?? '';
    message.admin = object.admin ?? '';
    message.classId = object.classId ?? '';
    message.jurisdiction = object.jurisdiction ?? '';
    message.metadata = object.metadata ?? '';
    message.referenceId = object.referenceId ?? '';
    return message;
  },
};

messageTypeRegistry.set(ProjectInfo.$type, ProjectInfo);

function createBaseBatchInfo(): BatchInfo {
  return {
    $type: 'regen.ecocredit.v1.BatchInfo',
    issuer: '',
    projectId: '',
    denom: '',
    metadata: '',
    startDate: undefined,
    endDate: undefined,
    issuanceDate: undefined,
    open: false,
  };
}

export const BatchInfo = {
  $type: 'regen.ecocredit.v1.BatchInfo' as const,

  encode(
    message: BatchInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.issuer !== '') {
      writer.uint32(10).string(message.issuer);
    }
    if (message.projectId !== '') {
      writer.uint32(18).string(message.projectId);
    }
    if (message.denom !== '') {
      writer.uint32(26).string(message.denom);
    }
    if (message.metadata !== '') {
      writer.uint32(34).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.issuanceDate),
        writer.uint32(58).fork(),
      ).ldelim();
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
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 7:
          message.issuanceDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
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
      $type: BatchInfo.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
      denom: isSet(object.denom) ? String(object.denom) : '',
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
      startDate: isSet(object.startDate)
        ? fromJsonTimestamp(object.startDate)
        : undefined,
      endDate: isSet(object.endDate)
        ? fromJsonTimestamp(object.endDate)
        : undefined,
      issuanceDate: isSet(object.issuanceDate)
        ? fromJsonTimestamp(object.issuanceDate)
        : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false,
    };
  },

  toJSON(message: BatchInfo): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined &&
      (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined &&
      (obj.endDate = message.endDate.toISOString());
    message.issuanceDate !== undefined &&
      (obj.issuanceDate = message.issuanceDate.toISOString());
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchInfo>, I>>(
    object: I,
  ): BatchInfo {
    const message = createBaseBatchInfo();
    message.issuer = object.issuer ?? '';
    message.projectId = object.projectId ?? '';
    message.denom = object.denom ?? '';
    message.metadata = object.metadata ?? '';
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.issuanceDate = object.issuanceDate ?? undefined;
    message.open = object.open ?? false;
    return message;
  },
};

messageTypeRegistry.set(BatchInfo.$type, BatchInfo);

function createBaseBatchBalanceInfo(): BatchBalanceInfo {
  return {
    $type: 'regen.ecocredit.v1.BatchBalanceInfo',
    address: '',
    batchDenom: '',
    tradableAmount: '',
    retiredAmount: '',
    escrowedAmount: '',
  };
}

export const BatchBalanceInfo = {
  $type: 'regen.ecocredit.v1.BatchBalanceInfo' as const,

  encode(
    message: BatchBalanceInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.tradableAmount !== '') {
      writer.uint32(26).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
      writer.uint32(34).string(message.retiredAmount);
    }
    if (message.escrowedAmount !== '') {
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
      $type: BatchBalanceInfo.$type,
      address: isSet(object.address) ? String(object.address) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
      escrowedAmount: isSet(object.escrowedAmount)
        ? String(object.escrowedAmount)
        : '',
    };
  },

  toJSON(message: BatchBalanceInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    message.escrowedAmount !== undefined &&
      (obj.escrowedAmount = message.escrowedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchBalanceInfo>, I>>(
    object: I,
  ): BatchBalanceInfo {
    const message = createBaseBatchBalanceInfo();
    message.address = object.address ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    message.escrowedAmount = object.escrowedAmount ?? '';
    return message;
  },
};

messageTypeRegistry.set(BatchBalanceInfo.$type, BatchBalanceInfo);

/** Msg is the regen.ecocredit.v1 Query service. */
export interface Query {
  /** Classes queries for all credit classes with pagination. */
  Classes(
    request: DeepPartial<QueryClassesRequest>,
  ): Promise<QueryClassesResponse>;
  /**
   * ClassesByAdmin queries for all credit classes with a specific admin
   * address.
   */
  ClassesByAdmin(
    request: DeepPartial<QueryClassesByAdminRequest>,
  ): Promise<QueryClassesByAdminResponse>;
  /** Class queries for information on a credit class. */
  Class(request: DeepPartial<QueryClassRequest>): Promise<QueryClassResponse>;
  /** ClassIssuers queries for the addresses of the issuers for a credit class. */
  ClassIssuers(
    request: DeepPartial<QueryClassIssuersRequest>,
  ): Promise<QueryClassIssuersResponse>;
  /** Projects queries for all projects with pagination. */
  Projects(
    request: DeepPartial<QueryProjectsRequest>,
  ): Promise<QueryProjectsResponse>;
  /** ProjectsByClass queries for all projects within a class with pagination. */
  ProjectsByClass(
    request: DeepPartial<QueryProjectsByClassRequest>,
  ): Promise<QueryProjectsByClassResponse>;
  /**
   * ProjectsByReferenceId queries for all projects by reference-id with
   * pagination.
   */
  ProjectsByReferenceId(
    request: DeepPartial<QueryProjectsByReferenceIdRequest>,
  ): Promise<QueryProjectsByReferenceIdResponse>;
  /**
   * ProjectsByAdmin queries for all projects by admin with
   * pagination.
   */
  ProjectsByAdmin(
    request: DeepPartial<QueryProjectsByAdminRequest>,
  ): Promise<QueryProjectsByAdminResponse>;
  /** Project queries for information on a project. */
  Project(
    request: DeepPartial<QueryProjectRequest>,
  ): Promise<QueryProjectResponse>;
  /** Batches queries for all batches with pagination. */
  Batches(
    request: DeepPartial<QueryBatchesRequest>,
  ): Promise<QueryBatchesResponse>;
  /** BatchesByIssuer queries all batches issued from a given issuer address. */
  BatchesByIssuer(
    request: DeepPartial<QueryBatchesByIssuerRequest>,
  ): Promise<QueryBatchesByIssuerResponse>;
  /** BatchesByClass queries all batches issued from a given class. */
  BatchesByClass(
    request: DeepPartial<QueryBatchesByClassRequest>,
  ): Promise<QueryBatchesByClassResponse>;
  /**
   * BatchesByProject queries for all batches from a given project with
   * pagination.
   */
  BatchesByProject(
    request: DeepPartial<QueryBatchesByProjectRequest>,
  ): Promise<QueryBatchesByProjectResponse>;
  /** Batch queries for information on a credit batch. */
  Batch(request: DeepPartial<QueryBatchRequest>): Promise<QueryBatchResponse>;
  /**
   * Balance queries the balance (both tradable and retired) of a given credit
   * batch for a given account address.
   */
  Balance(
    request: DeepPartial<QueryBalanceRequest>,
  ): Promise<QueryBalanceResponse>;
  /** Balances queries all credit balances the given account holds. */
  Balances(
    request: DeepPartial<QueryBalancesRequest>,
  ): Promise<QueryBalancesResponse>;
  /** Supply queries the tradable and retired supply of a credit batch. */
  Supply(
    request: DeepPartial<QuerySupplyRequest>,
  ): Promise<QuerySupplyResponse>;
  /**
   * CreditTypes returns the list of allowed types that credit classes can have.
   * See Types/CreditType for more details.
   */
  CreditTypes(
    request: DeepPartial<QueryCreditTypesRequest>,
  ): Promise<QueryCreditTypesResponse>;
  /** Params queries the ecocredit module parameters. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /** CreditType queries credit type information by abbreviation. */
  CreditType(
    request: DeepPartial<QueryCreditTypeRequest>,
  ): Promise<QueryCreditTypeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Classes = this.Classes.bind(this);
    this.ClassesByAdmin = this.ClassesByAdmin.bind(this);
    this.Class = this.Class.bind(this);
    this.ClassIssuers = this.ClassIssuers.bind(this);
    this.Projects = this.Projects.bind(this);
    this.ProjectsByClass = this.ProjectsByClass.bind(this);
    this.ProjectsByReferenceId = this.ProjectsByReferenceId.bind(this);
    this.ProjectsByAdmin = this.ProjectsByAdmin.bind(this);
    this.Project = this.Project.bind(this);
    this.Batches = this.Batches.bind(this);
    this.BatchesByIssuer = this.BatchesByIssuer.bind(this);
    this.BatchesByClass = this.BatchesByClass.bind(this);
    this.BatchesByProject = this.BatchesByProject.bind(this);
    this.Batch = this.Batch.bind(this);
    this.Balance = this.Balance.bind(this);
    this.Balances = this.Balances.bind(this);
    this.Supply = this.Supply.bind(this);
    this.CreditTypes = this.CreditTypes.bind(this);
    this.Params = this.Params.bind(this);
    this.CreditType = this.CreditType.bind(this);
  }
  Classes(
    request: DeepPartial<QueryClassesRequest>,
  ): Promise<QueryClassesResponse> {
    const fromPartial = QueryClassesRequest.fromPartial(request);
    const data = QueryClassesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Classes',
      data,
    );
    return promise.then(data =>
      QueryClassesResponse.decode(new _m0.Reader(data)),
    );
  }

  ClassesByAdmin(
    request: DeepPartial<QueryClassesByAdminRequest>,
  ): Promise<QueryClassesByAdminResponse> {
    const fromPartial = QueryClassesByAdminRequest.fromPartial(request);
    const data = QueryClassesByAdminRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'ClassesByAdmin',
      data,
    );
    return promise.then(data =>
      QueryClassesByAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  Class(request: DeepPartial<QueryClassRequest>): Promise<QueryClassResponse> {
    const fromPartial = QueryClassRequest.fromPartial(request);
    const data = QueryClassRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('regen.ecocredit.v1.Query', 'Class', data);
    return promise.then(data =>
      QueryClassResponse.decode(new _m0.Reader(data)),
    );
  }

  ClassIssuers(
    request: DeepPartial<QueryClassIssuersRequest>,
  ): Promise<QueryClassIssuersResponse> {
    const fromPartial = QueryClassIssuersRequest.fromPartial(request);
    const data = QueryClassIssuersRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'ClassIssuers',
      data,
    );
    return promise.then(data =>
      QueryClassIssuersResponse.decode(new _m0.Reader(data)),
    );
  }

  Projects(
    request: DeepPartial<QueryProjectsRequest>,
  ): Promise<QueryProjectsResponse> {
    const fromPartial = QueryProjectsRequest.fromPartial(request);
    const data = QueryProjectsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Projects',
      data,
    );
    return promise.then(data =>
      QueryProjectsResponse.decode(new _m0.Reader(data)),
    );
  }

  ProjectsByClass(
    request: DeepPartial<QueryProjectsByClassRequest>,
  ): Promise<QueryProjectsByClassResponse> {
    const fromPartial = QueryProjectsByClassRequest.fromPartial(request);
    const data = QueryProjectsByClassRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'ProjectsByClass',
      data,
    );
    return promise.then(data =>
      QueryProjectsByClassResponse.decode(new _m0.Reader(data)),
    );
  }

  ProjectsByReferenceId(
    request: DeepPartial<QueryProjectsByReferenceIdRequest>,
  ): Promise<QueryProjectsByReferenceIdResponse> {
    const fromPartial = QueryProjectsByReferenceIdRequest.fromPartial(request);
    const data = QueryProjectsByReferenceIdRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'ProjectsByReferenceId',
      data,
    );
    return promise.then(data =>
      QueryProjectsByReferenceIdResponse.decode(new _m0.Reader(data)),
    );
  }

  ProjectsByAdmin(
    request: DeepPartial<QueryProjectsByAdminRequest>,
  ): Promise<QueryProjectsByAdminResponse> {
    const fromPartial = QueryProjectsByAdminRequest.fromPartial(request);
    const data = QueryProjectsByAdminRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'ProjectsByAdmin',
      data,
    );
    return promise.then(data =>
      QueryProjectsByAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  Project(
    request: DeepPartial<QueryProjectRequest>,
  ): Promise<QueryProjectResponse> {
    const fromPartial = QueryProjectRequest.fromPartial(request);
    const data = QueryProjectRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Project',
      data,
    );
    return promise.then(data =>
      QueryProjectResponse.decode(new _m0.Reader(data)),
    );
  }

  Batches(
    request: DeepPartial<QueryBatchesRequest>,
  ): Promise<QueryBatchesResponse> {
    const fromPartial = QueryBatchesRequest.fromPartial(request);
    const data = QueryBatchesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Batches',
      data,
    );
    return promise.then(data =>
      QueryBatchesResponse.decode(new _m0.Reader(data)),
    );
  }

  BatchesByIssuer(
    request: DeepPartial<QueryBatchesByIssuerRequest>,
  ): Promise<QueryBatchesByIssuerResponse> {
    const fromPartial = QueryBatchesByIssuerRequest.fromPartial(request);
    const data = QueryBatchesByIssuerRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'BatchesByIssuer',
      data,
    );
    return promise.then(data =>
      QueryBatchesByIssuerResponse.decode(new _m0.Reader(data)),
    );
  }

  BatchesByClass(
    request: DeepPartial<QueryBatchesByClassRequest>,
  ): Promise<QueryBatchesByClassResponse> {
    const fromPartial = QueryBatchesByClassRequest.fromPartial(request);
    const data = QueryBatchesByClassRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'BatchesByClass',
      data,
    );
    return promise.then(data =>
      QueryBatchesByClassResponse.decode(new _m0.Reader(data)),
    );
  }

  BatchesByProject(
    request: DeepPartial<QueryBatchesByProjectRequest>,
  ): Promise<QueryBatchesByProjectResponse> {
    const fromPartial = QueryBatchesByProjectRequest.fromPartial(request);
    const data = QueryBatchesByProjectRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'BatchesByProject',
      data,
    );
    return promise.then(data =>
      QueryBatchesByProjectResponse.decode(new _m0.Reader(data)),
    );
  }

  Batch(request: DeepPartial<QueryBatchRequest>): Promise<QueryBatchResponse> {
    const fromPartial = QueryBatchRequest.fromPartial(request);
    const data = QueryBatchRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('regen.ecocredit.v1.Query', 'Batch', data);
    return promise.then(data =>
      QueryBatchResponse.decode(new _m0.Reader(data)),
    );
  }

  Balance(
    request: DeepPartial<QueryBalanceRequest>,
  ): Promise<QueryBalanceResponse> {
    const fromPartial = QueryBalanceRequest.fromPartial(request);
    const data = QueryBalanceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Balance',
      data,
    );
    return promise.then(data =>
      QueryBalanceResponse.decode(new _m0.Reader(data)),
    );
  }

  Balances(
    request: DeepPartial<QueryBalancesRequest>,
  ): Promise<QueryBalancesResponse> {
    const fromPartial = QueryBalancesRequest.fromPartial(request);
    const data = QueryBalancesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Balances',
      data,
    );
    return promise.then(data =>
      QueryBalancesResponse.decode(new _m0.Reader(data)),
    );
  }

  Supply(
    request: DeepPartial<QuerySupplyRequest>,
  ): Promise<QuerySupplyResponse> {
    const fromPartial = QuerySupplyRequest.fromPartial(request);
    const data = QuerySupplyRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Supply',
      data,
    );
    return promise.then(data =>
      QuerySupplyResponse.decode(new _m0.Reader(data)),
    );
  }

  CreditTypes(
    request: DeepPartial<QueryCreditTypesRequest>,
  ): Promise<QueryCreditTypesResponse> {
    const fromPartial = QueryCreditTypesRequest.fromPartial(request);
    const data = QueryCreditTypesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'CreditTypes',
      data,
    );
    return promise.then(data =>
      QueryCreditTypesResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  CreditType(
    request: DeepPartial<QueryCreditTypeRequest>,
  ): Promise<QueryCreditTypeResponse> {
    const fromPartial = QueryCreditTypeRequest.fromPartial(request);
    const data = QueryCreditTypeRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1.Query',
      'CreditType',
      data,
    );
    return promise.then(data =>
      QueryCreditTypeResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
