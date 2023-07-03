import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccount {
    /** owner is the address of the interchain account owner. */
    owner: string;
    /** connection_id is the connection id string (i.e. channel-5). */
    connectionId: string;
    /**
     * version is the application version string. For example, this could be an
     * ICS27 encoded metadata type or an ICS29 encoded metadata type with a nested
     * application version.
     */
    version: string;
}
export interface MsgRegisterAccountProtoMsg {
    typeUrl: "/regen.intertx.v1.MsgRegisterAccount";
    value: Uint8Array;
}
/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccountAmino {
    /** owner is the address of the interchain account owner. */
    owner: string;
    /** connection_id is the connection id string (i.e. channel-5). */
    connection_id: string;
    /**
     * version is the application version string. For example, this could be an
     * ICS27 encoded metadata type or an ICS29 encoded metadata type with a nested
     * application version.
     */
    version: string;
}
export interface MsgRegisterAccountAminoMsg {
    type: "/regen.intertx.v1.MsgRegisterAccount";
    value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccountSDKType {
    owner: string;
    connection_id: string;
    version: string;
}
/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
}
export interface MsgRegisterAccountResponseProtoMsg {
    typeUrl: "/regen.intertx.v1.MsgRegisterAccountResponse";
    value: Uint8Array;
}
/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseAmino {
}
export interface MsgRegisterAccountResponseAminoMsg {
    type: "/regen.intertx.v1.MsgRegisterAccountResponse";
    value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseSDKType {
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
    /** owner is the owner address of the interchain account. */
    owner: string;
    /** connection_id is the id of the connection. */
    connectionId: string;
    /** msg is the bytes of the transaction msg to send. */
    msg: Any;
}
export interface MsgSubmitTxProtoMsg {
    typeUrl: "/regen.intertx.v1.MsgSubmitTx";
    value: Uint8Array;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxAmino {
    /** owner is the owner address of the interchain account. */
    owner: string;
    /** connection_id is the id of the connection. */
    connection_id: string;
    /** msg is the bytes of the transaction msg to send. */
    msg?: AnyAmino;
}
export interface MsgSubmitTxAminoMsg {
    type: "/regen.intertx.v1.MsgSubmitTx";
    value: MsgSubmitTxAmino;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxSDKType {
    owner: string;
    connection_id: string;
    msg: AnySDKType;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
}
export interface MsgSubmitTxResponseProtoMsg {
    typeUrl: "/regen.intertx.v1.MsgSubmitTxResponse";
    value: Uint8Array;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseAmino {
}
export interface MsgSubmitTxResponseAminoMsg {
    type: "/regen.intertx.v1.MsgSubmitTxResponse";
    value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseSDKType {
}
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccount;
    fromJSON(object: any): MsgRegisterAccount;
    toJSON(message: MsgRegisterAccount): unknown;
    fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount;
    fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount;
    toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino;
    fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount;
    fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount;
    toProto(message: MsgRegisterAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccountResponse;
    fromJSON(_: any): MsgRegisterAccountResponse;
    toJSON(_: MsgRegisterAccountResponse): unknown;
    fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
    fromAmino(_: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse;
    toAmino(_: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse;
    fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse;
    toProto(message: MsgRegisterAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTx;
    fromJSON(object: any): MsgSubmitTx;
    toJSON(message: MsgSubmitTx): unknown;
    fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx;
    fromAmino(object: MsgSubmitTxAmino): MsgSubmitTx;
    toAmino(message: MsgSubmitTx): MsgSubmitTxAmino;
    fromAminoMsg(object: MsgSubmitTxAminoMsg): MsgSubmitTx;
    fromProtoMsg(message: MsgSubmitTxProtoMsg): MsgSubmitTx;
    toProto(message: MsgSubmitTx): Uint8Array;
    toProtoMsg(message: MsgSubmitTx): MsgSubmitTxProtoMsg;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTxResponse;
    fromJSON(_: any): MsgSubmitTxResponse;
    toJSON(_: MsgSubmitTxResponse): unknown;
    fromPartial(_: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
    fromAmino(_: MsgSubmitTxResponseAmino): MsgSubmitTxResponse;
    toAmino(_: MsgSubmitTxResponse): MsgSubmitTxResponseAmino;
    fromAminoMsg(object: MsgSubmitTxResponseAminoMsg): MsgSubmitTxResponse;
    fromProtoMsg(message: MsgSubmitTxResponseProtoMsg): MsgSubmitTxResponse;
    toProto(message: MsgSubmitTxResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitTxResponse): MsgSubmitTxResponseProtoMsg;
};
