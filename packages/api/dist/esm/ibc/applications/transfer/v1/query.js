//@ts-nocheck
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseQueryDenomTraceRequest() {
    return {
        hash: ""
    };
}
export const QueryDenomTraceRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTraceRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTraceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceRequest",
            value: QueryDenomTraceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTraceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTraceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
            value: QueryDenomTraceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTraceResponse() {
    return {
        denomTrace: undefined
    };
}
export const QueryDenomTraceResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomTrace !== undefined) {
            DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace = DenomTrace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denomTrace = object.denomTrace !== undefined && object.denomTrace !== null ? DenomTrace.fromPartial(object.denomTrace) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTraceResponse();
        if (object.denom_trace !== undefined && object.denom_trace !== null) {
            message.denomTrace = DenomTrace.fromAmino(object.denom_trace);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_trace = message.denomTrace ? DenomTrace.toAmino(message.denomTrace) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTraceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceResponse",
            value: QueryDenomTraceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTraceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTraceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
            value: QueryDenomTraceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryDenomTracesRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesRequest();
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
        const message = createBaseQueryDenomTracesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTracesRequest();
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
        return QueryDenomTracesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesRequest",
            value: QueryDenomTracesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTracesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTracesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
            value: QueryDenomTracesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesResponse() {
    return {
        denomTraces: [],
        pagination: undefined
    };
}
export const QueryDenomTracesResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denomTraces) {
            DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = object.denom_traces?.map(e => DenomTrace.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = message.denomTraces;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTracesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesResponse",
            value: QueryDenomTracesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTracesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTracesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
            value: QueryDenomTracesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
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
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomHashRequest() {
    return {
        trace: ""
    };
}
export const QueryDenomHashRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.trace !== "") {
            writer.uint32(10).string(message.trace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomHashRequest();
        message.trace = object.trace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomHashRequest();
        if (object.trace !== undefined && object.trace !== null) {
            message.trace = object.trace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.trace = message.trace === "" ? undefined : message.trace;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomHashRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomHashRequest",
            value: QueryDenomHashRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
            value: QueryDenomHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomHashResponse() {
    return {
        hash: ""
    };
}
export const QueryDenomHashResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomHashResponse();
        message.hash = object.hash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomHashResponse();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomHashResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomHashResponse",
            value: QueryDenomHashResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
            value: QueryDenomHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEscrowAddressRequest() {
    return {
        portId: "",
        channelId: ""
    };
}
export const QueryEscrowAddressRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEscrowAddressRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEscrowAddressRequest();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEscrowAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEscrowAddressRequest",
            value: QueryEscrowAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEscrowAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEscrowAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
            value: QueryEscrowAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEscrowAddressResponse() {
    return {
        escrowAddress: ""
    };
}
export const QueryEscrowAddressResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.escrowAddress !== "") {
            writer.uint32(10).string(message.escrowAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.escrowAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEscrowAddressResponse();
        message.escrowAddress = object.escrowAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEscrowAddressResponse();
        if (object.escrow_address !== undefined && object.escrow_address !== null) {
            message.escrowAddress = object.escrow_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.escrow_address = message.escrowAddress === "" ? undefined : message.escrowAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEscrowAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEscrowAddressResponse",
            value: QueryEscrowAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEscrowAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEscrowAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
            value: QueryEscrowAddressResponse.encode(message).finish()
        };
    }
};
