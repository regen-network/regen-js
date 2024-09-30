import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClass, MsgCreateBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: Uint8Array;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
    };
    fromPartial: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
    };
};
