import { ContentHash, ContentHashAmino, ContentHashSDKType } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */

export interface QueryAnchorByIRIRequest {
  /** iri is the IRI of the anchored data. */
  iri: string;
}
export interface QueryAnchorByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest";
  value: Uint8Array;
}
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */

export interface QueryAnchorByIRIRequestAmino {
  /** iri is the IRI of the anchored data. */
  iri: string;
}
export interface QueryAnchorByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryAnchorByIRIRequest";
  value: QueryAnchorByIRIRequestAmino;
}
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */

export interface QueryAnchorByIRIRequestSDKType {
  iri: string;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */

export interface QueryAnchorByIRIResponse {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfo;
}
export interface QueryAnchorByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse";
  value: Uint8Array;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */

export interface QueryAnchorByIRIResponseAmino {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfoAmino;
}
export interface QueryAnchorByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryAnchorByIRIResponse";
  value: QueryAnchorByIRIResponseAmino;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */

export interface QueryAnchorByIRIResponseSDKType {
  anchor?: AnchorInfoSDKType;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */

export interface QueryAnchorByHashRequest {
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
}
export interface QueryAnchorByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAnchorByHashRequest";
  value: Uint8Array;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */

export interface QueryAnchorByHashRequestAmino {
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashAmino;
}
export interface QueryAnchorByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryAnchorByHashRequest";
  value: QueryAnchorByHashRequestAmino;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */

export interface QueryAnchorByHashRequestSDKType {
  content_hash?: ContentHashSDKType;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */

export interface QueryAnchorByHashResponse {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfo;
}
export interface QueryAnchorByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAnchorByHashResponse";
  value: Uint8Array;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */

export interface QueryAnchorByHashResponseAmino {
  /** anchor is information about the data anchor. */
  anchor?: AnchorInfoAmino;
}
export interface QueryAnchorByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryAnchorByHashResponse";
  value: QueryAnchorByHashResponseAmino;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */

export interface QueryAnchorByHashResponseSDKType {
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
export interface QueryAttestationsByAttestorRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest";
  value: Uint8Array;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */

export interface QueryAttestationsByAttestorRequestAmino {
  /** attestor is the address of the attestor. */
  attestor: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestAmino;
}
export interface QueryAttestationsByAttestorRequestAminoMsg {
  type: "/regen.data.v1.QueryAttestationsByAttestorRequest";
  value: QueryAttestationsByAttestorRequestAmino;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */

export interface QueryAttestationsByAttestorRequestSDKType {
  attestor: string;
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
export interface QueryAttestationsByAttestorResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse";
  value: Uint8Array;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */

export interface QueryAttestationsByAttestorResponseAmino {
  /** attestations are the attestations by the attestor. */
  attestations: AttestationInfoAmino[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponseAmino;
}
export interface QueryAttestationsByAttestorResponseAminoMsg {
  type: "/regen.data.v1.QueryAttestationsByAttestorResponse";
  value: QueryAttestationsByAttestorResponseAmino;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */

export interface QueryAttestationsByAttestorResponseSDKType {
  attestations: AttestationInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */

export interface QueryAttestationsByIRIRequest {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
export interface QueryAttestationsByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest";
  value: Uint8Array;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */

export interface QueryAttestationsByIRIRequestAmino {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestAmino;
}
export interface QueryAttestationsByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryAttestationsByIRIRequest";
  value: QueryAttestationsByIRIRequestAmino;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */

export interface QueryAttestationsByIRIRequestSDKType {
  iri: string;
  pagination?: PageRequestSDKType;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */

export interface QueryAttestationsByIRIResponse {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfo[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponse;
}
export interface QueryAttestationsByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse";
  value: Uint8Array;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */

export interface QueryAttestationsByIRIResponseAmino {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfoAmino[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponseAmino;
}
export interface QueryAttestationsByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryAttestationsByIRIResponse";
  value: QueryAttestationsByIRIResponseAmino;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */

export interface QueryAttestationsByIRIResponseSDKType {
  attestations: AttestationInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */

export interface QueryAttestationsByHashRequest {
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
export interface QueryAttestationsByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest";
  value: Uint8Array;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */

export interface QueryAttestationsByHashRequestAmino {
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashAmino;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestAmino;
}
export interface QueryAttestationsByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryAttestationsByHashRequest";
  value: QueryAttestationsByHashRequestAmino;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */

export interface QueryAttestationsByHashRequestSDKType {
  content_hash?: ContentHashSDKType;
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
export interface QueryAttestationsByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse";
  value: Uint8Array;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */

export interface QueryAttestationsByHashResponseAmino {
  /** attestations are the attestations that have been made to the anchored data. */
  attestations: AttestationInfoAmino[];
  /** pagination is the pagination PageResponse. */

