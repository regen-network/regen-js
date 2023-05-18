import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ClassInfo, ClassInfoSDKType, BatchInfo, BatchInfoSDKType, CreditType, CreditTypeSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
    /** params defines the parameters of the ecocredit module. */
    params?: Params;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
    /** params defines the parameters of the ecocredit module. */
    params?: ParamsSDKType;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
    /** classes are the fetched credit classes. */
    classes: ClassInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequest {
    /** class_id is the unique ID of credit class to query. */
    classId: string;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequestSDKType {
    /** class_id is the unique ID of credit class to query. */
    class_id: string;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponse {
    /** info is the ClassInfo for the credit class. */
    info?: ClassInfo;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponseSDKType {
    /** info is the ClassInfo for the credit class. */
    info?: ClassInfoSDKType;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
    /** class_id is the unique ID of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
    /** class_id is the unique ID of the credit class to query. */
    class_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
    /** batches are the fetched credit batches within the class. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
    /** batches are the fetched credit batches within the class. */
    batches: BatchInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequest {
    /** batch_denom is the unique ID of credit batch to query. */
    batchDenom: string;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequestSDKType {
    /** batch_denom is the unique ID of credit batch to query. */
    batch_denom: string;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponse {
    /** info is the BatchInfo for the credit batch. */
    info?: BatchInfo;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponseSDKType {
    /** info is the BatchInfo for the credit batch. */
    info?: BatchInfoSDKType;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** batch_denom is the unique ID of credit batch balance to query. */
    batchDenom: string;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** batch_denom is the unique ID of credit batch balance to query. */
    batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
    /** tradable_amount is the decimal number of tradable credits. */
    tradableAmount: string;
    /** retired_amount is the decimal number of retired credits. */
    retiredAmount: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
    /** tradable_amount is the decimal number of tradable credits. */
    tradable_amount: string;
    /** retired_amount is the decimal number of retired credits. */
    retired_amount: string;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
    /** batch_denom is the unique ID of credit batch to query. */
    batchDenom: string;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
    /** batch_denom is the unique ID of credit batch to query. */
    batch_denom: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
    /**
     * tradable_supply is the decimal number of tradable credits in the batch
     * supply.
     */
    tradableSupply: string;
    /**
     * retired_supply is the decimal number of retired credits in the batch
     * supply.
     */
    retiredSupply: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
    /**
     * tradable_supply is the decimal number of tradable credits in the batch
     * supply.
     */
    tradable_supply: string;
    /**
     * retired_supply is the decimal number of retired credits in the batch
     * supply.
     */
    retired_supply: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
    /** list of credit types */
    creditTypes: CreditType[];
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
    /** list of credit types */
    credit_types: CreditTypeSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse;
};
export declare const QueryClassInfoRequest: {
    encode(message: QueryClassInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassInfoRequest;
    fromJSON(object: any): QueryClassInfoRequest;
    toJSON(message: QueryClassInfoRequest): unknown;
    fromPartial(object: Partial<QueryClassInfoRequest>): QueryClassInfoRequest;
};
export declare const QueryClassInfoResponse: {
    encode(message: QueryClassInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassInfoResponse;
    fromJSON(object: any): QueryClassInfoResponse;
    toJSON(message: QueryClassInfoResponse): unknown;
    fromPartial(object: Partial<QueryClassInfoResponse>): QueryClassInfoResponse;
};
export declare const QueryBatchesRequest: {
    encode(message: QueryBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest;
    fromJSON(object: any): QueryBatchesRequest;
    toJSON(message: QueryBatchesRequest): unknown;
    fromPartial(object: Partial<QueryBatchesRequest>): QueryBatchesRequest;
};
export declare const QueryBatchesResponse: {
    encode(message: QueryBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesResponse;
    fromJSON(object: any): QueryBatchesResponse;
    toJSON(message: QueryBatchesResponse): unknown;
    fromPartial(object: Partial<QueryBatchesResponse>): QueryBatchesResponse;
};
export declare const QueryBatchInfoRequest: {
    encode(message: QueryBatchInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchInfoRequest;
    fromJSON(object: any): QueryBatchInfoRequest;
    toJSON(message: QueryBatchInfoRequest): unknown;
    fromPartial(object: Partial<QueryBatchInfoRequest>): QueryBatchInfoRequest;
};
export declare const QueryBatchInfoResponse: {
    encode(message: QueryBatchInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchInfoResponse;
    fromJSON(object: any): QueryBatchInfoResponse;
    toJSON(message: QueryBatchInfoResponse): unknown;
    fromPartial(object: Partial<QueryBatchInfoResponse>): QueryBatchInfoResponse;
};
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
};
export declare const QueryCreditTypesRequest: {
    encode(_: QueryCreditTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesRequest;
    fromJSON(_: any): QueryCreditTypesRequest;
    toJSON(_: QueryCreditTypesRequest): unknown;
    fromPartial(_: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest;
};
export declare const QueryCreditTypesResponse: {
    encode(message: QueryCreditTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesResponse;
    fromJSON(object: any): QueryCreditTypesResponse;
    toJSON(message: QueryCreditTypesResponse): unknown;
    fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse;
};
