import { RequestDeliverTx, RequestDeliverTxAmino, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType, RequestBeginBlock, RequestBeginBlockAmino, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockAmino, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockAmino, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockAmino, ResponseEndBlockSDKType, ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    storeKey: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export interface StoreKVPairProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair";
    value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairAmino {
    /** the store key for the KVStore this pair originates from */
    store_key?: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete?: boolean;
    key?: string;
    value?: string;
}
export interface StoreKVPairAminoMsg {
    type: "cosmos-sdk/StoreKVPair";
    value: StoreKVPairAmino;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
    store_key: string;
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
    requestBeginBlock?: RequestBeginBlock;
    responseBeginBlock?: ResponseBeginBlock;
    deliverTxs: BlockMetadata_DeliverTx[];
    requestEndBlock?: RequestEndBlock;
    responseEndBlock?: ResponseEndBlock;
    responseCommit?: ResponseCommit;
}
export interface BlockMetadataProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata";
    value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataAmino {
    request_begin_block?: RequestBeginBlockAmino;
    response_begin_block?: ResponseBeginBlockAmino;
    deliver_txs?: BlockMetadata_DeliverTxAmino[];
    request_end_block?: RequestEndBlockAmino;
    response_end_block?: ResponseEndBlockAmino;
    response_commit?: ResponseCommitAmino;
}
export interface BlockMetadataAminoMsg {
    type: "cosmos-sdk/BlockMetadata";
    value: BlockMetadataAmino;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
    request_begin_block?: RequestBeginBlockSDKType;
    response_begin_block?: ResponseBeginBlockSDKType;
    deliver_txs: BlockMetadata_DeliverTxSDKType[];
    request_end_block?: RequestEndBlockSDKType;
    response_end_block?: ResponseEndBlockSDKType;
    response_commit?: ResponseCommitSDKType;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {
    request?: RequestDeliverTx;
    response?: ResponseDeliverTx;
}
export interface BlockMetadata_DeliverTxProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.DeliverTx";
    value: Uint8Array;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTxAmino {
    request?: RequestDeliverTxAmino;
    response?: ResponseDeliverTxAmino;
}
export interface BlockMetadata_DeliverTxAminoMsg {
    type: "cosmos-sdk/DeliverTx";
    value: BlockMetadata_DeliverTxAmino;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTxSDKType {
    request?: RequestDeliverTxSDKType;
    response?: ResponseDeliverTxSDKType;
}
export declare const StoreKVPair: {
    typeUrl: string;
    encode(message: StoreKVPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    fromPartial(object: Partial<StoreKVPair>): StoreKVPair;
    fromAmino(object: StoreKVPairAmino): StoreKVPair;
    toAmino(message: StoreKVPair): StoreKVPairAmino;
    fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair;
    toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg;
    fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair;
    toProto(message: StoreKVPair): Uint8Array;
    toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg;
};
export declare const BlockMetadata: {
    typeUrl: string;
    encode(message: BlockMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata;
    fromJSON(object: any): BlockMetadata;
    toJSON(message: BlockMetadata): unknown;
    fromPartial(object: Partial<BlockMetadata>): BlockMetadata;
    fromAmino(object: BlockMetadataAmino): BlockMetadata;
    toAmino(message: BlockMetadata): BlockMetadataAmino;
    fromAminoMsg(object: BlockMetadataAminoMsg): BlockMetadata;
    toAminoMsg(message: BlockMetadata): BlockMetadataAminoMsg;
    fromProtoMsg(message: BlockMetadataProtoMsg): BlockMetadata;
    toProto(message: BlockMetadata): Uint8Array;
    toProtoMsg(message: BlockMetadata): BlockMetadataProtoMsg;
};
export declare const BlockMetadata_DeliverTx: {
    typeUrl: string;
    encode(message: BlockMetadata_DeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata_DeliverTx;
    fromJSON(object: any): BlockMetadata_DeliverTx;
    toJSON(message: BlockMetadata_DeliverTx): unknown;
    fromPartial(object: Partial<BlockMetadata_DeliverTx>): BlockMetadata_DeliverTx;
    fromAmino(object: BlockMetadata_DeliverTxAmino): BlockMetadata_DeliverTx;
    toAmino(message: BlockMetadata_DeliverTx): BlockMetadata_DeliverTxAmino;
    fromAminoMsg(object: BlockMetadata_DeliverTxAminoMsg): BlockMetadata_DeliverTx;
    toAminoMsg(message: BlockMetadata_DeliverTx): BlockMetadata_DeliverTxAminoMsg;
    fromProtoMsg(message: BlockMetadata_DeliverTxProtoMsg): BlockMetadata_DeliverTx;
    toProto(message: BlockMetadata_DeliverTx): Uint8Array;
    toProtoMsg(message: BlockMetadata_DeliverTx): BlockMetadata_DeliverTxProtoMsg;
};
