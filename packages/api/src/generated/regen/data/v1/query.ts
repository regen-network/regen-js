/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../typeRegistry";
import { ContentHash } from "./types";

export const protobufPackage = "regen.data.v1";

/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */
export interface QueryAnchorByIRIRequest {
  $type: "regen.data.v1.QueryAnchorByIRIRequest";
  /** iri is the IRI of the anchored data. */
  iri: string;
}

/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */
export interface QueryAnchorByIRIResponse {
  $type: "regen.data.v1.QueryAnchorByIRIResponse";
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfo;
}

/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */
export interface QueryAnchorByHashRequest {
  $type: "regen.data.v1.QueryAnchorByHashRequest";
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
}

/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */
export interface QueryAnchorByHashResponse {
  $type: "regen.data.v1.QueryAnchorByHashResponse";
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfo;
}

/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */
export interface QueryAttestationsByAttestorRequest {
  $type: "regen.data.v1.QueryAttestationsByAttestorRequest";
  /** attestor is the address of the attestor. */
  attestor: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */
export interface QueryAttestationsByAttestorResponse {
  $type: "regen.data.v1.QueryAttestationsByAttestorResponse";
  /** attestations are the attestations by the attestor. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse;
}

/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */
export interface QueryAttestationsByIRIRequest {
  $type: "regen.data.v1.QueryAttestationsByIRIRequest";
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */
export interface QueryAttestationsByIRIResponse {
  $type: "regen.data.v1.QueryAttestationsByIRIResponse";
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse;
}

/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */
export interface QueryAttestationsByHashRequest {
  $type: "regen.data.v1.QueryAttestationsByHashRequest";
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */
export interface QueryAttestationsByHashResponse {
  $type: "regen.data.v1.QueryAttestationsByHashResponse";
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse;
}

/** QueryResolverRequest is the Query/Resolver request type. */
export interface QueryResolverRequest {
  $type: "regen.data.v1.QueryResolverRequest";
  /** id is the ID of the resolver. */
  id: Long;
}

/** QueryResolverResponse is the Query/Resolver response type. */
export interface QueryResolverResponse {
  $type: "regen.data.v1.QueryResolverResponse";
  /** resolver is information about the resolver. */
  resolver?: ResolverInfo;
}

/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequest {
  $type: "regen.data.v1.QueryResolversByIRIRequest";
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponse {
  $type: "regen.data.v1.QueryResolversByIRIResponse";
  /** resolvers are the resolvers that have registered the anchored data. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponse;
}

/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequest {
  $type: "regen.data.v1.QueryResolversByHashRequest";
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponse {
  $type: "regen.data.v1.QueryResolversByHashResponse";
  /** resolvers are the resolvers that have registered the data. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponse;
}

/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */
export interface QueryResolversByURLRequest {
  $type: "regen.data.v1.QueryResolversByURLRequest";
  /** url is the URL of the resolver. */
  url: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */
export interface QueryResolversByURLResponse {
  $type: "regen.data.v1.QueryResolversByURLResponse";
  /** resolvers are the resolvers that have a matching URL. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponse;
}

/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */
export interface ConvertIRIToHashRequest {
  $type: "regen.data.v1.ConvertIRIToHashRequest";
  /** iri is the IRI to convert to a ContentHash. */
  iri: string;
}

/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */
export interface ConvertIRIToHashResponse {
  $type: "regen.data.v1.ConvertIRIToHashResponse";
  /** content_hash is the ContentHash converted from the IRI. */
  contentHash?: ContentHash;
}

/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */
export interface ConvertHashToIRIRequest {
  $type: "regen.data.v1.ConvertHashToIRIRequest";
  /** content_hash is the ContentHash to convert to an IRI. */
  contentHash?: ContentHash;
}

/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */
export interface ConvertHashToIRIResponse {
  $type: "regen.data.v1.ConvertHashToIRIResponse";
  /** iri is the IRI converted from the ContentHash. */
  iri: string;
}

/** AnchorInfo is the information for a data anchor. */
export interface AnchorInfo {
  $type: "regen.data.v1.AnchorInfo";
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** timestamp is the time at which the data was anchored. */
  timestamp?: Date;
}

/** AttestationInfo is the information for an attestation. */
export interface AttestationInfo {
  $type: "regen.data.v1.AttestationInfo";
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** attestor is the address of the account that attested to the anchored data. */
  attestor: string;
  /** timestamp is the time at which the data was attested to. */
  timestamp?: Date;
}

/** ResolverInfo is the information for a resolver. */
export interface ResolverInfo {
  $type: "regen.data.v1.ResolverInfo";
  /** id is the ID of the resolver. */
  id: Long;
  /** url is the URL of the resolver. */
  url: string;
  /** manager is the address of the account that manages the resolver. */
  manager: string;
}

function createBaseQueryAnchorByIRIRequest(): QueryAnchorByIRIRequest {
  return { $type: "regen.data.v1.QueryAnchorByIRIRequest", iri: "" };
}

export const QueryAnchorByIRIRequest = {
  $type: "regen.data.v1.QueryAnchorByIRIRequest" as const,

  encode(message: QueryAnchorByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnchorByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAnchorByIRIRequest {
    return { $type: QueryAnchorByIRIRequest.$type, iri: isSet(object.iri) ? String(object.iri) : "" };
  },

  toJSON(message: QueryAnchorByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  create(base?: DeepPartial<QueryAnchorByIRIRequest>): QueryAnchorByIRIRequest {
    return QueryAnchorByIRIRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAnchorByIRIRequest>): QueryAnchorByIRIRequest {
    const message = createBaseQueryAnchorByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryAnchorByIRIRequest.$type, QueryAnchorByIRIRequest);

function createBaseQueryAnchorByIRIResponse(): QueryAnchorByIRIResponse {
  return { $type: "regen.data.v1.QueryAnchorByIRIResponse", anchor: undefined };
}

export const QueryAnchorByIRIResponse = {
  $type: "regen.data.v1.QueryAnchorByIRIResponse" as const,

  encode(message: QueryAnchorByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.anchor !== undefined) {
      AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnchorByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anchor = AnchorInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAnchorByIRIResponse {
    return {
      $type: QueryAnchorByIRIResponse.$type,
      anchor: isSet(object.anchor) ? AnchorInfo.fromJSON(object.anchor) : undefined,
    };
  },

  toJSON(message: QueryAnchorByIRIResponse): unknown {
    const obj: any = {};
    message.anchor !== undefined && (obj.anchor = message.anchor ? AnchorInfo.toJSON(message.anchor) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAnchorByIRIResponse>): QueryAnchorByIRIResponse {
    return QueryAnchorByIRIResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAnchorByIRIResponse>): QueryAnchorByIRIResponse {
    const message = createBaseQueryAnchorByIRIResponse();
    message.anchor = (object.anchor !== undefined && object.anchor !== null)
      ? AnchorInfo.fromPartial(object.anchor)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAnchorByIRIResponse.$type, QueryAnchorByIRIResponse);

function createBaseQueryAnchorByHashRequest(): QueryAnchorByHashRequest {
  return { $type: "regen.data.v1.QueryAnchorByHashRequest", contentHash: undefined };
}

export const QueryAnchorByHashRequest = {
  $type: "regen.data.v1.QueryAnchorByHashRequest" as const,

  encode(message: QueryAnchorByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnchorByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAnchorByHashRequest {
    return {
      $type: QueryAnchorByHashRequest.$type,
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
    };
  },

  toJSON(message: QueryAnchorByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAnchorByHashRequest>): QueryAnchorByHashRequest {
    return QueryAnchorByHashRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAnchorByHashRequest>): QueryAnchorByHashRequest {
    const message = createBaseQueryAnchorByHashRequest();
    message.contentHash = (object.contentHash !== undefined && object.contentHash !== null)
      ? ContentHash.fromPartial(object.contentHash)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAnchorByHashRequest.$type, QueryAnchorByHashRequest);

function createBaseQueryAnchorByHashResponse(): QueryAnchorByHashResponse {
  return { $type: "regen.data.v1.QueryAnchorByHashResponse", anchor: undefined };
}

export const QueryAnchorByHashResponse = {
  $type: "regen.data.v1.QueryAnchorByHashResponse" as const,

  encode(message: QueryAnchorByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.anchor !== undefined) {
      AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnchorByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anchor = AnchorInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAnchorByHashResponse {
    return {
      $type: QueryAnchorByHashResponse.$type,
      anchor: isSet(object.anchor) ? AnchorInfo.fromJSON(object.anchor) : undefined,
    };
  },

  toJSON(message: QueryAnchorByHashResponse): unknown {
    const obj: any = {};
    message.anchor !== undefined && (obj.anchor = message.anchor ? AnchorInfo.toJSON(message.anchor) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAnchorByHashResponse>): QueryAnchorByHashResponse {
    return QueryAnchorByHashResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAnchorByHashResponse>): QueryAnchorByHashResponse {
    const message = createBaseQueryAnchorByHashResponse();
    message.anchor = (object.anchor !== undefined && object.anchor !== null)
      ? AnchorInfo.fromPartial(object.anchor)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAnchorByHashResponse.$type, QueryAnchorByHashResponse);

function createBaseQueryAttestationsByAttestorRequest(): QueryAttestationsByAttestorRequest {
  return { $type: "regen.data.v1.QueryAttestationsByAttestorRequest", attestor: "", pagination: undefined };
}

export const QueryAttestationsByAttestorRequest = {
  $type: "regen.data.v1.QueryAttestationsByAttestorRequest" as const,

  encode(message: QueryAttestationsByAttestorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attestor !== "") {
      writer.uint32(10).string(message.attestor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByAttestorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsByAttestorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestor = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsByAttestorRequest {
    return {
      $type: QueryAttestationsByAttestorRequest.$type,
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAttestationsByAttestorRequest): unknown {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAttestationsByAttestorRequest>): QueryAttestationsByAttestorRequest {
    return QueryAttestationsByAttestorRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAttestationsByAttestorRequest>): QueryAttestationsByAttestorRequest {
    const message = createBaseQueryAttestationsByAttestorRequest();
    message.attestor = object.attestor ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAttestationsByAttestorRequest.$type, QueryAttestationsByAttestorRequest);

function createBaseQueryAttestationsByAttestorResponse(): QueryAttestationsByAttestorResponse {
  return { $type: "regen.data.v1.QueryAttestationsByAttestorResponse", attestations: [], pagination: undefined };
}

export const QueryAttestationsByAttestorResponse = {
  $type: "regen.data.v1.QueryAttestationsByAttestorResponse" as const,

  encode(message: QueryAttestationsByAttestorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      AttestationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByAttestorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsByAttestorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(AttestationInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsByAttestorResponse {
    return {
      $type: QueryAttestationsByAttestorResponse.$type,
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => AttestationInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAttestationsByAttestorResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) => e ? AttestationInfo.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAttestationsByAttestorResponse>): QueryAttestationsByAttestorResponse {
    return QueryAttestationsByAttestorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAttestationsByAttestorResponse>): QueryAttestationsByAttestorResponse {
    const message = createBaseQueryAttestationsByAttestorResponse();
    message.attestations = object.attestations?.map((e) => AttestationInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAttestationsByAttestorResponse.$type, QueryAttestationsByAttestorResponse);

function createBaseQueryAttestationsByIRIRequest(): QueryAttestationsByIRIRequest {
  return { $type: "regen.data.v1.QueryAttestationsByIRIRequest", iri: "", pagination: undefined };
}

export const QueryAttestationsByIRIRequest = {
  $type: "regen.data.v1.QueryAttestationsByIRIRequest" as const,

  encode(message: QueryAttestationsByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsByIRIRequest {
    return {
      $type: QueryAttestationsByIRIRequest.$type,
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAttestationsByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAttestationsByIRIRequest>): QueryAttestationsByIRIRequest {
    return QueryAttestationsByIRIRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAttestationsByIRIRequest>): QueryAttestationsByIRIRequest {
    const message = createBaseQueryAttestationsByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAttestationsByIRIRequest.$type, QueryAttestationsByIRIRequest);

function createBaseQueryAttestationsByIRIResponse(): QueryAttestationsByIRIResponse {
  return { $type: "regen.data.v1.QueryAttestationsByIRIResponse", attestations: [], pagination: undefined };
}

export const QueryAttestationsByIRIResponse = {
  $type: "regen.data.v1.QueryAttestationsByIRIResponse" as const,

  encode(message: QueryAttestationsByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      AttestationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(AttestationInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsByIRIResponse {
    return {
      $type: QueryAttestationsByIRIResponse.$type,
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => AttestationInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAttestationsByIRIResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) => e ? AttestationInfo.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAttestationsByIRIResponse>): QueryAttestationsByIRIResponse {
    return QueryAttestationsByIRIResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAttestationsByIRIResponse>): QueryAttestationsByIRIResponse {
    const message = createBaseQueryAttestationsByIRIResponse();
    message.attestations = object.attestations?.map((e) => AttestationInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAttestationsByIRIResponse.$type, QueryAttestationsByIRIResponse);

function createBaseQueryAttestationsByHashRequest(): QueryAttestationsByHashRequest {
  return { $type: "regen.data.v1.QueryAttestationsByHashRequest", contentHash: undefined, pagination: undefined };
}

export const QueryAttestationsByHashRequest = {
  $type: "regen.data.v1.QueryAttestationsByHashRequest" as const,

  encode(message: QueryAttestationsByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsByHashRequest {
    return {
      $type: QueryAttestationsByHashRequest.$type,
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAttestationsByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAttestationsByHashRequest>): QueryAttestationsByHashRequest {
    return QueryAttestationsByHashRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAttestationsByHashRequest>): QueryAttestationsByHashRequest {
    const message = createBaseQueryAttestationsByHashRequest();
    message.contentHash = (object.contentHash !== undefined && object.contentHash !== null)
      ? ContentHash.fromPartial(object.contentHash)
      : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAttestationsByHashRequest.$type, QueryAttestationsByHashRequest);

function createBaseQueryAttestationsByHashResponse(): QueryAttestationsByHashResponse {
  return { $type: "regen.data.v1.QueryAttestationsByHashResponse", attestations: [], pagination: undefined };
}

export const QueryAttestationsByHashResponse = {
  $type: "regen.data.v1.QueryAttestationsByHashResponse" as const,

  encode(message: QueryAttestationsByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      AttestationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(AttestationInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsByHashResponse {
    return {
      $type: QueryAttestationsByHashResponse.$type,
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => AttestationInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAttestationsByHashResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) => e ? AttestationInfo.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAttestationsByHashResponse>): QueryAttestationsByHashResponse {
    return QueryAttestationsByHashResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAttestationsByHashResponse>): QueryAttestationsByHashResponse {
    const message = createBaseQueryAttestationsByHashResponse();
    message.attestations = object.attestations?.map((e) => AttestationInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAttestationsByHashResponse.$type, QueryAttestationsByHashResponse);

function createBaseQueryResolverRequest(): QueryResolverRequest {
  return { $type: "regen.data.v1.QueryResolverRequest", id: Long.UZERO };
}

export const QueryResolverRequest = {
  $type: "regen.data.v1.QueryResolverRequest" as const,

  encode(message: QueryResolverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolverRequest {
    return { $type: QueryResolverRequest.$type, id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryResolverRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryResolverRequest>): QueryResolverRequest {
    return QueryResolverRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolverRequest>): QueryResolverRequest {
    const message = createBaseQueryResolverRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryResolverRequest.$type, QueryResolverRequest);

function createBaseQueryResolverResponse(): QueryResolverResponse {
  return { $type: "regen.data.v1.QueryResolverResponse", resolver: undefined };
}

export const QueryResolverResponse = {
  $type: "regen.data.v1.QueryResolverResponse" as const,

  encode(message: QueryResolverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resolver !== undefined) {
      ResolverInfo.encode(message.resolver, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolver = ResolverInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolverResponse {
    return {
      $type: QueryResolverResponse.$type,
      resolver: isSet(object.resolver) ? ResolverInfo.fromJSON(object.resolver) : undefined,
    };
  },

  toJSON(message: QueryResolverResponse): unknown {
    const obj: any = {};
    message.resolver !== undefined &&
      (obj.resolver = message.resolver ? ResolverInfo.toJSON(message.resolver) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolverResponse>): QueryResolverResponse {
    return QueryResolverResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolverResponse>): QueryResolverResponse {
    const message = createBaseQueryResolverResponse();
    message.resolver = (object.resolver !== undefined && object.resolver !== null)
      ? ResolverInfo.fromPartial(object.resolver)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolverResponse.$type, QueryResolverResponse);

function createBaseQueryResolversByIRIRequest(): QueryResolversByIRIRequest {
  return { $type: "regen.data.v1.QueryResolversByIRIRequest", iri: "", pagination: undefined };
}

export const QueryResolversByIRIRequest = {
  $type: "regen.data.v1.QueryResolversByIRIRequest" as const,

  encode(message: QueryResolversByIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolversByIRIRequest {
    return {
      $type: QueryResolversByIRIRequest.$type,
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResolversByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest {
    return QueryResolversByIRIRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolversByIRIRequest.$type, QueryResolversByIRIRequest);

function createBaseQueryResolversByIRIResponse(): QueryResolversByIRIResponse {
  return { $type: "regen.data.v1.QueryResolversByIRIResponse", resolvers: [], pagination: undefined };
}

export const QueryResolversByIRIResponse = {
  $type: "regen.data.v1.QueryResolversByIRIResponse" as const,

  encode(message: QueryResolversByIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resolvers) {
      ResolverInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolvers.push(ResolverInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolversByIRIResponse {
    return {
      $type: QueryResolversByIRIResponse.$type,
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResolversByIRIResponse): unknown {
    const obj: any = {};
    if (message.resolvers) {
      obj.resolvers = message.resolvers.map((e) => e ? ResolverInfo.toJSON(e) : undefined);
    } else {
      obj.resolvers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse {
    return QueryResolversByIRIResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolvers = object.resolvers?.map((e) => ResolverInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolversByIRIResponse.$type, QueryResolversByIRIResponse);

function createBaseQueryResolversByHashRequest(): QueryResolversByHashRequest {
  return { $type: "regen.data.v1.QueryResolversByHashRequest", contentHash: undefined, pagination: undefined };
}

export const QueryResolversByHashRequest = {
  $type: "regen.data.v1.QueryResolversByHashRequest" as const,

  encode(message: QueryResolversByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolversByHashRequest {
    return {
      $type: QueryResolversByHashRequest.$type,
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResolversByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolversByHashRequest>): QueryResolversByHashRequest {
    return QueryResolversByHashRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolversByHashRequest>): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    message.contentHash = (object.contentHash !== undefined && object.contentHash !== null)
      ? ContentHash.fromPartial(object.contentHash)
      : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolversByHashRequest.$type, QueryResolversByHashRequest);

function createBaseQueryResolversByHashResponse(): QueryResolversByHashResponse {
  return { $type: "regen.data.v1.QueryResolversByHashResponse", resolvers: [], pagination: undefined };
}

export const QueryResolversByHashResponse = {
  $type: "regen.data.v1.QueryResolversByHashResponse" as const,

  encode(message: QueryResolversByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resolvers) {
      ResolverInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolvers.push(ResolverInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolversByHashResponse {
    return {
      $type: QueryResolversByHashResponse.$type,
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResolversByHashResponse): unknown {
    const obj: any = {};
    if (message.resolvers) {
      obj.resolvers = message.resolvers.map((e) => e ? ResolverInfo.toJSON(e) : undefined);
    } else {
      obj.resolvers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolversByHashResponse>): QueryResolversByHashResponse {
    return QueryResolversByHashResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolversByHashResponse>): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolvers = object.resolvers?.map((e) => ResolverInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolversByHashResponse.$type, QueryResolversByHashResponse);

function createBaseQueryResolversByURLRequest(): QueryResolversByURLRequest {
  return { $type: "regen.data.v1.QueryResolversByURLRequest", url: "", pagination: undefined };
}

export const QueryResolversByURLRequest = {
  $type: "regen.data.v1.QueryResolversByURLRequest" as const,

  encode(message: QueryResolversByURLRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByURLRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByURLRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolversByURLRequest {
    return {
      $type: QueryResolversByURLRequest.$type,
      url: isSet(object.url) ? String(object.url) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResolversByURLRequest): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolversByURLRequest>): QueryResolversByURLRequest {
    return QueryResolversByURLRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolversByURLRequest>): QueryResolversByURLRequest {
    const message = createBaseQueryResolversByURLRequest();
    message.url = object.url ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolversByURLRequest.$type, QueryResolversByURLRequest);

function createBaseQueryResolversByURLResponse(): QueryResolversByURLResponse {
  return { $type: "regen.data.v1.QueryResolversByURLResponse", resolvers: [], pagination: undefined };
}

export const QueryResolversByURLResponse = {
  $type: "regen.data.v1.QueryResolversByURLResponse" as const,

  encode(message: QueryResolversByURLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resolvers) {
      ResolverInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByURLResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByURLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolvers.push(ResolverInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResolversByURLResponse {
    return {
      $type: QueryResolversByURLResponse.$type,
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResolversByURLResponse): unknown {
    const obj: any = {};
    if (message.resolvers) {
      obj.resolvers = message.resolvers.map((e) => e ? ResolverInfo.toJSON(e) : undefined);
    } else {
      obj.resolvers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResolversByURLResponse>): QueryResolversByURLResponse {
    return QueryResolversByURLResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResolversByURLResponse>): QueryResolversByURLResponse {
    const message = createBaseQueryResolversByURLResponse();
    message.resolvers = object.resolvers?.map((e) => ResolverInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryResolversByURLResponse.$type, QueryResolversByURLResponse);

function createBaseConvertIRIToHashRequest(): ConvertIRIToHashRequest {
  return { $type: "regen.data.v1.ConvertIRIToHashRequest", iri: "" };
}

export const ConvertIRIToHashRequest = {
  $type: "regen.data.v1.ConvertIRIToHashRequest" as const,

  encode(message: ConvertIRIToHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertIRIToHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertIRIToHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConvertIRIToHashRequest {
    return { $type: ConvertIRIToHashRequest.$type, iri: isSet(object.iri) ? String(object.iri) : "" };
  },

  toJSON(message: ConvertIRIToHashRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  create(base?: DeepPartial<ConvertIRIToHashRequest>): ConvertIRIToHashRequest {
    return ConvertIRIToHashRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConvertIRIToHashRequest>): ConvertIRIToHashRequest {
    const message = createBaseConvertIRIToHashRequest();
    message.iri = object.iri ?? "";
    return message;
  },
};

messageTypeRegistry.set(ConvertIRIToHashRequest.$type, ConvertIRIToHashRequest);

function createBaseConvertIRIToHashResponse(): ConvertIRIToHashResponse {
  return { $type: "regen.data.v1.ConvertIRIToHashResponse", contentHash: undefined };
}

export const ConvertIRIToHashResponse = {
  $type: "regen.data.v1.ConvertIRIToHashResponse" as const,

  encode(message: ConvertIRIToHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertIRIToHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertIRIToHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConvertIRIToHashResponse {
    return {
      $type: ConvertIRIToHashResponse.$type,
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
    };
  },

  toJSON(message: ConvertIRIToHashResponse): unknown {
    const obj: any = {};
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ConvertIRIToHashResponse>): ConvertIRIToHashResponse {
    return ConvertIRIToHashResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConvertIRIToHashResponse>): ConvertIRIToHashResponse {
    const message = createBaseConvertIRIToHashResponse();
    message.contentHash = (object.contentHash !== undefined && object.contentHash !== null)
      ? ContentHash.fromPartial(object.contentHash)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConvertIRIToHashResponse.$type, ConvertIRIToHashResponse);

function createBaseConvertHashToIRIRequest(): ConvertHashToIRIRequest {
  return { $type: "regen.data.v1.ConvertHashToIRIRequest", contentHash: undefined };
}

export const ConvertHashToIRIRequest = {
  $type: "regen.data.v1.ConvertHashToIRIRequest" as const,

  encode(message: ConvertHashToIRIRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertHashToIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertHashToIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConvertHashToIRIRequest {
    return {
      $type: ConvertHashToIRIRequest.$type,
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
    };
  },

  toJSON(message: ConvertHashToIRIRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ConvertHashToIRIRequest>): ConvertHashToIRIRequest {
    return ConvertHashToIRIRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConvertHashToIRIRequest>): ConvertHashToIRIRequest {
    const message = createBaseConvertHashToIRIRequest();
    message.contentHash = (object.contentHash !== undefined && object.contentHash !== null)
      ? ContentHash.fromPartial(object.contentHash)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ConvertHashToIRIRequest.$type, ConvertHashToIRIRequest);

function createBaseConvertHashToIRIResponse(): ConvertHashToIRIResponse {
  return { $type: "regen.data.v1.ConvertHashToIRIResponse", iri: "" };
}

export const ConvertHashToIRIResponse = {
  $type: "regen.data.v1.ConvertHashToIRIResponse" as const,

  encode(message: ConvertHashToIRIResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertHashToIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertHashToIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConvertHashToIRIResponse {
    return { $type: ConvertHashToIRIResponse.$type, iri: isSet(object.iri) ? String(object.iri) : "" };
  },

  toJSON(message: ConvertHashToIRIResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  create(base?: DeepPartial<ConvertHashToIRIResponse>): ConvertHashToIRIResponse {
    return ConvertHashToIRIResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConvertHashToIRIResponse>): ConvertHashToIRIResponse {
    const message = createBaseConvertHashToIRIResponse();
    message.iri = object.iri ?? "";
    return message;
  },
};

messageTypeRegistry.set(ConvertHashToIRIResponse.$type, ConvertHashToIRIResponse);

function createBaseAnchorInfo(): AnchorInfo {
  return { $type: "regen.data.v1.AnchorInfo", iri: "", contentHash: undefined, timestamp: undefined };
}

export const AnchorInfo = {
  $type: "regen.data.v1.AnchorInfo" as const,

  encode(message: AnchorInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnchorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnchorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnchorInfo {
    return {
      $type: AnchorInfo.$type,
      iri: isSet(object.iri) ? String(object.iri) : "",
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: AnchorInfo): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  create(base?: DeepPartial<AnchorInfo>): AnchorInfo {
    return AnchorInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AnchorInfo>): AnchorInfo {
    const message = createBaseAnchorInfo();
    message.iri = object.iri ?? "";
    message.contentHash = (object.contentHash !== undefined && object.contentHash !== null)
      ? ContentHash.fromPartial(object.contentHash)
      : undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AnchorInfo.$type, AnchorInfo);

function createBaseAttestationInfo(): AttestationInfo {
  return { $type: "regen.data.v1.AttestationInfo", iri: "", attestor: "", timestamp: undefined };
}

export const AttestationInfo = {
  $type: "regen.data.v1.AttestationInfo" as const,

  encode(message: AttestationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.attestor !== "") {
      writer.uint32(18).string(message.attestor);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttestationInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.attestor = reader.string();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttestationInfo {
    return {
      $type: AttestationInfo.$type,
      iri: isSet(object.iri) ? String(object.iri) : "",
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: AttestationInfo): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.attestor !== undefined && (obj.attestor = message.attestor);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  create(base?: DeepPartial<AttestationInfo>): AttestationInfo {
    return AttestationInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AttestationInfo>): AttestationInfo {
    const message = createBaseAttestationInfo();
    message.iri = object.iri ?? "";
    message.attestor = object.attestor ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(AttestationInfo.$type, AttestationInfo);

function createBaseResolverInfo(): ResolverInfo {
  return { $type: "regen.data.v1.ResolverInfo", id: Long.UZERO, url: "", manager: "" };
}

export const ResolverInfo = {
  $type: "regen.data.v1.ResolverInfo" as const,

  encode(message: ResolverInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.manager !== "") {
      writer.uint32(26).string(message.manager);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolverInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolverInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.manager = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolverInfo {
    return {
      $type: ResolverInfo.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      url: isSet(object.url) ? String(object.url) : "",
      manager: isSet(object.manager) ? String(object.manager) : "",
    };
  },

  toJSON(message: ResolverInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.url !== undefined && (obj.url = message.url);
    message.manager !== undefined && (obj.manager = message.manager);
    return obj;
  },

  create(base?: DeepPartial<ResolverInfo>): ResolverInfo {
    return ResolverInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResolverInfo>): ResolverInfo {
    const message = createBaseResolverInfo();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.url = object.url ?? "";
    message.manager = object.manager ?? "";
    return message;
  },
};

messageTypeRegistry.set(ResolverInfo.$type, ResolverInfo);

/** Query is the regen.data.v1 Query service */
export interface Query {
  /** AnchorByIRI queries a data anchor by the IRI of the data. */
  AnchorByIRI(request: DeepPartial<QueryAnchorByIRIRequest>): Promise<QueryAnchorByIRIResponse>;
  /** AnchorByHash queries a data anchor by the ContentHash of the data. */
  AnchorByHash(request: DeepPartial<QueryAnchorByHashRequest>): Promise<QueryAnchorByHashResponse>;
  /** AttestationsByAttestor queries data attestations by an attestor. */
  AttestationsByAttestor(
    request: DeepPartial<QueryAttestationsByAttestorRequest>,
  ): Promise<QueryAttestationsByAttestorResponse>;
  /** AttestationsByIRI queries data attestations by the IRI of the data. */
  AttestationsByIRI(request: DeepPartial<QueryAttestationsByIRIRequest>): Promise<QueryAttestationsByIRIResponse>;
  /**
   * AttestationsByHash queries data attestations by the ContentHash of the
   * data.
   */
  AttestationsByHash(request: DeepPartial<QueryAttestationsByHashRequest>): Promise<QueryAttestationsByHashResponse>;
  /** Resolver queries a resolver by its unique identifier. */
  Resolver(request: DeepPartial<QueryResolverRequest>): Promise<QueryResolverResponse>;
  /**
   * ResolversByIRI queries resolvers with registered data by the IRI of the
   * data.
   */
  ResolversByIRI(request: DeepPartial<QueryResolversByIRIRequest>): Promise<QueryResolversByIRIResponse>;
  /**
   * ResolversByHash queries resolvers with registered data by the ContentHash
   * of the data.
   */
  ResolversByHash(request: DeepPartial<QueryResolversByHashRequest>): Promise<QueryResolversByHashResponse>;
  /** ResolversByURL queries resolvers by URL. */
  ResolversByURL(request: DeepPartial<QueryResolversByURLRequest>): Promise<QueryResolversByURLResponse>;
  /** ConvertIRIToHash converts an IRI to a ContentHash. */
  ConvertIRIToHash(request: DeepPartial<ConvertIRIToHashRequest>): Promise<ConvertIRIToHashResponse>;
  /** ConvertHashToIRI converts a ContentHash to an IRI. */
  ConvertHashToIRI(request: DeepPartial<ConvertHashToIRIRequest>): Promise<ConvertHashToIRIResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "regen.data.v1.Query";
    this.rpc = rpc;
    this.AnchorByIRI = this.AnchorByIRI.bind(this);
    this.AnchorByHash = this.AnchorByHash.bind(this);
    this.AttestationsByAttestor = this.AttestationsByAttestor.bind(this);
    this.AttestationsByIRI = this.AttestationsByIRI.bind(this);
    this.AttestationsByHash = this.AttestationsByHash.bind(this);
    this.Resolver = this.Resolver.bind(this);
    this.ResolversByIRI = this.ResolversByIRI.bind(this);
    this.ResolversByHash = this.ResolversByHash.bind(this);
    this.ResolversByURL = this.ResolversByURL.bind(this);
    this.ConvertIRIToHash = this.ConvertIRIToHash.bind(this);
    this.ConvertHashToIRI = this.ConvertHashToIRI.bind(this);
  }
  AnchorByIRI(request: DeepPartial<QueryAnchorByIRIRequest>): Promise<QueryAnchorByIRIResponse> {
    const fromPartial = QueryAnchorByIRIRequest.fromPartial(request);
    const data = QueryAnchorByIRIRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AnchorByIRI", data);
    return promise.then((data) => QueryAnchorByIRIResponse.decode(new _m0.Reader(data)));
  }

  AnchorByHash(request: DeepPartial<QueryAnchorByHashRequest>): Promise<QueryAnchorByHashResponse> {
    const fromPartial = QueryAnchorByHashRequest.fromPartial(request);
    const data = QueryAnchorByHashRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AnchorByHash", data);
    return promise.then((data) => QueryAnchorByHashResponse.decode(new _m0.Reader(data)));
  }

  AttestationsByAttestor(
    request: DeepPartial<QueryAttestationsByAttestorRequest>,
  ): Promise<QueryAttestationsByAttestorResponse> {
    const fromPartial = QueryAttestationsByAttestorRequest.fromPartial(request);
    const data = QueryAttestationsByAttestorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AttestationsByAttestor", data);
    return promise.then((data) => QueryAttestationsByAttestorResponse.decode(new _m0.Reader(data)));
  }

  AttestationsByIRI(request: DeepPartial<QueryAttestationsByIRIRequest>): Promise<QueryAttestationsByIRIResponse> {
    const fromPartial = QueryAttestationsByIRIRequest.fromPartial(request);
    const data = QueryAttestationsByIRIRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AttestationsByIRI", data);
    return promise.then((data) => QueryAttestationsByIRIResponse.decode(new _m0.Reader(data)));
  }

  AttestationsByHash(request: DeepPartial<QueryAttestationsByHashRequest>): Promise<QueryAttestationsByHashResponse> {
    const fromPartial = QueryAttestationsByHashRequest.fromPartial(request);
    const data = QueryAttestationsByHashRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AttestationsByHash", data);
    return promise.then((data) => QueryAttestationsByHashResponse.decode(new _m0.Reader(data)));
  }

  Resolver(request: DeepPartial<QueryResolverRequest>): Promise<QueryResolverResponse> {
    const fromPartial = QueryResolverRequest.fromPartial(request);
    const data = QueryResolverRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Resolver", data);
    return promise.then((data) => QueryResolverResponse.decode(new _m0.Reader(data)));
  }

  ResolversByIRI(request: DeepPartial<QueryResolversByIRIRequest>): Promise<QueryResolversByIRIResponse> {
    const fromPartial = QueryResolversByIRIRequest.fromPartial(request);
    const data = QueryResolversByIRIRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ResolversByIRI", data);
    return promise.then((data) => QueryResolversByIRIResponse.decode(new _m0.Reader(data)));
  }

  ResolversByHash(request: DeepPartial<QueryResolversByHashRequest>): Promise<QueryResolversByHashResponse> {
    const fromPartial = QueryResolversByHashRequest.fromPartial(request);
    const data = QueryResolversByHashRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ResolversByHash", data);
    return promise.then((data) => QueryResolversByHashResponse.decode(new _m0.Reader(data)));
  }

  ResolversByURL(request: DeepPartial<QueryResolversByURLRequest>): Promise<QueryResolversByURLResponse> {
    const fromPartial = QueryResolversByURLRequest.fromPartial(request);
    const data = QueryResolversByURLRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ResolversByURL", data);
    return promise.then((data) => QueryResolversByURLResponse.decode(new _m0.Reader(data)));
  }

  ConvertIRIToHash(request: DeepPartial<ConvertIRIToHashRequest>): Promise<ConvertIRIToHashResponse> {
    const fromPartial = ConvertIRIToHashRequest.fromPartial(request);
    const data = ConvertIRIToHashRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ConvertIRIToHash", data);
    return promise.then((data) => ConvertIRIToHashResponse.decode(new _m0.Reader(data)));
  }

  ConvertHashToIRI(request: DeepPartial<ConvertHashToIRIRequest>): Promise<ConvertHashToIRIResponse> {
    const fromPartial = ConvertHashToIRIRequest.fromPartial(request);
    const data = ConvertHashToIRIRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ConvertHashToIRI", data);
    return promise.then((data) => ConvertHashToIRIResponse.decode(new _m0.Reader(data)));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
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
