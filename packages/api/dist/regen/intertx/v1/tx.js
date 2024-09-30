"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSubmitTxResponse = exports.MsgSubmitTx = exports.MsgRegisterAccountResponse = exports.MsgRegisterAccount = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
function createBaseMsgRegisterAccount() {
    return {
        owner: "",
        connectionId: "",
        version: ""
    };
}
exports.MsgRegisterAccount = {
    typeUrl: "/regen.intertx.v1.MsgRegisterAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterAccount();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterAccount();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.intertx.v1.MsgRegisterAccount",
            value: exports.MsgRegisterAccount.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterAccountResponse() {
    return {};
}
exports.MsgRegisterAccountResponse = {
    typeUrl: "/regen.intertx.v1.MsgRegisterAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccountResponse();
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
        const message = createBaseMsgRegisterAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.intertx.v1.MsgRegisterAccountResponse",
            value: exports.MsgRegisterAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitTx() {
    return {
        owner: "",
        connectionId: "",
        msg: undefined
    };
}
exports.MsgSubmitTx = {
    typeUrl: "/regen.intertx.v1.MsgSubmitTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.msg !== undefined) {
            any_1.Any.encode(message.msg, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.msg = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.msg = object.msg !== undefined && object.msg !== null ? any_1.Any.fromPartial(object.msg) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitTx();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = any_1.Any.fromAmino(object.msg);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
        obj.msg = message.msg ? any_1.Any.toAmino(message.msg) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitTx.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.intertx.v1.MsgSubmitTx",
            value: exports.MsgSubmitTx.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitTxResponse() {
    return {};
}
exports.MsgSubmitTxResponse = {
    typeUrl: "/regen.intertx.v1.MsgSubmitTxResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTxResponse();
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
        const message = createBaseMsgSubmitTxResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSubmitTxResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitTxResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.intertx.v1.MsgSubmitTxResponse",
            value: exports.MsgSubmitTxResponse.encode(message).finish()
        };
    }
};
