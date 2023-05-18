import { ContentHash, ContentHashSDKType } from "./types";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
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
export declare const QueryAnchorByIRIRequest: {
    encode(message: QueryAnchorByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByIRIRequest;
    fromJSON(object: any): QueryAnchorByIRIRequest;
    toJSON(message: QueryAnchorByIRIRequest): unknown;
    fromPartial(object: Partial<QueryAnchorByIRIRequest>): QueryAnchorByIRIRequest;
};
export declare const QueryAnchorByIRIResponse: {
    encode(message: QueryAnchorByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByIRIResponse;
    fromJSON(object: any): QueryAnchorByIRIResponse;
    toJSON(message: QueryAnchorByIRIResponse): unknown;
    fromPartial(object: Partial<QueryAnchorByIRIResponse>): QueryAnchorByIRIResponse;
};
export declare const QueryAnchorByHashRequest: {
    encode(message: QueryAnchorByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByHashRequest;
    fromJSON(object: any): QueryAnchorByHashRequest;
    toJSON(message: QueryAnchorByHashRequest): unknown;
    fromPartial(object: Partial<QueryAnchorByHashRequest>): QueryAnchorByHashRequest;
};
export declare const QueryAnchorByHashResponse: {
    encode(message: QueryAnchorByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnchorByHashResponse;
    fromJSON(object: any): QueryAnchorByHashResponse;
    toJSON(message: QueryAnchorByHashResponse): unknown;
    fromPartial(object: Partial<QueryAnchorByHashResponse>): QueryAnchorByHashResponse;
};
export declare const QueryAttestationsByAttestorRequest: {
    encode(message: QueryAttestationsByAttestorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByAttestorRequest;
    fromJSON(object: any): QueryAttestationsByAttestorRequest;
    toJSON(message: QueryAttestationsByAttestorRequest): unknown;
    fromPartial(object: Partial<QueryAttestationsByAttestorRequest>): QueryAttestationsByAttestorRequest;
};
export declare const QueryAttestationsByAttestorResponse: {
    encode(message: QueryAttestationsByAttestorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByAttestorResponse;
    fromJSON(object: any): QueryAttestationsByAttestorResponse;
    toJSON(message: QueryAttestationsByAttestorResponse): unknown;
    fromPartial(object: Partial<QueryAttestationsByAttestorResponse>): QueryAttestationsByAttestorResponse;
};
export declare const QueryAttestationsByIRIRequest: {
    encode(message: QueryAttestationsByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByIRIRequest;
    fromJSON(object: any): QueryAttestationsByIRIRequest;
    toJSON(message: QueryAttestationsByIRIRequest): unknown;
    fromPartial(object: Partial<QueryAttestationsByIRIRequest>): QueryAttestationsByIRIRequest;
};
export declare const QueryAttestationsByIRIResponse: {
    encode(message: QueryAttestationsByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByIRIResponse;
    fromJSON(object: any): QueryAttestationsByIRIResponse;
    toJSON(message: QueryAttestationsByIRIResponse): unknown;
    fromPartial(object: Partial<QueryAttestationsByIRIResponse>): QueryAttestationsByIRIResponse;
};
export declare const QueryAttestationsByHashRequest: {
    encode(message: QueryAttestationsByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByHashRequest;
    fromJSON(object: any): QueryAttestationsByHashRequest;
    toJSON(message: QueryAttestationsByHashRequest): unknown;
    fromPartial(object: Partial<QueryAttestationsByHashRequest>): QueryAttestationsByHashRequest;
};
export declare const QueryAttestationsByHashResponse: {
    encode(message: QueryAttestationsByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsByHashResponse;
    fromJSON(object: any): QueryAttestationsByHashResponse;
    toJSON(message: QueryAttestationsByHashResponse): unknown;
    fromPartial(object: Partial<QueryAttestationsByHashResponse>): QueryAttestationsByHashResponse;
};
export declare const QueryResolverRequest: {
    encode(message: QueryResolverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverRequest;
    fromJSON(object: any): QueryResolverRequest;
    toJSON(message: QueryResolverRequest): unknown;
    fromPartial(object: Partial<QueryResolverRequest>): QueryResolverRequest;
};
export declare const QueryResolverResponse: {
    encode(message: QueryResolverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverResponse;
    fromJSON(object: any): QueryResolverResponse;
    toJSON(message: QueryResolverResponse): unknown;
    fromPartial(object: Partial<QueryResolverResponse>): QueryResolverResponse;
};
export declare const QueryResolversByIRIRequest: {
    encode(message: QueryResolversByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIRequest;
    fromJSON(object: any): QueryResolversByIRIRequest;
    toJSON(message: QueryResolversByIRIRequest): unknown;
    fromPartial(object: Partial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest;
};
export declare const QueryResolversByIRIResponse: {
    encode(message: QueryResolversByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIResponse;
    fromJSON(object: any): QueryResolversByIRIResponse;
    toJSON(message: QueryResolversByIRIResponse): unknown;
    fromPartial(object: Partial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse;
};
export declare const QueryResolversByHashRequest: {
    encode(message: QueryResolversByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashRequest;
    fromJSON(object: any): QueryResolversByHashRequest;
    toJSON(message: QueryResolversByHashRequest): unknown;
    fromPartial(object: Partial<QueryResolversByHashRequest>): QueryResolversByHashRequest;
};
export declare const QueryResolversByHashResponse: {
    encode(message: QueryResolversByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashResponse;
    fromJSON(object: any): QueryResolversByHashResponse;
    toJSON(message: QueryResolversByHashResponse): unknown;
    fromPartial(object: Partial<QueryResolversByHashResponse>): QueryResolversByHashResponse;
};
export declare const QueryResolversByURLRequest: {
    encode(message: QueryResolversByURLRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByURLRequest;
    fromJSON(object: any): QueryResolversByURLRequest;
    toJSON(message: QueryResolversByURLRequest): unknown;
    fromPartial(object: Partial<QueryResolversByURLRequest>): QueryResolversByURLRequest;
};
export declare const QueryResolversByURLResponse: {
    encode(message: QueryResolversByURLResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByURLResponse;
    fromJSON(object: any): QueryResolversByURLResponse;
    toJSON(message: QueryResolversByURLResponse): unknown;
    fromPartial(object: Partial<QueryResolversByURLResponse>): QueryResolversByURLResponse;
};
export declare const ConvertIRIToHashRequest: {
    encode(message: ConvertIRIToHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertIRIToHashRequest;
    fromJSON(object: any): ConvertIRIToHashRequest;
    toJSON(message: ConvertIRIToHashRequest): unknown;
    fromPartial(object: Partial<ConvertIRIToHashRequest>): ConvertIRIToHashRequest;
};
export declare const ConvertIRIToHashResponse: {
    encode(message: ConvertIRIToHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertIRIToHashResponse;
    fromJSON(object: any): ConvertIRIToHashResponse;
    toJSON(message: ConvertIRIToHashResponse): unknown;
    fromPartial(object: Partial<ConvertIRIToHashResponse>): ConvertIRIToHashResponse;
};
export declare const ConvertHashToIRIRequest: {
    encode(message: ConvertHashToIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertHashToIRIRequest;
    fromJSON(object: any): ConvertHashToIRIRequest;
    toJSON(message: ConvertHashToIRIRequest): unknown;
    fromPartial(object: Partial<ConvertHashToIRIRequest>): ConvertHashToIRIRequest;
};
export declare const ConvertHashToIRIResponse: {
    encode(message: ConvertHashToIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConvertHashToIRIResponse;
    fromJSON(object: any): ConvertHashToIRIResponse;
    toJSON(message: ConvertHashToIRIResponse): unknown;
    fromPartial(object: Partial<ConvertHashToIRIResponse>): ConvertHashToIRIResponse;
};
export declare const AnchorInfo: {
    encode(message: AnchorInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnchorInfo;
    fromJSON(object: any): AnchorInfo;
    toJSON(message: AnchorInfo): unknown;
    fromPartial(object: Partial<AnchorInfo>): AnchorInfo;
};
export declare const AttestationInfo: {
    encode(message: AttestationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttestationInfo;
    fromJSON(object: any): AttestationInfo;
    toJSON(message: AttestationInfo): unknown;
    fromPartial(object: Partial<AttestationInfo>): AttestationInfo;
};
export declare const ResolverInfo: {
    encode(message: ResolverInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResolverInfo;
    fromJSON(object: any): ResolverInfo;
    toJSON(message: ResolverInfo): unknown;
    fromPartial(object: Partial<ResolverInfo>): ResolverInfo;
};
