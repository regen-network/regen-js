/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../google/protobuf/any';
import {
  Choice,
  Member,
  choiceFromJSON,
  choiceToJSON,
} from '../../../regen/group/v1alpha1/types';

export const protobufPackage = 'regen.group.v1alpha1';

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
  $type: 'regen.group.v1alpha1.MsgCreateGroup';
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: Member[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: Uint8Array;
}

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  $type: 'regen.group.v1alpha1.MsgCreateGroupResponse';
  /** group_id is the unique ID of the newly created group. */
  groupId: Long;
}

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMembers';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: Member[];
}

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMembersResponse';
}

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAdmin';
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAdminResponse';
}

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMetadata';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** metadata is the updated group's metadata. */
  metadata: Uint8Array;
}

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMetadataResponse';
}

/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccount {
  $type: 'regen.group.v1alpha1.MsgCreateGroupAccount';
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** metadata is any arbitrary metadata to attached to the group account. */
  metadata: Uint8Array;
  /** decision_policy specifies the group account's decision policy. */
  decisionPolicy?: Any;
}

/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponse {
  $type: 'regen.group.v1alpha1.MsgCreateGroupAccountResponse';
  /** address is the account address of the newly created group account. */
  address: string;
}

/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdmin {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountAdmin';
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the group account address. */
  address: string;
  /** new_admin is the new group account admin. */
  newAdmin: string;
}

/** MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin response type. */
export interface MsgUpdateGroupAccountAdminResponse {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse';
}

/** MsgUpdateGroupAccountDecisionPolicy is the Msg/UpdateGroupAccountDecisionPolicy request type. */
export interface MsgUpdateGroupAccountDecisionPolicy {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy';
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the group account address. */
  address: string;
  /** decision_policy is the updated group account decision policy. */
  decisionPolicy?: Any;
}

/** MsgUpdateGroupAccountDecisionPolicyResponse is the Msg/UpdateGroupAccountDecisionPolicy response type. */
export interface MsgUpdateGroupAccountDecisionPolicyResponse {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse';
}

/** MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request type. */
export interface MsgUpdateGroupAccountMetadata {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountMetadata';
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the group account address. */
  address: string;
  /** metadata is the updated group account metadata. */
  metadata: Uint8Array;
}

/** MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata response type. */
export interface MsgUpdateGroupAccountMetadataResponse {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse';
}

/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposal {
  $type: 'regen.group.v1alpha1.MsgCreateProposal';
  /** address is the group account address. */
  address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: Uint8Array;
  /** msgs is a list of Msgs that will be executed if the proposal passes. */
  msgs: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}

/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponse {
  $type: 'regen.group.v1alpha1.MsgCreateProposalResponse';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  $type: 'regen.group.v1alpha1.MsgVote';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the voter account address. */
  voter: string;
  /** choice is the voter's choice on the proposal. */
  choice: Choice;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: Uint8Array;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
  $type: 'regen.group.v1alpha1.MsgVoteResponse';
}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  $type: 'regen.group.v1alpha1.MsgExec';
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** signer is the account address used to execute the proposal. */
  signer: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
  $type: 'regen.group.v1alpha1.MsgExecResponse';
}

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    $type: 'regen.group.v1alpha1.MsgCreateGroup',
    admin: '',
    members: [],
    metadata: new Uint8Array(),
  };
}

export const MsgCreateGroup = {
  $type: 'regen.group.v1alpha1.MsgCreateGroup' as const,

  encode(
    message: MsgCreateGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
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
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.bytes();
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
        ? object.members.map((e: any) => Member.fromJSON(e))
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e =>
        e ? Member.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroup>, I>>(
    object: I,
  ): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? '';
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgCreateGroup.$type, MsgCreateGroup);

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    $type: 'regen.group.v1alpha1.MsgCreateGroupResponse',
    groupId: Long.UZERO,
  };
}

export const MsgCreateGroupResponse = {
  $type: 'regen.group.v1alpha1.MsgCreateGroupResponse' as const,

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
    $type: 'regen.group.v1alpha1.MsgUpdateGroupMembers',
    admin: '',
    groupId: Long.UZERO,
    memberUpdates: [],
  };
}

export const MsgUpdateGroupMembers = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMembers' as const,

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
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
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
        ? object.memberUpdates.map((e: any) => Member.fromJSON(e))
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
        e ? Member.toJSON(e) : undefined,
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
      object.memberUpdates?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateGroupMembers.$type, MsgUpdateGroupMembers);

