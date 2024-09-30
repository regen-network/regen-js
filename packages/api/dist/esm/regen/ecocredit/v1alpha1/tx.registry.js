import { MsgCreateClass, MsgCreateBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata } from "./tx";
export const registry = [["/regen.ecocredit.v1alpha1.MsgCreateClass", MsgCreateClass], ["/regen.ecocredit.v1alpha1.MsgCreateBatch", MsgCreateBatch], ["/regen.ecocredit.v1alpha1.MsgSend", MsgSend], ["/regen.ecocredit.v1alpha1.MsgRetire", MsgRetire], ["/regen.ecocredit.v1alpha1.MsgCancel", MsgCancel], ["/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin", MsgUpdateClassAdmin], ["/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers", MsgUpdateClassIssuers], ["/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata", MsgUpdateClassMetadata]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
                value: MsgCreateClass.encode(value).finish()
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
                value: MsgCreateBatch.encode(value).finish()
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
                value: MsgSend.encode(value).finish()
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
                value: MsgRetire.encode(value).finish()
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
                value: MsgCancel.encode(value).finish()
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
                value: MsgUpdateClassAdmin.encode(value).finish()
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
                value: MsgUpdateClassIssuers.encode(value).finish()
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
                value: MsgUpdateClassMetadata.encode(value).finish()
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
                value: MsgCreateClass.fromPartial(value)
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
                value: MsgCreateBatch.fromPartial(value)
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
                value: MsgSend.fromPartial(value)
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
                value: MsgRetire.fromPartial(value)
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
                value: MsgCancel.fromPartial(value)
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
                value: MsgUpdateClassAdmin.fromPartial(value)
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
                value: MsgUpdateClassIssuers.fromPartial(value)
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
                value: MsgUpdateClassMetadata.fromPartial(value)
            };
        }
    }
};
