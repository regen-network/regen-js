//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** DigestAlgorithm is the hash digest algorithm */
export var DigestAlgorithm;
(function (DigestAlgorithm) {
    /** DIGEST_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    DigestAlgorithm[DigestAlgorithm["DIGEST_ALGORITHM_UNSPECIFIED"] = 0] = "DIGEST_ALGORITHM_UNSPECIFIED";
    /** DIGEST_ALGORITHM_BLAKE2B_256 - BLAKE2b-256 */
    DigestAlgorithm[DigestAlgorithm["DIGEST_ALGORITHM_BLAKE2B_256"] = 1] = "DIGEST_ALGORITHM_BLAKE2B_256";
    DigestAlgorithm[DigestAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DigestAlgorithm || (DigestAlgorithm = {}));
export const DigestAlgorithmSDKType = DigestAlgorithm;
export const DigestAlgorithmAmino = DigestAlgorithm;
export function digestAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "DIGEST_ALGORITHM_UNSPECIFIED":
            return DigestAlgorithm.DIGEST_ALGORITHM_UNSPECIFIED;
        case 1:
        case "DIGEST_ALGORITHM_BLAKE2B_256":
            return DigestAlgorithm.DIGEST_ALGORITHM_BLAKE2B_256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DigestAlgorithm.UNRECOGNIZED;
    }
}
export function digestAlgorithmToJSON(object) {
    switch (object) {
        case DigestAlgorithm.DIGEST_ALGORITHM_UNSPECIFIED:
            return "DIGEST_ALGORITHM_UNSPECIFIED";
        case DigestAlgorithm.DIGEST_ALGORITHM_BLAKE2B_256:
            return "DIGEST_ALGORITHM_BLAKE2B_256";
        case DigestAlgorithm.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** RawMediaType defines MIME media types to be used with a ContentHash.Raw hash. */
export var RawMediaType;
(function (RawMediaType) {
    /** RAW_MEDIA_TYPE_UNSPECIFIED - RAW_MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_UNSPECIFIED"] = 0] = "RAW_MEDIA_TYPE_UNSPECIFIED";
    /** RAW_MEDIA_TYPE_TEXT_PLAIN - plain text */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_TEXT_PLAIN"] = 1] = "RAW_MEDIA_TYPE_TEXT_PLAIN";
    /** RAW_MEDIA_TYPE_JSON - JSON */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_JSON"] = 2] = "RAW_MEDIA_TYPE_JSON";
    /** RAW_MEDIA_TYPE_CSV - CSV */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_CSV"] = 3] = "RAW_MEDIA_TYPE_CSV";
    /** RAW_MEDIA_TYPE_XML - XML */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_XML"] = 4] = "RAW_MEDIA_TYPE_XML";
    /** RAW_MEDIA_TYPE_PDF - PDF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_PDF"] = 5] = "RAW_MEDIA_TYPE_PDF";
    /** RAW_MEDIA_TYPE_TIFF - TIIF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_TIFF"] = 16] = "RAW_MEDIA_TYPE_TIFF";
    /** RAW_MEDIA_TYPE_JPG - JPG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_JPG"] = 17] = "RAW_MEDIA_TYPE_JPG";
    /** RAW_MEDIA_TYPE_PNG - PNG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_PNG"] = 18] = "RAW_MEDIA_TYPE_PNG";
    /** RAW_MEDIA_TYPE_SVG - SVG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_SVG"] = 19] = "RAW_MEDIA_TYPE_SVG";
    /** RAW_MEDIA_TYPE_WEBP - WEBP */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_WEBP"] = 20] = "RAW_MEDIA_TYPE_WEBP";
    /** RAW_MEDIA_TYPE_AVIF - AVIF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_AVIF"] = 21] = "RAW_MEDIA_TYPE_AVIF";
    /** RAW_MEDIA_TYPE_GIF - GIF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_GIF"] = 22] = "RAW_MEDIA_TYPE_GIF";
    /** RAW_MEDIA_TYPE_APNG - APNG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_APNG"] = 23] = "RAW_MEDIA_TYPE_APNG";
    /** RAW_MEDIA_TYPE_MPEG - MPEG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_MPEG"] = 32] = "RAW_MEDIA_TYPE_MPEG";
    /** RAW_MEDIA_TYPE_MP4 - MP4 */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_MP4"] = 33] = "RAW_MEDIA_TYPE_MP4";
    /** RAW_MEDIA_TYPE_WEBM - WEBM */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_WEBM"] = 34] = "RAW_MEDIA_TYPE_WEBM";
    /** RAW_MEDIA_TYPE_OGG - OGG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_OGG"] = 35] = "RAW_MEDIA_TYPE_OGG";
    RawMediaType[RawMediaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawMediaType || (RawMediaType = {}));
export const RawMediaTypeSDKType = RawMediaType;
export const RawMediaTypeAmino = RawMediaType;
export function rawMediaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RAW_MEDIA_TYPE_UNSPECIFIED":
            return RawMediaType.RAW_MEDIA_TYPE_UNSPECIFIED;
        case 1:
        case "RAW_MEDIA_TYPE_TEXT_PLAIN":
            return RawMediaType.RAW_MEDIA_TYPE_TEXT_PLAIN;
        case 2:
        case "RAW_MEDIA_TYPE_JSON":
            return RawMediaType.RAW_MEDIA_TYPE_JSON;
        case 3:
        case "RAW_MEDIA_TYPE_CSV":
            return RawMediaType.RAW_MEDIA_TYPE_CSV;
        case 4:
        case "RAW_MEDIA_TYPE_XML":
            return RawMediaType.RAW_MEDIA_TYPE_XML;
        case 5:
        case "RAW_MEDIA_TYPE_PDF":
            return RawMediaType.RAW_MEDIA_TYPE_PDF;
        case 16:
        case "RAW_MEDIA_TYPE_TIFF":
            return RawMediaType.RAW_MEDIA_TYPE_TIFF;
        case 17:
        case "RAW_MEDIA_TYPE_JPG":
            return RawMediaType.RAW_MEDIA_TYPE_JPG;
        case 18:
        case "RAW_MEDIA_TYPE_PNG":
            return RawMediaType.RAW_MEDIA_TYPE_PNG;
        case 19:
        case "RAW_MEDIA_TYPE_SVG":
            return RawMediaType.RAW_MEDIA_TYPE_SVG;
        case 20:
        case "RAW_MEDIA_TYPE_WEBP":
            return RawMediaType.RAW_MEDIA_TYPE_WEBP;
        case 21:
        case "RAW_MEDIA_TYPE_AVIF":
            return RawMediaType.RAW_MEDIA_TYPE_AVIF;
        case 22:
        case "RAW_MEDIA_TYPE_GIF":
            return RawMediaType.RAW_MEDIA_TYPE_GIF;
        case 23:
        case "RAW_MEDIA_TYPE_APNG":
            return RawMediaType.RAW_MEDIA_TYPE_APNG;
        case 32:
        case "RAW_MEDIA_TYPE_MPEG":
            return RawMediaType.RAW_MEDIA_TYPE_MPEG;
        case 33:
        case "RAW_MEDIA_TYPE_MP4":
            return RawMediaType.RAW_MEDIA_TYPE_MP4;
        case 34:
        case "RAW_MEDIA_TYPE_WEBM":
            return RawMediaType.RAW_MEDIA_TYPE_WEBM;
        case 35:
        case "RAW_MEDIA_TYPE_OGG":
            return RawMediaType.RAW_MEDIA_TYPE_OGG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RawMediaType.UNRECOGNIZED;
    }
}
export function rawMediaTypeToJSON(object) {
    switch (object) {
        case RawMediaType.RAW_MEDIA_TYPE_UNSPECIFIED:
            return "RAW_MEDIA_TYPE_UNSPECIFIED";
        case RawMediaType.RAW_MEDIA_TYPE_TEXT_PLAIN:
            return "RAW_MEDIA_TYPE_TEXT_PLAIN";
        case RawMediaType.RAW_MEDIA_TYPE_JSON:
            return "RAW_MEDIA_TYPE_JSON";
        case RawMediaType.RAW_MEDIA_TYPE_CSV:
            return "RAW_MEDIA_TYPE_CSV";
        case RawMediaType.RAW_MEDIA_TYPE_XML:
            return "RAW_MEDIA_TYPE_XML";
        case RawMediaType.RAW_MEDIA_TYPE_PDF:
            return "RAW_MEDIA_TYPE_PDF";
        case RawMediaType.RAW_MEDIA_TYPE_TIFF:
            return "RAW_MEDIA_TYPE_TIFF";
        case RawMediaType.RAW_MEDIA_TYPE_JPG:
            return "RAW_MEDIA_TYPE_JPG";
        case RawMediaType.RAW_MEDIA_TYPE_PNG:
            return "RAW_MEDIA_TYPE_PNG";
        case RawMediaType.RAW_MEDIA_TYPE_SVG:
            return "RAW_MEDIA_TYPE_SVG";
        case RawMediaType.RAW_MEDIA_TYPE_WEBP:
            return "RAW_MEDIA_TYPE_WEBP";
        case RawMediaType.RAW_MEDIA_TYPE_AVIF:
            return "RAW_MEDIA_TYPE_AVIF";
        case RawMediaType.RAW_MEDIA_TYPE_GIF:
            return "RAW_MEDIA_TYPE_GIF";
        case RawMediaType.RAW_MEDIA_TYPE_APNG:
            return "RAW_MEDIA_TYPE_APNG";
        case RawMediaType.RAW_MEDIA_TYPE_MPEG:
            return "RAW_MEDIA_TYPE_MPEG";
        case RawMediaType.RAW_MEDIA_TYPE_MP4:
            return "RAW_MEDIA_TYPE_MP4";
        case RawMediaType.RAW_MEDIA_TYPE_WEBM:
            return "RAW_MEDIA_TYPE_WEBM";
        case RawMediaType.RAW_MEDIA_TYPE_OGG:
            return "RAW_MEDIA_TYPE_OGG";
        case RawMediaType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** GraphCanonicalizationAlgorithm is the graph canonicalization algorithm */
export var GraphCanonicalizationAlgorithm;
(function (GraphCanonicalizationAlgorithm) {
    /** GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED"] = 0] = "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED";
    /** GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 - URDNA2015 graph hashing */
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015"] = 1] = "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015";
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GraphCanonicalizationAlgorithm || (GraphCanonicalizationAlgorithm = {}));
export const GraphCanonicalizationAlgorithmSDKType = GraphCanonicalizationAlgorithm;
export const GraphCanonicalizationAlgorithmAmino = GraphCanonicalizationAlgorithm;
export function graphCanonicalizationAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED":
            return GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED;
        case 1:
        case "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015":
            return GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GraphCanonicalizationAlgorithm.UNRECOGNIZED;
    }
}
export function graphCanonicalizationAlgorithmToJSON(object) {
    switch (object) {
        case GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED:
            return "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED";
        case GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015:
            return "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015";
        case GraphCanonicalizationAlgorithm.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** GraphMerkleTree is the graph merkle tree type used for hashing, if any */
export var GraphMerkleTree;
(function (GraphMerkleTree) {
    /** GRAPH_MERKLE_TREE_NONE_UNSPECIFIED - unspecified and valid */
    GraphMerkleTree[GraphMerkleTree["GRAPH_MERKLE_TREE_NONE_UNSPECIFIED"] = 0] = "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED";
    GraphMerkleTree[GraphMerkleTree["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GraphMerkleTree || (GraphMerkleTree = {}));
export const GraphMerkleTreeSDKType = GraphMerkleTree;
export const GraphMerkleTreeAmino = GraphMerkleTree;
export function graphMerkleTreeFromJSON(object) {
    switch (object) {
        case 0:
        case "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED":
            return GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GraphMerkleTree.UNRECOGNIZED;
    }
}
export function graphMerkleTreeToJSON(object) {
    switch (object) {
        case GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED:
            return "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED";
        case GraphMerkleTree.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseContentHash() {
    return {
        raw: undefined,
        graph: undefined
    };
}
export const ContentHash = {
    typeUrl: "/regen.data.v1.ContentHash",
    encode(message, writer = BinaryWriter.create()) {
        if (message.raw !== undefined) {
            ContentHash_Raw.encode(message.raw, writer.uint32(10).fork()).ldelim();
        }
        if (message.graph !== undefined) {
            ContentHash_Graph.encode(message.graph, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.raw = ContentHash_Raw.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.graph = ContentHash_Graph.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHash();
        message.raw = object.raw !== undefined && object.raw !== null ? ContentHash_Raw.fromPartial(object.raw) : undefined;
        message.graph = object.graph !== undefined && object.graph !== null ? ContentHash_Graph.fromPartial(object.graph) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash();
        if (object.raw !== undefined && object.raw !== null) {
            message.raw = ContentHash_Raw.fromAmino(object.raw);
        }
        if (object.graph !== undefined && object.graph !== null) {
            message.graph = ContentHash_Graph.fromAmino(object.graph);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.raw = message.raw ? ContentHash_Raw.toAmino(message.raw) : undefined;
        obj.graph = message.graph ? ContentHash_Graph.toAmino(message.graph) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHash.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHash.decode(message.value);
    },
    toProto(message) {
        return ContentHash.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ContentHash",
            value: ContentHash.encode(message).finish()
        };
    }
};
function createBaseContentHash_Raw() {
    return {
        hash: new Uint8Array(),
        digestAlgorithm: 0,
        mediaType: 0
    };
}
export const ContentHash_Raw = {
    typeUrl: "/regen.data.v1.Raw",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.digestAlgorithm !== 0) {
            writer.uint32(16).int32(message.digestAlgorithm);
        }
        if (message.mediaType !== 0) {
            writer.uint32(24).int32(message.mediaType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash_Raw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.digestAlgorithm = reader.int32();
                    break;
                case 3:
                    message.mediaType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHash_Raw();
        message.hash = object.hash ?? new Uint8Array();
        message.digestAlgorithm = object.digestAlgorithm ?? 0;
        message.mediaType = object.mediaType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash_Raw();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.digest_algorithm !== undefined && object.digest_algorithm !== null) {
            message.digestAlgorithm = object.digest_algorithm;
        }
        if (object.media_type !== undefined && object.media_type !== null) {
            message.mediaType = object.media_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.media_type = message.mediaType === 0 ? undefined : message.mediaType;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHash_Raw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHash_Raw.decode(message.value);
    },
    toProto(message) {
        return ContentHash_Raw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.Raw",
            value: ContentHash_Raw.encode(message).finish()
        };
    }
};
function createBaseContentHash_Graph() {
    return {
        hash: new Uint8Array(),
        digestAlgorithm: 0,
        canonicalizationAlgorithm: 0,
        merkleTree: 0
    };
}
export const ContentHash_Graph = {
    typeUrl: "/regen.data.v1.Graph",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.digestAlgorithm !== 0) {
            writer.uint32(16).int32(message.digestAlgorithm);
        }
        if (message.canonicalizationAlgorithm !== 0) {
            writer.uint32(24).int32(message.canonicalizationAlgorithm);
        }
        if (message.merkleTree !== 0) {
            writer.uint32(32).int32(message.merkleTree);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash_Graph();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.digestAlgorithm = reader.int32();
                    break;
                case 3:
                    message.canonicalizationAlgorithm = reader.int32();
                    break;
                case 4:
                    message.merkleTree = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHash_Graph();
        message.hash = object.hash ?? new Uint8Array();
        message.digestAlgorithm = object.digestAlgorithm ?? 0;
        message.canonicalizationAlgorithm = object.canonicalizationAlgorithm ?? 0;
        message.merkleTree = object.merkleTree ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash_Graph();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.digest_algorithm !== undefined && object.digest_algorithm !== null) {
            message.digestAlgorithm = object.digest_algorithm;
        }
        if (object.canonicalization_algorithm !== undefined && object.canonicalization_algorithm !== null) {
            message.canonicalizationAlgorithm = object.canonicalization_algorithm;
        }
        if (object.merkle_tree !== undefined && object.merkle_tree !== null) {
            message.merkleTree = object.merkle_tree;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.canonicalization_algorithm = message.canonicalizationAlgorithm === 0 ? undefined : message.canonicalizationAlgorithm;
        obj.merkle_tree = message.merkleTree === 0 ? undefined : message.merkleTree;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHash_Graph.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHash_Graph.decode(message.value);
    },
    toProto(message) {
        return ContentHash_Graph.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.Graph",
            value: ContentHash_Graph.encode(message).finish()
        };
    }
};
function createBaseContentHashes() {
    return {
        contentHashes: []
    };
}
export const ContentHashes = {
    typeUrl: "/regen.data.v1.ContentHashes",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.contentHashes) {
            ContentHash.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHashes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHashes.push(ContentHash.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHashes();
        message.contentHashes = object.contentHashes?.map(e => ContentHash.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHashes();
        message.contentHashes = object.content_hashes?.map(e => ContentHash.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contentHashes) {
            obj.content_hashes = message.contentHashes.map(e => e ? ContentHash.toAmino(e) : undefined);
        }
        else {
            obj.content_hashes = message.contentHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHashes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHashes.decode(message.value);
    },
    toProto(message) {
        return ContentHashes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ContentHashes",
            value: ContentHashes.encode(message).finish()
        };
    }
};
