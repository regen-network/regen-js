import { BinaryReader } from "../../../binary";
import { MsgAnchor, MsgAnchorResponse, MsgAttest, MsgAttestResponse, MsgDefineResolver, MsgDefineResolverResponse, MsgRegisterResolver, MsgRegisterResolverResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.anchor = this.anchor.bind(this);
        this.attest = this.attest.bind(this);
        this.defineResolver = this.defineResolver.bind(this);
        this.registerResolver = this.registerResolver.bind(this);
    }
    anchor(request) {
        const data = MsgAnchor.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "Anchor", data);
        return promise.then(data => MsgAnchorResponse.decode(new BinaryReader(data)));
    }
    attest(request) {
        const data = MsgAttest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "Attest", data);
        return promise.then(data => MsgAttestResponse.decode(new BinaryReader(data)));
    }
    defineResolver(request) {
        const data = MsgDefineResolver.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "DefineResolver", data);
        return promise.then(data => MsgDefineResolverResponse.decode(new BinaryReader(data)));
    }
    registerResolver(request) {
        const data = MsgRegisterResolver.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "RegisterResolver", data);
        return promise.then(data => MsgRegisterResolverResponse.decode(new BinaryReader(data)));
    }
}
