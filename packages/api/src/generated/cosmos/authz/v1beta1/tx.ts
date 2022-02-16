/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Grant } from '../../../cosmos/authz/v1beta1/authz';
import { Any } from '../../../google/protobuf/any';

export const protobufPackage = 'cosmos.authz.v1beta1';

/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
  $type: 'cosmos.authz.v1beta1.MsgGrant';
  granter: string;
  grantee: string;
  grant?: Grant;
}

/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  $type: 'cosmos.authz.v1beta1.MsgExecResponse';
  results: Uint8Array[];
}

/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  $type: 'cosmos.authz.v1beta1.MsgExec';
  grantee: string;
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: Any[];
}

/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {
  $type: 'cosmos.authz.v1beta1.MsgGrantResponse';
}

/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  $type: 'cosmos.authz.v1beta1.MsgRevoke';
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}

/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {
  $type: 'cosmos.authz.v1beta1.MsgRevokeResponse';
}

function createBaseMsgGrant(): MsgGrant {
  return {
    $type: 'cosmos.authz.v1beta1.MsgGrant',
    granter: '',
    grantee: '',
    grant: undefined,
  };
}

export const MsgGrant = {
  $type: 'cosmos.authz.v1beta1.MsgGrant' as const,

  encode(
    message: MsgGrant,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
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
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGrant {
    return {
      $type: MsgGrant.$type,
      granter: isSet(object.granter) ? String(object.granter) : '',
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined,
    };
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined &&
      (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrant>, I>>(object: I): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? Grant.fromPartial(object.grant)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgGrant.$type, MsgGrant);

function createBaseMsgExecResponse(): MsgExecResponse {
  return { $type: 'cosmos.authz.v1beta1.MsgExecResponse', results: [] };
}

export const MsgExecResponse = {
  $type: 'cosmos.authz.v1beta1.MsgExecResponse' as const,

  encode(
    message: MsgExecResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    return {
      $type: MsgExecResponse.$type,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(
    object: I,
  ): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgExecResponse.$type, MsgExecResponse);

function createBaseMsgExec(): MsgExec {
  return { $type: 'cosmos.authz.v1beta1.MsgExec', grantee: '', msgs: [] };
}

export const MsgExec = {
  $type: 'cosmos.authz.v1beta1.MsgExec' as const,

  encode(
    message: MsgExec,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.grantee !== '') {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      $type: MsgExec.$type,
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      msgs: Array.isArray(object?.msgs)
        ? object.msgs.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? '';
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgExec.$type, MsgExec);

function createBaseMsgGrantResponse(): MsgGrantResponse {
  return { $type: 'cosmos.authz.v1beta1.MsgGrantResponse' };
}

export const MsgGrantResponse = {
  $type: 'cosmos.authz.v1beta1.MsgGrantResponse' as const,

  encode(
    _: MsgGrantResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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

  fromJSON(_: any): MsgGrantResponse {
    return {
      $type: MsgGrantResponse.$type,
    };
  },

  toJSON(_: MsgGrantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGrantResponse>, I>>(
    _: I,
  ): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgGrantResponse.$type, MsgGrantResponse);

function createBaseMsgRevoke(): MsgRevoke {
  return {
    $type: 'cosmos.authz.v1beta1.MsgRevoke',
    granter: '',
    grantee: '',
    msgTypeUrl: '',
  };
}

export const MsgRevoke = {
  $type: 'cosmos.authz.v1beta1.MsgRevoke' as const,

  encode(
    message: MsgRevoke,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== '') {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
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
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevoke {
    return {
      $type: MsgRevoke.$type,
      granter: isSet(object.granter) ? String(object.granter) : '',
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : '',
    };
  },

  toJSON(message: MsgRevoke): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevoke>, I>>(
    object: I,
  ): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    message.msgTypeUrl = object.msgTypeUrl ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgRevoke.$type, MsgRevoke);

function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return { $type: 'cosmos.authz.v1beta1.MsgRevokeResponse' };
}

export const MsgRevokeResponse = {
  $type: 'cosmos.authz.v1beta1.MsgRevokeResponse' as const,

  encode(
    _: MsgRevokeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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

  fromJSON(_: any): MsgRevokeResponse {
    return {
      $type: MsgRevokeResponse.$type,
    };
  },

  toJSON(_: MsgRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeResponse>, I>>(
    _: I,
  ): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRevokeResponse.$type, MsgRevokeResponse);

/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  Grant(request: DeepPartial<MsgGrant>): Promise<MsgGrantResponse>;
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  Exec(request: DeepPartial<MsgExec>): Promise<MsgExecResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  Revoke(request: DeepPartial<MsgRevoke>): Promise<MsgRevokeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Grant = this.Grant.bind(this);
    this.Exec = this.Exec.bind(this);
    this.Revoke = this.Revoke.bind(this);
  }
  Grant(request: DeepPartial<MsgGrant>): Promise<MsgGrantResponse> {
    const fromPartial = MsgGrant.fromPartial(request);
    const data = MsgGrant.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.authz.v1beta1.Msg', 'Grant', data);
    return promise.then(data => MsgGrantResponse.decode(new _m0.Reader(data)));
  }

  Exec(request: DeepPartial<MsgExec>): Promise<MsgExecResponse> {
    const fromPartial = MsgExec.fromPartial(request);
    const data = MsgExec.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.authz.v1beta1.Msg', 'Exec', data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  Revoke(request: DeepPartial<MsgRevoke>): Promise<MsgRevokeResponse> {
    const fromPartial = MsgRevoke.fromPartial(request);
    const data = MsgRevoke.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.authz.v1beta1.Msg',
      'Revoke',
      data,
    );
    return promise.then(data => MsgRevokeResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
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
