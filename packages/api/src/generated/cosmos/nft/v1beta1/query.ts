/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../base/query/v1beta1/pagination';
import { NFT, Class } from './nft';

export const protobufPackage = 'cosmos.nft.v1beta1';

/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  $type: 'cosmos.nft.v1beta1.QueryBalanceRequest';
  classId: string;
  owner: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  $type: 'cosmos.nft.v1beta1.QueryBalanceResponse';
  amount: Long;
}

/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  $type: 'cosmos.nft.v1beta1.QueryOwnerRequest';
  classId: string;
  id: string;
}

/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  $type: 'cosmos.nft.v1beta1.QueryOwnerResponse';
  owner: string;
}

/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  $type: 'cosmos.nft.v1beta1.QuerySupplyRequest';
  classId: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  $type: 'cosmos.nft.v1beta1.QuerySupplyResponse';
  amount: Long;
}

/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
  $type: 'cosmos.nft.v1beta1.QueryNFTsRequest';
  classId: string;
  owner: string;
  pagination?: PageRequest;
}

/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
  $type: 'cosmos.nft.v1beta1.QueryNFTsResponse';
  nfts: NFT[];
  pagination?: PageResponse;
}

/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  $type: 'cosmos.nft.v1beta1.QueryNFTRequest';
  classId: string;
  id: string;
}

/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  $type: 'cosmos.nft.v1beta1.QueryNFTResponse';
  nft?: NFT;
}

/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
  $type: 'cosmos.nft.v1beta1.QueryClassRequest';
  classId: string;
}

/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
  $type: 'cosmos.nft.v1beta1.QueryClassResponse';
  class?: Class;
}

/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
  $type: 'cosmos.nft.v1beta1.QueryClassesRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
  $type: 'cosmos.nft.v1beta1.QueryClassesResponse';
  classes: Class[];
  pagination?: PageResponse;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    $type: 'cosmos.nft.v1beta1.QueryBalanceRequest',
    classId: '',
    owner: '',
  };
}

export const QueryBalanceRequest = {
  $type: 'cosmos.nft.v1beta1.QueryBalanceRequest' as const,

  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      $type: QueryBalanceRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I,
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceRequest.$type, QueryBalanceRequest);

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    $type: 'cosmos.nft.v1beta1.QueryBalanceResponse',
    amount: Long.UZERO,
  };
}

export const QueryBalanceResponse = {
  $type: 'cosmos.nft.v1beta1.QueryBalanceResponse' as const,

  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      $type: QueryBalanceResponse.$type,
      amount: isSet(object.amount)
        ? Long.fromString(object.amount)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I,
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromValue(object.amount)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryBalanceResponse.$type, QueryBalanceResponse);

function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return { $type: 'cosmos.nft.v1beta1.QueryOwnerRequest', classId: '', id: '' };
}

