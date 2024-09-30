"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record_Offline = exports.Record_Multi = exports.Record_Ledger = exports.Record_Local = exports.Record = void 0;
//@ts-nocheck
const any_1 = require("../../../../google/protobuf/any");
const hd_1 = require("../../hd/v1/hd");
const binary_1 = require("../../../../binary");
function createBaseRecord() {
    return {
        name: "",
        pubKey: undefined,
        local: undefined,
        ledger: undefined,
        multi: undefined,
        offline: undefined
    };
}
exports.Record = {
    typeUrl: "/cosmos.crypto.keyring.v1.Record",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            exports.Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            exports.Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            exports.Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = exports.Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = exports.Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = exports.Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = exports.Record_Offline.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.name = object.name ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.local = object.local !== undefined && object.local !== null ? exports.Record_Local.fromPartial(object.local) : undefined;
        message.ledger = object.ledger !== undefined && object.ledger !== null ? exports.Record_Ledger.fromPartial(object.ledger) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.Record_Multi.fromPartial(object.multi) : undefined;
        message.offline = object.offline !== undefined && object.offline !== null ? exports.Record_Offline.fromPartial(object.offline) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = any_1.Any.fromAmino(object.pub_key);
        }
        if (object.local !== undefined && object.local !== null) {
            message.local = exports.Record_Local.fromAmino(object.local);
        }
        if (object.ledger !== undefined && object.ledger !== null) {
            message.ledger = exports.Record_Ledger.fromAmino(object.ledger);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = exports.Record_Multi.fromAmino(object.multi);
        }
        if (object.offline !== undefined && object.offline !== null) {
            message.offline = exports.Record_Offline.fromAmino(object.offline);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.pub_key = message.pubKey ? any_1.Any.toAmino(message.pubKey) : undefined;
        obj.local = message.local ? exports.Record_Local.toAmino(message.local) : undefined;
        obj.ledger = message.ledger ? exports.Record_Ledger.toAmino(message.ledger) : undefined;
        obj.multi = message.multi ? exports.Record_Multi.toAmino(message.multi) : undefined;
        obj.offline = message.offline ? exports.Record_Offline.toAmino(message.offline) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Record",
            value: exports.Record.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record.decode(message.value);
    },
    toProto(message) {
        return exports.Record.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Record",
            value: exports.Record.encode(message).finish()
        };
    }
};
function createBaseRecord_Local() {
    return {
        privKey: undefined
    };
}
exports.Record_Local = {
    typeUrl: "/cosmos.crypto.keyring.v1.Local",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.privKey !== undefined) {
            any_1.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord_Local();
        message.privKey = object.privKey !== undefined && object.privKey !== null ? any_1.Any.fromPartial(object.privKey) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord_Local();
        if (object.priv_key !== undefined && object.priv_key !== null) {
            message.privKey = any_1.Any.fromAmino(object.priv_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.priv_key = message.privKey ? any_1.Any.toAmino(message.privKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Local.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Local",
            value: exports.Record_Local.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Local.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Local.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Local",
            value: exports.Record_Local.encode(message).finish()
        };
    }
};
function createBaseRecord_Ledger() {
    return {
        path: undefined
    };
}
exports.Record_Ledger = {
    typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path !== undefined) {
            hd_1.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = hd_1.BIP44Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = object.path !== undefined && object.path !== null ? hd_1.BIP44Params.fromPartial(object.path) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord_Ledger();
        if (object.path !== undefined && object.path !== null) {
            message.path = hd_1.BIP44Params.fromAmino(object.path);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? hd_1.BIP44Params.toAmino(message.path) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Ledger.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Ledger",
            value: exports.Record_Ledger.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Ledger.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Ledger.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
            value: exports.Record_Ledger.encode(message).finish()
        };
    }
};
function createBaseRecord_Multi() {
    return {};
}
exports.Record_Multi = {
    typeUrl: "/cosmos.crypto.keyring.v1.Multi",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
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
        const message = createBaseRecord_Multi();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRecord_Multi();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.Record_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Multi.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Multi",
            value: exports.Record_Multi.encode(message).finish()
        };
    }
};
function createBaseRecord_Offline() {
    return {};
}
exports.Record_Offline = {
    typeUrl: "/cosmos.crypto.keyring.v1.Offline",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
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
        const message = createBaseRecord_Offline();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRecord_Offline();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Record_Offline.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Offline",
            value: exports.Record_Offline.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Record_Offline.decode(message.value);
    },
    toProto(message) {
        return exports.Record_Offline.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Offline",
            value: exports.Record_Offline.encode(message).finish()
        };
    }
};
