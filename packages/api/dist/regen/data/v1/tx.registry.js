"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.data.v1.MsgAnchor", tx_1.MsgAnchor], ["/regen.data.v1.MsgAttest", tx_1.MsgAttest], ["/regen.data.v1.MsgDefineResolver", tx_1.MsgDefineResolver], ["/regen.data.v1.MsgRegisterResolver", tx_1.MsgRegisterResolver]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        anchor(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAnchor",
                value: tx_1.MsgAnchor.encode(value).finish()
            };
        },
        attest(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAttest",
                value: tx_1.MsgAttest.encode(value).finish()
            };
        },
        defineResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgDefineResolver",
                value: tx_1.MsgDefineResolver.encode(value).finish()
            };
        },
        registerResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgRegisterResolver",
                value: tx_1.MsgRegisterResolver.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        anchor(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAnchor",
                value
            };
        },
        attest(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAttest",
                value
            };
        },
        defineResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgDefineResolver",
                value
            };
        },
        registerResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgRegisterResolver",
                value
            };
        }
    },
    fromPartial: {
        anchor(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAnchor",
                value: tx_1.MsgAnchor.fromPartial(value)
            };
        },
        attest(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAttest",
                value: tx_1.MsgAttest.fromPartial(value)
            };
        },
        defineResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgDefineResolver",
                value: tx_1.MsgDefineResolver.fromPartial(value)
            };
        },
        registerResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgRegisterResolver",
                value: tx_1.MsgRegisterResolver.fromPartial(value)
            };
        }
    }
};
