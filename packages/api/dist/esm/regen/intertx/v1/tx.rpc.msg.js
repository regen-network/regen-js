import { BinaryReader } from "../../../binary";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerAccount = this.registerAccount.bind(this);
        this.submitTx = this.submitTx.bind(this);
    }
    registerAccount(request) {
        const data = MsgRegisterAccount.encode(request).finish();
        const promise = this.rpc.request("regen.intertx.v1.Msg", "RegisterAccount", data);
        return promise.then(data => MsgRegisterAccountResponse.decode(new BinaryReader(data)));
    }
    submitTx(request) {
        const data = MsgSubmitTx.encode(request).finish();
        const promise = this.rpc.request("regen.intertx.v1.Msg", "SubmitTx", data);
        return promise.then(data => MsgSubmitTxResponse.decode(new BinaryReader(data)));
    }
}
