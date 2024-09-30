"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supply = exports.Balance = exports.GenesisState = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: types_1.Params.fromPartial({}),
        classInfo: [],
        batchInfo: [],
        sequences: [],
        balances: [],
        supplies: []
    };
}
exports.GenesisState = {
    typeUrl: "/regen.ecocredit.v1alpha1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.classInfo) {
            types_1.ClassInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.batchInfo) {
            types_1.BatchInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            types_1.CreditTypeSeq.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.balances) {
            exports.Balance.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.supplies) {
            exports.Supply.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.classInfo.push(types_1.ClassInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.batchInfo.push(types_1.BatchInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(types_1.CreditTypeSeq.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.supplies.push(exports.Supply.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        message.classInfo = object.classInfo?.map(e => types_1.ClassInfo.fromPartial(e)) || [];
        message.batchInfo = object.batchInfo?.map(e => types_1.BatchInfo.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => types_1.CreditTypeSeq.fromPartial(e)) || [];
        message.balances = object.balances?.map(e => exports.Balance.fromPartial(e)) || [];
        message.supplies = object.supplies?.map(e => exports.Supply.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = types_1.Params.fromAmino(object.params);
        }
        message.classInfo = object.class_info?.map(e => types_1.ClassInfo.fromAmino(e)) || [];
        message.batchInfo = object.batch_info?.map(e => types_1.BatchInfo.fromAmino(e)) || [];
        message.sequences = object.sequences?.map(e => types_1.CreditTypeSeq.fromAmino(e)) || [];
        message.balances = object.balances?.map(e => exports.Balance.fromAmino(e)) || [];
        message.supplies = object.supplies?.map(e => exports.Supply.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? types_1.Params.toAmino(message.params) : undefined;
        if (message.classInfo) {
            obj.class_info = message.classInfo.map(e => e ? types_1.ClassInfo.toAmino(e) : undefined);
        }
        else {
            obj.class_info = message.classInfo;
        }
        if (message.batchInfo) {
            obj.batch_info = message.batchInfo.map(e => e ? types_1.BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batch_info = message.batchInfo;
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? types_1.CreditTypeSeq.toAmino(e) : undefined);
        }
        else {
            obj.sequences = message.sequences;
        }
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        if (message.supplies) {
            obj.supplies = message.supplies.map(e => e ? exports.Supply.toAmino(e) : undefined);
        }
        else {
            obj.supplies = message.supplies;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseBalance() {
    return {
        address: "",
        batchDenom: "",
        tradableBalance: "",
        retiredBalance: ""
    };
}
exports.Balance = {
    typeUrl: "/regen.ecocredit.v1alpha1.Balance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.tradableBalance !== "") {
            writer.uint32(26).string(message.tradableBalance);
        }
        if (message.retiredBalance !== "") {
            writer.uint32(34).string(message.retiredBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.tradableBalance = reader.string();
                    break;
                case 4:
                    message.retiredBalance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.tradableBalance = object.tradableBalance ?? "";
        message.retiredBalance = object.retiredBalance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalance();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_balance !== undefined && object.tradable_balance !== null) {
            message.tradableBalance = object.tradable_balance;
        }
        if (object.retired_balance !== undefined && object.retired_balance !== null) {
            message.retiredBalance = object.retired_balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_balance = message.tradableBalance === "" ? undefined : message.tradableBalance;
        obj.retired_balance = message.retiredBalance === "" ? undefined : message.retiredBalance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Balance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Balance.decode(message.value);
    },
    toProto(message) {
        return exports.Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.Balance",
            value: exports.Balance.encode(message).finish()
        };
    }
};
function createBaseSupply() {
    return {
        batchDenom: "",
        tradableSupply: "",
        retiredSupply: ""
    };
}
exports.Supply = {
    typeUrl: "/regen.ecocredit.v1alpha1.Supply",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.tradableSupply !== "") {
            writer.uint32(18).string(message.tradableSupply);
        }
        if (message.retiredSupply !== "") {
            writer.uint32(26).string(message.retiredSupply);
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
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.tradableSupply = reader.string();
                    break;
                case 3:
                    message.retiredSupply = reader.string();
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
        message.batchDenom = object.batchDenom ?? "";
        message.tradableSupply = object.tradableSupply ?? "";
        message.retiredSupply = object.retiredSupply ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSupply();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_supply !== undefined && object.tradable_supply !== null) {
            message.tradableSupply = object.tradable_supply;
        }
        if (object.retired_supply !== undefined && object.retired_supply !== null) {
            message.retiredSupply = object.retired_supply;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_supply = message.tradableSupply === "" ? undefined : message.tradableSupply;
        obj.retired_supply = message.retiredSupply === "" ? undefined : message.retiredSupply;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Supply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Supply.decode(message.value);
    },
    toProto(message) {
        return exports.Supply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.Supply",
            value: exports.Supply.encode(message).finish()
        };
    }
};
