"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: []
    };
}
exports.Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            exports.AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? exports.TxBody.fromPartial(object.body) : undefined;
        message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? exports.AuthInfo.fromPartial(object.authInfo) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTx();
        if (object.body !== undefined && object.body !== null) {
            message.body = exports.TxBody.fromAmino(object.body);
        }
        if (object.auth_info !== undefined && object.auth_info !== null) {
            message.authInfo = exports.AuthInfo.fromAmino(object.auth_info);
        }
        message.signatures = object.signatures?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body = message.body ? exports.TxBody.toAmino(message.body) : undefined;
        obj.auth_info = message.authInfo ? exports.AuthInfo.toAmino(message.authInfo) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tx",
            value: exports.Tx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Tx.decode(message.value);
    },
    toProto(message) {
        return exports.Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: exports.Tx.encode(message).finish()
        };
    }
};
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: []
    };
}
exports.TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxRaw();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxRaw();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = (0, helpers_1.bytesFromBase64)(object.auth_info_bytes);
        }
        message.signatures = object.signatures?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? (0, helpers_1.base64FromBytes)(message.authInfoBytes) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxRaw.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxRaw",
            value: exports.TxRaw.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxRaw.decode(message.value);
    },
    toProto(message) {
        return exports.TxRaw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: exports.TxRaw.encode(message).finish()
        };
    }
};
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: "",
        accountNumber: BigInt(0)
    };
}
exports.SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignDoc();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignDoc();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = (0, helpers_1.bytesFromBase64)(object.auth_info_bytes);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? (0, helpers_1.base64FromBytes)(message.authInfoBytes) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignDoc.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDoc",
            value: exports.SignDoc.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignDoc.decode(message.value);
    },
    toProto(message) {
        return exports.SignDoc.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: exports.SignDoc.encode(message).finish()
        };
    }
};
function createBaseSignDocDirectAux() {
    return {
        bodyBytes: new Uint8Array(),
        publicKey: undefined,
        chainId: "",
        accountNumber: BigInt(0),
        sequence: BigInt(0),
        tip: undefined
    };
}
exports.SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignDocDirectAux();
        message.bodyBytes = object.bodyBytes ?? new Uint8Array();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignDocDirectAux();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = (0, helpers_1.bytesFromBase64)(object.body_bytes);
        }
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = any_1.Any.fromAmino(object.public_key);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = exports.Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? (0, helpers_1.base64FromBytes)(message.bodyBytes) : undefined;
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber.toString() : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignDocDirectAux.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDocDirectAux",
            value: exports.SignDocDirectAux.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignDocDirectAux.decode(message.value);
    },
    toProto(message) {
        return exports.SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: exports.SignDocDirectAux.encode(message).finish()
        };
    }
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeoutHeight: BigInt(0),
        extensionOptions: [],
        nonCriticalExtensionOptions: []
    };
}
exports.TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (const v of message.extensionOptions) {
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.nonCriticalExtensionOptions) {
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.extensionOptions = object.extensionOptions?.map(e => any_1.Any.fromPartial(e)) || [];
        message.nonCriticalExtensionOptions = object.nonCriticalExtensionOptions?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = BigInt(object.timeout_height);
        }
        message.extensionOptions = object.extension_options?.map(e => any_1.Any.fromAmino(e)) || [];
        message.nonCriticalExtensionOptions = object.non_critical_extension_options?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        obj.memo = message.memo === "" ? undefined : message.memo;
        obj.timeout_height = message.timeoutHeight !== BigInt(0) ? message.timeoutHeight.toString() : undefined;
        if (message.extensionOptions) {
            obj.extension_options = message.extensionOptions.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.extension_options = message.extensionOptions;
        }
        if (message.nonCriticalExtensionOptions) {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxBody.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxBody",
            value: exports.TxBody.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxBody.decode(message.value);
    },
    toProto(message) {
        return exports.TxBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: exports.TxBody.encode(message).finish()
        };
    }
};
function createBaseAuthInfo() {
    return {
        signerInfos: [],
        fee: undefined,
        tip: undefined
    };
}
exports.AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signerInfos) {
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuthInfo();
        message.signerInfos = object.signerInfos?.map(e => exports.SignerInfo.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? exports.Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuthInfo();
        message.signerInfos = object.signer_infos?.map(e => exports.SignerInfo.fromAmino(e)) || [];
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = exports.Fee.fromAmino(object.fee);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = exports.Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signerInfos) {
            obj.signer_infos = message.signerInfos.map(e => e ? exports.SignerInfo.toAmino(e) : undefined);
        }
        else {
            obj.signer_infos = message.signerInfos;
        }
        obj.fee = message.fee ? exports.Fee.toAmino(message.fee) : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuthInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthInfo",
            value: exports.AuthInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuthInfo.decode(message.value);
    },
    toProto(message) {
        return exports.AuthInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: exports.AuthInfo.encode(message).finish()
        };
    }
};
function createBaseSignerInfo() {
    return {
        publicKey: undefined,
        modeInfo: undefined,
        sequence: BigInt(0)
    };
}
exports.SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            exports.ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignerInfo();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? exports.ModeInfo.fromPartial(object.modeInfo) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignerInfo();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = any_1.Any.fromAmino(object.public_key);
        }
        if (object.mode_info !== undefined && object.mode_info !== null) {
            message.modeInfo = exports.ModeInfo.fromAmino(object.mode_info);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.mode_info = message.modeInfo ? exports.ModeInfo.toAmino(message.modeInfo) : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignerInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignerInfo",
            value: exports.SignerInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignerInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SignerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: exports.SignerInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? exports.ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo();
        if (object.single !== undefined && object.single !== null) {
            message.single = exports.ModeInfo_Single.fromAmino(object.single);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = exports.ModeInfo_Multi.fromAmino(object.multi);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.single = message.single ? exports.ModeInfo_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? exports.ModeInfo_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModeInfo",
            value: exports.ModeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: exports.ModeInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
exports.ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Single();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Single();
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mode = message.mode === 0 ? undefined : message.mode;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo_Single.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Single",
            value: exports.ModeInfo_Single.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo_Single.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: exports.ModeInfo_Single.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: []
    };
}
exports.ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modeInfos) {
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(exports.ModeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.modeInfos = object.modeInfos?.map(e => exports.ModeInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Multi();
        if (object.bitarray !== undefined && object.bitarray !== null) {
            message.bitarray = multisig_1.CompactBitArray.fromAmino(object.bitarray);
        }
        message.modeInfos = object.mode_infos?.map(e => exports.ModeInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.modeInfos) {
            obj.mode_infos = message.modeInfos.map(e => e ? exports.ModeInfo.toAmino(e) : undefined);
        }
        else {
            obj.mode_infos = message.modeInfos;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.ModeInfo_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo_Multi.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: exports.ModeInfo_Multi.encode(message).finish()
        };
    }
};
function createBaseFee() {
    return {
        amount: [],
        gasLimit: BigInt(0),
        payer: "",
        granter: ""
    };
}
exports.Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gasLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
        message.payer = object.payer ?? "";
        message.granter = object.granter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.gas_limit !== undefined && object.gas_limit !== null) {
            message.gasLimit = BigInt(object.gas_limit);
        }
        if (object.payer !== undefined && object.payer !== null) {
            message.payer = object.payer;
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit.toString() : undefined;
        obj.payer = message.payer === "" ? undefined : message.payer;
        obj.granter = message.granter === "" ? undefined : message.granter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Fee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fee",
            value: exports.Fee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Fee.decode(message.value);
    },
    toProto(message) {
        return exports.Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: exports.Fee.encode(message).finish()
        };
    }
};
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
exports.Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.tipper !== undefined && object.tipper !== null) {
            message.tipper = object.tipper;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.tipper = message.tipper === "" ? undefined : message.tipper;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tip.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tip",
            value: exports.Tip.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Tip.decode(message.value);
    },
    toProto(message) {
        return exports.Tip.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: exports.Tip.encode(message).finish()
        };
    }
};
function createBaseAuxSignerData() {
    return {
        address: "",
        signDoc: undefined,
        mode: 0,
        sig: new Uint8Array()
    };
}
exports.AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            exports.SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = exports.SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAuxSignerData();
        message.address = object.address ?? "";
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? exports.SignDocDirectAux.fromPartial(object.signDoc) : undefined;
        message.mode = object.mode ?? 0;
        message.sig = object.sig ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuxSignerData();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.sign_doc !== undefined && object.sign_doc !== null) {
            message.signDoc = exports.SignDocDirectAux.fromAmino(object.sign_doc);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        if (object.sig !== undefined && object.sig !== null) {
            message.sig = (0, helpers_1.bytesFromBase64)(object.sig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.sign_doc = message.signDoc ? exports.SignDocDirectAux.toAmino(message.signDoc) : undefined;
        obj.mode = message.mode === 0 ? undefined : message.mode;
        obj.sig = message.sig ? (0, helpers_1.base64FromBytes)(message.sig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuxSignerData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuxSignerData",
            value: exports.AuxSignerData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuxSignerData.decode(message.value);
    },
    toProto(message) {
        return exports.AuxSignerData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: exports.AuxSignerData.encode(message).finish()
        };
    }
};
