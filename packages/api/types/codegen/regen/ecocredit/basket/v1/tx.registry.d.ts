import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: Uint8Array;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: Uint8Array;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBasketFee(value: MsgUpdateBasketFee): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateCurator(value: MsgUpdateCurator): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDateCriteria(value: MsgUpdateDateCriteria): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: MsgCreate;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: MsgPut;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: MsgTake;
        };
        updateBasketFee(value: MsgUpdateBasketFee): {
            typeUrl: string;
            value: MsgUpdateBasketFee;
        };
        updateCurator(value: MsgUpdateCurator): {
            typeUrl: string;
            value: MsgUpdateCurator;
        };
        updateDateCriteria(value: MsgUpdateDateCriteria): {
            typeUrl: string;
            value: MsgUpdateDateCriteria;
        };
    };
    toJSON: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: unknown;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: unknown;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: unknown;
        };
        updateBasketFee(value: MsgUpdateBasketFee): {
            typeUrl: string;
            value: unknown;
        };
        updateCurator(value: MsgUpdateCurator): {
            typeUrl: string;
            value: unknown;
        };
        updateDateCriteria(value: MsgUpdateDateCriteria): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        create(value: any): {
            typeUrl: string;
            value: MsgCreate;
        };
        put(value: any): {
            typeUrl: string;
            value: MsgPut;
        };
        take(value: any): {
            typeUrl: string;
            value: MsgTake;
        };
        updateBasketFee(value: any): {
            typeUrl: string;
            value: MsgUpdateBasketFee;
        };
        updateCurator(value: any): {
            typeUrl: string;
            value: MsgUpdateCurator;
        };
        updateDateCriteria(value: any): {
            typeUrl: string;
            value: MsgUpdateDateCriteria;
        };
    };
    fromPartial: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: MsgCreate;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: MsgPut;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: MsgTake;
        };
        updateBasketFee(value: MsgUpdateBasketFee): {
            typeUrl: string;
            value: MsgUpdateBasketFee;
        };
        updateCurator(value: MsgUpdateCurator): {
            typeUrl: string;
            value: MsgUpdateCurator;
        };
        updateDateCriteria(value: MsgUpdateDateCriteria): {
            typeUrl: string;
            value: MsgUpdateDateCriteria;
        };
    };
};
