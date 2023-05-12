/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "regen.group.v1alpha1";

/** Choice defines available types of choices for voting. */
export enum Choice {
  /** CHOICE_UNSPECIFIED - CHOICE_UNSPECIFIED defines a no-op voting choice. */
  CHOICE_UNSPECIFIED = 0,
  /** CHOICE_NO - CHOICE_NO defines a no voting choice. */
  CHOICE_NO = 1,
  /** CHOICE_YES - CHOICE_YES defines a yes voting choice. */
  CHOICE_YES = 2,
  /** CHOICE_ABSTAIN - CHOICE_ABSTAIN defines an abstaining voting choice. */
  CHOICE_ABSTAIN = 3,
  /** CHOICE_VETO - CHOICE_VETO defines a voting choice with veto. */
  CHOICE_VETO = 4,
  UNRECOGNIZED = -1,
}

export function choiceFromJSON(object: any): Choice {
  switch (object) {
    case 0:
    case "CHOICE_UNSPECIFIED":
      return Choice.CHOICE_UNSPECIFIED;
    case 1:
    case "CHOICE_NO":
      return Choice.CHOICE_NO;
    case 2:
    case "CHOICE_YES":
      return Choice.CHOICE_YES;
    case 3:
    case "CHOICE_ABSTAIN":
      return Choice.CHOICE_ABSTAIN;
    case 4:
    case "CHOICE_VETO":
      return Choice.CHOICE_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Choice.UNRECOGNIZED;
  }
}

export function choiceToJSON(object: Choice): string {
  switch (object) {
    case Choice.CHOICE_UNSPECIFIED:
      return "CHOICE_UNSPECIFIED";
    case Choice.CHOICE_NO:
      return "CHOICE_NO";
    case Choice.CHOICE_YES:
      return "CHOICE_YES";
    case Choice.CHOICE_ABSTAIN:
      return "CHOICE_ABSTAIN";
    case Choice.CHOICE_VETO:
      return "CHOICE_VETO";
    case Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface Member {
  $type: "regen.group.v1alpha1.Member";
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata to attached to the member. */
  metadata: Uint8Array;
}

/** Members defines a repeated slice of Member objects. */
export interface Members {
  $type: "regen.group.v1alpha1.Members";
  /** members is the list of members. */
  members: Member[];
}

/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicy {
  $type: "regen.group.v1alpha1.ThresholdDecisionPolicy";
  /**
   * threshold is the minimum weighted sum of yes votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;
  /**
   * timeout is the duration from submission of a proposal to the end of voting
   * period Within this times votes and exec messages can be submitted.
   */
  timeout?: Duration;
}

/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
  $type: "regen.group.v1alpha1.GroupInfo";
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** admin is the account address of the group's admin. */
  admin: string;
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: Uint8Array;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */
  version: Long;
  /** total_weight is the sum of the group members' weights. */
  totalWeight: string;
}

/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
  $type: "regen.group.v1alpha1.GroupMember";
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** member is the member data. */
  member?: Member;
}

/**
 * GroupAccountInfo represents the high-level on-chain information for a group
 * account.
 */
export interface GroupAccountInfo {
  $type: "regen.group.v1alpha1.GroupAccountInfo";
  /** address is the group account address. */
  address: string;
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** admin is the account address of the group admin. */
  admin: string;
  /** metadata is any arbitrary metadata to attached to the group account. */
  metadata: Uint8Array;
  /**
   * version is used to track changes to a group's GroupAccountInfo structure
   * that would create a different result on a running proposal.
   */
  version: Long;
  /** decision_policy specifies the group account's decision policy. */
  decisionPolicy?: Any;
  /**
   * derivation_key is the "derivation" key of the group account,
   * which is needed to derive the group root module key and execute proposals.
   */
  derivationKey: Uint8Array;
}

/**
 * Proposal defines a group proposal. Any member of a group can submit a
 * proposal for a group account to decide upon. A proposal consists of a set of
 * `sdk.Msg`s that will be executed if the proposal passes as well as some
 * optional metadata associated with the proposal.
 */
