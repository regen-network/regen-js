import * as _104 from "./data/v1/events";
import * as _105 from "./data/v1/query";
import * as _106 from "./data/v1/state";
import * as _107 from "./data/v1/tx";
import * as _108 from "./data/v1/types";
import * as _109 from "./ecocredit/basket/v1/events";
import * as _110 from "./ecocredit/basket/v1/query";
import * as _111 from "./ecocredit/basket/v1/state";
import * as _112 from "./ecocredit/basket/v1/tx";
import * as _113 from "./ecocredit/basket/v1/types";
import * as _114 from "./ecocredit/marketplace/v1/events";
import * as _115 from "./ecocredit/marketplace/v1/query";
import * as _116 from "./ecocredit/marketplace/v1/state";
import * as _117 from "./ecocredit/marketplace/v1/tx";
import * as _118 from "./ecocredit/marketplace/v1/types";
import * as _119 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _120 from "./ecocredit/v1/events";
import * as _121 from "./ecocredit/v1/query";
import * as _122 from "./ecocredit/v1/state";
import * as _123 from "./ecocredit/v1/tx";
import * as _124 from "./ecocredit/v1/types";
import * as _125 from "./ecocredit/v1alpha1/events";
import * as _126 from "./ecocredit/v1alpha1/genesis";
import * as _127 from "./ecocredit/v1alpha1/query";
import * as _128 from "./ecocredit/v1alpha1/tx";
import * as _129 from "./ecocredit/v1alpha1/types";
import * as _130 from "./intertx/v1/query";
import * as _131 from "./intertx/v1/tx";
import * as _201 from "./data/v1/query.lcd";
import * as _202 from "./ecocredit/basket/v1/query.lcd";
import * as _203 from "./ecocredit/marketplace/v1/query.lcd";
import * as _204 from "./ecocredit/v1/query.lcd";
import * as _205 from "./ecocredit/v1alpha1/query.lcd";
import * as _206 from "./intertx/v1/query.lcd";
export declare namespace regen {
    namespace data {
        const v1: {
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _107.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _107.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _107.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _107.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _107.MsgAnchor): {
                        typeUrl: string;
                        value: _107.MsgAnchor;
                    };
                    attest(value: _107.MsgAttest): {
                        typeUrl: string;
                        value: _107.MsgAttest;
                    };
                    defineResolver(value: _107.MsgDefineResolver): {
                        typeUrl: string;
                        value: _107.MsgDefineResolver;
                    };
                    registerResolver(value: _107.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _107.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _107.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _107.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _107.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _107.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _107.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _107.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _107.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _107.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _107.MsgAnchor): {
                        typeUrl: string;
                        value: _107.MsgAnchor;
                    };
                    attest(value: _107.MsgAttest): {
                        typeUrl: string;
                        value: _107.MsgAttest;
                    };
                    defineResolver(value: _107.MsgDefineResolver): {
                        typeUrl: string;
                        value: _107.MsgDefineResolver;
                    };
                    registerResolver(value: _107.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _107.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash }: _107.MsgAnchor) => {
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
                    }) => _107.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: ({ attestor, contentHashes }: _107.MsgAttest) => {
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
                    }) => _107.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverUrl }: _107.MsgDefineResolver) => {
                        manager: string;
                        resolver_url: string;
                    };
                    fromAmino: ({ manager, resolver_url }: {
                        manager: string;
                        resolver_url: string;
                    }) => _107.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverId, contentHashes }: _107.MsgRegisterResolver) => {
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
                    }) => _107.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _108.DigestAlgorithm;
            digestAlgorithmToJSON(object: _108.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _108.RawMediaType;
            rawMediaTypeToJSON(object: _108.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _108.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _108.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _108.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _108.GraphMerkleTree): string;
            DigestAlgorithm: typeof _108.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _108.DigestAlgorithmSDKType;
            RawMediaType: typeof _108.RawMediaType;
            RawMediaTypeSDKType: typeof _108.RawMediaTypeSDKType;
            GraphCanonicalizationAlgorithm: typeof _108.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _108.GraphCanonicalizationAlgorithmSDKType;
            GraphMerkleTree: typeof _108.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _108.GraphMerkleTreeSDKType;
            ContentHash: {
                encode(message: _108.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ContentHash;
                fromJSON(object: any): _108.ContentHash;
                toJSON(message: _108.ContentHash): unknown;
                fromPartial(object: Partial<_108.ContentHash>): _108.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _108.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ContentHash_Raw;
                fromJSON(object: any): _108.ContentHash_Raw;
                toJSON(message: _108.ContentHash_Raw): unknown;
                fromPartial(object: Partial<_108.ContentHash_Raw>): _108.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _108.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ContentHash_Graph;
                fromJSON(object: any): _108.ContentHash_Graph;
                toJSON(message: _108.ContentHash_Graph): unknown;
                fromPartial(object: Partial<_108.ContentHash_Graph>): _108.ContentHash_Graph;
            };
            ContentHashes: {
                encode(message: _108.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ContentHashes;
                fromJSON(object: any): _108.ContentHashes;
                toJSON(message: _108.ContentHashes): unknown;
                fromPartial(object: Partial<_108.ContentHashes>): _108.ContentHashes;
            };
            MsgAnchor: {
                encode(message: _107.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgAnchor;
                fromJSON(object: any): _107.MsgAnchor;
                toJSON(message: _107.MsgAnchor): unknown;
                fromPartial(object: Partial<_107.MsgAnchor>): _107.MsgAnchor;
            };
            MsgAnchorResponse: {
                encode(message: _107.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgAnchorResponse;
                fromJSON(object: any): _107.MsgAnchorResponse;
                toJSON(message: _107.MsgAnchorResponse): unknown;
                fromPartial(object: Partial<_107.MsgAnchorResponse>): _107.MsgAnchorResponse;
            };
            MsgAttest: {
                encode(message: _107.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgAttest;
                fromJSON(object: any): _107.MsgAttest;
                toJSON(message: _107.MsgAttest): unknown;
                fromPartial(object: Partial<_107.MsgAttest>): _107.MsgAttest;
            };
            MsgAttestResponse: {
                encode(message: _107.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgAttestResponse;
                fromJSON(object: any): _107.MsgAttestResponse;
                toJSON(message: _107.MsgAttestResponse): unknown;
                fromPartial(object: Partial<_107.MsgAttestResponse>): _107.MsgAttestResponse;
            };
            MsgDefineResolver: {
                encode(message: _107.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgDefineResolver;
                fromJSON(object: any): _107.MsgDefineResolver;
                toJSON(message: _107.MsgDefineResolver): unknown;
                fromPartial(object: Partial<_107.MsgDefineResolver>): _107.MsgDefineResolver;
            };
            MsgDefineResolverResponse: {
                encode(message: _107.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgDefineResolverResponse;
                fromJSON(object: any): _107.MsgDefineResolverResponse;
                toJSON(message: _107.MsgDefineResolverResponse): unknown;
                fromPartial(object: Partial<_107.MsgDefineResolverResponse>): _107.MsgDefineResolverResponse;
            };
            MsgRegisterResolver: {
                encode(message: _107.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgRegisterResolver;
                fromJSON(object: any): _107.MsgRegisterResolver;
                toJSON(message: _107.MsgRegisterResolver): unknown;
                fromPartial(object: Partial<_107.MsgRegisterResolver>): _107.MsgRegisterResolver;
            };
            MsgRegisterResolverResponse: {
                encode(_: _107.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgRegisterResolverResponse;
                fromJSON(_: any): _107.MsgRegisterResolverResponse;
                toJSON(_: _107.MsgRegisterResolverResponse): unknown;
                fromPartial(_: Partial<_107.MsgRegisterResolverResponse>): _107.MsgRegisterResolverResponse;
            };
            DataID: {
                encode(message: _106.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.DataID;
                fromJSON(object: any): _106.DataID;
                toJSON(message: _106.DataID): unknown;
                fromPartial(object: Partial<_106.DataID>): _106.DataID;
            };
            DataAnchor: {
                encode(message: _106.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.DataAnchor;
                fromJSON(object: any): _106.DataAnchor;
                toJSON(message: _106.DataAnchor): unknown;
                fromPartial(object: Partial<_106.DataAnchor>): _106.DataAnchor;
            };
            DataAttestor: {
                encode(message: _106.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.DataAttestor;
                fromJSON(object: any): _106.DataAttestor;
                toJSON(message: _106.DataAttestor): unknown;
                fromPartial(object: Partial<_106.DataAttestor>): _106.DataAttestor;
            };
            Resolver: {
                encode(message: _106.Resolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.Resolver;
                fromJSON(object: any): _106.Resolver;
                toJSON(message: _106.Resolver): unknown;
                fromPartial(object: Partial<_106.Resolver>): _106.Resolver;
            };
            DataResolver: {
                encode(message: _106.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.DataResolver;
                fromJSON(object: any): _106.DataResolver;
                toJSON(message: _106.DataResolver): unknown;
                fromPartial(object: Partial<_106.DataResolver>): _106.DataResolver;
            };
            QueryAnchorByIRIRequest: {
                encode(message: _105.QueryAnchorByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAnchorByIRIRequest;
                fromJSON(object: any): _105.QueryAnchorByIRIRequest;
                toJSON(message: _105.QueryAnchorByIRIRequest): unknown;
                fromPartial(object: Partial<_105.QueryAnchorByIRIRequest>): _105.QueryAnchorByIRIRequest;
            };
            QueryAnchorByIRIResponse: {
                encode(message: _105.QueryAnchorByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAnchorByIRIResponse;
                fromJSON(object: any): _105.QueryAnchorByIRIResponse;
                toJSON(message: _105.QueryAnchorByIRIResponse): unknown;
                fromPartial(object: Partial<_105.QueryAnchorByIRIResponse>): _105.QueryAnchorByIRIResponse;
            };
            QueryAnchorByHashRequest: {
                encode(message: _105.QueryAnchorByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAnchorByHashRequest;
                fromJSON(object: any): _105.QueryAnchorByHashRequest;
                toJSON(message: _105.QueryAnchorByHashRequest): unknown;
                fromPartial(object: Partial<_105.QueryAnchorByHashRequest>): _105.QueryAnchorByHashRequest;
            };
            QueryAnchorByHashResponse: {
                encode(message: _105.QueryAnchorByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAnchorByHashResponse;
                fromJSON(object: any): _105.QueryAnchorByHashResponse;
                toJSON(message: _105.QueryAnchorByHashResponse): unknown;
                fromPartial(object: Partial<_105.QueryAnchorByHashResponse>): _105.QueryAnchorByHashResponse;
            };
            QueryAttestationsByAttestorRequest: {
                encode(message: _105.QueryAttestationsByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAttestationsByAttestorRequest;
                fromJSON(object: any): _105.QueryAttestationsByAttestorRequest;
                toJSON(message: _105.QueryAttestationsByAttestorRequest): unknown;
                fromPartial(object: Partial<_105.QueryAttestationsByAttestorRequest>): _105.QueryAttestationsByAttestorRequest;
            };
            QueryAttestationsByAttestorResponse: {
                encode(message: _105.QueryAttestationsByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAttestationsByAttestorResponse;
                fromJSON(object: any): _105.QueryAttestationsByAttestorResponse;
                toJSON(message: _105.QueryAttestationsByAttestorResponse): unknown;
                fromPartial(object: Partial<_105.QueryAttestationsByAttestorResponse>): _105.QueryAttestationsByAttestorResponse;
            };
            QueryAttestationsByIRIRequest: {
                encode(message: _105.QueryAttestationsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAttestationsByIRIRequest;
                fromJSON(object: any): _105.QueryAttestationsByIRIRequest;
                toJSON(message: _105.QueryAttestationsByIRIRequest): unknown;
                fromPartial(object: Partial<_105.QueryAttestationsByIRIRequest>): _105.QueryAttestationsByIRIRequest;
            };
            QueryAttestationsByIRIResponse: {
                encode(message: _105.QueryAttestationsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAttestationsByIRIResponse;
                fromJSON(object: any): _105.QueryAttestationsByIRIResponse;
                toJSON(message: _105.QueryAttestationsByIRIResponse): unknown;
                fromPartial(object: Partial<_105.QueryAttestationsByIRIResponse>): _105.QueryAttestationsByIRIResponse;
            };
            QueryAttestationsByHashRequest: {
                encode(message: _105.QueryAttestationsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAttestationsByHashRequest;
                fromJSON(object: any): _105.QueryAttestationsByHashRequest;
                toJSON(message: _105.QueryAttestationsByHashRequest): unknown;
                fromPartial(object: Partial<_105.QueryAttestationsByHashRequest>): _105.QueryAttestationsByHashRequest;
            };
            QueryAttestationsByHashResponse: {
                encode(message: _105.QueryAttestationsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryAttestationsByHashResponse;
                fromJSON(object: any): _105.QueryAttestationsByHashResponse;
                toJSON(message: _105.QueryAttestationsByHashResponse): unknown;
                fromPartial(object: Partial<_105.QueryAttestationsByHashResponse>): _105.QueryAttestationsByHashResponse;
            };
            QueryResolverRequest: {
                encode(message: _105.QueryResolverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolverRequest;
                fromJSON(object: any): _105.QueryResolverRequest;
                toJSON(message: _105.QueryResolverRequest): unknown;
                fromPartial(object: Partial<_105.QueryResolverRequest>): _105.QueryResolverRequest;
            };
            QueryResolverResponse: {
                encode(message: _105.QueryResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolverResponse;
                fromJSON(object: any): _105.QueryResolverResponse;
                toJSON(message: _105.QueryResolverResponse): unknown;
                fromPartial(object: Partial<_105.QueryResolverResponse>): _105.QueryResolverResponse;
            };
            QueryResolversByIRIRequest: {
                encode(message: _105.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolversByIRIRequest;
                fromJSON(object: any): _105.QueryResolversByIRIRequest;
                toJSON(message: _105.QueryResolversByIRIRequest): unknown;
                fromPartial(object: Partial<_105.QueryResolversByIRIRequest>): _105.QueryResolversByIRIRequest;
            };
            QueryResolversByIRIResponse: {
                encode(message: _105.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolversByIRIResponse;
                fromJSON(object: any): _105.QueryResolversByIRIResponse;
                toJSON(message: _105.QueryResolversByIRIResponse): unknown;
                fromPartial(object: Partial<_105.QueryResolversByIRIResponse>): _105.QueryResolversByIRIResponse;
            };
            QueryResolversByHashRequest: {
                encode(message: _105.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolversByHashRequest;
                fromJSON(object: any): _105.QueryResolversByHashRequest;
                toJSON(message: _105.QueryResolversByHashRequest): unknown;
                fromPartial(object: Partial<_105.QueryResolversByHashRequest>): _105.QueryResolversByHashRequest;
            };
            QueryResolversByHashResponse: {
                encode(message: _105.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolversByHashResponse;
                fromJSON(object: any): _105.QueryResolversByHashResponse;
                toJSON(message: _105.QueryResolversByHashResponse): unknown;
                fromPartial(object: Partial<_105.QueryResolversByHashResponse>): _105.QueryResolversByHashResponse;
            };
            QueryResolversByURLRequest: {
                encode(message: _105.QueryResolversByURLRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolversByURLRequest;
                fromJSON(object: any): _105.QueryResolversByURLRequest;
                toJSON(message: _105.QueryResolversByURLRequest): unknown;
                fromPartial(object: Partial<_105.QueryResolversByURLRequest>): _105.QueryResolversByURLRequest;
            };
            QueryResolversByURLResponse: {
                encode(message: _105.QueryResolversByURLResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryResolversByURLResponse;
                fromJSON(object: any): _105.QueryResolversByURLResponse;
                toJSON(message: _105.QueryResolversByURLResponse): unknown;
                fromPartial(object: Partial<_105.QueryResolversByURLResponse>): _105.QueryResolversByURLResponse;
            };
            ConvertIRIToHashRequest: {
                encode(message: _105.ConvertIRIToHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ConvertIRIToHashRequest;
                fromJSON(object: any): _105.ConvertIRIToHashRequest;
                toJSON(message: _105.ConvertIRIToHashRequest): unknown;
                fromPartial(object: Partial<_105.ConvertIRIToHashRequest>): _105.ConvertIRIToHashRequest;
            };
            ConvertIRIToHashResponse: {
                encode(message: _105.ConvertIRIToHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ConvertIRIToHashResponse;
                fromJSON(object: any): _105.ConvertIRIToHashResponse;
                toJSON(message: _105.ConvertIRIToHashResponse): unknown;
                fromPartial(object: Partial<_105.ConvertIRIToHashResponse>): _105.ConvertIRIToHashResponse;
            };
            ConvertHashToIRIRequest: {
                encode(message: _105.ConvertHashToIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ConvertHashToIRIRequest;
                fromJSON(object: any): _105.ConvertHashToIRIRequest;
                toJSON(message: _105.ConvertHashToIRIRequest): unknown;
                fromPartial(object: Partial<_105.ConvertHashToIRIRequest>): _105.ConvertHashToIRIRequest;
            };
            ConvertHashToIRIResponse: {
                encode(message: _105.ConvertHashToIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ConvertHashToIRIResponse;
                fromJSON(object: any): _105.ConvertHashToIRIResponse;
                toJSON(message: _105.ConvertHashToIRIResponse): unknown;
                fromPartial(object: Partial<_105.ConvertHashToIRIResponse>): _105.ConvertHashToIRIResponse;
            };
            AnchorInfo: {
                encode(message: _105.AnchorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.AnchorInfo;
                fromJSON(object: any): _105.AnchorInfo;
                toJSON(message: _105.AnchorInfo): unknown;
                fromPartial(object: Partial<_105.AnchorInfo>): _105.AnchorInfo;
            };
            AttestationInfo: {
                encode(message: _105.AttestationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.AttestationInfo;
                fromJSON(object: any): _105.AttestationInfo;
                toJSON(message: _105.AttestationInfo): unknown;
                fromPartial(object: Partial<_105.AttestationInfo>): _105.AttestationInfo;
            };
            ResolverInfo: {
                encode(message: _105.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResolverInfo;
                fromJSON(object: any): _105.ResolverInfo;
                toJSON(message: _105.ResolverInfo): unknown;
                fromPartial(object: Partial<_105.ResolverInfo>): _105.ResolverInfo;
            };
            EventAnchor: {
                encode(message: _104.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.EventAnchor;
                fromJSON(object: any): _104.EventAnchor;
                toJSON(message: _104.EventAnchor): unknown;
                fromPartial(object: Partial<_104.EventAnchor>): _104.EventAnchor;
            };
            EventAttest: {
                encode(message: _104.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.EventAttest;
                fromJSON(object: any): _104.EventAttest;
                toJSON(message: _104.EventAttest): unknown;
                fromPartial(object: Partial<_104.EventAttest>): _104.EventAttest;
            };
            EventDefineResolver: {
                encode(message: _104.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.EventDefineResolver;
                fromJSON(object: any): _104.EventDefineResolver;
                toJSON(message: _104.EventDefineResolver): unknown;
                fromPartial(object: Partial<_104.EventDefineResolver>): _104.EventDefineResolver;
            };
            EventRegisterResolver: {
                encode(message: _104.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.EventRegisterResolver;
                fromJSON(object: any): _104.EventRegisterResolver;
                toJSON(message: _104.EventRegisterResolver): unknown;
                fromPartial(object: Partial<_104.EventRegisterResolver>): _104.EventRegisterResolver;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                LCDQueryClient: typeof _202.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _112.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _112.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _112.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _112.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _112.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _112.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _112.MsgCreate): {
                            typeUrl: string;
                            value: _112.MsgCreate;
                        };
                        put(value: _112.MsgPut): {
                            typeUrl: string;
                            value: _112.MsgPut;
                        };
                        take(value: _112.MsgTake): {
                            typeUrl: string;
                            value: _112.MsgTake;
                        };
                        updateBasketFee(value: _112.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _112.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _112.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _112.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _112.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _112.MsgUpdateDateCriteria;
                        };
                    };
                    toJSON: {
                        create(value: _112.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _112.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _112.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateBasketFee(value: _112.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateCurator(value: _112.MsgUpdateCurator): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateDateCriteria(value: _112.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _112.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _112.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _112.MsgTake;
                        };
                        updateBasketFee(value: any): {
                            typeUrl: string;
                            value: _112.MsgUpdateBasketFee;
                        };
                        updateCurator(value: any): {
                            typeUrl: string;
                            value: _112.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: any): {
                            typeUrl: string;
                            value: _112.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _112.MsgCreate): {
                            typeUrl: string;
                            value: _112.MsgCreate;
                        };
                        put(value: _112.MsgPut): {
                            typeUrl: string;
                            value: _112.MsgPut;
                        };
                        take(value: _112.MsgTake): {
                            typeUrl: string;
                            value: _112.MsgTake;
                        };
                        updateBasketFee(value: _112.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _112.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _112.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _112.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _112.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _112.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: _112.MsgCreate) => {
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
                        }) => _112.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, credits }: _112.MsgPut) => {
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
                        }) => _112.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, amount, retirementLocation, retireOnTake, retirementJurisdiction, retirementReason }: _112.MsgTake) => {
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
                        }) => _112.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: ({ authority, fee }: _112.MsgUpdateBasketFee) => {
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
                        }) => _112.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: ({ curator, denom, newCurator }: _112.MsgUpdateCurator) => {
                            curator: string;
                            denom: string;
                            new_curator: string;
                        };
                        fromAmino: ({ curator, denom, new_curator }: {
                            curator: string;
                            denom: string;
                            new_curator: string;
                        }) => _112.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: ({ authority, denom, newDateCriteria }: _112.MsgUpdateDateCriteria) => {
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
                        }) => _112.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    encode(message: _113.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.BasketCredit;
                    fromJSON(object: any): _113.BasketCredit;
                    toJSON(message: _113.BasketCredit): unknown;
                    fromPartial(object: Partial<_113.BasketCredit>): _113.BasketCredit;
                };
                DateCriteria: {
                    encode(message: _113.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.DateCriteria;
                    fromJSON(object: any): _113.DateCriteria;
                    toJSON(message: _113.DateCriteria): unknown;
                    fromPartial(object: Partial<_113.DateCriteria>): _113.DateCriteria;
                };
                MsgCreate: {
                    encode(message: _112.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgCreate;
                    fromJSON(object: any): _112.MsgCreate;
                    toJSON(message: _112.MsgCreate): unknown;
                    fromPartial(object: Partial<_112.MsgCreate>): _112.MsgCreate;
                };
                MsgCreateResponse: {
                    encode(message: _112.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgCreateResponse;
                    fromJSON(object: any): _112.MsgCreateResponse;
                    toJSON(message: _112.MsgCreateResponse): unknown;
                    fromPartial(object: Partial<_112.MsgCreateResponse>): _112.MsgCreateResponse;
                };
                MsgPut: {
                    encode(message: _112.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgPut;
                    fromJSON(object: any): _112.MsgPut;
                    toJSON(message: _112.MsgPut): unknown;
                    fromPartial(object: Partial<_112.MsgPut>): _112.MsgPut;
                };
                MsgPutResponse: {
                    encode(message: _112.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgPutResponse;
                    fromJSON(object: any): _112.MsgPutResponse;
                    toJSON(message: _112.MsgPutResponse): unknown;
                    fromPartial(object: Partial<_112.MsgPutResponse>): _112.MsgPutResponse;
                };
                MsgTake: {
                    encode(message: _112.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgTake;
                    fromJSON(object: any): _112.MsgTake;
                    toJSON(message: _112.MsgTake): unknown;
                    fromPartial(object: Partial<_112.MsgTake>): _112.MsgTake;
                };
                MsgTakeResponse: {
                    encode(message: _112.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgTakeResponse;
                    fromJSON(object: any): _112.MsgTakeResponse;
                    toJSON(message: _112.MsgTakeResponse): unknown;
                    fromPartial(object: Partial<_112.MsgTakeResponse>): _112.MsgTakeResponse;
                };
                MsgUpdateBasketFee: {
                    encode(message: _112.MsgUpdateBasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgUpdateBasketFee;
                    fromJSON(object: any): _112.MsgUpdateBasketFee;
                    toJSON(message: _112.MsgUpdateBasketFee): unknown;
                    fromPartial(object: Partial<_112.MsgUpdateBasketFee>): _112.MsgUpdateBasketFee;
                };
                MsgUpdateBasketFeeResponse: {
                    encode(_: _112.MsgUpdateBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgUpdateBasketFeeResponse;
                    fromJSON(_: any): _112.MsgUpdateBasketFeeResponse;
                    toJSON(_: _112.MsgUpdateBasketFeeResponse): unknown;
                    fromPartial(_: Partial<_112.MsgUpdateBasketFeeResponse>): _112.MsgUpdateBasketFeeResponse;
                };
                MsgUpdateCurator: {
                    encode(message: _112.MsgUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgUpdateCurator;
                    fromJSON(object: any): _112.MsgUpdateCurator;
                    toJSON(message: _112.MsgUpdateCurator): unknown;
                    fromPartial(object: Partial<_112.MsgUpdateCurator>): _112.MsgUpdateCurator;
                };
                MsgUpdateCuratorResponse: {
                    encode(_: _112.MsgUpdateCuratorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgUpdateCuratorResponse;
                    fromJSON(_: any): _112.MsgUpdateCuratorResponse;
                    toJSON(_: _112.MsgUpdateCuratorResponse): unknown;
                    fromPartial(_: Partial<_112.MsgUpdateCuratorResponse>): _112.MsgUpdateCuratorResponse;
                };
                MsgUpdateDateCriteria: {
                    encode(message: _112.MsgUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgUpdateDateCriteria;
                    fromJSON(object: any): _112.MsgUpdateDateCriteria;
                    toJSON(message: _112.MsgUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_112.MsgUpdateDateCriteria>): _112.MsgUpdateDateCriteria;
                };
                MsgUpdateDateCriteriaResponse: {
                    encode(_: _112.MsgUpdateDateCriteriaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.MsgUpdateDateCriteriaResponse;
                    fromJSON(_: any): _112.MsgUpdateDateCriteriaResponse;
                    toJSON(_: _112.MsgUpdateDateCriteriaResponse): unknown;
                    fromPartial(_: Partial<_112.MsgUpdateDateCriteriaResponse>): _112.MsgUpdateDateCriteriaResponse;
                };
                Basket: {
                    encode(message: _111.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.Basket;
                    fromJSON(object: any): _111.Basket;
                    toJSON(message: _111.Basket): unknown;
                    fromPartial(object: Partial<_111.Basket>): _111.Basket;
                };
                BasketClass: {
                    encode(message: _111.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.BasketClass;
                    fromJSON(object: any): _111.BasketClass;
                    toJSON(message: _111.BasketClass): unknown;
                    fromPartial(object: Partial<_111.BasketClass>): _111.BasketClass;
                };
                BasketBalance: {
                    encode(message: _111.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.BasketBalance;
                    fromJSON(object: any): _111.BasketBalance;
                    toJSON(message: _111.BasketBalance): unknown;
                    fromPartial(object: Partial<_111.BasketBalance>): _111.BasketBalance;
                };
                BasketFee: {
                    encode(message: _111.BasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.BasketFee;
                    fromJSON(object: any): _111.BasketFee;
                    toJSON(message: _111.BasketFee): unknown;
                    fromPartial(object: Partial<_111.BasketFee>): _111.BasketFee;
                };
                QueryBasketRequest: {
                    encode(message: _110.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketRequest;
                    fromJSON(object: any): _110.QueryBasketRequest;
                    toJSON(message: _110.QueryBasketRequest): unknown;
                    fromPartial(object: Partial<_110.QueryBasketRequest>): _110.QueryBasketRequest;
                };
                QueryBasketResponse: {
                    encode(message: _110.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketResponse;
                    fromJSON(object: any): _110.QueryBasketResponse;
                    toJSON(message: _110.QueryBasketResponse): unknown;
                    fromPartial(object: Partial<_110.QueryBasketResponse>): _110.QueryBasketResponse;
                };
                QueryBasketsRequest: {
                    encode(message: _110.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketsRequest;
                    fromJSON(object: any): _110.QueryBasketsRequest;
                    toJSON(message: _110.QueryBasketsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryBasketsRequest>): _110.QueryBasketsRequest;
                };
                QueryBasketsResponse: {
                    encode(message: _110.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketsResponse;
                    fromJSON(object: any): _110.QueryBasketsResponse;
                    toJSON(message: _110.QueryBasketsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryBasketsResponse>): _110.QueryBasketsResponse;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _110.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketBalancesRequest;
                    fromJSON(object: any): _110.QueryBasketBalancesRequest;
                    toJSON(message: _110.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: Partial<_110.QueryBasketBalancesRequest>): _110.QueryBasketBalancesRequest;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _110.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketBalancesResponse;
                    fromJSON(object: any): _110.QueryBasketBalancesResponse;
                    toJSON(message: _110.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: Partial<_110.QueryBasketBalancesResponse>): _110.QueryBasketBalancesResponse;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _110.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketBalanceRequest;
                    fromJSON(object: any): _110.QueryBasketBalanceRequest;
                    toJSON(message: _110.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: Partial<_110.QueryBasketBalanceRequest>): _110.QueryBasketBalanceRequest;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _110.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketBalanceResponse;
                    fromJSON(object: any): _110.QueryBasketBalanceResponse;
                    toJSON(message: _110.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: Partial<_110.QueryBasketBalanceResponse>): _110.QueryBasketBalanceResponse;
                };
                BasketInfo: {
                    encode(message: _110.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.BasketInfo;
                    fromJSON(object: any): _110.BasketInfo;
                    toJSON(message: _110.BasketInfo): unknown;
                    fromPartial(object: Partial<_110.BasketInfo>): _110.BasketInfo;
                };
                BasketBalanceInfo: {
                    encode(message: _110.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.BasketBalanceInfo;
                    fromJSON(object: any): _110.BasketBalanceInfo;
                    toJSON(message: _110.BasketBalanceInfo): unknown;
                    fromPartial(object: Partial<_110.BasketBalanceInfo>): _110.BasketBalanceInfo;
                };
                QueryBasketFeeRequest: {
                    encode(_: _110.QueryBasketFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketFeeRequest;
                    fromJSON(_: any): _110.QueryBasketFeeRequest;
                    toJSON(_: _110.QueryBasketFeeRequest): unknown;
                    fromPartial(_: Partial<_110.QueryBasketFeeRequest>): _110.QueryBasketFeeRequest;
                };
                QueryBasketFeeResponse: {
                    encode(message: _110.QueryBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryBasketFeeResponse;
                    fromJSON(object: any): _110.QueryBasketFeeResponse;
                    toJSON(message: _110.QueryBasketFeeResponse): unknown;
                    fromPartial(object: Partial<_110.QueryBasketFeeResponse>): _110.QueryBasketFeeResponse;
                };
                EventCreate: {
                    encode(message: _109.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.EventCreate;
                    fromJSON(object: any): _109.EventCreate;
                    toJSON(message: _109.EventCreate): unknown;
                    fromPartial(object: Partial<_109.EventCreate>): _109.EventCreate;
                };
                EventPut: {
                    encode(message: _109.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.EventPut;
                    fromJSON(object: any): _109.EventPut;
                    toJSON(message: _109.EventPut): unknown;
                    fromPartial(object: Partial<_109.EventPut>): _109.EventPut;
                };
                EventTake: {
                    encode(message: _109.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.EventTake;
                    fromJSON(object: any): _109.EventTake;
                    toJSON(message: _109.EventTake): unknown;
                    fromPartial(object: Partial<_109.EventTake>): _109.EventTake;
                };
                EventUpdateCurator: {
                    encode(message: _109.EventUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.EventUpdateCurator;
                    fromJSON(object: any): _109.EventUpdateCurator;
                    toJSON(message: _109.EventUpdateCurator): unknown;
                    fromPartial(object: Partial<_109.EventUpdateCurator>): _109.EventUpdateCurator;
                };
                EventUpdateDateCriteria: {
                    encode(message: _109.EventUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.EventUpdateDateCriteria;
                    fromJSON(object: any): _109.EventUpdateDateCriteria;
                    toJSON(message: _109.EventUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_109.EventUpdateDateCriteria>): _109.EventUpdateDateCriteria;
                };
            };
        }
        namespace marketplace {
            const v1: {
                LCDQueryClient: typeof _203.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _117.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _117.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _117.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _117.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _117.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _117.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _117.MsgSell): {
                            typeUrl: string;
                            value: _117.MsgSell;
                        };
                        updateSellOrders(value: _117.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _117.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _117.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _117.MsgCancelSellOrder;
                        };
                        buyDirect(value: _117.MsgBuyDirect): {
                            typeUrl: string;
                            value: _117.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _117.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _117.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _117.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _117.MsgRemoveAllowedDenom;
                        };
                    };
                    toJSON: {
                        sell(value: _117.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _117.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _117.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _117.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                        addAllowedDenom(value: _117.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                        removeAllowedDenom(value: _117.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _117.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _117.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _117.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _117.MsgBuyDirect;
                        };
                        addAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _117.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _117.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _117.MsgSell): {
                            typeUrl: string;
                            value: _117.MsgSell;
                        };
                        updateSellOrders(value: _117.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _117.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _117.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _117.MsgCancelSellOrder;
                        };
                        buyDirect(value: _117.MsgBuyDirect): {
                            typeUrl: string;
                            value: _117.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _117.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _117.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _117.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _117.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: ({ seller, orders }: _117.MsgSell) => {
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
                        }) => _117.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: ({ seller, updates }: _117.MsgUpdateSellOrders) => {
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
                        }) => _117.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: ({ seller, sellOrderId }: _117.MsgCancelSellOrder) => {
                            seller: string;
                            sell_order_id: string;
                        };
                        fromAmino: ({ seller, sell_order_id }: {
                            seller: string;
                            sell_order_id: string;
                        }) => _117.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: ({ buyer, orders }: _117.MsgBuyDirect) => {
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
                        }) => _117.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: ({ authority, bankDenom, displayDenom, exponent }: _117.MsgAddAllowedDenom) => {
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
                        }) => _117.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: ({ authority, denom }: _117.MsgRemoveAllowedDenom) => {
                            authority: string;
                            denom: string;
                        };
                        fromAmino: ({ authority, denom }: {
                            authority: string;
                            denom: string;
                        }) => _117.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _118.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.AllowDenomProposal;
                    fromJSON(object: any): _118.AllowDenomProposal;
                    toJSON(message: _118.AllowDenomProposal): unknown;
                    fromPartial(object: Partial<_118.AllowDenomProposal>): _118.AllowDenomProposal;
                };
                MsgSell: {
                    encode(message: _117.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgSell;
                    fromJSON(object: any): _117.MsgSell;
                    toJSON(message: _117.MsgSell): unknown;
                    fromPartial(object: Partial<_117.MsgSell>): _117.MsgSell;
                };
                MsgSell_Order: {
                    encode(message: _117.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgSell_Order;
                    fromJSON(object: any): _117.MsgSell_Order;
                    toJSON(message: _117.MsgSell_Order): unknown;
                    fromPartial(object: Partial<_117.MsgSell_Order>): _117.MsgSell_Order;
                };
                MsgSellResponse: {
                    encode(message: _117.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgSellResponse;
                    fromJSON(object: any): _117.MsgSellResponse;
                    toJSON(message: _117.MsgSellResponse): unknown;
                    fromPartial(object: Partial<_117.MsgSellResponse>): _117.MsgSellResponse;
                };
                MsgUpdateSellOrders: {
                    encode(message: _117.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgUpdateSellOrders;
                    fromJSON(object: any): _117.MsgUpdateSellOrders;
                    toJSON(message: _117.MsgUpdateSellOrders): unknown;
                    fromPartial(object: Partial<_117.MsgUpdateSellOrders>): _117.MsgUpdateSellOrders;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _117.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _117.MsgUpdateSellOrders_Update;
                    toJSON(message: _117.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: Partial<_117.MsgUpdateSellOrders_Update>): _117.MsgUpdateSellOrders_Update;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _117.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _117.MsgUpdateSellOrdersResponse;
                    toJSON(_: _117.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: Partial<_117.MsgUpdateSellOrdersResponse>): _117.MsgUpdateSellOrdersResponse;
                };
                MsgCancelSellOrder: {
                    encode(message: _117.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgCancelSellOrder;
                    fromJSON(object: any): _117.MsgCancelSellOrder;
                    toJSON(message: _117.MsgCancelSellOrder): unknown;
                    fromPartial(object: Partial<_117.MsgCancelSellOrder>): _117.MsgCancelSellOrder;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _117.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _117.MsgCancelSellOrderResponse;
                    toJSON(_: _117.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: Partial<_117.MsgCancelSellOrderResponse>): _117.MsgCancelSellOrderResponse;
                };
                MsgBuyDirect: {
                    encode(message: _117.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgBuyDirect;
                    fromJSON(object: any): _117.MsgBuyDirect;
                    toJSON(message: _117.MsgBuyDirect): unknown;
                    fromPartial(object: Partial<_117.MsgBuyDirect>): _117.MsgBuyDirect;
                };
                MsgBuyDirect_Order: {
                    encode(message: _117.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgBuyDirect_Order;
                    fromJSON(object: any): _117.MsgBuyDirect_Order;
                    toJSON(message: _117.MsgBuyDirect_Order): unknown;
                    fromPartial(object: Partial<_117.MsgBuyDirect_Order>): _117.MsgBuyDirect_Order;
                };
                MsgBuyDirectResponse: {
                    encode(_: _117.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgBuyDirectResponse;
                    fromJSON(_: any): _117.MsgBuyDirectResponse;
                    toJSON(_: _117.MsgBuyDirectResponse): unknown;
                    fromPartial(_: Partial<_117.MsgBuyDirectResponse>): _117.MsgBuyDirectResponse;
                };
                MsgAddAllowedDenom: {
                    encode(message: _117.MsgAddAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgAddAllowedDenom;
                    fromJSON(object: any): _117.MsgAddAllowedDenom;
                    toJSON(message: _117.MsgAddAllowedDenom): unknown;
                    fromPartial(object: Partial<_117.MsgAddAllowedDenom>): _117.MsgAddAllowedDenom;
                };
                MsgAddAllowedDenomResponse: {
                    encode(_: _117.MsgAddAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgAddAllowedDenomResponse;
                    fromJSON(_: any): _117.MsgAddAllowedDenomResponse;
                    toJSON(_: _117.MsgAddAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_117.MsgAddAllowedDenomResponse>): _117.MsgAddAllowedDenomResponse;
                };
                MsgRemoveAllowedDenom: {
                    encode(message: _117.MsgRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgRemoveAllowedDenom;
                    fromJSON(object: any): _117.MsgRemoveAllowedDenom;
                    toJSON(message: _117.MsgRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_117.MsgRemoveAllowedDenom>): _117.MsgRemoveAllowedDenom;
                };
                MsgRemoveAllowedDenomResponse: {
                    encode(_: _117.MsgRemoveAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgRemoveAllowedDenomResponse;
                    fromJSON(_: any): _117.MsgRemoveAllowedDenomResponse;
                    toJSON(_: _117.MsgRemoveAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_117.MsgRemoveAllowedDenomResponse>): _117.MsgRemoveAllowedDenomResponse;
                };
                SellOrder: {
                    encode(message: _116.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.SellOrder;
                    fromJSON(object: any): _116.SellOrder;
                    toJSON(message: _116.SellOrder): unknown;
                    fromPartial(object: Partial<_116.SellOrder>): _116.SellOrder;
                };
                AllowedDenom: {
                    encode(message: _116.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.AllowedDenom;
                    fromJSON(object: any): _116.AllowedDenom;
                    toJSON(message: _116.AllowedDenom): unknown;
                    fromPartial(object: Partial<_116.AllowedDenom>): _116.AllowedDenom;
                };
                Market: {
                    encode(message: _116.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.Market;
                    fromJSON(object: any): _116.Market;
                    toJSON(message: _116.Market): unknown;
                    fromPartial(object: Partial<_116.Market>): _116.Market;
                };
                QuerySellOrderRequest: {
                    encode(message: _115.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrderRequest;
                    fromJSON(object: any): _115.QuerySellOrderRequest;
                    toJSON(message: _115.QuerySellOrderRequest): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrderRequest>): _115.QuerySellOrderRequest;
                };
                QuerySellOrderResponse: {
                    encode(message: _115.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrderResponse;
                    fromJSON(object: any): _115.QuerySellOrderResponse;
                    toJSON(message: _115.QuerySellOrderResponse): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrderResponse>): _115.QuerySellOrderResponse;
                };
                QuerySellOrdersRequest: {
                    encode(message: _115.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrdersRequest;
                    fromJSON(object: any): _115.QuerySellOrdersRequest;
                    toJSON(message: _115.QuerySellOrdersRequest): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrdersRequest>): _115.QuerySellOrdersRequest;
                };
                QuerySellOrdersResponse: {
                    encode(message: _115.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrdersResponse;
                    fromJSON(object: any): _115.QuerySellOrdersResponse;
                    toJSON(message: _115.QuerySellOrdersResponse): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrdersResponse>): _115.QuerySellOrdersResponse;
                };
                QuerySellOrdersByBatchRequest: {
                    encode(message: _115.QuerySellOrdersByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrdersByBatchRequest;
                    fromJSON(object: any): _115.QuerySellOrdersByBatchRequest;
                    toJSON(message: _115.QuerySellOrdersByBatchRequest): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrdersByBatchRequest>): _115.QuerySellOrdersByBatchRequest;
                };
                QuerySellOrdersByBatchResponse: {
                    encode(message: _115.QuerySellOrdersByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrdersByBatchResponse;
                    fromJSON(object: any): _115.QuerySellOrdersByBatchResponse;
                    toJSON(message: _115.QuerySellOrdersByBatchResponse): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrdersByBatchResponse>): _115.QuerySellOrdersByBatchResponse;
                };
                QuerySellOrdersBySellerRequest: {
                    encode(message: _115.QuerySellOrdersBySellerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrdersBySellerRequest;
                    fromJSON(object: any): _115.QuerySellOrdersBySellerRequest;
                    toJSON(message: _115.QuerySellOrdersBySellerRequest): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrdersBySellerRequest>): _115.QuerySellOrdersBySellerRequest;
                };
                QuerySellOrdersBySellerResponse: {
                    encode(message: _115.QuerySellOrdersBySellerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QuerySellOrdersBySellerResponse;
                    fromJSON(object: any): _115.QuerySellOrdersBySellerResponse;
                    toJSON(message: _115.QuerySellOrdersBySellerResponse): unknown;
                    fromPartial(object: Partial<_115.QuerySellOrdersBySellerResponse>): _115.QuerySellOrdersBySellerResponse;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _115.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _115.QueryAllowedDenomsRequest;
                    toJSON(message: _115.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryAllowedDenomsRequest>): _115.QueryAllowedDenomsRequest;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _115.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _115.QueryAllowedDenomsResponse;
                    toJSON(message: _115.QueryAllowedDenomsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryAllowedDenomsResponse>): _115.QueryAllowedDenomsResponse;
                };
                SellOrderInfo: {
                    encode(message: _115.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.SellOrderInfo;
                    fromJSON(object: any): _115.SellOrderInfo;
                    toJSON(message: _115.SellOrderInfo): unknown;
                    fromPartial(object: Partial<_115.SellOrderInfo>): _115.SellOrderInfo;
                };
                EventSell: {
                    encode(message: _114.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventSell;
                    fromJSON(object: any): _114.EventSell;
                    toJSON(message: _114.EventSell): unknown;
                    fromPartial(object: Partial<_114.EventSell>): _114.EventSell;
                };
                EventBuyDirect: {
                    encode(message: _114.EventBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventBuyDirect;
                    fromJSON(object: any): _114.EventBuyDirect;
                    toJSON(message: _114.EventBuyDirect): unknown;
                    fromPartial(object: Partial<_114.EventBuyDirect>): _114.EventBuyDirect;
                };
                EventUpdateSellOrder: {
                    encode(message: _114.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventUpdateSellOrder;
                    fromJSON(object: any): _114.EventUpdateSellOrder;
                    toJSON(message: _114.EventUpdateSellOrder): unknown;
                    fromPartial(object: Partial<_114.EventUpdateSellOrder>): _114.EventUpdateSellOrder;
                };
                EventCancelSellOrder: {
                    encode(message: _114.EventCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventCancelSellOrder;
                    fromJSON(object: any): _114.EventCancelSellOrder;
                    toJSON(message: _114.EventCancelSellOrder): unknown;
                    fromPartial(object: Partial<_114.EventCancelSellOrder>): _114.EventCancelSellOrder;
                };
                EventAllowDenom: {
                    encode(message: _114.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventAllowDenom;
                    fromJSON(object: any): _114.EventAllowDenom;
                    toJSON(message: _114.EventAllowDenom): unknown;
                    fromPartial(object: Partial<_114.EventAllowDenom>): _114.EventAllowDenom;
                };
                EventRemoveAllowedDenom: {
                    encode(message: _114.EventRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventRemoveAllowedDenom;
                    fromJSON(object: any): _114.EventRemoveAllowedDenom;
                    toJSON(message: _114.EventRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_114.EventRemoveAllowedDenom>): _114.EventRemoveAllowedDenom;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _119.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _119.BuyOrderSellOrderMatch;
                    toJSON(message: _119.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: Partial<_119.BuyOrderSellOrderMatch>): _119.BuyOrderSellOrderMatch;
                };
                BuyOrderClassSelector: {
                    encode(message: _119.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BuyOrderClassSelector;
                    fromJSON(object: any): _119.BuyOrderClassSelector;
                    toJSON(message: _119.BuyOrderClassSelector): unknown;
                    fromPartial(object: Partial<_119.BuyOrderClassSelector>): _119.BuyOrderClassSelector;
                };
                BuyOrderProjectSelector: {
                    encode(message: _119.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BuyOrderProjectSelector;
                    fromJSON(object: any): _119.BuyOrderProjectSelector;
                    toJSON(message: _119.BuyOrderProjectSelector): unknown;
                    fromPartial(object: Partial<_119.BuyOrderProjectSelector>): _119.BuyOrderProjectSelector;
                };
                BuyOrderBatchSelector: {
                    encode(message: _119.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BuyOrderBatchSelector;
                    fromJSON(object: any): _119.BuyOrderBatchSelector;
                    toJSON(message: _119.BuyOrderBatchSelector): unknown;
                    fromPartial(object: Partial<_119.BuyOrderBatchSelector>): _119.BuyOrderBatchSelector;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _123.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _123.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _123.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _123.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _123.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _123.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _123.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _123.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _123.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _123.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _123.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _123.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _123.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _123.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _123.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _123.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _123.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _123.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _123.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _123.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _123.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _123.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _123.MsgCreateClass): {
                        typeUrl: string;
                        value: _123.MsgCreateClass;
                    };
                    createProject(value: _123.MsgCreateProject): {
                        typeUrl: string;
                        value: _123.MsgCreateProject;
                    };
                    createBatch(value: _123.MsgCreateBatch): {
                        typeUrl: string;
                        value: _123.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _123.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _123.MsgMintBatchCredits;
                    };
                    sealBatch(value: _123.MsgSealBatch): {
                        typeUrl: string;
                        value: _123.MsgSealBatch;
                    };
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: _123.MsgSend;
                    };
                    retire(value: _123.MsgRetire): {
                        typeUrl: string;
                        value: _123.MsgRetire;
                    };
                    cancel(value: _123.MsgCancel): {
                        typeUrl: string;
                        value: _123.MsgCancel;
                    };
                    updateClassAdmin(value: _123.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _123.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _123.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _123.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _123.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _123.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _123.MsgBridge): {
                        typeUrl: string;
                        value: _123.MsgBridge;
                    };
                    bridgeReceive(value: _123.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _123.MsgBridgeReceive;
                    };
                    addCreditType(value: _123.MsgAddCreditType): {
                        typeUrl: string;
                        value: _123.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _123.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _123.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _123.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _123.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _123.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _123.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _123.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _123.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _123.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _123.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _123.MsgRemoveAllowedBridgeChain;
                    };
                };
                toJSON: {
                    createClass(value: _123.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _123.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _123.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _123.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _123.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _123.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _123.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _123.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _123.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _123.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _123.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _123.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBatchMetadata(value: _123.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridge(value: _123.MsgBridge): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridgeReceive(value: _123.MsgBridgeReceive): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCreditType(value: _123.MsgAddCreditType): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setClassCreatorAllowlist(value: _123.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addClassCreator(value: _123.MsgAddClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeClassCreator(value: _123.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassFee(value: _123.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addAllowedBridgeChain(value: _123.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAllowedBridgeChain(value: _123.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _123.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _123.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _123.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _123.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _123.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _123.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _123.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _123.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateBatchMetadata;
                    };
                    bridge(value: any): {
                        typeUrl: string;
                        value: _123.MsgBridge;
                    };
                    bridgeReceive(value: any): {
                        typeUrl: string;
                        value: _123.MsgBridgeReceive;
                    };
                    addCreditType(value: any): {
                        typeUrl: string;
                        value: _123.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: any): {
                        typeUrl: string;
                        value: _123.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: any): {
                        typeUrl: string;
                        value: _123.MsgAddClassCreator;
                    };
                    removeClassCreator(value: any): {
                        typeUrl: string;
                        value: _123.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _123.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _123.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _123.MsgCreateClass): {
                        typeUrl: string;
                        value: _123.MsgCreateClass;
                    };
                    createProject(value: _123.MsgCreateProject): {
                        typeUrl: string;
                        value: _123.MsgCreateProject;
                    };
                    createBatch(value: _123.MsgCreateBatch): {
                        typeUrl: string;
                        value: _123.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _123.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _123.MsgMintBatchCredits;
                    };
                    sealBatch(value: _123.MsgSealBatch): {
                        typeUrl: string;
                        value: _123.MsgSealBatch;
                    };
                    send(value: _123.MsgSend): {
                        typeUrl: string;
                        value: _123.MsgSend;
                    };
                    retire(value: _123.MsgRetire): {
                        typeUrl: string;
                        value: _123.MsgRetire;
                    };
                    cancel(value: _123.MsgCancel): {
                        typeUrl: string;
                        value: _123.MsgCancel;
                    };
                    updateClassAdmin(value: _123.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _123.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _123.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _123.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _123.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _123.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _123.MsgBridge): {
                        typeUrl: string;
                        value: _123.MsgBridge;
                    };
                    bridgeReceive(value: _123.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _123.MsgBridgeReceive;
                    };
                    addCreditType(value: _123.MsgAddCreditType): {
                        typeUrl: string;
                        value: _123.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _123.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _123.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _123.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _123.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _123.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _123.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _123.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _123.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _123.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _123.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _123.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _123.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: _123.MsgCreateClass) => {
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
                    }) => _123.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata, jurisdiction, referenceId }: _123.MsgCreateProject) => {
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
                    }) => _123.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx }: _123.MsgCreateBatch) => {
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
                    }) => _123.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, issuance, originTx }: _123.MsgMintBatchCredits) => {
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
                    }) => _123.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom }: _123.MsgSealBatch) => {
                        issuer: string;
                        batch_denom: string;
                    };
                    fromAmino: ({ issuer, batch_denom }: {
                        issuer: string;
                        batch_denom: string;
                    }) => _123.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _123.MsgSend) => {
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
                    }) => _123.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ owner, credits, jurisdiction, reason }: _123.MsgRetire) => {
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
                    }) => _123.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ owner, credits, reason }: _123.MsgCancel) => {
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
                    }) => _123.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _123.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _123.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, addIssuers, removeIssuers }: _123.MsgUpdateClassIssuers) => {
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
                    }) => _123.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newMetadata }: _123.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        new_metadata: string;
                    };
                    fromAmino: ({ admin, class_id, new_metadata }: {
                        admin: string;
                        class_id: string;
                        new_metadata: string;
                    }) => _123.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, projectId, newAdmin }: _123.MsgUpdateProjectAdmin) => {
                        admin: string;
                        project_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, project_id, new_admin }: {
                        admin: string;
                        project_id: string;
                        new_admin: string;
                    }) => _123.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, projectId, newMetadata }: _123.MsgUpdateProjectMetadata) => {
                        admin: string;
                        project_id: string;
                        new_metadata: string;
                    };
                    fromAmino: ({ admin, project_id, new_metadata }: {
                        admin: string;
                        project_id: string;
                        new_metadata: string;
                    }) => _123.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, newMetadata }: _123.MsgUpdateBatchMetadata) => {
                        issuer: string;
                        batch_denom: string;
                        new_metadata: string;
                    };
                    fromAmino: ({ issuer, batch_denom, new_metadata }: {
                        issuer: string;
                        batch_denom: string;
                        new_metadata: string;
                    }) => _123.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: ({ owner, target, recipient, credits }: _123.MsgBridge) => {
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
                    }) => _123.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, project, batch, originTx }: _123.MsgBridgeReceive) => {
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
                    }) => _123.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: ({ authority, creditType }: _123.MsgAddCreditType) => {
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
                    }) => _123.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: ({ authority, enabled }: _123.MsgSetClassCreatorAllowlist) => {
                        authority: string;
                        enabled: boolean;
                    };
                    fromAmino: ({ authority, enabled }: {
                        authority: string;
                        enabled: boolean;
                    }) => _123.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: ({ authority, creator }: _123.MsgAddClassCreator) => {
                        authority: string;
                        creator: string;
                    };
                    fromAmino: ({ authority, creator }: {
                        authority: string;
                        creator: string;
                    }) => _123.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: ({ authority, creator }: _123.MsgRemoveClassCreator) => {
                        authority: string;
                        creator: string;
                    };
                    fromAmino: ({ authority, creator }: {
                        authority: string;
                        creator: string;
                    }) => _123.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: ({ authority, fee }: _123.MsgUpdateClassFee) => {
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
                    }) => _123.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: ({ authority, chainName }: _123.MsgAddAllowedBridgeChain) => {
                        authority: string;
                        chain_name: string;
                    };
                    fromAmino: ({ authority, chain_name }: {
                        authority: string;
                        chain_name: string;
                    }) => _123.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: ({ authority, chainName }: _123.MsgRemoveAllowedBridgeChain) => {
                        authority: string;
                        chain_name: string;
                    };
                    fromAmino: ({ authority, chain_name }: {
                        authority: string;
                        chain_name: string;
                    }) => _123.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.Params;
                fromJSON(object: any): _124.Params;
                toJSON(message: _124.Params): unknown;
                fromPartial(object: Partial<_124.Params>): _124.Params;
            };
            Credits: {
                encode(message: _124.Credits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.Credits;
                fromJSON(object: any): _124.Credits;
                toJSON(message: _124.Credits): unknown;
                fromPartial(object: Partial<_124.Credits>): _124.Credits;
            };
            BatchIssuance: {
                encode(message: _124.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.BatchIssuance;
                fromJSON(object: any): _124.BatchIssuance;
                toJSON(message: _124.BatchIssuance): unknown;
                fromPartial(object: Partial<_124.BatchIssuance>): _124.BatchIssuance;
            };
            OriginTx: {
                encode(message: _124.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.OriginTx;
                fromJSON(object: any): _124.OriginTx;
                toJSON(message: _124.OriginTx): unknown;
                fromPartial(object: Partial<_124.OriginTx>): _124.OriginTx;
            };
            CreditTypeProposal: {
                encode(message: _124.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.CreditTypeProposal;
                fromJSON(object: any): _124.CreditTypeProposal;
                toJSON(message: _124.CreditTypeProposal): unknown;
                fromPartial(object: Partial<_124.CreditTypeProposal>): _124.CreditTypeProposal;
            };
            AllowedDenom: {
                encode(message: _124.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.AllowedDenom;
                fromJSON(object: any): _124.AllowedDenom;
                toJSON(message: _124.AllowedDenom): unknown;
                fromPartial(object: Partial<_124.AllowedDenom>): _124.AllowedDenom;
            };
            MsgAddCreditType: {
                encode(message: _123.MsgAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgAddCreditType;
                fromJSON(object: any): _123.MsgAddCreditType;
                toJSON(message: _123.MsgAddCreditType): unknown;
                fromPartial(object: Partial<_123.MsgAddCreditType>): _123.MsgAddCreditType;
            };
            MsgAddCreditTypeResponse: {
                encode(_: _123.MsgAddCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgAddCreditTypeResponse;
                fromJSON(_: any): _123.MsgAddCreditTypeResponse;
                toJSON(_: _123.MsgAddCreditTypeResponse): unknown;
                fromPartial(_: Partial<_123.MsgAddCreditTypeResponse>): _123.MsgAddCreditTypeResponse;
            };
            MsgCreateClass: {
                encode(message: _123.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCreateClass;
                fromJSON(object: any): _123.MsgCreateClass;
                toJSON(message: _123.MsgCreateClass): unknown;
                fromPartial(object: Partial<_123.MsgCreateClass>): _123.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _123.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCreateClassResponse;
                fromJSON(object: any): _123.MsgCreateClassResponse;
                toJSON(message: _123.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_123.MsgCreateClassResponse>): _123.MsgCreateClassResponse;
            };
            MsgCreateProject: {
                encode(message: _123.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCreateProject;
                fromJSON(object: any): _123.MsgCreateProject;
                toJSON(message: _123.MsgCreateProject): unknown;
                fromPartial(object: Partial<_123.MsgCreateProject>): _123.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(message: _123.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCreateProjectResponse;
                fromJSON(object: any): _123.MsgCreateProjectResponse;
                toJSON(message: _123.MsgCreateProjectResponse): unknown;
                fromPartial(object: Partial<_123.MsgCreateProjectResponse>): _123.MsgCreateProjectResponse;
            };
            MsgCreateBatch: {
                encode(message: _123.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCreateBatch;
                fromJSON(object: any): _123.MsgCreateBatch;
                toJSON(message: _123.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_123.MsgCreateBatch>): _123.MsgCreateBatch;
            };
            MsgCreateBatchResponse: {
                encode(message: _123.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCreateBatchResponse;
                fromJSON(object: any): _123.MsgCreateBatchResponse;
                toJSON(message: _123.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_123.MsgCreateBatchResponse>): _123.MsgCreateBatchResponse;
            };
            MsgMintBatchCredits: {
                encode(message: _123.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgMintBatchCredits;
                fromJSON(object: any): _123.MsgMintBatchCredits;
                toJSON(message: _123.MsgMintBatchCredits): unknown;
                fromPartial(object: Partial<_123.MsgMintBatchCredits>): _123.MsgMintBatchCredits;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _123.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _123.MsgMintBatchCreditsResponse;
                toJSON(_: _123.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: Partial<_123.MsgMintBatchCreditsResponse>): _123.MsgMintBatchCreditsResponse;
            };
            MsgSealBatch: {
                encode(message: _123.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSealBatch;
                fromJSON(object: any): _123.MsgSealBatch;
                toJSON(message: _123.MsgSealBatch): unknown;
                fromPartial(object: Partial<_123.MsgSealBatch>): _123.MsgSealBatch;
            };
            MsgSealBatchResponse: {
                encode(_: _123.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSealBatchResponse;
                fromJSON(_: any): _123.MsgSealBatchResponse;
                toJSON(_: _123.MsgSealBatchResponse): unknown;
                fromPartial(_: Partial<_123.MsgSealBatchResponse>): _123.MsgSealBatchResponse;
            };
            MsgSend: {
                encode(message: _123.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSend;
                fromJSON(object: any): _123.MsgSend;
                toJSON(message: _123.MsgSend): unknown;
                fromPartial(object: Partial<_123.MsgSend>): _123.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _123.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSend_SendCredits;
                fromJSON(object: any): _123.MsgSend_SendCredits;
                toJSON(message: _123.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_123.MsgSend_SendCredits>): _123.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _123.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSendResponse;
                fromJSON(_: any): _123.MsgSendResponse;
                toJSON(_: _123.MsgSendResponse): unknown;
                fromPartial(_: Partial<_123.MsgSendResponse>): _123.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _123.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgRetire;
                fromJSON(object: any): _123.MsgRetire;
                toJSON(message: _123.MsgRetire): unknown;
                fromPartial(object: Partial<_123.MsgRetire>): _123.MsgRetire;
            };
            MsgRetireResponse: {
                encode(_: _123.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgRetireResponse;
                fromJSON(_: any): _123.MsgRetireResponse;
                toJSON(_: _123.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_123.MsgRetireResponse>): _123.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _123.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCancel;
                fromJSON(object: any): _123.MsgCancel;
                toJSON(message: _123.MsgCancel): unknown;
                fromPartial(object: Partial<_123.MsgCancel>): _123.MsgCancel;
            };
            MsgCancelResponse: {
                encode(_: _123.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgCancelResponse;
                fromJSON(_: any): _123.MsgCancelResponse;
                toJSON(_: _123.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_123.MsgCancelResponse>): _123.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _123.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassAdmin;
                fromJSON(object: any): _123.MsgUpdateClassAdmin;
                toJSON(message: _123.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_123.MsgUpdateClassAdmin>): _123.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _123.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _123.MsgUpdateClassAdminResponse;
                toJSON(_: _123.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateClassAdminResponse>): _123.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _123.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassIssuers;
                fromJSON(object: any): _123.MsgUpdateClassIssuers;
                toJSON(message: _123.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_123.MsgUpdateClassIssuers>): _123.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _123.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _123.MsgUpdateClassIssuersResponse;
                toJSON(_: _123.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateClassIssuersResponse>): _123.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _123.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassMetadata;
                fromJSON(object: any): _123.MsgUpdateClassMetadata;
                toJSON(message: _123.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_123.MsgUpdateClassMetadata>): _123.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _123.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _123.MsgUpdateClassMetadataResponse;
                toJSON(_: _123.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateClassMetadataResponse>): _123.MsgUpdateClassMetadataResponse;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _123.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateProjectAdmin;
                fromJSON(object: any): _123.MsgUpdateProjectAdmin;
                toJSON(message: _123.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_123.MsgUpdateProjectAdmin>): _123.MsgUpdateProjectAdmin;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _123.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _123.MsgUpdateProjectAdminResponse;
                toJSON(_: _123.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateProjectAdminResponse>): _123.MsgUpdateProjectAdminResponse;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _123.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateProjectMetadata;
                fromJSON(object: any): _123.MsgUpdateProjectMetadata;
                toJSON(message: _123.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_123.MsgUpdateProjectMetadata>): _123.MsgUpdateProjectMetadata;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _123.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _123.MsgUpdateProjectMetadataResponse;
                toJSON(_: _123.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateProjectMetadataResponse>): _123.MsgUpdateProjectMetadataResponse;
            };
            MsgBridge: {
                encode(message: _123.MsgBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgBridge;
                fromJSON(object: any): _123.MsgBridge;
                toJSON(message: _123.MsgBridge): unknown;
                fromPartial(object: Partial<_123.MsgBridge>): _123.MsgBridge;
            };
            MsgUpdateBatchMetadata: {
                encode(message: _123.MsgUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateBatchMetadata;
                fromJSON(object: any): _123.MsgUpdateBatchMetadata;
                toJSON(message: _123.MsgUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_123.MsgUpdateBatchMetadata>): _123.MsgUpdateBatchMetadata;
            };
            MsgUpdateBatchMetadataResponse: {
                encode(_: _123.MsgUpdateBatchMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateBatchMetadataResponse;
                fromJSON(_: any): _123.MsgUpdateBatchMetadataResponse;
                toJSON(_: _123.MsgUpdateBatchMetadataResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateBatchMetadataResponse>): _123.MsgUpdateBatchMetadataResponse;
            };
            MsgBridgeResponse: {
                encode(_: _123.MsgBridgeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgBridgeResponse;
                fromJSON(_: any): _123.MsgBridgeResponse;
                toJSON(_: _123.MsgBridgeResponse): unknown;
                fromPartial(_: Partial<_123.MsgBridgeResponse>): _123.MsgBridgeResponse;
            };
            MsgBridgeReceive: {
                encode(message: _123.MsgBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgBridgeReceive;
                fromJSON(object: any): _123.MsgBridgeReceive;
                toJSON(message: _123.MsgBridgeReceive): unknown;
                fromPartial(object: Partial<_123.MsgBridgeReceive>): _123.MsgBridgeReceive;
            };
            MsgBridgeReceive_Batch: {
                encode(message: _123.MsgBridgeReceive_Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgBridgeReceive_Batch;
                fromJSON(object: any): _123.MsgBridgeReceive_Batch;
                toJSON(message: _123.MsgBridgeReceive_Batch): unknown;
                fromPartial(object: Partial<_123.MsgBridgeReceive_Batch>): _123.MsgBridgeReceive_Batch;
            };
            MsgBridgeReceive_Project: {
                encode(message: _123.MsgBridgeReceive_Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgBridgeReceive_Project;
                fromJSON(object: any): _123.MsgBridgeReceive_Project;
                toJSON(message: _123.MsgBridgeReceive_Project): unknown;
                fromPartial(object: Partial<_123.MsgBridgeReceive_Project>): _123.MsgBridgeReceive_Project;
            };
            MsgBridgeReceiveResponse: {
                encode(message: _123.MsgBridgeReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgBridgeReceiveResponse;
                fromJSON(object: any): _123.MsgBridgeReceiveResponse;
                toJSON(message: _123.MsgBridgeReceiveResponse): unknown;
                fromPartial(object: Partial<_123.MsgBridgeReceiveResponse>): _123.MsgBridgeReceiveResponse;
            };
            MsgAddClassCreator: {
                encode(message: _123.MsgAddClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgAddClassCreator;
                fromJSON(object: any): _123.MsgAddClassCreator;
                toJSON(message: _123.MsgAddClassCreator): unknown;
                fromPartial(object: Partial<_123.MsgAddClassCreator>): _123.MsgAddClassCreator;
            };
            MsgAddClassCreatorResponse: {
                encode(_: _123.MsgAddClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgAddClassCreatorResponse;
                fromJSON(_: any): _123.MsgAddClassCreatorResponse;
                toJSON(_: _123.MsgAddClassCreatorResponse): unknown;
                fromPartial(_: Partial<_123.MsgAddClassCreatorResponse>): _123.MsgAddClassCreatorResponse;
            };
            MsgSetClassCreatorAllowlist: {
                encode(message: _123.MsgSetClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSetClassCreatorAllowlist;
                fromJSON(object: any): _123.MsgSetClassCreatorAllowlist;
                toJSON(message: _123.MsgSetClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_123.MsgSetClassCreatorAllowlist>): _123.MsgSetClassCreatorAllowlist;
            };
            MsgSetClassCreatorAllowlistResponse: {
                encode(_: _123.MsgSetClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgSetClassCreatorAllowlistResponse;
                fromJSON(_: any): _123.MsgSetClassCreatorAllowlistResponse;
                toJSON(_: _123.MsgSetClassCreatorAllowlistResponse): unknown;
                fromPartial(_: Partial<_123.MsgSetClassCreatorAllowlistResponse>): _123.MsgSetClassCreatorAllowlistResponse;
            };
            MsgRemoveClassCreator: {
                encode(message: _123.MsgRemoveClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgRemoveClassCreator;
                fromJSON(object: any): _123.MsgRemoveClassCreator;
                toJSON(message: _123.MsgRemoveClassCreator): unknown;
                fromPartial(object: Partial<_123.MsgRemoveClassCreator>): _123.MsgRemoveClassCreator;
            };
            MsgRemoveClassCreatorResponse: {
                encode(_: _123.MsgRemoveClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgRemoveClassCreatorResponse;
                fromJSON(_: any): _123.MsgRemoveClassCreatorResponse;
                toJSON(_: _123.MsgRemoveClassCreatorResponse): unknown;
                fromPartial(_: Partial<_123.MsgRemoveClassCreatorResponse>): _123.MsgRemoveClassCreatorResponse;
            };
            MsgUpdateClassFee: {
                encode(message: _123.MsgUpdateClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassFee;
                fromJSON(object: any): _123.MsgUpdateClassFee;
                toJSON(message: _123.MsgUpdateClassFee): unknown;
                fromPartial(object: Partial<_123.MsgUpdateClassFee>): _123.MsgUpdateClassFee;
            };
            MsgUpdateClassFeeResponse: {
                encode(_: _123.MsgUpdateClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgUpdateClassFeeResponse;
                fromJSON(_: any): _123.MsgUpdateClassFeeResponse;
                toJSON(_: _123.MsgUpdateClassFeeResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateClassFeeResponse>): _123.MsgUpdateClassFeeResponse;
            };
            MsgAddAllowedBridgeChain: {
                encode(message: _123.MsgAddAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgAddAllowedBridgeChain;
                fromJSON(object: any): _123.MsgAddAllowedBridgeChain;
                toJSON(message: _123.MsgAddAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_123.MsgAddAllowedBridgeChain>): _123.MsgAddAllowedBridgeChain;
            };
            MsgAddAllowedBridgeChainResponse: {
                encode(_: _123.MsgAddAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgAddAllowedBridgeChainResponse;
                fromJSON(_: any): _123.MsgAddAllowedBridgeChainResponse;
                toJSON(_: _123.MsgAddAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_123.MsgAddAllowedBridgeChainResponse>): _123.MsgAddAllowedBridgeChainResponse;
            };
            MsgRemoveAllowedBridgeChain: {
                encode(message: _123.MsgRemoveAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgRemoveAllowedBridgeChain;
                fromJSON(object: any): _123.MsgRemoveAllowedBridgeChain;
                toJSON(message: _123.MsgRemoveAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_123.MsgRemoveAllowedBridgeChain>): _123.MsgRemoveAllowedBridgeChain;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                encode(_: _123.MsgRemoveAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.MsgRemoveAllowedBridgeChainResponse;
                fromJSON(_: any): _123.MsgRemoveAllowedBridgeChainResponse;
                toJSON(_: _123.MsgRemoveAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_123.MsgRemoveAllowedBridgeChainResponse>): _123.MsgRemoveAllowedBridgeChainResponse;
            };
            CreditType: {
                encode(message: _122.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.CreditType;
                fromJSON(object: any): _122.CreditType;
                toJSON(message: _122.CreditType): unknown;
                fromPartial(object: Partial<_122.CreditType>): _122.CreditType;
            };
            Class: {
                encode(message: _122.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.Class;
                fromJSON(object: any): _122.Class;
                toJSON(message: _122.Class): unknown;
                fromPartial(object: Partial<_122.Class>): _122.Class;
            };
            ClassIssuer: {
                encode(message: _122.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ClassIssuer;
                fromJSON(object: any): _122.ClassIssuer;
                toJSON(message: _122.ClassIssuer): unknown;
                fromPartial(object: Partial<_122.ClassIssuer>): _122.ClassIssuer;
            };
            Project: {
                encode(message: _122.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.Project;
                fromJSON(object: any): _122.Project;
                toJSON(message: _122.Project): unknown;
                fromPartial(object: Partial<_122.Project>): _122.Project;
            };
            Batch: {
                encode(message: _122.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.Batch;
                fromJSON(object: any): _122.Batch;
                toJSON(message: _122.Batch): unknown;
                fromPartial(object: Partial<_122.Batch>): _122.Batch;
            };
            ClassSequence: {
                encode(message: _122.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ClassSequence;
                fromJSON(object: any): _122.ClassSequence;
                toJSON(message: _122.ClassSequence): unknown;
                fromPartial(object: Partial<_122.ClassSequence>): _122.ClassSequence;
            };
            ProjectSequence: {
                encode(message: _122.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ProjectSequence;
                fromJSON(object: any): _122.ProjectSequence;
                toJSON(message: _122.ProjectSequence): unknown;
                fromPartial(object: Partial<_122.ProjectSequence>): _122.ProjectSequence;
            };
            BatchSequence: {
                encode(message: _122.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.BatchSequence;
                fromJSON(object: any): _122.BatchSequence;
                toJSON(message: _122.BatchSequence): unknown;
                fromPartial(object: Partial<_122.BatchSequence>): _122.BatchSequence;
            };
            BatchBalance: {
                encode(message: _122.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.BatchBalance;
                fromJSON(object: any): _122.BatchBalance;
                toJSON(message: _122.BatchBalance): unknown;
                fromPartial(object: Partial<_122.BatchBalance>): _122.BatchBalance;
            };
            BatchSupply: {
                encode(message: _122.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.BatchSupply;
                fromJSON(object: any): _122.BatchSupply;
                toJSON(message: _122.BatchSupply): unknown;
                fromPartial(object: Partial<_122.BatchSupply>): _122.BatchSupply;
            };
            OriginTxIndex: {
                encode(message: _122.OriginTxIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.OriginTxIndex;
                fromJSON(object: any): _122.OriginTxIndex;
                toJSON(message: _122.OriginTxIndex): unknown;
                fromPartial(object: Partial<_122.OriginTxIndex>): _122.OriginTxIndex;
            };
            BatchContract: {
                encode(message: _122.BatchContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.BatchContract;
                fromJSON(object: any): _122.BatchContract;
                toJSON(message: _122.BatchContract): unknown;
                fromPartial(object: Partial<_122.BatchContract>): _122.BatchContract;
            };
            ClassCreatorAllowlist: {
                encode(message: _122.ClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ClassCreatorAllowlist;
                fromJSON(object: any): _122.ClassCreatorAllowlist;
                toJSON(message: _122.ClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_122.ClassCreatorAllowlist>): _122.ClassCreatorAllowlist;
            };
            AllowedClassCreator: {
                encode(message: _122.AllowedClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.AllowedClassCreator;
                fromJSON(object: any): _122.AllowedClassCreator;
                toJSON(message: _122.AllowedClassCreator): unknown;
                fromPartial(object: Partial<_122.AllowedClassCreator>): _122.AllowedClassCreator;
            };
            ClassFee: {
                encode(message: _122.ClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.ClassFee;
                fromJSON(object: any): _122.ClassFee;
                toJSON(message: _122.ClassFee): unknown;
                fromPartial(object: Partial<_122.ClassFee>): _122.ClassFee;
            };
            AllowedBridgeChain: {
                encode(message: _122.AllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.AllowedBridgeChain;
                fromJSON(object: any): _122.AllowedBridgeChain;
                toJSON(message: _122.AllowedBridgeChain): unknown;
                fromPartial(object: Partial<_122.AllowedBridgeChain>): _122.AllowedBridgeChain;
            };
            QueryClassesRequest: {
                encode(message: _121.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassesRequest;
                fromJSON(object: any): _121.QueryClassesRequest;
                toJSON(message: _121.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_121.QueryClassesRequest>): _121.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _121.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassesResponse;
                fromJSON(object: any): _121.QueryClassesResponse;
                toJSON(message: _121.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_121.QueryClassesResponse>): _121.QueryClassesResponse;
            };
            QueryClassesByAdminRequest: {
                encode(message: _121.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassesByAdminRequest;
                fromJSON(object: any): _121.QueryClassesByAdminRequest;
                toJSON(message: _121.QueryClassesByAdminRequest): unknown;
                fromPartial(object: Partial<_121.QueryClassesByAdminRequest>): _121.QueryClassesByAdminRequest;
            };
            QueryClassesByAdminResponse: {
                encode(message: _121.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassesByAdminResponse;
                fromJSON(object: any): _121.QueryClassesByAdminResponse;
                toJSON(message: _121.QueryClassesByAdminResponse): unknown;
                fromPartial(object: Partial<_121.QueryClassesByAdminResponse>): _121.QueryClassesByAdminResponse;
            };
            QueryClassRequest: {
                encode(message: _121.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassRequest;
                fromJSON(object: any): _121.QueryClassRequest;
                toJSON(message: _121.QueryClassRequest): unknown;
                fromPartial(object: Partial<_121.QueryClassRequest>): _121.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _121.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassResponse;
                fromJSON(object: any): _121.QueryClassResponse;
                toJSON(message: _121.QueryClassResponse): unknown;
                fromPartial(object: Partial<_121.QueryClassResponse>): _121.QueryClassResponse;
            };
            QueryClassIssuersRequest: {
                encode(message: _121.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassIssuersRequest;
                fromJSON(object: any): _121.QueryClassIssuersRequest;
                toJSON(message: _121.QueryClassIssuersRequest): unknown;
                fromPartial(object: Partial<_121.QueryClassIssuersRequest>): _121.QueryClassIssuersRequest;
            };
            QueryClassIssuersResponse: {
                encode(message: _121.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassIssuersResponse;
                fromJSON(object: any): _121.QueryClassIssuersResponse;
                toJSON(message: _121.QueryClassIssuersResponse): unknown;
                fromPartial(object: Partial<_121.QueryClassIssuersResponse>): _121.QueryClassIssuersResponse;
            };
            QueryProjectsRequest: {
                encode(message: _121.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsRequest;
                fromJSON(object: any): _121.QueryProjectsRequest;
                toJSON(message: _121.QueryProjectsRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectsRequest>): _121.QueryProjectsRequest;
            };
            QueryProjectsResponse: {
                encode(message: _121.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsResponse;
                fromJSON(object: any): _121.QueryProjectsResponse;
                toJSON(message: _121.QueryProjectsResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectsResponse>): _121.QueryProjectsResponse;
            };
            QueryProjectsByClassRequest: {
                encode(message: _121.QueryProjectsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsByClassRequest;
                fromJSON(object: any): _121.QueryProjectsByClassRequest;
                toJSON(message: _121.QueryProjectsByClassRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectsByClassRequest>): _121.QueryProjectsByClassRequest;
            };
            QueryProjectsByClassResponse: {
                encode(message: _121.QueryProjectsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsByClassResponse;
                fromJSON(object: any): _121.QueryProjectsByClassResponse;
                toJSON(message: _121.QueryProjectsByClassResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectsByClassResponse>): _121.QueryProjectsByClassResponse;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _121.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _121.QueryProjectsByReferenceIdRequest;
                toJSON(message: _121.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectsByReferenceIdRequest>): _121.QueryProjectsByReferenceIdRequest;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _121.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _121.QueryProjectsByReferenceIdResponse;
                toJSON(message: _121.QueryProjectsByReferenceIdResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectsByReferenceIdResponse>): _121.QueryProjectsByReferenceIdResponse;
            };
            QueryProjectsByAdminRequest: {
                encode(message: _121.QueryProjectsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsByAdminRequest;
                fromJSON(object: any): _121.QueryProjectsByAdminRequest;
                toJSON(message: _121.QueryProjectsByAdminRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectsByAdminRequest>): _121.QueryProjectsByAdminRequest;
            };
            QueryProjectsByAdminResponse: {
                encode(message: _121.QueryProjectsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectsByAdminResponse;
                fromJSON(object: any): _121.QueryProjectsByAdminResponse;
                toJSON(message: _121.QueryProjectsByAdminResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectsByAdminResponse>): _121.QueryProjectsByAdminResponse;
            };
            QueryProjectRequest: {
                encode(message: _121.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectRequest;
                fromJSON(object: any): _121.QueryProjectRequest;
                toJSON(message: _121.QueryProjectRequest): unknown;
                fromPartial(object: Partial<_121.QueryProjectRequest>): _121.QueryProjectRequest;
            };
            QueryProjectResponse: {
                encode(message: _121.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryProjectResponse;
                fromJSON(object: any): _121.QueryProjectResponse;
                toJSON(message: _121.QueryProjectResponse): unknown;
                fromPartial(object: Partial<_121.QueryProjectResponse>): _121.QueryProjectResponse;
            };
            QueryBatchesRequest: {
                encode(message: _121.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesRequest;
                fromJSON(object: any): _121.QueryBatchesRequest;
                toJSON(message: _121.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_121.QueryBatchesRequest>): _121.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _121.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesResponse;
                fromJSON(object: any): _121.QueryBatchesResponse;
                toJSON(message: _121.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_121.QueryBatchesResponse>): _121.QueryBatchesResponse;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _121.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _121.QueryBatchesByIssuerRequest;
                toJSON(message: _121.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: Partial<_121.QueryBatchesByIssuerRequest>): _121.QueryBatchesByIssuerRequest;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _121.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _121.QueryBatchesByIssuerResponse;
                toJSON(message: _121.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: Partial<_121.QueryBatchesByIssuerResponse>): _121.QueryBatchesByIssuerResponse;
            };
            QueryBatchesByClassRequest: {
                encode(message: _121.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesByClassRequest;
                fromJSON(object: any): _121.QueryBatchesByClassRequest;
                toJSON(message: _121.QueryBatchesByClassRequest): unknown;
                fromPartial(object: Partial<_121.QueryBatchesByClassRequest>): _121.QueryBatchesByClassRequest;
            };
            QueryBatchesByProjectRequest: {
                encode(message: _121.QueryBatchesByProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesByProjectRequest;
                fromJSON(object: any): _121.QueryBatchesByProjectRequest;
                toJSON(message: _121.QueryBatchesByProjectRequest): unknown;
                fromPartial(object: Partial<_121.QueryBatchesByProjectRequest>): _121.QueryBatchesByProjectRequest;
            };
            QueryBatchesByProjectResponse: {
                encode(message: _121.QueryBatchesByProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesByProjectResponse;
                fromJSON(object: any): _121.QueryBatchesByProjectResponse;
                toJSON(message: _121.QueryBatchesByProjectResponse): unknown;
                fromPartial(object: Partial<_121.QueryBatchesByProjectResponse>): _121.QueryBatchesByProjectResponse;
            };
            QueryBatchesByClassResponse: {
                encode(message: _121.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchesByClassResponse;
                fromJSON(object: any): _121.QueryBatchesByClassResponse;
                toJSON(message: _121.QueryBatchesByClassResponse): unknown;
                fromPartial(object: Partial<_121.QueryBatchesByClassResponse>): _121.QueryBatchesByClassResponse;
            };
            QueryBatchRequest: {
                encode(message: _121.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchRequest;
                fromJSON(object: any): _121.QueryBatchRequest;
                toJSON(message: _121.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_121.QueryBatchRequest>): _121.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _121.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBatchResponse;
                fromJSON(object: any): _121.QueryBatchResponse;
                toJSON(message: _121.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_121.QueryBatchResponse>): _121.QueryBatchResponse;
            };
            QueryBalanceRequest: {
                encode(message: _121.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBalanceRequest;
                fromJSON(object: any): _121.QueryBalanceRequest;
                toJSON(message: _121.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_121.QueryBalanceRequest>): _121.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _121.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBalanceResponse;
                fromJSON(object: any): _121.QueryBalanceResponse;
                toJSON(message: _121.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_121.QueryBalanceResponse>): _121.QueryBalanceResponse;
            };
            QueryBalancesRequest: {
                encode(message: _121.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBalancesRequest;
                fromJSON(object: any): _121.QueryBalancesRequest;
                toJSON(message: _121.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_121.QueryBalancesRequest>): _121.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _121.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBalancesResponse;
                fromJSON(object: any): _121.QueryBalancesResponse;
                toJSON(message: _121.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_121.QueryBalancesResponse>): _121.QueryBalancesResponse;
            };
            QueryBalancesByBatchRequest: {
                encode(message: _121.QueryBalancesByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBalancesByBatchRequest;
                fromJSON(object: any): _121.QueryBalancesByBatchRequest;
                toJSON(message: _121.QueryBalancesByBatchRequest): unknown;
                fromPartial(object: Partial<_121.QueryBalancesByBatchRequest>): _121.QueryBalancesByBatchRequest;
            };
            QueryBalancesByBatchResponse: {
                encode(message: _121.QueryBalancesByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryBalancesByBatchResponse;
                fromJSON(object: any): _121.QueryBalancesByBatchResponse;
                toJSON(message: _121.QueryBalancesByBatchResponse): unknown;
                fromPartial(object: Partial<_121.QueryBalancesByBatchResponse>): _121.QueryBalancesByBatchResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _121.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryAllBalancesRequest;
                fromJSON(object: any): _121.QueryAllBalancesRequest;
                toJSON(message: _121.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_121.QueryAllBalancesRequest>): _121.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _121.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryAllBalancesResponse;
                fromJSON(object: any): _121.QueryAllBalancesResponse;
                toJSON(message: _121.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_121.QueryAllBalancesResponse>): _121.QueryAllBalancesResponse;
            };
            QuerySupplyRequest: {
                encode(message: _121.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QuerySupplyRequest;
                fromJSON(object: any): _121.QuerySupplyRequest;
                toJSON(message: _121.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_121.QuerySupplyRequest>): _121.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _121.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QuerySupplyResponse;
                fromJSON(object: any): _121.QuerySupplyResponse;
                toJSON(message: _121.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_121.QuerySupplyResponse>): _121.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _121.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryCreditTypesRequest;
                fromJSON(_: any): _121.QueryCreditTypesRequest;
                toJSON(_: _121.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_121.QueryCreditTypesRequest>): _121.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _121.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryCreditTypesResponse;
                fromJSON(object: any): _121.QueryCreditTypesResponse;
                toJSON(message: _121.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_121.QueryCreditTypesResponse>): _121.QueryCreditTypesResponse;
            };
            QueryParamsRequest: {
                encode(_: _121.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryParamsRequest;
                fromJSON(_: any): _121.QueryParamsRequest;
                toJSON(_: _121.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_121.QueryParamsRequest>): _121.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _121.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryParamsResponse;
                fromJSON(object: any): _121.QueryParamsResponse;
                toJSON(message: _121.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_121.QueryParamsResponse>): _121.QueryParamsResponse;
            };
            QueryCreditTypeRequest: {
                encode(message: _121.QueryCreditTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryCreditTypeRequest;
                fromJSON(object: any): _121.QueryCreditTypeRequest;
                toJSON(message: _121.QueryCreditTypeRequest): unknown;
                fromPartial(object: Partial<_121.QueryCreditTypeRequest>): _121.QueryCreditTypeRequest;
            };
            QueryCreditTypeResponse: {
                encode(message: _121.QueryCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryCreditTypeResponse;
                fromJSON(object: any): _121.QueryCreditTypeResponse;
                toJSON(message: _121.QueryCreditTypeResponse): unknown;
                fromPartial(object: Partial<_121.QueryCreditTypeResponse>): _121.QueryCreditTypeResponse;
            };
            ClassInfo: {
                encode(message: _121.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.ClassInfo;
                fromJSON(object: any): _121.ClassInfo;
                toJSON(message: _121.ClassInfo): unknown;
                fromPartial(object: Partial<_121.ClassInfo>): _121.ClassInfo;
            };
            ProjectInfo: {
                encode(message: _121.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.ProjectInfo;
                fromJSON(object: any): _121.ProjectInfo;
                toJSON(message: _121.ProjectInfo): unknown;
                fromPartial(object: Partial<_121.ProjectInfo>): _121.ProjectInfo;
            };
            BatchInfo: {
                encode(message: _121.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.BatchInfo;
                fromJSON(object: any): _121.BatchInfo;
                toJSON(message: _121.BatchInfo): unknown;
                fromPartial(object: Partial<_121.BatchInfo>): _121.BatchInfo;
            };
            BatchBalanceInfo: {
                encode(message: _121.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.BatchBalanceInfo;
                fromJSON(object: any): _121.BatchBalanceInfo;
                toJSON(message: _121.BatchBalanceInfo): unknown;
                fromPartial(object: Partial<_121.BatchBalanceInfo>): _121.BatchBalanceInfo;
            };
            QueryClassCreatorAllowlistRequest: {
                encode(_: _121.QueryClassCreatorAllowlistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassCreatorAllowlistRequest;
                fromJSON(_: any): _121.QueryClassCreatorAllowlistRequest;
                toJSON(_: _121.QueryClassCreatorAllowlistRequest): unknown;
                fromPartial(_: Partial<_121.QueryClassCreatorAllowlistRequest>): _121.QueryClassCreatorAllowlistRequest;
            };
            QueryClassCreatorAllowlistResponse: {
                encode(message: _121.QueryClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassCreatorAllowlistResponse;
                fromJSON(object: any): _121.QueryClassCreatorAllowlistResponse;
                toJSON(message: _121.QueryClassCreatorAllowlistResponse): unknown;
                fromPartial(object: Partial<_121.QueryClassCreatorAllowlistResponse>): _121.QueryClassCreatorAllowlistResponse;
            };
            QueryAllowedClassCreatorsRequest: {
                encode(message: _121.QueryAllowedClassCreatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryAllowedClassCreatorsRequest;
                fromJSON(object: any): _121.QueryAllowedClassCreatorsRequest;
                toJSON(message: _121.QueryAllowedClassCreatorsRequest): unknown;
                fromPartial(object: Partial<_121.QueryAllowedClassCreatorsRequest>): _121.QueryAllowedClassCreatorsRequest;
            };
            QueryAllowedClassCreatorsResponse: {
                encode(message: _121.QueryAllowedClassCreatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryAllowedClassCreatorsResponse;
                fromJSON(object: any): _121.QueryAllowedClassCreatorsResponse;
                toJSON(message: _121.QueryAllowedClassCreatorsResponse): unknown;
                fromPartial(object: Partial<_121.QueryAllowedClassCreatorsResponse>): _121.QueryAllowedClassCreatorsResponse;
            };
            QueryClassFeeRequest: {
                encode(_: _121.QueryClassFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassFeeRequest;
                fromJSON(_: any): _121.QueryClassFeeRequest;
                toJSON(_: _121.QueryClassFeeRequest): unknown;
                fromPartial(_: Partial<_121.QueryClassFeeRequest>): _121.QueryClassFeeRequest;
            };
            QueryClassFeeResponse: {
                encode(message: _121.QueryClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryClassFeeResponse;
                fromJSON(object: any): _121.QueryClassFeeResponse;
                toJSON(message: _121.QueryClassFeeResponse): unknown;
                fromPartial(object: Partial<_121.QueryClassFeeResponse>): _121.QueryClassFeeResponse;
            };
            QueryAllowedBridgeChainsRequest: {
                encode(_: _121.QueryAllowedBridgeChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryAllowedBridgeChainsRequest;
                fromJSON(_: any): _121.QueryAllowedBridgeChainsRequest;
                toJSON(_: _121.QueryAllowedBridgeChainsRequest): unknown;
                fromPartial(_: Partial<_121.QueryAllowedBridgeChainsRequest>): _121.QueryAllowedBridgeChainsRequest;
            };
            QueryAllowedBridgeChainsResponse: {
                encode(message: _121.QueryAllowedBridgeChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.QueryAllowedBridgeChainsResponse;
                fromJSON(object: any): _121.QueryAllowedBridgeChainsResponse;
                toJSON(message: _121.QueryAllowedBridgeChainsResponse): unknown;
                fromPartial(object: Partial<_121.QueryAllowedBridgeChainsResponse>): _121.QueryAllowedBridgeChainsResponse;
            };
            EventCreateClass: {
                encode(message: _120.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventCreateClass;
                fromJSON(object: any): _120.EventCreateClass;
                toJSON(message: _120.EventCreateClass): unknown;
                fromPartial(object: Partial<_120.EventCreateClass>): _120.EventCreateClass;
            };
            EventCreateProject: {
                encode(message: _120.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventCreateProject;
                fromJSON(object: any): _120.EventCreateProject;
                toJSON(message: _120.EventCreateProject): unknown;
                fromPartial(object: Partial<_120.EventCreateProject>): _120.EventCreateProject;
            };
            EventCreateBatch: {
                encode(message: _120.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventCreateBatch;
                fromJSON(object: any): _120.EventCreateBatch;
                toJSON(message: _120.EventCreateBatch): unknown;
                fromPartial(object: Partial<_120.EventCreateBatch>): _120.EventCreateBatch;
            };
            EventMint: {
                encode(message: _120.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventMint;
                fromJSON(object: any): _120.EventMint;
                toJSON(message: _120.EventMint): unknown;
                fromPartial(object: Partial<_120.EventMint>): _120.EventMint;
            };
            EventMintBatchCredits: {
                encode(message: _120.EventMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventMintBatchCredits;
                fromJSON(object: any): _120.EventMintBatchCredits;
                toJSON(message: _120.EventMintBatchCredits): unknown;
                fromPartial(object: Partial<_120.EventMintBatchCredits>): _120.EventMintBatchCredits;
            };
            EventTransfer: {
                encode(message: _120.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventTransfer;
                fromJSON(object: any): _120.EventTransfer;
                toJSON(message: _120.EventTransfer): unknown;
                fromPartial(object: Partial<_120.EventTransfer>): _120.EventTransfer;
            };
            EventRetire: {
                encode(message: _120.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventRetire;
                fromJSON(object: any): _120.EventRetire;
                toJSON(message: _120.EventRetire): unknown;
                fromPartial(object: Partial<_120.EventRetire>): _120.EventRetire;
            };
            EventCancel: {
                encode(message: _120.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventCancel;
                fromJSON(object: any): _120.EventCancel;
                toJSON(message: _120.EventCancel): unknown;
                fromPartial(object: Partial<_120.EventCancel>): _120.EventCancel;
            };
            EventUpdateClassAdmin: {
                encode(message: _120.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventUpdateClassAdmin;
                fromJSON(object: any): _120.EventUpdateClassAdmin;
                toJSON(message: _120.EventUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_120.EventUpdateClassAdmin>): _120.EventUpdateClassAdmin;
            };
            EventUpdateClassIssuers: {
                encode(message: _120.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventUpdateClassIssuers;
                fromJSON(object: any): _120.EventUpdateClassIssuers;
                toJSON(message: _120.EventUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_120.EventUpdateClassIssuers>): _120.EventUpdateClassIssuers;
            };
            EventUpdateClassMetadata: {
                encode(message: _120.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventUpdateClassMetadata;
                fromJSON(object: any): _120.EventUpdateClassMetadata;
                toJSON(message: _120.EventUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_120.EventUpdateClassMetadata>): _120.EventUpdateClassMetadata;
            };
            EventUpdateProjectAdmin: {
                encode(message: _120.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventUpdateProjectAdmin;
                fromJSON(object: any): _120.EventUpdateProjectAdmin;
                toJSON(message: _120.EventUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_120.EventUpdateProjectAdmin>): _120.EventUpdateProjectAdmin;
            };
            EventUpdateProjectMetadata: {
                encode(message: _120.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventUpdateProjectMetadata;
                fromJSON(object: any): _120.EventUpdateProjectMetadata;
                toJSON(message: _120.EventUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_120.EventUpdateProjectMetadata>): _120.EventUpdateProjectMetadata;
            };
            EventUpdateBatchMetadata: {
                encode(message: _120.EventUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventUpdateBatchMetadata;
                fromJSON(object: any): _120.EventUpdateBatchMetadata;
                toJSON(message: _120.EventUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_120.EventUpdateBatchMetadata>): _120.EventUpdateBatchMetadata;
            };
            EventSealBatch: {
                encode(message: _120.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventSealBatch;
                fromJSON(object: any): _120.EventSealBatch;
                toJSON(message: _120.EventSealBatch): unknown;
                fromPartial(object: Partial<_120.EventSealBatch>): _120.EventSealBatch;
            };
            EventAddCreditType: {
                encode(message: _120.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventAddCreditType;
                fromJSON(object: any): _120.EventAddCreditType;
                toJSON(message: _120.EventAddCreditType): unknown;
                fromPartial(object: Partial<_120.EventAddCreditType>): _120.EventAddCreditType;
            };
            EventBridge: {
                encode(message: _120.EventBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventBridge;
                fromJSON(object: any): _120.EventBridge;
                toJSON(message: _120.EventBridge): unknown;
                fromPartial(object: Partial<_120.EventBridge>): _120.EventBridge;
            };
            EventBridgeReceive: {
                encode(message: _120.EventBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.EventBridgeReceive;
                fromJSON(object: any): _120.EventBridgeReceive;
                toJSON(message: _120.EventBridgeReceive): unknown;
                fromPartial(object: Partial<_120.EventBridgeReceive>): _120.EventBridgeReceive;
            };
        };
        const v1alpha1: {
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _128.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _128.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _128.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _128.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _128.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _128.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _128.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _128.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _128.MsgCreateClass): {
                        typeUrl: string;
                        value: _128.MsgCreateClass;
                    };
                    createBatch(value: _128.MsgCreateBatch): {
                        typeUrl: string;
                        value: _128.MsgCreateBatch;
                    };
                    send(value: _128.MsgSend): {
                        typeUrl: string;
                        value: _128.MsgSend;
                    };
                    retire(value: _128.MsgRetire): {
                        typeUrl: string;
                        value: _128.MsgRetire;
                    };
                    cancel(value: _128.MsgCancel): {
                        typeUrl: string;
                        value: _128.MsgCancel;
                    };
                    updateClassAdmin(value: _128.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _128.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _128.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _128.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _128.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _128.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _128.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _128.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _128.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _128.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _128.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _128.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _128.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _128.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _128.MsgCreateClass): {
                        typeUrl: string;
                        value: _128.MsgCreateClass;
                    };
                    createBatch(value: _128.MsgCreateBatch): {
                        typeUrl: string;
                        value: _128.MsgCreateBatch;
                    };
                    send(value: _128.MsgSend): {
                        typeUrl: string;
                        value: _128.MsgSend;
                    };
                    retire(value: _128.MsgRetire): {
                        typeUrl: string;
                        value: _128.MsgRetire;
                    };
                    cancel(value: _128.MsgCancel): {
                        typeUrl: string;
                        value: _128.MsgCancel;
                    };
                    updateClassAdmin(value: _128.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _128.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _128.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _128.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeName }: _128.MsgCreateClass) => {
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
                    }) => _128.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: _128.MsgCreateBatch) => {
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
                    }) => _128.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _128.MsgSend) => {
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
                    }) => _128.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, location }: _128.MsgRetire) => {
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
                    }) => _128.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _128.MsgCancel) => {
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
                    }) => _128.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _128.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _128.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, issuers }: _128.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, issuers }: {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    }) => _128.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _128.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    }) => _128.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _129.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.ClassInfo;
                fromJSON(object: any): _129.ClassInfo;
                toJSON(message: _129.ClassInfo): unknown;
                fromPartial(object: Partial<_129.ClassInfo>): _129.ClassInfo;
            };
            BatchInfo: {
                encode(message: _129.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BatchInfo;
                fromJSON(object: any): _129.BatchInfo;
                toJSON(message: _129.BatchInfo): unknown;
                fromPartial(object: Partial<_129.BatchInfo>): _129.BatchInfo;
            };
            Params: {
                encode(message: _129.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.Params;
                fromJSON(object: any): _129.Params;
                toJSON(message: _129.Params): unknown;
                fromPartial(object: Partial<_129.Params>): _129.Params;
            };
            CreditType: {
                encode(message: _129.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.CreditType;
                fromJSON(object: any): _129.CreditType;
                toJSON(message: _129.CreditType): unknown;
                fromPartial(object: Partial<_129.CreditType>): _129.CreditType;
            };
            CreditTypeSeq: {
                encode(message: _129.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.CreditTypeSeq;
                fromJSON(object: any): _129.CreditTypeSeq;
                toJSON(message: _129.CreditTypeSeq): unknown;
                fromPartial(object: Partial<_129.CreditTypeSeq>): _129.CreditTypeSeq;
            };
            MsgCreateClass: {
                encode(message: _128.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCreateClass;
                fromJSON(object: any): _128.MsgCreateClass;
                toJSON(message: _128.MsgCreateClass): unknown;
                fromPartial(object: Partial<_128.MsgCreateClass>): _128.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _128.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCreateClassResponse;
                fromJSON(object: any): _128.MsgCreateClassResponse;
                toJSON(message: _128.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_128.MsgCreateClassResponse>): _128.MsgCreateClassResponse;
            };
            MsgCreateBatch: {
                encode(message: _128.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCreateBatch;
                fromJSON(object: any): _128.MsgCreateBatch;
                toJSON(message: _128.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_128.MsgCreateBatch>): _128.MsgCreateBatch;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _128.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _128.MsgCreateBatch_BatchIssuance;
                toJSON(message: _128.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: Partial<_128.MsgCreateBatch_BatchIssuance>): _128.MsgCreateBatch_BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _128.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCreateBatchResponse;
                fromJSON(object: any): _128.MsgCreateBatchResponse;
                toJSON(message: _128.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_128.MsgCreateBatchResponse>): _128.MsgCreateBatchResponse;
            };
            MsgSend: {
                encode(message: _128.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgSend;
                fromJSON(object: any): _128.MsgSend;
                toJSON(message: _128.MsgSend): unknown;
                fromPartial(object: Partial<_128.MsgSend>): _128.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _128.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgSend_SendCredits;
                fromJSON(object: any): _128.MsgSend_SendCredits;
                toJSON(message: _128.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_128.MsgSend_SendCredits>): _128.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _128.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgSendResponse;
                fromJSON(_: any): _128.MsgSendResponse;
                toJSON(_: _128.MsgSendResponse): unknown;
                fromPartial(_: Partial<_128.MsgSendResponse>): _128.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _128.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgRetire;
                fromJSON(object: any): _128.MsgRetire;
                toJSON(message: _128.MsgRetire): unknown;
                fromPartial(object: Partial<_128.MsgRetire>): _128.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _128.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgRetire_RetireCredits;
                fromJSON(object: any): _128.MsgRetire_RetireCredits;
                toJSON(message: _128.MsgRetire_RetireCredits): unknown;
                fromPartial(object: Partial<_128.MsgRetire_RetireCredits>): _128.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _128.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgRetireResponse;
                fromJSON(_: any): _128.MsgRetireResponse;
                toJSON(_: _128.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_128.MsgRetireResponse>): _128.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _128.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCancel;
                fromJSON(object: any): _128.MsgCancel;
                toJSON(message: _128.MsgCancel): unknown;
                fromPartial(object: Partial<_128.MsgCancel>): _128.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _128.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCancel_CancelCredits;
                fromJSON(object: any): _128.MsgCancel_CancelCredits;
                toJSON(message: _128.MsgCancel_CancelCredits): unknown;
                fromPartial(object: Partial<_128.MsgCancel_CancelCredits>): _128.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _128.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgCancelResponse;
                fromJSON(_: any): _128.MsgCancelResponse;
                toJSON(_: _128.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_128.MsgCancelResponse>): _128.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _128.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgUpdateClassAdmin;
                fromJSON(object: any): _128.MsgUpdateClassAdmin;
                toJSON(message: _128.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_128.MsgUpdateClassAdmin>): _128.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _128.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _128.MsgUpdateClassAdminResponse;
                toJSON(_: _128.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_128.MsgUpdateClassAdminResponse>): _128.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _128.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgUpdateClassIssuers;
                fromJSON(object: any): _128.MsgUpdateClassIssuers;
                toJSON(message: _128.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_128.MsgUpdateClassIssuers>): _128.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _128.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _128.MsgUpdateClassIssuersResponse;
                toJSON(_: _128.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_128.MsgUpdateClassIssuersResponse>): _128.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _128.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgUpdateClassMetadata;
                fromJSON(object: any): _128.MsgUpdateClassMetadata;
                toJSON(message: _128.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_128.MsgUpdateClassMetadata>): _128.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _128.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _128.MsgUpdateClassMetadataResponse;
                toJSON(_: _128.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_128.MsgUpdateClassMetadataResponse>): _128.MsgUpdateClassMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _127.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryParamsRequest;
                fromJSON(_: any): _127.QueryParamsRequest;
                toJSON(_: _127.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _127.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryParamsResponse;
                fromJSON(object: any): _127.QueryParamsResponse;
                toJSON(message: _127.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
            };
            QueryClassesRequest: {
                encode(message: _127.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryClassesRequest;
                fromJSON(object: any): _127.QueryClassesRequest;
                toJSON(message: _127.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_127.QueryClassesRequest>): _127.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _127.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryClassesResponse;
                fromJSON(object: any): _127.QueryClassesResponse;
                toJSON(message: _127.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_127.QueryClassesResponse>): _127.QueryClassesResponse;
            };
            QueryClassInfoRequest: {
                encode(message: _127.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryClassInfoRequest;
                fromJSON(object: any): _127.QueryClassInfoRequest;
                toJSON(message: _127.QueryClassInfoRequest): unknown;
                fromPartial(object: Partial<_127.QueryClassInfoRequest>): _127.QueryClassInfoRequest;
            };
            QueryClassInfoResponse: {
                encode(message: _127.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryClassInfoResponse;
                fromJSON(object: any): _127.QueryClassInfoResponse;
                toJSON(message: _127.QueryClassInfoResponse): unknown;
                fromPartial(object: Partial<_127.QueryClassInfoResponse>): _127.QueryClassInfoResponse;
            };
            QueryBatchesRequest: {
                encode(message: _127.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryBatchesRequest;
                fromJSON(object: any): _127.QueryBatchesRequest;
                toJSON(message: _127.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_127.QueryBatchesRequest>): _127.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _127.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryBatchesResponse;
                fromJSON(object: any): _127.QueryBatchesResponse;
                toJSON(message: _127.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_127.QueryBatchesResponse>): _127.QueryBatchesResponse;
            };
            QueryBatchInfoRequest: {
                encode(message: _127.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryBatchInfoRequest;
                fromJSON(object: any): _127.QueryBatchInfoRequest;
                toJSON(message: _127.QueryBatchInfoRequest): unknown;
                fromPartial(object: Partial<_127.QueryBatchInfoRequest>): _127.QueryBatchInfoRequest;
            };
            QueryBatchInfoResponse: {
                encode(message: _127.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryBatchInfoResponse;
                fromJSON(object: any): _127.QueryBatchInfoResponse;
                toJSON(message: _127.QueryBatchInfoResponse): unknown;
                fromPartial(object: Partial<_127.QueryBatchInfoResponse>): _127.QueryBatchInfoResponse;
            };
            QueryBalanceRequest: {
                encode(message: _127.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryBalanceRequest;
                fromJSON(object: any): _127.QueryBalanceRequest;
                toJSON(message: _127.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_127.QueryBalanceRequest>): _127.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _127.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryBalanceResponse;
                fromJSON(object: any): _127.QueryBalanceResponse;
                toJSON(message: _127.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_127.QueryBalanceResponse>): _127.QueryBalanceResponse;
            };
            QuerySupplyRequest: {
                encode(message: _127.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QuerySupplyRequest;
                fromJSON(object: any): _127.QuerySupplyRequest;
                toJSON(message: _127.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_127.QuerySupplyRequest>): _127.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _127.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QuerySupplyResponse;
                fromJSON(object: any): _127.QuerySupplyResponse;
                toJSON(message: _127.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_127.QuerySupplyResponse>): _127.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _127.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryCreditTypesRequest;
                fromJSON(_: any): _127.QueryCreditTypesRequest;
                toJSON(_: _127.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_127.QueryCreditTypesRequest>): _127.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _127.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.QueryCreditTypesResponse;
                fromJSON(object: any): _127.QueryCreditTypesResponse;
                toJSON(message: _127.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_127.QueryCreditTypesResponse>): _127.QueryCreditTypesResponse;
            };
            GenesisState: {
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.GenesisState;
                fromJSON(object: any): _126.GenesisState;
                toJSON(message: _126.GenesisState): unknown;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
            };
            Balance: {
                encode(message: _126.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.Balance;
                fromJSON(object: any): _126.Balance;
                toJSON(message: _126.Balance): unknown;
                fromPartial(object: Partial<_126.Balance>): _126.Balance;
            };
            Supply: {
                encode(message: _126.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.Supply;
                fromJSON(object: any): _126.Supply;
                toJSON(message: _126.Supply): unknown;
                fromPartial(object: Partial<_126.Supply>): _126.Supply;
            };
            EventCreateClass: {
                encode(message: _125.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.EventCreateClass;
                fromJSON(object: any): _125.EventCreateClass;
                toJSON(message: _125.EventCreateClass): unknown;
                fromPartial(object: Partial<_125.EventCreateClass>): _125.EventCreateClass;
            };
            EventCreateBatch: {
                encode(message: _125.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.EventCreateBatch;
                fromJSON(object: any): _125.EventCreateBatch;
                toJSON(message: _125.EventCreateBatch): unknown;
                fromPartial(object: Partial<_125.EventCreateBatch>): _125.EventCreateBatch;
            };
            EventReceive: {
                encode(message: _125.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.EventReceive;
                fromJSON(object: any): _125.EventReceive;
                toJSON(message: _125.EventReceive): unknown;
                fromPartial(object: Partial<_125.EventReceive>): _125.EventReceive;
            };
            EventRetire: {
                encode(message: _125.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.EventRetire;
                fromJSON(object: any): _125.EventRetire;
                toJSON(message: _125.EventRetire): unknown;
                fromPartial(object: Partial<_125.EventRetire>): _125.EventRetire;
            };
            EventCancel: {
                encode(message: _125.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.EventCancel;
                fromJSON(object: any): _125.EventCancel;
                toJSON(message: _125.EventCancel): unknown;
                fromPartial(object: Partial<_125.EventCancel>): _125.EventCancel;
            };
        };
    }
    namespace intertx {
        const v1: {
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _131.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _131.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _131.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _131.MsgRegisterAccount;
                    };
                    submitTx(value: _131.MsgSubmitTx): {
                        typeUrl: string;
                        value: _131.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _131.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _131.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _131.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _131.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _131.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _131.MsgRegisterAccount;
                    };
                    submitTx(value: _131.MsgSubmitTx): {
                        typeUrl: string;
                        value: _131.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, version }: _131.MsgRegisterAccount) => {
                        owner: string;
                        connection_id: string;
                        version: string;
                    };
                    fromAmino: ({ owner, connection_id, version }: {
                        owner: string;
                        connection_id: string;
                        version: string;
                    }) => _131.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msg }: _131.MsgSubmitTx) => {
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
                    }) => _131.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _131.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRegisterAccount;
                fromJSON(object: any): _131.MsgRegisterAccount;
                toJSON(message: _131.MsgRegisterAccount): unknown;
                fromPartial(object: Partial<_131.MsgRegisterAccount>): _131.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _131.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRegisterAccountResponse;
                fromJSON(_: any): _131.MsgRegisterAccountResponse;
                toJSON(_: _131.MsgRegisterAccountResponse): unknown;
                fromPartial(_: Partial<_131.MsgRegisterAccountResponse>): _131.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _131.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSubmitTx;
                fromJSON(object: any): _131.MsgSubmitTx;
                toJSON(message: _131.MsgSubmitTx): unknown;
                fromPartial(object: Partial<_131.MsgSubmitTx>): _131.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _131.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSubmitTxResponse;
                fromJSON(_: any): _131.MsgSubmitTxResponse;
                toJSON(_: _131.MsgSubmitTxResponse): unknown;
                fromPartial(_: Partial<_131.MsgSubmitTxResponse>): _131.MsgSubmitTxResponse;
            };
            QueryInterchainAccountRequest: {
                encode(message: _130.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.QueryInterchainAccountRequest;
                fromJSON(object: any): _130.QueryInterchainAccountRequest;
                toJSON(message: _130.QueryInterchainAccountRequest): unknown;
                fromPartial(object: Partial<_130.QueryInterchainAccountRequest>): _130.QueryInterchainAccountRequest;
            };
            QueryInterchainAccountResponse: {
                encode(message: _130.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.QueryInterchainAccountResponse;
                fromJSON(object: any): _130.QueryInterchainAccountResponse;
                toJSON(message: _130.QueryInterchainAccountResponse): unknown;
                fromPartial(object: Partial<_130.QueryInterchainAccountResponse>): _130.QueryInterchainAccountResponse;
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
                    v1: _201.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _202.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _203.LCDQueryClient;
                    };
                    v1: _204.LCDQueryClient;
                    v1alpha1: _205.LCDQueryClient;
                };
                intertx: {
                    v1: _206.LCDQueryClient;
                };
            };
        }>;
    };
}
