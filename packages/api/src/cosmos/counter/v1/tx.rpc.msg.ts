//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgIncreaseCounter, MsgIncreaseCountResponse } from "./tx";
/** Msg defines the counter Msg service. */
export interface Msg {
  /** IncreaseCount increments the counter by the specified amount. */
  increaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse> {
    const data = MsgIncreaseCounter.encode(request).finish();
    const promise = this.rpc.request("cosmos.counter.v1.Msg", "IncreaseCount", data);
    return promise.then(data => MsgIncreaseCountResponse.decode(new BinaryReader(data)));
  }
}