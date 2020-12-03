/* eslint-disable */
import * as Long from 'long';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  Capability defines an implementation of an object capability. The index
 *  provided to a Capability must be globally unique.
 */
export interface Capability {
  index: Long;
}

/**
 *  Owner defines a single capability owner. An owner is defined by the name of
 *  capability and the module name.
 */
export interface Owner {
  module: string;
  name: string;
}

/**
 *  CapabilityOwners defines a set of owners of a single Capability. The set of
 *  owners must be unique.
 */
export interface CapabilityOwners {
  owners: Owner[];
}

const baseCapability: object = {
  index: Long.UZERO,
};

const baseOwner: object = {
  module: "",
  name: "",
};

const baseCapabilityOwners: object = {
};

export const protobufPackage = 'cosmos.capability.v1beta1'

export const Capability = {
  encode(message: Capability, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.index);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Capability {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCapability } as Capability;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Capability {
    const message = { ...baseCapability } as Capability;
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromString(object.index);
    } else {
      message.index = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Capability>): Capability {
    const message = { ...baseCapability } as Capability;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index as Long;
    } else {
      message.index = Long.UZERO;
    }
    return message;
  },
  toJSON(message: Capability): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },
};

export const Owner = {
  encode(message: Owner, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.module);
    writer.uint32(18).string(message.name);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Owner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwner } as Owner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Owner {
    const message = { ...baseOwner } as Owner;
    if (object.module !== undefined && object.module !== null) {
      message.module = String(object.module);
    } else {
      message.module = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = { ...baseOwner } as Owner;
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    } else {
      message.module = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

export const CapabilityOwners = {
  encode(message: CapabilityOwners, writer: Writer = Writer.create()): Writer {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CapabilityOwners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCapabilityOwners } as CapabilityOwners;
    message.owners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CapabilityOwners {
    const message = { ...baseCapabilityOwners } as CapabilityOwners;
    message.owners = [];
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(Owner.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CapabilityOwners>): CapabilityOwners {
    const message = { ...baseCapabilityOwners } as CapabilityOwners;
    message.owners = [];
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(Owner.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CapabilityOwners): unknown {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toJSON(e) : undefined);
    } else {
      obj.owners = [];
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