function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return { $type: 'regen.group.v1alpha1.MsgUpdateGroupMembersResponse' };
}

export const MsgUpdateGroupMembersResponse = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMembersResponse' as const,

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
    $type: 'regen.group.v1alpha1.MsgUpdateGroupAdmin',
    admin: '',
    groupId: Long.UZERO,
    newAdmin: '',
  };
}

export const MsgUpdateGroupAdmin = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAdmin' as const,

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
  return { $type: 'regen.group.v1alpha1.MsgUpdateGroupAdminResponse' };
}

export const MsgUpdateGroupAdminResponse = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAdminResponse' as const,

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
    $type: 'regen.group.v1alpha1.MsgUpdateGroupMetadata',
    admin: '',
    groupId: Long.UZERO,
    metadata: new Uint8Array(),
  };
}

export const MsgUpdateGroupMetadata = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMetadata' as const,

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
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
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
          message.metadata = reader.bytes();
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
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
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
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateGroupMetadata.$type, MsgUpdateGroupMetadata);

function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return { $type: 'regen.group.v1alpha1.MsgUpdateGroupMetadataResponse' };
}

export const MsgUpdateGroupMetadataResponse = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupMetadataResponse' as const,

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

function createBaseMsgCreateGroupAccount(): MsgCreateGroupAccount {
  return {
    $type: 'regen.group.v1alpha1.MsgCreateGroupAccount',
    admin: '',
    groupId: Long.UZERO,
    metadata: new Uint8Array(),
    decisionPolicy: undefined,
  };
}

