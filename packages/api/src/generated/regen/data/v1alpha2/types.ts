/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** MediaType defines MIME media types to be used with a ContentHash.Raw hash. */
export enum MediaType {
  /** MEDIA_TYPE_UNSPECIFIED - MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
  MEDIA_TYPE_UNSPECIFIED = 0,
  /** MEDIA_TYPE_TEXT_PLAIN - plain text */
  MEDIA_TYPE_TEXT_PLAIN = 1,
  /** MEDIA_TYPE_JSON - JSON */
  MEDIA_TYPE_JSON = 2,
  /** MEDIA_TYPE_CSV - CSV */
  MEDIA_TYPE_CSV = 3,
  /** MEDIA_TYPE_XML - XML */
  MEDIA_TYPE_XML = 4,
  /** MEDIA_TYPE_PDF - PDF */
  MEDIA_TYPE_PDF = 5,
  /** MEDIA_TYPE_TIFF - TIIF */
  MEDIA_TYPE_TIFF = 16,
  /** MEDIA_TYPE_JPG - JPG */
  MEDIA_TYPE_JPG = 17,
  /** MEDIA_TYPE_PNG - PNG */
  MEDIA_TYPE_PNG = 18,
  /** MEDIA_TYPE_SVG - SVG */
  MEDIA_TYPE_SVG = 19,
  /** MEDIA_TYPE_WEBP - WEBP */
  MEDIA_TYPE_WEBP = 20,
  /** MEDIA_TYPE_AVIF - AVIF */
  MEDIA_TYPE_AVIF = 21,
  /** MEDIA_TYPE_GIF - GIF */
  MEDIA_TYPE_GIF = 22,
  /** MEDIA_TYPE_APNG - APNG */
  MEDIA_TYPE_APNG = 23,
  /** MEDIA_TYPE_MPEG - MPEG */
  MEDIA_TYPE_MPEG = 32,
  /** MEDIA_TYPE_MP4 - MP4 */
  MEDIA_TYPE_MP4 = 33,
  /** MEDIA_TYPE_WEBM - WEBM */
  MEDIA_TYPE_WEBM = 34,
  /** MEDIA_TYPE_OGG - OGG */
  MEDIA_TYPE_OGG = 35,
  UNRECOGNIZED = -1,
}

export function mediaTypeFromJSON(object: any): MediaType {
  switch (object) {
    case 0:
    case 'MEDIA_TYPE_UNSPECIFIED':
      return MediaType.MEDIA_TYPE_UNSPECIFIED;
    case 1:
    case 'MEDIA_TYPE_TEXT_PLAIN':
      return MediaType.MEDIA_TYPE_TEXT_PLAIN;
    case 2:
    case 'MEDIA_TYPE_JSON':
      return MediaType.MEDIA_TYPE_JSON;
    case 3:
    case 'MEDIA_TYPE_CSV':
      return MediaType.MEDIA_TYPE_CSV;
    case 4:
    case 'MEDIA_TYPE_XML':
      return MediaType.MEDIA_TYPE_XML;
    case 5:
    case 'MEDIA_TYPE_PDF':
      return MediaType.MEDIA_TYPE_PDF;
    case 16:
    case 'MEDIA_TYPE_TIFF':
      return MediaType.MEDIA_TYPE_TIFF;
    case 17:
    case 'MEDIA_TYPE_JPG':
      return MediaType.MEDIA_TYPE_JPG;
    case 18:
    case 'MEDIA_TYPE_PNG':
      return MediaType.MEDIA_TYPE_PNG;
    case 19:
    case 'MEDIA_TYPE_SVG':
      return MediaType.MEDIA_TYPE_SVG;
    case 20:
    case 'MEDIA_TYPE_WEBP':
      return MediaType.MEDIA_TYPE_WEBP;
    case 21:
    case 'MEDIA_TYPE_AVIF':
      return MediaType.MEDIA_TYPE_AVIF;
    case 22:
    case 'MEDIA_TYPE_GIF':
      return MediaType.MEDIA_TYPE_GIF;
    case 23:
    case 'MEDIA_TYPE_APNG':
      return MediaType.MEDIA_TYPE_APNG;
    case 32:
    case 'MEDIA_TYPE_MPEG':
      return MediaType.MEDIA_TYPE_MPEG;
    case 33:
    case 'MEDIA_TYPE_MP4':
      return MediaType.MEDIA_TYPE_MP4;
    case 34:
    case 'MEDIA_TYPE_WEBM':
      return MediaType.MEDIA_TYPE_WEBM;
    case 35:
    case 'MEDIA_TYPE_OGG':
      return MediaType.MEDIA_TYPE_OGG;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MediaType.UNRECOGNIZED;
  }
}

