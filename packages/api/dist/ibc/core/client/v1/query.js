"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryConsensusStateHeightsResponse = exports.QueryConsensusStateHeightsRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("./client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseQueryClientStateRequest() {
    return {
        clientId: ""
    };
}
exports.QueryClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStateRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateRequest",
            value: exports.QueryClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
            value: exports.QueryClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStateResponse() {
    return {
        clientState: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStateResponse();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = any_1.Any.fromAmino(object.client_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateResponse",
            value: exports.QueryClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
            value: exports.QueryClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClientStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesRequest();
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
        return exports.QueryClientStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesResponse() {
    return {
        clientStates: [],
        pagination: undefined
    };
}
exports.QueryClientStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.clientStates) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientStates.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = object.clientStates?.map(e => client_1.IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = object.client_states?.map(e => client_1.IdentifiedClientState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.clientStates) {
            obj.client_states = message.clientStates.map(e => e ? client_1.IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.client_states = message.clientStates;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateRequest() {
    return {
        clientId: "",
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0),
        latestHeight: false
    };
}
exports.QueryConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
                    break;
                case 4:
                    message.latestHeight = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        message.clientId = object.clientId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        message.latestHeight = object.latestHeight ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.revision_number !== undefined && object.revision_number !== null) {
            message.revisionNumber = BigInt(object.revision_number);
        }
        if (object.revision_height !== undefined && object.revision_height !== null) {
            message.revisionHeight = BigInt(object.revision_height);
        }
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latestHeight = object.latest_height;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight.toString() : undefined;
        obj.latest_height = message.latestHeight === false ? undefined : message.latestHeight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateResponse() {
    return {
        consensusState: undefined,
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = any_1.Any.fromAmino(object.consensus_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensusState ? any_1.Any.toAmino(message.consensusState) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesRequest() {
    return {
        clientId: "",
        pagination: undefined
    };
}
exports.QueryConsensusStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
        const message = createBaseQueryConsensusStatesRequest();
        message.clientId = object.clientId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesResponse() {
    return {
        consensusStates: [],
        pagination: undefined
    };
}
exports.QueryConsensusStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.consensusStates) {
            client_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusStates.push(client_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = object.consensusStates?.map(e => client_1.ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = object.consensus_states?.map(e => client_1.ConsensusStateWithHeight.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? client_1.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = message.consensusStates;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateHeightsRequest() {
    return {
        clientId: "",
        pagination: undefined
    };
}
exports.QueryConsensusStateHeightsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
        const message = createBaseQueryConsensusStateHeightsRequest();
        message.clientId = object.clientId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateHeightsRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateHeightsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateHeightsRequest",
            value: exports.QueryConsensusStateHeightsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateHeightsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateHeightsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
            value: exports.QueryConsensusStateHeightsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateHeightsResponse() {
    return {
        consensusStateHeights: [],
        pagination: undefined
    };
}
exports.QueryConsensusStateHeightsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.consensusStateHeights) {
            client_1.Height.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusStateHeights.push(client_1.Height.decode(reader, reader.uint32()));
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
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensusStateHeights = object.consensusStateHeights?.map(e => client_1.Height.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensusStateHeights = object.consensus_state_heights?.map(e => client_1.Height.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensusStateHeights) {
            obj.consensus_state_heights = message.consensusStateHeights.map(e => e ? client_1.Height.toAmino(e) : undefined);
        }
        else {
            obj.consensus_state_heights = message.consensusStateHeights;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateHeightsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateHeightsResponse",
            value: exports.QueryConsensusStateHeightsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateHeightsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateHeightsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
            value: exports.QueryConsensusStateHeightsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusRequest() {
    return {
        clientId: ""
    };
}
exports.QueryClientStatusRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatusRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
exports.QueryClientStatusResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusResponse();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatusResponse();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === "" ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsRequest() {
    return {};
}
exports.QueryClientParamsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
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
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryClientParamsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
exports.QueryUpgradedClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
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
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgradedClientState: undefined
    };
}
exports.QueryUpgradedClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedClientState !== undefined) {
            any_1.Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedClientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? any_1.Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgradedClientState = any_1.Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
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
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: undefined
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedConsensusState !== undefined) {
            any_1.Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
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
                case 1:
                    message.upgradedConsensusState = any_1.Any.decode(reader, reader.uint32());
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
        message.upgradedConsensusState = object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null ? any_1.Any.fromPartial(object.upgradedConsensusState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgradedConsensusState = any_1.Any.fromAmino(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState ? any_1.Any.toAmino(message.upgradedConsensusState) : undefined;
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
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
