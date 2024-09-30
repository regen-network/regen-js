//@ts-nocheck
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupPolicyInfo, GroupMember, Proposal, Vote, TallyResult } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryGroupInfoRequest() {
    return {
        groupId: BigInt(0)
    };
}
export const QueryGroupInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoRequest",
            value: QueryGroupInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
            value: QueryGroupInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryGroupInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = GroupInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? GroupInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoResponse",
            value: QueryGroupInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
            value: QueryGroupInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPolicyInfoRequest() {
    return {
        address: ""
    };
}
export const QueryGroupPolicyInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPolicyInfoRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPolicyInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
            value: QueryGroupPolicyInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPolicyInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPolicyInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
            value: QueryGroupPolicyInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPolicyInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryGroupPolicyInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupPolicyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? GroupPolicyInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = GroupPolicyInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? GroupPolicyInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPolicyInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
            value: QueryGroupPolicyInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPolicyInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPolicyInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
            value: QueryGroupPolicyInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
export const QueryGroupMembersRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
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
        const message = createBaseQueryGroupMembersRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupMembersRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersRequest",
            value: QueryGroupMembersRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupMembersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupMembersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
            value: QueryGroupMembersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersResponse() {
    return {
        members: [],
        pagination: undefined
    };
}
export const QueryGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.members) {
            GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(GroupMember.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => GroupMember.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersResponse",
            value: QueryGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
            value: QueryGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryGroupsByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
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
        const message = createBaseQueryGroupsByAdminRequest();
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
        const message = createBaseQueryGroupsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminRequest();
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
        return QueryGroupsByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminRequest",
            value: QueryGroupsByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
            value: QueryGroupsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
export const QueryGroupsByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminResponse",
            value: QueryGroupsByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
            value: QueryGroupsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByGroupRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
export const QueryGroupPoliciesByGroupRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
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
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
            value: QueryGroupPoliciesByGroupRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByGroupRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
            value: QueryGroupPoliciesByGroupRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByGroupResponse() {
    return {
        groupPolicies: [],
        pagination: undefined
    };
}
export const QueryGroupPoliciesByGroupResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groupPolicies) {
            GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = message.groupPolicies;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
            value: QueryGroupPoliciesByGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByGroupResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
            value: QueryGroupPoliciesByGroupResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryGroupPoliciesByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
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
        const message = createBaseQueryGroupPoliciesByAdminRequest();
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
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByAdminRequest();
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
        return QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
            value: QueryGroupPoliciesByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
            value: QueryGroupPoliciesByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByAdminResponse() {
    return {
        groupPolicies: [],
        pagination: undefined
    };
}
export const QueryGroupPoliciesByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groupPolicies) {
            GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.groupPolicies = object.groupPolicies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.groupPolicies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.group_policies = message.groupPolicies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = message.groupPolicies;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
            value: QueryGroupPoliciesByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
            value: QueryGroupPoliciesByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalRequest() {
    return {
        proposalId: BigInt(0)
    };
}
export const QueryProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalRequest",
            value: QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalRequest",
            value: QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
export const QueryProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalResponse();
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = Proposal.fromAmino(object.proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalResponse",
            value: QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalResponse",
            value: QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupPolicyRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryProposalsByGroupPolicyRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
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
        const message = createBaseQueryProposalsByGroupPolicyRequest();
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
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupPolicyRequest();
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
        return QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
            value: QueryProposalsByGroupPolicyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalsByGroupPolicyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsByGroupPolicyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
            value: QueryProposalsByGroupPolicyRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupPolicyResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
export const QueryProposalsByGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
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
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
            value: QueryProposalsByGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalsByGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsByGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
            value: QueryProposalsByGroupPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterRequest() {
    return {
        proposalId: BigInt(0),
        voter: ""
    };
}
export const QueryVoteByProposalVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteByProposalVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
            value: QueryVoteByProposalVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVoteByProposalVoterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVoteByProposalVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
            value: QueryVoteByProposalVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterResponse() {
    return {
        vote: undefined
    };
}
export const QueryVoteByProposalVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = Vote.fromAmino(object.vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteByProposalVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
            value: QueryVoteByProposalVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVoteByProposalVoterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVoteByProposalVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
            value: QueryVoteByProposalVoterResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalRequest() {
    return {
        proposalId: BigInt(0),
        pagination: undefined
    };
}
export const QueryVotesByProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
        const message = createBaseQueryVotesByProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalRequest",
            value: QueryVotesByProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
            value: QueryVotesByProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
export const QueryVotesByProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
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
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalResponse",
            value: QueryVotesByProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
            value: QueryVotesByProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterRequest() {
    return {
        voter: "",
        pagination: undefined
    };
}
export const QueryVotesByVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
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
        const message = createBaseQueryVotesByVoterRequest();
        message.voter = object.voter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterRequest();
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterRequest",
            value: QueryVotesByVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByVoterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
            value: QueryVotesByVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
export const QueryVotesByVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
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
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterResponse",
            value: QueryVotesByVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByVoterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
            value: QueryVotesByVoterResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByMemberRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryGroupsByMemberRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
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
        const message = createBaseQueryGroupsByMemberRequest();
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
        const message = createBaseQueryGroupsByMemberRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByMemberRequest();
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
        return QueryGroupsByMemberRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberRequest",
            value: QueryGroupsByMemberRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByMemberRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
            value: QueryGroupsByMemberRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByMemberResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
export const QueryGroupsByMemberResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByMemberResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberResponse",
            value: QueryGroupsByMemberResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByMemberResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
            value: QueryGroupsByMemberResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultRequest() {
    return {
        proposalId: BigInt(0)
    };
}
export const QueryTallyResultRequest = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTallyResultRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultRequest",
            value: QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
            value: QueryTallyResultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultResponse() {
    return {
        tally: TallyResult.fromPartial({})
    };
}
export const QueryTallyResultResponse = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tally !== undefined) {
            TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTallyResultResponse();
        if (object.tally !== undefined && object.tally !== null) {
            message.tally = TallyResult.fromAmino(object.tally);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultResponse",
            value: QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
            value: QueryTallyResultResponse.encode(message).finish()
        };
    }
};
