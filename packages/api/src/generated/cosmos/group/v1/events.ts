/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  ProposalExecutorResult,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
} from './types';

export const protobufPackage = 'cosmos.group.v1';

/** Since: cosmos-sdk 0.46 */

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  $type: 'cosmos.group.v1.EventCreateGroup';
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  $type: 'cosmos.group.v1.EventUpdateGroup';
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  $type: 'cosmos.group.v1.EventCreateGroupPolicy';
  /** address is the account address of the group policy. */
  address: string;
}

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  $type: 'cosmos.group.v1.EventUpdateGroupPolicy';
  /** address is the account address of the group policy. */
  address: string;
}

/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  $type: 'cosmos.group.v1.EventSubmitProposal';
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  $type: 'cosmos.group.v1.EventWithdrawProposal';
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  $type: 'cosmos.group.v1.EventVote';
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  $type: 'cosmos.group.v1.EventExec';
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}

/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  $type: 'cosmos.group.v1.EventLeaveGroup';
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** address is the account address of the group member. */
  address: string;
}

function createBaseEventCreateGroup(): EventCreateGroup {
  return { $type: 'cosmos.group.v1.EventCreateGroup', groupId: Long.UZERO };
}

export const EventCreateGroup = {
  $type: 'cosmos.group.v1.EventCreateGroup' as const,

  encode(
    message: EventCreateGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
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

  fromJSON(object: any): EventCreateGroup {
    return {
      $type: EventCreateGroup.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(
    object: I,
  ): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCreateGroup.$type, EventCreateGroup);

function createBaseEventUpdateGroup(): EventUpdateGroup {
  return { $type: 'cosmos.group.v1.EventUpdateGroup', groupId: Long.UZERO };
}

export const EventUpdateGroup = {
  $type: 'cosmos.group.v1.EventUpdateGroup' as const,

  encode(
    message: EventUpdateGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
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

  fromJSON(object: any): EventUpdateGroup {
    return {
      $type: EventUpdateGroup.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateGroup>, I>>(
    object: I,
  ): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventUpdateGroup.$type, EventUpdateGroup);

function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return { $type: 'cosmos.group.v1.EventCreateGroupPolicy', address: '' };
}

export const EventCreateGroupPolicy = {
  $type: 'cosmos.group.v1.EventCreateGroupPolicy' as const,

  encode(
    message: EventCreateGroupPolicy,
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
  ): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
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

  fromJSON(object: any): EventCreateGroupPolicy {
    return {
      $type: EventCreateGroupPolicy.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateGroupPolicy>, I>>(
    object: I,
  ): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventCreateGroupPolicy.$type, EventCreateGroupPolicy);

function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return { $type: 'cosmos.group.v1.EventUpdateGroupPolicy', address: '' };
}

export const EventUpdateGroupPolicy = {
  $type: 'cosmos.group.v1.EventUpdateGroupPolicy' as const,

  encode(
    message: EventUpdateGroupPolicy,
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
  ): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
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

  fromJSON(object: any): EventUpdateGroupPolicy {
    return {
      $type: EventUpdateGroupPolicy.$type,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateGroupPolicy>, I>>(
    object: I,
  ): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventUpdateGroupPolicy.$type, EventUpdateGroupPolicy);

function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    $type: 'cosmos.group.v1.EventSubmitProposal',
    proposalId: Long.UZERO,
  };
}

export const EventSubmitProposal = {
  $type: 'cosmos.group.v1.EventSubmitProposal' as const,

  encode(
    message: EventSubmitProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
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

  fromJSON(object: any): EventSubmitProposal {
    return {
      $type: EventSubmitProposal.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSubmitProposal>, I>>(
    object: I,
  ): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventSubmitProposal.$type, EventSubmitProposal);

function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    $type: 'cosmos.group.v1.EventWithdrawProposal',
    proposalId: Long.UZERO,
  };
}

export const EventWithdrawProposal = {
  $type: 'cosmos.group.v1.EventWithdrawProposal' as const,

  encode(
    message: EventWithdrawProposal,
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
  ): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
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

  fromJSON(object: any): EventWithdrawProposal {
    return {
      $type: EventWithdrawProposal.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawProposal>, I>>(
    object: I,
  ): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventWithdrawProposal.$type, EventWithdrawProposal);

function createBaseEventVote(): EventVote {
  return { $type: 'cosmos.group.v1.EventVote', proposalId: Long.UZERO };
}

export const EventVote = {
  $type: 'cosmos.group.v1.EventVote' as const,

  encode(
    message: EventVote,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
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

  fromJSON(object: any): EventVote {
    return {
      $type: EventVote.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(
    object: I,
  ): EventVote {
    const message = createBaseEventVote();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventVote.$type, EventVote);

function createBaseEventExec(): EventExec {
  return {
    $type: 'cosmos.group.v1.EventExec',
    proposalId: Long.UZERO,
    result: 0,
    logs: '',
  };
}

export const EventExec = {
  $type: 'cosmos.group.v1.EventExec' as const,

  encode(
    message: EventExec,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== '') {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    return {
      $type: EventExec.$type,
      proposalId: isSet(object.proposalId)
        ? Long.fromString(object.proposalId)
        : Long.UZERO,
      result: isSet(object.result)
        ? proposalExecutorResultFromJSON(object.result)
        : 0,
      logs: isSet(object.logs) ? String(object.logs) : '',
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.result !== undefined &&
      (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExec>, I>>(
    object: I,
  ): EventExec {
    const message = createBaseEventExec();
    message.proposalId =
      object.proposalId !== undefined && object.proposalId !== null
        ? Long.fromValue(object.proposalId)
        : Long.UZERO;
    message.result = object.result ?? 0;
    message.logs = object.logs ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventExec.$type, EventExec);

function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    $type: 'cosmos.group.v1.EventLeaveGroup',
    groupId: Long.UZERO,
    address: '',
  };
}

export const EventLeaveGroup = {
  $type: 'cosmos.group.v1.EventLeaveGroup' as const,

  encode(
    message: EventLeaveGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
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

  fromJSON(object: any): EventLeaveGroup {
    return {
      $type: EventLeaveGroup.$type,
      groupId: isSet(object.groupId)
        ? Long.fromString(object.groupId)
        : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLeaveGroup>, I>>(
    object: I,
  ): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? Long.fromValue(object.groupId)
        : Long.UZERO;
    message.address = object.address ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventLeaveGroup.$type, EventLeaveGroup);

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
