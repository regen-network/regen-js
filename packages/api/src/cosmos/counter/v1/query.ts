//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryGetCountRequest defines the request type for querying x/mock count. */
export interface QueryGetCountRequest {}
export interface QueryGetCountRequestProtoMsg {
  typeUrl: "/cosmos.counter.v1.QueryGetCountRequest";
  value: Uint8Array;
}
/** QueryGetCountRequest defines the request type for querying x/mock count. */
export interface QueryGetCountRequestAmino {}
export interface QueryGetCountRequestAminoMsg {
  type: "cosmos-sdk/QueryGetCountRequest";
  value: QueryGetCountRequestAmino;
}
/** QueryGetCountRequest defines the request type for querying x/mock count. */
export interface QueryGetCountRequestSDKType {}
/** QueryGetCountResponse defines the response type for querying x/mock count. */
export interface QueryGetCountResponse {
  totalCount: bigint;
}
export interface QueryGetCountResponseProtoMsg {
  typeUrl: "/cosmos.counter.v1.QueryGetCountResponse";
  value: Uint8Array;
}
/** QueryGetCountResponse defines the response type for querying x/mock count. */
export interface QueryGetCountResponseAmino {
  total_count?: string;
}
export interface QueryGetCountResponseAminoMsg {
  type: "cosmos-sdk/QueryGetCountResponse";
  value: QueryGetCountResponseAmino;
}
/** QueryGetCountResponse defines the response type for querying x/mock count. */
export interface QueryGetCountResponseSDKType {
  total_count: bigint;
}
function createBaseQueryGetCountRequest(): QueryGetCountRequest {
  return {};
}
export const QueryGetCountRequest = {
  typeUrl: "/cosmos.counter.v1.QueryGetCountRequest",
  encode(_: QueryGetCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountRequest();
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
  fromPartial(_: Partial<QueryGetCountRequest>): QueryGetCountRequest {
    const message = createBaseQueryGetCountRequest();
    return message;
  },
  fromAmino(_: QueryGetCountRequestAmino): QueryGetCountRequest {
    const message = createBaseQueryGetCountRequest();
    return message;
  },
  toAmino(_: QueryGetCountRequest): QueryGetCountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetCountRequestAminoMsg): QueryGetCountRequest {
    return QueryGetCountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetCountRequest): QueryGetCountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGetCountRequest",
      value: QueryGetCountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetCountRequestProtoMsg): QueryGetCountRequest {
    return QueryGetCountRequest.decode(message.value);
  },
  toProto(message: QueryGetCountRequest): Uint8Array {
    return QueryGetCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCountRequest): QueryGetCountRequestProtoMsg {
    return {
      typeUrl: "/cosmos.counter.v1.QueryGetCountRequest",
      value: QueryGetCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCountResponse(): QueryGetCountResponse {
  return {
    totalCount: BigInt(0)
  };
}
export const QueryGetCountResponse = {
  typeUrl: "/cosmos.counter.v1.QueryGetCountResponse",
  encode(message: QueryGetCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).int64(message.totalCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetCountResponse>): QueryGetCountResponse {
    const message = createBaseQueryGetCountResponse();
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetCountResponseAmino): QueryGetCountResponse {
    const message = createBaseQueryGetCountResponse();
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    return message;
  },
  toAmino(message: QueryGetCountResponse): QueryGetCountResponseAmino {
    const obj: any = {};
    obj.total_count = message.totalCount !== BigInt(0) ? message.totalCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCountResponseAminoMsg): QueryGetCountResponse {
    return QueryGetCountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetCountResponse): QueryGetCountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGetCountResponse",
      value: QueryGetCountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetCountResponseProtoMsg): QueryGetCountResponse {
    return QueryGetCountResponse.decode(message.value);
  },
  toProto(message: QueryGetCountResponse): Uint8Array {
    return QueryGetCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCountResponse): QueryGetCountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.counter.v1.QueryGetCountResponse",
      value: QueryGetCountResponse.encode(message).finish()
    };
  }
};