"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBasketFeeResponse = exports.QueryBasketFeeRequest = exports.BasketBalanceInfo = exports.BasketInfo = exports.QueryBasketBalanceResponse = exports.QueryBasketBalanceRequest = exports.QueryBasketBalancesResponse = exports.QueryBasketBalancesRequest = exports.QueryBasketsResponse = exports.QueryBasketsRequest = exports.QueryBasketResponse = exports.QueryBasketRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const state_1 = require("./state");
const types_1 = require("./types");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
function createBaseQueryBasketRequest() {
    return {
        basketDenom: ""
    };
}
exports.QueryBasketRequest = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketRequest();
        message.basketDenom = object.basketDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketRequest();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketRequest",
            value: exports.QueryBasketRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBasketResponse() {
    return {
        basket: undefined,
        classes: [],
        basketInfo: undefined
    };
}
exports.QueryBasketResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basket !== undefined) {
            state_1.Basket.encode(message.basket, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.classes) {
            writer.uint32(18).string(v);
        }
        if (message.basketInfo !== undefined) {
            exports.BasketInfo.encode(message.basketInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basket = state_1.Basket.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.classes.push(reader.string());
                    break;
                case 3:
                    message.basketInfo = exports.BasketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketResponse();
        message.basket = object.basket !== undefined && object.basket !== null ? state_1.Basket.fromPartial(object.basket) : undefined;
        message.classes = object.classes?.map(e => e) || [];
        message.basketInfo = object.basketInfo !== undefined && object.basketInfo !== null ? exports.BasketInfo.fromPartial(object.basketInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketResponse();
        if (object.basket !== undefined && object.basket !== null) {
            message.basket = state_1.Basket.fromAmino(object.basket);
        }
        message.classes = object.classes?.map(e => e) || [];
        if (object.basket_info !== undefined && object.basket_info !== null) {
            message.basketInfo = exports.BasketInfo.fromAmino(object.basket_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket = message.basket ? state_1.Basket.toAmino(message.basket) : undefined;
        if (message.classes) {
            obj.classes = message.classes.map(e => e);
        }
        else {
            obj.classes = message.classes;
        }
        obj.basket_info = message.basketInfo ? exports.BasketInfo.toAmino(message.basketInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketResponse",
            value: exports.QueryBasketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBasketsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryBasketsRequest = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsRequest",
            value: exports.QueryBasketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBasketsResponse() {
    return {
        baskets: [],
        pagination: undefined,
        basketsInfo: []
    };
}
exports.QueryBasketsResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.baskets) {
            state_1.Basket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.basketsInfo) {
            exports.BasketInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baskets.push(state_1.Basket.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.basketsInfo.push(exports.BasketInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketsResponse();
        message.baskets = object.baskets?.map(e => state_1.Basket.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.basketsInfo = object.basketsInfo?.map(e => exports.BasketInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketsResponse();
        message.baskets = object.baskets?.map(e => state_1.Basket.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        message.basketsInfo = object.baskets_info?.map(e => exports.BasketInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.baskets) {
            obj.baskets = message.baskets.map(e => e ? state_1.Basket.toAmino(e) : undefined);
        }
        else {
            obj.baskets = message.baskets;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        if (message.basketsInfo) {
            obj.baskets_info = message.basketsInfo.map(e => e ? exports.BasketInfo.toAmino(e) : undefined);
        }
        else {
            obj.baskets_info = message.basketsInfo;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketsResponse",
            value: exports.QueryBasketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBasketBalancesRequest() {
    return {
        basketDenom: "",
        pagination: undefined
    };
}
exports.QueryBasketBalancesRequest = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketBalancesRequest();
        message.basketDenom = object.basketDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketBalancesRequest();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesRequest",
            value: exports.QueryBasketBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBasketBalancesResponse() {
    return {
        balances: [],
        pagination: undefined,
        balancesInfo: []
    };
}
exports.QueryBasketBalancesResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balances) {
            state_1.BasketBalance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.balancesInfo) {
            exports.BasketBalanceInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(state_1.BasketBalance.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.balancesInfo.push(exports.BasketBalanceInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketBalancesResponse();
        message.balances = object.balances?.map(e => state_1.BasketBalance.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.balancesInfo = object.balancesInfo?.map(e => exports.BasketBalanceInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketBalancesResponse();
        message.balances = object.balances?.map(e => state_1.BasketBalance.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        message.balancesInfo = object.balances_info?.map(e => exports.BasketBalanceInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? state_1.BasketBalance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        if (message.balancesInfo) {
            obj.balances_info = message.balancesInfo.map(e => e ? exports.BasketBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances_info = message.balancesInfo;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalancesResponse",
            value: exports.QueryBasketBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBasketBalanceRequest() {
    return {
        basketDenom: "",
        batchDenom: ""
    };
}
exports.QueryBasketBalanceRequest = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketBalanceRequest();
        message.basketDenom = object.basketDenom ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketBalanceRequest();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceRequest",
            value: exports.QueryBasketBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBasketBalanceResponse() {
    return {
        balance: ""
    };
}
exports.QueryBasketBalanceResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketBalanceResponse();
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketBalanceResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance === "" ? undefined : message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketBalanceResponse",
            value: exports.QueryBasketBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseBasketInfo() {
    return {
        basketDenom: "",
        name: "",
        disableAutoRetire: false,
        creditTypeAbbrev: "",
        dateCriteria: undefined,
        exponent: 0,
        curator: ""
    };
}
exports.BasketInfo = {
    typeUrl: "/regen.ecocredit.basket.v1.BasketInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(24).bool(message.disableAutoRetire);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(34).string(message.creditTypeAbbrev);
        }
        if (message.dateCriteria !== undefined) {
            types_1.DateCriteria.encode(message.dateCriteria, writer.uint32(42).fork()).ldelim();
        }
        if (message.exponent !== 0) {
            writer.uint32(48).uint32(message.exponent);
        }
        if (message.curator !== "") {
            writer.uint32(58).string(message.curator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasketInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 4:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 5:
                    message.dateCriteria = types_1.DateCriteria.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.exponent = reader.uint32();
                    break;
                case 7:
                    message.curator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBasketInfo();
        message.basketDenom = object.basketDenom ?? "";
        message.name = object.name ?? "";
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? types_1.DateCriteria.fromPartial(object.dateCriteria) : undefined;
        message.exponent = object.exponent ?? 0;
        message.curator = object.curator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasketInfo();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.date_criteria !== undefined && object.date_criteria !== null) {
            message.dateCriteria = types_1.DateCriteria.fromAmino(object.date_criteria);
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.curator !== undefined && object.curator !== null) {
            message.curator = object.curator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.name = message.name === "" ? undefined : message.name;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.date_criteria = message.dateCriteria ? types_1.DateCriteria.toAmino(message.dateCriteria) : undefined;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.curator = message.curator === "" ? undefined : message.curator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BasketInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BasketInfo.decode(message.value);
    },
    toProto(message) {
        return exports.BasketInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.BasketInfo",
            value: exports.BasketInfo.encode(message).finish()
        };
    }
};
function createBaseBasketBalanceInfo() {
    return {
        batchDenom: "",
        balance: ""
    };
}
exports.BasketBalanceInfo = {
    typeUrl: "/regen.ecocredit.basket.v1.BasketBalanceInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.balance !== "") {
            writer.uint32(18).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasketBalanceInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBasketBalanceInfo();
        message.batchDenom = object.batchDenom ?? "";
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasketBalanceInfo();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.balance = message.balance === "" ? undefined : message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BasketBalanceInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BasketBalanceInfo.decode(message.value);
    },
    toProto(message) {
        return exports.BasketBalanceInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.BasketBalanceInfo",
            value: exports.BasketBalanceInfo.encode(message).finish()
        };
    }
};
function createBaseQueryBasketFeeRequest() {
    return {};
}
exports.QueryBasketFeeRequest = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketFeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryBasketFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBasketFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeRequest",
            value: exports.QueryBasketFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBasketFeeResponse() {
    return {
        fee: undefined
    };
}
exports.QueryBasketFeeResponse = {
    typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBasketFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBasketFeeResponse();
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBasketFeeResponse();
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = coin_1.Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee = message.fee ? coin_1.Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBasketFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBasketFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBasketFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.QueryBasketFeeResponse",
            value: exports.QueryBasketFeeResponse.encode(message).finish()
        };
    }
};
