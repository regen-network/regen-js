/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Header } from '../../../tendermint/types/types';
import { Any } from '../../../google/protobuf/any';
import { Duration } from '../../../google/protobuf/duration';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'cosmos.staking.v1beta1';

/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}

export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case 'BOND_STATUS_UNSPECIFIED':
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case 'BOND_STATUS_UNBONDED':
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case 'BOND_STATUS_UNBONDING':
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case 'BOND_STATUS_BONDED':
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return BondStatus.UNRECOGNIZED;
  }
}

export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return 'BOND_STATUS_UNSPECIFIED';
    case BondStatus.BOND_STATUS_UNBONDED:
      return 'BOND_STATUS_UNBONDED';
    case BondStatus.BOND_STATUS_UNBONDING:
      return 'BOND_STATUS_UNBONDING';
    case BondStatus.BOND_STATUS_BONDED:
      return 'BOND_STATUS_BONDED';
    default:
      return 'UNKNOWN';
  }
}

/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  $type: 'cosmos.staking.v1beta1.HistoricalInfo';
  header?: Header;
  valset: Validator[];
}

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  $type: 'cosmos.staking.v1beta1.CommissionRates';
  rate: string;
  maxRate: string;
  maxChangeRate: string;
}

/** Commission defines commission parameters for a given validator. */
export interface Commission {
  $type: 'cosmos.staking.v1beta1.Commission';
  commissionRates?: CommissionRates;
  updateTime?: Date;
}

/** Description defines a validator description. */
export interface Description {
  $type: 'cosmos.staking.v1beta1.Description';
  moniker: string;
  identity: string;
  website: string;
  securityContact: string;
  details: string;
}

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  $type: 'cosmos.staking.v1beta1.Validator';
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

/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  $type: 'cosmos.staking.v1beta1.ValAddresses';
  addresses: string[];
}

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  $type: 'cosmos.staking.v1beta1.DVPair';
  delegatorAddress: string;
  validatorAddress: string;
}

/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  $type: 'cosmos.staking.v1beta1.DVPairs';
  pairs: DVPair[];
}

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  $type: 'cosmos.staking.v1beta1.DVVTriplet';
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}

/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  $type: 'cosmos.staking.v1beta1.DVVTriplets';
  triplets: DVVTriplet[];
}

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  $type: 'cosmos.staking.v1beta1.Delegation';
  delegatorAddress: string;
  validatorAddress: string;
  shares: string;
}

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  $type: 'cosmos.staking.v1beta1.UnbondingDelegation';
  delegatorAddress: string;
  validatorAddress: string;
  /** unbonding delegation entries */
  entries: UnbondingDelegationEntry[];
}

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  $type: 'cosmos.staking.v1beta1.UnbondingDelegationEntry';
  creationHeight: Long;
  completionTime?: Date;
  initialBalance: string;
  balance: string;
}

/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  $type: 'cosmos.staking.v1beta1.RedelegationEntry';
  creationHeight: Long;
  completionTime?: Date;
  initialBalance: string;
  sharesDst: string;
}

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  $type: 'cosmos.staking.v1beta1.Redelegation';
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  /** redelegation entries */
  entries: RedelegationEntry[];
}

/** Params defines the parameters for the staking module. */
export interface Params {
  $type: 'cosmos.staking.v1beta1.Params';
  unbondingTime?: Duration;
  maxValidators: number;
  maxEntries: number;
  historicalEntries: number;
  bondDenom: string;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  $type: 'cosmos.staking.v1beta1.DelegationResponse';
  delegation?: Delegation;
  balance?: Coin;
}

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  $type: 'cosmos.staking.v1beta1.RedelegationEntryResponse';
  redelegationEntry?: RedelegationEntry;
  balance: string;
}

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  $type: 'cosmos.staking.v1beta1.RedelegationResponse';
  redelegation?: Redelegation;
  entries: RedelegationEntryResponse[];
}

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  $type: 'cosmos.staking.v1beta1.Pool';
  notBondedTokens: string;
  bondedTokens: string;
}

