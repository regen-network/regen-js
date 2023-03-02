/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../google/protobuf/any';
import {
  VoteOption,
  ProposalExecutorResult,
  MemberRequest,
  voteOptionFromJSON,
  voteOptionToJSON,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
} from './types';

export const protobufPackage = 'cosmos.group.v1';

/** Since: cosmos-sdk 0.46 */

/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}

export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case 'EXEC_UNSPECIFIED':
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case 'EXEC_TRY':
      return Exec.EXEC_TRY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Exec.UNRECOGNIZED;
  }
}

export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return 'EXEC_UNSPECIFIED';
    case Exec.EXEC_TRY:
      return 'EXEC_TRY';
    default:
      return 'UNKNOWN';
  }
}

/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  $type: 'cosmos.group.v1.MsgCreateGroup';
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  $type: 'cosmos.group.v1.MsgCreateGroupResponse';
  /** group_id is the unique ID of the newly created group. */
  groupId: Long;
}

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  $type: 'cosmos.group.v1.MsgUpdateGroupMembers';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: MemberRequest[];
}

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
  $type: 'cosmos.group.v1.MsgUpdateGroupMembersResponse';
}

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  $type: 'cosmos.group.v1.MsgUpdateGroupAdmin';
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
  $type: 'cosmos.group.v1.MsgUpdateGroupAdminResponse';
}

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  $type: 'cosmos.group.v1.MsgUpdateGroupMetadata';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** metadata is the updated group's metadata. */
  metadata: string;
}

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
  $type: 'cosmos.group.v1.MsgUpdateGroupMetadataResponse';
}

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  $type: 'cosmos.group.v1.MsgCreateGroupPolicy';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  $type: 'cosmos.group.v1.MsgCreateGroupPolicyResponse';
  /** address is the account address of the newly created group policy. */
  address: string;
}

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyAdmin';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  groupPolicyAddress: string;
  /** new_admin is the new group policy admin. */
  newAdmin: string;
}

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  $type: 'cosmos.group.v1.MsgCreateGroupWithPolicy';
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  groupMetadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  groupPolicyMetadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  groupPolicyAsAdmin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  $type: 'cosmos.group.v1.MsgCreateGroupWithPolicyResponse';
  /** group_id is the unique ID of the newly created group with policy. */
  groupId: Long;
  /** group_policy_address is the account address of the newly created group policy. */
  groupPolicyAddress: string;
}

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse';
}

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /** decision_policy is the updated group policy's decision policy. */
  decisionPolicy?: Any;
}

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse';
}

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyMetadata';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /** metadata is the updated group policy metadata. */
  metadata: string;
}

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse';
}

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  $type: 'cosmos.group.v1.MsgSubmitProposal';
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  $type: 'cosmos.group.v1.MsgSubmitProposalResponse';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
}

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  $type: 'cosmos.group.v1.MsgWithdrawProposal';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
  $type: 'cosmos.group.v1.MsgWithdrawProposalResponse';
}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  $type: 'cosmos.group.v1.MsgVote';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
  $type: 'cosmos.group.v1.MsgVoteResponse';
}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  $type: 'cosmos.group.v1.MsgExec';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
  $type: 'cosmos.group.v1.MsgExecResponse';
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  $type: 'cosmos.group.v1.MsgLeaveGroup';
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
  $type: 'cosmos.group.v1.MsgLeaveGroupResponse';
}

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    $type: 'cosmos.group.v1.MsgCreateGroup',
    admin: '',
    members: [],
    metadata: '',
  };
}

export const MsgCreateGroup = {
  $type: 'cosmos.group.v1.MsgCreateGroup' as const,

  encode(
    message: MsgCreateGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    return {
      $type: MsgCreateGroup.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => MemberRequest.fromJSON(e))
        : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e =>
        e ? MemberRequest.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroup>, I>>(
    object: I,
  ): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? '';
    message.members =
      object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.metadata = object.metadata ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateGroup.$type, MsgCreateGroup);

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    $type: 'cosmos.group.v1.MsgCreateGroupResponse',
    groupId: Long.UZERO,
  };
}

