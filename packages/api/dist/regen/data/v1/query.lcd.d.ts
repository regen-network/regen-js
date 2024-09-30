import { LCDClient } from "@cosmology/lcd";
import { QueryAnchorByIRIRequest, QueryAnchorByIRIResponseSDKType, QueryAttestationsByAttestorRequest, QueryAttestationsByAttestorResponseSDKType, QueryAttestationsByIRIRequest, QueryAttestationsByIRIResponseSDKType, QueryResolverRequest, QueryResolverResponseSDKType, QueryResolversByIRIRequest, QueryResolversByIRIResponseSDKType, ConvertIRIToHashRequest, ConvertIRIToHashResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    anchorByIRI(params: QueryAnchorByIRIRequest): Promise<QueryAnchorByIRIResponseSDKType>;
    attestationsByAttestor(params: QueryAttestationsByAttestorRequest): Promise<QueryAttestationsByAttestorResponseSDKType>;
    attestationsByIRI(params: QueryAttestationsByIRIRequest): Promise<QueryAttestationsByIRIResponseSDKType>;
    resolver(params: QueryResolverRequest): Promise<QueryResolverResponseSDKType>;
    resolversByIRI(params: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponseSDKType>;
    convertIRIToHash(params: ConvertIRIToHashRequest): Promise<ConvertIRIToHashResponseSDKType>;
}
