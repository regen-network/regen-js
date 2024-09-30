"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.sell = this.sell.bind(this);
        this.updateSellOrders = this.updateSellOrders.bind(this);
        this.cancelSellOrder = this.cancelSellOrder.bind(this);
        this.buyDirect = this.buyDirect.bind(this);
        this.addAllowedDenom = this.addAllowedDenom.bind(this);
        this.removeAllowedDenom = this.removeAllowedDenom.bind(this);
    }
    sell(request) {
        const data = tx_1.MsgSell.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "Sell", data);
        return promise.then(data => tx_1.MsgSellResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateSellOrders(request) {
        const data = tx_1.MsgUpdateSellOrders.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "UpdateSellOrders", data);
        return promise.then(data => tx_1.MsgUpdateSellOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelSellOrder(request) {
        const data = tx_1.MsgCancelSellOrder.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "CancelSellOrder", data);
        return promise.then(data => tx_1.MsgCancelSellOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    buyDirect(request) {
        const data = tx_1.MsgBuyDirect.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "BuyDirect", data);
        return promise.then(data => tx_1.MsgBuyDirectResponse.decode(new binary_1.BinaryReader(data)));
    }
    addAllowedDenom(request) {
        const data = tx_1.MsgAddAllowedDenom.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "AddAllowedDenom", data);
        return promise.then(data => tx_1.MsgAddAllowedDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    removeAllowedDenom(request) {
        const data = tx_1.MsgRemoveAllowedDenom.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.marketplace.v1.Msg", "RemoveAllowedDenom", data);
        return promise.then(data => tx_1.MsgRemoveAllowedDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
