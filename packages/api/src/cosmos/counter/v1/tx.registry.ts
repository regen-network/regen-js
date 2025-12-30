//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIncreaseCounter } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.counter.v1.MsgIncreaseCounter", MsgIncreaseCounter]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value
      };
    }
  },
  fromPartial: {
    increaseCount(value: MsgIncreaseCounter) {
      return {
        typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
        value: MsgIncreaseCounter.fromPartial(value)
      };
    }
  }
};