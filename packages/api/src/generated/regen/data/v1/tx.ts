/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ContentHash, ContentHash_Graph } from '../../../regen/data/v1/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1';

/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchor {
  $type: 'regen.data.v1.MsgAnchor';
  /**
   * sender is the address of the sender of the transaction. The sender in
   * Anchor is not attesting to the veracity of the underlying data. They
   * can simply be an intermediary providing services.
   */
  sender: string;
  /** content_hash is the content hash for the data to anchor. */
  contentHash?: ContentHash;
}

/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponse {
  $type: 'regen.data.v1.MsgAnchorResponse';
  /** iri is the IRI of the data that was anchored. */
  iri: string;
  /** timestamp is the time at which the data was anchored. */
  timestamp?: Date;
}

/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttest {
  $type: 'regen.data.v1.MsgAttest';
  /**
   * attestor is the addresses of the account attesting to the veracity of the
   * data. By making an Attest request, the attestor is attesting to the
   * veracity of the data referenced by the IRI. The precise meaning of this may
   * vary depending on the underlying data.
   */
  attestor: string;
  /**
   * content_hashes are the content hashes for anchored data. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  contentHashes: ContentHash_Graph[];
}

/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponse {
  $type: 'regen.data.v1.MsgAttestResponse';
  /**
   * iris are the IRIs of the data that was attested to. If the attestor attests
   * to the same piece of data, the previous attestation will not be updated and
   * the IRI will not be included in this list.
   */
  iris: string[];
  /** timestamp is the time at which any new attestations were made. */
  timestamp?: Date;
}

/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolver {
  $type: 'regen.data.v1.MsgDefineResolver';
  /**
   * manager is the address of the resolver manager. The manager is able
   * to make future calls using the ID returned by this operation with
   * Msg/RegisterResolver. To authorize other accounts to register resolvers,
   * the manager should make use of cosmos.authz.
   */
  manager: string;
  /**
   * resolver_url is a resolver URL which should refer to an HTTP service
   * which will respond to a GET request with the IRI of a ContentHash
   * and return the content if it exists or a 404. For graph data, resolvers
   * should use the HTTP Accept header to negotiate the RDF serialization
   * format.
   */
  resolverUrl: string;
}

/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponse {
  $type: 'regen.data.v1.MsgDefineResolverResponse';
  /**
   * resolver_id is the integer ID of the resolver to be used in
   * MsgRegisterResolver.
   */
  resolverId: Long;
}

/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolver {
  $type: 'regen.data.v1.MsgRegisterResolver';
  /**
   * manager is the address of the resolver manager who registered this
   * resolver with Msg/DefinedResolver.
   */
  manager: string;
  /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */
  resolverId: Long;
  /**
   * content_hashes is a list of content hashes which the resolver claims to
   * serve.
   */
  contentHashes: ContentHash[];
}

/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponse {
  $type: 'regen.data.v1.MsgRegisterResolverResponse';
}

function createBaseMsgAnchor(): MsgAnchor {
  return {
    $type: 'regen.data.v1.MsgAnchor',
    sender: '',
    contentHash: undefined,
  };
}

