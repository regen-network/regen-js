"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClassCreatorAllowlistResponse = exports.QueryClassCreatorAllowlistRequest = exports.BatchBalanceInfo = exports.BatchInfo = exports.ProjectInfo = exports.ClassInfo = exports.QueryCreditTypeResponse = exports.QueryCreditTypeRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryCreditTypesResponse = exports.QueryCreditTypesRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryAllBalancesResponse = exports.QueryAllBalancesRequest = exports.QueryBalancesByBatchResponse = exports.QueryBalancesByBatchRequest = exports.QueryBalancesResponse = exports.QueryBalancesRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.QueryBatchResponse = exports.QueryBatchRequest = exports.QueryBatchesByClassResponse = exports.QueryBatchesByProjectResponse = exports.QueryBatchesByProjectRequest = exports.QueryBatchesByClassRequest = exports.QueryBatchesByIssuerResponse = exports.QueryBatchesByIssuerRequest = exports.QueryBatchesResponse = exports.QueryBatchesRequest = exports.QueryProjectResponse = exports.QueryProjectRequest = exports.QueryProjectsByAdminResponse = exports.QueryProjectsByAdminRequest = exports.QueryProjectsByReferenceIdResponse = exports.QueryProjectsByReferenceIdRequest = exports.QueryProjectsByClassResponse = exports.QueryProjectsByClassRequest = exports.QueryProjectsResponse = exports.QueryProjectsRequest = exports.QueryClassIssuersResponse = exports.QueryClassIssuersRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryClassesByAdminResponse = exports.QueryClassesByAdminRequest = exports.QueryClassesResponse = exports.QueryClassesRequest = void 0;
exports.QueryAllowedBridgeChainsResponse = exports.QueryAllowedBridgeChainsRequest = exports.QueryClassFeeResponse = exports.QueryClassFeeRequest = exports.QueryAllowedClassCreatorsResponse = exports.QueryAllowedClassCreatorsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const state_1 = require("./state");
const types_1 = require("./types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClassesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
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
            typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classes) {
            exports.ClassInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.classes.push(exports.ClassInfo.decode(reader, reader.uint32()));
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
        message.classes = object.classes?.map(e => exports.ClassInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => exports.ClassInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? exports.ClassInfo.toAmino(e) : undefined);
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
            typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
            value: exports.QueryClassesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassesByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryClassesByAdminRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
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
        const message = createBaseQueryClassesByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassesByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassesByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
            value: exports.QueryClassesByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassesByAdminResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
exports.QueryClassesByAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classes) {
            exports.ClassInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(exports.ClassInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryClassesByAdminResponse();
        message.classes = object.classes?.map(e => exports.ClassInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesByAdminResponse();
        message.classes = object.classes?.map(e => exports.ClassInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? exports.ClassInfo.toAmino(e) : undefined);
        }
        else {
            obj.classes = message.classes;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassesByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassesByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
            value: exports.QueryClassesByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassRequest() {
    return {
        classId: ""
    };
}
exports.QueryClassRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
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
        const message = createBaseQueryClassRequest();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassRequest();
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
        return exports.QueryClassRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
            value: exports.QueryClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassResponse() {
    return {
        class: undefined
    };
}
exports.QueryClassResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class !== undefined) {
            exports.ClassInfo.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = exports.ClassInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = object.class !== undefined && object.class !== null ? exports.ClassInfo.fromPartial(object.class) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassResponse();
        if (object.class !== undefined && object.class !== null) {
            message.class = exports.ClassInfo.fromAmino(object.class);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class = message.class ? exports.ClassInfo.toAmino(message.class) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
            value: exports.QueryClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassIssuersRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
exports.QueryClassIssuersRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
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
        const message = createBaseQueryClassIssuersRequest();
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
        const message = createBaseQueryClassIssuersRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassIssuersRequest();
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
        return exports.QueryClassIssuersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassIssuersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassIssuersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
            value: exports.QueryClassIssuersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassIssuersResponse() {
    return {
        issuers: [],
        pagination: undefined
    };
}
exports.QueryClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.issuers) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassIssuersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuers.push(reader.string());
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
        const message = createBaseQueryClassIssuersResponse();
        message.issuers = object.issuers?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassIssuersResponse();
        message.issuers = object.issuers?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.issuers) {
            obj.issuers = message.issuers.map(e => e);
        }
        else {
            obj.issuers = message.issuers;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
            value: exports.QueryClassIssuersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryProjectsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsRequest();
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
        const message = createBaseQueryProjectsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsRequest();
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
        return exports.QueryProjectsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
            value: exports.QueryProjectsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
exports.QueryProjectsResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.projects) {
            exports.ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(exports.ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? exports.ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
            value: exports.QueryProjectsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByClassRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
exports.QueryProjectsByClassRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassRequest",
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
        const message = createBaseQueryProjectsByClassRequest();
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
        const message = createBaseQueryProjectsByClassRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByClassRequest();
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
        return exports.QueryProjectsByClassRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsByClassRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsByClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassRequest",
            value: exports.QueryProjectsByClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByClassResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
exports.QueryProjectsByClassResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.projects) {
            exports.ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(exports.ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsByClassResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByClassResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? exports.ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectsByClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsByClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsByClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassResponse",
            value: exports.QueryProjectsByClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByReferenceIdRequest() {
    return {
        referenceId: "",
        pagination: undefined
    };
}
exports.QueryProjectsByReferenceIdRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.referenceId !== "") {
            writer.uint32(10).string(message.referenceId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByReferenceIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referenceId = reader.string();
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
        const message = createBaseQueryProjectsByReferenceIdRequest();
        message.referenceId = object.referenceId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByReferenceIdRequest();
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectsByReferenceIdRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsByReferenceIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsByReferenceIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
            value: exports.QueryProjectsByReferenceIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByReferenceIdResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
exports.QueryProjectsByReferenceIdResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.projects) {
            exports.ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByReferenceIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(exports.ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsByReferenceIdResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByReferenceIdResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? exports.ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectsByReferenceIdResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsByReferenceIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsByReferenceIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
            value: exports.QueryProjectsByReferenceIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryProjectsByAdminRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
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
        const message = createBaseQueryProjectsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectsByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminRequest",
            value: exports.QueryProjectsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByAdminResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
exports.QueryProjectsByAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.projects) {
            exports.ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(exports.ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsByAdminResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByAdminResponse();
        message.projects = object.projects?.map(e => exports.ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? exports.ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectsByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminResponse",
            value: exports.QueryProjectsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectRequest() {
    return {
        projectId: ""
    };
}
exports.QueryProjectRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProjectRequest();
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectRequest();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
            value: exports.QueryProjectRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectResponse() {
    return {
        project: undefined
    };
}
exports.QueryProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.project !== undefined) {
            exports.ProjectInfo.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = exports.ProjectInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProjectResponse();
        message.project = object.project !== undefined && object.project !== null ? exports.ProjectInfo.fromPartial(object.project) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectResponse();
        if (object.project !== undefined && object.project !== null) {
            message.project = exports.ProjectInfo.fromAmino(object.project);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project = message.project ? exports.ProjectInfo.toAmino(message.project) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProjectResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
            value: exports.QueryProjectResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryBatchesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesRequest();
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
            typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batches) {
            exports.BatchInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.batches.push(exports.BatchInfo.decode(reader, reader.uint32()));
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
        message.batches = object.batches?.map(e => exports.BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? exports.BatchInfo.toAmino(e) : undefined);
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
            typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
            value: exports.QueryBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByIssuerRequest() {
    return {
        issuer: "",
        pagination: undefined
    };
}
exports.QueryBatchesByIssuerRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByIssuerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
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
        const message = createBaseQueryBatchesByIssuerRequest();
        message.issuer = object.issuer ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByIssuerRequest();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesByIssuerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesByIssuerRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesByIssuerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
            value: exports.QueryBatchesByIssuerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByIssuerResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
exports.QueryBatchesByIssuerResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batches) {
            exports.BatchInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByIssuerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(exports.BatchInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBatchesByIssuerResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByIssuerResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? exports.BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesByIssuerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesByIssuerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesByIssuerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
            value: exports.QueryBatchesByIssuerResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByClassRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
exports.QueryBatchesByClassRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
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
        const message = createBaseQueryBatchesByClassRequest();
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
        const message = createBaseQueryBatchesByClassRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByClassRequest();
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
        return exports.QueryBatchesByClassRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesByClassRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesByClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
            value: exports.QueryBatchesByClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByProjectRequest() {
    return {
        projectId: "",
        pagination: undefined
    };
}
exports.QueryBatchesByProjectRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
        const message = createBaseQueryBatchesByProjectRequest();
        message.projectId = object.projectId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByProjectRequest();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesByProjectRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesByProjectRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesByProjectRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectRequest",
            value: exports.QueryBatchesByProjectRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByProjectResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
exports.QueryBatchesByProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batches) {
            exports.BatchInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(exports.BatchInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBatchesByProjectResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByProjectResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? exports.BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesByProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesByProjectResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesByProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectResponse",
            value: exports.QueryBatchesByProjectResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByClassResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
exports.QueryBatchesByClassResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batches) {
            exports.BatchInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(exports.BatchInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBatchesByClassResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByClassResponse();
        message.batches = object.batches?.map(e => exports.BatchInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? exports.BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchesByClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchesByClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchesByClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
            value: exports.QueryBatchesByClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequest() {
    return {
        batchDenom: ""
    };
}
exports.QueryBatchRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequest();
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
        const message = createBaseQueryBatchRequest();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchRequest();
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
        return exports.QueryBatchRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
            value: exports.QueryBatchRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchResponse() {
    return {
        batch: undefined
    };
}
exports.QueryBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batch !== undefined) {
            exports.BatchInfo.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = exports.BatchInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? exports.BatchInfo.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = exports.BatchInfo.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? exports.BatchInfo.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
            value: exports.QueryBatchResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceRequest() {
    return {
        address: "",
        batchDenom: ""
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
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
                    message.address = reader.string();
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
        message.address = object.address ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
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
            typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
            value: exports.QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        balance: undefined
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balance !== undefined) {
            exports.BatchBalanceInfo.encode(message.balance, writer.uint32(10).fork()).ldelim();
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
                    message.balance = exports.BatchBalanceInfo.decode(reader, reader.uint32());
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
        message.balance = object.balance !== undefined && object.balance !== null ? exports.BatchBalanceInfo.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = exports.BatchBalanceInfo.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance ? exports.BatchBalanceInfo.toAmino(message.balance) : undefined;
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
            typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
            value: exports.QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryBalancesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        const message = createBaseQueryBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
            value: exports.QueryBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
exports.QueryBalancesResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balances) {
            exports.BatchBalanceInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(exports.BatchBalanceInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBalancesResponse();
        message.balances = object.balances?.map(e => exports.BatchBalanceInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesResponse();
        message.balances = object.balances?.map(e => exports.BatchBalanceInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.BatchBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
            value: exports.QueryBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesByBatchRequest() {
    return {
        batchDenom: "",
        pagination: undefined
    };
}
exports.QueryBalancesByBatchRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesByBatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
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
        const message = createBaseQueryBalancesByBatchRequest();
        message.batchDenom = object.batchDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesByBatchRequest();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalancesByBatchRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalancesByBatchRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalancesByBatchRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchRequest",
            value: exports.QueryBalancesByBatchRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesByBatchResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
exports.QueryBalancesByBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balances) {
            exports.BatchBalanceInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesByBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(exports.BatchBalanceInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBalancesByBatchResponse();
        message.balances = object.balances?.map(e => exports.BatchBalanceInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesByBatchResponse();
        message.balances = object.balances?.map(e => exports.BatchBalanceInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.BatchBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalancesByBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalancesByBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalancesByBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchResponse",
            value: exports.QueryBalancesByBatchResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBalancesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllBalancesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryAllBalancesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesRequest();
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
        const message = createBaseQueryAllBalancesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBalancesRequest();
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
        return exports.QueryAllBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllBalancesRequest",
            value: exports.QueryAllBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
exports.QueryAllBalancesResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryAllBalancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balances) {
            exports.BatchBalanceInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(exports.BatchBalanceInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map(e => exports.BatchBalanceInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map(e => exports.BatchBalanceInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.BatchBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllBalancesResponse",
            value: exports.QueryAllBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        batchDenom: ""
    };
}
exports.QuerySupplyRequest = {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
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
            typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
            value: exports.QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        tradableAmount: "",
        retiredAmount: "",
        cancelledAmount: ""
    };
}
exports.QuerySupplyResponse = {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tradableAmount !== "") {
            writer.uint32(10).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(18).string(message.retiredAmount);
        }
        if (message.cancelledAmount !== "") {
            writer.uint32(26).string(message.cancelledAmount);
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
                    message.tradableAmount = reader.string();
                    break;
                case 2:
                    message.retiredAmount = reader.string();
                    break;
                case 3:
                    message.cancelledAmount = reader.string();
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
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.cancelledAmount = object.cancelledAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyResponse();
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
            message.cancelledAmount = object.cancelled_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
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
            typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
            value: exports.QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypesRequest() {
    return {};
}
exports.QueryCreditTypesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
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
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.creditTypes) {
            state_1.CreditType.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.creditTypes.push(state_1.CreditType.decode(reader, reader.uint32()));
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
        message.creditTypes = object.creditTypes?.map(e => state_1.CreditType.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCreditTypesResponse();
        message.creditTypes = object.credit_types?.map(e => state_1.CreditType.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.creditTypes) {
            obj.credit_types = message.creditTypes.map(e => e ? state_1.CreditType.toAmino(e) : undefined);
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
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
            value: exports.QueryCreditTypesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
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
            typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
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
            typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypeRequest() {
    return {
        abbreviation: ""
    };
}
exports.QueryCreditTypeRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCreditTypeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.abbreviation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCreditTypeRequest();
        message.abbreviation = object.abbreviation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCreditTypeRequest();
        if (object.abbreviation !== undefined && object.abbreviation !== null) {
            message.abbreviation = object.abbreviation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCreditTypeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCreditTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCreditTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypeRequest",
            value: exports.QueryCreditTypeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypeResponse() {
    return {
        creditType: undefined
    };
}
exports.QueryCreditTypeResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creditType !== undefined) {
            state_1.CreditType.encode(message.creditType, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCreditTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditType = state_1.CreditType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCreditTypeResponse();
        message.creditType = object.creditType !== undefined && object.creditType !== null ? state_1.CreditType.fromPartial(object.creditType) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCreditTypeResponse();
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = state_1.CreditType.fromAmino(object.credit_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.credit_type = message.creditType ? state_1.CreditType.toAmino(message.creditType) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCreditTypeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCreditTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCreditTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypeResponse",
            value: exports.QueryCreditTypeResponse.encode(message).finish()
        };
    }
};
function createBaseClassInfo() {
    return {
        id: "",
        admin: "",
        metadata: "",
        creditTypeAbbrev: ""
    };
}
exports.ClassInfo = {
    typeUrl: "/regen.ecocredit.v1.ClassInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(34).string(message.creditTypeAbbrev);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.creditTypeAbbrev = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClassInfo();
        message.id = object.id ?? "";
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? "";
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClassInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClassInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ClassInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassInfo",
            value: exports.ClassInfo.encode(message).finish()
        };
    }
};
function createBaseProjectInfo() {
    return {
        id: "",
        admin: "",
        classId: "",
        jurisdiction: "",
        metadata: "",
        referenceId: ""
    };
}
exports.ProjectInfo = {
    typeUrl: "/regen.ecocredit.v1.ProjectInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(26).string(message.classId);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(34).string(message.jurisdiction);
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        if (message.referenceId !== "") {
            writer.uint32(50).string(message.referenceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.classId = reader.string();
                    break;
                case 4:
                    message.jurisdiction = reader.string();
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.referenceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProjectInfo();
        message.id = object.id ?? "";
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.jurisdiction = object.jurisdiction ?? "";
        message.metadata = object.metadata ?? "";
        message.referenceId = object.referenceId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseProjectInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProjectInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProjectInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ProjectInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ProjectInfo",
            value: exports.ProjectInfo.encode(message).finish()
        };
    }
};
function createBaseBatchInfo() {
    return {
        issuer: "",
        projectId: "",
        denom: "",
        metadata: "",
        startDate: undefined,
        endDate: undefined,
        issuanceDate: undefined,
        open: false
    };
}
exports.BatchInfo = {
    typeUrl: "/regen.ecocredit.v1.BatchInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.issuanceDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.issuanceDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(64).bool(message.open);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.issuanceDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.open = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchInfo();
        message.issuer = object.issuer ?? "";
        message.projectId = object.projectId ?? "";
        message.denom = object.denom ?? "";
        message.metadata = object.metadata ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.issuanceDate = object.issuanceDate ?? undefined;
        message.open = object.open ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchInfo();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_date));
        }
        if (object.issuance_date !== undefined && object.issuance_date !== null) {
            message.issuanceDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.issuance_date));
        }
        if (object.open !== undefined && object.open !== null) {
            message.open = object.open;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.start_date = message.startDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startDate)) : undefined;
        obj.end_date = message.endDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endDate)) : undefined;
        obj.issuance_date = message.issuanceDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.issuanceDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchInfo.decode(message.value);
    },
    toProto(message) {
        return exports.BatchInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchInfo",
            value: exports.BatchInfo.encode(message).finish()
        };
    }
};
function createBaseBatchBalanceInfo() {
    return {
        address: "",
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: "",
        escrowedAmount: ""
    };
}
exports.BatchBalanceInfo = {
    typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(26).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(34).string(message.retiredAmount);
        }
        if (message.escrowedAmount !== "") {
            writer.uint32(42).string(message.escrowedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchBalanceInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.tradableAmount = reader.string();
                    break;
                case 4:
                    message.retiredAmount = reader.string();
                    break;
                case 5:
                    message.escrowedAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchBalanceInfo();
        message.address = object.address ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.escrowedAmount = object.escrowedAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchBalanceInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.escrowed_amount !== undefined && object.escrowed_amount !== null) {
            message.escrowedAmount = object.escrowed_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.escrowed_amount = message.escrowedAmount === "" ? undefined : message.escrowedAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchBalanceInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchBalanceInfo.decode(message.value);
    },
    toProto(message) {
        return exports.BatchBalanceInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
            value: exports.BatchBalanceInfo.encode(message).finish()
        };
    }
};
function createBaseQueryClassCreatorAllowlistRequest() {
    return {};
}
exports.QueryClassCreatorAllowlistRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassCreatorAllowlistRequest();
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
        const message = createBaseQueryClassCreatorAllowlistRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryClassCreatorAllowlistRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassCreatorAllowlistRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassCreatorAllowlistRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassCreatorAllowlistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest",
            value: exports.QueryClassCreatorAllowlistRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassCreatorAllowlistResponse() {
    return {
        enabled: false
    };
}
exports.QueryClassCreatorAllowlistResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassCreatorAllowlistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClassCreatorAllowlistResponse();
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassCreatorAllowlistResponse();
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassCreatorAllowlistResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassCreatorAllowlistResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassCreatorAllowlistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse",
            value: exports.QueryClassCreatorAllowlistResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedClassCreatorsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllowedClassCreatorsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedClassCreatorsRequest();
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
        const message = createBaseQueryAllowedClassCreatorsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedClassCreatorsRequest();
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
        return exports.QueryAllowedClassCreatorsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllowedClassCreatorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowedClassCreatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest",
            value: exports.QueryAllowedClassCreatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedClassCreatorsResponse() {
    return {
        classCreators: [],
        pagination: undefined
    };
}
exports.QueryAllowedClassCreatorsResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classCreators) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedClassCreatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classCreators.push(reader.string());
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
        const message = createBaseQueryAllowedClassCreatorsResponse();
        message.classCreators = object.classCreators?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedClassCreatorsResponse();
        message.classCreators = object.class_creators?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classCreators) {
            obj.class_creators = message.classCreators.map(e => e);
        }
        else {
            obj.class_creators = message.classCreators;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowedClassCreatorsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllowedClassCreatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowedClassCreatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse",
            value: exports.QueryAllowedClassCreatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassFeeRequest() {
    return {};
}
exports.QueryClassFeeRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassFeeRequest();
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
        const message = createBaseQueryClassFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryClassFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest",
            value: exports.QueryClassFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassFeeResponse() {
    return {
        fee: undefined
    };
}
exports.QueryClassFeeResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassFeeResponse();
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
        const message = createBaseQueryClassFeeResponse();
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassFeeResponse();
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
        return exports.QueryClassFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClassFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassFeeResponse",
            value: exports.QueryClassFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedBridgeChainsRequest() {
    return {};
}
exports.QueryAllowedBridgeChainsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedBridgeChainsRequest();
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
        const message = createBaseQueryAllowedBridgeChainsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAllowedBridgeChainsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowedBridgeChainsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllowedBridgeChainsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowedBridgeChainsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest",
            value: exports.QueryAllowedBridgeChainsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedBridgeChainsResponse() {
    return {
        allowedBridgeChains: []
    };
}
exports.QueryAllowedBridgeChainsResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowedBridgeChains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedBridgeChainsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowedBridgeChains.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowedBridgeChainsResponse();
        message.allowedBridgeChains = object.allowedBridgeChains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedBridgeChainsResponse();
        message.allowedBridgeChains = object.allowed_bridge_chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowedBridgeChains) {
            obj.allowed_bridge_chains = message.allowedBridgeChains.map(e => e);
        }
        else {
            obj.allowed_bridge_chains = message.allowedBridgeChains;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowedBridgeChainsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllowedBridgeChainsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowedBridgeChainsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse",
            value: exports.QueryAllowedBridgeChainsResponse.encode(message).finish()
        };
    }
};
