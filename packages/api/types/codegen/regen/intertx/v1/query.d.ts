import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequest {
    /** owner is the address of the account that owns the ICA. */
    owner: string;
    /** connection_id is the connection the ICA claimed. */
    connectionId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
    typeUrl: "/regen.intertx.v1.QueryInterchainAccountRequest";
    value: Uint8Array;
}
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequestAmino {
    /** owner is the address of the account that owns the ICA. */
    owner?: string;
    /** connection_id is the connection the ICA claimed. */
    connection_id?: string;
}
export interface QueryInterchainAccountRequestAminoMsg {
    type: "/regen.intertx.v1.QueryInterchainAccountRequest";
    value: QueryInterchainAccountRequestAmino;
}
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequestSDKType {
    owner: string;
    connection_id: string;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponse {
    /** interchain_account_address is the address of the ICA. */
    interchainAccountAddress: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
    typeUrl: "/regen.intertx.v1.QueryInterchainAccountResponse";
    value: Uint8Array;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponseAmino {
    /** interchain_account_address is the address of the ICA. */
    interchain_account_address?: string;
}
export interface QueryInterchainAccountResponseAminoMsg {
    type: "/regen.intertx.v1.QueryInterchainAccountResponse";
    value: QueryInterchainAccountResponseAmino;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponseSDKType {
    interchain_account_address: string;
}
export declare const QueryInterchainAccountRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountRequest;
    fromJSON(object: any): QueryInterchainAccountRequest;
    toJSON(message: QueryInterchainAccountRequest): unknown;
    fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest;
    fromAmino(object: QueryInterchainAccountRequestAmino): QueryInterchainAccountRequest;
    toAmino(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAmino;
    fromAminoMsg(object: QueryInterchainAccountRequestAminoMsg): QueryInterchainAccountRequest;
    fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest;
    toProto(message: QueryInterchainAccountRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg;
};
export declare const QueryInterchainAccountResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountResponse;
    fromJSON(object: any): QueryInterchainAccountResponse;
    toJSON(message: QueryInterchainAccountResponse): unknown;
    fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse;
    fromAmino(object: QueryInterchainAccountResponseAmino): QueryInterchainAccountResponse;
    toAmino(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAmino;
    fromAminoMsg(object: QueryInterchainAccountResponseAminoMsg): QueryInterchainAccountResponse;
    fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse;
    toProto(message: QueryInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg;
};
