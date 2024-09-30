import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerAccount(value: MsgRegisterAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerAccount(value: MsgRegisterAccount): {
            typeUrl: string;
            value: MsgRegisterAccount;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
    };
    fromPartial: {
        registerAccount(value: MsgRegisterAccount): {
            typeUrl: string;
            value: MsgRegisterAccount;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
    };
};
