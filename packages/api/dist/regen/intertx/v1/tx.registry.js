"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.intertx.v1.MsgRegisterAccount", tx_1.MsgRegisterAccount], ["/regen.intertx.v1.MsgSubmitTx", tx_1.MsgSubmitTx]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerAccount(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgRegisterAccount",
                value: tx_1.MsgRegisterAccount.encode(value).finish()
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgSubmitTx",
                value: tx_1.MsgSubmitTx.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerAccount(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgRegisterAccount",
                value
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgSubmitTx",
                value
            };
        }
    },
    fromPartial: {
        registerAccount(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgRegisterAccount",
                value: tx_1.MsgRegisterAccount.fromPartial(value)
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgSubmitTx",
                value: tx_1.MsgSubmitTx.fromPartial(value)
            };
        }
    }
};
