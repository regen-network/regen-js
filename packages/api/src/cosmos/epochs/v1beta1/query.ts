//@ts-nocheck
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequest {}
export interface QueryEpochInfosRequestProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosRequest";
  value: Uint8Array;
}
/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequestAmino {}
export interface QueryEpochInfosRequestAminoMsg {
  type: "cosmos-sdk/QueryEpochInfosRequest";
  value: QueryEpochInfosRequestAmino;
}
/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequestSDKType {}
/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponse {
  epochs: EpochInfo[];
}
export interface QueryEpochInfosResponseProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosResponse";
  value: Uint8Array;
}
/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponseAmino {
  epochs?: EpochInfoAmino[];
}
export interface QueryEpochInfosResponseAminoMsg {
  type: "cosmos-sdk/QueryEpochInfosResponse";
  value: QueryEpochInfosResponseAmino;
}
/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponseSDKType {
  epochs: EpochInfoSDKType[];
}
/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochRequest";
  value: Uint8Array;
}
/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequestAmino {
  identifier?: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "cosmos-sdk/QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponse {
  currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochResponse";
  value: Uint8Array;
}
/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponseAmino {
  current_epoch?: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "cosmos-sdk/QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: bigint;
}
function createBaseQueryEpochInfosRequest(): QueryEpochInfosRequest {
  return {};
}
export const QueryEpochInfosRequest = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosRequest",
  encode(_: QueryEpochInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfosRequest();
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
  fromPartial(_: Partial<QueryEpochInfosRequest>): QueryEpochInfosRequest {
    const message = createBaseQueryEpochInfosRequest();
    return message;
  },
  fromAmino(_: QueryEpochInfosRequestAmino): QueryEpochInfosRequest {
    const message = createBaseQueryEpochInfosRequest();
    return message;
  },
  toAmino(_: QueryEpochInfosRequest): QueryEpochInfosRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfosRequestAminoMsg): QueryEpochInfosRequest {
    return QueryEpochInfosRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEpochInfosRequest): QueryEpochInfosRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryEpochInfosRequest",
      value: QueryEpochInfosRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryEpochInfosRequestProtoMsg): QueryEpochInfosRequest {
    return QueryEpochInfosRequest.decode(message.value);
  },
  toProto(message: QueryEpochInfosRequest): Uint8Array {
    return QueryEpochInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfosRequest): QueryEpochInfosRequestProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosRequest",
      value: QueryEpochInfosRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfosResponse(): QueryEpochInfosResponse {
  return {
    epochs: []
  };
}
export const QueryEpochInfosResponse = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosResponse",
  encode(message: QueryEpochInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEpochInfosResponse>): QueryEpochInfosResponse {
    const message = createBaseQueryEpochInfosResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEpochInfosResponseAmino): QueryEpochInfosResponse {
    const message = createBaseQueryEpochInfosResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEpochInfosResponse): QueryEpochInfosResponseAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = message.epochs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfosResponseAminoMsg): QueryEpochInfosResponse {
    return QueryEpochInfosResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEpochInfosResponse): QueryEpochInfosResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryEpochInfosResponse",
      value: QueryEpochInfosResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryEpochInfosResponseProtoMsg): QueryEpochInfosResponse {
    return QueryEpochInfosResponse.decode(message.value);
  },
  toProto(message: QueryEpochInfosResponse): Uint8Array {
    return QueryEpochInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfosResponse): QueryEpochInfosResponseProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosResponse",
      value: QueryEpochInfosResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: ""
  };
}
export const QueryCurrentEpochRequest = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochRequest",
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: BigInt(0)
  };
}
export const QueryCurrentEpochResponse = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochResponse",
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  }
};