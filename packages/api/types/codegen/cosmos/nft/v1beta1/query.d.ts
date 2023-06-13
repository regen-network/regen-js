import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTAmino, NFTSDKType, Class, ClassAmino, ClassSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    classId: string;
    owner: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequestAmino {
    class_id: string;
    owner: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "cosmos-sdk/QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequestSDKType {
    class_id: string;
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    amount: Long;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponseAmino {
    amount: string;
}
export interface QueryBalanceResponseAminoMsg {
    type: "cosmos-sdk/QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponseSDKType {
    amount: Long;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    classId: string;
    id: string;
}
export interface QueryOwnerRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest";
    value: Uint8Array;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestAmino {
    class_id: string;
    id: string;
}
export interface QueryOwnerRequestAminoMsg {
    type: "cosmos-sdk/QueryOwnerRequest";
    value: QueryOwnerRequestAmino;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestSDKType {
    class_id: string;
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner: string;
}
export interface QueryOwnerResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse";
    value: Uint8Array;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseAmino {
    owner: string;
}
export interface QueryOwnerResponseAminoMsg {
    type: "cosmos-sdk/QueryOwnerResponse";
    value: QueryOwnerResponseAmino;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseSDKType {
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    classId: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest";
    value: Uint8Array;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequestAmino {
    class_id: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequestSDKType {
    class_id: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: Long;
}
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse";
    value: Uint8Array;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseAmino {
    amount: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
    amount: Long;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    classId: string;
    owner: string;
    pagination?: PageRequest;
}
export interface QueryNFTsRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest";
    value: Uint8Array;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequestAmino {
    class_id: string;
    owner: string;
    pagination?: PageRequestAmino;
}
export interface QueryNFTsRequestAminoMsg {
    type: "cosmos-sdk/QueryNFTsRequest";
    value: QueryNFTsRequestAmino;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequestSDKType {
    class_id: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    nfts: NFT[];
    pagination?: PageResponse;
}
export interface QueryNFTsResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse";
    value: Uint8Array;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponseAmino {
    nfts: NFTAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryNFTsResponseAminoMsg {
    type: "cosmos-sdk/QueryNFTsResponse";
    value: QueryNFTsResponseAmino;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponseSDKType {
    nfts: NFTSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    classId: string;
    id: string;
}
export interface QueryNFTRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest";
    value: Uint8Array;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestAmino {
    class_id: string;
    id: string;
}
export interface QueryNFTRequestAminoMsg {
    type: "cosmos-sdk/QueryNFTRequest";
    value: QueryNFTRequestAmino;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
    class_id: string;
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft?: NFT;
}
export interface QueryNFTResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse";
    value: Uint8Array;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseAmino {
    nft?: NFTAmino;
}
export interface QueryNFTResponseAminoMsg {
    type: "cosmos-sdk/QueryNFTResponse";
    value: QueryNFTResponseAmino;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
    nft?: NFTSDKType;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    classId: string;
}
export interface QueryClassRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest";
    value: Uint8Array;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequestAmino {
    class_id: string;
}
export interface QueryClassRequestAminoMsg {
    type: "cosmos-sdk/QueryClassRequest";
    value: QueryClassRequestAmino;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequestSDKType {
    class_id: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    class?: Class;
}
export interface QueryClassResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse";
    value: Uint8Array;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponseAmino {
    class?: ClassAmino;
}
export interface QueryClassResponseAminoMsg {
    type: "cosmos-sdk/QueryClassResponse";
    value: QueryClassResponseAmino;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponseSDKType {
    class?: ClassSDKType;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest";
    value: Uint8Array;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
    type: "cosmos-sdk/QueryClassesRequest";
    value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    classes: Class[];
    pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse";
    value: Uint8Array;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponseAmino {
    classes: ClassAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
    type: "cosmos-sdk/QueryClassesResponse";
    value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponseSDKType {
    classes: ClassSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryOwnerRequest: {
    encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest;
    fromJSON(object: any): QueryOwnerRequest;
    toJSON(message: QueryOwnerRequest): unknown;
    fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest;
    fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest;
    toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino;
    fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest;
    toAminoMsg(message: QueryOwnerRequest): QueryOwnerRequestAminoMsg;
    fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest;
    toProto(message: QueryOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg;
};
export declare const QueryOwnerResponse: {
    encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse;
    fromJSON(object: any): QueryOwnerResponse;
    toJSON(message: QueryOwnerResponse): unknown;
    fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse;
    fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse;
    toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino;
    fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse;
    toAminoMsg(message: QueryOwnerResponse): QueryOwnerResponseAminoMsg;
    fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse;
    toProto(message: QueryOwnerResponse): Uint8Array;
    toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    toAminoMsg(message: QuerySupplyRequest): QuerySupplyRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    toAminoMsg(message: QuerySupplyResponse): QuerySupplyResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
export declare const QueryNFTsRequest: {
    encode(message: QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest;
    fromJSON(object: any): QueryNFTsRequest;
    toJSON(message: QueryNFTsRequest): unknown;
    fromPartial(object: Partial<QueryNFTsRequest>): QueryNFTsRequest;
    fromAmino(object: QueryNFTsRequestAmino): QueryNFTsRequest;
    toAmino(message: QueryNFTsRequest): QueryNFTsRequestAmino;
    fromAminoMsg(object: QueryNFTsRequestAminoMsg): QueryNFTsRequest;
    toAminoMsg(message: QueryNFTsRequest): QueryNFTsRequestAminoMsg;
    fromProtoMsg(message: QueryNFTsRequestProtoMsg): QueryNFTsRequest;
    toProto(message: QueryNFTsRequest): Uint8Array;
    toProtoMsg(message: QueryNFTsRequest): QueryNFTsRequestProtoMsg;
};
export declare const QueryNFTsResponse: {
    encode(message: QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse;
    fromJSON(object: any): QueryNFTsResponse;
    toJSON(message: QueryNFTsResponse): unknown;
    fromPartial(object: Partial<QueryNFTsResponse>): QueryNFTsResponse;
    fromAmino(object: QueryNFTsResponseAmino): QueryNFTsResponse;
    toAmino(message: QueryNFTsResponse): QueryNFTsResponseAmino;
    fromAminoMsg(object: QueryNFTsResponseAminoMsg): QueryNFTsResponse;
    toAminoMsg(message: QueryNFTsResponse): QueryNFTsResponseAminoMsg;
    fromProtoMsg(message: QueryNFTsResponseProtoMsg): QueryNFTsResponse;
    toProto(message: QueryNFTsResponse): Uint8Array;
    toProtoMsg(message: QueryNFTsResponse): QueryNFTsResponseProtoMsg;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest;
    fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest;
    toAmino(message: QueryNFTRequest): QueryNFTRequestAmino;
    fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest;
    toAminoMsg(message: QueryNFTRequest): QueryNFTRequestAminoMsg;
    fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest;
    toProto(message: QueryNFTRequest): Uint8Array;
    toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse;
    fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse;
    toAmino(message: QueryNFTResponse): QueryNFTResponseAmino;
    fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse;
    toAminoMsg(message: QueryNFTResponse): QueryNFTResponseAminoMsg;
    fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse;
    toProto(message: QueryNFTResponse): Uint8Array;
    toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest;
    fromAmino(object: QueryClassRequestAmino): QueryClassRequest;
    toAmino(message: QueryClassRequest): QueryClassRequestAmino;
    fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest;
    toAminoMsg(message: QueryClassRequest): QueryClassRequestAminoMsg;
    fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest;
    toProto(message: QueryClassRequest): Uint8Array;
    toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse;
    fromAmino(object: QueryClassResponseAmino): QueryClassResponse;
    toAmino(message: QueryClassResponse): QueryClassResponseAmino;
    fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse;
    toAminoMsg(message: QueryClassResponse): QueryClassResponseAminoMsg;
    fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse;
    toProto(message: QueryClassResponse): Uint8Array;
    toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg;
};
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest;
    fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest;
    toAmino(message: QueryClassesRequest): QueryClassesRequestAmino;
    fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest;
    toAminoMsg(message: QueryClassesRequest): QueryClassesRequestAminoMsg;
    fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest;
    toProto(message: QueryClassesRequest): Uint8Array;
    toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse;
    fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse;
    toAmino(message: QueryClassesResponse): QueryClassesResponseAmino;
    fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse;
    toAminoMsg(message: QueryClassesResponse): QueryClassesResponseAminoMsg;
    fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse;
    toProto(message: QueryClassesResponse): Uint8Array;
    toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg;
};
