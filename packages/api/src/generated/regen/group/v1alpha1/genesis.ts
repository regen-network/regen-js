/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  GroupInfo,
  GroupMember,
  GroupAccountInfo,
  Proposal,
  Vote,
} from './types';

export const protobufPackage = 'regen.group.v1alpha1';

/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  $type: 'regen.group.v1alpha1.GenesisState';
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: Long;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_account_seq is the group account table orm.Sequence,
   * it is used to generate the next group account address.
   */
  groupAccountSeq: Long;
  /** group_accounts is the list of group accounts info. */
  groupAccounts: GroupAccountInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: Long;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'regen.group.v1alpha1.GenesisState',
    groupSeq: Long.UZERO,
    groups: [],
    groupMembers: [],
    groupAccountSeq: Long.UZERO,
    groupAccounts: [],
    proposalSeq: Long.UZERO,
    proposals: [],
    votes: [],
  };
}

export const GenesisState = {
  $type: 'regen.group.v1alpha1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.groupSeq.isZero()) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.groupAccountSeq.isZero()) {
      writer.uint32(32).uint64(message.groupAccountSeq);
    }
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposalSeq.isZero()) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = reader.uint64() as Long;
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(
            GroupMember.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.groupAccountSeq = reader.uint64() as Long;
          break;
        case 5:
          message.groupAccounts.push(
            GroupAccountInfo.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.proposalSeq = reader.uint64() as Long;
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      groupSeq: isSet(object.groupSeq)
        ? Long.fromString(object.groupSeq)
        : Long.UZERO,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => GroupInfo.fromJSON(e))
        : [],
      groupMembers: Array.isArray(object?.groupMembers)
        ? object.groupMembers.map((e: any) => GroupMember.fromJSON(e))
        : [],
      groupAccountSeq: isSet(object.groupAccountSeq)
        ? Long.fromString(object.groupAccountSeq)
        : Long.UZERO,
      groupAccounts: Array.isArray(object?.groupAccounts)
        ? object.groupAccounts.map((e: any) => GroupAccountInfo.fromJSON(e))
        : [],
      proposalSeq: isSet(object.proposalSeq)
        ? Long.fromString(object.proposalSeq)
        : Long.UZERO,
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.groupSeq !== undefined &&
      (obj.groupSeq = (message.groupSeq || Long.UZERO).toString());
    if (message.groups) {
      obj.groups = message.groups.map(e =>
        e ? GroupInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.groupMembers = message.groupMembers.map(e =>
        e ? GroupMember.toJSON(e) : undefined,
      );
    } else {
      obj.groupMembers = [];
    }
    message.groupAccountSeq !== undefined &&
      (obj.groupAccountSeq = (
        message.groupAccountSeq || Long.UZERO
      ).toString());
    if (message.groupAccounts) {
      obj.groupAccounts = message.groupAccounts.map(e =>
        e ? GroupAccountInfo.toJSON(e) : undefined,
      );
    } else {
      obj.groupAccounts = [];
    }
    message.proposalSeq !== undefined &&
      (obj.proposalSeq = (message.proposalSeq || Long.UZERO).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map(e =>
        e ? Proposal.toJSON(e) : undefined,
      );
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.groupSeq =
      object.groupSeq !== undefined && object.groupSeq !== null
        ? Long.fromValue(object.groupSeq)
        : Long.UZERO;
    message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
    message.groupMembers =
      object.groupMembers?.map(e => GroupMember.fromPartial(e)) || [];
    message.groupAccountSeq =
      object.groupAccountSeq !== undefined && object.groupAccountSeq !== null
        ? Long.fromValue(object.groupAccountSeq)
        : Long.UZERO;
    message.groupAccounts =
      object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
    message.proposalSeq =
      object.proposalSeq !== undefined && object.proposalSeq !== null
        ? Long.fromValue(object.proposalSeq)
        : Long.UZERO;
    message.proposals =
      object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
