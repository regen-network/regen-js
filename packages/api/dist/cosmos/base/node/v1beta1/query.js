"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigResponse = exports.ConfigRequest = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
function createBaseConfigRequest() {
    return {};
}
exports.ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfigRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: exports.ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: exports.ConfigRequest.encode(message).finish()
        };
    }
};
function createBaseConfigResponse() {
    return {
        minimumGasPrice: ""
    };
}
exports.ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minimumGasPrice !== "") {
            writer.uint32(10).string(message.minimumGasPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimumGasPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimumGasPrice = object.minimumGasPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfigResponse();
        if (object.minimum_gas_price !== undefined && object.minimum_gas_price !== null) {
            message.minimumGasPrice = object.minimum_gas_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimumGasPrice === "" ? undefined : message.minimumGasPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: exports.ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: exports.ConfigResponse.encode(message).finish()
        };
    }
};
