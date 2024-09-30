//@ts-nocheck
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseSellOrder() {
    return {
        id: BigInt(0),
        seller: new Uint8Array(),
        batchKey: BigInt(0),
        quantity: "",
        marketId: BigInt(0),
        askAmount: "",
        disableAutoRetire: false,
        expiration: undefined,
        maker: false
    };
}
export const SellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.SellOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.seller.length !== 0) {
            writer.uint32(18).bytes(message.seller);
        }
        if (message.batchKey !== BigInt(0)) {
            writer.uint32(24).uint64(message.batchKey);
        }
        if (message.quantity !== "") {
            writer.uint32(34).string(message.quantity);
        }
        if (message.marketId !== BigInt(0)) {
            writer.uint32(40).uint64(message.marketId);
        }
        if (message.askAmount !== "") {
            writer.uint32(50).string(message.askAmount);
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(56).bool(message.disableAutoRetire);
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(74).fork()).ldelim();
        }
        if (message.maker === true) {
            writer.uint32(80).bool(message.maker);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSellOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.seller = reader.bytes();
                    break;
                case 3:
                    message.batchKey = reader.uint64();
                    break;
                case 4:
                    message.quantity = reader.string();
                    break;
                case 5:
                    message.marketId = reader.uint64();
                    break;
                case 6:
                    message.askAmount = reader.string();
                    break;
                case 7:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 9:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.maker = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSellOrder();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.seller = object.seller ?? new Uint8Array();
        message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
        message.quantity = object.quantity ?? "";
        message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
        message.askAmount = object.askAmount ?? "";
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.expiration = object.expiration ?? undefined;
        message.maker = object.maker ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSellOrder();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = bytesFromBase64(object.seller);
        }
        if (object.batch_key !== undefined && object.batch_key !== null) {
            message.batchKey = BigInt(object.batch_key);
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = BigInt(object.market_id);
        }
        if (object.ask_amount !== undefined && object.ask_amount !== null) {
            message.askAmount = object.ask_amount;
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        if (object.maker !== undefined && object.maker !== null) {
            message.maker = object.maker;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.seller = message.seller ? base64FromBytes(message.seller) : undefined;
        obj.batch_key = message.batchKey !== BigInt(0) ? message.batchKey.toString() : undefined;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.market_id = message.marketId !== BigInt(0) ? message.marketId.toString() : undefined;
        obj.ask_amount = message.askAmount === "" ? undefined : message.askAmount;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        obj.maker = message.maker === false ? undefined : message.maker;
        return obj;
    },
    fromAminoMsg(object) {
        return SellOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SellOrder.decode(message.value);
    },
    toProto(message) {
        return SellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.SellOrder",
            value: SellOrder.encode(message).finish()
        };
    }
};
function createBaseAllowedDenom() {
    return {
        bankDenom: "",
        displayDenom: "",
        exponent: 0
    };
}
export const AllowedDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.AllowedDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bankDenom !== "") {
            writer.uint32(10).string(message.bankDenom);
        }
        if (message.displayDenom !== "") {
            writer.uint32(18).string(message.displayDenom);
        }
        if (message.exponent !== 0) {
            writer.uint32(24).uint32(message.exponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bankDenom = reader.string();
                    break;
                case 2:
                    message.displayDenom = reader.string();
                    break;
                case 3:
                    message.exponent = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllowedDenom();
        message.bankDenom = object.bankDenom ?? "";
        message.displayDenom = object.displayDenom ?? "";
        message.exponent = object.exponent ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedDenom();
        if (object.bank_denom !== undefined && object.bank_denom !== null) {
            message.bankDenom = object.bank_denom;
        }
        if (object.display_denom !== undefined && object.display_denom !== null) {
            message.displayDenom = object.display_denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bank_denom = message.bankDenom === "" ? undefined : message.bankDenom;
        obj.display_denom = message.displayDenom === "" ? undefined : message.displayDenom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        return obj;
    },
    fromAminoMsg(object) {
        return AllowedDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AllowedDenom.decode(message.value);
    },
    toProto(message) {
        return AllowedDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.AllowedDenom",
            value: AllowedDenom.encode(message).finish()
        };
    }
};
function createBaseMarket() {
    return {
        id: BigInt(0),
        creditTypeAbbrev: "",
        bankDenom: "",
        precisionModifier: 0
    };
}
export const Market = {
    typeUrl: "/regen.ecocredit.marketplace.v1.Market",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(18).string(message.creditTypeAbbrev);
        }
        if (message.bankDenom !== "") {
            writer.uint32(26).string(message.bankDenom);
        }
        if (message.precisionModifier !== 0) {
            writer.uint32(32).uint32(message.precisionModifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 3:
                    message.bankDenom = reader.string();
                    break;
                case 4:
                    message.precisionModifier = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarket();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.bankDenom = object.bankDenom ?? "";
        message.precisionModifier = object.precisionModifier ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMarket();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.bank_denom !== undefined && object.bank_denom !== null) {
            message.bankDenom = object.bank_denom;
        }
        if (object.precision_modifier !== undefined && object.precision_modifier !== null) {
            message.precisionModifier = object.precision_modifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.bank_denom = message.bankDenom === "" ? undefined : message.bankDenom;
        obj.precision_modifier = message.precisionModifier === 0 ? undefined : message.precisionModifier;
        return obj;
    },
    fromAminoMsg(object) {
        return Market.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Market.decode(message.value);
    },
    toProto(message) {
        return Market.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.Market",
            value: Market.encode(message).finish()
        };
    }
};
