"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransferResponse = exports.MsgTransfer = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
function createBaseMsgTransfer() {
    return {
        sourcePort: "",
        sourceChannel: "",
        token: coin_1.Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeoutHeight: client_1.Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
exports.MsgTransfer = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeoutHeight !== undefined) {
            client_1.Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(56).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourcePort = reader.string();
                    break;
                case 2:
                    message.sourceChannel = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.token = object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? client_1.Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransfer();
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = coin_1.Coin.fromAmino(object.token);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = client_1.Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
        obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
        obj.token = message.token ? coin_1.Coin.toAmino(message.token) : undefined;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.timeout_height = message.timeoutHeight ? client_1.Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransfer",
            value: exports.MsgTransfer.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: exports.MsgTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgTransferResponse() {
    return {};
}
exports.MsgTransferResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
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
        const message = createBaseMsgTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferResponse",
            value: exports.MsgTransferResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
            value: exports.MsgTransferResponse.encode(message).finish()
        };
    }
};
