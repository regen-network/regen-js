/* eslint-disable */
import { Duration } from '../../google/protobuf/duration';
import * as Long from 'long';
import { Writer, Reader, util, configure } from 'protobufjs/minimal';


/**
 *  ConsensusParams contains consensus critical parameters that determine the
 *  validity of blocks.
 */
export interface ConsensusParams {
  block: BlockParams | undefined;
  evidence: EvidenceParams | undefined;
  validator: ValidatorParams | undefined;
  version: VersionParams | undefined;
}

/**
 *  BlockParams contains limits on the block size.
 */
export interface BlockParams {
  /**
   *  Max block size, in bytes.
   *  Note: must be greater than 0
   */
  maxBytes: number;
  /**
   *  Max gas per block.
   *  Note: must be greater or equal to -1
   */
  maxGas: number;
  /**
   *  Minimum time increment between consecutive blocks (in milliseconds) If the
   *  block header timestamp is ahead of the system clock, decrease this value.
   *
   *  Not exposed to the application.
   */
  timeIotaMs: number;
}

/**
 *  EvidenceParams determine how we handle evidence of malfeasance.
 */
export interface EvidenceParams {
  /**
   *  Max age of evidence, in blocks.
   *
   *  The basic formula for calculating this is: MaxAgeDuration / {average block
   *  time}.
   */
  maxAgeNumBlocks: number;
  /**
   *  Max age of evidence, in time.
   *
   *  It should correspond with an app's "unbonding period" or other similar
   *  mechanism for handling [Nothing-At-Stake
   *  attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  maxAgeDuration: Duration | undefined;
  /**
   *  This sets the maximum size of total evidence in bytes that can be committed in a single block.
   *  and should fall comfortably under the max block bytes.
   *  Default is 1048576 or 1MB
   */
  maxBytes: number;
}

/**
 *  ValidatorParams restrict the public key types validators can use.
 *  NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pubKeyTypes: string[];
}

/**
 *  VersionParams contains the ABCI application version.
 */
export interface VersionParams {
  appVersion: number;
}

