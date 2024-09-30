"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryAnchorByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AnchorByIRI", data);
        return promise.then(data => query_1.QueryAnchorByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    anchorByHash(request) {
        const data = query_1.QueryAnchorByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AnchorByHash", data);
        return promise.then(data => query_1.QueryAnchorByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    attestationsByAttestor(request) {
        const data = query_1.QueryAttestationsByAttestorRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByAttestor", data);
        return promise.then(data => query_1.QueryAttestationsByAttestorResponse.decode(new binary_1.BinaryReader(data)));
    }
    attestationsByIRI(request) {
        const data = query_1.QueryAttestationsByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByIRI", data);
        return promise.then(data => query_1.QueryAttestationsByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    attestationsByHash(request) {
        const data = query_1.QueryAttestationsByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "AttestationsByHash", data);
        return promise.then(data => query_1.QueryAttestationsByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolver(request) {
        const data = query_1.QueryResolverRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "Resolver", data);
        return promise.then(data => query_1.QueryResolverResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolversByIRI(request) {
        const data = query_1.QueryResolversByIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByIRI", data);
        return promise.then(data => query_1.QueryResolversByIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolversByHash(request) {
        const data = query_1.QueryResolversByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByHash", data);
        return promise.then(data => query_1.QueryResolversByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    resolversByURL(request) {
        const data = query_1.QueryResolversByURLRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ResolversByURL", data);
        return promise.then(data => query_1.QueryResolversByURLResponse.decode(new binary_1.BinaryReader(data)));
    }
    convertIRIToHash(request) {
        const data = query_1.ConvertIRIToHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ConvertIRIToHash", data);
        return promise.then(data => query_1.ConvertIRIToHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    convertHashToIRI(request) {
        const data = query_1.ConvertHashToIRIRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Query", "ConvertHashToIRI", data);
        return promise.then(data => query_1.ConvertHashToIRIResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
