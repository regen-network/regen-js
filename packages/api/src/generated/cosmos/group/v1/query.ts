/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  GroupInfo,
  GroupPolicyInfo,
  Proposal,
  Vote,
  TallyResult,
  GroupMember,
} from './types';
import { PageRequest, PageResponse } from '../../base/query/v1beta1/pagination';

export const protobufPackage = 'cosmos.group.v1';

/** Since: cosmos-sdk 0.46 */

/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  $type: 'cosmos.group.v1.QueryGroupInfoRequest';
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  $type: 'cosmos.group.v1.QueryGroupInfoResponse';
  /** info is the GroupInfo for the group. */
  info?: GroupInfo;
}

/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
  $type: 'cosmos.group.v1.QueryGroupPolicyInfoRequest';
  /** address is the account address of the group policy. */
  address: string;
}

/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
  $type: 'cosmos.group.v1.QueryGroupPolicyInfoResponse';
  /** info is the GroupPolicyInfo for the group policy. */
  info?: GroupPolicyInfo;
}

/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
  $type: 'cosmos.group.v1.QueryGroupMembersRequest';
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  $type: 'cosmos.group.v1.QueryGroupMembersResponse';
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
  $type: 'cosmos.group.v1.QueryGroupsByAdminRequest';
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  $type: 'cosmos.group.v1.QueryGroupsByAdminResponse';
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByGroupRequest';
  /** group_id is the unique ID of the group policy's group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByGroupResponse';
  /** group_policies are the group policies info associated with the provided group. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByAdminRequest';
  /** admin is the admin address of the group policy. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByAdminResponse';
  /** group_policies are the group policies info with provided admin. */
  groupPolicies: GroupPolicyInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  $type: 'cosmos.group.v1.QueryProposalRequest';
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
}

/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  $type: 'cosmos.group.v1.QueryProposalResponse';
  /** proposal is the proposal info. */
  proposal?: Proposal;
}

/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
  $type: 'cosmos.group.v1.QueryProposalsByGroupPolicyRequest';
  /** address is the account address of the group policy related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
  $type: 'cosmos.group.v1.QueryProposalsByGroupPolicyResponse';
  /** proposals are the proposals with given group policy. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  $type: 'cosmos.group.v1.QueryVoteByProposalVoterRequest';
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** voter is a proposal voter account address. */
  voter: string;
}

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  $type: 'cosmos.group.v1.QueryVoteByProposalVoterResponse';
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}

/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  $type: 'cosmos.group.v1.QueryVotesByProposalRequest';
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  $type: 'cosmos.group.v1.QueryVotesByProposalResponse';
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  $type: 'cosmos.group.v1.QueryVotesByVoterRequest';
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  $type: 'cosmos.group.v1.QueryVotesByVoterResponse';
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
  $type: 'cosmos.group.v1.QueryGroupsByMemberRequest';
  /** address is the group member address. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
  $type: 'cosmos.group.v1.QueryGroupsByMemberResponse';
  /** groups are the groups info with the provided group member. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
  $type: 'cosmos.group.v1.QueryTallyResultRequest';
  /** proposal_id is the unique id of a proposal. */
  proposalId: Long;
}

/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
  $type: 'cosmos.group.v1.QueryTallyResultResponse';
  /** tally defines the requested tally. */
  tally?: TallyResult;
}

function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    $type: 'cosmos.group.v1.QueryGroupInfoRequest',
    groupId: Long.UZERO,
  };
}

