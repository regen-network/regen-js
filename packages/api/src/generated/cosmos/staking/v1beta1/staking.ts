/* eslint-disable */
import { Header } from '../../../tendermint/types/types';
import { Any } from '../../../google/protobuf/any';
import * as Long from 'long';
import { Duration } from '../../../google/protobuf/duration';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Writer, Reader, util, configure } from 'protobufjs/minimal';


/**
 *  HistoricalInfo contains header and validator information for a given block.
 *  It is stored as part of staking module's state, which persists the `n` most
 *  recent HistoricalInfo
 *  (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header?: Header;
  valset: Validator[];
}

/**
 *  CommissionRates defines the initial commission rates to be used for creating
 *  a validator.
 */
export interface CommissionRates {
  rate: string;
  maxRate: string;
  maxChangeRate: string;
}

/**
 *  Commission defines commission parameters for a given validator.
 */
export interface Commission {
  commissionRates?: CommissionRates;
  updateTime?: Date;
}

/**
 *  Description defines a validator description.
 */
export interface Description {
  moniker: string;
  identity: string;
  website: string;
  securityContact: string;
  details: string;
}

/**
 *  Validator defines a validator, together with the total amount of the
 *  Validator's bond shares and their exchange rate to coins. Slashing results in
 *  a decrease in the exchange rate, allowing correct calculation of future
 *  undelegations without iterating over delegators. When coins are delegated to
 *  this validator, the validator is credited with a delegation whose number of
 *  bond shares is based on the amount of coins delegated divided by the current
 *  exchange rate. Voting power can be calculated as total bonded shares
 *  multiplied by exchange rate.
 */
export interface Validator {
  operatorAddress: string;
  consensusPubkey?: Any;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegatorShares: string;
  description?: Description;
  unbondingHeight: Long;
  unbondingTime?: Date;
  commission?: Commission;
  minSelfDelegation: string;
}

/**
 *  ValAddresses defines a repeated set of validator addresses.
 */
export interface ValAddresses {
  addresses: string[];
}

/**
 *  DVPair is struct that just has a delegator-validator pair with no other data.
 *  It is intended to be used as a marshalable pointer. For example, a DVPair can
 *  be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}

/**
 *  DVPairs defines an array of DVPair objects.
 */
export interface DVPairs {
  pairs: DVPair[];
}

/**
 *  DVVTriplet is struct that just has a delegator-validator-validator triplet
 *  with no other data. It is intended to be used as a marshalable pointer. For
 *  example, a DVVTriplet can be used to construct the key to getting a
 *  Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}

/**
 *  DVVTriplets defines an array of DVVTriplet objects.
 */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}

/**
 *  Delegation represents the bond with tokens held by an account. It is
 *  owned by one delegator, and is associated with the voting power of one
 *  validator.
 */
export interface Delegation {
  delegatorAddress: string;
  validatorAddress: string;
  shares: string;
}

/**
 *  UnbondingDelegation stores all of a single delegator's unbonding bonds
 *  for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  /**
   *  unbonding delegation entries
   */
  entries: UnbondingDelegationEntry[];
}

/**
 *  UnbondingDelegationEntry defines an unbonding object with relevant metadata.
 */
export interface UnbondingDelegationEntry {
  creationHeight: Long;
  completionTime?: Date;
  initialBalance: string;
  balance: string;
}

/**
 *  RedelegationEntry defines a redelegation object with relevant metadata.
 */
export interface RedelegationEntry {
  creationHeight: Long;
  completionTime?: Date;
  initialBalance: string;
  sharesDst: string;
}

/**
 *  Redelegation contains the list of a particular delegator's redelegating bonds
 *  from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  /**
   *  redelegation entries
   */
  entries: RedelegationEntry[];
}

/**
 *  Params defines the parameters for the staking module.
 */
export interface Params {
  unbondingTime?: Duration;
  maxValidators: number;
  maxEntries: number;
  historicalEntries: number;
  bondDenom: string;
}

/**
 *  DelegationResponse is equivalent to Delegation except that it contains a
 *  balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation?: Delegation;
  balance?: Coin;
}

/**
 *  RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 *  contains a balance in addition to shares which is more suitable for client
 *  responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry?: RedelegationEntry;
  balance: string;
}

/**
 *  RedelegationResponse is equivalent to a Redelegation except that its entries
 *  contain a balance in addition to shares which is more suitable for client
 *  responses.
 */