export function mediaTypeToJSON(object: MediaType): string {
  switch (object) {
    case MediaType.MEDIA_TYPE_UNSPECIFIED:
      return 'MEDIA_TYPE_UNSPECIFIED';
    case MediaType.MEDIA_TYPE_TEXT_PLAIN:
      return 'MEDIA_TYPE_TEXT_PLAIN';
    case MediaType.MEDIA_TYPE_JSON:
      return 'MEDIA_TYPE_JSON';
    case MediaType.MEDIA_TYPE_CSV:
      return 'MEDIA_TYPE_CSV';
    case MediaType.MEDIA_TYPE_XML:
      return 'MEDIA_TYPE_XML';
    case MediaType.MEDIA_TYPE_PDF:
      return 'MEDIA_TYPE_PDF';
    case MediaType.MEDIA_TYPE_TIFF:
      return 'MEDIA_TYPE_TIFF';
    case MediaType.MEDIA_TYPE_JPG:
      return 'MEDIA_TYPE_JPG';
    case MediaType.MEDIA_TYPE_PNG:
      return 'MEDIA_TYPE_PNG';
    case MediaType.MEDIA_TYPE_SVG:
      return 'MEDIA_TYPE_SVG';
    case MediaType.MEDIA_TYPE_WEBP:
      return 'MEDIA_TYPE_WEBP';
    case MediaType.MEDIA_TYPE_AVIF:
      return 'MEDIA_TYPE_AVIF';
    case MediaType.MEDIA_TYPE_GIF:
      return 'MEDIA_TYPE_GIF';
    case MediaType.MEDIA_TYPE_APNG:
      return 'MEDIA_TYPE_APNG';
    case MediaType.MEDIA_TYPE_MPEG:
      return 'MEDIA_TYPE_MPEG';
    case MediaType.MEDIA_TYPE_MP4:
      return 'MEDIA_TYPE_MP4';
    case MediaType.MEDIA_TYPE_WEBM:
      return 'MEDIA_TYPE_WEBM';
    case MediaType.MEDIA_TYPE_OGG:
      return 'MEDIA_TYPE_OGG';
    default:
      return 'UNKNOWN';
  }
}

/** GraphCanonicalizationAlgorithm is the graph canonicalization algorithm */
export enum GraphCanonicalizationAlgorithm {
  /** GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED - unspecified and invalid */
  GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED = 0,
  /** GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 - URDNA2015 graph hashing */
  GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 = 1,
  UNRECOGNIZED = -1,
}

export function graphCanonicalizationAlgorithmFromJSON(
  object: any,
): GraphCanonicalizationAlgorithm {
  switch (object) {
    case 0:
    case 'GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED':
      return GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED;
    case 1:
    case 'GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015':
      return GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return GraphCanonicalizationAlgorithm.UNRECOGNIZED;
  }
}

export function graphCanonicalizationAlgorithmToJSON(
  object: GraphCanonicalizationAlgorithm,
): string {
  switch (object) {
    case GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED:
      return 'GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED';
    case GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015:
      return 'GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015';
    default:
      return 'UNKNOWN';
  }
}

