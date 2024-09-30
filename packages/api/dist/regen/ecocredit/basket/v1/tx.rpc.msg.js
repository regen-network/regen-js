"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.create = this.create.bind(this);
        this.put = this.put.bind(this);
        this.take = this.take.bind(this);
        this.updateBasketFee = this.updateBasketFee.bind(this);
        this.updateCurator = this.updateCurator.bind(this);
        this.updateDateCriteria = this.updateDateCriteria.bind(this);
    }
    create(request) {
        const data = tx_1.MsgCreate.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "Create", data);
        return promise.then(data => tx_1.MsgCreateResponse.decode(new binary_1.BinaryReader(data)));
    }
    put(request) {
        const data = tx_1.MsgPut.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "Put", data);
        return promise.then(data => tx_1.MsgPutResponse.decode(new binary_1.BinaryReader(data)));
    }
    take(request) {
        const data = tx_1.MsgTake.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "Take", data);
        return promise.then(data => tx_1.MsgTakeResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateBasketFee(request) {
        const data = tx_1.MsgUpdateBasketFee.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "UpdateBasketFee", data);
        return promise.then(data => tx_1.MsgUpdateBasketFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateCurator(request) {
        const data = tx_1.MsgUpdateCurator.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "UpdateCurator", data);
        return promise.then(data => tx_1.MsgUpdateCuratorResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateDateCriteria(request) {
        const data = tx_1.MsgUpdateDateCriteria.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "UpdateDateCriteria", data);
        return promise.then(data => tx_1.MsgUpdateDateCriteriaResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