  pagination?: PageResponseAmino;
}
export interface QueryAttestationsByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryAttestationsByHashResponse";
  value: QueryAttestationsByHashResponseAmino;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */

export interface QueryAttestationsByHashResponseSDKType {
  attestations: AttestationInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryResolverRequest is the Query/Resolver request type. */

export interface QueryResolverRequest {
  /** id is the ID of the resolver. */
  id: Long;
}
export interface QueryResolverRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolverRequest";
  value: Uint8Array;
}
/** QueryResolverRequest is the Query/Resolver request type. */

export interface QueryResolverRequestAmino {
  /** id is the ID of the resolver. */
  id: string;
}
export interface QueryResolverRequestAminoMsg {
  type: "/regen.data.v1.QueryResolverRequest";
  value: QueryResolverRequestAmino;
}
/** QueryResolverRequest is the Query/Resolver request type. */

export interface QueryResolverRequestSDKType {
  id: Long;
}
/** QueryResolverResponse is the Query/Resolver response type. */

export interface QueryResolverResponse {
  /** resolver is information about the resolver. */
  resolver?: ResolverInfo;
}
export interface QueryResolverResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolverResponse";
  value: Uint8Array;
}
/** QueryResolverResponse is the Query/Resolver response type. */

export interface QueryResolverResponseAmino {
  /** resolver is information about the resolver. */
  resolver?: ResolverInfoAmino;
}
export interface QueryResolverResponseAminoMsg {
  type: "/regen.data.v1.QueryResolverResponse";
  value: QueryResolverResponseAmino;
}
/** QueryResolverResponse is the Query/Resolver response type. */

export interface QueryResolverResponseSDKType {
  resolver?: ResolverInfoSDKType;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */

export interface QueryResolversByIRIRequest {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
export interface QueryResolversByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByIRIRequest";
  value: Uint8Array;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */

export interface QueryResolversByIRIRequestAmino {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestAmino;
}
export interface QueryResolversByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryResolversByIRIRequest";
  value: QueryResolversByIRIRequestAmino;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */

export interface QueryResolversByIRIRequestSDKType {
  iri: string;
  pagination?: PageRequestSDKType;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */

export interface QueryResolversByIRIResponse {
  /** resolvers are the resolvers that have registered the anchored data. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponse;
}
export interface QueryResolversByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByIRIResponse";
  value: Uint8Array;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */

export interface QueryResolversByIRIResponseAmino {
  /** resolvers are the resolvers that have registered the anchored data. */
  resolvers: ResolverInfoAmino[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponseAmino;
}
export interface QueryResolversByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryResolversByIRIResponse";
  value: QueryResolversByIRIResponseAmino;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */

export interface QueryResolversByIRIResponseSDKType {
  resolvers: ResolverInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */

export interface QueryResolversByHashRequest {
  /** content_hash is the ContentHash of the anchored data. */
  contentHash?: ContentHash;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
export interface QueryResolversByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByHashRequest";
  value: Uint8Array;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */

export interface QueryResolversByHashRequestAmino {
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashAmino;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestAmino;
}
export interface QueryResolversByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryResolversByHashRequest";
  value: QueryResolversByHashRequestAmino;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */

export interface QueryResolversByHashRequestSDKType {
  content_hash?: ContentHashSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */

export interface QueryResolversByHashResponse {
  /** resolvers are the resolvers that have registered the data. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponse;
}
export interface QueryResolversByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByHashResponse";
  value: Uint8Array;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */

export interface QueryResolversByHashResponseAmino {
  /** resolvers are the resolvers that have registered the data. */
  resolvers: ResolverInfoAmino[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponseAmino;
}
export interface QueryResolversByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryResolversByHashResponse";
  value: QueryResolversByHashResponseAmino;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */

export interface QueryResolversByHashResponseSDKType {
  resolvers: ResolverInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */

export interface QueryResolversByURLRequest {
  /** url is the URL of the resolver. */
  url: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequest;
}
export interface QueryResolversByURLRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByURLRequest";
  value: Uint8Array;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */

export interface QueryResolversByURLRequestAmino {
  /** url is the URL of the resolver. */
  url: string;
  /** pagination is the PageRequest to use for pagination. */

