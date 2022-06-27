/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  PageRequest,
  PageResponse,
} from '../../../../cosmos/base/query/v1beta1/pagination';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { AllowedDenom } from '../../../../regen/ecocredit/marketplace/v1/state';

export const protobufPackage = 'regen.ecocredit.marketplace.v1';

/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrderRequest';
  /** sell_order_id is the id of the requested sell order. */
  sellOrderId: Long;
}

/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrderResponse';
  /** sell_order contains all information related to a sell order. */
  sellOrder?: SellOrderInfo;
}

/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersResponse';
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequest {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest';
  /** batch_denom is an ecocredit denom */
  batchDenom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponse {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse';
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse;
}

/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequest {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest';
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponse {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse';
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse;
}

/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequest {
  $type: 'regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponse {
  $type: 'regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse';
  /**
   * allowed_denoms is a list of coin denoms allowed to use in the ask price of
   * sell orders.
   */
  allowedDenoms: AllowedDenom[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse;
}

/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfo {
  $type: 'regen.ecocredit.marketplace.v1.SellOrderInfo';
  /** id is the unique ID of sell order. */
  id: Long;
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** batch_denom is denom of the credit batch being sold. */
  batchDenom: string;
  /** quantity is the decimal quantity of credits being sold. */
  quantity: string;
  /** ask_denom is the denom used in the ask price of the sell order. */
  askDenom: string;
  /**
   * ask_amount is the amount that the seller is asking for each credit unit of
   * the batch. Each credit unit of the batch will be sold for at least the
   * ask_amount.
   */
  askAmount: string;
  /**
   * disable_auto_retire disables auto-retirement of credits which allows a
   * buyer to disable auto-retirement in their buy order enabling them to
   * resell the credits to another buyer.
   */
  disableAutoRetire: boolean;
  /**
   * expiration is an optional timestamp when the sell order expires. When the
   * expiration time is reached, the sell order is removed from state.
   */
  expiration?: Date;
}

function createBaseQuerySellOrderRequest(): QuerySellOrderRequest {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrderRequest',
    sellOrderId: Long.UZERO,
  };
}

export const QuerySellOrderRequest = {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrderRequest' as const,

  encode(
    message: QuerySellOrderRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySellOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySellOrderRequest {
    return {
      $type: QuerySellOrderRequest.$type,
      sellOrderId: isSet(object.sellOrderId)
        ? Long.fromString(object.sellOrderId)
        : Long.UZERO,
    };
  },

  toJSON(message: QuerySellOrderRequest): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrderRequest>, I>>(
    object: I,
  ): QuerySellOrderRequest {
    const message = createBaseQuerySellOrderRequest();
    message.sellOrderId =
      object.sellOrderId !== undefined && object.sellOrderId !== null
        ? Long.fromValue(object.sellOrderId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QuerySellOrderRequest.$type, QuerySellOrderRequest);

function createBaseQuerySellOrderResponse(): QuerySellOrderResponse {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrderResponse',
    sellOrder: undefined,
  };
}

export const QuerySellOrderResponse = {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrderResponse' as const,

  encode(
    message: QuerySellOrderResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sellOrder !== undefined) {
      SellOrderInfo.encode(
        message.sellOrder,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrder = SellOrderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySellOrderResponse {
    return {
      $type: QuerySellOrderResponse.$type,
      sellOrder: isSet(object.sellOrder)
        ? SellOrderInfo.fromJSON(object.sellOrder)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrderResponse): unknown {
    const obj: any = {};
    message.sellOrder !== undefined &&
      (obj.sellOrder = message.sellOrder
        ? SellOrderInfo.toJSON(message.sellOrder)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrderResponse>, I>>(
    object: I,
  ): QuerySellOrderResponse {
    const message = createBaseQuerySellOrderResponse();
    message.sellOrder =
      object.sellOrder !== undefined && object.sellOrder !== null
        ? SellOrderInfo.fromPartial(object.sellOrder)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySellOrderResponse.$type, QuerySellOrderResponse);

function createBaseQuerySellOrdersRequest(): QuerySellOrdersRequest {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersRequest',
    pagination: undefined,
  };
}

export const QuerySellOrdersRequest = {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersRequest' as const,

  encode(
    message: QuerySellOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySellOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersRequest();
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

  fromJSON(object: any): QuerySellOrdersRequest {
    return {
      $type: QuerySellOrdersRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrdersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrdersRequest>, I>>(
    object: I,
  ): QuerySellOrdersRequest {
    const message = createBaseQuerySellOrdersRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySellOrdersRequest.$type, QuerySellOrdersRequest);

function createBaseQuerySellOrdersResponse(): QuerySellOrdersResponse {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersResponse',
    sellOrders: [],
    pagination: undefined,
  };
}

export const QuerySellOrdersResponse = {
  $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersResponse' as const,

  encode(
    message: QuerySellOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySellOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(
            SellOrderInfo.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QuerySellOrdersResponse {
    return {
      $type: QuerySellOrdersResponse.$type,
      sellOrders: Array.isArray(object?.sellOrders)
        ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrdersResponse): unknown {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e =>
        e ? SellOrderInfo.toJSON(e) : undefined,
      );
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrdersResponse>, I>>(
    object: I,
  ): QuerySellOrdersResponse {
    const message = createBaseQuerySellOrdersResponse();
    message.sellOrders =
      object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySellOrdersResponse.$type, QuerySellOrdersResponse);

function createBaseQuerySellOrdersByBatchRequest(): QuerySellOrdersByBatchRequest {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest',
    batchDenom: '',
    pagination: undefined,
  };
}

export const QuerySellOrdersByBatchRequest = {
  $type:
    'regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest' as const,

  encode(
    message: QuerySellOrdersByBatchRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySellOrdersByBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySellOrdersByBatchRequest {
    return {
      $type: QuerySellOrdersByBatchRequest.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrdersByBatchRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrdersByBatchRequest>, I>>(
    object: I,
  ): QuerySellOrdersByBatchRequest {
    const message = createBaseQuerySellOrdersByBatchRequest();
    message.batchDenom = object.batchDenom ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySellOrdersByBatchRequest.$type,
  QuerySellOrdersByBatchRequest,
);

function createBaseQuerySellOrdersByBatchResponse(): QuerySellOrdersByBatchResponse {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse',
    sellOrders: [],
    pagination: undefined,
  };
}

export const QuerySellOrdersByBatchResponse = {
  $type:
    'regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse' as const,

  encode(
    message: QuerySellOrdersByBatchResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySellOrdersByBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(
            SellOrderInfo.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QuerySellOrdersByBatchResponse {
    return {
      $type: QuerySellOrdersByBatchResponse.$type,
      sellOrders: Array.isArray(object?.sellOrders)
        ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrdersByBatchResponse): unknown {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e =>
        e ? SellOrderInfo.toJSON(e) : undefined,
      );
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrdersByBatchResponse>, I>>(
    object: I,
  ): QuerySellOrdersByBatchResponse {
    const message = createBaseQuerySellOrdersByBatchResponse();
    message.sellOrders =
      object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySellOrdersByBatchResponse.$type,
  QuerySellOrdersByBatchResponse,
);

function createBaseQuerySellOrdersBySellerRequest(): QuerySellOrdersBySellerRequest {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest',
    seller: '',
    pagination: undefined,
  };
}

export const QuerySellOrdersBySellerRequest = {
  $type:
    'regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest' as const,

  encode(
    message: QuerySellOrdersBySellerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.seller !== '') {
      writer.uint32(10).string(message.seller);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySellOrdersBySellerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersBySellerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySellOrdersBySellerRequest {
    return {
      $type: QuerySellOrdersBySellerRequest.$type,
      seller: isSet(object.seller) ? String(object.seller) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrdersBySellerRequest): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrdersBySellerRequest>, I>>(
    object: I,
  ): QuerySellOrdersBySellerRequest {
    const message = createBaseQuerySellOrdersBySellerRequest();
    message.seller = object.seller ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySellOrdersBySellerRequest.$type,
  QuerySellOrdersBySellerRequest,
);

function createBaseQuerySellOrdersBySellerResponse(): QuerySellOrdersBySellerResponse {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse',
    sellOrders: [],
    pagination: undefined,
  };
}

export const QuerySellOrdersBySellerResponse = {
  $type:
    'regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse' as const,

  encode(
    message: QuerySellOrdersBySellerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySellOrdersBySellerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersBySellerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(
            SellOrderInfo.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QuerySellOrdersBySellerResponse {
    return {
      $type: QuerySellOrdersBySellerResponse.$type,
      sellOrders: Array.isArray(object?.sellOrders)
        ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySellOrdersBySellerResponse): unknown {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e =>
        e ? SellOrderInfo.toJSON(e) : undefined,
      );
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellOrdersBySellerResponse>, I>>(
    object: I,
  ): QuerySellOrdersBySellerResponse {
    const message = createBaseQuerySellOrdersBySellerResponse();
    message.sellOrders =
      object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QuerySellOrdersBySellerResponse.$type,
  QuerySellOrdersBySellerResponse,
);

function createBaseQueryAllowedDenomsRequest(): QueryAllowedDenomsRequest {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest',
    pagination: undefined,
  };
}

export const QueryAllowedDenomsRequest = {
  $type: 'regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest' as const,

  encode(
    message: QueryAllowedDenomsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAllowedDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsRequest();
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

  fromJSON(object: any): QueryAllowedDenomsRequest {
    return {
      $type: QueryAllowedDenomsRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllowedDenomsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllowedDenomsRequest>, I>>(
    object: I,
  ): QueryAllowedDenomsRequest {
    const message = createBaseQueryAllowedDenomsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryAllowedDenomsRequest.$type,
  QueryAllowedDenomsRequest,
);

function createBaseQueryAllowedDenomsResponse(): QueryAllowedDenomsResponse {
  return {
    $type: 'regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse',
    allowedDenoms: [],
    pagination: undefined,
  };
}

export const QueryAllowedDenomsResponse = {
  $type: 'regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse' as const,

  encode(
    message: QueryAllowedDenomsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.allowedDenoms) {
      AllowedDenom.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllowedDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedDenoms.push(
            AllowedDenom.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QueryAllowedDenomsResponse {
    return {
      $type: QueryAllowedDenomsResponse.$type,
      allowedDenoms: Array.isArray(object?.allowedDenoms)
        ? object.allowedDenoms.map((e: any) => AllowedDenom.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllowedDenomsResponse): unknown {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map(e =>
        e ? AllowedDenom.toJSON(e) : undefined,
      );
    } else {
      obj.allowedDenoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllowedDenomsResponse>, I>>(
    object: I,
  ): QueryAllowedDenomsResponse {
    const message = createBaseQueryAllowedDenomsResponse();
    message.allowedDenoms =
      object.allowedDenoms?.map(e => AllowedDenom.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryAllowedDenomsResponse.$type,
  QueryAllowedDenomsResponse,
);

function createBaseSellOrderInfo(): SellOrderInfo {
  return {
    $type: 'regen.ecocredit.marketplace.v1.SellOrderInfo',
    id: Long.UZERO,
    seller: '',
    batchDenom: '',
    quantity: '',
    askDenom: '',
    askAmount: '',
    disableAutoRetire: false,
    expiration: undefined,
  };
}

export const SellOrderInfo = {
  $type: 'regen.ecocredit.marketplace.v1.SellOrderInfo' as const,

  encode(
    message: SellOrderInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.seller !== '') {
      writer.uint32(18).string(message.seller);
    }
    if (message.batchDenom !== '') {
      writer.uint32(26).string(message.batchDenom);
    }
    if (message.quantity !== '') {
      writer.uint32(34).string(message.quantity);
    }
    if (message.askDenom !== '') {
      writer.uint32(42).string(message.askDenom);
    }
    if (message.askAmount !== '') {
      writer.uint32(50).string(message.askAmount);
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(56).bool(message.disableAutoRetire);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.seller = reader.string();
          break;
        case 3:
          message.batchDenom = reader.string();
          break;
        case 4:
          message.quantity = reader.string();
          break;
        case 5:
          message.askDenom = reader.string();
          break;
        case 6:
          message.askAmount = reader.string();
          break;
        case 7:
          message.disableAutoRetire = reader.bool();
          break;
        case 9:
          message.expiration = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellOrderInfo {
    return {
      $type: SellOrderInfo.$type,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      seller: isSet(object.seller) ? String(object.seller) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      quantity: isSet(object.quantity) ? String(object.quantity) : '',
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : '',
      askAmount: isSet(object.askAmount) ? String(object.askAmount) : '',
      disableAutoRetire: isSet(object.disableAutoRetire)
        ? Boolean(object.disableAutoRetire)
        : false,
      expiration: isSet(object.expiration)
        ? fromJsonTimestamp(object.expiration)
        : undefined,
    };
  },

  toJSON(message: SellOrderInfo): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.seller !== undefined && (obj.seller = message.seller);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    message.askAmount !== undefined && (obj.askAmount = message.askAmount);
    message.disableAutoRetire !== undefined &&
      (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellOrderInfo>, I>>(
    object: I,
  ): SellOrderInfo {
    const message = createBaseSellOrderInfo();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.seller = object.seller ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.quantity = object.quantity ?? '';
    message.askDenom = object.askDenom ?? '';
    message.askAmount = object.askAmount ?? '';
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SellOrderInfo.$type, SellOrderInfo);

/** Msg is the regen.ecocredit.marketplace.v1 Query service. */
export interface Query {
  /** SellOrder queries a sell order by its unique identifier. */
  SellOrder(
    request: DeepPartial<QuerySellOrderRequest>,
  ): Promise<QuerySellOrderResponse>;
  /** SellOrders queries a paginated list of all sell orders. */
  SellOrders(
    request: DeepPartial<QuerySellOrdersRequest>,
  ): Promise<QuerySellOrdersResponse>;
  /**
   * SellOrdersByBatch queries a paginated list of all sell orders based on
   * the batch denom of the credits being sold.
   */
  SellOrdersByBatch(
    request: DeepPartial<QuerySellOrdersByBatchRequest>,
  ): Promise<QuerySellOrdersByBatchResponse>;
  /**
   * SellOrdersBySeller queries a paginated list of all sell orders based on the
   * account address of the seller.
   */
  SellOrdersBySeller(
    request: DeepPartial<QuerySellOrdersBySellerRequest>,
  ): Promise<QuerySellOrdersBySellerResponse>;
  /**
   * AllowedDenoms queries a paginated list of all bank denoms allowed to be
   * used in the marketplace.
   */
  AllowedDenoms(
    request: DeepPartial<QueryAllowedDenomsRequest>,
  ): Promise<QueryAllowedDenomsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SellOrder = this.SellOrder.bind(this);
    this.SellOrders = this.SellOrders.bind(this);
    this.SellOrdersByBatch = this.SellOrdersByBatch.bind(this);
    this.SellOrdersBySeller = this.SellOrdersBySeller.bind(this);
    this.AllowedDenoms = this.AllowedDenoms.bind(this);
  }
  SellOrder(
    request: DeepPartial<QuerySellOrderRequest>,
  ): Promise<QuerySellOrderResponse> {
    const fromPartial = QuerySellOrderRequest.fromPartial(request);
    const data = QuerySellOrderRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.marketplace.v1.Query',
      'SellOrder',
      data,
    );
    return promise.then(data =>
      QuerySellOrderResponse.decode(new _m0.Reader(data)),
    );
  }

  SellOrders(
    request: DeepPartial<QuerySellOrdersRequest>,
  ): Promise<QuerySellOrdersResponse> {
    const fromPartial = QuerySellOrdersRequest.fromPartial(request);
    const data = QuerySellOrdersRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.marketplace.v1.Query',
      'SellOrders',
      data,
    );
    return promise.then(data =>
      QuerySellOrdersResponse.decode(new _m0.Reader(data)),
    );
  }

  SellOrdersByBatch(
    request: DeepPartial<QuerySellOrdersByBatchRequest>,
  ): Promise<QuerySellOrdersByBatchResponse> {
    const fromPartial = QuerySellOrdersByBatchRequest.fromPartial(request);
    const data = QuerySellOrdersByBatchRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.marketplace.v1.Query',
      'SellOrdersByBatch',
      data,
    );
    return promise.then(data =>
      QuerySellOrdersByBatchResponse.decode(new _m0.Reader(data)),
    );
  }

  SellOrdersBySeller(
    request: DeepPartial<QuerySellOrdersBySellerRequest>,
  ): Promise<QuerySellOrdersBySellerResponse> {
    const fromPartial = QuerySellOrdersBySellerRequest.fromPartial(request);
    const data = QuerySellOrdersBySellerRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.marketplace.v1.Query',
      'SellOrdersBySeller',
      data,
    );
    return promise.then(data =>
      QuerySellOrdersBySellerResponse.decode(new _m0.Reader(data)),
    );
  }

  AllowedDenoms(
    request: DeepPartial<QueryAllowedDenomsRequest>,
  ): Promise<QueryAllowedDenomsResponse> {
    const fromPartial = QueryAllowedDenomsRequest.fromPartial(request);
    const data = QueryAllowedDenomsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.marketplace.v1.Query',
      'AllowedDenoms',
      data,
    );
    return promise.then(data =>
      QueryAllowedDenomsResponse.decode(new _m0.Reader(data)),
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
