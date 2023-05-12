import { Any, AnySDKType } from "../../../google/protobuf/any";
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
/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccountSDKType {
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
/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
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
    msg?: Any;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxSDKType {
    /** owner is the owner address of the interchain account. */
    owner: string;
    /** connection_id is the id of the connection. */
    connection_id: string;
    /** msg is the bytes of the transaction msg to send. */
    msg?: AnySDKType;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
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
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccountResponse;
    fromJSON(_: any): MsgRegisterAccountResponse;
    toJSON(_: MsgRegisterAccountResponse): unknown;
    fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTx;
    fromJSON(object: any): MsgSubmitTx;
    toJSON(message: MsgSubmitTx): unknown;
    fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTxResponse;
    fromJSON(_: any): MsgSubmitTxResponse;
    toJSON(_: MsgSubmitTxResponse): unknown;
    fromPartial(_: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
};