/** GraphMerkleTree is the graph merkle tree type used for hashing, if any */
export enum GraphMerkleTree {
  /** GRAPH_MERKLE_TREE_NONE_UNSPECIFIED - no merkle tree */
  GRAPH_MERKLE_TREE_NONE_UNSPECIFIED = 0,
  UNRECOGNIZED = -1,
}

export function graphMerkleTreeFromJSON(object: any): GraphMerkleTree {
  switch (object) {
    case 0:
    case 'GRAPH_MERKLE_TREE_NONE_UNSPECIFIED':
      return GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return GraphMerkleTree.UNRECOGNIZED;
  }
}

export function graphMerkleTreeToJSON(object: GraphMerkleTree): string {
  switch (object) {
    case GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED:
      return 'GRAPH_MERKLE_TREE_NONE_UNSPECIFIED';
    default:
      return 'UNKNOWN';
  }
}

/** DigestAlgorithm is the hash digest algorithm */
export enum DigestAlgorithm {
  /** DIGEST_ALGORITHM_UNSPECIFIED - unspecified and invalid */
  DIGEST_ALGORITHM_UNSPECIFIED = 0,
  /** DIGEST_ALGORITHM_BLAKE2B_256 - BLAKE2b-256 */
  DIGEST_ALGORITHM_BLAKE2B_256 = 1,
  UNRECOGNIZED = -1,
}

export function digestAlgorithmFromJSON(object: any): DigestAlgorithm {
  switch (object) {
    case 0:
    case 'DIGEST_ALGORITHM_UNSPECIFIED':
      return DigestAlgorithm.DIGEST_ALGORITHM_UNSPECIFIED;
    case 1:
    case 'DIGEST_ALGORITHM_BLAKE2B_256':
      return DigestAlgorithm.DIGEST_ALGORITHM_BLAKE2B_256;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return DigestAlgorithm.UNRECOGNIZED;
  }
}

export function digestAlgorithmToJSON(object: DigestAlgorithm): string {
  switch (object) {
    case DigestAlgorithm.DIGEST_ALGORITHM_UNSPECIFIED:
      return 'DIGEST_ALGORITHM_UNSPECIFIED';
    case DigestAlgorithm.DIGEST_ALGORITHM_BLAKE2B_256:
      return 'DIGEST_ALGORITHM_BLAKE2B_256';
    default:
      return 'UNKNOWN';
  }
}

/** ContentHash specifies a hash based content identifier for a piece of data */
export interface ContentHash {
  $type: 'regen.data.v1alpha2.ContentHash';
  /**
   * Raw specifies "raw" data which does not specify a deterministic,
   * canonical encoding. Users of these hashes MUST maintain a copy of the
   * hashed data which is preserved bit by bit. All other content encodings
   * specify a deterministic, canonical encoding allowing implementations to
   * choose from a variety of alternative formats for transport and encoding
   * while maintaining the guarantee that the canonical hash will not change.
   * The media type for "raw" data is defined by the MediaType enum.
   */
  raw?: ContentHash_Raw | undefined;
  /**
   * Graph specifies graph data that conforms to the RDF data model.
   * The canonicalization algorithm used for an RDF graph is specified by
   * GraphCanonicalizationAlgorithm.
   */
  graph?: ContentHash_Graph | undefined;
}

/** Raw is the content hash type used for raw data */
export interface ContentHash_Raw {
  $type: 'regen.data.v1alpha2.ContentHash.Raw';
  /**
   * hash represents the hash of the data based on the specified
   * digest_algorithm
   */
  hash: Uint8Array;
  /** digest_algorithm represents the hash digest algorithm. */
  digestAlgorithm: DigestAlgorithm;
  /** media_type represents the MediaType for raw data. */
  mediaType: MediaType;
}