export const MsgCreateGroupResponse = {
  $type: 'cosmos.group.v1.MsgCreateGroupResponse' as const,

  encode(
    message: MsgCreateGroupResponse,
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
  ): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
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

  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      $type: MsgCreateGroupResponse.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(
    object: I,
  ): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateGroupResponse.$type, MsgCreateGroupResponse);

function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupMembers',
    admin: '',
    groupId: Long.UZERO,
    memberUpdates: [],
  };
}

export const MsgUpdateGroupMembers = {
  $type: 'cosmos.group.v1.MsgUpdateGroupMembers' as const,

  encode(
    message: MsgUpdateGroupMembers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      MemberRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.memberUpdates.push(
            MemberRequest.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      $type: MsgUpdateGroupMembers.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      memberUpdates: Array.isArray(object?.memberUpdates)
        ? object.memberUpdates.map((e: any) => MemberRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map(e =>
        e ? MemberRequest.toJSON(e) : undefined,
      );
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMembers>, I>>(
    object: I,
  ): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? '';
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.memberUpdates =
      object.memberUpdates?.map(e => MemberRequest.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateGroupMembers.$type, MsgUpdateGroupMembers);

function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return { $type: 'cosmos.group.v1.MsgUpdateGroupMembersResponse' };
}

export const MsgUpdateGroupMembersResponse = {
  $type: 'cosmos.group.v1.MsgUpdateGroupMembersResponse' as const,

  encode(
    _: MsgUpdateGroupMembersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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

  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {
      $type: MsgUpdateGroupMembersResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMembersResponse>, I>>(
    _: I,
  ): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupMembersResponse.$type,
  MsgUpdateGroupMembersResponse,
);

function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupAdmin',
    admin: '',
    groupId: Long.UZERO,
    newAdmin: '',
  };
}

export const MsgUpdateGroupAdmin = {
  $type: 'cosmos.group.v1.MsgUpdateGroupAdmin' as const,

  encode(
    message: MsgUpdateGroupAdmin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== '') {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      $type: MsgUpdateGroupAdmin.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : '',
    };
  },

  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupAdmin>, I>>(
    object: I,
  ): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? '';
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.newAdmin = object.newAdmin ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateGroupAdmin.$type, MsgUpdateGroupAdmin);

function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return { $type: 'cosmos.group.v1.MsgUpdateGroupAdminResponse' };
}

export const MsgUpdateGroupAdminResponse = {
  $type: 'cosmos.group.v1.MsgUpdateGroupAdminResponse' as const,

  encode(
    _: MsgUpdateGroupAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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

  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {
      $type: MsgUpdateGroupAdminResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupAdminResponse>, I>>(
    _: I,
  ): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAdminResponse.$type,
  MsgUpdateGroupAdminResponse,
);

function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupMetadata',
    admin: '',
    groupId: Long.UZERO,
    metadata: '',
  };
}

export const MsgUpdateGroupMetadata = {
  $type: 'cosmos.group.v1.MsgUpdateGroupMetadata' as const,

  encode(
    message: MsgUpdateGroupMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      $type: MsgUpdateGroupMetadata.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
    };
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMetadata>, I>>(
    object: I,
  ): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? '';
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.metadata = object.metadata ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateGroupMetadata.$type, MsgUpdateGroupMetadata);

function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return { $type: 'cosmos.group.v1.MsgUpdateGroupMetadataResponse' };
}

