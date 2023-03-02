/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../../google/protobuf/any';
import {
  Height,
  Params,
  IdentifiedClientState,
  ConsensusStateWithHeight,
} from './client';
import {
  PageRequest,
  PageResponse,
} from '../../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'ibc.core.client.v1';

/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
  $type: 'ibc.core.client.v1.QueryClientStateRequest';
  /** client state unique identifier */
  clientId: string;
}

/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
  $type: 'ibc.core.client.v1.QueryClientStateResponse';
  /** client state associated with the request identifier */
  clientState?: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
  $type: 'ibc.core.client.v1.QueryClientStatesRequest';
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
  $type: 'ibc.core.client.v1.QueryClientStatesResponse';
  /** list of stored ClientStates of the chain. */
  clientStates: IdentifiedClientState[];
  /** pagination response */
  pagination?: PageResponse;
}

/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
  $type: 'ibc.core.client.v1.QueryConsensusStateRequest';
  /** client identifier */
  clientId: string;
  /** consensus state revision number */
  revisionNumber: Long;
  /** consensus state revision height */
  revisionHeight: Long;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latestHeight: boolean;
}

/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
  $type: 'ibc.core.client.v1.QueryConsensusStateResponse';
  /** consensus state associated with the client identifier at the given height */
  consensusState?: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
  $type: 'ibc.core.client.v1.QueryConsensusStatesRequest';
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
  $type: 'ibc.core.client.v1.QueryConsensusStatesResponse';
  /** consensus states associated with the identifier */
  consensusStates: ConsensusStateWithHeight[];
  /** pagination response */
  pagination?: PageResponse;
}

/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */
export interface QueryConsensusStateHeightsRequest {
  $type: 'ibc.core.client.v1.QueryConsensusStateHeightsRequest';
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */
export interface QueryConsensusStateHeightsResponse {
  $type: 'ibc.core.client.v1.QueryConsensusStateHeightsResponse';
  /** consensus state heights */
  consensusStateHeights: Height[];
  /** pagination response */
  pagination?: PageResponse;
}

/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
  $type: 'ibc.core.client.v1.QueryClientStatusRequest';
  /** client unique identifier */
  clientId: string;
}

/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
  $type: 'ibc.core.client.v1.QueryClientStatusResponse';
  status: string;
}

/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
  $type: 'ibc.core.client.v1.QueryClientParamsRequest';
}

/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
  $type: 'ibc.core.client.v1.QueryClientParamsResponse';
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
  $type: 'ibc.core.client.v1.QueryUpgradedClientStateRequest';
}

/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
  $type: 'ibc.core.client.v1.QueryUpgradedClientStateResponse';
  /** client state associated with the request identifier */
  upgradedClientState?: Any;
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
  $type: 'ibc.core.client.v1.QueryUpgradedConsensusStateRequest';
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  $type: 'ibc.core.client.v1.QueryUpgradedConsensusStateResponse';
  /** Consensus state associated with the request identifier */
  upgradedConsensusState?: Any;
}

function createBaseQueryClientStateRequest(): QueryClientStateRequest {
  return { $type: 'ibc.core.client.v1.QueryClientStateRequest', clientId: '' };
}

