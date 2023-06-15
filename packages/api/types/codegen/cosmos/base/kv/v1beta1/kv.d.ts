import * as _m0 from "protobufjs/minimal";
/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
    pairs: Pair[];
}
export interface PairsProtoMsg {
    typeUrl: "/cosmos.base.kv.v1beta1.Pairs";
    value: Uint8Array;
}
/** Pairs defines a repeated slice of Pair objects. */
export interface PairsAmino {
    pairs: PairAmino[];
}
export interface PairsAminoMsg {
    type: "cosmos-sdk/Pairs";
    value: PairsAmino;
}
/** Pairs defines a repeated slice of Pair objects. */
export interface PairsSDKType {
    pairs: PairSDKType[];
}
/** Pair defines a key/value bytes tuple. */
export interface Pair {
    key: Uint8Array;
    value: Uint8Array;
}
export interface PairProtoMsg {
    typeUrl: "/cosmos.base.kv.v1beta1.Pair";
    value: Uint8Array;
}
/** Pair defines a key/value bytes tuple. */
export interface PairAmino {
    key: Uint8Array;
    value: Uint8Array;
}
export interface PairAminoMsg {
    type: "cosmos-sdk/Pair";
    value: PairAmino;
}
/** Pair defines a key/value bytes tuple. */
export interface PairSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const Pairs: {
    encode(message: Pairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pairs;
    fromJSON(object: any): Pairs;
    toJSON(message: Pairs): unknown;
    fromPartial(object: Partial<Pairs>): Pairs;
    fromAmino(object: PairsAmino): Pairs;
    toAmino(message: Pairs): PairsAmino;
    fromAminoMsg(object: PairsAminoMsg): Pairs;
    toAminoMsg(message: Pairs): PairsAminoMsg;
    fromProtoMsg(message: PairsProtoMsg): Pairs;
    toProto(message: Pairs): Uint8Array;
    toProtoMsg(message: Pairs): PairsProtoMsg;
};
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromJSON(object: any): Pair;
    toJSON(message: Pair): unknown;
    fromPartial(object: Partial<Pair>): Pair;
    fromAmino(object: PairAmino): Pair;
    toAmino(message: Pair): PairAmino;
    fromAminoMsg(object: PairAminoMsg): Pair;
    toAminoMsg(message: Pair): PairAminoMsg;
    fromProtoMsg(message: PairProtoMsg): Pair;
    toProto(message: Pair): Uint8Array;
    toProtoMsg(message: Pair): PairProtoMsg;
};
