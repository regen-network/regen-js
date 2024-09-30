//@ts-nocheck
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
function createBaseBasketCredit() {
    return {
        batchDenom: "",
        amount: ""
    };
}
export const BasketCredit = {
    typeUrl: "/regen.ecocredit.basket.v1.BasketCredit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasketCredit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBasketCredit();
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasketCredit();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return BasketCredit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BasketCredit.decode(message.value);
    },
    toProto(message) {
        return BasketCredit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.BasketCredit",
            value: BasketCredit.encode(message).finish()
        };
    }
};
function createBaseDateCriteria() {
    return {
        minStartDate: undefined,
        startDateWindow: undefined,
        yearsInThePast: 0
    };
}
export const DateCriteria = {
    typeUrl: "/regen.ecocredit.basket.v1.DateCriteria",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minStartDate !== undefined) {
            Timestamp.encode(toTimestamp(message.minStartDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.startDateWindow !== undefined) {
            Duration.encode(message.startDateWindow, writer.uint32(18).fork()).ldelim();
        }
        if (message.yearsInThePast !== 0) {
            writer.uint32(24).uint32(message.yearsInThePast);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDateCriteria();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.startDateWindow = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.yearsInThePast = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDateCriteria();
        message.minStartDate = object.minStartDate ?? undefined;
        message.startDateWindow = object.startDateWindow !== undefined && object.startDateWindow !== null ? Duration.fromPartial(object.startDateWindow) : undefined;
        message.yearsInThePast = object.yearsInThePast ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDateCriteria();
        if (object.min_start_date !== undefined && object.min_start_date !== null) {
            message.minStartDate = fromTimestamp(Timestamp.fromAmino(object.min_start_date));
        }
        if (object.start_date_window !== undefined && object.start_date_window !== null) {
            message.startDateWindow = Duration.fromAmino(object.start_date_window);
        }
        if (object.years_in_the_past !== undefined && object.years_in_the_past !== null) {
            message.yearsInThePast = object.years_in_the_past;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.min_start_date = message.minStartDate ? Timestamp.toAmino(toTimestamp(message.minStartDate)) : undefined;
        obj.start_date_window = message.startDateWindow ? Duration.toAmino(message.startDateWindow) : undefined;
        obj.years_in_the_past = message.yearsInThePast === 0 ? undefined : message.yearsInThePast;
        return obj;
    },
    fromAminoMsg(object) {
        return DateCriteria.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DateCriteria.decode(message.value);
    },
    toProto(message) {
        return DateCriteria.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.DateCriteria",
            value: DateCriteria.encode(message).finish()
        };
    }
};
