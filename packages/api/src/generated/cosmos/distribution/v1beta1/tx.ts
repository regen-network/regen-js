/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../base/v1beta1/coin';

export const protobufPackage = 'cosmos.distribution.v1beta1';

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  $type: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddress';
  delegatorAddress: string;
  withdrawAddress: string;
}

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
  $type: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse';
}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  $type: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';
  delegatorAddress: string;
  validatorAddress: string;
}

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
  $type: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse';
  /** Since: cosmos-sdk 0.46 */
  amount: Coin[];
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  $type: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission';
  validatorAddress: string;
}

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
  $type: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse';
  /** Since: cosmos-sdk 0.46 */
  amount: Coin[];
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  $type: 'cosmos.distribution.v1beta1.MsgFundCommunityPool';
  amount: Coin[];
  depositor: string;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
  $type: 'cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse';
}

function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    $type: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
    delegatorAddress: '',
    withdrawAddress: '',
  };
}

export const MsgSetWithdrawAddress = {
  $type: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddress' as const,

  encode(
    message: MsgSetWithdrawAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== '') {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetWithdrawAddress {
    return {
      $type: MsgSetWithdrawAddress.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      withdrawAddress: isSet(object.withdrawAddress)
        ? String(object.withdrawAddress)
        : '',
    };
  },

  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined &&
      (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(
    object: I,
  ): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.withdrawAddress = object.withdrawAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgSetWithdrawAddress.$type, MsgSetWithdrawAddress);

function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return { $type: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse' };
}

export const MsgSetWithdrawAddressResponse = {
  $type: 'cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse' as const,

  encode(
    _: MsgSetWithdrawAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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

  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    return {
      $type: MsgSetWithdrawAddressResponse.$type,
    };
  },

  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(
    _: I,
  ): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgSetWithdrawAddressResponse.$type,
  MsgSetWithdrawAddressResponse,
);

function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    $type: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    delegatorAddress: '',
    validatorAddress: '',
  };
}

export const MsgWithdrawDelegatorReward = {
  $type: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward' as const,

  encode(
    message: MsgWithdrawDelegatorReward,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
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

  fromJSON(object: any): MsgWithdrawDelegatorReward {
    return {
      $type: MsgWithdrawDelegatorReward.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
    };
  },

  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(
    object: I,
  ): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgWithdrawDelegatorReward.$type,
  MsgWithdrawDelegatorReward,
);

function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse',
    amount: [],
  };
}

export const MsgWithdrawDelegatorRewardResponse = {
  $type:
    'cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse' as const,

  encode(
    message: MsgWithdrawDelegatorRewardResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawDelegatorRewardResponse {
    return {
      $type: MsgWithdrawDelegatorRewardResponse.$type,
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>,
  >(object: I): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MsgWithdrawDelegatorRewardResponse.$type,
  MsgWithdrawDelegatorRewardResponse,
);

function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    $type: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
    validatorAddress: '',
  };
}

export const MsgWithdrawValidatorCommission = {
  $type: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission' as const,

  encode(
    message: MsgWithdrawValidatorCommission,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawValidatorCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawValidatorCommission {
    return {
      $type: MsgWithdrawValidatorCommission.$type,
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
    };
  },

  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(
    object: I,
  ): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgWithdrawValidatorCommission.$type,
  MsgWithdrawValidatorCommission,
);

function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {
    $type: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse',
    amount: [],
  };
}

export const MsgWithdrawValidatorCommissionResponse = {
  $type:
    'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse' as const,

  encode(
    message: MsgWithdrawValidatorCommissionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawValidatorCommissionResponse {
    return {
      $type: MsgWithdrawValidatorCommissionResponse.$type,
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>,
  >(object: I): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MsgWithdrawValidatorCommissionResponse.$type,
  MsgWithdrawValidatorCommissionResponse,
);

function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    $type: 'cosmos.distribution.v1beta1.MsgFundCommunityPool',
    amount: [],
    depositor: '',
  };
}

export const MsgFundCommunityPool = {
  $type: 'cosmos.distribution.v1beta1.MsgFundCommunityPool' as const,

  encode(
    message: MsgFundCommunityPool,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== '') {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundCommunityPool {
    return {
      $type: MsgFundCommunityPool.$type,
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
      depositor: isSet(object.depositor) ? String(object.depositor) : '',
    };
  },

  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(
    object: I,
  ): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgFundCommunityPool.$type, MsgFundCommunityPool);

function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return { $type: 'cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse' };
}

export const MsgFundCommunityPoolResponse = {
  $type: 'cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse' as const,

  encode(
    _: MsgFundCommunityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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

  fromJSON(_: any): MsgFundCommunityPoolResponse {
    return {
      $type: MsgFundCommunityPoolResponse.$type,
    };
  },

  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(
    _: I,
  ): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgFundCommunityPoolResponse.$type,
  MsgFundCommunityPoolResponse,
);

/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(
    request: DeepPartial<MsgSetWithdrawAddress>,
  ): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(
    request: DeepPartial<MsgWithdrawDelegatorReward>,
  ): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(
    request: DeepPartial<MsgWithdrawValidatorCommission>,
  ): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(
    request: DeepPartial<MsgFundCommunityPool>,
  ): Promise<MsgFundCommunityPoolResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
    this.WithdrawValidatorCommission =
      this.WithdrawValidatorCommission.bind(this);
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
  }
  SetWithdrawAddress(
    request: DeepPartial<MsgSetWithdrawAddress>,
  ): Promise<MsgSetWithdrawAddressResponse> {
    const fromPartial = MsgSetWithdrawAddress.fromPartial(request);
    const data = MsgSetWithdrawAddress.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Msg',
      'SetWithdrawAddress',
      data,
    );
    return promise.then(data =>
      MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)),
    );
  }

  WithdrawDelegatorReward(
    request: DeepPartial<MsgWithdrawDelegatorReward>,
  ): Promise<MsgWithdrawDelegatorRewardResponse> {
    const fromPartial = MsgWithdrawDelegatorReward.fromPartial(request);
    const data = MsgWithdrawDelegatorReward.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Msg',
      'WithdrawDelegatorReward',
      data,
    );
    return promise.then(data =>
      MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)),
    );
  }

  WithdrawValidatorCommission(
    request: DeepPartial<MsgWithdrawValidatorCommission>,
  ): Promise<MsgWithdrawValidatorCommissionResponse> {
    const fromPartial = MsgWithdrawValidatorCommission.fromPartial(request);
    const data = MsgWithdrawValidatorCommission.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Msg',
      'WithdrawValidatorCommission',
      data,
    );
    return promise.then(data =>
      MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)),
    );
  }

  FundCommunityPool(
    request: DeepPartial<MsgFundCommunityPool>,
  ): Promise<MsgFundCommunityPoolResponse> {
    const fromPartial = MsgFundCommunityPool.fromPartial(request);
    const data = MsgFundCommunityPool.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.distribution.v1beta1.Msg',
      'FundCommunityPool',
      data,
    );
    return promise.then(data =>
      MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)),
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
