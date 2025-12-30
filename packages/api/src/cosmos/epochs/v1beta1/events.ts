//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventEpochEnd is an event emitted when an epoch end. */
export interface EventEpochEnd {
  epochNumber: bigint;
}
export interface EventEpochEndProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.EventEpochEnd";
  value: Uint8Array;
}
/** EventEpochEnd is an event emitted when an epoch end. */
export interface EventEpochEndAmino {
  epoch_number?: string;
}
export interface EventEpochEndAminoMsg {
  type: "cosmos-sdk/EventEpochEnd";
  value: EventEpochEndAmino;
}
/** EventEpochEnd is an event emitted when an epoch end. */
export interface EventEpochEndSDKType {
  epoch_number: bigint;
}
/** EventEpochStart is an event emitted when an epoch start. */
export interface EventEpochStart {
  epochNumber: bigint;
  epochStartTime: bigint;
}
export interface EventEpochStartProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.EventEpochStart";
  value: Uint8Array;
}
/** EventEpochStart is an event emitted when an epoch start. */
export interface EventEpochStartAmino {
  epoch_number?: string;
  epoch_start_time?: string;
}
export interface EventEpochStartAminoMsg {
  type: "cosmos-sdk/EventEpochStart";
  value: EventEpochStartAmino;
}
/** EventEpochStart is an event emitted when an epoch start. */
export interface EventEpochStartSDKType {
  epoch_number: bigint;
  epoch_start_time: bigint;
}
function createBaseEventEpochEnd(): EventEpochEnd {
  return {
    epochNumber: BigInt(0)
  };
}
export const EventEpochEnd = {
  typeUrl: "/cosmos.epochs.v1beta1.EventEpochEnd",
  encode(message: EventEpochEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEpochEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventEpochEnd>): EventEpochEnd {
    const message = createBaseEventEpochEnd();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventEpochEndAmino): EventEpochEnd {
    const message = createBaseEventEpochEnd();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: EventEpochEnd): EventEpochEndAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventEpochEndAminoMsg): EventEpochEnd {
    return EventEpochEnd.fromAmino(object.value);
  },
  toAminoMsg(message: EventEpochEnd): EventEpochEndAminoMsg {
    return {
      type: "cosmos-sdk/EventEpochEnd",
      value: EventEpochEnd.toAmino(message)
    };
  },
  fromProtoMsg(message: EventEpochEndProtoMsg): EventEpochEnd {
    return EventEpochEnd.decode(message.value);
  },
  toProto(message: EventEpochEnd): Uint8Array {
    return EventEpochEnd.encode(message).finish();
  },
  toProtoMsg(message: EventEpochEnd): EventEpochEndProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.EventEpochEnd",
      value: EventEpochEnd.encode(message).finish()
    };
  }
};
function createBaseEventEpochStart(): EventEpochStart {
  return {
    epochNumber: BigInt(0),
    epochStartTime: BigInt(0)
  };
}
export const EventEpochStart = {
  typeUrl: "/cosmos.epochs.v1beta1.EventEpochStart",
  encode(message: EventEpochStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.epochStartTime !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEpochStart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.epochStartTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventEpochStart>): EventEpochStart {
    const message = createBaseEventEpochStart();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.epochStartTime = object.epochStartTime !== undefined && object.epochStartTime !== null ? BigInt(object.epochStartTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventEpochStartAmino): EventEpochStart {
    const message = createBaseEventEpochStart();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.epoch_start_time !== undefined && object.epoch_start_time !== null) {
      message.epochStartTime = BigInt(object.epoch_start_time);
    }
    return message;
  },
  toAmino(message: EventEpochStart): EventEpochStartAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    obj.epoch_start_time = message.epochStartTime !== BigInt(0) ? message.epochStartTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventEpochStartAminoMsg): EventEpochStart {
    return EventEpochStart.fromAmino(object.value);
  },
  toAminoMsg(message: EventEpochStart): EventEpochStartAminoMsg {
    return {
      type: "cosmos-sdk/EventEpochStart",
      value: EventEpochStart.toAmino(message)
    };
  },
  fromProtoMsg(message: EventEpochStartProtoMsg): EventEpochStart {
    return EventEpochStart.decode(message.value);
  },
  toProto(message: EventEpochStart): Uint8Array {
    return EventEpochStart.encode(message).finish();
  },
  toProtoMsg(message: EventEpochStart): EventEpochStartProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.EventEpochStart",
      value: EventEpochStart.encode(message).finish()
    };
  }
};