export const QueryOwnerRequest = {
  $type: 'cosmos.nft.v1beta1.QueryOwnerRequest' as const,

  encode(
    message: QueryOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerRequest {
    return {
      $type: QueryOwnerRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerRequest>, I>>(
    object: I,
  ): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? '';
    message.id = object.id ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryOwnerRequest.$type, QueryOwnerRequest);

function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return { $type: 'cosmos.nft.v1beta1.QueryOwnerResponse', owner: '' };
}

export const QueryOwnerResponse = {
  $type: 'cosmos.nft.v1beta1.QueryOwnerResponse' as const,

  encode(
    message: QueryOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerResponse {
    return {
      $type: QueryOwnerResponse.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerResponse>, I>>(
    object: I,
  ): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryOwnerResponse.$type, QueryOwnerResponse);

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { $type: 'cosmos.nft.v1beta1.QuerySupplyRequest', classId: '' };
}

export const QuerySupplyRequest = {
  $type: 'cosmos.nft.v1beta1.QuerySupplyRequest' as const,

  encode(
    message: QuerySupplyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return {
      $type: QuerySupplyRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
    object: I,
  ): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyRequest.$type, QuerySupplyRequest);

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    $type: 'cosmos.nft.v1beta1.QuerySupplyResponse',
    amount: Long.UZERO,
  };
}

export const QuerySupplyResponse = {
  $type: 'cosmos.nft.v1beta1.QuerySupplyResponse' as const,

  encode(
    message: QuerySupplyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return {
      $type: QuerySupplyResponse.$type,
      amount: isSet(object.amount)
        ? Long.fromString(object.amount)
        : Long.UZERO,
    };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(
    object: I,
  ): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromValue(object.amount)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QuerySupplyResponse.$type, QuerySupplyResponse);

function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    $type: 'cosmos.nft.v1beta1.QueryNFTsRequest',
    classId: '',
    owner: '',
    pagination: undefined,
  };
}

export const QueryNFTsRequest = {
  $type: 'cosmos.nft.v1beta1.QueryNFTsRequest' as const,

  encode(
    message: QueryNFTsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTsRequest {
    return {
      $type: QueryNFTsRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryNFTsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTsRequest>, I>>(
    object: I,
  ): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? '';
    message.owner = object.owner ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryNFTsRequest.$type, QueryNFTsRequest);

function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    $type: 'cosmos.nft.v1beta1.QueryNFTsResponse',
    nfts: [],
    pagination: undefined,
  };
}

export const QueryNFTsResponse = {
  $type: 'cosmos.nft.v1beta1.QueryNFTsResponse' as const,

  encode(
    message: QueryNFTsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTsResponse {
    return {
      $type: QueryNFTsResponse.$type,
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFT.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryNFTsResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTsResponse>, I>>(
    object: I,
  ): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryNFTsResponse.$type, QueryNFTsResponse);

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return { $type: 'cosmos.nft.v1beta1.QueryNFTRequest', classId: '', id: '' };
}

export const QueryNFTRequest = {
  $type: 'cosmos.nft.v1beta1.QueryNFTRequest' as const,

  encode(
    message: QueryNFTRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      $type: QueryNFTRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(
    object: I,
  ): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? '';
    message.id = object.id ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryNFTRequest.$type, QueryNFTRequest);

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return { $type: 'cosmos.nft.v1beta1.QueryNFTResponse', nft: undefined };
}

export const QueryNFTResponse = {
  $type: 'cosmos.nft.v1beta1.QueryNFTResponse' as const,

  encode(
    message: QueryNFTResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return {
      $type: QueryNFTResponse.$type,
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined,
    };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(
    object: I,
  ): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft =
      object.nft !== undefined && object.nft !== null
        ? NFT.fromPartial(object.nft)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryNFTResponse.$type, QueryNFTResponse);

function createBaseQueryClassRequest(): QueryClassRequest {
  return { $type: 'cosmos.nft.v1beta1.QueryClassRequest', classId: '' };
}

export const QueryClassRequest = {
  $type: 'cosmos.nft.v1beta1.QueryClassRequest' as const,

  encode(
    message: QueryClassRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassRequest {
    return {
      $type: QueryClassRequest.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassRequest>, I>>(
    object: I,
  ): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryClassRequest.$type, QueryClassRequest);

function createBaseQueryClassResponse(): QueryClassResponse {
  return { $type: 'cosmos.nft.v1beta1.QueryClassResponse', class: undefined };
}

export const QueryClassResponse = {
  $type: 'cosmos.nft.v1beta1.QueryClassResponse' as const,

  encode(
    message: QueryClassResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassResponse {
    return {
      $type: QueryClassResponse.$type,
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined,
    };
  },

  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined &&
      (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassResponse>, I>>(
    object: I,
  ): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class =
      object.class !== undefined && object.class !== null
        ? Class.fromPartial(object.class)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassResponse.$type, QueryClassResponse);

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    $type: 'cosmos.nft.v1beta1.QueryClassesRequest',
    pagination: undefined,
  };
}

export const QueryClassesRequest = {
  $type: 'cosmos.nft.v1beta1.QueryClassesRequest' as const,

  encode(
    message: QueryClassesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesRequest {
    return {
      $type: QueryClassesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(
    object: I,
  ): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassesRequest.$type, QueryClassesRequest);

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    $type: 'cosmos.nft.v1beta1.QueryClassesResponse',
    classes: [],
    pagination: undefined,
  };
}

export const QueryClassesResponse = {
  $type: 'cosmos.nft.v1beta1.QueryClassesResponse' as const,

  encode(
    message: QueryClassesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClassesResponse {
    return {
      $type: QueryClassesResponse.$type,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => Class.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => (e ? Class.toJSON(e) : undefined));
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(
    object: I,
  ): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryClassesResponse.$type, QueryClassesResponse);

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  Balance(
    request: DeepPartial<QueryBalanceRequest>,
  ): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  Owner(request: DeepPartial<QueryOwnerRequest>): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  Supply(
    request: DeepPartial<QuerySupplyRequest>,
  ): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  NFTs(request: DeepPartial<QueryNFTsRequest>): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  NFT(request: DeepPartial<QueryNFTRequest>): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  Class(request: DeepPartial<QueryClassRequest>): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  Classes(
    request: DeepPartial<QueryClassesRequest>,
  ): Promise<QueryClassesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Owner = this.Owner.bind(this);
    this.Supply = this.Supply.bind(this);
    this.NFTs = this.NFTs.bind(this);
    this.NFT = this.NFT.bind(this);
    this.Class = this.Class.bind(this);
    this.Classes = this.Classes.bind(this);
  }
  Balance(
    request: DeepPartial<QueryBalanceRequest>,
  ): Promise<QueryBalanceResponse> {
    const fromPartial = QueryBalanceRequest.fromPartial(request);
    const data = QueryBalanceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.nft.v1beta1.Query',
      'Balance',
      data,
    );
    return promise.then(data =>
      QueryBalanceResponse.decode(new _m0.Reader(data)),
    );
  }

  Owner(request: DeepPartial<QueryOwnerRequest>): Promise<QueryOwnerResponse> {
    const fromPartial = QueryOwnerRequest.fromPartial(request);
    const data = QueryOwnerRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.nft.v1beta1.Query', 'Owner', data);
    return promise.then(data =>
      QueryOwnerResponse.decode(new _m0.Reader(data)),
    );
  }

  Supply(
    request: DeepPartial<QuerySupplyRequest>,
  ): Promise<QuerySupplyResponse> {
    const fromPartial = QuerySupplyRequest.fromPartial(request);
    const data = QuerySupplyRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.nft.v1beta1.Query',
      'Supply',
      data,
    );
    return promise.then(data =>
      QuerySupplyResponse.decode(new _m0.Reader(data)),
    );
  }

  NFTs(request: DeepPartial<QueryNFTsRequest>): Promise<QueryNFTsResponse> {
    const fromPartial = QueryNFTsRequest.fromPartial(request);
    const data = QueryNFTsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.nft.v1beta1.Query', 'NFTs', data);
    return promise.then(data => QueryNFTsResponse.decode(new _m0.Reader(data)));
  }

  NFT(request: DeepPartial<QueryNFTRequest>): Promise<QueryNFTResponse> {
    const fromPartial = QueryNFTRequest.fromPartial(request);
    const data = QueryNFTRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.nft.v1beta1.Query', 'NFT', data);
    return promise.then(data => QueryNFTResponse.decode(new _m0.Reader(data)));
  }

  Class(request: DeepPartial<QueryClassRequest>): Promise<QueryClassResponse> {
    const fromPartial = QueryClassRequest.fromPartial(request);
    const data = QueryClassRequest.encode(fromPartial).finish();
    const promise = this.rpc.request('cosmos.nft.v1beta1.Query', 'Class', data);
    return promise.then(data =>
      QueryClassResponse.decode(new _m0.Reader(data)),
    );
  }

  Classes(
    request: DeepPartial<QueryClassesRequest>,
  ): Promise<QueryClassesResponse> {
    const fromPartial = QueryClassesRequest.fromPartial(request);
    const data = QueryClassesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.nft.v1beta1.Query',
      'Classes',
      data,
    );
    return promise.then(data =>
      QueryClassesResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
