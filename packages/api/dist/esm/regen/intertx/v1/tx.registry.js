import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export const registry = [["/regen.intertx.v1.MsgRegisterAccount", MsgRegisterAccount], ["/regen.intertx.v1.MsgSubmitTx", MsgSubmitTx]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        registerAccount(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgRegisterAccount",
                value: MsgRegisterAccount.encode(value).finish()
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgSubmitTx",
                value: MsgSubmitTx.encode(value).finish()
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
                value: MsgRegisterAccount.fromPartial(value)
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/regen.intertx.v1.MsgSubmitTx",
                value: MsgSubmitTx.fromPartial(value)
            };
        }
    }
};
