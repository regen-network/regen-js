//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
export const Coin = {
    typeUrl: "/cosmos.base.v1beta1.Coin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Coin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Coin",
            value: Coin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Coin.decode(message.value);
    },
    toProto(message) {
        return Coin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.Coin",
            value: Coin.encode(message).finish()
        };
    }
};
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
export const DecCoin = {
    typeUrl: "/cosmos.base.v1beta1.DecCoin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return DecCoin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecCoin",
            value: DecCoin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DecCoin.decode(message.value);
    },
    toProto(message) {
        return DecCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecCoin",
            value: DecCoin.encode(message).finish()
        };
    }
};
function createBaseIntProto() {
    return {
        int: ""
    };
}
export const IntProto = {
    typeUrl: "/cosmos.base.v1beta1.IntProto",
    encode(message, writer = BinaryWriter.create()) {
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return IntProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IntProto",
            value: IntProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IntProto.decode(message.value);
    },
    toProto(message) {
        return IntProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.IntProto",
            value: IntProto.encode(message).finish()
        };
    }
};
function createBaseDecProto() {
    return {
        dec: ""
    };
}
export const DecProto = {
    typeUrl: "/cosmos.base.v1beta1.DecProto",
    encode(message, writer = BinaryWriter.create()) {
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return DecProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecProto",
            value: DecProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DecProto.decode(message.value);
    },
    toProto(message) {
        return DecProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecProto",
            value: DecProto.encode(message).finish()
        };
    }
};
