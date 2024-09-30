import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAnchorByIRIRequest, QueryAnchorByIRIResponse, QueryAnchorByHashRequest, QueryAnchorByHashResponse, QueryAttestationsByAttestorRequest, QueryAttestationsByAttestorResponse, QueryAttestationsByIRIRequest, QueryAttestationsByIRIResponse, QueryAttestationsByHashRequest, QueryAttestationsByHashResponse, QueryResolverRequest, QueryResolverResponse, QueryResolversByIRIRequest, QueryResolversByIRIResponse, QueryResolversByHashRequest, QueryResolversByHashResponse, QueryResolversByURLRequest, QueryResolversByURLResponse, ConvertIRIToHashRequest, ConvertIRIToHashResponse, ConvertHashToIRIRequest, ConvertHashToIRIResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
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
    anchorByIRI(request) {
        const data = QueryAnchorByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AnchorByIRI", data);
        return promise.then(data => QueryAnchorByIRIResponse.decode(new BinaryReader(data)));
    }
    anchorByHash(request) {
        const data = QueryAnchorByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AnchorByHash", data);
        return promise.then(data => QueryAnchorByHashResponse.decode(new BinaryReader(data)));
    }
    attestationsByAttestor(request) {
        const data = QueryAttestationsByAttestorRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByAttestor", data);
        return promise.then(data => QueryAttestationsByAttestorResponse.decode(new BinaryReader(data)));
    }
    attestationsByIRI(request) {
        const data = QueryAttestationsByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByIRI", data);
        return promise.then(data => QueryAttestationsByIRIResponse.decode(new BinaryReader(data)));
    }
    attestationsByHash(request) {
        const data = QueryAttestationsByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByHash", data);
        return promise.then(data => QueryAttestationsByHashResponse.decode(new BinaryReader(data)));
    }
    resolver(request) {
        const data = QueryResolverRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "Resolver", data);
        return promise.then(data => QueryResolverResponse.decode(new BinaryReader(data)));
    }
    resolversByIRI(request) {
        const data = QueryResolversByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByIRI", data);
        return promise.then(data => QueryResolversByIRIResponse.decode(new BinaryReader(data)));
    }
    resolversByHash(request) {
        const data = QueryResolversByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByHash", data);
        return promise.then(data => QueryResolversByHashResponse.decode(new BinaryReader(data)));
    }
    resolversByURL(request) {
        const data = QueryResolversByURLRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByURL", data);
        return promise.then(data => QueryResolversByURLResponse.decode(new BinaryReader(data)));
    }
    convertIRIToHash(request) {
        const data = ConvertIRIToHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ConvertIRIToHash", data);
        return promise.then(data => ConvertIRIToHashResponse.decode(new BinaryReader(data)));
    }
    convertHashToIRI(request) {
        const data = ConvertHashToIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ConvertHashToIRI", data);
        return promise.then(data => ConvertHashToIRIResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        anchorByIRI(request) {
            return queryService.anchorByIRI(request);
        },
        anchorByHash(request) {
            return queryService.anchorByHash(request);
        },
        attestationsByAttestor(request) {
            return queryService.attestationsByAttestor(request);
        },
        attestationsByIRI(request) {
            return queryService.attestationsByIRI(request);
        },
        attestationsByHash(request) {
            return queryService.attestationsByHash(request);
        },
        resolver(request) {
            return queryService.resolver(request);
        },
        resolversByIRI(request) {
            return queryService.resolversByIRI(request);
        },
        resolversByHash(request) {
            return queryService.resolversByHash(request);
        },
        resolversByURL(request) {
            return queryService.resolversByURL(request);
        },
        convertIRIToHash(request) {
            return queryService.convertIRIToHash(request);
        },
        convertHashToIRI(request) {
            return queryService.convertHashToIRI(request);
        }
    };
};
