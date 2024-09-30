import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ClassInfo, ClassInfoAmino, ClassInfoSDKType, BatchInfo, BatchInfoAmino, BatchInfoSDKType, CreditType, CreditTypeAmino, CreditTypeSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
    /** params defines the parameters of the ecocredit module. */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the ecocredit module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest";
    value: Uint8Array;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryClassesRequest";
    value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse";
    value: Uint8Array;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseAmino {
    /** classes are the fetched credit classes. */
    classes?: ClassInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryClassesResponse";
    value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
    classes: ClassInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequest {
    /** class_id is the unique ID of credit class to query. */
    classId: string;
}
export interface QueryClassInfoRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest";
    value: Uint8Array;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequestAmino {
    /** class_id is the unique ID of credit class to query. */
    class_id?: string;
}
export interface QueryClassInfoRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest";
    value: QueryClassInfoRequestAmino;
}
/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequestSDKType {
    class_id: string;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponse {
    /** info is the ClassInfo for the credit class. */
    info?: ClassInfo;
}
export interface QueryClassInfoResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse";
    value: Uint8Array;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponseAmino {
    /** info is the ClassInfo for the credit class. */
    info?: ClassInfoAmino;
}
export interface QueryClassInfoResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse";
    value: QueryClassInfoResponseAmino;
}
/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponseSDKType {
    info?: ClassInfoSDKType;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
    /** class_id is the unique ID of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest";
    value: Uint8Array;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestAmino {
    /** class_id is the unique ID of the credit class to query. */
    class_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryBatchesRequest";
    value: QueryBatchesRequestAmino;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
    /** batches are the fetched credit batches within the class. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse";
    value: Uint8Array;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseAmino {
    /** batches are the fetched credit batches within the class. */
    batches?: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryBatchesResponse";
    value: QueryBatchesResponseAmino;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequest {
    /** batch_denom is the unique ID of credit batch to query. */
    batchDenom: string;
}
export interface QueryBatchInfoRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest";
    value: Uint8Array;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequestAmino {
    /** batch_denom is the unique ID of credit batch to query. */
    batch_denom?: string;
}
export interface QueryBatchInfoRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest";
    value: QueryBatchInfoRequestAmino;
}
/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequestSDKType {
    batch_denom: string;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponse {
    /** info is the BatchInfo for the credit batch. */
    info?: BatchInfo;
}
export interface QueryBatchInfoResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse";
    value: Uint8Array;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponseAmino {
    /** info is the BatchInfo for the credit batch. */
    info?: BatchInfoAmino;
}
export interface QueryBatchInfoResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse";
    value: QueryBatchInfoResponseAmino;
}
/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponseSDKType {
    info?: BatchInfoSDKType;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** batch_denom is the unique ID of credit batch balance to query. */
    batchDenom: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestAmino {
    /** account is the address of the account whose balance is being queried. */
    account?: string;
    /** batch_denom is the unique ID of credit batch balance to query. */
    batch_denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
    account: string;
    batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
    /** tradable_amount is the decimal number of tradable credits. */
    tradableAmount: string;
    /** retired_amount is the decimal number of retired credits. */
    retiredAmount: string;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseAmino {
    /** tradable_amount is the decimal number of tradable credits. */
    tradable_amount?: string;
    /** retired_amount is the decimal number of retired credits. */
    retired_amount?: string;
}
export interface QueryBalanceResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
    tradable_amount: string;
    retired_amount: string;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
    /** batch_denom is the unique ID of credit batch to query. */
    batchDenom: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest";
    value: Uint8Array;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestAmino {
    /** batch_denom is the unique ID of credit batch to query. */
    batch_denom?: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
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
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse";
    value: Uint8Array;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseAmino {
    /**
     * tradable_supply is the decimal number of tradable credits in the batch
     * supply.
     */
    tradable_supply?: string;
    /**
     * retired_supply is the decimal number of retired credits in the batch
     * supply.
     */
    retired_supply?: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
    tradable_supply: string;
    retired_supply: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
}
export interface QueryCreditTypesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest";
    value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestAmino {
}
export interface QueryCreditTypesRequestAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest";
    value: QueryCreditTypesRequestAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
    /** list of credit types */
    creditTypes: CreditType[];
}
export interface QueryCreditTypesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse";
    value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseAmino {
    /** list of credit types */
    credit_types?: CreditTypeAmino[];
}
export interface QueryCreditTypesResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse";
    value: QueryCreditTypesResponseAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
    credit_types: CreditTypeSDKType[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryClassesRequest: {
    typeUrl: string;
    encode(message: QueryClassesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest;
    fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest;
    fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest;
    toAmino(message: QueryClassesRequest): QueryClassesRequestAmino;
    fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest;
    fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest;
    toProto(message: QueryClassesRequest): Uint8Array;
    toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg;
};
export declare const QueryClassesResponse: {
    typeUrl: string;
    encode(message: QueryClassesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse;
    fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse;
    fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse;
    toAmino(message: QueryClassesResponse): QueryClassesResponseAmino;
    fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse;
    fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse;
    toProto(message: QueryClassesResponse): Uint8Array;
    toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg;
};
export declare const QueryClassInfoRequest: {
    typeUrl: string;
    encode(message: QueryClassInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassInfoRequest;
    fromPartial(object: Partial<QueryClassInfoRequest>): QueryClassInfoRequest;
    fromAmino(object: QueryClassInfoRequestAmino): QueryClassInfoRequest;
    toAmino(message: QueryClassInfoRequest): QueryClassInfoRequestAmino;
    fromAminoMsg(object: QueryClassInfoRequestAminoMsg): QueryClassInfoRequest;
    fromProtoMsg(message: QueryClassInfoRequestProtoMsg): QueryClassInfoRequest;
    toProto(message: QueryClassInfoRequest): Uint8Array;
    toProtoMsg(message: QueryClassInfoRequest): QueryClassInfoRequestProtoMsg;
};
export declare const QueryClassInfoResponse: {
    typeUrl: string;
    encode(message: QueryClassInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassInfoResponse;
    fromPartial(object: Partial<QueryClassInfoResponse>): QueryClassInfoResponse;
    fromAmino(object: QueryClassInfoResponseAmino): QueryClassInfoResponse;
    toAmino(message: QueryClassInfoResponse): QueryClassInfoResponseAmino;
    fromAminoMsg(object: QueryClassInfoResponseAminoMsg): QueryClassInfoResponse;
    fromProtoMsg(message: QueryClassInfoResponseProtoMsg): QueryClassInfoResponse;
    toProto(message: QueryClassInfoResponse): Uint8Array;
    toProtoMsg(message: QueryClassInfoResponse): QueryClassInfoResponseProtoMsg;
};
export declare const QueryBatchesRequest: {
    typeUrl: string;
    encode(message: QueryBatchesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesRequest;
    fromPartial(object: Partial<QueryBatchesRequest>): QueryBatchesRequest;
    fromAmino(object: QueryBatchesRequestAmino): QueryBatchesRequest;
    toAmino(message: QueryBatchesRequest): QueryBatchesRequestAmino;
    fromAminoMsg(object: QueryBatchesRequestAminoMsg): QueryBatchesRequest;
    fromProtoMsg(message: QueryBatchesRequestProtoMsg): QueryBatchesRequest;
    toProto(message: QueryBatchesRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesRequest): QueryBatchesRequestProtoMsg;
};
export declare const QueryBatchesResponse: {
    typeUrl: string;
    encode(message: QueryBatchesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesResponse;
    fromPartial(object: Partial<QueryBatchesResponse>): QueryBatchesResponse;
    fromAmino(object: QueryBatchesResponseAmino): QueryBatchesResponse;
    toAmino(message: QueryBatchesResponse): QueryBatchesResponseAmino;
    fromAminoMsg(object: QueryBatchesResponseAminoMsg): QueryBatchesResponse;
    fromProtoMsg(message: QueryBatchesResponseProtoMsg): QueryBatchesResponse;
    toProto(message: QueryBatchesResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesResponse): QueryBatchesResponseProtoMsg;
};
export declare const QueryBatchInfoRequest: {
    typeUrl: string;
    encode(message: QueryBatchInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchInfoRequest;
    fromPartial(object: Partial<QueryBatchInfoRequest>): QueryBatchInfoRequest;
    fromAmino(object: QueryBatchInfoRequestAmino): QueryBatchInfoRequest;
    toAmino(message: QueryBatchInfoRequest): QueryBatchInfoRequestAmino;
    fromAminoMsg(object: QueryBatchInfoRequestAminoMsg): QueryBatchInfoRequest;
    fromProtoMsg(message: QueryBatchInfoRequestProtoMsg): QueryBatchInfoRequest;
    toProto(message: QueryBatchInfoRequest): Uint8Array;
    toProtoMsg(message: QueryBatchInfoRequest): QueryBatchInfoRequestProtoMsg;
};
export declare const QueryBatchInfoResponse: {
    typeUrl: string;
    encode(message: QueryBatchInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchInfoResponse;
    fromPartial(object: Partial<QueryBatchInfoResponse>): QueryBatchInfoResponse;
    fromAmino(object: QueryBatchInfoResponseAmino): QueryBatchInfoResponse;
    toAmino(message: QueryBatchInfoResponse): QueryBatchInfoResponseAmino;
    fromAminoMsg(object: QueryBatchInfoResponseAminoMsg): QueryBatchInfoResponse;
    fromProtoMsg(message: QueryBatchInfoResponseProtoMsg): QueryBatchInfoResponse;
    toProto(message: QueryBatchInfoResponse): Uint8Array;
    toProtoMsg(message: QueryBatchInfoResponse): QueryBatchInfoResponseProtoMsg;
};
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QuerySupplyRequest: {
    typeUrl: string;
    encode(message: QuerySupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    typeUrl: string;
    encode(message: QuerySupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
export declare const QueryCreditTypesRequest: {
    typeUrl: string;
    encode(_: QueryCreditTypesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesRequest;
    fromPartial(_: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest;
    fromAmino(_: QueryCreditTypesRequestAmino): QueryCreditTypesRequest;
    toAmino(_: QueryCreditTypesRequest): QueryCreditTypesRequestAmino;
    fromAminoMsg(object: QueryCreditTypesRequestAminoMsg): QueryCreditTypesRequest;
    fromProtoMsg(message: QueryCreditTypesRequestProtoMsg): QueryCreditTypesRequest;
    toProto(message: QueryCreditTypesRequest): Uint8Array;
    toProtoMsg(message: QueryCreditTypesRequest): QueryCreditTypesRequestProtoMsg;
};
export declare const QueryCreditTypesResponse: {
    typeUrl: string;
    encode(message: QueryCreditTypesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesResponse;
    fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse;
    fromAmino(object: QueryCreditTypesResponseAmino): QueryCreditTypesResponse;
    toAmino(message: QueryCreditTypesResponse): QueryCreditTypesResponseAmino;
    fromAminoMsg(object: QueryCreditTypesResponseAminoMsg): QueryCreditTypesResponse;
    fromProtoMsg(message: QueryCreditTypesResponseProtoMsg): QueryCreditTypesResponse;
    toProto(message: QueryCreditTypesResponse): Uint8Array;
    toProtoMsg(message: QueryCreditTypesResponse): QueryCreditTypesResponseProtoMsg;
};
