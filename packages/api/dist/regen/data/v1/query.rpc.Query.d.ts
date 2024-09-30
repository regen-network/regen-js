import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAnchorByIRIRequest, QueryAnchorByIRIResponse, QueryAnchorByHashRequest, QueryAnchorByHashResponse, QueryAttestationsByAttestorRequest, QueryAttestationsByAttestorResponse, QueryAttestationsByIRIRequest, QueryAttestationsByIRIResponse, QueryAttestationsByHashRequest, QueryAttestationsByHashResponse, QueryResolverRequest, QueryResolverResponse, QueryResolversByIRIRequest, QueryResolversByIRIResponse, QueryResolversByHashRequest, QueryResolversByHashResponse, QueryResolversByURLRequest, QueryResolversByURLResponse, ConvertIRIToHashRequest, ConvertIRIToHashResponse, ConvertHashToIRIRequest, ConvertHashToIRIResponse } from "./query";
/** Query is the regen.data.v1 Query service */
export interface Query {
    /** AnchorByIRI queries a data anchor by the IRI of the data. */
    anchorByIRI(request: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponse>;
    /** AnchorByHash queries a data anchor by the ContentHash of the data. */
    anchorByHash(request: QueryAnchorByHashRequest): Promise<QueryAnchorByHashResponse>;
    /** AttestationsByAttestor queries data attestations by an attestor. */
    attestationsByAttestor(request: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponse>;
    /** AttestationsByIRI queries data attestations by the IRI of the data. */
    attestationsByIRI(request: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponse>;
    /**
     * AttestationsByHash queries data attestations by the ContentHash of the
     * data.
     */
    attestationsByHash(request: QueryAttestationsByHashRequest): Promise<QueryAttestationsByHashResponse>;
    /** Resolver queries a resolver by its unique identifier. */
    resolver(request: QueryResolverRequest): Promise<QueryResolverResponse>;
    /**
     * ResolversByIRI queries resolvers with registered data by the IRI of the
     * data.
     */
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
    /**
     * ResolversByHash queries resolvers with registered data by the ContentHash
     * of the data.
     */
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
    /** ResolversByURL queries resolvers by URL. */
    resolversByURL(request: QueryResolversByURLRequest): Promise<QueryResolversByURLResponse>;
    /** ConvertIRIToHash converts an IRI to a ContentHash. */
    convertIRIToHash(request: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponse>;
    /** ConvertHashToIRI converts a ContentHash to an IRI. */
    convertHashToIRI(request: ConvertHashToIRIRequest): Promise<ConvertHashToIRIResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    anchorByIRI(request: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponse>;
    anchorByHash(request: QueryAnchorByHashRequest): Promise<QueryAnchorByHashResponse>;
    attestationsByAttestor(request: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponse>;
    attestationsByIRI(request: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponse>;
    attestationsByHash(request: QueryAttestationsByHashRequest): Promise<QueryAttestationsByHashResponse>;
    resolver(request: QueryResolverRequest): Promise<QueryResolverResponse>;
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
    resolversByURL(request: QueryResolversByURLRequest): Promise<QueryResolversByURLResponse>;
    convertIRIToHash(request: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponse>;
    convertHashToIRI(request: ConvertHashToIRIRequest): Promise<ConvertHashToIRIResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    anchorByIRI(request: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponse>;
    anchorByHash(request: QueryAnchorByHashRequest): Promise<QueryAnchorByHashResponse>;
    attestationsByAttestor(request: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponse>;
    attestationsByIRI(request: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponse>;
    attestationsByHash(request: QueryAttestationsByHashRequest): Promise<QueryAttestationsByHashResponse>;
    resolver(request: QueryResolverRequest): Promise<QueryResolverResponse>;
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
    resolversByURL(request: QueryResolversByURLRequest): Promise<QueryResolversByURLResponse>;
    convertIRIToHash(request: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponse>;
    convertHashToIRI(request: ConvertHashToIRIRequest): Promise<ConvertHashToIRIResponse>;
};