export interface Proposal {
  $type: "regen.group.v1alpha1.Proposal";
  /** proposal_id is the unique id of the proposal. */
  proposalId: Long;
  /** address is the group account address. */
  address: string;
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: Uint8Array;
  /** proposers are the account addresses of the proposers. */
  proposers: string[];
  /** submitted_at is a timestamp specifying when a proposal was submitted. */
  submittedAt?: Date;
  /**
   * group_version tracks the version of the group that this proposal
   * corresponds to. When group membership is changed, existing proposals from
   * previous group versions will become invalid.
   */
  groupVersion: Long;
  /**
   * group_account_version tracks the version of the group account that this
   * proposal corresponds to. When a decision policy is changed, existing
   * proposals from previous policy versions will become invalid.
   */
  groupAccountVersion: Long;
  /**
   * Status represents the high level position in the life cycle of the
   * proposal. Initial value is Submitted.
   */
  status: Proposal_Status;
  /**
   * result is the final result based on the votes and election rule. Initial
   * value is unfinalized. The result is persisted so that clients can always
   * rely on this state and not have to replicate the logic.
   */
  result: Proposal_Result;
  /** vote_state contains the sums of all weighted votes for this proposal. */
  voteState?: Tally;
  /**
   * timeout is the timestamp of the block where the proposal execution times
   * out. Header times of the votes and execution messages must be before this
   * end time to be included in the election. After the timeout timestamp the
   * proposal can not be executed anymore and should be considered pending
   * delete.
   */
  timeout?: Date;
  /**
   * executor_result is the final result based on the votes and election rule.
   * Initial value is NotRun.
   */
  executorResult: Proposal_ExecutorResult;
  /** msgs is a list of Msgs that will be executed if the proposal passes. */
  msgs: Any[];
}

/** Status defines proposal statuses. */
export enum Proposal_Status {
  /** STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_SUBMITTED - Initial status of a proposal when persisted. */
  STATUS_SUBMITTED = 1,
  /** STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
  STATUS_CLOSED = 2,
  /**
   * STATUS_ABORTED - Final status of a proposal when the group was modified before the final
   * tally.
   */
  STATUS_ABORTED = 3,
  UNRECOGNIZED = -1,
}

export function proposal_StatusFromJSON(object: any): Proposal_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Proposal_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_SUBMITTED":
      return Proposal_Status.STATUS_SUBMITTED;
    case 2:
    case "STATUS_CLOSED":
      return Proposal_Status.STATUS_CLOSED;
    case 3:
    case "STATUS_ABORTED":
      return Proposal_Status.STATUS_ABORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_Status.UNRECOGNIZED;
  }
}

