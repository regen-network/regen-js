import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being put into or taken out of the basket.
     * Decimal values are acceptable within the precision of the corresponding
     *  credit type for this batch.
     */
    amount: string;
}
export interface BasketCreditProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.BasketCredit";
    value: Uint8Array;
}
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCreditAmino {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /**
     * amount is the number of credits being put into or taken out of the basket.
     * Decimal values are acceptable within the precision of the corresponding
     *  credit type for this batch.
     */
    amount: string;
}
export interface BasketCreditAminoMsg {
    type: "/regen.ecocredit.basket.v1.BasketCredit";
    value: BasketCreditAmino;
}
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCreditSDKType {
    batch_denom: string;
    amount: string;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 */
export interface DateCriteria {
    /**
     * min_start_date (optional) is the earliest start date for batches of credits
     * allowed into the basket. At most only one of `start_date_window`,
     * `min_start_date`, and `years_in_the_past` can be set for a basket.
     */
    minStartDate?: Timestamp;
    /**
     * start_date_window (optional) is a duration of time measured into the past
     * which sets a cutoff for batch start dates when adding new credits to the
     * basket. Based on the current block timestamp, credits whose start date is
     * before `block_timestamp - start_date_window` will not be allowed into the
     * basket. At most only one of `start_date_window`, `min_start_date`, and
     * `years_in_the_past` can be set for a basket.
     */
    startDateWindow?: Duration;
    /**
     * years_in_the_past (optional) is the number of years into the past which
     * sets a cutoff for the batch start dates when adding new credits to the
     * basket. Based on the current block timestamp, credits whose start date year
     * is less than `block_timestamp_year - years_in_the_past` will not be allowed
     * into the basket. At most only one of `start_date_window`, `min_start_date`,
     * and `years_in_the_past` can be set for a basket.
     *
     * Since Revision 1
     */
    yearsInThePast: number;
}
export interface DateCriteriaProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.DateCriteria";
    value: Uint8Array;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 */
export interface DateCriteriaAmino {
    /**
     * min_start_date (optional) is the earliest start date for batches of credits
     * allowed into the basket. At most only one of `start_date_window`,
     * `min_start_date`, and `years_in_the_past` can be set for a basket.
     */
    min_start_date?: TimestampAmino;
    /**
     * start_date_window (optional) is a duration of time measured into the past
     * which sets a cutoff for batch start dates when adding new credits to the
     * basket. Based on the current block timestamp, credits whose start date is
     * before `block_timestamp - start_date_window` will not be allowed into the
     * basket. At most only one of `start_date_window`, `min_start_date`, and
     * `years_in_the_past` can be set for a basket.
     */
    start_date_window?: DurationAmino;
    /**
     * years_in_the_past (optional) is the number of years into the past which
     * sets a cutoff for the batch start dates when adding new credits to the
     * basket. Based on the current block timestamp, credits whose start date year
     * is less than `block_timestamp_year - years_in_the_past` will not be allowed
     * into the basket. At most only one of `start_date_window`, `min_start_date`,
     * and `years_in_the_past` can be set for a basket.
     *
     * Since Revision 1
     */
    years_in_the_past: number;
}
export interface DateCriteriaAminoMsg {
    type: "/regen.ecocredit.basket.v1.DateCriteria";
    value: DateCriteriaAmino;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 */
export interface DateCriteriaSDKType {
    min_start_date?: TimestampSDKType;
    start_date_window?: DurationSDKType;
    years_in_the_past: number;
}
export declare const BasketCredit: {
    encode(message: BasketCredit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketCredit;
    fromJSON(object: any): BasketCredit;
    toJSON(message: BasketCredit): unknown;
    fromPartial(object: Partial<BasketCredit>): BasketCredit;
    fromAmino(object: BasketCreditAmino): BasketCredit;
    toAmino(message: BasketCredit): BasketCreditAmino;
    fromAminoMsg(object: BasketCreditAminoMsg): BasketCredit;
    fromProtoMsg(message: BasketCreditProtoMsg): BasketCredit;
    toProto(message: BasketCredit): Uint8Array;
    toProtoMsg(message: BasketCredit): BasketCreditProtoMsg;
};
export declare const DateCriteria: {
    encode(message: DateCriteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DateCriteria;
    fromJSON(object: any): DateCriteria;
    toJSON(message: DateCriteria): unknown;
    fromPartial(object: Partial<DateCriteria>): DateCriteria;
    fromAmino(object: DateCriteriaAmino): DateCriteria;
    toAmino(message: DateCriteria): DateCriteriaAmino;
    fromAminoMsg(object: DateCriteriaAminoMsg): DateCriteria;
    fromProtoMsg(message: DateCriteriaProtoMsg): DateCriteria;
    toProto(message: DateCriteria): Uint8Array;
    toProtoMsg(message: DateCriteria): DateCriteriaProtoMsg;
};
