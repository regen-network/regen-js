/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "cosmos.crisis.v1beta1";

/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
  $type: "cosmos.crisis.v1beta1.MsgVerifyInvariant";
  sender: string;
  invariantModuleName: string;
  invariantRoute: string;
}

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
  $type: "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
}

function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return { $type: "cosmos.crisis.v1beta1.MsgVerifyInvariant", sender: "", invariantModuleName: "", invariantRoute: "" };
}

export const MsgVerifyInvariant = {
  $type: "cosmos.crisis.v1beta1.MsgVerifyInvariant" as const,

  encode(message: MsgVerifyInvariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVerifyInvariant {
    return {
      $type: MsgVerifyInvariant.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      invariantModuleName: isSet(object.invariantModuleName) ? String(object.invariantModuleName) : "",
      invariantRoute: isSet(object.invariantRoute) ? String(object.invariantRoute) : "",
    };
  },

  toJSON(message: MsgVerifyInvariant): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },

  create(base?: DeepPartial<MsgVerifyInvariant>): MsgVerifyInvariant {
    return MsgVerifyInvariant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgVerifyInvariant>): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgVerifyInvariant.$type, MsgVerifyInvariant);

function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return { $type: "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse" };
}

export const MsgVerifyInvariantResponse = {
  $type: "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse" as const,

  encode(_: MsgVerifyInvariantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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

  fromJSON(_: any): MsgVerifyInvariantResponse {
    return { $type: MsgVerifyInvariantResponse.$type };
  },

  toJSON(_: MsgVerifyInvariantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse {
    return MsgVerifyInvariantResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgVerifyInvariantResponse.$type, MsgVerifyInvariantResponse);

/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  VerifyInvariant(request: DeepPartial<MsgVerifyInvariant>): Promise<MsgVerifyInvariantResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.crisis.v1beta1.Msg";
    this.rpc = rpc;
    this.VerifyInvariant = this.VerifyInvariant.bind(this);
  }
  VerifyInvariant(request: DeepPartial<MsgVerifyInvariant>): Promise<MsgVerifyInvariantResponse> {
    const fromPartial = MsgVerifyInvariant.fromPartial(request);
    const data = MsgVerifyInvariant.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "VerifyInvariant", data);
    return promise.then((data) => MsgVerifyInvariantResponse.decode(new _m0.Reader(data)));
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