export interface RedelegationResponse {
  redelegation?: Redelegation;
  entries: RedelegationEntryResponse[];
}

/**
 *  Pool is used for tracking bonded and not-bonded token supply of the bond
 *  denomination.
 */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}

const baseHistoricalInfo: object = {
};

const baseCommissionRates: object = {
  rate: "",
  maxRate: "",
  maxChangeRate: "",
};

const baseCommission: object = {
};

const baseDescription: object = {
  moniker: "",
  identity: "",
  website: "",
  securityContact: "",
  details: "",
};

const baseValidator: object = {
  operatorAddress: "",
  jailed: false,
  status: 0,
  tokens: "",
  delegatorShares: "",
  unbondingHeight: Long.ZERO,
  minSelfDelegation: "",
};

const baseValAddresses: object = {
  addresses: "",
};

const baseDVPair: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

const baseDVPairs: object = {
};

const baseDVVTriplet: object = {
  delegatorAddress: "",
  validatorSrcAddress: "",
  validatorDstAddress: "",
};

const baseDVVTriplets: object = {
};

const baseDelegation: object = {
  delegatorAddress: "",
  validatorAddress: "",
  shares: "",
};

const baseUnbondingDelegation: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

const baseUnbondingDelegationEntry: object = {
  creationHeight: Long.ZERO,
  initialBalance: "",
  balance: "",
};

const baseRedelegationEntry: object = {
  creationHeight: Long.ZERO,
  initialBalance: "",
  sharesDst: "",
};

const baseRedelegation: object = {
  delegatorAddress: "",
  validatorSrcAddress: "",
  validatorDstAddress: "",
};

const baseParams: object = {
  maxValidators: 0,
  maxEntries: 0,
  historicalEntries: 0,
  bondDenom: "",
};

const baseDelegationResponse: object = {
};

const baseRedelegationEntryResponse: object = {
  balance: "",
};

const baseRedelegationResponse: object = {
};

const basePool: object = {
  notBondedTokens: "",
  bondedTokens: "",
};

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

export const protobufPackage = 'cosmos.staking.v1beta1'

/**  BondStatus is the status of a validator.
 */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED -  UNSPECIFIED defines an invalid validator status.
   */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED -  UNBONDED defines a validator that is not bonded.
   */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING -  UNBONDING defines a validator that is unbonding.
   */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED -  BONDED defines a validator that is bonded.
   */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}

export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}

export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    default:
      return "UNKNOWN";
  }
}