export const MsgUpdateGroupMetadataResponse = {
  $type: 'cosmos.group.v1.MsgUpdateGroupMetadataResponse' as const,

  encode(
    _: MsgUpdateGroupMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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

  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {
      $type: MsgUpdateGroupMetadataResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMetadataResponse>, I>>(
    _: I,
  ): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupMetadataResponse.$type,
  MsgUpdateGroupMetadataResponse,
);

function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return {
    $type: 'cosmos.group.v1.MsgCreateGroupPolicy',
    admin: '',
    groupId: Long.UZERO,
    metadata: '',
    decisionPolicy: undefined,
  };
}

export const MsgCreateGroupPolicy = {
  $type: 'cosmos.group.v1.MsgCreateGroupPolicy' as const,

  encode(
    message: MsgCreateGroupPolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicy {
    return {
      $type: MsgCreateGroupPolicy.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupPolicy>, I>>(
    object: I,
  ): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? '';
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.metadata = object.metadata ?? '';
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateGroupPolicy.$type, MsgCreateGroupPolicy);

function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return { $type: 'cosmos.group.v1.MsgCreateGroupPolicyResponse', address: '' };
}

export const MsgCreateGroupPolicyResponse = {
  $type: 'cosmos.group.v1.MsgCreateGroupPolicyResponse' as const,

  encode(
    message: MsgCreateGroupPolicyResponse,
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
  ): MsgCreateGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
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

  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    return {
      $type: MsgCreateGroupPolicyResponse.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupPolicyResponse>, I>>(
    object: I,
  ): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateGroupPolicyResponse.$type,
  MsgCreateGroupPolicyResponse,
);

function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupPolicyAdmin',
    admin: '',
    groupPolicyAddress: '',
    newAdmin: '',
  };
}

export const MsgUpdateGroupPolicyAdmin = {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyAdmin' as const,

  encode(
    message: MsgUpdateGroupPolicyAdmin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== '') {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.newAdmin !== '') {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    return {
      $type: MsgUpdateGroupPolicyAdmin.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupPolicyAddress: isSet(object.groupPolicyAddress)
        ? String(object.groupPolicyAddress)
        : '',
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : '',
    };
  },

  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyAdmin>, I>>(
    object: I,
  ): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? '';
    message.groupPolicyAddress = object.groupPolicyAddress ?? '';
    message.newAdmin = object.newAdmin ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupPolicyAdmin.$type,
  MsgUpdateGroupPolicyAdmin,
);

function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    $type: 'cosmos.group.v1.MsgCreateGroupWithPolicy',
    admin: '',
    members: [],
    groupMetadata: '',
    groupPolicyMetadata: '',
    groupPolicyAsAdmin: false,
    decisionPolicy: undefined,
  };
}

export const MsgCreateGroupWithPolicy = {
  $type: 'cosmos.group.v1.MsgCreateGroupWithPolicy' as const,

  encode(
    message: MsgCreateGroupWithPolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupMetadata !== '') {
      writer.uint32(26).string(message.groupMetadata);
    }
    if (message.groupPolicyMetadata !== '') {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }
    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateGroupWithPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMetadata = reader.string();
          break;
        case 4:
          message.groupPolicyMetadata = reader.string();
          break;
        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicy {
    return {
      $type: MsgCreateGroupWithPolicy.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => MemberRequest.fromJSON(e))
        : [],
      groupMetadata: isSet(object.groupMetadata)
        ? String(object.groupMetadata)
        : '',
      groupPolicyMetadata: isSet(object.groupPolicyMetadata)
        ? String(object.groupPolicyMetadata)
        : '',
      groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin)
        ? Boolean(object.groupPolicyAsAdmin)
        : false,
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e =>
        e ? MemberRequest.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.groupMetadata !== undefined &&
      (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined &&
      (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined &&
      (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupWithPolicy>, I>>(
    object: I,
  ): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? '';
    message.members =
      object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.groupMetadata = object.groupMetadata ?? '';
    message.groupPolicyMetadata = object.groupPolicyMetadata ?? '';
    message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateGroupWithPolicy.$type,
  MsgCreateGroupWithPolicy,
);

function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return {
    $type: 'cosmos.group.v1.MsgCreateGroupWithPolicyResponse',
    groupId: Long.UZERO,
    groupPolicyAddress: '',
  };
}

export const MsgCreateGroupWithPolicyResponse = {
  $type: 'cosmos.group.v1.MsgCreateGroupWithPolicyResponse' as const,

  encode(
    message: MsgCreateGroupWithPolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== '') {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    return {
      $type: MsgCreateGroupWithPolicyResponse.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      groupPolicyAddress: isSet(object.groupPolicyAddress)
        ? String(object.groupPolicyAddress)
        : '',
    };
  },

  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgCreateGroupWithPolicyResponse>, I>,
  >(object: I): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.groupPolicyAddress = object.groupPolicyAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateGroupWithPolicyResponse.$type,
  MsgCreateGroupWithPolicyResponse,
);

function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return { $type: 'cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse' };
}

export const MsgUpdateGroupPolicyAdminResponse = {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse' as const,

  encode(
    _: MsgUpdateGroupPolicyAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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

  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    return {
      $type: MsgUpdateGroupPolicyAdminResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupPolicyAdminResponse>, I>,
  >(_: I): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupPolicyAdminResponse.$type,
  MsgUpdateGroupPolicyAdminResponse,
);

function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy',
    admin: '',
    groupPolicyAddress: '',
    decisionPolicy: undefined,
  };
}

export const MsgUpdateGroupPolicyDecisionPolicy = {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy' as const,

  encode(
    message: MsgUpdateGroupPolicyDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== '') {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      $type: MsgUpdateGroupPolicyDecisionPolicy.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupPolicyAddress: isSet(object.groupPolicyAddress)
        ? String(object.groupPolicyAddress)
        : '',
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, I>,
  >(object: I): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? '';
    message.groupPolicyAddress = object.groupPolicyAddress ?? '';
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupPolicyDecisionPolicy.$type,
  MsgUpdateGroupPolicyDecisionPolicy,
);

function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse',
  };
}

