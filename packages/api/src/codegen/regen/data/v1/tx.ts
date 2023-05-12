import { ContentHash, ContentHashSDKType, ContentHash_Graph } from "./types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp, Long } from "../../../helpers";
/** MsgAnchor is the Msg/Anchor request type. */

export interface MsgAnchor {
  /**
   * sender is the address of the sender of the transaction. The sender in
   * Anchor is not attesting to the veracity of the underlying data. They
   * can simply be an intermediary providing services.
   */
  sender: string;
  /** content_hash is the content hash for the data to anchor. */

  contentHash?: ContentHash;
}
/** MsgAnchor is the Msg/Anchor request type. */

export interface MsgAnchorSDKType {
  /**
   * sender is the address of the sender of the transaction. The sender in
   * Anchor is not attesting to the veracity of the underlying data. They
   * can simply be an intermediary providing services.
   */
  sender: string;
  /** content_hash is the content hash for the data to anchor. */

  content_hash?: ContentHashSDKType;
}
/** MsgAnchor is the Msg/Anchor response type. */

export interface MsgAnchorResponse {
  /** iri is the IRI of the data that was anchored. */
  iri: string;
  /** timestamp is the time at which the data was anchored. */

  timestamp?: Timestamp;
}
/** MsgAnchor is the Msg/Anchor response type. */

export interface MsgAnchorResponseSDKType {
  /** iri is the IRI of the data that was anchored. */
  iri: string;
  /** timestamp is the time at which the data was anchored. */

  timestamp?: TimestampSDKType;
}
/** MsgAttest is the Msg/Attest request type. */

export interface MsgAttest {
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
/** MsgAttest is the Msg/Attest request type. */

export interface MsgAttestSDKType {
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

  content_hashes: ContentHash_GraphSDKType[];
}
/** MsgAttestResponse is the Msg/Attest response type. */

export interface MsgAttestResponse {
  /**
   * iris are the IRIs of the data that was attested to. If the attestor attests
   * to the same piece of data, the previous attestation will not be updated and
   * the IRI will not be included in this list.
   */
  iris: string[];
  /** timestamp is the time at which any new attestations were made. */

  timestamp?: Timestamp;
}
/** MsgAttestResponse is the Msg/Attest response type. */

export interface MsgAttestResponseSDKType {
  /**
   * iris are the IRIs of the data that was attested to. If the attestor attests
   * to the same piece of data, the previous attestation will not be updated and
   * the IRI will not be included in this list.
   */
  iris: string[];
  /** timestamp is the time at which any new attestations were made. */

  timestamp?: TimestampSDKType;
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */

export interface MsgDefineResolver {
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
/** MsgDefineResolver is the Msg/DefineResolver request type. */

export interface MsgDefineResolverSDKType {
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

  resolver_url: string;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */

export interface MsgDefineResolverResponse {
  /**
   * resolver_id is the integer ID of the resolver to be used in
   * MsgRegisterResolver.
   */
  resolverId: Long;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */

export interface MsgDefineResolverResponseSDKType {
  /**
   * resolver_id is the integer ID of the resolver to be used in
   * MsgRegisterResolver.
   */
  resolver_id: Long;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */

export interface MsgRegisterResolver {
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
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */

export interface MsgRegisterResolverSDKType {
  /**
   * manager is the address of the resolver manager who registered this
   * resolver with Msg/DefinedResolver.
   */
  manager: string;
  /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */

  resolver_id: Long;
  /**
   * content_hashes is a list of content hashes which the resolver claims to
   * serve.
   */

