import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchor {
    /** iri is the IRI of the data anchored on chain. */
    iri: string;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorSDKType {
    /** iri is the IRI of the data anchored on chain. */
    iri: string;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttest {
    /** iri is the IRI of the data attested to. */
    iri: string;
    /**
     * attestor is the address of the account that has attested to the veracity of
     * the data.
     */
    attestor: string;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestSDKType {
    /** iri is the IRI of the data attested to. */
    iri: string;
    /**
     * attestor is the address of the account that has attested to the veracity of
     * the data.
     */
    attestor: string;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolver {
    /** id is the ID of the defined resolver. */
    id: Long;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverSDKType {
    /** id is the ID of the defined resolver. */
    id: Long;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolver {
    /** id is the ID of the resolver that the data was registered to. */
    id: Long;
    /** iri is the IRI of the data that was registered. */
    iri: string;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverSDKType {
    /** id is the ID of the resolver that the data was registered to. */
    id: Long;
    /** iri is the IRI of the data that was registered. */
    iri: string;
}
export declare const EventAnchor: {
    encode(message: EventAnchor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAnchor;
    fromJSON(object: any): EventAnchor;
    toJSON(message: EventAnchor): unknown;
    fromPartial(object: Partial<EventAnchor>): EventAnchor;
};
export declare const EventAttest: {
    encode(message: EventAttest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttest;
    fromJSON(object: any): EventAttest;
    toJSON(message: EventAttest): unknown;
    fromPartial(object: Partial<EventAttest>): EventAttest;
};
export declare const EventDefineResolver: {
    encode(message: EventDefineResolver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDefineResolver;
    fromJSON(object: any): EventDefineResolver;
    toJSON(message: EventDefineResolver): unknown;
    fromPartial(object: Partial<EventDefineResolver>): EventDefineResolver;
};
export declare const EventRegisterResolver: {
    encode(message: EventRegisterResolver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterResolver;
    fromJSON(object: any): EventRegisterResolver;
    toJSON(message: EventRegisterResolver): unknown;
    fromPartial(object: Partial<EventRegisterResolver>): EventRegisterResolver;
};
