//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType } from "./state";
import { Params } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryClassesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
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
            typeUrl: "/regen.ecocredit.v1.QueryClassesRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
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
            typeUrl: "/regen.ecocredit.v1.QueryClassesResponse",
            value: QueryClassesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassesByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryClassesByAdminRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
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
        const message = createBaseQueryClassesByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassesByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassesByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassesByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest",
            value: QueryClassesByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassesByAdminResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
export const QueryClassesByAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
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
        const message = createBaseQueryClassesByAdminResponse();
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
        const message = createBaseQueryClassesByAdminResponse();
        message.classes = object.classes?.map(e => ClassInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesByAdminResponse();
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
        return QueryClassesByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassesByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassesByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse",
            value: QueryClassesByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassRequest() {
    return {
        classId: ""
    };
}
export const QueryClassRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryClassRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassRequest",
            value: QueryClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassResponse() {
    return {
        class: undefined
    };
}
export const QueryClassResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.class !== undefined) {
            ClassInfo.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = ClassInfo.decode(reader, reader.uint32());
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
        message.class = object.class !== undefined && object.class !== null ? ClassInfo.fromPartial(object.class) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassResponse();
        if (object.class !== undefined && object.class !== null) {
            message.class = ClassInfo.fromAmino(object.class);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class = message.class ? ClassInfo.toAmino(message.class) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassResponse",
            value: QueryClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassIssuersRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
export const QueryClassIssuersRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
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
        const message = createBaseQueryClassIssuersRequest();
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
        const message = createBaseQueryClassIssuersRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassIssuersRequest();
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
        return QueryClassIssuersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassIssuersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassIssuersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest",
            value: QueryClassIssuersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassIssuersResponse() {
    return {
        issuers: [],
        pagination: undefined
    };
}
export const QueryClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.issuers) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassIssuersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuers.push(reader.string());
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
        const message = createBaseQueryClassIssuersResponse();
        message.issuers = object.issuers?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassIssuersResponse();
        message.issuers = object.issuers?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse",
            value: QueryClassIssuersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryProjectsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsRequest();
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
        const message = createBaseQueryProjectsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsRequest();
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
        return QueryProjectsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest",
            value: QueryProjectsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
export const QueryProjectsResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.projects) {
            ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse",
            value: QueryProjectsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByClassRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
export const QueryProjectsByClassRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassRequest",
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
        const message = createBaseQueryProjectsByClassRequest();
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
        const message = createBaseQueryProjectsByClassRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByClassRequest();
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
        return QueryProjectsByClassRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsByClassRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsByClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassRequest",
            value: QueryProjectsByClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByClassResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
export const QueryProjectsByClassResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.projects) {
            ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsByClassResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByClassResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectsByClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsByClassResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsByClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByClassResponse",
            value: QueryProjectsByClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByReferenceIdRequest() {
    return {
        referenceId: "",
        pagination: undefined
    };
}
export const QueryProjectsByReferenceIdRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.referenceId !== "") {
            writer.uint32(10).string(message.referenceId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByReferenceIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referenceId = reader.string();
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
        const message = createBaseQueryProjectsByReferenceIdRequest();
        message.referenceId = object.referenceId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByReferenceIdRequest();
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectsByReferenceIdRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsByReferenceIdRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsByReferenceIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest",
            value: QueryProjectsByReferenceIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByReferenceIdResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
export const QueryProjectsByReferenceIdResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.projects) {
            ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByReferenceIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsByReferenceIdResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByReferenceIdResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectsByReferenceIdResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsByReferenceIdResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsByReferenceIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse",
            value: QueryProjectsByReferenceIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryProjectsByAdminRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
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
        const message = createBaseQueryProjectsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectsByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminRequest",
            value: QueryProjectsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectsByAdminResponse() {
    return {
        projects: [],
        pagination: undefined
    };
}
export const QueryProjectsByAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.projects) {
            ProjectInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(ProjectInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProjectsByAdminResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectsByAdminResponse();
        message.projects = object.projects?.map(e => ProjectInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(e => e ? ProjectInfo.toAmino(e) : undefined);
        }
        else {
            obj.projects = message.projects;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectsByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProjectsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectsByAdminResponse",
            value: QueryProjectsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProjectRequest() {
    return {
        projectId: ""
    };
}
export const QueryProjectRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryProjectRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProjectRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectRequest",
            value: QueryProjectRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProjectResponse() {
    return {
        project: undefined
    };
}
export const QueryProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.project !== undefined) {
            ProjectInfo.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = ProjectInfo.decode(reader, reader.uint32());
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
        message.project = object.project !== undefined && object.project !== null ? ProjectInfo.fromPartial(object.project) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProjectResponse();
        if (object.project !== undefined && object.project !== null) {
            message.project = ProjectInfo.fromAmino(object.project);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project = message.project ? ProjectInfo.toAmino(message.project) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProjectResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryProjectResponse",
            value: QueryProjectResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryBatchesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesRequest();
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
            typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
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
            typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse",
            value: QueryBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByIssuerRequest() {
    return {
        issuer: "",
        pagination: undefined
    };
}
export const QueryBatchesByIssuerRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByIssuerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
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
        const message = createBaseQueryBatchesByIssuerRequest();
        message.issuer = object.issuer ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByIssuerRequest();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchesByIssuerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesByIssuerRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesByIssuerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest",
            value: QueryBatchesByIssuerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByIssuerResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
export const QueryBatchesByIssuerResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
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
        const message = createBaseQueryBatchesByIssuerResponse();
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
        const message = createBaseQueryBatchesByIssuerResponse();
        message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByIssuerResponse();
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
        return QueryBatchesByIssuerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesByIssuerResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesByIssuerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse",
            value: QueryBatchesByIssuerResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByClassRequest() {
    return {
        classId: "",
        pagination: undefined
    };
}
export const QueryBatchesByClassRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
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
        const message = createBaseQueryBatchesByClassRequest();
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
        const message = createBaseQueryBatchesByClassRequest();
        message.classId = object.classId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByClassRequest();
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
        return QueryBatchesByClassRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesByClassRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesByClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest",
            value: QueryBatchesByClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByProjectRequest() {
    return {
        projectId: "",
        pagination: undefined
    };
}
export const QueryBatchesByProjectRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchesByProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
        const message = createBaseQueryBatchesByProjectRequest();
        message.projectId = object.projectId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByProjectRequest();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchesByProjectRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesByProjectRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesByProjectRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectRequest",
            value: QueryBatchesByProjectRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByProjectResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
export const QueryBatchesByProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectResponse",
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
        const message = createBaseQueryBatchesByProjectResponse();
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
        const message = createBaseQueryBatchesByProjectResponse();
        message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByProjectResponse();
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
        return QueryBatchesByProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesByProjectResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesByProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByProjectResponse",
            value: QueryBatchesByProjectResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchesByClassResponse() {
    return {
        batches: [],
        pagination: undefined
    };
}
export const QueryBatchesByClassResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
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
        const message = createBaseQueryBatchesByClassResponse();
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
        const message = createBaseQueryBatchesByClassResponse();
        message.batches = object.batches?.map(e => BatchInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchesByClassResponse();
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
        return QueryBatchesByClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchesByClassResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchesByClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse",
            value: QueryBatchesByClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequest() {
    return {
        batchDenom: ""
    };
}
export const QueryBatchRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBatchRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchRequest",
            value: QueryBatchRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchResponse() {
    return {
        batch: undefined
    };
}
export const QueryBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batch !== undefined) {
            BatchInfo.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = BatchInfo.decode(reader, reader.uint32());
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
        message.batch = object.batch !== undefined && object.batch !== null ? BatchInfo.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = BatchInfo.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? BatchInfo.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBatchResponse",
            value: QueryBatchResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceRequest() {
    return {
        address: "",
        batchDenom: ""
    };
}
export const QueryBalanceRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
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
            typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest",
            value: QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        balance: undefined
    };
}
export const QueryBalanceResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.balance !== undefined) {
            BatchBalanceInfo.encode(message.balance, writer.uint32(10).fork()).ldelim();
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
                    message.balance = BatchBalanceInfo.decode(reader, reader.uint32());
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
        message.balance = object.balance !== undefined && object.balance !== null ? BatchBalanceInfo.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = BatchBalanceInfo.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance ? BatchBalanceInfo.toAmino(message.balance) : undefined;
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
            typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse",
            value: QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryBalancesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        const message = createBaseQueryBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest",
            value: QueryBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
export const QueryBalancesResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balances) {
            BatchBalanceInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBalancesResponse();
        message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesResponse();
        message.balances = object.balances?.map(e => BatchBalanceInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse",
            value: QueryBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesByBatchRequest() {
    return {
        batchDenom: "",
        pagination: undefined
    };
}
export const QueryBalancesByBatchRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesByBatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
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
        const message = createBaseQueryBalancesByBatchRequest();
        message.batchDenom = object.batchDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesByBatchRequest();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalancesByBatchRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalancesByBatchRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalancesByBatchRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchRequest",
            value: QueryBalancesByBatchRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesByBatchResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
export const QueryBalancesByBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balances) {
            BatchBalanceInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesByBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBalancesByBatchResponse();
        message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesByBatchResponse();
        message.balances = object.balances?.map(e => BatchBalanceInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalancesByBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalancesByBatchResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalancesByBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryBalancesByBatchResponse",
            value: QueryBalancesByBatchResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBalancesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllBalancesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryAllBalancesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesRequest();
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
        const message = createBaseQueryAllBalancesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBalancesRequest();
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
        return QueryAllBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllBalancesRequest",
            value: QueryAllBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
export const QueryAllBalancesResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryAllBalancesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balances) {
            BatchBalanceInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(BatchBalanceInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map(e => BatchBalanceInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map(e => BatchBalanceInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? BatchBalanceInfo.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllBalancesResponse",
            value: QueryAllBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        batchDenom: ""
    };
}
export const QuerySupplyRequest = {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
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
            typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest",
            value: QuerySupplyRequest.encode(message).finish()
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
export const QuerySupplyResponse = {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse",
            value: QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypesRequest() {
    return {};
}
export const QueryCreditTypesRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
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
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
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
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse",
            value: QueryCreditTypesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
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
            typeUrl: "/regen.ecocredit.v1.QueryParamsRequest",
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
    typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
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
            typeUrl: "/regen.ecocredit.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypeRequest() {
    return {
        abbreviation: ""
    };
}
export const QueryCreditTypeRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCreditTypeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCreditTypeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCreditTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypeRequest",
            value: QueryCreditTypeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCreditTypeResponse() {
    return {
        creditType: undefined
    };
}
export const QueryCreditTypeResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creditType !== undefined) {
            CreditType.encode(message.creditType, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCreditTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditType = CreditType.decode(reader, reader.uint32());
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
        message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCreditTypeResponse();
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = CreditType.fromAmino(object.credit_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCreditTypeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCreditTypeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCreditTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryCreditTypeResponse",
            value: QueryCreditTypeResponse.encode(message).finish()
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
export const ClassInfo = {
    typeUrl: "/regen.ecocredit.v1.ClassInfo",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ClassInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClassInfo.decode(message.value);
    },
    toProto(message) {
        return ClassInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassInfo",
            value: ClassInfo.encode(message).finish()
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
export const ProjectInfo = {
    typeUrl: "/regen.ecocredit.v1.ProjectInfo",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ProjectInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProjectInfo.decode(message.value);
    },
    toProto(message) {
        return ProjectInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ProjectInfo",
            value: ProjectInfo.encode(message).finish()
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
export const BatchInfo = {
    typeUrl: "/regen.ecocredit.v1.BatchInfo",
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.issuanceDate !== undefined) {
            Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(64).bool(message.open);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
        }
        if (object.issuance_date !== undefined && object.issuance_date !== null) {
            message.issuanceDate = fromTimestamp(Timestamp.fromAmino(object.issuance_date));
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
        obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
        obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
        obj.issuance_date = message.issuanceDate ? Timestamp.toAmino(toTimestamp(message.issuanceDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchInfo.decode(message.value);
    },
    toProto(message) {
        return BatchInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchInfo",
            value: BatchInfo.encode(message).finish()
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
export const BatchBalanceInfo = {
    typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BatchBalanceInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchBalanceInfo.decode(message.value);
    },
    toProto(message) {
        return BatchBalanceInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo",
            value: BatchBalanceInfo.encode(message).finish()
        };
    }
};
function createBaseQueryClassCreatorAllowlistRequest() {
    return {};
}
export const QueryClassCreatorAllowlistRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryClassCreatorAllowlistRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassCreatorAllowlistRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassCreatorAllowlistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistRequest",
            value: QueryClassCreatorAllowlistRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassCreatorAllowlistResponse() {
    return {
        enabled: false
    };
}
export const QueryClassCreatorAllowlistResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryClassCreatorAllowlistResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassCreatorAllowlistResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassCreatorAllowlistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassCreatorAllowlistResponse",
            value: QueryClassCreatorAllowlistResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedClassCreatorsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllowedClassCreatorsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedClassCreatorsRequest();
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
        const message = createBaseQueryAllowedClassCreatorsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedClassCreatorsRequest();
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
        return QueryAllowedClassCreatorsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllowedClassCreatorsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllowedClassCreatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsRequest",
            value: QueryAllowedClassCreatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedClassCreatorsResponse() {
    return {
        classCreators: [],
        pagination: undefined
    };
}
export const QueryAllowedClassCreatorsResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.classCreators) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedClassCreatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classCreators.push(reader.string());
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
        const message = createBaseQueryAllowedClassCreatorsResponse();
        message.classCreators = object.classCreators?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedClassCreatorsResponse();
        message.classCreators = object.class_creators?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowedClassCreatorsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllowedClassCreatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllowedClassCreatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedClassCreatorsResponse",
            value: QueryAllowedClassCreatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassFeeRequest() {
    return {};
}
export const QueryClassFeeRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryClassFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassFeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassFeeRequest",
            value: QueryClassFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassFeeResponse() {
    return {
        fee: undefined
    };
}
export const QueryClassFeeResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryClassFeeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = Coin.decode(reader, reader.uint32());
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
        message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassFeeResponse();
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClassFeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryClassFeeResponse",
            value: QueryClassFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedBridgeChainsRequest() {
    return {};
}
export const QueryAllowedBridgeChainsRequest = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAllowedBridgeChainsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllowedBridgeChainsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllowedBridgeChainsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsRequest",
            value: QueryAllowedBridgeChainsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedBridgeChainsResponse() {
    return {
        allowedBridgeChains: []
    };
}
export const QueryAllowedBridgeChainsResponse = {
    typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.allowedBridgeChains) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAllowedBridgeChainsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllowedBridgeChainsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllowedBridgeChainsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.QueryAllowedBridgeChainsResponse",
            value: QueryAllowedBridgeChainsResponse.encode(message).finish()
        };
    }
};
