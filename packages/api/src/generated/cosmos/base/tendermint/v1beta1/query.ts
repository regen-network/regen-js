/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Block } from "../../../../tendermint/types/block";
import { BlockID } from "../../../../tendermint/types/types";
import { messageTypeRegistry } from "../../../../typeRegistry";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Block as Block1 } from "./types";

export const protobufPackage = "cosmos.base.tendermint.v1beta1";

/**
 * GetValidatorSetByHeightRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightRequest {
  $type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
  height: Long;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/**
 * GetValidatorSetByHeightResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetValidatorSetByHeightResponse {
  $type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
  blockHeight: Long;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/**
 * GetLatestValidatorSetRequest is the request type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetRequest {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/**
 * GetLatestValidatorSetResponse is the response type for the
 * Query/GetValidatorSetByHeight RPC method.
 */
export interface GetLatestValidatorSetResponse {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
  blockHeight: Long;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/** Validator is the type for the validator-set. */
export interface Validator {
  $type: "cosmos.base.tendermint.v1beta1.Validator";
  address: string;
  pubKey?: Any;
  votingPower: Long;
  proposerPriority: Long;
}

/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightRequest {
  $type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
  height: Long;
}

/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight
 * RPC method.
 */
export interface GetBlockByHeightResponse {
  $type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
  blockId?: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock?: Block1;
}

/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockRequest {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
}

/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC
 * method.
 */
export interface GetLatestBlockResponse {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
  blockId?: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block?: Block;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock?: Block1;
}

/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
  $type: "cosmos.base.tendermint.v1beta1.GetSyncingRequest";
}

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  $type: "cosmos.base.tendermint.v1beta1.GetSyncingResponse";
  syncing: boolean;
}

/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
  $type: "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
}

/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC
 * method.
 */
export interface GetNodeInfoResponse {
  $type: "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
  defaultNodeInfo?: DefaultNodeInfo;
  applicationVersion?: VersionInfo;
}

/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  $type: "cosmos.base.tendermint.v1beta1.VersionInfo";
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}

/** Module is the type for VersionInfo */
export interface Module {
  $type: "cosmos.base.tendermint.v1beta1.Module";
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}

/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
  $type: "cosmos.base.tendermint.v1beta1.ABCIQueryRequest";
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}

/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC
 * query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
  $type: "cosmos.base.tendermint.v1beta1.ABCIQueryResponse";
  code: number;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  codespace: string;
}

/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing nessecary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in
 * Tendermint.
 */
export interface ProofOp {
  $type: "cosmos.base.tendermint.v1beta1.ProofOp";
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}

/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in
 * Tendermint.
 */
export interface ProofOps {
  $type: "cosmos.base.tendermint.v1beta1.ProofOps";
  ops: ProofOp[];
}

function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    $type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
    height: Long.ZERO,
    pagination: undefined,
  };
}