  pagination?: PageRequestAmino;
}
export interface QueryResolversByURLRequestAminoMsg {
  type: "/regen.data.v1.QueryResolversByURLRequest";
  value: QueryResolversByURLRequestAmino;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */

export interface QueryResolversByURLRequestSDKType {
  url: string;
  pagination?: PageRequestSDKType;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */

export interface QueryResolversByURLResponse {
  /** resolvers are the resolvers that have a matching URL. */
  resolvers: ResolverInfo[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponse;
}
export interface QueryResolversByURLResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByURLResponse";
  value: Uint8Array;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */

export interface QueryResolversByURLResponseAmino {
  /** resolvers are the resolvers that have a matching URL. */
  resolvers: ResolverInfoAmino[];
  /** pagination is the PageResponse to use for pagination. */

  pagination?: PageResponseAmino;
}
export interface QueryResolversByURLResponseAminoMsg {
  type: "/regen.data.v1.QueryResolversByURLResponse";
  value: QueryResolversByURLResponseAmino;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */

export interface QueryResolversByURLResponseSDKType {
  resolvers: ResolverInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */

export interface ConvertIRIToHashRequest {
  /** iri is the IRI to convert to a ContentHash. */
  iri: string;
}
export interface ConvertIRIToHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.ConvertIRIToHashRequest";
  value: Uint8Array;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */

export interface ConvertIRIToHashRequestAmino {
  /** iri is the IRI to convert to a ContentHash. */
  iri: string;
}
export interface ConvertIRIToHashRequestAminoMsg {
  type: "/regen.data.v1.ConvertIRIToHashRequest";
  value: ConvertIRIToHashRequestAmino;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */

export interface ConvertIRIToHashRequestSDKType {
  iri: string;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */

export interface ConvertIRIToHashResponse {
  /** content_hash is the ContentHash converted from the IRI. */
  contentHash?: ContentHash;
}
export interface ConvertIRIToHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.ConvertIRIToHashResponse";
  value: Uint8Array;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */

export interface ConvertIRIToHashResponseAmino {
  /** content_hash is the ContentHash converted from the IRI. */
  content_hash?: ContentHashAmino;
}
export interface ConvertIRIToHashResponseAminoMsg {
  type: "/regen.data.v1.ConvertIRIToHashResponse";
  value: ConvertIRIToHashResponseAmino;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */

export interface ConvertIRIToHashResponseSDKType {
  content_hash?: ContentHashSDKType;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */

export interface ConvertHashToIRIRequest {
  /** content_hash is the ContentHash to convert to an IRI. */
  contentHash?: ContentHash;
}
export interface ConvertHashToIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.ConvertHashToIRIRequest";
  value: Uint8Array;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */

export interface ConvertHashToIRIRequestAmino {
  /** content_hash is the ContentHash to convert to an IRI. */
  content_hash?: ContentHashAmino;
}
export interface ConvertHashToIRIRequestAminoMsg {
  type: "/regen.data.v1.ConvertHashToIRIRequest";
  value: ConvertHashToIRIRequestAmino;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */

export interface ConvertHashToIRIRequestSDKType {
  content_hash?: ContentHashSDKType;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */

export interface ConvertHashToIRIResponse {
  /** iri is the IRI converted from the ContentHash. */
  iri: string;
}
export interface ConvertHashToIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.ConvertHashToIRIResponse";
  value: Uint8Array;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */

export interface ConvertHashToIRIResponseAmino {
  /** iri is the IRI converted from the ContentHash. */
  iri: string;
}
export interface ConvertHashToIRIResponseAminoMsg {
  type: "/regen.data.v1.ConvertHashToIRIResponse";
  value: ConvertHashToIRIResponseAmino;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */

export interface ConvertHashToIRIResponseSDKType {
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
export interface AnchorInfoProtoMsg {
  typeUrl: "/regen.data.v1.AnchorInfo";
  value: Uint8Array;
}
/** AnchorInfo is the information for a data anchor. */

export interface AnchorInfoAmino {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** content_hash is the ContentHash of the anchored data. */