/**
 *  HashedParams is a subset of ConsensusParams.
 *
 *  It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  blockMaxBytes: number;
  blockMaxGas: number;
}

const baseConsensusParams: object = {
};

const baseBlockParams: object = {
  maxBytes: 0,
  maxGas: 0,
  timeIotaMs: 0,
};

const baseEvidenceParams: object = {
  maxAgeNumBlocks: 0,
  maxBytes: 0,
};

const baseValidatorParams: object = {
  pubKeyTypes: "",
};

const baseVersionParams: object = {
  appVersion: 0,
};

const baseHashedParams: object = {
  blockMaxBytes: 0,
  blockMaxGas: 0,
};

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const protobufPackage = 'tendermint.types'

export const ConsensusParams = {
  encode(message: ConsensusParams, writer: Writer = Writer.create()): Writer {
    if (message.block !== undefined && message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined && message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined && message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined && message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ConsensusParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusParams } as ConsensusParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusParams {
    const message = { ...baseConsensusParams } as ConsensusParams;
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockParams.fromJSON(object.block);
    } else {
      message.block = undefined;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceParams.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = ValidatorParams.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = VersionParams.fromJSON(object.version);
    } else {
      message.version = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = { ...baseConsensusParams } as ConsensusParams;
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockParams.fromPartial(object.block);
    } else {
      message.block = undefined;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceParams.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = ValidatorParams.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = VersionParams.fromPartial(object.version);
    } else {
      message.version = undefined;
    }
    return message;
  },
  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
    return obj;
  },
};

export const BlockParams = {
  encode(message: BlockParams, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.maxBytes);
    writer.uint32(16).int64(message.maxGas);
    writer.uint32(24).int64(message.timeIotaMs);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BlockParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockParams } as BlockParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.maxGas = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.timeIotaMs = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockParams {
    const message = { ...baseBlockParams } as BlockParams;
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = Number(object.maxBytes);
    } else {
      message.maxBytes = 0;
    }
    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = Number(object.maxGas);
    } else {
      message.maxGas = 0;
    }
    if (object.timeIotaMs !== undefined && object.timeIotaMs !== null) {
      message.timeIotaMs = Number(object.timeIotaMs);
    } else {
      message.timeIotaMs = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = { ...baseBlockParams } as BlockParams;
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = object.maxBytes;
    } else {
      message.maxBytes = 0;
    }
    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = object.maxGas;
    } else {
      message.maxGas = 0;
    }
    if (object.timeIotaMs !== undefined && object.timeIotaMs !== null) {
      message.timeIotaMs = object.timeIotaMs;
    } else {
      message.timeIotaMs = 0;
    }
    return message;
  },
  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    message.maxBytes !== undefined && (obj.maxBytes = message.maxBytes);
    message.maxGas !== undefined && (obj.maxGas = message.maxGas);
    message.timeIotaMs !== undefined && (obj.timeIotaMs = message.timeIotaMs);
    return obj;
  },
};

export const EvidenceParams = {
  encode(message: EvidenceParams, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.maxAgeNumBlocks);
    if (message.maxAgeDuration !== undefined && message.maxAgeDuration !== undefined) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int64(message.maxBytes);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EvidenceParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvidenceParams } as EvidenceParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceParams {
    const message = { ...baseEvidenceParams } as EvidenceParams;
    if (object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null) {
      message.maxAgeNumBlocks = Number(object.maxAgeNumBlocks);
    } else {
      message.maxAgeNumBlocks = 0;
    }
    if (object.maxAgeDuration !== undefined && object.maxAgeDuration !== null) {
      message.maxAgeDuration = Duration.fromJSON(object.maxAgeDuration);
    } else {
      message.maxAgeDuration = undefined;
    }
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = Number(object.maxBytes);
    } else {
      message.maxBytes = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = { ...baseEvidenceParams } as EvidenceParams;
    if (object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null) {
      message.maxAgeNumBlocks = object.maxAgeNumBlocks;
    } else {
      message.maxAgeNumBlocks = 0;
    }
    if (object.maxAgeDuration !== undefined && object.maxAgeDuration !== null) {
      message.maxAgeDuration = Duration.fromPartial(object.maxAgeDuration);
    } else {
      message.maxAgeDuration = undefined;
    }
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = object.maxBytes;
    } else {
      message.maxBytes = 0;
    }
    return message;
  },
  toJSON(message: EvidenceParams): unknown {
    const obj: any = {};
    message.maxAgeNumBlocks !== undefined && (obj.maxAgeNumBlocks = message.maxAgeNumBlocks);
    message.maxAgeDuration !== undefined && (obj.maxAgeDuration = message.maxAgeDuration ? Duration.toJSON(message.maxAgeDuration) : undefined);
    message.maxBytes !== undefined && (obj.maxBytes = message.maxBytes);
    return obj;
  },
};

export const ValidatorParams = {
  encode(message: ValidatorParams, writer: Writer = Writer.create()): Writer {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ValidatorParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorParams } as ValidatorParams;
    message.pubKeyTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorParams {
    const message = { ...baseValidatorParams } as ValidatorParams;
    message.pubKeyTypes = [];
    if (object.pubKeyTypes !== undefined && object.pubKeyTypes !== null) {
      for (const e of object.pubKeyTypes) {
        message.pubKeyTypes.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = { ...baseValidatorParams } as ValidatorParams;
    message.pubKeyTypes = [];
    if (object.pubKeyTypes !== undefined && object.pubKeyTypes !== null) {
      for (const e of object.pubKeyTypes) {
        message.pubKeyTypes.push(e);
      }
    }
    return message;
  },
  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};
    if (message.pubKeyTypes) {
      obj.pubKeyTypes = message.pubKeyTypes.map(e => e);
    } else {
      obj.pubKeyTypes = [];
    }
    return obj;
  },
};

export const VersionParams = {
  encode(message: VersionParams, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.appVersion);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): VersionParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersionParams } as VersionParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appVersion = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionParams {
    const message = { ...baseVersionParams } as VersionParams;
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = Number(object.appVersion);
    } else {
      message.appVersion = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = { ...baseVersionParams } as VersionParams;
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = object.appVersion;
    } else {
      message.appVersion = 0;
    }
    return message;
  },
  toJSON(message: VersionParams): unknown {
    const obj: any = {};
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    return obj;
  },
};

export const HashedParams = {
  encode(message: HashedParams, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.blockMaxBytes);
    writer.uint32(16).int64(message.blockMaxGas);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HashedParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHashedParams } as HashedParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.blockMaxGas = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HashedParams {
    const message = { ...baseHashedParams } as HashedParams;
    if (object.blockMaxBytes !== undefined && object.blockMaxBytes !== null) {
      message.blockMaxBytes = Number(object.blockMaxBytes);
    } else {
      message.blockMaxBytes = 0;
    }
    if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
      message.blockMaxGas = Number(object.blockMaxGas);
    } else {
      message.blockMaxGas = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = { ...baseHashedParams } as HashedParams;
    if (object.blockMaxBytes !== undefined && object.blockMaxBytes !== null) {
      message.blockMaxBytes = object.blockMaxBytes;
    } else {
      message.blockMaxBytes = 0;
    }
    if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
      message.blockMaxGas = object.blockMaxGas;
    } else {
      message.blockMaxGas = 0;
    }
    return message;
  },
  toJSON(message: HashedParams): unknown {
    const obj: any = {};
    message.blockMaxBytes !== undefined && (obj.blockMaxBytes = message.blockMaxBytes);
    message.blockMaxGas !== undefined && (obj.blockMaxGas = message.blockMaxGas);
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;