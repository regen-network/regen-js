//@ts-nocheck
import { ContentHash, ContentHashAmino, ContentHashSDKType } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
  iri?: string;
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
  attestor?: string;
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
  attestations?: AttestationInfoAmino[];
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
  iri?: string;
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
  attestations?: AttestationInfoAmino[];
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
  attestations?: AttestationInfoAmino[];
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
  id: bigint;
}
export interface QueryResolverRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolverRequest";
  value: Uint8Array;
}
/** QueryResolverRequest is the Query/Resolver request type. */
export interface QueryResolverRequestAmino {
  /** id is the ID of the resolver. */
  id?: string;
}
export interface QueryResolverRequestAminoMsg {
  type: "/regen.data.v1.QueryResolverRequest";
  value: QueryResolverRequestAmino;
}
/** QueryResolverRequest is the Query/Resolver request type. */
export interface QueryResolverRequestSDKType {
  id: bigint;
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
  iri?: string;
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
  resolvers?: ResolverInfoAmino[];
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
  resolvers?: ResolverInfoAmino[];
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
  url?: string;
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
  resolvers?: ResolverInfoAmino[];
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
  iri?: string;
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
  iri?: string;
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
  timestamp?: Date;
}
export interface AnchorInfoProtoMsg {
  typeUrl: "/regen.data.v1.AnchorInfo";
  value: Uint8Array;
}
/** AnchorInfo is the information for a data anchor. */
export interface AnchorInfoAmino {
  /** iri is the IRI of the anchored data. */
  iri?: string;
  /** content_hash is the ContentHash of the anchored data. */
  content_hash?: ContentHashAmino;
  /** timestamp is the time at which the data was anchored. */
  timestamp?: string;
}
export interface AnchorInfoAminoMsg {
  type: "/regen.data.v1.AnchorInfo";
  value: AnchorInfoAmino;
}
/** AnchorInfo is the information for a data anchor. */
export interface AnchorInfoSDKType {
  iri: string;
  content_hash?: ContentHashSDKType;
  timestamp?: Date;
}
/** AttestationInfo is the information for an attestation. */
export interface AttestationInfo {
  /** iri is the IRI of the anchored data. */
  iri: string;
  /** attestor is the address of the account that attested to the anchored data. */
  attestor: string;
  /** timestamp is the time at which the data was attested to. */
  timestamp?: Date;
}
export interface AttestationInfoProtoMsg {
  typeUrl: "/regen.data.v1.AttestationInfo";
  value: Uint8Array;
}
/** AttestationInfo is the information for an attestation. */
export interface AttestationInfoAmino {
  /** iri is the IRI of the anchored data. */
  iri?: string;
  /** attestor is the address of the account that attested to the anchored data. */
  attestor?: string;
  /** timestamp is the time at which the data was attested to. */
  timestamp?: string;
}
export interface AttestationInfoAminoMsg {
  type: "/regen.data.v1.AttestationInfo";
  value: AttestationInfoAmino;
}
/** AttestationInfo is the information for an attestation. */
export interface AttestationInfoSDKType {
  iri: string;
  attestor: string;
  timestamp?: Date;
}
/** ResolverInfo is the information for a resolver. */
export interface ResolverInfo {
  /** id is the ID of the resolver. */
  id: bigint;
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
  id?: string;
  /** url is the URL of the resolver. */
  url?: string;
  /** manager is the address of the account that manages the resolver. */
  manager?: string;
}
export interface ResolverInfoAminoMsg {
  type: "/regen.data.v1.ResolverInfo";
  value: ResolverInfoAmino;
}
/** ResolverInfo is the information for a resolver. */
export interface ResolverInfoSDKType {
  id: bigint;
  url: string;
  manager: string;
}
function createBaseQueryAnchorByIRIRequest(): QueryAnchorByIRIRequest {
  return {
    iri: ""
  };
}
export const QueryAnchorByIRIRequest = {
  typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest",
  encode(message: QueryAnchorByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnchorByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAnchorByIRIRequest>): QueryAnchorByIRIRequest {
    const message = createBaseQueryAnchorByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: QueryAnchorByIRIRequestAmino): QueryAnchorByIRIRequest {
    const message = createBaseQueryAnchorByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: QueryAnchorByIRIRequest): QueryAnchorByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
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
  typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse",
  encode(message: QueryAnchorByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.anchor !== undefined) {
      AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnchorByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAnchorByIRIResponse>): QueryAnchorByIRIResponse {
    const message = createBaseQueryAnchorByIRIResponse();
    message.anchor = object.anchor !== undefined && object.anchor !== null ? AnchorInfo.fromPartial(object.anchor) : undefined;
    return message;
  },
  fromAmino(object: QueryAnchorByIRIResponseAmino): QueryAnchorByIRIResponse {
    const message = createBaseQueryAnchorByIRIResponse();
    if (object.anchor !== undefined && object.anchor !== null) {
      message.anchor = AnchorInfo.fromAmino(object.anchor);
    }
    return message;
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
  typeUrl: "/regen.data.v1.QueryAnchorByHashRequest",
  encode(message: QueryAnchorByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnchorByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAnchorByHashRequest>): QueryAnchorByHashRequest {
    const message = createBaseQueryAnchorByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromAmino(object: QueryAnchorByHashRequestAmino): QueryAnchorByHashRequest {
    const message = createBaseQueryAnchorByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
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
  typeUrl: "/regen.data.v1.QueryAnchorByHashResponse",
  encode(message: QueryAnchorByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.anchor !== undefined) {
      AnchorInfo.encode(message.anchor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnchorByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAnchorByHashResponse>): QueryAnchorByHashResponse {
    const message = createBaseQueryAnchorByHashResponse();
    message.anchor = object.anchor !== undefined && object.anchor !== null ? AnchorInfo.fromPartial(object.anchor) : undefined;
    return message;
  },
  fromAmino(object: QueryAnchorByHashResponseAmino): QueryAnchorByHashResponse {
    const message = createBaseQueryAnchorByHashResponse();
    if (object.anchor !== undefined && object.anchor !== null) {
      message.anchor = AnchorInfo.fromAmino(object.anchor);
    }
    return message;
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
  typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest",
  encode(message: QueryAttestationsByAttestorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestor !== "") {
      writer.uint32(10).string(message.attestor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsByAttestorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAttestationsByAttestorRequest>): QueryAttestationsByAttestorRequest {
    const message = createBaseQueryAttestationsByAttestorRequest();
    message.attestor = object.attestor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationsByAttestorRequestAmino): QueryAttestationsByAttestorRequest {
    const message = createBaseQueryAttestationsByAttestorRequest();
    if (object.attestor !== undefined && object.attestor !== null) {
      message.attestor = object.attestor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestationsByAttestorRequest): QueryAttestationsByAttestorRequestAmino {
    const obj: any = {};
    obj.attestor = message.attestor === "" ? undefined : message.attestor;
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
  typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse",
  encode(message: QueryAttestationsByAttestorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestations) {
      AttestationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsByAttestorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAttestationsByAttestorResponse>): QueryAttestationsByAttestorResponse {
    const message = createBaseQueryAttestationsByAttestorResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationsByAttestorResponseAmino): QueryAttestationsByAttestorResponse {
    const message = createBaseQueryAttestationsByAttestorResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestationsByAttestorResponse): QueryAttestationsByAttestorResponseAmino {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
    } else {
      obj.attestations = message.attestations;
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
  typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest",
  encode(message: QueryAttestationsByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAttestationsByIRIRequest>): QueryAttestationsByIRIRequest {
    const message = createBaseQueryAttestationsByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationsByIRIRequestAmino): QueryAttestationsByIRIRequest {
    const message = createBaseQueryAttestationsByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestationsByIRIRequest): QueryAttestationsByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
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
  typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse",
  encode(message: QueryAttestationsByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestations) {
      AttestationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAttestationsByIRIResponse>): QueryAttestationsByIRIResponse {
    const message = createBaseQueryAttestationsByIRIResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationsByIRIResponseAmino): QueryAttestationsByIRIResponse {
    const message = createBaseQueryAttestationsByIRIResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestationsByIRIResponse): QueryAttestationsByIRIResponseAmino {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
    } else {
      obj.attestations = message.attestations;
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
  typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest",
  encode(message: QueryAttestationsByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAttestationsByHashRequest>): QueryAttestationsByHashRequest {
    const message = createBaseQueryAttestationsByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationsByHashRequestAmino): QueryAttestationsByHashRequest {
    const message = createBaseQueryAttestationsByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
  typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse",
  encode(message: QueryAttestationsByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestations) {
      AttestationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestationsByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAttestationsByHashResponse>): QueryAttestationsByHashResponse {
    const message = createBaseQueryAttestationsByHashResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationsByHashResponseAmino): QueryAttestationsByHashResponse {
    const message = createBaseQueryAttestationsByHashResponse();
    message.attestations = object.attestations?.map(e => AttestationInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestationsByHashResponse): QueryAttestationsByHashResponseAmino {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? AttestationInfo.toAmino(e) : undefined);
    } else {
      obj.attestations = message.attestations;
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
    id: BigInt(0)
  };
}
export const QueryResolverRequest = {
  typeUrl: "/regen.data.v1.QueryResolverRequest",
  encode(message: QueryResolverRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolverRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryResolverRequest>): QueryResolverRequest {
    const message = createBaseQueryResolverRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryResolverRequestAmino): QueryResolverRequest {
    const message = createBaseQueryResolverRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryResolverRequest): QueryResolverRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
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
  typeUrl: "/regen.data.v1.QueryResolverResponse",
  encode(message: QueryResolverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resolver !== undefined) {
      ResolverInfo.encode(message.resolver, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolverResponse>): QueryResolverResponse {
    const message = createBaseQueryResolverResponse();
    message.resolver = object.resolver !== undefined && object.resolver !== null ? ResolverInfo.fromPartial(object.resolver) : undefined;
    return message;
  },
  fromAmino(object: QueryResolverResponseAmino): QueryResolverResponse {
    const message = createBaseQueryResolverResponse();
    if (object.resolver !== undefined && object.resolver !== null) {
      message.resolver = ResolverInfo.fromAmino(object.resolver);
    }
    return message;
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
  typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
  encode(message: QueryResolversByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResolversByIRIRequestAmino): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
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
  typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
  encode(message: QueryResolversByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resolvers) {
      ResolverInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResolversByIRIResponseAmino): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseAmino {
    const obj: any = {};
    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
    } else {
      obj.resolvers = message.resolvers;
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
  typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
  encode(message: QueryResolversByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolversByHashRequest>): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResolversByHashRequestAmino): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
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
  typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
  encode(message: QueryResolversByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resolvers) {
      ResolverInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolversByHashResponse>): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResolversByHashResponseAmino): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByHashResponse): QueryResolversByHashResponseAmino {
    const obj: any = {};
    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
    } else {
      obj.resolvers = message.resolvers;
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
  typeUrl: "/regen.data.v1.QueryResolversByURLRequest",
  encode(message: QueryResolversByURLRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByURLRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolversByURLRequest>): QueryResolversByURLRequest {
    const message = createBaseQueryResolversByURLRequest();
    message.url = object.url ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResolversByURLRequestAmino): QueryResolversByURLRequest {
    const message = createBaseQueryResolversByURLRequest();
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByURLRequest): QueryResolversByURLRequestAmino {
    const obj: any = {};
    obj.url = message.url === "" ? undefined : message.url;
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
  typeUrl: "/regen.data.v1.QueryResolversByURLResponse",
  encode(message: QueryResolversByURLResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resolvers) {
      ResolverInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByURLResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResolversByURLResponse>): QueryResolversByURLResponse {
    const message = createBaseQueryResolversByURLResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryResolversByURLResponseAmino): QueryResolversByURLResponse {
    const message = createBaseQueryResolversByURLResponse();
    message.resolvers = object.resolvers?.map(e => ResolverInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByURLResponse): QueryResolversByURLResponseAmino {
    const obj: any = {};
    if (message.resolvers) {
      obj.resolvers = message.resolvers.map(e => e ? ResolverInfo.toAmino(e) : undefined);
    } else {
      obj.resolvers = message.resolvers;
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
  typeUrl: "/regen.data.v1.ConvertIRIToHashRequest",
  encode(message: ConvertIRIToHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConvertIRIToHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<ConvertIRIToHashRequest>): ConvertIRIToHashRequest {
    const message = createBaseConvertIRIToHashRequest();
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: ConvertIRIToHashRequestAmino): ConvertIRIToHashRequest {
    const message = createBaseConvertIRIToHashRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: ConvertIRIToHashRequest): ConvertIRIToHashRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
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
  typeUrl: "/regen.data.v1.ConvertIRIToHashResponse",
  encode(message: ConvertIRIToHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConvertIRIToHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<ConvertIRIToHashResponse>): ConvertIRIToHashResponse {
    const message = createBaseConvertIRIToHashResponse();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromAmino(object: ConvertIRIToHashResponseAmino): ConvertIRIToHashResponse {
    const message = createBaseConvertIRIToHashResponse();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
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
  typeUrl: "/regen.data.v1.ConvertHashToIRIRequest",
  encode(message: ConvertHashToIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConvertHashToIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<ConvertHashToIRIRequest>): ConvertHashToIRIRequest {
    const message = createBaseConvertHashToIRIRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromAmino(object: ConvertHashToIRIRequestAmino): ConvertHashToIRIRequest {
    const message = createBaseConvertHashToIRIRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
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
  typeUrl: "/regen.data.v1.ConvertHashToIRIResponse",
  encode(message: ConvertHashToIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConvertHashToIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<ConvertHashToIRIResponse>): ConvertHashToIRIResponse {
    const message = createBaseConvertHashToIRIResponse();
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: ConvertHashToIRIResponseAmino): ConvertHashToIRIResponse {
    const message = createBaseConvertHashToIRIResponse();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: ConvertHashToIRIResponse): ConvertHashToIRIResponseAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
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
  typeUrl: "/regen.data.v1.AnchorInfo",
  encode(message: AnchorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): AnchorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AnchorInfo>): AnchorInfo {
    const message = createBaseAnchorInfo();
    message.iri = object.iri ?? "";
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: AnchorInfoAmino): AnchorInfo {
    const message = createBaseAnchorInfo();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: AnchorInfo): AnchorInfoAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
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
  typeUrl: "/regen.data.v1.AttestationInfo",
  encode(message: AttestationInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): AttestationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<AttestationInfo>): AttestationInfo {
    const message = createBaseAttestationInfo();
    message.iri = object.iri ?? "";
    message.attestor = object.attestor ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: AttestationInfoAmino): AttestationInfo {
    const message = createBaseAttestationInfo();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.attestor !== undefined && object.attestor !== null) {
      message.attestor = object.attestor;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: AttestationInfo): AttestationInfoAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.attestor = message.attestor === "" ? undefined : message.attestor;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
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
    id: BigInt(0),
    url: "",
    manager: ""
  };
}
export const ResolverInfo = {
  typeUrl: "/regen.data.v1.ResolverInfo",
  encode(message: ResolverInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ResolverInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolverInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromPartial(object: Partial<ResolverInfo>): ResolverInfo {
    const message = createBaseResolverInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.url = object.url ?? "";
    message.manager = object.manager ?? "";
    return message;
  },
  fromAmino(object: ResolverInfoAmino): ResolverInfo {
    const message = createBaseResolverInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    return message;
  },
  toAmino(message: ResolverInfo): ResolverInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.url = message.url === "" ? undefined : message.url;
    obj.manager = message.manager === "" ? undefined : message.manager;
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