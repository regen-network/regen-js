import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventSend is emitted on Msg/Send */
export interface EventSend {
    classId: string;
    id: string;
    sender: string;
    receiver: string;
}
export interface EventSendProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.EventSend";
    value: Uint8Array;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendAmino {
    class_id?: string;
    id?: string;
    sender?: string;
    receiver?: string;
}
export interface EventSendAminoMsg {
    type: "cosmos-sdk/EventSend";
    value: EventSendAmino;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendSDKType {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
    classId: string;
    id: string;
    owner: string;
}
export interface EventMintProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.EventMint";
    value: Uint8Array;
}
/** EventMint is emitted on Mint */
export interface EventMintAmino {
    class_id?: string;
    id?: string;
    owner?: string;
}
export interface EventMintAminoMsg {
    type: "cosmos-sdk/EventMint";
    value: EventMintAmino;
}
/** EventMint is emitted on Mint */
export interface EventMintSDKType {
    class_id: string;
    id: string;
    owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
    classId: string;
    id: string;
    owner: string;
}
export interface EventBurnProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.EventBurn";
    value: Uint8Array;
}
/** EventBurn is emitted on Burn */
export interface EventBurnAmino {
    class_id?: string;
    id?: string;
    owner?: string;
}
export interface EventBurnAminoMsg {
    type: "cosmos-sdk/EventBurn";
    value: EventBurnAmino;
}
/** EventBurn is emitted on Burn */
export interface EventBurnSDKType {
    class_id: string;
    id: string;
    owner: string;
}
export declare const EventSend: {
    typeUrl: string;
    encode(message: EventSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSend;
    fromJSON(object: any): EventSend;
    toJSON(message: EventSend): unknown;
    fromPartial(object: Partial<EventSend>): EventSend;
    fromAmino(object: EventSendAmino): EventSend;
    toAmino(message: EventSend): EventSendAmino;
    fromAminoMsg(object: EventSendAminoMsg): EventSend;
    toAminoMsg(message: EventSend): EventSendAminoMsg;
    fromProtoMsg(message: EventSendProtoMsg): EventSend;
    toProto(message: EventSend): Uint8Array;
    toProtoMsg(message: EventSend): EventSendProtoMsg;
};
export declare const EventMint: {
    typeUrl: string;
    encode(message: EventMint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial(object: Partial<EventMint>): EventMint;
    fromAmino(object: EventMintAmino): EventMint;
    toAmino(message: EventMint): EventMintAmino;
    fromAminoMsg(object: EventMintAminoMsg): EventMint;
    toAminoMsg(message: EventMint): EventMintAminoMsg;
    fromProtoMsg(message: EventMintProtoMsg): EventMint;
    toProto(message: EventMint): Uint8Array;
    toProtoMsg(message: EventMint): EventMintProtoMsg;
};
export declare const EventBurn: {
    typeUrl: string;
    encode(message: EventBurn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBurn;
    fromJSON(object: any): EventBurn;
    toJSON(message: EventBurn): unknown;
    fromPartial(object: Partial<EventBurn>): EventBurn;
    fromAmino(object: EventBurnAmino): EventBurn;
    toAmino(message: EventBurn): EventBurnAmino;
    fromAminoMsg(object: EventBurnAminoMsg): EventBurn;
    toAminoMsg(message: EventBurn): EventBurnAminoMsg;
    fromProtoMsg(message: EventBurnProtoMsg): EventBurn;
    toProto(message: EventBurn): Uint8Array;
    toProtoMsg(message: EventBurn): EventBurnProtoMsg;
};
