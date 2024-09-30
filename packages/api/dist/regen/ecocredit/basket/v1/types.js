"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateCriteria = exports.BasketCredit = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const duration_1 = require("../../../../google/protobuf/duration");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseBasketCredit() {
    return {
        batchDenom: "",
        amount: ""
    };
}
exports.BasketCredit = {
    typeUrl: "/regen.ecocredit.basket.v1.BasketCredit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.BasketCredit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BasketCredit.decode(message.value);
    },
    toProto(message) {
        return exports.BasketCredit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.BasketCredit",
            value: exports.BasketCredit.encode(message).finish()
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
exports.DateCriteria = {
    typeUrl: "/regen.ecocredit.basket.v1.DateCriteria",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minStartDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.minStartDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.startDateWindow !== undefined) {
            duration_1.Duration.encode(message.startDateWindow, writer.uint32(18).fork()).ldelim();
        }
        if (message.yearsInThePast !== 0) {
            writer.uint32(24).uint32(message.yearsInThePast);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDateCriteria();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minStartDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.startDateWindow = duration_1.Duration.decode(reader, reader.uint32());
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
        message.startDateWindow = object.startDateWindow !== undefined && object.startDateWindow !== null ? duration_1.Duration.fromPartial(object.startDateWindow) : undefined;
        message.yearsInThePast = object.yearsInThePast ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDateCriteria();
        if (object.min_start_date !== undefined && object.min_start_date !== null) {
            message.minStartDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.min_start_date));
        }
        if (object.start_date_window !== undefined && object.start_date_window !== null) {
            message.startDateWindow = duration_1.Duration.fromAmino(object.start_date_window);
        }
        if (object.years_in_the_past !== undefined && object.years_in_the_past !== null) {
            message.yearsInThePast = object.years_in_the_past;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.min_start_date = message.minStartDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.minStartDate)) : undefined;
        obj.start_date_window = message.startDateWindow ? duration_1.Duration.toAmino(message.startDateWindow) : undefined;
        obj.years_in_the_past = message.yearsInThePast === 0 ? undefined : message.yearsInThePast;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DateCriteria.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DateCriteria.decode(message.value);
    },
    toProto(message) {
        return exports.DateCriteria.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.DateCriteria",
            value: exports.DateCriteria.encode(message).finish()
        };
    }
};
