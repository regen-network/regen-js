//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CreditType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        creditClassFee: [],
        basketFee: [],
        allowedClassCreators: [],
        allowlistEnabled: false,
        allowedDenoms: [],
        allowedBridgeChains: []
    };
}
export const Params = {
    typeUrl: "/regen.ecocredit.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.creditClassFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.basketFee) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.allowedClassCreators) {
            writer.uint32(26).string(v);
        }
        if (message.allowlistEnabled === true) {
            writer.uint32(32).bool(message.allowlistEnabled);
        }
        for (const v of message.allowedDenoms) {
            AllowedDenom.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.allowedBridgeChains) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditClassFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.basketFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.allowedClassCreators.push(reader.string());
                    break;
                case 4:
                    message.allowlistEnabled = reader.bool();
                    break;
                case 5:
                    message.allowedDenoms.push(AllowedDenom.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.allowedBridgeChains.push(reader.string());
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
        message.creditClassFee = object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
        message.basketFee = object.basketFee?.map(e => Coin.fromPartial(e)) || [];
        message.allowedClassCreators = object.allowedClassCreators?.map(e => e) || [];
        message.allowlistEnabled = object.allowlistEnabled ?? false;
        message.allowedDenoms = object.allowedDenoms?.map(e => AllowedDenom.fromPartial(e)) || [];
        message.allowedBridgeChains = object.allowedBridgeChains?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.creditClassFee = object.credit_class_fee?.map(e => Coin.fromAmino(e)) || [];
        message.basketFee = object.basket_fee?.map(e => Coin.fromAmino(e)) || [];
        message.allowedClassCreators = object.allowed_class_creators?.map(e => e) || [];
        if (object.allowlist_enabled !== undefined && object.allowlist_enabled !== null) {
            message.allowlistEnabled = object.allowlist_enabled;
        }
        message.allowedDenoms = object.allowed_denoms?.map(e => AllowedDenom.fromAmino(e)) || [];
        message.allowedBridgeChains = object.allowed_bridge_chains?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.creditClassFee) {
            obj.credit_class_fee = message.creditClassFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.credit_class_fee = message.creditClassFee;
        }
        if (message.basketFee) {
            obj.basket_fee = message.basketFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.basket_fee = message.basketFee;
        }
        if (message.allowedClassCreators) {
            obj.allowed_class_creators = message.allowedClassCreators.map(e => e);
        }
        else {
            obj.allowed_class_creators = message.allowedClassCreators;
        }
        obj.allowlist_enabled = message.allowlistEnabled === false ? undefined : message.allowlistEnabled;
        if (message.allowedDenoms) {
            obj.allowed_denoms = message.allowedDenoms.map(e => e ? AllowedDenom.toAmino(e) : undefined);
        }
        else {
            obj.allowed_denoms = message.allowedDenoms;
        }
        if (message.allowedBridgeChains) {
            obj.allowed_bridge_chains = message.allowedBridgeChains.map(e => e);
        }
        else {
            obj.allowed_bridge_chains = message.allowedBridgeChains;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
export const Credits = {
    typeUrl: "/regen.ecocredit.v1.Credits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
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
        const message = createBaseCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return Credits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Credits.decode(message.value);
    },
    toProto(message) {
        return Credits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Credits",
            value: Credits.encode(message).finish()
        };
    }
};
function createBaseBatchIssuance() {
    return {
        recipient: "",
        tradableAmount: "",
        retiredAmount: "",
        retirementJurisdiction: "",
        retirementReason: ""
    };
}
export const BatchIssuance = {
    typeUrl: "/regen.ecocredit.v1.BatchIssuance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.retirementJurisdiction !== "") {
            writer.uint32(34).string(message.retirementJurisdiction);
        }
        if (message.retirementReason !== "") {
            writer.uint32(42).string(message.retirementReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchIssuance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.retirementJurisdiction = reader.string();
                    break;
                case 5:
                    message.retirementReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchIssuance();
        message.recipient = object.recipient ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.retirementJurisdiction = object.retirementJurisdiction ?? "";
        message.retirementReason = object.retirementReason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchIssuance();
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
            message.retirementJurisdiction = object.retirement_jurisdiction;
        }
        if (object.retirement_reason !== undefined && object.retirement_reason !== null) {
            message.retirementReason = object.retirement_reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
        obj.retirement_reason = message.retirementReason === "" ? undefined : message.retirementReason;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchIssuance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchIssuance.decode(message.value);
    },
    toProto(message) {
        return BatchIssuance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchIssuance",
            value: BatchIssuance.encode(message).finish()
        };
    }
};
function createBaseOriginTx() {
    return {
        id: "",
        source: "",
        contract: "",
        note: ""
    };
}
export const OriginTx = {
    typeUrl: "/regen.ecocredit.v1.OriginTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.source !== "") {
            writer.uint32(18).string(message.source);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.note !== "") {
            writer.uint32(34).string(message.note);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOriginTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.source = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 4:
                    message.note = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOriginTx();
        message.id = object.id ?? "";
        message.source = object.source ?? "";
        message.contract = object.contract ?? "";
        message.note = object.note ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOriginTx();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.note !== undefined && object.note !== null) {
            message.note = object.note;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.source = message.source === "" ? undefined : message.source;
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.note = message.note === "" ? undefined : message.note;
        return obj;
    },
    fromAminoMsg(object) {
        return OriginTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OriginTx.decode(message.value);
    },
    toProto(message) {
        return OriginTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.OriginTx",
            value: OriginTx.encode(message).finish()
        };
    }
};
function createBaseCreditTypeProposal() {
    return {
        title: "",
        description: "",
        creditType: undefined
    };
}
export const CreditTypeProposal = {
    typeUrl: "/regen.ecocredit.v1.CreditTypeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.creditType !== undefined) {
            CreditType.encode(message.creditType, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreditTypeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.creditType = CreditType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreditTypeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreditTypeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.credit_type !== undefined && object.credit_type !== null) {
            message.creditType = CreditType.fromAmino(object.credit_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.credit_type = message.creditType ? CreditType.toAmino(message.creditType) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CreditTypeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreditTypeProposal.decode(message.value);
    },
    toProto(message) {
        return CreditTypeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.CreditTypeProposal",
            value: CreditTypeProposal.encode(message).finish()
        };
    }
};
function createBaseAllowedDenom() {
    return {
        bankDenom: "",
        displayDenom: "",
        exponent: 0
    };
}
export const AllowedDenom = {
    typeUrl: "/regen.ecocredit.v1.AllowedDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bankDenom !== "") {
            writer.uint32(10).string(message.bankDenom);
        }
        if (message.displayDenom !== "") {
            writer.uint32(18).string(message.displayDenom);
        }
        if (message.exponent !== 0) {
            writer.uint32(24).uint32(message.exponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bankDenom = reader.string();
                    break;
                case 2:
                    message.displayDenom = reader.string();
                    break;
                case 3:
                    message.exponent = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllowedDenom();
        message.bankDenom = object.bankDenom ?? "";
        message.displayDenom = object.displayDenom ?? "";
        message.exponent = object.exponent ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedDenom();
        if (object.bank_denom !== undefined && object.bank_denom !== null) {
            message.bankDenom = object.bank_denom;
        }
        if (object.display_denom !== undefined && object.display_denom !== null) {
            message.displayDenom = object.display_denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bank_denom = message.bankDenom === "" ? undefined : message.bankDenom;
        obj.display_denom = message.displayDenom === "" ? undefined : message.displayDenom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        return obj;
    },
    fromAminoMsg(object) {
        return AllowedDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AllowedDenom.decode(message.value);
    },
    toProto(message) {
        return AllowedDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.AllowedDenom",
            value: AllowedDenom.encode(message).finish()
        };
    }
};
