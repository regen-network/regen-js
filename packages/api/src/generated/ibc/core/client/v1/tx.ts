/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../../google/protobuf/any';

export const protobufPackage = 'ibc.core.client.v1';

/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  $type: 'ibc.core.client.v1.MsgCreateClient';
  /** light client state */
  clientState?: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState?: Any;
  /** signer address */
  signer: string;
}

/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {
  $type: 'ibc.core.client.v1.MsgCreateClientResponse';
}

/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClient {
  $type: 'ibc.core.client.v1.MsgUpdateClient';
  /** client unique identifier */
  clientId: string;
  /** client message to update the light client */
  clientMessage?: Any;
  /** signer address */
  signer: string;
}

/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
  $type: 'ibc.core.client.v1.MsgUpdateClientResponse';
}

/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  $type: 'ibc.core.client.v1.MsgUpgradeClient';
  /** client unique identifier */
  clientId: string;
  /** upgraded client state */
  clientState?: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState?: Any;
  /** proof that old chain committed to new client */
  proofUpgradeClient: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proofUpgradeConsensusState: Uint8Array;
  /** signer address */
  signer: string;
}

/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {
  $type: 'ibc.core.client.v1.MsgUpgradeClientResponse';
}

/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * Warning: DEPRECATED
 */
export interface MsgSubmitMisbehaviour {
  $type: 'ibc.core.client.v1.MsgSubmitMisbehaviour';
  /**
   * client unique identifier
   *
   * @deprecated
   */
  clientId: string;
  /**
   * misbehaviour used for freezing the light client
   *
   * @deprecated
   */
  misbehaviour?: Any;
  /**
   * signer address
   *
   * @deprecated
   */
  signer: string;
}

/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {
  $type: 'ibc.core.client.v1.MsgSubmitMisbehaviourResponse';
}

function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    $type: 'ibc.core.client.v1.MsgCreateClient',
    clientState: undefined,
    consensusState: undefined,
    signer: '',
  };
}

