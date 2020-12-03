/* eslint-disable */
import * as Long from 'long';
import { CapabilityOwners } from '../../../cosmos/capability/v1beta1/capability';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  GenesisOwners defines the capability owners with their corresponding index.
 */
export interface GenesisOwners {
  /**
   *  index is the index of the capability owner.
   */
  index: Long;
  /**
   *  index_owners are the owners at the given index.
   */
  indexOwners?: CapabilityOwners;
}

/**
 *  GenesisState defines the capability module's genesis state.
 */
export interface GenesisState {
  /**
   *  index is the capability global index.
   */
  index: Long;
  /**
   *  owners represents a map from index to owners of the capability index
   *  index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}

const baseGenesisOwners: object = {
  index: Long.UZERO,
};

const baseGenesisState: object = {
  index: Long.UZERO,
};

export const protobufPackage = 'cosmos.capability.v1beta1'

export const GenesisOwners = {
  encode(message: GenesisOwners, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.index);
    if (message.indexOwners !== undefined && message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GenesisOwners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisOwners } as GenesisOwners;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisOwners {
    const message = { ...baseGenesisOwners } as GenesisOwners;
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromString(object.index);
    } else {
      message.index = Long.UZERO;
    }
    if (object.indexOwners !== undefined && object.indexOwners !== null) {
      message.indexOwners = CapabilityOwners.fromJSON(object.indexOwners);
    } else {
      message.indexOwners = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners {
    const message = { ...baseGenesisOwners } as GenesisOwners;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index as Long;
    } else {
      message.index = Long.UZERO;
    }
    if (object.indexOwners !== undefined && object.indexOwners !== null) {
      message.indexOwners = CapabilityOwners.fromPartial(object.indexOwners);
    } else {
      message.indexOwners = undefined;
    }
    return message;
  },
  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    message.indexOwners !== undefined && (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
    return obj;
  },
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.index);
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.owners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.owners = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromString(object.index);
    } else {
      message.index = Long.UZERO;
    }
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(GenesisOwners.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.owners = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index as Long;
    } else {
      message.index = Long.UZERO;
    }
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(GenesisOwners.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
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