export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse' as const,

  encode(
    _: MsgUpdateGroupPolicyDecisionPolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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

  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {
      $type: MsgUpdateGroupPolicyDecisionPolicyResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>, I>,
  >(_: I): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupPolicyDecisionPolicyResponse.$type,
  MsgUpdateGroupPolicyDecisionPolicyResponse,
);

function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return {
    $type: 'cosmos.group.v1.MsgUpdateGroupPolicyMetadata',
    admin: '',
    groupPolicyAddress: '',
    metadata: '',
  };
}

export const MsgUpdateGroupPolicyMetadata = {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyMetadata' as const,

  encode(
    message: MsgUpdateGroupPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== '') {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    return {
      $type: MsgUpdateGroupPolicyMetadata.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupPolicyAddress: isSet(object.groupPolicyAddress)
        ? String(object.groupPolicyAddress)
        : '',
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
    };
  },

  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyMetadata>, I>>(
    object: I,
  ): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? '';
    message.groupPolicyAddress = object.groupPolicyAddress ?? '';
    message.metadata = object.metadata ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupPolicyMetadata.$type,
  MsgUpdateGroupPolicyMetadata,
);

function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return { $type: 'cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse' };
}

export const MsgUpdateGroupPolicyMetadataResponse = {
  $type: 'cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse' as const,

  encode(
    _: MsgUpdateGroupPolicyMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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

  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    return {
      $type: MsgUpdateGroupPolicyMetadataResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupPolicyMetadataResponse>, I>,
  >(_: I): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupPolicyMetadataResponse.$type,
  MsgUpdateGroupPolicyMetadataResponse,
);

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    $type: 'cosmos.group.v1.MsgSubmitProposal',
    groupPolicyAddress: '',
    proposers: [],
    metadata: '',
    messages: [],
    exec: 0,
  };
}

export const MsgSubmitProposal = {
  $type: 'cosmos.group.v1.MsgSubmitProposal' as const,

  encode(
    message: MsgSubmitProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupPolicyAddress !== '') {
      writer.uint32(10).string(message.groupPolicyAddress);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicyAddress = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      $type: MsgSubmitProposal.$type,
      groupPolicyAddress: isSet(object.groupPolicyAddress)
        ? String(object.groupPolicyAddress)
        : '',
      proposers: Array.isArray(object?.proposers)
        ? object.proposers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Any.fromJSON(e))
        : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.groupPolicyAddress !== undefined &&
      (obj.groupPolicyAddress = message.groupPolicyAddress);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map(e => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(
    object: I,
  ): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = object.groupPolicyAddress ?? '';
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? '';
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgSubmitProposal.$type, MsgSubmitProposal);

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    $type: 'cosmos.group.v1.MsgSubmitProposalResponse',
    proposalId: Long.UZERO,
  };
}