export const MsgCreateClient = {
  $type: 'ibc.core.client.v1.MsgCreateClient' as const,

  encode(
    message: MsgCreateClient,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateClient {
    return {
      $type: MsgCreateClient.$type,
      clientState: isSet(object.clientState)
        ? Any.fromJSON(object.clientState)
        : undefined,
      consensusState: isSet(object.consensusState)
        ? Any.fromJSON(object.consensusState)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateClient>, I>>(
    object: I,
  ): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.signer = object.signer ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClient.$type, MsgCreateClient);

function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return { $type: 'ibc.core.client.v1.MsgCreateClientResponse' };
}

export const MsgCreateClientResponse = {
  $type: 'ibc.core.client.v1.MsgCreateClientResponse' as const,

  encode(
    _: MsgCreateClientResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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

  fromJSON(_: any): MsgCreateClientResponse {
    return {
      $type: MsgCreateClientResponse.$type,
    };
  },

  toJSON(_: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateClientResponse>, I>>(
    _: I,
  ): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClientResponse.$type, MsgCreateClientResponse);

function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    $type: 'ibc.core.client.v1.MsgUpdateClient',
    clientId: '',
    clientMessage: undefined,
    signer: '',
  };
}

export const MsgUpdateClient = {
  $type: 'ibc.core.client.v1.MsgUpdateClient' as const,

  encode(
    message: MsgUpdateClient,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== undefined) {
      Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClient {
    return {
      $type: MsgUpdateClient.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      clientMessage: isSet(object.clientMessage)
        ? Any.fromJSON(object.clientMessage)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientMessage !== undefined &&
      (obj.clientMessage = message.clientMessage
        ? Any.toJSON(message.clientMessage)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClient>, I>>(
    object: I,
  ): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? '';
    message.clientMessage =
      object.clientMessage !== undefined && object.clientMessage !== null
        ? Any.fromPartial(object.clientMessage)
        : undefined;
    message.signer = object.signer ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClient.$type, MsgUpdateClient);

function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return { $type: 'ibc.core.client.v1.MsgUpdateClientResponse' };
}

export const MsgUpdateClientResponse = {
  $type: 'ibc.core.client.v1.MsgUpdateClientResponse' as const,

  encode(
    _: MsgUpdateClientResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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

  fromJSON(_: any): MsgUpdateClientResponse {
    return {
      $type: MsgUpdateClientResponse.$type,
    };
  },

  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClientResponse>, I>>(
    _: I,
  ): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClientResponse.$type, MsgUpdateClientResponse);

function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    $type: 'ibc.core.client.v1.MsgUpgradeClient',
    clientId: '',
    clientState: undefined,
    consensusState: undefined,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: '',
  };
}

export const MsgUpgradeClient = {
  $type: 'ibc.core.client.v1.MsgUpgradeClient' as const,

  encode(
    message: MsgUpgradeClient,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== '') {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpgradeClient {
    return {
      $type: MsgUpgradeClient.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      clientState: isSet(object.clientState)
        ? Any.fromJSON(object.clientState)
        : undefined,
      consensusState: isSet(object.consensusState)
        ? Any.fromJSON(object.consensusState)
        : undefined,
      proofUpgradeClient: isSet(object.proofUpgradeClient)
        ? bytesFromBase64(object.proofUpgradeClient)
        : new Uint8Array(),
      proofUpgradeConsensusState: isSet(object.proofUpgradeConsensusState)
        ? bytesFromBase64(object.proofUpgradeConsensusState)
        : new Uint8Array(),
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgUpgradeClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    message.proofUpgradeClient !== undefined &&
      (obj.proofUpgradeClient = base64FromBytes(
        message.proofUpgradeClient !== undefined
          ? message.proofUpgradeClient
          : new Uint8Array(),
      ));
    message.proofUpgradeConsensusState !== undefined &&
      (obj.proofUpgradeConsensusState = base64FromBytes(
        message.proofUpgradeConsensusState !== undefined
          ? message.proofUpgradeConsensusState
          : new Uint8Array(),
      ));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeClient>, I>>(
    object: I,
  ): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? '';
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState =
      object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgUpgradeClient.$type, MsgUpgradeClient);

function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return { $type: 'ibc.core.client.v1.MsgUpgradeClientResponse' };
}

export const MsgUpgradeClientResponse = {
  $type: 'ibc.core.client.v1.MsgUpgradeClientResponse' as const,

  encode(
    _: MsgUpgradeClientResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpgradeClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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

  fromJSON(_: any): MsgUpgradeClientResponse {
    return {
      $type: MsgUpgradeClientResponse.$type,
    };
  },

  toJSON(_: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeClientResponse>, I>>(
    _: I,
  ): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpgradeClientResponse.$type,
  MsgUpgradeClientResponse,
);

function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    $type: 'ibc.core.client.v1.MsgSubmitMisbehaviour',
    clientId: '',
    misbehaviour: undefined,
    signer: '',
  };
}

export const MsgSubmitMisbehaviour = {
  $type: 'ibc.core.client.v1.MsgSubmitMisbehaviour' as const,

  encode(
    message: MsgSubmitMisbehaviour,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSubmitMisbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitMisbehaviour {
    return {
      $type: MsgSubmitMisbehaviour.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      misbehaviour: isSet(object.misbehaviour)
        ? Any.fromJSON(object.misbehaviour)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgSubmitMisbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.misbehaviour !== undefined &&
      (obj.misbehaviour = message.misbehaviour
        ? Any.toJSON(message.misbehaviour)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviour>, I>>(
    object: I,
  ): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? '';
    message.misbehaviour =
      object.misbehaviour !== undefined && object.misbehaviour !== null
        ? Any.fromPartial(object.misbehaviour)
        : undefined;
    message.signer = object.signer ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgSubmitMisbehaviour.$type, MsgSubmitMisbehaviour);

function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return { $type: 'ibc.core.client.v1.MsgSubmitMisbehaviourResponse' };
}

export const MsgSubmitMisbehaviourResponse = {
  $type: 'ibc.core.client.v1.MsgSubmitMisbehaviourResponse' as const,

  encode(
    _: MsgSubmitMisbehaviourResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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

  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    return {
      $type: MsgSubmitMisbehaviourResponse.$type,
    };
  },

  toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviourResponse>, I>>(
    _: I,
  ): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgSubmitMisbehaviourResponse.$type,
  MsgSubmitMisbehaviourResponse,
);

/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  CreateClient(
    request: DeepPartial<MsgCreateClient>,
  ): Promise<MsgCreateClientResponse>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  UpdateClient(
    request: DeepPartial<MsgUpdateClient>,
  ): Promise<MsgUpdateClientResponse>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  UpgradeClient(
    request: DeepPartial<MsgUpgradeClient>,
  ): Promise<MsgUpgradeClientResponse>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  SubmitMisbehaviour(
    request: DeepPartial<MsgSubmitMisbehaviour>,
  ): Promise<MsgSubmitMisbehaviourResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClient = this.CreateClient.bind(this);
    this.UpdateClient = this.UpdateClient.bind(this);
    this.UpgradeClient = this.UpgradeClient.bind(this);
    this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this);
  }
  CreateClient(
    request: DeepPartial<MsgCreateClient>,
  ): Promise<MsgCreateClientResponse> {
    const fromPartial = MsgCreateClient.fromPartial(request);
    const data = MsgCreateClient.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Msg',
      'CreateClient',
      data,
    );
    return promise.then(data =>
      MsgCreateClientResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateClient(
    request: DeepPartial<MsgUpdateClient>,
  ): Promise<MsgUpdateClientResponse> {
    const fromPartial = MsgUpdateClient.fromPartial(request);
    const data = MsgUpdateClient.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Msg',
      'UpdateClient',
      data,
    );
    return promise.then(data =>
      MsgUpdateClientResponse.decode(new _m0.Reader(data)),
    );
  }

  UpgradeClient(
    request: DeepPartial<MsgUpgradeClient>,
  ): Promise<MsgUpgradeClientResponse> {
    const fromPartial = MsgUpgradeClient.fromPartial(request);
    const data = MsgUpgradeClient.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Msg',
      'UpgradeClient',
      data,
    );
    return promise.then(data =>
      MsgUpgradeClientResponse.decode(new _m0.Reader(data)),
    );
  }

  SubmitMisbehaviour(
    request: DeepPartial<MsgSubmitMisbehaviour>,
  ): Promise<MsgSubmitMisbehaviourResponse> {
    const fromPartial = MsgSubmitMisbehaviour.fromPartial(request);
    const data = MsgSubmitMisbehaviour.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Msg',
      'SubmitMisbehaviour',
      data,
    );
    return promise.then(data =>
      MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)),
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
