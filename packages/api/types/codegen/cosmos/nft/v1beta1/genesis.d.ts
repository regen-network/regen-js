import { Class, ClassAmino, ClassSDKType, NFT, NFTAmino, NFTSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    entries: Entry[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateAmino {
    /** class defines the class of the nft type. */
    classes: ClassAmino[];
    entries: EntryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
    classes: ClassSDKType[];
    entries: EntrySDKType[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
export interface EntryProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.Entry";
    value: Uint8Array;
}
/** Entry Defines all nft owned by a person */
export interface EntryAmino {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFTAmino[];
}
export interface EntryAminoMsg {
    type: "cosmos-sdk/Entry";
    value: EntryAmino;
}
/** Entry Defines all nft owned by a person */
export interface EntrySDKType {
    owner: string;
    nfts: NFTSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entry;
    fromJSON(object: any): Entry;
    toJSON(message: Entry): unknown;
    fromPartial(object: Partial<Entry>): Entry;
    fromAmino(object: EntryAmino): Entry;
    toAmino(message: Entry): EntryAmino;
    fromAminoMsg(object: EntryAminoMsg): Entry;
    toAminoMsg(message: Entry): EntryAminoMsg;
    fromProtoMsg(message: EntryProtoMsg): Entry;
    toProto(message: Entry): Uint8Array;
    toProtoMsg(message: Entry): EntryProtoMsg;
};
