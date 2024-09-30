import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
        this.multiSend = this.multiSend.bind(this);
    }
    send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
        return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
    }
    multiSend(request) {
        const data = MsgMultiSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
        return promise.then(data => MsgMultiSendResponse.decode(new BinaryReader(data)));
    }
}