/** Graph is the content hash type used for RDF graph data */
export interface ContentHash_Graph {
  $type: 'regen.data.v1alpha2.ContentHash.Graph';
  /**
   * hash represents the hash of the data based on the specified
   * digest_algorithm
   */
  hash: Uint8Array;
  /** digest_algorithm represents the hash digest algorithm. */
  digestAlgorithm: DigestAlgorithm;
  /**
   * graph_canonicalization_algorithm represents the RDF graph
   * canonicalization algorithm.
   */
  canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;
  /** merkle_tree is the merkle tree type used for the graph hash, if any */
  merkleTree: GraphMerkleTree;
}

/** Content is a wrapper for content stored on-chain */
export interface Content {
  $type: 'regen.data.v1alpha2.Content';
  /** raw_data is the oneof field for raw data */
  rawData: Uint8Array | undefined;
}

/** SignerEntry is a signer entry wrapping a signer address and timestamp */
export interface SignerEntry {
  $type: 'regen.data.v1alpha2.SignerEntry';
  /** signer is the address of the signer */
  signer: string;
  /** timestamp is the time at which the data was signed */
  timestamp?: Date;
}

function createBaseContentHash(): ContentHash {
  return {
    $type: 'regen.data.v1alpha2.ContentHash',
    raw: undefined,
    graph: undefined,
  };
}

