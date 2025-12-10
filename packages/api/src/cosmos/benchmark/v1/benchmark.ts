//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Op is a message describing a benchmark operation. */
export interface Op {
  seed: bigint;
  actor: string;
  keyLength: bigint;
  valueLength: bigint;
  iterations: number;
  delete: boolean;
  exists: boolean;
}
export interface OpProtoMsg {
  typeUrl: "/cosmos.benchmark.v1.Op";
  value: Uint8Array;
}
/** Op is a message describing a benchmark operation. */
export interface OpAmino {
  seed?: string;
  actor?: string;
  key_length?: string;
  value_length?: string;
  iterations?: number;
  delete?: boolean;
  exists?: boolean;
}
export interface OpAminoMsg {
  type: "cosmos-sdk/Op";
  value: OpAmino;
}
/** Op is a message describing a benchmark operation. */
export interface OpSDKType {
  seed: bigint;
  actor: string;
  key_length: bigint;
  value_length: bigint;
  iterations: number;
  delete: boolean;
  exists: boolean;
}
function createBaseOp(): Op {
  return {
    seed: BigInt(0),
    actor: "",
    keyLength: BigInt(0),
    valueLength: BigInt(0),
    iterations: 0,
    delete: false,
    exists: false
  };
}
export const Op = {
  typeUrl: "/cosmos.benchmark.v1.Op",
  encode(message: Op, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seed !== BigInt(0)) {
      writer.uint32(8).uint64(message.seed);
    }
    if (message.actor !== "") {
      writer.uint32(18).string(message.actor);
    }
    if (message.keyLength !== BigInt(0)) {
      writer.uint32(24).uint64(message.keyLength);
    }
    if (message.valueLength !== BigInt(0)) {
      writer.uint32(32).uint64(message.valueLength);
    }
    if (message.iterations !== 0) {
      writer.uint32(40).uint32(message.iterations);
    }
    if (message.delete === true) {
      writer.uint32(48).bool(message.delete);
    }
    if (message.exists === true) {
      writer.uint32(56).bool(message.exists);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Op {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.uint64();
          break;
        case 2:
          message.actor = reader.string();
          break;
        case 3:
          message.keyLength = reader.uint64();
          break;
        case 4:
          message.valueLength = reader.uint64();
          break;
        case 5:
          message.iterations = reader.uint32();
          break;
        case 6:
          message.delete = reader.bool();
          break;
        case 7:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Op>): Op {
    const message = createBaseOp();
    message.seed = object.seed !== undefined && object.seed !== null ? BigInt(object.seed.toString()) : BigInt(0);
    message.actor = object.actor ?? "";
    message.keyLength = object.keyLength !== undefined && object.keyLength !== null ? BigInt(object.keyLength.toString()) : BigInt(0);
    message.valueLength = object.valueLength !== undefined && object.valueLength !== null ? BigInt(object.valueLength.toString()) : BigInt(0);
    message.iterations = object.iterations ?? 0;
    message.delete = object.delete ?? false;
    message.exists = object.exists ?? false;
    return message;
  },
  fromAmino(object: OpAmino): Op {
    const message = createBaseOp();
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = BigInt(object.seed);
    }
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = object.actor;
    }
    if (object.key_length !== undefined && object.key_length !== null) {
      message.keyLength = BigInt(object.key_length);
    }
    if (object.value_length !== undefined && object.value_length !== null) {
      message.valueLength = BigInt(object.value_length);
    }
    if (object.iterations !== undefined && object.iterations !== null) {
      message.iterations = object.iterations;
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = object.delete;
    }
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    return message;
  },
  toAmino(message: Op): OpAmino {
    const obj: any = {};
    obj.seed = message.seed !== BigInt(0) ? message.seed?.toString() : undefined;
    obj.actor = message.actor === "" ? undefined : message.actor;
    obj.key_length = message.keyLength !== BigInt(0) ? message.keyLength?.toString() : undefined;
    obj.value_length = message.valueLength !== BigInt(0) ? message.valueLength?.toString() : undefined;
    obj.iterations = message.iterations === 0 ? undefined : message.iterations;
    obj.delete = message.delete === false ? undefined : message.delete;
    obj.exists = message.exists === false ? undefined : message.exists;
    return obj;
  },
  fromAminoMsg(object: OpAminoMsg): Op {
    return Op.fromAmino(object.value);
  },
  toAminoMsg(message: Op): OpAminoMsg {
    return {
      type: "cosmos-sdk/Op",
      value: Op.toAmino(message)
    };
  },
  fromProtoMsg(message: OpProtoMsg): Op {
    return Op.decode(message.value);
  },
  toProto(message: Op): Uint8Array {
    return Op.encode(message).finish();
  },
  toProtoMsg(message: Op): OpProtoMsg {
    return {
      typeUrl: "/cosmos.benchmark.v1.Op",
      value: Op.encode(message).finish()
    };
  }
};