"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        sendEnabled: [],
        defaultSendEnabled: false
    };
}
exports.Params = {
    typeUrl: "/cosmos.bank.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.sendEnabled) {
            exports.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sendEnabled.push(exports.SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.defaultSendEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.sendEnabled = object.sendEnabled?.map(e => exports.SendEnabled.fromPartial(e)) || [];
        message.defaultSendEnabled = object.defaultSendEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.sendEnabled = object.send_enabled?.map(e => exports.SendEnabled.fromAmino(e)) || [];
        if (object.default_send_enabled !== undefined && object.default_send_enabled !== null) {
            message.defaultSendEnabled = object.default_send_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sendEnabled) {
            obj.send_enabled = message.sendEnabled.map(e => e ? exports.SendEnabled.toAmino(e) : undefined);
        }
        else {
            obj.send_enabled = message.sendEnabled;
        }
        obj.default_send_enabled = message.defaultSendEnabled === false ? undefined : message.defaultSendEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseSendEnabled() {
    return {
        denom: "",
        enabled: false
    };
}
exports.SendEnabled = {
    typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEnabled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSendEnabled();
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSendEnabled();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SendEnabled.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendEnabled",
            value: exports.SendEnabled.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SendEnabled.decode(message.value);
    },
    toProto(message) {
        return exports.SendEnabled.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
            value: exports.SendEnabled.encode(message).finish()
        };
    }
};
function createBaseInput() {
    return {
        address: "",
        coins: []
    };
}
exports.Input = {
    typeUrl: "/cosmos.bank.v1beta1.Input",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInput();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Input.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Input",
            value: exports.Input.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Input.decode(message.value);
    },
    toProto(message) {
        return exports.Input.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Input",
            value: exports.Input.encode(message).finish()
        };
    }
};
function createBaseOutput() {
    return {
        address: "",
        coins: []
    };
}
exports.Output = {
    typeUrl: "/cosmos.bank.v1beta1.Output",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseOutput();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Output.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Output",
            value: exports.Output.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Output.decode(message.value);
    },
    toProto(message) {
        return exports.Output.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Output",
            value: exports.Output.encode(message).finish()
        };
    }
};
function createBaseSupply() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.Supply",
        total: []
    };
}
exports.Supply = {
    typeUrl: "/cosmos.bank.v1beta1.Supply",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.total) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSupply();
        message.total = object.total?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSupply();
        message.total = object.total?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total = message.total;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Supply.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Supply",
            value: exports.Supply.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Supply.decode(message.value);
    },
    toProto(message) {
        return exports.Supply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Supply",
            value: exports.Supply.encode(message).finish()
        };
    }
};
function createBaseDenomUnit() {
    return {
        denom: "",
        exponent: 0,
        aliases: []
    };
}
exports.DenomUnit = {
    typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (const v of message.aliases) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomUnit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomUnit();
        message.denom = object.denom ?? "";
        message.exponent = object.exponent ?? 0;
        message.aliases = object.aliases?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomUnit();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        message.aliases = object.aliases?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        if (message.aliases) {
            obj.aliases = message.aliases.map(e => e);
        }
        else {
            obj.aliases = message.aliases;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomUnit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomUnit",
            value: exports.DenomUnit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomUnit.decode(message.value);
    },
    toProto(message) {
        return exports.DenomUnit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
            value: exports.DenomUnit.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        description: "",
        denomUnits: [],
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uriHash: ""
    };
}
exports.Metadata = {
    typeUrl: "/cosmos.bank.v1beta1.Metadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (const v of message.denomUnits) {
            exports.DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(66).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denomUnits.push(exports.DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uriHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.description = object.description ?? "";
        message.denomUnits = object.denomUnits?.map(e => exports.DenomUnit.fromPartial(e)) || [];
        message.base = object.base ?? "";
        message.display = object.display ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.denomUnits = object.denom_units?.map(e => exports.DenomUnit.fromAmino(e)) || [];
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.display !== undefined && object.display !== null) {
            message.display = object.display;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uriHash = object.uri_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description === "" ? undefined : message.description;
        if (message.denomUnits) {
            obj.denom_units = message.denomUnits.map(e => e ? exports.DenomUnit.toAmino(e) : undefined);
        }
        else {
            obj.denom_units = message.denomUnits;
        }
        obj.base = message.base === "" ? undefined : message.base;
        obj.display = message.display === "" ? undefined : message.display;
        obj.name = message.name === "" ? undefined : message.name;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.uri = message.uri === "" ? undefined : message.uri;
        obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: exports.Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Metadata.decode(message.value);
    },
    toProto(message) {
        return exports.Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Metadata",
            value: exports.Metadata.encode(message).finish()
        };
    }
};