  content_hash?: ContentHashAmino;
  /** timestamp is the time at which the data was anchored. */

  timestamp?: TimestampAmino;
}
export interface AnchorInfoAminoMsg {
  type: "/regen.data.v1.AnchorInfo";
  value: AnchorInfoAmino;
}
/** AnchorInfo is the information for a data anchor. */

export interface AnchorInfoSDKType {
  iri: string;
  content_hash?: ContentHashSDKType;
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
export interface AttestationInfoProtoMsg {
  typeUrl: "/regen.data.v1.AttestationInfo";
  value: Uint8Array;
}
/** AttestationInfo is the information for an attestation. */

export interface AttestationInfoAmino {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** attestor is the address of the account that attested to the anchored data. */

  attestor: string;
  /** timestamp is the time at which the data was attested to. */

  timestamp?: TimestampAmino;
}
export interface AttestationInfoAminoMsg {
  type: "/regen.data.v1.AttestationInfo";
  value: AttestationInfoAmino;
}
/** AttestationInfo is the information for an attestation. */

export interface AttestationInfoSDKType {
  iri: string;
  attestor: string;
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
export interface ResolverInfoProtoMsg {
  typeUrl: "/regen.data.v1.ResolverInfo";
  value: Uint8Array;
}
/** ResolverInfo is the information for a resolver. */

export interface ResolverInfoAmino {
  /** id is the ID of the resolver. */
  id: string;
  /** url is the URL of the resolver. */

  url: string;
  /** manager is the address of the account that manages the resolver. */

  manager: string;
}
export interface ResolverInfoAminoMsg {
  type: "/regen.data.v1.ResolverInfo";
  value: ResolverInfoAmino;
}
/** ResolverInfo is the information for a resolver. */

export interface ResolverInfoSDKType {
  id: Long;
  url: string;
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
  },

  fromAmino(object: QueryAnchorByIRIRequestAmino): QueryAnchorByIRIRequest {
    return {
      iri: object.iri
    };
  },

  toAmino(message: QueryAnchorByIRIRequest): QueryAnchorByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },

  fromAminoMsg(object: QueryAnchorByIRIRequestAminoMsg): QueryAnchorByIRIRequest {
    return QueryAnchorByIRIRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAnchorByIRIRequestProtoMsg): QueryAnchorByIRIRequest {
    return QueryAnchorByIRIRequest.decode(message.value);
  },

  toProto(message: QueryAnchorByIRIRequest): Uint8Array {
    return QueryAnchorByIRIRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAnchorByIRIRequest): QueryAnchorByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest",
      value: QueryAnchorByIRIRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAnchorByIRIResponseAmino): QueryAnchorByIRIResponse {
    return {
      anchor: object?.anchor ? AnchorInfo.fromAmino(object.anchor) : undefined
    };
  },

  toAmino(message: QueryAnchorByIRIResponse): QueryAnchorByIRIResponseAmino {
    const obj: any = {};
    obj.anchor = message.anchor ? AnchorInfo.toAmino(message.anchor) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAnchorByIRIResponseAminoMsg): QueryAnchorByIRIResponse {
    return QueryAnchorByIRIResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAnchorByIRIResponseProtoMsg): QueryAnchorByIRIResponse {
    return QueryAnchorByIRIResponse.decode(message.value);
  },

  toProto(message: QueryAnchorByIRIResponse): Uint8Array {
    return QueryAnchorByIRIResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAnchorByIRIResponse): QueryAnchorByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse",
      value: QueryAnchorByIRIResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAnchorByHashRequestAmino): QueryAnchorByHashRequest {
    return {
      contentHash: object?.content_hash ? ContentHash.fromAmino(object.content_hash) : undefined
    };
  },

  toAmino(message: QueryAnchorByHashRequest): QueryAnchorByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAnchorByHashRequestAminoMsg): QueryAnchorByHashRequest {
    return QueryAnchorByHashRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAnchorByHashRequestProtoMsg): QueryAnchorByHashRequest {
    return QueryAnchorByHashRequest.decode(message.value);
  },

