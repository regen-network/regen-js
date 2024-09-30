import * as _76 from "./data/v1/events";
import * as _77 from "./data/v1/query";
import * as _78 from "./data/v1/state";
import * as _79 from "./data/v1/tx";
import * as _80 from "./data/v1/types";
import * as _81 from "./ecocredit/basket/v1/events";
import * as _82 from "./ecocredit/basket/v1/query";
import * as _83 from "./ecocredit/basket/v1/state";
import * as _84 from "./ecocredit/basket/v1/tx";
import * as _85 from "./ecocredit/basket/v1/types";
import * as _86 from "./ecocredit/marketplace/v1/events";
import * as _87 from "./ecocredit/marketplace/v1/query";
import * as _88 from "./ecocredit/marketplace/v1/state";
import * as _89 from "./ecocredit/marketplace/v1/tx";
import * as _90 from "./ecocredit/marketplace/v1/types";
import * as _91 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _92 from "./ecocredit/v1/events";
import * as _93 from "./ecocredit/v1/query";
import * as _94 from "./ecocredit/v1/state";
import * as _95 from "./ecocredit/v1/tx";
import * as _96 from "./ecocredit/v1/types";
import * as _97 from "./ecocredit/v1alpha1/events";
import * as _98 from "./ecocredit/v1alpha1/genesis";
import * as _99 from "./ecocredit/v1alpha1/query";
import * as _100 from "./ecocredit/v1alpha1/tx";
import * as _101 from "./ecocredit/v1alpha1/types";
import * as _102 from "./intertx/v1/query";
import * as _103 from "./intertx/v1/tx";
import * as _199 from "./data/v1/query.lcd";
import * as _200 from "./ecocredit/basket/v1/query.lcd";
import * as _201 from "./ecocredit/marketplace/v1/query.lcd";
import * as _202 from "./ecocredit/v1/query.lcd";
import * as _203 from "./ecocredit/v1alpha1/query.lcd";
import * as _204 from "./intertx/v1/query.lcd";
import * as _205 from "./data/v1/query.rpc.Query";
import * as _206 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _207 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _208 from "./ecocredit/v1/query.rpc.Query";
import * as _209 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _210 from "./intertx/v1/query.rpc.Query";
import * as _211 from "./data/v1/tx.rpc.msg";
import * as _212 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _213 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _214 from "./ecocredit/v1/tx.rpc.msg";
import * as _215 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _216 from "./intertx/v1/tx.rpc.msg";
export declare namespace regen {
    namespace data {
        const v1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                anchorByIRI(request: _77.QueryAnchorByIRIRequest): Promise<_77.QueryAnchorByIRIResponse>;
                anchorByHash(request: _77.QueryAnchorByHashRequest): Promise<_77.QueryAnchorByHashResponse>;
                attestationsByAttestor(request: _77.QueryAttestationsByAttestorRequest): Promise<_77.QueryAttestationsByAttestorResponse>;
                attestationsByIRI(request: _77.QueryAttestationsByIRIRequest): Promise<_77.QueryAttestationsByIRIResponse>;
                attestationsByHash(request: _77.QueryAttestationsByHashRequest): Promise<_77.QueryAttestationsByHashResponse>;
                resolver(request: _77.QueryResolverRequest): Promise<_77.QueryResolverResponse>;
                resolversByIRI(request: _77.QueryResolversByIRIRequest): Promise<_77.QueryResolversByIRIResponse>;
                resolversByHash(request: _77.QueryResolversByHashRequest): Promise<_77.QueryResolversByHashResponse>;
                resolversByURL(request: _77.QueryResolversByURLRequest): Promise<_77.QueryResolversByURLResponse>;
                convertIRIToHash(request: _77.ConvertIRIToHashRequest): Promise<_77.ConvertIRIToHashResponse>;
                convertHashToIRI(request: _77.ConvertHashToIRIRequest): Promise<_77.ConvertHashToIRIResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _79.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _79.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _79.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _79.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _79.MsgAnchor): {
                        typeUrl: string;
                        value: _79.MsgAnchor;
                    };
                    attest(value: _79.MsgAttest): {
                        typeUrl: string;
                        value: _79.MsgAttest;
                    };
                    defineResolver(value: _79.MsgDefineResolver): {
                        typeUrl: string;
                        value: _79.MsgDefineResolver;
                    };
                    registerResolver(value: _79.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _79.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _79.MsgAnchor): {
                        typeUrl: string;
                        value: _79.MsgAnchor;
                    };
                    attest(value: _79.MsgAttest): {
                        typeUrl: string;
                        value: _79.MsgAttest;
                    };
                    defineResolver(value: _79.MsgDefineResolver): {
                        typeUrl: string;
                        value: _79.MsgDefineResolver;
                    };
                    registerResolver(value: _79.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _79.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: (message: _79.MsgAnchor) => _79.MsgAnchorAmino;
                    fromAmino: (object: _79.MsgAnchorAmino) => _79.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: (message: _79.MsgAttest) => _79.MsgAttestAmino;
                    fromAmino: (object: _79.MsgAttestAmino) => _79.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: (message: _79.MsgDefineResolver) => _79.MsgDefineResolverAmino;
                    fromAmino: (object: _79.MsgDefineResolverAmino) => _79.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: (message: _79.MsgRegisterResolver) => _79.MsgRegisterResolverAmino;
                    fromAmino: (object: _79.MsgRegisterResolverAmino) => _79.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _80.DigestAlgorithm;
            digestAlgorithmToJSON(object: _80.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _80.RawMediaType;
            rawMediaTypeToJSON(object: _80.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _80.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _80.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _80.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _80.GraphMerkleTree): string;
            DigestAlgorithm: typeof _80.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _80.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _80.DigestAlgorithm;
            RawMediaType: typeof _80.RawMediaType;
            RawMediaTypeSDKType: typeof _80.RawMediaType;
            RawMediaTypeAmino: typeof _80.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _80.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _80.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _80.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _80.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _80.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _80.GraphMerkleTree;
            ContentHash: {
                typeUrl: string;
                encode(message: _80.ContentHash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ContentHash;
                fromPartial(object: Partial<_80.ContentHash>): _80.ContentHash;
                fromAmino(object: _80.ContentHashAmino): _80.ContentHash;
                toAmino(message: _80.ContentHash): _80.ContentHashAmino;
                fromAminoMsg(object: _80.ContentHashAminoMsg): _80.ContentHash;
                fromProtoMsg(message: _80.ContentHashProtoMsg): _80.ContentHash;
                toProto(message: _80.ContentHash): Uint8Array;
                toProtoMsg(message: _80.ContentHash): _80.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                typeUrl: string;
                encode(message: _80.ContentHash_Raw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ContentHash_Raw;
                fromPartial(object: Partial<_80.ContentHash_Raw>): _80.ContentHash_Raw;
                fromAmino(object: _80.ContentHash_RawAmino): _80.ContentHash_Raw;
                toAmino(message: _80.ContentHash_Raw): _80.ContentHash_RawAmino;
                fromAminoMsg(object: _80.ContentHash_RawAminoMsg): _80.ContentHash_Raw;
                fromProtoMsg(message: _80.ContentHash_RawProtoMsg): _80.ContentHash_Raw;
                toProto(message: _80.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _80.ContentHash_Raw): _80.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                typeUrl: string;
                encode(message: _80.ContentHash_Graph, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ContentHash_Graph;
                fromPartial(object: Partial<_80.ContentHash_Graph>): _80.ContentHash_Graph;
                fromAmino(object: _80.ContentHash_GraphAmino): _80.ContentHash_Graph;
                toAmino(message: _80.ContentHash_Graph): _80.ContentHash_GraphAmino;
                fromAminoMsg(object: _80.ContentHash_GraphAminoMsg): _80.ContentHash_Graph;
                fromProtoMsg(message: _80.ContentHash_GraphProtoMsg): _80.ContentHash_Graph;
                toProto(message: _80.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _80.ContentHash_Graph): _80.ContentHash_GraphProtoMsg;
            };
            ContentHashes: {
                typeUrl: string;
                encode(message: _80.ContentHashes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ContentHashes;
                fromPartial(object: Partial<_80.ContentHashes>): _80.ContentHashes;
                fromAmino(object: _80.ContentHashesAmino): _80.ContentHashes;
                toAmino(message: _80.ContentHashes): _80.ContentHashesAmino;
                fromAminoMsg(object: _80.ContentHashesAminoMsg): _80.ContentHashes;
                fromProtoMsg(message: _80.ContentHashesProtoMsg): _80.ContentHashes;
                toProto(message: _80.ContentHashes): Uint8Array;
                toProtoMsg(message: _80.ContentHashes): _80.ContentHashesProtoMsg;
            };
            MsgAnchor: {
                typeUrl: string;
                encode(message: _79.MsgAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgAnchor;
                fromPartial(object: Partial<_79.MsgAnchor>): _79.MsgAnchor;
                fromAmino(object: _79.MsgAnchorAmino): _79.MsgAnchor;
                toAmino(message: _79.MsgAnchor): _79.MsgAnchorAmino;
                fromAminoMsg(object: _79.MsgAnchorAminoMsg): _79.MsgAnchor;
                toAminoMsg(message: _79.MsgAnchor): _79.MsgAnchorAminoMsg;
                fromProtoMsg(message: _79.MsgAnchorProtoMsg): _79.MsgAnchor;
                toProto(message: _79.MsgAnchor): Uint8Array;
                toProtoMsg(message: _79.MsgAnchor): _79.MsgAnchorProtoMsg;
            };
            MsgAnchorResponse: {
                typeUrl: string;
                encode(message: _79.MsgAnchorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgAnchorResponse;
                fromPartial(object: Partial<_79.MsgAnchorResponse>): _79.MsgAnchorResponse;
                fromAmino(object: _79.MsgAnchorResponseAmino): _79.MsgAnchorResponse;
                toAmino(message: _79.MsgAnchorResponse): _79.MsgAnchorResponseAmino;
                fromAminoMsg(object: _79.MsgAnchorResponseAminoMsg): _79.MsgAnchorResponse;
                fromProtoMsg(message: _79.MsgAnchorResponseProtoMsg): _79.MsgAnchorResponse;
                toProto(message: _79.MsgAnchorResponse): Uint8Array;
                toProtoMsg(message: _79.MsgAnchorResponse): _79.MsgAnchorResponseProtoMsg;
            };
            MsgAttest: {
                typeUrl: string;
                encode(message: _79.MsgAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgAttest;
                fromPartial(object: Partial<_79.MsgAttest>): _79.MsgAttest;
                fromAmino(object: _79.MsgAttestAmino): _79.MsgAttest;
                toAmino(message: _79.MsgAttest): _79.MsgAttestAmino;
                fromAminoMsg(object: _79.MsgAttestAminoMsg): _79.MsgAttest;
                toAminoMsg(message: _79.MsgAttest): _79.MsgAttestAminoMsg;
                fromProtoMsg(message: _79.MsgAttestProtoMsg): _79.MsgAttest;
                toProto(message: _79.MsgAttest): Uint8Array;
                toProtoMsg(message: _79.MsgAttest): _79.MsgAttestProtoMsg;
            };
            MsgAttestResponse: {
                typeUrl: string;
                encode(message: _79.MsgAttestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgAttestResponse;
                fromPartial(object: Partial<_79.MsgAttestResponse>): _79.MsgAttestResponse;
                fromAmino(object: _79.MsgAttestResponseAmino): _79.MsgAttestResponse;
                toAmino(message: _79.MsgAttestResponse): _79.MsgAttestResponseAmino;
                fromAminoMsg(object: _79.MsgAttestResponseAminoMsg): _79.MsgAttestResponse;
                fromProtoMsg(message: _79.MsgAttestResponseProtoMsg): _79.MsgAttestResponse;
                toProto(message: _79.MsgAttestResponse): Uint8Array;
                toProtoMsg(message: _79.MsgAttestResponse): _79.MsgAttestResponseProtoMsg;
            };
            MsgDefineResolver: {
                typeUrl: string;
                encode(message: _79.MsgDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgDefineResolver;
                fromPartial(object: Partial<_79.MsgDefineResolver>): _79.MsgDefineResolver;
                fromAmino(object: _79.MsgDefineResolverAmino): _79.MsgDefineResolver;
                toAmino(message: _79.MsgDefineResolver): _79.MsgDefineResolverAmino;
                fromAminoMsg(object: _79.MsgDefineResolverAminoMsg): _79.MsgDefineResolver;
                toAminoMsg(message: _79.MsgDefineResolver): _79.MsgDefineResolverAminoMsg;
                fromProtoMsg(message: _79.MsgDefineResolverProtoMsg): _79.MsgDefineResolver;
                toProto(message: _79.MsgDefineResolver): Uint8Array;
                toProtoMsg(message: _79.MsgDefineResolver): _79.MsgDefineResolverProtoMsg;
            };
            MsgDefineResolverResponse: {
                typeUrl: string;
                encode(message: _79.MsgDefineResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgDefineResolverResponse;
                fromPartial(object: Partial<_79.MsgDefineResolverResponse>): _79.MsgDefineResolverResponse;
                fromAmino(object: _79.MsgDefineResolverResponseAmino): _79.MsgDefineResolverResponse;
                toAmino(message: _79.MsgDefineResolverResponse): _79.MsgDefineResolverResponseAmino;
                fromAminoMsg(object: _79.MsgDefineResolverResponseAminoMsg): _79.MsgDefineResolverResponse;
                fromProtoMsg(message: _79.MsgDefineResolverResponseProtoMsg): _79.MsgDefineResolverResponse;
                toProto(message: _79.MsgDefineResolverResponse): Uint8Array;
                toProtoMsg(message: _79.MsgDefineResolverResponse): _79.MsgDefineResolverResponseProtoMsg;
            };
            MsgRegisterResolver: {
                typeUrl: string;
                encode(message: _79.MsgRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgRegisterResolver;
                fromPartial(object: Partial<_79.MsgRegisterResolver>): _79.MsgRegisterResolver;
                fromAmino(object: _79.MsgRegisterResolverAmino): _79.MsgRegisterResolver;
                toAmino(message: _79.MsgRegisterResolver): _79.MsgRegisterResolverAmino;
                fromAminoMsg(object: _79.MsgRegisterResolverAminoMsg): _79.MsgRegisterResolver;
                toAminoMsg(message: _79.MsgRegisterResolver): _79.MsgRegisterResolverAminoMsg;
                fromProtoMsg(message: _79.MsgRegisterResolverProtoMsg): _79.MsgRegisterResolver;
                toProto(message: _79.MsgRegisterResolver): Uint8Array;
                toProtoMsg(message: _79.MsgRegisterResolver): _79.MsgRegisterResolverProtoMsg;
            };
            MsgRegisterResolverResponse: {
                typeUrl: string;
                encode(_: _79.MsgRegisterResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.MsgRegisterResolverResponse;
                fromPartial(_: Partial<_79.MsgRegisterResolverResponse>): _79.MsgRegisterResolverResponse;
                fromAmino(_: _79.MsgRegisterResolverResponseAmino): _79.MsgRegisterResolverResponse;
                toAmino(_: _79.MsgRegisterResolverResponse): _79.MsgRegisterResolverResponseAmino;
                fromAminoMsg(object: _79.MsgRegisterResolverResponseAminoMsg): _79.MsgRegisterResolverResponse;
                fromProtoMsg(message: _79.MsgRegisterResolverResponseProtoMsg): _79.MsgRegisterResolverResponse;
                toProto(message: _79.MsgRegisterResolverResponse): Uint8Array;
                toProtoMsg(message: _79.MsgRegisterResolverResponse): _79.MsgRegisterResolverResponseProtoMsg;
            };
            DataID: {
                typeUrl: string;
                encode(message: _78.DataID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.DataID;
                fromPartial(object: Partial<_78.DataID>): _78.DataID;
                fromAmino(object: _78.DataIDAmino): _78.DataID;
                toAmino(message: _78.DataID): _78.DataIDAmino;
                fromAminoMsg(object: _78.DataIDAminoMsg): _78.DataID;
                fromProtoMsg(message: _78.DataIDProtoMsg): _78.DataID;
                toProto(message: _78.DataID): Uint8Array;
                toProtoMsg(message: _78.DataID): _78.DataIDProtoMsg;
            };
            DataAnchor: {
                typeUrl: string;
                encode(message: _78.DataAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.DataAnchor;
                fromPartial(object: Partial<_78.DataAnchor>): _78.DataAnchor;
                fromAmino(object: _78.DataAnchorAmino): _78.DataAnchor;
                toAmino(message: _78.DataAnchor): _78.DataAnchorAmino;
                fromAminoMsg(object: _78.DataAnchorAminoMsg): _78.DataAnchor;
                fromProtoMsg(message: _78.DataAnchorProtoMsg): _78.DataAnchor;
                toProto(message: _78.DataAnchor): Uint8Array;
                toProtoMsg(message: _78.DataAnchor): _78.DataAnchorProtoMsg;
            };
            DataAttestor: {
                typeUrl: string;
                encode(message: _78.DataAttestor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.DataAttestor;
                fromPartial(object: Partial<_78.DataAttestor>): _78.DataAttestor;
                fromAmino(object: _78.DataAttestorAmino): _78.DataAttestor;
                toAmino(message: _78.DataAttestor): _78.DataAttestorAmino;
                fromAminoMsg(object: _78.DataAttestorAminoMsg): _78.DataAttestor;
                fromProtoMsg(message: _78.DataAttestorProtoMsg): _78.DataAttestor;
                toProto(message: _78.DataAttestor): Uint8Array;
                toProtoMsg(message: _78.DataAttestor): _78.DataAttestorProtoMsg;
            };
            Resolver: {
                typeUrl: string;
                encode(message: _78.Resolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.Resolver;
                fromPartial(object: Partial<_78.Resolver>): _78.Resolver;
                fromAmino(object: _78.ResolverAmino): _78.Resolver;
                toAmino(message: _78.Resolver): _78.ResolverAmino;
                fromAminoMsg(object: _78.ResolverAminoMsg): _78.Resolver;
                fromProtoMsg(message: _78.ResolverProtoMsg): _78.Resolver;
                toProto(message: _78.Resolver): Uint8Array;
                toProtoMsg(message: _78.Resolver): _78.ResolverProtoMsg;
            };
            DataResolver: {
                typeUrl: string;
                encode(message: _78.DataResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.DataResolver;
                fromPartial(object: Partial<_78.DataResolver>): _78.DataResolver;
                fromAmino(object: _78.DataResolverAmino): _78.DataResolver;
                toAmino(message: _78.DataResolver): _78.DataResolverAmino;
                fromAminoMsg(object: _78.DataResolverAminoMsg): _78.DataResolver;
                fromProtoMsg(message: _78.DataResolverProtoMsg): _78.DataResolver;
                toProto(message: _78.DataResolver): Uint8Array;
                toProtoMsg(message: _78.DataResolver): _78.DataResolverProtoMsg;
            };
            QueryAnchorByIRIRequest: {
                typeUrl: string;
                encode(message: _77.QueryAnchorByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAnchorByIRIRequest;
                fromPartial(object: Partial<_77.QueryAnchorByIRIRequest>): _77.QueryAnchorByIRIRequest;
                fromAmino(object: _77.QueryAnchorByIRIRequestAmino): _77.QueryAnchorByIRIRequest;
                toAmino(message: _77.QueryAnchorByIRIRequest): _77.QueryAnchorByIRIRequestAmino;
                fromAminoMsg(object: _77.QueryAnchorByIRIRequestAminoMsg): _77.QueryAnchorByIRIRequest;
                fromProtoMsg(message: _77.QueryAnchorByIRIRequestProtoMsg): _77.QueryAnchorByIRIRequest;
                toProto(message: _77.QueryAnchorByIRIRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAnchorByIRIRequest): _77.QueryAnchorByIRIRequestProtoMsg;
            };
            QueryAnchorByIRIResponse: {
                typeUrl: string;
                encode(message: _77.QueryAnchorByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAnchorByIRIResponse;
                fromPartial(object: Partial<_77.QueryAnchorByIRIResponse>): _77.QueryAnchorByIRIResponse;
                fromAmino(object: _77.QueryAnchorByIRIResponseAmino): _77.QueryAnchorByIRIResponse;
                toAmino(message: _77.QueryAnchorByIRIResponse): _77.QueryAnchorByIRIResponseAmino;
                fromAminoMsg(object: _77.QueryAnchorByIRIResponseAminoMsg): _77.QueryAnchorByIRIResponse;
                fromProtoMsg(message: _77.QueryAnchorByIRIResponseProtoMsg): _77.QueryAnchorByIRIResponse;
                toProto(message: _77.QueryAnchorByIRIResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAnchorByIRIResponse): _77.QueryAnchorByIRIResponseProtoMsg;
            };
            QueryAnchorByHashRequest: {
                typeUrl: string;
                encode(message: _77.QueryAnchorByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAnchorByHashRequest;
                fromPartial(object: Partial<_77.QueryAnchorByHashRequest>): _77.QueryAnchorByHashRequest;
                fromAmino(object: _77.QueryAnchorByHashRequestAmino): _77.QueryAnchorByHashRequest;
                toAmino(message: _77.QueryAnchorByHashRequest): _77.QueryAnchorByHashRequestAmino;
                fromAminoMsg(object: _77.QueryAnchorByHashRequestAminoMsg): _77.QueryAnchorByHashRequest;
                fromProtoMsg(message: _77.QueryAnchorByHashRequestProtoMsg): _77.QueryAnchorByHashRequest;
                toProto(message: _77.QueryAnchorByHashRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAnchorByHashRequest): _77.QueryAnchorByHashRequestProtoMsg;
            };
            QueryAnchorByHashResponse: {
                typeUrl: string;
                encode(message: _77.QueryAnchorByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAnchorByHashResponse;
                fromPartial(object: Partial<_77.QueryAnchorByHashResponse>): _77.QueryAnchorByHashResponse;
                fromAmino(object: _77.QueryAnchorByHashResponseAmino): _77.QueryAnchorByHashResponse;
                toAmino(message: _77.QueryAnchorByHashResponse): _77.QueryAnchorByHashResponseAmino;
                fromAminoMsg(object: _77.QueryAnchorByHashResponseAminoMsg): _77.QueryAnchorByHashResponse;
                fromProtoMsg(message: _77.QueryAnchorByHashResponseProtoMsg): _77.QueryAnchorByHashResponse;
                toProto(message: _77.QueryAnchorByHashResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAnchorByHashResponse): _77.QueryAnchorByHashResponseProtoMsg;
            };
            QueryAttestationsByAttestorRequest: {
                typeUrl: string;
                encode(message: _77.QueryAttestationsByAttestorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAttestationsByAttestorRequest;
                fromPartial(object: Partial<_77.QueryAttestationsByAttestorRequest>): _77.QueryAttestationsByAttestorRequest;
                fromAmino(object: _77.QueryAttestationsByAttestorRequestAmino): _77.QueryAttestationsByAttestorRequest;
                toAmino(message: _77.QueryAttestationsByAttestorRequest): _77.QueryAttestationsByAttestorRequestAmino;
                fromAminoMsg(object: _77.QueryAttestationsByAttestorRequestAminoMsg): _77.QueryAttestationsByAttestorRequest;
                fromProtoMsg(message: _77.QueryAttestationsByAttestorRequestProtoMsg): _77.QueryAttestationsByAttestorRequest;
                toProto(message: _77.QueryAttestationsByAttestorRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAttestationsByAttestorRequest): _77.QueryAttestationsByAttestorRequestProtoMsg;
            };
            QueryAttestationsByAttestorResponse: {
                typeUrl: string;
                encode(message: _77.QueryAttestationsByAttestorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAttestationsByAttestorResponse;
                fromPartial(object: Partial<_77.QueryAttestationsByAttestorResponse>): _77.QueryAttestationsByAttestorResponse;
                fromAmino(object: _77.QueryAttestationsByAttestorResponseAmino): _77.QueryAttestationsByAttestorResponse;
                toAmino(message: _77.QueryAttestationsByAttestorResponse): _77.QueryAttestationsByAttestorResponseAmino;
                fromAminoMsg(object: _77.QueryAttestationsByAttestorResponseAminoMsg): _77.QueryAttestationsByAttestorResponse;
                fromProtoMsg(message: _77.QueryAttestationsByAttestorResponseProtoMsg): _77.QueryAttestationsByAttestorResponse;
                toProto(message: _77.QueryAttestationsByAttestorResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAttestationsByAttestorResponse): _77.QueryAttestationsByAttestorResponseProtoMsg;
            };
            QueryAttestationsByIRIRequest: {
                typeUrl: string;
                encode(message: _77.QueryAttestationsByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAttestationsByIRIRequest;
                fromPartial(object: Partial<_77.QueryAttestationsByIRIRequest>): _77.QueryAttestationsByIRIRequest;
                fromAmino(object: _77.QueryAttestationsByIRIRequestAmino): _77.QueryAttestationsByIRIRequest;
                toAmino(message: _77.QueryAttestationsByIRIRequest): _77.QueryAttestationsByIRIRequestAmino;
                fromAminoMsg(object: _77.QueryAttestationsByIRIRequestAminoMsg): _77.QueryAttestationsByIRIRequest;
                fromProtoMsg(message: _77.QueryAttestationsByIRIRequestProtoMsg): _77.QueryAttestationsByIRIRequest;
                toProto(message: _77.QueryAttestationsByIRIRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAttestationsByIRIRequest): _77.QueryAttestationsByIRIRequestProtoMsg;
            };
            QueryAttestationsByIRIResponse: {
                typeUrl: string;
                encode(message: _77.QueryAttestationsByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAttestationsByIRIResponse;
                fromPartial(object: Partial<_77.QueryAttestationsByIRIResponse>): _77.QueryAttestationsByIRIResponse;
                fromAmino(object: _77.QueryAttestationsByIRIResponseAmino): _77.QueryAttestationsByIRIResponse;
                toAmino(message: _77.QueryAttestationsByIRIResponse): _77.QueryAttestationsByIRIResponseAmino;
                fromAminoMsg(object: _77.QueryAttestationsByIRIResponseAminoMsg): _77.QueryAttestationsByIRIResponse;
                fromProtoMsg(message: _77.QueryAttestationsByIRIResponseProtoMsg): _77.QueryAttestationsByIRIResponse;
                toProto(message: _77.QueryAttestationsByIRIResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAttestationsByIRIResponse): _77.QueryAttestationsByIRIResponseProtoMsg;
            };
            QueryAttestationsByHashRequest: {
                typeUrl: string;
                encode(message: _77.QueryAttestationsByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAttestationsByHashRequest;
                fromPartial(object: Partial<_77.QueryAttestationsByHashRequest>): _77.QueryAttestationsByHashRequest;
                fromAmino(object: _77.QueryAttestationsByHashRequestAmino): _77.QueryAttestationsByHashRequest;
                toAmino(message: _77.QueryAttestationsByHashRequest): _77.QueryAttestationsByHashRequestAmino;
                fromAminoMsg(object: _77.QueryAttestationsByHashRequestAminoMsg): _77.QueryAttestationsByHashRequest;
                fromProtoMsg(message: _77.QueryAttestationsByHashRequestProtoMsg): _77.QueryAttestationsByHashRequest;
                toProto(message: _77.QueryAttestationsByHashRequest): Uint8Array;
                toProtoMsg(message: _77.QueryAttestationsByHashRequest): _77.QueryAttestationsByHashRequestProtoMsg;
            };
            QueryAttestationsByHashResponse: {
                typeUrl: string;
                encode(message: _77.QueryAttestationsByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryAttestationsByHashResponse;
                fromPartial(object: Partial<_77.QueryAttestationsByHashResponse>): _77.QueryAttestationsByHashResponse;
                fromAmino(object: _77.QueryAttestationsByHashResponseAmino): _77.QueryAttestationsByHashResponse;
                toAmino(message: _77.QueryAttestationsByHashResponse): _77.QueryAttestationsByHashResponseAmino;
                fromAminoMsg(object: _77.QueryAttestationsByHashResponseAminoMsg): _77.QueryAttestationsByHashResponse;
                fromProtoMsg(message: _77.QueryAttestationsByHashResponseProtoMsg): _77.QueryAttestationsByHashResponse;
                toProto(message: _77.QueryAttestationsByHashResponse): Uint8Array;
                toProtoMsg(message: _77.QueryAttestationsByHashResponse): _77.QueryAttestationsByHashResponseProtoMsg;
            };
            QueryResolverRequest: {
                typeUrl: string;
                encode(message: _77.QueryResolverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolverRequest;
                fromPartial(object: Partial<_77.QueryResolverRequest>): _77.QueryResolverRequest;
                fromAmino(object: _77.QueryResolverRequestAmino): _77.QueryResolverRequest;
                toAmino(message: _77.QueryResolverRequest): _77.QueryResolverRequestAmino;
                fromAminoMsg(object: _77.QueryResolverRequestAminoMsg): _77.QueryResolverRequest;
                fromProtoMsg(message: _77.QueryResolverRequestProtoMsg): _77.QueryResolverRequest;
                toProto(message: _77.QueryResolverRequest): Uint8Array;
                toProtoMsg(message: _77.QueryResolverRequest): _77.QueryResolverRequestProtoMsg;
            };
            QueryResolverResponse: {
                typeUrl: string;
                encode(message: _77.QueryResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolverResponse;
                fromPartial(object: Partial<_77.QueryResolverResponse>): _77.QueryResolverResponse;
                fromAmino(object: _77.QueryResolverResponseAmino): _77.QueryResolverResponse;
                toAmino(message: _77.QueryResolverResponse): _77.QueryResolverResponseAmino;
                fromAminoMsg(object: _77.QueryResolverResponseAminoMsg): _77.QueryResolverResponse;
                fromProtoMsg(message: _77.QueryResolverResponseProtoMsg): _77.QueryResolverResponse;
                toProto(message: _77.QueryResolverResponse): Uint8Array;
                toProtoMsg(message: _77.QueryResolverResponse): _77.QueryResolverResponseProtoMsg;
            };
            QueryResolversByIRIRequest: {
                typeUrl: string;
                encode(message: _77.QueryResolversByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolversByIRIRequest;
                fromPartial(object: Partial<_77.QueryResolversByIRIRequest>): _77.QueryResolversByIRIRequest;
                fromAmino(object: _77.QueryResolversByIRIRequestAmino): _77.QueryResolversByIRIRequest;
                toAmino(message: _77.QueryResolversByIRIRequest): _77.QueryResolversByIRIRequestAmino;
                fromAminoMsg(object: _77.QueryResolversByIRIRequestAminoMsg): _77.QueryResolversByIRIRequest;
                fromProtoMsg(message: _77.QueryResolversByIRIRequestProtoMsg): _77.QueryResolversByIRIRequest;
                toProto(message: _77.QueryResolversByIRIRequest): Uint8Array;
                toProtoMsg(message: _77.QueryResolversByIRIRequest): _77.QueryResolversByIRIRequestProtoMsg;
            };
            QueryResolversByIRIResponse: {
                typeUrl: string;
                encode(message: _77.QueryResolversByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolversByIRIResponse;
                fromPartial(object: Partial<_77.QueryResolversByIRIResponse>): _77.QueryResolversByIRIResponse;
                fromAmino(object: _77.QueryResolversByIRIResponseAmino): _77.QueryResolversByIRIResponse;
                toAmino(message: _77.QueryResolversByIRIResponse): _77.QueryResolversByIRIResponseAmino;
                fromAminoMsg(object: _77.QueryResolversByIRIResponseAminoMsg): _77.QueryResolversByIRIResponse;
                fromProtoMsg(message: _77.QueryResolversByIRIResponseProtoMsg): _77.QueryResolversByIRIResponse;
                toProto(message: _77.QueryResolversByIRIResponse): Uint8Array;
                toProtoMsg(message: _77.QueryResolversByIRIResponse): _77.QueryResolversByIRIResponseProtoMsg;
            };
            QueryResolversByHashRequest: {
                typeUrl: string;
                encode(message: _77.QueryResolversByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolversByHashRequest;
                fromPartial(object: Partial<_77.QueryResolversByHashRequest>): _77.QueryResolversByHashRequest;
                fromAmino(object: _77.QueryResolversByHashRequestAmino): _77.QueryResolversByHashRequest;
                toAmino(message: _77.QueryResolversByHashRequest): _77.QueryResolversByHashRequestAmino;
                fromAminoMsg(object: _77.QueryResolversByHashRequestAminoMsg): _77.QueryResolversByHashRequest;
                fromProtoMsg(message: _77.QueryResolversByHashRequestProtoMsg): _77.QueryResolversByHashRequest;
                toProto(message: _77.QueryResolversByHashRequest): Uint8Array;
                toProtoMsg(message: _77.QueryResolversByHashRequest): _77.QueryResolversByHashRequestProtoMsg;
            };
            QueryResolversByHashResponse: {
                typeUrl: string;
                encode(message: _77.QueryResolversByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolversByHashResponse;
                fromPartial(object: Partial<_77.QueryResolversByHashResponse>): _77.QueryResolversByHashResponse;
                fromAmino(object: _77.QueryResolversByHashResponseAmino): _77.QueryResolversByHashResponse;
                toAmino(message: _77.QueryResolversByHashResponse): _77.QueryResolversByHashResponseAmino;
                fromAminoMsg(object: _77.QueryResolversByHashResponseAminoMsg): _77.QueryResolversByHashResponse;
                fromProtoMsg(message: _77.QueryResolversByHashResponseProtoMsg): _77.QueryResolversByHashResponse;
                toProto(message: _77.QueryResolversByHashResponse): Uint8Array;
                toProtoMsg(message: _77.QueryResolversByHashResponse): _77.QueryResolversByHashResponseProtoMsg;
            };
            QueryResolversByURLRequest: {
                typeUrl: string;
                encode(message: _77.QueryResolversByURLRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolversByURLRequest;
                fromPartial(object: Partial<_77.QueryResolversByURLRequest>): _77.QueryResolversByURLRequest;
                fromAmino(object: _77.QueryResolversByURLRequestAmino): _77.QueryResolversByURLRequest;
                toAmino(message: _77.QueryResolversByURLRequest): _77.QueryResolversByURLRequestAmino;
                fromAminoMsg(object: _77.QueryResolversByURLRequestAminoMsg): _77.QueryResolversByURLRequest;
                fromProtoMsg(message: _77.QueryResolversByURLRequestProtoMsg): _77.QueryResolversByURLRequest;
                toProto(message: _77.QueryResolversByURLRequest): Uint8Array;
                toProtoMsg(message: _77.QueryResolversByURLRequest): _77.QueryResolversByURLRequestProtoMsg;
            };
            QueryResolversByURLResponse: {
                typeUrl: string;
                encode(message: _77.QueryResolversByURLResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.QueryResolversByURLResponse;
                fromPartial(object: Partial<_77.QueryResolversByURLResponse>): _77.QueryResolversByURLResponse;
                fromAmino(object: _77.QueryResolversByURLResponseAmino): _77.QueryResolversByURLResponse;
                toAmino(message: _77.QueryResolversByURLResponse): _77.QueryResolversByURLResponseAmino;
                fromAminoMsg(object: _77.QueryResolversByURLResponseAminoMsg): _77.QueryResolversByURLResponse;
                fromProtoMsg(message: _77.QueryResolversByURLResponseProtoMsg): _77.QueryResolversByURLResponse;
                toProto(message: _77.QueryResolversByURLResponse): Uint8Array;
                toProtoMsg(message: _77.QueryResolversByURLResponse): _77.QueryResolversByURLResponseProtoMsg;
            };
            ConvertIRIToHashRequest: {
                typeUrl: string;
                encode(message: _77.ConvertIRIToHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.ConvertIRIToHashRequest;
                fromPartial(object: Partial<_77.ConvertIRIToHashRequest>): _77.ConvertIRIToHashRequest;
                fromAmino(object: _77.ConvertIRIToHashRequestAmino): _77.ConvertIRIToHashRequest;
                toAmino(message: _77.ConvertIRIToHashRequest): _77.ConvertIRIToHashRequestAmino;
                fromAminoMsg(object: _77.ConvertIRIToHashRequestAminoMsg): _77.ConvertIRIToHashRequest;
                fromProtoMsg(message: _77.ConvertIRIToHashRequestProtoMsg): _77.ConvertIRIToHashRequest;
                toProto(message: _77.ConvertIRIToHashRequest): Uint8Array;
                toProtoMsg(message: _77.ConvertIRIToHashRequest): _77.ConvertIRIToHashRequestProtoMsg;
            };
            ConvertIRIToHashResponse: {
                typeUrl: string;
                encode(message: _77.ConvertIRIToHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.ConvertIRIToHashResponse;
                fromPartial(object: Partial<_77.ConvertIRIToHashResponse>): _77.ConvertIRIToHashResponse;
                fromAmino(object: _77.ConvertIRIToHashResponseAmino): _77.ConvertIRIToHashResponse;
                toAmino(message: _77.ConvertIRIToHashResponse): _77.ConvertIRIToHashResponseAmino;
                fromAminoMsg(object: _77.ConvertIRIToHashResponseAminoMsg): _77.ConvertIRIToHashResponse;
                fromProtoMsg(message: _77.ConvertIRIToHashResponseProtoMsg): _77.ConvertIRIToHashResponse;
                toProto(message: _77.ConvertIRIToHashResponse): Uint8Array;
                toProtoMsg(message: _77.ConvertIRIToHashResponse): _77.ConvertIRIToHashResponseProtoMsg;
            };
            ConvertHashToIRIRequest: {
                typeUrl: string;
                encode(message: _77.ConvertHashToIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.ConvertHashToIRIRequest;
                fromPartial(object: Partial<_77.ConvertHashToIRIRequest>): _77.ConvertHashToIRIRequest;
                fromAmino(object: _77.ConvertHashToIRIRequestAmino): _77.ConvertHashToIRIRequest;
                toAmino(message: _77.ConvertHashToIRIRequest): _77.ConvertHashToIRIRequestAmino;
                fromAminoMsg(object: _77.ConvertHashToIRIRequestAminoMsg): _77.ConvertHashToIRIRequest;
                fromProtoMsg(message: _77.ConvertHashToIRIRequestProtoMsg): _77.ConvertHashToIRIRequest;
                toProto(message: _77.ConvertHashToIRIRequest): Uint8Array;
                toProtoMsg(message: _77.ConvertHashToIRIRequest): _77.ConvertHashToIRIRequestProtoMsg;
            };
            ConvertHashToIRIResponse: {
                typeUrl: string;
                encode(message: _77.ConvertHashToIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.ConvertHashToIRIResponse;
                fromPartial(object: Partial<_77.ConvertHashToIRIResponse>): _77.ConvertHashToIRIResponse;
                fromAmino(object: _77.ConvertHashToIRIResponseAmino): _77.ConvertHashToIRIResponse;
                toAmino(message: _77.ConvertHashToIRIResponse): _77.ConvertHashToIRIResponseAmino;
                fromAminoMsg(object: _77.ConvertHashToIRIResponseAminoMsg): _77.ConvertHashToIRIResponse;
                fromProtoMsg(message: _77.ConvertHashToIRIResponseProtoMsg): _77.ConvertHashToIRIResponse;
                toProto(message: _77.ConvertHashToIRIResponse): Uint8Array;
                toProtoMsg(message: _77.ConvertHashToIRIResponse): _77.ConvertHashToIRIResponseProtoMsg;
            };
            AnchorInfo: {
                typeUrl: string;
                encode(message: _77.AnchorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.AnchorInfo;
                fromPartial(object: Partial<_77.AnchorInfo>): _77.AnchorInfo;
                fromAmino(object: _77.AnchorInfoAmino): _77.AnchorInfo;
                toAmino(message: _77.AnchorInfo): _77.AnchorInfoAmino;
                fromAminoMsg(object: _77.AnchorInfoAminoMsg): _77.AnchorInfo;
                fromProtoMsg(message: _77.AnchorInfoProtoMsg): _77.AnchorInfo;
                toProto(message: _77.AnchorInfo): Uint8Array;
                toProtoMsg(message: _77.AnchorInfo): _77.AnchorInfoProtoMsg;
            };
            AttestationInfo: {
                typeUrl: string;
                encode(message: _77.AttestationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.AttestationInfo;
                fromPartial(object: Partial<_77.AttestationInfo>): _77.AttestationInfo;
                fromAmino(object: _77.AttestationInfoAmino): _77.AttestationInfo;
                toAmino(message: _77.AttestationInfo): _77.AttestationInfoAmino;
                fromAminoMsg(object: _77.AttestationInfoAminoMsg): _77.AttestationInfo;
                fromProtoMsg(message: _77.AttestationInfoProtoMsg): _77.AttestationInfo;
                toProto(message: _77.AttestationInfo): Uint8Array;
                toProtoMsg(message: _77.AttestationInfo): _77.AttestationInfoProtoMsg;
            };
            ResolverInfo: {
                typeUrl: string;
                encode(message: _77.ResolverInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.ResolverInfo;
                fromPartial(object: Partial<_77.ResolverInfo>): _77.ResolverInfo;
                fromAmino(object: _77.ResolverInfoAmino): _77.ResolverInfo;
                toAmino(message: _77.ResolverInfo): _77.ResolverInfoAmino;
                fromAminoMsg(object: _77.ResolverInfoAminoMsg): _77.ResolverInfo;
                fromProtoMsg(message: _77.ResolverInfoProtoMsg): _77.ResolverInfo;
                toProto(message: _77.ResolverInfo): Uint8Array;
                toProtoMsg(message: _77.ResolverInfo): _77.ResolverInfoProtoMsg;
            };
            EventAnchor: {
                typeUrl: string;
                encode(message: _76.EventAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.EventAnchor;
                fromPartial(object: Partial<_76.EventAnchor>): _76.EventAnchor;
                fromAmino(object: _76.EventAnchorAmino): _76.EventAnchor;
                toAmino(message: _76.EventAnchor): _76.EventAnchorAmino;
                fromAminoMsg(object: _76.EventAnchorAminoMsg): _76.EventAnchor;
                fromProtoMsg(message: _76.EventAnchorProtoMsg): _76.EventAnchor;
                toProto(message: _76.EventAnchor): Uint8Array;
                toProtoMsg(message: _76.EventAnchor): _76.EventAnchorProtoMsg;
            };
            EventAttest: {
                typeUrl: string;
                encode(message: _76.EventAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.EventAttest;
                fromPartial(object: Partial<_76.EventAttest>): _76.EventAttest;
                fromAmino(object: _76.EventAttestAmino): _76.EventAttest;
                toAmino(message: _76.EventAttest): _76.EventAttestAmino;
                fromAminoMsg(object: _76.EventAttestAminoMsg): _76.EventAttest;
                fromProtoMsg(message: _76.EventAttestProtoMsg): _76.EventAttest;
                toProto(message: _76.EventAttest): Uint8Array;
                toProtoMsg(message: _76.EventAttest): _76.EventAttestProtoMsg;
            };
            EventDefineResolver: {
                typeUrl: string;
                encode(message: _76.EventDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.EventDefineResolver;
                fromPartial(object: Partial<_76.EventDefineResolver>): _76.EventDefineResolver;
                fromAmino(object: _76.EventDefineResolverAmino): _76.EventDefineResolver;
                toAmino(message: _76.EventDefineResolver): _76.EventDefineResolverAmino;
                fromAminoMsg(object: _76.EventDefineResolverAminoMsg): _76.EventDefineResolver;
                fromProtoMsg(message: _76.EventDefineResolverProtoMsg): _76.EventDefineResolver;
                toProto(message: _76.EventDefineResolver): Uint8Array;
                toProtoMsg(message: _76.EventDefineResolver): _76.EventDefineResolverProtoMsg;
            };
            EventRegisterResolver: {
                typeUrl: string;
                encode(message: _76.EventRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.EventRegisterResolver;
                fromPartial(object: Partial<_76.EventRegisterResolver>): _76.EventRegisterResolver;
                fromAmino(object: _76.EventRegisterResolverAmino): _76.EventRegisterResolver;
                toAmino(message: _76.EventRegisterResolver): _76.EventRegisterResolverAmino;
                fromAminoMsg(object: _76.EventRegisterResolverAminoMsg): _76.EventRegisterResolver;
                fromProtoMsg(message: _76.EventRegisterResolverProtoMsg): _76.EventRegisterResolver;
                toProto(message: _76.EventRegisterResolver): Uint8Array;
                toProtoMsg(message: _76.EventRegisterResolver): _76.EventRegisterResolverProtoMsg;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                MsgClientImpl: typeof _212.MsgClientImpl;
                QueryClientImpl: typeof _206.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    basket(request: _82.QueryBasketRequest): Promise<_82.QueryBasketResponse>;
                    baskets(request?: _82.QueryBasketsRequest): Promise<_82.QueryBasketsResponse>;
                    basketBalances(request: _82.QueryBasketBalancesRequest): Promise<_82.QueryBasketBalancesResponse>;
                    basketBalance(request: _82.QueryBasketBalanceRequest): Promise<_82.QueryBasketBalanceResponse>;
                    basketFee(request?: _82.QueryBasketFeeRequest): Promise<_82.QueryBasketFeeResponse>;
                };
                LCDQueryClient: typeof _200.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _84.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _84.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _84.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _84.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _84.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _84.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _84.MsgCreate): {
                            typeUrl: string;
                            value: _84.MsgCreate;
                        };
                        put(value: _84.MsgPut): {
                            typeUrl: string;
                            value: _84.MsgPut;
                        };
                        take(value: _84.MsgTake): {
                            typeUrl: string;
                            value: _84.MsgTake;
                        };
                        updateBasketFee(value: _84.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _84.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _84.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _84.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _84.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _84.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _84.MsgCreate): {
                            typeUrl: string;
                            value: _84.MsgCreate;
                        };
                        put(value: _84.MsgPut): {
                            typeUrl: string;
                            value: _84.MsgPut;
                        };
                        take(value: _84.MsgTake): {
                            typeUrl: string;
                            value: _84.MsgTake;
                        };
                        updateBasketFee(value: _84.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _84.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _84.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _84.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _84.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _84.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: (message: _84.MsgCreate) => _84.MsgCreateAmino;
                        fromAmino: (object: _84.MsgCreateAmino) => _84.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: (message: _84.MsgPut) => _84.MsgPutAmino;
                        fromAmino: (object: _84.MsgPutAmino) => _84.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: (message: _84.MsgTake) => _84.MsgTakeAmino;
                        fromAmino: (object: _84.MsgTakeAmino) => _84.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: (message: _84.MsgUpdateBasketFee) => _84.MsgUpdateBasketFeeAmino;
                        fromAmino: (object: _84.MsgUpdateBasketFeeAmino) => _84.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: (message: _84.MsgUpdateCurator) => _84.MsgUpdateCuratorAmino;
                        fromAmino: (object: _84.MsgUpdateCuratorAmino) => _84.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: (message: _84.MsgUpdateDateCriteria) => _84.MsgUpdateDateCriteriaAmino;
                        fromAmino: (object: _84.MsgUpdateDateCriteriaAmino) => _84.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    typeUrl: string;
                    encode(message: _85.BasketCredit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.BasketCredit;
                    fromPartial(object: Partial<_85.BasketCredit>): _85.BasketCredit;
                    fromAmino(object: _85.BasketCreditAmino): _85.BasketCredit;
                    toAmino(message: _85.BasketCredit): _85.BasketCreditAmino;
                    fromAminoMsg(object: _85.BasketCreditAminoMsg): _85.BasketCredit;
                    fromProtoMsg(message: _85.BasketCreditProtoMsg): _85.BasketCredit;
                    toProto(message: _85.BasketCredit): Uint8Array;
                    toProtoMsg(message: _85.BasketCredit): _85.BasketCreditProtoMsg;
                };
                DateCriteria: {
                    typeUrl: string;
                    encode(message: _85.DateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.DateCriteria;
                    fromPartial(object: Partial<_85.DateCriteria>): _85.DateCriteria;
                    fromAmino(object: _85.DateCriteriaAmino): _85.DateCriteria;
                    toAmino(message: _85.DateCriteria): _85.DateCriteriaAmino;
                    fromAminoMsg(object: _85.DateCriteriaAminoMsg): _85.DateCriteria;
                    fromProtoMsg(message: _85.DateCriteriaProtoMsg): _85.DateCriteria;
                    toProto(message: _85.DateCriteria): Uint8Array;
                    toProtoMsg(message: _85.DateCriteria): _85.DateCriteriaProtoMsg;
                };
                MsgCreate: {
                    typeUrl: string;
                    encode(message: _84.MsgCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgCreate;
                    fromPartial(object: Partial<_84.MsgCreate>): _84.MsgCreate;
                    fromAmino(object: _84.MsgCreateAmino): _84.MsgCreate;
                    toAmino(message: _84.MsgCreate): _84.MsgCreateAmino;
                    fromAminoMsg(object: _84.MsgCreateAminoMsg): _84.MsgCreate;
                    toAminoMsg(message: _84.MsgCreate): _84.MsgCreateAminoMsg;
                    fromProtoMsg(message: _84.MsgCreateProtoMsg): _84.MsgCreate;
                    toProto(message: _84.MsgCreate): Uint8Array;
                    toProtoMsg(message: _84.MsgCreate): _84.MsgCreateProtoMsg;
                };
                MsgCreateResponse: {
                    typeUrl: string;
                    encode(message: _84.MsgCreateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgCreateResponse;
                    fromPartial(object: Partial<_84.MsgCreateResponse>): _84.MsgCreateResponse;
                    fromAmino(object: _84.MsgCreateResponseAmino): _84.MsgCreateResponse;
                    toAmino(message: _84.MsgCreateResponse): _84.MsgCreateResponseAmino;
                    fromAminoMsg(object: _84.MsgCreateResponseAminoMsg): _84.MsgCreateResponse;
                    fromProtoMsg(message: _84.MsgCreateResponseProtoMsg): _84.MsgCreateResponse;
                    toProto(message: _84.MsgCreateResponse): Uint8Array;
                    toProtoMsg(message: _84.MsgCreateResponse): _84.MsgCreateResponseProtoMsg;
                };
                MsgPut: {
                    typeUrl: string;
                    encode(message: _84.MsgPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgPut;
                    fromPartial(object: Partial<_84.MsgPut>): _84.MsgPut;
                    fromAmino(object: _84.MsgPutAmino): _84.MsgPut;
                    toAmino(message: _84.MsgPut): _84.MsgPutAmino;
                    fromAminoMsg(object: _84.MsgPutAminoMsg): _84.MsgPut;
                    toAminoMsg(message: _84.MsgPut): _84.MsgPutAminoMsg;
                    fromProtoMsg(message: _84.MsgPutProtoMsg): _84.MsgPut;
                    toProto(message: _84.MsgPut): Uint8Array;
                    toProtoMsg(message: _84.MsgPut): _84.MsgPutProtoMsg;
                };
                MsgPutResponse: {
                    typeUrl: string;
                    encode(message: _84.MsgPutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgPutResponse;
                    fromPartial(object: Partial<_84.MsgPutResponse>): _84.MsgPutResponse;
                    fromAmino(object: _84.MsgPutResponseAmino): _84.MsgPutResponse;
                    toAmino(message: _84.MsgPutResponse): _84.MsgPutResponseAmino;
                    fromAminoMsg(object: _84.MsgPutResponseAminoMsg): _84.MsgPutResponse;
                    fromProtoMsg(message: _84.MsgPutResponseProtoMsg): _84.MsgPutResponse;
                    toProto(message: _84.MsgPutResponse): Uint8Array;
                    toProtoMsg(message: _84.MsgPutResponse): _84.MsgPutResponseProtoMsg;
                };
                MsgTake: {
                    typeUrl: string;
                    encode(message: _84.MsgTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgTake;
                    fromPartial(object: Partial<_84.MsgTake>): _84.MsgTake;
                    fromAmino(object: _84.MsgTakeAmino): _84.MsgTake;
                    toAmino(message: _84.MsgTake): _84.MsgTakeAmino;
                    fromAminoMsg(object: _84.MsgTakeAminoMsg): _84.MsgTake;
                    toAminoMsg(message: _84.MsgTake): _84.MsgTakeAminoMsg;
                    fromProtoMsg(message: _84.MsgTakeProtoMsg): _84.MsgTake;
                    toProto(message: _84.MsgTake): Uint8Array;
                    toProtoMsg(message: _84.MsgTake): _84.MsgTakeProtoMsg;
                };
                MsgTakeResponse: {
                    typeUrl: string;
                    encode(message: _84.MsgTakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgTakeResponse;
                    fromPartial(object: Partial<_84.MsgTakeResponse>): _84.MsgTakeResponse;
                    fromAmino(object: _84.MsgTakeResponseAmino): _84.MsgTakeResponse;
                    toAmino(message: _84.MsgTakeResponse): _84.MsgTakeResponseAmino;
                    fromAminoMsg(object: _84.MsgTakeResponseAminoMsg): _84.MsgTakeResponse;
                    fromProtoMsg(message: _84.MsgTakeResponseProtoMsg): _84.MsgTakeResponse;
                    toProto(message: _84.MsgTakeResponse): Uint8Array;
                    toProtoMsg(message: _84.MsgTakeResponse): _84.MsgTakeResponseProtoMsg;
                };
                MsgUpdateBasketFee: {
                    typeUrl: string;
                    encode(message: _84.MsgUpdateBasketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgUpdateBasketFee;
                    fromPartial(object: Partial<_84.MsgUpdateBasketFee>): _84.MsgUpdateBasketFee;
                    fromAmino(object: _84.MsgUpdateBasketFeeAmino): _84.MsgUpdateBasketFee;
                    toAmino(message: _84.MsgUpdateBasketFee): _84.MsgUpdateBasketFeeAmino;
                    fromAminoMsg(object: _84.MsgUpdateBasketFeeAminoMsg): _84.MsgUpdateBasketFee;
                    toAminoMsg(message: _84.MsgUpdateBasketFee): _84.MsgUpdateBasketFeeAminoMsg;
                    fromProtoMsg(message: _84.MsgUpdateBasketFeeProtoMsg): _84.MsgUpdateBasketFee;
                    toProto(message: _84.MsgUpdateBasketFee): Uint8Array;
                    toProtoMsg(message: _84.MsgUpdateBasketFee): _84.MsgUpdateBasketFeeProtoMsg;
                };
                MsgUpdateBasketFeeResponse: {
                    typeUrl: string;
                    encode(_: _84.MsgUpdateBasketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgUpdateBasketFeeResponse;
                    fromPartial(_: Partial<_84.MsgUpdateBasketFeeResponse>): _84.MsgUpdateBasketFeeResponse;
                    fromAmino(_: _84.MsgUpdateBasketFeeResponseAmino): _84.MsgUpdateBasketFeeResponse;
                    toAmino(_: _84.MsgUpdateBasketFeeResponse): _84.MsgUpdateBasketFeeResponseAmino;
                    fromAminoMsg(object: _84.MsgUpdateBasketFeeResponseAminoMsg): _84.MsgUpdateBasketFeeResponse;
                    fromProtoMsg(message: _84.MsgUpdateBasketFeeResponseProtoMsg): _84.MsgUpdateBasketFeeResponse;
                    toProto(message: _84.MsgUpdateBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _84.MsgUpdateBasketFeeResponse): _84.MsgUpdateBasketFeeResponseProtoMsg;
                };
                MsgUpdateCurator: {
                    typeUrl: string;
                    encode(message: _84.MsgUpdateCurator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgUpdateCurator;
                    fromPartial(object: Partial<_84.MsgUpdateCurator>): _84.MsgUpdateCurator;
                    fromAmino(object: _84.MsgUpdateCuratorAmino): _84.MsgUpdateCurator;
                    toAmino(message: _84.MsgUpdateCurator): _84.MsgUpdateCuratorAmino;
                    fromAminoMsg(object: _84.MsgUpdateCuratorAminoMsg): _84.MsgUpdateCurator;
                    toAminoMsg(message: _84.MsgUpdateCurator): _84.MsgUpdateCuratorAminoMsg;
                    fromProtoMsg(message: _84.MsgUpdateCuratorProtoMsg): _84.MsgUpdateCurator;
                    toProto(message: _84.MsgUpdateCurator): Uint8Array;
                    toProtoMsg(message: _84.MsgUpdateCurator): _84.MsgUpdateCuratorProtoMsg;
                };
                MsgUpdateCuratorResponse: {
                    typeUrl: string;
                    encode(_: _84.MsgUpdateCuratorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgUpdateCuratorResponse;
                    fromPartial(_: Partial<_84.MsgUpdateCuratorResponse>): _84.MsgUpdateCuratorResponse;
                    fromAmino(_: _84.MsgUpdateCuratorResponseAmino): _84.MsgUpdateCuratorResponse;
                    toAmino(_: _84.MsgUpdateCuratorResponse): _84.MsgUpdateCuratorResponseAmino;
                    fromAminoMsg(object: _84.MsgUpdateCuratorResponseAminoMsg): _84.MsgUpdateCuratorResponse;
                    fromProtoMsg(message: _84.MsgUpdateCuratorResponseProtoMsg): _84.MsgUpdateCuratorResponse;
                    toProto(message: _84.MsgUpdateCuratorResponse): Uint8Array;
                    toProtoMsg(message: _84.MsgUpdateCuratorResponse): _84.MsgUpdateCuratorResponseProtoMsg;
                };
                MsgUpdateDateCriteria: {
                    typeUrl: string;
                    encode(message: _84.MsgUpdateDateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgUpdateDateCriteria;
                    fromPartial(object: Partial<_84.MsgUpdateDateCriteria>): _84.MsgUpdateDateCriteria;
                    fromAmino(object: _84.MsgUpdateDateCriteriaAmino): _84.MsgUpdateDateCriteria;
                    toAmino(message: _84.MsgUpdateDateCriteria): _84.MsgUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _84.MsgUpdateDateCriteriaAminoMsg): _84.MsgUpdateDateCriteria;
                    toAminoMsg(message: _84.MsgUpdateDateCriteria): _84.MsgUpdateDateCriteriaAminoMsg;
                    fromProtoMsg(message: _84.MsgUpdateDateCriteriaProtoMsg): _84.MsgUpdateDateCriteria;
                    toProto(message: _84.MsgUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _84.MsgUpdateDateCriteria): _84.MsgUpdateDateCriteriaProtoMsg;
                };
                MsgUpdateDateCriteriaResponse: {
                    typeUrl: string;
                    encode(_: _84.MsgUpdateDateCriteriaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.MsgUpdateDateCriteriaResponse;
                    fromPartial(_: Partial<_84.MsgUpdateDateCriteriaResponse>): _84.MsgUpdateDateCriteriaResponse;
                    fromAmino(_: _84.MsgUpdateDateCriteriaResponseAmino): _84.MsgUpdateDateCriteriaResponse;
                    toAmino(_: _84.MsgUpdateDateCriteriaResponse): _84.MsgUpdateDateCriteriaResponseAmino;
                    fromAminoMsg(object: _84.MsgUpdateDateCriteriaResponseAminoMsg): _84.MsgUpdateDateCriteriaResponse;
                    fromProtoMsg(message: _84.MsgUpdateDateCriteriaResponseProtoMsg): _84.MsgUpdateDateCriteriaResponse;
                    toProto(message: _84.MsgUpdateDateCriteriaResponse): Uint8Array;
                    toProtoMsg(message: _84.MsgUpdateDateCriteriaResponse): _84.MsgUpdateDateCriteriaResponseProtoMsg;
                };
                Basket: {
                    typeUrl: string;
                    encode(message: _83.Basket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Basket;
                    fromPartial(object: Partial<_83.Basket>): _83.Basket;
                    fromAmino(object: _83.BasketAmino): _83.Basket;
                    toAmino(message: _83.Basket): _83.BasketAmino;
                    fromAminoMsg(object: _83.BasketAminoMsg): _83.Basket;
                    fromProtoMsg(message: _83.BasketProtoMsg): _83.Basket;
                    toProto(message: _83.Basket): Uint8Array;
                    toProtoMsg(message: _83.Basket): _83.BasketProtoMsg;
                };
                BasketClass: {
                    typeUrl: string;
                    encode(message: _83.BasketClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.BasketClass;
                    fromPartial(object: Partial<_83.BasketClass>): _83.BasketClass;
                    fromAmino(object: _83.BasketClassAmino): _83.BasketClass;
                    toAmino(message: _83.BasketClass): _83.BasketClassAmino;
                    fromAminoMsg(object: _83.BasketClassAminoMsg): _83.BasketClass;
                    fromProtoMsg(message: _83.BasketClassProtoMsg): _83.BasketClass;
                    toProto(message: _83.BasketClass): Uint8Array;
                    toProtoMsg(message: _83.BasketClass): _83.BasketClassProtoMsg;
                };
                BasketBalance: {
                    typeUrl: string;
                    encode(message: _83.BasketBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.BasketBalance;
                    fromPartial(object: Partial<_83.BasketBalance>): _83.BasketBalance;
                    fromAmino(object: _83.BasketBalanceAmino): _83.BasketBalance;
                    toAmino(message: _83.BasketBalance): _83.BasketBalanceAmino;
                    fromAminoMsg(object: _83.BasketBalanceAminoMsg): _83.BasketBalance;
                    fromProtoMsg(message: _83.BasketBalanceProtoMsg): _83.BasketBalance;
                    toProto(message: _83.BasketBalance): Uint8Array;
                    toProtoMsg(message: _83.BasketBalance): _83.BasketBalanceProtoMsg;
                };
                BasketFee: {
                    typeUrl: string;
                    encode(message: _83.BasketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.BasketFee;
                    fromPartial(object: Partial<_83.BasketFee>): _83.BasketFee;
                    fromAmino(object: _83.BasketFeeAmino): _83.BasketFee;
                    toAmino(message: _83.BasketFee): _83.BasketFeeAmino;
                    fromAminoMsg(object: _83.BasketFeeAminoMsg): _83.BasketFee;
                    fromProtoMsg(message: _83.BasketFeeProtoMsg): _83.BasketFee;
                    toProto(message: _83.BasketFee): Uint8Array;
                    toProtoMsg(message: _83.BasketFee): _83.BasketFeeProtoMsg;
                };
                QueryBasketRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketRequest;
                    fromPartial(object: Partial<_82.QueryBasketRequest>): _82.QueryBasketRequest;
                    fromAmino(object: _82.QueryBasketRequestAmino): _82.QueryBasketRequest;
                    toAmino(message: _82.QueryBasketRequest): _82.QueryBasketRequestAmino;
                    fromAminoMsg(object: _82.QueryBasketRequestAminoMsg): _82.QueryBasketRequest;
                    fromProtoMsg(message: _82.QueryBasketRequestProtoMsg): _82.QueryBasketRequest;
                    toProto(message: _82.QueryBasketRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketRequest): _82.QueryBasketRequestProtoMsg;
                };
                QueryBasketResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketResponse;
                    fromPartial(object: Partial<_82.QueryBasketResponse>): _82.QueryBasketResponse;
                    fromAmino(object: _82.QueryBasketResponseAmino): _82.QueryBasketResponse;
                    toAmino(message: _82.QueryBasketResponse): _82.QueryBasketResponseAmino;
                    fromAminoMsg(object: _82.QueryBasketResponseAminoMsg): _82.QueryBasketResponse;
                    fromProtoMsg(message: _82.QueryBasketResponseProtoMsg): _82.QueryBasketResponse;
                    toProto(message: _82.QueryBasketResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketResponse): _82.QueryBasketResponseProtoMsg;
                };
                QueryBasketsRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketsRequest;
                    fromPartial(object: Partial<_82.QueryBasketsRequest>): _82.QueryBasketsRequest;
                    fromAmino(object: _82.QueryBasketsRequestAmino): _82.QueryBasketsRequest;
                    toAmino(message: _82.QueryBasketsRequest): _82.QueryBasketsRequestAmino;
                    fromAminoMsg(object: _82.QueryBasketsRequestAminoMsg): _82.QueryBasketsRequest;
                    fromProtoMsg(message: _82.QueryBasketsRequestProtoMsg): _82.QueryBasketsRequest;
                    toProto(message: _82.QueryBasketsRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketsRequest): _82.QueryBasketsRequestProtoMsg;
                };
                QueryBasketsResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketsResponse;
                    fromPartial(object: Partial<_82.QueryBasketsResponse>): _82.QueryBasketsResponse;
                    fromAmino(object: _82.QueryBasketsResponseAmino): _82.QueryBasketsResponse;
                    toAmino(message: _82.QueryBasketsResponse): _82.QueryBasketsResponseAmino;
                    fromAminoMsg(object: _82.QueryBasketsResponseAminoMsg): _82.QueryBasketsResponse;
                    fromProtoMsg(message: _82.QueryBasketsResponseProtoMsg): _82.QueryBasketsResponse;
                    toProto(message: _82.QueryBasketsResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketsResponse): _82.QueryBasketsResponseProtoMsg;
                };
                QueryBasketBalancesRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketBalancesRequest;
                    fromPartial(object: Partial<_82.QueryBasketBalancesRequest>): _82.QueryBasketBalancesRequest;
                    fromAmino(object: _82.QueryBasketBalancesRequestAmino): _82.QueryBasketBalancesRequest;
                    toAmino(message: _82.QueryBasketBalancesRequest): _82.QueryBasketBalancesRequestAmino;
                    fromAminoMsg(object: _82.QueryBasketBalancesRequestAminoMsg): _82.QueryBasketBalancesRequest;
                    fromProtoMsg(message: _82.QueryBasketBalancesRequestProtoMsg): _82.QueryBasketBalancesRequest;
                    toProto(message: _82.QueryBasketBalancesRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketBalancesRequest): _82.QueryBasketBalancesRequestProtoMsg;
                };
                QueryBasketBalancesResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketBalancesResponse;
                    fromPartial(object: Partial<_82.QueryBasketBalancesResponse>): _82.QueryBasketBalancesResponse;
                    fromAmino(object: _82.QueryBasketBalancesResponseAmino): _82.QueryBasketBalancesResponse;
                    toAmino(message: _82.QueryBasketBalancesResponse): _82.QueryBasketBalancesResponseAmino;
                    fromAminoMsg(object: _82.QueryBasketBalancesResponseAminoMsg): _82.QueryBasketBalancesResponse;
                    fromProtoMsg(message: _82.QueryBasketBalancesResponseProtoMsg): _82.QueryBasketBalancesResponse;
                    toProto(message: _82.QueryBasketBalancesResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketBalancesResponse): _82.QueryBasketBalancesResponseProtoMsg;
                };
                QueryBasketBalanceRequest: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketBalanceRequest;
                    fromPartial(object: Partial<_82.QueryBasketBalanceRequest>): _82.QueryBasketBalanceRequest;
                    fromAmino(object: _82.QueryBasketBalanceRequestAmino): _82.QueryBasketBalanceRequest;
                    toAmino(message: _82.QueryBasketBalanceRequest): _82.QueryBasketBalanceRequestAmino;
                    fromAminoMsg(object: _82.QueryBasketBalanceRequestAminoMsg): _82.QueryBasketBalanceRequest;
                    fromProtoMsg(message: _82.QueryBasketBalanceRequestProtoMsg): _82.QueryBasketBalanceRequest;
                    toProto(message: _82.QueryBasketBalanceRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketBalanceRequest): _82.QueryBasketBalanceRequestProtoMsg;
                };
                QueryBasketBalanceResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketBalanceResponse;
                    fromPartial(object: Partial<_82.QueryBasketBalanceResponse>): _82.QueryBasketBalanceResponse;
                    fromAmino(object: _82.QueryBasketBalanceResponseAmino): _82.QueryBasketBalanceResponse;
                    toAmino(message: _82.QueryBasketBalanceResponse): _82.QueryBasketBalanceResponseAmino;
                    fromAminoMsg(object: _82.QueryBasketBalanceResponseAminoMsg): _82.QueryBasketBalanceResponse;
                    fromProtoMsg(message: _82.QueryBasketBalanceResponseProtoMsg): _82.QueryBasketBalanceResponse;
                    toProto(message: _82.QueryBasketBalanceResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketBalanceResponse): _82.QueryBasketBalanceResponseProtoMsg;
                };
                BasketInfo: {
                    typeUrl: string;
                    encode(message: _82.BasketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.BasketInfo;
                    fromPartial(object: Partial<_82.BasketInfo>): _82.BasketInfo;
                    fromAmino(object: _82.BasketInfoAmino): _82.BasketInfo;
                    toAmino(message: _82.BasketInfo): _82.BasketInfoAmino;
                    fromAminoMsg(object: _82.BasketInfoAminoMsg): _82.BasketInfo;
                    fromProtoMsg(message: _82.BasketInfoProtoMsg): _82.BasketInfo;
                    toProto(message: _82.BasketInfo): Uint8Array;
                    toProtoMsg(message: _82.BasketInfo): _82.BasketInfoProtoMsg;
                };
                BasketBalanceInfo: {
                    typeUrl: string;
                    encode(message: _82.BasketBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.BasketBalanceInfo;
                    fromPartial(object: Partial<_82.BasketBalanceInfo>): _82.BasketBalanceInfo;
                    fromAmino(object: _82.BasketBalanceInfoAmino): _82.BasketBalanceInfo;
                    toAmino(message: _82.BasketBalanceInfo): _82.BasketBalanceInfoAmino;
                    fromAminoMsg(object: _82.BasketBalanceInfoAminoMsg): _82.BasketBalanceInfo;
                    fromProtoMsg(message: _82.BasketBalanceInfoProtoMsg): _82.BasketBalanceInfo;
                    toProto(message: _82.BasketBalanceInfo): Uint8Array;
                    toProtoMsg(message: _82.BasketBalanceInfo): _82.BasketBalanceInfoProtoMsg;
                };
                QueryBasketFeeRequest: {
                    typeUrl: string;
                    encode(_: _82.QueryBasketFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketFeeRequest;
                    fromPartial(_: Partial<_82.QueryBasketFeeRequest>): _82.QueryBasketFeeRequest;
                    fromAmino(_: _82.QueryBasketFeeRequestAmino): _82.QueryBasketFeeRequest;
                    toAmino(_: _82.QueryBasketFeeRequest): _82.QueryBasketFeeRequestAmino;
                    fromAminoMsg(object: _82.QueryBasketFeeRequestAminoMsg): _82.QueryBasketFeeRequest;
                    fromProtoMsg(message: _82.QueryBasketFeeRequestProtoMsg): _82.QueryBasketFeeRequest;
                    toProto(message: _82.QueryBasketFeeRequest): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketFeeRequest): _82.QueryBasketFeeRequestProtoMsg;
                };
                QueryBasketFeeResponse: {
                    typeUrl: string;
                    encode(message: _82.QueryBasketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.QueryBasketFeeResponse;
                    fromPartial(object: Partial<_82.QueryBasketFeeResponse>): _82.QueryBasketFeeResponse;
                    fromAmino(object: _82.QueryBasketFeeResponseAmino): _82.QueryBasketFeeResponse;
                    toAmino(message: _82.QueryBasketFeeResponse): _82.QueryBasketFeeResponseAmino;
                    fromAminoMsg(object: _82.QueryBasketFeeResponseAminoMsg): _82.QueryBasketFeeResponse;
                    fromProtoMsg(message: _82.QueryBasketFeeResponseProtoMsg): _82.QueryBasketFeeResponse;
                    toProto(message: _82.QueryBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _82.QueryBasketFeeResponse): _82.QueryBasketFeeResponseProtoMsg;
                };
                EventCreate: {
                    typeUrl: string;
                    encode(message: _81.EventCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.EventCreate;
                    fromPartial(object: Partial<_81.EventCreate>): _81.EventCreate;
                    fromAmino(object: _81.EventCreateAmino): _81.EventCreate;
                    toAmino(message: _81.EventCreate): _81.EventCreateAmino;
                    fromAminoMsg(object: _81.EventCreateAminoMsg): _81.EventCreate;
                    fromProtoMsg(message: _81.EventCreateProtoMsg): _81.EventCreate;
                    toProto(message: _81.EventCreate): Uint8Array;
                    toProtoMsg(message: _81.EventCreate): _81.EventCreateProtoMsg;
                };
                EventPut: {
                    typeUrl: string;
                    encode(message: _81.EventPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.EventPut;
                    fromPartial(object: Partial<_81.EventPut>): _81.EventPut;
                    fromAmino(object: _81.EventPutAmino): _81.EventPut;
                    toAmino(message: _81.EventPut): _81.EventPutAmino;
                    fromAminoMsg(object: _81.EventPutAminoMsg): _81.EventPut;
                    fromProtoMsg(message: _81.EventPutProtoMsg): _81.EventPut;
                    toProto(message: _81.EventPut): Uint8Array;
                    toProtoMsg(message: _81.EventPut): _81.EventPutProtoMsg;
                };
                EventTake: {
                    typeUrl: string;
                    encode(message: _81.EventTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.EventTake;
                    fromPartial(object: Partial<_81.EventTake>): _81.EventTake;
                    fromAmino(object: _81.EventTakeAmino): _81.EventTake;
                    toAmino(message: _81.EventTake): _81.EventTakeAmino;
                    fromAminoMsg(object: _81.EventTakeAminoMsg): _81.EventTake;
                    fromProtoMsg(message: _81.EventTakeProtoMsg): _81.EventTake;
                    toProto(message: _81.EventTake): Uint8Array;
                    toProtoMsg(message: _81.EventTake): _81.EventTakeProtoMsg;
                };
                EventUpdateCurator: {
                    typeUrl: string;
                    encode(message: _81.EventUpdateCurator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.EventUpdateCurator;
                    fromPartial(object: Partial<_81.EventUpdateCurator>): _81.EventUpdateCurator;
                    fromAmino(object: _81.EventUpdateCuratorAmino): _81.EventUpdateCurator;
                    toAmino(message: _81.EventUpdateCurator): _81.EventUpdateCuratorAmino;
                    fromAminoMsg(object: _81.EventUpdateCuratorAminoMsg): _81.EventUpdateCurator;
                    fromProtoMsg(message: _81.EventUpdateCuratorProtoMsg): _81.EventUpdateCurator;
                    toProto(message: _81.EventUpdateCurator): Uint8Array;
                    toProtoMsg(message: _81.EventUpdateCurator): _81.EventUpdateCuratorProtoMsg;
                };
                EventUpdateDateCriteria: {
                    typeUrl: string;
                    encode(message: _81.EventUpdateDateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.EventUpdateDateCriteria;
                    fromPartial(object: Partial<_81.EventUpdateDateCriteria>): _81.EventUpdateDateCriteria;
                    fromAmino(object: _81.EventUpdateDateCriteriaAmino): _81.EventUpdateDateCriteria;
                    toAmino(message: _81.EventUpdateDateCriteria): _81.EventUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _81.EventUpdateDateCriteriaAminoMsg): _81.EventUpdateDateCriteria;
                    fromProtoMsg(message: _81.EventUpdateDateCriteriaProtoMsg): _81.EventUpdateDateCriteria;
                    toProto(message: _81.EventUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _81.EventUpdateDateCriteria): _81.EventUpdateDateCriteriaProtoMsg;
                };
            };
        }
        namespace marketplace {
            const v1: {
                MsgClientImpl: typeof _213.MsgClientImpl;
                QueryClientImpl: typeof _207.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    sellOrder(request: _87.QuerySellOrderRequest): Promise<_87.QuerySellOrderResponse>;
                    sellOrders(request?: _87.QuerySellOrdersRequest): Promise<_87.QuerySellOrdersResponse>;
                    sellOrdersByBatch(request: _87.QuerySellOrdersByBatchRequest): Promise<_87.QuerySellOrdersByBatchResponse>;
                    sellOrdersBySeller(request: _87.QuerySellOrdersBySellerRequest): Promise<_87.QuerySellOrdersBySellerResponse>;
                    allowedDenoms(request?: _87.QueryAllowedDenomsRequest): Promise<_87.QueryAllowedDenomsResponse>;
                };
                LCDQueryClient: typeof _201.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _89.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _89.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _89.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _89.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _89.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _89.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _89.MsgSell): {
                            typeUrl: string;
                            value: _89.MsgSell;
                        };
                        updateSellOrders(value: _89.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _89.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _89.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _89.MsgCancelSellOrder;
                        };
                        buyDirect(value: _89.MsgBuyDirect): {
                            typeUrl: string;
                            value: _89.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _89.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _89.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _89.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _89.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _89.MsgSell): {
                            typeUrl: string;
                            value: _89.MsgSell;
                        };
                        updateSellOrders(value: _89.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _89.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _89.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _89.MsgCancelSellOrder;
                        };
                        buyDirect(value: _89.MsgBuyDirect): {
                            typeUrl: string;
                            value: _89.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _89.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _89.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _89.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _89.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: (message: _89.MsgSell) => _89.MsgSellAmino;
                        fromAmino: (object: _89.MsgSellAmino) => _89.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: (message: _89.MsgUpdateSellOrders) => _89.MsgUpdateSellOrdersAmino;
                        fromAmino: (object: _89.MsgUpdateSellOrdersAmino) => _89.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: (message: _89.MsgCancelSellOrder) => _89.MsgCancelSellOrderAmino;
                        fromAmino: (object: _89.MsgCancelSellOrderAmino) => _89.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: (message: _89.MsgBuyDirect) => _89.MsgBuyDirectAmino;
                        fromAmino: (object: _89.MsgBuyDirectAmino) => _89.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _89.MsgAddAllowedDenom) => _89.MsgAddAllowedDenomAmino;
                        fromAmino: (object: _89.MsgAddAllowedDenomAmino) => _89.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _89.MsgRemoveAllowedDenom) => _89.MsgRemoveAllowedDenomAmino;
                        fromAmino: (object: _89.MsgRemoveAllowedDenomAmino) => _89.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    typeUrl: string;
                    encode(message: _90.AllowDenomProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.AllowDenomProposal;
                    fromPartial(object: Partial<_90.AllowDenomProposal>): _90.AllowDenomProposal;
                    fromAmino(object: _90.AllowDenomProposalAmino): _90.AllowDenomProposal;
                    toAmino(message: _90.AllowDenomProposal): _90.AllowDenomProposalAmino;
                    fromAminoMsg(object: _90.AllowDenomProposalAminoMsg): _90.AllowDenomProposal;
                    fromProtoMsg(message: _90.AllowDenomProposalProtoMsg): _90.AllowDenomProposal;
                    toProto(message: _90.AllowDenomProposal): Uint8Array;
                    toProtoMsg(message: _90.AllowDenomProposal): _90.AllowDenomProposalProtoMsg;
                };
                MsgSell: {
                    typeUrl: string;
                    encode(message: _89.MsgSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgSell;
                    fromPartial(object: Partial<_89.MsgSell>): _89.MsgSell;
                    fromAmino(object: _89.MsgSellAmino): _89.MsgSell;
                    toAmino(message: _89.MsgSell): _89.MsgSellAmino;
                    fromAminoMsg(object: _89.MsgSellAminoMsg): _89.MsgSell;
                    toAminoMsg(message: _89.MsgSell): _89.MsgSellAminoMsg;
                    fromProtoMsg(message: _89.MsgSellProtoMsg): _89.MsgSell;
                    toProto(message: _89.MsgSell): Uint8Array;
                    toProtoMsg(message: _89.MsgSell): _89.MsgSellProtoMsg;
                };
                MsgSell_Order: {
                    typeUrl: string;
                    encode(message: _89.MsgSell_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgSell_Order;
                    fromPartial(object: Partial<_89.MsgSell_Order>): _89.MsgSell_Order;
                    fromAmino(object: _89.MsgSell_OrderAmino): _89.MsgSell_Order;
                    toAmino(message: _89.MsgSell_Order): _89.MsgSell_OrderAmino;
                    fromAminoMsg(object: _89.MsgSell_OrderAminoMsg): _89.MsgSell_Order;
                    fromProtoMsg(message: _89.MsgSell_OrderProtoMsg): _89.MsgSell_Order;
                    toProto(message: _89.MsgSell_Order): Uint8Array;
                    toProtoMsg(message: _89.MsgSell_Order): _89.MsgSell_OrderProtoMsg;
                };
                MsgSellResponse: {
                    typeUrl: string;
                    encode(message: _89.MsgSellResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgSellResponse;
                    fromPartial(object: Partial<_89.MsgSellResponse>): _89.MsgSellResponse;
                    fromAmino(object: _89.MsgSellResponseAmino): _89.MsgSellResponse;
                    toAmino(message: _89.MsgSellResponse): _89.MsgSellResponseAmino;
                    fromAminoMsg(object: _89.MsgSellResponseAminoMsg): _89.MsgSellResponse;
                    fromProtoMsg(message: _89.MsgSellResponseProtoMsg): _89.MsgSellResponse;
                    toProto(message: _89.MsgSellResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgSellResponse): _89.MsgSellResponseProtoMsg;
                };
                MsgUpdateSellOrders: {
                    typeUrl: string;
                    encode(message: _89.MsgUpdateSellOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgUpdateSellOrders;
                    fromPartial(object: Partial<_89.MsgUpdateSellOrders>): _89.MsgUpdateSellOrders;
                    fromAmino(object: _89.MsgUpdateSellOrdersAmino): _89.MsgUpdateSellOrders;
                    toAmino(message: _89.MsgUpdateSellOrders): _89.MsgUpdateSellOrdersAmino;
                    fromAminoMsg(object: _89.MsgUpdateSellOrdersAminoMsg): _89.MsgUpdateSellOrders;
                    toAminoMsg(message: _89.MsgUpdateSellOrders): _89.MsgUpdateSellOrdersAminoMsg;
                    fromProtoMsg(message: _89.MsgUpdateSellOrdersProtoMsg): _89.MsgUpdateSellOrders;
                    toProto(message: _89.MsgUpdateSellOrders): Uint8Array;
                    toProtoMsg(message: _89.MsgUpdateSellOrders): _89.MsgUpdateSellOrdersProtoMsg;
                };
                MsgUpdateSellOrders_Update: {
                    typeUrl: string;
                    encode(message: _89.MsgUpdateSellOrders_Update, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgUpdateSellOrders_Update;
                    fromPartial(object: Partial<_89.MsgUpdateSellOrders_Update>): _89.MsgUpdateSellOrders_Update;
                    fromAmino(object: _89.MsgUpdateSellOrders_UpdateAmino): _89.MsgUpdateSellOrders_Update;
                    toAmino(message: _89.MsgUpdateSellOrders_Update): _89.MsgUpdateSellOrders_UpdateAmino;
                    fromAminoMsg(object: _89.MsgUpdateSellOrders_UpdateAminoMsg): _89.MsgUpdateSellOrders_Update;
                    fromProtoMsg(message: _89.MsgUpdateSellOrders_UpdateProtoMsg): _89.MsgUpdateSellOrders_Update;
                    toProto(message: _89.MsgUpdateSellOrders_Update): Uint8Array;
                    toProtoMsg(message: _89.MsgUpdateSellOrders_Update): _89.MsgUpdateSellOrders_UpdateProtoMsg;
                };
                MsgUpdateSellOrdersResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgUpdateSellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgUpdateSellOrdersResponse;
                    fromPartial(_: Partial<_89.MsgUpdateSellOrdersResponse>): _89.MsgUpdateSellOrdersResponse;
                    fromAmino(_: _89.MsgUpdateSellOrdersResponseAmino): _89.MsgUpdateSellOrdersResponse;
                    toAmino(_: _89.MsgUpdateSellOrdersResponse): _89.MsgUpdateSellOrdersResponseAmino;
                    fromAminoMsg(object: _89.MsgUpdateSellOrdersResponseAminoMsg): _89.MsgUpdateSellOrdersResponse;
                    fromProtoMsg(message: _89.MsgUpdateSellOrdersResponseProtoMsg): _89.MsgUpdateSellOrdersResponse;
                    toProto(message: _89.MsgUpdateSellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgUpdateSellOrdersResponse): _89.MsgUpdateSellOrdersResponseProtoMsg;
                };
                MsgCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _89.MsgCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgCancelSellOrder;
                    fromPartial(object: Partial<_89.MsgCancelSellOrder>): _89.MsgCancelSellOrder;
                    fromAmino(object: _89.MsgCancelSellOrderAmino): _89.MsgCancelSellOrder;
                    toAmino(message: _89.MsgCancelSellOrder): _89.MsgCancelSellOrderAmino;
                    fromAminoMsg(object: _89.MsgCancelSellOrderAminoMsg): _89.MsgCancelSellOrder;
                    toAminoMsg(message: _89.MsgCancelSellOrder): _89.MsgCancelSellOrderAminoMsg;
                    fromProtoMsg(message: _89.MsgCancelSellOrderProtoMsg): _89.MsgCancelSellOrder;
                    toProto(message: _89.MsgCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _89.MsgCancelSellOrder): _89.MsgCancelSellOrderProtoMsg;
                };
                MsgCancelSellOrderResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgCancelSellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgCancelSellOrderResponse;
                    fromPartial(_: Partial<_89.MsgCancelSellOrderResponse>): _89.MsgCancelSellOrderResponse;
                    fromAmino(_: _89.MsgCancelSellOrderResponseAmino): _89.MsgCancelSellOrderResponse;
                    toAmino(_: _89.MsgCancelSellOrderResponse): _89.MsgCancelSellOrderResponseAmino;
                    fromAminoMsg(object: _89.MsgCancelSellOrderResponseAminoMsg): _89.MsgCancelSellOrderResponse;
                    fromProtoMsg(message: _89.MsgCancelSellOrderResponseProtoMsg): _89.MsgCancelSellOrderResponse;
                    toProto(message: _89.MsgCancelSellOrderResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgCancelSellOrderResponse): _89.MsgCancelSellOrderResponseProtoMsg;
                };
                MsgBuyDirect: {
                    typeUrl: string;
                    encode(message: _89.MsgBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgBuyDirect;
                    fromPartial(object: Partial<_89.MsgBuyDirect>): _89.MsgBuyDirect;
                    fromAmino(object: _89.MsgBuyDirectAmino): _89.MsgBuyDirect;
                    toAmino(message: _89.MsgBuyDirect): _89.MsgBuyDirectAmino;
                    fromAminoMsg(object: _89.MsgBuyDirectAminoMsg): _89.MsgBuyDirect;
                    toAminoMsg(message: _89.MsgBuyDirect): _89.MsgBuyDirectAminoMsg;
                    fromProtoMsg(message: _89.MsgBuyDirectProtoMsg): _89.MsgBuyDirect;
                    toProto(message: _89.MsgBuyDirect): Uint8Array;
                    toProtoMsg(message: _89.MsgBuyDirect): _89.MsgBuyDirectProtoMsg;
                };
                MsgBuyDirect_Order: {
                    typeUrl: string;
                    encode(message: _89.MsgBuyDirect_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgBuyDirect_Order;
                    fromPartial(object: Partial<_89.MsgBuyDirect_Order>): _89.MsgBuyDirect_Order;
                    fromAmino(object: _89.MsgBuyDirect_OrderAmino): _89.MsgBuyDirect_Order;
                    toAmino(message: _89.MsgBuyDirect_Order): _89.MsgBuyDirect_OrderAmino;
                    fromAminoMsg(object: _89.MsgBuyDirect_OrderAminoMsg): _89.MsgBuyDirect_Order;
                    fromProtoMsg(message: _89.MsgBuyDirect_OrderProtoMsg): _89.MsgBuyDirect_Order;
                    toProto(message: _89.MsgBuyDirect_Order): Uint8Array;
                    toProtoMsg(message: _89.MsgBuyDirect_Order): _89.MsgBuyDirect_OrderProtoMsg;
                };
                MsgBuyDirectResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgBuyDirectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgBuyDirectResponse;
                    fromPartial(_: Partial<_89.MsgBuyDirectResponse>): _89.MsgBuyDirectResponse;
                    fromAmino(_: _89.MsgBuyDirectResponseAmino): _89.MsgBuyDirectResponse;
                    toAmino(_: _89.MsgBuyDirectResponse): _89.MsgBuyDirectResponseAmino;
                    fromAminoMsg(object: _89.MsgBuyDirectResponseAminoMsg): _89.MsgBuyDirectResponse;
                    fromProtoMsg(message: _89.MsgBuyDirectResponseProtoMsg): _89.MsgBuyDirectResponse;
                    toProto(message: _89.MsgBuyDirectResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgBuyDirectResponse): _89.MsgBuyDirectResponseProtoMsg;
                };
                MsgAddAllowedDenom: {
                    typeUrl: string;
                    encode(message: _89.MsgAddAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgAddAllowedDenom;
                    fromPartial(object: Partial<_89.MsgAddAllowedDenom>): _89.MsgAddAllowedDenom;
                    fromAmino(object: _89.MsgAddAllowedDenomAmino): _89.MsgAddAllowedDenom;
                    toAmino(message: _89.MsgAddAllowedDenom): _89.MsgAddAllowedDenomAmino;
                    fromAminoMsg(object: _89.MsgAddAllowedDenomAminoMsg): _89.MsgAddAllowedDenom;
                    toAminoMsg(message: _89.MsgAddAllowedDenom): _89.MsgAddAllowedDenomAminoMsg;
                    fromProtoMsg(message: _89.MsgAddAllowedDenomProtoMsg): _89.MsgAddAllowedDenom;
                    toProto(message: _89.MsgAddAllowedDenom): Uint8Array;
                    toProtoMsg(message: _89.MsgAddAllowedDenom): _89.MsgAddAllowedDenomProtoMsg;
                };
                MsgAddAllowedDenomResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgAddAllowedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgAddAllowedDenomResponse;
                    fromPartial(_: Partial<_89.MsgAddAllowedDenomResponse>): _89.MsgAddAllowedDenomResponse;
                    fromAmino(_: _89.MsgAddAllowedDenomResponseAmino): _89.MsgAddAllowedDenomResponse;
                    toAmino(_: _89.MsgAddAllowedDenomResponse): _89.MsgAddAllowedDenomResponseAmino;
                    fromAminoMsg(object: _89.MsgAddAllowedDenomResponseAminoMsg): _89.MsgAddAllowedDenomResponse;
                    fromProtoMsg(message: _89.MsgAddAllowedDenomResponseProtoMsg): _89.MsgAddAllowedDenomResponse;
                    toProto(message: _89.MsgAddAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgAddAllowedDenomResponse): _89.MsgAddAllowedDenomResponseProtoMsg;
                };
                MsgRemoveAllowedDenom: {
                    typeUrl: string;
                    encode(message: _89.MsgRemoveAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgRemoveAllowedDenom;
                    fromPartial(object: Partial<_89.MsgRemoveAllowedDenom>): _89.MsgRemoveAllowedDenom;
                    fromAmino(object: _89.MsgRemoveAllowedDenomAmino): _89.MsgRemoveAllowedDenom;
                    toAmino(message: _89.MsgRemoveAllowedDenom): _89.MsgRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _89.MsgRemoveAllowedDenomAminoMsg): _89.MsgRemoveAllowedDenom;
                    toAminoMsg(message: _89.MsgRemoveAllowedDenom): _89.MsgRemoveAllowedDenomAminoMsg;
                    fromProtoMsg(message: _89.MsgRemoveAllowedDenomProtoMsg): _89.MsgRemoveAllowedDenom;
                    toProto(message: _89.MsgRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _89.MsgRemoveAllowedDenom): _89.MsgRemoveAllowedDenomProtoMsg;
                };
                MsgRemoveAllowedDenomResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgRemoveAllowedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgRemoveAllowedDenomResponse;
                    fromPartial(_: Partial<_89.MsgRemoveAllowedDenomResponse>): _89.MsgRemoveAllowedDenomResponse;
                    fromAmino(_: _89.MsgRemoveAllowedDenomResponseAmino): _89.MsgRemoveAllowedDenomResponse;
                    toAmino(_: _89.MsgRemoveAllowedDenomResponse): _89.MsgRemoveAllowedDenomResponseAmino;
                    fromAminoMsg(object: _89.MsgRemoveAllowedDenomResponseAminoMsg): _89.MsgRemoveAllowedDenomResponse;
                    fromProtoMsg(message: _89.MsgRemoveAllowedDenomResponseProtoMsg): _89.MsgRemoveAllowedDenomResponse;
                    toProto(message: _89.MsgRemoveAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgRemoveAllowedDenomResponse): _89.MsgRemoveAllowedDenomResponseProtoMsg;
                };
                SellOrder: {
                    typeUrl: string;
                    encode(message: _88.SellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.SellOrder;
                    fromPartial(object: Partial<_88.SellOrder>): _88.SellOrder;
                    fromAmino(object: _88.SellOrderAmino): _88.SellOrder;
                    toAmino(message: _88.SellOrder): _88.SellOrderAmino;
                    fromAminoMsg(object: _88.SellOrderAminoMsg): _88.SellOrder;
                    fromProtoMsg(message: _88.SellOrderProtoMsg): _88.SellOrder;
                    toProto(message: _88.SellOrder): Uint8Array;
                    toProtoMsg(message: _88.SellOrder): _88.SellOrderProtoMsg;
                };
                AllowedDenom: {
                    typeUrl: string;
                    encode(message: _88.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.AllowedDenom;
                    fromPartial(object: Partial<_88.AllowedDenom>): _88.AllowedDenom;
                    fromAmino(object: _88.AllowedDenomAmino): _88.AllowedDenom;
                    toAmino(message: _88.AllowedDenom): _88.AllowedDenomAmino;
                    fromAminoMsg(object: _88.AllowedDenomAminoMsg): _88.AllowedDenom;
                    fromProtoMsg(message: _88.AllowedDenomProtoMsg): _88.AllowedDenom;
                    toProto(message: _88.AllowedDenom): Uint8Array;
                    toProtoMsg(message: _88.AllowedDenom): _88.AllowedDenomProtoMsg;
                };
                Market: {
                    typeUrl: string;
                    encode(message: _88.Market, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.Market;
                    fromPartial(object: Partial<_88.Market>): _88.Market;
                    fromAmino(object: _88.MarketAmino): _88.Market;
                    toAmino(message: _88.Market): _88.MarketAmino;
                    fromAminoMsg(object: _88.MarketAminoMsg): _88.Market;
                    fromProtoMsg(message: _88.MarketProtoMsg): _88.Market;
                    toProto(message: _88.Market): Uint8Array;
                    toProtoMsg(message: _88.Market): _88.MarketProtoMsg;
                };
                QuerySellOrderRequest: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrderRequest;
                    fromPartial(object: Partial<_87.QuerySellOrderRequest>): _87.QuerySellOrderRequest;
                    fromAmino(object: _87.QuerySellOrderRequestAmino): _87.QuerySellOrderRequest;
                    toAmino(message: _87.QuerySellOrderRequest): _87.QuerySellOrderRequestAmino;
                    fromAminoMsg(object: _87.QuerySellOrderRequestAminoMsg): _87.QuerySellOrderRequest;
                    fromProtoMsg(message: _87.QuerySellOrderRequestProtoMsg): _87.QuerySellOrderRequest;
                    toProto(message: _87.QuerySellOrderRequest): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrderRequest): _87.QuerySellOrderRequestProtoMsg;
                };
                QuerySellOrderResponse: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrderResponse;
                    fromPartial(object: Partial<_87.QuerySellOrderResponse>): _87.QuerySellOrderResponse;
                    fromAmino(object: _87.QuerySellOrderResponseAmino): _87.QuerySellOrderResponse;
                    toAmino(message: _87.QuerySellOrderResponse): _87.QuerySellOrderResponseAmino;
                    fromAminoMsg(object: _87.QuerySellOrderResponseAminoMsg): _87.QuerySellOrderResponse;
                    fromProtoMsg(message: _87.QuerySellOrderResponseProtoMsg): _87.QuerySellOrderResponse;
                    toProto(message: _87.QuerySellOrderResponse): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrderResponse): _87.QuerySellOrderResponseProtoMsg;
                };
                QuerySellOrdersRequest: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrdersRequest;
                    fromPartial(object: Partial<_87.QuerySellOrdersRequest>): _87.QuerySellOrdersRequest;
                    fromAmino(object: _87.QuerySellOrdersRequestAmino): _87.QuerySellOrdersRequest;
                    toAmino(message: _87.QuerySellOrdersRequest): _87.QuerySellOrdersRequestAmino;
                    fromAminoMsg(object: _87.QuerySellOrdersRequestAminoMsg): _87.QuerySellOrdersRequest;
                    fromProtoMsg(message: _87.QuerySellOrdersRequestProtoMsg): _87.QuerySellOrdersRequest;
                    toProto(message: _87.QuerySellOrdersRequest): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrdersRequest): _87.QuerySellOrdersRequestProtoMsg;
                };
                QuerySellOrdersResponse: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrdersResponse;
                    fromPartial(object: Partial<_87.QuerySellOrdersResponse>): _87.QuerySellOrdersResponse;
                    fromAmino(object: _87.QuerySellOrdersResponseAmino): _87.QuerySellOrdersResponse;
                    toAmino(message: _87.QuerySellOrdersResponse): _87.QuerySellOrdersResponseAmino;
                    fromAminoMsg(object: _87.QuerySellOrdersResponseAminoMsg): _87.QuerySellOrdersResponse;
                    fromProtoMsg(message: _87.QuerySellOrdersResponseProtoMsg): _87.QuerySellOrdersResponse;
                    toProto(message: _87.QuerySellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrdersResponse): _87.QuerySellOrdersResponseProtoMsg;
                };
                QuerySellOrdersByBatchRequest: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrdersByBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrdersByBatchRequest;
                    fromPartial(object: Partial<_87.QuerySellOrdersByBatchRequest>): _87.QuerySellOrdersByBatchRequest;
                    fromAmino(object: _87.QuerySellOrdersByBatchRequestAmino): _87.QuerySellOrdersByBatchRequest;
                    toAmino(message: _87.QuerySellOrdersByBatchRequest): _87.QuerySellOrdersByBatchRequestAmino;
                    fromAminoMsg(object: _87.QuerySellOrdersByBatchRequestAminoMsg): _87.QuerySellOrdersByBatchRequest;
                    fromProtoMsg(message: _87.QuerySellOrdersByBatchRequestProtoMsg): _87.QuerySellOrdersByBatchRequest;
                    toProto(message: _87.QuerySellOrdersByBatchRequest): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrdersByBatchRequest): _87.QuerySellOrdersByBatchRequestProtoMsg;
                };
                QuerySellOrdersByBatchResponse: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrdersByBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrdersByBatchResponse;
                    fromPartial(object: Partial<_87.QuerySellOrdersByBatchResponse>): _87.QuerySellOrdersByBatchResponse;
                    fromAmino(object: _87.QuerySellOrdersByBatchResponseAmino): _87.QuerySellOrdersByBatchResponse;
                    toAmino(message: _87.QuerySellOrdersByBatchResponse): _87.QuerySellOrdersByBatchResponseAmino;
                    fromAminoMsg(object: _87.QuerySellOrdersByBatchResponseAminoMsg): _87.QuerySellOrdersByBatchResponse;
                    fromProtoMsg(message: _87.QuerySellOrdersByBatchResponseProtoMsg): _87.QuerySellOrdersByBatchResponse;
                    toProto(message: _87.QuerySellOrdersByBatchResponse): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrdersByBatchResponse): _87.QuerySellOrdersByBatchResponseProtoMsg;
                };
                QuerySellOrdersBySellerRequest: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrdersBySellerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrdersBySellerRequest;
                    fromPartial(object: Partial<_87.QuerySellOrdersBySellerRequest>): _87.QuerySellOrdersBySellerRequest;
                    fromAmino(object: _87.QuerySellOrdersBySellerRequestAmino): _87.QuerySellOrdersBySellerRequest;
                    toAmino(message: _87.QuerySellOrdersBySellerRequest): _87.QuerySellOrdersBySellerRequestAmino;
                    fromAminoMsg(object: _87.QuerySellOrdersBySellerRequestAminoMsg): _87.QuerySellOrdersBySellerRequest;
                    fromProtoMsg(message: _87.QuerySellOrdersBySellerRequestProtoMsg): _87.QuerySellOrdersBySellerRequest;
                    toProto(message: _87.QuerySellOrdersBySellerRequest): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrdersBySellerRequest): _87.QuerySellOrdersBySellerRequestProtoMsg;
                };
                QuerySellOrdersBySellerResponse: {
                    typeUrl: string;
                    encode(message: _87.QuerySellOrdersBySellerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QuerySellOrdersBySellerResponse;
                    fromPartial(object: Partial<_87.QuerySellOrdersBySellerResponse>): _87.QuerySellOrdersBySellerResponse;
                    fromAmino(object: _87.QuerySellOrdersBySellerResponseAmino): _87.QuerySellOrdersBySellerResponse;
                    toAmino(message: _87.QuerySellOrdersBySellerResponse): _87.QuerySellOrdersBySellerResponseAmino;
                    fromAminoMsg(object: _87.QuerySellOrdersBySellerResponseAminoMsg): _87.QuerySellOrdersBySellerResponse;
                    fromProtoMsg(message: _87.QuerySellOrdersBySellerResponseProtoMsg): _87.QuerySellOrdersBySellerResponse;
                    toProto(message: _87.QuerySellOrdersBySellerResponse): Uint8Array;
                    toProtoMsg(message: _87.QuerySellOrdersBySellerResponse): _87.QuerySellOrdersBySellerResponseProtoMsg;
                };
                QueryAllowedDenomsRequest: {
                    typeUrl: string;
                    encode(message: _87.QueryAllowedDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryAllowedDenomsRequest;
                    fromPartial(object: Partial<_87.QueryAllowedDenomsRequest>): _87.QueryAllowedDenomsRequest;
                    fromAmino(object: _87.QueryAllowedDenomsRequestAmino): _87.QueryAllowedDenomsRequest;
                    toAmino(message: _87.QueryAllowedDenomsRequest): _87.QueryAllowedDenomsRequestAmino;
                    fromAminoMsg(object: _87.QueryAllowedDenomsRequestAminoMsg): _87.QueryAllowedDenomsRequest;
                    fromProtoMsg(message: _87.QueryAllowedDenomsRequestProtoMsg): _87.QueryAllowedDenomsRequest;
                    toProto(message: _87.QueryAllowedDenomsRequest): Uint8Array;
                    toProtoMsg(message: _87.QueryAllowedDenomsRequest): _87.QueryAllowedDenomsRequestProtoMsg;
                };
                QueryAllowedDenomsResponse: {
                    typeUrl: string;
                    encode(message: _87.QueryAllowedDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryAllowedDenomsResponse;
                    fromPartial(object: Partial<_87.QueryAllowedDenomsResponse>): _87.QueryAllowedDenomsResponse;
                    fromAmino(object: _87.QueryAllowedDenomsResponseAmino): _87.QueryAllowedDenomsResponse;
                    toAmino(message: _87.QueryAllowedDenomsResponse): _87.QueryAllowedDenomsResponseAmino;
                    fromAminoMsg(object: _87.QueryAllowedDenomsResponseAminoMsg): _87.QueryAllowedDenomsResponse;
                    fromProtoMsg(message: _87.QueryAllowedDenomsResponseProtoMsg): _87.QueryAllowedDenomsResponse;
                    toProto(message: _87.QueryAllowedDenomsResponse): Uint8Array;
                    toProtoMsg(message: _87.QueryAllowedDenomsResponse): _87.QueryAllowedDenomsResponseProtoMsg;
                };
                SellOrderInfo: {
                    typeUrl: string;
                    encode(message: _87.SellOrderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SellOrderInfo;
                    fromPartial(object: Partial<_87.SellOrderInfo>): _87.SellOrderInfo;
                    fromAmino(object: _87.SellOrderInfoAmino): _87.SellOrderInfo;
                    toAmino(message: _87.SellOrderInfo): _87.SellOrderInfoAmino;
                    fromAminoMsg(object: _87.SellOrderInfoAminoMsg): _87.SellOrderInfo;
                    fromProtoMsg(message: _87.SellOrderInfoProtoMsg): _87.SellOrderInfo;
                    toProto(message: _87.SellOrderInfo): Uint8Array;
                    toProtoMsg(message: _87.SellOrderInfo): _87.SellOrderInfoProtoMsg;
                };
                EventSell: {
                    typeUrl: string;
                    encode(message: _86.EventSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.EventSell;
                    fromPartial(object: Partial<_86.EventSell>): _86.EventSell;
                    fromAmino(object: _86.EventSellAmino): _86.EventSell;
                    toAmino(message: _86.EventSell): _86.EventSellAmino;
                    fromAminoMsg(object: _86.EventSellAminoMsg): _86.EventSell;
                    fromProtoMsg(message: _86.EventSellProtoMsg): _86.EventSell;
                    toProto(message: _86.EventSell): Uint8Array;
                    toProtoMsg(message: _86.EventSell): _86.EventSellProtoMsg;
                };
                EventBuyDirect: {
                    typeUrl: string;
                    encode(message: _86.EventBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.EventBuyDirect;
                    fromPartial(object: Partial<_86.EventBuyDirect>): _86.EventBuyDirect;
                    fromAmino(object: _86.EventBuyDirectAmino): _86.EventBuyDirect;
                    toAmino(message: _86.EventBuyDirect): _86.EventBuyDirectAmino;
                    fromAminoMsg(object: _86.EventBuyDirectAminoMsg): _86.EventBuyDirect;
                    fromProtoMsg(message: _86.EventBuyDirectProtoMsg): _86.EventBuyDirect;
                    toProto(message: _86.EventBuyDirect): Uint8Array;
                    toProtoMsg(message: _86.EventBuyDirect): _86.EventBuyDirectProtoMsg;
                };
                EventUpdateSellOrder: {
                    typeUrl: string;
                    encode(message: _86.EventUpdateSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.EventUpdateSellOrder;
                    fromPartial(object: Partial<_86.EventUpdateSellOrder>): _86.EventUpdateSellOrder;
                    fromAmino(object: _86.EventUpdateSellOrderAmino): _86.EventUpdateSellOrder;
                    toAmino(message: _86.EventUpdateSellOrder): _86.EventUpdateSellOrderAmino;
                    fromAminoMsg(object: _86.EventUpdateSellOrderAminoMsg): _86.EventUpdateSellOrder;
                    fromProtoMsg(message: _86.EventUpdateSellOrderProtoMsg): _86.EventUpdateSellOrder;
                    toProto(message: _86.EventUpdateSellOrder): Uint8Array;
                    toProtoMsg(message: _86.EventUpdateSellOrder): _86.EventUpdateSellOrderProtoMsg;
                };
                EventCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _86.EventCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.EventCancelSellOrder;
                    fromPartial(object: Partial<_86.EventCancelSellOrder>): _86.EventCancelSellOrder;
                    fromAmino(object: _86.EventCancelSellOrderAmino): _86.EventCancelSellOrder;
                    toAmino(message: _86.EventCancelSellOrder): _86.EventCancelSellOrderAmino;
                    fromAminoMsg(object: _86.EventCancelSellOrderAminoMsg): _86.EventCancelSellOrder;
                    fromProtoMsg(message: _86.EventCancelSellOrderProtoMsg): _86.EventCancelSellOrder;
                    toProto(message: _86.EventCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _86.EventCancelSellOrder): _86.EventCancelSellOrderProtoMsg;
                };
                EventAllowDenom: {
                    typeUrl: string;
                    encode(message: _86.EventAllowDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.EventAllowDenom;
                    fromPartial(object: Partial<_86.EventAllowDenom>): _86.EventAllowDenom;
                    fromAmino(object: _86.EventAllowDenomAmino): _86.EventAllowDenom;
                    toAmino(message: _86.EventAllowDenom): _86.EventAllowDenomAmino;
                    fromAminoMsg(object: _86.EventAllowDenomAminoMsg): _86.EventAllowDenom;
                    fromProtoMsg(message: _86.EventAllowDenomProtoMsg): _86.EventAllowDenom;
                    toProto(message: _86.EventAllowDenom): Uint8Array;
                    toProtoMsg(message: _86.EventAllowDenom): _86.EventAllowDenomProtoMsg;
                };
                EventRemoveAllowedDenom: {
                    typeUrl: string;
                    encode(message: _86.EventRemoveAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.EventRemoveAllowedDenom;
                    fromPartial(object: Partial<_86.EventRemoveAllowedDenom>): _86.EventRemoveAllowedDenom;
                    fromAmino(object: _86.EventRemoveAllowedDenomAmino): _86.EventRemoveAllowedDenom;
                    toAmino(message: _86.EventRemoveAllowedDenom): _86.EventRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _86.EventRemoveAllowedDenomAminoMsg): _86.EventRemoveAllowedDenom;
                    fromProtoMsg(message: _86.EventRemoveAllowedDenomProtoMsg): _86.EventRemoveAllowedDenom;
                    toProto(message: _86.EventRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _86.EventRemoveAllowedDenom): _86.EventRemoveAllowedDenomProtoMsg;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    typeUrl: string;
                    encode(message: _91.BuyOrderSellOrderMatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.BuyOrderSellOrderMatch;
                    fromPartial(object: Partial<_91.BuyOrderSellOrderMatch>): _91.BuyOrderSellOrderMatch;
                    fromAmino(object: _91.BuyOrderSellOrderMatchAmino): _91.BuyOrderSellOrderMatch;
                    toAmino(message: _91.BuyOrderSellOrderMatch): _91.BuyOrderSellOrderMatchAmino;
                    fromAminoMsg(object: _91.BuyOrderSellOrderMatchAminoMsg): _91.BuyOrderSellOrderMatch;
                    fromProtoMsg(message: _91.BuyOrderSellOrderMatchProtoMsg): _91.BuyOrderSellOrderMatch;
                    toProto(message: _91.BuyOrderSellOrderMatch): Uint8Array;
                    toProtoMsg(message: _91.BuyOrderSellOrderMatch): _91.BuyOrderSellOrderMatchProtoMsg;
                };
                BuyOrderClassSelector: {
                    typeUrl: string;
                    encode(message: _91.BuyOrderClassSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.BuyOrderClassSelector;
                    fromPartial(object: Partial<_91.BuyOrderClassSelector>): _91.BuyOrderClassSelector;
                    fromAmino(object: _91.BuyOrderClassSelectorAmino): _91.BuyOrderClassSelector;
                    toAmino(message: _91.BuyOrderClassSelector): _91.BuyOrderClassSelectorAmino;
                    fromAminoMsg(object: _91.BuyOrderClassSelectorAminoMsg): _91.BuyOrderClassSelector;
                    fromProtoMsg(message: _91.BuyOrderClassSelectorProtoMsg): _91.BuyOrderClassSelector;
                    toProto(message: _91.BuyOrderClassSelector): Uint8Array;
                    toProtoMsg(message: _91.BuyOrderClassSelector): _91.BuyOrderClassSelectorProtoMsg;
                };
                BuyOrderProjectSelector: {
                    typeUrl: string;
                    encode(message: _91.BuyOrderProjectSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.BuyOrderProjectSelector;
                    fromPartial(object: Partial<_91.BuyOrderProjectSelector>): _91.BuyOrderProjectSelector;
                    fromAmino(object: _91.BuyOrderProjectSelectorAmino): _91.BuyOrderProjectSelector;
                    toAmino(message: _91.BuyOrderProjectSelector): _91.BuyOrderProjectSelectorAmino;
                    fromAminoMsg(object: _91.BuyOrderProjectSelectorAminoMsg): _91.BuyOrderProjectSelector;
                    fromProtoMsg(message: _91.BuyOrderProjectSelectorProtoMsg): _91.BuyOrderProjectSelector;
                    toProto(message: _91.BuyOrderProjectSelector): Uint8Array;
                    toProtoMsg(message: _91.BuyOrderProjectSelector): _91.BuyOrderProjectSelectorProtoMsg;
                };
                BuyOrderBatchSelector: {
                    typeUrl: string;
                    encode(message: _91.BuyOrderBatchSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.BuyOrderBatchSelector;
                    fromPartial(object: Partial<_91.BuyOrderBatchSelector>): _91.BuyOrderBatchSelector;
                    fromAmino(object: _91.BuyOrderBatchSelectorAmino): _91.BuyOrderBatchSelector;
                    toAmino(message: _91.BuyOrderBatchSelector): _91.BuyOrderBatchSelectorAmino;
                    fromAminoMsg(object: _91.BuyOrderBatchSelectorAminoMsg): _91.BuyOrderBatchSelector;
                    fromProtoMsg(message: _91.BuyOrderBatchSelectorProtoMsg): _91.BuyOrderBatchSelector;
                    toProto(message: _91.BuyOrderBatchSelector): Uint8Array;
                    toProtoMsg(message: _91.BuyOrderBatchSelector): _91.BuyOrderBatchSelectorProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _93.QueryClassesRequest): Promise<_93.QueryClassesResponse>;
                classesByAdmin(request: _93.QueryClassesByAdminRequest): Promise<_93.QueryClassesByAdminResponse>;
                class(request: _93.QueryClassRequest): Promise<_93.QueryClassResponse>;
                classIssuers(request: _93.QueryClassIssuersRequest): Promise<_93.QueryClassIssuersResponse>;
                projects(request?: _93.QueryProjectsRequest): Promise<_93.QueryProjectsResponse>;
                projectsByClass(request: _93.QueryProjectsByClassRequest): Promise<_93.QueryProjectsByClassResponse>;
                projectsByReferenceId(request: _93.QueryProjectsByReferenceIdRequest): Promise<_93.QueryProjectsByReferenceIdResponse>;
                projectsByAdmin(request: _93.QueryProjectsByAdminRequest): Promise<_93.QueryProjectsByAdminResponse>;
                project(request: _93.QueryProjectRequest): Promise<_93.QueryProjectResponse>;
                batches(request?: _93.QueryBatchesRequest): Promise<_93.QueryBatchesResponse>;
                batchesByIssuer(request: _93.QueryBatchesByIssuerRequest): Promise<_93.QueryBatchesByIssuerResponse>;
                batchesByClass(request: _93.QueryBatchesByClassRequest): Promise<_93.QueryBatchesByClassResponse>;
                batchesByProject(request: _93.QueryBatchesByProjectRequest): Promise<_93.QueryBatchesByProjectResponse>;
                batch(request: _93.QueryBatchRequest): Promise<_93.QueryBatchResponse>;
                balance(request: _93.QueryBalanceRequest): Promise<_93.QueryBalanceResponse>;
                balances(request: _93.QueryBalancesRequest): Promise<_93.QueryBalancesResponse>;
                balancesByBatch(request: _93.QueryBalancesByBatchRequest): Promise<_93.QueryBalancesByBatchResponse>;
                allBalances(request?: _93.QueryAllBalancesRequest): Promise<_93.QueryAllBalancesResponse>;
                supply(request: _93.QuerySupplyRequest): Promise<_93.QuerySupplyResponse>;
                creditTypes(request?: _93.QueryCreditTypesRequest): Promise<_93.QueryCreditTypesResponse>;
                params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                creditType(request: _93.QueryCreditTypeRequest): Promise<_93.QueryCreditTypeResponse>;
                classCreatorAllowlist(request?: _93.QueryClassCreatorAllowlistRequest): Promise<_93.QueryClassCreatorAllowlistResponse>;
                allowedClassCreators(request?: _93.QueryAllowedClassCreatorsRequest): Promise<_93.QueryAllowedClassCreatorsResponse>;
                classFee(request?: _93.QueryClassFeeRequest): Promise<_93.QueryClassFeeResponse>;
                allowedBridgeChains(request?: _93.QueryAllowedBridgeChainsRequest): Promise<_93.QueryAllowedBridgeChainsResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _95.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _95.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _95.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _95.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _95.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _95.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _95.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _95.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _95.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _95.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _95.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _95.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _95.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _95.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _95.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _95.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _95.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _95.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _95.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _95.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _95.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _95.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _95.MsgCreateClass): {
                        typeUrl: string;
                        value: _95.MsgCreateClass;
                    };
                    createProject(value: _95.MsgCreateProject): {
                        typeUrl: string;
                        value: _95.MsgCreateProject;
                    };
                    createBatch(value: _95.MsgCreateBatch): {
                        typeUrl: string;
                        value: _95.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _95.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _95.MsgMintBatchCredits;
                    };
                    sealBatch(value: _95.MsgSealBatch): {
                        typeUrl: string;
                        value: _95.MsgSealBatch;
                    };
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                    retire(value: _95.MsgRetire): {
                        typeUrl: string;
                        value: _95.MsgRetire;
                    };
                    cancel(value: _95.MsgCancel): {
                        typeUrl: string;
                        value: _95.MsgCancel;
                    };
                    updateClassAdmin(value: _95.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _95.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _95.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _95.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _95.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _95.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _95.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _95.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _95.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _95.MsgBridge): {
                        typeUrl: string;
                        value: _95.MsgBridge;
                    };
                    bridgeReceive(value: _95.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _95.MsgBridgeReceive;
                    };
                    addCreditType(value: _95.MsgAddCreditType): {
                        typeUrl: string;
                        value: _95.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _95.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _95.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _95.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _95.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _95.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _95.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _95.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _95.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _95.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _95.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _95.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _95.MsgCreateClass): {
                        typeUrl: string;
                        value: _95.MsgCreateClass;
                    };
                    createProject(value: _95.MsgCreateProject): {
                        typeUrl: string;
                        value: _95.MsgCreateProject;
                    };
                    createBatch(value: _95.MsgCreateBatch): {
                        typeUrl: string;
                        value: _95.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _95.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _95.MsgMintBatchCredits;
                    };
                    sealBatch(value: _95.MsgSealBatch): {
                        typeUrl: string;
                        value: _95.MsgSealBatch;
                    };
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                    retire(value: _95.MsgRetire): {
                        typeUrl: string;
                        value: _95.MsgRetire;
                    };
                    cancel(value: _95.MsgCancel): {
                        typeUrl: string;
                        value: _95.MsgCancel;
                    };
                    updateClassAdmin(value: _95.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _95.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _95.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _95.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _95.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _95.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _95.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _95.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _95.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _95.MsgBridge): {
                        typeUrl: string;
                        value: _95.MsgBridge;
                    };
                    bridgeReceive(value: _95.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _95.MsgBridgeReceive;
                    };
                    addCreditType(value: _95.MsgAddCreditType): {
                        typeUrl: string;
                        value: _95.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _95.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _95.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _95.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _95.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _95.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _95.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _95.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _95.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _95.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _95.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _95.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _95.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _95.MsgCreateClass) => _95.MsgCreateClassAmino;
                    fromAmino: (object: _95.MsgCreateClassAmino) => _95.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: (message: _95.MsgCreateProject) => _95.MsgCreateProjectAmino;
                    fromAmino: (object: _95.MsgCreateProjectAmino) => _95.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _95.MsgCreateBatch) => _95.MsgCreateBatchAmino;
                    fromAmino: (object: _95.MsgCreateBatchAmino) => _95.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: (message: _95.MsgMintBatchCredits) => _95.MsgMintBatchCreditsAmino;
                    fromAmino: (object: _95.MsgMintBatchCreditsAmino) => _95.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: (message: _95.MsgSealBatch) => _95.MsgSealBatchAmino;
                    fromAmino: (object: _95.MsgSealBatchAmino) => _95.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _95.MsgSend) => _95.MsgSendAmino;
                    fromAmino: (object: _95.MsgSendAmino) => _95.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _95.MsgRetire) => _95.MsgRetireAmino;
                    fromAmino: (object: _95.MsgRetireAmino) => _95.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _95.MsgCancel) => _95.MsgCancelAmino;
                    fromAmino: (object: _95.MsgCancelAmino) => _95.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateClassAdmin) => _95.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _95.MsgUpdateClassAdminAmino) => _95.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateClassIssuers) => _95.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _95.MsgUpdateClassIssuersAmino) => _95.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateClassMetadata) => _95.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _95.MsgUpdateClassMetadataAmino) => _95.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateProjectAdmin) => _95.MsgUpdateProjectAdminAmino;
                    fromAmino: (object: _95.MsgUpdateProjectAdminAmino) => _95.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateProjectMetadata) => _95.MsgUpdateProjectMetadataAmino;
                    fromAmino: (object: _95.MsgUpdateProjectMetadataAmino) => _95.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateBatchMetadata) => _95.MsgUpdateBatchMetadataAmino;
                    fromAmino: (object: _95.MsgUpdateBatchMetadataAmino) => _95.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: (message: _95.MsgBridge) => _95.MsgBridgeAmino;
                    fromAmino: (object: _95.MsgBridgeAmino) => _95.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: (message: _95.MsgBridgeReceive) => _95.MsgBridgeReceiveAmino;
                    fromAmino: (object: _95.MsgBridgeReceiveAmino) => _95.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: (message: _95.MsgAddCreditType) => _95.MsgAddCreditTypeAmino;
                    fromAmino: (object: _95.MsgAddCreditTypeAmino) => _95.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: (message: _95.MsgSetClassCreatorAllowlist) => _95.MsgSetClassCreatorAllowlistAmino;
                    fromAmino: (object: _95.MsgSetClassCreatorAllowlistAmino) => _95.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: (message: _95.MsgAddClassCreator) => _95.MsgAddClassCreatorAmino;
                    fromAmino: (object: _95.MsgAddClassCreatorAmino) => _95.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: (message: _95.MsgRemoveClassCreator) => _95.MsgRemoveClassCreatorAmino;
                    fromAmino: (object: _95.MsgRemoveClassCreatorAmino) => _95.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUpdateClassFee) => _95.MsgUpdateClassFeeAmino;
                    fromAmino: (object: _95.MsgUpdateClassFeeAmino) => _95.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _95.MsgAddAllowedBridgeChain) => _95.MsgAddAllowedBridgeChainAmino;
                    fromAmino: (object: _95.MsgAddAllowedBridgeChainAmino) => _95.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _95.MsgRemoveAllowedBridgeChain) => _95.MsgRemoveAllowedBridgeChainAmino;
                    fromAmino: (object: _95.MsgRemoveAllowedBridgeChainAmino) => _95.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _96.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Params;
                fromPartial(object: Partial<_96.Params>): _96.Params;
                fromAmino(object: _96.ParamsAmino): _96.Params;
                toAmino(message: _96.Params): _96.ParamsAmino;
                fromAminoMsg(object: _96.ParamsAminoMsg): _96.Params;
                fromProtoMsg(message: _96.ParamsProtoMsg): _96.Params;
                toProto(message: _96.Params): Uint8Array;
                toProtoMsg(message: _96.Params): _96.ParamsProtoMsg;
            };
            Credits: {
                typeUrl: string;
                encode(message: _96.Credits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Credits;
                fromPartial(object: Partial<_96.Credits>): _96.Credits;
                fromAmino(object: _96.CreditsAmino): _96.Credits;
                toAmino(message: _96.Credits): _96.CreditsAmino;
                fromAminoMsg(object: _96.CreditsAminoMsg): _96.Credits;
                fromProtoMsg(message: _96.CreditsProtoMsg): _96.Credits;
                toProto(message: _96.Credits): Uint8Array;
                toProtoMsg(message: _96.Credits): _96.CreditsProtoMsg;
            };
            BatchIssuance: {
                typeUrl: string;
                encode(message: _96.BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.BatchIssuance;
                fromPartial(object: Partial<_96.BatchIssuance>): _96.BatchIssuance;
                fromAmino(object: _96.BatchIssuanceAmino): _96.BatchIssuance;
                toAmino(message: _96.BatchIssuance): _96.BatchIssuanceAmino;
                fromAminoMsg(object: _96.BatchIssuanceAminoMsg): _96.BatchIssuance;
                fromProtoMsg(message: _96.BatchIssuanceProtoMsg): _96.BatchIssuance;
                toProto(message: _96.BatchIssuance): Uint8Array;
                toProtoMsg(message: _96.BatchIssuance): _96.BatchIssuanceProtoMsg;
            };
            OriginTx: {
                typeUrl: string;
                encode(message: _96.OriginTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.OriginTx;
                fromPartial(object: Partial<_96.OriginTx>): _96.OriginTx;
                fromAmino(object: _96.OriginTxAmino): _96.OriginTx;
                toAmino(message: _96.OriginTx): _96.OriginTxAmino;
                fromAminoMsg(object: _96.OriginTxAminoMsg): _96.OriginTx;
                fromProtoMsg(message: _96.OriginTxProtoMsg): _96.OriginTx;
                toProto(message: _96.OriginTx): Uint8Array;
                toProtoMsg(message: _96.OriginTx): _96.OriginTxProtoMsg;
            };
            CreditTypeProposal: {
                typeUrl: string;
                encode(message: _96.CreditTypeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.CreditTypeProposal;
                fromPartial(object: Partial<_96.CreditTypeProposal>): _96.CreditTypeProposal;
                fromAmino(object: _96.CreditTypeProposalAmino): _96.CreditTypeProposal;
                toAmino(message: _96.CreditTypeProposal): _96.CreditTypeProposalAmino;
                fromAminoMsg(object: _96.CreditTypeProposalAminoMsg): _96.CreditTypeProposal;
                fromProtoMsg(message: _96.CreditTypeProposalProtoMsg): _96.CreditTypeProposal;
                toProto(message: _96.CreditTypeProposal): Uint8Array;
                toProtoMsg(message: _96.CreditTypeProposal): _96.CreditTypeProposalProtoMsg;
            };
            AllowedDenom: {
                typeUrl: string;
                encode(message: _96.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.AllowedDenom;
                fromPartial(object: Partial<_96.AllowedDenom>): _96.AllowedDenom;
                fromAmino(object: _96.AllowedDenomAmino): _96.AllowedDenom;
                toAmino(message: _96.AllowedDenom): _96.AllowedDenomAmino;
                fromAminoMsg(object: _96.AllowedDenomAminoMsg): _96.AllowedDenom;
                fromProtoMsg(message: _96.AllowedDenomProtoMsg): _96.AllowedDenom;
                toProto(message: _96.AllowedDenom): Uint8Array;
                toProtoMsg(message: _96.AllowedDenom): _96.AllowedDenomProtoMsg;
            };
            MsgAddCreditType: {
                typeUrl: string;
                encode(message: _95.MsgAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgAddCreditType;
                fromPartial(object: Partial<_95.MsgAddCreditType>): _95.MsgAddCreditType;
                fromAmino(object: _95.MsgAddCreditTypeAmino): _95.MsgAddCreditType;
                toAmino(message: _95.MsgAddCreditType): _95.MsgAddCreditTypeAmino;
                fromAminoMsg(object: _95.MsgAddCreditTypeAminoMsg): _95.MsgAddCreditType;
                toAminoMsg(message: _95.MsgAddCreditType): _95.MsgAddCreditTypeAminoMsg;
                fromProtoMsg(message: _95.MsgAddCreditTypeProtoMsg): _95.MsgAddCreditType;
                toProto(message: _95.MsgAddCreditType): Uint8Array;
                toProtoMsg(message: _95.MsgAddCreditType): _95.MsgAddCreditTypeProtoMsg;
            };
            MsgAddCreditTypeResponse: {
                typeUrl: string;
                encode(_: _95.MsgAddCreditTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgAddCreditTypeResponse;
                fromPartial(_: Partial<_95.MsgAddCreditTypeResponse>): _95.MsgAddCreditTypeResponse;
                fromAmino(_: _95.MsgAddCreditTypeResponseAmino): _95.MsgAddCreditTypeResponse;
                toAmino(_: _95.MsgAddCreditTypeResponse): _95.MsgAddCreditTypeResponseAmino;
                fromAminoMsg(object: _95.MsgAddCreditTypeResponseAminoMsg): _95.MsgAddCreditTypeResponse;
                fromProtoMsg(message: _95.MsgAddCreditTypeResponseProtoMsg): _95.MsgAddCreditTypeResponse;
                toProto(message: _95.MsgAddCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _95.MsgAddCreditTypeResponse): _95.MsgAddCreditTypeResponseProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _95.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateClass;
                fromPartial(object: Partial<_95.MsgCreateClass>): _95.MsgCreateClass;
                fromAmino(object: _95.MsgCreateClassAmino): _95.MsgCreateClass;
                toAmino(message: _95.MsgCreateClass): _95.MsgCreateClassAmino;
                fromAminoMsg(object: _95.MsgCreateClassAminoMsg): _95.MsgCreateClass;
                toAminoMsg(message: _95.MsgCreateClass): _95.MsgCreateClassAminoMsg;
                fromProtoMsg(message: _95.MsgCreateClassProtoMsg): _95.MsgCreateClass;
                toProto(message: _95.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _95.MsgCreateClass): _95.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _95.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateClassResponse;
                fromPartial(object: Partial<_95.MsgCreateClassResponse>): _95.MsgCreateClassResponse;
                fromAmino(object: _95.MsgCreateClassResponseAmino): _95.MsgCreateClassResponse;
                toAmino(message: _95.MsgCreateClassResponse): _95.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _95.MsgCreateClassResponseAminoMsg): _95.MsgCreateClassResponse;
                fromProtoMsg(message: _95.MsgCreateClassResponseProtoMsg): _95.MsgCreateClassResponse;
                toProto(message: _95.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _95.MsgCreateClassResponse): _95.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateProject: {
                typeUrl: string;
                encode(message: _95.MsgCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateProject;
                fromPartial(object: Partial<_95.MsgCreateProject>): _95.MsgCreateProject;
                fromAmino(object: _95.MsgCreateProjectAmino): _95.MsgCreateProject;
                toAmino(message: _95.MsgCreateProject): _95.MsgCreateProjectAmino;
                fromAminoMsg(object: _95.MsgCreateProjectAminoMsg): _95.MsgCreateProject;
                toAminoMsg(message: _95.MsgCreateProject): _95.MsgCreateProjectAminoMsg;
                fromProtoMsg(message: _95.MsgCreateProjectProtoMsg): _95.MsgCreateProject;
                toProto(message: _95.MsgCreateProject): Uint8Array;
                toProtoMsg(message: _95.MsgCreateProject): _95.MsgCreateProjectProtoMsg;
            };
            MsgCreateProjectResponse: {
                typeUrl: string;
                encode(message: _95.MsgCreateProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateProjectResponse;
                fromPartial(object: Partial<_95.MsgCreateProjectResponse>): _95.MsgCreateProjectResponse;
                fromAmino(object: _95.MsgCreateProjectResponseAmino): _95.MsgCreateProjectResponse;
                toAmino(message: _95.MsgCreateProjectResponse): _95.MsgCreateProjectResponseAmino;
                fromAminoMsg(object: _95.MsgCreateProjectResponseAminoMsg): _95.MsgCreateProjectResponse;
                fromProtoMsg(message: _95.MsgCreateProjectResponseProtoMsg): _95.MsgCreateProjectResponse;
                toProto(message: _95.MsgCreateProjectResponse): Uint8Array;
                toProtoMsg(message: _95.MsgCreateProjectResponse): _95.MsgCreateProjectResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _95.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateBatch;
                fromPartial(object: Partial<_95.MsgCreateBatch>): _95.MsgCreateBatch;
                fromAmino(object: _95.MsgCreateBatchAmino): _95.MsgCreateBatch;
                toAmino(message: _95.MsgCreateBatch): _95.MsgCreateBatchAmino;
                fromAminoMsg(object: _95.MsgCreateBatchAminoMsg): _95.MsgCreateBatch;
                toAminoMsg(message: _95.MsgCreateBatch): _95.MsgCreateBatchAminoMsg;
                fromProtoMsg(message: _95.MsgCreateBatchProtoMsg): _95.MsgCreateBatch;
                toProto(message: _95.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _95.MsgCreateBatch): _95.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _95.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCreateBatchResponse;
                fromPartial(object: Partial<_95.MsgCreateBatchResponse>): _95.MsgCreateBatchResponse;
                fromAmino(object: _95.MsgCreateBatchResponseAmino): _95.MsgCreateBatchResponse;
                toAmino(message: _95.MsgCreateBatchResponse): _95.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _95.MsgCreateBatchResponseAminoMsg): _95.MsgCreateBatchResponse;
                fromProtoMsg(message: _95.MsgCreateBatchResponseProtoMsg): _95.MsgCreateBatchResponse;
                toProto(message: _95.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _95.MsgCreateBatchResponse): _95.MsgCreateBatchResponseProtoMsg;
            };
            MsgMintBatchCredits: {
                typeUrl: string;
                encode(message: _95.MsgMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgMintBatchCredits;
                fromPartial(object: Partial<_95.MsgMintBatchCredits>): _95.MsgMintBatchCredits;
                fromAmino(object: _95.MsgMintBatchCreditsAmino): _95.MsgMintBatchCredits;
                toAmino(message: _95.MsgMintBatchCredits): _95.MsgMintBatchCreditsAmino;
                fromAminoMsg(object: _95.MsgMintBatchCreditsAminoMsg): _95.MsgMintBatchCredits;
                toAminoMsg(message: _95.MsgMintBatchCredits): _95.MsgMintBatchCreditsAminoMsg;
                fromProtoMsg(message: _95.MsgMintBatchCreditsProtoMsg): _95.MsgMintBatchCredits;
                toProto(message: _95.MsgMintBatchCredits): Uint8Array;
                toProtoMsg(message: _95.MsgMintBatchCredits): _95.MsgMintBatchCreditsProtoMsg;
            };
            MsgMintBatchCreditsResponse: {
                typeUrl: string;
                encode(_: _95.MsgMintBatchCreditsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgMintBatchCreditsResponse;
                fromPartial(_: Partial<_95.MsgMintBatchCreditsResponse>): _95.MsgMintBatchCreditsResponse;
                fromAmino(_: _95.MsgMintBatchCreditsResponseAmino): _95.MsgMintBatchCreditsResponse;
                toAmino(_: _95.MsgMintBatchCreditsResponse): _95.MsgMintBatchCreditsResponseAmino;
                fromAminoMsg(object: _95.MsgMintBatchCreditsResponseAminoMsg): _95.MsgMintBatchCreditsResponse;
                fromProtoMsg(message: _95.MsgMintBatchCreditsResponseProtoMsg): _95.MsgMintBatchCreditsResponse;
                toProto(message: _95.MsgMintBatchCreditsResponse): Uint8Array;
                toProtoMsg(message: _95.MsgMintBatchCreditsResponse): _95.MsgMintBatchCreditsResponseProtoMsg;
            };
            MsgSealBatch: {
                typeUrl: string;
                encode(message: _95.MsgSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSealBatch;
                fromPartial(object: Partial<_95.MsgSealBatch>): _95.MsgSealBatch;
                fromAmino(object: _95.MsgSealBatchAmino): _95.MsgSealBatch;
                toAmino(message: _95.MsgSealBatch): _95.MsgSealBatchAmino;
                fromAminoMsg(object: _95.MsgSealBatchAminoMsg): _95.MsgSealBatch;
                toAminoMsg(message: _95.MsgSealBatch): _95.MsgSealBatchAminoMsg;
                fromProtoMsg(message: _95.MsgSealBatchProtoMsg): _95.MsgSealBatch;
                toProto(message: _95.MsgSealBatch): Uint8Array;
                toProtoMsg(message: _95.MsgSealBatch): _95.MsgSealBatchProtoMsg;
            };
            MsgSealBatchResponse: {
                typeUrl: string;
                encode(_: _95.MsgSealBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSealBatchResponse;
                fromPartial(_: Partial<_95.MsgSealBatchResponse>): _95.MsgSealBatchResponse;
                fromAmino(_: _95.MsgSealBatchResponseAmino): _95.MsgSealBatchResponse;
                toAmino(_: _95.MsgSealBatchResponse): _95.MsgSealBatchResponseAmino;
                fromAminoMsg(object: _95.MsgSealBatchResponseAminoMsg): _95.MsgSealBatchResponse;
                fromProtoMsg(message: _95.MsgSealBatchResponseProtoMsg): _95.MsgSealBatchResponse;
                toProto(message: _95.MsgSealBatchResponse): Uint8Array;
                toProtoMsg(message: _95.MsgSealBatchResponse): _95.MsgSealBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _95.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSend;
                fromPartial(object: Partial<_95.MsgSend>): _95.MsgSend;
                fromAmino(object: _95.MsgSendAmino): _95.MsgSend;
                toAmino(message: _95.MsgSend): _95.MsgSendAmino;
                fromAminoMsg(object: _95.MsgSendAminoMsg): _95.MsgSend;
                toAminoMsg(message: _95.MsgSend): _95.MsgSendAminoMsg;
                fromProtoMsg(message: _95.MsgSendProtoMsg): _95.MsgSend;
                toProto(message: _95.MsgSend): Uint8Array;
                toProtoMsg(message: _95.MsgSend): _95.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _95.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSend_SendCredits;
                fromPartial(object: Partial<_95.MsgSend_SendCredits>): _95.MsgSend_SendCredits;
                fromAmino(object: _95.MsgSend_SendCreditsAmino): _95.MsgSend_SendCredits;
                toAmino(message: _95.MsgSend_SendCredits): _95.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _95.MsgSend_SendCreditsAminoMsg): _95.MsgSend_SendCredits;
                fromProtoMsg(message: _95.MsgSend_SendCreditsProtoMsg): _95.MsgSend_SendCredits;
                toProto(message: _95.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _95.MsgSend_SendCredits): _95.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _95.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSendResponse;
                fromPartial(_: Partial<_95.MsgSendResponse>): _95.MsgSendResponse;
                fromAmino(_: _95.MsgSendResponseAmino): _95.MsgSendResponse;
                toAmino(_: _95.MsgSendResponse): _95.MsgSendResponseAmino;
                fromAminoMsg(object: _95.MsgSendResponseAminoMsg): _95.MsgSendResponse;
                fromProtoMsg(message: _95.MsgSendResponseProtoMsg): _95.MsgSendResponse;
                toProto(message: _95.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _95.MsgSendResponse): _95.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _95.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRetire;
                fromPartial(object: Partial<_95.MsgRetire>): _95.MsgRetire;
                fromAmino(object: _95.MsgRetireAmino): _95.MsgRetire;
                toAmino(message: _95.MsgRetire): _95.MsgRetireAmino;
                fromAminoMsg(object: _95.MsgRetireAminoMsg): _95.MsgRetire;
                toAminoMsg(message: _95.MsgRetire): _95.MsgRetireAminoMsg;
                fromProtoMsg(message: _95.MsgRetireProtoMsg): _95.MsgRetire;
                toProto(message: _95.MsgRetire): Uint8Array;
                toProtoMsg(message: _95.MsgRetire): _95.MsgRetireProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _95.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRetireResponse;
                fromPartial(_: Partial<_95.MsgRetireResponse>): _95.MsgRetireResponse;
                fromAmino(_: _95.MsgRetireResponseAmino): _95.MsgRetireResponse;
                toAmino(_: _95.MsgRetireResponse): _95.MsgRetireResponseAmino;
                fromAminoMsg(object: _95.MsgRetireResponseAminoMsg): _95.MsgRetireResponse;
                fromProtoMsg(message: _95.MsgRetireResponseProtoMsg): _95.MsgRetireResponse;
                toProto(message: _95.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _95.MsgRetireResponse): _95.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _95.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCancel;
                fromPartial(object: Partial<_95.MsgCancel>): _95.MsgCancel;
                fromAmino(object: _95.MsgCancelAmino): _95.MsgCancel;
                toAmino(message: _95.MsgCancel): _95.MsgCancelAmino;
                fromAminoMsg(object: _95.MsgCancelAminoMsg): _95.MsgCancel;
                toAminoMsg(message: _95.MsgCancel): _95.MsgCancelAminoMsg;
                fromProtoMsg(message: _95.MsgCancelProtoMsg): _95.MsgCancel;
                toProto(message: _95.MsgCancel): Uint8Array;
                toProtoMsg(message: _95.MsgCancel): _95.MsgCancelProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _95.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgCancelResponse;
                fromPartial(_: Partial<_95.MsgCancelResponse>): _95.MsgCancelResponse;
                fromAmino(_: _95.MsgCancelResponseAmino): _95.MsgCancelResponse;
                toAmino(_: _95.MsgCancelResponse): _95.MsgCancelResponseAmino;
                fromAminoMsg(object: _95.MsgCancelResponseAminoMsg): _95.MsgCancelResponse;
                fromProtoMsg(message: _95.MsgCancelResponseProtoMsg): _95.MsgCancelResponse;
                toProto(message: _95.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _95.MsgCancelResponse): _95.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _95.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassAdmin;
                fromPartial(object: Partial<_95.MsgUpdateClassAdmin>): _95.MsgUpdateClassAdmin;
                fromAmino(object: _95.MsgUpdateClassAdminAmino): _95.MsgUpdateClassAdmin;
                toAmino(message: _95.MsgUpdateClassAdmin): _95.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _95.MsgUpdateClassAdminAminoMsg): _95.MsgUpdateClassAdmin;
                toAminoMsg(message: _95.MsgUpdateClassAdmin): _95.MsgUpdateClassAdminAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateClassAdminProtoMsg): _95.MsgUpdateClassAdmin;
                toProto(message: _95.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassAdmin): _95.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassAdminResponse;
                fromPartial(_: Partial<_95.MsgUpdateClassAdminResponse>): _95.MsgUpdateClassAdminResponse;
                fromAmino(_: _95.MsgUpdateClassAdminResponseAmino): _95.MsgUpdateClassAdminResponse;
                toAmino(_: _95.MsgUpdateClassAdminResponse): _95.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateClassAdminResponseAminoMsg): _95.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _95.MsgUpdateClassAdminResponseProtoMsg): _95.MsgUpdateClassAdminResponse;
                toProto(message: _95.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassAdminResponse): _95.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _95.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassIssuers;
                fromPartial(object: Partial<_95.MsgUpdateClassIssuers>): _95.MsgUpdateClassIssuers;
                fromAmino(object: _95.MsgUpdateClassIssuersAmino): _95.MsgUpdateClassIssuers;
                toAmino(message: _95.MsgUpdateClassIssuers): _95.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _95.MsgUpdateClassIssuersAminoMsg): _95.MsgUpdateClassIssuers;
                toAminoMsg(message: _95.MsgUpdateClassIssuers): _95.MsgUpdateClassIssuersAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateClassIssuersProtoMsg): _95.MsgUpdateClassIssuers;
                toProto(message: _95.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassIssuers): _95.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassIssuersResponse;
                fromPartial(_: Partial<_95.MsgUpdateClassIssuersResponse>): _95.MsgUpdateClassIssuersResponse;
                fromAmino(_: _95.MsgUpdateClassIssuersResponseAmino): _95.MsgUpdateClassIssuersResponse;
                toAmino(_: _95.MsgUpdateClassIssuersResponse): _95.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateClassIssuersResponseAminoMsg): _95.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _95.MsgUpdateClassIssuersResponseProtoMsg): _95.MsgUpdateClassIssuersResponse;
                toProto(message: _95.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassIssuersResponse): _95.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _95.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassMetadata;
                fromPartial(object: Partial<_95.MsgUpdateClassMetadata>): _95.MsgUpdateClassMetadata;
                fromAmino(object: _95.MsgUpdateClassMetadataAmino): _95.MsgUpdateClassMetadata;
                toAmino(message: _95.MsgUpdateClassMetadata): _95.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _95.MsgUpdateClassMetadataAminoMsg): _95.MsgUpdateClassMetadata;
                toAminoMsg(message: _95.MsgUpdateClassMetadata): _95.MsgUpdateClassMetadataAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateClassMetadataProtoMsg): _95.MsgUpdateClassMetadata;
                toProto(message: _95.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassMetadata): _95.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassMetadataResponse;
                fromPartial(_: Partial<_95.MsgUpdateClassMetadataResponse>): _95.MsgUpdateClassMetadataResponse;
                fromAmino(_: _95.MsgUpdateClassMetadataResponseAmino): _95.MsgUpdateClassMetadataResponse;
                toAmino(_: _95.MsgUpdateClassMetadataResponse): _95.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateClassMetadataResponseAminoMsg): _95.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _95.MsgUpdateClassMetadataResponseProtoMsg): _95.MsgUpdateClassMetadataResponse;
                toProto(message: _95.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassMetadataResponse): _95.MsgUpdateClassMetadataResponseProtoMsg;
            };
            MsgUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _95.MsgUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateProjectAdmin;
                fromPartial(object: Partial<_95.MsgUpdateProjectAdmin>): _95.MsgUpdateProjectAdmin;
                fromAmino(object: _95.MsgUpdateProjectAdminAmino): _95.MsgUpdateProjectAdmin;
                toAmino(message: _95.MsgUpdateProjectAdmin): _95.MsgUpdateProjectAdminAmino;
                fromAminoMsg(object: _95.MsgUpdateProjectAdminAminoMsg): _95.MsgUpdateProjectAdmin;
                toAminoMsg(message: _95.MsgUpdateProjectAdmin): _95.MsgUpdateProjectAdminAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateProjectAdminProtoMsg): _95.MsgUpdateProjectAdmin;
                toProto(message: _95.MsgUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateProjectAdmin): _95.MsgUpdateProjectAdminProtoMsg;
            };
            MsgUpdateProjectAdminResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateProjectAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateProjectAdminResponse;
                fromPartial(_: Partial<_95.MsgUpdateProjectAdminResponse>): _95.MsgUpdateProjectAdminResponse;
                fromAmino(_: _95.MsgUpdateProjectAdminResponseAmino): _95.MsgUpdateProjectAdminResponse;
                toAmino(_: _95.MsgUpdateProjectAdminResponse): _95.MsgUpdateProjectAdminResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateProjectAdminResponseAminoMsg): _95.MsgUpdateProjectAdminResponse;
                fromProtoMsg(message: _95.MsgUpdateProjectAdminResponseProtoMsg): _95.MsgUpdateProjectAdminResponse;
                toProto(message: _95.MsgUpdateProjectAdminResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateProjectAdminResponse): _95.MsgUpdateProjectAdminResponseProtoMsg;
            };
            MsgUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _95.MsgUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateProjectMetadata;
                fromPartial(object: Partial<_95.MsgUpdateProjectMetadata>): _95.MsgUpdateProjectMetadata;
                fromAmino(object: _95.MsgUpdateProjectMetadataAmino): _95.MsgUpdateProjectMetadata;
                toAmino(message: _95.MsgUpdateProjectMetadata): _95.MsgUpdateProjectMetadataAmino;
                fromAminoMsg(object: _95.MsgUpdateProjectMetadataAminoMsg): _95.MsgUpdateProjectMetadata;
                toAminoMsg(message: _95.MsgUpdateProjectMetadata): _95.MsgUpdateProjectMetadataAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateProjectMetadataProtoMsg): _95.MsgUpdateProjectMetadata;
                toProto(message: _95.MsgUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateProjectMetadata): _95.MsgUpdateProjectMetadataProtoMsg;
            };
            MsgUpdateProjectMetadataResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateProjectMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateProjectMetadataResponse;
                fromPartial(_: Partial<_95.MsgUpdateProjectMetadataResponse>): _95.MsgUpdateProjectMetadataResponse;
                fromAmino(_: _95.MsgUpdateProjectMetadataResponseAmino): _95.MsgUpdateProjectMetadataResponse;
                toAmino(_: _95.MsgUpdateProjectMetadataResponse): _95.MsgUpdateProjectMetadataResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateProjectMetadataResponseAminoMsg): _95.MsgUpdateProjectMetadataResponse;
                fromProtoMsg(message: _95.MsgUpdateProjectMetadataResponseProtoMsg): _95.MsgUpdateProjectMetadataResponse;
                toProto(message: _95.MsgUpdateProjectMetadataResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateProjectMetadataResponse): _95.MsgUpdateProjectMetadataResponseProtoMsg;
            };
            MsgBridge: {
                typeUrl: string;
                encode(message: _95.MsgBridge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgBridge;
                fromPartial(object: Partial<_95.MsgBridge>): _95.MsgBridge;
                fromAmino(object: _95.MsgBridgeAmino): _95.MsgBridge;
                toAmino(message: _95.MsgBridge): _95.MsgBridgeAmino;
                fromAminoMsg(object: _95.MsgBridgeAminoMsg): _95.MsgBridge;
                toAminoMsg(message: _95.MsgBridge): _95.MsgBridgeAminoMsg;
                fromProtoMsg(message: _95.MsgBridgeProtoMsg): _95.MsgBridge;
                toProto(message: _95.MsgBridge): Uint8Array;
                toProtoMsg(message: _95.MsgBridge): _95.MsgBridgeProtoMsg;
            };
            MsgUpdateBatchMetadata: {
                typeUrl: string;
                encode(message: _95.MsgUpdateBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateBatchMetadata;
                fromPartial(object: Partial<_95.MsgUpdateBatchMetadata>): _95.MsgUpdateBatchMetadata;
                fromAmino(object: _95.MsgUpdateBatchMetadataAmino): _95.MsgUpdateBatchMetadata;
                toAmino(message: _95.MsgUpdateBatchMetadata): _95.MsgUpdateBatchMetadataAmino;
                fromAminoMsg(object: _95.MsgUpdateBatchMetadataAminoMsg): _95.MsgUpdateBatchMetadata;
                toAminoMsg(message: _95.MsgUpdateBatchMetadata): _95.MsgUpdateBatchMetadataAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateBatchMetadataProtoMsg): _95.MsgUpdateBatchMetadata;
                toProto(message: _95.MsgUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateBatchMetadata): _95.MsgUpdateBatchMetadataProtoMsg;
            };
            MsgUpdateBatchMetadataResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateBatchMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateBatchMetadataResponse;
                fromPartial(_: Partial<_95.MsgUpdateBatchMetadataResponse>): _95.MsgUpdateBatchMetadataResponse;
                fromAmino(_: _95.MsgUpdateBatchMetadataResponseAmino): _95.MsgUpdateBatchMetadataResponse;
                toAmino(_: _95.MsgUpdateBatchMetadataResponse): _95.MsgUpdateBatchMetadataResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateBatchMetadataResponseAminoMsg): _95.MsgUpdateBatchMetadataResponse;
                fromProtoMsg(message: _95.MsgUpdateBatchMetadataResponseProtoMsg): _95.MsgUpdateBatchMetadataResponse;
                toProto(message: _95.MsgUpdateBatchMetadataResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateBatchMetadataResponse): _95.MsgUpdateBatchMetadataResponseProtoMsg;
            };
            MsgBridgeResponse: {
                typeUrl: string;
                encode(_: _95.MsgBridgeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgBridgeResponse;
                fromPartial(_: Partial<_95.MsgBridgeResponse>): _95.MsgBridgeResponse;
                fromAmino(_: _95.MsgBridgeResponseAmino): _95.MsgBridgeResponse;
                toAmino(_: _95.MsgBridgeResponse): _95.MsgBridgeResponseAmino;
                fromAminoMsg(object: _95.MsgBridgeResponseAminoMsg): _95.MsgBridgeResponse;
                fromProtoMsg(message: _95.MsgBridgeResponseProtoMsg): _95.MsgBridgeResponse;
                toProto(message: _95.MsgBridgeResponse): Uint8Array;
                toProtoMsg(message: _95.MsgBridgeResponse): _95.MsgBridgeResponseProtoMsg;
            };
            MsgBridgeReceive: {
                typeUrl: string;
                encode(message: _95.MsgBridgeReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgBridgeReceive;
                fromPartial(object: Partial<_95.MsgBridgeReceive>): _95.MsgBridgeReceive;
                fromAmino(object: _95.MsgBridgeReceiveAmino): _95.MsgBridgeReceive;
                toAmino(message: _95.MsgBridgeReceive): _95.MsgBridgeReceiveAmino;
                fromAminoMsg(object: _95.MsgBridgeReceiveAminoMsg): _95.MsgBridgeReceive;
                toAminoMsg(message: _95.MsgBridgeReceive): _95.MsgBridgeReceiveAminoMsg;
                fromProtoMsg(message: _95.MsgBridgeReceiveProtoMsg): _95.MsgBridgeReceive;
                toProto(message: _95.MsgBridgeReceive): Uint8Array;
                toProtoMsg(message: _95.MsgBridgeReceive): _95.MsgBridgeReceiveProtoMsg;
            };
            MsgBridgeReceive_Batch: {
                typeUrl: string;
                encode(message: _95.MsgBridgeReceive_Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgBridgeReceive_Batch;
                fromPartial(object: Partial<_95.MsgBridgeReceive_Batch>): _95.MsgBridgeReceive_Batch;
                fromAmino(object: _95.MsgBridgeReceive_BatchAmino): _95.MsgBridgeReceive_Batch;
                toAmino(message: _95.MsgBridgeReceive_Batch): _95.MsgBridgeReceive_BatchAmino;
                fromAminoMsg(object: _95.MsgBridgeReceive_BatchAminoMsg): _95.MsgBridgeReceive_Batch;
                fromProtoMsg(message: _95.MsgBridgeReceive_BatchProtoMsg): _95.MsgBridgeReceive_Batch;
                toProto(message: _95.MsgBridgeReceive_Batch): Uint8Array;
                toProtoMsg(message: _95.MsgBridgeReceive_Batch): _95.MsgBridgeReceive_BatchProtoMsg;
            };
            MsgBridgeReceive_Project: {
                typeUrl: string;
                encode(message: _95.MsgBridgeReceive_Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgBridgeReceive_Project;
                fromPartial(object: Partial<_95.MsgBridgeReceive_Project>): _95.MsgBridgeReceive_Project;
                fromAmino(object: _95.MsgBridgeReceive_ProjectAmino): _95.MsgBridgeReceive_Project;
                toAmino(message: _95.MsgBridgeReceive_Project): _95.MsgBridgeReceive_ProjectAmino;
                fromAminoMsg(object: _95.MsgBridgeReceive_ProjectAminoMsg): _95.MsgBridgeReceive_Project;
                fromProtoMsg(message: _95.MsgBridgeReceive_ProjectProtoMsg): _95.MsgBridgeReceive_Project;
                toProto(message: _95.MsgBridgeReceive_Project): Uint8Array;
                toProtoMsg(message: _95.MsgBridgeReceive_Project): _95.MsgBridgeReceive_ProjectProtoMsg;
            };
            MsgBridgeReceiveResponse: {
                typeUrl: string;
                encode(message: _95.MsgBridgeReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgBridgeReceiveResponse;
                fromPartial(object: Partial<_95.MsgBridgeReceiveResponse>): _95.MsgBridgeReceiveResponse;
                fromAmino(object: _95.MsgBridgeReceiveResponseAmino): _95.MsgBridgeReceiveResponse;
                toAmino(message: _95.MsgBridgeReceiveResponse): _95.MsgBridgeReceiveResponseAmino;
                fromAminoMsg(object: _95.MsgBridgeReceiveResponseAminoMsg): _95.MsgBridgeReceiveResponse;
                fromProtoMsg(message: _95.MsgBridgeReceiveResponseProtoMsg): _95.MsgBridgeReceiveResponse;
                toProto(message: _95.MsgBridgeReceiveResponse): Uint8Array;
                toProtoMsg(message: _95.MsgBridgeReceiveResponse): _95.MsgBridgeReceiveResponseProtoMsg;
            };
            MsgAddClassCreator: {
                typeUrl: string;
                encode(message: _95.MsgAddClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgAddClassCreator;
                fromPartial(object: Partial<_95.MsgAddClassCreator>): _95.MsgAddClassCreator;
                fromAmino(object: _95.MsgAddClassCreatorAmino): _95.MsgAddClassCreator;
                toAmino(message: _95.MsgAddClassCreator): _95.MsgAddClassCreatorAmino;
                fromAminoMsg(object: _95.MsgAddClassCreatorAminoMsg): _95.MsgAddClassCreator;
                toAminoMsg(message: _95.MsgAddClassCreator): _95.MsgAddClassCreatorAminoMsg;
                fromProtoMsg(message: _95.MsgAddClassCreatorProtoMsg): _95.MsgAddClassCreator;
                toProto(message: _95.MsgAddClassCreator): Uint8Array;
                toProtoMsg(message: _95.MsgAddClassCreator): _95.MsgAddClassCreatorProtoMsg;
            };
            MsgAddClassCreatorResponse: {
                typeUrl: string;
                encode(_: _95.MsgAddClassCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgAddClassCreatorResponse;
                fromPartial(_: Partial<_95.MsgAddClassCreatorResponse>): _95.MsgAddClassCreatorResponse;
                fromAmino(_: _95.MsgAddClassCreatorResponseAmino): _95.MsgAddClassCreatorResponse;
                toAmino(_: _95.MsgAddClassCreatorResponse): _95.MsgAddClassCreatorResponseAmino;
                fromAminoMsg(object: _95.MsgAddClassCreatorResponseAminoMsg): _95.MsgAddClassCreatorResponse;
                fromProtoMsg(message: _95.MsgAddClassCreatorResponseProtoMsg): _95.MsgAddClassCreatorResponse;
                toProto(message: _95.MsgAddClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _95.MsgAddClassCreatorResponse): _95.MsgAddClassCreatorResponseProtoMsg;
            };
            MsgSetClassCreatorAllowlist: {
                typeUrl: string;
                encode(message: _95.MsgSetClassCreatorAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSetClassCreatorAllowlist;
                fromPartial(object: Partial<_95.MsgSetClassCreatorAllowlist>): _95.MsgSetClassCreatorAllowlist;
                fromAmino(object: _95.MsgSetClassCreatorAllowlistAmino): _95.MsgSetClassCreatorAllowlist;
                toAmino(message: _95.MsgSetClassCreatorAllowlist): _95.MsgSetClassCreatorAllowlistAmino;
                fromAminoMsg(object: _95.MsgSetClassCreatorAllowlistAminoMsg): _95.MsgSetClassCreatorAllowlist;
                toAminoMsg(message: _95.MsgSetClassCreatorAllowlist): _95.MsgSetClassCreatorAllowlistAminoMsg;
                fromProtoMsg(message: _95.MsgSetClassCreatorAllowlistProtoMsg): _95.MsgSetClassCreatorAllowlist;
                toProto(message: _95.MsgSetClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _95.MsgSetClassCreatorAllowlist): _95.MsgSetClassCreatorAllowlistProtoMsg;
            };
            MsgSetClassCreatorAllowlistResponse: {
                typeUrl: string;
                encode(_: _95.MsgSetClassCreatorAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSetClassCreatorAllowlistResponse;
                fromPartial(_: Partial<_95.MsgSetClassCreatorAllowlistResponse>): _95.MsgSetClassCreatorAllowlistResponse;
                fromAmino(_: _95.MsgSetClassCreatorAllowlistResponseAmino): _95.MsgSetClassCreatorAllowlistResponse;
                toAmino(_: _95.MsgSetClassCreatorAllowlistResponse): _95.MsgSetClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _95.MsgSetClassCreatorAllowlistResponseAminoMsg): _95.MsgSetClassCreatorAllowlistResponse;
                fromProtoMsg(message: _95.MsgSetClassCreatorAllowlistResponseProtoMsg): _95.MsgSetClassCreatorAllowlistResponse;
                toProto(message: _95.MsgSetClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _95.MsgSetClassCreatorAllowlistResponse): _95.MsgSetClassCreatorAllowlistResponseProtoMsg;
            };
            MsgRemoveClassCreator: {
                typeUrl: string;
                encode(message: _95.MsgRemoveClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRemoveClassCreator;
                fromPartial(object: Partial<_95.MsgRemoveClassCreator>): _95.MsgRemoveClassCreator;
                fromAmino(object: _95.MsgRemoveClassCreatorAmino): _95.MsgRemoveClassCreator;
                toAmino(message: _95.MsgRemoveClassCreator): _95.MsgRemoveClassCreatorAmino;
                fromAminoMsg(object: _95.MsgRemoveClassCreatorAminoMsg): _95.MsgRemoveClassCreator;
                toAminoMsg(message: _95.MsgRemoveClassCreator): _95.MsgRemoveClassCreatorAminoMsg;
                fromProtoMsg(message: _95.MsgRemoveClassCreatorProtoMsg): _95.MsgRemoveClassCreator;
                toProto(message: _95.MsgRemoveClassCreator): Uint8Array;
                toProtoMsg(message: _95.MsgRemoveClassCreator): _95.MsgRemoveClassCreatorProtoMsg;
            };
            MsgRemoveClassCreatorResponse: {
                typeUrl: string;
                encode(_: _95.MsgRemoveClassCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRemoveClassCreatorResponse;
                fromPartial(_: Partial<_95.MsgRemoveClassCreatorResponse>): _95.MsgRemoveClassCreatorResponse;
                fromAmino(_: _95.MsgRemoveClassCreatorResponseAmino): _95.MsgRemoveClassCreatorResponse;
                toAmino(_: _95.MsgRemoveClassCreatorResponse): _95.MsgRemoveClassCreatorResponseAmino;
                fromAminoMsg(object: _95.MsgRemoveClassCreatorResponseAminoMsg): _95.MsgRemoveClassCreatorResponse;
                fromProtoMsg(message: _95.MsgRemoveClassCreatorResponseProtoMsg): _95.MsgRemoveClassCreatorResponse;
                toProto(message: _95.MsgRemoveClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _95.MsgRemoveClassCreatorResponse): _95.MsgRemoveClassCreatorResponseProtoMsg;
            };
            MsgUpdateClassFee: {
                typeUrl: string;
                encode(message: _95.MsgUpdateClassFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassFee;
                fromPartial(object: Partial<_95.MsgUpdateClassFee>): _95.MsgUpdateClassFee;
                fromAmino(object: _95.MsgUpdateClassFeeAmino): _95.MsgUpdateClassFee;
                toAmino(message: _95.MsgUpdateClassFee): _95.MsgUpdateClassFeeAmino;
                fromAminoMsg(object: _95.MsgUpdateClassFeeAminoMsg): _95.MsgUpdateClassFee;
                toAminoMsg(message: _95.MsgUpdateClassFee): _95.MsgUpdateClassFeeAminoMsg;
                fromProtoMsg(message: _95.MsgUpdateClassFeeProtoMsg): _95.MsgUpdateClassFee;
                toProto(message: _95.MsgUpdateClassFee): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassFee): _95.MsgUpdateClassFeeProtoMsg;
            };
            MsgUpdateClassFeeResponse: {
                typeUrl: string;
                encode(_: _95.MsgUpdateClassFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateClassFeeResponse;
                fromPartial(_: Partial<_95.MsgUpdateClassFeeResponse>): _95.MsgUpdateClassFeeResponse;
                fromAmino(_: _95.MsgUpdateClassFeeResponseAmino): _95.MsgUpdateClassFeeResponse;
                toAmino(_: _95.MsgUpdateClassFeeResponse): _95.MsgUpdateClassFeeResponseAmino;
                fromAminoMsg(object: _95.MsgUpdateClassFeeResponseAminoMsg): _95.MsgUpdateClassFeeResponse;
                fromProtoMsg(message: _95.MsgUpdateClassFeeResponseProtoMsg): _95.MsgUpdateClassFeeResponse;
                toProto(message: _95.MsgUpdateClassFeeResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUpdateClassFeeResponse): _95.MsgUpdateClassFeeResponseProtoMsg;
            };
            MsgAddAllowedBridgeChain: {
                typeUrl: string;
                encode(message: _95.MsgAddAllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgAddAllowedBridgeChain;
                fromPartial(object: Partial<_95.MsgAddAllowedBridgeChain>): _95.MsgAddAllowedBridgeChain;
                fromAmino(object: _95.MsgAddAllowedBridgeChainAmino): _95.MsgAddAllowedBridgeChain;
                toAmino(message: _95.MsgAddAllowedBridgeChain): _95.MsgAddAllowedBridgeChainAmino;
                fromAminoMsg(object: _95.MsgAddAllowedBridgeChainAminoMsg): _95.MsgAddAllowedBridgeChain;
                toAminoMsg(message: _95.MsgAddAllowedBridgeChain): _95.MsgAddAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _95.MsgAddAllowedBridgeChainProtoMsg): _95.MsgAddAllowedBridgeChain;
                toProto(message: _95.MsgAddAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _95.MsgAddAllowedBridgeChain): _95.MsgAddAllowedBridgeChainProtoMsg;
            };
            MsgAddAllowedBridgeChainResponse: {
                typeUrl: string;
                encode(_: _95.MsgAddAllowedBridgeChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgAddAllowedBridgeChainResponse;
                fromPartial(_: Partial<_95.MsgAddAllowedBridgeChainResponse>): _95.MsgAddAllowedBridgeChainResponse;
                fromAmino(_: _95.MsgAddAllowedBridgeChainResponseAmino): _95.MsgAddAllowedBridgeChainResponse;
                toAmino(_: _95.MsgAddAllowedBridgeChainResponse): _95.MsgAddAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _95.MsgAddAllowedBridgeChainResponseAminoMsg): _95.MsgAddAllowedBridgeChainResponse;
                fromProtoMsg(message: _95.MsgAddAllowedBridgeChainResponseProtoMsg): _95.MsgAddAllowedBridgeChainResponse;
                toProto(message: _95.MsgAddAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _95.MsgAddAllowedBridgeChainResponse): _95.MsgAddAllowedBridgeChainResponseProtoMsg;
            };
            MsgRemoveAllowedBridgeChain: {
                typeUrl: string;
                encode(message: _95.MsgRemoveAllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRemoveAllowedBridgeChain;
                fromPartial(object: Partial<_95.MsgRemoveAllowedBridgeChain>): _95.MsgRemoveAllowedBridgeChain;
                fromAmino(object: _95.MsgRemoveAllowedBridgeChainAmino): _95.MsgRemoveAllowedBridgeChain;
                toAmino(message: _95.MsgRemoveAllowedBridgeChain): _95.MsgRemoveAllowedBridgeChainAmino;
                fromAminoMsg(object: _95.MsgRemoveAllowedBridgeChainAminoMsg): _95.MsgRemoveAllowedBridgeChain;
                toAminoMsg(message: _95.MsgRemoveAllowedBridgeChain): _95.MsgRemoveAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _95.MsgRemoveAllowedBridgeChainProtoMsg): _95.MsgRemoveAllowedBridgeChain;
                toProto(message: _95.MsgRemoveAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _95.MsgRemoveAllowedBridgeChain): _95.MsgRemoveAllowedBridgeChainProtoMsg;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                typeUrl: string;
                encode(_: _95.MsgRemoveAllowedBridgeChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRemoveAllowedBridgeChainResponse;
                fromPartial(_: Partial<_95.MsgRemoveAllowedBridgeChainResponse>): _95.MsgRemoveAllowedBridgeChainResponse;
                fromAmino(_: _95.MsgRemoveAllowedBridgeChainResponseAmino): _95.MsgRemoveAllowedBridgeChainResponse;
                toAmino(_: _95.MsgRemoveAllowedBridgeChainResponse): _95.MsgRemoveAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _95.MsgRemoveAllowedBridgeChainResponseAminoMsg): _95.MsgRemoveAllowedBridgeChainResponse;
                fromProtoMsg(message: _95.MsgRemoveAllowedBridgeChainResponseProtoMsg): _95.MsgRemoveAllowedBridgeChainResponse;
                toProto(message: _95.MsgRemoveAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _95.MsgRemoveAllowedBridgeChainResponse): _95.MsgRemoveAllowedBridgeChainResponseProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _94.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CreditType;
                fromPartial(object: Partial<_94.CreditType>): _94.CreditType;
                fromAmino(object: _94.CreditTypeAmino): _94.CreditType;
                toAmino(message: _94.CreditType): _94.CreditTypeAmino;
                fromAminoMsg(object: _94.CreditTypeAminoMsg): _94.CreditType;
                fromProtoMsg(message: _94.CreditTypeProtoMsg): _94.CreditType;
                toProto(message: _94.CreditType): Uint8Array;
                toProtoMsg(message: _94.CreditType): _94.CreditTypeProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _94.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Class;
                fromPartial(object: Partial<_94.Class>): _94.Class;
                fromAmino(object: _94.ClassAmino): _94.Class;
                toAmino(message: _94.Class): _94.ClassAmino;
                fromAminoMsg(object: _94.ClassAminoMsg): _94.Class;
                fromProtoMsg(message: _94.ClassProtoMsg): _94.Class;
                toProto(message: _94.Class): Uint8Array;
                toProtoMsg(message: _94.Class): _94.ClassProtoMsg;
            };
            ClassIssuer: {
                typeUrl: string;
                encode(message: _94.ClassIssuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.ClassIssuer;
                fromPartial(object: Partial<_94.ClassIssuer>): _94.ClassIssuer;
                fromAmino(object: _94.ClassIssuerAmino): _94.ClassIssuer;
                toAmino(message: _94.ClassIssuer): _94.ClassIssuerAmino;
                fromAminoMsg(object: _94.ClassIssuerAminoMsg): _94.ClassIssuer;
                fromProtoMsg(message: _94.ClassIssuerProtoMsg): _94.ClassIssuer;
                toProto(message: _94.ClassIssuer): Uint8Array;
                toProtoMsg(message: _94.ClassIssuer): _94.ClassIssuerProtoMsg;
            };
            Project: {
                typeUrl: string;
                encode(message: _94.Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Project;
                fromPartial(object: Partial<_94.Project>): _94.Project;
                fromAmino(object: _94.ProjectAmino): _94.Project;
                toAmino(message: _94.Project): _94.ProjectAmino;
                fromAminoMsg(object: _94.ProjectAminoMsg): _94.Project;
                fromProtoMsg(message: _94.ProjectProtoMsg): _94.Project;
                toProto(message: _94.Project): Uint8Array;
                toProtoMsg(message: _94.Project): _94.ProjectProtoMsg;
            };
            Batch: {
                typeUrl: string;
                encode(message: _94.Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Batch;
                fromPartial(object: Partial<_94.Batch>): _94.Batch;
                fromAmino(object: _94.BatchAmino): _94.Batch;
                toAmino(message: _94.Batch): _94.BatchAmino;
                fromAminoMsg(object: _94.BatchAminoMsg): _94.Batch;
                fromProtoMsg(message: _94.BatchProtoMsg): _94.Batch;
                toProto(message: _94.Batch): Uint8Array;
                toProtoMsg(message: _94.Batch): _94.BatchProtoMsg;
            };
            ClassSequence: {
                typeUrl: string;
                encode(message: _94.ClassSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.ClassSequence;
                fromPartial(object: Partial<_94.ClassSequence>): _94.ClassSequence;
                fromAmino(object: _94.ClassSequenceAmino): _94.ClassSequence;
                toAmino(message: _94.ClassSequence): _94.ClassSequenceAmino;
                fromAminoMsg(object: _94.ClassSequenceAminoMsg): _94.ClassSequence;
                fromProtoMsg(message: _94.ClassSequenceProtoMsg): _94.ClassSequence;
                toProto(message: _94.ClassSequence): Uint8Array;
                toProtoMsg(message: _94.ClassSequence): _94.ClassSequenceProtoMsg;
            };
            ProjectSequence: {
                typeUrl: string;
                encode(message: _94.ProjectSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.ProjectSequence;
                fromPartial(object: Partial<_94.ProjectSequence>): _94.ProjectSequence;
                fromAmino(object: _94.ProjectSequenceAmino): _94.ProjectSequence;
                toAmino(message: _94.ProjectSequence): _94.ProjectSequenceAmino;
                fromAminoMsg(object: _94.ProjectSequenceAminoMsg): _94.ProjectSequence;
                fromProtoMsg(message: _94.ProjectSequenceProtoMsg): _94.ProjectSequence;
                toProto(message: _94.ProjectSequence): Uint8Array;
                toProtoMsg(message: _94.ProjectSequence): _94.ProjectSequenceProtoMsg;
            };
            BatchSequence: {
                typeUrl: string;
                encode(message: _94.BatchSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.BatchSequence;
                fromPartial(object: Partial<_94.BatchSequence>): _94.BatchSequence;
                fromAmino(object: _94.BatchSequenceAmino): _94.BatchSequence;
                toAmino(message: _94.BatchSequence): _94.BatchSequenceAmino;
                fromAminoMsg(object: _94.BatchSequenceAminoMsg): _94.BatchSequence;
                fromProtoMsg(message: _94.BatchSequenceProtoMsg): _94.BatchSequence;
                toProto(message: _94.BatchSequence): Uint8Array;
                toProtoMsg(message: _94.BatchSequence): _94.BatchSequenceProtoMsg;
            };
            BatchBalance: {
                typeUrl: string;
                encode(message: _94.BatchBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.BatchBalance;
                fromPartial(object: Partial<_94.BatchBalance>): _94.BatchBalance;
                fromAmino(object: _94.BatchBalanceAmino): _94.BatchBalance;
                toAmino(message: _94.BatchBalance): _94.BatchBalanceAmino;
                fromAminoMsg(object: _94.BatchBalanceAminoMsg): _94.BatchBalance;
                fromProtoMsg(message: _94.BatchBalanceProtoMsg): _94.BatchBalance;
                toProto(message: _94.BatchBalance): Uint8Array;
                toProtoMsg(message: _94.BatchBalance): _94.BatchBalanceProtoMsg;
            };
            BatchSupply: {
                typeUrl: string;
                encode(message: _94.BatchSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.BatchSupply;
                fromPartial(object: Partial<_94.BatchSupply>): _94.BatchSupply;
                fromAmino(object: _94.BatchSupplyAmino): _94.BatchSupply;
                toAmino(message: _94.BatchSupply): _94.BatchSupplyAmino;
                fromAminoMsg(object: _94.BatchSupplyAminoMsg): _94.BatchSupply;
                fromProtoMsg(message: _94.BatchSupplyProtoMsg): _94.BatchSupply;
                toProto(message: _94.BatchSupply): Uint8Array;
                toProtoMsg(message: _94.BatchSupply): _94.BatchSupplyProtoMsg;
            };
            OriginTxIndex: {
                typeUrl: string;
                encode(message: _94.OriginTxIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.OriginTxIndex;
                fromPartial(object: Partial<_94.OriginTxIndex>): _94.OriginTxIndex;
                fromAmino(object: _94.OriginTxIndexAmino): _94.OriginTxIndex;
                toAmino(message: _94.OriginTxIndex): _94.OriginTxIndexAmino;
                fromAminoMsg(object: _94.OriginTxIndexAminoMsg): _94.OriginTxIndex;
                fromProtoMsg(message: _94.OriginTxIndexProtoMsg): _94.OriginTxIndex;
                toProto(message: _94.OriginTxIndex): Uint8Array;
                toProtoMsg(message: _94.OriginTxIndex): _94.OriginTxIndexProtoMsg;
            };
            BatchContract: {
                typeUrl: string;
                encode(message: _94.BatchContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.BatchContract;
                fromPartial(object: Partial<_94.BatchContract>): _94.BatchContract;
                fromAmino(object: _94.BatchContractAmino): _94.BatchContract;
                toAmino(message: _94.BatchContract): _94.BatchContractAmino;
                fromAminoMsg(object: _94.BatchContractAminoMsg): _94.BatchContract;
                fromProtoMsg(message: _94.BatchContractProtoMsg): _94.BatchContract;
                toProto(message: _94.BatchContract): Uint8Array;
                toProtoMsg(message: _94.BatchContract): _94.BatchContractProtoMsg;
            };
            ClassCreatorAllowlist: {
                typeUrl: string;
                encode(message: _94.ClassCreatorAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.ClassCreatorAllowlist;
                fromPartial(object: Partial<_94.ClassCreatorAllowlist>): _94.ClassCreatorAllowlist;
                fromAmino(object: _94.ClassCreatorAllowlistAmino): _94.ClassCreatorAllowlist;
                toAmino(message: _94.ClassCreatorAllowlist): _94.ClassCreatorAllowlistAmino;
                fromAminoMsg(object: _94.ClassCreatorAllowlistAminoMsg): _94.ClassCreatorAllowlist;
                fromProtoMsg(message: _94.ClassCreatorAllowlistProtoMsg): _94.ClassCreatorAllowlist;
                toProto(message: _94.ClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _94.ClassCreatorAllowlist): _94.ClassCreatorAllowlistProtoMsg;
            };
            AllowedClassCreator: {
                typeUrl: string;
                encode(message: _94.AllowedClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.AllowedClassCreator;
                fromPartial(object: Partial<_94.AllowedClassCreator>): _94.AllowedClassCreator;
                fromAmino(object: _94.AllowedClassCreatorAmino): _94.AllowedClassCreator;
                toAmino(message: _94.AllowedClassCreator): _94.AllowedClassCreatorAmino;
                fromAminoMsg(object: _94.AllowedClassCreatorAminoMsg): _94.AllowedClassCreator;
                fromProtoMsg(message: _94.AllowedClassCreatorProtoMsg): _94.AllowedClassCreator;
                toProto(message: _94.AllowedClassCreator): Uint8Array;
                toProtoMsg(message: _94.AllowedClassCreator): _94.AllowedClassCreatorProtoMsg;
            };
            ClassFee: {
                typeUrl: string;
                encode(message: _94.ClassFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.ClassFee;
                fromPartial(object: Partial<_94.ClassFee>): _94.ClassFee;
                fromAmino(object: _94.ClassFeeAmino): _94.ClassFee;
                toAmino(message: _94.ClassFee): _94.ClassFeeAmino;
                fromAminoMsg(object: _94.ClassFeeAminoMsg): _94.ClassFee;
                fromProtoMsg(message: _94.ClassFeeProtoMsg): _94.ClassFee;
                toProto(message: _94.ClassFee): Uint8Array;
                toProtoMsg(message: _94.ClassFee): _94.ClassFeeProtoMsg;
            };
            AllowedBridgeChain: {
                typeUrl: string;
                encode(message: _94.AllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.AllowedBridgeChain;
                fromPartial(object: Partial<_94.AllowedBridgeChain>): _94.AllowedBridgeChain;
                fromAmino(object: _94.AllowedBridgeChainAmino): _94.AllowedBridgeChain;
                toAmino(message: _94.AllowedBridgeChain): _94.AllowedBridgeChainAmino;
                fromAminoMsg(object: _94.AllowedBridgeChainAminoMsg): _94.AllowedBridgeChain;
                fromProtoMsg(message: _94.AllowedBridgeChainProtoMsg): _94.AllowedBridgeChain;
                toProto(message: _94.AllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _94.AllowedBridgeChain): _94.AllowedBridgeChainProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _93.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassesRequest;
                fromPartial(object: Partial<_93.QueryClassesRequest>): _93.QueryClassesRequest;
                fromAmino(object: _93.QueryClassesRequestAmino): _93.QueryClassesRequest;
                toAmino(message: _93.QueryClassesRequest): _93.QueryClassesRequestAmino;
                fromAminoMsg(object: _93.QueryClassesRequestAminoMsg): _93.QueryClassesRequest;
                fromProtoMsg(message: _93.QueryClassesRequestProtoMsg): _93.QueryClassesRequest;
                toProto(message: _93.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassesRequest): _93.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassesResponse;
                fromPartial(object: Partial<_93.QueryClassesResponse>): _93.QueryClassesResponse;
                fromAmino(object: _93.QueryClassesResponseAmino): _93.QueryClassesResponse;
                toAmino(message: _93.QueryClassesResponse): _93.QueryClassesResponseAmino;
                fromAminoMsg(object: _93.QueryClassesResponseAminoMsg): _93.QueryClassesResponse;
                fromProtoMsg(message: _93.QueryClassesResponseProtoMsg): _93.QueryClassesResponse;
                toProto(message: _93.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassesResponse): _93.QueryClassesResponseProtoMsg;
            };
            QueryClassesByAdminRequest: {
                typeUrl: string;
                encode(message: _93.QueryClassesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassesByAdminRequest;
                fromPartial(object: Partial<_93.QueryClassesByAdminRequest>): _93.QueryClassesByAdminRequest;
                fromAmino(object: _93.QueryClassesByAdminRequestAmino): _93.QueryClassesByAdminRequest;
                toAmino(message: _93.QueryClassesByAdminRequest): _93.QueryClassesByAdminRequestAmino;
                fromAminoMsg(object: _93.QueryClassesByAdminRequestAminoMsg): _93.QueryClassesByAdminRequest;
                fromProtoMsg(message: _93.QueryClassesByAdminRequestProtoMsg): _93.QueryClassesByAdminRequest;
                toProto(message: _93.QueryClassesByAdminRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassesByAdminRequest): _93.QueryClassesByAdminRequestProtoMsg;
            };
            QueryClassesByAdminResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassesByAdminResponse;
                fromPartial(object: Partial<_93.QueryClassesByAdminResponse>): _93.QueryClassesByAdminResponse;
                fromAmino(object: _93.QueryClassesByAdminResponseAmino): _93.QueryClassesByAdminResponse;
                toAmino(message: _93.QueryClassesByAdminResponse): _93.QueryClassesByAdminResponseAmino;
                fromAminoMsg(object: _93.QueryClassesByAdminResponseAminoMsg): _93.QueryClassesByAdminResponse;
                fromProtoMsg(message: _93.QueryClassesByAdminResponseProtoMsg): _93.QueryClassesByAdminResponse;
                toProto(message: _93.QueryClassesByAdminResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassesByAdminResponse): _93.QueryClassesByAdminResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _93.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassRequest;
                fromPartial(object: Partial<_93.QueryClassRequest>): _93.QueryClassRequest;
                fromAmino(object: _93.QueryClassRequestAmino): _93.QueryClassRequest;
                toAmino(message: _93.QueryClassRequest): _93.QueryClassRequestAmino;
                fromAminoMsg(object: _93.QueryClassRequestAminoMsg): _93.QueryClassRequest;
                fromProtoMsg(message: _93.QueryClassRequestProtoMsg): _93.QueryClassRequest;
                toProto(message: _93.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassRequest): _93.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassResponse;
                fromPartial(object: Partial<_93.QueryClassResponse>): _93.QueryClassResponse;
                fromAmino(object: _93.QueryClassResponseAmino): _93.QueryClassResponse;
                toAmino(message: _93.QueryClassResponse): _93.QueryClassResponseAmino;
                fromAminoMsg(object: _93.QueryClassResponseAminoMsg): _93.QueryClassResponse;
                fromProtoMsg(message: _93.QueryClassResponseProtoMsg): _93.QueryClassResponse;
                toProto(message: _93.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassResponse): _93.QueryClassResponseProtoMsg;
            };
            QueryClassIssuersRequest: {
                typeUrl: string;
                encode(message: _93.QueryClassIssuersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassIssuersRequest;
                fromPartial(object: Partial<_93.QueryClassIssuersRequest>): _93.QueryClassIssuersRequest;
                fromAmino(object: _93.QueryClassIssuersRequestAmino): _93.QueryClassIssuersRequest;
                toAmino(message: _93.QueryClassIssuersRequest): _93.QueryClassIssuersRequestAmino;
                fromAminoMsg(object: _93.QueryClassIssuersRequestAminoMsg): _93.QueryClassIssuersRequest;
                fromProtoMsg(message: _93.QueryClassIssuersRequestProtoMsg): _93.QueryClassIssuersRequest;
                toProto(message: _93.QueryClassIssuersRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassIssuersRequest): _93.QueryClassIssuersRequestProtoMsg;
            };
            QueryClassIssuersResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassIssuersResponse;
                fromPartial(object: Partial<_93.QueryClassIssuersResponse>): _93.QueryClassIssuersResponse;
                fromAmino(object: _93.QueryClassIssuersResponseAmino): _93.QueryClassIssuersResponse;
                toAmino(message: _93.QueryClassIssuersResponse): _93.QueryClassIssuersResponseAmino;
                fromAminoMsg(object: _93.QueryClassIssuersResponseAminoMsg): _93.QueryClassIssuersResponse;
                fromProtoMsg(message: _93.QueryClassIssuersResponseProtoMsg): _93.QueryClassIssuersResponse;
                toProto(message: _93.QueryClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassIssuersResponse): _93.QueryClassIssuersResponseProtoMsg;
            };
            QueryProjectsRequest: {
                typeUrl: string;
                encode(message: _93.QueryProjectsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsRequest;
                fromPartial(object: Partial<_93.QueryProjectsRequest>): _93.QueryProjectsRequest;
                fromAmino(object: _93.QueryProjectsRequestAmino): _93.QueryProjectsRequest;
                toAmino(message: _93.QueryProjectsRequest): _93.QueryProjectsRequestAmino;
                fromAminoMsg(object: _93.QueryProjectsRequestAminoMsg): _93.QueryProjectsRequest;
                fromProtoMsg(message: _93.QueryProjectsRequestProtoMsg): _93.QueryProjectsRequest;
                toProto(message: _93.QueryProjectsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsRequest): _93.QueryProjectsRequestProtoMsg;
            };
            QueryProjectsResponse: {
                typeUrl: string;
                encode(message: _93.QueryProjectsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsResponse;
                fromPartial(object: Partial<_93.QueryProjectsResponse>): _93.QueryProjectsResponse;
                fromAmino(object: _93.QueryProjectsResponseAmino): _93.QueryProjectsResponse;
                toAmino(message: _93.QueryProjectsResponse): _93.QueryProjectsResponseAmino;
                fromAminoMsg(object: _93.QueryProjectsResponseAminoMsg): _93.QueryProjectsResponse;
                fromProtoMsg(message: _93.QueryProjectsResponseProtoMsg): _93.QueryProjectsResponse;
                toProto(message: _93.QueryProjectsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsResponse): _93.QueryProjectsResponseProtoMsg;
            };
            QueryProjectsByClassRequest: {
                typeUrl: string;
                encode(message: _93.QueryProjectsByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsByClassRequest;
                fromPartial(object: Partial<_93.QueryProjectsByClassRequest>): _93.QueryProjectsByClassRequest;
                fromAmino(object: _93.QueryProjectsByClassRequestAmino): _93.QueryProjectsByClassRequest;
                toAmino(message: _93.QueryProjectsByClassRequest): _93.QueryProjectsByClassRequestAmino;
                fromAminoMsg(object: _93.QueryProjectsByClassRequestAminoMsg): _93.QueryProjectsByClassRequest;
                fromProtoMsg(message: _93.QueryProjectsByClassRequestProtoMsg): _93.QueryProjectsByClassRequest;
                toProto(message: _93.QueryProjectsByClassRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsByClassRequest): _93.QueryProjectsByClassRequestProtoMsg;
            };
            QueryProjectsByClassResponse: {
                typeUrl: string;
                encode(message: _93.QueryProjectsByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsByClassResponse;
                fromPartial(object: Partial<_93.QueryProjectsByClassResponse>): _93.QueryProjectsByClassResponse;
                fromAmino(object: _93.QueryProjectsByClassResponseAmino): _93.QueryProjectsByClassResponse;
                toAmino(message: _93.QueryProjectsByClassResponse): _93.QueryProjectsByClassResponseAmino;
                fromAminoMsg(object: _93.QueryProjectsByClassResponseAminoMsg): _93.QueryProjectsByClassResponse;
                fromProtoMsg(message: _93.QueryProjectsByClassResponseProtoMsg): _93.QueryProjectsByClassResponse;
                toProto(message: _93.QueryProjectsByClassResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsByClassResponse): _93.QueryProjectsByClassResponseProtoMsg;
            };
            QueryProjectsByReferenceIdRequest: {
                typeUrl: string;
                encode(message: _93.QueryProjectsByReferenceIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsByReferenceIdRequest;
                fromPartial(object: Partial<_93.QueryProjectsByReferenceIdRequest>): _93.QueryProjectsByReferenceIdRequest;
                fromAmino(object: _93.QueryProjectsByReferenceIdRequestAmino): _93.QueryProjectsByReferenceIdRequest;
                toAmino(message: _93.QueryProjectsByReferenceIdRequest): _93.QueryProjectsByReferenceIdRequestAmino;
                fromAminoMsg(object: _93.QueryProjectsByReferenceIdRequestAminoMsg): _93.QueryProjectsByReferenceIdRequest;
                fromProtoMsg(message: _93.QueryProjectsByReferenceIdRequestProtoMsg): _93.QueryProjectsByReferenceIdRequest;
                toProto(message: _93.QueryProjectsByReferenceIdRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsByReferenceIdRequest): _93.QueryProjectsByReferenceIdRequestProtoMsg;
            };
            QueryProjectsByReferenceIdResponse: {
                typeUrl: string;
                encode(message: _93.QueryProjectsByReferenceIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsByReferenceIdResponse;
                fromPartial(object: Partial<_93.QueryProjectsByReferenceIdResponse>): _93.QueryProjectsByReferenceIdResponse;
                fromAmino(object: _93.QueryProjectsByReferenceIdResponseAmino): _93.QueryProjectsByReferenceIdResponse;
                toAmino(message: _93.QueryProjectsByReferenceIdResponse): _93.QueryProjectsByReferenceIdResponseAmino;
                fromAminoMsg(object: _93.QueryProjectsByReferenceIdResponseAminoMsg): _93.QueryProjectsByReferenceIdResponse;
                fromProtoMsg(message: _93.QueryProjectsByReferenceIdResponseProtoMsg): _93.QueryProjectsByReferenceIdResponse;
                toProto(message: _93.QueryProjectsByReferenceIdResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsByReferenceIdResponse): _93.QueryProjectsByReferenceIdResponseProtoMsg;
            };
            QueryProjectsByAdminRequest: {
                typeUrl: string;
                encode(message: _93.QueryProjectsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsByAdminRequest;
                fromPartial(object: Partial<_93.QueryProjectsByAdminRequest>): _93.QueryProjectsByAdminRequest;
                fromAmino(object: _93.QueryProjectsByAdminRequestAmino): _93.QueryProjectsByAdminRequest;
                toAmino(message: _93.QueryProjectsByAdminRequest): _93.QueryProjectsByAdminRequestAmino;
                fromAminoMsg(object: _93.QueryProjectsByAdminRequestAminoMsg): _93.QueryProjectsByAdminRequest;
                fromProtoMsg(message: _93.QueryProjectsByAdminRequestProtoMsg): _93.QueryProjectsByAdminRequest;
                toProto(message: _93.QueryProjectsByAdminRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsByAdminRequest): _93.QueryProjectsByAdminRequestProtoMsg;
            };
            QueryProjectsByAdminResponse: {
                typeUrl: string;
                encode(message: _93.QueryProjectsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectsByAdminResponse;
                fromPartial(object: Partial<_93.QueryProjectsByAdminResponse>): _93.QueryProjectsByAdminResponse;
                fromAmino(object: _93.QueryProjectsByAdminResponseAmino): _93.QueryProjectsByAdminResponse;
                toAmino(message: _93.QueryProjectsByAdminResponse): _93.QueryProjectsByAdminResponseAmino;
                fromAminoMsg(object: _93.QueryProjectsByAdminResponseAminoMsg): _93.QueryProjectsByAdminResponse;
                fromProtoMsg(message: _93.QueryProjectsByAdminResponseProtoMsg): _93.QueryProjectsByAdminResponse;
                toProto(message: _93.QueryProjectsByAdminResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProjectsByAdminResponse): _93.QueryProjectsByAdminResponseProtoMsg;
            };
            QueryProjectRequest: {
                typeUrl: string;
                encode(message: _93.QueryProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectRequest;
                fromPartial(object: Partial<_93.QueryProjectRequest>): _93.QueryProjectRequest;
                fromAmino(object: _93.QueryProjectRequestAmino): _93.QueryProjectRequest;
                toAmino(message: _93.QueryProjectRequest): _93.QueryProjectRequestAmino;
                fromAminoMsg(object: _93.QueryProjectRequestAminoMsg): _93.QueryProjectRequest;
                fromProtoMsg(message: _93.QueryProjectRequestProtoMsg): _93.QueryProjectRequest;
                toProto(message: _93.QueryProjectRequest): Uint8Array;
                toProtoMsg(message: _93.QueryProjectRequest): _93.QueryProjectRequestProtoMsg;
            };
            QueryProjectResponse: {
                typeUrl: string;
                encode(message: _93.QueryProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryProjectResponse;
                fromPartial(object: Partial<_93.QueryProjectResponse>): _93.QueryProjectResponse;
                fromAmino(object: _93.QueryProjectResponseAmino): _93.QueryProjectResponse;
                toAmino(message: _93.QueryProjectResponse): _93.QueryProjectResponseAmino;
                fromAminoMsg(object: _93.QueryProjectResponseAminoMsg): _93.QueryProjectResponse;
                fromProtoMsg(message: _93.QueryProjectResponseProtoMsg): _93.QueryProjectResponse;
                toProto(message: _93.QueryProjectResponse): Uint8Array;
                toProtoMsg(message: _93.QueryProjectResponse): _93.QueryProjectResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _93.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesRequest;
                fromPartial(object: Partial<_93.QueryBatchesRequest>): _93.QueryBatchesRequest;
                fromAmino(object: _93.QueryBatchesRequestAmino): _93.QueryBatchesRequest;
                toAmino(message: _93.QueryBatchesRequest): _93.QueryBatchesRequestAmino;
                fromAminoMsg(object: _93.QueryBatchesRequestAminoMsg): _93.QueryBatchesRequest;
                fromProtoMsg(message: _93.QueryBatchesRequestProtoMsg): _93.QueryBatchesRequest;
                toProto(message: _93.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesRequest): _93.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _93.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesResponse;
                fromPartial(object: Partial<_93.QueryBatchesResponse>): _93.QueryBatchesResponse;
                fromAmino(object: _93.QueryBatchesResponseAmino): _93.QueryBatchesResponse;
                toAmino(message: _93.QueryBatchesResponse): _93.QueryBatchesResponseAmino;
                fromAminoMsg(object: _93.QueryBatchesResponseAminoMsg): _93.QueryBatchesResponse;
                fromProtoMsg(message: _93.QueryBatchesResponseProtoMsg): _93.QueryBatchesResponse;
                toProto(message: _93.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesResponse): _93.QueryBatchesResponseProtoMsg;
            };
            QueryBatchesByIssuerRequest: {
                typeUrl: string;
                encode(message: _93.QueryBatchesByIssuerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesByIssuerRequest;
                fromPartial(object: Partial<_93.QueryBatchesByIssuerRequest>): _93.QueryBatchesByIssuerRequest;
                fromAmino(object: _93.QueryBatchesByIssuerRequestAmino): _93.QueryBatchesByIssuerRequest;
                toAmino(message: _93.QueryBatchesByIssuerRequest): _93.QueryBatchesByIssuerRequestAmino;
                fromAminoMsg(object: _93.QueryBatchesByIssuerRequestAminoMsg): _93.QueryBatchesByIssuerRequest;
                fromProtoMsg(message: _93.QueryBatchesByIssuerRequestProtoMsg): _93.QueryBatchesByIssuerRequest;
                toProto(message: _93.QueryBatchesByIssuerRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesByIssuerRequest): _93.QueryBatchesByIssuerRequestProtoMsg;
            };
            QueryBatchesByIssuerResponse: {
                typeUrl: string;
                encode(message: _93.QueryBatchesByIssuerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesByIssuerResponse;
                fromPartial(object: Partial<_93.QueryBatchesByIssuerResponse>): _93.QueryBatchesByIssuerResponse;
                fromAmino(object: _93.QueryBatchesByIssuerResponseAmino): _93.QueryBatchesByIssuerResponse;
                toAmino(message: _93.QueryBatchesByIssuerResponse): _93.QueryBatchesByIssuerResponseAmino;
                fromAminoMsg(object: _93.QueryBatchesByIssuerResponseAminoMsg): _93.QueryBatchesByIssuerResponse;
                fromProtoMsg(message: _93.QueryBatchesByIssuerResponseProtoMsg): _93.QueryBatchesByIssuerResponse;
                toProto(message: _93.QueryBatchesByIssuerResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesByIssuerResponse): _93.QueryBatchesByIssuerResponseProtoMsg;
            };
            QueryBatchesByClassRequest: {
                typeUrl: string;
                encode(message: _93.QueryBatchesByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesByClassRequest;
                fromPartial(object: Partial<_93.QueryBatchesByClassRequest>): _93.QueryBatchesByClassRequest;
                fromAmino(object: _93.QueryBatchesByClassRequestAmino): _93.QueryBatchesByClassRequest;
                toAmino(message: _93.QueryBatchesByClassRequest): _93.QueryBatchesByClassRequestAmino;
                fromAminoMsg(object: _93.QueryBatchesByClassRequestAminoMsg): _93.QueryBatchesByClassRequest;
                fromProtoMsg(message: _93.QueryBatchesByClassRequestProtoMsg): _93.QueryBatchesByClassRequest;
                toProto(message: _93.QueryBatchesByClassRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesByClassRequest): _93.QueryBatchesByClassRequestProtoMsg;
            };
            QueryBatchesByProjectRequest: {
                typeUrl: string;
                encode(message: _93.QueryBatchesByProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesByProjectRequest;
                fromPartial(object: Partial<_93.QueryBatchesByProjectRequest>): _93.QueryBatchesByProjectRequest;
                fromAmino(object: _93.QueryBatchesByProjectRequestAmino): _93.QueryBatchesByProjectRequest;
                toAmino(message: _93.QueryBatchesByProjectRequest): _93.QueryBatchesByProjectRequestAmino;
                fromAminoMsg(object: _93.QueryBatchesByProjectRequestAminoMsg): _93.QueryBatchesByProjectRequest;
                fromProtoMsg(message: _93.QueryBatchesByProjectRequestProtoMsg): _93.QueryBatchesByProjectRequest;
                toProto(message: _93.QueryBatchesByProjectRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesByProjectRequest): _93.QueryBatchesByProjectRequestProtoMsg;
            };
            QueryBatchesByProjectResponse: {
                typeUrl: string;
                encode(message: _93.QueryBatchesByProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesByProjectResponse;
                fromPartial(object: Partial<_93.QueryBatchesByProjectResponse>): _93.QueryBatchesByProjectResponse;
                fromAmino(object: _93.QueryBatchesByProjectResponseAmino): _93.QueryBatchesByProjectResponse;
                toAmino(message: _93.QueryBatchesByProjectResponse): _93.QueryBatchesByProjectResponseAmino;
                fromAminoMsg(object: _93.QueryBatchesByProjectResponseAminoMsg): _93.QueryBatchesByProjectResponse;
                fromProtoMsg(message: _93.QueryBatchesByProjectResponseProtoMsg): _93.QueryBatchesByProjectResponse;
                toProto(message: _93.QueryBatchesByProjectResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesByProjectResponse): _93.QueryBatchesByProjectResponseProtoMsg;
            };
            QueryBatchesByClassResponse: {
                typeUrl: string;
                encode(message: _93.QueryBatchesByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchesByClassResponse;
                fromPartial(object: Partial<_93.QueryBatchesByClassResponse>): _93.QueryBatchesByClassResponse;
                fromAmino(object: _93.QueryBatchesByClassResponseAmino): _93.QueryBatchesByClassResponse;
                toAmino(message: _93.QueryBatchesByClassResponse): _93.QueryBatchesByClassResponseAmino;
                fromAminoMsg(object: _93.QueryBatchesByClassResponseAminoMsg): _93.QueryBatchesByClassResponse;
                fromProtoMsg(message: _93.QueryBatchesByClassResponseProtoMsg): _93.QueryBatchesByClassResponse;
                toProto(message: _93.QueryBatchesByClassResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBatchesByClassResponse): _93.QueryBatchesByClassResponseProtoMsg;
            };
            QueryBatchRequest: {
                typeUrl: string;
                encode(message: _93.QueryBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchRequest;
                fromPartial(object: Partial<_93.QueryBatchRequest>): _93.QueryBatchRequest;
                fromAmino(object: _93.QueryBatchRequestAmino): _93.QueryBatchRequest;
                toAmino(message: _93.QueryBatchRequest): _93.QueryBatchRequestAmino;
                fromAminoMsg(object: _93.QueryBatchRequestAminoMsg): _93.QueryBatchRequest;
                fromProtoMsg(message: _93.QueryBatchRequestProtoMsg): _93.QueryBatchRequest;
                toProto(message: _93.QueryBatchRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBatchRequest): _93.QueryBatchRequestProtoMsg;
            };
            QueryBatchResponse: {
                typeUrl: string;
                encode(message: _93.QueryBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBatchResponse;
                fromPartial(object: Partial<_93.QueryBatchResponse>): _93.QueryBatchResponse;
                fromAmino(object: _93.QueryBatchResponseAmino): _93.QueryBatchResponse;
                toAmino(message: _93.QueryBatchResponse): _93.QueryBatchResponseAmino;
                fromAminoMsg(object: _93.QueryBatchResponseAminoMsg): _93.QueryBatchResponse;
                fromProtoMsg(message: _93.QueryBatchResponseProtoMsg): _93.QueryBatchResponse;
                toProto(message: _93.QueryBatchResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBatchResponse): _93.QueryBatchResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _93.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBalanceRequest;
                fromPartial(object: Partial<_93.QueryBalanceRequest>): _93.QueryBalanceRequest;
                fromAmino(object: _93.QueryBalanceRequestAmino): _93.QueryBalanceRequest;
                toAmino(message: _93.QueryBalanceRequest): _93.QueryBalanceRequestAmino;
                fromAminoMsg(object: _93.QueryBalanceRequestAminoMsg): _93.QueryBalanceRequest;
                fromProtoMsg(message: _93.QueryBalanceRequestProtoMsg): _93.QueryBalanceRequest;
                toProto(message: _93.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBalanceRequest): _93.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _93.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBalanceResponse;
                fromPartial(object: Partial<_93.QueryBalanceResponse>): _93.QueryBalanceResponse;
                fromAmino(object: _93.QueryBalanceResponseAmino): _93.QueryBalanceResponse;
                toAmino(message: _93.QueryBalanceResponse): _93.QueryBalanceResponseAmino;
                fromAminoMsg(object: _93.QueryBalanceResponseAminoMsg): _93.QueryBalanceResponse;
                fromProtoMsg(message: _93.QueryBalanceResponseProtoMsg): _93.QueryBalanceResponse;
                toProto(message: _93.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBalanceResponse): _93.QueryBalanceResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _93.QueryBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBalancesRequest;
                fromPartial(object: Partial<_93.QueryBalancesRequest>): _93.QueryBalancesRequest;
                fromAmino(object: _93.QueryBalancesRequestAmino): _93.QueryBalancesRequest;
                toAmino(message: _93.QueryBalancesRequest): _93.QueryBalancesRequestAmino;
                fromAminoMsg(object: _93.QueryBalancesRequestAminoMsg): _93.QueryBalancesRequest;
                fromProtoMsg(message: _93.QueryBalancesRequestProtoMsg): _93.QueryBalancesRequest;
                toProto(message: _93.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBalancesRequest): _93.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _93.QueryBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBalancesResponse;
                fromPartial(object: Partial<_93.QueryBalancesResponse>): _93.QueryBalancesResponse;
                fromAmino(object: _93.QueryBalancesResponseAmino): _93.QueryBalancesResponse;
                toAmino(message: _93.QueryBalancesResponse): _93.QueryBalancesResponseAmino;
                fromAminoMsg(object: _93.QueryBalancesResponseAminoMsg): _93.QueryBalancesResponse;
                fromProtoMsg(message: _93.QueryBalancesResponseProtoMsg): _93.QueryBalancesResponse;
                toProto(message: _93.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBalancesResponse): _93.QueryBalancesResponseProtoMsg;
            };
            QueryBalancesByBatchRequest: {
                typeUrl: string;
                encode(message: _93.QueryBalancesByBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBalancesByBatchRequest;
                fromPartial(object: Partial<_93.QueryBalancesByBatchRequest>): _93.QueryBalancesByBatchRequest;
                fromAmino(object: _93.QueryBalancesByBatchRequestAmino): _93.QueryBalancesByBatchRequest;
                toAmino(message: _93.QueryBalancesByBatchRequest): _93.QueryBalancesByBatchRequestAmino;
                fromAminoMsg(object: _93.QueryBalancesByBatchRequestAminoMsg): _93.QueryBalancesByBatchRequest;
                fromProtoMsg(message: _93.QueryBalancesByBatchRequestProtoMsg): _93.QueryBalancesByBatchRequest;
                toProto(message: _93.QueryBalancesByBatchRequest): Uint8Array;
                toProtoMsg(message: _93.QueryBalancesByBatchRequest): _93.QueryBalancesByBatchRequestProtoMsg;
            };
            QueryBalancesByBatchResponse: {
                typeUrl: string;
                encode(message: _93.QueryBalancesByBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryBalancesByBatchResponse;
                fromPartial(object: Partial<_93.QueryBalancesByBatchResponse>): _93.QueryBalancesByBatchResponse;
                fromAmino(object: _93.QueryBalancesByBatchResponseAmino): _93.QueryBalancesByBatchResponse;
                toAmino(message: _93.QueryBalancesByBatchResponse): _93.QueryBalancesByBatchResponseAmino;
                fromAminoMsg(object: _93.QueryBalancesByBatchResponseAminoMsg): _93.QueryBalancesByBatchResponse;
                fromProtoMsg(message: _93.QueryBalancesByBatchResponseProtoMsg): _93.QueryBalancesByBatchResponse;
                toProto(message: _93.QueryBalancesByBatchResponse): Uint8Array;
                toProtoMsg(message: _93.QueryBalancesByBatchResponse): _93.QueryBalancesByBatchResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _93.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryAllBalancesRequest;
                fromPartial(object: Partial<_93.QueryAllBalancesRequest>): _93.QueryAllBalancesRequest;
                fromAmino(object: _93.QueryAllBalancesRequestAmino): _93.QueryAllBalancesRequest;
                toAmino(message: _93.QueryAllBalancesRequest): _93.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _93.QueryAllBalancesRequestAminoMsg): _93.QueryAllBalancesRequest;
                fromProtoMsg(message: _93.QueryAllBalancesRequestProtoMsg): _93.QueryAllBalancesRequest;
                toProto(message: _93.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAllBalancesRequest): _93.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _93.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryAllBalancesResponse;
                fromPartial(object: Partial<_93.QueryAllBalancesResponse>): _93.QueryAllBalancesResponse;
                fromAmino(object: _93.QueryAllBalancesResponseAmino): _93.QueryAllBalancesResponse;
                toAmino(message: _93.QueryAllBalancesResponse): _93.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _93.QueryAllBalancesResponseAminoMsg): _93.QueryAllBalancesResponse;
                fromProtoMsg(message: _93.QueryAllBalancesResponseProtoMsg): _93.QueryAllBalancesResponse;
                toProto(message: _93.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAllBalancesResponse): _93.QueryAllBalancesResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _93.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySupplyRequest;
                fromPartial(object: Partial<_93.QuerySupplyRequest>): _93.QuerySupplyRequest;
                fromAmino(object: _93.QuerySupplyRequestAmino): _93.QuerySupplyRequest;
                toAmino(message: _93.QuerySupplyRequest): _93.QuerySupplyRequestAmino;
                fromAminoMsg(object: _93.QuerySupplyRequestAminoMsg): _93.QuerySupplyRequest;
                fromProtoMsg(message: _93.QuerySupplyRequestProtoMsg): _93.QuerySupplyRequest;
                toProto(message: _93.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySupplyRequest): _93.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _93.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QuerySupplyResponse;
                fromPartial(object: Partial<_93.QuerySupplyResponse>): _93.QuerySupplyResponse;
                fromAmino(object: _93.QuerySupplyResponseAmino): _93.QuerySupplyResponse;
                toAmino(message: _93.QuerySupplyResponse): _93.QuerySupplyResponseAmino;
                fromAminoMsg(object: _93.QuerySupplyResponseAminoMsg): _93.QuerySupplyResponse;
                fromProtoMsg(message: _93.QuerySupplyResponseProtoMsg): _93.QuerySupplyResponse;
                toProto(message: _93.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySupplyResponse): _93.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _93.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCreditTypesRequest;
                fromPartial(_: Partial<_93.QueryCreditTypesRequest>): _93.QueryCreditTypesRequest;
                fromAmino(_: _93.QueryCreditTypesRequestAmino): _93.QueryCreditTypesRequest;
                toAmino(_: _93.QueryCreditTypesRequest): _93.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _93.QueryCreditTypesRequestAminoMsg): _93.QueryCreditTypesRequest;
                fromProtoMsg(message: _93.QueryCreditTypesRequestProtoMsg): _93.QueryCreditTypesRequest;
                toProto(message: _93.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _93.QueryCreditTypesRequest): _93.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _93.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCreditTypesResponse;
                fromPartial(object: Partial<_93.QueryCreditTypesResponse>): _93.QueryCreditTypesResponse;
                fromAmino(object: _93.QueryCreditTypesResponseAmino): _93.QueryCreditTypesResponse;
                toAmino(message: _93.QueryCreditTypesResponse): _93.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _93.QueryCreditTypesResponseAminoMsg): _93.QueryCreditTypesResponse;
                fromProtoMsg(message: _93.QueryCreditTypesResponseProtoMsg): _93.QueryCreditTypesResponse;
                toProto(message: _93.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _93.QueryCreditTypesResponse): _93.QueryCreditTypesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _93.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryParamsRequest;
                fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
                fromAmino(_: _93.QueryParamsRequestAmino): _93.QueryParamsRequest;
                toAmino(_: _93.QueryParamsRequest): _93.QueryParamsRequestAmino;
                fromAminoMsg(object: _93.QueryParamsRequestAminoMsg): _93.QueryParamsRequest;
                fromProtoMsg(message: _93.QueryParamsRequestProtoMsg): _93.QueryParamsRequest;
                toProto(message: _93.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _93.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryParamsResponse;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
                fromAmino(object: _93.QueryParamsResponseAmino): _93.QueryParamsResponse;
                toAmino(message: _93.QueryParamsResponse): _93.QueryParamsResponseAmino;
                fromAminoMsg(object: _93.QueryParamsResponseAminoMsg): _93.QueryParamsResponse;
                fromProtoMsg(message: _93.QueryParamsResponseProtoMsg): _93.QueryParamsResponse;
                toProto(message: _93.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseProtoMsg;
            };
            QueryCreditTypeRequest: {
                typeUrl: string;
                encode(message: _93.QueryCreditTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCreditTypeRequest;
                fromPartial(object: Partial<_93.QueryCreditTypeRequest>): _93.QueryCreditTypeRequest;
                fromAmino(object: _93.QueryCreditTypeRequestAmino): _93.QueryCreditTypeRequest;
                toAmino(message: _93.QueryCreditTypeRequest): _93.QueryCreditTypeRequestAmino;
                fromAminoMsg(object: _93.QueryCreditTypeRequestAminoMsg): _93.QueryCreditTypeRequest;
                fromProtoMsg(message: _93.QueryCreditTypeRequestProtoMsg): _93.QueryCreditTypeRequest;
                toProto(message: _93.QueryCreditTypeRequest): Uint8Array;
                toProtoMsg(message: _93.QueryCreditTypeRequest): _93.QueryCreditTypeRequestProtoMsg;
            };
            QueryCreditTypeResponse: {
                typeUrl: string;
                encode(message: _93.QueryCreditTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryCreditTypeResponse;
                fromPartial(object: Partial<_93.QueryCreditTypeResponse>): _93.QueryCreditTypeResponse;
                fromAmino(object: _93.QueryCreditTypeResponseAmino): _93.QueryCreditTypeResponse;
                toAmino(message: _93.QueryCreditTypeResponse): _93.QueryCreditTypeResponseAmino;
                fromAminoMsg(object: _93.QueryCreditTypeResponseAminoMsg): _93.QueryCreditTypeResponse;
                fromProtoMsg(message: _93.QueryCreditTypeResponseProtoMsg): _93.QueryCreditTypeResponse;
                toProto(message: _93.QueryCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _93.QueryCreditTypeResponse): _93.QueryCreditTypeResponseProtoMsg;
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _93.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.ClassInfo;
                fromPartial(object: Partial<_93.ClassInfo>): _93.ClassInfo;
                fromAmino(object: _93.ClassInfoAmino): _93.ClassInfo;
                toAmino(message: _93.ClassInfo): _93.ClassInfoAmino;
                fromAminoMsg(object: _93.ClassInfoAminoMsg): _93.ClassInfo;
                fromProtoMsg(message: _93.ClassInfoProtoMsg): _93.ClassInfo;
                toProto(message: _93.ClassInfo): Uint8Array;
                toProtoMsg(message: _93.ClassInfo): _93.ClassInfoProtoMsg;
            };
            ProjectInfo: {
                typeUrl: string;
                encode(message: _93.ProjectInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.ProjectInfo;
                fromPartial(object: Partial<_93.ProjectInfo>): _93.ProjectInfo;
                fromAmino(object: _93.ProjectInfoAmino): _93.ProjectInfo;
                toAmino(message: _93.ProjectInfo): _93.ProjectInfoAmino;
                fromAminoMsg(object: _93.ProjectInfoAminoMsg): _93.ProjectInfo;
                fromProtoMsg(message: _93.ProjectInfoProtoMsg): _93.ProjectInfo;
                toProto(message: _93.ProjectInfo): Uint8Array;
                toProtoMsg(message: _93.ProjectInfo): _93.ProjectInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _93.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.BatchInfo;
                fromPartial(object: Partial<_93.BatchInfo>): _93.BatchInfo;
                fromAmino(object: _93.BatchInfoAmino): _93.BatchInfo;
                toAmino(message: _93.BatchInfo): _93.BatchInfoAmino;
                fromAminoMsg(object: _93.BatchInfoAminoMsg): _93.BatchInfo;
                fromProtoMsg(message: _93.BatchInfoProtoMsg): _93.BatchInfo;
                toProto(message: _93.BatchInfo): Uint8Array;
                toProtoMsg(message: _93.BatchInfo): _93.BatchInfoProtoMsg;
            };
            BatchBalanceInfo: {
                typeUrl: string;
                encode(message: _93.BatchBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.BatchBalanceInfo;
                fromPartial(object: Partial<_93.BatchBalanceInfo>): _93.BatchBalanceInfo;
                fromAmino(object: _93.BatchBalanceInfoAmino): _93.BatchBalanceInfo;
                toAmino(message: _93.BatchBalanceInfo): _93.BatchBalanceInfoAmino;
                fromAminoMsg(object: _93.BatchBalanceInfoAminoMsg): _93.BatchBalanceInfo;
                fromProtoMsg(message: _93.BatchBalanceInfoProtoMsg): _93.BatchBalanceInfo;
                toProto(message: _93.BatchBalanceInfo): Uint8Array;
                toProtoMsg(message: _93.BatchBalanceInfo): _93.BatchBalanceInfoProtoMsg;
            };
            QueryClassCreatorAllowlistRequest: {
                typeUrl: string;
                encode(_: _93.QueryClassCreatorAllowlistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassCreatorAllowlistRequest;
                fromPartial(_: Partial<_93.QueryClassCreatorAllowlistRequest>): _93.QueryClassCreatorAllowlistRequest;
                fromAmino(_: _93.QueryClassCreatorAllowlistRequestAmino): _93.QueryClassCreatorAllowlistRequest;
                toAmino(_: _93.QueryClassCreatorAllowlistRequest): _93.QueryClassCreatorAllowlistRequestAmino;
                fromAminoMsg(object: _93.QueryClassCreatorAllowlistRequestAminoMsg): _93.QueryClassCreatorAllowlistRequest;
                fromProtoMsg(message: _93.QueryClassCreatorAllowlistRequestProtoMsg): _93.QueryClassCreatorAllowlistRequest;
                toProto(message: _93.QueryClassCreatorAllowlistRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassCreatorAllowlistRequest): _93.QueryClassCreatorAllowlistRequestProtoMsg;
            };
            QueryClassCreatorAllowlistResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassCreatorAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassCreatorAllowlistResponse;
                fromPartial(object: Partial<_93.QueryClassCreatorAllowlistResponse>): _93.QueryClassCreatorAllowlistResponse;
                fromAmino(object: _93.QueryClassCreatorAllowlistResponseAmino): _93.QueryClassCreatorAllowlistResponse;
                toAmino(message: _93.QueryClassCreatorAllowlistResponse): _93.QueryClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _93.QueryClassCreatorAllowlistResponseAminoMsg): _93.QueryClassCreatorAllowlistResponse;
                fromProtoMsg(message: _93.QueryClassCreatorAllowlistResponseProtoMsg): _93.QueryClassCreatorAllowlistResponse;
                toProto(message: _93.QueryClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassCreatorAllowlistResponse): _93.QueryClassCreatorAllowlistResponseProtoMsg;
            };
            QueryAllowedClassCreatorsRequest: {
                typeUrl: string;
                encode(message: _93.QueryAllowedClassCreatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryAllowedClassCreatorsRequest;
                fromPartial(object: Partial<_93.QueryAllowedClassCreatorsRequest>): _93.QueryAllowedClassCreatorsRequest;
                fromAmino(object: _93.QueryAllowedClassCreatorsRequestAmino): _93.QueryAllowedClassCreatorsRequest;
                toAmino(message: _93.QueryAllowedClassCreatorsRequest): _93.QueryAllowedClassCreatorsRequestAmino;
                fromAminoMsg(object: _93.QueryAllowedClassCreatorsRequestAminoMsg): _93.QueryAllowedClassCreatorsRequest;
                fromProtoMsg(message: _93.QueryAllowedClassCreatorsRequestProtoMsg): _93.QueryAllowedClassCreatorsRequest;
                toProto(message: _93.QueryAllowedClassCreatorsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAllowedClassCreatorsRequest): _93.QueryAllowedClassCreatorsRequestProtoMsg;
            };
            QueryAllowedClassCreatorsResponse: {
                typeUrl: string;
                encode(message: _93.QueryAllowedClassCreatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryAllowedClassCreatorsResponse;
                fromPartial(object: Partial<_93.QueryAllowedClassCreatorsResponse>): _93.QueryAllowedClassCreatorsResponse;
                fromAmino(object: _93.QueryAllowedClassCreatorsResponseAmino): _93.QueryAllowedClassCreatorsResponse;
                toAmino(message: _93.QueryAllowedClassCreatorsResponse): _93.QueryAllowedClassCreatorsResponseAmino;
                fromAminoMsg(object: _93.QueryAllowedClassCreatorsResponseAminoMsg): _93.QueryAllowedClassCreatorsResponse;
                fromProtoMsg(message: _93.QueryAllowedClassCreatorsResponseProtoMsg): _93.QueryAllowedClassCreatorsResponse;
                toProto(message: _93.QueryAllowedClassCreatorsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAllowedClassCreatorsResponse): _93.QueryAllowedClassCreatorsResponseProtoMsg;
            };
            QueryClassFeeRequest: {
                typeUrl: string;
                encode(_: _93.QueryClassFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassFeeRequest;
                fromPartial(_: Partial<_93.QueryClassFeeRequest>): _93.QueryClassFeeRequest;
                fromAmino(_: _93.QueryClassFeeRequestAmino): _93.QueryClassFeeRequest;
                toAmino(_: _93.QueryClassFeeRequest): _93.QueryClassFeeRequestAmino;
                fromAminoMsg(object: _93.QueryClassFeeRequestAminoMsg): _93.QueryClassFeeRequest;
                fromProtoMsg(message: _93.QueryClassFeeRequestProtoMsg): _93.QueryClassFeeRequest;
                toProto(message: _93.QueryClassFeeRequest): Uint8Array;
                toProtoMsg(message: _93.QueryClassFeeRequest): _93.QueryClassFeeRequestProtoMsg;
            };
            QueryClassFeeResponse: {
                typeUrl: string;
                encode(message: _93.QueryClassFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryClassFeeResponse;
                fromPartial(object: Partial<_93.QueryClassFeeResponse>): _93.QueryClassFeeResponse;
                fromAmino(object: _93.QueryClassFeeResponseAmino): _93.QueryClassFeeResponse;
                toAmino(message: _93.QueryClassFeeResponse): _93.QueryClassFeeResponseAmino;
                fromAminoMsg(object: _93.QueryClassFeeResponseAminoMsg): _93.QueryClassFeeResponse;
                fromProtoMsg(message: _93.QueryClassFeeResponseProtoMsg): _93.QueryClassFeeResponse;
                toProto(message: _93.QueryClassFeeResponse): Uint8Array;
                toProtoMsg(message: _93.QueryClassFeeResponse): _93.QueryClassFeeResponseProtoMsg;
            };
            QueryAllowedBridgeChainsRequest: {
                typeUrl: string;
                encode(_: _93.QueryAllowedBridgeChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryAllowedBridgeChainsRequest;
                fromPartial(_: Partial<_93.QueryAllowedBridgeChainsRequest>): _93.QueryAllowedBridgeChainsRequest;
                fromAmino(_: _93.QueryAllowedBridgeChainsRequestAmino): _93.QueryAllowedBridgeChainsRequest;
                toAmino(_: _93.QueryAllowedBridgeChainsRequest): _93.QueryAllowedBridgeChainsRequestAmino;
                fromAminoMsg(object: _93.QueryAllowedBridgeChainsRequestAminoMsg): _93.QueryAllowedBridgeChainsRequest;
                fromProtoMsg(message: _93.QueryAllowedBridgeChainsRequestProtoMsg): _93.QueryAllowedBridgeChainsRequest;
                toProto(message: _93.QueryAllowedBridgeChainsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAllowedBridgeChainsRequest): _93.QueryAllowedBridgeChainsRequestProtoMsg;
            };
            QueryAllowedBridgeChainsResponse: {
                typeUrl: string;
                encode(message: _93.QueryAllowedBridgeChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.QueryAllowedBridgeChainsResponse;
                fromPartial(object: Partial<_93.QueryAllowedBridgeChainsResponse>): _93.QueryAllowedBridgeChainsResponse;
                fromAmino(object: _93.QueryAllowedBridgeChainsResponseAmino): _93.QueryAllowedBridgeChainsResponse;
                toAmino(message: _93.QueryAllowedBridgeChainsResponse): _93.QueryAllowedBridgeChainsResponseAmino;
                fromAminoMsg(object: _93.QueryAllowedBridgeChainsResponseAminoMsg): _93.QueryAllowedBridgeChainsResponse;
                fromProtoMsg(message: _93.QueryAllowedBridgeChainsResponseProtoMsg): _93.QueryAllowedBridgeChainsResponse;
                toProto(message: _93.QueryAllowedBridgeChainsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAllowedBridgeChainsResponse): _93.QueryAllowedBridgeChainsResponseProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _92.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventCreateClass;
                fromPartial(object: Partial<_92.EventCreateClass>): _92.EventCreateClass;
                fromAmino(object: _92.EventCreateClassAmino): _92.EventCreateClass;
                toAmino(message: _92.EventCreateClass): _92.EventCreateClassAmino;
                fromAminoMsg(object: _92.EventCreateClassAminoMsg): _92.EventCreateClass;
                fromProtoMsg(message: _92.EventCreateClassProtoMsg): _92.EventCreateClass;
                toProto(message: _92.EventCreateClass): Uint8Array;
                toProtoMsg(message: _92.EventCreateClass): _92.EventCreateClassProtoMsg;
            };
            EventCreateProject: {
                typeUrl: string;
                encode(message: _92.EventCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventCreateProject;
                fromPartial(object: Partial<_92.EventCreateProject>): _92.EventCreateProject;
                fromAmino(object: _92.EventCreateProjectAmino): _92.EventCreateProject;
                toAmino(message: _92.EventCreateProject): _92.EventCreateProjectAmino;
                fromAminoMsg(object: _92.EventCreateProjectAminoMsg): _92.EventCreateProject;
                fromProtoMsg(message: _92.EventCreateProjectProtoMsg): _92.EventCreateProject;
                toProto(message: _92.EventCreateProject): Uint8Array;
                toProtoMsg(message: _92.EventCreateProject): _92.EventCreateProjectProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _92.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventCreateBatch;
                fromPartial(object: Partial<_92.EventCreateBatch>): _92.EventCreateBatch;
                fromAmino(object: _92.EventCreateBatchAmino): _92.EventCreateBatch;
                toAmino(message: _92.EventCreateBatch): _92.EventCreateBatchAmino;
                fromAminoMsg(object: _92.EventCreateBatchAminoMsg): _92.EventCreateBatch;
                fromProtoMsg(message: _92.EventCreateBatchProtoMsg): _92.EventCreateBatch;
                toProto(message: _92.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _92.EventCreateBatch): _92.EventCreateBatchProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _92.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventMint;
                fromPartial(object: Partial<_92.EventMint>): _92.EventMint;
                fromAmino(object: _92.EventMintAmino): _92.EventMint;
                toAmino(message: _92.EventMint): _92.EventMintAmino;
                fromAminoMsg(object: _92.EventMintAminoMsg): _92.EventMint;
                fromProtoMsg(message: _92.EventMintProtoMsg): _92.EventMint;
                toProto(message: _92.EventMint): Uint8Array;
                toProtoMsg(message: _92.EventMint): _92.EventMintProtoMsg;
            };
            EventMintBatchCredits: {
                typeUrl: string;
                encode(message: _92.EventMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventMintBatchCredits;
                fromPartial(object: Partial<_92.EventMintBatchCredits>): _92.EventMintBatchCredits;
                fromAmino(object: _92.EventMintBatchCreditsAmino): _92.EventMintBatchCredits;
                toAmino(message: _92.EventMintBatchCredits): _92.EventMintBatchCreditsAmino;
                fromAminoMsg(object: _92.EventMintBatchCreditsAminoMsg): _92.EventMintBatchCredits;
                fromProtoMsg(message: _92.EventMintBatchCreditsProtoMsg): _92.EventMintBatchCredits;
                toProto(message: _92.EventMintBatchCredits): Uint8Array;
                toProtoMsg(message: _92.EventMintBatchCredits): _92.EventMintBatchCreditsProtoMsg;
            };
            EventTransfer: {
                typeUrl: string;
                encode(message: _92.EventTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventTransfer;
                fromPartial(object: Partial<_92.EventTransfer>): _92.EventTransfer;
                fromAmino(object: _92.EventTransferAmino): _92.EventTransfer;
                toAmino(message: _92.EventTransfer): _92.EventTransferAmino;
                fromAminoMsg(object: _92.EventTransferAminoMsg): _92.EventTransfer;
                fromProtoMsg(message: _92.EventTransferProtoMsg): _92.EventTransfer;
                toProto(message: _92.EventTransfer): Uint8Array;
                toProtoMsg(message: _92.EventTransfer): _92.EventTransferProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _92.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventRetire;
                fromPartial(object: Partial<_92.EventRetire>): _92.EventRetire;
                fromAmino(object: _92.EventRetireAmino): _92.EventRetire;
                toAmino(message: _92.EventRetire): _92.EventRetireAmino;
                fromAminoMsg(object: _92.EventRetireAminoMsg): _92.EventRetire;
                fromProtoMsg(message: _92.EventRetireProtoMsg): _92.EventRetire;
                toProto(message: _92.EventRetire): Uint8Array;
                toProtoMsg(message: _92.EventRetire): _92.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _92.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventCancel;
                fromPartial(object: Partial<_92.EventCancel>): _92.EventCancel;
                fromAmino(object: _92.EventCancelAmino): _92.EventCancel;
                toAmino(message: _92.EventCancel): _92.EventCancelAmino;
                fromAminoMsg(object: _92.EventCancelAminoMsg): _92.EventCancel;
                fromProtoMsg(message: _92.EventCancelProtoMsg): _92.EventCancel;
                toProto(message: _92.EventCancel): Uint8Array;
                toProtoMsg(message: _92.EventCancel): _92.EventCancelProtoMsg;
            };
            EventUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _92.EventUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventUpdateClassAdmin;
                fromPartial(object: Partial<_92.EventUpdateClassAdmin>): _92.EventUpdateClassAdmin;
                fromAmino(object: _92.EventUpdateClassAdminAmino): _92.EventUpdateClassAdmin;
                toAmino(message: _92.EventUpdateClassAdmin): _92.EventUpdateClassAdminAmino;
                fromAminoMsg(object: _92.EventUpdateClassAdminAminoMsg): _92.EventUpdateClassAdmin;
                fromProtoMsg(message: _92.EventUpdateClassAdminProtoMsg): _92.EventUpdateClassAdmin;
                toProto(message: _92.EventUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _92.EventUpdateClassAdmin): _92.EventUpdateClassAdminProtoMsg;
            };
            EventUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _92.EventUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventUpdateClassIssuers;
                fromPartial(object: Partial<_92.EventUpdateClassIssuers>): _92.EventUpdateClassIssuers;
                fromAmino(object: _92.EventUpdateClassIssuersAmino): _92.EventUpdateClassIssuers;
                toAmino(message: _92.EventUpdateClassIssuers): _92.EventUpdateClassIssuersAmino;
                fromAminoMsg(object: _92.EventUpdateClassIssuersAminoMsg): _92.EventUpdateClassIssuers;
                fromProtoMsg(message: _92.EventUpdateClassIssuersProtoMsg): _92.EventUpdateClassIssuers;
                toProto(message: _92.EventUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _92.EventUpdateClassIssuers): _92.EventUpdateClassIssuersProtoMsg;
            };
            EventUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _92.EventUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventUpdateClassMetadata;
                fromPartial(object: Partial<_92.EventUpdateClassMetadata>): _92.EventUpdateClassMetadata;
                fromAmino(object: _92.EventUpdateClassMetadataAmino): _92.EventUpdateClassMetadata;
                toAmino(message: _92.EventUpdateClassMetadata): _92.EventUpdateClassMetadataAmino;
                fromAminoMsg(object: _92.EventUpdateClassMetadataAminoMsg): _92.EventUpdateClassMetadata;
                fromProtoMsg(message: _92.EventUpdateClassMetadataProtoMsg): _92.EventUpdateClassMetadata;
                toProto(message: _92.EventUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _92.EventUpdateClassMetadata): _92.EventUpdateClassMetadataProtoMsg;
            };
            EventUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _92.EventUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventUpdateProjectAdmin;
                fromPartial(object: Partial<_92.EventUpdateProjectAdmin>): _92.EventUpdateProjectAdmin;
                fromAmino(object: _92.EventUpdateProjectAdminAmino): _92.EventUpdateProjectAdmin;
                toAmino(message: _92.EventUpdateProjectAdmin): _92.EventUpdateProjectAdminAmino;
                fromAminoMsg(object: _92.EventUpdateProjectAdminAminoMsg): _92.EventUpdateProjectAdmin;
                fromProtoMsg(message: _92.EventUpdateProjectAdminProtoMsg): _92.EventUpdateProjectAdmin;
                toProto(message: _92.EventUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _92.EventUpdateProjectAdmin): _92.EventUpdateProjectAdminProtoMsg;
            };
            EventUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _92.EventUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventUpdateProjectMetadata;
                fromPartial(object: Partial<_92.EventUpdateProjectMetadata>): _92.EventUpdateProjectMetadata;
                fromAmino(object: _92.EventUpdateProjectMetadataAmino): _92.EventUpdateProjectMetadata;
                toAmino(message: _92.EventUpdateProjectMetadata): _92.EventUpdateProjectMetadataAmino;
                fromAminoMsg(object: _92.EventUpdateProjectMetadataAminoMsg): _92.EventUpdateProjectMetadata;
                fromProtoMsg(message: _92.EventUpdateProjectMetadataProtoMsg): _92.EventUpdateProjectMetadata;
                toProto(message: _92.EventUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _92.EventUpdateProjectMetadata): _92.EventUpdateProjectMetadataProtoMsg;
            };
            EventUpdateBatchMetadata: {
                typeUrl: string;
                encode(message: _92.EventUpdateBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventUpdateBatchMetadata;
                fromPartial(object: Partial<_92.EventUpdateBatchMetadata>): _92.EventUpdateBatchMetadata;
                fromAmino(object: _92.EventUpdateBatchMetadataAmino): _92.EventUpdateBatchMetadata;
                toAmino(message: _92.EventUpdateBatchMetadata): _92.EventUpdateBatchMetadataAmino;
                fromAminoMsg(object: _92.EventUpdateBatchMetadataAminoMsg): _92.EventUpdateBatchMetadata;
                fromProtoMsg(message: _92.EventUpdateBatchMetadataProtoMsg): _92.EventUpdateBatchMetadata;
                toProto(message: _92.EventUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _92.EventUpdateBatchMetadata): _92.EventUpdateBatchMetadataProtoMsg;
            };
            EventSealBatch: {
                typeUrl: string;
                encode(message: _92.EventSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventSealBatch;
                fromPartial(object: Partial<_92.EventSealBatch>): _92.EventSealBatch;
                fromAmino(object: _92.EventSealBatchAmino): _92.EventSealBatch;
                toAmino(message: _92.EventSealBatch): _92.EventSealBatchAmino;
                fromAminoMsg(object: _92.EventSealBatchAminoMsg): _92.EventSealBatch;
                fromProtoMsg(message: _92.EventSealBatchProtoMsg): _92.EventSealBatch;
                toProto(message: _92.EventSealBatch): Uint8Array;
                toProtoMsg(message: _92.EventSealBatch): _92.EventSealBatchProtoMsg;
            };
            EventAddCreditType: {
                typeUrl: string;
                encode(message: _92.EventAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventAddCreditType;
                fromPartial(object: Partial<_92.EventAddCreditType>): _92.EventAddCreditType;
                fromAmino(object: _92.EventAddCreditTypeAmino): _92.EventAddCreditType;
                toAmino(message: _92.EventAddCreditType): _92.EventAddCreditTypeAmino;
                fromAminoMsg(object: _92.EventAddCreditTypeAminoMsg): _92.EventAddCreditType;
                fromProtoMsg(message: _92.EventAddCreditTypeProtoMsg): _92.EventAddCreditType;
                toProto(message: _92.EventAddCreditType): Uint8Array;
                toProtoMsg(message: _92.EventAddCreditType): _92.EventAddCreditTypeProtoMsg;
            };
            EventBridge: {
                typeUrl: string;
                encode(message: _92.EventBridge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventBridge;
                fromPartial(object: Partial<_92.EventBridge>): _92.EventBridge;
                fromAmino(object: _92.EventBridgeAmino): _92.EventBridge;
                toAmino(message: _92.EventBridge): _92.EventBridgeAmino;
                fromAminoMsg(object: _92.EventBridgeAminoMsg): _92.EventBridge;
                fromProtoMsg(message: _92.EventBridgeProtoMsg): _92.EventBridge;
                toProto(message: _92.EventBridge): Uint8Array;
                toProtoMsg(message: _92.EventBridge): _92.EventBridgeProtoMsg;
            };
            EventBridgeReceive: {
                typeUrl: string;
                encode(message: _92.EventBridgeReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventBridgeReceive;
                fromPartial(object: Partial<_92.EventBridgeReceive>): _92.EventBridgeReceive;
                fromAmino(object: _92.EventBridgeReceiveAmino): _92.EventBridgeReceive;
                toAmino(message: _92.EventBridgeReceive): _92.EventBridgeReceiveAmino;
                fromAminoMsg(object: _92.EventBridgeReceiveAminoMsg): _92.EventBridgeReceive;
                fromProtoMsg(message: _92.EventBridgeReceiveProtoMsg): _92.EventBridgeReceive;
                toProto(message: _92.EventBridgeReceive): Uint8Array;
                toProtoMsg(message: _92.EventBridgeReceive): _92.EventBridgeReceiveProtoMsg;
            };
        };
        const v1alpha1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _99.QueryClassesRequest): Promise<_99.QueryClassesResponse>;
                classInfo(request: _99.QueryClassInfoRequest): Promise<_99.QueryClassInfoResponse>;
                batches(request: _99.QueryBatchesRequest): Promise<_99.QueryBatchesResponse>;
                batchInfo(request: _99.QueryBatchInfoRequest): Promise<_99.QueryBatchInfoResponse>;
                balance(request: _99.QueryBalanceRequest): Promise<_99.QueryBalanceResponse>;
                supply(request: _99.QuerySupplyRequest): Promise<_99.QuerySupplyResponse>;
                creditTypes(request?: _99.QueryCreditTypesRequest): Promise<_99.QueryCreditTypesResponse>;
                params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _100.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _100.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _100.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _100.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _100.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _100.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _100.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _100.MsgCreateClass): {
                        typeUrl: string;
                        value: _100.MsgCreateClass;
                    };
                    createBatch(value: _100.MsgCreateBatch): {
                        typeUrl: string;
                        value: _100.MsgCreateBatch;
                    };
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                    retire(value: _100.MsgRetire): {
                        typeUrl: string;
                        value: _100.MsgRetire;
                    };
                    cancel(value: _100.MsgCancel): {
                        typeUrl: string;
                        value: _100.MsgCancel;
                    };
                    updateClassAdmin(value: _100.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _100.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _100.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _100.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _100.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _100.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _100.MsgCreateClass): {
                        typeUrl: string;
                        value: _100.MsgCreateClass;
                    };
                    createBatch(value: _100.MsgCreateBatch): {
                        typeUrl: string;
                        value: _100.MsgCreateBatch;
                    };
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                    retire(value: _100.MsgRetire): {
                        typeUrl: string;
                        value: _100.MsgRetire;
                    };
                    cancel(value: _100.MsgCancel): {
                        typeUrl: string;
                        value: _100.MsgCancel;
                    };
                    updateClassAdmin(value: _100.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _100.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _100.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _100.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _100.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _100.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCreateClass) => _100.MsgCreateClassAmino;
                    fromAmino: (object: _100.MsgCreateClassAmino) => _100.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCreateBatch) => _100.MsgCreateBatchAmino;
                    fromAmino: (object: _100.MsgCreateBatchAmino) => _100.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _100.MsgSend) => _100.MsgSendAmino;
                    fromAmino: (object: _100.MsgSendAmino) => _100.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _100.MsgRetire) => _100.MsgRetireAmino;
                    fromAmino: (object: _100.MsgRetireAmino) => _100.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCancel) => _100.MsgCancelAmino;
                    fromAmino: (object: _100.MsgCancelAmino) => _100.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUpdateClassAdmin) => _100.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _100.MsgUpdateClassAdminAmino) => _100.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUpdateClassIssuers) => _100.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _100.MsgUpdateClassIssuersAmino) => _100.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUpdateClassMetadata) => _100.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _100.MsgUpdateClassMetadataAmino) => _100.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _101.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ClassInfo;
                fromPartial(object: Partial<_101.ClassInfo>): _101.ClassInfo;
                fromAmino(object: _101.ClassInfoAmino): _101.ClassInfo;
                toAmino(message: _101.ClassInfo): _101.ClassInfoAmino;
                fromAminoMsg(object: _101.ClassInfoAminoMsg): _101.ClassInfo;
                fromProtoMsg(message: _101.ClassInfoProtoMsg): _101.ClassInfo;
                toProto(message: _101.ClassInfo): Uint8Array;
                toProtoMsg(message: _101.ClassInfo): _101.ClassInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _101.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.BatchInfo;
                fromPartial(object: Partial<_101.BatchInfo>): _101.BatchInfo;
                fromAmino(object: _101.BatchInfoAmino): _101.BatchInfo;
                toAmino(message: _101.BatchInfo): _101.BatchInfoAmino;
                fromAminoMsg(object: _101.BatchInfoAminoMsg): _101.BatchInfo;
                fromProtoMsg(message: _101.BatchInfoProtoMsg): _101.BatchInfo;
                toProto(message: _101.BatchInfo): Uint8Array;
                toProtoMsg(message: _101.BatchInfo): _101.BatchInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _101.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Params;
                fromPartial(object: Partial<_101.Params>): _101.Params;
                fromAmino(object: _101.ParamsAmino): _101.Params;
                toAmino(message: _101.Params): _101.ParamsAmino;
                fromAminoMsg(object: _101.ParamsAminoMsg): _101.Params;
                fromProtoMsg(message: _101.ParamsProtoMsg): _101.Params;
                toProto(message: _101.Params): Uint8Array;
                toProtoMsg(message: _101.Params): _101.ParamsProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _101.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.CreditType;
                fromPartial(object: Partial<_101.CreditType>): _101.CreditType;
                fromAmino(object: _101.CreditTypeAmino): _101.CreditType;
                toAmino(message: _101.CreditType): _101.CreditTypeAmino;
                fromAminoMsg(object: _101.CreditTypeAminoMsg): _101.CreditType;
                fromProtoMsg(message: _101.CreditTypeProtoMsg): _101.CreditType;
                toProto(message: _101.CreditType): Uint8Array;
                toProtoMsg(message: _101.CreditType): _101.CreditTypeProtoMsg;
            };
            CreditTypeSeq: {
                typeUrl: string;
                encode(message: _101.CreditTypeSeq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.CreditTypeSeq;
                fromPartial(object: Partial<_101.CreditTypeSeq>): _101.CreditTypeSeq;
                fromAmino(object: _101.CreditTypeSeqAmino): _101.CreditTypeSeq;
                toAmino(message: _101.CreditTypeSeq): _101.CreditTypeSeqAmino;
                fromAminoMsg(object: _101.CreditTypeSeqAminoMsg): _101.CreditTypeSeq;
                fromProtoMsg(message: _101.CreditTypeSeqProtoMsg): _101.CreditTypeSeq;
                toProto(message: _101.CreditTypeSeq): Uint8Array;
                toProtoMsg(message: _101.CreditTypeSeq): _101.CreditTypeSeqProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _100.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCreateClass;
                fromPartial(object: Partial<_100.MsgCreateClass>): _100.MsgCreateClass;
                fromAmino(object: _100.MsgCreateClassAmino): _100.MsgCreateClass;
                toAmino(message: _100.MsgCreateClass): _100.MsgCreateClassAmino;
                fromAminoMsg(object: _100.MsgCreateClassAminoMsg): _100.MsgCreateClass;
                fromProtoMsg(message: _100.MsgCreateClassProtoMsg): _100.MsgCreateClass;
                toProto(message: _100.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _100.MsgCreateClass): _100.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _100.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCreateClassResponse;
                fromPartial(object: Partial<_100.MsgCreateClassResponse>): _100.MsgCreateClassResponse;
                fromAmino(object: _100.MsgCreateClassResponseAmino): _100.MsgCreateClassResponse;
                toAmino(message: _100.MsgCreateClassResponse): _100.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _100.MsgCreateClassResponseAminoMsg): _100.MsgCreateClassResponse;
                fromProtoMsg(message: _100.MsgCreateClassResponseProtoMsg): _100.MsgCreateClassResponse;
                toProto(message: _100.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCreateClassResponse): _100.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _100.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCreateBatch;
                fromPartial(object: Partial<_100.MsgCreateBatch>): _100.MsgCreateBatch;
                fromAmino(object: _100.MsgCreateBatchAmino): _100.MsgCreateBatch;
                toAmino(message: _100.MsgCreateBatch): _100.MsgCreateBatchAmino;
                fromAminoMsg(object: _100.MsgCreateBatchAminoMsg): _100.MsgCreateBatch;
                fromProtoMsg(message: _100.MsgCreateBatchProtoMsg): _100.MsgCreateBatch;
                toProto(message: _100.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _100.MsgCreateBatch): _100.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatch_BatchIssuance: {
                typeUrl: string;
                encode(message: _100.MsgCreateBatch_BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCreateBatch_BatchIssuance;
                fromPartial(object: Partial<_100.MsgCreateBatch_BatchIssuance>): _100.MsgCreateBatch_BatchIssuance;
                fromAmino(object: _100.MsgCreateBatch_BatchIssuanceAmino): _100.MsgCreateBatch_BatchIssuance;
                toAmino(message: _100.MsgCreateBatch_BatchIssuance): _100.MsgCreateBatch_BatchIssuanceAmino;
                fromAminoMsg(object: _100.MsgCreateBatch_BatchIssuanceAminoMsg): _100.MsgCreateBatch_BatchIssuance;
                fromProtoMsg(message: _100.MsgCreateBatch_BatchIssuanceProtoMsg): _100.MsgCreateBatch_BatchIssuance;
                toProto(message: _100.MsgCreateBatch_BatchIssuance): Uint8Array;
                toProtoMsg(message: _100.MsgCreateBatch_BatchIssuance): _100.MsgCreateBatch_BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _100.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCreateBatchResponse;
                fromPartial(object: Partial<_100.MsgCreateBatchResponse>): _100.MsgCreateBatchResponse;
                fromAmino(object: _100.MsgCreateBatchResponseAmino): _100.MsgCreateBatchResponse;
                toAmino(message: _100.MsgCreateBatchResponse): _100.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _100.MsgCreateBatchResponseAminoMsg): _100.MsgCreateBatchResponse;
                fromProtoMsg(message: _100.MsgCreateBatchResponseProtoMsg): _100.MsgCreateBatchResponse;
                toProto(message: _100.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCreateBatchResponse): _100.MsgCreateBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _100.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgSend;
                fromPartial(object: Partial<_100.MsgSend>): _100.MsgSend;
                fromAmino(object: _100.MsgSendAmino): _100.MsgSend;
                toAmino(message: _100.MsgSend): _100.MsgSendAmino;
                fromAminoMsg(object: _100.MsgSendAminoMsg): _100.MsgSend;
                fromProtoMsg(message: _100.MsgSendProtoMsg): _100.MsgSend;
                toProto(message: _100.MsgSend): Uint8Array;
                toProtoMsg(message: _100.MsgSend): _100.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _100.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgSend_SendCredits;
                fromPartial(object: Partial<_100.MsgSend_SendCredits>): _100.MsgSend_SendCredits;
                fromAmino(object: _100.MsgSend_SendCreditsAmino): _100.MsgSend_SendCredits;
                toAmino(message: _100.MsgSend_SendCredits): _100.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _100.MsgSend_SendCreditsAminoMsg): _100.MsgSend_SendCredits;
                fromProtoMsg(message: _100.MsgSend_SendCreditsProtoMsg): _100.MsgSend_SendCredits;
                toProto(message: _100.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _100.MsgSend_SendCredits): _100.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _100.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgSendResponse;
                fromPartial(_: Partial<_100.MsgSendResponse>): _100.MsgSendResponse;
                fromAmino(_: _100.MsgSendResponseAmino): _100.MsgSendResponse;
                toAmino(_: _100.MsgSendResponse): _100.MsgSendResponseAmino;
                fromAminoMsg(object: _100.MsgSendResponseAminoMsg): _100.MsgSendResponse;
                fromProtoMsg(message: _100.MsgSendResponseProtoMsg): _100.MsgSendResponse;
                toProto(message: _100.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _100.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgRetire;
                fromPartial(object: Partial<_100.MsgRetire>): _100.MsgRetire;
                fromAmino(object: _100.MsgRetireAmino): _100.MsgRetire;
                toAmino(message: _100.MsgRetire): _100.MsgRetireAmino;
                fromAminoMsg(object: _100.MsgRetireAminoMsg): _100.MsgRetire;
                fromProtoMsg(message: _100.MsgRetireProtoMsg): _100.MsgRetire;
                toProto(message: _100.MsgRetire): Uint8Array;
                toProtoMsg(message: _100.MsgRetire): _100.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                typeUrl: string;
                encode(message: _100.MsgRetire_RetireCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgRetire_RetireCredits;
                fromPartial(object: Partial<_100.MsgRetire_RetireCredits>): _100.MsgRetire_RetireCredits;
                fromAmino(object: _100.MsgRetire_RetireCreditsAmino): _100.MsgRetire_RetireCredits;
                toAmino(message: _100.MsgRetire_RetireCredits): _100.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _100.MsgRetire_RetireCreditsAminoMsg): _100.MsgRetire_RetireCredits;
                fromProtoMsg(message: _100.MsgRetire_RetireCreditsProtoMsg): _100.MsgRetire_RetireCredits;
                toProto(message: _100.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _100.MsgRetire_RetireCredits): _100.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _100.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgRetireResponse;
                fromPartial(_: Partial<_100.MsgRetireResponse>): _100.MsgRetireResponse;
                fromAmino(_: _100.MsgRetireResponseAmino): _100.MsgRetireResponse;
                toAmino(_: _100.MsgRetireResponse): _100.MsgRetireResponseAmino;
                fromAminoMsg(object: _100.MsgRetireResponseAminoMsg): _100.MsgRetireResponse;
                fromProtoMsg(message: _100.MsgRetireResponseProtoMsg): _100.MsgRetireResponse;
                toProto(message: _100.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _100.MsgRetireResponse): _100.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _100.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCancel;
                fromPartial(object: Partial<_100.MsgCancel>): _100.MsgCancel;
                fromAmino(object: _100.MsgCancelAmino): _100.MsgCancel;
                toAmino(message: _100.MsgCancel): _100.MsgCancelAmino;
                fromAminoMsg(object: _100.MsgCancelAminoMsg): _100.MsgCancel;
                fromProtoMsg(message: _100.MsgCancelProtoMsg): _100.MsgCancel;
                toProto(message: _100.MsgCancel): Uint8Array;
                toProtoMsg(message: _100.MsgCancel): _100.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                typeUrl: string;
                encode(message: _100.MsgCancel_CancelCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCancel_CancelCredits;
                fromPartial(object: Partial<_100.MsgCancel_CancelCredits>): _100.MsgCancel_CancelCredits;
                fromAmino(object: _100.MsgCancel_CancelCreditsAmino): _100.MsgCancel_CancelCredits;
                toAmino(message: _100.MsgCancel_CancelCredits): _100.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _100.MsgCancel_CancelCreditsAminoMsg): _100.MsgCancel_CancelCredits;
                fromProtoMsg(message: _100.MsgCancel_CancelCreditsProtoMsg): _100.MsgCancel_CancelCredits;
                toProto(message: _100.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _100.MsgCancel_CancelCredits): _100.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _100.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgCancelResponse;
                fromPartial(_: Partial<_100.MsgCancelResponse>): _100.MsgCancelResponse;
                fromAmino(_: _100.MsgCancelResponseAmino): _100.MsgCancelResponse;
                toAmino(_: _100.MsgCancelResponse): _100.MsgCancelResponseAmino;
                fromAminoMsg(object: _100.MsgCancelResponseAminoMsg): _100.MsgCancelResponse;
                fromProtoMsg(message: _100.MsgCancelResponseProtoMsg): _100.MsgCancelResponse;
                toProto(message: _100.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCancelResponse): _100.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _100.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgUpdateClassAdmin;
                fromPartial(object: Partial<_100.MsgUpdateClassAdmin>): _100.MsgUpdateClassAdmin;
                fromAmino(object: _100.MsgUpdateClassAdminAmino): _100.MsgUpdateClassAdmin;
                toAmino(message: _100.MsgUpdateClassAdmin): _100.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _100.MsgUpdateClassAdminAminoMsg): _100.MsgUpdateClassAdmin;
                fromProtoMsg(message: _100.MsgUpdateClassAdminProtoMsg): _100.MsgUpdateClassAdmin;
                toProto(message: _100.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateClassAdmin): _100.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _100.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgUpdateClassAdminResponse;
                fromPartial(_: Partial<_100.MsgUpdateClassAdminResponse>): _100.MsgUpdateClassAdminResponse;
                fromAmino(_: _100.MsgUpdateClassAdminResponseAmino): _100.MsgUpdateClassAdminResponse;
                toAmino(_: _100.MsgUpdateClassAdminResponse): _100.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _100.MsgUpdateClassAdminResponseAminoMsg): _100.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _100.MsgUpdateClassAdminResponseProtoMsg): _100.MsgUpdateClassAdminResponse;
                toProto(message: _100.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateClassAdminResponse): _100.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _100.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgUpdateClassIssuers;
                fromPartial(object: Partial<_100.MsgUpdateClassIssuers>): _100.MsgUpdateClassIssuers;
                fromAmino(object: _100.MsgUpdateClassIssuersAmino): _100.MsgUpdateClassIssuers;
                toAmino(message: _100.MsgUpdateClassIssuers): _100.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _100.MsgUpdateClassIssuersAminoMsg): _100.MsgUpdateClassIssuers;
                fromProtoMsg(message: _100.MsgUpdateClassIssuersProtoMsg): _100.MsgUpdateClassIssuers;
                toProto(message: _100.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateClassIssuers): _100.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _100.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgUpdateClassIssuersResponse;
                fromPartial(_: Partial<_100.MsgUpdateClassIssuersResponse>): _100.MsgUpdateClassIssuersResponse;
                fromAmino(_: _100.MsgUpdateClassIssuersResponseAmino): _100.MsgUpdateClassIssuersResponse;
                toAmino(_: _100.MsgUpdateClassIssuersResponse): _100.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _100.MsgUpdateClassIssuersResponseAminoMsg): _100.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _100.MsgUpdateClassIssuersResponseProtoMsg): _100.MsgUpdateClassIssuersResponse;
                toProto(message: _100.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateClassIssuersResponse): _100.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _100.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgUpdateClassMetadata;
                fromPartial(object: Partial<_100.MsgUpdateClassMetadata>): _100.MsgUpdateClassMetadata;
                fromAmino(object: _100.MsgUpdateClassMetadataAmino): _100.MsgUpdateClassMetadata;
                toAmino(message: _100.MsgUpdateClassMetadata): _100.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _100.MsgUpdateClassMetadataAminoMsg): _100.MsgUpdateClassMetadata;
                fromProtoMsg(message: _100.MsgUpdateClassMetadataProtoMsg): _100.MsgUpdateClassMetadata;
                toProto(message: _100.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateClassMetadata): _100.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _100.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.MsgUpdateClassMetadataResponse;
                fromPartial(_: Partial<_100.MsgUpdateClassMetadataResponse>): _100.MsgUpdateClassMetadataResponse;
                fromAmino(_: _100.MsgUpdateClassMetadataResponseAmino): _100.MsgUpdateClassMetadataResponse;
                toAmino(_: _100.MsgUpdateClassMetadataResponse): _100.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _100.MsgUpdateClassMetadataResponseAminoMsg): _100.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _100.MsgUpdateClassMetadataResponseProtoMsg): _100.MsgUpdateClassMetadataResponse;
                toProto(message: _100.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateClassMetadataResponse): _100.MsgUpdateClassMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _99.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryParamsRequest;
                fromPartial(_: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                fromAmino(_: _99.QueryParamsRequestAmino): _99.QueryParamsRequest;
                toAmino(_: _99.QueryParamsRequest): _99.QueryParamsRequestAmino;
                fromAminoMsg(object: _99.QueryParamsRequestAminoMsg): _99.QueryParamsRequest;
                fromProtoMsg(message: _99.QueryParamsRequestProtoMsg): _99.QueryParamsRequest;
                toProto(message: _99.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryParamsRequest): _99.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _99.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryParamsResponse;
                fromPartial(object: Partial<_99.QueryParamsResponse>): _99.QueryParamsResponse;
                fromAmino(object: _99.QueryParamsResponseAmino): _99.QueryParamsResponse;
                toAmino(message: _99.QueryParamsResponse): _99.QueryParamsResponseAmino;
                fromAminoMsg(object: _99.QueryParamsResponseAminoMsg): _99.QueryParamsResponse;
                fromProtoMsg(message: _99.QueryParamsResponseProtoMsg): _99.QueryParamsResponse;
                toProto(message: _99.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryParamsResponse): _99.QueryParamsResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClassesRequest;
                fromPartial(object: Partial<_99.QueryClassesRequest>): _99.QueryClassesRequest;
                fromAmino(object: _99.QueryClassesRequestAmino): _99.QueryClassesRequest;
                toAmino(message: _99.QueryClassesRequest): _99.QueryClassesRequestAmino;
                fromAminoMsg(object: _99.QueryClassesRequestAminoMsg): _99.QueryClassesRequest;
                fromProtoMsg(message: _99.QueryClassesRequestProtoMsg): _99.QueryClassesRequest;
                toProto(message: _99.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClassesResponse;
                fromPartial(object: Partial<_99.QueryClassesResponse>): _99.QueryClassesResponse;
                fromAmino(object: _99.QueryClassesResponseAmino): _99.QueryClassesResponse;
                toAmino(message: _99.QueryClassesResponse): _99.QueryClassesResponseAmino;
                fromAminoMsg(object: _99.QueryClassesResponseAminoMsg): _99.QueryClassesResponse;
                fromProtoMsg(message: _99.QueryClassesResponseProtoMsg): _99.QueryClassesResponse;
                toProto(message: _99.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseProtoMsg;
            };
            QueryClassInfoRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClassInfoRequest;
                fromPartial(object: Partial<_99.QueryClassInfoRequest>): _99.QueryClassInfoRequest;
                fromAmino(object: _99.QueryClassInfoRequestAmino): _99.QueryClassInfoRequest;
                toAmino(message: _99.QueryClassInfoRequest): _99.QueryClassInfoRequestAmino;
                fromAminoMsg(object: _99.QueryClassInfoRequestAminoMsg): _99.QueryClassInfoRequest;
                fromProtoMsg(message: _99.QueryClassInfoRequestProtoMsg): _99.QueryClassInfoRequest;
                toProto(message: _99.QueryClassInfoRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassInfoRequest): _99.QueryClassInfoRequestProtoMsg;
            };
            QueryClassInfoResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClassInfoResponse;
                fromPartial(object: Partial<_99.QueryClassInfoResponse>): _99.QueryClassInfoResponse;
                fromAmino(object: _99.QueryClassInfoResponseAmino): _99.QueryClassInfoResponse;
                toAmino(message: _99.QueryClassInfoResponse): _99.QueryClassInfoResponseAmino;
                fromAminoMsg(object: _99.QueryClassInfoResponseAminoMsg): _99.QueryClassInfoResponse;
                fromProtoMsg(message: _99.QueryClassInfoResponseProtoMsg): _99.QueryClassInfoResponse;
                toProto(message: _99.QueryClassInfoResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassInfoResponse): _99.QueryClassInfoResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _99.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryBatchesRequest;
                fromPartial(object: Partial<_99.QueryBatchesRequest>): _99.QueryBatchesRequest;
                fromAmino(object: _99.QueryBatchesRequestAmino): _99.QueryBatchesRequest;
                toAmino(message: _99.QueryBatchesRequest): _99.QueryBatchesRequestAmino;
                fromAminoMsg(object: _99.QueryBatchesRequestAminoMsg): _99.QueryBatchesRequest;
                fromProtoMsg(message: _99.QueryBatchesRequestProtoMsg): _99.QueryBatchesRequest;
                toProto(message: _99.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryBatchesRequest): _99.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _99.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryBatchesResponse;
                fromPartial(object: Partial<_99.QueryBatchesResponse>): _99.QueryBatchesResponse;
                fromAmino(object: _99.QueryBatchesResponseAmino): _99.QueryBatchesResponse;
                toAmino(message: _99.QueryBatchesResponse): _99.QueryBatchesResponseAmino;
                fromAminoMsg(object: _99.QueryBatchesResponseAminoMsg): _99.QueryBatchesResponse;
                fromProtoMsg(message: _99.QueryBatchesResponseProtoMsg): _99.QueryBatchesResponse;
                toProto(message: _99.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryBatchesResponse): _99.QueryBatchesResponseProtoMsg;
            };
            QueryBatchInfoRequest: {
                typeUrl: string;
                encode(message: _99.QueryBatchInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryBatchInfoRequest;
                fromPartial(object: Partial<_99.QueryBatchInfoRequest>): _99.QueryBatchInfoRequest;
                fromAmino(object: _99.QueryBatchInfoRequestAmino): _99.QueryBatchInfoRequest;
                toAmino(message: _99.QueryBatchInfoRequest): _99.QueryBatchInfoRequestAmino;
                fromAminoMsg(object: _99.QueryBatchInfoRequestAminoMsg): _99.QueryBatchInfoRequest;
                fromProtoMsg(message: _99.QueryBatchInfoRequestProtoMsg): _99.QueryBatchInfoRequest;
                toProto(message: _99.QueryBatchInfoRequest): Uint8Array;
                toProtoMsg(message: _99.QueryBatchInfoRequest): _99.QueryBatchInfoRequestProtoMsg;
            };
            QueryBatchInfoResponse: {
                typeUrl: string;
                encode(message: _99.QueryBatchInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryBatchInfoResponse;
                fromPartial(object: Partial<_99.QueryBatchInfoResponse>): _99.QueryBatchInfoResponse;
                fromAmino(object: _99.QueryBatchInfoResponseAmino): _99.QueryBatchInfoResponse;
                toAmino(message: _99.QueryBatchInfoResponse): _99.QueryBatchInfoResponseAmino;
                fromAminoMsg(object: _99.QueryBatchInfoResponseAminoMsg): _99.QueryBatchInfoResponse;
                fromProtoMsg(message: _99.QueryBatchInfoResponseProtoMsg): _99.QueryBatchInfoResponse;
                toProto(message: _99.QueryBatchInfoResponse): Uint8Array;
                toProtoMsg(message: _99.QueryBatchInfoResponse): _99.QueryBatchInfoResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _99.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryBalanceRequest;
                fromPartial(object: Partial<_99.QueryBalanceRequest>): _99.QueryBalanceRequest;
                fromAmino(object: _99.QueryBalanceRequestAmino): _99.QueryBalanceRequest;
                toAmino(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAmino;
                fromAminoMsg(object: _99.QueryBalanceRequestAminoMsg): _99.QueryBalanceRequest;
                fromProtoMsg(message: _99.QueryBalanceRequestProtoMsg): _99.QueryBalanceRequest;
                toProto(message: _99.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _99.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryBalanceResponse;
                fromPartial(object: Partial<_99.QueryBalanceResponse>): _99.QueryBalanceResponse;
                fromAmino(object: _99.QueryBalanceResponseAmino): _99.QueryBalanceResponse;
                toAmino(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAmino;
                fromAminoMsg(object: _99.QueryBalanceResponseAminoMsg): _99.QueryBalanceResponse;
                fromProtoMsg(message: _99.QueryBalanceResponseProtoMsg): _99.QueryBalanceResponse;
                toProto(message: _99.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _99.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QuerySupplyRequest;
                fromPartial(object: Partial<_99.QuerySupplyRequest>): _99.QuerySupplyRequest;
                fromAmino(object: _99.QuerySupplyRequestAmino): _99.QuerySupplyRequest;
                toAmino(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAmino;
                fromAminoMsg(object: _99.QuerySupplyRequestAminoMsg): _99.QuerySupplyRequest;
                fromProtoMsg(message: _99.QuerySupplyRequestProtoMsg): _99.QuerySupplyRequest;
                toProto(message: _99.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _99.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QuerySupplyResponse;
                fromPartial(object: Partial<_99.QuerySupplyResponse>): _99.QuerySupplyResponse;
                fromAmino(object: _99.QuerySupplyResponseAmino): _99.QuerySupplyResponse;
                toAmino(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAmino;
                fromAminoMsg(object: _99.QuerySupplyResponseAminoMsg): _99.QuerySupplyResponse;
                fromProtoMsg(message: _99.QuerySupplyResponseProtoMsg): _99.QuerySupplyResponse;
                toProto(message: _99.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _99.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryCreditTypesRequest;
                fromPartial(_: Partial<_99.QueryCreditTypesRequest>): _99.QueryCreditTypesRequest;
                fromAmino(_: _99.QueryCreditTypesRequestAmino): _99.QueryCreditTypesRequest;
                toAmino(_: _99.QueryCreditTypesRequest): _99.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _99.QueryCreditTypesRequestAminoMsg): _99.QueryCreditTypesRequest;
                fromProtoMsg(message: _99.QueryCreditTypesRequestProtoMsg): _99.QueryCreditTypesRequest;
                toProto(message: _99.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryCreditTypesRequest): _99.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _99.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryCreditTypesResponse;
                fromPartial(object: Partial<_99.QueryCreditTypesResponse>): _99.QueryCreditTypesResponse;
                fromAmino(object: _99.QueryCreditTypesResponseAmino): _99.QueryCreditTypesResponse;
                toAmino(message: _99.QueryCreditTypesResponse): _99.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _99.QueryCreditTypesResponseAminoMsg): _99.QueryCreditTypesResponse;
                fromProtoMsg(message: _99.QueryCreditTypesResponseProtoMsg): _99.QueryCreditTypesResponse;
                toProto(message: _99.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryCreditTypesResponse): _99.QueryCreditTypesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _98.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.GenesisState;
                fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                toProto(message: _98.GenesisState): Uint8Array;
                toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _98.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Balance;
                fromPartial(object: Partial<_98.Balance>): _98.Balance;
                fromAmino(object: _98.BalanceAmino): _98.Balance;
                toAmino(message: _98.Balance): _98.BalanceAmino;
                fromAminoMsg(object: _98.BalanceAminoMsg): _98.Balance;
                fromProtoMsg(message: _98.BalanceProtoMsg): _98.Balance;
                toProto(message: _98.Balance): Uint8Array;
                toProtoMsg(message: _98.Balance): _98.BalanceProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _98.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Supply;
                fromPartial(object: Partial<_98.Supply>): _98.Supply;
                fromAmino(object: _98.SupplyAmino): _98.Supply;
                toAmino(message: _98.Supply): _98.SupplyAmino;
                fromAminoMsg(object: _98.SupplyAminoMsg): _98.Supply;
                fromProtoMsg(message: _98.SupplyProtoMsg): _98.Supply;
                toProto(message: _98.Supply): Uint8Array;
                toProtoMsg(message: _98.Supply): _98.SupplyProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _97.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EventCreateClass;
                fromPartial(object: Partial<_97.EventCreateClass>): _97.EventCreateClass;
                fromAmino(object: _97.EventCreateClassAmino): _97.EventCreateClass;
                toAmino(message: _97.EventCreateClass): _97.EventCreateClassAmino;
                fromAminoMsg(object: _97.EventCreateClassAminoMsg): _97.EventCreateClass;
                fromProtoMsg(message: _97.EventCreateClassProtoMsg): _97.EventCreateClass;
                toProto(message: _97.EventCreateClass): Uint8Array;
                toProtoMsg(message: _97.EventCreateClass): _97.EventCreateClassProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _97.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EventCreateBatch;
                fromPartial(object: Partial<_97.EventCreateBatch>): _97.EventCreateBatch;
                fromAmino(object: _97.EventCreateBatchAmino): _97.EventCreateBatch;
                toAmino(message: _97.EventCreateBatch): _97.EventCreateBatchAmino;
                fromAminoMsg(object: _97.EventCreateBatchAminoMsg): _97.EventCreateBatch;
                fromProtoMsg(message: _97.EventCreateBatchProtoMsg): _97.EventCreateBatch;
                toProto(message: _97.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _97.EventCreateBatch): _97.EventCreateBatchProtoMsg;
            };
            EventReceive: {
                typeUrl: string;
                encode(message: _97.EventReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EventReceive;
                fromPartial(object: Partial<_97.EventReceive>): _97.EventReceive;
                fromAmino(object: _97.EventReceiveAmino): _97.EventReceive;
                toAmino(message: _97.EventReceive): _97.EventReceiveAmino;
                fromAminoMsg(object: _97.EventReceiveAminoMsg): _97.EventReceive;
                fromProtoMsg(message: _97.EventReceiveProtoMsg): _97.EventReceive;
                toProto(message: _97.EventReceive): Uint8Array;
                toProtoMsg(message: _97.EventReceive): _97.EventReceiveProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _97.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EventRetire;
                fromPartial(object: Partial<_97.EventRetire>): _97.EventRetire;
                fromAmino(object: _97.EventRetireAmino): _97.EventRetire;
                toAmino(message: _97.EventRetire): _97.EventRetireAmino;
                fromAminoMsg(object: _97.EventRetireAminoMsg): _97.EventRetire;
                fromProtoMsg(message: _97.EventRetireProtoMsg): _97.EventRetire;
                toProto(message: _97.EventRetire): Uint8Array;
                toProtoMsg(message: _97.EventRetire): _97.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _97.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.EventCancel;
                fromPartial(object: Partial<_97.EventCancel>): _97.EventCancel;
                fromAmino(object: _97.EventCancelAmino): _97.EventCancel;
                toAmino(message: _97.EventCancel): _97.EventCancelAmino;
                fromAminoMsg(object: _97.EventCancelAminoMsg): _97.EventCancel;
                fromProtoMsg(message: _97.EventCancelProtoMsg): _97.EventCancel;
                toProto(message: _97.EventCancel): Uint8Array;
                toProtoMsg(message: _97.EventCancel): _97.EventCancelProtoMsg;
            };
        };
    }
    namespace intertx {
        const v1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                interchainAccount(request: _102.QueryInterchainAccountRequest): Promise<_102.QueryInterchainAccountResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _103.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _103.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _103.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _103.MsgRegisterAccount;
                    };
                    submitTx(value: _103.MsgSubmitTx): {
                        typeUrl: string;
                        value: _103.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _103.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _103.MsgRegisterAccount;
                    };
                    submitTx(value: _103.MsgSubmitTx): {
                        typeUrl: string;
                        value: _103.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _103.MsgRegisterAccount) => _103.MsgRegisterAccountAmino;
                    fromAmino: (object: _103.MsgRegisterAccountAmino) => _103.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _103.MsgSubmitTx) => _103.MsgSubmitTxAmino;
                    fromAmino: (object: _103.MsgSubmitTxAmino) => _103.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                typeUrl: string;
                encode(message: _103.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgRegisterAccount;
                fromPartial(object: Partial<_103.MsgRegisterAccount>): _103.MsgRegisterAccount;
                fromAmino(object: _103.MsgRegisterAccountAmino): _103.MsgRegisterAccount;
                toAmino(message: _103.MsgRegisterAccount): _103.MsgRegisterAccountAmino;
                fromAminoMsg(object: _103.MsgRegisterAccountAminoMsg): _103.MsgRegisterAccount;
                fromProtoMsg(message: _103.MsgRegisterAccountProtoMsg): _103.MsgRegisterAccount;
                toProto(message: _103.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _103.MsgRegisterAccount): _103.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                typeUrl: string;
                encode(_: _103.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgRegisterAccountResponse;
                fromPartial(_: Partial<_103.MsgRegisterAccountResponse>): _103.MsgRegisterAccountResponse;
                fromAmino(_: _103.MsgRegisterAccountResponseAmino): _103.MsgRegisterAccountResponse;
                toAmino(_: _103.MsgRegisterAccountResponse): _103.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _103.MsgRegisterAccountResponseAminoMsg): _103.MsgRegisterAccountResponse;
                fromProtoMsg(message: _103.MsgRegisterAccountResponseProtoMsg): _103.MsgRegisterAccountResponse;
                toProto(message: _103.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _103.MsgRegisterAccountResponse): _103.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                typeUrl: string;
                encode(message: _103.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgSubmitTx;
                fromPartial(object: Partial<_103.MsgSubmitTx>): _103.MsgSubmitTx;
                fromAmino(object: _103.MsgSubmitTxAmino): _103.MsgSubmitTx;
                toAmino(message: _103.MsgSubmitTx): _103.MsgSubmitTxAmino;
                fromAminoMsg(object: _103.MsgSubmitTxAminoMsg): _103.MsgSubmitTx;
                fromProtoMsg(message: _103.MsgSubmitTxProtoMsg): _103.MsgSubmitTx;
                toProto(message: _103.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _103.MsgSubmitTx): _103.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                typeUrl: string;
                encode(_: _103.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgSubmitTxResponse;
                fromPartial(_: Partial<_103.MsgSubmitTxResponse>): _103.MsgSubmitTxResponse;
                fromAmino(_: _103.MsgSubmitTxResponseAmino): _103.MsgSubmitTxResponse;
                toAmino(_: _103.MsgSubmitTxResponse): _103.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _103.MsgSubmitTxResponseAminoMsg): _103.MsgSubmitTxResponse;
                fromProtoMsg(message: _103.MsgSubmitTxResponseProtoMsg): _103.MsgSubmitTxResponse;
                toProto(message: _103.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _103.MsgSubmitTxResponse): _103.MsgSubmitTxResponseProtoMsg;
            };
            QueryInterchainAccountRequest: {
                typeUrl: string;
                encode(message: _102.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QueryInterchainAccountRequest;
                fromPartial(object: Partial<_102.QueryInterchainAccountRequest>): _102.QueryInterchainAccountRequest;
                fromAmino(object: _102.QueryInterchainAccountRequestAmino): _102.QueryInterchainAccountRequest;
                toAmino(message: _102.QueryInterchainAccountRequest): _102.QueryInterchainAccountRequestAmino;
                fromAminoMsg(object: _102.QueryInterchainAccountRequestAminoMsg): _102.QueryInterchainAccountRequest;
                fromProtoMsg(message: _102.QueryInterchainAccountRequestProtoMsg): _102.QueryInterchainAccountRequest;
                toProto(message: _102.QueryInterchainAccountRequest): Uint8Array;
                toProtoMsg(message: _102.QueryInterchainAccountRequest): _102.QueryInterchainAccountRequestProtoMsg;
            };
            QueryInterchainAccountResponse: {
                typeUrl: string;
                encode(message: _102.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QueryInterchainAccountResponse;
                fromPartial(object: Partial<_102.QueryInterchainAccountResponse>): _102.QueryInterchainAccountResponse;
                fromAmino(object: _102.QueryInterchainAccountResponseAmino): _102.QueryInterchainAccountResponse;
                toAmino(message: _102.QueryInterchainAccountResponse): _102.QueryInterchainAccountResponseAmino;
                fromAminoMsg(object: _102.QueryInterchainAccountResponseAminoMsg): _102.QueryInterchainAccountResponse;
                fromProtoMsg(message: _102.QueryInterchainAccountResponseProtoMsg): _102.QueryInterchainAccountResponse;
                toProto(message: _102.QueryInterchainAccountResponse): Uint8Array;
                toProtoMsg(message: _102.QueryInterchainAccountResponse): _102.QueryInterchainAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            regen: {
                data: {
                    v1: _211.MsgClientImpl;
                };
                ecocredit: {
                    basket: {
                        v1: _212.MsgClientImpl;
                    };
                    marketplace: {
                        v1: _213.MsgClientImpl;
                    };
                    v1: _214.MsgClientImpl;
                    v1alpha1: _215.MsgClientImpl;
                };
                intertx: {
                    v1: _216.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            regen: {
                data: {
                    v1: {
                        anchorByIRI(request: _77.QueryAnchorByIRIRequest): Promise<_77.QueryAnchorByIRIResponse>;
                        anchorByHash(request: _77.QueryAnchorByHashRequest): Promise<_77.QueryAnchorByHashResponse>;
                        attestationsByAttestor(request: _77.QueryAttestationsByAttestorRequest): Promise<_77.QueryAttestationsByAttestorResponse>;
                        attestationsByIRI(request: _77.QueryAttestationsByIRIRequest): Promise<_77.QueryAttestationsByIRIResponse>;
                        attestationsByHash(request: _77.QueryAttestationsByHashRequest): Promise<_77.QueryAttestationsByHashResponse>;
                        resolver(request: _77.QueryResolverRequest): Promise<_77.QueryResolverResponse>;
                        resolversByIRI(request: _77.QueryResolversByIRIRequest): Promise<_77.QueryResolversByIRIResponse>;
                        resolversByHash(request: _77.QueryResolversByHashRequest): Promise<_77.QueryResolversByHashResponse>;
                        resolversByURL(request: _77.QueryResolversByURLRequest): Promise<_77.QueryResolversByURLResponse>;
                        convertIRIToHash(request: _77.ConvertIRIToHashRequest): Promise<_77.ConvertIRIToHashResponse>;
                        convertHashToIRI(request: _77.ConvertHashToIRIRequest): Promise<_77.ConvertHashToIRIResponse>;
                    };
                };
                ecocredit: {
                    basket: {
                        v1: {
                            basket(request: _82.QueryBasketRequest): Promise<_82.QueryBasketResponse>;
                            baskets(request?: _82.QueryBasketsRequest): Promise<_82.QueryBasketsResponse>;
                            basketBalances(request: _82.QueryBasketBalancesRequest): Promise<_82.QueryBasketBalancesResponse>;
                            basketBalance(request: _82.QueryBasketBalanceRequest): Promise<_82.QueryBasketBalanceResponse>;
                            basketFee(request?: _82.QueryBasketFeeRequest): Promise<_82.QueryBasketFeeResponse>;
                        };
                    };
                    marketplace: {
                        v1: {
                            sellOrder(request: _87.QuerySellOrderRequest): Promise<_87.QuerySellOrderResponse>;
                            sellOrders(request?: _87.QuerySellOrdersRequest): Promise<_87.QuerySellOrdersResponse>;
                            sellOrdersByBatch(request: _87.QuerySellOrdersByBatchRequest): Promise<_87.QuerySellOrdersByBatchResponse>;
                            sellOrdersBySeller(request: _87.QuerySellOrdersBySellerRequest): Promise<_87.QuerySellOrdersBySellerResponse>;
                            allowedDenoms(request?: _87.QueryAllowedDenomsRequest): Promise<_87.QueryAllowedDenomsResponse>;
                        };
                    };
                    v1: {
                        classes(request?: _93.QueryClassesRequest): Promise<_93.QueryClassesResponse>;
                        classesByAdmin(request: _93.QueryClassesByAdminRequest): Promise<_93.QueryClassesByAdminResponse>;
                        class(request: _93.QueryClassRequest): Promise<_93.QueryClassResponse>;
                        classIssuers(request: _93.QueryClassIssuersRequest): Promise<_93.QueryClassIssuersResponse>;
                        projects(request?: _93.QueryProjectsRequest): Promise<_93.QueryProjectsResponse>;
                        projectsByClass(request: _93.QueryProjectsByClassRequest): Promise<_93.QueryProjectsByClassResponse>;
                        projectsByReferenceId(request: _93.QueryProjectsByReferenceIdRequest): Promise<_93.QueryProjectsByReferenceIdResponse>;
                        projectsByAdmin(request: _93.QueryProjectsByAdminRequest): Promise<_93.QueryProjectsByAdminResponse>;
                        project(request: _93.QueryProjectRequest): Promise<_93.QueryProjectResponse>;
                        batches(request?: _93.QueryBatchesRequest): Promise<_93.QueryBatchesResponse>;
                        batchesByIssuer(request: _93.QueryBatchesByIssuerRequest): Promise<_93.QueryBatchesByIssuerResponse>;
                        batchesByClass(request: _93.QueryBatchesByClassRequest): Promise<_93.QueryBatchesByClassResponse>;
                        batchesByProject(request: _93.QueryBatchesByProjectRequest): Promise<_93.QueryBatchesByProjectResponse>;
                        batch(request: _93.QueryBatchRequest): Promise<_93.QueryBatchResponse>;
                        balance(request: _93.QueryBalanceRequest): Promise<_93.QueryBalanceResponse>;
                        balances(request: _93.QueryBalancesRequest): Promise<_93.QueryBalancesResponse>;
                        balancesByBatch(request: _93.QueryBalancesByBatchRequest): Promise<_93.QueryBalancesByBatchResponse>;
                        allBalances(request?: _93.QueryAllBalancesRequest): Promise<_93.QueryAllBalancesResponse>;
                        supply(request: _93.QuerySupplyRequest): Promise<_93.QuerySupplyResponse>;
                        creditTypes(request?: _93.QueryCreditTypesRequest): Promise<_93.QueryCreditTypesResponse>;
                        params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        creditType(request: _93.QueryCreditTypeRequest): Promise<_93.QueryCreditTypeResponse>;
                        classCreatorAllowlist(request?: _93.QueryClassCreatorAllowlistRequest): Promise<_93.QueryClassCreatorAllowlistResponse>;
                        allowedClassCreators(request?: _93.QueryAllowedClassCreatorsRequest): Promise<_93.QueryAllowedClassCreatorsResponse>;
                        classFee(request?: _93.QueryClassFeeRequest): Promise<_93.QueryClassFeeResponse>;
                        allowedBridgeChains(request?: _93.QueryAllowedBridgeChainsRequest): Promise<_93.QueryAllowedBridgeChainsResponse>;
                    };
                    v1alpha1: {
                        classes(request?: _99.QueryClassesRequest): Promise<_99.QueryClassesResponse>;
                        classInfo(request: _99.QueryClassInfoRequest): Promise<_99.QueryClassInfoResponse>;
                        batches(request: _99.QueryBatchesRequest): Promise<_99.QueryBatchesResponse>;
                        batchInfo(request: _99.QueryBatchInfoRequest): Promise<_99.QueryBatchInfoResponse>;
                        balance(request: _99.QueryBalanceRequest): Promise<_99.QueryBalanceResponse>;
                        supply(request: _99.QuerySupplyRequest): Promise<_99.QuerySupplyResponse>;
                        creditTypes(request?: _99.QueryCreditTypesRequest): Promise<_99.QueryCreditTypesResponse>;
                        params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                    };
                };
                intertx: {
                    v1: {
                        interchainAccount(request: _102.QueryInterchainAccountRequest): Promise<_102.QueryInterchainAccountResponse>;
                    };
                };
            };
        }>;
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
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
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
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: _199.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _200.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _201.LCDQueryClient;
                    };
                    v1: _202.LCDQueryClient;
                    v1alpha1: _203.LCDQueryClient;
                };
                intertx: {
                    v1: _204.LCDQueryClient;
                };
            };
        }>;
    };
}
