import * as _105 from "./data/v1/events";
import * as _106 from "./data/v1/query";
import * as _107 from "./data/v1/state";
import * as _108 from "./data/v1/tx";
import * as _109 from "./data/v1/types";
import * as _110 from "./ecocredit/basket/v1/events";
import * as _111 from "./ecocredit/basket/v1/query";
import * as _112 from "./ecocredit/basket/v1/state";
import * as _113 from "./ecocredit/basket/v1/tx";
import * as _114 from "./ecocredit/basket/v1/types";
import * as _115 from "./ecocredit/marketplace/v1/events";
import * as _116 from "./ecocredit/marketplace/v1/query";
import * as _117 from "./ecocredit/marketplace/v1/state";
import * as _118 from "./ecocredit/marketplace/v1/tx";
import * as _119 from "./ecocredit/marketplace/v1/types";
import * as _120 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _121 from "./ecocredit/v1/events";
import * as _122 from "./ecocredit/v1/query";
import * as _123 from "./ecocredit/v1/state";
import * as _124 from "./ecocredit/v1/tx";
import * as _125 from "./ecocredit/v1/types";
import * as _126 from "./ecocredit/v1alpha1/events";
import * as _127 from "./ecocredit/v1alpha1/genesis";
import * as _128 from "./ecocredit/v1alpha1/query";
import * as _129 from "./ecocredit/v1alpha1/tx";
import * as _130 from "./ecocredit/v1alpha1/types";
import * as _131 from "./intertx/v1/query";
import * as _132 from "./intertx/v1/tx";
import * as _202 from "./data/v1/query.lcd";
import * as _203 from "./ecocredit/basket/v1/query.lcd";
import * as _204 from "./ecocredit/marketplace/v1/query.lcd";
import * as _205 from "./ecocredit/v1/query.lcd";
import * as _206 from "./ecocredit/v1alpha1/query.lcd";
import * as _207 from "./intertx/v1/query.lcd";
export declare namespace regen {
    namespace data {
        const v1: {
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _108.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _108.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _108.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _108.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _108.MsgAnchor): {
                        typeUrl: string;
                        value: _108.MsgAnchor;
                    };
                    attest(value: _108.MsgAttest): {
                        typeUrl: string;
                        value: _108.MsgAttest;
                    };
                    defineResolver(value: _108.MsgDefineResolver): {
                        typeUrl: string;
                        value: _108.MsgDefineResolver;
                    };
                    registerResolver(value: _108.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _108.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _108.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _108.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _108.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _108.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _108.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _108.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _108.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _108.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _108.MsgAnchor): {
                        typeUrl: string;
                        value: _108.MsgAnchor;
                    };
                    attest(value: _108.MsgAttest): {
                        typeUrl: string;
                        value: _108.MsgAttest;
                    };
                    defineResolver(value: _108.MsgDefineResolver): {
                        typeUrl: string;
                        value: _108.MsgDefineResolver;
                    };
                    registerResolver(value: _108.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _108.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash }: _108.MsgAnchor) => {
                        sender: string;
                        content_hash: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        };
                    };
                    fromAmino: ({ sender, content_hash }: {
                        sender: string;
                        content_hash: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        };
                    }) => _108.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: ({ attestor, contentHashes }: _108.MsgAttest) => {
                        attestor: string;
                        content_hashes: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            canonicalization_algorithm: number;
                            merkle_tree: number;
                        }[];
                    };
                    fromAmino: ({ attestor, content_hashes }: {
                        attestor: string;
                        content_hashes: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            canonicalization_algorithm: number;
                            merkle_tree: number;
                        }[];
                    }) => _108.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverUrl }: _108.MsgDefineResolver) => {
                        manager: string;
                        resolver_url: string;
                    };
                    fromAmino: ({ manager, resolver_url }: {
                        manager: string;
                        resolver_url: string;
                    }) => _108.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverId, contentHashes }: _108.MsgRegisterResolver) => {
                        manager: string;
                        resolver_id: string;
                        content_hashes: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        }[];
                    };
                    fromAmino: ({ manager, resolver_id, content_hashes }: {
                        manager: string;
                        resolver_id: string;
                        content_hashes: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        }[];
                    }) => _108.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _109.DigestAlgorithm;
            digestAlgorithmToJSON(object: _109.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _109.RawMediaType;
            rawMediaTypeToJSON(object: _109.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _109.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _109.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _109.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _109.GraphMerkleTree): string;
            DigestAlgorithm: typeof _109.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _109.DigestAlgorithmSDKType;
            RawMediaType: typeof _109.RawMediaType;
            RawMediaTypeSDKType: typeof _109.RawMediaTypeSDKType;
            GraphCanonicalizationAlgorithm: typeof _109.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _109.GraphCanonicalizationAlgorithmSDKType;
            GraphMerkleTree: typeof _109.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _109.GraphMerkleTreeSDKType;
            ContentHash: {
                encode(message: _109.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.ContentHash;
                fromJSON(object: any): _109.ContentHash;
                toJSON(message: _109.ContentHash): unknown;
                fromPartial(object: Partial<_109.ContentHash>): _109.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _109.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.ContentHash_Raw;
                fromJSON(object: any): _109.ContentHash_Raw;
                toJSON(message: _109.ContentHash_Raw): unknown;
                fromPartial(object: Partial<_109.ContentHash_Raw>): _109.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _109.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.ContentHash_Graph;
                fromJSON(object: any): _109.ContentHash_Graph;
                toJSON(message: _109.ContentHash_Graph): unknown;
                fromPartial(object: Partial<_109.ContentHash_Graph>): _109.ContentHash_Graph;
            };
            ContentHashes: {
                encode(message: _109.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.ContentHashes;
                fromJSON(object: any): _109.ContentHashes;
                toJSON(message: _109.ContentHashes): unknown;
                fromPartial(object: Partial<_109.ContentHashes>): _109.ContentHashes;
            };
            MsgAnchor: {
                encode(message: _108.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgAnchor;
                fromJSON(object: any): _108.MsgAnchor;
                toJSON(message: _108.MsgAnchor): unknown;
                fromPartial(object: Partial<_108.MsgAnchor>): _108.MsgAnchor;
            };
            MsgAnchorResponse: {
                encode(message: _108.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgAnchorResponse;
                fromJSON(object: any): _108.MsgAnchorResponse;
                toJSON(message: _108.MsgAnchorResponse): unknown;
                fromPartial(object: Partial<_108.MsgAnchorResponse>): _108.MsgAnchorResponse;
            };
            MsgAttest: {
                encode(message: _108.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgAttest;
                fromJSON(object: any): _108.MsgAttest;
                toJSON(message: _108.MsgAttest): unknown;
                fromPartial(object: Partial<_108.MsgAttest>): _108.MsgAttest;
            };
            MsgAttestResponse: {
                encode(message: _108.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgAttestResponse;
                fromJSON(object: any): _108.MsgAttestResponse;
                toJSON(message: _108.MsgAttestResponse): unknown;
                fromPartial(object: Partial<_108.MsgAttestResponse>): _108.MsgAttestResponse;
            };
            MsgDefineResolver: {
                encode(message: _108.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgDefineResolver;
                fromJSON(object: any): _108.MsgDefineResolver;
                toJSON(message: _108.MsgDefineResolver): unknown;
                fromPartial(object: Partial<_108.MsgDefineResolver>): _108.MsgDefineResolver;
            };
            MsgDefineResolverResponse: {
                encode(message: _108.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgDefineResolverResponse;
                fromJSON(object: any): _108.MsgDefineResolverResponse;
                toJSON(message: _108.MsgDefineResolverResponse): unknown;
                fromPartial(object: Partial<_108.MsgDefineResolverResponse>): _108.MsgDefineResolverResponse;
            };
            MsgRegisterResolver: {
                encode(message: _108.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgRegisterResolver;
                fromJSON(object: any): _108.MsgRegisterResolver;
                toJSON(message: _108.MsgRegisterResolver): unknown;
                fromPartial(object: Partial<_108.MsgRegisterResolver>): _108.MsgRegisterResolver;
            };
            MsgRegisterResolverResponse: {
                encode(_: _108.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.MsgRegisterResolverResponse;
                fromJSON(_: any): _108.MsgRegisterResolverResponse;
                toJSON(_: _108.MsgRegisterResolverResponse): unknown;
                fromPartial(_: Partial<_108.MsgRegisterResolverResponse>): _108.MsgRegisterResolverResponse;
            };
            DataID: {
                encode(message: _107.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.DataID;
                fromJSON(object: any): _107.DataID;
                toJSON(message: _107.DataID): unknown;
                fromPartial(object: Partial<_107.DataID>): _107.DataID;
            };
            DataAnchor: {
                encode(message: _107.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.DataAnchor;
                fromJSON(object: any): _107.DataAnchor;
                toJSON(message: _107.DataAnchor): unknown;
                fromPartial(object: Partial<_107.DataAnchor>): _107.DataAnchor;
            };
            DataAttestor: {
                encode(message: _107.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.DataAttestor;
                fromJSON(object: any): _107.DataAttestor;
                toJSON(message: _107.DataAttestor): unknown;
                fromPartial(object: Partial<_107.DataAttestor>): _107.DataAttestor;
            };
            Resolver: {
                encode(message: _107.Resolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.Resolver;
                fromJSON(object: any): _107.Resolver;
                toJSON(message: _107.Resolver): unknown;
                fromPartial(object: Partial<_107.Resolver>): _107.Resolver;
            };
            DataResolver: {
                encode(message: _107.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.DataResolver;
                fromJSON(object: any): _107.DataResolver;
                toJSON(message: _107.DataResolver): unknown;
                fromPartial(object: Partial<_107.DataResolver>): _107.DataResolver;
            };
            QueryAnchorByIRIRequest: {
                encode(message: _106.QueryAnchorByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAnchorByIRIRequest;
                fromJSON(object: any): _106.QueryAnchorByIRIRequest;
                toJSON(message: _106.QueryAnchorByIRIRequest): unknown;
                fromPartial(object: Partial<_106.QueryAnchorByIRIRequest>): _106.QueryAnchorByIRIRequest;
            };
            QueryAnchorByIRIResponse: {
                encode(message: _106.QueryAnchorByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAnchorByIRIResponse;
                fromJSON(object: any): _106.QueryAnchorByIRIResponse;
                toJSON(message: _106.QueryAnchorByIRIResponse): unknown;
                fromPartial(object: Partial<_106.QueryAnchorByIRIResponse>): _106.QueryAnchorByIRIResponse;
            };
            QueryAnchorByHashRequest: {
                encode(message: _106.QueryAnchorByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAnchorByHashRequest;
                fromJSON(object: any): _106.QueryAnchorByHashRequest;
                toJSON(message: _106.QueryAnchorByHashRequest): unknown;
                fromPartial(object: Partial<_106.QueryAnchorByHashRequest>): _106.QueryAnchorByHashRequest;
            };
            QueryAnchorByHashResponse: {
                encode(message: _106.QueryAnchorByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAnchorByHashResponse;
                fromJSON(object: any): _106.QueryAnchorByHashResponse;
                toJSON(message: _106.QueryAnchorByHashResponse): unknown;
                fromPartial(object: Partial<_106.QueryAnchorByHashResponse>): _106.QueryAnchorByHashResponse;
            };
            QueryAttestationsByAttestorRequest: {
                encode(message: _106.QueryAttestationsByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAttestationsByAttestorRequest;
                fromJSON(object: any): _106.QueryAttestationsByAttestorRequest;
                toJSON(message: _106.QueryAttestationsByAttestorRequest): unknown;
                fromPartial(object: Partial<_106.QueryAttestationsByAttestorRequest>): _106.QueryAttestationsByAttestorRequest;
            };
            QueryAttestationsByAttestorResponse: {
                encode(message: _106.QueryAttestationsByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAttestationsByAttestorResponse;
                fromJSON(object: any): _106.QueryAttestationsByAttestorResponse;
                toJSON(message: _106.QueryAttestationsByAttestorResponse): unknown;
                fromPartial(object: Partial<_106.QueryAttestationsByAttestorResponse>): _106.QueryAttestationsByAttestorResponse;
            };
            QueryAttestationsByIRIRequest: {
                encode(message: _106.QueryAttestationsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAttestationsByIRIRequest;
                fromJSON(object: any): _106.QueryAttestationsByIRIRequest;
                toJSON(message: _106.QueryAttestationsByIRIRequest): unknown;
                fromPartial(object: Partial<_106.QueryAttestationsByIRIRequest>): _106.QueryAttestationsByIRIRequest;
            };
            QueryAttestationsByIRIResponse: {
                encode(message: _106.QueryAttestationsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAttestationsByIRIResponse;
                fromJSON(object: any): _106.QueryAttestationsByIRIResponse;
                toJSON(message: _106.QueryAttestationsByIRIResponse): unknown;
                fromPartial(object: Partial<_106.QueryAttestationsByIRIResponse>): _106.QueryAttestationsByIRIResponse;
            };
            QueryAttestationsByHashRequest: {
                encode(message: _106.QueryAttestationsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAttestationsByHashRequest;
                fromJSON(object: any): _106.QueryAttestationsByHashRequest;
                toJSON(message: _106.QueryAttestationsByHashRequest): unknown;
                fromPartial(object: Partial<_106.QueryAttestationsByHashRequest>): _106.QueryAttestationsByHashRequest;
            };
            QueryAttestationsByHashResponse: {
                encode(message: _106.QueryAttestationsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryAttestationsByHashResponse;
                fromJSON(object: any): _106.QueryAttestationsByHashResponse;
                toJSON(message: _106.QueryAttestationsByHashResponse): unknown;
                fromPartial(object: Partial<_106.QueryAttestationsByHashResponse>): _106.QueryAttestationsByHashResponse;
            };
            QueryResolverRequest: {
                encode(message: _106.QueryResolverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolverRequest;
                fromJSON(object: any): _106.QueryResolverRequest;
                toJSON(message: _106.QueryResolverRequest): unknown;
                fromPartial(object: Partial<_106.QueryResolverRequest>): _106.QueryResolverRequest;
            };
            QueryResolverResponse: {
                encode(message: _106.QueryResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolverResponse;
                fromJSON(object: any): _106.QueryResolverResponse;
                toJSON(message: _106.QueryResolverResponse): unknown;
                fromPartial(object: Partial<_106.QueryResolverResponse>): _106.QueryResolverResponse;
            };
            QueryResolversByIRIRequest: {
                encode(message: _106.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolversByIRIRequest;
                fromJSON(object: any): _106.QueryResolversByIRIRequest;
                toJSON(message: _106.QueryResolversByIRIRequest): unknown;
                fromPartial(object: Partial<_106.QueryResolversByIRIRequest>): _106.QueryResolversByIRIRequest;
            };
            QueryResolversByIRIResponse: {
                encode(message: _106.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolversByIRIResponse;
                fromJSON(object: any): _106.QueryResolversByIRIResponse;
                toJSON(message: _106.QueryResolversByIRIResponse): unknown;
                fromPartial(object: Partial<_106.QueryResolversByIRIResponse>): _106.QueryResolversByIRIResponse;
            };
            QueryResolversByHashRequest: {
                encode(message: _106.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolversByHashRequest;
                fromJSON(object: any): _106.QueryResolversByHashRequest;
                toJSON(message: _106.QueryResolversByHashRequest): unknown;
                fromPartial(object: Partial<_106.QueryResolversByHashRequest>): _106.QueryResolversByHashRequest;
            };
            QueryResolversByHashResponse: {
                encode(message: _106.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolversByHashResponse;
                fromJSON(object: any): _106.QueryResolversByHashResponse;
                toJSON(message: _106.QueryResolversByHashResponse): unknown;
                fromPartial(object: Partial<_106.QueryResolversByHashResponse>): _106.QueryResolversByHashResponse;
            };
            QueryResolversByURLRequest: {
                encode(message: _106.QueryResolversByURLRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolversByURLRequest;
                fromJSON(object: any): _106.QueryResolversByURLRequest;
                toJSON(message: _106.QueryResolversByURLRequest): unknown;
                fromPartial(object: Partial<_106.QueryResolversByURLRequest>): _106.QueryResolversByURLRequest;
            };
            QueryResolversByURLResponse: {
                encode(message: _106.QueryResolversByURLResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryResolversByURLResponse;
                fromJSON(object: any): _106.QueryResolversByURLResponse;
                toJSON(message: _106.QueryResolversByURLResponse): unknown;
                fromPartial(object: Partial<_106.QueryResolversByURLResponse>): _106.QueryResolversByURLResponse;
            };
            ConvertIRIToHashRequest: {
                encode(message: _106.ConvertIRIToHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.ConvertIRIToHashRequest;
                fromJSON(object: any): _106.ConvertIRIToHashRequest;
                toJSON(message: _106.ConvertIRIToHashRequest): unknown;
                fromPartial(object: Partial<_106.ConvertIRIToHashRequest>): _106.ConvertIRIToHashRequest;
            };
            ConvertIRIToHashResponse: {
                encode(message: _106.ConvertIRIToHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.ConvertIRIToHashResponse;
                fromJSON(object: any): _106.ConvertIRIToHashResponse;
                toJSON(message: _106.ConvertIRIToHashResponse): unknown;
                fromPartial(object: Partial<_106.ConvertIRIToHashResponse>): _106.ConvertIRIToHashResponse;
            };
            ConvertHashToIRIRequest: {
                encode(message: _106.ConvertHashToIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.ConvertHashToIRIRequest;
                fromJSON(object: any): _106.ConvertHashToIRIRequest;
                toJSON(message: _106.ConvertHashToIRIRequest): unknown;
                fromPartial(object: Partial<_106.ConvertHashToIRIRequest>): _106.ConvertHashToIRIRequest;
            };
            ConvertHashToIRIResponse: {
                encode(message: _106.ConvertHashToIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.ConvertHashToIRIResponse;
                fromJSON(object: any): _106.ConvertHashToIRIResponse;
                toJSON(message: _106.ConvertHashToIRIResponse): unknown;
                fromPartial(object: Partial<_106.ConvertHashToIRIResponse>): _106.ConvertHashToIRIResponse;
            };
            AnchorInfo: {
                encode(message: _106.AnchorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.AnchorInfo;
                fromJSON(object: any): _106.AnchorInfo;
                toJSON(message: _106.AnchorInfo): unknown;
                fromPartial(object: Partial<_106.AnchorInfo>): _106.AnchorInfo;
            };
            AttestationInfo: {
                encode(message: _106.AttestationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.AttestationInfo;
                fromJSON(object: any): _106.AttestationInfo;
                toJSON(message: _106.AttestationInfo): unknown;
                fromPartial(object: Partial<_106.AttestationInfo>): _106.AttestationInfo;
            };
            ResolverInfo: {
                encode(message: _106.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.ResolverInfo;
                fromJSON(object: any): _106.ResolverInfo;
                toJSON(message: _106.ResolverInfo): unknown;
                fromPartial(object: Partial<_106.ResolverInfo>): _106.ResolverInfo;
            };
            EventAnchor: {
                encode(message: _105.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.EventAnchor;
                fromJSON(object: any): _105.EventAnchor;
                toJSON(message: _105.EventAnchor): unknown;
                fromPartial(object: Partial<_105.EventAnchor>): _105.EventAnchor;
            };
            EventAttest: {
                encode(message: _105.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.EventAttest;
                fromJSON(object: any): _105.EventAttest;
                toJSON(message: _105.EventAttest): unknown;
                fromPartial(object: Partial<_105.EventAttest>): _105.EventAttest;
            };
            EventDefineResolver: {
                encode(message: _105.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.EventDefineResolver;
                fromJSON(object: any): _105.EventDefineResolver;
                toJSON(message: _105.EventDefineResolver): unknown;
                fromPartial(object: Partial<_105.EventDefineResolver>): _105.EventDefineResolver;
            };
            EventRegisterResolver: {
                encode(message: _105.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.EventRegisterResolver;
                fromJSON(object: any): _105.EventRegisterResolver;
                toJSON(message: _105.EventRegisterResolver): unknown;
                fromPartial(object: Partial<_105.EventRegisterResolver>): _105.EventRegisterResolver;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                LCDQueryClient: typeof _203.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _113.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _113.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _113.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _113.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _113.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _113.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _113.MsgCreate): {
                            typeUrl: string;
                            value: _113.MsgCreate;
                        };
                        put(value: _113.MsgPut): {
                            typeUrl: string;
                            value: _113.MsgPut;
                        };
                        take(value: _113.MsgTake): {
                            typeUrl: string;
                            value: _113.MsgTake;
                        };
                        updateBasketFee(value: _113.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _113.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _113.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _113.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _113.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _113.MsgUpdateDateCriteria;
                        };
                    };
                    toJSON: {
                        create(value: _113.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _113.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _113.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateBasketFee(value: _113.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateCurator(value: _113.MsgUpdateCurator): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateDateCriteria(value: _113.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _113.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _113.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _113.MsgTake;
                        };
                        updateBasketFee(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpdateBasketFee;
                        };
                        updateCurator(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _113.MsgCreate): {
                            typeUrl: string;
                            value: _113.MsgCreate;
                        };
                        put(value: _113.MsgPut): {
                            typeUrl: string;
                            value: _113.MsgPut;
                        };
                        take(value: _113.MsgTake): {
                            typeUrl: string;
                            value: _113.MsgTake;
                        };
                        updateBasketFee(value: _113.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _113.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _113.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _113.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _113.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _113.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: _113.MsgCreate) => {
                            curator: string;
                            name: string;
                            description: string;
                            exponent: number;
                            disable_auto_retire: boolean;
                            credit_type_abbrev: string;
                            allowed_classes: string[];
                            date_criteria: {
                                min_start_date: {
                                    seconds: string;
                                    nanos: number;
                                };
                                start_date_window: {
                                    seconds: string;
                                    nanos: number;
                                };
                                years_in_the_past: number;
                            };
                            fee: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                        fromAmino: ({ curator, name, description, exponent, disable_auto_retire, credit_type_abbrev, allowed_classes, date_criteria, fee }: {
                            curator: string;
                            name: string;
                            description: string;
                            exponent: number;
                            disable_auto_retire: boolean;
                            credit_type_abbrev: string;
                            allowed_classes: string[];
                            date_criteria: {
                                min_start_date: {
                                    seconds: string;
                                    nanos: number;
                                };
                                start_date_window: {
                                    seconds: string;
                                    nanos: number;
                                };
                                years_in_the_past: number;
                            };
                            fee: {
                                denom: string;
                                amount: string;
                            }[];
                        }) => _113.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, credits }: _113.MsgPut) => {
                            owner: string;
                            basket_denom: string;
                            credits: {
                                batch_denom: string;
                                amount: string;
                            }[];
                        };
                        fromAmino: ({ owner, basket_denom, credits }: {
                            owner: string;
                            basket_denom: string;
                            credits: {
                                batch_denom: string;
                                amount: string;
                            }[];
                        }) => _113.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, amount, retirementLocation, retireOnTake, retirementJurisdiction, retirementReason }: _113.MsgTake) => {
                            owner: string;
                            basket_denom: string;
                            amount: string;
                            retirement_location: string;
                            retire_on_take: boolean;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        };
                        fromAmino: ({ owner, basket_denom, amount, retirement_location, retire_on_take, retirement_jurisdiction, retirement_reason }: {
                            owner: string;
                            basket_denom: string;
                            amount: string;
                            retirement_location: string;
                            retire_on_take: boolean;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }) => _113.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: ({ authority, fee }: _113.MsgUpdateBasketFee) => {
                            authority: string;
                            fee: {
                                denom: string;
                                amount: string;
                            };
                        };
                        fromAmino: ({ authority, fee }: {
                            authority: string;
                            fee: {
                                denom: string;
                                amount: string;
                            };
                        }) => _113.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: ({ curator, denom, newCurator }: _113.MsgUpdateCurator) => {
                            curator: string;
                            denom: string;
                            new_curator: string;
                        };
                        fromAmino: ({ curator, denom, new_curator }: {
                            curator: string;
                            denom: string;
                            new_curator: string;
                        }) => _113.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: ({ authority, denom, newDateCriteria }: _113.MsgUpdateDateCriteria) => {
                            authority: string;
                            denom: string;
                            new_date_criteria: {
                                min_start_date: {
                                    seconds: string;
                                    nanos: number;
                                };
                                start_date_window: {
                                    seconds: string;
                                    nanos: number;
                                };
                                years_in_the_past: number;
                            };
                        };
                        fromAmino: ({ authority, denom, new_date_criteria }: {
                            authority: string;
                            denom: string;
                            new_date_criteria: {
                                min_start_date: {
                                    seconds: string;
                                    nanos: number;
                                };
                                start_date_window: {
                                    seconds: string;
                                    nanos: number;
                                };
                                years_in_the_past: number;
                            };
                        }) => _113.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    encode(message: _114.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.BasketCredit;
                    fromJSON(object: any): _114.BasketCredit;
                    toJSON(message: _114.BasketCredit): unknown;
                    fromPartial(object: Partial<_114.BasketCredit>): _114.BasketCredit;
                };
                DateCriteria: {
                    encode(message: _114.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.DateCriteria;
                    fromJSON(object: any): _114.DateCriteria;
                    toJSON(message: _114.DateCriteria): unknown;
                    fromPartial(object: Partial<_114.DateCriteria>): _114.DateCriteria;
                };
                MsgCreate: {
                    encode(message: _113.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgCreate;
                    fromJSON(object: any): _113.MsgCreate;
                    toJSON(message: _113.MsgCreate): unknown;
                    fromPartial(object: Partial<_113.MsgCreate>): _113.MsgCreate;
                };
                MsgCreateResponse: {
                    encode(message: _113.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgCreateResponse;
                    fromJSON(object: any): _113.MsgCreateResponse;
                    toJSON(message: _113.MsgCreateResponse): unknown;
                    fromPartial(object: Partial<_113.MsgCreateResponse>): _113.MsgCreateResponse;
                };
                MsgPut: {
                    encode(message: _113.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgPut;
                    fromJSON(object: any): _113.MsgPut;
                    toJSON(message: _113.MsgPut): unknown;
                    fromPartial(object: Partial<_113.MsgPut>): _113.MsgPut;
                };
                MsgPutResponse: {
                    encode(message: _113.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgPutResponse;
                    fromJSON(object: any): _113.MsgPutResponse;
                    toJSON(message: _113.MsgPutResponse): unknown;
                    fromPartial(object: Partial<_113.MsgPutResponse>): _113.MsgPutResponse;
                };
                MsgTake: {
                    encode(message: _113.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgTake;
                    fromJSON(object: any): _113.MsgTake;
                    toJSON(message: _113.MsgTake): unknown;
                    fromPartial(object: Partial<_113.MsgTake>): _113.MsgTake;
                };
                MsgTakeResponse: {
                    encode(message: _113.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgTakeResponse;
                    fromJSON(object: any): _113.MsgTakeResponse;
                    toJSON(message: _113.MsgTakeResponse): unknown;
                    fromPartial(object: Partial<_113.MsgTakeResponse>): _113.MsgTakeResponse;
                };
                MsgUpdateBasketFee: {
                    encode(message: _113.MsgUpdateBasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateBasketFee;
                    fromJSON(object: any): _113.MsgUpdateBasketFee;
                    toJSON(message: _113.MsgUpdateBasketFee): unknown;
                    fromPartial(object: Partial<_113.MsgUpdateBasketFee>): _113.MsgUpdateBasketFee;
                };
                MsgUpdateBasketFeeResponse: {
                    encode(_: _113.MsgUpdateBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateBasketFeeResponse;
                    fromJSON(_: any): _113.MsgUpdateBasketFeeResponse;
                    toJSON(_: _113.MsgUpdateBasketFeeResponse): unknown;
                    fromPartial(_: Partial<_113.MsgUpdateBasketFeeResponse>): _113.MsgUpdateBasketFeeResponse;
                };
                MsgUpdateCurator: {
                    encode(message: _113.MsgUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateCurator;
                    fromJSON(object: any): _113.MsgUpdateCurator;
                    toJSON(message: _113.MsgUpdateCurator): unknown;
                    fromPartial(object: Partial<_113.MsgUpdateCurator>): _113.MsgUpdateCurator;
                };
                MsgUpdateCuratorResponse: {
                    encode(_: _113.MsgUpdateCuratorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateCuratorResponse;
                    fromJSON(_: any): _113.MsgUpdateCuratorResponse;
                    toJSON(_: _113.MsgUpdateCuratorResponse): unknown;
                    fromPartial(_: Partial<_113.MsgUpdateCuratorResponse>): _113.MsgUpdateCuratorResponse;
                };
                MsgUpdateDateCriteria: {
                    encode(message: _113.MsgUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateDateCriteria;
                    fromJSON(object: any): _113.MsgUpdateDateCriteria;
                    toJSON(message: _113.MsgUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_113.MsgUpdateDateCriteria>): _113.MsgUpdateDateCriteria;
                };
                MsgUpdateDateCriteriaResponse: {
                    encode(_: _113.MsgUpdateDateCriteriaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateDateCriteriaResponse;
                    fromJSON(_: any): _113.MsgUpdateDateCriteriaResponse;
                    toJSON(_: _113.MsgUpdateDateCriteriaResponse): unknown;
                    fromPartial(_: Partial<_113.MsgUpdateDateCriteriaResponse>): _113.MsgUpdateDateCriteriaResponse;
                };
                Basket: {
                    encode(message: _112.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.Basket;
                    fromJSON(object: any): _112.Basket;
                    toJSON(message: _112.Basket): unknown;
                    fromPartial(object: Partial<_112.Basket>): _112.Basket;
                };
                BasketClass: {
                    encode(message: _112.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.BasketClass;
                    fromJSON(object: any): _112.BasketClass;
                    toJSON(message: _112.BasketClass): unknown;
                    fromPartial(object: Partial<_112.BasketClass>): _112.BasketClass;
                };
                BasketBalance: {
                    encode(message: _112.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.BasketBalance;
                    fromJSON(object: any): _112.BasketBalance;
                    toJSON(message: _112.BasketBalance): unknown;
                    fromPartial(object: Partial<_112.BasketBalance>): _112.BasketBalance;
                };
                BasketFee: {
                    encode(message: _112.BasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.BasketFee;
                    fromJSON(object: any): _112.BasketFee;
                    toJSON(message: _112.BasketFee): unknown;
                    fromPartial(object: Partial<_112.BasketFee>): _112.BasketFee;
                };
                QueryBasketRequest: {
                    encode(message: _111.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketRequest;
                    fromJSON(object: any): _111.QueryBasketRequest;
                    toJSON(message: _111.QueryBasketRequest): unknown;
                    fromPartial(object: Partial<_111.QueryBasketRequest>): _111.QueryBasketRequest;
                };
                QueryBasketResponse: {
                    encode(message: _111.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketResponse;
                    fromJSON(object: any): _111.QueryBasketResponse;
                    toJSON(message: _111.QueryBasketResponse): unknown;
                    fromPartial(object: Partial<_111.QueryBasketResponse>): _111.QueryBasketResponse;
                };
                QueryBasketsRequest: {
                    encode(message: _111.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketsRequest;
                    fromJSON(object: any): _111.QueryBasketsRequest;
                    toJSON(message: _111.QueryBasketsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryBasketsRequest>): _111.QueryBasketsRequest;
                };
                QueryBasketsResponse: {
                    encode(message: _111.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketsResponse;
                    fromJSON(object: any): _111.QueryBasketsResponse;
                    toJSON(message: _111.QueryBasketsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryBasketsResponse>): _111.QueryBasketsResponse;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _111.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketBalancesRequest;
                    fromJSON(object: any): _111.QueryBasketBalancesRequest;
                    toJSON(message: _111.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: Partial<_111.QueryBasketBalancesRequest>): _111.QueryBasketBalancesRequest;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _111.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketBalancesResponse;
                    fromJSON(object: any): _111.QueryBasketBalancesResponse;
                    toJSON(message: _111.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: Partial<_111.QueryBasketBalancesResponse>): _111.QueryBasketBalancesResponse;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _111.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketBalanceRequest;
                    fromJSON(object: any): _111.QueryBasketBalanceRequest;
                    toJSON(message: _111.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: Partial<_111.QueryBasketBalanceRequest>): _111.QueryBasketBalanceRequest;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _111.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketBalanceResponse;
                    fromJSON(object: any): _111.QueryBasketBalanceResponse;
                    toJSON(message: _111.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: Partial<_111.QueryBasketBalanceResponse>): _111.QueryBasketBalanceResponse;
                };
                BasketInfo: {
                    encode(message: _111.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.BasketInfo;
                    fromJSON(object: any): _111.BasketInfo;
                    toJSON(message: _111.BasketInfo): unknown;
                    fromPartial(object: Partial<_111.BasketInfo>): _111.BasketInfo;
                };
                BasketBalanceInfo: {
                    encode(message: _111.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.BasketBalanceInfo;
                    fromJSON(object: any): _111.BasketBalanceInfo;
                    toJSON(message: _111.BasketBalanceInfo): unknown;
                    fromPartial(object: Partial<_111.BasketBalanceInfo>): _111.BasketBalanceInfo;
                };
                QueryBasketFeeRequest: {
                    encode(_: _111.QueryBasketFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketFeeRequest;
                    fromJSON(_: any): _111.QueryBasketFeeRequest;
                    toJSON(_: _111.QueryBasketFeeRequest): unknown;
                    fromPartial(_: Partial<_111.QueryBasketFeeRequest>): _111.QueryBasketFeeRequest;
                };
                QueryBasketFeeResponse: {
                    encode(message: _111.QueryBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.QueryBasketFeeResponse;
                    fromJSON(object: any): _111.QueryBasketFeeResponse;
                    toJSON(message: _111.QueryBasketFeeResponse): unknown;
                    fromPartial(object: Partial<_111.QueryBasketFeeResponse>): _111.QueryBasketFeeResponse;
                };
                EventCreate: {
                    encode(message: _110.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.EventCreate;
                    fromJSON(object: any): _110.EventCreate;
                    toJSON(message: _110.EventCreate): unknown;
                    fromPartial(object: Partial<_110.EventCreate>): _110.EventCreate;
                };
                EventPut: {
                    encode(message: _110.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.EventPut;
                    fromJSON(object: any): _110.EventPut;
                    toJSON(message: _110.EventPut): unknown;
                    fromPartial(object: Partial<_110.EventPut>): _110.EventPut;
                };
                EventTake: {
                    encode(message: _110.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.EventTake;
                    fromJSON(object: any): _110.EventTake;
                    toJSON(message: _110.EventTake): unknown;
                    fromPartial(object: Partial<_110.EventTake>): _110.EventTake;
                };
                EventUpdateCurator: {
                    encode(message: _110.EventUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.EventUpdateCurator;
                    fromJSON(object: any): _110.EventUpdateCurator;
                    toJSON(message: _110.EventUpdateCurator): unknown;
                    fromPartial(object: Partial<_110.EventUpdateCurator>): _110.EventUpdateCurator;
                };
                EventUpdateDateCriteria: {
                    encode(message: _110.EventUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.EventUpdateDateCriteria;
                    fromJSON(object: any): _110.EventUpdateDateCriteria;
                    toJSON(message: _110.EventUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_110.EventUpdateDateCriteria>): _110.EventUpdateDateCriteria;
                };
            };
        }
        namespace marketplace {
            const v1: {
                LCDQueryClient: typeof _204.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _118.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _118.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _118.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _118.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _118.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _118.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _118.MsgSell): {
                            typeUrl: string;
                            value: _118.MsgSell;
                        };
                        updateSellOrders(value: _118.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _118.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _118.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _118.MsgCancelSellOrder;
                        };
                        buyDirect(value: _118.MsgBuyDirect): {
                            typeUrl: string;
                            value: _118.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _118.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _118.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _118.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _118.MsgRemoveAllowedDenom;
                        };
                    };
                    toJSON: {
                        sell(value: _118.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _118.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _118.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _118.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                        addAllowedDenom(value: _118.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                        removeAllowedDenom(value: _118.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _118.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _118.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _118.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _118.MsgBuyDirect;
                        };
                        addAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _118.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _118.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _118.MsgSell): {
                            typeUrl: string;
                            value: _118.MsgSell;
                        };
                        updateSellOrders(value: _118.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _118.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _118.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _118.MsgCancelSellOrder;
                        };
                        buyDirect(value: _118.MsgBuyDirect): {
                            typeUrl: string;
                            value: _118.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _118.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _118.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _118.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _118.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: ({ seller, orders }: _118.MsgSell) => {
                            seller: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        };
                        fromAmino: ({ seller, orders }: {
                            seller: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        }) => _118.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: ({ seller, updates }: _118.MsgUpdateSellOrders) => {
                            seller: string;
                            updates: {
                                sell_order_id: string;
                                new_quantity: string;
                                new_ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                new_expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        };
                        fromAmino: ({ seller, updates }: {
                            seller: string;
                            updates: {
                                sell_order_id: string;
                                new_quantity: string;
                                new_ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                new_expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        }) => _118.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: ({ seller, sellOrderId }: _118.MsgCancelSellOrder) => {
                            seller: string;
                            sell_order_id: string;
                        };
                        fromAmino: ({ seller, sell_order_id }: {
                            seller: string;
                            sell_order_id: string;
                        }) => _118.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: ({ buyer, orders }: _118.MsgBuyDirect) => {
                            buyer: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        };
                        fromAmino: ({ buyer, orders }: {
                            buyer: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        }) => _118.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: ({ authority, bankDenom, displayDenom, exponent }: _118.MsgAddAllowedDenom) => {
                            authority: string;
                            bank_denom: string;
                            display_denom: string;
                            exponent: number;
                        };
                        fromAmino: ({ authority, bank_denom, display_denom, exponent }: {
                            authority: string;
                            bank_denom: string;
                            display_denom: string;
                            exponent: number;
                        }) => _118.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: ({ authority, denom }: _118.MsgRemoveAllowedDenom) => {
                            authority: string;
                            denom: string;
                        };
                        fromAmino: ({ authority, denom }: {
                            authority: string;
                            denom: string;
                        }) => _118.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _119.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.AllowDenomProposal;
                    fromJSON(object: any): _119.AllowDenomProposal;
                    toJSON(message: _119.AllowDenomProposal): unknown;
                    fromPartial(object: Partial<_119.AllowDenomProposal>): _119.AllowDenomProposal;
                };
                MsgSell: {
                    encode(message: _118.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgSell;
                    fromJSON(object: any): _118.MsgSell;
                    toJSON(message: _118.MsgSell): unknown;
                    fromPartial(object: Partial<_118.MsgSell>): _118.MsgSell;
                };
                MsgSell_Order: {
                    encode(message: _118.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgSell_Order;
                    fromJSON(object: any): _118.MsgSell_Order;
                    toJSON(message: _118.MsgSell_Order): unknown;
                    fromPartial(object: Partial<_118.MsgSell_Order>): _118.MsgSell_Order;
                };
                MsgSellResponse: {
                    encode(message: _118.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgSellResponse;
                    fromJSON(object: any): _118.MsgSellResponse;
                    toJSON(message: _118.MsgSellResponse): unknown;
                    fromPartial(object: Partial<_118.MsgSellResponse>): _118.MsgSellResponse;
                };
                MsgUpdateSellOrders: {
                    encode(message: _118.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgUpdateSellOrders;
                    fromJSON(object: any): _118.MsgUpdateSellOrders;
                    toJSON(message: _118.MsgUpdateSellOrders): unknown;
                    fromPartial(object: Partial<_118.MsgUpdateSellOrders>): _118.MsgUpdateSellOrders;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _118.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _118.MsgUpdateSellOrders_Update;
                    toJSON(message: _118.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: Partial<_118.MsgUpdateSellOrders_Update>): _118.MsgUpdateSellOrders_Update;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _118.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _118.MsgUpdateSellOrdersResponse;
                    toJSON(_: _118.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: Partial<_118.MsgUpdateSellOrdersResponse>): _118.MsgUpdateSellOrdersResponse;
                };
                MsgCancelSellOrder: {
                    encode(message: _118.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgCancelSellOrder;
                    fromJSON(object: any): _118.MsgCancelSellOrder;
                    toJSON(message: _118.MsgCancelSellOrder): unknown;
                    fromPartial(object: Partial<_118.MsgCancelSellOrder>): _118.MsgCancelSellOrder;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _118.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _118.MsgCancelSellOrderResponse;
                    toJSON(_: _118.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: Partial<_118.MsgCancelSellOrderResponse>): _118.MsgCancelSellOrderResponse;
                };
                MsgBuyDirect: {
                    encode(message: _118.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgBuyDirect;
                    fromJSON(object: any): _118.MsgBuyDirect;
                    toJSON(message: _118.MsgBuyDirect): unknown;
                    fromPartial(object: Partial<_118.MsgBuyDirect>): _118.MsgBuyDirect;
                };
                MsgBuyDirect_Order: {
                    encode(message: _118.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgBuyDirect_Order;
                    fromJSON(object: any): _118.MsgBuyDirect_Order;
                    toJSON(message: _118.MsgBuyDirect_Order): unknown;
                    fromPartial(object: Partial<_118.MsgBuyDirect_Order>): _118.MsgBuyDirect_Order;
                };
                MsgBuyDirectResponse: {
                    encode(_: _118.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgBuyDirectResponse;
                    fromJSON(_: any): _118.MsgBuyDirectResponse;
                    toJSON(_: _118.MsgBuyDirectResponse): unknown;
                    fromPartial(_: Partial<_118.MsgBuyDirectResponse>): _118.MsgBuyDirectResponse;
                };
                MsgAddAllowedDenom: {
                    encode(message: _118.MsgAddAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgAddAllowedDenom;
                    fromJSON(object: any): _118.MsgAddAllowedDenom;
                    toJSON(message: _118.MsgAddAllowedDenom): unknown;
                    fromPartial(object: Partial<_118.MsgAddAllowedDenom>): _118.MsgAddAllowedDenom;
                };
                MsgAddAllowedDenomResponse: {
                    encode(_: _118.MsgAddAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgAddAllowedDenomResponse;
                    fromJSON(_: any): _118.MsgAddAllowedDenomResponse;
                    toJSON(_: _118.MsgAddAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_118.MsgAddAllowedDenomResponse>): _118.MsgAddAllowedDenomResponse;
                };
                MsgRemoveAllowedDenom: {
                    encode(message: _118.MsgRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgRemoveAllowedDenom;
                    fromJSON(object: any): _118.MsgRemoveAllowedDenom;
                    toJSON(message: _118.MsgRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_118.MsgRemoveAllowedDenom>): _118.MsgRemoveAllowedDenom;
                };
                MsgRemoveAllowedDenomResponse: {
                    encode(_: _118.MsgRemoveAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.MsgRemoveAllowedDenomResponse;
                    fromJSON(_: any): _118.MsgRemoveAllowedDenomResponse;
                    toJSON(_: _118.MsgRemoveAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_118.MsgRemoveAllowedDenomResponse>): _118.MsgRemoveAllowedDenomResponse;
                };
                SellOrder: {
                    encode(message: _117.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.SellOrder;
                    fromJSON(object: any): _117.SellOrder;
                    toJSON(message: _117.SellOrder): unknown;
                    fromPartial(object: Partial<_117.SellOrder>): _117.SellOrder;
                };
                AllowedDenom: {
                    encode(message: _117.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.AllowedDenom;
                    fromJSON(object: any): _117.AllowedDenom;
                    toJSON(message: _117.AllowedDenom): unknown;
                    fromPartial(object: Partial<_117.AllowedDenom>): _117.AllowedDenom;
                };
                Market: {
                    encode(message: _117.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.Market;
                    fromJSON(object: any): _117.Market;
                    toJSON(message: _117.Market): unknown;
                    fromPartial(object: Partial<_117.Market>): _117.Market;
                };
                QuerySellOrderRequest: {
                    encode(message: _116.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrderRequest;
                    fromJSON(object: any): _116.QuerySellOrderRequest;
                    toJSON(message: _116.QuerySellOrderRequest): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrderRequest>): _116.QuerySellOrderRequest;
                };
                QuerySellOrderResponse: {
                    encode(message: _116.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrderResponse;
                    fromJSON(object: any): _116.QuerySellOrderResponse;
                    toJSON(message: _116.QuerySellOrderResponse): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrderResponse>): _116.QuerySellOrderResponse;
                };
                QuerySellOrdersRequest: {
                    encode(message: _116.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrdersRequest;
                    fromJSON(object: any): _116.QuerySellOrdersRequest;
                    toJSON(message: _116.QuerySellOrdersRequest): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrdersRequest>): _116.QuerySellOrdersRequest;
                };
                QuerySellOrdersResponse: {
                    encode(message: _116.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrdersResponse;
                    fromJSON(object: any): _116.QuerySellOrdersResponse;
                    toJSON(message: _116.QuerySellOrdersResponse): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrdersResponse>): _116.QuerySellOrdersResponse;
                };
                QuerySellOrdersByBatchRequest: {
                    encode(message: _116.QuerySellOrdersByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrdersByBatchRequest;
                    fromJSON(object: any): _116.QuerySellOrdersByBatchRequest;
                    toJSON(message: _116.QuerySellOrdersByBatchRequest): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrdersByBatchRequest>): _116.QuerySellOrdersByBatchRequest;
                };
                QuerySellOrdersByBatchResponse: {
                    encode(message: _116.QuerySellOrdersByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrdersByBatchResponse;
                    fromJSON(object: any): _116.QuerySellOrdersByBatchResponse;
                    toJSON(message: _116.QuerySellOrdersByBatchResponse): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrdersByBatchResponse>): _116.QuerySellOrdersByBatchResponse;
                };
                QuerySellOrdersBySellerRequest: {
                    encode(message: _116.QuerySellOrdersBySellerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrdersBySellerRequest;
                    fromJSON(object: any): _116.QuerySellOrdersBySellerRequest;
                    toJSON(message: _116.QuerySellOrdersBySellerRequest): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrdersBySellerRequest>): _116.QuerySellOrdersBySellerRequest;
                };
                QuerySellOrdersBySellerResponse: {
                    encode(message: _116.QuerySellOrdersBySellerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QuerySellOrdersBySellerResponse;
                    fromJSON(object: any): _116.QuerySellOrdersBySellerResponse;
                    toJSON(message: _116.QuerySellOrdersBySellerResponse): unknown;
                    fromPartial(object: Partial<_116.QuerySellOrdersBySellerResponse>): _116.QuerySellOrdersBySellerResponse;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _116.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _116.QueryAllowedDenomsRequest;
                    toJSON(message: _116.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: Partial<_116.QueryAllowedDenomsRequest>): _116.QueryAllowedDenomsRequest;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _116.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _116.QueryAllowedDenomsResponse;
                    toJSON(message: _116.QueryAllowedDenomsResponse): unknown;
                    fromPartial(object: Partial<_116.QueryAllowedDenomsResponse>): _116.QueryAllowedDenomsResponse;
                };
                SellOrderInfo: {
                    encode(message: _116.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.SellOrderInfo;
                    fromJSON(object: any): _116.SellOrderInfo;
                    toJSON(message: _116.SellOrderInfo): unknown;
                    fromPartial(object: Partial<_116.SellOrderInfo>): _116.SellOrderInfo;
                };
                EventSell: {
                    encode(message: _115.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.EventSell;
                    fromJSON(object: any): _115.EventSell;
                    toJSON(message: _115.EventSell): unknown;
                    fromPartial(object: Partial<_115.EventSell>): _115.EventSell;
                };
                EventBuyDirect: {
                    encode(message: _115.EventBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.EventBuyDirect;
                    fromJSON(object: any): _115.EventBuyDirect;
                    toJSON(message: _115.EventBuyDirect): unknown;
                    fromPartial(object: Partial<_115.EventBuyDirect>): _115.EventBuyDirect;
                };
                EventUpdateSellOrder: {
                    encode(message: _115.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.EventUpdateSellOrder;
                    fromJSON(object: any): _115.EventUpdateSellOrder;
                    toJSON(message: _115.EventUpdateSellOrder): unknown;
                    fromPartial(object: Partial<_115.EventUpdateSellOrder>): _115.EventUpdateSellOrder;
                };
                EventCancelSellOrder: {
                    encode(message: _115.EventCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.EventCancelSellOrder;
                    fromJSON(object: any): _115.EventCancelSellOrder;
                    toJSON(message: _115.EventCancelSellOrder): unknown;
                    fromPartial(object: Partial<_115.EventCancelSellOrder>): _115.EventCancelSellOrder;
                };
                EventAllowDenom: {
                    encode(message: _115.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.EventAllowDenom;
                    fromJSON(object: any): _115.EventAllowDenom;
                    toJSON(message: _115.EventAllowDenom): unknown;
                    fromPartial(object: Partial<_115.EventAllowDenom>): _115.EventAllowDenom;
                };
                EventRemoveAllowedDenom: {
                    encode(message: _115.EventRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.EventRemoveAllowedDenom;
                    fromJSON(object: any): _115.EventRemoveAllowedDenom;
                    toJSON(message: _115.EventRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_115.EventRemoveAllowedDenom>): _115.EventRemoveAllowedDenom;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _120.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _120.BuyOrderSellOrderMatch;
                    toJSON(message: _120.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: Partial<_120.BuyOrderSellOrderMatch>): _120.BuyOrderSellOrderMatch;
                };
                BuyOrderClassSelector: {
                    encode(message: _120.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.BuyOrderClassSelector;
                    fromJSON(object: any): _120.BuyOrderClassSelector;
                    toJSON(message: _120.BuyOrderClassSelector): unknown;
                    fromPartial(object: Partial<_120.BuyOrderClassSelector>): _120.BuyOrderClassSelector;
                };
                BuyOrderProjectSelector: {
                    encode(message: _120.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.BuyOrderProjectSelector;
                    fromJSON(object: any): _120.BuyOrderProjectSelector;
                    toJSON(message: _120.BuyOrderProjectSelector): unknown;
                    fromPartial(object: Partial<_120.BuyOrderProjectSelector>): _120.BuyOrderProjectSelector;
                };
                BuyOrderBatchSelector: {
                    encode(message: _120.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.BuyOrderBatchSelector;
                    fromJSON(object: any): _120.BuyOrderBatchSelector;
                    toJSON(message: _120.BuyOrderBatchSelector): unknown;
                    fromPartial(object: Partial<_120.BuyOrderBatchSelector>): _120.BuyOrderBatchSelector;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _124.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _124.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _124.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _124.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _124.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _124.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _124.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _124.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _124.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _124.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _124.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _124.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _124.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _124.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _124.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _124.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _124.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _124.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _124.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _124.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _124.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _124.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _124.MsgCreateClass): {
                        typeUrl: string;
                        value: _124.MsgCreateClass;
                    };
                    createProject(value: _124.MsgCreateProject): {
                        typeUrl: string;
                        value: _124.MsgCreateProject;
                    };
                    createBatch(value: _124.MsgCreateBatch): {
                        typeUrl: string;
                        value: _124.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _124.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _124.MsgMintBatchCredits;
                    };
                    sealBatch(value: _124.MsgSealBatch): {
                        typeUrl: string;
                        value: _124.MsgSealBatch;
                    };
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: _124.MsgSend;
                    };
                    retire(value: _124.MsgRetire): {
                        typeUrl: string;
                        value: _124.MsgRetire;
                    };
                    cancel(value: _124.MsgCancel): {
                        typeUrl: string;
                        value: _124.MsgCancel;
                    };
                    updateClassAdmin(value: _124.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _124.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _124.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _124.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _124.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _124.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _124.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _124.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _124.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _124.MsgBridge): {
                        typeUrl: string;
                        value: _124.MsgBridge;
                    };
                    bridgeReceive(value: _124.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _124.MsgBridgeReceive;
                    };
                    addCreditType(value: _124.MsgAddCreditType): {
                        typeUrl: string;
                        value: _124.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _124.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _124.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _124.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _124.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _124.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _124.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _124.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _124.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _124.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _124.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _124.MsgRemoveAllowedBridgeChain;
                    };
                };
                toJSON: {
                    createClass(value: _124.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _124.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _124.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _124.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _124.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _124.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _124.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _124.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _124.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _124.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _124.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _124.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBatchMetadata(value: _124.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridge(value: _124.MsgBridge): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridgeReceive(value: _124.MsgBridgeReceive): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCreditType(value: _124.MsgAddCreditType): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setClassCreatorAllowlist(value: _124.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addClassCreator(value: _124.MsgAddClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeClassCreator(value: _124.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassFee(value: _124.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addAllowedBridgeChain(value: _124.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAllowedBridgeChain(value: _124.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _124.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _124.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _124.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _124.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _124.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateBatchMetadata;
                    };
                    bridge(value: any): {
                        typeUrl: string;
                        value: _124.MsgBridge;
                    };
                    bridgeReceive(value: any): {
                        typeUrl: string;
                        value: _124.MsgBridgeReceive;
                    };
                    addCreditType(value: any): {
                        typeUrl: string;
                        value: _124.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: any): {
                        typeUrl: string;
                        value: _124.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: any): {
                        typeUrl: string;
                        value: _124.MsgAddClassCreator;
                    };
                    removeClassCreator(value: any): {
                        typeUrl: string;
                        value: _124.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _124.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _124.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _124.MsgCreateClass): {
                        typeUrl: string;
                        value: _124.MsgCreateClass;
                    };
                    createProject(value: _124.MsgCreateProject): {
                        typeUrl: string;
                        value: _124.MsgCreateProject;
                    };
                    createBatch(value: _124.MsgCreateBatch): {
                        typeUrl: string;
                        value: _124.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _124.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _124.MsgMintBatchCredits;
                    };
                    sealBatch(value: _124.MsgSealBatch): {
                        typeUrl: string;
                        value: _124.MsgSealBatch;
                    };
                    send(value: _124.MsgSend): {
                        typeUrl: string;
                        value: _124.MsgSend;
                    };
                    retire(value: _124.MsgRetire): {
                        typeUrl: string;
                        value: _124.MsgRetire;
                    };
                    cancel(value: _124.MsgCancel): {
                        typeUrl: string;
                        value: _124.MsgCancel;
                    };
                    updateClassAdmin(value: _124.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _124.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _124.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _124.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _124.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _124.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _124.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _124.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _124.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _124.MsgBridge): {
                        typeUrl: string;
                        value: _124.MsgBridge;
                    };
                    bridgeReceive(value: _124.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _124.MsgBridgeReceive;
                    };
                    addCreditType(value: _124.MsgAddCreditType): {
                        typeUrl: string;
                        value: _124.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _124.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _124.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _124.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _124.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _124.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _124.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _124.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _124.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _124.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _124.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _124.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _124.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: _124.MsgCreateClass) => {
                        admin: string;
                        issuers: string[];
                        metadata: string;
                        credit_type_abbrev: string;
                        fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ admin, issuers, metadata, credit_type_abbrev, fee }: {
                        admin: string;
                        issuers: string[];
                        metadata: string;
                        credit_type_abbrev: string;
                        fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _124.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata, jurisdiction, referenceId }: _124.MsgCreateProject) => {
                        admin: string;
                        class_id: string;
                        metadata: string;
                        jurisdiction: string;
                        reference_id: string;
                    };
                    fromAmino: ({ admin, class_id, metadata, jurisdiction, reference_id }: {
                        admin: string;
                        class_id: string;
                        metadata: string;
                        jurisdiction: string;
                        reference_id: string;
                    }) => _124.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx }: _124.MsgCreateBatch) => {
                        issuer: string;
                        project_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }[];
                        metadata: string;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        open: boolean;
                        origin_tx: {
                            id: string;
                            source: string;
                            contract: string;
                            note: string;
                        };
                    };
                    fromAmino: ({ issuer, project_id, issuance, metadata, start_date, end_date, open, origin_tx }: {
                        issuer: string;
                        project_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }[];
                        metadata: string;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        open: boolean;
                        origin_tx: {
                            id: string;
                            source: string;
                            contract: string;
                            note: string;
                        };
                    }) => _124.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, issuance, originTx }: _124.MsgMintBatchCredits) => {
                        issuer: string;
                        batch_denom: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }[];
                        origin_tx: {
                            id: string;
                            source: string;
                            contract: string;
                            note: string;
                        };
                    };
                    fromAmino: ({ issuer, batch_denom, issuance, origin_tx }: {
                        issuer: string;
                        batch_denom: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }[];
                        origin_tx: {
                            id: string;
                            source: string;
                            contract: string;
                            note: string;
                        };
                    }) => _124.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom }: _124.MsgSealBatch) => {
                        issuer: string;
                        batch_denom: string;
                    };
                    fromAmino: ({ issuer, batch_denom }: {
                        issuer: string;
                        batch_denom: string;
                    }) => _124.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _124.MsgSend) => {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }[];
                    };
                    fromAmino: ({ sender, recipient, credits }: {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                            retirement_reason: string;
                        }[];
                    }) => _124.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ owner, credits, jurisdiction, reason }: _124.MsgRetire) => {
                        owner: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        jurisdiction: string;
                        reason: string;
                    };
                    fromAmino: ({ owner, credits, jurisdiction, reason }: {
                        owner: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        jurisdiction: string;
                        reason: string;
                    }) => _124.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ owner, credits, reason }: _124.MsgCancel) => {
                        owner: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        reason: string;
                    };
                    fromAmino: ({ owner, credits, reason }: {
                        owner: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        reason: string;
                    }) => _124.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _124.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _124.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, addIssuers, removeIssuers }: _124.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        add_issuers: string[];
                        remove_issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, add_issuers, remove_issuers }: {
                        admin: string;
                        class_id: string;
                        add_issuers: string[];
                        remove_issuers: string[];
                    }) => _124.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newMetadata }: _124.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        new_metadata: string;
                    };
                    fromAmino: ({ admin, class_id, new_metadata }: {
                        admin: string;
                        class_id: string;
                        new_metadata: string;
                    }) => _124.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, projectId, newAdmin }: _124.MsgUpdateProjectAdmin) => {
                        admin: string;
                        project_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, project_id, new_admin }: {
                        admin: string;
                        project_id: string;
                        new_admin: string;
                    }) => _124.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, projectId, newMetadata }: _124.MsgUpdateProjectMetadata) => {
                        admin: string;
                        project_id: string;
                        new_metadata: string;
                    };
                    fromAmino: ({ admin, project_id, new_metadata }: {
                        admin: string;
                        project_id: string;
                        new_metadata: string;
                    }) => _124.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, newMetadata }: _124.MsgUpdateBatchMetadata) => {
                        issuer: string;
                        batch_denom: string;
                        new_metadata: string;
                    };
                    fromAmino: ({ issuer, batch_denom, new_metadata }: {
                        issuer: string;
                        batch_denom: string;
                        new_metadata: string;
                    }) => _124.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: ({ owner, target, recipient, credits }: _124.MsgBridge) => {
                        owner: string;
                        target: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ owner, target, recipient, credits }: {
                        owner: string;
                        target: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    }) => _124.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, project, batch, originTx }: _124.MsgBridgeReceive) => {
                        issuer: string;
                        class_id: string;
                        project: {
                            reference_id: string;
                            jurisdiction: string;
                            metadata: string;
                        };
                        batch: {
                            recipient: string;
                            amount: string;
                            start_date: {
                                seconds: string;
                                nanos: number;
                            };
                            end_date: {
                                seconds: string;
                                nanos: number;
                            };
                            metadata: string;
                        };
                        origin_tx: {
                            id: string;
                            source: string;
                            contract: string;
                            note: string;
                        };
                    };
                    fromAmino: ({ issuer, class_id, project, batch, origin_tx }: {
                        issuer: string;
                        class_id: string;
                        project: {
                            reference_id: string;
                            jurisdiction: string;
                            metadata: string;
                        };
                        batch: {
                            recipient: string;
                            amount: string;
                            start_date: {
                                seconds: string;
                                nanos: number;
                            };
                            end_date: {
                                seconds: string;
                                nanos: number;
                            };
                            metadata: string;
                        };
                        origin_tx: {
                            id: string;
                            source: string;
                            contract: string;
                            note: string;
                        };
                    }) => _124.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: ({ authority, creditType }: _124.MsgAddCreditType) => {
                        authority: string;
                        credit_type: {
                            abbreviation: string;
                            name: string;
                            unit: string;
                            precision: number;
                        };
                    };
                    fromAmino: ({ authority, credit_type }: {
                        authority: string;
                        credit_type: {
                            abbreviation: string;
                            name: string;
                            unit: string;
                            precision: number;
                        };
                    }) => _124.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: ({ authority, enabled }: _124.MsgSetClassCreatorAllowlist) => {
                        authority: string;
                        enabled: boolean;
                    };
                    fromAmino: ({ authority, enabled }: {
                        authority: string;
                        enabled: boolean;
                    }) => _124.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: ({ authority, creator }: _124.MsgAddClassCreator) => {
                        authority: string;
                        creator: string;
                    };
                    fromAmino: ({ authority, creator }: {
                        authority: string;
                        creator: string;
                    }) => _124.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: ({ authority, creator }: _124.MsgRemoveClassCreator) => {
                        authority: string;
                        creator: string;
                    };
                    fromAmino: ({ authority, creator }: {
                        authority: string;
                        creator: string;
                    }) => _124.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: ({ authority, fee }: _124.MsgUpdateClassFee) => {
                        authority: string;
                        fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ authority, fee }: {
                        authority: string;
                        fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _124.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: ({ authority, chainName }: _124.MsgAddAllowedBridgeChain) => {
                        authority: string;
                        chain_name: string;
                    };
                    fromAmino: ({ authority, chain_name }: {
                        authority: string;
                        chain_name: string;
                    }) => _124.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: ({ authority, chainName }: _124.MsgRemoveAllowedBridgeChain) => {
                        authority: string;
                        chain_name: string;
                    };
                    fromAmino: ({ authority, chain_name }: {
                        authority: string;
                        chain_name: string;
                    }) => _124.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.Params;
                fromJSON(object: any): _125.Params;
                toJSON(message: _125.Params): unknown;
                fromPartial(object: Partial<_125.Params>): _125.Params;
            };
            Credits: {
                encode(message: _125.Credits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.Credits;
                fromJSON(object: any): _125.Credits;
                toJSON(message: _125.Credits): unknown;
                fromPartial(object: Partial<_125.Credits>): _125.Credits;
            };
            BatchIssuance: {
                encode(message: _125.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.BatchIssuance;
                fromJSON(object: any): _125.BatchIssuance;
                toJSON(message: _125.BatchIssuance): unknown;
                fromPartial(object: Partial<_125.BatchIssuance>): _125.BatchIssuance;
            };
            OriginTx: {
                encode(message: _125.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.OriginTx;
                fromJSON(object: any): _125.OriginTx;
                toJSON(message: _125.OriginTx): unknown;
                fromPartial(object: Partial<_125.OriginTx>): _125.OriginTx;
            };
            CreditTypeProposal: {
                encode(message: _125.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.CreditTypeProposal;
                fromJSON(object: any): _125.CreditTypeProposal;
                toJSON(message: _125.CreditTypeProposal): unknown;
                fromPartial(object: Partial<_125.CreditTypeProposal>): _125.CreditTypeProposal;
            };
            AllowedDenom: {
                encode(message: _125.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.AllowedDenom;
                fromJSON(object: any): _125.AllowedDenom;
                toJSON(message: _125.AllowedDenom): unknown;
                fromPartial(object: Partial<_125.AllowedDenom>): _125.AllowedDenom;
            };
            MsgAddCreditType: {
                encode(message: _124.MsgAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgAddCreditType;
                fromJSON(object: any): _124.MsgAddCreditType;
                toJSON(message: _124.MsgAddCreditType): unknown;
                fromPartial(object: Partial<_124.MsgAddCreditType>): _124.MsgAddCreditType;
            };
            MsgAddCreditTypeResponse: {
                encode(_: _124.MsgAddCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgAddCreditTypeResponse;
                fromJSON(_: any): _124.MsgAddCreditTypeResponse;
                toJSON(_: _124.MsgAddCreditTypeResponse): unknown;
                fromPartial(_: Partial<_124.MsgAddCreditTypeResponse>): _124.MsgAddCreditTypeResponse;
            };
            MsgCreateClass: {
                encode(message: _124.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCreateClass;
                fromJSON(object: any): _124.MsgCreateClass;
                toJSON(message: _124.MsgCreateClass): unknown;
                fromPartial(object: Partial<_124.MsgCreateClass>): _124.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _124.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCreateClassResponse;
                fromJSON(object: any): _124.MsgCreateClassResponse;
                toJSON(message: _124.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_124.MsgCreateClassResponse>): _124.MsgCreateClassResponse;
            };
            MsgCreateProject: {
                encode(message: _124.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCreateProject;
                fromJSON(object: any): _124.MsgCreateProject;
                toJSON(message: _124.MsgCreateProject): unknown;
                fromPartial(object: Partial<_124.MsgCreateProject>): _124.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(message: _124.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCreateProjectResponse;
                fromJSON(object: any): _124.MsgCreateProjectResponse;
                toJSON(message: _124.MsgCreateProjectResponse): unknown;
                fromPartial(object: Partial<_124.MsgCreateProjectResponse>): _124.MsgCreateProjectResponse;
            };
            MsgCreateBatch: {
                encode(message: _124.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCreateBatch;
                fromJSON(object: any): _124.MsgCreateBatch;
                toJSON(message: _124.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_124.MsgCreateBatch>): _124.MsgCreateBatch;
            };
            MsgCreateBatchResponse: {
                encode(message: _124.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCreateBatchResponse;
                fromJSON(object: any): _124.MsgCreateBatchResponse;
                toJSON(message: _124.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_124.MsgCreateBatchResponse>): _124.MsgCreateBatchResponse;
            };
            MsgMintBatchCredits: {
                encode(message: _124.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgMintBatchCredits;
                fromJSON(object: any): _124.MsgMintBatchCredits;
                toJSON(message: _124.MsgMintBatchCredits): unknown;
                fromPartial(object: Partial<_124.MsgMintBatchCredits>): _124.MsgMintBatchCredits;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _124.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _124.MsgMintBatchCreditsResponse;
                toJSON(_: _124.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: Partial<_124.MsgMintBatchCreditsResponse>): _124.MsgMintBatchCreditsResponse;
            };
            MsgSealBatch: {
                encode(message: _124.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSealBatch;
                fromJSON(object: any): _124.MsgSealBatch;
                toJSON(message: _124.MsgSealBatch): unknown;
                fromPartial(object: Partial<_124.MsgSealBatch>): _124.MsgSealBatch;
            };
            MsgSealBatchResponse: {
                encode(_: _124.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSealBatchResponse;
                fromJSON(_: any): _124.MsgSealBatchResponse;
                toJSON(_: _124.MsgSealBatchResponse): unknown;
                fromPartial(_: Partial<_124.MsgSealBatchResponse>): _124.MsgSealBatchResponse;
            };
            MsgSend: {
                encode(message: _124.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSend;
                fromJSON(object: any): _124.MsgSend;
                toJSON(message: _124.MsgSend): unknown;
                fromPartial(object: Partial<_124.MsgSend>): _124.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _124.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSend_SendCredits;
                fromJSON(object: any): _124.MsgSend_SendCredits;
                toJSON(message: _124.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_124.MsgSend_SendCredits>): _124.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _124.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSendResponse;
                fromJSON(_: any): _124.MsgSendResponse;
                toJSON(_: _124.MsgSendResponse): unknown;
                fromPartial(_: Partial<_124.MsgSendResponse>): _124.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _124.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgRetire;
                fromJSON(object: any): _124.MsgRetire;
                toJSON(message: _124.MsgRetire): unknown;
                fromPartial(object: Partial<_124.MsgRetire>): _124.MsgRetire;
            };
            MsgRetireResponse: {
                encode(_: _124.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgRetireResponse;
                fromJSON(_: any): _124.MsgRetireResponse;
                toJSON(_: _124.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_124.MsgRetireResponse>): _124.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _124.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCancel;
                fromJSON(object: any): _124.MsgCancel;
                toJSON(message: _124.MsgCancel): unknown;
                fromPartial(object: Partial<_124.MsgCancel>): _124.MsgCancel;
            };
            MsgCancelResponse: {
                encode(_: _124.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgCancelResponse;
                fromJSON(_: any): _124.MsgCancelResponse;
                toJSON(_: _124.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_124.MsgCancelResponse>): _124.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _124.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassAdmin;
                fromJSON(object: any): _124.MsgUpdateClassAdmin;
                toJSON(message: _124.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_124.MsgUpdateClassAdmin>): _124.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _124.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _124.MsgUpdateClassAdminResponse;
                toJSON(_: _124.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateClassAdminResponse>): _124.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _124.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassIssuers;
                fromJSON(object: any): _124.MsgUpdateClassIssuers;
                toJSON(message: _124.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_124.MsgUpdateClassIssuers>): _124.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _124.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _124.MsgUpdateClassIssuersResponse;
                toJSON(_: _124.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateClassIssuersResponse>): _124.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _124.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassMetadata;
                fromJSON(object: any): _124.MsgUpdateClassMetadata;
                toJSON(message: _124.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_124.MsgUpdateClassMetadata>): _124.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _124.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _124.MsgUpdateClassMetadataResponse;
                toJSON(_: _124.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateClassMetadataResponse>): _124.MsgUpdateClassMetadataResponse;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _124.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateProjectAdmin;
                fromJSON(object: any): _124.MsgUpdateProjectAdmin;
                toJSON(message: _124.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_124.MsgUpdateProjectAdmin>): _124.MsgUpdateProjectAdmin;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _124.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _124.MsgUpdateProjectAdminResponse;
                toJSON(_: _124.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateProjectAdminResponse>): _124.MsgUpdateProjectAdminResponse;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _124.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateProjectMetadata;
                fromJSON(object: any): _124.MsgUpdateProjectMetadata;
                toJSON(message: _124.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_124.MsgUpdateProjectMetadata>): _124.MsgUpdateProjectMetadata;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _124.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _124.MsgUpdateProjectMetadataResponse;
                toJSON(_: _124.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateProjectMetadataResponse>): _124.MsgUpdateProjectMetadataResponse;
            };
            MsgBridge: {
                encode(message: _124.MsgBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgBridge;
                fromJSON(object: any): _124.MsgBridge;
                toJSON(message: _124.MsgBridge): unknown;
                fromPartial(object: Partial<_124.MsgBridge>): _124.MsgBridge;
            };
            MsgUpdateBatchMetadata: {
                encode(message: _124.MsgUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateBatchMetadata;
                fromJSON(object: any): _124.MsgUpdateBatchMetadata;
                toJSON(message: _124.MsgUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_124.MsgUpdateBatchMetadata>): _124.MsgUpdateBatchMetadata;
            };
            MsgUpdateBatchMetadataResponse: {
                encode(_: _124.MsgUpdateBatchMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateBatchMetadataResponse;
                fromJSON(_: any): _124.MsgUpdateBatchMetadataResponse;
                toJSON(_: _124.MsgUpdateBatchMetadataResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateBatchMetadataResponse>): _124.MsgUpdateBatchMetadataResponse;
            };
            MsgBridgeResponse: {
                encode(_: _124.MsgBridgeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgBridgeResponse;
                fromJSON(_: any): _124.MsgBridgeResponse;
                toJSON(_: _124.MsgBridgeResponse): unknown;
                fromPartial(_: Partial<_124.MsgBridgeResponse>): _124.MsgBridgeResponse;
            };
            MsgBridgeReceive: {
                encode(message: _124.MsgBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgBridgeReceive;
                fromJSON(object: any): _124.MsgBridgeReceive;
                toJSON(message: _124.MsgBridgeReceive): unknown;
                fromPartial(object: Partial<_124.MsgBridgeReceive>): _124.MsgBridgeReceive;
            };
            MsgBridgeReceive_Batch: {
                encode(message: _124.MsgBridgeReceive_Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgBridgeReceive_Batch;
                fromJSON(object: any): _124.MsgBridgeReceive_Batch;
                toJSON(message: _124.MsgBridgeReceive_Batch): unknown;
                fromPartial(object: Partial<_124.MsgBridgeReceive_Batch>): _124.MsgBridgeReceive_Batch;
            };
            MsgBridgeReceive_Project: {
                encode(message: _124.MsgBridgeReceive_Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgBridgeReceive_Project;
                fromJSON(object: any): _124.MsgBridgeReceive_Project;
                toJSON(message: _124.MsgBridgeReceive_Project): unknown;
                fromPartial(object: Partial<_124.MsgBridgeReceive_Project>): _124.MsgBridgeReceive_Project;
            };
            MsgBridgeReceiveResponse: {
                encode(message: _124.MsgBridgeReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgBridgeReceiveResponse;
                fromJSON(object: any): _124.MsgBridgeReceiveResponse;
                toJSON(message: _124.MsgBridgeReceiveResponse): unknown;
                fromPartial(object: Partial<_124.MsgBridgeReceiveResponse>): _124.MsgBridgeReceiveResponse;
            };
            MsgAddClassCreator: {
                encode(message: _124.MsgAddClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgAddClassCreator;
                fromJSON(object: any): _124.MsgAddClassCreator;
                toJSON(message: _124.MsgAddClassCreator): unknown;
                fromPartial(object: Partial<_124.MsgAddClassCreator>): _124.MsgAddClassCreator;
            };
            MsgAddClassCreatorResponse: {
                encode(_: _124.MsgAddClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgAddClassCreatorResponse;
                fromJSON(_: any): _124.MsgAddClassCreatorResponse;
                toJSON(_: _124.MsgAddClassCreatorResponse): unknown;
                fromPartial(_: Partial<_124.MsgAddClassCreatorResponse>): _124.MsgAddClassCreatorResponse;
            };
            MsgSetClassCreatorAllowlist: {
                encode(message: _124.MsgSetClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSetClassCreatorAllowlist;
                fromJSON(object: any): _124.MsgSetClassCreatorAllowlist;
                toJSON(message: _124.MsgSetClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_124.MsgSetClassCreatorAllowlist>): _124.MsgSetClassCreatorAllowlist;
            };
            MsgSetClassCreatorAllowlistResponse: {
                encode(_: _124.MsgSetClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgSetClassCreatorAllowlistResponse;
                fromJSON(_: any): _124.MsgSetClassCreatorAllowlistResponse;
                toJSON(_: _124.MsgSetClassCreatorAllowlistResponse): unknown;
                fromPartial(_: Partial<_124.MsgSetClassCreatorAllowlistResponse>): _124.MsgSetClassCreatorAllowlistResponse;
            };
            MsgRemoveClassCreator: {
                encode(message: _124.MsgRemoveClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgRemoveClassCreator;
                fromJSON(object: any): _124.MsgRemoveClassCreator;
                toJSON(message: _124.MsgRemoveClassCreator): unknown;
                fromPartial(object: Partial<_124.MsgRemoveClassCreator>): _124.MsgRemoveClassCreator;
            };
            MsgRemoveClassCreatorResponse: {
                encode(_: _124.MsgRemoveClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgRemoveClassCreatorResponse;
                fromJSON(_: any): _124.MsgRemoveClassCreatorResponse;
                toJSON(_: _124.MsgRemoveClassCreatorResponse): unknown;
                fromPartial(_: Partial<_124.MsgRemoveClassCreatorResponse>): _124.MsgRemoveClassCreatorResponse;
            };
            MsgUpdateClassFee: {
                encode(message: _124.MsgUpdateClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassFee;
                fromJSON(object: any): _124.MsgUpdateClassFee;
                toJSON(message: _124.MsgUpdateClassFee): unknown;
                fromPartial(object: Partial<_124.MsgUpdateClassFee>): _124.MsgUpdateClassFee;
            };
            MsgUpdateClassFeeResponse: {
                encode(_: _124.MsgUpdateClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgUpdateClassFeeResponse;
                fromJSON(_: any): _124.MsgUpdateClassFeeResponse;
                toJSON(_: _124.MsgUpdateClassFeeResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateClassFeeResponse>): _124.MsgUpdateClassFeeResponse;
            };
            MsgAddAllowedBridgeChain: {
                encode(message: _124.MsgAddAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgAddAllowedBridgeChain;
                fromJSON(object: any): _124.MsgAddAllowedBridgeChain;
                toJSON(message: _124.MsgAddAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_124.MsgAddAllowedBridgeChain>): _124.MsgAddAllowedBridgeChain;
            };
            MsgAddAllowedBridgeChainResponse: {
                encode(_: _124.MsgAddAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgAddAllowedBridgeChainResponse;
                fromJSON(_: any): _124.MsgAddAllowedBridgeChainResponse;
                toJSON(_: _124.MsgAddAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_124.MsgAddAllowedBridgeChainResponse>): _124.MsgAddAllowedBridgeChainResponse;
            };
            MsgRemoveAllowedBridgeChain: {
                encode(message: _124.MsgRemoveAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgRemoveAllowedBridgeChain;
                fromJSON(object: any): _124.MsgRemoveAllowedBridgeChain;
                toJSON(message: _124.MsgRemoveAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_124.MsgRemoveAllowedBridgeChain>): _124.MsgRemoveAllowedBridgeChain;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                encode(_: _124.MsgRemoveAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.MsgRemoveAllowedBridgeChainResponse;
                fromJSON(_: any): _124.MsgRemoveAllowedBridgeChainResponse;
                toJSON(_: _124.MsgRemoveAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_124.MsgRemoveAllowedBridgeChainResponse>): _124.MsgRemoveAllowedBridgeChainResponse;
            };
            CreditType: {
                encode(message: _123.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.CreditType;
                fromJSON(object: any): _123.CreditType;
                toJSON(message: _123.CreditType): unknown;
                fromPartial(object: Partial<_123.CreditType>): _123.CreditType;
            };
            Class: {
                encode(message: _123.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.Class;
                fromJSON(object: any): _123.Class;
                toJSON(message: _123.Class): unknown;
                fromPartial(object: Partial<_123.Class>): _123.Class;
            };
            ClassIssuer: {
                encode(message: _123.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.ClassIssuer;
                fromJSON(object: any): _123.ClassIssuer;
                toJSON(message: _123.ClassIssuer): unknown;
                fromPartial(object: Partial<_123.ClassIssuer>): _123.ClassIssuer;
            };
            Project: {
                encode(message: _123.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.Project;
                fromJSON(object: any): _123.Project;
                toJSON(message: _123.Project): unknown;
                fromPartial(object: Partial<_123.Project>): _123.Project;
            };
            Batch: {
                encode(message: _123.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.Batch;
                fromJSON(object: any): _123.Batch;
                toJSON(message: _123.Batch): unknown;
                fromPartial(object: Partial<_123.Batch>): _123.Batch;
            };
            ClassSequence: {
                encode(message: _123.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.ClassSequence;
                fromJSON(object: any): _123.ClassSequence;
                toJSON(message: _123.ClassSequence): unknown;
                fromPartial(object: Partial<_123.ClassSequence>): _123.ClassSequence;
            };
            ProjectSequence: {
                encode(message: _123.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.ProjectSequence;
                fromJSON(object: any): _123.ProjectSequence;
                toJSON(message: _123.ProjectSequence): unknown;
                fromPartial(object: Partial<_123.ProjectSequence>): _123.ProjectSequence;
            };
            BatchSequence: {
                encode(message: _123.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.BatchSequence;
                fromJSON(object: any): _123.BatchSequence;
                toJSON(message: _123.BatchSequence): unknown;
                fromPartial(object: Partial<_123.BatchSequence>): _123.BatchSequence;
            };
            BatchBalance: {
                encode(message: _123.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.BatchBalance;
                fromJSON(object: any): _123.BatchBalance;
                toJSON(message: _123.BatchBalance): unknown;
                fromPartial(object: Partial<_123.BatchBalance>): _123.BatchBalance;
            };
            BatchSupply: {
                encode(message: _123.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.BatchSupply;
                fromJSON(object: any): _123.BatchSupply;
                toJSON(message: _123.BatchSupply): unknown;
                fromPartial(object: Partial<_123.BatchSupply>): _123.BatchSupply;
            };
            OriginTxIndex: {
                encode(message: _123.OriginTxIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.OriginTxIndex;
                fromJSON(object: any): _123.OriginTxIndex;
                toJSON(message: _123.OriginTxIndex): unknown;
                fromPartial(object: Partial<_123.OriginTxIndex>): _123.OriginTxIndex;
            };
            BatchContract: {
                encode(message: _123.BatchContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.BatchContract;
                fromJSON(object: any): _123.BatchContract;
                toJSON(message: _123.BatchContract): unknown;
                fromPartial(object: Partial<_123.BatchContract>): _123.BatchContract;
            };
            ClassCreatorAllowlist: {
                encode(message: _123.ClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.ClassCreatorAllowlist;
                fromJSON(object: any): _123.ClassCreatorAllowlist;
                toJSON(message: _123.ClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_123.ClassCreatorAllowlist>): _123.ClassCreatorAllowlist;
            };
            AllowedClassCreator: {
                encode(message: _123.AllowedClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.AllowedClassCreator;
                fromJSON(object: any): _123.AllowedClassCreator;
                toJSON(message: _123.AllowedClassCreator): unknown;
                fromPartial(object: Partial<_123.AllowedClassCreator>): _123.AllowedClassCreator;
            };
            ClassFee: {
                encode(message: _123.ClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.ClassFee;
                fromJSON(object: any): _123.ClassFee;
                toJSON(message: _123.ClassFee): unknown;
                fromPartial(object: Partial<_123.ClassFee>): _123.ClassFee;
            };
            AllowedBridgeChain: {
                encode(message: _123.AllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.AllowedBridgeChain;
                fromJSON(object: any): _123.AllowedBridgeChain;
                toJSON(message: _123.AllowedBridgeChain): unknown;
                fromPartial(object: Partial<_123.AllowedBridgeChain>): _123.AllowedBridgeChain;
            };
            QueryClassesRequest: {
                encode(message: _122.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassesRequest;
                fromJSON(object: any): _122.QueryClassesRequest;
                toJSON(message: _122.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_122.QueryClassesRequest>): _122.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _122.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassesResponse;
                fromJSON(object: any): _122.QueryClassesResponse;
                toJSON(message: _122.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_122.QueryClassesResponse>): _122.QueryClassesResponse;
            };
            QueryClassesByAdminRequest: {
                encode(message: _122.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassesByAdminRequest;
                fromJSON(object: any): _122.QueryClassesByAdminRequest;
                toJSON(message: _122.QueryClassesByAdminRequest): unknown;
                fromPartial(object: Partial<_122.QueryClassesByAdminRequest>): _122.QueryClassesByAdminRequest;
            };
            QueryClassesByAdminResponse: {
                encode(message: _122.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassesByAdminResponse;
                fromJSON(object: any): _122.QueryClassesByAdminResponse;
                toJSON(message: _122.QueryClassesByAdminResponse): unknown;
                fromPartial(object: Partial<_122.QueryClassesByAdminResponse>): _122.QueryClassesByAdminResponse;
            };
            QueryClassRequest: {
                encode(message: _122.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassRequest;
                fromJSON(object: any): _122.QueryClassRequest;
                toJSON(message: _122.QueryClassRequest): unknown;
                fromPartial(object: Partial<_122.QueryClassRequest>): _122.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _122.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassResponse;
                fromJSON(object: any): _122.QueryClassResponse;
                toJSON(message: _122.QueryClassResponse): unknown;
                fromPartial(object: Partial<_122.QueryClassResponse>): _122.QueryClassResponse;
            };
            QueryClassIssuersRequest: {
                encode(message: _122.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassIssuersRequest;
                fromJSON(object: any): _122.QueryClassIssuersRequest;
                toJSON(message: _122.QueryClassIssuersRequest): unknown;
                fromPartial(object: Partial<_122.QueryClassIssuersRequest>): _122.QueryClassIssuersRequest;
            };
            QueryClassIssuersResponse: {
                encode(message: _122.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassIssuersResponse;
                fromJSON(object: any): _122.QueryClassIssuersResponse;
                toJSON(message: _122.QueryClassIssuersResponse): unknown;
                fromPartial(object: Partial<_122.QueryClassIssuersResponse>): _122.QueryClassIssuersResponse;
            };
            QueryProjectsRequest: {
                encode(message: _122.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsRequest;
                fromJSON(object: any): _122.QueryProjectsRequest;
                toJSON(message: _122.QueryProjectsRequest): unknown;
                fromPartial(object: Partial<_122.QueryProjectsRequest>): _122.QueryProjectsRequest;
            };
            QueryProjectsResponse: {
                encode(message: _122.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsResponse;
                fromJSON(object: any): _122.QueryProjectsResponse;
                toJSON(message: _122.QueryProjectsResponse): unknown;
                fromPartial(object: Partial<_122.QueryProjectsResponse>): _122.QueryProjectsResponse;
            };
            QueryProjectsByClassRequest: {
                encode(message: _122.QueryProjectsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsByClassRequest;
                fromJSON(object: any): _122.QueryProjectsByClassRequest;
                toJSON(message: _122.QueryProjectsByClassRequest): unknown;
                fromPartial(object: Partial<_122.QueryProjectsByClassRequest>): _122.QueryProjectsByClassRequest;
            };
            QueryProjectsByClassResponse: {
                encode(message: _122.QueryProjectsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsByClassResponse;
                fromJSON(object: any): _122.QueryProjectsByClassResponse;
                toJSON(message: _122.QueryProjectsByClassResponse): unknown;
                fromPartial(object: Partial<_122.QueryProjectsByClassResponse>): _122.QueryProjectsByClassResponse;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _122.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _122.QueryProjectsByReferenceIdRequest;
                toJSON(message: _122.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: Partial<_122.QueryProjectsByReferenceIdRequest>): _122.QueryProjectsByReferenceIdRequest;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _122.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _122.QueryProjectsByReferenceIdResponse;
                toJSON(message: _122.QueryProjectsByReferenceIdResponse): unknown;
                fromPartial(object: Partial<_122.QueryProjectsByReferenceIdResponse>): _122.QueryProjectsByReferenceIdResponse;
            };
            QueryProjectsByAdminRequest: {
                encode(message: _122.QueryProjectsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsByAdminRequest;
                fromJSON(object: any): _122.QueryProjectsByAdminRequest;
                toJSON(message: _122.QueryProjectsByAdminRequest): unknown;
                fromPartial(object: Partial<_122.QueryProjectsByAdminRequest>): _122.QueryProjectsByAdminRequest;
            };
            QueryProjectsByAdminResponse: {
                encode(message: _122.QueryProjectsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectsByAdminResponse;
                fromJSON(object: any): _122.QueryProjectsByAdminResponse;
                toJSON(message: _122.QueryProjectsByAdminResponse): unknown;
                fromPartial(object: Partial<_122.QueryProjectsByAdminResponse>): _122.QueryProjectsByAdminResponse;
            };
            QueryProjectRequest: {
                encode(message: _122.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectRequest;
                fromJSON(object: any): _122.QueryProjectRequest;
                toJSON(message: _122.QueryProjectRequest): unknown;
                fromPartial(object: Partial<_122.QueryProjectRequest>): _122.QueryProjectRequest;
            };
            QueryProjectResponse: {
                encode(message: _122.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryProjectResponse;
                fromJSON(object: any): _122.QueryProjectResponse;
                toJSON(message: _122.QueryProjectResponse): unknown;
                fromPartial(object: Partial<_122.QueryProjectResponse>): _122.QueryProjectResponse;
            };
            QueryBatchesRequest: {
                encode(message: _122.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesRequest;
                fromJSON(object: any): _122.QueryBatchesRequest;
                toJSON(message: _122.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_122.QueryBatchesRequest>): _122.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _122.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesResponse;
                fromJSON(object: any): _122.QueryBatchesResponse;
                toJSON(message: _122.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_122.QueryBatchesResponse>): _122.QueryBatchesResponse;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _122.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _122.QueryBatchesByIssuerRequest;
                toJSON(message: _122.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: Partial<_122.QueryBatchesByIssuerRequest>): _122.QueryBatchesByIssuerRequest;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _122.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _122.QueryBatchesByIssuerResponse;
                toJSON(message: _122.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: Partial<_122.QueryBatchesByIssuerResponse>): _122.QueryBatchesByIssuerResponse;
            };
            QueryBatchesByClassRequest: {
                encode(message: _122.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesByClassRequest;
                fromJSON(object: any): _122.QueryBatchesByClassRequest;
                toJSON(message: _122.QueryBatchesByClassRequest): unknown;
                fromPartial(object: Partial<_122.QueryBatchesByClassRequest>): _122.QueryBatchesByClassRequest;
            };
            QueryBatchesByProjectRequest: {
                encode(message: _122.QueryBatchesByProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesByProjectRequest;
                fromJSON(object: any): _122.QueryBatchesByProjectRequest;
                toJSON(message: _122.QueryBatchesByProjectRequest): unknown;
                fromPartial(object: Partial<_122.QueryBatchesByProjectRequest>): _122.QueryBatchesByProjectRequest;
            };
            QueryBatchesByProjectResponse: {
                encode(message: _122.QueryBatchesByProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesByProjectResponse;
                fromJSON(object: any): _122.QueryBatchesByProjectResponse;
                toJSON(message: _122.QueryBatchesByProjectResponse): unknown;
                fromPartial(object: Partial<_122.QueryBatchesByProjectResponse>): _122.QueryBatchesByProjectResponse;
            };
            QueryBatchesByClassResponse: {
                encode(message: _122.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchesByClassResponse;
                fromJSON(object: any): _122.QueryBatchesByClassResponse;
                toJSON(message: _122.QueryBatchesByClassResponse): unknown;
                fromPartial(object: Partial<_122.QueryBatchesByClassResponse>): _122.QueryBatchesByClassResponse;
            };
            QueryBatchRequest: {
                encode(message: _122.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchRequest;
                fromJSON(object: any): _122.QueryBatchRequest;
                toJSON(message: _122.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_122.QueryBatchRequest>): _122.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _122.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBatchResponse;
                fromJSON(object: any): _122.QueryBatchResponse;
                toJSON(message: _122.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_122.QueryBatchResponse>): _122.QueryBatchResponse;
            };
            QueryBalanceRequest: {
                encode(message: _122.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBalanceRequest;
                fromJSON(object: any): _122.QueryBalanceRequest;
                toJSON(message: _122.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_122.QueryBalanceRequest>): _122.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _122.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBalanceResponse;
                fromJSON(object: any): _122.QueryBalanceResponse;
                toJSON(message: _122.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_122.QueryBalanceResponse>): _122.QueryBalanceResponse;
            };
            QueryBalancesRequest: {
                encode(message: _122.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBalancesRequest;
                fromJSON(object: any): _122.QueryBalancesRequest;
                toJSON(message: _122.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_122.QueryBalancesRequest>): _122.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _122.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBalancesResponse;
                fromJSON(object: any): _122.QueryBalancesResponse;
                toJSON(message: _122.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_122.QueryBalancesResponse>): _122.QueryBalancesResponse;
            };
            QueryBalancesByBatchRequest: {
                encode(message: _122.QueryBalancesByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBalancesByBatchRequest;
                fromJSON(object: any): _122.QueryBalancesByBatchRequest;
                toJSON(message: _122.QueryBalancesByBatchRequest): unknown;
                fromPartial(object: Partial<_122.QueryBalancesByBatchRequest>): _122.QueryBalancesByBatchRequest;
            };
            QueryBalancesByBatchResponse: {
                encode(message: _122.QueryBalancesByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryBalancesByBatchResponse;
                fromJSON(object: any): _122.QueryBalancesByBatchResponse;
                toJSON(message: _122.QueryBalancesByBatchResponse): unknown;
                fromPartial(object: Partial<_122.QueryBalancesByBatchResponse>): _122.QueryBalancesByBatchResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _122.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAllBalancesRequest;
                fromJSON(object: any): _122.QueryAllBalancesRequest;
                toJSON(message: _122.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_122.QueryAllBalancesRequest>): _122.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _122.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAllBalancesResponse;
                fromJSON(object: any): _122.QueryAllBalancesResponse;
                toJSON(message: _122.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_122.QueryAllBalancesResponse>): _122.QueryAllBalancesResponse;
            };
            QuerySupplyRequest: {
                encode(message: _122.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QuerySupplyRequest;
                fromJSON(object: any): _122.QuerySupplyRequest;
                toJSON(message: _122.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_122.QuerySupplyRequest>): _122.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _122.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QuerySupplyResponse;
                fromJSON(object: any): _122.QuerySupplyResponse;
                toJSON(message: _122.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_122.QuerySupplyResponse>): _122.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _122.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryCreditTypesRequest;
                fromJSON(_: any): _122.QueryCreditTypesRequest;
                toJSON(_: _122.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_122.QueryCreditTypesRequest>): _122.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _122.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryCreditTypesResponse;
                fromJSON(object: any): _122.QueryCreditTypesResponse;
                toJSON(message: _122.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_122.QueryCreditTypesResponse>): _122.QueryCreditTypesResponse;
            };
            QueryParamsRequest: {
                encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryParamsRequest;
                fromJSON(_: any): _122.QueryParamsRequest;
                toJSON(_: _122.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryParamsResponse;
                fromJSON(object: any): _122.QueryParamsResponse;
                toJSON(message: _122.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
            };
            QueryCreditTypeRequest: {
                encode(message: _122.QueryCreditTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryCreditTypeRequest;
                fromJSON(object: any): _122.QueryCreditTypeRequest;
                toJSON(message: _122.QueryCreditTypeRequest): unknown;
                fromPartial(object: Partial<_122.QueryCreditTypeRequest>): _122.QueryCreditTypeRequest;
            };
            QueryCreditTypeResponse: {
                encode(message: _122.QueryCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryCreditTypeResponse;
                fromJSON(object: any): _122.QueryCreditTypeResponse;
                toJSON(message: _122.QueryCreditTypeResponse): unknown;
                fromPartial(object: Partial<_122.QueryCreditTypeResponse>): _122.QueryCreditTypeResponse;
            };
            ClassInfo: {
                encode(message: _122.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ClassInfo;
                fromJSON(object: any): _122.ClassInfo;
                toJSON(message: _122.ClassInfo): unknown;
                fromPartial(object: Partial<_122.ClassInfo>): _122.ClassInfo;
            };
            ProjectInfo: {
                encode(message: _122.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ProjectInfo;
                fromJSON(object: any): _122.ProjectInfo;
                toJSON(message: _122.ProjectInfo): unknown;
                fromPartial(object: Partial<_122.ProjectInfo>): _122.ProjectInfo;
            };
            BatchInfo: {
                encode(message: _122.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.BatchInfo;
                fromJSON(object: any): _122.BatchInfo;
                toJSON(message: _122.BatchInfo): unknown;
                fromPartial(object: Partial<_122.BatchInfo>): _122.BatchInfo;
            };
            BatchBalanceInfo: {
                encode(message: _122.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.BatchBalanceInfo;
                fromJSON(object: any): _122.BatchBalanceInfo;
                toJSON(message: _122.BatchBalanceInfo): unknown;
                fromPartial(object: Partial<_122.BatchBalanceInfo>): _122.BatchBalanceInfo;
            };
            QueryClassCreatorAllowlistRequest: {
                encode(_: _122.QueryClassCreatorAllowlistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassCreatorAllowlistRequest;
                fromJSON(_: any): _122.QueryClassCreatorAllowlistRequest;
                toJSON(_: _122.QueryClassCreatorAllowlistRequest): unknown;
                fromPartial(_: Partial<_122.QueryClassCreatorAllowlistRequest>): _122.QueryClassCreatorAllowlistRequest;
            };
            QueryClassCreatorAllowlistResponse: {
                encode(message: _122.QueryClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassCreatorAllowlistResponse;
                fromJSON(object: any): _122.QueryClassCreatorAllowlistResponse;
                toJSON(message: _122.QueryClassCreatorAllowlistResponse): unknown;
                fromPartial(object: Partial<_122.QueryClassCreatorAllowlistResponse>): _122.QueryClassCreatorAllowlistResponse;
            };
            QueryAllowedClassCreatorsRequest: {
                encode(message: _122.QueryAllowedClassCreatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAllowedClassCreatorsRequest;
                fromJSON(object: any): _122.QueryAllowedClassCreatorsRequest;
                toJSON(message: _122.QueryAllowedClassCreatorsRequest): unknown;
                fromPartial(object: Partial<_122.QueryAllowedClassCreatorsRequest>): _122.QueryAllowedClassCreatorsRequest;
            };
            QueryAllowedClassCreatorsResponse: {
                encode(message: _122.QueryAllowedClassCreatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAllowedClassCreatorsResponse;
                fromJSON(object: any): _122.QueryAllowedClassCreatorsResponse;
                toJSON(message: _122.QueryAllowedClassCreatorsResponse): unknown;
                fromPartial(object: Partial<_122.QueryAllowedClassCreatorsResponse>): _122.QueryAllowedClassCreatorsResponse;
            };
            QueryClassFeeRequest: {
                encode(_: _122.QueryClassFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassFeeRequest;
                fromJSON(_: any): _122.QueryClassFeeRequest;
                toJSON(_: _122.QueryClassFeeRequest): unknown;
                fromPartial(_: Partial<_122.QueryClassFeeRequest>): _122.QueryClassFeeRequest;
            };
            QueryClassFeeResponse: {
                encode(message: _122.QueryClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryClassFeeResponse;
                fromJSON(object: any): _122.QueryClassFeeResponse;
                toJSON(message: _122.QueryClassFeeResponse): unknown;
                fromPartial(object: Partial<_122.QueryClassFeeResponse>): _122.QueryClassFeeResponse;
            };
            QueryAllowedBridgeChainsRequest: {
                encode(_: _122.QueryAllowedBridgeChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAllowedBridgeChainsRequest;
                fromJSON(_: any): _122.QueryAllowedBridgeChainsRequest;
                toJSON(_: _122.QueryAllowedBridgeChainsRequest): unknown;
                fromPartial(_: Partial<_122.QueryAllowedBridgeChainsRequest>): _122.QueryAllowedBridgeChainsRequest;
            };
            QueryAllowedBridgeChainsResponse: {
                encode(message: _122.QueryAllowedBridgeChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.QueryAllowedBridgeChainsResponse;
                fromJSON(object: any): _122.QueryAllowedBridgeChainsResponse;
                toJSON(message: _122.QueryAllowedBridgeChainsResponse): unknown;
                fromPartial(object: Partial<_122.QueryAllowedBridgeChainsResponse>): _122.QueryAllowedBridgeChainsResponse;
            };
            EventCreateClass: {
                encode(message: _121.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventCreateClass;
                fromJSON(object: any): _121.EventCreateClass;
                toJSON(message: _121.EventCreateClass): unknown;
                fromPartial(object: Partial<_121.EventCreateClass>): _121.EventCreateClass;
            };
            EventCreateProject: {
                encode(message: _121.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventCreateProject;
                fromJSON(object: any): _121.EventCreateProject;
                toJSON(message: _121.EventCreateProject): unknown;
                fromPartial(object: Partial<_121.EventCreateProject>): _121.EventCreateProject;
            };
            EventCreateBatch: {
                encode(message: _121.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventCreateBatch;
                fromJSON(object: any): _121.EventCreateBatch;
                toJSON(message: _121.EventCreateBatch): unknown;
                fromPartial(object: Partial<_121.EventCreateBatch>): _121.EventCreateBatch;
            };
            EventMint: {
                encode(message: _121.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventMint;
                fromJSON(object: any): _121.EventMint;
                toJSON(message: _121.EventMint): unknown;
                fromPartial(object: Partial<_121.EventMint>): _121.EventMint;
            };
            EventMintBatchCredits: {
                encode(message: _121.EventMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventMintBatchCredits;
                fromJSON(object: any): _121.EventMintBatchCredits;
                toJSON(message: _121.EventMintBatchCredits): unknown;
                fromPartial(object: Partial<_121.EventMintBatchCredits>): _121.EventMintBatchCredits;
            };
            EventTransfer: {
                encode(message: _121.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventTransfer;
                fromJSON(object: any): _121.EventTransfer;
                toJSON(message: _121.EventTransfer): unknown;
                fromPartial(object: Partial<_121.EventTransfer>): _121.EventTransfer;
            };
            EventRetire: {
                encode(message: _121.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventRetire;
                fromJSON(object: any): _121.EventRetire;
                toJSON(message: _121.EventRetire): unknown;
                fromPartial(object: Partial<_121.EventRetire>): _121.EventRetire;
            };
            EventCancel: {
                encode(message: _121.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventCancel;
                fromJSON(object: any): _121.EventCancel;
                toJSON(message: _121.EventCancel): unknown;
                fromPartial(object: Partial<_121.EventCancel>): _121.EventCancel;
            };
            EventUpdateClassAdmin: {
                encode(message: _121.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventUpdateClassAdmin;
                fromJSON(object: any): _121.EventUpdateClassAdmin;
                toJSON(message: _121.EventUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_121.EventUpdateClassAdmin>): _121.EventUpdateClassAdmin;
            };
            EventUpdateClassIssuers: {
                encode(message: _121.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventUpdateClassIssuers;
                fromJSON(object: any): _121.EventUpdateClassIssuers;
                toJSON(message: _121.EventUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_121.EventUpdateClassIssuers>): _121.EventUpdateClassIssuers;
            };
            EventUpdateClassMetadata: {
                encode(message: _121.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventUpdateClassMetadata;
                fromJSON(object: any): _121.EventUpdateClassMetadata;
                toJSON(message: _121.EventUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_121.EventUpdateClassMetadata>): _121.EventUpdateClassMetadata;
            };
            EventUpdateProjectAdmin: {
                encode(message: _121.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventUpdateProjectAdmin;
                fromJSON(object: any): _121.EventUpdateProjectAdmin;
                toJSON(message: _121.EventUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_121.EventUpdateProjectAdmin>): _121.EventUpdateProjectAdmin;
            };
            EventUpdateProjectMetadata: {
                encode(message: _121.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventUpdateProjectMetadata;
                fromJSON(object: any): _121.EventUpdateProjectMetadata;
                toJSON(message: _121.EventUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_121.EventUpdateProjectMetadata>): _121.EventUpdateProjectMetadata;
            };
            EventUpdateBatchMetadata: {
                encode(message: _121.EventUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventUpdateBatchMetadata;
                fromJSON(object: any): _121.EventUpdateBatchMetadata;
                toJSON(message: _121.EventUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_121.EventUpdateBatchMetadata>): _121.EventUpdateBatchMetadata;
            };
            EventSealBatch: {
                encode(message: _121.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventSealBatch;
                fromJSON(object: any): _121.EventSealBatch;
                toJSON(message: _121.EventSealBatch): unknown;
                fromPartial(object: Partial<_121.EventSealBatch>): _121.EventSealBatch;
            };
            EventAddCreditType: {
                encode(message: _121.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventAddCreditType;
                fromJSON(object: any): _121.EventAddCreditType;
                toJSON(message: _121.EventAddCreditType): unknown;
                fromPartial(object: Partial<_121.EventAddCreditType>): _121.EventAddCreditType;
            };
            EventBridge: {
                encode(message: _121.EventBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventBridge;
                fromJSON(object: any): _121.EventBridge;
                toJSON(message: _121.EventBridge): unknown;
                fromPartial(object: Partial<_121.EventBridge>): _121.EventBridge;
            };
            EventBridgeReceive: {
                encode(message: _121.EventBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.EventBridgeReceive;
                fromJSON(object: any): _121.EventBridgeReceive;
                toJSON(message: _121.EventBridgeReceive): unknown;
                fromPartial(object: Partial<_121.EventBridgeReceive>): _121.EventBridgeReceive;
            };
        };
        const v1alpha1: {
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _129.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _129.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _129.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _129.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _129.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _129.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _129.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _129.MsgCreateClass): {
                        typeUrl: string;
                        value: _129.MsgCreateClass;
                    };
                    createBatch(value: _129.MsgCreateBatch): {
                        typeUrl: string;
                        value: _129.MsgCreateBatch;
                    };
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: _129.MsgSend;
                    };
                    retire(value: _129.MsgRetire): {
                        typeUrl: string;
                        value: _129.MsgRetire;
                    };
                    cancel(value: _129.MsgCancel): {
                        typeUrl: string;
                        value: _129.MsgCancel;
                    };
                    updateClassAdmin(value: _129.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _129.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _129.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _129.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _129.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _129.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _129.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _129.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _129.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _129.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _129.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _129.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _129.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _129.MsgCreateClass): {
                        typeUrl: string;
                        value: _129.MsgCreateClass;
                    };
                    createBatch(value: _129.MsgCreateBatch): {
                        typeUrl: string;
                        value: _129.MsgCreateBatch;
                    };
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: _129.MsgSend;
                    };
                    retire(value: _129.MsgRetire): {
                        typeUrl: string;
                        value: _129.MsgRetire;
                    };
                    cancel(value: _129.MsgCancel): {
                        typeUrl: string;
                        value: _129.MsgCancel;
                    };
                    updateClassAdmin(value: _129.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _129.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _129.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _129.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeName }: _129.MsgCreateClass) => {
                        admin: string;
                        issuers: string[];
                        metadata: Uint8Array;
                        credit_type_name: string;
                    };
                    fromAmino: ({ admin, issuers, metadata, credit_type_name }: {
                        admin: string;
                        issuers: string[];
                        metadata: Uint8Array;
                        credit_type_name: string;
                    }) => _129.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: _129.MsgCreateBatch) => {
                        issuer: string;
                        class_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                        metadata: Uint8Array;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        project_location: string;
                    };
                    fromAmino: ({ issuer, class_id, issuance, metadata, start_date, end_date, project_location }: {
                        issuer: string;
                        class_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                        metadata: Uint8Array;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        project_location: string;
                    }) => _129.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _129.MsgSend) => {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                    };
                    fromAmino: ({ sender, recipient, credits }: {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                    }) => _129.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, location }: _129.MsgRetire) => {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        location: string;
                    };
                    fromAmino: ({ holder, credits, location }: {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        location: string;
                    }) => _129.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _129.MsgCancel) => {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ holder, credits }: {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    }) => _129.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _129.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _129.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, issuers }: _129.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, issuers }: {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    }) => _129.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _129.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    }) => _129.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _130.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.ClassInfo;
                fromJSON(object: any): _130.ClassInfo;
                toJSON(message: _130.ClassInfo): unknown;
                fromPartial(object: Partial<_130.ClassInfo>): _130.ClassInfo;
            };
            BatchInfo: {
                encode(message: _130.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.BatchInfo;
                fromJSON(object: any): _130.BatchInfo;
                toJSON(message: _130.BatchInfo): unknown;
                fromPartial(object: Partial<_130.BatchInfo>): _130.BatchInfo;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.Params;
                fromJSON(object: any): _130.Params;
                toJSON(message: _130.Params): unknown;
                fromPartial(object: Partial<_130.Params>): _130.Params;
            };
            CreditType: {
                encode(message: _130.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.CreditType;
                fromJSON(object: any): _130.CreditType;
                toJSON(message: _130.CreditType): unknown;
                fromPartial(object: Partial<_130.CreditType>): _130.CreditType;
            };
            CreditTypeSeq: {
                encode(message: _130.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.CreditTypeSeq;
                fromJSON(object: any): _130.CreditTypeSeq;
                toJSON(message: _130.CreditTypeSeq): unknown;
                fromPartial(object: Partial<_130.CreditTypeSeq>): _130.CreditTypeSeq;
            };
            MsgCreateClass: {
                encode(message: _129.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCreateClass;
                fromJSON(object: any): _129.MsgCreateClass;
                toJSON(message: _129.MsgCreateClass): unknown;
                fromPartial(object: Partial<_129.MsgCreateClass>): _129.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _129.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCreateClassResponse;
                fromJSON(object: any): _129.MsgCreateClassResponse;
                toJSON(message: _129.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_129.MsgCreateClassResponse>): _129.MsgCreateClassResponse;
            };
            MsgCreateBatch: {
                encode(message: _129.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCreateBatch;
                fromJSON(object: any): _129.MsgCreateBatch;
                toJSON(message: _129.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_129.MsgCreateBatch>): _129.MsgCreateBatch;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _129.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _129.MsgCreateBatch_BatchIssuance;
                toJSON(message: _129.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: Partial<_129.MsgCreateBatch_BatchIssuance>): _129.MsgCreateBatch_BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _129.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCreateBatchResponse;
                fromJSON(object: any): _129.MsgCreateBatchResponse;
                toJSON(message: _129.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_129.MsgCreateBatchResponse>): _129.MsgCreateBatchResponse;
            };
            MsgSend: {
                encode(message: _129.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgSend;
                fromJSON(object: any): _129.MsgSend;
                toJSON(message: _129.MsgSend): unknown;
                fromPartial(object: Partial<_129.MsgSend>): _129.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _129.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgSend_SendCredits;
                fromJSON(object: any): _129.MsgSend_SendCredits;
                toJSON(message: _129.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_129.MsgSend_SendCredits>): _129.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _129.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgSendResponse;
                fromJSON(_: any): _129.MsgSendResponse;
                toJSON(_: _129.MsgSendResponse): unknown;
                fromPartial(_: Partial<_129.MsgSendResponse>): _129.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _129.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgRetire;
                fromJSON(object: any): _129.MsgRetire;
                toJSON(message: _129.MsgRetire): unknown;
                fromPartial(object: Partial<_129.MsgRetire>): _129.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _129.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgRetire_RetireCredits;
                fromJSON(object: any): _129.MsgRetire_RetireCredits;
                toJSON(message: _129.MsgRetire_RetireCredits): unknown;
                fromPartial(object: Partial<_129.MsgRetire_RetireCredits>): _129.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _129.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgRetireResponse;
                fromJSON(_: any): _129.MsgRetireResponse;
                toJSON(_: _129.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_129.MsgRetireResponse>): _129.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _129.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCancel;
                fromJSON(object: any): _129.MsgCancel;
                toJSON(message: _129.MsgCancel): unknown;
                fromPartial(object: Partial<_129.MsgCancel>): _129.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _129.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCancel_CancelCredits;
                fromJSON(object: any): _129.MsgCancel_CancelCredits;
                toJSON(message: _129.MsgCancel_CancelCredits): unknown;
                fromPartial(object: Partial<_129.MsgCancel_CancelCredits>): _129.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _129.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgCancelResponse;
                fromJSON(_: any): _129.MsgCancelResponse;
                toJSON(_: _129.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_129.MsgCancelResponse>): _129.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _129.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgUpdateClassAdmin;
                fromJSON(object: any): _129.MsgUpdateClassAdmin;
                toJSON(message: _129.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_129.MsgUpdateClassAdmin>): _129.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _129.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _129.MsgUpdateClassAdminResponse;
                toJSON(_: _129.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_129.MsgUpdateClassAdminResponse>): _129.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _129.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgUpdateClassIssuers;
                fromJSON(object: any): _129.MsgUpdateClassIssuers;
                toJSON(message: _129.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_129.MsgUpdateClassIssuers>): _129.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _129.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _129.MsgUpdateClassIssuersResponse;
                toJSON(_: _129.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_129.MsgUpdateClassIssuersResponse>): _129.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _129.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgUpdateClassMetadata;
                fromJSON(object: any): _129.MsgUpdateClassMetadata;
                toJSON(message: _129.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_129.MsgUpdateClassMetadata>): _129.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _129.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _129.MsgUpdateClassMetadataResponse;
                toJSON(_: _129.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_129.MsgUpdateClassMetadataResponse>): _129.MsgUpdateClassMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _128.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryParamsRequest;
                fromJSON(_: any): _128.QueryParamsRequest;
                toJSON(_: _128.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_128.QueryParamsRequest>): _128.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _128.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryParamsResponse;
                fromJSON(object: any): _128.QueryParamsResponse;
                toJSON(message: _128.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_128.QueryParamsResponse>): _128.QueryParamsResponse;
            };
            QueryClassesRequest: {
                encode(message: _128.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryClassesRequest;
                fromJSON(object: any): _128.QueryClassesRequest;
                toJSON(message: _128.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_128.QueryClassesRequest>): _128.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _128.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryClassesResponse;
                fromJSON(object: any): _128.QueryClassesResponse;
                toJSON(message: _128.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_128.QueryClassesResponse>): _128.QueryClassesResponse;
            };
            QueryClassInfoRequest: {
                encode(message: _128.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryClassInfoRequest;
                fromJSON(object: any): _128.QueryClassInfoRequest;
                toJSON(message: _128.QueryClassInfoRequest): unknown;
                fromPartial(object: Partial<_128.QueryClassInfoRequest>): _128.QueryClassInfoRequest;
            };
            QueryClassInfoResponse: {
                encode(message: _128.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryClassInfoResponse;
                fromJSON(object: any): _128.QueryClassInfoResponse;
                toJSON(message: _128.QueryClassInfoResponse): unknown;
                fromPartial(object: Partial<_128.QueryClassInfoResponse>): _128.QueryClassInfoResponse;
            };
            QueryBatchesRequest: {
                encode(message: _128.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryBatchesRequest;
                fromJSON(object: any): _128.QueryBatchesRequest;
                toJSON(message: _128.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_128.QueryBatchesRequest>): _128.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _128.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryBatchesResponse;
                fromJSON(object: any): _128.QueryBatchesResponse;
                toJSON(message: _128.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_128.QueryBatchesResponse>): _128.QueryBatchesResponse;
            };
            QueryBatchInfoRequest: {
                encode(message: _128.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryBatchInfoRequest;
                fromJSON(object: any): _128.QueryBatchInfoRequest;
                toJSON(message: _128.QueryBatchInfoRequest): unknown;
                fromPartial(object: Partial<_128.QueryBatchInfoRequest>): _128.QueryBatchInfoRequest;
            };
            QueryBatchInfoResponse: {
                encode(message: _128.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryBatchInfoResponse;
                fromJSON(object: any): _128.QueryBatchInfoResponse;
                toJSON(message: _128.QueryBatchInfoResponse): unknown;
                fromPartial(object: Partial<_128.QueryBatchInfoResponse>): _128.QueryBatchInfoResponse;
            };
            QueryBalanceRequest: {
                encode(message: _128.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryBalanceRequest;
                fromJSON(object: any): _128.QueryBalanceRequest;
                toJSON(message: _128.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_128.QueryBalanceRequest>): _128.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _128.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryBalanceResponse;
                fromJSON(object: any): _128.QueryBalanceResponse;
                toJSON(message: _128.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_128.QueryBalanceResponse>): _128.QueryBalanceResponse;
            };
            QuerySupplyRequest: {
                encode(message: _128.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QuerySupplyRequest;
                fromJSON(object: any): _128.QuerySupplyRequest;
                toJSON(message: _128.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_128.QuerySupplyRequest>): _128.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _128.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QuerySupplyResponse;
                fromJSON(object: any): _128.QuerySupplyResponse;
                toJSON(message: _128.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_128.QuerySupplyResponse>): _128.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _128.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryCreditTypesRequest;
                fromJSON(_: any): _128.QueryCreditTypesRequest;
                toJSON(_: _128.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_128.QueryCreditTypesRequest>): _128.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _128.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.QueryCreditTypesResponse;
                fromJSON(object: any): _128.QueryCreditTypesResponse;
                toJSON(message: _128.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_128.QueryCreditTypesResponse>): _128.QueryCreditTypesResponse;
            };
            GenesisState: {
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.GenesisState;
                fromJSON(object: any): _127.GenesisState;
                toJSON(message: _127.GenesisState): unknown;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
            };
            Balance: {
                encode(message: _127.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.Balance;
                fromJSON(object: any): _127.Balance;
                toJSON(message: _127.Balance): unknown;
                fromPartial(object: Partial<_127.Balance>): _127.Balance;
            };
            Supply: {
                encode(message: _127.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.Supply;
                fromJSON(object: any): _127.Supply;
                toJSON(message: _127.Supply): unknown;
                fromPartial(object: Partial<_127.Supply>): _127.Supply;
            };
            EventCreateClass: {
                encode(message: _126.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.EventCreateClass;
                fromJSON(object: any): _126.EventCreateClass;
                toJSON(message: _126.EventCreateClass): unknown;
                fromPartial(object: Partial<_126.EventCreateClass>): _126.EventCreateClass;
            };
            EventCreateBatch: {
                encode(message: _126.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.EventCreateBatch;
                fromJSON(object: any): _126.EventCreateBatch;
                toJSON(message: _126.EventCreateBatch): unknown;
                fromPartial(object: Partial<_126.EventCreateBatch>): _126.EventCreateBatch;
            };
            EventReceive: {
                encode(message: _126.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.EventReceive;
                fromJSON(object: any): _126.EventReceive;
                toJSON(message: _126.EventReceive): unknown;
                fromPartial(object: Partial<_126.EventReceive>): _126.EventReceive;
            };
            EventRetire: {
                encode(message: _126.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.EventRetire;
                fromJSON(object: any): _126.EventRetire;
                toJSON(message: _126.EventRetire): unknown;
                fromPartial(object: Partial<_126.EventRetire>): _126.EventRetire;
            };
            EventCancel: {
                encode(message: _126.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.EventCancel;
                fromJSON(object: any): _126.EventCancel;
                toJSON(message: _126.EventCancel): unknown;
                fromPartial(object: Partial<_126.EventCancel>): _126.EventCancel;
            };
        };
    }
    namespace intertx {
        const v1: {
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _132.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _132.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _132.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _132.MsgRegisterAccount;
                    };
                    submitTx(value: _132.MsgSubmitTx): {
                        typeUrl: string;
                        value: _132.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _132.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _132.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _132.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _132.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _132.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _132.MsgRegisterAccount;
                    };
                    submitTx(value: _132.MsgSubmitTx): {
                        typeUrl: string;
                        value: _132.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, version }: _132.MsgRegisterAccount) => {
                        owner: string;
                        connection_id: string;
                        version: string;
                    };
                    fromAmino: ({ owner, connection_id, version }: {
                        owner: string;
                        connection_id: string;
                        version: string;
                    }) => _132.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msg }: _132.MsgSubmitTx) => {
                        owner: string;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ owner, connection_id, msg }: {
                        owner: string;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _132.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _132.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.MsgRegisterAccount;
                fromJSON(object: any): _132.MsgRegisterAccount;
                toJSON(message: _132.MsgRegisterAccount): unknown;
                fromPartial(object: Partial<_132.MsgRegisterAccount>): _132.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _132.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.MsgRegisterAccountResponse;
                fromJSON(_: any): _132.MsgRegisterAccountResponse;
                toJSON(_: _132.MsgRegisterAccountResponse): unknown;
                fromPartial(_: Partial<_132.MsgRegisterAccountResponse>): _132.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _132.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.MsgSubmitTx;
                fromJSON(object: any): _132.MsgSubmitTx;
                toJSON(message: _132.MsgSubmitTx): unknown;
                fromPartial(object: Partial<_132.MsgSubmitTx>): _132.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _132.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.MsgSubmitTxResponse;
                fromJSON(_: any): _132.MsgSubmitTxResponse;
                toJSON(_: _132.MsgSubmitTxResponse): unknown;
                fromPartial(_: Partial<_132.MsgSubmitTxResponse>): _132.MsgSubmitTxResponse;
            };
            QueryInterchainAccountRequest: {
                encode(message: _131.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryInterchainAccountRequest;
                fromJSON(object: any): _131.QueryInterchainAccountRequest;
                toJSON(message: _131.QueryInterchainAccountRequest): unknown;
                fromPartial(object: Partial<_131.QueryInterchainAccountRequest>): _131.QueryInterchainAccountRequest;
            };
            QueryInterchainAccountResponse: {
                encode(message: _131.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryInterchainAccountResponse;
                fromJSON(object: any): _131.QueryInterchainAccountResponse;
                toJSON(message: _131.QueryInterchainAccountResponse): unknown;
                fromPartial(object: Partial<_131.QueryInterchainAccountResponse>): _131.QueryInterchainAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            regen: {
                data: {
                    v1: _202.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _203.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _204.LCDQueryClient;
                    };
                    v1: _205.LCDQueryClient;
                    v1alpha1: _206.LCDQueryClient;
                };
                intertx: {
                    v1: _207.LCDQueryClient;
                };
            };
        }>;
    };
}
