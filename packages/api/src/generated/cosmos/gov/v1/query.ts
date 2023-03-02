/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Proposal,
  ProposalStatus,
  Vote,
  VotingParams,
  DepositParams,
  TallyParams,
  Deposit,
  TallyResult,
  proposalStatusFromJSON,
  proposalStatusToJSON,
} from './gov';
import { PageRequest, PageResponse } from '../../base/query/v1beta1/pagination';

export const protobufPackage = 'cosmos.gov.v1';

/** Since: cosmos-sdk 0.46 */

/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  $type: 'cosmos.gov.v1.QueryProposalRequest';
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  $type: 'cosmos.gov.v1.QueryProposalResponse';
  proposal?: Proposal;
}

/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  $type: 'cosmos.gov.v1.QueryProposalsRequest';
  /** proposal_status defines the status of the proposals. */
  proposalStatus: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
  $type: 'cosmos.gov.v1.QueryProposalsResponse';
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  $type: 'cosmos.gov.v1.QueryVoteRequest';
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** voter defines the voter address for the proposals. */
  voter: string;
}

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  $type: 'cosmos.gov.v1.QueryVoteResponse';
  /** vote defined the queried vote. */
  vote?: Vote;
}

/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
  $type: 'cosmos.gov.v1.QueryVotesRequest';
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
  $type: 'cosmos.gov.v1.QueryVotesResponse';
  /** votes defined the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: 'cosmos.gov.v1.QueryParamsRequest';
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: 'cosmos.gov.v1.QueryParamsResponse';
  /** voting_params defines the parameters related to voting. */
  votingParams?: VotingParams;
  /** deposit_params defines the parameters related to deposit. */
  depositParams?: DepositParams;
  /** tally_params defines the parameters related to tally. */
  tallyParams?: TallyParams;
}

/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  $type: 'cosmos.gov.v1.QueryDepositRequest';
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  $type: 'cosmos.gov.v1.QueryDepositResponse';
  /** deposit defines the requested deposit. */
  deposit?: Deposit;
}

/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  $type: 'cosmos.gov.v1.QueryDepositsRequest';
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  $type: 'cosmos.gov.v1.QueryDepositsResponse';
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
  $type: 'cosmos.gov.v1.QueryTallyResultRequest';
  /** proposal_id defines the unique id of the proposal. */
  proposalId: Long;
}

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
  $type: 'cosmos.gov.v1.QueryTallyResultResponse';
  /** tally defines the requested tally. */
  tally?: TallyResult;
}

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    $type: 'cosmos.gov.v1.QueryProposalRequest',
    proposalId: Long.UZERO,
  };
}

