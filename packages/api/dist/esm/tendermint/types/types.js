//@ts-nocheck
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ValidatorSet } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../helpers";
/** BlockIdFlag indicates which BlcokID the signature is for */
export var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (BlockIDFlag = {}));
export const BlockIDFlagSDKType = BlockIDFlag;
export const BlockIDFlagAmino = BlockIDFlag;
export function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
export function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** SignedMsgType is a type of signed message in the consensus. */
export var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (SignedMsgType = {}));
export const SignedMsgTypeSDKType = SignedMsgType;
export const SignedMsgTypeAmino = SignedMsgType;
export function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
export function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
export const PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    encode(message, writer = BinaryWriter.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePartSetHeader();
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total === 0 ? undefined : message.total;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: PartSetHeader.encode(message).finish()
        };
    }
};
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: Proof.fromPartial({})
    };
}
export const Part = {
    typeUrl: "/tendermint.types.Part",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePart();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = bytesFromBase64(object.bytes);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index === 0 ? undefined : message.index;
        obj.bytes = message.bytes ? base64FromBytes(message.bytes) : undefined;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Part.decode(message.value);
    },
    toProto(message) {
        return Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: Part.encode(message).finish()
        };
    }
};
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        partSetHeader: PartSetHeader.fromPartial({})
    };
}
export const BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockID();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.part_set_header !== undefined && object.part_set_header !== null) {
            message.partSetHeader = PartSetHeader.fromAmino(object.part_set_header);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.part_set_header = message.partSetHeader ? PartSetHeader.toAmino(message.partSetHeader) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockID.decode(message.value);
    },
    toProto(message) {
        return BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: BlockID.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: Consensus.fromPartial({}),
        chainId: "",
        height: BigInt(0),
        time: new Date(),
        lastBlockId: BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
export const Header = {
    typeUrl: "/tendermint.types.Header",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== undefined) {
            Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.validatorsHash = object.validatorsHash ?? new Uint8Array();
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.consensusHash = object.consensusHash ?? new Uint8Array();
        message.appHash = object.appHash ?? new Uint8Array();
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.version !== undefined && object.version !== null) {
            message.version = Consensus.fromAmino(object.version);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.last_block_id !== undefined && object.last_block_id !== null) {
            message.lastBlockId = BlockID.fromAmino(object.last_block_id);
        }
        if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
            message.lastCommitHash = bytesFromBase64(object.last_commit_hash);
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = bytesFromBase64(object.data_hash);
        }
        if (object.validators_hash !== undefined && object.validators_hash !== null) {
            message.validatorsHash = bytesFromBase64(object.validators_hash);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
            message.consensusHash = bytesFromBase64(object.consensus_hash);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = bytesFromBase64(object.app_hash);
        }
        if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
            message.lastResultsHash = bytesFromBase64(object.last_results_hash);
        }
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidenceHash = bytesFromBase64(object.evidence_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = bytesFromBase64(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined;
        obj.last_commit_hash = message.lastCommitHash ? base64FromBytes(message.lastCommitHash) : undefined;
        obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
        obj.validators_hash = message.validatorsHash ? base64FromBytes(message.validatorsHash) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
        obj.consensus_hash = message.consensusHash ? base64FromBytes(message.consensusHash) : undefined;
        obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
        obj.last_results_hash = message.lastResultsHash ? base64FromBytes(message.lastResultsHash) : undefined;
        obj.evidence_hash = message.evidenceHash ? base64FromBytes(message.evidenceHash) : undefined;
        obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseData() {
    return {
        txs: []
    };
}
export const Data = {
    typeUrl: "/tendermint.types.Data",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = message.txs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Data.decode(message.value);
    },
    toProto(message) {
        return Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: Data.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        blockId: BlockID.fromPartial({}),
        timestamp: new Date(),
        validatorAddress: new Uint8Array(),
        validatorIndex: 0,
        signature: new Uint8Array()
    };
}
export const Vote = {
    typeUrl: "/tendermint.types.Vote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAddress = reader.bytes();
                    break;
                case 7:
                    message.validatorIndex = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.validatorIndex = object.validatorIndex ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = bytesFromBase64(object.validator_address);
        }
        if (object.validator_index !== undefined && object.validator_index !== null) {
            message.validatorIndex = object.validator_index;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type === 0 ? undefined : message.type;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.round = message.round === 0 ? undefined : message.round;
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.validator_address = message.validatorAddress ? base64FromBytes(message.validatorAddress) : undefined;
        obj.validator_index = message.validatorIndex === 0 ? undefined : message.validatorIndex;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Vote.decode(message.value);
    },
    toProto(message) {
        return Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: Vote.encode(message).finish()
        };
    }
};
function createBaseCommit() {
    return {
        height: BigInt(0),
        round: 0,
        blockId: BlockID.fromPartial({}),
        signatures: []
    };
}
export const Commit = {
    typeUrl: "/tendermint.types.Commit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(CommitSig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommit();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = BlockID.fromAmino(object.block_id);
        }
        message.signatures = object.signatures?.map(e => CommitSig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.round = message.round === 0 ? undefined : message.round;
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Commit.decode(message.value);
    },
    toProto(message) {
        return Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: Commit.encode(message).finish()
        };
    }
};
function createBaseCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
export const CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockIdFlag = reader.int32();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitSig();
        if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
            message.blockIdFlag = object.block_id_flag;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = bytesFromBase64(object.validator_address);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.blockIdFlag === 0 ? undefined : message.blockIdFlag;
        obj.validator_address = message.validatorAddress ? base64FromBytes(message.validatorAddress) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommitSig.decode(message.value);
    },
    toProto(message) {
        return CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: CommitSig.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        polRound: 0,
        blockId: BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
export const Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.polRound = reader.int32();
                    break;
                case 5:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.polRound = object.polRound ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.pol_round !== undefined && object.pol_round !== null) {
            message.polRound = object.pol_round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type === 0 ? undefined : message.type;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.round = message.round === 0 ? undefined : message.round;
        obj.pol_round = message.polRound === 0 ? undefined : message.polRound;
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Proposal.decode(message.value);
    },
    toProto(message) {
        return Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: Proposal.encode(message).finish()
        };
    }
};
function createBaseSignedHeader() {
    return {
        header: undefined,
        commit: undefined
    };
}
export const SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignedHeader();
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = Commit.fromAmino(object.commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignedHeader.decode(message.value);
    },
    toProto(message) {
        return SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: SignedHeader.encode(message).finish()
        };
    }
};
function createBaseLightBlock() {
    return {
        signedHeader: undefined,
        validatorSet: undefined
    };
}
export const LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signedHeader !== undefined) {
            SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLightBlock();
        if (object.signed_header !== undefined && object.signed_header !== null) {
            message.signedHeader = SignedHeader.fromAmino(object.signed_header);
        }
        if (object.validator_set !== undefined && object.validator_set !== null) {
            message.validatorSet = ValidatorSet.fromAmino(object.validator_set);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
        obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LightBlock.decode(message.value);
    },
    toProto(message) {
        return LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: LightBlock.encode(message).finish()
        };
    }
};
function createBaseBlockMeta() {
    return {
        blockId: BlockID.fromPartial({}),
        blockSize: BigInt(0),
        header: Header.fromPartial({}),
        numTxs: BigInt(0)
    };
}
export const BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockSize !== BigInt(0)) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.numTxs !== BigInt(0)) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockSize = reader.int64();
                    break;
                case 3:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.numTxs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt(0);
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockMeta();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.blockId = BlockID.fromAmino(object.block_id);
        }
        if (object.block_size !== undefined && object.block_size !== null) {
            message.blockSize = BigInt(object.block_size);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        if (object.num_txs !== undefined && object.num_txs !== null) {
            message.numTxs = BigInt(object.num_txs);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.block_size = message.blockSize !== BigInt(0) ? message.blockSize.toString() : undefined;
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.num_txs = message.numTxs !== BigInt(0) ? message.numTxs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockMeta.decode(message.value);
    },
    toProto(message) {
        return BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: BlockMeta.encode(message).finish()
        };
    }
};
function createBaseTxProof() {
    return {
        rootHash: new Uint8Array(),
        data: new Uint8Array(),
        proof: undefined
    };
}
export const TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    encode(message, writer = BinaryWriter.create()) {
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rootHash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.rootHash = object.rootHash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxProof();
        if (object.root_hash !== undefined && object.root_hash !== null) {
            message.rootHash = bytesFromBase64(object.root_hash);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.rootHash ? base64FromBytes(message.rootHash) : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxProof.decode(message.value);
    },
    toProto(message) {
        return TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: TxProof.encode(message).finish()
        };
    }
};
