/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.base.reflection.v1beta1';

/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
  $type: 'cosmos.base.reflection.v1beta1.ListAllInterfacesRequest';
}

/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
  $type: 'cosmos.base.reflection.v1beta1.ListAllInterfacesResponse';
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}

/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
  $type: 'cosmos.base.reflection.v1beta1.ListImplementationsRequest';
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}

/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
  $type: 'cosmos.base.reflection.v1beta1.ListImplementationsResponse';
  implementationMessageNames: string[];
}

function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return { $type: 'cosmos.base.reflection.v1beta1.ListAllInterfacesRequest' };
}

export const ListAllInterfacesRequest = {
  $type: 'cosmos.base.reflection.v1beta1.ListAllInterfacesRequest' as const,

  encode(
    _: ListAllInterfacesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListAllInterfacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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

  fromJSON(_: any): ListAllInterfacesRequest {
    return {
      $type: ListAllInterfacesRequest.$type,
    };
  },

  toJSON(_: ListAllInterfacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAllInterfacesRequest>, I>>(
    _: I,
  ): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
};

messageTypeRegistry.set(
  ListAllInterfacesRequest.$type,
  ListAllInterfacesRequest,
);

function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return {
    $type: 'cosmos.base.reflection.v1beta1.ListAllInterfacesResponse',
    interfaceNames: [],
  };
}

export const ListAllInterfacesResponse = {
  $type: 'cosmos.base.reflection.v1beta1.ListAllInterfacesResponse' as const,

  encode(
    message: ListAllInterfacesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListAllInterfacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAllInterfacesResponse {
    return {
      $type: ListAllInterfacesResponse.$type,
      interfaceNames: Array.isArray(object?.interfaceNames)
        ? object.interfaceNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ListAllInterfacesResponse): unknown {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interfaceNames = message.interfaceNames.map(e => e);
    } else {
      obj.interfaceNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAllInterfacesResponse>, I>>(
    object: I,
  ): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListAllInterfacesResponse.$type,
  ListAllInterfacesResponse,
);

function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return {
    $type: 'cosmos.base.reflection.v1beta1.ListImplementationsRequest',
    interfaceName: '',
  };
}

export const ListImplementationsRequest = {
  $type: 'cosmos.base.reflection.v1beta1.ListImplementationsRequest' as const,

  encode(
    message: ListImplementationsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.interfaceName !== '') {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListImplementationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListImplementationsRequest {
    return {
      $type: ListImplementationsRequest.$type,
      interfaceName: isSet(object.interfaceName)
        ? String(object.interfaceName)
        : '',
    };
  },

  toJSON(message: ListImplementationsRequest): unknown {
    const obj: any = {};
    message.interfaceName !== undefined &&
      (obj.interfaceName = message.interfaceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListImplementationsRequest>, I>>(
    object: I,
  ): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  ListImplementationsRequest.$type,
  ListImplementationsRequest,
);

function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return {
    $type: 'cosmos.base.reflection.v1beta1.ListImplementationsResponse',
    implementationMessageNames: [],
  };
}

export const ListImplementationsResponse = {
  $type: 'cosmos.base.reflection.v1beta1.ListImplementationsResponse' as const,

  encode(
    message: ListImplementationsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListImplementationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListImplementationsResponse {
    return {
      $type: ListImplementationsResponse.$type,
      implementationMessageNames: Array.isArray(
        object?.implementationMessageNames,
      )
        ? object.implementationMessageNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ListImplementationsResponse): unknown {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map(
        e => e,
      );
    } else {
      obj.implementationMessageNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListImplementationsResponse>, I>>(
    object: I,
  ): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames =
      object.implementationMessageNames?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ListImplementationsResponse.$type,
  ListImplementationsResponse,
);

/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
  /**
   * ListAllInterfaces lists all the interfaces registered in the interface
   * registry.
   */
  ListAllInterfaces(
    request: DeepPartial<ListAllInterfacesRequest>,
  ): Promise<ListAllInterfacesResponse>;
  /**
   * ListImplementations list all the concrete types that implement a given
   * interface.
   */
  ListImplementations(
    request: DeepPartial<ListImplementationsRequest>,
  ): Promise<ListImplementationsResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
    this.ListImplementations = this.ListImplementations.bind(this);
  }
  ListAllInterfaces(
    request: DeepPartial<ListAllInterfacesRequest>,
  ): Promise<ListAllInterfacesResponse> {
    const fromPartial = ListAllInterfacesRequest.fromPartial(request);
    const data = ListAllInterfacesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v1beta1.ReflectionService',
      'ListAllInterfaces',
      data,
    );
    return promise.then(data =>
      ListAllInterfacesResponse.decode(new _m0.Reader(data)),
    );
  }

  ListImplementations(
    request: DeepPartial<ListImplementationsRequest>,
  ): Promise<ListImplementationsResponse> {
    const fromPartial = ListImplementationsRequest.fromPartial(request);
    const data = ListImplementationsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v1beta1.ReflectionService',
      'ListImplementations',
      data,
    );
    return promise.then(data =>
      ListImplementationsResponse.decode(new _m0.Reader(data)),
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
