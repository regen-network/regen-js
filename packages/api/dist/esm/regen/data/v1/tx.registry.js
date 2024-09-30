import { MsgAnchor, MsgAttest, MsgDefineResolver, MsgRegisterResolver } from "./tx";
export const registry = [["/regen.data.v1.MsgAnchor", MsgAnchor], ["/regen.data.v1.MsgAttest", MsgAttest], ["/regen.data.v1.MsgDefineResolver", MsgDefineResolver], ["/regen.data.v1.MsgRegisterResolver", MsgRegisterResolver]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        anchor(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAnchor",
                value: MsgAnchor.encode(value).finish()
            };
        },
        attest(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAttest",
                value: MsgAttest.encode(value).finish()
            };
        },
        defineResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgDefineResolver",
                value: MsgDefineResolver.encode(value).finish()
            };
        },
        registerResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgRegisterResolver",
                value: MsgRegisterResolver.encode(value).finish()
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
                value: MsgAnchor.fromPartial(value)
            };
        },
        attest(value) {
            return {
                typeUrl: "/regen.data.v1.MsgAttest",
                value: MsgAttest.fromPartial(value)
            };
        },
        defineResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgDefineResolver",
                value: MsgDefineResolver.fromPartial(value)
            };
        },
        registerResolver(value) {
            return {
                typeUrl: "/regen.data.v1.MsgRegisterResolver",
                value: MsgRegisterResolver.fromPartial(value)
            };
        }
    }
};