  toProto(message: QueryAnchorByHashRequest): Uint8Array {
    return QueryAnchorByHashRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAnchorByHashRequest): QueryAnchorByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAnchorByHashRequest",
      value: QueryAnchorByHashRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAnchorByHashResponseAmino): QueryAnchorByHashResponse {
    return {
      anchor: object?.anchor ? AnchorInfo.fromAmino(object.anchor) : undefined
    };
  },

  toAmino(message: QueryAnchorByHashResponse): QueryAnchorByHashResponseAmino {
    const obj: any = {};
    obj.anchor = message.anchor ? AnchorInfo.toAmino(message.anchor) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAnchorByHashResponseAminoMsg): QueryAnchorByHashResponse {
    return QueryAnchorByHashResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAnchorByHashResponseProtoMsg): QueryAnchorByHashResponse {
    return QueryAnchorByHashResponse.decode(message.value);
  },

  toProto(message: QueryAnchorByHashResponse): Uint8Array {
    return QueryAnchorByHashResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAnchorByHashResponse): QueryAnchorByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAnchorByHashResponse",
      value: QueryAnchorByHashResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAttestationsByAttestorRequestAmino): QueryAttestationsByAttestorRequest {
    return {
      attestor: object.attestor,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAttestationsByAttestorRequest): QueryAttestationsByAttestorRequestAmino {
    const obj: any = {};
    obj.attestor = message.attestor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAttestationsByAttestorRequestAminoMsg): QueryAttestationsByAttestorRequest {
    return QueryAttestationsByAttestorRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAttestationsByAttestorRequestProtoMsg): QueryAttestationsByAttestorRequest {
    return QueryAttestationsByAttestorRequest.decode(message.value);
  },

  toProto(message: QueryAttestationsByAttestorRequest): Uint8Array {
    return QueryAttestationsByAttestorRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAttestationsByAttestorRequest): QueryAttestationsByAttestorRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest",
      value: QueryAttestationsByAttestorRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAttestationsByAttestorResponseAmino): QueryAttestationsByAttestorResponse {
    return {
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => AttestationInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAttestationsByAttestorResponse): QueryAttestationsByAttestorResponseAmino {
    const obj: any = {};

    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
    } else {
      obj.attestations = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAttestationsByAttestorResponseAminoMsg): QueryAttestationsByAttestorResponse {
    return QueryAttestationsByAttestorResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAttestationsByAttestorResponseProtoMsg): QueryAttestationsByAttestorResponse {
    return QueryAttestationsByAttestorResponse.decode(message.value);
  },

  toProto(message: QueryAttestationsByAttestorResponse): Uint8Array {
    return QueryAttestationsByAttestorResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAttestationsByAttestorResponse): QueryAttestationsByAttestorResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse",
      value: QueryAttestationsByAttestorResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAttestationsByIRIRequestAmino): QueryAttestationsByIRIRequest {
    return {
      iri: object.iri,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAttestationsByIRIRequest): QueryAttestationsByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAttestationsByIRIRequestAminoMsg): QueryAttestationsByIRIRequest {
    return QueryAttestationsByIRIRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAttestationsByIRIRequestProtoMsg): QueryAttestationsByIRIRequest {
    return QueryAttestationsByIRIRequest.decode(message.value);
  },

  toProto(message: QueryAttestationsByIRIRequest): Uint8Array {
    return QueryAttestationsByIRIRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAttestationsByIRIRequest): QueryAttestationsByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest",
      value: QueryAttestationsByIRIRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAttestationsByIRIResponseAmino): QueryAttestationsByIRIResponse {
    return {
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => AttestationInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAttestationsByIRIResponse): QueryAttestationsByIRIResponseAmino {
    const obj: any = {};

    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
    } else {
      obj.attestations = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAttestationsByIRIResponseAminoMsg): QueryAttestationsByIRIResponse {
    return QueryAttestationsByIRIResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAttestationsByIRIResponseProtoMsg): QueryAttestationsByIRIResponse {
    return QueryAttestationsByIRIResponse.decode(message.value);
  },

  toProto(message: QueryAttestationsByIRIResponse): Uint8Array {
    return QueryAttestationsByIRIResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAttestationsByIRIResponse): QueryAttestationsByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse",
      value: QueryAttestationsByIRIResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAttestationsByHashRequestAmino): QueryAttestationsByHashRequest {
    return {
      contentHash: object?.content_hash ? ContentHash.fromAmino(object.content_hash) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAttestationsByHashRequest): QueryAttestationsByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAttestationsByHashRequestAminoMsg): QueryAttestationsByHashRequest {
    return QueryAttestationsByHashRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAttestationsByHashRequestProtoMsg): QueryAttestationsByHashRequest {
    return QueryAttestationsByHashRequest.decode(message.value);
  },