export const MsgSubmitProposalResponse = {
  $type: 'cosmos.group.v1.MsgSubmitProposalResponse' as const,

  encode(
    message: MsgSubmitProposalResponse,
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
  ): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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

  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      $type: MsgSubmitProposalResponse.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(
    object: I,
  ): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  MsgSubmitProposalResponse.$type,
  MsgSubmitProposalResponse,
);

function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return {
    $type: 'cosmos.group.v1.MsgWithdrawProposal',
    proposalId: Long.UZERO,
    address: '',
  };
}

export const MsgWithdrawProposal = {
  $type: 'cosmos.group.v1.MsgWithdrawProposal' as const,

  encode(
    message: MsgWithdrawProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawProposal {
    return {
      $type: MsgWithdrawProposal.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawProposal>, I>>(
    object: I,
  ): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgWithdrawProposal.$type, MsgWithdrawProposal);

function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return { $type: 'cosmos.group.v1.MsgWithdrawProposalResponse' };
}

export const MsgWithdrawProposalResponse = {
  $type: 'cosmos.group.v1.MsgWithdrawProposalResponse' as const,

  encode(
    _: MsgWithdrawProposalResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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

  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {
      $type: MsgWithdrawProposalResponse.$type,
    };
  },

  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawProposalResponse>, I>>(
    _: I,
  ): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgWithdrawProposalResponse.$type,
  MsgWithdrawProposalResponse,
);

function createBaseMsgVote(): MsgVote {
  return {
    $type: 'cosmos.group.v1.MsgVote',
    proposalId: Long.UZERO,
    voter: '',
    option: 0,
    metadata: '',
    exec: 0,
  };
}

export const MsgVote = {
  $type: 'cosmos.group.v1.MsgVote' as const,

  encode(
    message: MsgVote,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== '') {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      $type: MsgVote.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : '',
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : '',
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVote>, I>>(object: I): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.voter = object.voter ?? '';
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? '';
    message.exec = object.exec ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgVote.$type, MsgVote);

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return { $type: 'cosmos.group.v1.MsgVoteResponse' };
}

export const MsgVoteResponse = {
  $type: 'cosmos.group.v1.MsgVoteResponse' as const,

  encode(
    _: MsgVoteResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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

  fromJSON(_: any): MsgVoteResponse {
    return {
      $type: MsgVoteResponse.$type,
    };
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(
    _: I,
  ): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgVoteResponse.$type, MsgVoteResponse);

function createBaseMsgExec(): MsgExec {
  return {
    $type: 'cosmos.group.v1.MsgExec',
    proposalId: Long.UZERO,
    executor: '',
  };
}

export const MsgExec = {
  $type: 'cosmos.group.v1.MsgExec' as const,

  encode(
    message: MsgExec,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executor !== '') {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.executor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      $type: MsgExec.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      executor: isSet(object.executor) ? String(object.executor) : '',
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.executor !== undefined && (obj.executor = message.executor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.executor = object.executor ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgExec.$type, MsgExec);

function createBaseMsgExecResponse(): MsgExecResponse {
  return { $type: 'cosmos.group.v1.MsgExecResponse', result: 0 };
}

export const MsgExecResponse = {
  $type: 'cosmos.group.v1.MsgExecResponse' as const,

  encode(
    message: MsgExecResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    return {
      $type: MsgExecResponse.$type,
      result: isSet(object.result)
        ? proposalExecutorResultFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(
    object: I,
  ): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgExecResponse.$type, MsgExecResponse);

function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    $type: 'cosmos.group.v1.MsgLeaveGroup',
    address: '',
    groupId: Long.UZERO,
  };
}

export const MsgLeaveGroup = {
  $type: 'cosmos.group.v1.MsgLeaveGroup' as const,

  encode(
    message: MsgLeaveGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLeaveGroup {
    return {
      $type: MsgLeaveGroup.$type,
      address: isSet(object.address) ? String(object.address) : '',
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroup>, I>>(
    object: I,
  ): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? '';
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgLeaveGroup.$type, MsgLeaveGroup);

function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return { $type: 'cosmos.group.v1.MsgLeaveGroupResponse' };
}

export const MsgLeaveGroupResponse = {
  $type: 'cosmos.group.v1.MsgLeaveGroupResponse' as const,

  encode(
    _: MsgLeaveGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgLeaveGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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

  fromJSON(_: any): MsgLeaveGroupResponse {
    return {
      $type: MsgLeaveGroupResponse.$type,
    };
  },

  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaveGroupResponse>, I>>(
    _: I,
  ): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgLeaveGroupResponse.$type, MsgLeaveGroupResponse);

/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  CreateGroup(
    request: DeepPartial<MsgCreateGroup>,
  ): Promise<MsgCreateGroupResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  UpdateGroupMembers(
    request: DeepPartial<MsgUpdateGroupMembers>,
  ): Promise<MsgUpdateGroupMembersResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  UpdateGroupAdmin(
    request: DeepPartial<MsgUpdateGroupAdmin>,
  ): Promise<MsgUpdateGroupAdminResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  UpdateGroupMetadata(
    request: DeepPartial<MsgUpdateGroupMetadata>,
  ): Promise<MsgUpdateGroupMetadataResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  CreateGroupPolicy(
    request: DeepPartial<MsgCreateGroupPolicy>,
  ): Promise<MsgCreateGroupPolicyResponse>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  CreateGroupWithPolicy(
    request: DeepPartial<MsgCreateGroupWithPolicy>,
  ): Promise<MsgCreateGroupWithPolicyResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  UpdateGroupPolicyAdmin(
    request: DeepPartial<MsgUpdateGroupPolicyAdmin>,
  ): Promise<MsgUpdateGroupPolicyAdminResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateGroupPolicyDecisionPolicy(
    request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>,
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  UpdateGroupPolicyMetadata(
    request: DeepPartial<MsgUpdateGroupPolicyMetadata>,
  ): Promise<MsgUpdateGroupPolicyMetadataResponse>;
  /** SubmitProposal submits a new proposal. */
  SubmitProposal(
    request: DeepPartial<MsgSubmitProposal>,
  ): Promise<MsgSubmitProposalResponse>;
  /** WithdrawProposal withdraws a proposal. */
  WithdrawProposal(
    request: DeepPartial<MsgWithdrawProposal>,
  ): Promise<MsgWithdrawProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  Vote(request: DeepPartial<MsgVote>): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  Exec(request: DeepPartial<MsgExec>): Promise<MsgExecResponse>;
  /** LeaveGroup allows a group member to leave the group. */
  LeaveGroup(
    request: DeepPartial<MsgLeaveGroup>,
  ): Promise<MsgLeaveGroupResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGroup = this.CreateGroup.bind(this);
    this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
    this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
    this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
    this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
    this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
    this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
    this.UpdateGroupPolicyDecisionPolicy =
      this.UpdateGroupPolicyDecisionPolicy.bind(this);
    this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.WithdrawProposal = this.WithdrawProposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Exec = this.Exec.bind(this);
    this.LeaveGroup = this.LeaveGroup.bind(this);
  }
  CreateGroup(
    request: DeepPartial<MsgCreateGroup>,
  ): Promise<MsgCreateGroupResponse> {
    const fromPartial = MsgCreateGroup.fromPartial(request);
    const data = MsgCreateGroup.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'CreateGroup',
      data,
    );
    return promise.then(data =>
      MsgCreateGroupResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupMembers(
    request: DeepPartial<MsgUpdateGroupMembers>,
  ): Promise<MsgUpdateGroupMembersResponse> {
    const fromPartial = MsgUpdateGroupMembers.fromPartial(request);
    const data = MsgUpdateGroupMembers.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'UpdateGroupMembers',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupAdmin(
    request: DeepPartial<MsgUpdateGroupAdmin>,
  ): Promise<MsgUpdateGroupAdminResponse> {
    const fromPartial = MsgUpdateGroupAdmin.fromPartial(request);
    const data = MsgUpdateGroupAdmin.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'UpdateGroupAdmin',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupMetadata(
    request: DeepPartial<MsgUpdateGroupMetadata>,
  ): Promise<MsgUpdateGroupMetadataResponse> {
    const fromPartial = MsgUpdateGroupMetadata.fromPartial(request);
    const data = MsgUpdateGroupMetadata.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'UpdateGroupMetadata',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateGroupPolicy(
    request: DeepPartial<MsgCreateGroupPolicy>,
  ): Promise<MsgCreateGroupPolicyResponse> {
    const fromPartial = MsgCreateGroupPolicy.fromPartial(request);
    const data = MsgCreateGroupPolicy.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'CreateGroupPolicy',
      data,
    );
    return promise.then(data =>
      MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateGroupWithPolicy(
    request: DeepPartial<MsgCreateGroupWithPolicy>,
  ): Promise<MsgCreateGroupWithPolicyResponse> {
    const fromPartial = MsgCreateGroupWithPolicy.fromPartial(request);
    const data = MsgCreateGroupWithPolicy.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'CreateGroupWithPolicy',
      data,
    );
    return promise.then(data =>
      MsgCreateGroupWithPolicyResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupPolicyAdmin(
    request: DeepPartial<MsgUpdateGroupPolicyAdmin>,
  ): Promise<MsgUpdateGroupPolicyAdminResponse> {
    const fromPartial = MsgUpdateGroupPolicyAdmin.fromPartial(request);
    const data = MsgUpdateGroupPolicyAdmin.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'UpdateGroupPolicyAdmin',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupPolicyDecisionPolicy(
    request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>,
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    const fromPartial = MsgUpdateGroupPolicyDecisionPolicy.fromPartial(request);
    const data =
      MsgUpdateGroupPolicyDecisionPolicy.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'UpdateGroupPolicyDecisionPolicy',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupPolicyMetadata(
    request: DeepPartial<MsgUpdateGroupPolicyMetadata>,
  ): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    const fromPartial = MsgUpdateGroupPolicyMetadata.fromPartial(request);
    const data = MsgUpdateGroupPolicyMetadata.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'UpdateGroupPolicyMetadata',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  SubmitProposal(
    request: DeepPartial<MsgSubmitProposal>,
  ): Promise<MsgSubmitProposalResponse> {
    const fromPartial = MsgSubmitProposal.fromPartial(request);
    const data = MsgSubmitProposal.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'SubmitProposal',
      data,
    );
    return promise.then(data =>
      MsgSubmitProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  WithdrawProposal(
    request: DeepPartial<MsgWithdrawProposal>,
  ): Promise<MsgWithdrawProposalResponse> {
    const fromPartial = MsgWithdrawProposal.fromPartial(request);
    const data = MsgWithdrawProposal.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.group.v1.Msg',
      'WithdrawProposal',
      data,
    );
    return promise.then(data =>
      MsgWithdrawProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  Vote(request: DeepPartial<MsgVote>): Promise<MsgVoteResponse> {
    const fromPartial = MsgVote.fromPartial(request);
    const data = MsgVote.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.group.v1.Msg', 'Vote', data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  Exec(request: DeepPartial<MsgExec>): Promise<MsgExecResponse> {
    const fromPartial = MsgExec.fromPartial(request);
    const data = MsgExec.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.group.v1.Msg', 'Exec', data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  LeaveGroup(
    request: DeepPartial<MsgLeaveGroup>,
  ): Promise<MsgLeaveGroupResponse> {
    const fromPartial = MsgLeaveGroup.fromPartial(request);
    const data = MsgLeaveGroup.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.group.v1.Msg', 'LeaveGroup', data);
    return promise.then(data =>
      MsgLeaveGroupResponse.decode(new _m0.Reader(data)),
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
