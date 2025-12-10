//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgIncreaseCounter defines a count Msg service counter. */
export interface MsgIncreaseCounter {
  /** signer is the address that controls the module (defaults to x/gov unless overwritten). */
  signer: string;
  /** count is the number of times to increment the counter. */
  count: bigint;
}
export interface MsgIncreaseCounterProtoMsg {
  typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter";
  value: Uint8Array;
}
/** MsgIncreaseCounter defines a count Msg service counter. */
export interface MsgIncreaseCounterAmino {
  /** signer is the address that controls the module (defaults to x/gov unless overwritten). */
  signer?: string;
  /** count is the number of times to increment the counter. */
  count?: string;
}
export interface MsgIncreaseCounterAminoMsg {
  type: "cosmos-sdk/increase_counter";
  value: MsgIncreaseCounterAmino;
}
/** MsgIncreaseCounter defines a count Msg service counter. */
export interface MsgIncreaseCounterSDKType {
  signer: string;
  count: bigint;
}
/** MsgIncreaseCountResponse is the Msg/Counter response type. */
export interface MsgIncreaseCountResponse {
  /** new_count is the number of times the counter was incremented. */
  newCount: bigint;
}
export interface MsgIncreaseCountResponseProtoMsg {
  typeUrl: "/cosmos.counter.v1.MsgIncreaseCountResponse";
  value: Uint8Array;
}
/** MsgIncreaseCountResponse is the Msg/Counter response type. */
export interface MsgIncreaseCountResponseAmino {
  /** new_count is the number of times the counter was incremented. */
  new_count?: string;
}
export interface MsgIncreaseCountResponseAminoMsg {
  type: "cosmos-sdk/MsgIncreaseCountResponse";
  value: MsgIncreaseCountResponseAmino;
}
/** MsgIncreaseCountResponse is the Msg/Counter response type. */
export interface MsgIncreaseCountResponseSDKType {
  new_count: bigint;
}
function createBaseMsgIncreaseCounter(): MsgIncreaseCounter {
  return {
    signer: "",
    count: BigInt(0)
  };
}
export const MsgIncreaseCounter = {
  typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
  encode(message: MsgIncreaseCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).int64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.count = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgIncreaseCounter>): MsgIncreaseCounter {
    const message = createBaseMsgIncreaseCounter();
    message.signer = object.signer ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgIncreaseCounterAmino): MsgIncreaseCounter {
    const message = createBaseMsgIncreaseCounter();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: MsgIncreaseCounter): MsgIncreaseCounterAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgIncreaseCounterAminoMsg): MsgIncreaseCounter {
    return MsgIncreaseCounter.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIncreaseCounter): MsgIncreaseCounterAminoMsg {
    return {
      type: "cosmos-sdk/increase_counter",
      value: MsgIncreaseCounter.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIncreaseCounterProtoMsg): MsgIncreaseCounter {
    return MsgIncreaseCounter.decode(message.value);
  },
  toProto(message: MsgIncreaseCounter): Uint8Array {
    return MsgIncreaseCounter.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreaseCounter): MsgIncreaseCounterProtoMsg {
    return {
      typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
      value: MsgIncreaseCounter.encode(message).finish()
    };
  }
};
function createBaseMsgIncreaseCountResponse(): MsgIncreaseCountResponse {
  return {
    newCount: BigInt(0)
  };
}
export const MsgIncreaseCountResponse = {
  typeUrl: "/cosmos.counter.v1.MsgIncreaseCountResponse",
  encode(message: MsgIncreaseCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newCount !== BigInt(0)) {
      writer.uint32(8).int64(message.newCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgIncreaseCountResponse>): MsgIncreaseCountResponse {
    const message = createBaseMsgIncreaseCountResponse();
    message.newCount = object.newCount !== undefined && object.newCount !== null ? BigInt(object.newCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgIncreaseCountResponseAmino): MsgIncreaseCountResponse {
    const message = createBaseMsgIncreaseCountResponse();
    if (object.new_count !== undefined && object.new_count !== null) {
      message.newCount = BigInt(object.new_count);
    }
    return message;
  },
  toAmino(message: MsgIncreaseCountResponse): MsgIncreaseCountResponseAmino {
    const obj: any = {};
    obj.new_count = message.newCount !== BigInt(0) ? message.newCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgIncreaseCountResponseAminoMsg): MsgIncreaseCountResponse {
    return MsgIncreaseCountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIncreaseCountResponse): MsgIncreaseCountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgIncreaseCountResponse",
      value: MsgIncreaseCountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIncreaseCountResponseProtoMsg): MsgIncreaseCountResponse {
    return MsgIncreaseCountResponse.decode(message.value);
  },
  toProto(message: MsgIncreaseCountResponse): Uint8Array {
    return MsgIncreaseCountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreaseCountResponse): MsgIncreaseCountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.counter.v1.MsgIncreaseCountResponse",
      value: MsgIncreaseCountResponse.encode(message).finish()
    };
  }
};