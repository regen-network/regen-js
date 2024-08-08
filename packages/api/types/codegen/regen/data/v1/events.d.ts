import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchor {
    /** iri is the IRI of the data anchored on chain. */
    iri: string;
}
export interface EventAnchorProtoMsg {
    typeUrl: "/regen.data.v1.EventAnchor";
    value: Uint8Array;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorAmino {
    /** iri is the IRI of the data anchored on chain. */
    iri?: string;
}
export interface EventAnchorAminoMsg {
    type: "/regen.data.v1.EventAnchor";
    value: EventAnchorAmino;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorSDKType {
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
export interface EventAttestProtoMsg {
    typeUrl: "/regen.data.v1.EventAttest";
    value: Uint8Array;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestAmino {
    /** iri is the IRI of the data attested to. */
    iri?: string;
    /**
     * attestor is the address of the account that has attested to the veracity of
     * the data.
     */
    attestor?: string;
}
export interface EventAttestAminoMsg {
    type: "/regen.data.v1.EventAttest";
    value: EventAttestAmino;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestSDKType {
    iri: string;
    attestor: string;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolver {
    /** id is the ID of the defined resolver. */
    id: bigint;
}
export interface EventDefineResolverProtoMsg {
    typeUrl: "/regen.data.v1.EventDefineResolver";
    value: Uint8Array;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverAmino {
    /** id is the ID of the defined resolver. */
    id?: string;
}
export interface EventDefineResolverAminoMsg {
    type: "/regen.data.v1.EventDefineResolver";
    value: EventDefineResolverAmino;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverSDKType {
    id: bigint;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolver {
    /** id is the ID of the resolver that the data was registered to. */
    id: bigint;
    /** iri is the IRI of the data that was registered. */
    iri: string;
}
export interface EventRegisterResolverProtoMsg {
    typeUrl: "/regen.data.v1.EventRegisterResolver";
    value: Uint8Array;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverAmino {
    /** id is the ID of the resolver that the data was registered to. */
    id?: string;
    /** iri is the IRI of the data that was registered. */
    iri?: string;
}
export interface EventRegisterResolverAminoMsg {
    type: "/regen.data.v1.EventRegisterResolver";
    value: EventRegisterResolverAmino;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverSDKType {
    id: bigint;
    iri: string;
}
export declare const EventAnchor: {
    typeUrl: string;
    encode(message: EventAnchor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAnchor;
    fromJSON(object: any): EventAnchor;
    toJSON(message: EventAnchor): unknown;
    fromPartial(object: Partial<EventAnchor>): EventAnchor;
    fromAmino(object: EventAnchorAmino): EventAnchor;
    toAmino(message: EventAnchor): EventAnchorAmino;
    fromAminoMsg(object: EventAnchorAminoMsg): EventAnchor;
    fromProtoMsg(message: EventAnchorProtoMsg): EventAnchor;
    toProto(message: EventAnchor): Uint8Array;
    toProtoMsg(message: EventAnchor): EventAnchorProtoMsg;
};
export declare const EventAttest: {
    typeUrl: string;
    encode(message: EventAttest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAttest;
    fromJSON(object: any): EventAttest;
    toJSON(message: EventAttest): unknown;
    fromPartial(object: Partial<EventAttest>): EventAttest;
    fromAmino(object: EventAttestAmino): EventAttest;
    toAmino(message: EventAttest): EventAttestAmino;
    fromAminoMsg(object: EventAttestAminoMsg): EventAttest;
    fromProtoMsg(message: EventAttestProtoMsg): EventAttest;
    toProto(message: EventAttest): Uint8Array;
    toProtoMsg(message: EventAttest): EventAttestProtoMsg;
};
export declare const EventDefineResolver: {
    typeUrl: string;
    encode(message: EventDefineResolver, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventDefineResolver;
    fromJSON(object: any): EventDefineResolver;
    toJSON(message: EventDefineResolver): unknown;
    fromPartial(object: Partial<EventDefineResolver>): EventDefineResolver;
    fromAmino(object: EventDefineResolverAmino): EventDefineResolver;
    toAmino(message: EventDefineResolver): EventDefineResolverAmino;
    fromAminoMsg(object: EventDefineResolverAminoMsg): EventDefineResolver;
    fromProtoMsg(message: EventDefineResolverProtoMsg): EventDefineResolver;
    toProto(message: EventDefineResolver): Uint8Array;
    toProtoMsg(message: EventDefineResolver): EventDefineResolverProtoMsg;
};
export declare const EventRegisterResolver: {
    typeUrl: string;
    encode(message: EventRegisterResolver, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRegisterResolver;
    fromJSON(object: any): EventRegisterResolver;
    toJSON(message: EventRegisterResolver): unknown;
    fromPartial(object: Partial<EventRegisterResolver>): EventRegisterResolver;
    fromAmino(object: EventRegisterResolverAmino): EventRegisterResolver;
    toAmino(message: EventRegisterResolver): EventRegisterResolverAmino;
    fromAminoMsg(object: EventRegisterResolverAminoMsg): EventRegisterResolver;
    fromProtoMsg(message: EventRegisterResolverProtoMsg): EventRegisterResolver;
    toProto(message: EventRegisterResolver): Uint8Array;
    toProtoMsg(message: EventRegisterResolver): EventRegisterResolverProtoMsg;
};
