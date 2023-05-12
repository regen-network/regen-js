import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAnchor, MsgAttest, MsgDefineResolver, MsgRegisterResolver } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        anchor(value: MsgAnchor): {
            typeUrl: string;
            value: Uint8Array;
        };
        attest(value: MsgAttest): {
            typeUrl: string;
            value: Uint8Array;
        };
        defineResolver(value: MsgDefineResolver): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerResolver(value: MsgRegisterResolver): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        anchor(value: MsgAnchor): {
            typeUrl: string;
            value: MsgAnchor;
        };
        attest(value: MsgAttest): {
            typeUrl: string;
            value: MsgAttest;
        };
        defineResolver(value: MsgDefineResolver): {
            typeUrl: string;
            value: MsgDefineResolver;
        };
        registerResolver(value: MsgRegisterResolver): {
            typeUrl: string;
            value: MsgRegisterResolver;
        };
    };
    toJSON: {
        anchor(value: MsgAnchor): {
            typeUrl: string;
            value: unknown;
        };
        attest(value: MsgAttest): {
            typeUrl: string;
            value: unknown;
        };
        defineResolver(value: MsgDefineResolver): {
            typeUrl: string;
            value: unknown;
        };
        registerResolver(value: MsgRegisterResolver): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        anchor(value: any): {
            typeUrl: string;
            value: MsgAnchor;
        };
        attest(value: any): {
            typeUrl: string;
            value: MsgAttest;
        };
        defineResolver(value: any): {
            typeUrl: string;
            value: MsgDefineResolver;
        };
        registerResolver(value: any): {
            typeUrl: string;
            value: MsgRegisterResolver;
        };
    };
    fromPartial: {
        anchor(value: MsgAnchor): {
            typeUrl: string;
            value: MsgAnchor;
        };
        attest(value: MsgAttest): {
            typeUrl: string;
            value: MsgAttest;
        };
        defineResolver(value: MsgDefineResolver): {
            typeUrl: string;
            value: MsgDefineResolver;
        };
        registerResolver(value: MsgRegisterResolver): {
            typeUrl: string;
            value: MsgRegisterResolver;
        };
    };
};
