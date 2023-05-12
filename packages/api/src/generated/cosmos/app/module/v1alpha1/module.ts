/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "cosmos.app.module.v1alpha1";

/** Module is the module config object for the cosmos.app v1 app module. */
export interface Module {
  $type: "cosmos.app.module.v1alpha1.Module";
}

function createBaseModule(): Module {
  return { $type: "cosmos.app.module.v1alpha1.Module" };
}

export const Module = {
  $type: "cosmos.app.module.v1alpha1.Module" as const,

  encode(_: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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

  fromJSON(_: any): Module {
    return { $type: Module.$type };
  },

  toJSON(_: Module): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Module>): Module {
    return Module.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<Module>): Module {
    const message = createBaseModule();
    return message;
  },
};

messageTypeRegistry.set(Module.$type, Module);

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
