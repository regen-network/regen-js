"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consensus = exports.App = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
function createBaseApp() {
    return {
        protocol: BigInt(0),
        software: ""
    };
}
exports.App = {
    typeUrl: "/tendermint.version.App",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.protocol !== BigInt(0)) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseApp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.uint64();
                    break;
                case 2:
                    message.software = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseApp();
        message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
        message.software = object.software ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseApp();
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = BigInt(object.protocol);
        }
        if (object.software !== undefined && object.software !== null) {
            message.software = object.software;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol = message.protocol !== BigInt(0) ? message.protocol.toString() : undefined;
        obj.software = message.software === "" ? undefined : message.software;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.App.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.App.decode(message.value);
    },
    toProto(message) {
        return exports.App.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.App",
            value: exports.App.encode(message).finish()
        };
    }
};
function createBaseConsensus() {
    return {
        block: BigInt(0),
        app: BigInt(0)
    };
}
exports.Consensus = {
    typeUrl: "/tendermint.version.Consensus",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
                    break;
                case 2:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensus();
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensus();
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block !== BigInt(0) ? message.block.toString() : undefined;
        obj.app = message.app !== BigInt(0) ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Consensus.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Consensus.decode(message.value);
    },
    toProto(message) {
        return exports.Consensus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.Consensus",
            value: exports.Consensus.encode(message).finish()
        };
    }
};
