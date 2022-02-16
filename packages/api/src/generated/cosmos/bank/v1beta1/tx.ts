/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Input, Output } from '../../../cosmos/bank/v1beta1/bank';

export const protobufPackage = 'cosmos.bank.v1beta1';

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  $type: 'cosmos.bank.v1beta1.MsgSend';
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
  $type: 'cosmos.bank.v1beta1.MsgSendResponse';
}

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  $type: 'cosmos.bank.v1beta1.MsgMultiSend';
  inputs: Input[];
  outputs: Output[];
}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
  $type: 'cosmos.bank.v1beta1.MsgMultiSendResponse';
}

function createBaseMsgSend(): MsgSend {
  return {
    $type: 'cosmos.bank.v1beta1.MsgSend',
    fromAddress: '',
    toAddress: '',
    amount: [],
  };
}

export const MsgSend = {
  $type: 'cosmos.bank.v1beta1.MsgSend' as const,

  encode(
    message: MsgSend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fromAddress !== '') {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== '') {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      $type: MsgSend.$type,
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : '',
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : '',
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? '';
    message.toAddress = object.toAddress ?? '';
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgSend.$type, MsgSend);

function createBaseMsgSendResponse(): MsgSendResponse {
  return { $type: 'cosmos.bank.v1beta1.MsgSendResponse' };
}

export const MsgSendResponse = {
  $type: 'cosmos.bank.v1beta1.MsgSendResponse' as const,

  encode(
    _: MsgSendResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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

  fromJSON(_: any): MsgSendResponse {
    return {
      $type: MsgSendResponse.$type,
    };
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(
    _: I,
  ): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSendResponse.$type, MsgSendResponse);

function createBaseMsgMultiSend(): MsgMultiSend {
  return { $type: 'cosmos.bank.v1beta1.MsgMultiSend', inputs: [], outputs: [] };
}

export const MsgMultiSend = {
  $type: 'cosmos.bank.v1beta1.MsgMultiSend' as const,

  encode(
    message: MsgMultiSend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiSend {
    return {
      $type: MsgMultiSend.$type,
      inputs: Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => Input.fromJSON(e))
        : [],
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => Output.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgMultiSend): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => (e ? Input.toJSON(e) : undefined));
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map(e =>
        e ? Output.toJSON(e) : undefined,
      );
    } else {
      obj.outputs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiSend>, I>>(
    object: I,
  ): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgMultiSend.$type, MsgMultiSend);

function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return { $type: 'cosmos.bank.v1beta1.MsgMultiSendResponse' };
}

export const MsgMultiSendResponse = {
  $type: 'cosmos.bank.v1beta1.MsgMultiSendResponse' as const,

  encode(
    _: MsgMultiSendResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgMultiSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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

  fromJSON(_: any): MsgMultiSendResponse {
    return {
      $type: MsgMultiSendResponse.$type,
    };
  },

  toJSON(_: MsgMultiSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiSendResponse>, I>>(
    _: I,
  ): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgMultiSendResponse.$type, MsgMultiSendResponse);

/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  Send(request: DeepPartial<MsgSend>): Promise<MsgSendResponse>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  MultiSend(request: DeepPartial<MsgMultiSend>): Promise<MsgMultiSendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Send = this.Send.bind(this);
    this.MultiSend = this.MultiSend.bind(this);
  }
  Send(request: DeepPartial<MsgSend>): Promise<MsgSendResponse> {
    const fromPartial = MsgSend.fromPartial(request);
    const data = MsgSend.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'Send', data);
    return promise.then(data => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  MultiSend(request: DeepPartial<MsgMultiSend>): Promise<MsgMultiSendResponse> {
    const fromPartial = MsgMultiSend.fromPartial(request);
    const data = MsgMultiSend.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.bank.v1beta1.Msg',
      'MultiSend',
      data,
    );
    return promise.then(data =>
      MsgMultiSendResponse.decode(new _m0.Reader(data)),
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
