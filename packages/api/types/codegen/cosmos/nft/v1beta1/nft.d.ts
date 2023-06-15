import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** Class defines the class of the nft type. */
export interface Class {
    /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
    id: string;
    /** name defines the human-readable name of the NFT classification. Optional */
    name: string;
    /** symbol is an abbreviated name for nft classification. Optional */
    symbol: string;
    /** description is a brief description of nft classification. Optional */
    description: string;
    /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri. Optional */
    uriHash: string;
    /** data is the app specific metadata of the NFT class. Optional */
    data?: Any;
}
export interface ClassProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.Class";
    value: Uint8Array;
}
/** Class defines the class of the nft type. */
export interface ClassAmino {
    /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
    id: string;
    /** name defines the human-readable name of the NFT classification. Optional */
    name: string;
    /** symbol is an abbreviated name for nft classification. Optional */
    symbol: string;
    /** description is a brief description of nft classification. Optional */
    description: string;
    /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri. Optional */
    uri_hash: string;
    /** data is the app specific metadata of the NFT class. Optional */
    data?: AnyAmino;
}
export interface ClassAminoMsg {
    type: "cosmos-sdk/Class";
    value: ClassAmino;
}
/** Class defines the class of the nft type. */
export interface ClassSDKType {
    id: string;
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uri_hash: string;
    data?: AnySDKType;
}
/** NFT defines the NFT. */
export interface NFT {
    /** class_id associated with the NFT, similar to the contract address of ERC721 */
    classId: string;
    /** id is a unique identifier of the NFT */
    id: string;
    /** uri for the NFT metadata stored off chain */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri */
    uriHash: string;
    /** data is an app specific data of the NFT. Optional */
    data?: Any;
}
export interface NFTProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.NFT";
    value: Uint8Array;
}
/** NFT defines the NFT. */
export interface NFTAmino {
    /** class_id associated with the NFT, similar to the contract address of ERC721 */
    class_id: string;
    /** id is a unique identifier of the NFT */
    id: string;
    /** uri for the NFT metadata stored off chain */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri */
    uri_hash: string;
    /** data is an app specific data of the NFT. Optional */
    data?: AnyAmino;
}
export interface NFTAminoMsg {
    type: "cosmos-sdk/NFT";
    value: NFTAmino;
}
/** NFT defines the NFT. */
export interface NFTSDKType {
    class_id: string;
    id: string;
    uri: string;
    uri_hash: string;
    data?: AnySDKType;
}
export declare const Class: {
    encode(message: Class, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial(object: Partial<Class>): Class;
    fromAmino(object: ClassAmino): Class;
    toAmino(message: Class): ClassAmino;
    fromAminoMsg(object: ClassAminoMsg): Class;
    toAminoMsg(message: Class): ClassAminoMsg;
    fromProtoMsg(message: ClassProtoMsg): Class;
    toProto(message: Class): Uint8Array;
    toProtoMsg(message: Class): ClassProtoMsg;
};
export declare const NFT: {
    encode(message: NFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFT;
    fromJSON(object: any): NFT;
    toJSON(message: NFT): unknown;
    fromPartial(object: Partial<NFT>): NFT;
    fromAmino(object: NFTAmino): NFT;
    toAmino(message: NFT): NFTAmino;
    fromAminoMsg(object: NFTAminoMsg): NFT;
    toAminoMsg(message: NFT): NFTAminoMsg;
    fromProtoMsg(message: NFTProtoMsg): NFT;
    toProto(message: NFT): Uint8Array;
    toProtoMsg(message: NFT): NFTProtoMsg;
};
