"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.Coin = {
    typeUrl: "/cosmos.base.v1beta1.Coin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCoin();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Coin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Coin",
            value: exports.Coin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Coin.decode(message.value);
    },
    toProto(message) {
        return exports.Coin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.Coin",
            value: exports.Coin.encode(message).finish()
        };
    }
};
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.DecCoin = {
    typeUrl: "/cosmos.base.v1beta1.DecCoin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDecCoin();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecCoin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecCoin",
            value: exports.DecCoin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecCoin.decode(message.value);
    },
    toProto(message) {
        return exports.DecCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecCoin",
            value: exports.DecCoin.encode(message).finish()
        };
    }
};
function createBaseIntProto() {
    return {
        int: ""
    };
}
exports.IntProto = {
    typeUrl: "/cosmos.base.v1beta1.IntProto",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIntProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIntProto();
        message.int = object.int ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIntProto();
        if (object.int !== undefined && object.int !== null) {
            message.int = object.int;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.int = message.int === "" ? undefined : message.int;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IntProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IntProto",
            value: exports.IntProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IntProto.decode(message.value);
    },
    toProto(message) {
        return exports.IntProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.IntProto",
            value: exports.IntProto.encode(message).finish()
        };
    }
};
function createBaseDecProto() {
    return {
        dec: ""
    };
}
exports.DecProto = {
    typeUrl: "/cosmos.base.v1beta1.DecProto",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecProto();
        message.dec = object.dec ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDecProto();
        if (object.dec !== undefined && object.dec !== null) {
            message.dec = object.dec;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.dec = message.dec === "" ? undefined : message.dec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecProto",
            value: exports.DecProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecProto.decode(message.value);
    },
    toProto(message) {
        return exports.DecProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecProto",
            value: exports.DecProto.encode(message).finish()
        };
    }
};
