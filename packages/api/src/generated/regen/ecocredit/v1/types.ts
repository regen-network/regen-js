/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { CreditType } from './state';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'regen.ecocredit.v1';

/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
  $type: 'regen.ecocredit.v1.Params';
  /**
   * credit_class_fee is a list of credit class creation fees accepted when
   * creating a credit class. Any fee listed is accepted and charged to the
   * credit class creator when creating a credit class.
   */
  creditClassFee: Coin[];
  /**
   * basket_fee is a list of basket creation fees accepted when creating a
   * basket. Any fee listed is accepted and charged to the basket creator when
   * creating a basket.
   */
  basketFee: Coin[];
  /**
   * allowed_class_creators is an allowlist defining the addresses with the
   * required permissions to create credit classes when allowlist_enabled is set
   * to true. If allowlist_enabled is set to false, this list has no effect.
   */
  allowedClassCreators: string[];
  /**
   * allowlist_enabled determines whether or not the allowlist for creating
   * credit classes is enabled. When set to true, only the addresses listed in
   * allowed_class_creators can create credit classes. When set to false, any
   * address can create credit classes.
   */
  allowlistEnabled: boolean;
  /**
   * allowed_denoms is a list of bank denoms allowed to be used in the ask price
   * of sell orders.
   *
   * Since Revision 2
   */
  allowedDenoms: AllowedDenom[];
  /**
   * AllowedBridgeChains is a list of chain names that are allowed to be used in
   * bridge operations.
   *
   * Since Revision 2
   */
  allowedBridgeChains: string[];
}

/** Credits represents a simple structure for credits. */
export interface Credits {
  $type: 'regen.ecocredit.v1.Credits';
  /** batch_denom is the denom of the credit batch. */
  batchDenom: string;
  /** amount is the amount of credits. */
  amount: string;
}

/** BatchIssuance represents a simple structure for a credit batch issuance. */
export interface BatchIssuance {
  $type: 'regen.ecocredit.v1.BatchIssuance';
  /** recipient is the address of the account receiving the issued credits. */
  recipient: string;
  /**
   * tradable_amount is the amount of credits that the recipient will receive in
   * a tradable state. The number of decimal places must be less than or equal
   * to the credit type precision.
   */
  tradableAmount: string;
  /**
   * retired_amount is the amount of credits that the recipient will receive in
   * a retired state. The number of decimal places must be less than or equal to
   * the credit type precision.
   */
  retiredAmount: string;
  /**
   * retirement_jurisdiction is the jurisdiction of the recipient and is only
   * required if retired_amount is positive. A jurisdiction has the following
   * format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  retirementJurisdiction: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. The reason will be included in EventRetire and is not
   * stored in state.
   *
   * Since Revision 2
   */
  retirementReason: string;
}

/**
 * OriginTx is the transaction from another chain or registry that triggered
 * the minting of credits.
 */
export interface OriginTx {
  $type: 'regen.ecocredit.v1.OriginTx';
  /**
   * id is the transaction ID of an originating transaction or operation based
   * on a type (i.e. transaction ID, serial number).
   */
  id: string;
  /**
   * source is the source chain or registry of the transaction originating the
   * mint process (e.g. polygon, ethereum, verra).
   */
  source: string;
  /**
   * contract is the address of the contract on the source chain that was
   * executed when creating the transaction. This address will be stored in
   * state separately from the origin tx and on a per credit batch basis to be
   * used when sending credits back to the source chain. This field can be left
   * blank if credits are bridged from a non-contract-based source.
   */
  contract: string;
  /**
   * note is a reference note for accounting that will be included in an event
   * emitted from either Msg/CreateBatch or Msg/MintBatchCredits.
   */
  note: string;
}

/**
 * CreditTypeProposal is a gov Content type for adding a credit type.
 * Deprecated (Since Revision 2): This message is no longer used and will be
 * removed in the next version. See MsgAddCreditType.
 */
export interface CreditTypeProposal {
  $type: 'regen.ecocredit.v1.CreditTypeProposal';
  /** title is the title of the proposal. */
  title: string;
  /** description is the description of the proposal. */
  description: string;
  /**
   * credit_type is the credit type to be added to the network if the proposal
   * passes.
   */
  creditType?: CreditType;
}

/**
 * AllowedDenom represents the information for an allowed ask denom.
 *
 * Since Revision 2
 *
 * Deprecated(Since Revision 2): This type was added to support historical
 * queries for params but will also be removed in the next version.
 */
export interface AllowedDenom {
  $type: 'regen.ecocredit.v1.AllowedDenom';
  /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
  bankDenom: string;
  /**
   * display_denom is the denom to display to the user and is informational.
   * Because the denom is likely an IBC denom, this should be chosen by
   * governance to represent the consensus trusted name of the denom.
   */
  displayDenom: string;
  /**
   * exponent is the exponent that relates the denom to the display_denom and is
   * informational
   */
  exponent: number;
}