  toProto(message: QueryAttestationsByHashRequest): Uint8Array {
    return QueryAttestationsByHashRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryAttestationsByHashRequest): QueryAttestationsByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest",
      value: QueryAttestationsByHashRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryAttestationsByHashResponseAmino): QueryAttestationsByHashResponse {
    return {
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => AttestationInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAttestationsByHashResponse): QueryAttestationsByHashResponseAmino {
    const obj: any = {};

    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
    } else {
      obj.attestations = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryAttestationsByHashResponseAminoMsg): QueryAttestationsByHashResponse {
    return QueryAttestationsByHashResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryAttestationsByHashResponseProtoMsg): QueryAttestationsByHashResponse {
    return QueryAttestationsByHashResponse.decode(message.value);
  },

  toProto(message: QueryAttestationsByHashResponse): Uint8Array {
    return QueryAttestationsByHashResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryAttestationsByHashResponse): QueryAttestationsByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse",
      value: QueryAttestationsByHashResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolverRequestAmino): QueryResolverRequest {
    return {
      id: Long.fromString(object.id)
    };
  },

  toAmino(message: QueryResolverRequest): QueryResolverRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolverRequestAminoMsg): QueryResolverRequest {
    return QueryResolverRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolverRequestProtoMsg): QueryResolverRequest {
    return QueryResolverRequest.decode(message.value);
  },

  toProto(message: QueryResolverRequest): Uint8Array {
    return QueryResolverRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryResolverRequest): QueryResolverRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolverRequest",
      value: QueryResolverRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolverResponseAmino): QueryResolverResponse {
    return {
      resolver: object?.resolver ? ResolverInfo.fromAmino(object.resolver) : undefined
    };
  },

  toAmino(message: QueryResolverResponse): QueryResolverResponseAmino {
    const obj: any = {};
    obj.resolver = message.resolver ? ResolverInfo.toAmino(message.resolver) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolverResponseAminoMsg): QueryResolverResponse {
    return QueryResolverResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolverResponseProtoMsg): QueryResolverResponse {
    return QueryResolverResponse.decode(message.value);
  },