export const QueryProposalRequest = {
  $type: 'cosmos.gov.v1.QueryProposalRequest' as const,

  encode(
    message: QueryProposalRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalRequest {
    return {
      $type: QueryProposalRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(
    object: I,
  ): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryProposalRequest.$type, QueryProposalRequest);

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return { $type: 'cosmos.gov.v1.QueryProposalResponse', proposal: undefined };
}

export const QueryProposalResponse = {
  $type: 'cosmos.gov.v1.QueryProposalResponse' as const,

  encode(
    message: QueryProposalResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    return {
      $type: QueryProposalResponse.$type,
      proposal: isSet(object.proposal)
        ? Proposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(
    object: I,
  ): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProposalResponse.$type, QueryProposalResponse);

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    $type: 'cosmos.gov.v1.QueryProposalsRequest',
    proposalStatus: 0,
    voter: '',
    depositor: '',
    pagination: undefined,
  };
}

export const QueryProposalsRequest = {
  $type: 'cosmos.gov.v1.QueryProposalsRequest' as const,

  encode(
    message: QueryProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== '') {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32() as any;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsRequest {
    return {
      $type: QueryProposalsRequest.$type,
      proposalStatus: isSet(object.proposalStatus)
        ? proposalStatusFromJSON(object.proposalStatus)
        : 0,
      voter: isSet(object.voter) ? String(object.voter) : '',
      depositor: isSet(object.depositor) ? String(object.depositor) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.proposalStatus !== undefined &&
      (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalsRequest>, I>>(
    object: I,
  ): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? '';
    message.depositor = object.depositor ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProposalsRequest.$type, QueryProposalsRequest);

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    $type: 'cosmos.gov.v1.QueryProposalsResponse',
    proposals: [],
    pagination: undefined,
  };
}

export const QueryProposalsResponse = {
  $type: 'cosmos.gov.v1.QueryProposalsResponse' as const,

  encode(
    message: QueryProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryProposalsResponse {
    return {
      $type: QueryProposalsResponse.$type,
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e =>
        e ? Proposal.toJSON(e) : undefined,
      );
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(
    object: I,
  ): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals =
      object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProposalsResponse.$type, QueryProposalsResponse);

function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    $type: 'cosmos.gov.v1.QueryVoteRequest',
    proposalId: Long.UZERO,
    voter: '',
  };
}

export const QueryVoteRequest = {
  $type: 'cosmos.gov.v1.QueryVoteRequest' as const,

  encode(
    message: QueryVoteRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteRequest {
    return {
      $type: QueryVoteRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : '',
    };
  },

  toJSON(message: QueryVoteRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteRequest>, I>>(
    object: I,
  ): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryVoteRequest.$type, QueryVoteRequest);

function createBaseQueryVoteResponse(): QueryVoteResponse {
  return { $type: 'cosmos.gov.v1.QueryVoteResponse', vote: undefined };
}

export const QueryVoteResponse = {
  $type: 'cosmos.gov.v1.QueryVoteResponse' as const,

  encode(
    message: QueryVoteResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteResponse {
    return {
      $type: QueryVoteResponse.$type,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: QueryVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteResponse>, I>>(
    object: I,
  ): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryVoteResponse.$type, QueryVoteResponse);

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    $type: 'cosmos.gov.v1.QueryVotesRequest',
    proposalId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVotesRequest = {
  $type: 'cosmos.gov.v1.QueryVotesRequest' as const,

  encode(
    message: QueryVotesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryVotesRequest {
    return {
      $type: QueryVotesRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesRequest>, I>>(
    object: I,
  ): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryVotesRequest.$type, QueryVotesRequest);

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    $type: 'cosmos.gov.v1.QueryVotesResponse',
    votes: [],
    pagination: undefined,
  };
}

export const QueryVotesResponse = {
  $type: 'cosmos.gov.v1.QueryVotesResponse' as const,

  encode(
    message: QueryVotesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryVotesResponse {
    return {
      $type: QueryVotesResponse.$type,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesResponse>, I>>(
    object: I,
  ): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryVotesResponse.$type, QueryVotesResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'cosmos.gov.v1.QueryParamsRequest', paramsType: '' };
}

export const QueryParamsRequest = {
  $type: 'cosmos.gov.v1.QueryParamsRequest' as const,

  encode(
    message: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paramsType !== '') {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return {
      $type: QueryParamsRequest.$type,
      paramsType: isSet(object.paramsType) ? String(object.paramsType) : '',
    };
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.paramsType !== undefined && (obj.paramsType = message.paramsType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    object: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    $type: 'cosmos.gov.v1.QueryParamsResponse',
    votingParams: undefined,
    depositParams: undefined,
    tallyParams: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'cosmos.gov.v1.QueryParamsResponse' as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.votingParams !== undefined) {
      VotingParams.encode(
        message.votingParams,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(
        message.depositParams,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(
        message.tallyParams,
        writer.uint32(26).fork(),
      ).ldelim();
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
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
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
      votingParams: isSet(object.votingParams)
        ? VotingParams.fromJSON(object.votingParams)
        : undefined,
      depositParams: isSet(object.depositParams)
        ? DepositParams.fromJSON(object.depositParams)
        : undefined,
      tallyParams: isSet(object.tallyParams)
        ? TallyParams.fromJSON(object.tallyParams)
        : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.votingParams !== undefined &&
      (obj.votingParams = message.votingParams
        ? VotingParams.toJSON(message.votingParams)
        : undefined);
    message.depositParams !== undefined &&
      (obj.depositParams = message.depositParams
        ? DepositParams.toJSON(message.depositParams)
        : undefined);
    message.tallyParams !== undefined &&
      (obj.tallyParams = message.tallyParams
        ? TallyParams.toJSON(message.tallyParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.votingParams =
      object.votingParams !== undefined && object.votingParams !== null
        ? VotingParams.fromPartial(object.votingParams)
        : undefined;
    message.depositParams =
      object.depositParams !== undefined && object.depositParams !== null
        ? DepositParams.fromPartial(object.depositParams)
        : undefined;
    message.tallyParams =
      object.tallyParams !== undefined && object.tallyParams !== null
        ? TallyParams.fromPartial(object.tallyParams)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    $type: 'cosmos.gov.v1.QueryDepositRequest',
    proposalId: Long.UZERO,
    depositor: '',
  };
}

export const QueryDepositRequest = {
  $type: 'cosmos.gov.v1.QueryDepositRequest' as const,

  encode(
    message: QueryDepositRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== '') {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequest {
    return {
      $type: QueryDepositRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : '',
    };
  },

  toJSON(message: QueryDepositRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequest>, I>>(
    object: I,
  ): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.depositor = object.depositor ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryDepositRequest.$type, QueryDepositRequest);

function createBaseQueryDepositResponse(): QueryDepositResponse {
  return { $type: 'cosmos.gov.v1.QueryDepositResponse', deposit: undefined };
}

export const QueryDepositResponse = {
  $type: 'cosmos.gov.v1.QueryDepositResponse' as const,

  encode(
    message: QueryDepositResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositResponse {
    return {
      $type: QueryDepositResponse.$type,
      deposit: isSet(object.deposit)
        ? Deposit.fromJSON(object.deposit)
        : undefined,
    };
  },

  toJSON(message: QueryDepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Deposit.toJSON(message.deposit)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositResponse>, I>>(
    object: I,
  ): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? Deposit.fromPartial(object.deposit)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDepositResponse.$type, QueryDepositResponse);

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    $type: 'cosmos.gov.v1.QueryDepositsRequest',
    proposalId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryDepositsRequest = {
  $type: 'cosmos.gov.v1.QueryDepositsRequest' as const,

  encode(
    message: QueryDepositsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryDepositsRequest {
    return {
      $type: QueryDepositsRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositsRequest>, I>>(
    object: I,
  ): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDepositsRequest.$type, QueryDepositsRequest);

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    $type: 'cosmos.gov.v1.QueryDepositsResponse',
    deposits: [],
    pagination: undefined,
  };
}

export const QueryDepositsResponse = {
  $type: 'cosmos.gov.v1.QueryDepositsResponse' as const,

  encode(
    message: QueryDepositsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDepositsResponse {
    return {
      $type: QueryDepositsResponse.$type,
      deposits: Array.isArray(object?.deposits)
        ? object.deposits.map((e: any) => Deposit.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e =>
        e ? Deposit.toJSON(e) : undefined,
      );
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositsResponse>, I>>(
    object: I,
  ): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDepositsResponse.$type, QueryDepositsResponse);

function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    $type: 'cosmos.gov.v1.QueryTallyResultRequest',
    proposalId: Long.UZERO,
  };
}

export const QueryTallyResultRequest = {
  $type: 'cosmos.gov.v1.QueryTallyResultRequest' as const,

  encode(
    message: QueryTallyResultRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTallyResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTallyResultRequest {
    return {
      $type: QueryTallyResultRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryTallyResultRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTallyResultRequest>, I>>(
    object: I,
  ): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryTallyResultRequest.$type, QueryTallyResultRequest);

function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return { $type: 'cosmos.gov.v1.QueryTallyResultResponse', tally: undefined };
}

export const QueryTallyResultResponse = {
  $type: 'cosmos.gov.v1.QueryTallyResultResponse' as const,

  encode(
    message: QueryTallyResultResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTallyResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTallyResultResponse {
    return {
      $type: QueryTallyResultResponse.$type,
      tally: isSet(object.tally)
        ? TallyResult.fromJSON(object.tally)
        : undefined,
    };
  },

  toJSON(message: QueryTallyResultResponse): unknown {
    const obj: any = {};
    message.tally !== undefined &&
      (obj.tally = message.tally
        ? TallyResult.toJSON(message.tally)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTallyResultResponse>, I>>(
    object: I,
  ): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally =
      object.tally !== undefined && object.tally !== null
        ? TallyResult.fromPartial(object.tally)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryTallyResultResponse.$type,
  QueryTallyResultResponse,
);

/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  Proposal(
    request: DeepPartial<QueryProposalRequest>,
  ): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  Proposals(
    request: DeepPartial<QueryProposalsRequest>,
  ): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  Vote(request: DeepPartial<QueryVoteRequest>): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  Votes(request: DeepPartial<QueryVotesRequest>): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  Deposit(
    request: DeepPartial<QueryDepositRequest>,
  ): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  Deposits(
    request: DeepPartial<QueryDepositsRequest>,
  ): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  TallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
  ): Promise<QueryTallyResultResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Proposal = this.Proposal.bind(this);
    this.Proposals = this.Proposals.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Votes = this.Votes.bind(this);
    this.Params = this.Params.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Deposits = this.Deposits.bind(this);
    this.TallyResult = this.TallyResult.bind(this);
  }
  Proposal(
    request: DeepPartial<QueryProposalRequest>,
  ): Promise<QueryProposalResponse> {
    const fromPartial = QueryProposalRequest.fromPartial(request);
    const data = QueryProposalRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Proposal', data);
    return promise.then(data =>
      QueryProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  Proposals(
    request: DeepPartial<QueryProposalsRequest>,
  ): Promise<QueryProposalsResponse> {
    const fromPartial = QueryProposalsRequest.fromPartial(request);
    const data = QueryProposalsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Proposals', data);
    return promise.then(data =>
      QueryProposalsResponse.decode(new _m0.Reader(data)),
    );
  }

  Vote(request: DeepPartial<QueryVoteRequest>): Promise<QueryVoteResponse> {
    const fromPartial = QueryVoteRequest.fromPartial(request);
    const data = QueryVoteRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Vote', data);
    return promise.then(data => QueryVoteResponse.decode(new _m0.Reader(data)));
  }

  Votes(request: DeepPartial<QueryVotesRequest>): Promise<QueryVotesResponse> {
    const fromPartial = QueryVotesRequest.fromPartial(request);
    const data = QueryVotesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Votes', data);
    return promise.then(data =>
      QueryVotesResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Params', data);
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  Deposit(
    request: DeepPartial<QueryDepositRequest>,
  ): Promise<QueryDepositResponse> {
    const fromPartial = QueryDepositRequest.fromPartial(request);
    const data = QueryDepositRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Deposit', data);
    return promise.then(data =>
      QueryDepositResponse.decode(new _m0.Reader(data)),
    );
  }

  Deposits(
    request: DeepPartial<QueryDepositsRequest>,
  ): Promise<QueryDepositsResponse> {
    const fromPartial = QueryDepositsRequest.fromPartial(request);
    const data = QueryDepositsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.gov.v1.Query', 'Deposits', data);
    return promise.then(data =>
      QueryDepositsResponse.decode(new _m0.Reader(data)),
    );
  }

  TallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
  ): Promise<QueryTallyResultResponse> {
    const fromPartial = QueryTallyResultRequest.fromPartial(request);
    const data = QueryTallyResultRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.gov.v1.Query',
      'TallyResult',
      data,
    );
    return promise.then(data =>
      QueryTallyResultResponse.decode(new _m0.Reader(data)),
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