function createBaseParams(): Params {
  return {
    $type: 'regen.ecocredit.v1.Params',
    creditClassFee: [],
    basketFee: [],
    allowedClassCreators: [],
    allowlistEnabled: false,
    allowedDenoms: [],
    allowedBridgeChains: [],
  };
}

export const Params = {
  $type: 'regen.ecocredit.v1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.creditClassFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.basketFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.allowedClassCreators) {
      writer.uint32(26).string(v!);
    }
    if (message.allowlistEnabled === true) {
      writer.uint32(32).bool(message.allowlistEnabled);
    }
    for (const v of message.allowedDenoms) {
      AllowedDenom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.allowedBridgeChains) {
      writer.uint32(50).string(v!);
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
          message.creditClassFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.basketFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.allowedClassCreators.push(reader.string());
          break;
        case 4:
          message.allowlistEnabled = reader.bool();
          break;
        case 5:
          message.allowedDenoms.push(
            AllowedDenom.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.allowedBridgeChains.push(reader.string());
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
      creditClassFee: Array.isArray(object?.creditClassFee)
        ? object.creditClassFee.map((e: any) => Coin.fromJSON(e))
        : [],
      basketFee: Array.isArray(object?.basketFee)
        ? object.basketFee.map((e: any) => Coin.fromJSON(e))
        : [],
      allowedClassCreators: Array.isArray(object?.allowedClassCreators)
        ? object.allowedClassCreators.map((e: any) => String(e))
        : [],
      allowlistEnabled: isSet(object.allowlistEnabled)
        ? Boolean(object.allowlistEnabled)
        : false,
      allowedDenoms: Array.isArray(object?.allowedDenoms)
        ? object.allowedDenoms.map((e: any) => AllowedDenom.fromJSON(e))
        : [],
      allowedBridgeChains: Array.isArray(object?.allowedBridgeChains)
        ? object.allowedBridgeChains.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.creditClassFee) {
      obj.creditClassFee = message.creditClassFee.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.creditClassFee = [];
    }
    if (message.basketFee) {
      obj.basketFee = message.basketFee.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.basketFee = [];
    }
    if (message.allowedClassCreators) {
      obj.allowedClassCreators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowedClassCreators = [];
    }
    message.allowlistEnabled !== undefined &&
      (obj.allowlistEnabled = message.allowlistEnabled);
    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map(e =>
        e ? AllowedDenom.toJSON(e) : undefined,
      );
    } else {
      obj.allowedDenoms = [];
    }
    if (message.allowedBridgeChains) {
      obj.allowedBridgeChains = message.allowedBridgeChains.map(e => e);
    } else {
      obj.allowedBridgeChains = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.creditClassFee =
      object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
    message.basketFee = object.basketFee?.map(e => Coin.fromPartial(e)) || [];
    message.allowedClassCreators =
      object.allowedClassCreators?.map(e => e) || [];
    message.allowlistEnabled = object.allowlistEnabled ?? false;
    message.allowedDenoms =
      object.allowedDenoms?.map(e => AllowedDenom.fromPartial(e)) || [];
    message.allowedBridgeChains = object.allowedBridgeChains?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseCredits(): Credits {
  return { $type: 'regen.ecocredit.v1.Credits', batchDenom: '', amount: '' };
}

export const Credits = {
  $type: 'regen.ecocredit.v1.Credits' as const,

  encode(
    message: Credits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Credits {
    return {
      $type: Credits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
    };
  },

  toJSON(message: Credits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Credits>, I>>(object: I): Credits {
    const message = createBaseCredits();
    message.batchDenom = object.batchDenom ?? '';
    message.amount = object.amount ?? '';
    return message;
  },
};

messageTypeRegistry.set(Credits.$type, Credits);

function createBaseBatchIssuance(): BatchIssuance {
  return {
    $type: 'regen.ecocredit.v1.BatchIssuance',
    recipient: '',
    tradableAmount: '',
    retiredAmount: '',
    retirementJurisdiction: '',
    retirementReason: '',
  };
}

export const BatchIssuance = {
  $type: 'regen.ecocredit.v1.BatchIssuance' as const,

  encode(
    message: BatchIssuance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.recipient !== '') {
      writer.uint32(10).string(message.recipient);
    }
    if (message.tradableAmount !== '') {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.retirementJurisdiction !== '') {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    if (message.retirementReason !== '') {
      writer.uint32(42).string(message.retirementReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchIssuance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchIssuance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.retirementJurisdiction = reader.string();
          break;
        case 5:
          message.retirementReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchIssuance {
    return {
      $type: BatchIssuance.$type,
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
      retirementJurisdiction: isSet(object.retirementJurisdiction)
        ? String(object.retirementJurisdiction)
        : '',
      retirementReason: isSet(object.retirementReason)
        ? String(object.retirementReason)
        : '',
    };
  },

  toJSON(message: BatchIssuance): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    message.retirementJurisdiction !== undefined &&
      (obj.retirementJurisdiction = message.retirementJurisdiction);
    message.retirementReason !== undefined &&
      (obj.retirementReason = message.retirementReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchIssuance>, I>>(
    object: I,
  ): BatchIssuance {
    const message = createBaseBatchIssuance();
    message.recipient = object.recipient ?? '';
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    message.retirementJurisdiction = object.retirementJurisdiction ?? '';
    message.retirementReason = object.retirementReason ?? '';
    return message;
  },
};

messageTypeRegistry.set(BatchIssuance.$type, BatchIssuance);

function createBaseOriginTx(): OriginTx {
  return {
    $type: 'regen.ecocredit.v1.OriginTx',
    id: '',
    source: '',
    contract: '',
    note: '',
  };
}

export const OriginTx = {
  $type: 'regen.ecocredit.v1.OriginTx' as const,

  encode(
    message: OriginTx,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.source !== '') {
      writer.uint32(18).string(message.source);
    }
    if (message.contract !== '') {
      writer.uint32(26).string(message.contract);
    }
    if (message.note !== '') {
      writer.uint32(34).string(message.note);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OriginTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.note = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OriginTx {
    return {
      $type: OriginTx.$type,
      id: isSet(object.id) ? String(object.id) : '',
      source: isSet(object.source) ? String(object.source) : '',
      contract: isSet(object.contract) ? String(object.contract) : '',
      note: isSet(object.note) ? String(object.note) : '',
    };
  },

  toJSON(message: OriginTx): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.source !== undefined && (obj.source = message.source);
    message.contract !== undefined && (obj.contract = message.contract);
    message.note !== undefined && (obj.note = message.note);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OriginTx>, I>>(object: I): OriginTx {
    const message = createBaseOriginTx();
    message.id = object.id ?? '';
    message.source = object.source ?? '';
    message.contract = object.contract ?? '';
    message.note = object.note ?? '';
    return message;
  },
};

messageTypeRegistry.set(OriginTx.$type, OriginTx);

function createBaseCreditTypeProposal(): CreditTypeProposal {
  return {
    $type: 'regen.ecocredit.v1.CreditTypeProposal',
    title: '',
    description: '',
    creditType: undefined,
  };
}

export const CreditTypeProposal = {
  $type: 'regen.ecocredit.v1.CreditTypeProposal' as const,

  encode(
    message: CreditTypeProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditTypeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.creditType = CreditType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreditTypeProposal {
    return {
      $type: CreditTypeProposal.$type,
      title: isSet(object.title) ? String(object.title) : '',
      description: isSet(object.description) ? String(object.description) : '',
      creditType: isSet(object.creditType)
        ? CreditType.fromJSON(object.creditType)
        : undefined,
    };
  },

  toJSON(message: CreditTypeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.creditType !== undefined &&
      (obj.creditType = message.creditType
        ? CreditType.toJSON(message.creditType)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreditTypeProposal>, I>>(
    object: I,
  ): CreditTypeProposal {
    const message = createBaseCreditTypeProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.creditType =
      object.creditType !== undefined && object.creditType !== null
        ? CreditType.fromPartial(object.creditType)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CreditTypeProposal.$type, CreditTypeProposal);

function createBaseAllowedDenom(): AllowedDenom {
  return {
    $type: 'regen.ecocredit.v1.AllowedDenom',
    bankDenom: '',
    displayDenom: '',
    exponent: 0,
  };
}

export const AllowedDenom = {
  $type: 'regen.ecocredit.v1.AllowedDenom' as const,

  encode(
    message: AllowedDenom,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bankDenom !== '') {
      writer.uint32(10).string(message.bankDenom);
    }
    if (message.displayDenom !== '') {
      writer.uint32(18).string(message.displayDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bankDenom = reader.string();
          break;
        case 2:
          message.displayDenom = reader.string();
          break;
        case 3:
          message.exponent = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowedDenom {
    return {
      $type: AllowedDenom.$type,
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : '',
      displayDenom: isSet(object.displayDenom)
        ? String(object.displayDenom)
        : '',
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
    };
  },

  toJSON(message: AllowedDenom): unknown {
    const obj: any = {};
    message.bankDenom !== undefined && (obj.bankDenom = message.bankDenom);
    message.displayDenom !== undefined &&
      (obj.displayDenom = message.displayDenom);
    message.exponent !== undefined &&
      (obj.exponent = Math.round(message.exponent));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowedDenom>, I>>(
    object: I,
  ): AllowedDenom {
    const message = createBaseAllowedDenom();
    message.bankDenom = object.bankDenom ?? '';
    message.displayDenom = object.displayDenom ?? '';
    message.exponent = object.exponent ?? 0;
    return message;
  },
};

messageTypeRegistry.set(AllowedDenom.$type, AllowedDenom);

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
