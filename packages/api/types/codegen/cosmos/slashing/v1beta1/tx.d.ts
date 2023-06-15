import * as _m0 from "protobufjs/minimal";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
export interface MsgUnjailProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
    value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
    validator_addr: string;
}
export interface MsgUnjailAminoMsg {
    type: "cosmos-sdk/MsgUnjail";
    value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
    validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
export interface MsgUnjailResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
    value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {
}
export interface MsgUnjailResponseAminoMsg {
    type: "cosmos-sdk/MsgUnjailResponse";
    value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {
}
export declare const MsgUnjail: {
    encode(message: MsgUnjail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail;
    fromJSON(object: any): MsgUnjail;
    toJSON(message: MsgUnjail): unknown;
    fromPartial(object: Partial<MsgUnjail>): MsgUnjail;
    fromAmino(object: MsgUnjailAmino): MsgUnjail;
    toAmino(message: MsgUnjail): MsgUnjailAmino;
    fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail;
    toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg;
    fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail;
    toProto(message: MsgUnjail): Uint8Array;
    toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg;
};
export declare const MsgUnjailResponse: {
    encode(_: MsgUnjailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse;
    fromJSON(_: any): MsgUnjailResponse;
    toJSON(_: MsgUnjailResponse): unknown;
    fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse;
    fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse;
    toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino;
    fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse;
    toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg;
    fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse;
    toProto(message: MsgUnjailResponse): Uint8Array;
    toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg;
};
