//@ts-nocheck
import { Params, ClassInfo, BatchInfo, CreditTypeSeq } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        classInfo: [],
        batchInfo: [],
        sequences: [],
        balances: [],
        supplies: []
    };
}
export const GenesisState = {
    typeUrl: "/regen.ecocredit.v1alpha1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.classInfo) {
            ClassInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.batchInfo) {
            BatchInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            CreditTypeSeq.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.supplies) {
            Supply.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.classInfo.push(ClassInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.batchInfo.push(BatchInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(CreditTypeSeq.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.supplies.push(Supply.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.classInfo = object.classInfo?.map(e => ClassInfo.fromPartial(e)) || [];
        message.batchInfo = object.batchInfo?.map(e => BatchInfo.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => CreditTypeSeq.fromPartial(e)) || [];
        message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
        message.supplies = object.supplies?.map(e => Supply.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.classInfo = object.class_info?.map(e => ClassInfo.fromAmino(e)) || [];
        message.batchInfo = object.batch_info?.map(e => BatchInfo.fromAmino(e)) || [];
        message.sequences = object.sequences?.map(e => CreditTypeSeq.fromAmino(e)) || [];
        message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
        message.supplies = object.supplies?.map(e => Supply.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.classInfo) {
            obj.class_info = message.classInfo.map(e => e ? ClassInfo.toAmino(e) : undefined);
        }
        else {
            obj.class_info = message.classInfo;
        }
        if (message.batchInfo) {
            obj.batch_info = message.batchInfo.map(e => e ? BatchInfo.toAmino(e) : undefined);
        }
        else {
            obj.batch_info = message.batchInfo;
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e ? CreditTypeSeq.toAmino(e) : undefined);
        }
        else {
            obj.sequences = message.sequences;
        }
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        if (message.supplies) {
            obj.supplies = message.supplies.map(e => e ? Supply.toAmino(e) : undefined);
        }
        else {
            obj.supplies = message.supplies;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.GenesisState",
            value: GenesisState.encode(message).finish()
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
export const Balance = {
    typeUrl: "/regen.ecocredit.v1alpha1.Balance",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Balance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Balance.decode(message.value);
    },
    toProto(message) {
        return Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.Balance",
            value: Balance.encode(message).finish()
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
export const Supply = {
    typeUrl: "/regen.ecocredit.v1alpha1.Supply",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Supply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Supply.decode(message.value);
    },
    toProto(message) {
        return Supply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.Supply",
            value: Supply.encode(message).finish()
        };
    }
};