export const ContentHash = {
  $type: 'regen.data.v1alpha2.ContentHash' as const,

  encode(
    message: ContentHash,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.raw !== undefined) {
      ContentHash_Raw.encode(message.raw, writer.uint32(10).fork()).ldelim();
    }
    if (message.graph !== undefined) {
      ContentHash_Graph.encode(
        message.graph,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ContentHash {
    return {
      $type: ContentHash.$type,
      raw: isSet(object.raw) ? ContentHash_Raw.fromJSON(object.raw) : undefined,
      graph: isSet(object.graph)
        ? ContentHash_Graph.fromJSON(object.graph)
        : undefined,
    };
  },

  toJSON(message: ContentHash): unknown {
    const obj: any = {};
    message.raw !== undefined &&
      (obj.raw = message.raw ? ContentHash_Raw.toJSON(message.raw) : undefined);
    message.graph !== undefined &&
      (obj.graph = message.graph
        ? ContentHash_Graph.toJSON(message.graph)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContentHash>, I>>(
    object: I,
  ): ContentHash {
    const message = createBaseContentHash();
    message.raw =
      object.raw !== undefined && object.raw !== null
        ? ContentHash_Raw.fromPartial(object.raw)
        : undefined;
    message.graph =
      object.graph !== undefined && object.graph !== null
        ? ContentHash_Graph.fromPartial(object.graph)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ContentHash.$type, ContentHash);

function createBaseContentHash_Raw(): ContentHash_Raw {
  return {
    $type: 'regen.data.v1alpha2.ContentHash.Raw',
    hash: new Uint8Array(),
    digestAlgorithm: 0,
    mediaType: 0,
  };
}

export const ContentHash_Raw = {
  $type: 'regen.data.v1alpha2.ContentHash.Raw' as const,

  encode(
    message: ContentHash_Raw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentHash_Raw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentHash_Raw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.digestAlgorithm = reader.int32() as any;
          break;
        case 3:
          message.mediaType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentHash_Raw {
    return {
      $type: ContentHash_Raw.$type,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      digestAlgorithm: isSet(object.digestAlgorithm)
        ? digestAlgorithmFromJSON(object.digestAlgorithm)
        : 0,
      mediaType: isSet(object.mediaType)
        ? mediaTypeFromJSON(object.mediaType)
        : 0,
    };
  },

  toJSON(message: ContentHash_Raw): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    message.digestAlgorithm !== undefined &&
      (obj.digestAlgorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.mediaType !== undefined &&
      (obj.mediaType = mediaTypeToJSON(message.mediaType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContentHash_Raw>, I>>(
    object: I,
  ): ContentHash_Raw {
    const message = createBaseContentHash_Raw();
    message.hash = object.hash ?? new Uint8Array();
    message.digestAlgorithm = object.digestAlgorithm ?? 0;
    message.mediaType = object.mediaType ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ContentHash_Raw.$type, ContentHash_Raw);

function createBaseContentHash_Graph(): ContentHash_Graph {
  return {
    $type: 'regen.data.v1alpha2.ContentHash.Graph',
    hash: new Uint8Array(),
    digestAlgorithm: 0,
    canonicalizationAlgorithm: 0,
    merkleTree: 0,
  };
}

export const ContentHash_Graph = {
  $type: 'regen.data.v1alpha2.ContentHash.Graph' as const,

  encode(
    message: ContentHash_Graph,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentHash_Graph {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentHash_Graph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.digestAlgorithm = reader.int32() as any;
          break;
        case 3:
          message.canonicalizationAlgorithm = reader.int32() as any;
          break;
        case 4:
          message.merkleTree = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentHash_Graph {
    return {
      $type: ContentHash_Graph.$type,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      digestAlgorithm: isSet(object.digestAlgorithm)
        ? digestAlgorithmFromJSON(object.digestAlgorithm)
        : 0,
      canonicalizationAlgorithm: isSet(object.canonicalizationAlgorithm)
        ? graphCanonicalizationAlgorithmFromJSON(
            object.canonicalizationAlgorithm,
          )
        : 0,
      merkleTree: isSet(object.merkleTree)
        ? graphMerkleTreeFromJSON(object.merkleTree)
        : 0,
    };
  },

  toJSON(message: ContentHash_Graph): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    message.digestAlgorithm !== undefined &&
      (obj.digestAlgorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.canonicalizationAlgorithm !== undefined &&
      (obj.canonicalizationAlgorithm = graphCanonicalizationAlgorithmToJSON(
        message.canonicalizationAlgorithm,
      ));
    message.merkleTree !== undefined &&
      (obj.merkleTree = graphMerkleTreeToJSON(message.merkleTree));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContentHash_Graph>, I>>(
    object: I,
  ): ContentHash_Graph {
    const message = createBaseContentHash_Graph();
    message.hash = object.hash ?? new Uint8Array();
    message.digestAlgorithm = object.digestAlgorithm ?? 0;
    message.canonicalizationAlgorithm = object.canonicalizationAlgorithm ?? 0;
    message.merkleTree = object.merkleTree ?? 0;
    return message;
  },
};

messageTypeRegistry.set(ContentHash_Graph.$type, ContentHash_Graph);

function createBaseContent(): Content {
  return { $type: 'regen.data.v1alpha2.Content', rawData: undefined };
}

export const Content = {
  $type: 'regen.data.v1alpha2.Content' as const,

  encode(
    message: Content,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rawData !== undefined) {
      writer.uint32(10).bytes(message.rawData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Content {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Content {
    return {
      $type: Content.$type,
      rawData: isSet(object.rawData)
        ? bytesFromBase64(object.rawData)
        : undefined,
    };
  },

  toJSON(message: Content): unknown {
    const obj: any = {};
    message.rawData !== undefined &&
      (obj.rawData =
        message.rawData !== undefined
          ? base64FromBytes(message.rawData)
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Content>, I>>(object: I): Content {
    const message = createBaseContent();
    message.rawData = object.rawData ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(Content.$type, Content);

function createBaseSignerEntry(): SignerEntry {
  return {
    $type: 'regen.data.v1alpha2.SignerEntry',
    signer: '',
    timestamp: undefined,
  };
}

export const SignerEntry = {
  $type: 'regen.data.v1alpha2.SignerEntry' as const,

  encode(
    message: SignerEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signer !== '') {
      writer.uint32(10).string(message.signer);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignerEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerEntry {
    return {
      $type: SignerEntry.$type,
      signer: isSet(object.signer) ? String(object.signer) : '',
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: SignerEntry): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignerEntry>, I>>(
    object: I,
  ): SignerEntry {
    const message = createBaseSignerEntry();
    message.signer = object.signer ?? '';
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(SignerEntry.$type, SignerEntry);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
