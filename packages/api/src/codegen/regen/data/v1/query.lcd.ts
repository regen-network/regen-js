import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAnchorByIRIRequest, QueryAnchorByIRIResponseSDKType, QueryAttestationsByAttestorRequest, QueryAttestationsByAttestorResponseSDKType, QueryAttestationsByIRIRequest, QueryAttestationsByIRIResponseSDKType, QueryResolverRequest, QueryResolverResponseSDKType, QueryResolversByIRIRequest, QueryResolversByIRIResponseSDKType, ConvertIRIToHashRequest, ConvertIRIToHashResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.anchorByIRI = this.anchorByIRI.bind(this);
    this.attestationsByAttestor = this.attestationsByAttestor.bind(this);
    this.attestationsByIRI = this.attestationsByIRI.bind(this);
    this.resolver = this.resolver.bind(this);
    this.resolversByIRI = this.resolversByIRI.bind(this);
    this.convertIRIToHash = this.convertIRIToHash.bind(this);
  }
  /* AnchorByIRI queries a data anchor by the IRI of the data. */
  async anchorByIRI(params: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponseSDKType> {
    const endpoint = `regen/data/v1/anchor-by-iri/${params.iri}`;
    return await this.req.get<QueryAnchorByIRIResponseSDKType>(endpoint);
  }
  /* AttestationsByAttestor queries data attestations by an attestor. */
  async attestationsByAttestor(params: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/data/v1/attestations-by-attestor/${params.attestor}`;
    return await this.req.get<QueryAttestationsByAttestorResponseSDKType>(endpoint, options);
  }
  /* AttestationsByIRI queries data attestations by the IRI of the data. */
  async attestationsByIRI(params: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/data/v1/attestations-by-iri/${params.iri}`;
    return await this.req.get<QueryAttestationsByIRIResponseSDKType>(endpoint, options);
  }
  /* Resolver queries a resolver by its unique identifier. */
  async resolver(params: QueryResolverRequest): Promise<QueryResolverResponseSDKType> {
    const endpoint = `regen/data/v1/resolver/${params.id}`;
    return await this.req.get<QueryResolverResponseSDKType>(endpoint);
  }
  /* ResolversByIRI queries resolvers with registered data by the IRI of the
   data. */
  async resolversByIRI(params: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/data/v1/resolvers-by-iri/${params.iri}`;
    return await this.req.get<QueryResolversByIRIResponseSDKType>(endpoint, options);
  }
  /* ConvertIRIToHash converts an IRI to a ContentHash. */
  async convertIRIToHash(params: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponseSDKType> {
    const endpoint = `regen/data/v1/convert-iri-to-hash/${params.iri}`;
    return await this.req.get<ConvertIRIToHashResponseSDKType>(endpoint);
  }
}