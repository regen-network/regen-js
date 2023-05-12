/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "regen.group.v1alpha1";

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  $type: "regen.group.v1alpha1.EventCreateGroup";
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  $type: "regen.group.v1alpha1.EventUpdateGroup";
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccount {
  $type: "regen.group.v1alpha1.EventCreateGroupAccount";
  /** address is the address of the group account. */
  address: string;
}

/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccount {
  $type: "regen.group.v1alpha1.EventUpdateGroupAccount";
  /** address is the address of the group account. */
  address: string;
}

/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposal {
  $type: "regen.group.v1alpha1.EventCreateProposal";
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  $type: "regen.group.v1alpha1.EventVote";
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  $type: "regen.group.v1alpha1.EventExec";
  /** proposal_id is the unique ID of the proposal. */
  proposalId: Long;
}

function createBaseEventCreateGroup(): EventCreateGroup {
  return { $type: "regen.group.v1alpha1.EventCreateGroup", groupId: Long.UZERO };
}

export const EventCreateGroup = {
  $type: "regen.group.v1alpha1.EventCreateGroup" as const,

  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
    };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventCreateGroup>): EventCreateGroup {
    return EventCreateGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCreateGroup.$type, EventCreateGroup);

function createBaseEventUpdateGroup(): EventUpdateGroup {
  return { $type: "regen.group.v1alpha1.EventUpdateGroup", groupId: Long.UZERO };
}

export const EventUpdateGroup = {
  $type: "regen.group.v1alpha1.EventUpdateGroup" as const,

  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    return EventUpdateGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventUpdateGroup.$type, EventUpdateGroup);

function createBaseEventCreateGroupAccount(): EventCreateGroupAccount {
  return { $type: "regen.group.v1alpha1.EventCreateGroupAccount", address: "" };
}

export const EventCreateGroupAccount = {
  $type: "regen.group.v1alpha1.EventCreateGroupAccount" as const,

  encode(message: EventCreateGroupAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupAccount();
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

  fromJSON(object: any): EventCreateGroupAccount {
    return { $type: EventCreateGroupAccount.$type, address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: EventCreateGroupAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<EventCreateGroupAccount>): EventCreateGroupAccount {
    return EventCreateGroupAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventCreateGroupAccount>): EventCreateGroupAccount {
    const message = createBaseEventCreateGroupAccount();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventCreateGroupAccount.$type, EventCreateGroupAccount);

function createBaseEventUpdateGroupAccount(): EventUpdateGroupAccount {
  return { $type: "regen.group.v1alpha1.EventUpdateGroupAccount", address: "" };
}

export const EventUpdateGroupAccount = {
  $type: "regen.group.v1alpha1.EventUpdateGroupAccount" as const,

  encode(message: EventUpdateGroupAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupAccount();
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

  fromJSON(object: any): EventUpdateGroupAccount {
    return { $type: EventUpdateGroupAccount.$type, address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: EventUpdateGroupAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<EventUpdateGroupAccount>): EventUpdateGroupAccount {
    return EventUpdateGroupAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventUpdateGroupAccount>): EventUpdateGroupAccount {
    const message = createBaseEventUpdateGroupAccount();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventUpdateGroupAccount.$type, EventUpdateGroupAccount);

function createBaseEventCreateProposal(): EventCreateProposal {
  return { $type: "regen.group.v1alpha1.EventCreateProposal", proposalId: Long.UZERO };
}

export const EventCreateProposal = {
  $type: "regen.group.v1alpha1.EventCreateProposal" as const,

  encode(message: EventCreateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProposal();
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

  fromJSON(object: any): EventCreateProposal {
    return {
      $type: EventCreateProposal.$type,
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
    };
  },

  toJSON(message: EventCreateProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventCreateProposal>): EventCreateProposal {
    return EventCreateProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventCreateProposal>): EventCreateProposal {
    const message = createBaseEventCreateProposal();
    message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
      ? Long.fromValue(object.proposalId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCreateProposal.$type, EventCreateProposal);

function createBaseEventVote(): EventVote {
  return { $type: "regen.group.v1alpha1.EventVote", proposalId: Long.UZERO };
}

export const EventVote = {
  $type: "regen.group.v1alpha1.EventVote" as const,

  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
    };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventVote>): EventVote {
    return EventVote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
      ? Long.fromValue(object.proposalId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventVote.$type, EventVote);

function createBaseEventExec(): EventExec {
  return { $type: "regen.group.v1alpha1.EventExec", proposalId: Long.UZERO };
}

export const EventExec = {
  $type: "regen.group.v1alpha1.EventExec" as const,

  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
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
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventExec>): EventExec {
    return EventExec.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
      ? Long.fromValue(object.proposalId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventExec.$type, EventExec);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
