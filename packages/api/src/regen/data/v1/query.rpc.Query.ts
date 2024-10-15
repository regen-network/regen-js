//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.anchorByIRI = this.anchorByIRI.bind(this);
    this.anchorByHash = this.anchorByHash.bind(this);
    this.attestationsByAttestor = this.attestationsByAttestor.bind(this);
    this.attestationsByIRI = this.attestationsByIRI.bind(this);
    this.attestationsByHash = this.attestationsByHash.bind(this);
    this.resolver = this.resolver.bind(this);
    this.resolversByIRI = this.resolversByIRI.bind(this);
    this.resolversByHash = this.resolversByHash.bind(this);
    this.resolversByURL = this.resolversByURL.bind(this);
    this.convertIRIToHash = this.convertIRIToHash.bind(this);
    this.convertHashToIRI = this.convertHashToIRI.bind(this);
  }
  anchorByIRI(request: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponse> {
    const data = QueryAnchorByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AnchorByIRI", data);
    return promise.then(data => QueryAnchorByIRIResponse.decode(new BinaryReader(data)));
  }
  anchorByHash(request: QueryAnchorByHashRequest): Promise<QueryAnchorByHashResponse> {
    const data = QueryAnchorByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AnchorByHash", data);
    return promise.then(data => QueryAnchorByHashResponse.decode(new BinaryReader(data)));
  }
  attestationsByAttestor(request: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponse> {
    const data = QueryAttestationsByAttestorRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByAttestor", data);
    return promise.then(data => QueryAttestationsByAttestorResponse.decode(new BinaryReader(data)));
  }
  attestationsByIRI(request: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponse> {
    const data = QueryAttestationsByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByIRI", data);
    return promise.then(data => QueryAttestationsByIRIResponse.decode(new BinaryReader(data)));
  }
  attestationsByHash(request: QueryAttestationsByHashRequest): Promise<QueryAttestationsByHashResponse> {
    const data = QueryAttestationsByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByHash", data);
    return promise.then(data => QueryAttestationsByHashResponse.decode(new BinaryReader(data)));
  }
  resolver(request: QueryResolverRequest): Promise<QueryResolverResponse> {
    const data = QueryResolverRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "Resolver", data);
    return promise.then(data => QueryResolverResponse.decode(new BinaryReader(data)));
  }
  resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse> {
    const data = QueryResolversByIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ResolversByIRI", data);
    return promise.then(data => QueryResolversByIRIResponse.decode(new BinaryReader(data)));
  }
  resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse> {
    const data = QueryResolversByHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ResolversByHash", data);
    return promise.then(data => QueryResolversByHashResponse.decode(new BinaryReader(data)));
  }
  resolversByURL(request: QueryResolversByURLRequest): Promise<QueryResolversByURLResponse> {
    const data = QueryResolversByURLRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ResolversByURL", data);
    return promise.then(data => QueryResolversByURLResponse.decode(new BinaryReader(data)));
  }
  convertIRIToHash(request: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponse> {
    const data = ConvertIRIToHashRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ConvertIRIToHash", data);
    return promise.then(data => ConvertIRIToHashResponse.decode(new BinaryReader(data)));
  }
  convertHashToIRI(request: ConvertHashToIRIRequest): Promise<ConvertHashToIRIResponse> {
    const data = ConvertHashToIRIRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1.Query", "ConvertHashToIRI", data);
    return promise.then(data => ConvertHashToIRIResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    anchorByIRI(request: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponse> {
      return queryService.anchorByIRI(request);
    },
    anchorByHash(request: QueryAnchorByHashRequest): Promise<QueryAnchorByHashResponse> {
      return queryService.anchorByHash(request);
    },
    attestationsByAttestor(request: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponse> {
      return queryService.attestationsByAttestor(request);
    },
    attestationsByIRI(request: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponse> {
      return queryService.attestationsByIRI(request);
    },
    attestationsByHash(request: QueryAttestationsByHashRequest): Promise<QueryAttestationsByHashResponse> {
      return queryService.attestationsByHash(request);
    },
    resolver(request: QueryResolverRequest): Promise<QueryResolverResponse> {
      return queryService.resolver(request);
    },
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse> {
      return queryService.resolversByIRI(request);
    },
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse> {
      return queryService.resolversByHash(request);
    },
    resolversByURL(request: QueryResolversByURLRequest): Promise<QueryResolversByURLResponse> {
      return queryService.resolversByURL(request);
    },
    convertIRIToHash(request: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponse> {
      return queryService.convertIRIToHash(request);
    },
    convertHashToIRI(request: ConvertHashToIRIRequest): Promise<ConvertHashToIRIResponse> {
      return queryService.convertHashToIRI(request);
    }
  };
};