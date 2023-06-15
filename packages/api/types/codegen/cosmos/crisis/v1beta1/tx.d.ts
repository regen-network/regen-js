import * as _m0 from "protobufjs/minimal";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
    sender: string;
    invariantModuleName: string;
    invariantRoute: string;
}
export interface MsgVerifyInvariantProtoMsg {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant";
    value: Uint8Array;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantAmino {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
}
export interface MsgVerifyInvariantAminoMsg {
    type: "cosmos-sdk/MsgVerifyInvariant";
    value: MsgVerifyInvariantAmino;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantSDKType {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}
export interface MsgVerifyInvariantResponseProtoMsg {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
    value: Uint8Array;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseAmino {
}
export interface MsgVerifyInvariantResponseAminoMsg {
    type: "cosmos-sdk/MsgVerifyInvariantResponse";
    value: MsgVerifyInvariantResponseAmino;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseSDKType {
}
export declare const MsgVerifyInvariant: {
    encode(message: MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant;
    fromJSON(object: any): MsgVerifyInvariant;
    toJSON(message: MsgVerifyInvariant): unknown;
    fromPartial(object: Partial<MsgVerifyInvariant>): MsgVerifyInvariant;
    fromAmino(object: MsgVerifyInvariantAmino): MsgVerifyInvariant;
    toAmino(message: MsgVerifyInvariant): MsgVerifyInvariantAmino;
    fromAminoMsg(object: MsgVerifyInvariantAminoMsg): MsgVerifyInvariant;
    toAminoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantAminoMsg;
    fromProtoMsg(message: MsgVerifyInvariantProtoMsg): MsgVerifyInvariant;
    toProto(message: MsgVerifyInvariant): Uint8Array;
    toProtoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantProtoMsg;
};
export declare const MsgVerifyInvariantResponse: {
    encode(_: MsgVerifyInvariantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse;
    fromJSON(_: any): MsgVerifyInvariantResponse;
    toJSON(_: MsgVerifyInvariantResponse): unknown;
    fromPartial(_: Partial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse;
    fromAmino(_: MsgVerifyInvariantResponseAmino): MsgVerifyInvariantResponse;
    toAmino(_: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAmino;
    fromAminoMsg(object: MsgVerifyInvariantResponseAminoMsg): MsgVerifyInvariantResponse;
    toAminoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAminoMsg;
    fromProtoMsg(message: MsgVerifyInvariantResponseProtoMsg): MsgVerifyInvariantResponse;
    toProto(message: MsgVerifyInvariantResponse): Uint8Array;
    toProtoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseProtoMsg;
};
