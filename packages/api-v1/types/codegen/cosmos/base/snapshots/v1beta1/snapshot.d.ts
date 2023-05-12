import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata?: Metadata;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata?: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
    /** SHA-256 chunk hashes */
    chunkHashes: Uint8Array[];
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataSDKType {
    /** SHA-256 chunk hashes */
    chunk_hashes: Uint8Array[];
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotItem {
    store?: SnapshotStoreItem;
    iavl?: SnapshotIAVLItem;
    extension?: SnapshotExtensionMeta;
    extensionPayload?: SnapshotExtensionPayload;
    kv?: SnapshotKVItem;
    schema?: SnapshotSchema;
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotItemSDKType {
    store?: SnapshotStoreItemSDKType;
    iavl?: SnapshotIAVLItemSDKType;
    extension?: SnapshotExtensionMetaSDKType;
    extension_payload?: SnapshotExtensionPayloadSDKType;
    kv?: SnapshotKVItemSDKType;
    schema?: SnapshotSchemaSDKType;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotStoreItem {
    name: string;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotStoreItemSDKType {
    name: string;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotIAVLItem {
    key: Uint8Array;
    value: Uint8Array;
    /** version is block height */
    version: Long;
    /** height is depth of the tree. */
    height: number;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotIAVLItemSDKType {
    key: Uint8Array;
    value: Uint8Array;
    /** version is block height */
    version: Long;
    /** height is depth of the tree. */
    height: number;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionMeta {
    name: string;
    format: number;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionMetaSDKType {
    name: string;
    format: number;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionPayload {
    payload: Uint8Array;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionPayloadSDKType {
    payload: Uint8Array;
}
/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotKVItem {
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotKVItemSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotSchema {
    keys: Uint8Array[];
}
/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotSchemaSDKType {
    keys: Uint8Array[];
}
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial(object: Partial<Snapshot>): Snapshot;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial(object: Partial<Metadata>): Metadata;
};
export declare const SnapshotItem: {
    encode(message: SnapshotItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotItem;
    fromJSON(object: any): SnapshotItem;
    toJSON(message: SnapshotItem): unknown;
    fromPartial(object: Partial<SnapshotItem>): SnapshotItem;
};
export declare const SnapshotStoreItem: {
    encode(message: SnapshotStoreItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotStoreItem;
    fromJSON(object: any): SnapshotStoreItem;
    toJSON(message: SnapshotStoreItem): unknown;
    fromPartial(object: Partial<SnapshotStoreItem>): SnapshotStoreItem;
};
export declare const SnapshotIAVLItem: {
    encode(message: SnapshotIAVLItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotIAVLItem;
    fromJSON(object: any): SnapshotIAVLItem;
    toJSON(message: SnapshotIAVLItem): unknown;
    fromPartial(object: Partial<SnapshotIAVLItem>): SnapshotIAVLItem;
};
export declare const SnapshotExtensionMeta: {
    encode(message: SnapshotExtensionMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionMeta;
    fromJSON(object: any): SnapshotExtensionMeta;
    toJSON(message: SnapshotExtensionMeta): unknown;
    fromPartial(object: Partial<SnapshotExtensionMeta>): SnapshotExtensionMeta;
};
export declare const SnapshotExtensionPayload: {
    encode(message: SnapshotExtensionPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionPayload;
    fromJSON(object: any): SnapshotExtensionPayload;
    toJSON(message: SnapshotExtensionPayload): unknown;
    fromPartial(object: Partial<SnapshotExtensionPayload>): SnapshotExtensionPayload;
};
export declare const SnapshotKVItem: {
    encode(message: SnapshotKVItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotKVItem;
    fromJSON(object: any): SnapshotKVItem;
    toJSON(message: SnapshotKVItem): unknown;
    fromPartial(object: Partial<SnapshotKVItem>): SnapshotKVItem;
};
export declare const SnapshotSchema: {
    encode(message: SnapshotSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchema;
    fromJSON(object: any): SnapshotSchema;
    toJSON(message: SnapshotSchema): unknown;
    fromPartial(object: Partial<SnapshotSchema>): SnapshotSchema;
};
