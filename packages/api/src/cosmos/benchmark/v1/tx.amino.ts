//@ts-nocheck
import { MsgLoadTest } from "./tx";
export const AminoConverter = {
  "/cosmos.benchmark.v1.MsgLoadTest": {
    aminoType: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest",
    toAmino: MsgLoadTest.toAmino,
    fromAmino: MsgLoadTest.fromAmino
  }
};