  content_hashes: ContentHashSDKType[];
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */

export interface MsgRegisterResolverResponse {}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */

export interface MsgRegisterResolverResponseSDKType {}

function createBaseMsgAnchor(): MsgAnchor {
  return {
    sender: "",
    contentHash: undefined
  };
}

export const MsgAnchor = {
  encode(message: MsgAnchor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: MsgAnchor): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgAnchor>): MsgAnchor {
    const message = createBaseMsgAnchor();
    message.sender = object.sender ?? "";
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseMsgAnchorResponse(): MsgAnchorResponse {
  return {
    iri: "",
    timestamp: undefined
  };
}

export const MsgAnchorResponse = {
  encode(message: MsgAnchorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
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
          message.timestamp = Timestamp.decode(reader, reader.uint32());
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
      iri: isSet(object.iri) ? String(object.iri) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: MsgAnchorResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<MsgAnchorResponse>): MsgAnchorResponse {
    const message = createBaseMsgAnchorResponse();
    message.iri = object.iri ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }

};

function createBaseMsgAttest(): MsgAttest {
  return {
    attestor: "",
    contentHashes: []
  };
}

export const MsgAttest = {
  encode(message: MsgAttest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attestor !== "") {
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
          message.contentHashes.push(ContentHash_Graph.decode(reader, reader.uint32()));
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
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      contentHashes: Array.isArray(object?.contentHashes) ? object.contentHashes.map((e: any) => ContentHash_Graph.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgAttest): unknown {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);

    if (message.contentHashes) {
      obj.contentHashes = message.contentHashes.map(e => e ? ContentHash_Graph.toJSON(e) : undefined);
    } else {
      obj.contentHashes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgAttest>): MsgAttest {
    const message = createBaseMsgAttest();
    message.attestor = object.attestor ?? "";
    message.contentHashes = object.contentHashes?.map(e => ContentHash_Graph.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgAttestResponse(): MsgAttestResponse {
  return {
    iris: [],
    timestamp: undefined
  };
}

export const MsgAttestResponse = {
  encode(message: MsgAttestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.iris) {
      writer.uint32(10).string(v!);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
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
          message.timestamp = Timestamp.decode(reader, reader.uint32());
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
      iris: Array.isArray(object?.iris) ? object.iris.map((e: any) => String(e)) : [],
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: MsgAttestResponse): unknown {
    const obj: any = {};

    if (message.iris) {
      obj.iris = message.iris.map(e => e);
    } else {
      obj.iris = [];
    }

    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<MsgAttestResponse>): MsgAttestResponse {
    const message = createBaseMsgAttestResponse();
    message.iris = object.iris?.map(e => e) || [];
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }

};

function createBaseMsgDefineResolver(): MsgDefineResolver {
  return {
    manager: "",
    resolverUrl: ""
  };
}

export const MsgDefineResolver = {
  encode(message: MsgDefineResolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manager !== "") {
      writer.uint32(10).string(message.manager);
    }

    if (message.resolverUrl !== "") {
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
      manager: isSet(object.manager) ? String(object.manager) : "",
      resolverUrl: isSet(object.resolverUrl) ? String(object.resolverUrl) : ""
    };
  },

  toJSON(message: MsgDefineResolver): unknown {
    const obj: any = {};
    message.manager !== undefined && (obj.manager = message.manager);
    message.resolverUrl !== undefined && (obj.resolverUrl = message.resolverUrl);
    return obj;
  },

  fromPartial(object: Partial<MsgDefineResolver>): MsgDefineResolver {
    const message = createBaseMsgDefineResolver();
    message.manager = object.manager ?? "";
    message.resolverUrl = object.resolverUrl ?? "";
    return message;
  }

};

function createBaseMsgDefineResolverResponse(): MsgDefineResolverResponse {
  return {
    resolverId: Long.UZERO
  };
}

export const MsgDefineResolverResponse = {
  encode(message: MsgDefineResolverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.resolverId.isZero()) {
      writer.uint32(8).uint64(message.resolverId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineResolverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefineResolverResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resolverId = (reader.uint64() as Long);
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
      resolverId: isSet(object.resolverId) ? Long.fromValue(object.resolverId) : Long.UZERO
    };
  },

  toJSON(message: MsgDefineResolverResponse): unknown {
    const obj: any = {};
    message.resolverId !== undefined && (obj.resolverId = (message.resolverId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgDefineResolverResponse>): MsgDefineResolverResponse {
    const message = createBaseMsgDefineResolverResponse();
    message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? Long.fromValue(object.resolverId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRegisterResolver(): MsgRegisterResolver {
  return {
    manager: "",
    resolverId: Long.UZERO,
    contentHashes: []
  };
}

export const MsgRegisterResolver = {
  encode(message: MsgRegisterResolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manager !== "") {
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
          message.resolverId = (reader.uint64() as Long);
          break;

        case 3:
          message.contentHashes.push(ContentHash.decode(reader, reader.uint32()));
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
      manager: isSet(object.manager) ? String(object.manager) : "",
      resolverId: isSet(object.resolverId) ? Long.fromValue(object.resolverId) : Long.UZERO,
      contentHashes: Array.isArray(object?.contentHashes) ? object.contentHashes.map((e: any) => ContentHash.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgRegisterResolver): unknown {
    const obj: any = {};
    message.manager !== undefined && (obj.manager = message.manager);
    message.resolverId !== undefined && (obj.resolverId = (message.resolverId || Long.UZERO).toString());

    if (message.contentHashes) {
      obj.contentHashes = message.contentHashes.map(e => e ? ContentHash.toJSON(e) : undefined);
    } else {
      obj.contentHashes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgRegisterResolver>): MsgRegisterResolver {
    const message = createBaseMsgRegisterResolver();
    message.manager = object.manager ?? "";
    message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? Long.fromValue(object.resolverId) : Long.UZERO;
    message.contentHashes = object.contentHashes?.map(e => ContentHash.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgRegisterResolverResponse(): MsgRegisterResolverResponse {
  return {};
}

export const MsgRegisterResolverResponse = {
  encode(_: MsgRegisterResolverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResolverResponse {
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
    return {};
  },

  toJSON(_: MsgRegisterResolverResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRegisterResolverResponse>): MsgRegisterResolverResponse {
    const message = createBaseMsgRegisterResolverResponse();
    return message;
  }

};