export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: Writer = Writer.create()): Writer {
    if (message.header !== undefined && message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HistoricalInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalInfo {
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromJSON(object.header);
    } else {
      message.header = undefined;
    }
    if (object.valset !== undefined && object.valset !== null) {
      for (const e of object.valset) {
        message.valset.push(Validator.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    } else {
      message.header = undefined;
    }
    if (object.valset !== undefined && object.valset !== null) {
      for (const e of object.valset) {
        message.valset.push(Validator.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.valset = [];
    }
    return obj;
  },
};

export const CommissionRates = {
  encode(message: CommissionRates, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.rate);
    writer.uint32(18).string(message.maxRate);
    writer.uint32(26).string(message.maxChangeRate);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommissionRates {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommissionRates } as CommissionRates;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        case 2:
          message.maxRate = reader.string();
          break;
        case 3:
          message.maxChangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommissionRates {
    const message = { ...baseCommissionRates } as CommissionRates;
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = String(object.rate);
    } else {
      message.rate = "";
    }
    if (object.maxRate !== undefined && object.maxRate !== null) {
      message.maxRate = String(object.maxRate);
    } else {
      message.maxRate = "";
    }
    if (object.maxChangeRate !== undefined && object.maxChangeRate !== null) {
      message.maxChangeRate = String(object.maxChangeRate);
    } else {
      message.maxChangeRate = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommissionRates>): CommissionRates {
    const message = { ...baseCommissionRates } as CommissionRates;
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    } else {
      message.rate = "";
    }
    if (object.maxRate !== undefined && object.maxRate !== null) {
      message.maxRate = object.maxRate;
    } else {
      message.maxRate = "";
    }
    if (object.maxChangeRate !== undefined && object.maxChangeRate !== null) {
      message.maxChangeRate = object.maxChangeRate;
    } else {
      message.maxChangeRate = "";
    }
    return message;
  },
  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
};

export const Commission = {
  encode(message: Commission, writer: Writer = Writer.create()): Writer {
    if (message.commissionRates !== undefined && message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined && message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Commission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommission } as Commission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commission {
    const message = { ...baseCommission } as Commission;
    if (object.commissionRates !== undefined && object.commissionRates !== null) {
      message.commissionRates = CommissionRates.fromJSON(object.commissionRates);
    } else {
      message.commissionRates = undefined;
    }
    if (object.updateTime !== undefined && object.updateTime !== null) {
      message.updateTime = fromJsonTimestamp(object.updateTime);
    } else {
      message.updateTime = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Commission>): Commission {
    const message = { ...baseCommission } as Commission;
    if (object.commissionRates !== undefined && object.commissionRates !== null) {
      message.commissionRates = CommissionRates.fromPartial(object.commissionRates);
    } else {
      message.commissionRates = undefined;
    }
    if (object.updateTime !== undefined && object.updateTime !== null) {
      message.updateTime = object.updateTime;
    } else {
      message.updateTime = undefined;
    }
    return message;
  },
  toJSON(message: Commission): unknown {
    const obj: any = {};
    message.commissionRates !== undefined && (obj.commissionRates = message.commissionRates ? CommissionRates.toJSON(message.commissionRates) : undefined);
    message.updateTime !== undefined && (obj.updateTime = message.updateTime !== undefined ? message.updateTime.toISOString() : null);
    return obj;
  },
};

export const Description = {
  encode(message: Description, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.moniker);
    writer.uint32(18).string(message.identity);
    writer.uint32(26).string(message.website);
    writer.uint32(34).string(message.securityContact);
    writer.uint32(42).string(message.details);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Description {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDescription } as Description;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Description {
    const message = { ...baseDescription } as Description;
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity);
    } else {
      message.identity = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (object.securityContact !== undefined && object.securityContact !== null) {
      message.securityContact = String(object.securityContact);
    } else {
      message.securityContact = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Description>): Description {
    const message = { ...baseDescription } as Description;
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    } else {
      message.identity = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (object.securityContact !== undefined && object.securityContact !== null) {
      message.securityContact = object.securityContact;
    } else {
      message.securityContact = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    return message;
  },
  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
};

export const Validator = {
  encode(message: Validator, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.operatorAddress);
    if (message.consensusPubkey !== undefined && message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).bool(message.jailed);
    writer.uint32(32).int32(message.status);
    writer.uint32(42).string(message.tokens);
    writer.uint32(50).string(message.delegatorShares);
    if (message.description !== undefined && message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(64).int64(message.unbondingHeight);
    if (message.unbondingTime !== undefined && message.unbondingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined && message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(90).string(message.minSelfDelegation);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Validator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64() as Long;
          break;
        case 9:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    if (object.operatorAddress !== undefined && object.operatorAddress !== null) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (object.consensusPubkey !== undefined && object.consensusPubkey !== null) {
      message.consensusPubkey = Any.fromJSON(object.consensusPubkey);
    } else {
      message.consensusPubkey = undefined;
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = Boolean(object.jailed);
    } else {
      message.jailed = false;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = bondStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = String(object.tokens);
    } else {
      message.tokens = "";
    }
    if (object.delegatorShares !== undefined && object.delegatorShares !== null) {
      message.delegatorShares = String(object.delegatorShares);
    } else {
      message.delegatorShares = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    if (object.unbondingHeight !== undefined && object.unbondingHeight !== null) {
      message.unbondingHeight = Long.fromString(object.unbondingHeight);
    } else {
      message.unbondingHeight = Long.ZERO;
    }
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = fromJsonTimestamp(object.unbondingTime);
    } else {
      message.unbondingTime = undefined;
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromJSON(object.commission);
    } else {
      message.commission = undefined;
    }
    if (object.minSelfDelegation !== undefined && object.minSelfDelegation !== null) {
      message.minSelfDelegation = String(object.minSelfDelegation);
    } else {
      message.minSelfDelegation = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    if (object.operatorAddress !== undefined && object.operatorAddress !== null) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (object.consensusPubkey !== undefined && object.consensusPubkey !== null) {
      message.consensusPubkey = Any.fromPartial(object.consensusPubkey);
    } else {
      message.consensusPubkey = undefined;
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    } else {
      message.jailed = false;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    } else {
      message.tokens = "";
    }
    if (object.delegatorShares !== undefined && object.delegatorShares !== null) {
      message.delegatorShares = object.delegatorShares;
    } else {
      message.delegatorShares = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    if (object.unbondingHeight !== undefined && object.unbondingHeight !== null) {
      message.unbondingHeight = object.unbondingHeight as Long;
    } else {
      message.unbondingHeight = Long.ZERO;
    }
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = object.unbondingTime;
    } else {
      message.unbondingTime = undefined;
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromPartial(object.commission);
    } else {
      message.commission = undefined;
    }
    if (object.minSelfDelegation !== undefined && object.minSelfDelegation !== null) {
      message.minSelfDelegation = object.minSelfDelegation;
    } else {
      message.minSelfDelegation = "";
    }
    return message;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.unbondingHeight !== undefined && (obj.unbondingHeight = (message.unbondingHeight || Long.ZERO).toString());
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime !== undefined ? message.unbondingTime.toISOString() : null);
    message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
};

export const ValAddresses = {
  encode(message: ValAddresses, writer: Writer = Writer.create()): Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ValAddresses {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValAddresses } as ValAddresses;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValAddresses {
    const message = { ...baseValAddresses } as ValAddresses;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValAddresses>): ValAddresses {
    const message = { ...baseValAddresses } as ValAddresses;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    return message;
  },
  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
};

export const DVPair = {
  encode(message: DVPair, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DVPair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVPair } as DVPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPair {
    const message = { ...baseDVPair } as DVPair;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<DVPair>): DVPair {
    const message = { ...baseDVPair } as DVPair;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
};

export const DVPairs = {
  encode(message: DVPairs, writer: Writer = Writer.create()): Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DVPairs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVPairs } as DVPairs;
    message.pairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPairs {
    const message = { ...baseDVPairs } as DVPairs;
    message.pairs = [];
    if (object.pairs !== undefined && object.pairs !== null) {
      for (const e of object.pairs) {
        message.pairs.push(DVPair.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DVPairs>): DVPairs {
    const message = { ...baseDVPairs } as DVPairs;
    message.pairs = [];
    if (object.pairs !== undefined && object.pairs !== null) {
      for (const e of object.pairs) {
        message.pairs.push(DVPair.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DVPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
};

export const DVVTriplet = {
  encode(message: DVVTriplet, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorSrcAddress);
    writer.uint32(26).string(message.validatorDstAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DVVTriplet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVVTriplet } as DVVTriplet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplet {
    const message = { ...baseDVVTriplet } as DVVTriplet;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorSrcAddress !== undefined && object.validatorSrcAddress !== null) {
      message.validatorSrcAddress = String(object.validatorSrcAddress);
    } else {
      message.validatorSrcAddress = "";
    }
    if (object.validatorDstAddress !== undefined && object.validatorDstAddress !== null) {
      message.validatorDstAddress = String(object.validatorDstAddress);
    } else {
      message.validatorDstAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet {
    const message = { ...baseDVVTriplet } as DVVTriplet;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorSrcAddress !== undefined && object.validatorSrcAddress !== null) {
      message.validatorSrcAddress = object.validatorSrcAddress;
    } else {
      message.validatorSrcAddress = "";
    }
    if (object.validatorDstAddress !== undefined && object.validatorDstAddress !== null) {
      message.validatorDstAddress = object.validatorDstAddress;
    } else {
      message.validatorDstAddress = "";
    }
    return message;
  },
  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },
};

export const DVVTriplets = {
  encode(message: DVVTriplets, writer: Writer = Writer.create()): Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DVVTriplets {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVVTriplets } as DVVTriplets;
    message.triplets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplets {
    const message = { ...baseDVVTriplets } as DVVTriplets;
    message.triplets = [];
    if (object.triplets !== undefined && object.triplets !== null) {
      for (const e of object.triplets) {
        message.triplets.push(DVVTriplet.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets {
    const message = { ...baseDVVTriplets } as DVVTriplets;
    message.triplets = [];
    if (object.triplets !== undefined && object.triplets !== null) {
      for (const e of object.triplets) {
        message.triplets.push(DVVTriplet.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(e => e ? DVVTriplet.toJSON(e) : undefined);
    } else {
      obj.triplets = [];
    }
    return obj;
  },
};

export const Delegation = {
  encode(message: Delegation, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorAddress);
    writer.uint32(26).string(message.shares);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Delegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegation } as Delegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    const message = { ...baseDelegation } as Delegation;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = String(object.shares);
    } else {
      message.shares = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = { ...baseDelegation } as Delegation;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    } else {
      message.shares = "";
    }
    return message;
  },
  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },
};

export const UnbondingDelegation = {
  encode(message: UnbondingDelegation, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorAddress);
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UnbondingDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegation {
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.entries = [];
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(UnbondingDelegationEntry.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.entries = [];
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(UnbondingDelegationEntry.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
};

export const UnbondingDelegationEntry = {
  encode(message: UnbondingDelegationEntry, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.creationHeight);
    if (message.completionTime !== undefined && message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.initialBalance);
    writer.uint32(34).string(message.balance);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnbondingDelegationEntry } as UnbondingDelegationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64() as Long;
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegationEntry {
    const message = { ...baseUnbondingDelegationEntry } as UnbondingDelegationEntry;
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = Long.fromString(object.creationHeight);
    } else {
      message.creationHeight = Long.ZERO;
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = fromJsonTimestamp(object.completionTime);
    } else {
      message.completionTime = undefined;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = String(object.initialBalance);
    } else {
      message.initialBalance = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = { ...baseUnbondingDelegationEntry } as UnbondingDelegationEntry;
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = object.creationHeight as Long;
    } else {
      message.creationHeight = Long.ZERO;
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = object.completionTime;
    } else {
      message.completionTime = undefined;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = object.initialBalance;
    } else {
      message.initialBalance = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    return message;
  },
  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime !== undefined ? message.completionTime.toISOString() : null);
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
};

export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.creationHeight);
    if (message.completionTime !== undefined && message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.initialBalance);
    writer.uint32(34).string(message.sharesDst);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RedelegationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64() as Long;
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntry {
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = Long.fromString(object.creationHeight);
    } else {
      message.creationHeight = Long.ZERO;
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = fromJsonTimestamp(object.completionTime);
    } else {
      message.completionTime = undefined;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = String(object.initialBalance);
    } else {
      message.initialBalance = "";
    }
    if (object.sharesDst !== undefined && object.sharesDst !== null) {
      message.sharesDst = String(object.sharesDst);
    } else {
      message.sharesDst = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = object.creationHeight as Long;
    } else {
      message.creationHeight = Long.ZERO;
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = object.completionTime;
    } else {
      message.completionTime = undefined;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = object.initialBalance;
    } else {
      message.initialBalance = "";
    }
    if (object.sharesDst !== undefined && object.sharesDst !== null) {
      message.sharesDst = object.sharesDst;
    } else {
      message.sharesDst = "";
    }
    return message;
  },
  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime !== undefined ? message.completionTime.toISOString() : null);
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },
};

export const Redelegation = {
  encode(message: Redelegation, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorSrcAddress);
    writer.uint32(26).string(message.validatorDstAddress);
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Redelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegation } as Redelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Redelegation {
    const message = { ...baseRedelegation } as Redelegation;
    message.entries = [];
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorSrcAddress !== undefined && object.validatorSrcAddress !== null) {
      message.validatorSrcAddress = String(object.validatorSrcAddress);
    } else {
      message.validatorSrcAddress = "";
    }
    if (object.validatorDstAddress !== undefined && object.validatorDstAddress !== null) {
      message.validatorDstAddress = String(object.validatorDstAddress);
    } else {
      message.validatorDstAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(RedelegationEntry.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = { ...baseRedelegation } as Redelegation;
    message.entries = [];
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorSrcAddress !== undefined && object.validatorSrcAddress !== null) {
      message.validatorSrcAddress = object.validatorSrcAddress;
    } else {
      message.validatorSrcAddress = "";
    }
    if (object.validatorDstAddress !== undefined && object.validatorDstAddress !== null) {
      message.validatorDstAddress = object.validatorDstAddress;
    } else {
      message.validatorDstAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(RedelegationEntry.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.unbondingTime !== undefined && message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(16).uint32(message.maxValidators);
    writer.uint32(24).uint32(message.maxEntries);
    writer.uint32(32).uint32(message.historicalEntries);
    writer.uint32(42).string(message.bondDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Duration.fromJSON(object.unbondingTime);
    } else {
      message.unbondingTime = undefined;
    }
    if (object.maxValidators !== undefined && object.maxValidators !== null) {
      message.maxValidators = Number(object.maxValidators);
    } else {
      message.maxValidators = 0;
    }
    if (object.maxEntries !== undefined && object.maxEntries !== null) {
      message.maxEntries = Number(object.maxEntries);
    } else {
      message.maxEntries = 0;
    }
    if (object.historicalEntries !== undefined && object.historicalEntries !== null) {
      message.historicalEntries = Number(object.historicalEntries);
    } else {
      message.historicalEntries = 0;
    }
    if (object.bondDenom !== undefined && object.bondDenom !== null) {
      message.bondDenom = String(object.bondDenom);
    } else {
      message.bondDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Duration.fromPartial(object.unbondingTime);
    } else {
      message.unbondingTime = undefined;
    }
    if (object.maxValidators !== undefined && object.maxValidators !== null) {
      message.maxValidators = object.maxValidators;
    } else {
      message.maxValidators = 0;
    }
    if (object.maxEntries !== undefined && object.maxEntries !== null) {
      message.maxEntries = object.maxEntries;
    } else {
      message.maxEntries = 0;
    }
    if (object.historicalEntries !== undefined && object.historicalEntries !== null) {
      message.historicalEntries = object.historicalEntries;
    } else {
      message.historicalEntries = 0;
    }
    if (object.bondDenom !== undefined && object.bondDenom !== null) {
      message.bondDenom = object.bondDenom;
    } else {
      message.bondDenom = "";
    }
    return message;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : undefined);
    message.maxValidators !== undefined && (obj.maxValidators = message.maxValidators);
    message.maxEntries !== undefined && (obj.maxEntries = message.maxEntries);
    message.historicalEntries !== undefined && (obj.historicalEntries = message.historicalEntries);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },
};

export const DelegationResponse = {
  encode(message: DelegationResponse, writer: Writer = Writer.create()): Writer {
    if (message.delegation !== undefined && message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined && message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationResponse } as DelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromJSON(object.delegation);
    } else {
      message.delegation = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromPartial(object.delegation);
    } else {
      message.delegation = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    return message;
  },
  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
};

export const RedelegationEntryResponse = {
  encode(message: RedelegationEntryResponse, writer: Writer = Writer.create()): Writer {
    if (message.redelegationEntry !== undefined && message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(34).string(message.balance);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RedelegationEntryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegationEntryResponse } as RedelegationEntryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntryResponse {
    const message = { ...baseRedelegationEntryResponse } as RedelegationEntryResponse;
    if (object.redelegationEntry !== undefined && object.redelegationEntry !== null) {
      message.redelegationEntry = RedelegationEntry.fromJSON(object.redelegationEntry);
    } else {
      message.redelegationEntry = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = { ...baseRedelegationEntryResponse } as RedelegationEntryResponse;
    if (object.redelegationEntry !== undefined && object.redelegationEntry !== null) {
      message.redelegationEntry = RedelegationEntry.fromPartial(object.redelegationEntry);
    } else {
      message.redelegationEntry = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    return message;
  },
  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined && (obj.redelegationEntry = message.redelegationEntry ? RedelegationEntry.toJSON(message.redelegationEntry) : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
};

export const RedelegationResponse = {
  encode(message: RedelegationResponse, writer: Writer = Writer.create()): Writer {
    if (message.redelegation !== undefined && message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): RedelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegationResponse } as RedelegationResponse;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationResponse {
    const message = { ...baseRedelegationResponse } as RedelegationResponse;
    message.entries = [];
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromJSON(object.redelegation);
    } else {
      message.redelegation = undefined;
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(RedelegationEntryResponse.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse {
    const message = { ...baseRedelegationResponse } as RedelegationResponse;
    message.entries = [];
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromPartial(object.redelegation);
    } else {
      message.redelegation = undefined;
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(RedelegationEntryResponse.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
};

export const Pool = {
  encode(message: Pool, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.notBondedTokens);
    writer.uint32(18).string(message.bondedTokens);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Pool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    if (object.notBondedTokens !== undefined && object.notBondedTokens !== null) {
      message.notBondedTokens = String(object.notBondedTokens);
    } else {
      message.notBondedTokens = "";
    }
    if (object.bondedTokens !== undefined && object.bondedTokens !== null) {
      message.bondedTokens = String(object.bondedTokens);
    } else {
      message.bondedTokens = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    if (object.notBondedTokens !== undefined && object.notBondedTokens !== null) {
      message.notBondedTokens = object.notBondedTokens;
    } else {
      message.notBondedTokens = "";
    }
    if (object.bondedTokens !== undefined && object.bondedTokens !== null) {
      message.bondedTokens = object.bondedTokens;
    } else {
      message.bondedTokens = "";
    }
    return message;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;