export const QueryClientStateRequest = {
  $type: 'ibc.core.client.v1.QueryClientStateRequest' as const,

  encode(
    message: QueryClientStateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStateRequest {
    return {
      $type: QueryClientStateRequest.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
    };
  },

  toJSON(message: QueryClientStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientStateRequest>, I>>(
    object: I,
  ): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    message.clientId = object.clientId ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryClientStateRequest.$type, QueryClientStateRequest);

function createBaseQueryClientStateResponse(): QueryClientStateResponse {
  return {
    $type: 'ibc.core.client.v1.QueryClientStateResponse',
    clientState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined,
  };
}

export const QueryClientStateResponse = {
  $type: 'ibc.core.client.v1.QueryClientStateResponse' as const,

  encode(
    message: QueryClientStateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStateResponse {
    return {
      $type: QueryClientStateResponse.$type,
      clientState: isSet(object.clientState)
        ? Any.fromJSON(object.clientState)
        : undefined,
      proof: isSet(object.proof)
        ? bytesFromBase64(object.proof)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
    };
  },

  toJSON(message: QueryClientStateResponse): unknown {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientStateResponse>, I>>(
    object: I,
  ): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientStateResponse.$type,
  QueryClientStateResponse,
);

function createBaseQueryClientStatesRequest(): QueryClientStatesRequest {
  return {
    $type: 'ibc.core.client.v1.QueryClientStatesRequest',
    pagination: undefined,
  };
}

export const QueryClientStatesRequest = {
  $type: 'ibc.core.client.v1.QueryClientStatesRequest' as const,

  encode(
    message: QueryClientStatesRequest,
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
  ): QueryClientStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
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

  fromJSON(object: any): QueryClientStatesRequest {
    return {
      $type: QueryClientStatesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClientStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientStatesRequest>, I>>(
    object: I,
  ): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientStatesRequest.$type,
  QueryClientStatesRequest,
);

function createBaseQueryClientStatesResponse(): QueryClientStatesResponse {
  return {
    $type: 'ibc.core.client.v1.QueryClientStatesResponse',
    clientStates: [],
    pagination: undefined,
  };
}

export const QueryClientStatesResponse = {
  $type: 'ibc.core.client.v1.QueryClientStatesResponse' as const,

  encode(
    message: QueryClientStatesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryClientStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(
            IdentifiedClientState.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryClientStatesResponse {
    return {
      $type: QueryClientStatesResponse.$type,
      clientStates: Array.isArray(object?.clientStates)
        ? object.clientStates.map((e: any) => IdentifiedClientState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryClientStatesResponse): unknown {
    const obj: any = {};
    if (message.clientStates) {
      obj.clientStates = message.clientStates.map(e =>
        e ? IdentifiedClientState.toJSON(e) : undefined,
      );
    } else {
      obj.clientStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientStatesResponse>, I>>(
    object: I,
  ): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates =
      object.clientStates?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientStatesResponse.$type,
  QueryClientStatesResponse,
);

function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    $type: 'ibc.core.client.v1.QueryConsensusStateRequest',
    clientId: '',
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO,
    latestHeight: false,
  };
}

export const QueryConsensusStateRequest = {
  $type: 'ibc.core.client.v1.QueryConsensusStateRequest' as const,

  encode(
    message: QueryConsensusStateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64() as Long;
          break;
        case 3:
          message.revisionHeight = reader.uint64() as Long;
          break;
        case 4:
          message.latestHeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConsensusStateRequest {
    return {
      $type: QueryConsensusStateRequest.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      revisionNumber: isSet(object.revisionNumber)
        ? Long.fromString(object.revisionNumber)
        : Long.UZERO,
      revisionHeight: isSet(object.revisionHeight)
        ? Long.fromString(object.revisionHeight)
        : Long.UZERO,
      latestHeight: isSet(object.latestHeight)
        ? Boolean(object.latestHeight)
        : false,
    };
  },

  toJSON(message: QueryConsensusStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.revisionNumber !== undefined &&
      (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    message.latestHeight !== undefined &&
      (obj.latestHeight = message.latestHeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateRequest>, I>>(
    object: I,
  ): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    message.clientId = object.clientId ?? '';
    message.revisionNumber =
      object.revisionNumber !== undefined && object.revisionNumber !== null
        ? Long.fromValue(object.revisionNumber)
        : Long.UZERO;
    message.revisionHeight =
      object.revisionHeight !== undefined && object.revisionHeight !== null
        ? Long.fromValue(object.revisionHeight)
        : Long.UZERO;
    message.latestHeight = object.latestHeight ?? false;
    return message;
  },
};

messageTypeRegistry.set(
  QueryConsensusStateRequest.$type,
  QueryConsensusStateRequest,
);

function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    $type: 'ibc.core.client.v1.QueryConsensusStateResponse',
    consensusState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined,
  };
}

export const QueryConsensusStateResponse = {
  $type: 'ibc.core.client.v1.QueryConsensusStateResponse' as const,

  encode(
    message: QueryConsensusStateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConsensusStateResponse {
    return {
      $type: QueryConsensusStateResponse.$type,
      consensusState: isSet(object.consensusState)
        ? Any.fromJSON(object.consensusState)
        : undefined,
      proof: isSet(object.proof)
        ? bytesFromBase64(object.proof)
        : new Uint8Array(),
      proofHeight: isSet(object.proofHeight)
        ? Height.fromJSON(object.proofHeight)
        : undefined,
    };
  },

  toJSON(message: QueryConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateResponse>, I>>(
    object: I,
  ): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryConsensusStateResponse.$type,
  QueryConsensusStateResponse,
);

function createBaseQueryConsensusStatesRequest(): QueryConsensusStatesRequest {
  return {
    $type: 'ibc.core.client.v1.QueryConsensusStatesRequest',
    clientId: '',
    pagination: undefined,
  };
}

export const QueryConsensusStatesRequest = {
  $type: 'ibc.core.client.v1.QueryConsensusStatesRequest' as const,

  encode(
    message: QueryConsensusStatesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryConsensusStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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

  fromJSON(object: any): QueryConsensusStatesRequest {
    return {
      $type: QueryConsensusStatesRequest.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryConsensusStatesRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConsensusStatesRequest>, I>>(
    object: I,
  ): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    message.clientId = object.clientId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryConsensusStatesRequest.$type,
  QueryConsensusStatesRequest,
);

function createBaseQueryConsensusStatesResponse(): QueryConsensusStatesResponse {
  return {
    $type: 'ibc.core.client.v1.QueryConsensusStatesResponse',
    consensusStates: [],
    pagination: undefined,
  };
}

export const QueryConsensusStatesResponse = {
  $type: 'ibc.core.client.v1.QueryConsensusStatesResponse' as const,

  encode(
    message: QueryConsensusStatesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryConsensusStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(
            ConsensusStateWithHeight.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryConsensusStatesResponse {
    return {
      $type: QueryConsensusStatesResponse.$type,
      consensusStates: Array.isArray(object?.consensusStates)
        ? object.consensusStates.map((e: any) =>
            ConsensusStateWithHeight.fromJSON(e),
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryConsensusStatesResponse): unknown {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(e =>
        e ? ConsensusStateWithHeight.toJSON(e) : undefined,
      );
    } else {
      obj.consensusStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConsensusStatesResponse>, I>>(
    object: I,
  ): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates =
      object.consensusStates?.map(e =>
        ConsensusStateWithHeight.fromPartial(e),
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryConsensusStatesResponse.$type,
  QueryConsensusStatesResponse,
);

function createBaseQueryConsensusStateHeightsRequest(): QueryConsensusStateHeightsRequest {
  return {
    $type: 'ibc.core.client.v1.QueryConsensusStateHeightsRequest',
    clientId: '',
    pagination: undefined,
  };
}

export const QueryConsensusStateHeightsRequest = {
  $type: 'ibc.core.client.v1.QueryConsensusStateHeightsRequest' as const,

  encode(
    message: QueryConsensusStateHeightsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryConsensusStateHeightsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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

  fromJSON(object: any): QueryConsensusStateHeightsRequest {
    return {
      $type: QueryConsensusStateHeightsRequest.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryConsensusStateHeightsRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryConsensusStateHeightsRequest>, I>,
  >(object: I): QueryConsensusStateHeightsRequest {
    const message = createBaseQueryConsensusStateHeightsRequest();
    message.clientId = object.clientId ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryConsensusStateHeightsRequest.$type,
  QueryConsensusStateHeightsRequest,
);

function createBaseQueryConsensusStateHeightsResponse(): QueryConsensusStateHeightsResponse {
  return {
    $type: 'ibc.core.client.v1.QueryConsensusStateHeightsResponse',
    consensusStateHeights: [],
    pagination: undefined,
  };
}

export const QueryConsensusStateHeightsResponse = {
  $type: 'ibc.core.client.v1.QueryConsensusStateHeightsResponse' as const,

  encode(
    message: QueryConsensusStateHeightsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.consensusStateHeights) {
      Height.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryConsensusStateHeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStateHeights.push(
            Height.decode(reader, reader.uint32()),
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

  fromJSON(object: any): QueryConsensusStateHeightsResponse {
    return {
      $type: QueryConsensusStateHeightsResponse.$type,
      consensusStateHeights: Array.isArray(object?.consensusStateHeights)
        ? object.consensusStateHeights.map((e: any) => Height.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryConsensusStateHeightsResponse): unknown {
    const obj: any = {};
    if (message.consensusStateHeights) {
      obj.consensusStateHeights = message.consensusStateHeights.map(e =>
        e ? Height.toJSON(e) : undefined,
      );
    } else {
      obj.consensusStateHeights = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryConsensusStateHeightsResponse>, I>,
  >(object: I): QueryConsensusStateHeightsResponse {
    const message = createBaseQueryConsensusStateHeightsResponse();
    message.consensusStateHeights =
      object.consensusStateHeights?.map(e => Height.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryConsensusStateHeightsResponse.$type,
  QueryConsensusStateHeightsResponse,
);

function createBaseQueryClientStatusRequest(): QueryClientStatusRequest {
  return { $type: 'ibc.core.client.v1.QueryClientStatusRequest', clientId: '' };
}

export const QueryClientStatusRequest = {
  $type: 'ibc.core.client.v1.QueryClientStatusRequest' as const,

  encode(
    message: QueryClientStatusRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClientStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStatusRequest {
    return {
      $type: QueryClientStatusRequest.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
    };
  },

  toJSON(message: QueryClientStatusRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientStatusRequest>, I>>(
    object: I,
  ): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    message.clientId = object.clientId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientStatusRequest.$type,
  QueryClientStatusRequest,
);

function createBaseQueryClientStatusResponse(): QueryClientStatusResponse {
  return { $type: 'ibc.core.client.v1.QueryClientStatusResponse', status: '' };
}

export const QueryClientStatusResponse = {
  $type: 'ibc.core.client.v1.QueryClientStatusResponse' as const,

  encode(
    message: QueryClientStatusResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.status !== '') {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClientStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientStatusResponse {
    return {
      $type: QueryClientStatusResponse.$type,
      status: isSet(object.status) ? String(object.status) : '',
    };
  },

  toJSON(message: QueryClientStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientStatusResponse>, I>>(
    object: I,
  ): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    message.status = object.status ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientStatusResponse.$type,
  QueryClientStatusResponse,
);

function createBaseQueryClientParamsRequest(): QueryClientParamsRequest {
  return { $type: 'ibc.core.client.v1.QueryClientParamsRequest' };
}

export const QueryClientParamsRequest = {
  $type: 'ibc.core.client.v1.QueryClientParamsRequest' as const,

  encode(
    _: QueryClientParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClientParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
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

  fromJSON(_: any): QueryClientParamsRequest {
    return {
      $type: QueryClientParamsRequest.$type,
    };
  },

  toJSON(_: QueryClientParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientParamsRequest>, I>>(
    _: I,
  ): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientParamsRequest.$type,
  QueryClientParamsRequest,
);

function createBaseQueryClientParamsResponse(): QueryClientParamsResponse {
  return {
    $type: 'ibc.core.client.v1.QueryClientParamsResponse',
    params: undefined,
  };
}

export const QueryClientParamsResponse = {
  $type: 'ibc.core.client.v1.QueryClientParamsResponse' as const,

  encode(
    message: QueryClientParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryClientParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
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

  fromJSON(object: any): QueryClientParamsResponse {
    return {
      $type: QueryClientParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryClientParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClientParamsResponse>, I>>(
    object: I,
  ): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryClientParamsResponse.$type,
  QueryClientParamsResponse,
);

function createBaseQueryUpgradedClientStateRequest(): QueryUpgradedClientStateRequest {
  return { $type: 'ibc.core.client.v1.QueryUpgradedClientStateRequest' };
}

export const QueryUpgradedClientStateRequest = {
  $type: 'ibc.core.client.v1.QueryUpgradedClientStateRequest' as const,

  encode(
    _: QueryUpgradedClientStateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryUpgradedClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
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

  fromJSON(_: any): QueryUpgradedClientStateRequest {
    return {
      $type: QueryUpgradedClientStateRequest.$type,
    };
  },

  toJSON(_: QueryUpgradedClientStateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUpgradedClientStateRequest>, I>>(
    _: I,
  ): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
};

messageTypeRegistry.set(
  QueryUpgradedClientStateRequest.$type,
  QueryUpgradedClientStateRequest,
);

function createBaseQueryUpgradedClientStateResponse(): QueryUpgradedClientStateResponse {
  return {
    $type: 'ibc.core.client.v1.QueryUpgradedClientStateResponse',
    upgradedClientState: undefined,
  };
}

export const QueryUpgradedClientStateResponse = {
  $type: 'ibc.core.client.v1.QueryUpgradedClientStateResponse' as const,

  encode(
    message: QueryUpgradedClientStateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.upgradedClientState !== undefined) {
      Any.encode(
        message.upgradedClientState,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryUpgradedClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedClientStateResponse {
    return {
      $type: QueryUpgradedClientStateResponse.$type,
      upgradedClientState: isSet(object.upgradedClientState)
        ? Any.fromJSON(object.upgradedClientState)
        : undefined,
    };
  },

  toJSON(message: QueryUpgradedClientStateResponse): unknown {
    const obj: any = {};
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUpgradedClientStateResponse>, I>,
  >(object: I): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    message.upgradedClientState =
      object.upgradedClientState !== undefined &&
      object.upgradedClientState !== null
        ? Any.fromPartial(object.upgradedClientState)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryUpgradedClientStateResponse.$type,
  QueryUpgradedClientStateResponse,
);

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return { $type: 'ibc.core.client.v1.QueryUpgradedConsensusStateRequest' };
}

export const QueryUpgradedConsensusStateRequest = {
  $type: 'ibc.core.client.v1.QueryUpgradedConsensusStateRequest' as const,

  encode(
    _: QueryUpgradedConsensusStateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
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

  fromJSON(_: any): QueryUpgradedConsensusStateRequest {
    return {
      $type: QueryUpgradedConsensusStateRequest.$type,
    };
  },

  toJSON(_: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>,
  >(_: I): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
};

messageTypeRegistry.set(
  QueryUpgradedConsensusStateRequest.$type,
  QueryUpgradedConsensusStateRequest,
);

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    $type: 'ibc.core.client.v1.QueryUpgradedConsensusStateResponse',
    upgradedConsensusState: undefined,
  };
}

export const QueryUpgradedConsensusStateResponse = {
  $type: 'ibc.core.client.v1.QueryUpgradedConsensusStateResponse' as const,

  encode(
    message: QueryUpgradedConsensusStateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(
        message.upgradedConsensusState,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    return {
      $type: QueryUpgradedConsensusStateResponse.$type,
      upgradedConsensusState: isSet(object.upgradedConsensusState)
        ? Any.fromJSON(object.upgradedConsensusState)
        : undefined,
    };
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = message.upgradedConsensusState
        ? Any.toJSON(message.upgradedConsensusState)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>,
  >(object: I): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState =
      object.upgradedConsensusState !== undefined &&
      object.upgradedConsensusState !== null
        ? Any.fromPartial(object.upgradedConsensusState)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryUpgradedConsensusStateResponse.$type,
  QueryUpgradedConsensusStateResponse,
);

/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  ClientState(
    request: DeepPartial<QueryClientStateRequest>,
  ): Promise<QueryClientStateResponse>;
  /** ClientStates queries all the IBC light clients of a chain. */
  ClientStates(
    request: DeepPartial<QueryClientStatesRequest>,
  ): Promise<QueryClientStatesResponse>;
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  ConsensusState(
    request: DeepPartial<QueryConsensusStateRequest>,
  ): Promise<QueryConsensusStateResponse>;
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  ConsensusStates(
    request: DeepPartial<QueryConsensusStatesRequest>,
  ): Promise<QueryConsensusStatesResponse>;
  /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  ConsensusStateHeights(
    request: DeepPartial<QueryConsensusStateHeightsRequest>,
  ): Promise<QueryConsensusStateHeightsResponse>;
  /** Status queries the status of an IBC client. */
  ClientStatus(
    request: DeepPartial<QueryClientStatusRequest>,
  ): Promise<QueryClientStatusResponse>;
  /** ClientParams queries all parameters of the ibc client. */
  ClientParams(
    request: DeepPartial<QueryClientParamsRequest>,
  ): Promise<QueryClientParamsResponse>;
  /** UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState(
    request: DeepPartial<QueryUpgradedClientStateRequest>,
  ): Promise<QueryUpgradedClientStateResponse>;
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
  ): Promise<QueryUpgradedConsensusStateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ClientState = this.ClientState.bind(this);
    this.ClientStates = this.ClientStates.bind(this);
    this.ConsensusState = this.ConsensusState.bind(this);
    this.ConsensusStates = this.ConsensusStates.bind(this);
    this.ConsensusStateHeights = this.ConsensusStateHeights.bind(this);
    this.ClientStatus = this.ClientStatus.bind(this);
    this.ClientParams = this.ClientParams.bind(this);
    this.UpgradedClientState = this.UpgradedClientState.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
  }
  ClientState(
    request: DeepPartial<QueryClientStateRequest>,
  ): Promise<QueryClientStateResponse> {
    const fromPartial = QueryClientStateRequest.fromPartial(request);
    const data = QueryClientStateRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ClientState',
      data,
    );
    return promise.then(data =>
      QueryClientStateResponse.decode(new _m0.Reader(data)),
    );
  }

  ClientStates(
    request: DeepPartial<QueryClientStatesRequest>,
  ): Promise<QueryClientStatesResponse> {
    const fromPartial = QueryClientStatesRequest.fromPartial(request);
    const data = QueryClientStatesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ClientStates',
      data,
    );
    return promise.then(data =>
      QueryClientStatesResponse.decode(new _m0.Reader(data)),
    );
  }

  ConsensusState(
    request: DeepPartial<QueryConsensusStateRequest>,
  ): Promise<QueryConsensusStateResponse> {
    const fromPartial = QueryConsensusStateRequest.fromPartial(request);
    const data = QueryConsensusStateRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ConsensusState',
      data,
    );
    return promise.then(data =>
      QueryConsensusStateResponse.decode(new _m0.Reader(data)),
    );
  }

  ConsensusStates(
    request: DeepPartial<QueryConsensusStatesRequest>,
  ): Promise<QueryConsensusStatesResponse> {
    const fromPartial = QueryConsensusStatesRequest.fromPartial(request);
    const data = QueryConsensusStatesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ConsensusStates',
      data,
    );
    return promise.then(data =>
      QueryConsensusStatesResponse.decode(new _m0.Reader(data)),
    );
  }

  ConsensusStateHeights(
    request: DeepPartial<QueryConsensusStateHeightsRequest>,
  ): Promise<QueryConsensusStateHeightsResponse> {
    const fromPartial = QueryConsensusStateHeightsRequest.fromPartial(request);
    const data = QueryConsensusStateHeightsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ConsensusStateHeights',
      data,
    );
    return promise.then(data =>
      QueryConsensusStateHeightsResponse.decode(new _m0.Reader(data)),
    );
  }

  ClientStatus(
    request: DeepPartial<QueryClientStatusRequest>,
  ): Promise<QueryClientStatusResponse> {
    const fromPartial = QueryClientStatusRequest.fromPartial(request);
    const data = QueryClientStatusRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ClientStatus',
      data,
    );
    return promise.then(data =>
      QueryClientStatusResponse.decode(new _m0.Reader(data)),
    );
  }

  ClientParams(
    request: DeepPartial<QueryClientParamsRequest>,
  ): Promise<QueryClientParamsResponse> {
    const fromPartial = QueryClientParamsRequest.fromPartial(request);
    const data = QueryClientParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'ClientParams',
      data,
    );
    return promise.then(data =>
      QueryClientParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  UpgradedClientState(
    request: DeepPartial<QueryUpgradedClientStateRequest>,
  ): Promise<QueryUpgradedClientStateResponse> {
    const fromPartial = QueryUpgradedClientStateRequest.fromPartial(request);
    const data = QueryUpgradedClientStateRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'UpgradedClientState',
      data,
    );
    return promise.then(data =>
      QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)),
    );
  }

  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
  ): Promise<QueryUpgradedConsensusStateResponse> {
    const fromPartial = QueryUpgradedConsensusStateRequest.fromPartial(request);
    const data =
      QueryUpgradedConsensusStateRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.core.client.v1.Query',
      'UpgradedConsensusState',
      data,
    );
    return promise.then(data =>
      QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)),
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