export const GetValidatorSetByHeightRequest = {
  $type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest" as const,

  encode(message: GetValidatorSetByHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
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

  fromJSON(object: any): GetValidatorSetByHeightRequest {
    return {
      $type: GetValidatorSetByHeightRequest.$type,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: GetValidatorSetByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetValidatorSetByHeightRequest.$type, GetValidatorSetByHeightRequest);

function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    $type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
    blockHeight: Long.ZERO,
    validators: [],
    pagination: undefined,
  };
}

export const GetValidatorSetByHeightResponse = {
  $type: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse" as const,

  encode(message: GetValidatorSetByHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetValidatorSetByHeightResponse {
    return {
      $type: GetValidatorSetByHeightResponse.$type,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: GetValidatorSetByHeightResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetValidatorSetByHeightResponse.$type, GetValidatorSetByHeightResponse);

function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return { $type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest", pagination: undefined };
}

export const GetLatestValidatorSetRequest = {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest" as const,

  encode(message: GetLatestValidatorSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
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

  fromJSON(object: any): GetLatestValidatorSetRequest {
    return {
      $type: GetLatestValidatorSetRequest.$type,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: GetLatestValidatorSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetLatestValidatorSetRequest.$type, GetLatestValidatorSetRequest);

function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    $type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
    blockHeight: Long.ZERO,
    validators: [],
    pagination: undefined,
  };
}

export const GetLatestValidatorSetResponse = {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse" as const,

  encode(message: GetLatestValidatorSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLatestValidatorSetResponse {
    return {
      $type: GetLatestValidatorSetResponse.$type,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: GetLatestValidatorSetResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetLatestValidatorSetResponse.$type, GetLatestValidatorSetResponse);

function createBaseValidator(): Validator {
  return {
    $type: "cosmos.base.tendermint.v1beta1.Validator",
    address: "",
    pubKey: undefined,
    votingPower: Long.ZERO,
    proposerPriority: Long.ZERO,
  };
}

export const Validator = {
  $type: "cosmos.base.tendermint.v1beta1.Validator" as const,

  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64() as Long;
          break;
        case 4:
          message.proposerPriority = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      $type: Validator.$type,
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? Long.fromValue(object.votingPower) : Long.ZERO,
      proposerPriority: isSet(object.proposerPriority) ? Long.fromValue(object.proposerPriority) : Long.ZERO,
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.proposerPriority !== undefined &&
      (obj.proposerPriority = (message.proposerPriority || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Validator>): Validator {
    return Validator.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
      ? Any.fromPartial(object.pubKey)
      : undefined;
    message.votingPower = (object.votingPower !== undefined && object.votingPower !== null)
      ? Long.fromValue(object.votingPower)
      : Long.ZERO;
    message.proposerPriority = (object.proposerPriority !== undefined && object.proposerPriority !== null)
      ? Long.fromValue(object.proposerPriority)
      : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Validator.$type, Validator);

function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return { $type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest", height: Long.ZERO };
}

export const GetBlockByHeightRequest = {
  $type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest" as const,

  encode(message: GetBlockByHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockByHeightRequest {
    return {
      $type: GetBlockByHeightRequest.$type,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
    };
  },

  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(GetBlockByHeightRequest.$type, GetBlockByHeightRequest);

function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    $type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
    blockId: undefined,
    block: undefined,
    sdkBlock: undefined,
  };
}

export const GetBlockByHeightResponse = {
  $type: "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse" as const,

  encode(message: GetBlockByHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block1.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockByHeightResponse {
    return {
      $type: GetBlockByHeightResponse.$type,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
      sdkBlock: isSet(object.sdkBlock) ? Block1.fromJSON(object.sdkBlock) : undefined,
    };
  },

  toJSON(message: GetBlockByHeightResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined && (obj.sdkBlock = message.sdkBlock ? Block1.toJSON(message.sdkBlock) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.block = (object.block !== undefined && object.block !== null) ? Block.fromPartial(object.block) : undefined;
    message.sdkBlock = (object.sdkBlock !== undefined && object.sdkBlock !== null)
      ? Block1.fromPartial(object.sdkBlock)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetBlockByHeightResponse.$type, GetBlockByHeightResponse);

function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return { $type: "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest" };
}

export const GetLatestBlockRequest = {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest" as const,

  encode(_: GetLatestBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
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

  fromJSON(_: any): GetLatestBlockRequest {
    return { $type: GetLatestBlockRequest.$type };
  },

  toJSON(_: GetLatestBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest {
    return GetLatestBlockRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
};

messageTypeRegistry.set(GetLatestBlockRequest.$type, GetLatestBlockRequest);

function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    $type: "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
    blockId: undefined,
    block: undefined,
    sdkBlock: undefined,
  };
}

export const GetLatestBlockResponse = {
  $type: "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse" as const,

  encode(message: GetLatestBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block1.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLatestBlockResponse {
    return {
      $type: GetLatestBlockResponse.$type,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
      sdkBlock: isSet(object.sdkBlock) ? Block1.fromJSON(object.sdkBlock) : undefined,
    };
  },

  toJSON(message: GetLatestBlockResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined && (obj.sdkBlock = message.sdkBlock ? Block1.toJSON(message.sdkBlock) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLatestBlockResponse>): GetLatestBlockResponse {
    return GetLatestBlockResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLatestBlockResponse>): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.block = (object.block !== undefined && object.block !== null) ? Block.fromPartial(object.block) : undefined;
    message.sdkBlock = (object.sdkBlock !== undefined && object.sdkBlock !== null)
      ? Block1.fromPartial(object.sdkBlock)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetLatestBlockResponse.$type, GetLatestBlockResponse);

function createBaseGetSyncingRequest(): GetSyncingRequest {
  return { $type: "cosmos.base.tendermint.v1beta1.GetSyncingRequest" };
}

export const GetSyncingRequest = {
  $type: "cosmos.base.tendermint.v1beta1.GetSyncingRequest" as const,

  encode(_: GetSyncingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
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

  fromJSON(_: any): GetSyncingRequest {
    return { $type: GetSyncingRequest.$type };
  },

  toJSON(_: GetSyncingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetSyncingRequest>): GetSyncingRequest {
    return GetSyncingRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetSyncingRequest>): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
};

messageTypeRegistry.set(GetSyncingRequest.$type, GetSyncingRequest);

function createBaseGetSyncingResponse(): GetSyncingResponse {
  return { $type: "cosmos.base.tendermint.v1beta1.GetSyncingResponse", syncing: false };
}

export const GetSyncingResponse = {
  $type: "cosmos.base.tendermint.v1beta1.GetSyncingResponse" as const,

  encode(message: GetSyncingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSyncingResponse {
    return { $type: GetSyncingResponse.$type, syncing: isSet(object.syncing) ? Boolean(object.syncing) : false };
  },

  toJSON(message: GetSyncingResponse): unknown {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },

  create(base?: DeepPartial<GetSyncingResponse>): GetSyncingResponse {
    return GetSyncingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetSyncingResponse>): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
};

messageTypeRegistry.set(GetSyncingResponse.$type, GetSyncingResponse);

function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return { $type: "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest" };
}

export const GetNodeInfoRequest = {
  $type: "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest" as const,

  encode(_: GetNodeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
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

  fromJSON(_: any): GetNodeInfoRequest {
    return { $type: GetNodeInfoRequest.$type };
  },

  toJSON(_: GetNodeInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest {
    return GetNodeInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
};

messageTypeRegistry.set(GetNodeInfoRequest.$type, GetNodeInfoRequest);

function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    $type: "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
    defaultNodeInfo: undefined,
    applicationVersion: undefined,
  };
}

export const GetNodeInfoResponse = {
  $type: "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse" as const,

  encode(message: GetNodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultNodeInfo !== undefined) {
      DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeInfoResponse {
    return {
      $type: GetNodeInfoResponse.$type,
      defaultNodeInfo: isSet(object.defaultNodeInfo) ? DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : undefined,
      applicationVersion: isSet(object.applicationVersion)
        ? VersionInfo.fromJSON(object.applicationVersion)
        : undefined,
    };
  },

  toJSON(message: GetNodeInfoResponse): unknown {
    const obj: any = {};
    message.defaultNodeInfo !== undefined &&
      (obj.defaultNodeInfo = message.defaultNodeInfo ? DefaultNodeInfo.toJSON(message.defaultNodeInfo) : undefined);
    message.applicationVersion !== undefined &&
      (obj.applicationVersion = message.applicationVersion
        ? VersionInfo.toJSON(message.applicationVersion)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse {
    return GetNodeInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    message.defaultNodeInfo = (object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null)
      ? DefaultNodeInfo.fromPartial(object.defaultNodeInfo)
      : undefined;
    message.applicationVersion = (object.applicationVersion !== undefined && object.applicationVersion !== null)
      ? VersionInfo.fromPartial(object.applicationVersion)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetNodeInfoResponse.$type, GetNodeInfoResponse);

function createBaseVersionInfo(): VersionInfo {
  return {
    $type: "cosmos.base.tendermint.v1beta1.VersionInfo",
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: "",
  };
}

export const VersionInfo = {
  $type: "cosmos.base.tendermint.v1beta1.VersionInfo" as const,

  encode(message: VersionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VersionInfo {
    return {
      $type: VersionInfo.$type,
      name: isSet(object.name) ? String(object.name) : "",
      appName: isSet(object.appName) ? String(object.appName) : "",
      version: isSet(object.version) ? String(object.version) : "",
      gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
      buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
      goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
      buildDeps: Array.isArray(object?.buildDeps) ? object.buildDeps.map((e: any) => Module.fromJSON(e)) : [],
      cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : "",
    };
  },

  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map((e) => e ? Module.toJSON(e) : undefined);
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },

  create(base?: DeepPartial<VersionInfo>): VersionInfo {
    return VersionInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = object.buildDeps?.map((e) => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
};

messageTypeRegistry.set(VersionInfo.$type, VersionInfo);

function createBaseModule(): Module {
  return { $type: "cosmos.base.tendermint.v1beta1.Module", path: "", version: "", sum: "" };
}

export const Module = {
  $type: "cosmos.base.tendermint.v1beta1.Module" as const,

  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Module {
    return {
      $type: Module.$type,
      path: isSet(object.path) ? String(object.path) : "",
      version: isSet(object.version) ? String(object.version) : "",
      sum: isSet(object.sum) ? String(object.sum) : "",
    };
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },

  create(base?: DeepPartial<Module>): Module {
    return Module.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
};

messageTypeRegistry.set(Module.$type, Module);

function createBaseABCIQueryRequest(): ABCIQueryRequest {
  return {
    $type: "cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false,
  };
}

export const ABCIQueryRequest = {
  $type: "cosmos.base.tendermint.v1beta1.ABCIQueryRequest" as const,

  encode(message: ABCIQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ABCIQueryRequest {
    return {
      $type: ABCIQueryRequest.$type,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      path: isSet(object.path) ? String(object.path) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      prove: isSet(object.prove) ? Boolean(object.prove) : false,
    };
  },

  toJSON(message: ABCIQueryRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },

  create(base?: DeepPartial<ABCIQueryRequest>): ABCIQueryRequest {
    return ABCIQueryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ABCIQueryRequest>): ABCIQueryRequest {
    const message = createBaseABCIQueryRequest();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  },
};

messageTypeRegistry.set(ABCIQueryRequest.$type, ABCIQueryRequest);

function createBaseABCIQueryResponse(): ABCIQueryResponse {
  return {
    $type: "cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: Long.ZERO,
    codespace: "",
  };
}

export const ABCIQueryResponse = {
  $type: "cosmos.base.tendermint.v1beta1.ABCIQueryResponse" as const,

  encode(message: ABCIQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64() as Long;
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64() as Long;
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ABCIQueryResponse {
    return {
      $type: ABCIQueryResponse.$type,
      code: isSet(object.code) ? Number(object.code) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
    };
  },

  toJSON(message: ABCIQueryResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.proofOps !== undefined && (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  create(base?: DeepPartial<ABCIQueryResponse>): ABCIQueryResponse {
    return ABCIQueryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ABCIQueryResponse>): ABCIQueryResponse {
    const message = createBaseABCIQueryResponse();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = (object.index !== undefined && object.index !== null) ? Long.fromValue(object.index) : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps = (object.proofOps !== undefined && object.proofOps !== null)
      ? ProofOps.fromPartial(object.proofOps)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.codespace = object.codespace ?? "";
    return message;
  },
};

messageTypeRegistry.set(ABCIQueryResponse.$type, ABCIQueryResponse);

function createBaseProofOp(): ProofOp {
  return { $type: "cosmos.base.tendermint.v1beta1.ProofOp", type: "", key: new Uint8Array(), data: new Uint8Array() };
}

export const ProofOp = {
  $type: "cosmos.base.tendermint.v1beta1.ProofOp" as const,

  encode(message: ProofOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofOp {
    return {
      $type: ProofOp.$type,
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<ProofOp>): ProofOp {
    return ProofOp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProofOp>): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(ProofOp.$type, ProofOp);

function createBaseProofOps(): ProofOps {
  return { $type: "cosmos.base.tendermint.v1beta1.ProofOps", ops: [] };
}

export const ProofOps = {
  $type: "cosmos.base.tendermint.v1beta1.ProofOps" as const,

  encode(message: ProofOps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofOps {
    return {
      $type: ProofOps.$type,
      ops: Array.isArray(object?.ops) ? object.ops.map((e: any) => ProofOp.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProofOps): unknown {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map((e) => e ? ProofOp.toJSON(e) : undefined);
    } else {
      obj.ops = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ProofOps>): ProofOps {
    return ProofOps.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProofOps>): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(ProofOps.$type, ProofOps);

/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  GetNodeInfo(request: DeepPartial<GetNodeInfoRequest>): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  GetSyncing(request: DeepPartial<GetSyncingRequest>): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  GetLatestBlock(request: DeepPartial<GetLatestBlockRequest>): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  GetBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet(request: DeepPartial<GetLatestValidatorSetRequest>): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight(
    request: DeepPartial<GetValidatorSetByHeightRequest>,
  ): Promise<GetValidatorSetByHeightResponse>;
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to
   * the application, bypassing Tendermint completely. The ABCI query must
   * contain a valid and supported path, including app, custom, p2p, and store.
   *
   * Since: cosmos-sdk 0.46
   */
  ABCIQuery(request: DeepPartial<ABCIQueryRequest>): Promise<ABCIQueryResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.base.tendermint.v1beta1.Service";
    this.rpc = rpc;
    this.GetNodeInfo = this.GetNodeInfo.bind(this);
    this.GetSyncing = this.GetSyncing.bind(this);
    this.GetLatestBlock = this.GetLatestBlock.bind(this);
    this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
    this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
    this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
    this.ABCIQuery = this.ABCIQuery.bind(this);
  }
  GetNodeInfo(request: DeepPartial<GetNodeInfoRequest>): Promise<GetNodeInfoResponse> {
    const fromPartial = GetNodeInfoRequest.fromPartial(request);
    const data = GetNodeInfoRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GetNodeInfo", data);
    return promise.then((data) => GetNodeInfoResponse.decode(new _m0.Reader(data)));
  }

  GetSyncing(request: DeepPartial<GetSyncingRequest>): Promise<GetSyncingResponse> {
    const fromPartial = GetSyncingRequest.fromPartial(request);
    const data = GetSyncingRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GetSyncing", data);
    return promise.then((data) => GetSyncingResponse.decode(new _m0.Reader(data)));
  }

  GetLatestBlock(request: DeepPartial<GetLatestBlockRequest>): Promise<GetLatestBlockResponse> {
    const fromPartial = GetLatestBlockRequest.fromPartial(request);
    const data = GetLatestBlockRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GetLatestBlock", data);
    return promise.then((data) => GetLatestBlockResponse.decode(new _m0.Reader(data)));
  }

  GetBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>): Promise<GetBlockByHeightResponse> {
    const fromPartial = GetBlockByHeightRequest.fromPartial(request);
    const data = GetBlockByHeightRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GetBlockByHeight", data);
    return promise.then((data) => GetBlockByHeightResponse.decode(new _m0.Reader(data)));
  }

  GetLatestValidatorSet(request: DeepPartial<GetLatestValidatorSetRequest>): Promise<GetLatestValidatorSetResponse> {
    const fromPartial = GetLatestValidatorSetRequest.fromPartial(request);
    const data = GetLatestValidatorSetRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GetLatestValidatorSet", data);
    return promise.then((data) => GetLatestValidatorSetResponse.decode(new _m0.Reader(data)));
  }

  GetValidatorSetByHeight(
    request: DeepPartial<GetValidatorSetByHeightRequest>,
  ): Promise<GetValidatorSetByHeightResponse> {
    const fromPartial = GetValidatorSetByHeightRequest.fromPartial(request);
    const data = GetValidatorSetByHeightRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "GetValidatorSetByHeight", data);
    return promise.then((data) => GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)));
  }

  ABCIQuery(request: DeepPartial<ABCIQueryRequest>): Promise<ABCIQueryResponse> {
    const fromPartial = ABCIQueryRequest.fromPartial(request);
    const data = ABCIQueryRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ABCIQuery", data);
    return promise.then((data) => ABCIQueryResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