export const QueryGroupInfoRequest = {
  $type: 'cosmos.group.v1.QueryGroupInfoRequest' as const,

  encode(
    message: QueryGroupInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupInfoRequest {
    return {
      $type: QueryGroupInfoRequest.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryGroupInfoRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupInfoRequest>, I>>(
    object: I,
  ): QueryGroupInfoRequest {
    const message = createBaseQueryGroupInfoRequest();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryGroupInfoRequest.$type, QueryGroupInfoRequest);

function createBaseQueryGroupInfoResponse(): QueryGroupInfoResponse {
  return { $type: 'cosmos.group.v1.QueryGroupInfoResponse', info: undefined };
}

export const QueryGroupInfoResponse = {
  $type: 'cosmos.group.v1.QueryGroupInfoResponse' as const,

  encode(
    message: QueryGroupInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupInfoResponse {
    return {
      $type: QueryGroupInfoResponse.$type,
      info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: QueryGroupInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupInfoResponse>, I>>(
    object: I,
  ): QueryGroupInfoResponse {
    const message = createBaseQueryGroupInfoResponse();
    message.info =
      object.info !== undefined && object.info !== null
        ? GroupInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGroupInfoResponse.$type, QueryGroupInfoResponse);

function createBaseQueryGroupPolicyInfoRequest(): QueryGroupPolicyInfoRequest {
  return { $type: 'cosmos.group.v1.QueryGroupPolicyInfoRequest', address: '' };
}

export const QueryGroupPolicyInfoRequest = {
  $type: 'cosmos.group.v1.QueryGroupPolicyInfoRequest' as const,

  encode(
    message: QueryGroupPolicyInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupPolicyInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPolicyInfoRequest {
    return {
      $type: QueryGroupPolicyInfoRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: QueryGroupPolicyInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupPolicyInfoRequest>, I>>(
    object: I,
  ): QueryGroupPolicyInfoRequest {
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupPolicyInfoRequest.$type,
  QueryGroupPolicyInfoRequest,
);

function createBaseQueryGroupPolicyInfoResponse(): QueryGroupPolicyInfoResponse {
  return {
    $type: 'cosmos.group.v1.QueryGroupPolicyInfoResponse',
    info: undefined,
  };
}

export const QueryGroupPolicyInfoResponse = {
  $type: 'cosmos.group.v1.QueryGroupPolicyInfoResponse' as const,

  encode(
    message: QueryGroupPolicyInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupPolicyInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupPolicyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupPolicyInfoResponse {
    return {
      $type: QueryGroupPolicyInfoResponse.$type,
      info: isSet(object.info)
        ? GroupPolicyInfo.fromJSON(object.info)
        : undefined,
    };
  },

  toJSON(message: QueryGroupPolicyInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info
        ? GroupPolicyInfo.toJSON(message.info)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupPolicyInfoResponse>, I>>(
    object: I,
  ): QueryGroupPolicyInfoResponse {
    const message = createBaseQueryGroupPolicyInfoResponse();
    message.info =
      object.info !== undefined && object.info !== null
        ? GroupPolicyInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupPolicyInfoResponse.$type,
  QueryGroupPolicyInfoResponse,
);

function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    $type: 'cosmos.group.v1.QueryGroupMembersRequest',
    groupId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryGroupMembersRequest = {
  $type: 'cosmos.group.v1.QueryGroupMembersRequest' as const,

  encode(
    message: QueryGroupMembersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryGroupMembersRequest {
    return {
      $type: QueryGroupMembersRequest.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupMembersRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersRequest>, I>>(
    object: I,
  ): QueryGroupMembersRequest {
    const message = createBaseQueryGroupMembersRequest();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupMembersRequest.$type,
  QueryGroupMembersRequest,
);

function createBaseQueryGroupMembersResponse(): QueryGroupMembersResponse {
  return {
    $type: 'cosmos.group.v1.QueryGroupMembersResponse',
    members: [],
    pagination: undefined,
  };
}

export const QueryGroupMembersResponse = {
  $type: 'cosmos.group.v1.QueryGroupMembersResponse' as const,

  encode(
    message: QueryGroupMembersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGroupMembersResponse {
    return {
      $type: QueryGroupMembersResponse.$type,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => GroupMember.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e =>
        e ? GroupMember.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupMembersResponse>, I>>(
    object: I,
  ): QueryGroupMembersResponse {
    const message = createBaseQueryGroupMembersResponse();
    message.members =
      object.members?.map(e => GroupMember.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupMembersResponse.$type,
  QueryGroupMembersResponse,
);

function createBaseQueryGroupsByAdminRequest(): QueryGroupsByAdminRequest {
  return {
    $type: 'cosmos.group.v1.QueryGroupsByAdminRequest',
    admin: '',
    pagination: undefined,
  };
}

export const QueryGroupsByAdminRequest = {
  $type: 'cosmos.group.v1.QueryGroupsByAdminRequest' as const,

  encode(
    message: QueryGroupsByAdminRequest,
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
  ): QueryGroupsByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
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

  fromJSON(object: any): QueryGroupsByAdminRequest {
    return {
      $type: QueryGroupsByAdminRequest.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupsByAdminRequest>, I>>(
    object: I,
  ): QueryGroupsByAdminRequest {
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupsByAdminRequest.$type,
  QueryGroupsByAdminRequest,
);

function createBaseQueryGroupsByAdminResponse(): QueryGroupsByAdminResponse {
  return {
    $type: 'cosmos.group.v1.QueryGroupsByAdminResponse',
    groups: [],
    pagination: undefined,
  };
}

export const QueryGroupsByAdminResponse = {
  $type: 'cosmos.group.v1.QueryGroupsByAdminResponse' as const,

  encode(
    message: QueryGroupsByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupsByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGroupsByAdminResponse {
    return {
      $type: QueryGroupsByAdminResponse.$type,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => GroupInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e =>
        e ? GroupInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupsByAdminResponse>, I>>(
    object: I,
  ): QueryGroupsByAdminResponse {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupsByAdminResponse.$type,
  QueryGroupsByAdminResponse,
);

function createBaseQueryGroupPoliciesByGroupRequest(): QueryGroupPoliciesByGroupRequest {
  return {
    $type: 'cosmos.group.v1.QueryGroupPoliciesByGroupRequest',
    groupId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryGroupPoliciesByGroupRequest = {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByGroupRequest' as const,

  encode(
    message: QueryGroupPoliciesByGroupRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupPoliciesByGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryGroupPoliciesByGroupRequest {
    return {
      $type: QueryGroupPoliciesByGroupRequest.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupPoliciesByGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupPoliciesByGroupRequest>, I>,
  >(object: I): QueryGroupPoliciesByGroupRequest {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupPoliciesByGroupRequest.$type,
  QueryGroupPoliciesByGroupRequest,
);

function createBaseQueryGroupPoliciesByGroupResponse(): QueryGroupPoliciesByGroupResponse {
  return {
    $type: 'cosmos.group.v1.QueryGroupPoliciesByGroupResponse',
    groupPolicies: [],
    pagination: undefined,
  };
}

export const QueryGroupPoliciesByGroupResponse = {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByGroupResponse' as const,

  encode(
    message: QueryGroupPoliciesByGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupPoliciesByGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(
            GroupPolicyInfo.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryGroupPoliciesByGroupResponse {
    return {
      $type: QueryGroupPoliciesByGroupResponse.$type,
      groupPolicies: Array.isArray(object?.groupPolicies)
        ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupPoliciesByGroupResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e =>
        e ? GroupPolicyInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupPoliciesByGroupResponse>, I>,
  >(object: I): QueryGroupPoliciesByGroupResponse {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies =
      object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupPoliciesByGroupResponse.$type,
  QueryGroupPoliciesByGroupResponse,
);

function createBaseQueryGroupPoliciesByAdminRequest(): QueryGroupPoliciesByAdminRequest {
  return {
    $type: 'cosmos.group.v1.QueryGroupPoliciesByAdminRequest',
    admin: '',
    pagination: undefined,
  };
}

export const QueryGroupPoliciesByAdminRequest = {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByAdminRequest' as const,

  encode(
    message: QueryGroupPoliciesByAdminRequest,
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
  ): QueryGroupPoliciesByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
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

  fromJSON(object: any): QueryGroupPoliciesByAdminRequest {
    return {
      $type: QueryGroupPoliciesByAdminRequest.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupPoliciesByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupPoliciesByAdminRequest>, I>,
  >(object: I): QueryGroupPoliciesByAdminRequest {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = object.admin ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupPoliciesByAdminRequest.$type,
  QueryGroupPoliciesByAdminRequest,
);

function createBaseQueryGroupPoliciesByAdminResponse(): QueryGroupPoliciesByAdminResponse {
  return {
    $type: 'cosmos.group.v1.QueryGroupPoliciesByAdminResponse',
    groupPolicies: [],
    pagination: undefined,
  };
}

export const QueryGroupPoliciesByAdminResponse = {
  $type: 'cosmos.group.v1.QueryGroupPoliciesByAdminResponse' as const,

  encode(
    message: QueryGroupPoliciesByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupPoliciesByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(
            GroupPolicyInfo.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryGroupPoliciesByAdminResponse {
    return {
      $type: QueryGroupPoliciesByAdminResponse.$type,
      groupPolicies: Array.isArray(object?.groupPolicies)
        ? object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupPoliciesByAdminResponse): unknown {
    const obj: any = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(e =>
        e ? GroupPolicyInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupPoliciesByAdminResponse>, I>,
  >(object: I): QueryGroupPoliciesByAdminResponse {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies =
      object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupPoliciesByAdminResponse.$type,
  QueryGroupPoliciesByAdminResponse,
);

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    $type: 'cosmos.group.v1.QueryProposalRequest',
    proposalId: Long.UZERO,
  };
}

export const QueryProposalRequest = {
  $type: 'cosmos.group.v1.QueryProposalRequest' as const,

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
  return {
    $type: 'cosmos.group.v1.QueryProposalResponse',
    proposal: undefined,
  };
}

export const QueryProposalResponse = {
  $type: 'cosmos.group.v1.QueryProposalResponse' as const,

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

function createBaseQueryProposalsByGroupPolicyRequest(): QueryProposalsByGroupPolicyRequest {
  return {
    $type: 'cosmos.group.v1.QueryProposalsByGroupPolicyRequest',
    address: '',
    pagination: undefined,
  };
}

export const QueryProposalsByGroupPolicyRequest = {
  $type: 'cosmos.group.v1.QueryProposalsByGroupPolicyRequest' as const,

  encode(
    message: QueryProposalsByGroupPolicyRequest,
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
  ): QueryProposalsByGroupPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
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

  fromJSON(object: any): QueryProposalsByGroupPolicyRequest {
    return {
      $type: QueryProposalsByGroupPolicyRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsByGroupPolicyRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryProposalsByGroupPolicyRequest>, I>,
  >(object: I): QueryProposalsByGroupPolicyRequest {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = object.address ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProposalsByGroupPolicyRequest.$type,
  QueryProposalsByGroupPolicyRequest,
);

function createBaseQueryProposalsByGroupPolicyResponse(): QueryProposalsByGroupPolicyResponse {
  return {
    $type: 'cosmos.group.v1.QueryProposalsByGroupPolicyResponse',
    proposals: [],
    pagination: undefined,
  };
}

export const QueryProposalsByGroupPolicyResponse = {
  $type: 'cosmos.group.v1.QueryProposalsByGroupPolicyResponse' as const,

  encode(
    message: QueryProposalsByGroupPolicyResponse,
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
  ): QueryProposalsByGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
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

  fromJSON(object: any): QueryProposalsByGroupPolicyResponse {
    return {
      $type: QueryProposalsByGroupPolicyResponse.$type,
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsByGroupPolicyResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<QueryProposalsByGroupPolicyResponse>, I>,
  >(object: I): QueryProposalsByGroupPolicyResponse {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals =
      object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProposalsByGroupPolicyResponse.$type,
  QueryProposalsByGroupPolicyResponse,
);

function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    $type: 'cosmos.group.v1.QueryVoteByProposalVoterRequest',
    proposalId: Long.UZERO,
    voter: '',
  };
}

export const QueryVoteByProposalVoterRequest = {
  $type: 'cosmos.group.v1.QueryVoteByProposalVoterRequest' as const,

  encode(
    message: QueryVoteByProposalVoterRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryVoteByProposalVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
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

  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    return {
      $type: QueryVoteByProposalVoterRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : '',
    };
  },

  toJSON(message: QueryVoteByProposalVoterRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteByProposalVoterRequest>, I>>(
    object: I,
  ): QueryVoteByProposalVoterRequest {
    const message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryVoteByProposalVoterRequest.$type,
  QueryVoteByProposalVoterRequest,
);

function createBaseQueryVoteByProposalVoterResponse(): QueryVoteByProposalVoterResponse {
  return {
    $type: 'cosmos.group.v1.QueryVoteByProposalVoterResponse',
    vote: undefined,
  };
}

export const QueryVoteByProposalVoterResponse = {
  $type: 'cosmos.group.v1.QueryVoteByProposalVoterResponse' as const,

  encode(
    message: QueryVoteByProposalVoterResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryVoteByProposalVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
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

  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    return {
      $type: QueryVoteByProposalVoterResponse.$type,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: QueryVoteByProposalVoterResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVoteByProposalVoterResponse>, I>,
  >(object: I): QueryVoteByProposalVoterResponse {
    const message = createBaseQueryVoteByProposalVoterResponse();
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryVoteByProposalVoterResponse.$type,
  QueryVoteByProposalVoterResponse,
);

function createBaseQueryVotesByProposalRequest(): QueryVotesByProposalRequest {
  return {
    $type: 'cosmos.group.v1.QueryVotesByProposalRequest',
    proposalId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVotesByProposalRequest = {
  $type: 'cosmos.group.v1.QueryVotesByProposalRequest' as const,

  encode(
    message: QueryVotesByProposalRequest,
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
  ): QueryVotesByProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
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

  fromJSON(object: any): QueryVotesByProposalRequest {
    return {
      $type: QueryVotesByProposalRequest.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVotesByProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesByProposalRequest>, I>>(
    object: I,
  ): QueryVotesByProposalRequest {
    const message = createBaseQueryVotesByProposalRequest();
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

messageTypeRegistry.set(
  QueryVotesByProposalRequest.$type,
  QueryVotesByProposalRequest,
);

function createBaseQueryVotesByProposalResponse(): QueryVotesByProposalResponse {
  return {
    $type: 'cosmos.group.v1.QueryVotesByProposalResponse',
    votes: [],
    pagination: undefined,
  };
}

export const QueryVotesByProposalResponse = {
  $type: 'cosmos.group.v1.QueryVotesByProposalResponse' as const,

  encode(
    message: QueryVotesByProposalResponse,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryVotesByProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
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

  fromJSON(object: any): QueryVotesByProposalResponse {
    return {
      $type: QueryVotesByProposalResponse.$type,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVotesByProposalResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryVotesByProposalResponse>, I>>(
    object: I,
  ): QueryVotesByProposalResponse {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryVotesByProposalResponse.$type,
  QueryVotesByProposalResponse,
);

function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    $type: 'cosmos.group.v1.QueryVotesByVoterRequest',
    voter: '',
    pagination: undefined,
  };
}

export const QueryVotesByVoterRequest = {
  $type: 'cosmos.group.v1.QueryVotesByVoterRequest' as const,

  encode(
    message: QueryVotesByVoterRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.voter !== '') {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryVotesByVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
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

  fromJSON(object: any): QueryVotesByVoterRequest {
    return {
      $type: QueryVotesByVoterRequest.$type,
      voter: isSet(object.voter) ? String(object.voter) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVotesByVoterRequest): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotesByVoterRequest>, I>>(
    object: I,
  ): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryVotesByVoterRequest.$type,
  QueryVotesByVoterRequest,
);

function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    $type: 'cosmos.group.v1.QueryVotesByVoterResponse',
    votes: [],
    pagination: undefined,
  };
}

export const QueryVotesByVoterResponse = {
  $type: 'cosmos.group.v1.QueryVotesByVoterResponse' as const,

  encode(
    message: QueryVotesByVoterResponse,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryVotesByVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
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

  fromJSON(object: any): QueryVotesByVoterResponse {
    return {
      $type: QueryVotesByVoterResponse.$type,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryVotesByVoterResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryVotesByVoterResponse>, I>>(
    object: I,
  ): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryVotesByVoterResponse.$type,
  QueryVotesByVoterResponse,
);

function createBaseQueryGroupsByMemberRequest(): QueryGroupsByMemberRequest {
  return {
    $type: 'cosmos.group.v1.QueryGroupsByMemberRequest',
    address: '',
    pagination: undefined,
  };
}

export const QueryGroupsByMemberRequest = {
  $type: 'cosmos.group.v1.QueryGroupsByMemberRequest' as const,

  encode(
    message: QueryGroupsByMemberRequest,
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
  ): QueryGroupsByMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
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

  fromJSON(object: any): QueryGroupsByMemberRequest {
    return {
      $type: QueryGroupsByMemberRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupsByMemberRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupsByMemberRequest>, I>>(
    object: I,
  ): QueryGroupsByMemberRequest {
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = object.address ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupsByMemberRequest.$type,
  QueryGroupsByMemberRequest,
);

function createBaseQueryGroupsByMemberResponse(): QueryGroupsByMemberResponse {
  return {
    $type: 'cosmos.group.v1.QueryGroupsByMemberResponse',
    groups: [],
    pagination: undefined,
  };
}

export const QueryGroupsByMemberResponse = {
  $type: 'cosmos.group.v1.QueryGroupsByMemberResponse' as const,

  encode(
    message: QueryGroupsByMemberResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupsByMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGroupsByMemberResponse {
    return {
      $type: QueryGroupsByMemberResponse.$type,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => GroupInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupsByMemberResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e =>
        e ? GroupInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupsByMemberResponse>, I>>(
    object: I,
  ): QueryGroupsByMemberResponse {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupsByMemberResponse.$type,
  QueryGroupsByMemberResponse,
);

function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    $type: 'cosmos.group.v1.QueryTallyResultRequest',
    proposalId: Long.UZERO,
  };
}

export const QueryTallyResultRequest = {
  $type: 'cosmos.group.v1.QueryTallyResultRequest' as const,

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
  return {
    $type: 'cosmos.group.v1.QueryTallyResultResponse',
    tally: undefined,
  };
}

export const QueryTallyResultResponse = {
  $type: 'cosmos.group.v1.QueryTallyResultResponse' as const,

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

/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  GroupInfo(
    request: DeepPartial<QueryGroupInfoRequest>,
  ): Promise<QueryGroupInfoResponse>;
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  GroupPolicyInfo(
    request: DeepPartial<QueryGroupPolicyInfoRequest>,
  ): Promise<QueryGroupPolicyInfoResponse>;
  /** GroupMembers queries members of a group */
  GroupMembers(
    request: DeepPartial<QueryGroupMembersRequest>,
  ): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  GroupsByAdmin(
    request: DeepPartial<QueryGroupsByAdminRequest>,
  ): Promise<QueryGroupsByAdminResponse>;
  /** GroupPoliciesByGroup queries group policies by group id. */
  GroupPoliciesByGroup(
    request: DeepPartial<QueryGroupPoliciesByGroupRequest>,
  ): Promise<QueryGroupPoliciesByGroupResponse>;
  /** GroupsByAdmin queries group policies by admin address. */
  GroupPoliciesByAdmin(
    request: DeepPartial<QueryGroupPoliciesByAdminRequest>,
  ): Promise<QueryGroupPoliciesByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  Proposal(
    request: DeepPartial<QueryProposalRequest>,
  ): Promise<QueryProposalResponse>;
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  ProposalsByGroupPolicy(
    request: DeepPartial<QueryProposalsByGroupPolicyRequest>,
  ): Promise<QueryProposalsByGroupPolicyResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  VoteByProposalVoter(
    request: DeepPartial<QueryVoteByProposalVoterRequest>,
  ): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal. */
  VotesByProposal(
    request: DeepPartial<QueryVotesByProposalRequest>,
  ): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  VotesByVoter(
    request: DeepPartial<QueryVotesByVoterRequest>,
  ): Promise<QueryVotesByVoterResponse>;
  /** GroupsByMember queries groups by member address. */
  GroupsByMember(
    request: DeepPartial<QueryGroupsByMemberRequest>,
  ): Promise<QueryGroupsByMemberResponse>;
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  TallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
  ): Promise<QueryTallyResultResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GroupInfo = this.GroupInfo.bind(this);
    this.GroupPolicyInfo = this.GroupPolicyInfo.bind(this);
    this.GroupMembers = this.GroupMembers.bind(this);
    this.GroupsByAdmin = this.GroupsByAdmin.bind(this);
    this.GroupPoliciesByGroup = this.GroupPoliciesByGroup.bind(this);
    this.GroupPoliciesByAdmin = this.GroupPoliciesByAdmin.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.ProposalsByGroupPolicy = this.ProposalsByGroupPolicy.bind(this);
    this.VoteByProposalVoter = this.VoteByProposalVoter.bind(this);
    this.VotesByProposal = this.VotesByProposal.bind(this);
    this.VotesByVoter = this.VotesByVoter.bind(this);
    this.GroupsByMember = this.GroupsByMember.bind(this);
    this.TallyResult = this.TallyResult.bind(this);
  }
  GroupInfo(
    request: DeepPartial<QueryGroupInfoRequest>,
  ): Promise<QueryGroupInfoResponse> {
    const fromPartial = QueryGroupInfoRequest.fromPartial(request);
    const data = QueryGroupInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupInfo',
      data,
    );
    return promise.then(data =>
      QueryGroupInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupPolicyInfo(
    request: DeepPartial<QueryGroupPolicyInfoRequest>,
  ): Promise<QueryGroupPolicyInfoResponse> {
    const fromPartial = QueryGroupPolicyInfoRequest.fromPartial(request);
    const data = QueryGroupPolicyInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupPolicyInfo',
      data,
    );
    return promise.then(data =>
      QueryGroupPolicyInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupMembers(
    request: DeepPartial<QueryGroupMembersRequest>,
  ): Promise<QueryGroupMembersResponse> {
    const fromPartial = QueryGroupMembersRequest.fromPartial(request);
    const data = QueryGroupMembersRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupMembers',
      data,
    );
    return promise.then(data =>
      QueryGroupMembersResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupsByAdmin(
    request: DeepPartial<QueryGroupsByAdminRequest>,
  ): Promise<QueryGroupsByAdminResponse> {
    const fromPartial = QueryGroupsByAdminRequest.fromPartial(request);
    const data = QueryGroupsByAdminRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupsByAdmin',
      data,
    );
    return promise.then(data =>
      QueryGroupsByAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupPoliciesByGroup(
    request: DeepPartial<QueryGroupPoliciesByGroupRequest>,
  ): Promise<QueryGroupPoliciesByGroupResponse> {
    const fromPartial = QueryGroupPoliciesByGroupRequest.fromPartial(request);
    const data = QueryGroupPoliciesByGroupRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupPoliciesByGroup',
      data,
    );
    return promise.then(data =>
      QueryGroupPoliciesByGroupResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupPoliciesByAdmin(
    request: DeepPartial<QueryGroupPoliciesByAdminRequest>,
  ): Promise<QueryGroupPoliciesByAdminResponse> {
    const fromPartial = QueryGroupPoliciesByAdminRequest.fromPartial(request);
    const data = QueryGroupPoliciesByAdminRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupPoliciesByAdmin',
      data,
    );
    return promise.then(data =>
      QueryGroupPoliciesByAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  Proposal(
    request: DeepPartial<QueryProposalRequest>,
  ): Promise<QueryProposalResponse> {
    const fromPartial = QueryProposalRequest.fromPartial(request);
    const data = QueryProposalRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.group.v1.Query', 'Proposal', data);
    return promise.then(data =>
      QueryProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  ProposalsByGroupPolicy(
    request: DeepPartial<QueryProposalsByGroupPolicyRequest>,
  ): Promise<QueryProposalsByGroupPolicyResponse> {
    const fromPartial = QueryProposalsByGroupPolicyRequest.fromPartial(request);
    const data =
      QueryProposalsByGroupPolicyRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'ProposalsByGroupPolicy',
      data,
    );
    return promise.then(data =>
      QueryProposalsByGroupPolicyResponse.decode(new _m0.Reader(data)),
    );
  }

  VoteByProposalVoter(
    request: DeepPartial<QueryVoteByProposalVoterRequest>,
  ): Promise<QueryVoteByProposalVoterResponse> {
    const fromPartial = QueryVoteByProposalVoterRequest.fromPartial(request);
    const data = QueryVoteByProposalVoterRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'VoteByProposalVoter',
      data,
    );
    return promise.then(data =>
      QueryVoteByProposalVoterResponse.decode(new _m0.Reader(data)),
    );
  }

  VotesByProposal(
    request: DeepPartial<QueryVotesByProposalRequest>,
  ): Promise<QueryVotesByProposalResponse> {
    const fromPartial = QueryVotesByProposalRequest.fromPartial(request);
    const data = QueryVotesByProposalRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'VotesByProposal',
      data,
    );
    return promise.then(data =>
      QueryVotesByProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  VotesByVoter(
    request: DeepPartial<QueryVotesByVoterRequest>,
  ): Promise<QueryVotesByVoterResponse> {
    const fromPartial = QueryVotesByVoterRequest.fromPartial(request);
    const data = QueryVotesByVoterRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'VotesByVoter',
      data,
    );
    return promise.then(data =>
      QueryVotesByVoterResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupsByMember(
    request: DeepPartial<QueryGroupsByMemberRequest>,
  ): Promise<QueryGroupsByMemberResponse> {
    const fromPartial = QueryGroupsByMemberRequest.fromPartial(request);
    const data = QueryGroupsByMemberRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
      'GroupsByMember',
      data,
    );
    return promise.then(data =>
      QueryGroupsByMemberResponse.decode(new _m0.Reader(data)),
    );
  }

  TallyResult(
    request: DeepPartial<QueryTallyResultRequest>,
  ): Promise<QueryTallyResultResponse> {
    const fromPartial = QueryTallyResultRequest.fromPartial(request);
    const data = QueryTallyResultRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Query',
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
