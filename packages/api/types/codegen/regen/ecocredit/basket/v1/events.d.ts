import { BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
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
export interface EventCreateProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventCreate";
    value: Uint8Array;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateAmino {
    /** basket_denom is the basket bank denom. */
    basket_denom?: string;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    curator?: string;
}
export interface EventCreateAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventCreate";
    value: EventCreateAmino;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateSDKType {
    basket_denom: string;
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
export interface EventPutProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventPut";
    value: Uint8Array;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutAmino {
    /** owner is the owner of the credits put into the basket. */
    owner?: string;
    /** basket_denom is the basket bank denom that the credits were added to. */
    basket_denom?: string;
    /**
     * credits are the credits that were added to the basket.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    credits?: BasketCreditAmino[];
    /**
     * amount is the integer number of basket tokens converted from credits.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    amount?: string;
}
export interface EventPutAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventPut";
    value: EventPutAmino;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutSDKType {
    owner: string;
    basket_denom: string;
    /** @deprecated */
    credits: BasketCreditSDKType[];
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
export interface EventTakeProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventTake";
    value: Uint8Array;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeAmino {
    /** owner is the owner of the credits taken from the basket. */
    owner?: string;
    /** basket_denom is the basket bank denom that credits were taken from. */
    basket_denom?: string;
    /**
     * credits are the credits that were taken from the basket.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    credits?: BasketCreditAmino[];
    /**
     * amount is the integer number of basket tokens converted to credits.
     *
     * Deprecated (Since Revision 1): This field is still populated and will be
     * removed in the next version.
     */
    /** @deprecated */
    amount?: string;
}
export interface EventTakeAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventTake";
    value: EventTakeAmino;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeSDKType {
    owner: string;
    basket_denom: string;
    /** @deprecated */
    credits: BasketCreditSDKType[];
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
export interface EventUpdateCuratorProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventUpdateCurator";
    value: Uint8Array;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 *
 * Since Revision 2
 */
export interface EventUpdateCuratorAmino {
    /** denom is the basket denom. */
    denom?: string;
}
export interface EventUpdateCuratorAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventUpdateCurator";
    value: EventUpdateCuratorAmino;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 *
 * Since Revision 2
 */
export interface EventUpdateCuratorSDKType {
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
export interface EventUpdateDateCriteriaProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria";
    value: Uint8Array;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 *
 * Since Revision 3
 */
export interface EventUpdateDateCriteriaAmino {
    /** denom is the basket denom. */
    denom?: string;
}
export interface EventUpdateDateCriteriaAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria";
    value: EventUpdateDateCriteriaAmino;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 *
 * Since Revision 3
 */
export interface EventUpdateDateCriteriaSDKType {
    denom: string;
}
export declare const EventCreate: {
    typeUrl: string;
    encode(message: EventCreate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreate;
    fromJSON(object: any): EventCreate;
    toJSON(message: EventCreate): unknown;
    fromPartial(object: Partial<EventCreate>): EventCreate;
    fromAmino(object: EventCreateAmino): EventCreate;
    toAmino(message: EventCreate): EventCreateAmino;
    fromAminoMsg(object: EventCreateAminoMsg): EventCreate;
    fromProtoMsg(message: EventCreateProtoMsg): EventCreate;
    toProto(message: EventCreate): Uint8Array;
    toProtoMsg(message: EventCreate): EventCreateProtoMsg;
};
export declare const EventPut: {
    typeUrl: string;
    encode(message: EventPut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventPut;
    fromJSON(object: any): EventPut;
    toJSON(message: EventPut): unknown;
    fromPartial(object: Partial<EventPut>): EventPut;
    fromAmino(object: EventPutAmino): EventPut;
    toAmino(message: EventPut): EventPutAmino;
    fromAminoMsg(object: EventPutAminoMsg): EventPut;
    fromProtoMsg(message: EventPutProtoMsg): EventPut;
    toProto(message: EventPut): Uint8Array;
    toProtoMsg(message: EventPut): EventPutProtoMsg;
};
export declare const EventTake: {
    typeUrl: string;
    encode(message: EventTake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventTake;
    fromJSON(object: any): EventTake;
    toJSON(message: EventTake): unknown;
    fromPartial(object: Partial<EventTake>): EventTake;
    fromAmino(object: EventTakeAmino): EventTake;
    toAmino(message: EventTake): EventTakeAmino;
    fromAminoMsg(object: EventTakeAminoMsg): EventTake;
    fromProtoMsg(message: EventTakeProtoMsg): EventTake;
    toProto(message: EventTake): Uint8Array;
    toProtoMsg(message: EventTake): EventTakeProtoMsg;
};
export declare const EventUpdateCurator: {
    typeUrl: string;
    encode(message: EventUpdateCurator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateCurator;
    fromJSON(object: any): EventUpdateCurator;
    toJSON(message: EventUpdateCurator): unknown;
    fromPartial(object: Partial<EventUpdateCurator>): EventUpdateCurator;
    fromAmino(object: EventUpdateCuratorAmino): EventUpdateCurator;
    toAmino(message: EventUpdateCurator): EventUpdateCuratorAmino;
    fromAminoMsg(object: EventUpdateCuratorAminoMsg): EventUpdateCurator;
    fromProtoMsg(message: EventUpdateCuratorProtoMsg): EventUpdateCurator;
    toProto(message: EventUpdateCurator): Uint8Array;
    toProtoMsg(message: EventUpdateCurator): EventUpdateCuratorProtoMsg;
};
export declare const EventUpdateDateCriteria: {
    typeUrl: string;
    encode(message: EventUpdateDateCriteria, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateDateCriteria;
    fromJSON(object: any): EventUpdateDateCriteria;
    toJSON(message: EventUpdateDateCriteria): unknown;
    fromPartial(object: Partial<EventUpdateDateCriteria>): EventUpdateDateCriteria;
    fromAmino(object: EventUpdateDateCriteriaAmino): EventUpdateDateCriteria;
    toAmino(message: EventUpdateDateCriteria): EventUpdateDateCriteriaAmino;
    fromAminoMsg(object: EventUpdateDateCriteriaAminoMsg): EventUpdateDateCriteria;
    fromProtoMsg(message: EventUpdateDateCriteriaProtoMsg): EventUpdateDateCriteria;
    toProto(message: EventUpdateDateCriteria): Uint8Array;
    toProtoMsg(message: EventUpdateDateCriteria): EventUpdateDateCriteriaProtoMsg;
};
