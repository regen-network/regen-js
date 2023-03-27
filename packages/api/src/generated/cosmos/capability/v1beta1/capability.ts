/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "cosmos.capability.v1beta1";

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  $type: "cosmos.capability.v1beta1.Capability";
  index: Long;
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  $type: "cosmos.capability.v1beta1.Owner";
  module: string;
  name: string;
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
  $type: "cosmos.capability.v1beta1.CapabilityOwners";
  owners: Owner[];
}

function createBaseCapability(): Capability {
  return { $type: "cosmos.capability.v1beta1.Capability", index: Long.UZERO };
}

export const Capability = {
  $type: "cosmos.capability.v1beta1.Capability" as const,

  encode(message: Capability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapability();
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
    return { $type: Capability.$type, index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO };
  },

  toJSON(message: Capability): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Capability>): Capability {
    return Capability.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Capability>): Capability {
    const message = createBaseCapability();
    message.index = (object.index !== undefined && object.index !== null) ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(Capability.$type, Capability);

function createBaseOwner(): Owner {
  return { $type: "cosmos.capability.v1beta1.Owner", module: "", name: "" };
}

export const Owner = {
  $type: "cosmos.capability.v1beta1.Owner" as const,

  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
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
    return {
      $type: Owner.$type,
      module: isSet(object.module) ? String(object.module) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<Owner>): Owner {
    return Owner.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = createBaseOwner();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(Owner.$type, Owner);

function createBaseCapabilityOwners(): CapabilityOwners {
  return { $type: "cosmos.capability.v1beta1.CapabilityOwners", owners: [] };
}

export const CapabilityOwners = {
  $type: "cosmos.capability.v1beta1.CapabilityOwners" as const,

  encode(message: CapabilityOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CapabilityOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapabilityOwners();
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
    return {
      $type: CapabilityOwners.$type,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromJSON(e)) : [],
    };
  },

  toJSON(message: CapabilityOwners): unknown {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) => e ? Owner.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CapabilityOwners>): CapabilityOwners {
    return CapabilityOwners.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CapabilityOwners>): CapabilityOwners {
    const message = createBaseCapabilityOwners();
    message.owners = object.owners?.map((e) => Owner.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CapabilityOwners.$type, CapabilityOwners);

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
