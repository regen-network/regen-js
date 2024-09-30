"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.ecocredit.v1alpha1.MsgCreateClass", tx_1.MsgCreateClass], ["/regen.ecocredit.v1alpha1.MsgCreateBatch", tx_1.MsgCreateBatch], ["/regen.ecocredit.v1alpha1.MsgSend", tx_1.MsgSend], ["/regen.ecocredit.v1alpha1.MsgRetire", tx_1.MsgRetire], ["/regen.ecocredit.v1alpha1.MsgCancel", tx_1.MsgCancel], ["/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin", tx_1.MsgUpdateClassAdmin], ["/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers", tx_1.MsgUpdateClassIssuers], ["/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata", tx_1.MsgUpdateClassMetadata]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
                value: tx_1.MsgCreateClass.encode(value).finish()
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
                value: tx_1.MsgCreateBatch.encode(value).finish()
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
                value: tx_1.MsgSend.encode(value).finish()
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
                value: tx_1.MsgRetire.encode(value).finish()
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
                value: tx_1.MsgCancel.encode(value).finish()
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
                value: tx_1.MsgUpdateClassAdmin.encode(value).finish()
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
                value: tx_1.MsgUpdateClassIssuers.encode(value).finish()
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
                value: tx_1.MsgUpdateClassMetadata.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
                value
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
                value
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
                value
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
                value
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
                value
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
                value
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
                value
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
                value
            };
        }
    },
    fromPartial: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
                value: tx_1.MsgCreateClass.fromPartial(value)
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
                value: tx_1.MsgCreateBatch.fromPartial(value)
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
                value: tx_1.MsgSend.fromPartial(value)
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
                value: tx_1.MsgRetire.fromPartial(value)
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
                value: tx_1.MsgCancel.fromPartial(value)
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
                value: tx_1.MsgUpdateClassAdmin.fromPartial(value)
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
                value: tx_1.MsgUpdateClassIssuers.fromPartial(value)
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
                value: tx_1.MsgUpdateClassMetadata.fromPartial(value)
            };
        }
    }
};