export function proposal_StatusToJSON(object: Proposal_Status): string {
  switch (object) {
    case Proposal_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Proposal_Status.STATUS_SUBMITTED:
      return "STATUS_SUBMITTED";
    case Proposal_Status.STATUS_CLOSED:
      return "STATUS_CLOSED";
    case Proposal_Status.STATUS_ABORTED:
      return "STATUS_ABORTED";
    case Proposal_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Result defines types of proposal results. */
export enum Proposal_Result {
  /** RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
  RESULT_UNSPECIFIED = 0,
  /** RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
  RESULT_UNFINALIZED = 1,
  /** RESULT_ACCEPTED - Final result of the tally */
  RESULT_ACCEPTED = 2,
  /** RESULT_REJECTED - Final result of the tally */
  RESULT_REJECTED = 3,
  UNRECOGNIZED = -1,
}

export function proposal_ResultFromJSON(object: any): Proposal_Result {
  switch (object) {
    case 0:
    case "RESULT_UNSPECIFIED":
      return Proposal_Result.RESULT_UNSPECIFIED;
    case 1:
    case "RESULT_UNFINALIZED":
      return Proposal_Result.RESULT_UNFINALIZED;
    case 2:
    case "RESULT_ACCEPTED":
      return Proposal_Result.RESULT_ACCEPTED;
    case 3:
    case "RESULT_REJECTED":
      return Proposal_Result.RESULT_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_Result.UNRECOGNIZED;
  }
}

export function proposal_ResultToJSON(object: Proposal_Result): string {
  switch (object) {
    case Proposal_Result.RESULT_UNSPECIFIED:
      return "RESULT_UNSPECIFIED";
    case Proposal_Result.RESULT_UNFINALIZED:
      return "RESULT_UNFINALIZED";
    case Proposal_Result.RESULT_ACCEPTED:
      return "RESULT_ACCEPTED";
    case Proposal_Result.RESULT_REJECTED:
      return "RESULT_REJECTED";
    case Proposal_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ExecutorResult defines types of proposal executor results. */
export enum Proposal_ExecutorResult {
  /** EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  EXECUTOR_RESULT_UNSPECIFIED = 0,
  /** EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  EXECUTOR_RESULT_NOT_RUN = 1,
  /** EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  EXECUTOR_RESULT_SUCCESS = 2,
  /** EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function proposal_ExecutorResultFromJSON(object: any): Proposal_ExecutorResult {
  switch (object) {
    case 0:
    case "EXECUTOR_RESULT_UNSPECIFIED":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "EXECUTOR_RESULT_NOT_RUN":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "EXECUTOR_RESULT_SUCCESS":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "EXECUTOR_RESULT_FAILURE":
      return Proposal_ExecutorResult.EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_ExecutorResult.UNRECOGNIZED;
  }
}

export function proposal_ExecutorResultToJSON(object: Proposal_ExecutorResult): string {
  switch (object) {
    case Proposal_ExecutorResult.EXECUTOR_RESULT_UNSPECIFIED:
      return "EXECUTOR_RESULT_UNSPECIFIED";
    case Proposal_ExecutorResult.EXECUTOR_RESULT_NOT_RUN:
      return "EXECUTOR_RESULT_NOT_RUN";
    case Proposal_ExecutorResult.EXECUTOR_RESULT_SUCCESS:
      return "EXECUTOR_RESULT_SUCCESS";
    case Proposal_ExecutorResult.EXECUTOR_RESULT_FAILURE:
      return "EXECUTOR_RESULT_FAILURE";
    case Proposal_ExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Tally represents the sum of weighted votes. */
export interface Tally {
  $type: "regen.group.v1alpha1.Tally";
  /** yes_count is the weighted sum of yes votes. */
  yesCount: string;
  /** no_count is the weighted sum of no votes. */
  noCount: string;
  /** abstain_count is the weighted sum of abstainers */
  abstainCount: string;
  /** veto_count is the weighted sum of vetoes. */
  vetoCount: string;
}

/** Vote represents a vote for a proposal. */
export interface Vote {
  $type: "regen.group.v1alpha1.Vote";
  /** proposal is the unique ID of the proposal. */
  proposalId: Long;
  /** voter is the account address of the voter. */
  voter: string;
  /** choice is the voter's choice on the proposal. */
  choice: Choice;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: Uint8Array;
  /** submitted_at is the timestamp when the vote was submitted. */
  submittedAt?: Date;
}

function createBaseMember(): Member {
  return { $type: "regen.group.v1alpha1.Member", address: "", weight: "", metadata: new Uint8Array() };
}

export const Member = {
  $type: "regen.group.v1alpha1.Member" as const,

  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
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

  fromJSON(object: any): Member {
    return {
      $type: Member.$type,
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<Member>): Member {
    return Member.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(Member.$type, Member);

function createBaseMembers(): Members {
  return { $type: "regen.group.v1alpha1.Members", members: [] };
}

export const Members = {
  $type: "regen.group.v1alpha1.Members" as const,

  encode(message: Members, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Members {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Members {
    return {
      $type: Members.$type,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromJSON(e)) : [],
    };
  },

  toJSON(message: Members): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Members>): Members {
    return Members.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Members>): Members {
    const message = createBaseMembers();
    message.members = object.members?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Members.$type, Members);

function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return { $type: "regen.group.v1alpha1.ThresholdDecisionPolicy", threshold: "", timeout: undefined };
}

export const ThresholdDecisionPolicy = {
  $type: "regen.group.v1alpha1.ThresholdDecisionPolicy" as const,

  encode(message: ThresholdDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ThresholdDecisionPolicy {
    return {
      $type: ThresholdDecisionPolicy.$type,
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: ThresholdDecisionPolicy): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.timeout !== undefined && (obj.timeout = message.timeout ? Duration.toJSON(message.timeout) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ThresholdDecisionPolicy.$type, ThresholdDecisionPolicy);

function createBaseGroupInfo(): GroupInfo {
  return {
    $type: "regen.group.v1alpha1.GroupInfo",
    groupId: Long.UZERO,
    admin: "",
    metadata: new Uint8Array(),
    version: Long.UZERO,
    totalWeight: "",
  };
}

export const GroupInfo = {
  $type: "regen.group.v1alpha1.GroupInfo" as const,

  encode(message: GroupInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.version = reader.uint64() as Long;
          break;
        case 5:
          message.totalWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupInfo {
    return {
      $type: GroupInfo.$type,
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
    };
  },

  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    return obj;
  },

  create(base?: DeepPartial<GroupInfo>): GroupInfo {
    return GroupInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GroupInfo>): GroupInfo {
    const message = createBaseGroupInfo();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
      : Long.UZERO;
    message.totalWeight = object.totalWeight ?? "";
    return message;
  },
};

messageTypeRegistry.set(GroupInfo.$type, GroupInfo);

function createBaseGroupMember(): GroupMember {
  return { $type: "regen.group.v1alpha1.GroupMember", groupId: Long.UZERO, member: undefined };
}

export const GroupMember = {
  $type: "regen.group.v1alpha1.GroupMember" as const,

  encode(message: GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMember {
    return {
      $type: GroupMember.$type,
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GroupMember>): GroupMember {
    return GroupMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GroupMember>): GroupMember {
    const message = createBaseGroupMember();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.member = (object.member !== undefined && object.member !== null)
      ? Member.fromPartial(object.member)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GroupMember.$type, GroupMember);

function createBaseGroupAccountInfo(): GroupAccountInfo {
  return {
    $type: "regen.group.v1alpha1.GroupAccountInfo",
    address: "",
    groupId: Long.UZERO,
    admin: "",
    metadata: new Uint8Array(),
    version: Long.UZERO,
    decisionPolicy: undefined,
    derivationKey: new Uint8Array(),
  };
}

export const GroupAccountInfo = {
  $type: "regen.group.v1alpha1.GroupAccountInfo" as const,

  encode(message: GroupAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.derivationKey.length !== 0) {
      writer.uint32(58).bytes(message.derivationKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupAccountInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64() as Long;
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        case 5:
          message.version = reader.uint64() as Long;
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.derivationKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupAccountInfo {
    return {
      $type: GroupAccountInfo.$type,
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
      derivationKey: isSet(object.derivationKey) ? bytesFromBase64(object.derivationKey) : new Uint8Array(),
    };
  },

  toJSON(message: GroupAccountInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    message.derivationKey !== undefined &&
      (obj.derivationKey = base64FromBytes(
        message.derivationKey !== undefined ? message.derivationKey : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<GroupAccountInfo>): GroupAccountInfo {
    return GroupAccountInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GroupAccountInfo>): GroupAccountInfo {
    const message = createBaseGroupAccountInfo();
    message.address = object.address ?? "";
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
      : Long.UZERO;
    message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
      ? Any.fromPartial(object.decisionPolicy)
      : undefined;
    message.derivationKey = object.derivationKey ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(GroupAccountInfo.$type, GroupAccountInfo);

function createBaseProposal(): Proposal {
  return {
    $type: "regen.group.v1alpha1.Proposal",
    proposalId: Long.UZERO,
    address: "",
    metadata: new Uint8Array(),
    proposers: [],
    submittedAt: undefined,
    groupVersion: Long.UZERO,
    groupAccountVersion: Long.UZERO,
    status: 0,
    result: 0,
    voteState: undefined,
    timeout: undefined,
    executorResult: 0,
    msgs: [],
  };
}

export const Proposal = {
  $type: "regen.group.v1alpha1.Proposal" as const,

  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }
    if (message.submittedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.submittedAt), writer.uint32(42).fork()).ldelim();
    }
    if (!message.groupVersion.isZero()) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (!message.groupAccountVersion.isZero()) {
      writer.uint32(56).uint64(message.groupAccountVersion);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.result !== 0) {
      writer.uint32(72).int32(message.result);
    }
    if (message.voteState !== undefined) {
      Tally.encode(message.voteState, writer.uint32(82).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Timestamp.encode(toTimestamp(message.timeout), writer.uint32(90).fork()).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(96).int32(message.executorResult);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submittedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groupVersion = reader.uint64() as Long;
          break;
        case 7:
          message.groupAccountVersion = reader.uint64() as Long;
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.result = reader.int32() as any;
          break;
        case 10:
          message.voteState = Tally.decode(reader, reader.uint32());
          break;
        case 11:
          message.timeout = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.executorResult = reader.int32() as any;
          break;
        case 13:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      $type: Proposal.$type,
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      submittedAt: isSet(object.submittedAt) ? fromJsonTimestamp(object.submittedAt) : undefined,
      groupVersion: isSet(object.groupVersion) ? Long.fromValue(object.groupVersion) : Long.UZERO,
      groupAccountVersion: isSet(object.groupAccountVersion) ? Long.fromValue(object.groupAccountVersion) : Long.UZERO,
      status: isSet(object.status) ? proposal_StatusFromJSON(object.status) : 0,
      result: isSet(object.result) ? proposal_ResultFromJSON(object.result) : 0,
      voteState: isSet(object.voteState) ? Tally.fromJSON(object.voteState) : undefined,
      timeout: isSet(object.timeout) ? fromJsonTimestamp(object.timeout) : undefined,
      executorResult: isSet(object.executorResult) ? proposal_ExecutorResultFromJSON(object.executorResult) : 0,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.submittedAt !== undefined && (obj.submittedAt = message.submittedAt.toISOString());
    message.groupVersion !== undefined && (obj.groupVersion = (message.groupVersion || Long.UZERO).toString());
    message.groupAccountVersion !== undefined &&
      (obj.groupAccountVersion = (message.groupAccountVersion || Long.UZERO).toString());
    message.status !== undefined && (obj.status = proposal_StatusToJSON(message.status));
    message.result !== undefined && (obj.result = proposal_ResultToJSON(message.result));
    message.voteState !== undefined &&
      (obj.voteState = message.voteState ? Tally.toJSON(message.voteState) : undefined);
    message.timeout !== undefined && (obj.timeout = message.timeout.toISOString());
    message.executorResult !== undefined &&
      (obj.executorResult = proposal_ExecutorResultToJSON(message.executorResult));
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Proposal>): Proposal {
    return Proposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
      ? Long.fromValue(object.proposalId)
      : Long.UZERO;
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.proposers = object.proposers?.map((e) => e) || [];
    message.submittedAt = object.submittedAt ?? undefined;
    message.groupVersion = (object.groupVersion !== undefined && object.groupVersion !== null)
      ? Long.fromValue(object.groupVersion)
      : Long.UZERO;
    message.groupAccountVersion = (object.groupAccountVersion !== undefined && object.groupAccountVersion !== null)
      ? Long.fromValue(object.groupAccountVersion)
      : Long.UZERO;
    message.status = object.status ?? 0;
    message.result = object.result ?? 0;
    message.voteState = (object.voteState !== undefined && object.voteState !== null)
      ? Tally.fromPartial(object.voteState)
      : undefined;
    message.timeout = object.timeout ?? undefined;
    message.executorResult = object.executorResult ?? 0;
    message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Proposal.$type, Proposal);

function createBaseTally(): Tally {
  return { $type: "regen.group.v1alpha1.Tally", yesCount: "", noCount: "", abstainCount: "", vetoCount: "" };
}

export const Tally = {
  $type: "regen.group.v1alpha1.Tally" as const,

  encode(message: Tally, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.noCount !== "") {
      writer.uint32(18).string(message.noCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(26).string(message.abstainCount);
    }
    if (message.vetoCount !== "") {
      writer.uint32(34).string(message.vetoCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tally {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTally();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.noCount = reader.string();
          break;
        case 3:
          message.abstainCount = reader.string();
          break;
        case 4:
          message.vetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tally {
    return {
      $type: Tally.$type,
      yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
      noCount: isSet(object.noCount) ? String(object.noCount) : "",
      abstainCount: isSet(object.abstainCount) ? String(object.abstainCount) : "",
      vetoCount: isSet(object.vetoCount) ? String(object.vetoCount) : "",
    };
  },

  toJSON(message: Tally): unknown {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.vetoCount !== undefined && (obj.vetoCount = message.vetoCount);
    return obj;
  },

  create(base?: DeepPartial<Tally>): Tally {
    return Tally.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Tally>): Tally {
    const message = createBaseTally();
    message.yesCount = object.yesCount ?? "";
    message.noCount = object.noCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.vetoCount = object.vetoCount ?? "";
    return message;
  },
};

messageTypeRegistry.set(Tally.$type, Tally);

function createBaseVote(): Vote {
  return {
    $type: "regen.group.v1alpha1.Vote",
    proposalId: Long.UZERO,
    voter: "",
    choice: 0,
    metadata: new Uint8Array(),
    submittedAt: undefined,
  };
}

export const Vote = {
  $type: "regen.group.v1alpha1.Vote" as const,

  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.choice !== 0) {
      writer.uint32(24).int32(message.choice);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.submittedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.submittedAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
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
          message.submittedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      $type: Vote.$type,
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      choice: isSet(object.choice) ? choiceFromJSON(object.choice) : 0,
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      submittedAt: isSet(object.submittedAt) ? fromJsonTimestamp(object.submittedAt) : undefined,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.choice !== undefined && (obj.choice = choiceToJSON(message.choice));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.submittedAt !== undefined && (obj.submittedAt = message.submittedAt.toISOString());
    return obj;
  },

  create(base?: DeepPartial<Vote>): Vote {
    return Vote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
      ? Long.fromValue(object.proposalId)
      : Long.UZERO;
    message.voter = object.voter ?? "";
    message.choice = object.choice ?? 0;
    message.metadata = object.metadata ?? new Uint8Array();
    message.submittedAt = object.submittedAt ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Vote.$type, Vote);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
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
