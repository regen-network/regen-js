//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { ContinuousFund, ContinuousFundAmino, ContinuousFundSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}
export interface QueryCommunityPoolRequestProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolRequest";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestAmino {}
export interface QueryCommunityPoolRequestAminoMsg {
  type: "cosmos-sdk/QueryCommunityPoolRequest";
  value: QueryCommunityPoolRequestAmino;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestSDKType {}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: Coin[];
}
export interface QueryCommunityPoolResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolResponse";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseAmino {
  /** pool defines community pool's coins. */
  pool?: CoinAmino[];
}
export interface QueryCommunityPoolResponseAminoMsg {
  type: "cosmos-sdk/QueryCommunityPoolResponse";
  value: QueryCommunityPoolResponseAmino;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseSDKType {
  pool: CoinSDKType[];
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundRequest {
  /** recipient is the recipient address to query unclaimed budget amount for. */
  recipient: string;
}
export interface QueryContinuousFundRequestProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundRequest";
  value: Uint8Array;
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundRequestAmino {
  /** recipient is the recipient address to query unclaimed budget amount for. */
  recipient?: string;
}
export interface QueryContinuousFundRequestAminoMsg {
  type: "cosmos-sdk/QueryContinuousFundRequest";
  value: QueryContinuousFundRequestAmino;
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundRequestSDKType {
  recipient: string;
}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundResponse {
  /** ContinuousFunds is the given continuous fund returned in the query. */
  continuousFund: ContinuousFund;
}
export interface QueryContinuousFundResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundResponse";
  value: Uint8Array;
}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundResponseAmino {
  /** ContinuousFunds is the given continuous fund returned in the query. */
  continuous_fund?: ContinuousFundAmino;
}
export interface QueryContinuousFundResponseAminoMsg {
  type: "cosmos-sdk/QueryContinuousFundResponse";
  value: QueryContinuousFundResponseAmino;
}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFund
 * RPC method.
 */
export interface QueryContinuousFundResponseSDKType {
  continuous_fund: ContinuousFundSDKType;
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsRequest {}
export interface QueryContinuousFundsRequestProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsRequest";
  value: Uint8Array;
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsRequestAmino {}
export interface QueryContinuousFundsRequestAminoMsg {
  type: "cosmos-sdk/QueryContinuousFundsRequest";
  value: QueryContinuousFundsRequestAmino;
}
/**
 * QueryContinuousFundRequest is the request type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsRequestSDKType {}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsResponse {
  /** ContinuousFunds defines all continuous funds in state. */
  continuousFunds: ContinuousFund[];
}
export interface QueryContinuousFundsResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsResponse";
  value: Uint8Array;
}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsResponseAmino {
  /** ContinuousFunds defines all continuous funds in state. */
  continuous_funds?: ContinuousFundAmino[];
}
export interface QueryContinuousFundsResponseAminoMsg {
  type: "cosmos-sdk/QueryContinuousFundsResponse";
  value: QueryContinuousFundsResponseAmino;
}
/**
 * QueryUnclaimedBudgetResponse is the response type for the Query/ContinuousFunds
 * RPC method.
 */
export interface QueryContinuousFundsResponseSDKType {
  continuous_funds: ContinuousFundSDKType[];
}
/** QueryParamsRequest is the response type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the response type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the response type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolRequest",
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  fromAmino(_: QueryCommunityPoolRequestAmino): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  toAmino(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolRequestAminoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCommunityPoolRequestProtoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.decode(message.value);
  },
  toProto(message: QueryCommunityPoolRequest): Uint8Array {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: []
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolResponse",
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommunityPoolResponseAmino): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolResponseAminoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCommunityPoolResponseProtoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.decode(message.value);
  },
  toProto(message: QueryCommunityPoolResponse): Uint8Array {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContinuousFundRequest(): QueryContinuousFundRequest {
  return {
    recipient: ""
  };
}
export const QueryContinuousFundRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundRequest",
  encode(message: QueryContinuousFundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryContinuousFundRequest>): QueryContinuousFundRequest {
    const message = createBaseQueryContinuousFundRequest();
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: QueryContinuousFundRequestAmino): QueryContinuousFundRequest {
    const message = createBaseQueryContinuousFundRequest();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: QueryContinuousFundRequest): QueryContinuousFundRequestAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: QueryContinuousFundRequestAminoMsg): QueryContinuousFundRequest {
    return QueryContinuousFundRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContinuousFundRequest): QueryContinuousFundRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryContinuousFundRequest",
      value: QueryContinuousFundRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContinuousFundRequestProtoMsg): QueryContinuousFundRequest {
    return QueryContinuousFundRequest.decode(message.value);
  },
  toProto(message: QueryContinuousFundRequest): Uint8Array {
    return QueryContinuousFundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContinuousFundRequest): QueryContinuousFundRequestProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundRequest",
      value: QueryContinuousFundRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContinuousFundResponse(): QueryContinuousFundResponse {
  return {
    continuousFund: ContinuousFund.fromPartial({})
  };
}
export const QueryContinuousFundResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundResponse",
  encode(message: QueryContinuousFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.continuousFund !== undefined) {
      ContinuousFund.encode(message.continuousFund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFund = ContinuousFund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryContinuousFundResponse>): QueryContinuousFundResponse {
    const message = createBaseQueryContinuousFundResponse();
    message.continuousFund = object.continuousFund !== undefined && object.continuousFund !== null ? ContinuousFund.fromPartial(object.continuousFund) : undefined;
    return message;
  },
  fromAmino(object: QueryContinuousFundResponseAmino): QueryContinuousFundResponse {
    const message = createBaseQueryContinuousFundResponse();
    if (object.continuous_fund !== undefined && object.continuous_fund !== null) {
      message.continuousFund = ContinuousFund.fromAmino(object.continuous_fund);
    }
    return message;
  },
  toAmino(message: QueryContinuousFundResponse): QueryContinuousFundResponseAmino {
    const obj: any = {};
    obj.continuous_fund = message.continuousFund ? ContinuousFund.toAmino(message.continuousFund) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContinuousFundResponseAminoMsg): QueryContinuousFundResponse {
    return QueryContinuousFundResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContinuousFundResponse): QueryContinuousFundResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryContinuousFundResponse",
      value: QueryContinuousFundResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContinuousFundResponseProtoMsg): QueryContinuousFundResponse {
    return QueryContinuousFundResponse.decode(message.value);
  },
  toProto(message: QueryContinuousFundResponse): Uint8Array {
    return QueryContinuousFundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContinuousFundResponse): QueryContinuousFundResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundResponse",
      value: QueryContinuousFundResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContinuousFundsRequest(): QueryContinuousFundsRequest {
  return {};
}
export const QueryContinuousFundsRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsRequest",
  encode(_: QueryContinuousFundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryContinuousFundsRequest>): QueryContinuousFundsRequest {
    const message = createBaseQueryContinuousFundsRequest();
    return message;
  },
  fromAmino(_: QueryContinuousFundsRequestAmino): QueryContinuousFundsRequest {
    const message = createBaseQueryContinuousFundsRequest();
    return message;
  },
  toAmino(_: QueryContinuousFundsRequest): QueryContinuousFundsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryContinuousFundsRequestAminoMsg): QueryContinuousFundsRequest {
    return QueryContinuousFundsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContinuousFundsRequest): QueryContinuousFundsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryContinuousFundsRequest",
      value: QueryContinuousFundsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContinuousFundsRequestProtoMsg): QueryContinuousFundsRequest {
    return QueryContinuousFundsRequest.decode(message.value);
  },
  toProto(message: QueryContinuousFundsRequest): Uint8Array {
    return QueryContinuousFundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContinuousFundsRequest): QueryContinuousFundsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsRequest",
      value: QueryContinuousFundsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContinuousFundsResponse(): QueryContinuousFundsResponse {
  return {
    continuousFunds: []
  };
}
export const QueryContinuousFundsResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsResponse",
  encode(message: QueryContinuousFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContinuousFundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContinuousFundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFunds.push(ContinuousFund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryContinuousFundsResponse>): QueryContinuousFundsResponse {
    const message = createBaseQueryContinuousFundsResponse();
    message.continuousFunds = object.continuousFunds?.map(e => ContinuousFund.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryContinuousFundsResponseAmino): QueryContinuousFundsResponse {
    const message = createBaseQueryContinuousFundsResponse();
    message.continuousFunds = object.continuous_funds?.map(e => ContinuousFund.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryContinuousFundsResponse): QueryContinuousFundsResponseAmino {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuous_funds = message.continuousFunds.map(e => e ? ContinuousFund.toAmino(e) : undefined);
    } else {
      obj.continuous_funds = message.continuousFunds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryContinuousFundsResponseAminoMsg): QueryContinuousFundsResponse {
    return QueryContinuousFundsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryContinuousFundsResponse): QueryContinuousFundsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryContinuousFundsResponse",
      value: QueryContinuousFundsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryContinuousFundsResponseProtoMsg): QueryContinuousFundsResponse {
    return QueryContinuousFundsResponse.decode(message.value);
  },
  toProto(message: QueryContinuousFundsResponse): Uint8Array {
    return QueryContinuousFundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContinuousFundsResponse): QueryContinuousFundsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsResponse",
      value: QueryContinuousFundsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.protocolpool.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.protocolpool.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};