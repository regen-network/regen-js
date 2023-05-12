import { BasketCredit, BasketCreditSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreate {
    /** basket_denom is the basket bank denom. */
    basketDenom: string;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    curator: string;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateSDKType {
    /** basket_denom is the basket bank denom. */
    basket_denom: string;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    curator: string;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPut {
    /** owner is the owner of the credits put into the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that the credits were added to. */
    basketDenom: string;
    /**
     * credits are the credits that were added to the basket.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    credits: BasketCredit[];
    /**
     * amount is the integer number of basket tokens converted from credits.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    amount: string;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutSDKType {
    /** owner is the owner of the credits put into the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that the credits were added to. */
    basket_denom: string;
    /**
     * credits are the credits that were added to the basket.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    credits: BasketCreditSDKType[];
    /**
     * amount is the integer number of basket tokens converted from credits.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    amount: string;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTake {
    /** owner is the owner of the credits taken from the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that credits were taken from. */
    basketDenom: string;
    /**
     * credits are the credits that were taken from the basket.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    credits: BasketCredit[];
    /**
     * amount is the integer number of basket tokens converted to credits.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    amount: string;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeSDKType {
    /** owner is the owner of the credits taken from the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that credits were taken from. */
    basket_denom: string;
    /**
     * credits are the credits that were taken from the basket.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    credits: BasketCreditSDKType[];
    /**
     * amount is the integer number of basket tokens converted to credits.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    amount: string;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 *
 * Since Revision 2
 */
export interface EventUpdateCurator {
    /** denom is the basket denom. */
    denom: string;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 *
 * Since Revision 2
 */
export interface EventUpdateCuratorSDKType {
    /** denom is the basket denom. */
    denom: string;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 *
 * Since Revision 3
 */
export interface EventUpdateDateCriteria {
    /** denom is the basket denom. */
    denom: string;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 *
 * Since Revision 3
 */
export interface EventUpdateDateCriteriaSDKType {
    /** denom is the basket denom. */
    denom: string;
}
export declare const EventCreate: {
    encode(message: EventCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate;
    fromJSON(object: any): EventCreate;
    toJSON(message: EventCreate): unknown;
    fromPartial(object: Partial<EventCreate>): EventCreate;
};
export declare const EventPut: {
    encode(message: EventPut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPut;
    fromJSON(object: any): EventPut;
    toJSON(message: EventPut): unknown;
    fromPartial(object: Partial<EventPut>): EventPut;
};
export declare const EventTake: {
    encode(message: EventTake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTake;
    fromJSON(object: any): EventTake;
    toJSON(message: EventTake): unknown;
    fromPartial(object: Partial<EventTake>): EventTake;
};
export declare const EventUpdateCurator: {
    encode(message: EventUpdateCurator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCurator;
    fromJSON(object: any): EventUpdateCurator;
    toJSON(message: EventUpdateCurator): unknown;
    fromPartial(object: Partial<EventUpdateCurator>): EventUpdateCurator;
};
export declare const EventUpdateDateCriteria: {
    encode(message: EventUpdateDateCriteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDateCriteria;
    fromJSON(object: any): EventUpdateDateCriteria;
    toJSON(message: EventUpdateDateCriteria): unknown;
    fromPartial(object: Partial<EventUpdateDateCriteria>): EventUpdateDateCriteria;
};
