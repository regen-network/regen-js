import { BinaryReader } from "../../../binary";
import { MsgGrant, MsgGrantResponse, MsgExec, MsgExecResponse, MsgRevoke, MsgRevokeResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grant = this.grant.bind(this);
        this.exec = this.exec.bind(this);
        this.revoke = this.revoke.bind(this);
    }
    grant(request) {
        const data = MsgGrant.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
        return promise.then(data => MsgGrantResponse.decode(new BinaryReader(data)));
    }
    exec(request) {
        const data = MsgExec.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
        return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
    }
    revoke(request) {
        const data = MsgRevoke.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
        return promise.then(data => MsgRevokeResponse.decode(new BinaryReader(data)));
    }
}