export const MsgCreateGroupAccount = {
  $type: 'regen.group.v1alpha1.MsgCreateGroupAccount' as const,

  encode(
    message: MsgCreateGroupAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateGroupAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupAccount();
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
          message.metadata = reader.bytes();
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

  fromJSON(object: any): MsgCreateGroupAccount {
    return {
      $type: MsgCreateGroupAccount.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: MsgCreateGroupAccount): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupAccount>, I>>(
    object: I,
  ): MsgCreateGroupAccount {
    const message = createBaseMsgCreateGroupAccount();
    message.admin = object.admin ?? '';
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.metadata = object.metadata ?? new Uint8Array();
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateGroupAccount.$type, MsgCreateGroupAccount);

function createBaseMsgCreateGroupAccountResponse(): MsgCreateGroupAccountResponse {
  return {
    $type: 'regen.group.v1alpha1.MsgCreateGroupAccountResponse',
    address: '',
  };
}

export const MsgCreateGroupAccountResponse = {
  $type: 'regen.group.v1alpha1.MsgCreateGroupAccountResponse' as const,

  encode(
    message: MsgCreateGroupAccountResponse,
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
  ): MsgCreateGroupAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupAccountResponse();
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

  fromJSON(object: any): MsgCreateGroupAccountResponse {
    return {
      $type: MsgCreateGroupAccountResponse.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: MsgCreateGroupAccountResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGroupAccountResponse>, I>>(
    object: I,
  ): MsgCreateGroupAccountResponse {
    const message = createBaseMsgCreateGroupAccountResponse();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateGroupAccountResponse.$type,
  MsgCreateGroupAccountResponse,
);

function createBaseMsgUpdateGroupAccountAdmin(): MsgUpdateGroupAccountAdmin {
  return {
    $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountAdmin',
    admin: '',
    address: '',
    newAdmin: '',
  };
}

export const MsgUpdateGroupAccountAdmin = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountAdmin' as const,

  encode(
    message: MsgUpdateGroupAccountAdmin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.newAdmin !== '') {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAccountAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): MsgUpdateGroupAccountAdmin {
    return {
      $type: MsgUpdateGroupAccountAdmin.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      address: isSet(object.address) ? String(object.address) : '',
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : '',
    };
  },

  toJSON(message: MsgUpdateGroupAccountAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupAccountAdmin>, I>>(
    object: I,
  ): MsgUpdateGroupAccountAdmin {
    const message = createBaseMsgUpdateGroupAccountAdmin();
    message.admin = object.admin ?? '';
    message.address = object.address ?? '';
    message.newAdmin = object.newAdmin ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAccountAdmin.$type,
  MsgUpdateGroupAccountAdmin,
);

function createBaseMsgUpdateGroupAccountAdminResponse(): MsgUpdateGroupAccountAdminResponse {
  return { $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse' };
}

export const MsgUpdateGroupAccountAdminResponse = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse' as const,

  encode(
    _: MsgUpdateGroupAccountAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAccountAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountAdminResponse();
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

  fromJSON(_: any): MsgUpdateGroupAccountAdminResponse {
    return {
      $type: MsgUpdateGroupAccountAdminResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupAccountAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupAccountAdminResponse>, I>
  >(_: I): MsgUpdateGroupAccountAdminResponse {
    const message = createBaseMsgUpdateGroupAccountAdminResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAccountAdminResponse.$type,
  MsgUpdateGroupAccountAdminResponse,
);

function createBaseMsgUpdateGroupAccountDecisionPolicy(): MsgUpdateGroupAccountDecisionPolicy {
  return {
    $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy',
    admin: '',
    address: '',
    decisionPolicy: undefined,
  };
}

export const MsgUpdateGroupAccountDecisionPolicy = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy' as const,

  encode(
    message: MsgUpdateGroupAccountDecisionPolicy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAccountDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): MsgUpdateGroupAccountDecisionPolicy {
    return {
      $type: MsgUpdateGroupAccountDecisionPolicy.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      address: isSet(object.address) ? String(object.address) : '',
      decisionPolicy: isSet(object.decisionPolicy)
        ? Any.fromJSON(object.decisionPolicy)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateGroupAccountDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? Any.toJSON(message.decisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupAccountDecisionPolicy>, I>
  >(object: I): MsgUpdateGroupAccountDecisionPolicy {
    const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
    message.admin = object.admin ?? '';
    message.address = object.address ?? '';
    message.decisionPolicy =
      object.decisionPolicy !== undefined && object.decisionPolicy !== null
        ? Any.fromPartial(object.decisionPolicy)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAccountDecisionPolicy.$type,
  MsgUpdateGroupAccountDecisionPolicy,
);

function createBaseMsgUpdateGroupAccountDecisionPolicyResponse(): MsgUpdateGroupAccountDecisionPolicyResponse {
  return {
    $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse',
  };
}

export const MsgUpdateGroupAccountDecisionPolicyResponse = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse' as const,

  encode(
    _: MsgUpdateGroupAccountDecisionPolicyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAccountDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
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

  fromJSON(_: any): MsgUpdateGroupAccountDecisionPolicyResponse {
    return {
      $type: MsgUpdateGroupAccountDecisionPolicyResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupAccountDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupAccountDecisionPolicyResponse>, I>
  >(_: I): MsgUpdateGroupAccountDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAccountDecisionPolicyResponse.$type,
  MsgUpdateGroupAccountDecisionPolicyResponse,
);

function createBaseMsgUpdateGroupAccountMetadata(): MsgUpdateGroupAccountMetadata {
  return {
    $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountMetadata',
    admin: '',
    address: '',
    metadata: new Uint8Array(),
  };
}

export const MsgUpdateGroupAccountMetadata = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountMetadata' as const,

  encode(
    message: MsgUpdateGroupAccountMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAccountMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAccountMetadata {
    return {
      $type: MsgUpdateGroupAccountMetadata.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      address: isSet(object.address) ? String(object.address) : '',
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgUpdateGroupAccountMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupAccountMetadata>, I>>(
    object: I,
  ): MsgUpdateGroupAccountMetadata {
    const message = createBaseMsgUpdateGroupAccountMetadata();
    message.admin = object.admin ?? '';
    message.address = object.address ?? '';
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAccountMetadata.$type,
  MsgUpdateGroupAccountMetadata,
);

function createBaseMsgUpdateGroupAccountMetadataResponse(): MsgUpdateGroupAccountMetadataResponse {
  return {
    $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse',
  };
}

export const MsgUpdateGroupAccountMetadataResponse = {
  $type: 'regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse' as const,

  encode(
    _: MsgUpdateGroupAccountMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateGroupAccountMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAccountMetadataResponse();
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

  fromJSON(_: any): MsgUpdateGroupAccountMetadataResponse {
    return {
      $type: MsgUpdateGroupAccountMetadataResponse.$type,
    };
  },

  toJSON(_: MsgUpdateGroupAccountMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateGroupAccountMetadataResponse>, I>
  >(_: I): MsgUpdateGroupAccountMetadataResponse {
    const message = createBaseMsgUpdateGroupAccountMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateGroupAccountMetadataResponse.$type,
  MsgUpdateGroupAccountMetadataResponse,
);

function createBaseMsgCreateProposal(): MsgCreateProposal {
  return {
    $type: 'regen.group.v1alpha1.MsgCreateProposal',
    address: '',
    proposers: [],
    metadata: new Uint8Array(),
    msgs: [],
    exec: 0,
  };
}

export const MsgCreateProposal = {
  $type: 'regen.group.v1alpha1.MsgCreateProposal' as const,

  encode(
    message: MsgCreateProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgCreateProposal {
    return {
      $type: MsgCreateProposal.$type,
      address: isSet(object.address) ? String(object.address) : '',
      proposers: Array.isArray(object?.proposers)
        ? object.proposers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
      msgs: Array.isArray(object?.msgs)
        ? object.msgs.map((e: any) => Any.fromJSON(e))
        : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgCreateProposal): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProposal>, I>>(
    object: I,
  ): MsgCreateProposal {
    const message = createBaseMsgCreateProposal();
    message.address = object.address ?? '';
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateProposal.$type, MsgCreateProposal);

function createBaseMsgCreateProposalResponse(): MsgCreateProposalResponse {
  return {
    $type: 'regen.group.v1alpha1.MsgCreateProposalResponse',
    proposalId: Long.UZERO,
  };
}

export const MsgCreateProposalResponse = {
  $type: 'regen.group.v1alpha1.MsgCreateProposalResponse' as const,

  encode(
    message: MsgCreateProposalResponse,
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
  ): MsgCreateProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProposalResponse();
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

  fromJSON(object: any): MsgCreateProposalResponse {
    return {
      $type: MsgCreateProposalResponse.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProposalResponse>, I>>(
    object: I,
  ): MsgCreateProposalResponse {
    const message = createBaseMsgCreateProposalResponse();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateProposalResponse.$type,
  MsgCreateProposalResponse,
);

function createBaseMsgVote(): MsgVote {
  return {
    $type: 'regen.group.v1alpha1.MsgVote',
    proposalId: Long.UZERO,
    voter: '',
    choice: 0,
    metadata: new Uint8Array(),
    exec: 0,
  };
}

export const MsgVote = {
  $type: 'regen.group.v1alpha1.MsgVote' as const,

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
    if (message.choice !== 0) {
      writer.uint32(24).int32(message.choice);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
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
          message.choice = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.bytes();
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
      choice: isSet(object.choice) ? choiceFromJSON(object.choice) : 0,
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.choice !== undefined && (obj.choice = choiceToJSON(message.choice));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
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
    message.choice = object.choice ?? 0;
    message.metadata = object.metadata ?? new Uint8Array();
    message.exec = object.exec ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgVote.$type, MsgVote);

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return { $type: 'regen.group.v1alpha1.MsgVoteResponse' };
}

export const MsgVoteResponse = {
  $type: 'regen.group.v1alpha1.MsgVoteResponse' as const,

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
    $type: 'regen.group.v1alpha1.MsgExec',
    proposalId: Long.UZERO,
    signer: '',
  };
}

export const MsgExec = {
  $type: 'regen.group.v1alpha1.MsgExec' as const,

  encode(
    message: MsgExec,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.signer !== '') {
      writer.uint32(18).string(message.signer);
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
          message.signer = reader.string();
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
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.signer = object.signer ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgExec.$type, MsgExec);

function createBaseMsgExecResponse(): MsgExecResponse {
  return { $type: 'regen.group.v1alpha1.MsgExecResponse' };
}

export const MsgExecResponse = {
  $type: 'regen.group.v1alpha1.MsgExecResponse' as const,

  encode(
    _: MsgExecResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
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

  fromJSON(_: any): MsgExecResponse {
    return {
      $type: MsgExecResponse.$type,
    };
  },

  toJSON(_: MsgExecResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(
    _: I,
  ): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgExecResponse.$type, MsgExecResponse);

/** Msg is the regen.group.v1alpha1 Msg service. */
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
  /** CreateGroupAccount creates a new group account using given DecisionPolicy. */
  CreateGroupAccount(
    request: DeepPartial<MsgCreateGroupAccount>,
  ): Promise<MsgCreateGroupAccountResponse>;
  /** UpdateGroupAccountAdmin updates a group account admin. */
  UpdateGroupAccountAdmin(
    request: DeepPartial<MsgUpdateGroupAccountAdmin>,
  ): Promise<MsgUpdateGroupAccountAdminResponse>;
  /** UpdateGroupAccountDecisionPolicy allows a group account decision policy to be updated. */
  UpdateGroupAccountDecisionPolicy(
    request: DeepPartial<MsgUpdateGroupAccountDecisionPolicy>,
  ): Promise<MsgUpdateGroupAccountDecisionPolicyResponse>;
  /** UpdateGroupAccountMetadata updates a group account metadata. */
  UpdateGroupAccountMetadata(
    request: DeepPartial<MsgUpdateGroupAccountMetadata>,
  ): Promise<MsgUpdateGroupAccountMetadataResponse>;
  /** CreateProposal submits a new proposal. */
  CreateProposal(
    request: DeepPartial<MsgCreateProposal>,
  ): Promise<MsgCreateProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  Vote(request: DeepPartial<MsgVote>): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  Exec(request: DeepPartial<MsgExec>): Promise<MsgExecResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGroup = this.CreateGroup.bind(this);
    this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
    this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
    this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
    this.CreateGroupAccount = this.CreateGroupAccount.bind(this);
    this.UpdateGroupAccountAdmin = this.UpdateGroupAccountAdmin.bind(this);
    this.UpdateGroupAccountDecisionPolicy = this.UpdateGroupAccountDecisionPolicy.bind(
      this,
    );
    this.UpdateGroupAccountMetadata = this.UpdateGroupAccountMetadata.bind(
      this,
    );
    this.CreateProposal = this.CreateProposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Exec = this.Exec.bind(this);
  }
  CreateGroup(
    request: DeepPartial<MsgCreateGroup>,
  ): Promise<MsgCreateGroupResponse> {
    const fromPartial = MsgCreateGroup.fromPartial(request);
    const data = MsgCreateGroup.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Msg',
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
      'regen.group.v1alpha1.Msg',
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
      'regen.group.v1alpha1.Msg',
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
      'regen.group.v1alpha1.Msg',
      'UpdateGroupMetadata',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateGroupAccount(
    request: DeepPartial<MsgCreateGroupAccount>,
  ): Promise<MsgCreateGroupAccountResponse> {
    const fromPartial = MsgCreateGroupAccount.fromPartial(request);
    const data = MsgCreateGroupAccount.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Msg',
      'CreateGroupAccount',
      data,
    );
    return promise.then(data =>
      MsgCreateGroupAccountResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupAccountAdmin(
    request: DeepPartial<MsgUpdateGroupAccountAdmin>,
  ): Promise<MsgUpdateGroupAccountAdminResponse> {
    const fromPartial = MsgUpdateGroupAccountAdmin.fromPartial(request);
    const data = MsgUpdateGroupAccountAdmin.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Msg',
      'UpdateGroupAccountAdmin',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupAccountAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupAccountDecisionPolicy(
    request: DeepPartial<MsgUpdateGroupAccountDecisionPolicy>,
  ): Promise<MsgUpdateGroupAccountDecisionPolicyResponse> {
    const fromPartial = MsgUpdateGroupAccountDecisionPolicy.fromPartial(
      request,
    );
    const data = MsgUpdateGroupAccountDecisionPolicy.encode(
      fromPartial,
    ).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Msg',
      'UpdateGroupAccountDecisionPolicy',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupAccountDecisionPolicyResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateGroupAccountMetadata(
    request: DeepPartial<MsgUpdateGroupAccountMetadata>,
  ): Promise<MsgUpdateGroupAccountMetadataResponse> {
    const fromPartial = MsgUpdateGroupAccountMetadata.fromPartial(request);
    const data = MsgUpdateGroupAccountMetadata.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Msg',
      'UpdateGroupAccountMetadata',
      data,
    );
    return promise.then(data =>
      MsgUpdateGroupAccountMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateProposal(
    request: DeepPartial<MsgCreateProposal>,
  ): Promise<MsgCreateProposalResponse> {
    const fromPartial = MsgCreateProposal.fromPartial(request);
    const data = MsgCreateProposal.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.group.v1alpha1.Msg',
      'CreateProposal',
      data,
    );
    return promise.then(data =>
      MsgCreateProposalResponse.decode(new _m0.Reader(data)),
    );
  }

  Vote(request: DeepPartial<MsgVote>): Promise<MsgVoteResponse> {
    const fromPartial = MsgVote.fromPartial(request);
    const data = MsgVote.encode(fromPartial).finish();
    const promise = this.rpc.request('regen.group.v1alpha1.Msg', 'Vote', data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  Exec(request: DeepPartial<MsgExec>): Promise<MsgExecResponse> {
    const fromPartial = MsgExec.fromPartial(request);
    const data = MsgExec.encode(fromPartial).finish();
    const promise = this.rpc.request('regen.group.v1alpha1.Msg', 'Exec', data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
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
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
