"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuthorityResponse = exports.QueryAuthorityRequest = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = void 0;
//@ts-nocheck
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanRequest",
            value: exports.QueryCurrentPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentPlanRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
            value: exports.QueryCurrentPlanRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: undefined
    };
}
exports.QueryCurrentPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentPlanResponse();
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = upgrade_1.Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCurrentPlanResponse",
            value: exports.QueryCurrentPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentPlanResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
            value: exports.QueryCurrentPlanResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAppliedPlanRequest() {
    return {
        name: ""
    };
}
exports.QueryAppliedPlanRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppliedPlanRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanRequest",
            value: exports.QueryAppliedPlanRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppliedPlanRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppliedPlanRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
            value: exports.QueryAppliedPlanRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAppliedPlanResponse() {
    return {
        height: BigInt(0)
    };
}
exports.QueryAppliedPlanResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAppliedPlanResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAppliedPlanResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAppliedPlanResponse",
            value: exports.QueryAppliedPlanResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAppliedPlanResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAppliedPlanResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
            value: exports.QueryAppliedPlanResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        lastHeight: BigInt(0)
    };
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lastHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        if (object.last_height !== undefined && object.last_height !== null) {
            message.lastHeight = BigInt(object.last_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_height = message.lastHeight !== BigInt(0) ? message.lastHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: new Uint8Array()
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgradedConsensusState = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgradedConsensusState = (0, helpers_1.bytesFromBase64)(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState ? (0, helpers_1.base64FromBytes)(message.upgradedConsensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleVersionsRequest() {
    return {
        moduleName: ""
    };
}
exports.QueryModuleVersionsRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = object.moduleName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsRequest();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleVersionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsRequest",
            value: exports.QueryModuleVersionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleVersionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleVersionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
            value: exports.QueryModuleVersionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleVersionsResponse() {
    return {
        moduleVersions: []
    };
}
exports.QueryModuleVersionsResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.moduleVersions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleVersions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.moduleVersions?.map(e => upgrade_1.ModuleVersion.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.module_versions?.map(e => upgrade_1.ModuleVersion.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.moduleVersions) {
            obj.module_versions = message.moduleVersions.map(e => e ? upgrade_1.ModuleVersion.toAmino(e) : undefined);
        }
        else {
            obj.module_versions = message.moduleVersions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleVersionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleVersionsResponse",
            value: exports.QueryModuleVersionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryModuleVersionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleVersionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
            value: exports.QueryModuleVersionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAuthorityRequest() {
    return {};
}
exports.QueryAuthorityRequest = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityRequest();
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
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAuthorityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAuthorityRequest",
            value: exports.QueryAuthorityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAuthorityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuthorityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
            value: exports.QueryAuthorityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuthorityResponse() {
    return {
        address: ""
    };
}
exports.QueryAuthorityResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityResponse();
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
        const message = createBaseQueryAuthorityResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuthorityResponse();
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
        return exports.QueryAuthorityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAuthorityResponse",
            value: exports.QueryAuthorityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAuthorityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuthorityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
            value: exports.QueryAuthorityResponse.encode(message).finish()
        };
    }
};