  toProto(message: QueryResolverResponse): Uint8Array {
    return QueryResolverResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryResolverResponse): QueryResolverResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolverResponse",
      value: QueryResolverResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolversByIRIRequestAmino): QueryResolversByIRIRequest {
    return {
      iri: object.iri,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolversByIRIRequestAminoMsg): QueryResolversByIRIRequest {
    return QueryResolversByIRIRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolversByIRIRequestProtoMsg): QueryResolversByIRIRequest {
    return QueryResolversByIRIRequest.decode(message.value);
  },

  toProto(message: QueryResolversByIRIRequest): Uint8Array {
    return QueryResolversByIRIRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
      value: QueryResolversByIRIRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolversByIRIResponseAmino): QueryResolversByIRIResponse {
    return {
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseAmino {
    const obj: any = {};

    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
    } else {
      obj.resolvers = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolversByIRIResponseAminoMsg): QueryResolversByIRIResponse {
    return QueryResolversByIRIResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolversByIRIResponseProtoMsg): QueryResolversByIRIResponse {
    return QueryResolversByIRIResponse.decode(message.value);
  },

  toProto(message: QueryResolversByIRIResponse): Uint8Array {
    return QueryResolversByIRIResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
      value: QueryResolversByIRIResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolversByHashRequestAmino): QueryResolversByHashRequest {
    return {
      contentHash: object?.content_hash ? ContentHash.fromAmino(object.content_hash) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryResolversByHashRequest): QueryResolversByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolversByHashRequestAminoMsg): QueryResolversByHashRequest {
    return QueryResolversByHashRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolversByHashRequestProtoMsg): QueryResolversByHashRequest {
    return QueryResolversByHashRequest.decode(message.value);
  },

  toProto(message: QueryResolversByHashRequest): Uint8Array {
    return QueryResolversByHashRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryResolversByHashRequest): QueryResolversByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
      value: QueryResolversByHashRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolversByHashResponseAmino): QueryResolversByHashResponse {
    return {
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryResolversByHashResponse): QueryResolversByHashResponseAmino {
    const obj: any = {};

    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
    } else {
      obj.resolvers = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolversByHashResponseAminoMsg): QueryResolversByHashResponse {
    return QueryResolversByHashResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolversByHashResponseProtoMsg): QueryResolversByHashResponse {
    return QueryResolversByHashResponse.decode(message.value);
  },

  toProto(message: QueryResolversByHashResponse): Uint8Array {
    return QueryResolversByHashResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryResolversByHashResponse): QueryResolversByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
      value: QueryResolversByHashResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolversByURLRequestAmino): QueryResolversByURLRequest {
    return {
      url: object.url,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryResolversByURLRequest): QueryResolversByURLRequestAmino {
    const obj: any = {};
    obj.url = message.url;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolversByURLRequestAminoMsg): QueryResolversByURLRequest {
    return QueryResolversByURLRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolversByURLRequestProtoMsg): QueryResolversByURLRequest {
    return QueryResolversByURLRequest.decode(message.value);
  },

  toProto(message: QueryResolversByURLRequest): Uint8Array {
    return QueryResolversByURLRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryResolversByURLRequest): QueryResolversByURLRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByURLRequest",
      value: QueryResolversByURLRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: QueryResolversByURLResponseAmino): QueryResolversByURLResponse {
    return {
      resolvers: Array.isArray(object?.resolvers) ? object.resolvers.map((e: any) => ResolverInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryResolversByURLResponse): QueryResolversByURLResponseAmino {
    const obj: any = {};

    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
    } else {
      obj.resolvers = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryResolversByURLResponseAminoMsg): QueryResolversByURLResponse {
    return QueryResolversByURLResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryResolversByURLResponseProtoMsg): QueryResolversByURLResponse {
    return QueryResolversByURLResponse.decode(message.value);
  },

  toProto(message: QueryResolversByURLResponse): Uint8Array {
    return QueryResolversByURLResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryResolversByURLResponse): QueryResolversByURLResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByURLResponse",
      value: QueryResolversByURLResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: ConvertIRIToHashRequestAmino): ConvertIRIToHashRequest {
    return {
      iri: object.iri
    };
  },

  toAmino(message: ConvertIRIToHashRequest): ConvertIRIToHashRequestAmino {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },

  fromAminoMsg(object: ConvertIRIToHashRequestAminoMsg): ConvertIRIToHashRequest {
    return ConvertIRIToHashRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: ConvertIRIToHashRequestProtoMsg): ConvertIRIToHashRequest {
    return ConvertIRIToHashRequest.decode(message.value);
  },

  toProto(message: ConvertIRIToHashRequest): Uint8Array {
    return ConvertIRIToHashRequest.encode(message).finish();
  },

  toProtoMsg(message: ConvertIRIToHashRequest): ConvertIRIToHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.ConvertIRIToHashRequest",
      value: ConvertIRIToHashRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: ConvertIRIToHashResponseAmino): ConvertIRIToHashResponse {
    return {
      contentHash: object?.content_hash ? ContentHash.fromAmino(object.content_hash) : undefined
    };
  },

  toAmino(message: ConvertIRIToHashResponse): ConvertIRIToHashResponseAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },

  fromAminoMsg(object: ConvertIRIToHashResponseAminoMsg): ConvertIRIToHashResponse {
    return ConvertIRIToHashResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: ConvertIRIToHashResponseProtoMsg): ConvertIRIToHashResponse {
    return ConvertIRIToHashResponse.decode(message.value);
  },

  toProto(message: ConvertIRIToHashResponse): Uint8Array {
    return ConvertIRIToHashResponse.encode(message).finish();
  },

  toProtoMsg(message: ConvertIRIToHashResponse): ConvertIRIToHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.ConvertIRIToHashResponse",
      value: ConvertIRIToHashResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: ConvertHashToIRIRequestAmino): ConvertHashToIRIRequest {
    return {
      contentHash: object?.content_hash ? ContentHash.fromAmino(object.content_hash) : undefined
    };
  },

