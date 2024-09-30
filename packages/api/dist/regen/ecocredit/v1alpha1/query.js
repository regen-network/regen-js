"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreditTypesResponse = exports.QueryCreditTypesRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.QueryBatchInfoResponse = exports.QueryBatchInfoRequest = exports.QueryBatchesResponse = exports.QueryBatchesRequest = exports.QueryClassInfoResponse = exports.QueryClassInfoRequest = exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? types_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClassesRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
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
        const message = createBaseQueryClassesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesRequest();
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
        return exports.QueryClassesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest",
            value: exports.QueryClassesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassesResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
exports.QueryClassesResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classes) {
            types_1.ClassInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(types_1.ClassInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => types_1.ClassInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => types_1.ClassInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? types_1.ClassInfo.toAmino(e) : undefined);
        }
        else {
            obj.classes = message.classes;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse",
            value: exports.QueryClassesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassInfoRequest() {
    return {
        classId: ""
    };
}
exports.QueryClassInfoRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClassInfoRequest();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassInfoRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest",
            value: exports.QueryClassInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryClassInfoResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.ClassInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.ClassInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClassInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.ClassInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = types_1.ClassInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.ClassInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse",
            value: exports.QueryClassInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
exports.QueryBatchesRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
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
        const message = createBaseQueryBatchesRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest",
            value: exports.QueryBatchesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
exports.QueryBatchesResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batches) {
            types_1.BatchInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(types_1.BatchInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchesResponse();
        message.batches = object.batches?.map(e => types_1.BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesResponse();
        message.batches = object.batches?.map(e => types_1.BatchInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? types_1.BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse",
            value: exports.QueryBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchInfoRequest() {
    return {
        batchDenom: ""
    };
}
exports.QueryBatchInfoRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryBatchInfoRequest();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchInfoRequest();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest",
            value: exports.QueryBatchInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryBatchInfoResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.BatchInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.BatchInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.BatchInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = types_1.BatchInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.BatchInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse",
            value: exports.QueryBatchInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceRequest() {
    return {
        account: "",
        batchDenom: ""
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
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
        const message = createBaseQueryBalanceRequest();
        message.account = object.account ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceRequest();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest",
            value: exports.QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        tradableAmount: "",
        retiredAmount: ""
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tradableAmount !== "") {
            writer.uint32(10).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(18).string(message.retiredAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradableAmount = reader.string();
                    break;
                case 2:
                    message.retiredAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse",
            value: exports.QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        batchDenom: ""
    };
}
exports.QuerySupplyRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQuerySupplyRequest();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyRequest();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest",
            value: exports.QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        tradableSupply: "",
        retiredSupply: ""
    };
}
exports.QuerySupplyResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tradableSupply !== "") {
            writer.uint32(10).string(message.tradableSupply);
        }
        if (message.retiredSupply !== "") {
            writer.uint32(18).string(message.retiredSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradableSupply = reader.string();
                    break;
                case 2:
                    message.retiredSupply = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.tradableSupply = object.tradableSupply ?? "";
        message.retiredSupply = object.retiredSupply ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyResponse();
        if (object.tradable_supply !== undefined && object.tradable_supply !== null) {
            message.tradableSupply = object.tradable_supply;
        }
        if (object.retired_supply !== undefined && object.retired_supply !== null) {
            message.retiredSupply = object.retired_supply;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tradable_supply = message.tradableSupply === "" ? undefined : message.tradableSupply;
        obj.retired_supply = message.retiredSupply === "" ? undefined : message.retiredSupply;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse",
            value: exports.QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypesRequest() {
    return {};
}
exports.QueryCreditTypesRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCreditTypesRequest();
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
        const message = createBaseQueryCreditTypesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCreditTypesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCreditTypesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCreditTypesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCreditTypesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest",
            value: exports.QueryCreditTypesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypesResponse() {
    return {
        creditTypes: []
    };
}
exports.QueryCreditTypesResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.creditTypes) {
            types_1.CreditType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCreditTypesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditTypes.push(types_1.CreditType.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCreditTypesResponse();
        message.creditTypes = object.creditTypes?.map(e => types_1.CreditType.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCreditTypesResponse();
        message.creditTypes = object.credit_types?.map(e => types_1.CreditType.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.creditTypes) {
            obj.credit_types = message.creditTypes.map(e => e ? types_1.CreditType.toAmino(e) : undefined);
        }
        else {
            obj.credit_types = message.creditTypes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCreditTypesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCreditTypesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCreditTypesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse",
            value: exports.QueryCreditTypesResponse.encode(message).finish()
        };
    }
};
