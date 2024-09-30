//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSend() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: []
    };
}
export const MsgSend = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSend",
            value: MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSend.decode(message.value);
    },
    toProto(message) {
        return MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: MsgSend.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
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
        const message = createBaseMsgSendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendResponse",
            value: MsgSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
            value: MsgSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMultiSend() {
    return {
        inputs: [],
        outputs: []
    };
}
export const MsgMultiSend = {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.inputs) {
            Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.outputs) {
            Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outputs.push(Output.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiSend();
        message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
        message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMultiSend();
        message.inputs = object.inputs?.map(e => Input.fromAmino(e)) || [];
        message.outputs = object.outputs?.map(e => Output.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(e => e ? Input.toAmino(e) : undefined);
        }
        else {
            obj.inputs = message.inputs;
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map(e => e ? Output.toAmino(e) : undefined);
        }
        else {
            obj.outputs = message.outputs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMultiSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgMultiSend",
            value: MsgMultiSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMultiSend.decode(message.value);
    },
    toProto(message) {
        return MsgMultiSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
            value: MsgMultiSend.encode(message).finish()
        };
    }
};
function createBaseMsgMultiSendResponse() {
    return {};
}
export const MsgMultiSendResponse = {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSendResponse();
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
        const message = createBaseMsgMultiSendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgMultiSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMultiSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgMultiSendResponse",
            value: MsgMultiSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMultiSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMultiSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
            value: MsgMultiSendResponse.encode(message).finish()
        };
    }
};
