/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


/**
 *  ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 */
export interface ListAllInterfacesRequest {
}

/**
 *  ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 */
export interface ListAllInterfacesResponse {
  /**
   *  interface_names is an array of all the registered interfaces.
   */
  interfaceNames: string[];
}

/**
 *  ListImplementationsRequest is the request type of the ListImplementations
 *  RPC.
 */
export interface ListImplementationsRequest {
  /**
   *  interface_name defines the interface to query the implementations for.
   */
  interfaceName: string;
}

/**
 *  ListImplementationsResponse is the response type of the ListImplementations
 *  RPC.
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}

const baseListAllInterfacesRequest: object = {
};

const baseListAllInterfacesResponse: object = {
  interfaceNames: "",
};

const baseListImplementationsRequest: object = {
  interfaceName: "",
};

const baseListImplementationsResponse: object = {
  implementationMessageNames: "",
};

/**
 *  ReflectionService defines a service for interface reflection.
 */
export interface ReflectionService {

  /**
   *  ListAllInterfaces lists all the interfaces registered in the interface
   *  registry.
   */
  ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;

  /**
   *  ListImplementations list all the concrete types that implement a given
   *  interface.
   */
  ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;

}

export class ReflectionServiceClientImpl implements ReflectionService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse> {
    const data = ListAllInterfacesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListAllInterfaces", data);
    return promise.then(data => ListAllInterfacesResponse.decode(new Reader(data)));
  }

  ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse> {
    const data = ListImplementationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListImplementations", data);
    return promise.then(data => ListImplementationsResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.base.reflection.v1beta1'

export const ListAllInterfacesRequest = {
  encode(_: ListAllInterfacesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListAllInterfacesRequest } as ListAllInterfacesRequest;
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
    const message = { ...baseListAllInterfacesRequest } as ListAllInterfacesRequest;
    return message;
  },
  fromPartial(_: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = { ...baseListAllInterfacesRequest } as ListAllInterfacesRequest;
    return message;
  },
  toJSON(_: ListAllInterfacesRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const ListAllInterfacesResponse = {
  encode(message: ListAllInterfacesResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListAllInterfacesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListAllInterfacesResponse } as ListAllInterfacesResponse;
    message.interfaceNames = [];
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
    const message = { ...baseListAllInterfacesResponse } as ListAllInterfacesResponse;
    message.interfaceNames = [];
    if (object.interfaceNames !== undefined && object.interfaceNames !== null) {
      for (const e of object.interfaceNames) {
        message.interfaceNames.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = { ...baseListAllInterfacesResponse } as ListAllInterfacesResponse;
    message.interfaceNames = [];
    if (object.interfaceNames !== undefined && object.interfaceNames !== null) {
      for (const e of object.interfaceNames) {
        message.interfaceNames.push(e);
      }
    }
    return message;
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
};

export const ListImplementationsRequest = {
  encode(message: ListImplementationsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.interfaceName);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListImplementationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListImplementationsRequest } as ListImplementationsRequest;
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
    const message = { ...baseListImplementationsRequest } as ListImplementationsRequest;
    if (object.interfaceName !== undefined && object.interfaceName !== null) {
      message.interfaceName = String(object.interfaceName);
    } else {
      message.interfaceName = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = { ...baseListImplementationsRequest } as ListImplementationsRequest;
    if (object.interfaceName !== undefined && object.interfaceName !== null) {
      message.interfaceName = object.interfaceName;
    } else {
      message.interfaceName = "";
    }
    return message;
  },
  toJSON(message: ListImplementationsRequest): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    return obj;
  },
};

export const ListImplementationsResponse = {
  encode(message: ListImplementationsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ListImplementationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListImplementationsResponse } as ListImplementationsResponse;
    message.implementationMessageNames = [];
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
    const message = { ...baseListImplementationsResponse } as ListImplementationsResponse;
    message.implementationMessageNames = [];
    if (object.implementationMessageNames !== undefined && object.implementationMessageNames !== null) {
      for (const e of object.implementationMessageNames) {
        message.implementationMessageNames.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = { ...baseListImplementationsResponse } as ListImplementationsResponse;
    message.implementationMessageNames = [];
    if (object.implementationMessageNames !== undefined && object.implementationMessageNames !== null) {
      for (const e of object.implementationMessageNames) {
        message.implementationMessageNames.push(e);
      }
    }
    return message;
  },
  toJSON(message: ListImplementationsResponse): unknown {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementationMessageNames = [];
    }
    return obj;
  },
};

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