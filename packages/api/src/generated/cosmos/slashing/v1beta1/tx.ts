/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "cosmos.slashing.v1beta1";

/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
  $type: "cosmos.slashing.v1beta1.MsgUnjail";
  validatorAddr: string;
}

/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
  $type: "cosmos.slashing.v1beta1.MsgUnjailResponse";
}

function createBaseMsgUnjail(): MsgUnjail {
  return { $type: "cosmos.slashing.v1beta1.MsgUnjail", validatorAddr: "" };
}

export const MsgUnjail = {
  $type: "cosmos.slashing.v1beta1.MsgUnjail" as const,

  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnjail {
    return { $type: MsgUnjail.$type, validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: MsgUnjail): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create(base?: DeepPartial<MsgUnjail>): MsgUnjail {
    return MsgUnjail.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUnjail.$type, MsgUnjail);

function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return { $type: "cosmos.slashing.v1beta1.MsgUnjailResponse" };
}

export const MsgUnjailResponse = {
  $type: "cosmos.slashing.v1beta1.MsgUnjailResponse" as const,

  encode(_: MsgUnjailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
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

  fromJSON(_: any): MsgUnjailResponse {
    return { $type: MsgUnjailResponse.$type };
  },

  toJSON(_: MsgUnjailResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnjailResponse>): MsgUnjailResponse {
    return MsgUnjailResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUnjailResponse.$type, MsgUnjailResponse);

/** Msg defines the slashing Msg service. */
export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  Unjail(request: DeepPartial<MsgUnjail>): Promise<MsgUnjailResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.slashing.v1beta1.Msg";
    this.rpc = rpc;
    this.Unjail = this.Unjail.bind(this);
  }
  Unjail(request: DeepPartial<MsgUnjail>): Promise<MsgUnjailResponse> {
    const fromPartial = MsgUnjail.fromPartial(request);
    const data = MsgUnjail.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Unjail", data);
    return promise.then((data) => MsgUnjailResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
