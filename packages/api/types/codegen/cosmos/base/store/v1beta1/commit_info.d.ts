import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
    version: Long;
    storeInfos: StoreInfo[];
}
export interface CommitInfoProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.CommitInfo";
    value: Uint8Array;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoAmino {
    version: string;
    store_infos: StoreInfoAmino[];
}
export interface CommitInfoAminoMsg {
    type: "cosmos-sdk/CommitInfo";
    value: CommitInfoAmino;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoSDKType {
    version: Long;
    store_infos: StoreInfoSDKType[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
    name: string;
    commitId?: CommitID;
}
export interface StoreInfoProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.StoreInfo";
    value: Uint8Array;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoAmino {
    name: string;
    commit_id?: CommitIDAmino;
}
export interface StoreInfoAminoMsg {
    type: "cosmos-sdk/StoreInfo";
    value: StoreInfoAmino;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoSDKType {
    name: string;
    commit_id?: CommitIDSDKType;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
    version: Long;
    hash: Uint8Array;
}
export interface CommitIDProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.CommitID";
    value: Uint8Array;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDAmino {
    version: string;
    hash: Uint8Array;
}
export interface CommitIDAminoMsg {
    type: "cosmos-sdk/CommitID";
    value: CommitIDAmino;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDSDKType {
    version: Long;
    hash: Uint8Array;
}
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromJSON(object: any): CommitInfo;
    toJSON(message: CommitInfo): unknown;
    fromPartial(object: Partial<CommitInfo>): CommitInfo;
    fromAmino(object: CommitInfoAmino): CommitInfo;
    toAmino(message: CommitInfo): CommitInfoAmino;
    fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo;
    toAminoMsg(message: CommitInfo): CommitInfoAminoMsg;
    fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo;
    toProto(message: CommitInfo): Uint8Array;
    toProtoMsg(message: CommitInfo): CommitInfoProtoMsg;
};
export declare const StoreInfo: {
    encode(message: StoreInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo;
    fromJSON(object: any): StoreInfo;
    toJSON(message: StoreInfo): unknown;
    fromPartial(object: Partial<StoreInfo>): StoreInfo;
    fromAmino(object: StoreInfoAmino): StoreInfo;
    toAmino(message: StoreInfo): StoreInfoAmino;
    fromAminoMsg(object: StoreInfoAminoMsg): StoreInfo;
    toAminoMsg(message: StoreInfo): StoreInfoAminoMsg;
    fromProtoMsg(message: StoreInfoProtoMsg): StoreInfo;
    toProto(message: StoreInfo): Uint8Array;
    toProtoMsg(message: StoreInfo): StoreInfoProtoMsg;
};
export declare const CommitID: {
    encode(message: CommitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitID;
    fromJSON(object: any): CommitID;
    toJSON(message: CommitID): unknown;
    fromPartial(object: Partial<CommitID>): CommitID;
    fromAmino(object: CommitIDAmino): CommitID;
    toAmino(message: CommitID): CommitIDAmino;
    fromAminoMsg(object: CommitIDAminoMsg): CommitID;
    toAminoMsg(message: CommitID): CommitIDAminoMsg;
    fromProtoMsg(message: CommitIDProtoMsg): CommitID;
    toProto(message: CommitID): Uint8Array;
    toProtoMsg(message: CommitID): CommitIDProtoMsg;
};
