/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  GroupInfo,
  GroupAccountInfo,
  Proposal,
  Vote,
  GroupMember,
} from '../../../regen/group/v1alpha1/types';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'regen.group.v1alpha1';

/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  $type: 'regen.group.v1alpha1.QueryGroupInfoRequest';
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  $type: 'regen.group.v1alpha1.QueryGroupInfoResponse';
  /** info is the GroupInfo for the group. */
  info?: GroupInfo;
}

/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequest {
  $type: 'regen.group.v1alpha1.QueryGroupAccountInfoRequest';
  /** address is the account address of the group account. */
  address: string;
}

/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponse {
  $type: 'regen.group.v1alpha1.QueryGroupAccountInfoResponse';
  /** info is the GroupAccountInfo for the group account. */
  info?: GroupAccountInfo;
}

/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequest {
  $type: 'regen.group.v1alpha1.QueryGroupMembersRequest';
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  $type: 'regen.group.v1alpha1.QueryGroupMembersResponse';
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequest {
  $type: 'regen.group.v1alpha1.QueryGroupsByAdminRequest';
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  $type: 'regen.group.v1alpha1.QueryGroupsByAdminResponse';
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request type. */
export interface QueryGroupAccountsByGroupRequest {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByGroupRequest';
  /** group_id is the unique ID of the group account's group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response type. */
export interface QueryGroupAccountsByGroupResponse {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByGroupResponse';
  /** group_accounts are the group accounts info associated with the provided group. */
  groupAccounts: GroupAccountInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request type. */
export interface QueryGroupAccountsByAdminRequest {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByAdminRequest';
  /** admin is the admin address of the group account. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response type. */
export interface QueryGroupAccountsByAdminResponse {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByAdminResponse';
  /** group_accounts are the group accounts info with provided admin. */
  groupAccounts: GroupAccountInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  $type: 'regen.group.v1alpha1.QueryProposalRequest';
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
}

/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  $type: 'regen.group.v1alpha1.QueryProposalResponse';
  /** proposal is the proposal info. */
  proposal?: Proposal;
}

/** QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount request type. */
export interface QueryProposalsByGroupAccountRequest {
  $type: 'regen.group.v1alpha1.QueryProposalsByGroupAccountRequest';
  /** address is the group account address related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount response type. */
export interface QueryProposalsByGroupAccountResponse {
  $type: 'regen.group.v1alpha1.QueryProposalsByGroupAccountResponse';
  /** proposals are the proposals with given group account. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  $type: 'regen.group.v1alpha1.QueryVoteByProposalVoterRequest';
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** voter is a proposal voter account address. */
  voter: string;
}

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  $type: 'regen.group.v1alpha1.QueryVoteByProposalVoterResponse';
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}

/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  $type: 'regen.group.v1alpha1.QueryVotesByProposalRequest';
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  $type: 'regen.group.v1alpha1.QueryVotesByProposalResponse';
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  $type: 'regen.group.v1alpha1.QueryVotesByVoterRequest';
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  $type: 'regen.group.v1alpha1.QueryVotesByVoterResponse';
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

function createBaseQueryGroupInfoRequest(): QueryGroupInfoRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupInfoRequest',
    groupId: Long.UZERO,
  };
}

export const QueryGroupInfoRequest = {
  $type: 'regen.group.v1alpha1.QueryGroupInfoRequest' as const,

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
  return {
    $type: 'regen.group.v1alpha1.QueryGroupInfoResponse',
    info: undefined,
  };
}

export const QueryGroupInfoResponse = {
  $type: 'regen.group.v1alpha1.QueryGroupInfoResponse' as const,

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

function createBaseQueryGroupAccountInfoRequest(): QueryGroupAccountInfoRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupAccountInfoRequest',
    address: '',
  };
}

export const QueryGroupAccountInfoRequest = {
  $type: 'regen.group.v1alpha1.QueryGroupAccountInfoRequest' as const,

  encode(
    message: QueryGroupAccountInfoRequest,
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
  ): QueryGroupAccountInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAccountInfoRequest();
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

  fromJSON(object: any): QueryGroupAccountInfoRequest {
    return {
      $type: QueryGroupAccountInfoRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: QueryGroupAccountInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupAccountInfoRequest>, I>>(
    object: I,
  ): QueryGroupAccountInfoRequest {
    const message = createBaseQueryGroupAccountInfoRequest();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupAccountInfoRequest.$type,
  QueryGroupAccountInfoRequest,
);

function createBaseQueryGroupAccountInfoResponse(): QueryGroupAccountInfoResponse {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupAccountInfoResponse',
    info: undefined,
  };
}

export const QueryGroupAccountInfoResponse = {
  $type: 'regen.group.v1alpha1.QueryGroupAccountInfoResponse' as const,

  encode(
    message: QueryGroupAccountInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      GroupAccountInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGroupAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupAccountInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountInfoResponse {
    return {
      $type: QueryGroupAccountInfoResponse.$type,
      info: isSet(object.info)
        ? GroupAccountInfo.fromJSON(object.info)
        : undefined,
    };
  },

  toJSON(message: QueryGroupAccountInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info
        ? GroupAccountInfo.toJSON(message.info)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupAccountInfoResponse>, I>>(
    object: I,
  ): QueryGroupAccountInfoResponse {
    const message = createBaseQueryGroupAccountInfoResponse();
    message.info =
      object.info !== undefined && object.info !== null
        ? GroupAccountInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupAccountInfoResponse.$type,
  QueryGroupAccountInfoResponse,
);

function createBaseQueryGroupMembersRequest(): QueryGroupMembersRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupMembersRequest',
    groupId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryGroupMembersRequest = {
  $type: 'regen.group.v1alpha1.QueryGroupMembersRequest' as const,

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
    $type: 'regen.group.v1alpha1.QueryGroupMembersResponse',
    members: [],
    pagination: undefined,
  };
}

export const QueryGroupMembersResponse = {
  $type: 'regen.group.v1alpha1.QueryGroupMembersResponse' as const,

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
    $type: 'regen.group.v1alpha1.QueryGroupsByAdminRequest',
    admin: '',
    pagination: undefined,
  };
}

export const QueryGroupsByAdminRequest = {
  $type: 'regen.group.v1alpha1.QueryGroupsByAdminRequest' as const,

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
    $type: 'regen.group.v1alpha1.QueryGroupsByAdminResponse',
    groups: [],
    pagination: undefined,
  };
}

export const QueryGroupsByAdminResponse = {
  $type: 'regen.group.v1alpha1.QueryGroupsByAdminResponse' as const,

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

function createBaseQueryGroupAccountsByGroupRequest(): QueryGroupAccountsByGroupRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupAccountsByGroupRequest',
    groupId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryGroupAccountsByGroupRequest = {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByGroupRequest' as const,

  encode(
    message: QueryGroupAccountsByGroupRequest,
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
  ): QueryGroupAccountsByGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAccountsByGroupRequest();
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

  fromJSON(object: any): QueryGroupAccountsByGroupRequest {
    return {
      $type: QueryGroupAccountsByGroupRequest.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupAccountsByGroupRequest): unknown {
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
    I extends Exact<DeepPartial<QueryGroupAccountsByGroupRequest>, I>,
  >(object: I): QueryGroupAccountsByGroupRequest {
    const message = createBaseQueryGroupAccountsByGroupRequest();
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
  QueryGroupAccountsByGroupRequest.$type,
  QueryGroupAccountsByGroupRequest,
);

function createBaseQueryGroupAccountsByGroupResponse(): QueryGroupAccountsByGroupResponse {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupAccountsByGroupResponse',
    groupAccounts: [],
    pagination: undefined,
  };
}

export const QueryGroupAccountsByGroupResponse = {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByGroupResponse' as const,

  encode(
    message: QueryGroupAccountsByGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupAccountsByGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAccountsByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupAccounts.push(
            GroupAccountInfo.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryGroupAccountsByGroupResponse {
    return {
      $type: QueryGroupAccountsByGroupResponse.$type,
      groupAccounts: Array.isArray(object?.groupAccounts)
        ? object.groupAccounts.map((e: any) => GroupAccountInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupAccountsByGroupResponse): unknown {
    const obj: any = {};
    if (message.groupAccounts) {
      obj.groupAccounts = message.groupAccounts.map(e =>
        e ? GroupAccountInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groupAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupAccountsByGroupResponse>, I>,
  >(object: I): QueryGroupAccountsByGroupResponse {
    const message = createBaseQueryGroupAccountsByGroupResponse();
    message.groupAccounts =
      object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupAccountsByGroupResponse.$type,
  QueryGroupAccountsByGroupResponse,
);

function createBaseQueryGroupAccountsByAdminRequest(): QueryGroupAccountsByAdminRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupAccountsByAdminRequest',
    admin: '',
    pagination: undefined,
  };
}

export const QueryGroupAccountsByAdminRequest = {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByAdminRequest' as const,

  encode(
    message: QueryGroupAccountsByAdminRequest,
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
  ): QueryGroupAccountsByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAccountsByAdminRequest();
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

  fromJSON(object: any): QueryGroupAccountsByAdminRequest {
    return {
      $type: QueryGroupAccountsByAdminRequest.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupAccountsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupAccountsByAdminRequest>, I>,
  >(object: I): QueryGroupAccountsByAdminRequest {
    const message = createBaseQueryGroupAccountsByAdminRequest();
    message.admin = object.admin ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupAccountsByAdminRequest.$type,
  QueryGroupAccountsByAdminRequest,
);

function createBaseQueryGroupAccountsByAdminResponse(): QueryGroupAccountsByAdminResponse {
  return {
    $type: 'regen.group.v1alpha1.QueryGroupAccountsByAdminResponse',
    groupAccounts: [],
    pagination: undefined,
  };
}

export const QueryGroupAccountsByAdminResponse = {
  $type: 'regen.group.v1alpha1.QueryGroupAccountsByAdminResponse' as const,

  encode(
    message: QueryGroupAccountsByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupAccountsByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAccountsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupAccounts.push(
            GroupAccountInfo.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryGroupAccountsByAdminResponse {
    return {
      $type: QueryGroupAccountsByAdminResponse.$type,
      groupAccounts: Array.isArray(object?.groupAccounts)
        ? object.groupAccounts.map((e: any) => GroupAccountInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGroupAccountsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groupAccounts) {
      obj.groupAccounts = message.groupAccounts.map(e =>
        e ? GroupAccountInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groupAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGroupAccountsByAdminResponse>, I>,
  >(object: I): QueryGroupAccountsByAdminResponse {
    const message = createBaseQueryGroupAccountsByAdminResponse();
    message.groupAccounts =
      object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGroupAccountsByAdminResponse.$type,
  QueryGroupAccountsByAdminResponse,
);

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryProposalRequest',
    proposalId: Long.UZERO,
  };
}

export const QueryProposalRequest = {
  $type: 'regen.group.v1alpha1.QueryProposalRequest' as const,

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
    $type: 'regen.group.v1alpha1.QueryProposalResponse',
    proposal: undefined,
  };
}

export const QueryProposalResponse = {
  $type: 'regen.group.v1alpha1.QueryProposalResponse' as const,

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

function createBaseQueryProposalsByGroupAccountRequest(): QueryProposalsByGroupAccountRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryProposalsByGroupAccountRequest',
    address: '',
    pagination: undefined,
  };
}

export const QueryProposalsByGroupAccountRequest = {
  $type: 'regen.group.v1alpha1.QueryProposalsByGroupAccountRequest' as const,

  encode(
    message: QueryProposalsByGroupAccountRequest,
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
  ): QueryProposalsByGroupAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupAccountRequest();
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

  fromJSON(object: any): QueryProposalsByGroupAccountRequest {
    return {
      $type: QueryProposalsByGroupAccountRequest.$type,
      address: isSet(object.address) ? String(object.address) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsByGroupAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryProposalsByGroupAccountRequest>, I>,
  >(object: I): QueryProposalsByGroupAccountRequest {
    const message = createBaseQueryProposalsByGroupAccountRequest();
    message.address = object.address ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryProposalsByGroupAccountRequest.$type,
  QueryProposalsByGroupAccountRequest,
);

function createBaseQueryProposalsByGroupAccountResponse(): QueryProposalsByGroupAccountResponse {
  return {
    $type: 'regen.group.v1alpha1.QueryProposalsByGroupAccountResponse',
    proposals: [],
    pagination: undefined,
  };
}

export const QueryProposalsByGroupAccountResponse = {
  $type: 'regen.group.v1alpha1.QueryProposalsByGroupAccountResponse' as const,

  encode(
    message: QueryProposalsByGroupAccountResponse,
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
  ): QueryProposalsByGroupAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupAccountResponse();
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

  fromJSON(object: any): QueryProposalsByGroupAccountResponse {
    return {
      $type: QueryProposalsByGroupAccountResponse.$type,
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsByGroupAccountResponse): unknown {
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
    I extends Exact<DeepPartial<QueryProposalsByGroupAccountResponse>, I>,
  >(object: I): QueryProposalsByGroupAccountResponse {
    const message = createBaseQueryProposalsByGroupAccountResponse();
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
  QueryProposalsByGroupAccountResponse.$type,
  QueryProposalsByGroupAccountResponse,
);

function createBaseQueryVoteByProposalVoterRequest(): QueryVoteByProposalVoterRequest {
  return {
    $type: 'regen.group.v1alpha1.QueryVoteByProposalVoterRequest',
    proposalId: Long.UZERO,
    voter: '',
  };
}

export const QueryVoteByProposalVoterRequest = {
  $type: 'regen.group.v1alpha1.QueryVoteByProposalVoterRequest' as const,

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
    $type: 'regen.group.v1alpha1.QueryVoteByProposalVoterResponse',
    vote: undefined,
  };
}

export const QueryVoteByProposalVoterResponse = {
  $type: 'regen.group.v1alpha1.QueryVoteByProposalVoterResponse' as const,

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
    $type: 'regen.group.v1alpha1.QueryVotesByProposalRequest',
    proposalId: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryVotesByProposalRequest = {
  $type: 'regen.group.v1alpha1.QueryVotesByProposalRequest' as const,

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
    $type: 'regen.group.v1alpha1.QueryVotesByProposalResponse',
    votes: [],
    pagination: undefined,
  };
}

export const QueryVotesByProposalResponse = {
  $type: 'regen.group.v1alpha1.QueryVotesByProposalResponse' as const,

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
    $type: 'regen.group.v1alpha1.QueryVotesByVoterRequest',
    voter: '',
    pagination: undefined,
  };
}

export const QueryVotesByVoterRequest = {
  $type: 'regen.group.v1alpha1.QueryVotesByVoterRequest' as const,

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
    $type: 'regen.group.v1alpha1.QueryVotesByVoterResponse',
    votes: [],
    pagination: undefined,
  };
}

export const QueryVotesByVoterResponse = {
  $type: 'regen.group.v1alpha1.QueryVotesByVoterResponse' as const,

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

/** Query is the regen.group.v1alpha1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  GroupInfo(
    request: DeepPartial<QueryGroupInfoRequest>,
  ): Promise<QueryGroupInfoResponse>;
  /** GroupAccountInfo queries group account info based on group account address. */
  GroupAccountInfo(
    request: DeepPartial<QueryGroupAccountInfoRequest>,
  ): Promise<QueryGroupAccountInfoResponse>;
  /** GroupMembers queries members of a group */
  GroupMembers(
    request: DeepPartial<QueryGroupMembersRequest>,
  ): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  GroupsByAdmin(
    request: DeepPartial<QueryGroupsByAdminRequest>,
  ): Promise<QueryGroupsByAdminResponse>;
  /** GroupAccountsByGroup queries group accounts by group id. */
  GroupAccountsByGroup(
    request: DeepPartial<QueryGroupAccountsByGroupRequest>,
  ): Promise<QueryGroupAccountsByGroupResponse>;
  /** GroupsByAdmin queries group accounts by admin address. */
  GroupAccountsByAdmin(
    request: DeepPartial<QueryGroupAccountsByAdminRequest>,
  ): Promise<QueryGroupAccountsByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  Proposal(
    request: DeepPartial<QueryProposalRequest>,
  ): Promise<QueryProposalResponse>;
  /** ProposalsByGroupAccount queries proposals based on group account address. */
  ProposalsByGroupAccount(
    request: DeepPartial<QueryProposalsByGroupAccountRequest>,
  ): Promise<QueryProposalsByGroupAccountResponse>;
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
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GroupInfo = this.GroupInfo.bind(this);
    this.GroupAccountInfo = this.GroupAccountInfo.bind(this);
    this.GroupMembers = this.GroupMembers.bind(this);
    this.GroupsByAdmin = this.GroupsByAdmin.bind(this);
    this.GroupAccountsByGroup = this.GroupAccountsByGroup.bind(this);
    this.GroupAccountsByAdmin = this.GroupAccountsByAdmin.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.ProposalsByGroupAccount = this.ProposalsByGroupAccount.bind(this);
    this.VoteByProposalVoter = this.VoteByProposalVoter.bind(this);
    this.VotesByProposal = this.VotesByProposal.bind(this);
    this.VotesByVoter = this.VotesByVoter.bind(this);
  }
  GroupInfo(
    request: DeepPartial<QueryGroupInfoRequest>,
  ): Promise<QueryGroupInfoResponse> {
    const fromPartial = QueryGroupInfoRequest.fromPartial(request);
    const data = QueryGroupInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
      'GroupInfo',
      data,
    );
    return promise.then(data =>
      QueryGroupInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupAccountInfo(
    request: DeepPartial<QueryGroupAccountInfoRequest>,
  ): Promise<QueryGroupAccountInfoResponse> {
    const fromPartial = QueryGroupAccountInfoRequest.fromPartial(request);
    const data = QueryGroupAccountInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
      'GroupAccountInfo',
      data,
    );
    return promise.then(data =>
      QueryGroupAccountInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupMembers(
    request: DeepPartial<QueryGroupMembersRequest>,
  ): Promise<QueryGroupMembersResponse> {
    const fromPartial = QueryGroupMembersRequest.fromPartial(request);
    const data = QueryGroupMembersRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
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
      'regen.group.v1alpha1.Query',
      'GroupsByAdmin',
      data,
    );
    return promise.then(data =>
      QueryGroupsByAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupAccountsByGroup(
    request: DeepPartial<QueryGroupAccountsByGroupRequest>,
  ): Promise<QueryGroupAccountsByGroupResponse> {
    const fromPartial = QueryGroupAccountsByGroupRequest.fromPartial(request);
    const data = QueryGroupAccountsByGroupRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
      'GroupAccountsByGroup',
      data,
    );
    return promise.then(data =>
      QueryGroupAccountsByGroupResponse.decode(new _m0.Reader(data)),
    );
  }

  GroupAccountsByAdmin(
    request: DeepPartial<QueryGroupAccountsByAdminRequest>,
  ): Promise<QueryGroupAccountsByAdminResponse> {
    const fromPartial = QueryGroupAccountsByAdminRequest.fromPartial(request);
    const data = QueryGroupAccountsByAdminRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
      'GroupAccountsByAdmin',
      data,
    );
    return promise.then(data =>
      QueryGroupAccountsByAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  Proposal(
    request: DeepPartial<QueryProposalRequest>,
  ): Promise<QueryProposalResponse> {
    const fromPartial = QueryProposalRequest.fromPartial(request);
    const data = QueryProposalRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
      'Proposal',
      data,
    );
    return promise.then(data =>
      QueryProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  ProposalsByGroupAccount(
    request: DeepPartial<QueryProposalsByGroupAccountRequest>,
  ): Promise<QueryProposalsByGroupAccountResponse> {
    const fromPartial =
      QueryProposalsByGroupAccountRequest.fromPartial(request);
    const data =
      QueryProposalsByGroupAccountRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
      'ProposalsByGroupAccount',
      data,
    );
    return promise.then(data =>
      QueryProposalsByGroupAccountResponse.decode(new _m0.Reader(data)),
    );
  }

  VoteByProposalVoter(
    request: DeepPartial<QueryVoteByProposalVoterRequest>,
  ): Promise<QueryVoteByProposalVoterResponse> {
    const fromPartial = QueryVoteByProposalVoterRequest.fromPartial(request);
    const data = QueryVoteByProposalVoterRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Query',
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
      'regen.group.v1alpha1.Query',
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
      'regen.group.v1alpha1.Query',
      'VotesByVoter',
      data,
    );
    return promise.then(data =>
      QueryVotesByVoterResponse.decode(new _m0.Reader(data)),
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
