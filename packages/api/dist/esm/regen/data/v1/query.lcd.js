//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.anchorByIRI = this.anchorByIRI.bind(this);
        this.attestationsByAttestor = this.attestationsByAttestor.bind(this);
        this.attestationsByIRI = this.attestationsByIRI.bind(this);
        this.resolver = this.resolver.bind(this);
        this.resolversByIRI = this.resolversByIRI.bind(this);
        this.convertIRIToHash = this.convertIRIToHash.bind(this);
    }
    /* AnchorByIRI queries a data anchor by the IRI of the data. */
    async anchorByIRI(params) {
        const endpoint = `regen/data/v1/anchor-by-iri/${params.iri}`;
        return await this.req.get(endpoint);
    }
    /* AttestationsByAttestor queries data attestations by an attestor. */
    async attestationsByAttestor(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/data/v1/attestations-by-attestor/${params.attestor}`;
        return await this.req.get(endpoint, options);
    }
    /* AttestationsByIRI queries data attestations by the IRI of the data. */
    async attestationsByIRI(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/data/v1/attestations-by-iri/${params.iri}`;
        return await this.req.get(endpoint, options);
    }
    /* Resolver queries a resolver by its unique identifier. */
    async resolver(params) {
        const endpoint = `regen/data/v1/resolver/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* ResolversByIRI queries resolvers with registered data by the IRI of the
     data. */
    async resolversByIRI(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/data/v1/resolvers-by-iri/${params.iri}`;
        return await this.req.get(endpoint, options);
    }
    /* ConvertIRIToHash converts an IRI to a ContentHash. */
    async convertIRIToHash(params) {
        const endpoint = `regen/data/v1/convert-iri-to-hash/${params.iri}`;
        return await this.req.get(endpoint);
    }
}
