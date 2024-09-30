//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseTx() {
    return {
        body: undefined,
        authInfo: undefined,
        signatures: []
    };
}
export const Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.body !== undefined) {
            TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = AuthInfo.decode(reader, reader.uint32());
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
        message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
        message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? AuthInfo.fromPartial(object.authInfo) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTx();
        if (object.body !== undefined && object.body !== null) {
            message.body = TxBody.fromAmino(object.body);
        }
        if (object.auth_info !== undefined && object.auth_info !== null) {
            message.authInfo = AuthInfo.fromAmino(object.auth_info);
        }
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body = message.body ? TxBody.toAmino(message.body) : undefined;
        obj.auth_info = message.authInfo ? AuthInfo.toAmino(message.authInfo) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Tx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tx",
            value: Tx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Tx.decode(message.value);
    },
    toProto(message) {
        return Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: Tx.encode(message).finish()
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
export const TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.bodyBytes = bytesFromBase64(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = bytesFromBase64(object.auth_info_bytes);
        }
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? base64FromBytes(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? base64FromBytes(message.authInfoBytes) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxRaw.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxRaw",
            value: TxRaw.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxRaw.decode(message.value);
    },
    toProto(message) {
        return TxRaw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: TxRaw.encode(message).finish()
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
export const SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.bodyBytes = bytesFromBase64(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.authInfoBytes = bytesFromBase64(object.auth_info_bytes);
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
        obj.body_bytes = message.bodyBytes ? base64FromBytes(message.bodyBytes) : undefined;
        obj.auth_info_bytes = message.authInfoBytes ? base64FromBytes(message.authInfoBytes) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignDoc.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDoc",
            value: SignDoc.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignDoc.decode(message.value);
    },
    toProto(message) {
        return SignDoc.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: SignDoc.encode(message).finish()
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
export const SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
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
            Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.publicKey = Any.decode(reader, reader.uint32());
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
                    message.tip = Tip.decode(reader, reader.uint32());
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
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.chainId = object.chainId ?? "";
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignDocDirectAux();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.bodyBytes = bytesFromBase64(object.body_bytes);
        }
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = Any.fromAmino(object.public_key);
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
            message.tip = Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.bodyBytes ? base64FromBytes(message.bodyBytes) : undefined;
        obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber.toString() : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
        obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignDocDirectAux.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDocDirectAux",
            value: SignDocDirectAux.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignDocDirectAux.decode(message.value);
    },
    toProto(message) {
        return SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: SignDocDirectAux.encode(message).finish()
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
export const TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeoutHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (const v of message.extensionOptions) {
            Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.nonCriticalExtensionOptions) {
            Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
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
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
        message.extensionOptions = object.extensionOptions?.map(e => Any.fromPartial(e)) || [];
        message.nonCriticalExtensionOptions = object.nonCriticalExtensionOptions?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = BigInt(object.timeout_height);
        }
        message.extensionOptions = object.extension_options?.map(e => Any.fromAmino(e)) || [];
        message.nonCriticalExtensionOptions = object.non_critical_extension_options?.map(e => Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        obj.memo = message.memo === "" ? undefined : message.memo;
        obj.timeout_height = message.timeoutHeight !== BigInt(0) ? message.timeoutHeight.toString() : undefined;
        if (message.extensionOptions) {
            obj.extension_options = message.extensionOptions.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.extension_options = message.extensionOptions;
        }
        if (message.nonCriticalExtensionOptions) {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = message.nonCriticalExtensionOptions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxBody.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxBody",
            value: TxBody.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxBody.decode(message.value);
    },
    toProto(message) {
        return TxBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: TxBody.encode(message).finish()
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
export const AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signerInfos) {
            SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = Tip.decode(reader, reader.uint32());
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
        message.signerInfos = object.signerInfos?.map(e => SignerInfo.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuthInfo();
        message.signerInfos = object.signer_infos?.map(e => SignerInfo.fromAmino(e)) || [];
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Fee.fromAmino(object.fee);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signerInfos) {
            obj.signer_infos = message.signerInfos.map(e => e ? SignerInfo.toAmino(e) : undefined);
        }
        else {
            obj.signer_infos = message.signerInfos;
        }
        obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
        obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AuthInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthInfo",
            value: AuthInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AuthInfo.decode(message.value);
    },
    toProto(message) {
        return AuthInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: AuthInfo.encode(message).finish()
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
export const SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = ModeInfo.decode(reader, reader.uint32());
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
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignerInfo();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.publicKey = Any.fromAmino(object.public_key);
        }
        if (object.mode_info !== undefined && object.mode_info !== null) {
            message.modeInfo = ModeInfo.fromAmino(object.mode_info);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
        obj.mode_info = message.modeInfo ? ModeInfo.toAmino(message.modeInfo) : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignerInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignerInfo",
            value: SignerInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignerInfo.decode(message.value);
    },
    toProto(message) {
        return SignerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: SignerInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
export const ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.single !== undefined) {
            ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
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
        message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo();
        if (object.single !== undefined && object.single !== null) {
            message.single = ModeInfo_Single.fromAmino(object.single);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = ModeInfo_Multi.fromAmino(object.multi);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.single = message.single ? ModeInfo_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? ModeInfo_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ModeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModeInfo",
            value: ModeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModeInfo.decode(message.value);
    },
    toProto(message) {
        return ModeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: ModeInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
export const ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    encode(message, writer = BinaryWriter.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ModeInfo_Single.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Single",
            value: ModeInfo_Single.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModeInfo_Single.decode(message.value);
    },
    toProto(message) {
        return ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: ModeInfo_Single.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        modeInfos: []
    };
}
export const ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bitarray !== undefined) {
            CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modeInfos) {
            ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
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
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.modeInfos = object.modeInfos?.map(e => ModeInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Multi();
        if (object.bitarray !== undefined && object.bitarray !== null) {
            message.bitarray = CompactBitArray.fromAmino(object.bitarray);
        }
        message.modeInfos = object.mode_infos?.map(e => ModeInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bitarray = message.bitarray ? CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.modeInfos) {
            obj.mode_infos = message.modeInfos.map(e => e ? ModeInfo.toAmino(e) : undefined);
        }
        else {
            obj.mode_infos = message.modeInfos;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModeInfo_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: ModeInfo_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModeInfo_Multi.decode(message.value);
    },
    toProto(message) {
        return ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: ModeInfo_Multi.encode(message).finish()
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
export const Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
        message.payer = object.payer ?? "";
        message.granter = object.granter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
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
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
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
        return Fee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fee",
            value: Fee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Fee.decode(message.value);
    },
    toProto(message) {
        return Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: Fee.encode(message).finish()
        };
    }
};
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
export const Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        if (object.tipper !== undefined && object.tipper !== null) {
            message.tipper = object.tipper;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.tipper = message.tipper === "" ? undefined : message.tipper;
        return obj;
    },
    fromAminoMsg(object) {
        return Tip.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tip",
            value: Tip.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Tip.decode(message.value);
    },
    toProto(message) {
        return Tip.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: Tip.encode(message).finish()
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
export const AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.signDoc !== undefined) {
            SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
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
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
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
            message.signDoc = SignDocDirectAux.fromAmino(object.sign_doc);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        if (object.sig !== undefined && object.sig !== null) {
            message.sig = bytesFromBase64(object.sig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.sign_doc = message.signDoc ? SignDocDirectAux.toAmino(message.signDoc) : undefined;
        obj.mode = message.mode === 0 ? undefined : message.mode;
        obj.sig = message.sig ? base64FromBytes(message.sig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AuxSignerData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuxSignerData",
            value: AuxSignerData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AuxSignerData.decode(message.value);
    },
    toProto(message) {
        return AuxSignerData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: AuxSignerData.encode(message).finish()
        };
    }
};