  toAmino(message: ConvertHashToIRIRequest): ConvertHashToIRIRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },

  fromAminoMsg(object: ConvertHashToIRIRequestAminoMsg): ConvertHashToIRIRequest {
    return ConvertHashToIRIRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: ConvertHashToIRIRequestProtoMsg): ConvertHashToIRIRequest {
    return ConvertHashToIRIRequest.decode(message.value);
  },

  toProto(message: ConvertHashToIRIRequest): Uint8Array {
    return ConvertHashToIRIRequest.encode(message).finish();
  },

  toProtoMsg(message: ConvertHashToIRIRequest): ConvertHashToIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.ConvertHashToIRIRequest",
      value: ConvertHashToIRIRequest.encode(message).finish()
    };
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
  },

  fromAmino(object: ConvertHashToIRIResponseAmino): ConvertHashToIRIResponse {
    return {
      iri: object.iri
    };
  },

  toAmino(message: ConvertHashToIRIResponse): ConvertHashToIRIResponseAmino {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },

  fromAminoMsg(object: ConvertHashToIRIResponseAminoMsg): ConvertHashToIRIResponse {
    return ConvertHashToIRIResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: ConvertHashToIRIResponseProtoMsg): ConvertHashToIRIResponse {
    return ConvertHashToIRIResponse.decode(message.value);
  },

  toProto(message: ConvertHashToIRIResponse): Uint8Array {
    return ConvertHashToIRIResponse.encode(message).finish();
  },

  toProtoMsg(message: ConvertHashToIRIResponse): ConvertHashToIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.ConvertHashToIRIResponse",
      value: ConvertHashToIRIResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: AnchorInfoAmino): AnchorInfo {
    return {
      iri: object.iri,
      contentHash: object?.content_hash ? ContentHash.fromAmino(object.content_hash) : undefined,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AnchorInfo): AnchorInfoAmino {
    const obj: any = {};
    obj.iri = message.iri;
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },

  fromAminoMsg(object: AnchorInfoAminoMsg): AnchorInfo {
    return AnchorInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: AnchorInfoProtoMsg): AnchorInfo {
    return AnchorInfo.decode(message.value);
  },

  toProto(message: AnchorInfo): Uint8Array {
    return AnchorInfo.encode(message).finish();
  },

  toProtoMsg(message: AnchorInfo): AnchorInfoProtoMsg {
    return {
      typeUrl: "/regen.data.v1.AnchorInfo",
      value: AnchorInfo.encode(message).finish()
    };
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
  },

  fromAmino(object: AttestationInfoAmino): AttestationInfo {
    return {
      iri: object.iri,
      attestor: object.attestor,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AttestationInfo): AttestationInfoAmino {
    const obj: any = {};
    obj.iri = message.iri;
    obj.attestor = message.attestor;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },

  fromAminoMsg(object: AttestationInfoAminoMsg): AttestationInfo {
    return AttestationInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: AttestationInfoProtoMsg): AttestationInfo {
    return AttestationInfo.decode(message.value);
  },

  toProto(message: AttestationInfo): Uint8Array {
    return AttestationInfo.encode(message).finish();
  },

  toProtoMsg(message: AttestationInfo): AttestationInfoProtoMsg {
    return {
      typeUrl: "/regen.data.v1.AttestationInfo",
      value: AttestationInfo.encode(message).finish()
    };
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
  },

  fromAmino(object: ResolverInfoAmino): ResolverInfo {
    return {
      id: Long.fromString(object.id),
      url: object.url,
      manager: object.manager
    };
  },

  toAmino(message: ResolverInfo): ResolverInfoAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.url = message.url;
    obj.manager = message.manager;
    return obj;
  },

  fromAminoMsg(object: ResolverInfoAminoMsg): ResolverInfo {
    return ResolverInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: ResolverInfoProtoMsg): ResolverInfo {
    return ResolverInfo.decode(message.value);
  },

  toProto(message: ResolverInfo): Uint8Array {
    return ResolverInfo.encode(message).finish();
  },

  toProtoMsg(message: ResolverInfo): ResolverInfoProtoMsg {
    return {
      typeUrl: "/regen.data.v1.ResolverInfo",
      value: ResolverInfo.encode(message).finish()
    };
  }

};