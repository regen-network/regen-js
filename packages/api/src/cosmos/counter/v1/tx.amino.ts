//@ts-nocheck
import { MsgIncreaseCounter } from "./tx";
export const AminoConverter = {
  "/cosmos.counter.v1.MsgIncreaseCounter": {
    aminoType: "cosmos-sdk/increase_counter",
    toAmino: MsgIncreaseCounter.toAmino,
    fromAmino: MsgIncreaseCounter.fromAmino
  }
};