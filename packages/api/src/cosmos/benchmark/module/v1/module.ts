//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the benchmark module. */
export interface Module {
  genesisParams?: GeneratorParams;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.benchmark.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the benchmark module. */
export interface ModuleAmino {
  genesis_params?: GeneratorParamsAmino;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** Module is the config object of the benchmark module. */
export interface ModuleSDKType {
  genesis_params?: GeneratorParamsSDKType;
}
/** GenesisParams defines the genesis parameters for the benchmark module. */
export interface GeneratorParams {
  /** seed is the seed for the random number generator. */
  seed: bigint;
  /** bucket_count is the number of store keys to uniformly distribute genesis_count keys across. */
  bucketCount: bigint;
  /** key_mean is the mean size (in normal distribution) of keys in each bucket. */
  keyMean: bigint;
  /** key_std_dev is the standard deviation of key sizes in each bucket. */
  keyStdDev: bigint;
  /** value_mean is the mean size (in normal distribution) of values in each bucket. */
  valueMean: bigint;
  /** value_std_dev is the standard deviation of value sizes in each bucket. */
  valueStdDev: bigint;
  /** genesis_count is the number of keys to insert in the store, distributed across all buckets. */
  genesisCount: bigint;
  /** insert_weight is the weight of insert operations. */
  insertWeight: number;
  /** update_weight is the weight of update operations. */
  updateWeight: number;
  /** get_weight is the weight of get operations. */
  getWeight: number;
  /** delete_weight is the weight of delete operations. */
  deleteWeight: number;
}
export interface GeneratorParamsProtoMsg {
  typeUrl: "/cosmos.benchmark.module.v1.GeneratorParams";
  value: Uint8Array;
}
/** GenesisParams defines the genesis parameters for the benchmark module. */
export interface GeneratorParamsAmino {
  /** seed is the seed for the random number generator. */
  seed?: string;
  /** bucket_count is the number of store keys to uniformly distribute genesis_count keys across. */
  bucket_count?: string;
  /** key_mean is the mean size (in normal distribution) of keys in each bucket. */
  key_mean?: string;
  /** key_std_dev is the standard deviation of key sizes in each bucket. */
  key_std_dev?: string;
  /** value_mean is the mean size (in normal distribution) of values in each bucket. */
  value_mean?: string;
  /** value_std_dev is the standard deviation of value sizes in each bucket. */
  value_std_dev?: string;
  /** genesis_count is the number of keys to insert in the store, distributed across all buckets. */
  genesis_count?: string;
  /** insert_weight is the weight of insert operations. */
  insert_weight?: number;
  /** update_weight is the weight of update operations. */
  update_weight?: number;
  /** get_weight is the weight of get operations. */
  get_weight?: number;
  /** delete_weight is the weight of delete operations. */
  delete_weight?: number;
}
export interface GeneratorParamsAminoMsg {
  type: "cosmos-sdk/GeneratorParams";
  value: GeneratorParamsAmino;
}
/** GenesisParams defines the genesis parameters for the benchmark module. */
export interface GeneratorParamsSDKType {
  seed: bigint;
  bucket_count: bigint;
  key_mean: bigint;
  key_std_dev: bigint;
  value_mean: bigint;
  value_std_dev: bigint;
  genesis_count: bigint;
  insert_weight: number;
  update_weight: number;
  get_weight: number;
  delete_weight: number;
}
function createBaseModule(): Module {
  return {
    genesisParams: undefined
  };
}
export const Module = {
  typeUrl: "/cosmos.benchmark.module.v1.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisParams !== undefined) {
      GeneratorParams.encode(message.genesisParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisParams = GeneratorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.genesisParams = object.genesisParams !== undefined && object.genesisParams !== null ? GeneratorParams.fromPartial(object.genesisParams) : undefined;
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.genesis_params !== undefined && object.genesis_params !== null) {
      message.genesisParams = GeneratorParams.fromAmino(object.genesis_params);
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.genesis_params = message.genesisParams ? GeneratorParams.toAmino(message.genesisParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.benchmark.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
function createBaseGeneratorParams(): GeneratorParams {
  return {
    seed: BigInt(0),
    bucketCount: BigInt(0),
    keyMean: BigInt(0),
    keyStdDev: BigInt(0),
    valueMean: BigInt(0),
    valueStdDev: BigInt(0),
    genesisCount: BigInt(0),
    insertWeight: 0,
    updateWeight: 0,
    getWeight: 0,
    deleteWeight: 0
  };
}
export const GeneratorParams = {
  typeUrl: "/cosmos.benchmark.module.v1.GeneratorParams",
  encode(message: GeneratorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seed !== BigInt(0)) {
      writer.uint32(8).uint64(message.seed);
    }
    if (message.bucketCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.bucketCount);
    }
    if (message.keyMean !== BigInt(0)) {
      writer.uint32(24).uint64(message.keyMean);
    }
    if (message.keyStdDev !== BigInt(0)) {
      writer.uint32(32).uint64(message.keyStdDev);
    }
    if (message.valueMean !== BigInt(0)) {
      writer.uint32(48).uint64(message.valueMean);
    }
    if (message.valueStdDev !== BigInt(0)) {
      writer.uint32(56).uint64(message.valueStdDev);
    }
    if (message.genesisCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.genesisCount);
    }
    if (message.insertWeight !== 0) {
      writer.uint32(77).float(message.insertWeight);
    }
    if (message.updateWeight !== 0) {
      writer.uint32(85).float(message.updateWeight);
    }
    if (message.getWeight !== 0) {
      writer.uint32(101).float(message.getWeight);
    }
    if (message.deleteWeight !== 0) {
      writer.uint32(93).float(message.deleteWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.uint64();
          break;
        case 2:
          message.bucketCount = reader.uint64();
          break;
        case 3:
          message.keyMean = reader.uint64();
          break;
        case 4:
          message.keyStdDev = reader.uint64();
          break;
        case 6:
          message.valueMean = reader.uint64();
          break;
        case 7:
          message.valueStdDev = reader.uint64();
          break;
        case 8:
          message.genesisCount = reader.uint64();
          break;
        case 9:
          message.insertWeight = reader.float();
          break;
        case 10:
          message.updateWeight = reader.float();
          break;
        case 12:
          message.getWeight = reader.float();
          break;
        case 11:
          message.deleteWeight = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GeneratorParams>): GeneratorParams {
    const message = createBaseGeneratorParams();
    message.seed = object.seed !== undefined && object.seed !== null ? BigInt(object.seed.toString()) : BigInt(0);
    message.bucketCount = object.bucketCount !== undefined && object.bucketCount !== null ? BigInt(object.bucketCount.toString()) : BigInt(0);
    message.keyMean = object.keyMean !== undefined && object.keyMean !== null ? BigInt(object.keyMean.toString()) : BigInt(0);
    message.keyStdDev = object.keyStdDev !== undefined && object.keyStdDev !== null ? BigInt(object.keyStdDev.toString()) : BigInt(0);
    message.valueMean = object.valueMean !== undefined && object.valueMean !== null ? BigInt(object.valueMean.toString()) : BigInt(0);
    message.valueStdDev = object.valueStdDev !== undefined && object.valueStdDev !== null ? BigInt(object.valueStdDev.toString()) : BigInt(0);
    message.genesisCount = object.genesisCount !== undefined && object.genesisCount !== null ? BigInt(object.genesisCount.toString()) : BigInt(0);
    message.insertWeight = object.insertWeight ?? 0;
    message.updateWeight = object.updateWeight ?? 0;
    message.getWeight = object.getWeight ?? 0;
    message.deleteWeight = object.deleteWeight ?? 0;
    return message;
  },
  fromAmino(object: GeneratorParamsAmino): GeneratorParams {
    const message = createBaseGeneratorParams();
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = BigInt(object.seed);
    }
    if (object.bucket_count !== undefined && object.bucket_count !== null) {
      message.bucketCount = BigInt(object.bucket_count);
    }
    if (object.key_mean !== undefined && object.key_mean !== null) {
      message.keyMean = BigInt(object.key_mean);
    }
    if (object.key_std_dev !== undefined && object.key_std_dev !== null) {
      message.keyStdDev = BigInt(object.key_std_dev);
    }
    if (object.value_mean !== undefined && object.value_mean !== null) {
      message.valueMean = BigInt(object.value_mean);
    }
    if (object.value_std_dev !== undefined && object.value_std_dev !== null) {
      message.valueStdDev = BigInt(object.value_std_dev);
    }
    if (object.genesis_count !== undefined && object.genesis_count !== null) {
      message.genesisCount = BigInt(object.genesis_count);
    }
    if (object.insert_weight !== undefined && object.insert_weight !== null) {
      message.insertWeight = object.insert_weight;
    }
    if (object.update_weight !== undefined && object.update_weight !== null) {
      message.updateWeight = object.update_weight;
    }
    if (object.get_weight !== undefined && object.get_weight !== null) {
      message.getWeight = object.get_weight;
    }
    if (object.delete_weight !== undefined && object.delete_weight !== null) {
      message.deleteWeight = object.delete_weight;
    }
    return message;
  },
  toAmino(message: GeneratorParams): GeneratorParamsAmino {
    const obj: any = {};
    obj.seed = message.seed !== BigInt(0) ? message.seed?.toString() : undefined;
    obj.bucket_count = message.bucketCount !== BigInt(0) ? message.bucketCount?.toString() : undefined;
    obj.key_mean = message.keyMean !== BigInt(0) ? message.keyMean?.toString() : undefined;
    obj.key_std_dev = message.keyStdDev !== BigInt(0) ? message.keyStdDev?.toString() : undefined;
    obj.value_mean = message.valueMean !== BigInt(0) ? message.valueMean?.toString() : undefined;
    obj.value_std_dev = message.valueStdDev !== BigInt(0) ? message.valueStdDev?.toString() : undefined;
    obj.genesis_count = message.genesisCount !== BigInt(0) ? message.genesisCount?.toString() : undefined;
    obj.insert_weight = message.insertWeight === 0 ? undefined : message.insertWeight;
    obj.update_weight = message.updateWeight === 0 ? undefined : message.updateWeight;
    obj.get_weight = message.getWeight === 0 ? undefined : message.getWeight;
    obj.delete_weight = message.deleteWeight === 0 ? undefined : message.deleteWeight;
    return obj;
  },
  fromAminoMsg(object: GeneratorParamsAminoMsg): GeneratorParams {
    return GeneratorParams.fromAmino(object.value);
  },
  toAminoMsg(message: GeneratorParams): GeneratorParamsAminoMsg {
    return {
      type: "cosmos-sdk/GeneratorParams",
      value: GeneratorParams.toAmino(message)
    };
  },
  fromProtoMsg(message: GeneratorParamsProtoMsg): GeneratorParams {
    return GeneratorParams.decode(message.value);
  },
  toProto(message: GeneratorParams): Uint8Array {
    return GeneratorParams.encode(message).finish();
  },
  toProtoMsg(message: GeneratorParams): GeneratorParamsProtoMsg {
    return {
      typeUrl: "/cosmos.benchmark.module.v1.GeneratorParams",
      value: GeneratorParams.encode(message).finish()
    };
  }
};