import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** DataID stores a compact data ID and its full IRI. */
export interface DataID {
    /** id is the compact automatically-generated data ID. */
    id: Uint8Array;
    /** iri is the IRI of the data which contains its full ContentHash. */
    iri: string;
}
/** DataID stores a compact data ID and its full IRI. */
export interface DataIDSDKType {
    /** id is the compact automatically-generated data ID. */
    id: Uint8Array;
    /** iri is the IRI of the data which contains its full ContentHash. */
    iri: string;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchor {
    /** id is the compact data ID. */
    id: Uint8Array;
    /**
     * timestamp is the anchor timestamp for this object - the time at which
     * it was first known to the blockchain.
     */
    timestamp?: Timestamp;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchorSDKType {
    /** id is the compact data ID. */
    id: Uint8Array;
    /**
     * timestamp is the anchor timestamp for this object - the time at which
     * it was first known to the blockchain.
     */
    timestamp?: TimestampSDKType;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestor {
    /** id is the compact data ID. */
    id: Uint8Array;
    /** attestor is the account address of the attestor. */
    attestor: Uint8Array;
    /** timestamp is the time at which the attestor signed this data object. */
    timestamp?: Timestamp;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestorSDKType {
    /** id is the compact data ID. */
    id: Uint8Array;
    /** attestor is the account address of the attestor. */
    attestor: Uint8Array;
    /** timestamp is the time at which the attestor signed this data object. */
    timestamp?: TimestampSDKType;
}
/** Resolver describes a data resolver. */
export interface Resolver {
    /** id is the ID of the resolver. */
    id: Long;
    /** url is the URL of the resolver. */
    url: string;
    /**
     * manager is the bytes address of the resolver manager who is allowed
     * to make calls to Msg/RegisterResolver for this resolver.
     */
    manager: Uint8Array;
}
/** Resolver describes a data resolver. */
export interface ResolverSDKType {
    /** id is the ID of the resolver. */
    id: Long;
    /** url is the URL of the resolver. */
    url: string;
    /**
     * manager is the bytes address of the resolver manager who is allowed
     * to make calls to Msg/RegisterResolver for this resolver.
     */
    manager: Uint8Array;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolver {
    /** id is the compact data ID. */
    id: Uint8Array;
    /** resolver_id is the ID of the resolver. */
    resolverId: Long;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolverSDKType {
    /** id is the compact data ID. */
    id: Uint8Array;
    /** resolver_id is the ID of the resolver. */
    resolver_id: Long;
}
export declare const DataID: {
    encode(message: DataID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataID;
    fromJSON(object: any): DataID;
    toJSON(message: DataID): unknown;
    fromPartial(object: Partial<DataID>): DataID;
};
export declare const DataAnchor: {
    encode(message: DataAnchor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAnchor;
    fromJSON(object: any): DataAnchor;
    toJSON(message: DataAnchor): unknown;
    fromPartial(object: Partial<DataAnchor>): DataAnchor;
};
export declare const DataAttestor: {
    encode(message: DataAttestor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAttestor;
    fromJSON(object: any): DataAttestor;
    toJSON(message: DataAttestor): unknown;
    fromPartial(object: Partial<DataAttestor>): DataAttestor;
};
export declare const Resolver: {
    encode(message: Resolver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resolver;
    fromJSON(object: any): Resolver;
    toJSON(message: Resolver): unknown;
    fromPartial(object: Partial<Resolver>): Resolver;
};
export declare const DataResolver: {
    encode(message: DataResolver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataResolver;
    fromJSON(object: any): DataResolver;
    toJSON(message: DataResolver): unknown;
    fromPartial(object: Partial<DataResolver>): DataResolver;
};
