import * as _m0 from "protobufjs/minimal";
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
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequestSDKType {
    /** owner is the address of the account that owns the ICA. */
    owner: string;
    /** connection_id is the connection the ICA claimed. */
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
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponseSDKType {
    /** interchain_account_address is the address of the ICA. */
    interchain_account_address: string;
}
export declare const QueryInterchainAccountRequest: {
    encode(message: QueryInterchainAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountRequest;
    fromJSON(object: any): QueryInterchainAccountRequest;
    toJSON(message: QueryInterchainAccountRequest): unknown;
    fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest;
};
export declare const QueryInterchainAccountResponse: {
    encode(message: QueryInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountResponse;
    fromJSON(object: any): QueryInterchainAccountResponse;
    toJSON(message: QueryInterchainAccountResponse): unknown;
    fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse;
};
