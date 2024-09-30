"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = void 0;
//@ts-nocheck
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.types.ConsensusParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? exports.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? exports.VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusParams();
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = exports.EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.ValidatorParams.fromAmino(object.validator);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.VersionParams.fromAmino(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? exports.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? exports.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? exports.ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? exports.VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ConsensusParams",
            value: exports.ConsensusParams.encode(message).finish()
        };
    }
};
function createBaseBlockParams() {
    return {
        maxBytes: BigInt(0),
        maxGas: BigInt(0)
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.types.BlockParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.maxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockParams();
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.maxGas = BigInt(object.max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes !== BigInt(0) ? message.maxBytes.toString() : undefined;
        obj.max_gas = message.maxGas !== BigInt(0) ? message.maxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockParams.decode(message.value);
    },
    toProto(message) {
        return exports.BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockParams",
            value: exports.BlockParams.encode(message).finish()
        };
    }
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: BigInt(0),
        maxAgeDuration: duration_1.Duration.fromPartial({}),
        maxBytes: BigInt(0)
    };
}
exports.EvidenceParams = {
    typeUrl: "/tendermint.types.EvidenceParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxAgeNumBlocks !== BigInt(0)) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            duration_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? duration_1.Duration.fromPartial(object.maxAgeDuration) : undefined;
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidenceParams();
        if (object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null) {
            message.maxAgeNumBlocks = BigInt(object.max_age_num_blocks);
        }
        if (object.max_age_duration !== undefined && object.max_age_duration !== null) {
            message.maxAgeDuration = duration_1.Duration.fromAmino(object.max_age_duration);
        }
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.maxBytes = BigInt(object.max_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_age_num_blocks = message.maxAgeNumBlocks !== BigInt(0) ? message.maxAgeNumBlocks.toString() : undefined;
        obj.max_age_duration = message.maxAgeDuration ? duration_1.Duration.toAmino(message.maxAgeDuration) : undefined;
        obj.max_bytes = message.maxBytes !== BigInt(0) ? message.maxBytes.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EvidenceParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EvidenceParams.decode(message.value);
    },
    toProto(message) {
        return exports.EvidenceParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceParams",
            value: exports.EvidenceParams.encode(message).finish()
        };
    }
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
exports.ValidatorParams = {
    typeUrl: "/tendermint.types.ValidatorParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pub_key_types?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pub_key_types = message.pubKeyTypes.map(e => e);
        }
        else {
            obj.pub_key_types = message.pubKeyTypes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorParams.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorParams",
            value: exports.ValidatorParams.encode(message).finish()
        };
    }
};
function createBaseVersionParams() {
    return {
        app: BigInt(0)
    };
}
exports.VersionParams = {
    typeUrl: "/tendermint.types.VersionParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.app !== BigInt(0)) {
            writer.uint32(8).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersionParams();
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app = message.app !== BigInt(0) ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VersionParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VersionParams.decode(message.value);
    },
    toProto(message) {
        return exports.VersionParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.VersionParams",
            value: exports.VersionParams.encode(message).finish()
        };
    }
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: BigInt(0),
        blockMaxGas: BigInt(0)
    };
}
exports.HashedParams = {
    typeUrl: "/tendermint.types.HashedParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockMaxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseHashedParams();
        if (object.block_max_bytes !== undefined && object.block_max_bytes !== null) {
            message.blockMaxBytes = BigInt(object.block_max_bytes);
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.blockMaxGas = BigInt(object.block_max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_max_bytes = message.blockMaxBytes !== BigInt(0) ? message.blockMaxBytes.toString() : undefined;
        obj.block_max_gas = message.blockMaxGas !== BigInt(0) ? message.blockMaxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HashedParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HashedParams.decode(message.value);
    },
    toProto(message) {
        return exports.HashedParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.HashedParams",
            value: exports.HashedParams.encode(message).finish()
        };
    }
};
