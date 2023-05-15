import { ContentHash, ContentHashSDKType } from "./types";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */

export interface QueryAnchorByIRIRequest {
  /** iri is the IRI of the anchored data. */
  iri: string;
}
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */

export interface QueryAnchorByIRIRequestSDKType {
  /** iri is the IRI of the anchored data. */
  iri: string;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */

export interface QueryAnchorByIRIResponse {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfo;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */

export interface QueryAnchorByIRIResponseSDKType {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfoSDKType;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */

export interface QueryAnchorByHashRequest {
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */

export interface QueryAnchorByHashRequestSDKType {
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashSDKType;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */

export interface QueryAnchorByHashResponse {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfo;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */

export interface QueryAnchorByHashResponseSDKType {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfoSDKType;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */

export interface QueryAttestationsByAttestorRequest {
  /** attestor is the address of the attestor. */
  attestor: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */

export interface QueryAttestationsByAttestorRequestSDKType {
  /** attestor is the address of the attestor. */
  attestor: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */

export interface QueryAttestationsByAttestorResponse {
  /** attestations are the attestations by the attestor. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponse;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */

export interface QueryAttestationsByAttestorResponseSDKType {
  /** attestations are the attestations by the attestor. */
  attestations: AttestationInfoSDKType[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponseSDKType;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */

export interface QueryAttestationsByIRIRequest {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */

export interface QueryAttestationsByIRIRequestSDKType {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestSDKType;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */

export interface QueryAttestationsByIRIResponse {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponse;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */

export interface QueryAttestationsByIRIResponseSDKType {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfoSDKType[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponseSDKType;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */

export interface QueryAttestationsByHashRequest {
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */

export interface QueryAttestationsByHashRequestSDKType {
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashSDKType;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */

export interface QueryAttestationsByHashResponse {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponse;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */

export interface QueryAttestationsByHashResponseSDKType {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfoSDKType[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponseSDKType;
}
/** QueryResolverRequest is the Query/Resolver request type. */

export interface QueryResolverRequest {
  /** id is the ID of the resolver. */
  id: Long;
}
/** QueryResolverRequest is the Query/Resolver request type. */

export interface QueryResolverRequestSDKType {
  /** id is the ID of the resolver. */
  id: Long;
}
/** QueryResolverResponse is the Query/Resolver response type. */

export interface QueryResolverResponse {
  /** resolver is information about the resolver. */
  resolver?: ResolverInfo;
}
/** QueryResolverResponse is the Query/Resolver response type. */

export interface QueryResolverResponseSDKType {
  /** resolver is information about the resolver. */
  resolver?: ResolverInfoSDKType;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */

export interface QueryResolversByIRIRequest {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */

export interface QueryResolversByIRIRequestSDKType {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestSDKType;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */

export interface QueryResolversByIRIResponse {
  /** resolvers are the resolvers that have registered the anchored data. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponse;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */

export interface QueryResolversByIRIResponseSDKType {
  /** resolvers are the resolvers that have registered the anchored data. */
  resolvers: ResolverInfoSDKType[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponseSDKType;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */

export interface QueryResolversByHashRequest {
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */

export interface QueryResolversByHashRequestSDKType {
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashSDKType;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestSDKType;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */

export interface QueryResolversByHashResponse {
  /** resolvers are the resolvers that have registered the data. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponse;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */

export interface QueryResolversByHashResponseSDKType {
  /** resolvers are the resolvers that have registered the data. */
  resolvers: ResolverInfoSDKType[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponseSDKType;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */

export interface QueryResolversByURLRequest {
  /** url is the URL of the resolver. */
  url: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */

export interface QueryResolversByURLRequestSDKType {
  /** url is the URL of the resolver. */
  url: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestSDKType;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */

export interface QueryResolversByURLResponse {
  /** resolvers are the resolvers that have a matching URL. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponse;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */

export interface QueryResolversByURLResponseSDKType {
  /** resolvers are the resolvers that have a matching URL. */
  resolvers: ResolverInfoSDKType[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponseSDKType;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */

export interface ConvertIRIToHashRequest {
  /** iri is the IRI to convert to a ContentHash. */
  iri: string;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */

export interface ConvertIRIToHashRequestSDKType {
  /** iri is the IRI to convert to a ContentHash. */
  iri: string;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */

export interface ConvertIRIToHashResponse {
  /** content_hash is the ContentHash converted from the IRI. */
  contentHash?: ContentHash;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */

export interface ConvertIRIToHashResponseSDKType {
  /** content_hash is the ContentHash converted from the IRI. */
  content_hash?: ContentHashSDKType;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */

export interface ConvertHashToIRIRequest {
  /** content_hash is the ContentHash to convert to an IRI. */
  contentHash?: ContentHash;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */

export interface ConvertHashToIRIRequestSDKType {
  /** content_hash is the ContentHash to convert to an IRI. */
  content_hash?: ContentHashSDKType;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */

export interface ConvertHashToIRIResponse {
  /** iri is the IRI converted from the ContentHash. */
  iri: string;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */

export interface ConvertHashToIRIResponseSDKType {
  /** iri is the IRI converted from the ContentHash. */
  iri: string;
}
/** AnchorInfo is the information for a data anchor. */

export interface AnchorInfo {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** content_hash is the ContentHash of the anchored data. */

  contentHash?: ContentHash;
  /** timestamp is the time at which the data was anchored. */

  timestamp?: Timestamp;
}
/** AnchorInfo is the information for a data anchor. */

export interface AnchorInfoSDKType {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** content_hash is the ContentHash of the anchored data. */

  content_hash?: ContentHashSDKType;
  /** timestamp is the time at which the data was anchored. */

  timestamp?: TimestampSDKType;
}
/** AttestationInfo is the information for an attestation. */

export interface AttestationInfo {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** attestor is the address of the account that attested to the anchored data. */

  attestor: string;
  /** timestamp is the time at which the data was attested to. */

  timestamp?: Timestamp;
}
/** AttestationInfo is the information for an attestation. */

export interface AttestationInfoSDKType {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** attestor is the address of the account that attested to the anchored data. */

  attestor: string;
  /** timestamp is the time at which the data was attested to. */

  timestamp?: TimestampSDKType;
}
/** ResolverInfo is the information for a resolver. */

export interface ResolverInfo {
  /** id is the ID of the resolver. */
  id: Long;
  /** url is the URL of the resolver. */

  url: string;
  /** manager is the address of the account that manages the resolver. */

  manager: string;
}
/** ResolverInfo is the information for a resolver. */

export interface ResolverInfoSDKType {
  /** id is the ID of the resolver. */
  id: Long;
  /** url is the URL of the resolver. */

  url: string;
  /** manager is the address of the account that manages the resolver. */

  manager: string;
}

function createBaseQueryAnchorByIRIRequest(): QueryAnchorByIRIRequest {
  return {
    iri: ""
  };
}

export const QueryAnchorByIRIRequest = {
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
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: QueryAnchorByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: Partial<QueryAnchorByIRIRequest>): QueryAnchorByIRIRequest {
    const message = createBaseQueryAnchorByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseQueryAnchorByIRIResponse(): QueryAnchorByIRIResponse {
  return {
    anchor: undefined
  };
}

export const QueryAnchorByIRIResponse = {
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
      anchor: isSet(object.anchor) ? AnchorInfo.fromJSON(object.anchor) : undefined
    };
  },

  toJSON(message: QueryAnchorByIRIResponse): unknown {
    const obj: any = {};
    message.anchor !== undefined && (obj.anchor = message.anchor ? AnchorInfo.toJSON(message.anchor) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAnchorByIRIResponse>): QueryAnchorByIRIResponse {
    const message = createBaseQueryAnchorByIRIResponse();
    message.anchor = object.anchor !== undefined && object.anchor !== null ? AnchorInfo.fromPartial(object.anchor) : undefined;
    return message;
  }

};

function createBaseQueryAnchorByHashRequest(): QueryAnchorByHashRequest {
  return {
    contentHash: undefined
  };
}

export const QueryAnchorByHashRequest = {
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
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: QueryAnchorByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAnchorByHashRequest>): QueryAnchorByHashRequest {
    const message = createBaseQueryAnchorByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseQueryAnchorByHashResponse(): QueryAnchorByHashResponse {
  return {
    anchor: undefined
  };
}

export const QueryAnchorByHashResponse = {
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
      anchor: isSet(object.anchor) ? AnchorInfo.fromJSON(object.anchor) : undefined
    };
  },

  toJSON(message: QueryAnchorByHashResponse): unknown {
    const obj: any = {};
    message.anchor !== undefined && (obj.anchor = message.anchor ? AnchorInfo.toJSON(message.anchor) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAnchorByHashResponse>): QueryAnchorByHashResponse {
    const message = createBaseQueryAnchorByHashResponse();
    message.anchor = object.anchor !== undefined && object.anchor !== null ? AnchorInfo.fromPartial(object.anchor) : undefined;
    return message;
  }

};

function createBaseQueryAttestationsByAttestorRequest(): QueryAttestationsByAttestorRequest {
  return {
    attestor: "",
    pagination: undefined
  };
}

export const QueryAttestationsByAttestorRequest = {
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
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestationsByAttestorRequest): unknown {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAttestationsByAttestorRequest>): QueryAttestationsByAttestorRequest {
    const message = createBaseQueryAttestationsByAttestorRequest();
    message.attestor = object.attestor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestationsByAttestorResponse(): QueryAttestationsByAttestorResponse {
  return {
    attestations: [],
    pagination: undefined
  };
}

export const QueryAttestationsByAttestorResponse = {
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
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => AttestationInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestationsByAttestorResponse): unknown {
    const obj: any = {};

    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAttestationsByAttestorResponse>): QueryAttestationsByAttestorResponse {
    const message = createBaseQueryAttestationsByAttestorResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestationsByIRIRequest(): QueryAttestationsByIRIRequest {
  return {
    iri: "",
    pagination: undefined
  };
}

export const QueryAttestationsByIRIRequest = {
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
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestationsByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAttestationsByIRIRequest>): QueryAttestationsByIRIRequest {
    const message = createBaseQueryAttestationsByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestationsByIRIResponse(): QueryAttestationsByIRIResponse {
  return {
    attestations: [],
    pagination: undefined
  };
}

export const QueryAttestationsByIRIResponse = {
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
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => AttestationInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestationsByIRIResponse): unknown {
    const obj: any = {};

    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAttestationsByIRIResponse>): QueryAttestationsByIRIResponse {
    const message = createBaseQueryAttestationsByIRIResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestationsByHashRequest(): QueryAttestationsByHashRequest {
  return {
    contentHash: undefined,
    pagination: undefined
  };
}

export const QueryAttestationsByHashRequest = {
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
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestationsByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAttestationsByHashRequest>): QueryAttestationsByHashRequest {
    const message = createBaseQueryAttestationsByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAttestationsByHashResponse(): QueryAttestationsByHashResponse {
  return {
    attestations: [],
    pagination: undefined
  };
}

export const QueryAttestationsByHashResponse = {
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
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => AttestationInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAttestationsByHashResponse): unknown {
    const obj: any = {};

    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAttestationsByHashResponse>): QueryAttestationsByHashResponse {
    const message = createBaseQueryAttestationsByHashResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolverRequest(): QueryResolverRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryResolverRequest = {
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
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResolverRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryResolverRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryResolverRequest>): QueryResolverRequest {
    const message = createBaseQueryResolverRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryResolverResponse(): QueryResolverResponse {
  return {
    resolver: undefined
  };
}

export const QueryResolverResponse = {
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
      resolver: isSet(object.resolver) ? ResolverInfo.fromJSON(object.resolver) : undefined
    };
  },

  toJSON(message: QueryResolverResponse): unknown {
    const obj: any = {};
    message.resolver !== undefined && (obj.resolver = message.resolver ? ResolverInfo.toJSON(message.resolver) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolverResponse>): QueryResolverResponse {
    const message = createBaseQueryResolverResponse();
    message.resolver = object.resolver !== undefined && object.resolver !== null ? ResolverInfo.fromPartial(object.resolver) : undefined;
    return message;
  }

};

function createBaseQueryResolversByIRIRequest(): QueryResolversByIRIRequest {
  return {
    iri: "",
    pagination: undefined
  };
}

export const QueryResolversByIRIRequest = {
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
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByIRIResponse(): QueryResolversByIRIResponse {
  return {
    resolvers: [],
    pagination: undefined
  };
}

export const QueryResolversByIRIResponse = {
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
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByIRIResponse): unknown {
    const obj: any = {};

    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toJSON(e) : undefined);
    } else {
      obj.resolvers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByHashRequest(): QueryResolversByHashRequest {
  return {
    contentHash: undefined,
    pagination: undefined
  };
}

export const QueryResolversByHashRequest = {
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
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByHashRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolversByHashRequest>): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByHashResponse(): QueryResolversByHashResponse {
  return {
    resolvers: [],
    pagination: undefined
  };
}

export const QueryResolversByHashResponse = {
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
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByHashResponse): unknown {
    const obj: any = {};

    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toJSON(e) : undefined);
    } else {
      obj.resolvers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolversByHashResponse>): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByURLRequest(): QueryResolversByURLRequest {
  return {
    url: "",
    pagination: undefined
  };
}

export const QueryResolversByURLRequest = {
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
      url: isSet(object.url) ? String(object.url) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByURLRequest): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolversByURLRequest>): QueryResolversByURLRequest {
    const message = createBaseQueryResolversByURLRequest();
    message.url = object.url ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryResolversByURLResponse(): QueryResolversByURLResponse {
  return {
    resolvers: [],
    pagination: undefined
  };
}

export const QueryResolversByURLResponse = {
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
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryResolversByURLResponse): unknown {
    const obj: any = {};

    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toJSON(e) : undefined);
    } else {
      obj.resolvers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryResolversByURLResponse>): QueryResolversByURLResponse {
    const message = createBaseQueryResolversByURLResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseConvertIRIToHashRequest(): ConvertIRIToHashRequest {
  return {
    iri: ""
  };
}

export const ConvertIRIToHashRequest = {
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
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: ConvertIRIToHashRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: Partial<ConvertIRIToHashRequest>): ConvertIRIToHashRequest {
    const message = createBaseConvertIRIToHashRequest();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseConvertIRIToHashResponse(): ConvertIRIToHashResponse {
  return {
    contentHash: undefined
  };
}

export const ConvertIRIToHashResponse = {
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
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: ConvertIRIToHashResponse): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ConvertIRIToHashResponse>): ConvertIRIToHashResponse {
    const message = createBaseConvertIRIToHashResponse();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseConvertHashToIRIRequest(): ConvertHashToIRIRequest {
  return {
    contentHash: undefined
  };
}

export const ConvertHashToIRIRequest = {
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
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },

  toJSON(message: ConvertHashToIRIRequest): unknown {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ConvertHashToIRIRequest>): ConvertHashToIRIRequest {
    const message = createBaseConvertHashToIRIRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  }

};

function createBaseConvertHashToIRIResponse(): ConvertHashToIRIResponse {
  return {
    iri: ""
  };
}

export const ConvertHashToIRIResponse = {
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
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },

  toJSON(message: ConvertHashToIRIResponse): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial(object: Partial<ConvertHashToIRIResponse>): ConvertHashToIRIResponse {
    const message = createBaseConvertHashToIRIResponse();
    message.iri = object.iri ?? "";
    return message;
  }

};

function createBaseAnchorInfo(): AnchorInfo {
  return {
    iri: "",
    contentHash: undefined,
    timestamp: undefined
  };
}

export const AnchorInfo = {
  encode(message: AnchorInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
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
          message.timestamp = Timestamp.decode(reader, reader.uint32());
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
      iri: isSet(object.iri) ? String(object.iri) : "",
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AnchorInfo): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<AnchorInfo>): AnchorInfo {
    const message = createBaseAnchorInfo();
    message.iri = object.iri ?? "";
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }

};

function createBaseAttestationInfo(): AttestationInfo {
  return {
    iri: "",
    attestor: "",
    timestamp: undefined
  };
}

export const AttestationInfo = {
  encode(message: AttestationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }

    if (message.attestor !== "") {
      writer.uint32(18).string(message.attestor);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
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
          message.timestamp = Timestamp.decode(reader, reader.uint32());
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
      iri: isSet(object.iri) ? String(object.iri) : "",
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AttestationInfo): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.attestor !== undefined && (obj.attestor = message.attestor);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: Partial<AttestationInfo>): AttestationInfo {
    const message = createBaseAttestationInfo();
    message.iri = object.iri ?? "";
    message.attestor = object.attestor ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  }

};

function createBaseResolverInfo(): ResolverInfo {
  return {
    id: Long.UZERO,
    url: "",
    manager: ""
  };
}

export const ResolverInfo = {
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
          message.id = (reader.uint64() as Long);
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      url: isSet(object.url) ? String(object.url) : "",
      manager: isSet(object.manager) ? String(object.manager) : ""
    };
  },

  toJSON(message: ResolverInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.url !== undefined && (obj.url = message.url);
    message.manager !== undefined && (obj.manager = message.manager);
    return obj;
  },

  fromPartial(object: Partial<ResolverInfo>): ResolverInfo {
    const message = createBaseResolverInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.url = object.url ?? "";
    message.manager = object.manager ?? "";
    return message;
  }

};