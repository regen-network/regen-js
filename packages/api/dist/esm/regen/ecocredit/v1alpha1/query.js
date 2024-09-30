//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ClassInfo, BatchInfo, CreditType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryParamsResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryClassesRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesRequest",
            value: QueryClassesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassesResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
export const QueryClassesResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.classes) {
            ClassInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(ClassInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => ClassInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? ClassInfo.toAmino(e) : undefined);
        }
        else {
            obj.classes = message.classes;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassesResponse",
            value: QueryClassesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassInfoRequest() {
    return {
        classId: ""
    };
}
export const QueryClassInfoRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryClassInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoRequest",
            value: QueryClassInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryClassInfoResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            ClassInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = ClassInfo.decode(reader, reader.uint32());
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
        message.info = object.info !== undefined && object.info !== null ? ClassInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = ClassInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? ClassInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryClassInfoResponse",
            value: QueryClassInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
export const QueryBatchesRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesRequest",
            value: QueryBatchesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
export const QueryBatchesResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.batches) {
            BatchInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(BatchInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesResponse();
        message.batches = object.batches?.map(e => BatchInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchesResponse",
            value: QueryBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchInfoRequest() {
    return {
        batchDenom: ""
    };
}
export const QueryBatchInfoRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBatchInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoRequest",
            value: QueryBatchInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryBatchInfoResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            BatchInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = BatchInfo.decode(reader, reader.uint32());
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
        message.info = object.info !== undefined && object.info !== null ? BatchInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = BatchInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? BatchInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBatchInfoResponse",
            value: QueryBatchInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceRequest() {
    return {
        account: "",
        batchDenom: ""
    };
}
export const QueryBalanceRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceRequest",
            value: QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        tradableAmount: "",
        retiredAmount: ""
    };
}
export const QueryBalanceResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tradableAmount !== "") {
            writer.uint32(10).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(18).string(message.retiredAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryBalanceResponse",
            value: QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        batchDenom: ""
    };
}
export const QuerySupplyRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyRequest",
            value: QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        tradableSupply: "",
        retiredSupply: ""
    };
}
export const QuerySupplyResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tradableSupply !== "") {
            writer.uint32(10).string(message.tradableSupply);
        }
        if (message.retiredSupply !== "") {
            writer.uint32(18).string(message.retiredSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QuerySupplyResponse",
            value: QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypesRequest() {
    return {};
}
export const QueryCreditTypesRequest = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCreditTypesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCreditTypesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCreditTypesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesRequest",
            value: QueryCreditTypesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypesResponse() {
    return {
        creditTypes: []
    };
}
export const QueryCreditTypesResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.creditTypes) {
            CreditType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCreditTypesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
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
        message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCreditTypesResponse();
        message.creditTypes = object.credit_types?.map(e => CreditType.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.creditTypes) {
            obj.credit_types = message.creditTypes.map(e => e ? CreditType.toAmino(e) : undefined);
        }
        else {
            obj.credit_types = message.creditTypes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCreditTypesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCreditTypesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCreditTypesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.QueryCreditTypesResponse",
            value: QueryCreditTypesResponse.encode(message).finish()
        };
    }
};