export const MsgAnchor = {
  $type: 'regen.data.v1.MsgAnchor' as const,

  encode(
    message: MsgAnchor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.contentHash !== undefined) {
      ContentHash.encode(
        message.contentHash,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnchor {
    return {
      $type: MsgAnchor.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      contentHash: isSet(object.contentHash)
        ? ContentHash.fromJSON(object.contentHash)
        : undefined,
    };
  },

  toJSON(message: MsgAnchor): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash
        ? ContentHash.toJSON(message.contentHash)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchor>, I>>(
    object: I,
  ): MsgAnchor {
    const message = createBaseMsgAnchor();
    message.sender = object.sender ?? '';
    message.contentHash =
      object.contentHash !== undefined && object.contentHash !== null
        ? ContentHash.fromPartial(object.contentHash)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAnchor.$type, MsgAnchor);

function createBaseMsgAnchorResponse(): MsgAnchorResponse {
  return {
    $type: 'regen.data.v1.MsgAnchorResponse',
    iri: '',
    timestamp: undefined,
  };
}

export const MsgAnchorResponse = {
  $type: 'regen.data.v1.MsgAnchorResponse' as const,

  encode(
    message: MsgAnchorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iri !== '') {
      writer.uint32(10).string(message.iri);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
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

  fromJSON(object: any): MsgAnchorResponse {
    return {
      $type: MsgAnchorResponse.$type,
      iri: isSet(object.iri) ? String(object.iri) : '',
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: MsgAnchorResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorResponse>, I>>(
    object: I,
  ): MsgAnchorResponse {
    const message = createBaseMsgAnchorResponse();
    message.iri = object.iri ?? '';
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorResponse.$type, MsgAnchorResponse);

function createBaseMsgAttest(): MsgAttest {
  return { $type: 'regen.data.v1.MsgAttest', attestor: '', contentHashes: [] };
}

export const MsgAttest = {
  $type: 'regen.data.v1.MsgAttest' as const,

  encode(
    message: MsgAttest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.attestor !== '') {
      writer.uint32(10).string(message.attestor);
    }
    for (const v of message.contentHashes) {
      ContentHash_Graph.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestor = reader.string();
          break;
        case 2:
          message.contentHashes.push(
            ContentHash_Graph.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAttest {
    return {
      $type: MsgAttest.$type,
      attestor: isSet(object.attestor) ? String(object.attestor) : '',
      contentHashes: Array.isArray(object?.contentHashes)
        ? object.contentHashes.map((e: any) => ContentHash_Graph.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgAttest): unknown {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);
    if (message.contentHashes) {
      obj.contentHashes = message.contentHashes.map(e =>
        e ? ContentHash_Graph.toJSON(e) : undefined,
      );
    } else {
      obj.contentHashes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttest>, I>>(
    object: I,
  ): MsgAttest {
    const message = createBaseMsgAttest();
    message.attestor = object.attestor ?? '';
    message.contentHashes =
      object.contentHashes?.map(e => ContentHash_Graph.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgAttest.$type, MsgAttest);

function createBaseMsgAttestResponse(): MsgAttestResponse {
  return {
    $type: 'regen.data.v1.MsgAttestResponse',
    iris: [],
    timestamp: undefined,
  };
}

export const MsgAttestResponse = {
  $type: 'regen.data.v1.MsgAttestResponse' as const,

  encode(
    message: MsgAttestResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.iris) {
      writer.uint32(10).string(v!);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAttestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iris.push(reader.string());
          break;
        case 2:
          message.timestamp = fromTimestamp(
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

  fromJSON(object: any): MsgAttestResponse {
    return {
      $type: MsgAttestResponse.$type,
      iris: Array.isArray(object?.iris)
        ? object.iris.map((e: any) => String(e))
        : [],
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: MsgAttestResponse): unknown {
    const obj: any = {};
    if (message.iris) {
      obj.iris = message.iris.map(e => e);
    } else {
      obj.iris = [];
    }
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAttestResponse>, I>>(
    object: I,
  ): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    message.iris = object.iris?.map(e => e) || [];
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAttestResponse.$type, MsgAttestResponse);

function createBaseMsgDefineResolver(): MsgDefineResolver {
  return {
    $type: 'regen.data.v1.MsgDefineResolver',
    manager: '',
    resolverUrl: '',
  };
}

export const MsgDefineResolver = {
  $type: 'regen.data.v1.MsgDefineResolver' as const,

  encode(
    message: MsgDefineResolver,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.manager !== '') {
      writer.uint32(10).string(message.manager);
    }
    if (message.resolverUrl !== '') {
      writer.uint32(18).string(message.resolverUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineResolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manager = reader.string();
          break;
        case 2:
          message.resolverUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDefineResolver {
    return {
      $type: MsgDefineResolver.$type,
      manager: isSet(object.manager) ? String(object.manager) : '',
      resolverUrl: isSet(object.resolverUrl) ? String(object.resolverUrl) : '',
    };
  },

  toJSON(message: MsgDefineResolver): unknown {
    const obj: any = {};
    message.manager !== undefined && (obj.manager = message.manager);
    message.resolverUrl !== undefined &&
      (obj.resolverUrl = message.resolverUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDefineResolver>, I>>(
    object: I,
  ): MsgDefineResolver {
    const message = createBaseMsgDefineResolver();
    message.manager = object.manager ?? '';
    message.resolverUrl = object.resolverUrl ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgDefineResolver.$type, MsgDefineResolver);

function createBaseMsgDefineResolverResponse(): MsgDefineResolverResponse {
  return {
    $type: 'regen.data.v1.MsgDefineResolverResponse',
    resolverId: Long.UZERO,
  };
}

export const MsgDefineResolverResponse = {
  $type: 'regen.data.v1.MsgDefineResolverResponse' as const,

  encode(
    message: MsgDefineResolverResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.resolverId.isZero()) {
      writer.uint32(8).uint64(message.resolverId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDefineResolverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineResolverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolverId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDefineResolverResponse {
    return {
      $type: MsgDefineResolverResponse.$type,
      resolverId: isSet(object.resolverId)
        ? Long.fromString(object.resolverId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgDefineResolverResponse): unknown {
    const obj: any = {};
    message.resolverId !== undefined &&
      (obj.resolverId = (message.resolverId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDefineResolverResponse>, I>>(
    object: I,
  ): MsgDefineResolverResponse {
    const message = createBaseMsgDefineResolverResponse();
    message.resolverId =
      object.resolverId !== undefined && object.resolverId !== null
        ? Long.fromValue(object.resolverId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  MsgDefineResolverResponse.$type,
  MsgDefineResolverResponse,
);

function createBaseMsgRegisterResolver(): MsgRegisterResolver {
  return {
    $type: 'regen.data.v1.MsgRegisterResolver',
    manager: '',
    resolverId: Long.UZERO,
    contentHashes: [],
  };
}

export const MsgRegisterResolver = {
  $type: 'regen.data.v1.MsgRegisterResolver' as const,

  encode(
    message: MsgRegisterResolver,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.manager !== '') {
      writer.uint32(10).string(message.manager);
    }
    if (!message.resolverId.isZero()) {
      writer.uint32(16).uint64(message.resolverId);
    }
    for (const v of message.contentHashes) {
      ContentHash.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manager = reader.string();
          break;
        case 2:
          message.resolverId = reader.uint64() as Long;
          break;
        case 3:
          message.contentHashes.push(
            ContentHash.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterResolver {
    return {
      $type: MsgRegisterResolver.$type,
      manager: isSet(object.manager) ? String(object.manager) : '',
      resolverId: isSet(object.resolverId)
        ? Long.fromString(object.resolverId)
        : Long.UZERO,
      contentHashes: Array.isArray(object?.contentHashes)
        ? object.contentHashes.map((e: any) => ContentHash.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgRegisterResolver): unknown {
    const obj: any = {};
    message.manager !== undefined && (obj.manager = message.manager);
    message.resolverId !== undefined &&
      (obj.resolverId = (message.resolverId || Long.UZERO).toString());
    if (message.contentHashes) {
      obj.contentHashes = message.contentHashes.map(e =>
        e ? ContentHash.toJSON(e) : undefined,
      );
    } else {
      obj.contentHashes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterResolver>, I>>(
    object: I,
  ): MsgRegisterResolver {
    const message = createBaseMsgRegisterResolver();
    message.manager = object.manager ?? '';
    message.resolverId =
      object.resolverId !== undefined && object.resolverId !== null
        ? Long.fromValue(object.resolverId)
        : Long.UZERO;
    message.contentHashes =
      object.contentHashes?.map(e => ContentHash.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgRegisterResolver.$type, MsgRegisterResolver);

function createBaseMsgRegisterResolverResponse(): MsgRegisterResolverResponse {
  return { $type: 'regen.data.v1.MsgRegisterResolverResponse' };
}

export const MsgRegisterResolverResponse = {
  $type: 'regen.data.v1.MsgRegisterResolverResponse' as const,

  encode(
    _: MsgRegisterResolverResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterResolverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResolverResponse();
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

  fromJSON(_: any): MsgRegisterResolverResponse {
    return {
      $type: MsgRegisterResolverResponse.$type,
    };
  },

  toJSON(_: MsgRegisterResolverResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterResolverResponse>, I>>(
    _: I,
  ): MsgRegisterResolverResponse {
    const message = createBaseMsgRegisterResolverResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgRegisterResolverResponse.$type,
  MsgRegisterResolverResponse,
);

/** Msg is the regen.data.v1 Msg service */
export interface Msg {
  /**
   * Anchor "anchors" a piece of data to the blockchain based on its secure
   * hash, effectively providing a tamper resistant timestamp.
   *
   * The sender in Anchor is not attesting to the veracity of the underlying
   * data. They can simply be an intermediary providing timestamp services.
   * Attest should be used to create a digital signature attesting to the
   * veracity of some piece of data.
   */
  Anchor(request: DeepPartial<MsgAnchor>): Promise<MsgAnchorResponse>;
  /**
   * Attest allows for digital signing of an arbitrary piece of data on the
   * blockchain. By attesting to data, the attestor is making a statement about
   * the veracity of the data itself. It is like signing a legal document,
   * meaning that I agree to all conditions and to the best of my knowledge
   * everything is true. When anchoring data, the sender is not attesting to the
   * veracity of the data, they are simply communicating that it exists.
   *
   * On-chain signatures have the following benefits:
   * - on-chain identities can be managed using different cryptographic keys
   *   that change over time through key rotation practices
   * - an on-chain identity may represent an organization and through delegation
   *   individual members may sign on behalf of the group
   * - the blockchain transaction envelope provides built-in replay protection
   *   and timestamping
   *
   * Attest implicitly calls Anchor if the data was not already anchored.
   *
   * Attest can be called multiple times for the same content hash with
   * different attestors and those attestors will be appended to the list of
   * attestors. If the same attestor attempts to attest to the same piece of
   * data, the attestor will be ignored and a new attestation with a new
   * timestamp will not be added.
   */
  Attest(request: DeepPartial<MsgAttest>): Promise<MsgAttestResponse>;
  /**
   * DefineResolver defines a resolver URL and assigns it a new integer ID
   * that can be used in calls to RegisterResolver.
   */
  DefineResolver(
    request: DeepPartial<MsgDefineResolver>,
  ): Promise<MsgDefineResolverResponse>;
  /** RegisterResolver registers data content hashes */
  RegisterResolver(
    request: DeepPartial<MsgRegisterResolver>,
  ): Promise<MsgRegisterResolverResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Anchor = this.Anchor.bind(this);
    this.Attest = this.Attest.bind(this);
    this.DefineResolver = this.DefineResolver.bind(this);
    this.RegisterResolver = this.RegisterResolver.bind(this);
  }
  Anchor(request: DeepPartial<MsgAnchor>): Promise<MsgAnchorResponse> {
    const fromPartial = MsgAnchor.fromPartial(request);
    const data = MsgAnchor.encode(fromPartial).finish();
    const promise = this.rpc.request('regen.data.v1.Msg', 'Anchor', data);
    return promise.then(data => MsgAnchorResponse.decode(new _m0.Reader(data)));
  }

  Attest(request: DeepPartial<MsgAttest>): Promise<MsgAttestResponse> {
    const fromPartial = MsgAttest.fromPartial(request);
    const data = MsgAttest.encode(fromPartial).finish();
    const promise = this.rpc.request('regen.data.v1.Msg', 'Attest', data);
    return promise.then(data => MsgAttestResponse.decode(new _m0.Reader(data)));
  }

  DefineResolver(
    request: DeepPartial<MsgDefineResolver>,
  ): Promise<MsgDefineResolverResponse> {
    const fromPartial = MsgDefineResolver.fromPartial(request);
    const data = MsgDefineResolver.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1.Msg',
      'DefineResolver',
      data,
    );
    return promise.then(data =>
      MsgDefineResolverResponse.decode(new _m0.Reader(data)),
    );
  }

  RegisterResolver(
    request: DeepPartial<MsgRegisterResolver>,
  ): Promise<MsgRegisterResolverResponse> {
    const fromPartial = MsgRegisterResolver.fromPartial(request);
    const data = MsgRegisterResolver.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1.Msg',
      'RegisterResolver',
      data,
    );
    return promise.then(data =>
      MsgRegisterResolverResponse.decode(new _m0.Reader(data)),
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
