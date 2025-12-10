//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLoadTest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.benchmark.v1.MsgLoadTest", MsgLoadTest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value
      };
    }
  },
  fromPartial: {
    loadTest(value: MsgLoadTest) {
      return {
        typeUrl: "/cosmos.benchmark.v1.MsgLoadTest",
        value: MsgLoadTest.fromPartial(value)
      };
    }
  }
};