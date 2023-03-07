/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "cosmos.feegrant.v1beta1";

/** Since: cosmos-sdk 0.43 */

/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
  $type: "cosmos.feegrant.v1beta1.MsgGrantAllowance";
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: Any;
}

/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
  $type: "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
}

/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
  $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowance";
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}

/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
  $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
}

function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return { $type: "cosmos.feegrant.v1beta1.MsgGrantAllowance", granter: "", grantee: "", allowance: undefined };
}

export const MsgGrantAllowance = {
  $type: "cosmos.feegrant.v1beta1.MsgGrantAllowance" as const,

  encode(message: MsgGrantAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrantAllowance {
    return {
      $type: MsgGrantAllowance.$type,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
    };
  },

  toJSON(message: MsgGrantAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance {
    return MsgGrantAllowance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = (object.allowance !== undefined && object.allowance !== null)
      ? Any.fromPartial(object.allowance)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgGrantAllowance.$type, MsgGrantAllowance);

function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return { $type: "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse" };
}

export const MsgGrantAllowanceResponse = {
  $type: "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse" as const,

  encode(_: MsgGrantAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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

  fromJSON(_: any): MsgGrantAllowanceResponse {
    return { $type: MsgGrantAllowanceResponse.$type };
  },

  toJSON(_: MsgGrantAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgGrantAllowanceResponse.$type, MsgGrantAllowanceResponse);

function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return { $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowance", granter: "", grantee: "" };
}

export const MsgRevokeAllowance = {
  $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowance" as const,

  encode(message: MsgRevokeAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeAllowance {
    return {
      $type: MsgRevokeAllowance.$type,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
    };
  },

  toJSON(message: MsgRevokeAllowance): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  create(base?: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgRevokeAllowance.$type, MsgRevokeAllowance);

function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return { $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse" };
}

export const MsgRevokeAllowanceResponse = {
  $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse" as const,

  encode(_: MsgRevokeAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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

  fromJSON(_: any): MsgRevokeAllowanceResponse {
    return { $type: MsgRevokeAllowanceResponse.$type };
  },

  toJSON(_: MsgRevokeAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRevokeAllowanceResponse.$type, MsgRevokeAllowanceResponse);

/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  GrantAllowance(request: DeepPartial<MsgGrantAllowance>): Promise<MsgGrantAllowanceResponse>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>): Promise<MsgRevokeAllowanceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.feegrant.v1beta1.Msg";
    this.rpc = rpc;
    this.GrantAllowance = this.GrantAllowance.bind(this);
    this.RevokeAllowance = this.RevokeAllowance.bind(this);
  }
  GrantAllowance(request: DeepPartial<MsgGrantAllowance>): Promise<MsgGrantAllowanceResponse> {
    const fromPartial = MsgGrantAllowance.fromPartial(request);
    const data = MsgGrantAllowance.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GrantAllowance", data);
    return promise.then((data) => MsgGrantAllowanceResponse.decode(new _m0.Reader(data)));
  }

  RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>): Promise<MsgRevokeAllowanceResponse> {
    const fromPartial = MsgRevokeAllowance.fromPartial(request);
    const data = MsgRevokeAllowance.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "RevokeAllowance", data);
    return promise.then((data) => MsgRevokeAllowanceResponse.decode(new _m0.Reader(data)));
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