function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    $type: 'cosmos.staking.v1beta1.HistoricalInfo',
    header: undefined,
    valset: [],
  };
}

export const HistoricalInfo = {
  $type: 'cosmos.staking.v1beta1.HistoricalInfo' as const,

  encode(
    message: HistoricalInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
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
    return {
      $type: HistoricalInfo.$type,
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object?.valset)
        ? object.valset.map((e: any) => Validator.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map(e =>
        e ? Validator.toJSON(e) : undefined,
      );
    } else {
      obj.valset = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HistoricalInfo>, I>>(
    object: I,
  ): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromPartial(object.header)
        : undefined;
    message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(HistoricalInfo.$type, HistoricalInfo);

function createBaseCommissionRates(): CommissionRates {
  return {
    $type: 'cosmos.staking.v1beta1.CommissionRates',
    rate: '',
    maxRate: '',
    maxChangeRate: '',
  };
}

export const CommissionRates = {
  $type: 'cosmos.staking.v1beta1.CommissionRates' as const,

  encode(
    message: CommissionRates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rate !== '') {
      writer.uint32(10).string(message.rate);
    }
    if (message.maxRate !== '') {
      writer.uint32(18).string(message.maxRate);
    }
    if (message.maxChangeRate !== '') {
      writer.uint32(26).string(message.maxChangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
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
    return {
      $type: CommissionRates.$type,
      rate: isSet(object.rate) ? String(object.rate) : '',
      maxRate: isSet(object.maxRate) ? String(object.maxRate) : '',
      maxChangeRate: isSet(object.maxChangeRate)
        ? String(object.maxChangeRate)
        : '',
    };
  },

  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined &&
      (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommissionRates>, I>>(
    object: I,
  ): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? '';
    message.maxRate = object.maxRate ?? '';
    message.maxChangeRate = object.maxChangeRate ?? '';
    return message;
  },
};

messageTypeRegistry.set(CommissionRates.$type, CommissionRates);

function createBaseCommission(): Commission {
  return {
    $type: 'cosmos.staking.v1beta1.Commission',
    commissionRates: undefined,
    updateTime: undefined,
  };
}

export const Commission = {
  $type: 'cosmos.staking.v1beta1.Commission' as const,

  encode(
    message: Commission,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(
        message.commissionRates,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updateTime),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.updateTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commission {
    return {
      $type: Commission.$type,
      commissionRates: isSet(object.commissionRates)
        ? CommissionRates.fromJSON(object.commissionRates)
        : undefined,
      updateTime: isSet(object.updateTime)
        ? fromJsonTimestamp(object.updateTime)
        : undefined,
    };
  },

  toJSON(message: Commission): unknown {
    const obj: any = {};
    message.commissionRates !== undefined &&
      (obj.commissionRates = message.commissionRates
        ? CommissionRates.toJSON(message.commissionRates)
        : undefined);
    message.updateTime !== undefined &&
      (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Commission>, I>>(
    object: I,
  ): Commission {
    const message = createBaseCommission();
    message.commissionRates =
      object.commissionRates !== undefined && object.commissionRates !== null
        ? CommissionRates.fromPartial(object.commissionRates)
        : undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Commission.$type, Commission);

function createBaseDescription(): Description {
  return {
    $type: 'cosmos.staking.v1beta1.Description',
    moniker: '',
    identity: '',
    website: '',
    securityContact: '',
    details: '',
  };
}

export const Description = {
  $type: 'cosmos.staking.v1beta1.Description' as const,

  encode(
    message: Description,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.moniker !== '') {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== '') {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== '') {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== '') {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== '') {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
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
    return {
      $type: Description.$type,
      moniker: isSet(object.moniker) ? String(object.moniker) : '',
      identity: isSet(object.identity) ? String(object.identity) : '',
      website: isSet(object.website) ? String(object.website) : '',
      securityContact: isSet(object.securityContact)
        ? String(object.securityContact)
        : '',
      details: isSet(object.details) ? String(object.details) : '',
    };
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined &&
      (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Description>, I>>(
    object: I,
  ): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? '';
    message.identity = object.identity ?? '';
    message.website = object.website ?? '';
    message.securityContact = object.securityContact ?? '';
    message.details = object.details ?? '';
    return message;
  },
};

messageTypeRegistry.set(Description.$type, Description);

function createBaseValidator(): Validator {
  return {
    $type: 'cosmos.staking.v1beta1.Validator',
    operatorAddress: '',
    consensusPubkey: undefined,
    jailed: false,
    status: 0,
    tokens: '',
    delegatorShares: '',
    description: undefined,
    unbondingHeight: Long.ZERO,
    unbondingTime: undefined,
    commission: undefined,
    minSelfDelegation: '',
  };
}

export const Validator = {
  $type: 'cosmos.staking.v1beta1.Validator' as const,

  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.operatorAddress !== '') {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== '') {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== '') {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (!message.unbondingHeight.isZero()) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.unbondingTime),
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== '') {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
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
          message.unbondingTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
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
    return {
      $type: Validator.$type,
      operatorAddress: isSet(object.operatorAddress)
        ? String(object.operatorAddress)
        : '',
      consensusPubkey: isSet(object.consensusPubkey)
        ? Any.fromJSON(object.consensusPubkey)
        : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
      tokens: isSet(object.tokens) ? String(object.tokens) : '',
      delegatorShares: isSet(object.delegatorShares)
        ? String(object.delegatorShares)
        : '',
      description: isSet(object.description)
        ? Description.fromJSON(object.description)
        : undefined,
      unbondingHeight: isSet(object.unbondingHeight)
        ? Long.fromString(object.unbondingHeight)
        : Long.ZERO,
      unbondingTime: isSet(object.unbondingTime)
        ? fromJsonTimestamp(object.unbondingTime)
        : undefined,
      commission: isSet(object.commission)
        ? Commission.fromJSON(object.commission)
        : undefined,
      minSelfDelegation: isSet(object.minSelfDelegation)
        ? String(object.minSelfDelegation)
        : '',
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey
        ? Any.toJSON(message.consensusPubkey)
        : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined &&
      (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined &&
      (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    message.unbondingHeight !== undefined &&
      (obj.unbondingHeight = (message.unbondingHeight || Long.ZERO).toString());
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime.toISOString());
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? Commission.toJSON(message.commission)
        : undefined);
    message.minSelfDelegation !== undefined &&
      (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(
    object: I,
  ): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? '';
    message.consensusPubkey =
      object.consensusPubkey !== undefined && object.consensusPubkey !== null
        ? Any.fromPartial(object.consensusPubkey)
        : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? '';
    message.delegatorShares = object.delegatorShares ?? '';
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromPartial(object.description)
        : undefined;
    message.unbondingHeight =
      object.unbondingHeight !== undefined && object.unbondingHeight !== null
        ? Long.fromValue(object.unbondingHeight)
        : Long.ZERO;
    message.unbondingTime = object.unbondingTime ?? undefined;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? Commission.fromPartial(object.commission)
        : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? '';
    return message;
  },
};

messageTypeRegistry.set(Validator.$type, Validator);

function createBaseValAddresses(): ValAddresses {
  return { $type: 'cosmos.staking.v1beta1.ValAddresses', addresses: [] };
}

export const ValAddresses = {
  $type: 'cosmos.staking.v1beta1.ValAddresses' as const,

  encode(
    message: ValAddresses,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
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
    return {
      $type: ValAddresses.$type,
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => String(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<ValAddresses>, I>>(
    object: I,
  ): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ValAddresses.$type, ValAddresses);

function createBaseDVPair(): DVPair {
  return {
    $type: 'cosmos.staking.v1beta1.DVPair',
    delegatorAddress: '',
    validatorAddress: '',
  };
}

export const DVPair = {
  $type: 'cosmos.staking.v1beta1.DVPair' as const,

  encode(
    message: DVPair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
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
    return {
      $type: DVPair.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
    };
  },

  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVPair>, I>>(object: I): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(DVPair.$type, DVPair);

function createBaseDVPairs(): DVPairs {
  return { $type: 'cosmos.staking.v1beta1.DVPairs', pairs: [] };
}

export const DVPairs = {
  $type: 'cosmos.staking.v1beta1.DVPairs' as const,

  encode(
    message: DVPairs,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
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
    return {
      $type: DVPairs.$type,
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => DVPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => (e ? DVPair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVPairs>, I>>(object: I): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DVPairs.$type, DVPairs);

function createBaseDVVTriplet(): DVVTriplet {
  return {
    $type: 'cosmos.staking.v1beta1.DVVTriplet',
    delegatorAddress: '',
    validatorSrcAddress: '',
    validatorDstAddress: '',
  };
}

export const DVVTriplet = {
  $type: 'cosmos.staking.v1beta1.DVVTriplet' as const,

  encode(
    message: DVVTriplet,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== '') {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== '') {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
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
    return {
      $type: DVVTriplet.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorSrcAddress: isSet(object.validatorSrcAddress)
        ? String(object.validatorSrcAddress)
        : '',
      validatorDstAddress: isSet(object.validatorDstAddress)
        ? String(object.validatorDstAddress)
        : '',
    };
  },

  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVVTriplet>, I>>(
    object: I,
  ): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorSrcAddress = object.validatorSrcAddress ?? '';
    message.validatorDstAddress = object.validatorDstAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(DVVTriplet.$type, DVVTriplet);

function createBaseDVVTriplets(): DVVTriplets {
  return { $type: 'cosmos.staking.v1beta1.DVVTriplets', triplets: [] };
}

export const DVVTriplets = {
  $type: 'cosmos.staking.v1beta1.DVVTriplets' as const,

  encode(
    message: DVVTriplets,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
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
    return {
      $type: DVVTriplets.$type,
      triplets: Array.isArray(object?.triplets)
        ? object.triplets.map((e: any) => DVVTriplet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(e =>
        e ? DVVTriplet.toJSON(e) : undefined,
      );
    } else {
      obj.triplets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVVTriplets>, I>>(
    object: I,
  ): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets =
      object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(DVVTriplets.$type, DVVTriplets);

function createBaseDelegation(): Delegation {
  return {
    $type: 'cosmos.staking.v1beta1.Delegation',
    delegatorAddress: '',
    validatorAddress: '',
    shares: '',
  };
}

export const Delegation = {
  $type: 'cosmos.staking.v1beta1.Delegation' as const,

  encode(
    message: Delegation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== '') {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
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
    return {
      $type: Delegation.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      shares: isSet(object.shares) ? String(object.shares) : '',
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegation>, I>>(
    object: I,
  ): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.shares = object.shares ?? '';
    return message;
  },
};

messageTypeRegistry.set(Delegation.$type, Delegation);

function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    $type: 'cosmos.staking.v1beta1.UnbondingDelegation',
    delegatorAddress: '',
    validatorAddress: '',
    entries: [],
  };
}

export const UnbondingDelegation = {
  $type: 'cosmos.staking.v1beta1.UnbondingDelegation' as const,

  encode(
    message: UnbondingDelegation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
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
          message.entries.push(
            UnbondingDelegationEntry.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegation {
    return {
      $type: UnbondingDelegation.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map(e =>
        e ? UnbondingDelegationEntry.toJSON(e) : undefined,
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingDelegation>, I>>(
    object: I,
  ): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.entries =
      object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(UnbondingDelegation.$type, UnbondingDelegation);

function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    $type: 'cosmos.staking.v1beta1.UnbondingDelegationEntry',
    creationHeight: Long.ZERO,
    completionTime: undefined,
    initialBalance: '',
    balance: '',
  };
}

export const UnbondingDelegationEntry = {
  $type: 'cosmos.staking.v1beta1.UnbondingDelegationEntry' as const,

  encode(
    message: UnbondingDelegationEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.initialBalance !== '') {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== '') {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UnbondingDelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64() as Long;
          break;
        case 2:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
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
    return {
      $type: UnbondingDelegationEntry.$type,
      creationHeight: isSet(object.creationHeight)
        ? Long.fromString(object.creationHeight)
        : Long.ZERO,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
      initialBalance: isSet(object.initialBalance)
        ? String(object.initialBalance)
        : '',
      balance: isSet(object.balance) ? String(object.balance) : '',
    };
  },

  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingDelegationEntry>, I>>(
    object: I,
  ): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromValue(object.creationHeight)
        : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? '';
    message.balance = object.balance ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  UnbondingDelegationEntry.$type,
  UnbondingDelegationEntry,
);

function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    $type: 'cosmos.staking.v1beta1.RedelegationEntry',
    creationHeight: Long.ZERO,
    completionTime: undefined,
    initialBalance: '',
    sharesDst: '',
  };
}

export const RedelegationEntry = {
  $type: 'cosmos.staking.v1beta1.RedelegationEntry' as const,

  encode(
    message: RedelegationEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.initialBalance !== '') {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== '') {
      writer.uint32(34).string(message.sharesDst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64() as Long;
          break;
        case 2:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
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
    return {
      $type: RedelegationEntry.$type,
      creationHeight: isSet(object.creationHeight)
        ? Long.fromString(object.creationHeight)
        : Long.ZERO,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
      initialBalance: isSet(object.initialBalance)
        ? String(object.initialBalance)
        : '',
      sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : '',
    };
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationEntry>, I>>(
    object: I,
  ): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromValue(object.creationHeight)
        : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? '';
    message.sharesDst = object.sharesDst ?? '';
    return message;
  },
};

messageTypeRegistry.set(RedelegationEntry.$type, RedelegationEntry);

function createBaseRedelegation(): Redelegation {
  return {
    $type: 'cosmos.staking.v1beta1.Redelegation',
    delegatorAddress: '',
    validatorSrcAddress: '',
    validatorDstAddress: '',
    entries: [],
  };
}

export const Redelegation = {
  $type: 'cosmos.staking.v1beta1.Redelegation' as const,

  encode(
    message: Redelegation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== '') {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== '') {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
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
          message.entries.push(
            RedelegationEntry.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    return {
      $type: Redelegation.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorSrcAddress: isSet(object.validatorSrcAddress)
        ? String(object.validatorSrcAddress)
        : '',
      validatorDstAddress: isSet(object.validatorDstAddress)
        ? String(object.validatorDstAddress)
        : '',
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map(e =>
        e ? RedelegationEntry.toJSON(e) : undefined,
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Redelegation>, I>>(
    object: I,
  ): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorSrcAddress = object.validatorSrcAddress ?? '';
    message.validatorDstAddress = object.validatorDstAddress ?? '';
    message.entries =
      object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Redelegation.$type, Redelegation);

function createBaseParams(): Params {
  return {
    $type: 'cosmos.staking.v1beta1.Params',
    unbondingTime: undefined,
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: '',
  };
}

export const Params = {
  $type: 'cosmos.staking.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== '') {
      writer.uint32(42).string(message.bondDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
    return {
      $type: Params.$type,
      unbondingTime: isSet(object.unbondingTime)
        ? Duration.fromJSON(object.unbondingTime)
        : undefined,
      maxValidators: isSet(object.maxValidators)
        ? Number(object.maxValidators)
        : 0,
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      historicalEntries: isSet(object.historicalEntries)
        ? Number(object.historicalEntries)
        : 0,
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : '',
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime
        ? Duration.toJSON(message.unbondingTime)
        : undefined);
    message.maxValidators !== undefined &&
      (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== undefined &&
      (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = Math.round(message.historicalEntries));
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.unbondingTime =
      object.unbondingTime !== undefined && object.unbondingTime !== null
        ? Duration.fromPartial(object.unbondingTime)
        : undefined;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseDelegationResponse(): DelegationResponse {
  return {
    $type: 'cosmos.staking.v1beta1.DelegationResponse',
    delegation: undefined,
    balance: undefined,
  };
}

export const DelegationResponse = {
  $type: 'cosmos.staking.v1beta1.DelegationResponse' as const,

  encode(
    message: DelegationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
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
    return {
      $type: DelegationResponse.$type,
      delegation: isSet(object.delegation)
        ? Delegation.fromJSON(object.delegation)
        : undefined,
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? Delegation.toJSON(message.delegation)
        : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationResponse>, I>>(
    object: I,
  ): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromPartial(object.delegation)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DelegationResponse.$type, DelegationResponse);

function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    $type: 'cosmos.staking.v1beta1.RedelegationEntryResponse',
    redelegationEntry: undefined,
    balance: '',
  };
}

export const RedelegationEntryResponse = {
  $type: 'cosmos.staking.v1beta1.RedelegationEntryResponse' as const,

  encode(
    message: RedelegationEntryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(
        message.redelegationEntry,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.balance !== '') {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RedelegationEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(
            reader,
            reader.uint32(),
          );
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
    return {
      $type: RedelegationEntryResponse.$type,
      redelegationEntry: isSet(object.redelegationEntry)
        ? RedelegationEntry.fromJSON(object.redelegationEntry)
        : undefined,
      balance: isSet(object.balance) ? String(object.balance) : '',
    };
  },

  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined &&
      (obj.redelegationEntry = message.redelegationEntry
        ? RedelegationEntry.toJSON(message.redelegationEntry)
        : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationEntryResponse>, I>>(
    object: I,
  ): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    message.redelegationEntry =
      object.redelegationEntry !== undefined &&
      object.redelegationEntry !== null
        ? RedelegationEntry.fromPartial(object.redelegationEntry)
        : undefined;
    message.balance = object.balance ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  RedelegationEntryResponse.$type,
  RedelegationEntryResponse,
);

function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    $type: 'cosmos.staking.v1beta1.RedelegationResponse',
    redelegation: undefined,
    entries: [],
  };
}

export const RedelegationResponse = {
  $type: 'cosmos.staking.v1beta1.RedelegationResponse' as const,

  encode(
    message: RedelegationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.redelegation !== undefined) {
      Redelegation.encode(
        message.redelegation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(
            RedelegationEntryResponse.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationResponse {
    return {
      $type: RedelegationResponse.$type,
      redelegation: isSet(object.redelegation)
        ? Redelegation.fromJSON(object.redelegation)
        : undefined,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined &&
      (obj.redelegation = message.redelegation
        ? Redelegation.toJSON(message.redelegation)
        : undefined);
    if (message.entries) {
      obj.entries = message.entries.map(e =>
        e ? RedelegationEntryResponse.toJSON(e) : undefined,
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationResponse>, I>>(
    object: I,
  ): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    message.redelegation =
      object.redelegation !== undefined && object.redelegation !== null
        ? Redelegation.fromPartial(object.redelegation)
        : undefined;
    message.entries =
      object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(RedelegationResponse.$type, RedelegationResponse);

function createBasePool(): Pool {
  return {
    $type: 'cosmos.staking.v1beta1.Pool',
    notBondedTokens: '',
    bondedTokens: '',
  };
}

export const Pool = {
  $type: 'cosmos.staking.v1beta1.Pool' as const,

  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notBondedTokens !== '') {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== '') {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
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
    return {
      $type: Pool.$type,
      notBondedTokens: isSet(object.notBondedTokens)
        ? String(object.notBondedTokens)
        : '',
      bondedTokens: isSet(object.bondedTokens)
        ? String(object.bondedTokens)
        : '',
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined &&
      (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined &&
      (obj.bondedTokens = message.bondedTokens);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? '';
    message.bondedTokens = object.bondedTokens ?? '';
    return message;
  },
};

messageTypeRegistry.set(Pool.$type, Pool);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
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
