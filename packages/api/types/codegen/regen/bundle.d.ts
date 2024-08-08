import * as _113 from "./data/v1/events";
import * as _114 from "./data/v1/query";
import * as _115 from "./data/v1/state";
import * as _116 from "./data/v1/tx";
import * as _117 from "./data/v1/types";
import * as _118 from "./ecocredit/basket/v1/events";
import * as _119 from "./ecocredit/basket/v1/query";
import * as _120 from "./ecocredit/basket/v1/state";
import * as _121 from "./ecocredit/basket/v1/tx";
import * as _122 from "./ecocredit/basket/v1/types";
import * as _123 from "./ecocredit/marketplace/v1/events";
import * as _124 from "./ecocredit/marketplace/v1/query";
import * as _125 from "./ecocredit/marketplace/v1/state";
import * as _126 from "./ecocredit/marketplace/v1/tx";
import * as _127 from "./ecocredit/marketplace/v1/types";
import * as _128 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _129 from "./ecocredit/v1/events";
import * as _130 from "./ecocredit/v1/query";
import * as _131 from "./ecocredit/v1/state";
import * as _132 from "./ecocredit/v1/tx";
import * as _133 from "./ecocredit/v1/types";
import * as _134 from "./ecocredit/v1alpha1/events";
import * as _135 from "./ecocredit/v1alpha1/genesis";
import * as _136 from "./ecocredit/v1alpha1/query";
import * as _137 from "./ecocredit/v1alpha1/tx";
import * as _138 from "./ecocredit/v1alpha1/types";
import * as _139 from "./intertx/v1/query";
import * as _140 from "./intertx/v1/tx";
import * as _253 from "./data/v1/query.lcd";
import * as _254 from "./ecocredit/basket/v1/query.lcd";
import * as _255 from "./ecocredit/marketplace/v1/query.lcd";
import * as _256 from "./ecocredit/v1/query.lcd";
import * as _257 from "./ecocredit/v1alpha1/query.lcd";
import * as _258 from "./intertx/v1/query.lcd";
import * as _259 from "./data/v1/query.rpc.Query";
import * as _260 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _261 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _262 from "./ecocredit/v1/query.rpc.Query";
import * as _263 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _264 from "./intertx/v1/query.rpc.Query";
import * as _265 from "./data/v1/tx.rpc.msg";
import * as _266 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _267 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _268 from "./ecocredit/v1/tx.rpc.msg";
import * as _269 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _270 from "./intertx/v1/tx.rpc.msg";
export declare namespace regen {
    namespace data {
        const v1: {
            MsgClientImpl: typeof _265.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                anchorByIRI(request: _114.QueryAnchorByIRIRequest): Promise<_114.QueryAnchorByIRIResponse>;
                anchorByHash(request: _114.QueryAnchorByHashRequest): Promise<_114.QueryAnchorByHashResponse>;
                attestationsByAttestor(request: _114.QueryAttestationsByAttestorRequest): Promise<_114.QueryAttestationsByAttestorResponse>;
                attestationsByIRI(request: _114.QueryAttestationsByIRIRequest): Promise<_114.QueryAttestationsByIRIResponse>;
                attestationsByHash(request: _114.QueryAttestationsByHashRequest): Promise<_114.QueryAttestationsByHashResponse>;
                resolver(request: _114.QueryResolverRequest): Promise<_114.QueryResolverResponse>;
                resolversByIRI(request: _114.QueryResolversByIRIRequest): Promise<_114.QueryResolversByIRIResponse>;
                resolversByHash(request: _114.QueryResolversByHashRequest): Promise<_114.QueryResolversByHashResponse>;
                resolversByURL(request: _114.QueryResolversByURLRequest): Promise<_114.QueryResolversByURLResponse>;
                convertIRIToHash(request: _114.ConvertIRIToHashRequest): Promise<_114.ConvertIRIToHashResponse>;
                convertHashToIRI(request: _114.ConvertHashToIRIRequest): Promise<_114.ConvertHashToIRIResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _116.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _116.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _116.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _116.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _116.MsgAnchor): {
                        typeUrl: string;
                        value: _116.MsgAnchor;
                    };
                    attest(value: _116.MsgAttest): {
                        typeUrl: string;
                        value: _116.MsgAttest;
                    };
                    defineResolver(value: _116.MsgDefineResolver): {
                        typeUrl: string;
                        value: _116.MsgDefineResolver;
                    };
                    registerResolver(value: _116.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _116.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _116.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _116.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _116.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _116.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _116.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _116.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _116.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _116.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _116.MsgAnchor): {
                        typeUrl: string;
                        value: _116.MsgAnchor;
                    };
                    attest(value: _116.MsgAttest): {
                        typeUrl: string;
                        value: _116.MsgAttest;
                    };
                    defineResolver(value: _116.MsgDefineResolver): {
                        typeUrl: string;
                        value: _116.MsgDefineResolver;
                    };
                    registerResolver(value: _116.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _116.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: (message: _116.MsgAnchor) => _116.MsgAnchorAmino;
                    fromAmino: (object: _116.MsgAnchorAmino) => _116.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: (message: _116.MsgAttest) => _116.MsgAttestAmino;
                    fromAmino: (object: _116.MsgAttestAmino) => _116.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: (message: _116.MsgDefineResolver) => _116.MsgDefineResolverAmino;
                    fromAmino: (object: _116.MsgDefineResolverAmino) => _116.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: (message: _116.MsgRegisterResolver) => _116.MsgRegisterResolverAmino;
                    fromAmino: (object: _116.MsgRegisterResolverAmino) => _116.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _117.DigestAlgorithm;
            digestAlgorithmToJSON(object: _117.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _117.RawMediaType;
            rawMediaTypeToJSON(object: _117.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _117.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _117.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _117.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _117.GraphMerkleTree): string;
            DigestAlgorithm: typeof _117.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _117.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _117.DigestAlgorithm;
            RawMediaType: typeof _117.RawMediaType;
            RawMediaTypeSDKType: typeof _117.RawMediaType;
            RawMediaTypeAmino: typeof _117.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _117.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _117.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _117.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _117.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _117.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _117.GraphMerkleTree;
            ContentHash: {
                typeUrl: string;
                encode(message: _117.ContentHash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _117.ContentHash;
                fromJSON(object: any): _117.ContentHash;
                toJSON(message: _117.ContentHash): unknown;
                fromPartial(object: Partial<_117.ContentHash>): _117.ContentHash;
                fromAmino(object: _117.ContentHashAmino): _117.ContentHash;
                toAmino(message: _117.ContentHash): _117.ContentHashAmino;
                fromAminoMsg(object: _117.ContentHashAminoMsg): _117.ContentHash;
                fromProtoMsg(message: _117.ContentHashProtoMsg): _117.ContentHash;
                toProto(message: _117.ContentHash): Uint8Array;
                toProtoMsg(message: _117.ContentHash): _117.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                typeUrl: string;
                encode(message: _117.ContentHash_Raw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _117.ContentHash_Raw;
                fromJSON(object: any): _117.ContentHash_Raw;
                toJSON(message: _117.ContentHash_Raw): unknown;
                fromPartial(object: Partial<_117.ContentHash_Raw>): _117.ContentHash_Raw;
                fromAmino(object: _117.ContentHash_RawAmino): _117.ContentHash_Raw;
                toAmino(message: _117.ContentHash_Raw): _117.ContentHash_RawAmino;
                fromAminoMsg(object: _117.ContentHash_RawAminoMsg): _117.ContentHash_Raw;
                fromProtoMsg(message: _117.ContentHash_RawProtoMsg): _117.ContentHash_Raw;
                toProto(message: _117.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _117.ContentHash_Raw): _117.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                typeUrl: string;
                encode(message: _117.ContentHash_Graph, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _117.ContentHash_Graph;
                fromJSON(object: any): _117.ContentHash_Graph;
                toJSON(message: _117.ContentHash_Graph): unknown;
                fromPartial(object: Partial<_117.ContentHash_Graph>): _117.ContentHash_Graph;
                fromAmino(object: _117.ContentHash_GraphAmino): _117.ContentHash_Graph;
                toAmino(message: _117.ContentHash_Graph): _117.ContentHash_GraphAmino;
                fromAminoMsg(object: _117.ContentHash_GraphAminoMsg): _117.ContentHash_Graph;
                fromProtoMsg(message: _117.ContentHash_GraphProtoMsg): _117.ContentHash_Graph;
                toProto(message: _117.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _117.ContentHash_Graph): _117.ContentHash_GraphProtoMsg;
            };
            ContentHashes: {
                typeUrl: string;
                encode(message: _117.ContentHashes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _117.ContentHashes;
                fromJSON(object: any): _117.ContentHashes;
                toJSON(message: _117.ContentHashes): unknown;
                fromPartial(object: Partial<_117.ContentHashes>): _117.ContentHashes;
                fromAmino(object: _117.ContentHashesAmino): _117.ContentHashes;
                toAmino(message: _117.ContentHashes): _117.ContentHashesAmino;
                fromAminoMsg(object: _117.ContentHashesAminoMsg): _117.ContentHashes;
                fromProtoMsg(message: _117.ContentHashesProtoMsg): _117.ContentHashes;
                toProto(message: _117.ContentHashes): Uint8Array;
                toProtoMsg(message: _117.ContentHashes): _117.ContentHashesProtoMsg;
            };
            MsgAnchor: {
                typeUrl: string;
                encode(message: _116.MsgAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgAnchor;
                fromJSON(object: any): _116.MsgAnchor;
                toJSON(message: _116.MsgAnchor): unknown;
                fromPartial(object: Partial<_116.MsgAnchor>): _116.MsgAnchor;
                fromAmino(object: _116.MsgAnchorAmino): _116.MsgAnchor;
                toAmino(message: _116.MsgAnchor): _116.MsgAnchorAmino;
                fromAminoMsg(object: _116.MsgAnchorAminoMsg): _116.MsgAnchor;
                toAminoMsg(message: _116.MsgAnchor): _116.MsgAnchorAminoMsg;
                fromProtoMsg(message: _116.MsgAnchorProtoMsg): _116.MsgAnchor;
                toProto(message: _116.MsgAnchor): Uint8Array;
                toProtoMsg(message: _116.MsgAnchor): _116.MsgAnchorProtoMsg;
            };
            MsgAnchorResponse: {
                typeUrl: string;
                encode(message: _116.MsgAnchorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgAnchorResponse;
                fromJSON(object: any): _116.MsgAnchorResponse;
                toJSON(message: _116.MsgAnchorResponse): unknown;
                fromPartial(object: Partial<_116.MsgAnchorResponse>): _116.MsgAnchorResponse;
                fromAmino(object: _116.MsgAnchorResponseAmino): _116.MsgAnchorResponse;
                toAmino(message: _116.MsgAnchorResponse): _116.MsgAnchorResponseAmino;
                fromAminoMsg(object: _116.MsgAnchorResponseAminoMsg): _116.MsgAnchorResponse;
                fromProtoMsg(message: _116.MsgAnchorResponseProtoMsg): _116.MsgAnchorResponse;
                toProto(message: _116.MsgAnchorResponse): Uint8Array;
                toProtoMsg(message: _116.MsgAnchorResponse): _116.MsgAnchorResponseProtoMsg;
            };
            MsgAttest: {
                typeUrl: string;
                encode(message: _116.MsgAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgAttest;
                fromJSON(object: any): _116.MsgAttest;
                toJSON(message: _116.MsgAttest): unknown;
                fromPartial(object: Partial<_116.MsgAttest>): _116.MsgAttest;
                fromAmino(object: _116.MsgAttestAmino): _116.MsgAttest;
                toAmino(message: _116.MsgAttest): _116.MsgAttestAmino;
                fromAminoMsg(object: _116.MsgAttestAminoMsg): _116.MsgAttest;
                toAminoMsg(message: _116.MsgAttest): _116.MsgAttestAminoMsg;
                fromProtoMsg(message: _116.MsgAttestProtoMsg): _116.MsgAttest;
                toProto(message: _116.MsgAttest): Uint8Array;
                toProtoMsg(message: _116.MsgAttest): _116.MsgAttestProtoMsg;
            };
            MsgAttestResponse: {
                typeUrl: string;
                encode(message: _116.MsgAttestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgAttestResponse;
                fromJSON(object: any): _116.MsgAttestResponse;
                toJSON(message: _116.MsgAttestResponse): unknown;
                fromPartial(object: Partial<_116.MsgAttestResponse>): _116.MsgAttestResponse;
                fromAmino(object: _116.MsgAttestResponseAmino): _116.MsgAttestResponse;
                toAmino(message: _116.MsgAttestResponse): _116.MsgAttestResponseAmino;
                fromAminoMsg(object: _116.MsgAttestResponseAminoMsg): _116.MsgAttestResponse;
                fromProtoMsg(message: _116.MsgAttestResponseProtoMsg): _116.MsgAttestResponse;
                toProto(message: _116.MsgAttestResponse): Uint8Array;
                toProtoMsg(message: _116.MsgAttestResponse): _116.MsgAttestResponseProtoMsg;
            };
            MsgDefineResolver: {
                typeUrl: string;
                encode(message: _116.MsgDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgDefineResolver;
                fromJSON(object: any): _116.MsgDefineResolver;
                toJSON(message: _116.MsgDefineResolver): unknown;
                fromPartial(object: Partial<_116.MsgDefineResolver>): _116.MsgDefineResolver;
                fromAmino(object: _116.MsgDefineResolverAmino): _116.MsgDefineResolver;
                toAmino(message: _116.MsgDefineResolver): _116.MsgDefineResolverAmino;
                fromAminoMsg(object: _116.MsgDefineResolverAminoMsg): _116.MsgDefineResolver;
                toAminoMsg(message: _116.MsgDefineResolver): _116.MsgDefineResolverAminoMsg;
                fromProtoMsg(message: _116.MsgDefineResolverProtoMsg): _116.MsgDefineResolver;
                toProto(message: _116.MsgDefineResolver): Uint8Array;
                toProtoMsg(message: _116.MsgDefineResolver): _116.MsgDefineResolverProtoMsg;
            };
            MsgDefineResolverResponse: {
                typeUrl: string;
                encode(message: _116.MsgDefineResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgDefineResolverResponse;
                fromJSON(object: any): _116.MsgDefineResolverResponse;
                toJSON(message: _116.MsgDefineResolverResponse): unknown;
                fromPartial(object: Partial<_116.MsgDefineResolverResponse>): _116.MsgDefineResolverResponse;
                fromAmino(object: _116.MsgDefineResolverResponseAmino): _116.MsgDefineResolverResponse;
                toAmino(message: _116.MsgDefineResolverResponse): _116.MsgDefineResolverResponseAmino;
                fromAminoMsg(object: _116.MsgDefineResolverResponseAminoMsg): _116.MsgDefineResolverResponse;
                fromProtoMsg(message: _116.MsgDefineResolverResponseProtoMsg): _116.MsgDefineResolverResponse;
                toProto(message: _116.MsgDefineResolverResponse): Uint8Array;
                toProtoMsg(message: _116.MsgDefineResolverResponse): _116.MsgDefineResolverResponseProtoMsg;
            };
            MsgRegisterResolver: {
                typeUrl: string;
                encode(message: _116.MsgRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgRegisterResolver;
                fromJSON(object: any): _116.MsgRegisterResolver;
                toJSON(message: _116.MsgRegisterResolver): unknown;
                fromPartial(object: Partial<_116.MsgRegisterResolver>): _116.MsgRegisterResolver;
                fromAmino(object: _116.MsgRegisterResolverAmino): _116.MsgRegisterResolver;
                toAmino(message: _116.MsgRegisterResolver): _116.MsgRegisterResolverAmino;
                fromAminoMsg(object: _116.MsgRegisterResolverAminoMsg): _116.MsgRegisterResolver;
                toAminoMsg(message: _116.MsgRegisterResolver): _116.MsgRegisterResolverAminoMsg;
                fromProtoMsg(message: _116.MsgRegisterResolverProtoMsg): _116.MsgRegisterResolver;
                toProto(message: _116.MsgRegisterResolver): Uint8Array;
                toProtoMsg(message: _116.MsgRegisterResolver): _116.MsgRegisterResolverProtoMsg;
            };
            MsgRegisterResolverResponse: {
                typeUrl: string;
                encode(_: _116.MsgRegisterResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _116.MsgRegisterResolverResponse;
                fromJSON(_: any): _116.MsgRegisterResolverResponse;
                toJSON(_: _116.MsgRegisterResolverResponse): unknown;
                fromPartial(_: Partial<_116.MsgRegisterResolverResponse>): _116.MsgRegisterResolverResponse;
                fromAmino(_: _116.MsgRegisterResolverResponseAmino): _116.MsgRegisterResolverResponse;
                toAmino(_: _116.MsgRegisterResolverResponse): _116.MsgRegisterResolverResponseAmino;
                fromAminoMsg(object: _116.MsgRegisterResolverResponseAminoMsg): _116.MsgRegisterResolverResponse;
                fromProtoMsg(message: _116.MsgRegisterResolverResponseProtoMsg): _116.MsgRegisterResolverResponse;
                toProto(message: _116.MsgRegisterResolverResponse): Uint8Array;
                toProtoMsg(message: _116.MsgRegisterResolverResponse): _116.MsgRegisterResolverResponseProtoMsg;
            };
            DataID: {
                typeUrl: string;
                encode(message: _115.DataID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _115.DataID;
                fromJSON(object: any): _115.DataID;
                toJSON(message: _115.DataID): unknown;
                fromPartial(object: Partial<_115.DataID>): _115.DataID;
                fromAmino(object: _115.DataIDAmino): _115.DataID;
                toAmino(message: _115.DataID): _115.DataIDAmino;
                fromAminoMsg(object: _115.DataIDAminoMsg): _115.DataID;
                fromProtoMsg(message: _115.DataIDProtoMsg): _115.DataID;
                toProto(message: _115.DataID): Uint8Array;
                toProtoMsg(message: _115.DataID): _115.DataIDProtoMsg;
            };
            DataAnchor: {
                typeUrl: string;
                encode(message: _115.DataAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _115.DataAnchor;
                fromJSON(object: any): _115.DataAnchor;
                toJSON(message: _115.DataAnchor): unknown;
                fromPartial(object: Partial<_115.DataAnchor>): _115.DataAnchor;
                fromAmino(object: _115.DataAnchorAmino): _115.DataAnchor;
                toAmino(message: _115.DataAnchor): _115.DataAnchorAmino;
                fromAminoMsg(object: _115.DataAnchorAminoMsg): _115.DataAnchor;
                fromProtoMsg(message: _115.DataAnchorProtoMsg): _115.DataAnchor;
                toProto(message: _115.DataAnchor): Uint8Array;
                toProtoMsg(message: _115.DataAnchor): _115.DataAnchorProtoMsg;
            };
            DataAttestor: {
                typeUrl: string;
                encode(message: _115.DataAttestor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _115.DataAttestor;
                fromJSON(object: any): _115.DataAttestor;
                toJSON(message: _115.DataAttestor): unknown;
                fromPartial(object: Partial<_115.DataAttestor>): _115.DataAttestor;
                fromAmino(object: _115.DataAttestorAmino): _115.DataAttestor;
                toAmino(message: _115.DataAttestor): _115.DataAttestorAmino;
                fromAminoMsg(object: _115.DataAttestorAminoMsg): _115.DataAttestor;
                fromProtoMsg(message: _115.DataAttestorProtoMsg): _115.DataAttestor;
                toProto(message: _115.DataAttestor): Uint8Array;
                toProtoMsg(message: _115.DataAttestor): _115.DataAttestorProtoMsg;
            };
            Resolver: {
                typeUrl: string;
                encode(message: _115.Resolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _115.Resolver;
                fromJSON(object: any): _115.Resolver;
                toJSON(message: _115.Resolver): unknown;
                fromPartial(object: Partial<_115.Resolver>): _115.Resolver;
                fromAmino(object: _115.ResolverAmino): _115.Resolver;
                toAmino(message: _115.Resolver): _115.ResolverAmino;
                fromAminoMsg(object: _115.ResolverAminoMsg): _115.Resolver;
                fromProtoMsg(message: _115.ResolverProtoMsg): _115.Resolver;
                toProto(message: _115.Resolver): Uint8Array;
                toProtoMsg(message: _115.Resolver): _115.ResolverProtoMsg;
            };
            DataResolver: {
                typeUrl: string;
                encode(message: _115.DataResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _115.DataResolver;
                fromJSON(object: any): _115.DataResolver;
                toJSON(message: _115.DataResolver): unknown;
                fromPartial(object: Partial<_115.DataResolver>): _115.DataResolver;
                fromAmino(object: _115.DataResolverAmino): _115.DataResolver;
                toAmino(message: _115.DataResolver): _115.DataResolverAmino;
                fromAminoMsg(object: _115.DataResolverAminoMsg): _115.DataResolver;
                fromProtoMsg(message: _115.DataResolverProtoMsg): _115.DataResolver;
                toProto(message: _115.DataResolver): Uint8Array;
                toProtoMsg(message: _115.DataResolver): _115.DataResolverProtoMsg;
            };
            QueryAnchorByIRIRequest: {
                typeUrl: string;
                encode(message: _114.QueryAnchorByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAnchorByIRIRequest;
                fromJSON(object: any): _114.QueryAnchorByIRIRequest;
                toJSON(message: _114.QueryAnchorByIRIRequest): unknown;
                fromPartial(object: Partial<_114.QueryAnchorByIRIRequest>): _114.QueryAnchorByIRIRequest;
                fromAmino(object: _114.QueryAnchorByIRIRequestAmino): _114.QueryAnchorByIRIRequest;
                toAmino(message: _114.QueryAnchorByIRIRequest): _114.QueryAnchorByIRIRequestAmino;
                fromAminoMsg(object: _114.QueryAnchorByIRIRequestAminoMsg): _114.QueryAnchorByIRIRequest;
                fromProtoMsg(message: _114.QueryAnchorByIRIRequestProtoMsg): _114.QueryAnchorByIRIRequest;
                toProto(message: _114.QueryAnchorByIRIRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAnchorByIRIRequest): _114.QueryAnchorByIRIRequestProtoMsg;
            };
            QueryAnchorByIRIResponse: {
                typeUrl: string;
                encode(message: _114.QueryAnchorByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAnchorByIRIResponse;
                fromJSON(object: any): _114.QueryAnchorByIRIResponse;
                toJSON(message: _114.QueryAnchorByIRIResponse): unknown;
                fromPartial(object: Partial<_114.QueryAnchorByIRIResponse>): _114.QueryAnchorByIRIResponse;
                fromAmino(object: _114.QueryAnchorByIRIResponseAmino): _114.QueryAnchorByIRIResponse;
                toAmino(message: _114.QueryAnchorByIRIResponse): _114.QueryAnchorByIRIResponseAmino;
                fromAminoMsg(object: _114.QueryAnchorByIRIResponseAminoMsg): _114.QueryAnchorByIRIResponse;
                fromProtoMsg(message: _114.QueryAnchorByIRIResponseProtoMsg): _114.QueryAnchorByIRIResponse;
                toProto(message: _114.QueryAnchorByIRIResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAnchorByIRIResponse): _114.QueryAnchorByIRIResponseProtoMsg;
            };
            QueryAnchorByHashRequest: {
                typeUrl: string;
                encode(message: _114.QueryAnchorByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAnchorByHashRequest;
                fromJSON(object: any): _114.QueryAnchorByHashRequest;
                toJSON(message: _114.QueryAnchorByHashRequest): unknown;
                fromPartial(object: Partial<_114.QueryAnchorByHashRequest>): _114.QueryAnchorByHashRequest;
                fromAmino(object: _114.QueryAnchorByHashRequestAmino): _114.QueryAnchorByHashRequest;
                toAmino(message: _114.QueryAnchorByHashRequest): _114.QueryAnchorByHashRequestAmino;
                fromAminoMsg(object: _114.QueryAnchorByHashRequestAminoMsg): _114.QueryAnchorByHashRequest;
                fromProtoMsg(message: _114.QueryAnchorByHashRequestProtoMsg): _114.QueryAnchorByHashRequest;
                toProto(message: _114.QueryAnchorByHashRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAnchorByHashRequest): _114.QueryAnchorByHashRequestProtoMsg;
            };
            QueryAnchorByHashResponse: {
                typeUrl: string;
                encode(message: _114.QueryAnchorByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAnchorByHashResponse;
                fromJSON(object: any): _114.QueryAnchorByHashResponse;
                toJSON(message: _114.QueryAnchorByHashResponse): unknown;
                fromPartial(object: Partial<_114.QueryAnchorByHashResponse>): _114.QueryAnchorByHashResponse;
                fromAmino(object: _114.QueryAnchorByHashResponseAmino): _114.QueryAnchorByHashResponse;
                toAmino(message: _114.QueryAnchorByHashResponse): _114.QueryAnchorByHashResponseAmino;
                fromAminoMsg(object: _114.QueryAnchorByHashResponseAminoMsg): _114.QueryAnchorByHashResponse;
                fromProtoMsg(message: _114.QueryAnchorByHashResponseProtoMsg): _114.QueryAnchorByHashResponse;
                toProto(message: _114.QueryAnchorByHashResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAnchorByHashResponse): _114.QueryAnchorByHashResponseProtoMsg;
            };
            QueryAttestationsByAttestorRequest: {
                typeUrl: string;
                encode(message: _114.QueryAttestationsByAttestorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAttestationsByAttestorRequest;
                fromJSON(object: any): _114.QueryAttestationsByAttestorRequest;
                toJSON(message: _114.QueryAttestationsByAttestorRequest): unknown;
                fromPartial(object: Partial<_114.QueryAttestationsByAttestorRequest>): _114.QueryAttestationsByAttestorRequest;
                fromAmino(object: _114.QueryAttestationsByAttestorRequestAmino): _114.QueryAttestationsByAttestorRequest;
                toAmino(message: _114.QueryAttestationsByAttestorRequest): _114.QueryAttestationsByAttestorRequestAmino;
                fromAminoMsg(object: _114.QueryAttestationsByAttestorRequestAminoMsg): _114.QueryAttestationsByAttestorRequest;
                fromProtoMsg(message: _114.QueryAttestationsByAttestorRequestProtoMsg): _114.QueryAttestationsByAttestorRequest;
                toProto(message: _114.QueryAttestationsByAttestorRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAttestationsByAttestorRequest): _114.QueryAttestationsByAttestorRequestProtoMsg;
            };
            QueryAttestationsByAttestorResponse: {
                typeUrl: string;
                encode(message: _114.QueryAttestationsByAttestorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAttestationsByAttestorResponse;
                fromJSON(object: any): _114.QueryAttestationsByAttestorResponse;
                toJSON(message: _114.QueryAttestationsByAttestorResponse): unknown;
                fromPartial(object: Partial<_114.QueryAttestationsByAttestorResponse>): _114.QueryAttestationsByAttestorResponse;
                fromAmino(object: _114.QueryAttestationsByAttestorResponseAmino): _114.QueryAttestationsByAttestorResponse;
                toAmino(message: _114.QueryAttestationsByAttestorResponse): _114.QueryAttestationsByAttestorResponseAmino;
                fromAminoMsg(object: _114.QueryAttestationsByAttestorResponseAminoMsg): _114.QueryAttestationsByAttestorResponse;
                fromProtoMsg(message: _114.QueryAttestationsByAttestorResponseProtoMsg): _114.QueryAttestationsByAttestorResponse;
                toProto(message: _114.QueryAttestationsByAttestorResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAttestationsByAttestorResponse): _114.QueryAttestationsByAttestorResponseProtoMsg;
            };
            QueryAttestationsByIRIRequest: {
                typeUrl: string;
                encode(message: _114.QueryAttestationsByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAttestationsByIRIRequest;
                fromJSON(object: any): _114.QueryAttestationsByIRIRequest;
                toJSON(message: _114.QueryAttestationsByIRIRequest): unknown;
                fromPartial(object: Partial<_114.QueryAttestationsByIRIRequest>): _114.QueryAttestationsByIRIRequest;
                fromAmino(object: _114.QueryAttestationsByIRIRequestAmino): _114.QueryAttestationsByIRIRequest;
                toAmino(message: _114.QueryAttestationsByIRIRequest): _114.QueryAttestationsByIRIRequestAmino;
                fromAminoMsg(object: _114.QueryAttestationsByIRIRequestAminoMsg): _114.QueryAttestationsByIRIRequest;
                fromProtoMsg(message: _114.QueryAttestationsByIRIRequestProtoMsg): _114.QueryAttestationsByIRIRequest;
                toProto(message: _114.QueryAttestationsByIRIRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAttestationsByIRIRequest): _114.QueryAttestationsByIRIRequestProtoMsg;
            };
            QueryAttestationsByIRIResponse: {
                typeUrl: string;
                encode(message: _114.QueryAttestationsByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAttestationsByIRIResponse;
                fromJSON(object: any): _114.QueryAttestationsByIRIResponse;
                toJSON(message: _114.QueryAttestationsByIRIResponse): unknown;
                fromPartial(object: Partial<_114.QueryAttestationsByIRIResponse>): _114.QueryAttestationsByIRIResponse;
                fromAmino(object: _114.QueryAttestationsByIRIResponseAmino): _114.QueryAttestationsByIRIResponse;
                toAmino(message: _114.QueryAttestationsByIRIResponse): _114.QueryAttestationsByIRIResponseAmino;
                fromAminoMsg(object: _114.QueryAttestationsByIRIResponseAminoMsg): _114.QueryAttestationsByIRIResponse;
                fromProtoMsg(message: _114.QueryAttestationsByIRIResponseProtoMsg): _114.QueryAttestationsByIRIResponse;
                toProto(message: _114.QueryAttestationsByIRIResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAttestationsByIRIResponse): _114.QueryAttestationsByIRIResponseProtoMsg;
            };
            QueryAttestationsByHashRequest: {
                typeUrl: string;
                encode(message: _114.QueryAttestationsByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAttestationsByHashRequest;
                fromJSON(object: any): _114.QueryAttestationsByHashRequest;
                toJSON(message: _114.QueryAttestationsByHashRequest): unknown;
                fromPartial(object: Partial<_114.QueryAttestationsByHashRequest>): _114.QueryAttestationsByHashRequest;
                fromAmino(object: _114.QueryAttestationsByHashRequestAmino): _114.QueryAttestationsByHashRequest;
                toAmino(message: _114.QueryAttestationsByHashRequest): _114.QueryAttestationsByHashRequestAmino;
                fromAminoMsg(object: _114.QueryAttestationsByHashRequestAminoMsg): _114.QueryAttestationsByHashRequest;
                fromProtoMsg(message: _114.QueryAttestationsByHashRequestProtoMsg): _114.QueryAttestationsByHashRequest;
                toProto(message: _114.QueryAttestationsByHashRequest): Uint8Array;
                toProtoMsg(message: _114.QueryAttestationsByHashRequest): _114.QueryAttestationsByHashRequestProtoMsg;
            };
            QueryAttestationsByHashResponse: {
                typeUrl: string;
                encode(message: _114.QueryAttestationsByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryAttestationsByHashResponse;
                fromJSON(object: any): _114.QueryAttestationsByHashResponse;
                toJSON(message: _114.QueryAttestationsByHashResponse): unknown;
                fromPartial(object: Partial<_114.QueryAttestationsByHashResponse>): _114.QueryAttestationsByHashResponse;
                fromAmino(object: _114.QueryAttestationsByHashResponseAmino): _114.QueryAttestationsByHashResponse;
                toAmino(message: _114.QueryAttestationsByHashResponse): _114.QueryAttestationsByHashResponseAmino;
                fromAminoMsg(object: _114.QueryAttestationsByHashResponseAminoMsg): _114.QueryAttestationsByHashResponse;
                fromProtoMsg(message: _114.QueryAttestationsByHashResponseProtoMsg): _114.QueryAttestationsByHashResponse;
                toProto(message: _114.QueryAttestationsByHashResponse): Uint8Array;
                toProtoMsg(message: _114.QueryAttestationsByHashResponse): _114.QueryAttestationsByHashResponseProtoMsg;
            };
            QueryResolverRequest: {
                typeUrl: string;
                encode(message: _114.QueryResolverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolverRequest;
                fromJSON(object: any): _114.QueryResolverRequest;
                toJSON(message: _114.QueryResolverRequest): unknown;
                fromPartial(object: Partial<_114.QueryResolverRequest>): _114.QueryResolverRequest;
                fromAmino(object: _114.QueryResolverRequestAmino): _114.QueryResolverRequest;
                toAmino(message: _114.QueryResolverRequest): _114.QueryResolverRequestAmino;
                fromAminoMsg(object: _114.QueryResolverRequestAminoMsg): _114.QueryResolverRequest;
                fromProtoMsg(message: _114.QueryResolverRequestProtoMsg): _114.QueryResolverRequest;
                toProto(message: _114.QueryResolverRequest): Uint8Array;
                toProtoMsg(message: _114.QueryResolverRequest): _114.QueryResolverRequestProtoMsg;
            };
            QueryResolverResponse: {
                typeUrl: string;
                encode(message: _114.QueryResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolverResponse;
                fromJSON(object: any): _114.QueryResolverResponse;
                toJSON(message: _114.QueryResolverResponse): unknown;
                fromPartial(object: Partial<_114.QueryResolverResponse>): _114.QueryResolverResponse;
                fromAmino(object: _114.QueryResolverResponseAmino): _114.QueryResolverResponse;
                toAmino(message: _114.QueryResolverResponse): _114.QueryResolverResponseAmino;
                fromAminoMsg(object: _114.QueryResolverResponseAminoMsg): _114.QueryResolverResponse;
                fromProtoMsg(message: _114.QueryResolverResponseProtoMsg): _114.QueryResolverResponse;
                toProto(message: _114.QueryResolverResponse): Uint8Array;
                toProtoMsg(message: _114.QueryResolverResponse): _114.QueryResolverResponseProtoMsg;
            };
            QueryResolversByIRIRequest: {
                typeUrl: string;
                encode(message: _114.QueryResolversByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolversByIRIRequest;
                fromJSON(object: any): _114.QueryResolversByIRIRequest;
                toJSON(message: _114.QueryResolversByIRIRequest): unknown;
                fromPartial(object: Partial<_114.QueryResolversByIRIRequest>): _114.QueryResolversByIRIRequest;
                fromAmino(object: _114.QueryResolversByIRIRequestAmino): _114.QueryResolversByIRIRequest;
                toAmino(message: _114.QueryResolversByIRIRequest): _114.QueryResolversByIRIRequestAmino;
                fromAminoMsg(object: _114.QueryResolversByIRIRequestAminoMsg): _114.QueryResolversByIRIRequest;
                fromProtoMsg(message: _114.QueryResolversByIRIRequestProtoMsg): _114.QueryResolversByIRIRequest;
                toProto(message: _114.QueryResolversByIRIRequest): Uint8Array;
                toProtoMsg(message: _114.QueryResolversByIRIRequest): _114.QueryResolversByIRIRequestProtoMsg;
            };
            QueryResolversByIRIResponse: {
                typeUrl: string;
                encode(message: _114.QueryResolversByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolversByIRIResponse;
                fromJSON(object: any): _114.QueryResolversByIRIResponse;
                toJSON(message: _114.QueryResolversByIRIResponse): unknown;
                fromPartial(object: Partial<_114.QueryResolversByIRIResponse>): _114.QueryResolversByIRIResponse;
                fromAmino(object: _114.QueryResolversByIRIResponseAmino): _114.QueryResolversByIRIResponse;
                toAmino(message: _114.QueryResolversByIRIResponse): _114.QueryResolversByIRIResponseAmino;
                fromAminoMsg(object: _114.QueryResolversByIRIResponseAminoMsg): _114.QueryResolversByIRIResponse;
                fromProtoMsg(message: _114.QueryResolversByIRIResponseProtoMsg): _114.QueryResolversByIRIResponse;
                toProto(message: _114.QueryResolversByIRIResponse): Uint8Array;
                toProtoMsg(message: _114.QueryResolversByIRIResponse): _114.QueryResolversByIRIResponseProtoMsg;
            };
            QueryResolversByHashRequest: {
                typeUrl: string;
                encode(message: _114.QueryResolversByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolversByHashRequest;
                fromJSON(object: any): _114.QueryResolversByHashRequest;
                toJSON(message: _114.QueryResolversByHashRequest): unknown;
                fromPartial(object: Partial<_114.QueryResolversByHashRequest>): _114.QueryResolversByHashRequest;
                fromAmino(object: _114.QueryResolversByHashRequestAmino): _114.QueryResolversByHashRequest;
                toAmino(message: _114.QueryResolversByHashRequest): _114.QueryResolversByHashRequestAmino;
                fromAminoMsg(object: _114.QueryResolversByHashRequestAminoMsg): _114.QueryResolversByHashRequest;
                fromProtoMsg(message: _114.QueryResolversByHashRequestProtoMsg): _114.QueryResolversByHashRequest;
                toProto(message: _114.QueryResolversByHashRequest): Uint8Array;
                toProtoMsg(message: _114.QueryResolversByHashRequest): _114.QueryResolversByHashRequestProtoMsg;
            };
            QueryResolversByHashResponse: {
                typeUrl: string;
                encode(message: _114.QueryResolversByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolversByHashResponse;
                fromJSON(object: any): _114.QueryResolversByHashResponse;
                toJSON(message: _114.QueryResolversByHashResponse): unknown;
                fromPartial(object: Partial<_114.QueryResolversByHashResponse>): _114.QueryResolversByHashResponse;
                fromAmino(object: _114.QueryResolversByHashResponseAmino): _114.QueryResolversByHashResponse;
                toAmino(message: _114.QueryResolversByHashResponse): _114.QueryResolversByHashResponseAmino;
                fromAminoMsg(object: _114.QueryResolversByHashResponseAminoMsg): _114.QueryResolversByHashResponse;
                fromProtoMsg(message: _114.QueryResolversByHashResponseProtoMsg): _114.QueryResolversByHashResponse;
                toProto(message: _114.QueryResolversByHashResponse): Uint8Array;
                toProtoMsg(message: _114.QueryResolversByHashResponse): _114.QueryResolversByHashResponseProtoMsg;
            };
            QueryResolversByURLRequest: {
                typeUrl: string;
                encode(message: _114.QueryResolversByURLRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolversByURLRequest;
                fromJSON(object: any): _114.QueryResolversByURLRequest;
                toJSON(message: _114.QueryResolversByURLRequest): unknown;
                fromPartial(object: Partial<_114.QueryResolversByURLRequest>): _114.QueryResolversByURLRequest;
                fromAmino(object: _114.QueryResolversByURLRequestAmino): _114.QueryResolversByURLRequest;
                toAmino(message: _114.QueryResolversByURLRequest): _114.QueryResolversByURLRequestAmino;
                fromAminoMsg(object: _114.QueryResolversByURLRequestAminoMsg): _114.QueryResolversByURLRequest;
                fromProtoMsg(message: _114.QueryResolversByURLRequestProtoMsg): _114.QueryResolversByURLRequest;
                toProto(message: _114.QueryResolversByURLRequest): Uint8Array;
                toProtoMsg(message: _114.QueryResolversByURLRequest): _114.QueryResolversByURLRequestProtoMsg;
            };
            QueryResolversByURLResponse: {
                typeUrl: string;
                encode(message: _114.QueryResolversByURLResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.QueryResolversByURLResponse;
                fromJSON(object: any): _114.QueryResolversByURLResponse;
                toJSON(message: _114.QueryResolversByURLResponse): unknown;
                fromPartial(object: Partial<_114.QueryResolversByURLResponse>): _114.QueryResolversByURLResponse;
                fromAmino(object: _114.QueryResolversByURLResponseAmino): _114.QueryResolversByURLResponse;
                toAmino(message: _114.QueryResolversByURLResponse): _114.QueryResolversByURLResponseAmino;
                fromAminoMsg(object: _114.QueryResolversByURLResponseAminoMsg): _114.QueryResolversByURLResponse;
                fromProtoMsg(message: _114.QueryResolversByURLResponseProtoMsg): _114.QueryResolversByURLResponse;
                toProto(message: _114.QueryResolversByURLResponse): Uint8Array;
                toProtoMsg(message: _114.QueryResolversByURLResponse): _114.QueryResolversByURLResponseProtoMsg;
            };
            ConvertIRIToHashRequest: {
                typeUrl: string;
                encode(message: _114.ConvertIRIToHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.ConvertIRIToHashRequest;
                fromJSON(object: any): _114.ConvertIRIToHashRequest;
                toJSON(message: _114.ConvertIRIToHashRequest): unknown;
                fromPartial(object: Partial<_114.ConvertIRIToHashRequest>): _114.ConvertIRIToHashRequest;
                fromAmino(object: _114.ConvertIRIToHashRequestAmino): _114.ConvertIRIToHashRequest;
                toAmino(message: _114.ConvertIRIToHashRequest): _114.ConvertIRIToHashRequestAmino;
                fromAminoMsg(object: _114.ConvertIRIToHashRequestAminoMsg): _114.ConvertIRIToHashRequest;
                fromProtoMsg(message: _114.ConvertIRIToHashRequestProtoMsg): _114.ConvertIRIToHashRequest;
                toProto(message: _114.ConvertIRIToHashRequest): Uint8Array;
                toProtoMsg(message: _114.ConvertIRIToHashRequest): _114.ConvertIRIToHashRequestProtoMsg;
            };
            ConvertIRIToHashResponse: {
                typeUrl: string;
                encode(message: _114.ConvertIRIToHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.ConvertIRIToHashResponse;
                fromJSON(object: any): _114.ConvertIRIToHashResponse;
                toJSON(message: _114.ConvertIRIToHashResponse): unknown;
                fromPartial(object: Partial<_114.ConvertIRIToHashResponse>): _114.ConvertIRIToHashResponse;
                fromAmino(object: _114.ConvertIRIToHashResponseAmino): _114.ConvertIRIToHashResponse;
                toAmino(message: _114.ConvertIRIToHashResponse): _114.ConvertIRIToHashResponseAmino;
                fromAminoMsg(object: _114.ConvertIRIToHashResponseAminoMsg): _114.ConvertIRIToHashResponse;
                fromProtoMsg(message: _114.ConvertIRIToHashResponseProtoMsg): _114.ConvertIRIToHashResponse;
                toProto(message: _114.ConvertIRIToHashResponse): Uint8Array;
                toProtoMsg(message: _114.ConvertIRIToHashResponse): _114.ConvertIRIToHashResponseProtoMsg;
            };
            ConvertHashToIRIRequest: {
                typeUrl: string;
                encode(message: _114.ConvertHashToIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.ConvertHashToIRIRequest;
                fromJSON(object: any): _114.ConvertHashToIRIRequest;
                toJSON(message: _114.ConvertHashToIRIRequest): unknown;
                fromPartial(object: Partial<_114.ConvertHashToIRIRequest>): _114.ConvertHashToIRIRequest;
                fromAmino(object: _114.ConvertHashToIRIRequestAmino): _114.ConvertHashToIRIRequest;
                toAmino(message: _114.ConvertHashToIRIRequest): _114.ConvertHashToIRIRequestAmino;
                fromAminoMsg(object: _114.ConvertHashToIRIRequestAminoMsg): _114.ConvertHashToIRIRequest;
                fromProtoMsg(message: _114.ConvertHashToIRIRequestProtoMsg): _114.ConvertHashToIRIRequest;
                toProto(message: _114.ConvertHashToIRIRequest): Uint8Array;
                toProtoMsg(message: _114.ConvertHashToIRIRequest): _114.ConvertHashToIRIRequestProtoMsg;
            };
            ConvertHashToIRIResponse: {
                typeUrl: string;
                encode(message: _114.ConvertHashToIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.ConvertHashToIRIResponse;
                fromJSON(object: any): _114.ConvertHashToIRIResponse;
                toJSON(message: _114.ConvertHashToIRIResponse): unknown;
                fromPartial(object: Partial<_114.ConvertHashToIRIResponse>): _114.ConvertHashToIRIResponse;
                fromAmino(object: _114.ConvertHashToIRIResponseAmino): _114.ConvertHashToIRIResponse;
                toAmino(message: _114.ConvertHashToIRIResponse): _114.ConvertHashToIRIResponseAmino;
                fromAminoMsg(object: _114.ConvertHashToIRIResponseAminoMsg): _114.ConvertHashToIRIResponse;
                fromProtoMsg(message: _114.ConvertHashToIRIResponseProtoMsg): _114.ConvertHashToIRIResponse;
                toProto(message: _114.ConvertHashToIRIResponse): Uint8Array;
                toProtoMsg(message: _114.ConvertHashToIRIResponse): _114.ConvertHashToIRIResponseProtoMsg;
            };
            AnchorInfo: {
                typeUrl: string;
                encode(message: _114.AnchorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.AnchorInfo;
                fromJSON(object: any): _114.AnchorInfo;
                toJSON(message: _114.AnchorInfo): unknown;
                fromPartial(object: Partial<_114.AnchorInfo>): _114.AnchorInfo;
                fromAmino(object: _114.AnchorInfoAmino): _114.AnchorInfo;
                toAmino(message: _114.AnchorInfo): _114.AnchorInfoAmino;
                fromAminoMsg(object: _114.AnchorInfoAminoMsg): _114.AnchorInfo;
                fromProtoMsg(message: _114.AnchorInfoProtoMsg): _114.AnchorInfo;
                toProto(message: _114.AnchorInfo): Uint8Array;
                toProtoMsg(message: _114.AnchorInfo): _114.AnchorInfoProtoMsg;
            };
            AttestationInfo: {
                typeUrl: string;
                encode(message: _114.AttestationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.AttestationInfo;
                fromJSON(object: any): _114.AttestationInfo;
                toJSON(message: _114.AttestationInfo): unknown;
                fromPartial(object: Partial<_114.AttestationInfo>): _114.AttestationInfo;
                fromAmino(object: _114.AttestationInfoAmino): _114.AttestationInfo;
                toAmino(message: _114.AttestationInfo): _114.AttestationInfoAmino;
                fromAminoMsg(object: _114.AttestationInfoAminoMsg): _114.AttestationInfo;
                fromProtoMsg(message: _114.AttestationInfoProtoMsg): _114.AttestationInfo;
                toProto(message: _114.AttestationInfo): Uint8Array;
                toProtoMsg(message: _114.AttestationInfo): _114.AttestationInfoProtoMsg;
            };
            ResolverInfo: {
                typeUrl: string;
                encode(message: _114.ResolverInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _114.ResolverInfo;
                fromJSON(object: any): _114.ResolverInfo;
                toJSON(message: _114.ResolverInfo): unknown;
                fromPartial(object: Partial<_114.ResolverInfo>): _114.ResolverInfo;
                fromAmino(object: _114.ResolverInfoAmino): _114.ResolverInfo;
                toAmino(message: _114.ResolverInfo): _114.ResolverInfoAmino;
                fromAminoMsg(object: _114.ResolverInfoAminoMsg): _114.ResolverInfo;
                fromProtoMsg(message: _114.ResolverInfoProtoMsg): _114.ResolverInfo;
                toProto(message: _114.ResolverInfo): Uint8Array;
                toProtoMsg(message: _114.ResolverInfo): _114.ResolverInfoProtoMsg;
            };
            EventAnchor: {
                typeUrl: string;
                encode(message: _113.EventAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _113.EventAnchor;
                fromJSON(object: any): _113.EventAnchor;
                toJSON(message: _113.EventAnchor): unknown;
                fromPartial(object: Partial<_113.EventAnchor>): _113.EventAnchor;
                fromAmino(object: _113.EventAnchorAmino): _113.EventAnchor;
                toAmino(message: _113.EventAnchor): _113.EventAnchorAmino;
                fromAminoMsg(object: _113.EventAnchorAminoMsg): _113.EventAnchor;
                fromProtoMsg(message: _113.EventAnchorProtoMsg): _113.EventAnchor;
                toProto(message: _113.EventAnchor): Uint8Array;
                toProtoMsg(message: _113.EventAnchor): _113.EventAnchorProtoMsg;
            };
            EventAttest: {
                typeUrl: string;
                encode(message: _113.EventAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _113.EventAttest;
                fromJSON(object: any): _113.EventAttest;
                toJSON(message: _113.EventAttest): unknown;
                fromPartial(object: Partial<_113.EventAttest>): _113.EventAttest;
                fromAmino(object: _113.EventAttestAmino): _113.EventAttest;
                toAmino(message: _113.EventAttest): _113.EventAttestAmino;
                fromAminoMsg(object: _113.EventAttestAminoMsg): _113.EventAttest;
                fromProtoMsg(message: _113.EventAttestProtoMsg): _113.EventAttest;
                toProto(message: _113.EventAttest): Uint8Array;
                toProtoMsg(message: _113.EventAttest): _113.EventAttestProtoMsg;
            };
            EventDefineResolver: {
                typeUrl: string;
                encode(message: _113.EventDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _113.EventDefineResolver;
                fromJSON(object: any): _113.EventDefineResolver;
                toJSON(message: _113.EventDefineResolver): unknown;
                fromPartial(object: Partial<_113.EventDefineResolver>): _113.EventDefineResolver;
                fromAmino(object: _113.EventDefineResolverAmino): _113.EventDefineResolver;
                toAmino(message: _113.EventDefineResolver): _113.EventDefineResolverAmino;
                fromAminoMsg(object: _113.EventDefineResolverAminoMsg): _113.EventDefineResolver;
                fromProtoMsg(message: _113.EventDefineResolverProtoMsg): _113.EventDefineResolver;
                toProto(message: _113.EventDefineResolver): Uint8Array;
                toProtoMsg(message: _113.EventDefineResolver): _113.EventDefineResolverProtoMsg;
            };
            EventRegisterResolver: {
                typeUrl: string;
                encode(message: _113.EventRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _113.EventRegisterResolver;
                fromJSON(object: any): _113.EventRegisterResolver;
                toJSON(message: _113.EventRegisterResolver): unknown;
                fromPartial(object: Partial<_113.EventRegisterResolver>): _113.EventRegisterResolver;
                fromAmino(object: _113.EventRegisterResolverAmino): _113.EventRegisterResolver;
                toAmino(message: _113.EventRegisterResolver): _113.EventRegisterResolverAmino;
                fromAminoMsg(object: _113.EventRegisterResolverAminoMsg): _113.EventRegisterResolver;
                fromProtoMsg(message: _113.EventRegisterResolverProtoMsg): _113.EventRegisterResolver;
                toProto(message: _113.EventRegisterResolver): Uint8Array;
                toProtoMsg(message: _113.EventRegisterResolver): _113.EventRegisterResolverProtoMsg;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                MsgClientImpl: typeof _266.MsgClientImpl;
                QueryClientImpl: typeof _260.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    basket(request: _119.QueryBasketRequest): Promise<_119.QueryBasketResponse>;
                    baskets(request?: _119.QueryBasketsRequest | undefined): Promise<_119.QueryBasketsResponse>;
                    basketBalances(request: _119.QueryBasketBalancesRequest): Promise<_119.QueryBasketBalancesResponse>;
                    basketBalance(request: _119.QueryBasketBalanceRequest): Promise<_119.QueryBasketBalanceResponse>;
                    basketFee(request?: _119.QueryBasketFeeRequest | undefined): Promise<_119.QueryBasketFeeResponse>;
                };
                LCDQueryClient: typeof _254.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _121.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _121.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _121.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _121.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _121.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _121.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _121.MsgCreate): {
                            typeUrl: string;
                            value: _121.MsgCreate;
                        };
                        put(value: _121.MsgPut): {
                            typeUrl: string;
                            value: _121.MsgPut;
                        };
                        take(value: _121.MsgTake): {
                            typeUrl: string;
                            value: _121.MsgTake;
                        };
                        updateBasketFee(value: _121.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _121.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _121.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _121.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _121.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _121.MsgUpdateDateCriteria;
                        };
                    };
                    toJSON: {
                        create(value: _121.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _121.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _121.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateBasketFee(value: _121.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateCurator(value: _121.MsgUpdateCurator): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateDateCriteria(value: _121.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _121.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _121.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _121.MsgTake;
                        };
                        updateBasketFee(value: any): {
                            typeUrl: string;
                            value: _121.MsgUpdateBasketFee;
                        };
                        updateCurator(value: any): {
                            typeUrl: string;
                            value: _121.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: any): {
                            typeUrl: string;
                            value: _121.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _121.MsgCreate): {
                            typeUrl: string;
                            value: _121.MsgCreate;
                        };
                        put(value: _121.MsgPut): {
                            typeUrl: string;
                            value: _121.MsgPut;
                        };
                        take(value: _121.MsgTake): {
                            typeUrl: string;
                            value: _121.MsgTake;
                        };
                        updateBasketFee(value: _121.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _121.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _121.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _121.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _121.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _121.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: (message: _121.MsgCreate) => _121.MsgCreateAmino;
                        fromAmino: (object: _121.MsgCreateAmino) => _121.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: (message: _121.MsgPut) => _121.MsgPutAmino;
                        fromAmino: (object: _121.MsgPutAmino) => _121.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: (message: _121.MsgTake) => _121.MsgTakeAmino;
                        fromAmino: (object: _121.MsgTakeAmino) => _121.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: (message: _121.MsgUpdateBasketFee) => _121.MsgUpdateBasketFeeAmino;
                        fromAmino: (object: _121.MsgUpdateBasketFeeAmino) => _121.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: (message: _121.MsgUpdateCurator) => _121.MsgUpdateCuratorAmino;
                        fromAmino: (object: _121.MsgUpdateCuratorAmino) => _121.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: (message: _121.MsgUpdateDateCriteria) => _121.MsgUpdateDateCriteriaAmino;
                        fromAmino: (object: _121.MsgUpdateDateCriteriaAmino) => _121.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    typeUrl: string;
                    encode(message: _122.BasketCredit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _122.BasketCredit;
                    fromJSON(object: any): _122.BasketCredit;
                    toJSON(message: _122.BasketCredit): unknown;
                    fromPartial(object: Partial<_122.BasketCredit>): _122.BasketCredit;
                    fromAmino(object: _122.BasketCreditAmino): _122.BasketCredit;
                    toAmino(message: _122.BasketCredit): _122.BasketCreditAmino;
                    fromAminoMsg(object: _122.BasketCreditAminoMsg): _122.BasketCredit;
                    fromProtoMsg(message: _122.BasketCreditProtoMsg): _122.BasketCredit;
                    toProto(message: _122.BasketCredit): Uint8Array;
                    toProtoMsg(message: _122.BasketCredit): _122.BasketCreditProtoMsg;
                };
                DateCriteria: {
                    typeUrl: string;
                    encode(message: _122.DateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _122.DateCriteria;
                    fromJSON(object: any): _122.DateCriteria;
                    toJSON(message: _122.DateCriteria): unknown;
                    fromPartial(object: Partial<_122.DateCriteria>): _122.DateCriteria;
                    fromAmino(object: _122.DateCriteriaAmino): _122.DateCriteria;
                    toAmino(message: _122.DateCriteria): _122.DateCriteriaAmino;
                    fromAminoMsg(object: _122.DateCriteriaAminoMsg): _122.DateCriteria;
                    fromProtoMsg(message: _122.DateCriteriaProtoMsg): _122.DateCriteria;
                    toProto(message: _122.DateCriteria): Uint8Array;
                    toProtoMsg(message: _122.DateCriteria): _122.DateCriteriaProtoMsg;
                };
                MsgCreate: {
                    typeUrl: string;
                    encode(message: _121.MsgCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgCreate;
                    fromJSON(object: any): _121.MsgCreate;
                    toJSON(message: _121.MsgCreate): unknown;
                    fromPartial(object: Partial<_121.MsgCreate>): _121.MsgCreate;
                    fromAmino(object: _121.MsgCreateAmino): _121.MsgCreate;
                    toAmino(message: _121.MsgCreate): _121.MsgCreateAmino;
                    fromAminoMsg(object: _121.MsgCreateAminoMsg): _121.MsgCreate;
                    toAminoMsg(message: _121.MsgCreate): _121.MsgCreateAminoMsg;
                    fromProtoMsg(message: _121.MsgCreateProtoMsg): _121.MsgCreate;
                    toProto(message: _121.MsgCreate): Uint8Array;
                    toProtoMsg(message: _121.MsgCreate): _121.MsgCreateProtoMsg;
                };
                MsgCreateResponse: {
                    typeUrl: string;
                    encode(message: _121.MsgCreateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgCreateResponse;
                    fromJSON(object: any): _121.MsgCreateResponse;
                    toJSON(message: _121.MsgCreateResponse): unknown;
                    fromPartial(object: Partial<_121.MsgCreateResponse>): _121.MsgCreateResponse;
                    fromAmino(object: _121.MsgCreateResponseAmino): _121.MsgCreateResponse;
                    toAmino(message: _121.MsgCreateResponse): _121.MsgCreateResponseAmino;
                    fromAminoMsg(object: _121.MsgCreateResponseAminoMsg): _121.MsgCreateResponse;
                    fromProtoMsg(message: _121.MsgCreateResponseProtoMsg): _121.MsgCreateResponse;
                    toProto(message: _121.MsgCreateResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgCreateResponse): _121.MsgCreateResponseProtoMsg;
                };
                MsgPut: {
                    typeUrl: string;
                    encode(message: _121.MsgPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgPut;
                    fromJSON(object: any): _121.MsgPut;
                    toJSON(message: _121.MsgPut): unknown;
                    fromPartial(object: Partial<_121.MsgPut>): _121.MsgPut;
                    fromAmino(object: _121.MsgPutAmino): _121.MsgPut;
                    toAmino(message: _121.MsgPut): _121.MsgPutAmino;
                    fromAminoMsg(object: _121.MsgPutAminoMsg): _121.MsgPut;
                    toAminoMsg(message: _121.MsgPut): _121.MsgPutAminoMsg;
                    fromProtoMsg(message: _121.MsgPutProtoMsg): _121.MsgPut;
                    toProto(message: _121.MsgPut): Uint8Array;
                    toProtoMsg(message: _121.MsgPut): _121.MsgPutProtoMsg;
                };
                MsgPutResponse: {
                    typeUrl: string;
                    encode(message: _121.MsgPutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgPutResponse;
                    fromJSON(object: any): _121.MsgPutResponse;
                    toJSON(message: _121.MsgPutResponse): unknown;
                    fromPartial(object: Partial<_121.MsgPutResponse>): _121.MsgPutResponse;
                    fromAmino(object: _121.MsgPutResponseAmino): _121.MsgPutResponse;
                    toAmino(message: _121.MsgPutResponse): _121.MsgPutResponseAmino;
                    fromAminoMsg(object: _121.MsgPutResponseAminoMsg): _121.MsgPutResponse;
                    fromProtoMsg(message: _121.MsgPutResponseProtoMsg): _121.MsgPutResponse;
                    toProto(message: _121.MsgPutResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgPutResponse): _121.MsgPutResponseProtoMsg;
                };
                MsgTake: {
                    typeUrl: string;
                    encode(message: _121.MsgTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgTake;
                    fromJSON(object: any): _121.MsgTake;
                    toJSON(message: _121.MsgTake): unknown;
                    fromPartial(object: Partial<_121.MsgTake>): _121.MsgTake;
                    fromAmino(object: _121.MsgTakeAmino): _121.MsgTake;
                    toAmino(message: _121.MsgTake): _121.MsgTakeAmino;
                    fromAminoMsg(object: _121.MsgTakeAminoMsg): _121.MsgTake;
                    toAminoMsg(message: _121.MsgTake): _121.MsgTakeAminoMsg;
                    fromProtoMsg(message: _121.MsgTakeProtoMsg): _121.MsgTake;
                    toProto(message: _121.MsgTake): Uint8Array;
                    toProtoMsg(message: _121.MsgTake): _121.MsgTakeProtoMsg;
                };
                MsgTakeResponse: {
                    typeUrl: string;
                    encode(message: _121.MsgTakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgTakeResponse;
                    fromJSON(object: any): _121.MsgTakeResponse;
                    toJSON(message: _121.MsgTakeResponse): unknown;
                    fromPartial(object: Partial<_121.MsgTakeResponse>): _121.MsgTakeResponse;
                    fromAmino(object: _121.MsgTakeResponseAmino): _121.MsgTakeResponse;
                    toAmino(message: _121.MsgTakeResponse): _121.MsgTakeResponseAmino;
                    fromAminoMsg(object: _121.MsgTakeResponseAminoMsg): _121.MsgTakeResponse;
                    fromProtoMsg(message: _121.MsgTakeResponseProtoMsg): _121.MsgTakeResponse;
                    toProto(message: _121.MsgTakeResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgTakeResponse): _121.MsgTakeResponseProtoMsg;
                };
                MsgUpdateBasketFee: {
                    typeUrl: string;
                    encode(message: _121.MsgUpdateBasketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgUpdateBasketFee;
                    fromJSON(object: any): _121.MsgUpdateBasketFee;
                    toJSON(message: _121.MsgUpdateBasketFee): unknown;
                    fromPartial(object: Partial<_121.MsgUpdateBasketFee>): _121.MsgUpdateBasketFee;
                    fromAmino(object: _121.MsgUpdateBasketFeeAmino): _121.MsgUpdateBasketFee;
                    toAmino(message: _121.MsgUpdateBasketFee): _121.MsgUpdateBasketFeeAmino;
                    fromAminoMsg(object: _121.MsgUpdateBasketFeeAminoMsg): _121.MsgUpdateBasketFee;
                    toAminoMsg(message: _121.MsgUpdateBasketFee): _121.MsgUpdateBasketFeeAminoMsg;
                    fromProtoMsg(message: _121.MsgUpdateBasketFeeProtoMsg): _121.MsgUpdateBasketFee;
                    toProto(message: _121.MsgUpdateBasketFee): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateBasketFee): _121.MsgUpdateBasketFeeProtoMsg;
                };
                MsgUpdateBasketFeeResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgUpdateBasketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgUpdateBasketFeeResponse;
                    fromJSON(_: any): _121.MsgUpdateBasketFeeResponse;
                    toJSON(_: _121.MsgUpdateBasketFeeResponse): unknown;
                    fromPartial(_: Partial<_121.MsgUpdateBasketFeeResponse>): _121.MsgUpdateBasketFeeResponse;
                    fromAmino(_: _121.MsgUpdateBasketFeeResponseAmino): _121.MsgUpdateBasketFeeResponse;
                    toAmino(_: _121.MsgUpdateBasketFeeResponse): _121.MsgUpdateBasketFeeResponseAmino;
                    fromAminoMsg(object: _121.MsgUpdateBasketFeeResponseAminoMsg): _121.MsgUpdateBasketFeeResponse;
                    fromProtoMsg(message: _121.MsgUpdateBasketFeeResponseProtoMsg): _121.MsgUpdateBasketFeeResponse;
                    toProto(message: _121.MsgUpdateBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateBasketFeeResponse): _121.MsgUpdateBasketFeeResponseProtoMsg;
                };
                MsgUpdateCurator: {
                    typeUrl: string;
                    encode(message: _121.MsgUpdateCurator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgUpdateCurator;
                    fromJSON(object: any): _121.MsgUpdateCurator;
                    toJSON(message: _121.MsgUpdateCurator): unknown;
                    fromPartial(object: Partial<_121.MsgUpdateCurator>): _121.MsgUpdateCurator;
                    fromAmino(object: _121.MsgUpdateCuratorAmino): _121.MsgUpdateCurator;
                    toAmino(message: _121.MsgUpdateCurator): _121.MsgUpdateCuratorAmino;
                    fromAminoMsg(object: _121.MsgUpdateCuratorAminoMsg): _121.MsgUpdateCurator;
                    toAminoMsg(message: _121.MsgUpdateCurator): _121.MsgUpdateCuratorAminoMsg;
                    fromProtoMsg(message: _121.MsgUpdateCuratorProtoMsg): _121.MsgUpdateCurator;
                    toProto(message: _121.MsgUpdateCurator): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateCurator): _121.MsgUpdateCuratorProtoMsg;
                };
                MsgUpdateCuratorResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgUpdateCuratorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgUpdateCuratorResponse;
                    fromJSON(_: any): _121.MsgUpdateCuratorResponse;
                    toJSON(_: _121.MsgUpdateCuratorResponse): unknown;
                    fromPartial(_: Partial<_121.MsgUpdateCuratorResponse>): _121.MsgUpdateCuratorResponse;
                    fromAmino(_: _121.MsgUpdateCuratorResponseAmino): _121.MsgUpdateCuratorResponse;
                    toAmino(_: _121.MsgUpdateCuratorResponse): _121.MsgUpdateCuratorResponseAmino;
                    fromAminoMsg(object: _121.MsgUpdateCuratorResponseAminoMsg): _121.MsgUpdateCuratorResponse;
                    fromProtoMsg(message: _121.MsgUpdateCuratorResponseProtoMsg): _121.MsgUpdateCuratorResponse;
                    toProto(message: _121.MsgUpdateCuratorResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateCuratorResponse): _121.MsgUpdateCuratorResponseProtoMsg;
                };
                MsgUpdateDateCriteria: {
                    typeUrl: string;
                    encode(message: _121.MsgUpdateDateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgUpdateDateCriteria;
                    fromJSON(object: any): _121.MsgUpdateDateCriteria;
                    toJSON(message: _121.MsgUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_121.MsgUpdateDateCriteria>): _121.MsgUpdateDateCriteria;
                    fromAmino(object: _121.MsgUpdateDateCriteriaAmino): _121.MsgUpdateDateCriteria;
                    toAmino(message: _121.MsgUpdateDateCriteria): _121.MsgUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _121.MsgUpdateDateCriteriaAminoMsg): _121.MsgUpdateDateCriteria;
                    toAminoMsg(message: _121.MsgUpdateDateCriteria): _121.MsgUpdateDateCriteriaAminoMsg;
                    fromProtoMsg(message: _121.MsgUpdateDateCriteriaProtoMsg): _121.MsgUpdateDateCriteria;
                    toProto(message: _121.MsgUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateDateCriteria): _121.MsgUpdateDateCriteriaProtoMsg;
                };
                MsgUpdateDateCriteriaResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgUpdateDateCriteriaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _121.MsgUpdateDateCriteriaResponse;
                    fromJSON(_: any): _121.MsgUpdateDateCriteriaResponse;
                    toJSON(_: _121.MsgUpdateDateCriteriaResponse): unknown;
                    fromPartial(_: Partial<_121.MsgUpdateDateCriteriaResponse>): _121.MsgUpdateDateCriteriaResponse;
                    fromAmino(_: _121.MsgUpdateDateCriteriaResponseAmino): _121.MsgUpdateDateCriteriaResponse;
                    toAmino(_: _121.MsgUpdateDateCriteriaResponse): _121.MsgUpdateDateCriteriaResponseAmino;
                    fromAminoMsg(object: _121.MsgUpdateDateCriteriaResponseAminoMsg): _121.MsgUpdateDateCriteriaResponse;
                    fromProtoMsg(message: _121.MsgUpdateDateCriteriaResponseProtoMsg): _121.MsgUpdateDateCriteriaResponse;
                    toProto(message: _121.MsgUpdateDateCriteriaResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateDateCriteriaResponse): _121.MsgUpdateDateCriteriaResponseProtoMsg;
                };
                Basket: {
                    typeUrl: string;
                    encode(message: _120.Basket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _120.Basket;
                    fromJSON(object: any): _120.Basket;
                    toJSON(message: _120.Basket): unknown;
                    fromPartial(object: Partial<_120.Basket>): _120.Basket;
                    fromAmino(object: _120.BasketAmino): _120.Basket;
                    toAmino(message: _120.Basket): _120.BasketAmino;
                    fromAminoMsg(object: _120.BasketAminoMsg): _120.Basket;
                    fromProtoMsg(message: _120.BasketProtoMsg): _120.Basket;
                    toProto(message: _120.Basket): Uint8Array;
                    toProtoMsg(message: _120.Basket): _120.BasketProtoMsg;
                };
                BasketClass: {
                    typeUrl: string;
                    encode(message: _120.BasketClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _120.BasketClass;
                    fromJSON(object: any): _120.BasketClass;
                    toJSON(message: _120.BasketClass): unknown;
                    fromPartial(object: Partial<_120.BasketClass>): _120.BasketClass;
                    fromAmino(object: _120.BasketClassAmino): _120.BasketClass;
                    toAmino(message: _120.BasketClass): _120.BasketClassAmino;
                    fromAminoMsg(object: _120.BasketClassAminoMsg): _120.BasketClass;
                    fromProtoMsg(message: _120.BasketClassProtoMsg): _120.BasketClass;
                    toProto(message: _120.BasketClass): Uint8Array;
                    toProtoMsg(message: _120.BasketClass): _120.BasketClassProtoMsg;
                };
                BasketBalance: {
                    typeUrl: string;
                    encode(message: _120.BasketBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _120.BasketBalance;
                    fromJSON(object: any): _120.BasketBalance;
                    toJSON(message: _120.BasketBalance): unknown;
                    fromPartial(object: Partial<_120.BasketBalance>): _120.BasketBalance;
                    fromAmino(object: _120.BasketBalanceAmino): _120.BasketBalance;
                    toAmino(message: _120.BasketBalance): _120.BasketBalanceAmino;
                    fromAminoMsg(object: _120.BasketBalanceAminoMsg): _120.BasketBalance;
                    fromProtoMsg(message: _120.BasketBalanceProtoMsg): _120.BasketBalance;
                    toProto(message: _120.BasketBalance): Uint8Array;
                    toProtoMsg(message: _120.BasketBalance): _120.BasketBalanceProtoMsg;
                };
                BasketFee: {
                    typeUrl: string;
                    encode(message: _120.BasketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _120.BasketFee;
                    fromJSON(object: any): _120.BasketFee;
                    toJSON(message: _120.BasketFee): unknown;
                    fromPartial(object: Partial<_120.BasketFee>): _120.BasketFee;
                    fromAmino(object: _120.BasketFeeAmino): _120.BasketFee;
                    toAmino(message: _120.BasketFee): _120.BasketFeeAmino;
                    fromAminoMsg(object: _120.BasketFeeAminoMsg): _120.BasketFee;
                    fromProtoMsg(message: _120.BasketFeeProtoMsg): _120.BasketFee;
                    toProto(message: _120.BasketFee): Uint8Array;
                    toProtoMsg(message: _120.BasketFee): _120.BasketFeeProtoMsg;
                };
                QueryBasketRequest: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketRequest;
                    fromJSON(object: any): _119.QueryBasketRequest;
                    toJSON(message: _119.QueryBasketRequest): unknown;
                    fromPartial(object: Partial<_119.QueryBasketRequest>): _119.QueryBasketRequest;
                    fromAmino(object: _119.QueryBasketRequestAmino): _119.QueryBasketRequest;
                    toAmino(message: _119.QueryBasketRequest): _119.QueryBasketRequestAmino;
                    fromAminoMsg(object: _119.QueryBasketRequestAminoMsg): _119.QueryBasketRequest;
                    fromProtoMsg(message: _119.QueryBasketRequestProtoMsg): _119.QueryBasketRequest;
                    toProto(message: _119.QueryBasketRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketRequest): _119.QueryBasketRequestProtoMsg;
                };
                QueryBasketResponse: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketResponse;
                    fromJSON(object: any): _119.QueryBasketResponse;
                    toJSON(message: _119.QueryBasketResponse): unknown;
                    fromPartial(object: Partial<_119.QueryBasketResponse>): _119.QueryBasketResponse;
                    fromAmino(object: _119.QueryBasketResponseAmino): _119.QueryBasketResponse;
                    toAmino(message: _119.QueryBasketResponse): _119.QueryBasketResponseAmino;
                    fromAminoMsg(object: _119.QueryBasketResponseAminoMsg): _119.QueryBasketResponse;
                    fromProtoMsg(message: _119.QueryBasketResponseProtoMsg): _119.QueryBasketResponse;
                    toProto(message: _119.QueryBasketResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketResponse): _119.QueryBasketResponseProtoMsg;
                };
                QueryBasketsRequest: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketsRequest;
                    fromJSON(object: any): _119.QueryBasketsRequest;
                    toJSON(message: _119.QueryBasketsRequest): unknown;
                    fromPartial(object: Partial<_119.QueryBasketsRequest>): _119.QueryBasketsRequest;
                    fromAmino(object: _119.QueryBasketsRequestAmino): _119.QueryBasketsRequest;
                    toAmino(message: _119.QueryBasketsRequest): _119.QueryBasketsRequestAmino;
                    fromAminoMsg(object: _119.QueryBasketsRequestAminoMsg): _119.QueryBasketsRequest;
                    fromProtoMsg(message: _119.QueryBasketsRequestProtoMsg): _119.QueryBasketsRequest;
                    toProto(message: _119.QueryBasketsRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketsRequest): _119.QueryBasketsRequestProtoMsg;
                };
                QueryBasketsResponse: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketsResponse;
                    fromJSON(object: any): _119.QueryBasketsResponse;
                    toJSON(message: _119.QueryBasketsResponse): unknown;
                    fromPartial(object: Partial<_119.QueryBasketsResponse>): _119.QueryBasketsResponse;
                    fromAmino(object: _119.QueryBasketsResponseAmino): _119.QueryBasketsResponse;
                    toAmino(message: _119.QueryBasketsResponse): _119.QueryBasketsResponseAmino;
                    fromAminoMsg(object: _119.QueryBasketsResponseAminoMsg): _119.QueryBasketsResponse;
                    fromProtoMsg(message: _119.QueryBasketsResponseProtoMsg): _119.QueryBasketsResponse;
                    toProto(message: _119.QueryBasketsResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketsResponse): _119.QueryBasketsResponseProtoMsg;
                };
                QueryBasketBalancesRequest: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketBalancesRequest;
                    fromJSON(object: any): _119.QueryBasketBalancesRequest;
                    toJSON(message: _119.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: Partial<_119.QueryBasketBalancesRequest>): _119.QueryBasketBalancesRequest;
                    fromAmino(object: _119.QueryBasketBalancesRequestAmino): _119.QueryBasketBalancesRequest;
                    toAmino(message: _119.QueryBasketBalancesRequest): _119.QueryBasketBalancesRequestAmino;
                    fromAminoMsg(object: _119.QueryBasketBalancesRequestAminoMsg): _119.QueryBasketBalancesRequest;
                    fromProtoMsg(message: _119.QueryBasketBalancesRequestProtoMsg): _119.QueryBasketBalancesRequest;
                    toProto(message: _119.QueryBasketBalancesRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketBalancesRequest): _119.QueryBasketBalancesRequestProtoMsg;
                };
                QueryBasketBalancesResponse: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketBalancesResponse;
                    fromJSON(object: any): _119.QueryBasketBalancesResponse;
                    toJSON(message: _119.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: Partial<_119.QueryBasketBalancesResponse>): _119.QueryBasketBalancesResponse;
                    fromAmino(object: _119.QueryBasketBalancesResponseAmino): _119.QueryBasketBalancesResponse;
                    toAmino(message: _119.QueryBasketBalancesResponse): _119.QueryBasketBalancesResponseAmino;
                    fromAminoMsg(object: _119.QueryBasketBalancesResponseAminoMsg): _119.QueryBasketBalancesResponse;
                    fromProtoMsg(message: _119.QueryBasketBalancesResponseProtoMsg): _119.QueryBasketBalancesResponse;
                    toProto(message: _119.QueryBasketBalancesResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketBalancesResponse): _119.QueryBasketBalancesResponseProtoMsg;
                };
                QueryBasketBalanceRequest: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketBalanceRequest;
                    fromJSON(object: any): _119.QueryBasketBalanceRequest;
                    toJSON(message: _119.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: Partial<_119.QueryBasketBalanceRequest>): _119.QueryBasketBalanceRequest;
                    fromAmino(object: _119.QueryBasketBalanceRequestAmino): _119.QueryBasketBalanceRequest;
                    toAmino(message: _119.QueryBasketBalanceRequest): _119.QueryBasketBalanceRequestAmino;
                    fromAminoMsg(object: _119.QueryBasketBalanceRequestAminoMsg): _119.QueryBasketBalanceRequest;
                    fromProtoMsg(message: _119.QueryBasketBalanceRequestProtoMsg): _119.QueryBasketBalanceRequest;
                    toProto(message: _119.QueryBasketBalanceRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketBalanceRequest): _119.QueryBasketBalanceRequestProtoMsg;
                };
                QueryBasketBalanceResponse: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketBalanceResponse;
                    fromJSON(object: any): _119.QueryBasketBalanceResponse;
                    toJSON(message: _119.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: Partial<_119.QueryBasketBalanceResponse>): _119.QueryBasketBalanceResponse;
                    fromAmino(object: _119.QueryBasketBalanceResponseAmino): _119.QueryBasketBalanceResponse;
                    toAmino(message: _119.QueryBasketBalanceResponse): _119.QueryBasketBalanceResponseAmino;
                    fromAminoMsg(object: _119.QueryBasketBalanceResponseAminoMsg): _119.QueryBasketBalanceResponse;
                    fromProtoMsg(message: _119.QueryBasketBalanceResponseProtoMsg): _119.QueryBasketBalanceResponse;
                    toProto(message: _119.QueryBasketBalanceResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketBalanceResponse): _119.QueryBasketBalanceResponseProtoMsg;
                };
                BasketInfo: {
                    typeUrl: string;
                    encode(message: _119.BasketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.BasketInfo;
                    fromJSON(object: any): _119.BasketInfo;
                    toJSON(message: _119.BasketInfo): unknown;
                    fromPartial(object: Partial<_119.BasketInfo>): _119.BasketInfo;
                    fromAmino(object: _119.BasketInfoAmino): _119.BasketInfo;
                    toAmino(message: _119.BasketInfo): _119.BasketInfoAmino;
                    fromAminoMsg(object: _119.BasketInfoAminoMsg): _119.BasketInfo;
                    fromProtoMsg(message: _119.BasketInfoProtoMsg): _119.BasketInfo;
                    toProto(message: _119.BasketInfo): Uint8Array;
                    toProtoMsg(message: _119.BasketInfo): _119.BasketInfoProtoMsg;
                };
                BasketBalanceInfo: {
                    typeUrl: string;
                    encode(message: _119.BasketBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.BasketBalanceInfo;
                    fromJSON(object: any): _119.BasketBalanceInfo;
                    toJSON(message: _119.BasketBalanceInfo): unknown;
                    fromPartial(object: Partial<_119.BasketBalanceInfo>): _119.BasketBalanceInfo;
                    fromAmino(object: _119.BasketBalanceInfoAmino): _119.BasketBalanceInfo;
                    toAmino(message: _119.BasketBalanceInfo): _119.BasketBalanceInfoAmino;
                    fromAminoMsg(object: _119.BasketBalanceInfoAminoMsg): _119.BasketBalanceInfo;
                    fromProtoMsg(message: _119.BasketBalanceInfoProtoMsg): _119.BasketBalanceInfo;
                    toProto(message: _119.BasketBalanceInfo): Uint8Array;
                    toProtoMsg(message: _119.BasketBalanceInfo): _119.BasketBalanceInfoProtoMsg;
                };
                QueryBasketFeeRequest: {
                    typeUrl: string;
                    encode(_: _119.QueryBasketFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketFeeRequest;
                    fromJSON(_: any): _119.QueryBasketFeeRequest;
                    toJSON(_: _119.QueryBasketFeeRequest): unknown;
                    fromPartial(_: Partial<_119.QueryBasketFeeRequest>): _119.QueryBasketFeeRequest;
                    fromAmino(_: _119.QueryBasketFeeRequestAmino): _119.QueryBasketFeeRequest;
                    toAmino(_: _119.QueryBasketFeeRequest): _119.QueryBasketFeeRequestAmino;
                    fromAminoMsg(object: _119.QueryBasketFeeRequestAminoMsg): _119.QueryBasketFeeRequest;
                    fromProtoMsg(message: _119.QueryBasketFeeRequestProtoMsg): _119.QueryBasketFeeRequest;
                    toProto(message: _119.QueryBasketFeeRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketFeeRequest): _119.QueryBasketFeeRequestProtoMsg;
                };
                QueryBasketFeeResponse: {
                    typeUrl: string;
                    encode(message: _119.QueryBasketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _119.QueryBasketFeeResponse;
                    fromJSON(object: any): _119.QueryBasketFeeResponse;
                    toJSON(message: _119.QueryBasketFeeResponse): unknown;
                    fromPartial(object: Partial<_119.QueryBasketFeeResponse>): _119.QueryBasketFeeResponse;
                    fromAmino(object: _119.QueryBasketFeeResponseAmino): _119.QueryBasketFeeResponse;
                    toAmino(message: _119.QueryBasketFeeResponse): _119.QueryBasketFeeResponseAmino;
                    fromAminoMsg(object: _119.QueryBasketFeeResponseAminoMsg): _119.QueryBasketFeeResponse;
                    fromProtoMsg(message: _119.QueryBasketFeeResponseProtoMsg): _119.QueryBasketFeeResponse;
                    toProto(message: _119.QueryBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryBasketFeeResponse): _119.QueryBasketFeeResponseProtoMsg;
                };
                EventCreate: {
                    typeUrl: string;
                    encode(message: _118.EventCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _118.EventCreate;
                    fromJSON(object: any): _118.EventCreate;
                    toJSON(message: _118.EventCreate): unknown;
                    fromPartial(object: Partial<_118.EventCreate>): _118.EventCreate;
                    fromAmino(object: _118.EventCreateAmino): _118.EventCreate;
                    toAmino(message: _118.EventCreate): _118.EventCreateAmino;
                    fromAminoMsg(object: _118.EventCreateAminoMsg): _118.EventCreate;
                    fromProtoMsg(message: _118.EventCreateProtoMsg): _118.EventCreate;
                    toProto(message: _118.EventCreate): Uint8Array;
                    toProtoMsg(message: _118.EventCreate): _118.EventCreateProtoMsg;
                };
                EventPut: {
                    typeUrl: string;
                    encode(message: _118.EventPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _118.EventPut;
                    fromJSON(object: any): _118.EventPut;
                    toJSON(message: _118.EventPut): unknown;
                    fromPartial(object: Partial<_118.EventPut>): _118.EventPut;
                    fromAmino(object: _118.EventPutAmino): _118.EventPut;
                    toAmino(message: _118.EventPut): _118.EventPutAmino;
                    fromAminoMsg(object: _118.EventPutAminoMsg): _118.EventPut;
                    fromProtoMsg(message: _118.EventPutProtoMsg): _118.EventPut;
                    toProto(message: _118.EventPut): Uint8Array;
                    toProtoMsg(message: _118.EventPut): _118.EventPutProtoMsg;
                };
                EventTake: {
                    typeUrl: string;
                    encode(message: _118.EventTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _118.EventTake;
                    fromJSON(object: any): _118.EventTake;
                    toJSON(message: _118.EventTake): unknown;
                    fromPartial(object: Partial<_118.EventTake>): _118.EventTake;
                    fromAmino(object: _118.EventTakeAmino): _118.EventTake;
                    toAmino(message: _118.EventTake): _118.EventTakeAmino;
                    fromAminoMsg(object: _118.EventTakeAminoMsg): _118.EventTake;
                    fromProtoMsg(message: _118.EventTakeProtoMsg): _118.EventTake;
                    toProto(message: _118.EventTake): Uint8Array;
                    toProtoMsg(message: _118.EventTake): _118.EventTakeProtoMsg;
                };
                EventUpdateCurator: {
                    typeUrl: string;
                    encode(message: _118.EventUpdateCurator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _118.EventUpdateCurator;
                    fromJSON(object: any): _118.EventUpdateCurator;
                    toJSON(message: _118.EventUpdateCurator): unknown;
                    fromPartial(object: Partial<_118.EventUpdateCurator>): _118.EventUpdateCurator;
                    fromAmino(object: _118.EventUpdateCuratorAmino): _118.EventUpdateCurator;
                    toAmino(message: _118.EventUpdateCurator): _118.EventUpdateCuratorAmino;
                    fromAminoMsg(object: _118.EventUpdateCuratorAminoMsg): _118.EventUpdateCurator;
                    fromProtoMsg(message: _118.EventUpdateCuratorProtoMsg): _118.EventUpdateCurator;
                    toProto(message: _118.EventUpdateCurator): Uint8Array;
                    toProtoMsg(message: _118.EventUpdateCurator): _118.EventUpdateCuratorProtoMsg;
                };
                EventUpdateDateCriteria: {
                    typeUrl: string;
                    encode(message: _118.EventUpdateDateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _118.EventUpdateDateCriteria;
                    fromJSON(object: any): _118.EventUpdateDateCriteria;
                    toJSON(message: _118.EventUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_118.EventUpdateDateCriteria>): _118.EventUpdateDateCriteria;
                    fromAmino(object: _118.EventUpdateDateCriteriaAmino): _118.EventUpdateDateCriteria;
                    toAmino(message: _118.EventUpdateDateCriteria): _118.EventUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _118.EventUpdateDateCriteriaAminoMsg): _118.EventUpdateDateCriteria;
                    fromProtoMsg(message: _118.EventUpdateDateCriteriaProtoMsg): _118.EventUpdateDateCriteria;
                    toProto(message: _118.EventUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _118.EventUpdateDateCriteria): _118.EventUpdateDateCriteriaProtoMsg;
                };
            };
        }
        namespace marketplace {
            const v1: {
                MsgClientImpl: typeof _267.MsgClientImpl;
                QueryClientImpl: typeof _261.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    sellOrder(request: _124.QuerySellOrderRequest): Promise<_124.QuerySellOrderResponse>;
                    sellOrders(request?: _124.QuerySellOrdersRequest | undefined): Promise<_124.QuerySellOrdersResponse>;
                    sellOrdersByBatch(request: _124.QuerySellOrdersByBatchRequest): Promise<_124.QuerySellOrdersByBatchResponse>;
                    sellOrdersBySeller(request: _124.QuerySellOrdersBySellerRequest): Promise<_124.QuerySellOrdersBySellerResponse>;
                    allowedDenoms(request?: _124.QueryAllowedDenomsRequest | undefined): Promise<_124.QueryAllowedDenomsResponse>;
                };
                LCDQueryClient: typeof _255.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _126.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _126.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _126.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _126.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _126.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _126.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _126.MsgSell): {
                            typeUrl: string;
                            value: _126.MsgSell;
                        };
                        updateSellOrders(value: _126.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _126.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _126.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _126.MsgCancelSellOrder;
                        };
                        buyDirect(value: _126.MsgBuyDirect): {
                            typeUrl: string;
                            value: _126.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _126.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _126.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _126.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _126.MsgRemoveAllowedDenom;
                        };
                    };
                    toJSON: {
                        sell(value: _126.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _126.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _126.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _126.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                        addAllowedDenom(value: _126.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                        removeAllowedDenom(value: _126.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _126.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _126.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _126.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _126.MsgBuyDirect;
                        };
                        addAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _126.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _126.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _126.MsgSell): {
                            typeUrl: string;
                            value: _126.MsgSell;
                        };
                        updateSellOrders(value: _126.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _126.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _126.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _126.MsgCancelSellOrder;
                        };
                        buyDirect(value: _126.MsgBuyDirect): {
                            typeUrl: string;
                            value: _126.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _126.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _126.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _126.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _126.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: (message: _126.MsgSell) => _126.MsgSellAmino;
                        fromAmino: (object: _126.MsgSellAmino) => _126.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: (message: _126.MsgUpdateSellOrders) => _126.MsgUpdateSellOrdersAmino;
                        fromAmino: (object: _126.MsgUpdateSellOrdersAmino) => _126.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: (message: _126.MsgCancelSellOrder) => _126.MsgCancelSellOrderAmino;
                        fromAmino: (object: _126.MsgCancelSellOrderAmino) => _126.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: (message: _126.MsgBuyDirect) => _126.MsgBuyDirectAmino;
                        fromAmino: (object: _126.MsgBuyDirectAmino) => _126.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _126.MsgAddAllowedDenom) => _126.MsgAddAllowedDenomAmino;
                        fromAmino: (object: _126.MsgAddAllowedDenomAmino) => _126.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _126.MsgRemoveAllowedDenom) => _126.MsgRemoveAllowedDenomAmino;
                        fromAmino: (object: _126.MsgRemoveAllowedDenomAmino) => _126.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    typeUrl: string;
                    encode(message: _127.AllowDenomProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _127.AllowDenomProposal;
                    fromJSON(object: any): _127.AllowDenomProposal;
                    toJSON(message: _127.AllowDenomProposal): unknown;
                    fromPartial(object: Partial<_127.AllowDenomProposal>): _127.AllowDenomProposal;
                    fromAmino(object: _127.AllowDenomProposalAmino): _127.AllowDenomProposal;
                    toAmino(message: _127.AllowDenomProposal): _127.AllowDenomProposalAmino;
                    fromAminoMsg(object: _127.AllowDenomProposalAminoMsg): _127.AllowDenomProposal;
                    fromProtoMsg(message: _127.AllowDenomProposalProtoMsg): _127.AllowDenomProposal;
                    toProto(message: _127.AllowDenomProposal): Uint8Array;
                    toProtoMsg(message: _127.AllowDenomProposal): _127.AllowDenomProposalProtoMsg;
                };
                MsgSell: {
                    typeUrl: string;
                    encode(message: _126.MsgSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgSell;
                    fromJSON(object: any): _126.MsgSell;
                    toJSON(message: _126.MsgSell): unknown;
                    fromPartial(object: Partial<_126.MsgSell>): _126.MsgSell;
                    fromAmino(object: _126.MsgSellAmino): _126.MsgSell;
                    toAmino(message: _126.MsgSell): _126.MsgSellAmino;
                    fromAminoMsg(object: _126.MsgSellAminoMsg): _126.MsgSell;
                    toAminoMsg(message: _126.MsgSell): _126.MsgSellAminoMsg;
                    fromProtoMsg(message: _126.MsgSellProtoMsg): _126.MsgSell;
                    toProto(message: _126.MsgSell): Uint8Array;
                    toProtoMsg(message: _126.MsgSell): _126.MsgSellProtoMsg;
                };
                MsgSell_Order: {
                    typeUrl: string;
                    encode(message: _126.MsgSell_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgSell_Order;
                    fromJSON(object: any): _126.MsgSell_Order;
                    toJSON(message: _126.MsgSell_Order): unknown;
                    fromPartial(object: Partial<_126.MsgSell_Order>): _126.MsgSell_Order;
                    fromAmino(object: _126.MsgSell_OrderAmino): _126.MsgSell_Order;
                    toAmino(message: _126.MsgSell_Order): _126.MsgSell_OrderAmino;
                    fromAminoMsg(object: _126.MsgSell_OrderAminoMsg): _126.MsgSell_Order;
                    fromProtoMsg(message: _126.MsgSell_OrderProtoMsg): _126.MsgSell_Order;
                    toProto(message: _126.MsgSell_Order): Uint8Array;
                    toProtoMsg(message: _126.MsgSell_Order): _126.MsgSell_OrderProtoMsg;
                };
                MsgSellResponse: {
                    typeUrl: string;
                    encode(message: _126.MsgSellResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgSellResponse;
                    fromJSON(object: any): _126.MsgSellResponse;
                    toJSON(message: _126.MsgSellResponse): unknown;
                    fromPartial(object: Partial<_126.MsgSellResponse>): _126.MsgSellResponse;
                    fromAmino(object: _126.MsgSellResponseAmino): _126.MsgSellResponse;
                    toAmino(message: _126.MsgSellResponse): _126.MsgSellResponseAmino;
                    fromAminoMsg(object: _126.MsgSellResponseAminoMsg): _126.MsgSellResponse;
                    fromProtoMsg(message: _126.MsgSellResponseProtoMsg): _126.MsgSellResponse;
                    toProto(message: _126.MsgSellResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgSellResponse): _126.MsgSellResponseProtoMsg;
                };
                MsgUpdateSellOrders: {
                    typeUrl: string;
                    encode(message: _126.MsgUpdateSellOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgUpdateSellOrders;
                    fromJSON(object: any): _126.MsgUpdateSellOrders;
                    toJSON(message: _126.MsgUpdateSellOrders): unknown;
                    fromPartial(object: Partial<_126.MsgUpdateSellOrders>): _126.MsgUpdateSellOrders;
                    fromAmino(object: _126.MsgUpdateSellOrdersAmino): _126.MsgUpdateSellOrders;
                    toAmino(message: _126.MsgUpdateSellOrders): _126.MsgUpdateSellOrdersAmino;
                    fromAminoMsg(object: _126.MsgUpdateSellOrdersAminoMsg): _126.MsgUpdateSellOrders;
                    toAminoMsg(message: _126.MsgUpdateSellOrders): _126.MsgUpdateSellOrdersAminoMsg;
                    fromProtoMsg(message: _126.MsgUpdateSellOrdersProtoMsg): _126.MsgUpdateSellOrders;
                    toProto(message: _126.MsgUpdateSellOrders): Uint8Array;
                    toProtoMsg(message: _126.MsgUpdateSellOrders): _126.MsgUpdateSellOrdersProtoMsg;
                };
                MsgUpdateSellOrders_Update: {
                    typeUrl: string;
                    encode(message: _126.MsgUpdateSellOrders_Update, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _126.MsgUpdateSellOrders_Update;
                    toJSON(message: _126.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: Partial<_126.MsgUpdateSellOrders_Update>): _126.MsgUpdateSellOrders_Update;
                    fromAmino(object: _126.MsgUpdateSellOrders_UpdateAmino): _126.MsgUpdateSellOrders_Update;
                    toAmino(message: _126.MsgUpdateSellOrders_Update): _126.MsgUpdateSellOrders_UpdateAmino;
                    fromAminoMsg(object: _126.MsgUpdateSellOrders_UpdateAminoMsg): _126.MsgUpdateSellOrders_Update;
                    fromProtoMsg(message: _126.MsgUpdateSellOrders_UpdateProtoMsg): _126.MsgUpdateSellOrders_Update;
                    toProto(message: _126.MsgUpdateSellOrders_Update): Uint8Array;
                    toProtoMsg(message: _126.MsgUpdateSellOrders_Update): _126.MsgUpdateSellOrders_UpdateProtoMsg;
                };
                MsgUpdateSellOrdersResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgUpdateSellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _126.MsgUpdateSellOrdersResponse;
                    toJSON(_: _126.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: Partial<_126.MsgUpdateSellOrdersResponse>): _126.MsgUpdateSellOrdersResponse;
                    fromAmino(_: _126.MsgUpdateSellOrdersResponseAmino): _126.MsgUpdateSellOrdersResponse;
                    toAmino(_: _126.MsgUpdateSellOrdersResponse): _126.MsgUpdateSellOrdersResponseAmino;
                    fromAminoMsg(object: _126.MsgUpdateSellOrdersResponseAminoMsg): _126.MsgUpdateSellOrdersResponse;
                    fromProtoMsg(message: _126.MsgUpdateSellOrdersResponseProtoMsg): _126.MsgUpdateSellOrdersResponse;
                    toProto(message: _126.MsgUpdateSellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgUpdateSellOrdersResponse): _126.MsgUpdateSellOrdersResponseProtoMsg;
                };
                MsgCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _126.MsgCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgCancelSellOrder;
                    fromJSON(object: any): _126.MsgCancelSellOrder;
                    toJSON(message: _126.MsgCancelSellOrder): unknown;
                    fromPartial(object: Partial<_126.MsgCancelSellOrder>): _126.MsgCancelSellOrder;
                    fromAmino(object: _126.MsgCancelSellOrderAmino): _126.MsgCancelSellOrder;
                    toAmino(message: _126.MsgCancelSellOrder): _126.MsgCancelSellOrderAmino;
                    fromAminoMsg(object: _126.MsgCancelSellOrderAminoMsg): _126.MsgCancelSellOrder;
                    toAminoMsg(message: _126.MsgCancelSellOrder): _126.MsgCancelSellOrderAminoMsg;
                    fromProtoMsg(message: _126.MsgCancelSellOrderProtoMsg): _126.MsgCancelSellOrder;
                    toProto(message: _126.MsgCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _126.MsgCancelSellOrder): _126.MsgCancelSellOrderProtoMsg;
                };
                MsgCancelSellOrderResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgCancelSellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _126.MsgCancelSellOrderResponse;
                    toJSON(_: _126.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: Partial<_126.MsgCancelSellOrderResponse>): _126.MsgCancelSellOrderResponse;
                    fromAmino(_: _126.MsgCancelSellOrderResponseAmino): _126.MsgCancelSellOrderResponse;
                    toAmino(_: _126.MsgCancelSellOrderResponse): _126.MsgCancelSellOrderResponseAmino;
                    fromAminoMsg(object: _126.MsgCancelSellOrderResponseAminoMsg): _126.MsgCancelSellOrderResponse;
                    fromProtoMsg(message: _126.MsgCancelSellOrderResponseProtoMsg): _126.MsgCancelSellOrderResponse;
                    toProto(message: _126.MsgCancelSellOrderResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgCancelSellOrderResponse): _126.MsgCancelSellOrderResponseProtoMsg;
                };
                MsgBuyDirect: {
                    typeUrl: string;
                    encode(message: _126.MsgBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgBuyDirect;
                    fromJSON(object: any): _126.MsgBuyDirect;
                    toJSON(message: _126.MsgBuyDirect): unknown;
                    fromPartial(object: Partial<_126.MsgBuyDirect>): _126.MsgBuyDirect;
                    fromAmino(object: _126.MsgBuyDirectAmino): _126.MsgBuyDirect;
                    toAmino(message: _126.MsgBuyDirect): _126.MsgBuyDirectAmino;
                    fromAminoMsg(object: _126.MsgBuyDirectAminoMsg): _126.MsgBuyDirect;
                    toAminoMsg(message: _126.MsgBuyDirect): _126.MsgBuyDirectAminoMsg;
                    fromProtoMsg(message: _126.MsgBuyDirectProtoMsg): _126.MsgBuyDirect;
                    toProto(message: _126.MsgBuyDirect): Uint8Array;
                    toProtoMsg(message: _126.MsgBuyDirect): _126.MsgBuyDirectProtoMsg;
                };
                MsgBuyDirect_Order: {
                    typeUrl: string;
                    encode(message: _126.MsgBuyDirect_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgBuyDirect_Order;
                    fromJSON(object: any): _126.MsgBuyDirect_Order;
                    toJSON(message: _126.MsgBuyDirect_Order): unknown;
                    fromPartial(object: Partial<_126.MsgBuyDirect_Order>): _126.MsgBuyDirect_Order;
                    fromAmino(object: _126.MsgBuyDirect_OrderAmino): _126.MsgBuyDirect_Order;
                    toAmino(message: _126.MsgBuyDirect_Order): _126.MsgBuyDirect_OrderAmino;
                    fromAminoMsg(object: _126.MsgBuyDirect_OrderAminoMsg): _126.MsgBuyDirect_Order;
                    fromProtoMsg(message: _126.MsgBuyDirect_OrderProtoMsg): _126.MsgBuyDirect_Order;
                    toProto(message: _126.MsgBuyDirect_Order): Uint8Array;
                    toProtoMsg(message: _126.MsgBuyDirect_Order): _126.MsgBuyDirect_OrderProtoMsg;
                };
                MsgBuyDirectResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgBuyDirectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgBuyDirectResponse;
                    fromJSON(_: any): _126.MsgBuyDirectResponse;
                    toJSON(_: _126.MsgBuyDirectResponse): unknown;
                    fromPartial(_: Partial<_126.MsgBuyDirectResponse>): _126.MsgBuyDirectResponse;
                    fromAmino(_: _126.MsgBuyDirectResponseAmino): _126.MsgBuyDirectResponse;
                    toAmino(_: _126.MsgBuyDirectResponse): _126.MsgBuyDirectResponseAmino;
                    fromAminoMsg(object: _126.MsgBuyDirectResponseAminoMsg): _126.MsgBuyDirectResponse;
                    fromProtoMsg(message: _126.MsgBuyDirectResponseProtoMsg): _126.MsgBuyDirectResponse;
                    toProto(message: _126.MsgBuyDirectResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgBuyDirectResponse): _126.MsgBuyDirectResponseProtoMsg;
                };
                MsgAddAllowedDenom: {
                    typeUrl: string;
                    encode(message: _126.MsgAddAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgAddAllowedDenom;
                    fromJSON(object: any): _126.MsgAddAllowedDenom;
                    toJSON(message: _126.MsgAddAllowedDenom): unknown;
                    fromPartial(object: Partial<_126.MsgAddAllowedDenom>): _126.MsgAddAllowedDenom;
                    fromAmino(object: _126.MsgAddAllowedDenomAmino): _126.MsgAddAllowedDenom;
                    toAmino(message: _126.MsgAddAllowedDenom): _126.MsgAddAllowedDenomAmino;
                    fromAminoMsg(object: _126.MsgAddAllowedDenomAminoMsg): _126.MsgAddAllowedDenom;
                    toAminoMsg(message: _126.MsgAddAllowedDenom): _126.MsgAddAllowedDenomAminoMsg;
                    fromProtoMsg(message: _126.MsgAddAllowedDenomProtoMsg): _126.MsgAddAllowedDenom;
                    toProto(message: _126.MsgAddAllowedDenom): Uint8Array;
                    toProtoMsg(message: _126.MsgAddAllowedDenom): _126.MsgAddAllowedDenomProtoMsg;
                };
                MsgAddAllowedDenomResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgAddAllowedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgAddAllowedDenomResponse;
                    fromJSON(_: any): _126.MsgAddAllowedDenomResponse;
                    toJSON(_: _126.MsgAddAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_126.MsgAddAllowedDenomResponse>): _126.MsgAddAllowedDenomResponse;
                    fromAmino(_: _126.MsgAddAllowedDenomResponseAmino): _126.MsgAddAllowedDenomResponse;
                    toAmino(_: _126.MsgAddAllowedDenomResponse): _126.MsgAddAllowedDenomResponseAmino;
                    fromAminoMsg(object: _126.MsgAddAllowedDenomResponseAminoMsg): _126.MsgAddAllowedDenomResponse;
                    fromProtoMsg(message: _126.MsgAddAllowedDenomResponseProtoMsg): _126.MsgAddAllowedDenomResponse;
                    toProto(message: _126.MsgAddAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgAddAllowedDenomResponse): _126.MsgAddAllowedDenomResponseProtoMsg;
                };
                MsgRemoveAllowedDenom: {
                    typeUrl: string;
                    encode(message: _126.MsgRemoveAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgRemoveAllowedDenom;
                    fromJSON(object: any): _126.MsgRemoveAllowedDenom;
                    toJSON(message: _126.MsgRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_126.MsgRemoveAllowedDenom>): _126.MsgRemoveAllowedDenom;
                    fromAmino(object: _126.MsgRemoveAllowedDenomAmino): _126.MsgRemoveAllowedDenom;
                    toAmino(message: _126.MsgRemoveAllowedDenom): _126.MsgRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _126.MsgRemoveAllowedDenomAminoMsg): _126.MsgRemoveAllowedDenom;
                    toAminoMsg(message: _126.MsgRemoveAllowedDenom): _126.MsgRemoveAllowedDenomAminoMsg;
                    fromProtoMsg(message: _126.MsgRemoveAllowedDenomProtoMsg): _126.MsgRemoveAllowedDenom;
                    toProto(message: _126.MsgRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _126.MsgRemoveAllowedDenom): _126.MsgRemoveAllowedDenomProtoMsg;
                };
                MsgRemoveAllowedDenomResponse: {
                    typeUrl: string;
                    encode(_: _126.MsgRemoveAllowedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _126.MsgRemoveAllowedDenomResponse;
                    fromJSON(_: any): _126.MsgRemoveAllowedDenomResponse;
                    toJSON(_: _126.MsgRemoveAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_126.MsgRemoveAllowedDenomResponse>): _126.MsgRemoveAllowedDenomResponse;
                    fromAmino(_: _126.MsgRemoveAllowedDenomResponseAmino): _126.MsgRemoveAllowedDenomResponse;
                    toAmino(_: _126.MsgRemoveAllowedDenomResponse): _126.MsgRemoveAllowedDenomResponseAmino;
                    fromAminoMsg(object: _126.MsgRemoveAllowedDenomResponseAminoMsg): _126.MsgRemoveAllowedDenomResponse;
                    fromProtoMsg(message: _126.MsgRemoveAllowedDenomResponseProtoMsg): _126.MsgRemoveAllowedDenomResponse;
                    toProto(message: _126.MsgRemoveAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _126.MsgRemoveAllowedDenomResponse): _126.MsgRemoveAllowedDenomResponseProtoMsg;
                };
                SellOrder: {
                    typeUrl: string;
                    encode(message: _125.SellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _125.SellOrder;
                    fromJSON(object: any): _125.SellOrder;
                    toJSON(message: _125.SellOrder): unknown;
                    fromPartial(object: Partial<_125.SellOrder>): _125.SellOrder;
                    fromAmino(object: _125.SellOrderAmino): _125.SellOrder;
                    toAmino(message: _125.SellOrder): _125.SellOrderAmino;
                    fromAminoMsg(object: _125.SellOrderAminoMsg): _125.SellOrder;
                    fromProtoMsg(message: _125.SellOrderProtoMsg): _125.SellOrder;
                    toProto(message: _125.SellOrder): Uint8Array;
                    toProtoMsg(message: _125.SellOrder): _125.SellOrderProtoMsg;
                };
                AllowedDenom: {
                    typeUrl: string;
                    encode(message: _125.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _125.AllowedDenom;
                    fromJSON(object: any): _125.AllowedDenom;
                    toJSON(message: _125.AllowedDenom): unknown;
                    fromPartial(object: Partial<_125.AllowedDenom>): _125.AllowedDenom;
                    fromAmino(object: _125.AllowedDenomAmino): _125.AllowedDenom;
                    toAmino(message: _125.AllowedDenom): _125.AllowedDenomAmino;
                    fromAminoMsg(object: _125.AllowedDenomAminoMsg): _125.AllowedDenom;
                    fromProtoMsg(message: _125.AllowedDenomProtoMsg): _125.AllowedDenom;
                    toProto(message: _125.AllowedDenom): Uint8Array;
                    toProtoMsg(message: _125.AllowedDenom): _125.AllowedDenomProtoMsg;
                };
                Market: {
                    typeUrl: string;
                    encode(message: _125.Market, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _125.Market;
                    fromJSON(object: any): _125.Market;
                    toJSON(message: _125.Market): unknown;
                    fromPartial(object: Partial<_125.Market>): _125.Market;
                    fromAmino(object: _125.MarketAmino): _125.Market;
                    toAmino(message: _125.Market): _125.MarketAmino;
                    fromAminoMsg(object: _125.MarketAminoMsg): _125.Market;
                    fromProtoMsg(message: _125.MarketProtoMsg): _125.Market;
                    toProto(message: _125.Market): Uint8Array;
                    toProtoMsg(message: _125.Market): _125.MarketProtoMsg;
                };
                QuerySellOrderRequest: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrderRequest;
                    fromJSON(object: any): _124.QuerySellOrderRequest;
                    toJSON(message: _124.QuerySellOrderRequest): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrderRequest>): _124.QuerySellOrderRequest;
                    fromAmino(object: _124.QuerySellOrderRequestAmino): _124.QuerySellOrderRequest;
                    toAmino(message: _124.QuerySellOrderRequest): _124.QuerySellOrderRequestAmino;
                    fromAminoMsg(object: _124.QuerySellOrderRequestAminoMsg): _124.QuerySellOrderRequest;
                    fromProtoMsg(message: _124.QuerySellOrderRequestProtoMsg): _124.QuerySellOrderRequest;
                    toProto(message: _124.QuerySellOrderRequest): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrderRequest): _124.QuerySellOrderRequestProtoMsg;
                };
                QuerySellOrderResponse: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrderResponse;
                    fromJSON(object: any): _124.QuerySellOrderResponse;
                    toJSON(message: _124.QuerySellOrderResponse): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrderResponse>): _124.QuerySellOrderResponse;
                    fromAmino(object: _124.QuerySellOrderResponseAmino): _124.QuerySellOrderResponse;
                    toAmino(message: _124.QuerySellOrderResponse): _124.QuerySellOrderResponseAmino;
                    fromAminoMsg(object: _124.QuerySellOrderResponseAminoMsg): _124.QuerySellOrderResponse;
                    fromProtoMsg(message: _124.QuerySellOrderResponseProtoMsg): _124.QuerySellOrderResponse;
                    toProto(message: _124.QuerySellOrderResponse): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrderResponse): _124.QuerySellOrderResponseProtoMsg;
                };
                QuerySellOrdersRequest: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrdersRequest;
                    fromJSON(object: any): _124.QuerySellOrdersRequest;
                    toJSON(message: _124.QuerySellOrdersRequest): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrdersRequest>): _124.QuerySellOrdersRequest;
                    fromAmino(object: _124.QuerySellOrdersRequestAmino): _124.QuerySellOrdersRequest;
                    toAmino(message: _124.QuerySellOrdersRequest): _124.QuerySellOrdersRequestAmino;
                    fromAminoMsg(object: _124.QuerySellOrdersRequestAminoMsg): _124.QuerySellOrdersRequest;
                    fromProtoMsg(message: _124.QuerySellOrdersRequestProtoMsg): _124.QuerySellOrdersRequest;
                    toProto(message: _124.QuerySellOrdersRequest): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrdersRequest): _124.QuerySellOrdersRequestProtoMsg;
                };
                QuerySellOrdersResponse: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrdersResponse;
                    fromJSON(object: any): _124.QuerySellOrdersResponse;
                    toJSON(message: _124.QuerySellOrdersResponse): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrdersResponse>): _124.QuerySellOrdersResponse;
                    fromAmino(object: _124.QuerySellOrdersResponseAmino): _124.QuerySellOrdersResponse;
                    toAmino(message: _124.QuerySellOrdersResponse): _124.QuerySellOrdersResponseAmino;
                    fromAminoMsg(object: _124.QuerySellOrdersResponseAminoMsg): _124.QuerySellOrdersResponse;
                    fromProtoMsg(message: _124.QuerySellOrdersResponseProtoMsg): _124.QuerySellOrdersResponse;
                    toProto(message: _124.QuerySellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrdersResponse): _124.QuerySellOrdersResponseProtoMsg;
                };
                QuerySellOrdersByBatchRequest: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrdersByBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrdersByBatchRequest;
                    fromJSON(object: any): _124.QuerySellOrdersByBatchRequest;
                    toJSON(message: _124.QuerySellOrdersByBatchRequest): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrdersByBatchRequest>): _124.QuerySellOrdersByBatchRequest;
                    fromAmino(object: _124.QuerySellOrdersByBatchRequestAmino): _124.QuerySellOrdersByBatchRequest;
                    toAmino(message: _124.QuerySellOrdersByBatchRequest): _124.QuerySellOrdersByBatchRequestAmino;
                    fromAminoMsg(object: _124.QuerySellOrdersByBatchRequestAminoMsg): _124.QuerySellOrdersByBatchRequest;
                    fromProtoMsg(message: _124.QuerySellOrdersByBatchRequestProtoMsg): _124.QuerySellOrdersByBatchRequest;
                    toProto(message: _124.QuerySellOrdersByBatchRequest): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrdersByBatchRequest): _124.QuerySellOrdersByBatchRequestProtoMsg;
                };
                QuerySellOrdersByBatchResponse: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrdersByBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrdersByBatchResponse;
                    fromJSON(object: any): _124.QuerySellOrdersByBatchResponse;
                    toJSON(message: _124.QuerySellOrdersByBatchResponse): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrdersByBatchResponse>): _124.QuerySellOrdersByBatchResponse;
                    fromAmino(object: _124.QuerySellOrdersByBatchResponseAmino): _124.QuerySellOrdersByBatchResponse;
                    toAmino(message: _124.QuerySellOrdersByBatchResponse): _124.QuerySellOrdersByBatchResponseAmino;
                    fromAminoMsg(object: _124.QuerySellOrdersByBatchResponseAminoMsg): _124.QuerySellOrdersByBatchResponse;
                    fromProtoMsg(message: _124.QuerySellOrdersByBatchResponseProtoMsg): _124.QuerySellOrdersByBatchResponse;
                    toProto(message: _124.QuerySellOrdersByBatchResponse): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrdersByBatchResponse): _124.QuerySellOrdersByBatchResponseProtoMsg;
                };
                QuerySellOrdersBySellerRequest: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrdersBySellerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrdersBySellerRequest;
                    fromJSON(object: any): _124.QuerySellOrdersBySellerRequest;
                    toJSON(message: _124.QuerySellOrdersBySellerRequest): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrdersBySellerRequest>): _124.QuerySellOrdersBySellerRequest;
                    fromAmino(object: _124.QuerySellOrdersBySellerRequestAmino): _124.QuerySellOrdersBySellerRequest;
                    toAmino(message: _124.QuerySellOrdersBySellerRequest): _124.QuerySellOrdersBySellerRequestAmino;
                    fromAminoMsg(object: _124.QuerySellOrdersBySellerRequestAminoMsg): _124.QuerySellOrdersBySellerRequest;
                    fromProtoMsg(message: _124.QuerySellOrdersBySellerRequestProtoMsg): _124.QuerySellOrdersBySellerRequest;
                    toProto(message: _124.QuerySellOrdersBySellerRequest): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrdersBySellerRequest): _124.QuerySellOrdersBySellerRequestProtoMsg;
                };
                QuerySellOrdersBySellerResponse: {
                    typeUrl: string;
                    encode(message: _124.QuerySellOrdersBySellerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QuerySellOrdersBySellerResponse;
                    fromJSON(object: any): _124.QuerySellOrdersBySellerResponse;
                    toJSON(message: _124.QuerySellOrdersBySellerResponse): unknown;
                    fromPartial(object: Partial<_124.QuerySellOrdersBySellerResponse>): _124.QuerySellOrdersBySellerResponse;
                    fromAmino(object: _124.QuerySellOrdersBySellerResponseAmino): _124.QuerySellOrdersBySellerResponse;
                    toAmino(message: _124.QuerySellOrdersBySellerResponse): _124.QuerySellOrdersBySellerResponseAmino;
                    fromAminoMsg(object: _124.QuerySellOrdersBySellerResponseAminoMsg): _124.QuerySellOrdersBySellerResponse;
                    fromProtoMsg(message: _124.QuerySellOrdersBySellerResponseProtoMsg): _124.QuerySellOrdersBySellerResponse;
                    toProto(message: _124.QuerySellOrdersBySellerResponse): Uint8Array;
                    toProtoMsg(message: _124.QuerySellOrdersBySellerResponse): _124.QuerySellOrdersBySellerResponseProtoMsg;
                };
                QueryAllowedDenomsRequest: {
                    typeUrl: string;
                    encode(message: _124.QueryAllowedDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _124.QueryAllowedDenomsRequest;
                    toJSON(message: _124.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: Partial<_124.QueryAllowedDenomsRequest>): _124.QueryAllowedDenomsRequest;
                    fromAmino(object: _124.QueryAllowedDenomsRequestAmino): _124.QueryAllowedDenomsRequest;
                    toAmino(message: _124.QueryAllowedDenomsRequest): _124.QueryAllowedDenomsRequestAmino;
                    fromAminoMsg(object: _124.QueryAllowedDenomsRequestAminoMsg): _124.QueryAllowedDenomsRequest;
                    fromProtoMsg(message: _124.QueryAllowedDenomsRequestProtoMsg): _124.QueryAllowedDenomsRequest;
                    toProto(message: _124.QueryAllowedDenomsRequest): Uint8Array;
                    toProtoMsg(message: _124.QueryAllowedDenomsRequest): _124.QueryAllowedDenomsRequestProtoMsg;
                };
                QueryAllowedDenomsResponse: {
                    typeUrl: string;
                    encode(message: _124.QueryAllowedDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _124.QueryAllowedDenomsResponse;
                    toJSON(message: _124.QueryAllowedDenomsResponse): unknown;
                    fromPartial(object: Partial<_124.QueryAllowedDenomsResponse>): _124.QueryAllowedDenomsResponse;
                    fromAmino(object: _124.QueryAllowedDenomsResponseAmino): _124.QueryAllowedDenomsResponse;
                    toAmino(message: _124.QueryAllowedDenomsResponse): _124.QueryAllowedDenomsResponseAmino;
                    fromAminoMsg(object: _124.QueryAllowedDenomsResponseAminoMsg): _124.QueryAllowedDenomsResponse;
                    fromProtoMsg(message: _124.QueryAllowedDenomsResponseProtoMsg): _124.QueryAllowedDenomsResponse;
                    toProto(message: _124.QueryAllowedDenomsResponse): Uint8Array;
                    toProtoMsg(message: _124.QueryAllowedDenomsResponse): _124.QueryAllowedDenomsResponseProtoMsg;
                };
                SellOrderInfo: {
                    typeUrl: string;
                    encode(message: _124.SellOrderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _124.SellOrderInfo;
                    fromJSON(object: any): _124.SellOrderInfo;
                    toJSON(message: _124.SellOrderInfo): unknown;
                    fromPartial(object: Partial<_124.SellOrderInfo>): _124.SellOrderInfo;
                    fromAmino(object: _124.SellOrderInfoAmino): _124.SellOrderInfo;
                    toAmino(message: _124.SellOrderInfo): _124.SellOrderInfoAmino;
                    fromAminoMsg(object: _124.SellOrderInfoAminoMsg): _124.SellOrderInfo;
                    fromProtoMsg(message: _124.SellOrderInfoProtoMsg): _124.SellOrderInfo;
                    toProto(message: _124.SellOrderInfo): Uint8Array;
                    toProtoMsg(message: _124.SellOrderInfo): _124.SellOrderInfoProtoMsg;
                };
                EventSell: {
                    typeUrl: string;
                    encode(message: _123.EventSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _123.EventSell;
                    fromJSON(object: any): _123.EventSell;
                    toJSON(message: _123.EventSell): unknown;
                    fromPartial(object: Partial<_123.EventSell>): _123.EventSell;
                    fromAmino(object: _123.EventSellAmino): _123.EventSell;
                    toAmino(message: _123.EventSell): _123.EventSellAmino;
                    fromAminoMsg(object: _123.EventSellAminoMsg): _123.EventSell;
                    fromProtoMsg(message: _123.EventSellProtoMsg): _123.EventSell;
                    toProto(message: _123.EventSell): Uint8Array;
                    toProtoMsg(message: _123.EventSell): _123.EventSellProtoMsg;
                };
                EventBuyDirect: {
                    typeUrl: string;
                    encode(message: _123.EventBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _123.EventBuyDirect;
                    fromJSON(object: any): _123.EventBuyDirect;
                    toJSON(message: _123.EventBuyDirect): unknown;
                    fromPartial(object: Partial<_123.EventBuyDirect>): _123.EventBuyDirect;
                    fromAmino(object: _123.EventBuyDirectAmino): _123.EventBuyDirect;
                    toAmino(message: _123.EventBuyDirect): _123.EventBuyDirectAmino;
                    fromAminoMsg(object: _123.EventBuyDirectAminoMsg): _123.EventBuyDirect;
                    fromProtoMsg(message: _123.EventBuyDirectProtoMsg): _123.EventBuyDirect;
                    toProto(message: _123.EventBuyDirect): Uint8Array;
                    toProtoMsg(message: _123.EventBuyDirect): _123.EventBuyDirectProtoMsg;
                };
                EventUpdateSellOrder: {
                    typeUrl: string;
                    encode(message: _123.EventUpdateSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _123.EventUpdateSellOrder;
                    fromJSON(object: any): _123.EventUpdateSellOrder;
                    toJSON(message: _123.EventUpdateSellOrder): unknown;
                    fromPartial(object: Partial<_123.EventUpdateSellOrder>): _123.EventUpdateSellOrder;
                    fromAmino(object: _123.EventUpdateSellOrderAmino): _123.EventUpdateSellOrder;
                    toAmino(message: _123.EventUpdateSellOrder): _123.EventUpdateSellOrderAmino;
                    fromAminoMsg(object: _123.EventUpdateSellOrderAminoMsg): _123.EventUpdateSellOrder;
                    fromProtoMsg(message: _123.EventUpdateSellOrderProtoMsg): _123.EventUpdateSellOrder;
                    toProto(message: _123.EventUpdateSellOrder): Uint8Array;
                    toProtoMsg(message: _123.EventUpdateSellOrder): _123.EventUpdateSellOrderProtoMsg;
                };
                EventCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _123.EventCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _123.EventCancelSellOrder;
                    fromJSON(object: any): _123.EventCancelSellOrder;
                    toJSON(message: _123.EventCancelSellOrder): unknown;
                    fromPartial(object: Partial<_123.EventCancelSellOrder>): _123.EventCancelSellOrder;
                    fromAmino(object: _123.EventCancelSellOrderAmino): _123.EventCancelSellOrder;
                    toAmino(message: _123.EventCancelSellOrder): _123.EventCancelSellOrderAmino;
                    fromAminoMsg(object: _123.EventCancelSellOrderAminoMsg): _123.EventCancelSellOrder;
                    fromProtoMsg(message: _123.EventCancelSellOrderProtoMsg): _123.EventCancelSellOrder;
                    toProto(message: _123.EventCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _123.EventCancelSellOrder): _123.EventCancelSellOrderProtoMsg;
                };
                EventAllowDenom: {
                    typeUrl: string;
                    encode(message: _123.EventAllowDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _123.EventAllowDenom;
                    fromJSON(object: any): _123.EventAllowDenom;
                    toJSON(message: _123.EventAllowDenom): unknown;
                    fromPartial(object: Partial<_123.EventAllowDenom>): _123.EventAllowDenom;
                    fromAmino(object: _123.EventAllowDenomAmino): _123.EventAllowDenom;
                    toAmino(message: _123.EventAllowDenom): _123.EventAllowDenomAmino;
                    fromAminoMsg(object: _123.EventAllowDenomAminoMsg): _123.EventAllowDenom;
                    fromProtoMsg(message: _123.EventAllowDenomProtoMsg): _123.EventAllowDenom;
                    toProto(message: _123.EventAllowDenom): Uint8Array;
                    toProtoMsg(message: _123.EventAllowDenom): _123.EventAllowDenomProtoMsg;
                };
                EventRemoveAllowedDenom: {
                    typeUrl: string;
                    encode(message: _123.EventRemoveAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _123.EventRemoveAllowedDenom;
                    fromJSON(object: any): _123.EventRemoveAllowedDenom;
                    toJSON(message: _123.EventRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_123.EventRemoveAllowedDenom>): _123.EventRemoveAllowedDenom;
                    fromAmino(object: _123.EventRemoveAllowedDenomAmino): _123.EventRemoveAllowedDenom;
                    toAmino(message: _123.EventRemoveAllowedDenom): _123.EventRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _123.EventRemoveAllowedDenomAminoMsg): _123.EventRemoveAllowedDenom;
                    fromProtoMsg(message: _123.EventRemoveAllowedDenomProtoMsg): _123.EventRemoveAllowedDenom;
                    toProto(message: _123.EventRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _123.EventRemoveAllowedDenom): _123.EventRemoveAllowedDenomProtoMsg;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    typeUrl: string;
                    encode(message: _128.BuyOrderSellOrderMatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _128.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _128.BuyOrderSellOrderMatch;
                    toJSON(message: _128.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: Partial<_128.BuyOrderSellOrderMatch>): _128.BuyOrderSellOrderMatch;
                    fromAmino(object: _128.BuyOrderSellOrderMatchAmino): _128.BuyOrderSellOrderMatch;
                    toAmino(message: _128.BuyOrderSellOrderMatch): _128.BuyOrderSellOrderMatchAmino;
                    fromAminoMsg(object: _128.BuyOrderSellOrderMatchAminoMsg): _128.BuyOrderSellOrderMatch;
                    fromProtoMsg(message: _128.BuyOrderSellOrderMatchProtoMsg): _128.BuyOrderSellOrderMatch;
                    toProto(message: _128.BuyOrderSellOrderMatch): Uint8Array;
                    toProtoMsg(message: _128.BuyOrderSellOrderMatch): _128.BuyOrderSellOrderMatchProtoMsg;
                };
                BuyOrderClassSelector: {
                    typeUrl: string;
                    encode(message: _128.BuyOrderClassSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _128.BuyOrderClassSelector;
                    fromJSON(object: any): _128.BuyOrderClassSelector;
                    toJSON(message: _128.BuyOrderClassSelector): unknown;
                    fromPartial(object: Partial<_128.BuyOrderClassSelector>): _128.BuyOrderClassSelector;
                    fromAmino(object: _128.BuyOrderClassSelectorAmino): _128.BuyOrderClassSelector;
                    toAmino(message: _128.BuyOrderClassSelector): _128.BuyOrderClassSelectorAmino;
                    fromAminoMsg(object: _128.BuyOrderClassSelectorAminoMsg): _128.BuyOrderClassSelector;
                    fromProtoMsg(message: _128.BuyOrderClassSelectorProtoMsg): _128.BuyOrderClassSelector;
                    toProto(message: _128.BuyOrderClassSelector): Uint8Array;
                    toProtoMsg(message: _128.BuyOrderClassSelector): _128.BuyOrderClassSelectorProtoMsg;
                };
                BuyOrderProjectSelector: {
                    typeUrl: string;
                    encode(message: _128.BuyOrderProjectSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _128.BuyOrderProjectSelector;
                    fromJSON(object: any): _128.BuyOrderProjectSelector;
                    toJSON(message: _128.BuyOrderProjectSelector): unknown;
                    fromPartial(object: Partial<_128.BuyOrderProjectSelector>): _128.BuyOrderProjectSelector;
                    fromAmino(object: _128.BuyOrderProjectSelectorAmino): _128.BuyOrderProjectSelector;
                    toAmino(message: _128.BuyOrderProjectSelector): _128.BuyOrderProjectSelectorAmino;
                    fromAminoMsg(object: _128.BuyOrderProjectSelectorAminoMsg): _128.BuyOrderProjectSelector;
                    fromProtoMsg(message: _128.BuyOrderProjectSelectorProtoMsg): _128.BuyOrderProjectSelector;
                    toProto(message: _128.BuyOrderProjectSelector): Uint8Array;
                    toProtoMsg(message: _128.BuyOrderProjectSelector): _128.BuyOrderProjectSelectorProtoMsg;
                };
                BuyOrderBatchSelector: {
                    typeUrl: string;
                    encode(message: _128.BuyOrderBatchSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _128.BuyOrderBatchSelector;
                    fromJSON(object: any): _128.BuyOrderBatchSelector;
                    toJSON(message: _128.BuyOrderBatchSelector): unknown;
                    fromPartial(object: Partial<_128.BuyOrderBatchSelector>): _128.BuyOrderBatchSelector;
                    fromAmino(object: _128.BuyOrderBatchSelectorAmino): _128.BuyOrderBatchSelector;
                    toAmino(message: _128.BuyOrderBatchSelector): _128.BuyOrderBatchSelectorAmino;
                    fromAminoMsg(object: _128.BuyOrderBatchSelectorAminoMsg): _128.BuyOrderBatchSelector;
                    fromProtoMsg(message: _128.BuyOrderBatchSelectorProtoMsg): _128.BuyOrderBatchSelector;
                    toProto(message: _128.BuyOrderBatchSelector): Uint8Array;
                    toProtoMsg(message: _128.BuyOrderBatchSelector): _128.BuyOrderBatchSelectorProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _268.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _130.QueryClassesRequest | undefined): Promise<_130.QueryClassesResponse>;
                classesByAdmin(request: _130.QueryClassesByAdminRequest): Promise<_130.QueryClassesByAdminResponse>;
                class(request: _130.QueryClassRequest): Promise<_130.QueryClassResponse>;
                classIssuers(request: _130.QueryClassIssuersRequest): Promise<_130.QueryClassIssuersResponse>;
                projects(request?: _130.QueryProjectsRequest | undefined): Promise<_130.QueryProjectsResponse>;
                projectsByClass(request: _130.QueryProjectsByClassRequest): Promise<_130.QueryProjectsByClassResponse>;
                projectsByReferenceId(request: _130.QueryProjectsByReferenceIdRequest): Promise<_130.QueryProjectsByReferenceIdResponse>;
                projectsByAdmin(request: _130.QueryProjectsByAdminRequest): Promise<_130.QueryProjectsByAdminResponse>;
                project(request: _130.QueryProjectRequest): Promise<_130.QueryProjectResponse>;
                batches(request?: _130.QueryBatchesRequest | undefined): Promise<_130.QueryBatchesResponse>;
                batchesByIssuer(request: _130.QueryBatchesByIssuerRequest): Promise<_130.QueryBatchesByIssuerResponse>;
                batchesByClass(request: _130.QueryBatchesByClassRequest): Promise<_130.QueryBatchesByClassResponse>;
                batchesByProject(request: _130.QueryBatchesByProjectRequest): Promise<_130.QueryBatchesByProjectResponse>;
                batch(request: _130.QueryBatchRequest): Promise<_130.QueryBatchResponse>;
                balance(request: _130.QueryBalanceRequest): Promise<_130.QueryBalanceResponse>;
                balances(request: _130.QueryBalancesRequest): Promise<_130.QueryBalancesResponse>;
                balancesByBatch(request: _130.QueryBalancesByBatchRequest): Promise<_130.QueryBalancesByBatchResponse>;
                allBalances(request?: _130.QueryAllBalancesRequest | undefined): Promise<_130.QueryAllBalancesResponse>;
                supply(request: _130.QuerySupplyRequest): Promise<_130.QuerySupplyResponse>;
                creditTypes(request?: _130.QueryCreditTypesRequest | undefined): Promise<_130.QueryCreditTypesResponse>;
                params(request?: _130.QueryParamsRequest | undefined): Promise<_130.QueryParamsResponse>;
                creditType(request: _130.QueryCreditTypeRequest): Promise<_130.QueryCreditTypeResponse>;
                classCreatorAllowlist(request?: _130.QueryClassCreatorAllowlistRequest | undefined): Promise<_130.QueryClassCreatorAllowlistResponse>;
                allowedClassCreators(request?: _130.QueryAllowedClassCreatorsRequest | undefined): Promise<_130.QueryAllowedClassCreatorsResponse>;
                classFee(request?: _130.QueryClassFeeRequest | undefined): Promise<_130.QueryClassFeeResponse>;
                allowedBridgeChains(request?: _130.QueryAllowedBridgeChainsRequest | undefined): Promise<_130.QueryAllowedBridgeChainsResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _132.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _132.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _132.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _132.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _132.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _132.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _132.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _132.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _132.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _132.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _132.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _132.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _132.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _132.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _132.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _132.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _132.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _132.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _132.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _132.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _132.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _132.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _132.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _132.MsgCreateClass): {
                        typeUrl: string;
                        value: _132.MsgCreateClass;
                    };
                    createProject(value: _132.MsgCreateProject): {
                        typeUrl: string;
                        value: _132.MsgCreateProject;
                    };
                    createBatch(value: _132.MsgCreateBatch): {
                        typeUrl: string;
                        value: _132.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _132.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _132.MsgMintBatchCredits;
                    };
                    sealBatch(value: _132.MsgSealBatch): {
                        typeUrl: string;
                        value: _132.MsgSealBatch;
                    };
                    send(value: _132.MsgSend): {
                        typeUrl: string;
                        value: _132.MsgSend;
                    };
                    retire(value: _132.MsgRetire): {
                        typeUrl: string;
                        value: _132.MsgRetire;
                    };
                    cancel(value: _132.MsgCancel): {
                        typeUrl: string;
                        value: _132.MsgCancel;
                    };
                    updateClassAdmin(value: _132.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _132.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _132.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _132.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _132.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _132.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _132.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _132.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _132.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _132.MsgBridge): {
                        typeUrl: string;
                        value: _132.MsgBridge;
                    };
                    bridgeReceive(value: _132.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _132.MsgBridgeReceive;
                    };
                    addCreditType(value: _132.MsgAddCreditType): {
                        typeUrl: string;
                        value: _132.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _132.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _132.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _132.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _132.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _132.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _132.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _132.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _132.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _132.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _132.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _132.MsgRemoveAllowedBridgeChain;
                    };
                };
                toJSON: {
                    createClass(value: _132.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _132.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _132.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _132.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _132.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _132.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _132.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _132.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _132.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _132.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _132.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _132.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _132.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBatchMetadata(value: _132.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridge(value: _132.MsgBridge): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridgeReceive(value: _132.MsgBridgeReceive): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCreditType(value: _132.MsgAddCreditType): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setClassCreatorAllowlist(value: _132.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addClassCreator(value: _132.MsgAddClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeClassCreator(value: _132.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassFee(value: _132.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addAllowedBridgeChain(value: _132.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAllowedBridgeChain(value: _132.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _132.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _132.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _132.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _132.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _132.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _132.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _132.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _132.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateBatchMetadata;
                    };
                    bridge(value: any): {
                        typeUrl: string;
                        value: _132.MsgBridge;
                    };
                    bridgeReceive(value: any): {
                        typeUrl: string;
                        value: _132.MsgBridgeReceive;
                    };
                    addCreditType(value: any): {
                        typeUrl: string;
                        value: _132.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: any): {
                        typeUrl: string;
                        value: _132.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: any): {
                        typeUrl: string;
                        value: _132.MsgAddClassCreator;
                    };
                    removeClassCreator(value: any): {
                        typeUrl: string;
                        value: _132.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _132.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _132.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _132.MsgCreateClass): {
                        typeUrl: string;
                        value: _132.MsgCreateClass;
                    };
                    createProject(value: _132.MsgCreateProject): {
                        typeUrl: string;
                        value: _132.MsgCreateProject;
                    };
                    createBatch(value: _132.MsgCreateBatch): {
                        typeUrl: string;
                        value: _132.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _132.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _132.MsgMintBatchCredits;
                    };
                    sealBatch(value: _132.MsgSealBatch): {
                        typeUrl: string;
                        value: _132.MsgSealBatch;
                    };
                    send(value: _132.MsgSend): {
                        typeUrl: string;
                        value: _132.MsgSend;
                    };
                    retire(value: _132.MsgRetire): {
                        typeUrl: string;
                        value: _132.MsgRetire;
                    };
                    cancel(value: _132.MsgCancel): {
                        typeUrl: string;
                        value: _132.MsgCancel;
                    };
                    updateClassAdmin(value: _132.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _132.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _132.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _132.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _132.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _132.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _132.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _132.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _132.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _132.MsgBridge): {
                        typeUrl: string;
                        value: _132.MsgBridge;
                    };
                    bridgeReceive(value: _132.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _132.MsgBridgeReceive;
                    };
                    addCreditType(value: _132.MsgAddCreditType): {
                        typeUrl: string;
                        value: _132.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _132.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _132.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _132.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _132.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _132.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _132.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _132.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _132.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _132.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _132.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _132.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _132.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _132.MsgCreateClass) => _132.MsgCreateClassAmino;
                    fromAmino: (object: _132.MsgCreateClassAmino) => _132.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: (message: _132.MsgCreateProject) => _132.MsgCreateProjectAmino;
                    fromAmino: (object: _132.MsgCreateProjectAmino) => _132.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _132.MsgCreateBatch) => _132.MsgCreateBatchAmino;
                    fromAmino: (object: _132.MsgCreateBatchAmino) => _132.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: (message: _132.MsgMintBatchCredits) => _132.MsgMintBatchCreditsAmino;
                    fromAmino: (object: _132.MsgMintBatchCreditsAmino) => _132.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: (message: _132.MsgSealBatch) => _132.MsgSealBatchAmino;
                    fromAmino: (object: _132.MsgSealBatchAmino) => _132.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _132.MsgSend) => _132.MsgSendAmino;
                    fromAmino: (object: _132.MsgSendAmino) => _132.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _132.MsgRetire) => _132.MsgRetireAmino;
                    fromAmino: (object: _132.MsgRetireAmino) => _132.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _132.MsgCancel) => _132.MsgCancelAmino;
                    fromAmino: (object: _132.MsgCancelAmino) => _132.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateClassAdmin) => _132.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _132.MsgUpdateClassAdminAmino) => _132.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateClassIssuers) => _132.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _132.MsgUpdateClassIssuersAmino) => _132.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateClassMetadata) => _132.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _132.MsgUpdateClassMetadataAmino) => _132.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateProjectAdmin) => _132.MsgUpdateProjectAdminAmino;
                    fromAmino: (object: _132.MsgUpdateProjectAdminAmino) => _132.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateProjectMetadata) => _132.MsgUpdateProjectMetadataAmino;
                    fromAmino: (object: _132.MsgUpdateProjectMetadataAmino) => _132.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateBatchMetadata) => _132.MsgUpdateBatchMetadataAmino;
                    fromAmino: (object: _132.MsgUpdateBatchMetadataAmino) => _132.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: (message: _132.MsgBridge) => _132.MsgBridgeAmino;
                    fromAmino: (object: _132.MsgBridgeAmino) => _132.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: (message: _132.MsgBridgeReceive) => _132.MsgBridgeReceiveAmino;
                    fromAmino: (object: _132.MsgBridgeReceiveAmino) => _132.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: (message: _132.MsgAddCreditType) => _132.MsgAddCreditTypeAmino;
                    fromAmino: (object: _132.MsgAddCreditTypeAmino) => _132.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: (message: _132.MsgSetClassCreatorAllowlist) => _132.MsgSetClassCreatorAllowlistAmino;
                    fromAmino: (object: _132.MsgSetClassCreatorAllowlistAmino) => _132.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: (message: _132.MsgAddClassCreator) => _132.MsgAddClassCreatorAmino;
                    fromAmino: (object: _132.MsgAddClassCreatorAmino) => _132.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: (message: _132.MsgRemoveClassCreator) => _132.MsgRemoveClassCreatorAmino;
                    fromAmino: (object: _132.MsgRemoveClassCreatorAmino) => _132.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateClassFee) => _132.MsgUpdateClassFeeAmino;
                    fromAmino: (object: _132.MsgUpdateClassFeeAmino) => _132.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _132.MsgAddAllowedBridgeChain) => _132.MsgAddAllowedBridgeChainAmino;
                    fromAmino: (object: _132.MsgAddAllowedBridgeChainAmino) => _132.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _132.MsgRemoveAllowedBridgeChain) => _132.MsgRemoveAllowedBridgeChainAmino;
                    fromAmino: (object: _132.MsgRemoveAllowedBridgeChainAmino) => _132.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _133.Params;
                fromJSON(object: any): _133.Params;
                toJSON(message: _133.Params): unknown;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
                fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                toProto(message: _133.Params): Uint8Array;
                toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
            };
            Credits: {
                typeUrl: string;
                encode(message: _133.Credits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _133.Credits;
                fromJSON(object: any): _133.Credits;
                toJSON(message: _133.Credits): unknown;
                fromPartial(object: Partial<_133.Credits>): _133.Credits;
                fromAmino(object: _133.CreditsAmino): _133.Credits;
                toAmino(message: _133.Credits): _133.CreditsAmino;
                fromAminoMsg(object: _133.CreditsAminoMsg): _133.Credits;
                fromProtoMsg(message: _133.CreditsProtoMsg): _133.Credits;
                toProto(message: _133.Credits): Uint8Array;
                toProtoMsg(message: _133.Credits): _133.CreditsProtoMsg;
            };
            BatchIssuance: {
                typeUrl: string;
                encode(message: _133.BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _133.BatchIssuance;
                fromJSON(object: any): _133.BatchIssuance;
                toJSON(message: _133.BatchIssuance): unknown;
                fromPartial(object: Partial<_133.BatchIssuance>): _133.BatchIssuance;
                fromAmino(object: _133.BatchIssuanceAmino): _133.BatchIssuance;
                toAmino(message: _133.BatchIssuance): _133.BatchIssuanceAmino;
                fromAminoMsg(object: _133.BatchIssuanceAminoMsg): _133.BatchIssuance;
                fromProtoMsg(message: _133.BatchIssuanceProtoMsg): _133.BatchIssuance;
                toProto(message: _133.BatchIssuance): Uint8Array;
                toProtoMsg(message: _133.BatchIssuance): _133.BatchIssuanceProtoMsg;
            };
            OriginTx: {
                typeUrl: string;
                encode(message: _133.OriginTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _133.OriginTx;
                fromJSON(object: any): _133.OriginTx;
                toJSON(message: _133.OriginTx): unknown;
                fromPartial(object: Partial<_133.OriginTx>): _133.OriginTx;
                fromAmino(object: _133.OriginTxAmino): _133.OriginTx;
                toAmino(message: _133.OriginTx): _133.OriginTxAmino;
                fromAminoMsg(object: _133.OriginTxAminoMsg): _133.OriginTx;
                fromProtoMsg(message: _133.OriginTxProtoMsg): _133.OriginTx;
                toProto(message: _133.OriginTx): Uint8Array;
                toProtoMsg(message: _133.OriginTx): _133.OriginTxProtoMsg;
            };
            CreditTypeProposal: {
                typeUrl: string;
                encode(message: _133.CreditTypeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _133.CreditTypeProposal;
                fromJSON(object: any): _133.CreditTypeProposal;
                toJSON(message: _133.CreditTypeProposal): unknown;
                fromPartial(object: Partial<_133.CreditTypeProposal>): _133.CreditTypeProposal;
                fromAmino(object: _133.CreditTypeProposalAmino): _133.CreditTypeProposal;
                toAmino(message: _133.CreditTypeProposal): _133.CreditTypeProposalAmino;
                fromAminoMsg(object: _133.CreditTypeProposalAminoMsg): _133.CreditTypeProposal;
                fromProtoMsg(message: _133.CreditTypeProposalProtoMsg): _133.CreditTypeProposal;
                toProto(message: _133.CreditTypeProposal): Uint8Array;
                toProtoMsg(message: _133.CreditTypeProposal): _133.CreditTypeProposalProtoMsg;
            };
            AllowedDenom: {
                typeUrl: string;
                encode(message: _133.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _133.AllowedDenom;
                fromJSON(object: any): _133.AllowedDenom;
                toJSON(message: _133.AllowedDenom): unknown;
                fromPartial(object: Partial<_133.AllowedDenom>): _133.AllowedDenom;
                fromAmino(object: _133.AllowedDenomAmino): _133.AllowedDenom;
                toAmino(message: _133.AllowedDenom): _133.AllowedDenomAmino;
                fromAminoMsg(object: _133.AllowedDenomAminoMsg): _133.AllowedDenom;
                fromProtoMsg(message: _133.AllowedDenomProtoMsg): _133.AllowedDenom;
                toProto(message: _133.AllowedDenom): Uint8Array;
                toProtoMsg(message: _133.AllowedDenom): _133.AllowedDenomProtoMsg;
            };
            MsgAddCreditType: {
                typeUrl: string;
                encode(message: _132.MsgAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgAddCreditType;
                fromJSON(object: any): _132.MsgAddCreditType;
                toJSON(message: _132.MsgAddCreditType): unknown;
                fromPartial(object: Partial<_132.MsgAddCreditType>): _132.MsgAddCreditType;
                fromAmino(object: _132.MsgAddCreditTypeAmino): _132.MsgAddCreditType;
                toAmino(message: _132.MsgAddCreditType): _132.MsgAddCreditTypeAmino;
                fromAminoMsg(object: _132.MsgAddCreditTypeAminoMsg): _132.MsgAddCreditType;
                toAminoMsg(message: _132.MsgAddCreditType): _132.MsgAddCreditTypeAminoMsg;
                fromProtoMsg(message: _132.MsgAddCreditTypeProtoMsg): _132.MsgAddCreditType;
                toProto(message: _132.MsgAddCreditType): Uint8Array;
                toProtoMsg(message: _132.MsgAddCreditType): _132.MsgAddCreditTypeProtoMsg;
            };
            MsgAddCreditTypeResponse: {
                typeUrl: string;
                encode(_: _132.MsgAddCreditTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgAddCreditTypeResponse;
                fromJSON(_: any): _132.MsgAddCreditTypeResponse;
                toJSON(_: _132.MsgAddCreditTypeResponse): unknown;
                fromPartial(_: Partial<_132.MsgAddCreditTypeResponse>): _132.MsgAddCreditTypeResponse;
                fromAmino(_: _132.MsgAddCreditTypeResponseAmino): _132.MsgAddCreditTypeResponse;
                toAmino(_: _132.MsgAddCreditTypeResponse): _132.MsgAddCreditTypeResponseAmino;
                fromAminoMsg(object: _132.MsgAddCreditTypeResponseAminoMsg): _132.MsgAddCreditTypeResponse;
                fromProtoMsg(message: _132.MsgAddCreditTypeResponseProtoMsg): _132.MsgAddCreditTypeResponse;
                toProto(message: _132.MsgAddCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _132.MsgAddCreditTypeResponse): _132.MsgAddCreditTypeResponseProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _132.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCreateClass;
                fromJSON(object: any): _132.MsgCreateClass;
                toJSON(message: _132.MsgCreateClass): unknown;
                fromPartial(object: Partial<_132.MsgCreateClass>): _132.MsgCreateClass;
                fromAmino(object: _132.MsgCreateClassAmino): _132.MsgCreateClass;
                toAmino(message: _132.MsgCreateClass): _132.MsgCreateClassAmino;
                fromAminoMsg(object: _132.MsgCreateClassAminoMsg): _132.MsgCreateClass;
                toAminoMsg(message: _132.MsgCreateClass): _132.MsgCreateClassAminoMsg;
                fromProtoMsg(message: _132.MsgCreateClassProtoMsg): _132.MsgCreateClass;
                toProto(message: _132.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _132.MsgCreateClass): _132.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _132.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCreateClassResponse;
                fromJSON(object: any): _132.MsgCreateClassResponse;
                toJSON(message: _132.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_132.MsgCreateClassResponse>): _132.MsgCreateClassResponse;
                fromAmino(object: _132.MsgCreateClassResponseAmino): _132.MsgCreateClassResponse;
                toAmino(message: _132.MsgCreateClassResponse): _132.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _132.MsgCreateClassResponseAminoMsg): _132.MsgCreateClassResponse;
                fromProtoMsg(message: _132.MsgCreateClassResponseProtoMsg): _132.MsgCreateClassResponse;
                toProto(message: _132.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _132.MsgCreateClassResponse): _132.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateProject: {
                typeUrl: string;
                encode(message: _132.MsgCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCreateProject;
                fromJSON(object: any): _132.MsgCreateProject;
                toJSON(message: _132.MsgCreateProject): unknown;
                fromPartial(object: Partial<_132.MsgCreateProject>): _132.MsgCreateProject;
                fromAmino(object: _132.MsgCreateProjectAmino): _132.MsgCreateProject;
                toAmino(message: _132.MsgCreateProject): _132.MsgCreateProjectAmino;
                fromAminoMsg(object: _132.MsgCreateProjectAminoMsg): _132.MsgCreateProject;
                toAminoMsg(message: _132.MsgCreateProject): _132.MsgCreateProjectAminoMsg;
                fromProtoMsg(message: _132.MsgCreateProjectProtoMsg): _132.MsgCreateProject;
                toProto(message: _132.MsgCreateProject): Uint8Array;
                toProtoMsg(message: _132.MsgCreateProject): _132.MsgCreateProjectProtoMsg;
            };
            MsgCreateProjectResponse: {
                typeUrl: string;
                encode(message: _132.MsgCreateProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCreateProjectResponse;
                fromJSON(object: any): _132.MsgCreateProjectResponse;
                toJSON(message: _132.MsgCreateProjectResponse): unknown;
                fromPartial(object: Partial<_132.MsgCreateProjectResponse>): _132.MsgCreateProjectResponse;
                fromAmino(object: _132.MsgCreateProjectResponseAmino): _132.MsgCreateProjectResponse;
                toAmino(message: _132.MsgCreateProjectResponse): _132.MsgCreateProjectResponseAmino;
                fromAminoMsg(object: _132.MsgCreateProjectResponseAminoMsg): _132.MsgCreateProjectResponse;
                fromProtoMsg(message: _132.MsgCreateProjectResponseProtoMsg): _132.MsgCreateProjectResponse;
                toProto(message: _132.MsgCreateProjectResponse): Uint8Array;
                toProtoMsg(message: _132.MsgCreateProjectResponse): _132.MsgCreateProjectResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _132.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCreateBatch;
                fromJSON(object: any): _132.MsgCreateBatch;
                toJSON(message: _132.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_132.MsgCreateBatch>): _132.MsgCreateBatch;
                fromAmino(object: _132.MsgCreateBatchAmino): _132.MsgCreateBatch;
                toAmino(message: _132.MsgCreateBatch): _132.MsgCreateBatchAmino;
                fromAminoMsg(object: _132.MsgCreateBatchAminoMsg): _132.MsgCreateBatch;
                toAminoMsg(message: _132.MsgCreateBatch): _132.MsgCreateBatchAminoMsg;
                fromProtoMsg(message: _132.MsgCreateBatchProtoMsg): _132.MsgCreateBatch;
                toProto(message: _132.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _132.MsgCreateBatch): _132.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _132.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCreateBatchResponse;
                fromJSON(object: any): _132.MsgCreateBatchResponse;
                toJSON(message: _132.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_132.MsgCreateBatchResponse>): _132.MsgCreateBatchResponse;
                fromAmino(object: _132.MsgCreateBatchResponseAmino): _132.MsgCreateBatchResponse;
                toAmino(message: _132.MsgCreateBatchResponse): _132.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _132.MsgCreateBatchResponseAminoMsg): _132.MsgCreateBatchResponse;
                fromProtoMsg(message: _132.MsgCreateBatchResponseProtoMsg): _132.MsgCreateBatchResponse;
                toProto(message: _132.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _132.MsgCreateBatchResponse): _132.MsgCreateBatchResponseProtoMsg;
            };
            MsgMintBatchCredits: {
                typeUrl: string;
                encode(message: _132.MsgMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgMintBatchCredits;
                fromJSON(object: any): _132.MsgMintBatchCredits;
                toJSON(message: _132.MsgMintBatchCredits): unknown;
                fromPartial(object: Partial<_132.MsgMintBatchCredits>): _132.MsgMintBatchCredits;
                fromAmino(object: _132.MsgMintBatchCreditsAmino): _132.MsgMintBatchCredits;
                toAmino(message: _132.MsgMintBatchCredits): _132.MsgMintBatchCreditsAmino;
                fromAminoMsg(object: _132.MsgMintBatchCreditsAminoMsg): _132.MsgMintBatchCredits;
                toAminoMsg(message: _132.MsgMintBatchCredits): _132.MsgMintBatchCreditsAminoMsg;
                fromProtoMsg(message: _132.MsgMintBatchCreditsProtoMsg): _132.MsgMintBatchCredits;
                toProto(message: _132.MsgMintBatchCredits): Uint8Array;
                toProtoMsg(message: _132.MsgMintBatchCredits): _132.MsgMintBatchCreditsProtoMsg;
            };
            MsgMintBatchCreditsResponse: {
                typeUrl: string;
                encode(_: _132.MsgMintBatchCreditsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _132.MsgMintBatchCreditsResponse;
                toJSON(_: _132.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: Partial<_132.MsgMintBatchCreditsResponse>): _132.MsgMintBatchCreditsResponse;
                fromAmino(_: _132.MsgMintBatchCreditsResponseAmino): _132.MsgMintBatchCreditsResponse;
                toAmino(_: _132.MsgMintBatchCreditsResponse): _132.MsgMintBatchCreditsResponseAmino;
                fromAminoMsg(object: _132.MsgMintBatchCreditsResponseAminoMsg): _132.MsgMintBatchCreditsResponse;
                fromProtoMsg(message: _132.MsgMintBatchCreditsResponseProtoMsg): _132.MsgMintBatchCreditsResponse;
                toProto(message: _132.MsgMintBatchCreditsResponse): Uint8Array;
                toProtoMsg(message: _132.MsgMintBatchCreditsResponse): _132.MsgMintBatchCreditsResponseProtoMsg;
            };
            MsgSealBatch: {
                typeUrl: string;
                encode(message: _132.MsgSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSealBatch;
                fromJSON(object: any): _132.MsgSealBatch;
                toJSON(message: _132.MsgSealBatch): unknown;
                fromPartial(object: Partial<_132.MsgSealBatch>): _132.MsgSealBatch;
                fromAmino(object: _132.MsgSealBatchAmino): _132.MsgSealBatch;
                toAmino(message: _132.MsgSealBatch): _132.MsgSealBatchAmino;
                fromAminoMsg(object: _132.MsgSealBatchAminoMsg): _132.MsgSealBatch;
                toAminoMsg(message: _132.MsgSealBatch): _132.MsgSealBatchAminoMsg;
                fromProtoMsg(message: _132.MsgSealBatchProtoMsg): _132.MsgSealBatch;
                toProto(message: _132.MsgSealBatch): Uint8Array;
                toProtoMsg(message: _132.MsgSealBatch): _132.MsgSealBatchProtoMsg;
            };
            MsgSealBatchResponse: {
                typeUrl: string;
                encode(_: _132.MsgSealBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSealBatchResponse;
                fromJSON(_: any): _132.MsgSealBatchResponse;
                toJSON(_: _132.MsgSealBatchResponse): unknown;
                fromPartial(_: Partial<_132.MsgSealBatchResponse>): _132.MsgSealBatchResponse;
                fromAmino(_: _132.MsgSealBatchResponseAmino): _132.MsgSealBatchResponse;
                toAmino(_: _132.MsgSealBatchResponse): _132.MsgSealBatchResponseAmino;
                fromAminoMsg(object: _132.MsgSealBatchResponseAminoMsg): _132.MsgSealBatchResponse;
                fromProtoMsg(message: _132.MsgSealBatchResponseProtoMsg): _132.MsgSealBatchResponse;
                toProto(message: _132.MsgSealBatchResponse): Uint8Array;
                toProtoMsg(message: _132.MsgSealBatchResponse): _132.MsgSealBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _132.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSend;
                fromJSON(object: any): _132.MsgSend;
                toJSON(message: _132.MsgSend): unknown;
                fromPartial(object: Partial<_132.MsgSend>): _132.MsgSend;
                fromAmino(object: _132.MsgSendAmino): _132.MsgSend;
                toAmino(message: _132.MsgSend): _132.MsgSendAmino;
                fromAminoMsg(object: _132.MsgSendAminoMsg): _132.MsgSend;
                toAminoMsg(message: _132.MsgSend): _132.MsgSendAminoMsg;
                fromProtoMsg(message: _132.MsgSendProtoMsg): _132.MsgSend;
                toProto(message: _132.MsgSend): Uint8Array;
                toProtoMsg(message: _132.MsgSend): _132.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _132.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSend_SendCredits;
                fromJSON(object: any): _132.MsgSend_SendCredits;
                toJSON(message: _132.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_132.MsgSend_SendCredits>): _132.MsgSend_SendCredits;
                fromAmino(object: _132.MsgSend_SendCreditsAmino): _132.MsgSend_SendCredits;
                toAmino(message: _132.MsgSend_SendCredits): _132.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _132.MsgSend_SendCreditsAminoMsg): _132.MsgSend_SendCredits;
                fromProtoMsg(message: _132.MsgSend_SendCreditsProtoMsg): _132.MsgSend_SendCredits;
                toProto(message: _132.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _132.MsgSend_SendCredits): _132.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _132.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSendResponse;
                fromJSON(_: any): _132.MsgSendResponse;
                toJSON(_: _132.MsgSendResponse): unknown;
                fromPartial(_: Partial<_132.MsgSendResponse>): _132.MsgSendResponse;
                fromAmino(_: _132.MsgSendResponseAmino): _132.MsgSendResponse;
                toAmino(_: _132.MsgSendResponse): _132.MsgSendResponseAmino;
                fromAminoMsg(object: _132.MsgSendResponseAminoMsg): _132.MsgSendResponse;
                fromProtoMsg(message: _132.MsgSendResponseProtoMsg): _132.MsgSendResponse;
                toProto(message: _132.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _132.MsgSendResponse): _132.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _132.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgRetire;
                fromJSON(object: any): _132.MsgRetire;
                toJSON(message: _132.MsgRetire): unknown;
                fromPartial(object: Partial<_132.MsgRetire>): _132.MsgRetire;
                fromAmino(object: _132.MsgRetireAmino): _132.MsgRetire;
                toAmino(message: _132.MsgRetire): _132.MsgRetireAmino;
                fromAminoMsg(object: _132.MsgRetireAminoMsg): _132.MsgRetire;
                toAminoMsg(message: _132.MsgRetire): _132.MsgRetireAminoMsg;
                fromProtoMsg(message: _132.MsgRetireProtoMsg): _132.MsgRetire;
                toProto(message: _132.MsgRetire): Uint8Array;
                toProtoMsg(message: _132.MsgRetire): _132.MsgRetireProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _132.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgRetireResponse;
                fromJSON(_: any): _132.MsgRetireResponse;
                toJSON(_: _132.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_132.MsgRetireResponse>): _132.MsgRetireResponse;
                fromAmino(_: _132.MsgRetireResponseAmino): _132.MsgRetireResponse;
                toAmino(_: _132.MsgRetireResponse): _132.MsgRetireResponseAmino;
                fromAminoMsg(object: _132.MsgRetireResponseAminoMsg): _132.MsgRetireResponse;
                fromProtoMsg(message: _132.MsgRetireResponseProtoMsg): _132.MsgRetireResponse;
                toProto(message: _132.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _132.MsgRetireResponse): _132.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _132.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCancel;
                fromJSON(object: any): _132.MsgCancel;
                toJSON(message: _132.MsgCancel): unknown;
                fromPartial(object: Partial<_132.MsgCancel>): _132.MsgCancel;
                fromAmino(object: _132.MsgCancelAmino): _132.MsgCancel;
                toAmino(message: _132.MsgCancel): _132.MsgCancelAmino;
                fromAminoMsg(object: _132.MsgCancelAminoMsg): _132.MsgCancel;
                toAminoMsg(message: _132.MsgCancel): _132.MsgCancelAminoMsg;
                fromProtoMsg(message: _132.MsgCancelProtoMsg): _132.MsgCancel;
                toProto(message: _132.MsgCancel): Uint8Array;
                toProtoMsg(message: _132.MsgCancel): _132.MsgCancelProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _132.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgCancelResponse;
                fromJSON(_: any): _132.MsgCancelResponse;
                toJSON(_: _132.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_132.MsgCancelResponse>): _132.MsgCancelResponse;
                fromAmino(_: _132.MsgCancelResponseAmino): _132.MsgCancelResponse;
                toAmino(_: _132.MsgCancelResponse): _132.MsgCancelResponseAmino;
                fromAminoMsg(object: _132.MsgCancelResponseAminoMsg): _132.MsgCancelResponse;
                fromProtoMsg(message: _132.MsgCancelResponseProtoMsg): _132.MsgCancelResponse;
                toProto(message: _132.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _132.MsgCancelResponse): _132.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _132.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassAdmin;
                fromJSON(object: any): _132.MsgUpdateClassAdmin;
                toJSON(message: _132.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_132.MsgUpdateClassAdmin>): _132.MsgUpdateClassAdmin;
                fromAmino(object: _132.MsgUpdateClassAdminAmino): _132.MsgUpdateClassAdmin;
                toAmino(message: _132.MsgUpdateClassAdmin): _132.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _132.MsgUpdateClassAdminAminoMsg): _132.MsgUpdateClassAdmin;
                toAminoMsg(message: _132.MsgUpdateClassAdmin): _132.MsgUpdateClassAdminAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateClassAdminProtoMsg): _132.MsgUpdateClassAdmin;
                toProto(message: _132.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassAdmin): _132.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _132.MsgUpdateClassAdminResponse;
                toJSON(_: _132.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateClassAdminResponse>): _132.MsgUpdateClassAdminResponse;
                fromAmino(_: _132.MsgUpdateClassAdminResponseAmino): _132.MsgUpdateClassAdminResponse;
                toAmino(_: _132.MsgUpdateClassAdminResponse): _132.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateClassAdminResponseAminoMsg): _132.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _132.MsgUpdateClassAdminResponseProtoMsg): _132.MsgUpdateClassAdminResponse;
                toProto(message: _132.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassAdminResponse): _132.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _132.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassIssuers;
                fromJSON(object: any): _132.MsgUpdateClassIssuers;
                toJSON(message: _132.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_132.MsgUpdateClassIssuers>): _132.MsgUpdateClassIssuers;
                fromAmino(object: _132.MsgUpdateClassIssuersAmino): _132.MsgUpdateClassIssuers;
                toAmino(message: _132.MsgUpdateClassIssuers): _132.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _132.MsgUpdateClassIssuersAminoMsg): _132.MsgUpdateClassIssuers;
                toAminoMsg(message: _132.MsgUpdateClassIssuers): _132.MsgUpdateClassIssuersAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateClassIssuersProtoMsg): _132.MsgUpdateClassIssuers;
                toProto(message: _132.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassIssuers): _132.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _132.MsgUpdateClassIssuersResponse;
                toJSON(_: _132.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateClassIssuersResponse>): _132.MsgUpdateClassIssuersResponse;
                fromAmino(_: _132.MsgUpdateClassIssuersResponseAmino): _132.MsgUpdateClassIssuersResponse;
                toAmino(_: _132.MsgUpdateClassIssuersResponse): _132.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateClassIssuersResponseAminoMsg): _132.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _132.MsgUpdateClassIssuersResponseProtoMsg): _132.MsgUpdateClassIssuersResponse;
                toProto(message: _132.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassIssuersResponse): _132.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _132.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassMetadata;
                fromJSON(object: any): _132.MsgUpdateClassMetadata;
                toJSON(message: _132.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_132.MsgUpdateClassMetadata>): _132.MsgUpdateClassMetadata;
                fromAmino(object: _132.MsgUpdateClassMetadataAmino): _132.MsgUpdateClassMetadata;
                toAmino(message: _132.MsgUpdateClassMetadata): _132.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _132.MsgUpdateClassMetadataAminoMsg): _132.MsgUpdateClassMetadata;
                toAminoMsg(message: _132.MsgUpdateClassMetadata): _132.MsgUpdateClassMetadataAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateClassMetadataProtoMsg): _132.MsgUpdateClassMetadata;
                toProto(message: _132.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassMetadata): _132.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _132.MsgUpdateClassMetadataResponse;
                toJSON(_: _132.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateClassMetadataResponse>): _132.MsgUpdateClassMetadataResponse;
                fromAmino(_: _132.MsgUpdateClassMetadataResponseAmino): _132.MsgUpdateClassMetadataResponse;
                toAmino(_: _132.MsgUpdateClassMetadataResponse): _132.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateClassMetadataResponseAminoMsg): _132.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _132.MsgUpdateClassMetadataResponseProtoMsg): _132.MsgUpdateClassMetadataResponse;
                toProto(message: _132.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassMetadataResponse): _132.MsgUpdateClassMetadataResponseProtoMsg;
            };
            MsgUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _132.MsgUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateProjectAdmin;
                fromJSON(object: any): _132.MsgUpdateProjectAdmin;
                toJSON(message: _132.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_132.MsgUpdateProjectAdmin>): _132.MsgUpdateProjectAdmin;
                fromAmino(object: _132.MsgUpdateProjectAdminAmino): _132.MsgUpdateProjectAdmin;
                toAmino(message: _132.MsgUpdateProjectAdmin): _132.MsgUpdateProjectAdminAmino;
                fromAminoMsg(object: _132.MsgUpdateProjectAdminAminoMsg): _132.MsgUpdateProjectAdmin;
                toAminoMsg(message: _132.MsgUpdateProjectAdmin): _132.MsgUpdateProjectAdminAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateProjectAdminProtoMsg): _132.MsgUpdateProjectAdmin;
                toProto(message: _132.MsgUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateProjectAdmin): _132.MsgUpdateProjectAdminProtoMsg;
            };
            MsgUpdateProjectAdminResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateProjectAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _132.MsgUpdateProjectAdminResponse;
                toJSON(_: _132.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateProjectAdminResponse>): _132.MsgUpdateProjectAdminResponse;
                fromAmino(_: _132.MsgUpdateProjectAdminResponseAmino): _132.MsgUpdateProjectAdminResponse;
                toAmino(_: _132.MsgUpdateProjectAdminResponse): _132.MsgUpdateProjectAdminResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateProjectAdminResponseAminoMsg): _132.MsgUpdateProjectAdminResponse;
                fromProtoMsg(message: _132.MsgUpdateProjectAdminResponseProtoMsg): _132.MsgUpdateProjectAdminResponse;
                toProto(message: _132.MsgUpdateProjectAdminResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateProjectAdminResponse): _132.MsgUpdateProjectAdminResponseProtoMsg;
            };
            MsgUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _132.MsgUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateProjectMetadata;
                fromJSON(object: any): _132.MsgUpdateProjectMetadata;
                toJSON(message: _132.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_132.MsgUpdateProjectMetadata>): _132.MsgUpdateProjectMetadata;
                fromAmino(object: _132.MsgUpdateProjectMetadataAmino): _132.MsgUpdateProjectMetadata;
                toAmino(message: _132.MsgUpdateProjectMetadata): _132.MsgUpdateProjectMetadataAmino;
                fromAminoMsg(object: _132.MsgUpdateProjectMetadataAminoMsg): _132.MsgUpdateProjectMetadata;
                toAminoMsg(message: _132.MsgUpdateProjectMetadata): _132.MsgUpdateProjectMetadataAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateProjectMetadataProtoMsg): _132.MsgUpdateProjectMetadata;
                toProto(message: _132.MsgUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateProjectMetadata): _132.MsgUpdateProjectMetadataProtoMsg;
            };
            MsgUpdateProjectMetadataResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateProjectMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _132.MsgUpdateProjectMetadataResponse;
                toJSON(_: _132.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateProjectMetadataResponse>): _132.MsgUpdateProjectMetadataResponse;
                fromAmino(_: _132.MsgUpdateProjectMetadataResponseAmino): _132.MsgUpdateProjectMetadataResponse;
                toAmino(_: _132.MsgUpdateProjectMetadataResponse): _132.MsgUpdateProjectMetadataResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateProjectMetadataResponseAminoMsg): _132.MsgUpdateProjectMetadataResponse;
                fromProtoMsg(message: _132.MsgUpdateProjectMetadataResponseProtoMsg): _132.MsgUpdateProjectMetadataResponse;
                toProto(message: _132.MsgUpdateProjectMetadataResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateProjectMetadataResponse): _132.MsgUpdateProjectMetadataResponseProtoMsg;
            };
            MsgBridge: {
                typeUrl: string;
                encode(message: _132.MsgBridge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgBridge;
                fromJSON(object: any): _132.MsgBridge;
                toJSON(message: _132.MsgBridge): unknown;
                fromPartial(object: Partial<_132.MsgBridge>): _132.MsgBridge;
                fromAmino(object: _132.MsgBridgeAmino): _132.MsgBridge;
                toAmino(message: _132.MsgBridge): _132.MsgBridgeAmino;
                fromAminoMsg(object: _132.MsgBridgeAminoMsg): _132.MsgBridge;
                toAminoMsg(message: _132.MsgBridge): _132.MsgBridgeAminoMsg;
                fromProtoMsg(message: _132.MsgBridgeProtoMsg): _132.MsgBridge;
                toProto(message: _132.MsgBridge): Uint8Array;
                toProtoMsg(message: _132.MsgBridge): _132.MsgBridgeProtoMsg;
            };
            MsgUpdateBatchMetadata: {
                typeUrl: string;
                encode(message: _132.MsgUpdateBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateBatchMetadata;
                fromJSON(object: any): _132.MsgUpdateBatchMetadata;
                toJSON(message: _132.MsgUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_132.MsgUpdateBatchMetadata>): _132.MsgUpdateBatchMetadata;
                fromAmino(object: _132.MsgUpdateBatchMetadataAmino): _132.MsgUpdateBatchMetadata;
                toAmino(message: _132.MsgUpdateBatchMetadata): _132.MsgUpdateBatchMetadataAmino;
                fromAminoMsg(object: _132.MsgUpdateBatchMetadataAminoMsg): _132.MsgUpdateBatchMetadata;
                toAminoMsg(message: _132.MsgUpdateBatchMetadata): _132.MsgUpdateBatchMetadataAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateBatchMetadataProtoMsg): _132.MsgUpdateBatchMetadata;
                toProto(message: _132.MsgUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateBatchMetadata): _132.MsgUpdateBatchMetadataProtoMsg;
            };
            MsgUpdateBatchMetadataResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateBatchMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateBatchMetadataResponse;
                fromJSON(_: any): _132.MsgUpdateBatchMetadataResponse;
                toJSON(_: _132.MsgUpdateBatchMetadataResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateBatchMetadataResponse>): _132.MsgUpdateBatchMetadataResponse;
                fromAmino(_: _132.MsgUpdateBatchMetadataResponseAmino): _132.MsgUpdateBatchMetadataResponse;
                toAmino(_: _132.MsgUpdateBatchMetadataResponse): _132.MsgUpdateBatchMetadataResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateBatchMetadataResponseAminoMsg): _132.MsgUpdateBatchMetadataResponse;
                fromProtoMsg(message: _132.MsgUpdateBatchMetadataResponseProtoMsg): _132.MsgUpdateBatchMetadataResponse;
                toProto(message: _132.MsgUpdateBatchMetadataResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateBatchMetadataResponse): _132.MsgUpdateBatchMetadataResponseProtoMsg;
            };
            MsgBridgeResponse: {
                typeUrl: string;
                encode(_: _132.MsgBridgeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgBridgeResponse;
                fromJSON(_: any): _132.MsgBridgeResponse;
                toJSON(_: _132.MsgBridgeResponse): unknown;
                fromPartial(_: Partial<_132.MsgBridgeResponse>): _132.MsgBridgeResponse;
                fromAmino(_: _132.MsgBridgeResponseAmino): _132.MsgBridgeResponse;
                toAmino(_: _132.MsgBridgeResponse): _132.MsgBridgeResponseAmino;
                fromAminoMsg(object: _132.MsgBridgeResponseAminoMsg): _132.MsgBridgeResponse;
                fromProtoMsg(message: _132.MsgBridgeResponseProtoMsg): _132.MsgBridgeResponse;
                toProto(message: _132.MsgBridgeResponse): Uint8Array;
                toProtoMsg(message: _132.MsgBridgeResponse): _132.MsgBridgeResponseProtoMsg;
            };
            MsgBridgeReceive: {
                typeUrl: string;
                encode(message: _132.MsgBridgeReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgBridgeReceive;
                fromJSON(object: any): _132.MsgBridgeReceive;
                toJSON(message: _132.MsgBridgeReceive): unknown;
                fromPartial(object: Partial<_132.MsgBridgeReceive>): _132.MsgBridgeReceive;
                fromAmino(object: _132.MsgBridgeReceiveAmino): _132.MsgBridgeReceive;
                toAmino(message: _132.MsgBridgeReceive): _132.MsgBridgeReceiveAmino;
                fromAminoMsg(object: _132.MsgBridgeReceiveAminoMsg): _132.MsgBridgeReceive;
                toAminoMsg(message: _132.MsgBridgeReceive): _132.MsgBridgeReceiveAminoMsg;
                fromProtoMsg(message: _132.MsgBridgeReceiveProtoMsg): _132.MsgBridgeReceive;
                toProto(message: _132.MsgBridgeReceive): Uint8Array;
                toProtoMsg(message: _132.MsgBridgeReceive): _132.MsgBridgeReceiveProtoMsg;
            };
            MsgBridgeReceive_Batch: {
                typeUrl: string;
                encode(message: _132.MsgBridgeReceive_Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgBridgeReceive_Batch;
                fromJSON(object: any): _132.MsgBridgeReceive_Batch;
                toJSON(message: _132.MsgBridgeReceive_Batch): unknown;
                fromPartial(object: Partial<_132.MsgBridgeReceive_Batch>): _132.MsgBridgeReceive_Batch;
                fromAmino(object: _132.MsgBridgeReceive_BatchAmino): _132.MsgBridgeReceive_Batch;
                toAmino(message: _132.MsgBridgeReceive_Batch): _132.MsgBridgeReceive_BatchAmino;
                fromAminoMsg(object: _132.MsgBridgeReceive_BatchAminoMsg): _132.MsgBridgeReceive_Batch;
                fromProtoMsg(message: _132.MsgBridgeReceive_BatchProtoMsg): _132.MsgBridgeReceive_Batch;
                toProto(message: _132.MsgBridgeReceive_Batch): Uint8Array;
                toProtoMsg(message: _132.MsgBridgeReceive_Batch): _132.MsgBridgeReceive_BatchProtoMsg;
            };
            MsgBridgeReceive_Project: {
                typeUrl: string;
                encode(message: _132.MsgBridgeReceive_Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgBridgeReceive_Project;
                fromJSON(object: any): _132.MsgBridgeReceive_Project;
                toJSON(message: _132.MsgBridgeReceive_Project): unknown;
                fromPartial(object: Partial<_132.MsgBridgeReceive_Project>): _132.MsgBridgeReceive_Project;
                fromAmino(object: _132.MsgBridgeReceive_ProjectAmino): _132.MsgBridgeReceive_Project;
                toAmino(message: _132.MsgBridgeReceive_Project): _132.MsgBridgeReceive_ProjectAmino;
                fromAminoMsg(object: _132.MsgBridgeReceive_ProjectAminoMsg): _132.MsgBridgeReceive_Project;
                fromProtoMsg(message: _132.MsgBridgeReceive_ProjectProtoMsg): _132.MsgBridgeReceive_Project;
                toProto(message: _132.MsgBridgeReceive_Project): Uint8Array;
                toProtoMsg(message: _132.MsgBridgeReceive_Project): _132.MsgBridgeReceive_ProjectProtoMsg;
            };
            MsgBridgeReceiveResponse: {
                typeUrl: string;
                encode(message: _132.MsgBridgeReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgBridgeReceiveResponse;
                fromJSON(object: any): _132.MsgBridgeReceiveResponse;
                toJSON(message: _132.MsgBridgeReceiveResponse): unknown;
                fromPartial(object: Partial<_132.MsgBridgeReceiveResponse>): _132.MsgBridgeReceiveResponse;
                fromAmino(object: _132.MsgBridgeReceiveResponseAmino): _132.MsgBridgeReceiveResponse;
                toAmino(message: _132.MsgBridgeReceiveResponse): _132.MsgBridgeReceiveResponseAmino;
                fromAminoMsg(object: _132.MsgBridgeReceiveResponseAminoMsg): _132.MsgBridgeReceiveResponse;
                fromProtoMsg(message: _132.MsgBridgeReceiveResponseProtoMsg): _132.MsgBridgeReceiveResponse;
                toProto(message: _132.MsgBridgeReceiveResponse): Uint8Array;
                toProtoMsg(message: _132.MsgBridgeReceiveResponse): _132.MsgBridgeReceiveResponseProtoMsg;
            };
            MsgAddClassCreator: {
                typeUrl: string;
                encode(message: _132.MsgAddClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgAddClassCreator;
                fromJSON(object: any): _132.MsgAddClassCreator;
                toJSON(message: _132.MsgAddClassCreator): unknown;
                fromPartial(object: Partial<_132.MsgAddClassCreator>): _132.MsgAddClassCreator;
                fromAmino(object: _132.MsgAddClassCreatorAmino): _132.MsgAddClassCreator;
                toAmino(message: _132.MsgAddClassCreator): _132.MsgAddClassCreatorAmino;
                fromAminoMsg(object: _132.MsgAddClassCreatorAminoMsg): _132.MsgAddClassCreator;
                toAminoMsg(message: _132.MsgAddClassCreator): _132.MsgAddClassCreatorAminoMsg;
                fromProtoMsg(message: _132.MsgAddClassCreatorProtoMsg): _132.MsgAddClassCreator;
                toProto(message: _132.MsgAddClassCreator): Uint8Array;
                toProtoMsg(message: _132.MsgAddClassCreator): _132.MsgAddClassCreatorProtoMsg;
            };
            MsgAddClassCreatorResponse: {
                typeUrl: string;
                encode(_: _132.MsgAddClassCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgAddClassCreatorResponse;
                fromJSON(_: any): _132.MsgAddClassCreatorResponse;
                toJSON(_: _132.MsgAddClassCreatorResponse): unknown;
                fromPartial(_: Partial<_132.MsgAddClassCreatorResponse>): _132.MsgAddClassCreatorResponse;
                fromAmino(_: _132.MsgAddClassCreatorResponseAmino): _132.MsgAddClassCreatorResponse;
                toAmino(_: _132.MsgAddClassCreatorResponse): _132.MsgAddClassCreatorResponseAmino;
                fromAminoMsg(object: _132.MsgAddClassCreatorResponseAminoMsg): _132.MsgAddClassCreatorResponse;
                fromProtoMsg(message: _132.MsgAddClassCreatorResponseProtoMsg): _132.MsgAddClassCreatorResponse;
                toProto(message: _132.MsgAddClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _132.MsgAddClassCreatorResponse): _132.MsgAddClassCreatorResponseProtoMsg;
            };
            MsgSetClassCreatorAllowlist: {
                typeUrl: string;
                encode(message: _132.MsgSetClassCreatorAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSetClassCreatorAllowlist;
                fromJSON(object: any): _132.MsgSetClassCreatorAllowlist;
                toJSON(message: _132.MsgSetClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_132.MsgSetClassCreatorAllowlist>): _132.MsgSetClassCreatorAllowlist;
                fromAmino(object: _132.MsgSetClassCreatorAllowlistAmino): _132.MsgSetClassCreatorAllowlist;
                toAmino(message: _132.MsgSetClassCreatorAllowlist): _132.MsgSetClassCreatorAllowlistAmino;
                fromAminoMsg(object: _132.MsgSetClassCreatorAllowlistAminoMsg): _132.MsgSetClassCreatorAllowlist;
                toAminoMsg(message: _132.MsgSetClassCreatorAllowlist): _132.MsgSetClassCreatorAllowlistAminoMsg;
                fromProtoMsg(message: _132.MsgSetClassCreatorAllowlistProtoMsg): _132.MsgSetClassCreatorAllowlist;
                toProto(message: _132.MsgSetClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _132.MsgSetClassCreatorAllowlist): _132.MsgSetClassCreatorAllowlistProtoMsg;
            };
            MsgSetClassCreatorAllowlistResponse: {
                typeUrl: string;
                encode(_: _132.MsgSetClassCreatorAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgSetClassCreatorAllowlistResponse;
                fromJSON(_: any): _132.MsgSetClassCreatorAllowlistResponse;
                toJSON(_: _132.MsgSetClassCreatorAllowlistResponse): unknown;
                fromPartial(_: Partial<_132.MsgSetClassCreatorAllowlistResponse>): _132.MsgSetClassCreatorAllowlistResponse;
                fromAmino(_: _132.MsgSetClassCreatorAllowlistResponseAmino): _132.MsgSetClassCreatorAllowlistResponse;
                toAmino(_: _132.MsgSetClassCreatorAllowlistResponse): _132.MsgSetClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _132.MsgSetClassCreatorAllowlistResponseAminoMsg): _132.MsgSetClassCreatorAllowlistResponse;
                fromProtoMsg(message: _132.MsgSetClassCreatorAllowlistResponseProtoMsg): _132.MsgSetClassCreatorAllowlistResponse;
                toProto(message: _132.MsgSetClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _132.MsgSetClassCreatorAllowlistResponse): _132.MsgSetClassCreatorAllowlistResponseProtoMsg;
            };
            MsgRemoveClassCreator: {
                typeUrl: string;
                encode(message: _132.MsgRemoveClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgRemoveClassCreator;
                fromJSON(object: any): _132.MsgRemoveClassCreator;
                toJSON(message: _132.MsgRemoveClassCreator): unknown;
                fromPartial(object: Partial<_132.MsgRemoveClassCreator>): _132.MsgRemoveClassCreator;
                fromAmino(object: _132.MsgRemoveClassCreatorAmino): _132.MsgRemoveClassCreator;
                toAmino(message: _132.MsgRemoveClassCreator): _132.MsgRemoveClassCreatorAmino;
                fromAminoMsg(object: _132.MsgRemoveClassCreatorAminoMsg): _132.MsgRemoveClassCreator;
                toAminoMsg(message: _132.MsgRemoveClassCreator): _132.MsgRemoveClassCreatorAminoMsg;
                fromProtoMsg(message: _132.MsgRemoveClassCreatorProtoMsg): _132.MsgRemoveClassCreator;
                toProto(message: _132.MsgRemoveClassCreator): Uint8Array;
                toProtoMsg(message: _132.MsgRemoveClassCreator): _132.MsgRemoveClassCreatorProtoMsg;
            };
            MsgRemoveClassCreatorResponse: {
                typeUrl: string;
                encode(_: _132.MsgRemoveClassCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgRemoveClassCreatorResponse;
                fromJSON(_: any): _132.MsgRemoveClassCreatorResponse;
                toJSON(_: _132.MsgRemoveClassCreatorResponse): unknown;
                fromPartial(_: Partial<_132.MsgRemoveClassCreatorResponse>): _132.MsgRemoveClassCreatorResponse;
                fromAmino(_: _132.MsgRemoveClassCreatorResponseAmino): _132.MsgRemoveClassCreatorResponse;
                toAmino(_: _132.MsgRemoveClassCreatorResponse): _132.MsgRemoveClassCreatorResponseAmino;
                fromAminoMsg(object: _132.MsgRemoveClassCreatorResponseAminoMsg): _132.MsgRemoveClassCreatorResponse;
                fromProtoMsg(message: _132.MsgRemoveClassCreatorResponseProtoMsg): _132.MsgRemoveClassCreatorResponse;
                toProto(message: _132.MsgRemoveClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _132.MsgRemoveClassCreatorResponse): _132.MsgRemoveClassCreatorResponseProtoMsg;
            };
            MsgUpdateClassFee: {
                typeUrl: string;
                encode(message: _132.MsgUpdateClassFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassFee;
                fromJSON(object: any): _132.MsgUpdateClassFee;
                toJSON(message: _132.MsgUpdateClassFee): unknown;
                fromPartial(object: Partial<_132.MsgUpdateClassFee>): _132.MsgUpdateClassFee;
                fromAmino(object: _132.MsgUpdateClassFeeAmino): _132.MsgUpdateClassFee;
                toAmino(message: _132.MsgUpdateClassFee): _132.MsgUpdateClassFeeAmino;
                fromAminoMsg(object: _132.MsgUpdateClassFeeAminoMsg): _132.MsgUpdateClassFee;
                toAminoMsg(message: _132.MsgUpdateClassFee): _132.MsgUpdateClassFeeAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateClassFeeProtoMsg): _132.MsgUpdateClassFee;
                toProto(message: _132.MsgUpdateClassFee): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassFee): _132.MsgUpdateClassFeeProtoMsg;
            };
            MsgUpdateClassFeeResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateClassFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgUpdateClassFeeResponse;
                fromJSON(_: any): _132.MsgUpdateClassFeeResponse;
                toJSON(_: _132.MsgUpdateClassFeeResponse): unknown;
                fromPartial(_: Partial<_132.MsgUpdateClassFeeResponse>): _132.MsgUpdateClassFeeResponse;
                fromAmino(_: _132.MsgUpdateClassFeeResponseAmino): _132.MsgUpdateClassFeeResponse;
                toAmino(_: _132.MsgUpdateClassFeeResponse): _132.MsgUpdateClassFeeResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateClassFeeResponseAminoMsg): _132.MsgUpdateClassFeeResponse;
                fromProtoMsg(message: _132.MsgUpdateClassFeeResponseProtoMsg): _132.MsgUpdateClassFeeResponse;
                toProto(message: _132.MsgUpdateClassFeeResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateClassFeeResponse): _132.MsgUpdateClassFeeResponseProtoMsg;
            };
            MsgAddAllowedBridgeChain: {
                typeUrl: string;
                encode(message: _132.MsgAddAllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgAddAllowedBridgeChain;
                fromJSON(object: any): _132.MsgAddAllowedBridgeChain;
                toJSON(message: _132.MsgAddAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_132.MsgAddAllowedBridgeChain>): _132.MsgAddAllowedBridgeChain;
                fromAmino(object: _132.MsgAddAllowedBridgeChainAmino): _132.MsgAddAllowedBridgeChain;
                toAmino(message: _132.MsgAddAllowedBridgeChain): _132.MsgAddAllowedBridgeChainAmino;
                fromAminoMsg(object: _132.MsgAddAllowedBridgeChainAminoMsg): _132.MsgAddAllowedBridgeChain;
                toAminoMsg(message: _132.MsgAddAllowedBridgeChain): _132.MsgAddAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _132.MsgAddAllowedBridgeChainProtoMsg): _132.MsgAddAllowedBridgeChain;
                toProto(message: _132.MsgAddAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _132.MsgAddAllowedBridgeChain): _132.MsgAddAllowedBridgeChainProtoMsg;
            };
            MsgAddAllowedBridgeChainResponse: {
                typeUrl: string;
                encode(_: _132.MsgAddAllowedBridgeChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgAddAllowedBridgeChainResponse;
                fromJSON(_: any): _132.MsgAddAllowedBridgeChainResponse;
                toJSON(_: _132.MsgAddAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_132.MsgAddAllowedBridgeChainResponse>): _132.MsgAddAllowedBridgeChainResponse;
                fromAmino(_: _132.MsgAddAllowedBridgeChainResponseAmino): _132.MsgAddAllowedBridgeChainResponse;
                toAmino(_: _132.MsgAddAllowedBridgeChainResponse): _132.MsgAddAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _132.MsgAddAllowedBridgeChainResponseAminoMsg): _132.MsgAddAllowedBridgeChainResponse;
                fromProtoMsg(message: _132.MsgAddAllowedBridgeChainResponseProtoMsg): _132.MsgAddAllowedBridgeChainResponse;
                toProto(message: _132.MsgAddAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _132.MsgAddAllowedBridgeChainResponse): _132.MsgAddAllowedBridgeChainResponseProtoMsg;
            };
            MsgRemoveAllowedBridgeChain: {
                typeUrl: string;
                encode(message: _132.MsgRemoveAllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgRemoveAllowedBridgeChain;
                fromJSON(object: any): _132.MsgRemoveAllowedBridgeChain;
                toJSON(message: _132.MsgRemoveAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_132.MsgRemoveAllowedBridgeChain>): _132.MsgRemoveAllowedBridgeChain;
                fromAmino(object: _132.MsgRemoveAllowedBridgeChainAmino): _132.MsgRemoveAllowedBridgeChain;
                toAmino(message: _132.MsgRemoveAllowedBridgeChain): _132.MsgRemoveAllowedBridgeChainAmino;
                fromAminoMsg(object: _132.MsgRemoveAllowedBridgeChainAminoMsg): _132.MsgRemoveAllowedBridgeChain;
                toAminoMsg(message: _132.MsgRemoveAllowedBridgeChain): _132.MsgRemoveAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _132.MsgRemoveAllowedBridgeChainProtoMsg): _132.MsgRemoveAllowedBridgeChain;
                toProto(message: _132.MsgRemoveAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _132.MsgRemoveAllowedBridgeChain): _132.MsgRemoveAllowedBridgeChainProtoMsg;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                typeUrl: string;
                encode(_: _132.MsgRemoveAllowedBridgeChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _132.MsgRemoveAllowedBridgeChainResponse;
                fromJSON(_: any): _132.MsgRemoveAllowedBridgeChainResponse;
                toJSON(_: _132.MsgRemoveAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_132.MsgRemoveAllowedBridgeChainResponse>): _132.MsgRemoveAllowedBridgeChainResponse;
                fromAmino(_: _132.MsgRemoveAllowedBridgeChainResponseAmino): _132.MsgRemoveAllowedBridgeChainResponse;
                toAmino(_: _132.MsgRemoveAllowedBridgeChainResponse): _132.MsgRemoveAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _132.MsgRemoveAllowedBridgeChainResponseAminoMsg): _132.MsgRemoveAllowedBridgeChainResponse;
                fromProtoMsg(message: _132.MsgRemoveAllowedBridgeChainResponseProtoMsg): _132.MsgRemoveAllowedBridgeChainResponse;
                toProto(message: _132.MsgRemoveAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _132.MsgRemoveAllowedBridgeChainResponse): _132.MsgRemoveAllowedBridgeChainResponseProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _131.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.CreditType;
                fromJSON(object: any): _131.CreditType;
                toJSON(message: _131.CreditType): unknown;
                fromPartial(object: Partial<_131.CreditType>): _131.CreditType;
                fromAmino(object: _131.CreditTypeAmino): _131.CreditType;
                toAmino(message: _131.CreditType): _131.CreditTypeAmino;
                fromAminoMsg(object: _131.CreditTypeAminoMsg): _131.CreditType;
                fromProtoMsg(message: _131.CreditTypeProtoMsg): _131.CreditType;
                toProto(message: _131.CreditType): Uint8Array;
                toProtoMsg(message: _131.CreditType): _131.CreditTypeProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _131.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.Class;
                fromJSON(object: any): _131.Class;
                toJSON(message: _131.Class): unknown;
                fromPartial(object: Partial<_131.Class>): _131.Class;
                fromAmino(object: _131.ClassAmino): _131.Class;
                toAmino(message: _131.Class): _131.ClassAmino;
                fromAminoMsg(object: _131.ClassAminoMsg): _131.Class;
                fromProtoMsg(message: _131.ClassProtoMsg): _131.Class;
                toProto(message: _131.Class): Uint8Array;
                toProtoMsg(message: _131.Class): _131.ClassProtoMsg;
            };
            ClassIssuer: {
                typeUrl: string;
                encode(message: _131.ClassIssuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.ClassIssuer;
                fromJSON(object: any): _131.ClassIssuer;
                toJSON(message: _131.ClassIssuer): unknown;
                fromPartial(object: Partial<_131.ClassIssuer>): _131.ClassIssuer;
                fromAmino(object: _131.ClassIssuerAmino): _131.ClassIssuer;
                toAmino(message: _131.ClassIssuer): _131.ClassIssuerAmino;
                fromAminoMsg(object: _131.ClassIssuerAminoMsg): _131.ClassIssuer;
                fromProtoMsg(message: _131.ClassIssuerProtoMsg): _131.ClassIssuer;
                toProto(message: _131.ClassIssuer): Uint8Array;
                toProtoMsg(message: _131.ClassIssuer): _131.ClassIssuerProtoMsg;
            };
            Project: {
                typeUrl: string;
                encode(message: _131.Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.Project;
                fromJSON(object: any): _131.Project;
                toJSON(message: _131.Project): unknown;
                fromPartial(object: Partial<_131.Project>): _131.Project;
                fromAmino(object: _131.ProjectAmino): _131.Project;
                toAmino(message: _131.Project): _131.ProjectAmino;
                fromAminoMsg(object: _131.ProjectAminoMsg): _131.Project;
                fromProtoMsg(message: _131.ProjectProtoMsg): _131.Project;
                toProto(message: _131.Project): Uint8Array;
                toProtoMsg(message: _131.Project): _131.ProjectProtoMsg;
            };
            Batch: {
                typeUrl: string;
                encode(message: _131.Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.Batch;
                fromJSON(object: any): _131.Batch;
                toJSON(message: _131.Batch): unknown;
                fromPartial(object: Partial<_131.Batch>): _131.Batch;
                fromAmino(object: _131.BatchAmino): _131.Batch;
                toAmino(message: _131.Batch): _131.BatchAmino;
                fromAminoMsg(object: _131.BatchAminoMsg): _131.Batch;
                fromProtoMsg(message: _131.BatchProtoMsg): _131.Batch;
                toProto(message: _131.Batch): Uint8Array;
                toProtoMsg(message: _131.Batch): _131.BatchProtoMsg;
            };
            ClassSequence: {
                typeUrl: string;
                encode(message: _131.ClassSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.ClassSequence;
                fromJSON(object: any): _131.ClassSequence;
                toJSON(message: _131.ClassSequence): unknown;
                fromPartial(object: Partial<_131.ClassSequence>): _131.ClassSequence;
                fromAmino(object: _131.ClassSequenceAmino): _131.ClassSequence;
                toAmino(message: _131.ClassSequence): _131.ClassSequenceAmino;
                fromAminoMsg(object: _131.ClassSequenceAminoMsg): _131.ClassSequence;
                fromProtoMsg(message: _131.ClassSequenceProtoMsg): _131.ClassSequence;
                toProto(message: _131.ClassSequence): Uint8Array;
                toProtoMsg(message: _131.ClassSequence): _131.ClassSequenceProtoMsg;
            };
            ProjectSequence: {
                typeUrl: string;
                encode(message: _131.ProjectSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.ProjectSequence;
                fromJSON(object: any): _131.ProjectSequence;
                toJSON(message: _131.ProjectSequence): unknown;
                fromPartial(object: Partial<_131.ProjectSequence>): _131.ProjectSequence;
                fromAmino(object: _131.ProjectSequenceAmino): _131.ProjectSequence;
                toAmino(message: _131.ProjectSequence): _131.ProjectSequenceAmino;
                fromAminoMsg(object: _131.ProjectSequenceAminoMsg): _131.ProjectSequence;
                fromProtoMsg(message: _131.ProjectSequenceProtoMsg): _131.ProjectSequence;
                toProto(message: _131.ProjectSequence): Uint8Array;
                toProtoMsg(message: _131.ProjectSequence): _131.ProjectSequenceProtoMsg;
            };
            BatchSequence: {
                typeUrl: string;
                encode(message: _131.BatchSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.BatchSequence;
                fromJSON(object: any): _131.BatchSequence;
                toJSON(message: _131.BatchSequence): unknown;
                fromPartial(object: Partial<_131.BatchSequence>): _131.BatchSequence;
                fromAmino(object: _131.BatchSequenceAmino): _131.BatchSequence;
                toAmino(message: _131.BatchSequence): _131.BatchSequenceAmino;
                fromAminoMsg(object: _131.BatchSequenceAminoMsg): _131.BatchSequence;
                fromProtoMsg(message: _131.BatchSequenceProtoMsg): _131.BatchSequence;
                toProto(message: _131.BatchSequence): Uint8Array;
                toProtoMsg(message: _131.BatchSequence): _131.BatchSequenceProtoMsg;
            };
            BatchBalance: {
                typeUrl: string;
                encode(message: _131.BatchBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.BatchBalance;
                fromJSON(object: any): _131.BatchBalance;
                toJSON(message: _131.BatchBalance): unknown;
                fromPartial(object: Partial<_131.BatchBalance>): _131.BatchBalance;
                fromAmino(object: _131.BatchBalanceAmino): _131.BatchBalance;
                toAmino(message: _131.BatchBalance): _131.BatchBalanceAmino;
                fromAminoMsg(object: _131.BatchBalanceAminoMsg): _131.BatchBalance;
                fromProtoMsg(message: _131.BatchBalanceProtoMsg): _131.BatchBalance;
                toProto(message: _131.BatchBalance): Uint8Array;
                toProtoMsg(message: _131.BatchBalance): _131.BatchBalanceProtoMsg;
            };
            BatchSupply: {
                typeUrl: string;
                encode(message: _131.BatchSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.BatchSupply;
                fromJSON(object: any): _131.BatchSupply;
                toJSON(message: _131.BatchSupply): unknown;
                fromPartial(object: Partial<_131.BatchSupply>): _131.BatchSupply;
                fromAmino(object: _131.BatchSupplyAmino): _131.BatchSupply;
                toAmino(message: _131.BatchSupply): _131.BatchSupplyAmino;
                fromAminoMsg(object: _131.BatchSupplyAminoMsg): _131.BatchSupply;
                fromProtoMsg(message: _131.BatchSupplyProtoMsg): _131.BatchSupply;
                toProto(message: _131.BatchSupply): Uint8Array;
                toProtoMsg(message: _131.BatchSupply): _131.BatchSupplyProtoMsg;
            };
            OriginTxIndex: {
                typeUrl: string;
                encode(message: _131.OriginTxIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.OriginTxIndex;
                fromJSON(object: any): _131.OriginTxIndex;
                toJSON(message: _131.OriginTxIndex): unknown;
                fromPartial(object: Partial<_131.OriginTxIndex>): _131.OriginTxIndex;
                fromAmino(object: _131.OriginTxIndexAmino): _131.OriginTxIndex;
                toAmino(message: _131.OriginTxIndex): _131.OriginTxIndexAmino;
                fromAminoMsg(object: _131.OriginTxIndexAminoMsg): _131.OriginTxIndex;
                fromProtoMsg(message: _131.OriginTxIndexProtoMsg): _131.OriginTxIndex;
                toProto(message: _131.OriginTxIndex): Uint8Array;
                toProtoMsg(message: _131.OriginTxIndex): _131.OriginTxIndexProtoMsg;
            };
            BatchContract: {
                typeUrl: string;
                encode(message: _131.BatchContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.BatchContract;
                fromJSON(object: any): _131.BatchContract;
                toJSON(message: _131.BatchContract): unknown;
                fromPartial(object: Partial<_131.BatchContract>): _131.BatchContract;
                fromAmino(object: _131.BatchContractAmino): _131.BatchContract;
                toAmino(message: _131.BatchContract): _131.BatchContractAmino;
                fromAminoMsg(object: _131.BatchContractAminoMsg): _131.BatchContract;
                fromProtoMsg(message: _131.BatchContractProtoMsg): _131.BatchContract;
                toProto(message: _131.BatchContract): Uint8Array;
                toProtoMsg(message: _131.BatchContract): _131.BatchContractProtoMsg;
            };
            ClassCreatorAllowlist: {
                typeUrl: string;
                encode(message: _131.ClassCreatorAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.ClassCreatorAllowlist;
                fromJSON(object: any): _131.ClassCreatorAllowlist;
                toJSON(message: _131.ClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_131.ClassCreatorAllowlist>): _131.ClassCreatorAllowlist;
                fromAmino(object: _131.ClassCreatorAllowlistAmino): _131.ClassCreatorAllowlist;
                toAmino(message: _131.ClassCreatorAllowlist): _131.ClassCreatorAllowlistAmino;
                fromAminoMsg(object: _131.ClassCreatorAllowlistAminoMsg): _131.ClassCreatorAllowlist;
                fromProtoMsg(message: _131.ClassCreatorAllowlistProtoMsg): _131.ClassCreatorAllowlist;
                toProto(message: _131.ClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _131.ClassCreatorAllowlist): _131.ClassCreatorAllowlistProtoMsg;
            };
            AllowedClassCreator: {
                typeUrl: string;
                encode(message: _131.AllowedClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.AllowedClassCreator;
                fromJSON(object: any): _131.AllowedClassCreator;
                toJSON(message: _131.AllowedClassCreator): unknown;
                fromPartial(object: Partial<_131.AllowedClassCreator>): _131.AllowedClassCreator;
                fromAmino(object: _131.AllowedClassCreatorAmino): _131.AllowedClassCreator;
                toAmino(message: _131.AllowedClassCreator): _131.AllowedClassCreatorAmino;
                fromAminoMsg(object: _131.AllowedClassCreatorAminoMsg): _131.AllowedClassCreator;
                fromProtoMsg(message: _131.AllowedClassCreatorProtoMsg): _131.AllowedClassCreator;
                toProto(message: _131.AllowedClassCreator): Uint8Array;
                toProtoMsg(message: _131.AllowedClassCreator): _131.AllowedClassCreatorProtoMsg;
            };
            ClassFee: {
                typeUrl: string;
                encode(message: _131.ClassFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.ClassFee;
                fromJSON(object: any): _131.ClassFee;
                toJSON(message: _131.ClassFee): unknown;
                fromPartial(object: Partial<_131.ClassFee>): _131.ClassFee;
                fromAmino(object: _131.ClassFeeAmino): _131.ClassFee;
                toAmino(message: _131.ClassFee): _131.ClassFeeAmino;
                fromAminoMsg(object: _131.ClassFeeAminoMsg): _131.ClassFee;
                fromProtoMsg(message: _131.ClassFeeProtoMsg): _131.ClassFee;
                toProto(message: _131.ClassFee): Uint8Array;
                toProtoMsg(message: _131.ClassFee): _131.ClassFeeProtoMsg;
            };
            AllowedBridgeChain: {
                typeUrl: string;
                encode(message: _131.AllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _131.AllowedBridgeChain;
                fromJSON(object: any): _131.AllowedBridgeChain;
                toJSON(message: _131.AllowedBridgeChain): unknown;
                fromPartial(object: Partial<_131.AllowedBridgeChain>): _131.AllowedBridgeChain;
                fromAmino(object: _131.AllowedBridgeChainAmino): _131.AllowedBridgeChain;
                toAmino(message: _131.AllowedBridgeChain): _131.AllowedBridgeChainAmino;
                fromAminoMsg(object: _131.AllowedBridgeChainAminoMsg): _131.AllowedBridgeChain;
                fromProtoMsg(message: _131.AllowedBridgeChainProtoMsg): _131.AllowedBridgeChain;
                toProto(message: _131.AllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _131.AllowedBridgeChain): _131.AllowedBridgeChainProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _130.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassesRequest;
                fromJSON(object: any): _130.QueryClassesRequest;
                toJSON(message: _130.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_130.QueryClassesRequest>): _130.QueryClassesRequest;
                fromAmino(object: _130.QueryClassesRequestAmino): _130.QueryClassesRequest;
                toAmino(message: _130.QueryClassesRequest): _130.QueryClassesRequestAmino;
                fromAminoMsg(object: _130.QueryClassesRequestAminoMsg): _130.QueryClassesRequest;
                fromProtoMsg(message: _130.QueryClassesRequestProtoMsg): _130.QueryClassesRequest;
                toProto(message: _130.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _130.QueryClassesRequest): _130.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _130.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassesResponse;
                fromJSON(object: any): _130.QueryClassesResponse;
                toJSON(message: _130.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_130.QueryClassesResponse>): _130.QueryClassesResponse;
                fromAmino(object: _130.QueryClassesResponseAmino): _130.QueryClassesResponse;
                toAmino(message: _130.QueryClassesResponse): _130.QueryClassesResponseAmino;
                fromAminoMsg(object: _130.QueryClassesResponseAminoMsg): _130.QueryClassesResponse;
                fromProtoMsg(message: _130.QueryClassesResponseProtoMsg): _130.QueryClassesResponse;
                toProto(message: _130.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _130.QueryClassesResponse): _130.QueryClassesResponseProtoMsg;
            };
            QueryClassesByAdminRequest: {
                typeUrl: string;
                encode(message: _130.QueryClassesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassesByAdminRequest;
                fromJSON(object: any): _130.QueryClassesByAdminRequest;
                toJSON(message: _130.QueryClassesByAdminRequest): unknown;
                fromPartial(object: Partial<_130.QueryClassesByAdminRequest>): _130.QueryClassesByAdminRequest;
                fromAmino(object: _130.QueryClassesByAdminRequestAmino): _130.QueryClassesByAdminRequest;
                toAmino(message: _130.QueryClassesByAdminRequest): _130.QueryClassesByAdminRequestAmino;
                fromAminoMsg(object: _130.QueryClassesByAdminRequestAminoMsg): _130.QueryClassesByAdminRequest;
                fromProtoMsg(message: _130.QueryClassesByAdminRequestProtoMsg): _130.QueryClassesByAdminRequest;
                toProto(message: _130.QueryClassesByAdminRequest): Uint8Array;
                toProtoMsg(message: _130.QueryClassesByAdminRequest): _130.QueryClassesByAdminRequestProtoMsg;
            };
            QueryClassesByAdminResponse: {
                typeUrl: string;
                encode(message: _130.QueryClassesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassesByAdminResponse;
                fromJSON(object: any): _130.QueryClassesByAdminResponse;
                toJSON(message: _130.QueryClassesByAdminResponse): unknown;
                fromPartial(object: Partial<_130.QueryClassesByAdminResponse>): _130.QueryClassesByAdminResponse;
                fromAmino(object: _130.QueryClassesByAdminResponseAmino): _130.QueryClassesByAdminResponse;
                toAmino(message: _130.QueryClassesByAdminResponse): _130.QueryClassesByAdminResponseAmino;
                fromAminoMsg(object: _130.QueryClassesByAdminResponseAminoMsg): _130.QueryClassesByAdminResponse;
                fromProtoMsg(message: _130.QueryClassesByAdminResponseProtoMsg): _130.QueryClassesByAdminResponse;
                toProto(message: _130.QueryClassesByAdminResponse): Uint8Array;
                toProtoMsg(message: _130.QueryClassesByAdminResponse): _130.QueryClassesByAdminResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _130.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassRequest;
                fromJSON(object: any): _130.QueryClassRequest;
                toJSON(message: _130.QueryClassRequest): unknown;
                fromPartial(object: Partial<_130.QueryClassRequest>): _130.QueryClassRequest;
                fromAmino(object: _130.QueryClassRequestAmino): _130.QueryClassRequest;
                toAmino(message: _130.QueryClassRequest): _130.QueryClassRequestAmino;
                fromAminoMsg(object: _130.QueryClassRequestAminoMsg): _130.QueryClassRequest;
                fromProtoMsg(message: _130.QueryClassRequestProtoMsg): _130.QueryClassRequest;
                toProto(message: _130.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _130.QueryClassRequest): _130.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _130.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassResponse;
                fromJSON(object: any): _130.QueryClassResponse;
                toJSON(message: _130.QueryClassResponse): unknown;
                fromPartial(object: Partial<_130.QueryClassResponse>): _130.QueryClassResponse;
                fromAmino(object: _130.QueryClassResponseAmino): _130.QueryClassResponse;
                toAmino(message: _130.QueryClassResponse): _130.QueryClassResponseAmino;
                fromAminoMsg(object: _130.QueryClassResponseAminoMsg): _130.QueryClassResponse;
                fromProtoMsg(message: _130.QueryClassResponseProtoMsg): _130.QueryClassResponse;
                toProto(message: _130.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _130.QueryClassResponse): _130.QueryClassResponseProtoMsg;
            };
            QueryClassIssuersRequest: {
                typeUrl: string;
                encode(message: _130.QueryClassIssuersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassIssuersRequest;
                fromJSON(object: any): _130.QueryClassIssuersRequest;
                toJSON(message: _130.QueryClassIssuersRequest): unknown;
                fromPartial(object: Partial<_130.QueryClassIssuersRequest>): _130.QueryClassIssuersRequest;
                fromAmino(object: _130.QueryClassIssuersRequestAmino): _130.QueryClassIssuersRequest;
                toAmino(message: _130.QueryClassIssuersRequest): _130.QueryClassIssuersRequestAmino;
                fromAminoMsg(object: _130.QueryClassIssuersRequestAminoMsg): _130.QueryClassIssuersRequest;
                fromProtoMsg(message: _130.QueryClassIssuersRequestProtoMsg): _130.QueryClassIssuersRequest;
                toProto(message: _130.QueryClassIssuersRequest): Uint8Array;
                toProtoMsg(message: _130.QueryClassIssuersRequest): _130.QueryClassIssuersRequestProtoMsg;
            };
            QueryClassIssuersResponse: {
                typeUrl: string;
                encode(message: _130.QueryClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassIssuersResponse;
                fromJSON(object: any): _130.QueryClassIssuersResponse;
                toJSON(message: _130.QueryClassIssuersResponse): unknown;
                fromPartial(object: Partial<_130.QueryClassIssuersResponse>): _130.QueryClassIssuersResponse;
                fromAmino(object: _130.QueryClassIssuersResponseAmino): _130.QueryClassIssuersResponse;
                toAmino(message: _130.QueryClassIssuersResponse): _130.QueryClassIssuersResponseAmino;
                fromAminoMsg(object: _130.QueryClassIssuersResponseAminoMsg): _130.QueryClassIssuersResponse;
                fromProtoMsg(message: _130.QueryClassIssuersResponseProtoMsg): _130.QueryClassIssuersResponse;
                toProto(message: _130.QueryClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _130.QueryClassIssuersResponse): _130.QueryClassIssuersResponseProtoMsg;
            };
            QueryProjectsRequest: {
                typeUrl: string;
                encode(message: _130.QueryProjectsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsRequest;
                fromJSON(object: any): _130.QueryProjectsRequest;
                toJSON(message: _130.QueryProjectsRequest): unknown;
                fromPartial(object: Partial<_130.QueryProjectsRequest>): _130.QueryProjectsRequest;
                fromAmino(object: _130.QueryProjectsRequestAmino): _130.QueryProjectsRequest;
                toAmino(message: _130.QueryProjectsRequest): _130.QueryProjectsRequestAmino;
                fromAminoMsg(object: _130.QueryProjectsRequestAminoMsg): _130.QueryProjectsRequest;
                fromProtoMsg(message: _130.QueryProjectsRequestProtoMsg): _130.QueryProjectsRequest;
                toProto(message: _130.QueryProjectsRequest): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsRequest): _130.QueryProjectsRequestProtoMsg;
            };
            QueryProjectsResponse: {
                typeUrl: string;
                encode(message: _130.QueryProjectsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsResponse;
                fromJSON(object: any): _130.QueryProjectsResponse;
                toJSON(message: _130.QueryProjectsResponse): unknown;
                fromPartial(object: Partial<_130.QueryProjectsResponse>): _130.QueryProjectsResponse;
                fromAmino(object: _130.QueryProjectsResponseAmino): _130.QueryProjectsResponse;
                toAmino(message: _130.QueryProjectsResponse): _130.QueryProjectsResponseAmino;
                fromAminoMsg(object: _130.QueryProjectsResponseAminoMsg): _130.QueryProjectsResponse;
                fromProtoMsg(message: _130.QueryProjectsResponseProtoMsg): _130.QueryProjectsResponse;
                toProto(message: _130.QueryProjectsResponse): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsResponse): _130.QueryProjectsResponseProtoMsg;
            };
            QueryProjectsByClassRequest: {
                typeUrl: string;
                encode(message: _130.QueryProjectsByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsByClassRequest;
                fromJSON(object: any): _130.QueryProjectsByClassRequest;
                toJSON(message: _130.QueryProjectsByClassRequest): unknown;
                fromPartial(object: Partial<_130.QueryProjectsByClassRequest>): _130.QueryProjectsByClassRequest;
                fromAmino(object: _130.QueryProjectsByClassRequestAmino): _130.QueryProjectsByClassRequest;
                toAmino(message: _130.QueryProjectsByClassRequest): _130.QueryProjectsByClassRequestAmino;
                fromAminoMsg(object: _130.QueryProjectsByClassRequestAminoMsg): _130.QueryProjectsByClassRequest;
                fromProtoMsg(message: _130.QueryProjectsByClassRequestProtoMsg): _130.QueryProjectsByClassRequest;
                toProto(message: _130.QueryProjectsByClassRequest): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsByClassRequest): _130.QueryProjectsByClassRequestProtoMsg;
            };
            QueryProjectsByClassResponse: {
                typeUrl: string;
                encode(message: _130.QueryProjectsByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsByClassResponse;
                fromJSON(object: any): _130.QueryProjectsByClassResponse;
                toJSON(message: _130.QueryProjectsByClassResponse): unknown;
                fromPartial(object: Partial<_130.QueryProjectsByClassResponse>): _130.QueryProjectsByClassResponse;
                fromAmino(object: _130.QueryProjectsByClassResponseAmino): _130.QueryProjectsByClassResponse;
                toAmino(message: _130.QueryProjectsByClassResponse): _130.QueryProjectsByClassResponseAmino;
                fromAminoMsg(object: _130.QueryProjectsByClassResponseAminoMsg): _130.QueryProjectsByClassResponse;
                fromProtoMsg(message: _130.QueryProjectsByClassResponseProtoMsg): _130.QueryProjectsByClassResponse;
                toProto(message: _130.QueryProjectsByClassResponse): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsByClassResponse): _130.QueryProjectsByClassResponseProtoMsg;
            };
            QueryProjectsByReferenceIdRequest: {
                typeUrl: string;
                encode(message: _130.QueryProjectsByReferenceIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _130.QueryProjectsByReferenceIdRequest;
                toJSON(message: _130.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: Partial<_130.QueryProjectsByReferenceIdRequest>): _130.QueryProjectsByReferenceIdRequest;
                fromAmino(object: _130.QueryProjectsByReferenceIdRequestAmino): _130.QueryProjectsByReferenceIdRequest;
                toAmino(message: _130.QueryProjectsByReferenceIdRequest): _130.QueryProjectsByReferenceIdRequestAmino;
                fromAminoMsg(object: _130.QueryProjectsByReferenceIdRequestAminoMsg): _130.QueryProjectsByReferenceIdRequest;
                fromProtoMsg(message: _130.QueryProjectsByReferenceIdRequestProtoMsg): _130.QueryProjectsByReferenceIdRequest;
                toProto(message: _130.QueryProjectsByReferenceIdRequest): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsByReferenceIdRequest): _130.QueryProjectsByReferenceIdRequestProtoMsg;
            };
            QueryProjectsByReferenceIdResponse: {
                typeUrl: string;
                encode(message: _130.QueryProjectsByReferenceIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _130.QueryProjectsByReferenceIdResponse;
                toJSON(message: _130.QueryProjectsByReferenceIdResponse): unknown;
                fromPartial(object: Partial<_130.QueryProjectsByReferenceIdResponse>): _130.QueryProjectsByReferenceIdResponse;
                fromAmino(object: _130.QueryProjectsByReferenceIdResponseAmino): _130.QueryProjectsByReferenceIdResponse;
                toAmino(message: _130.QueryProjectsByReferenceIdResponse): _130.QueryProjectsByReferenceIdResponseAmino;
                fromAminoMsg(object: _130.QueryProjectsByReferenceIdResponseAminoMsg): _130.QueryProjectsByReferenceIdResponse;
                fromProtoMsg(message: _130.QueryProjectsByReferenceIdResponseProtoMsg): _130.QueryProjectsByReferenceIdResponse;
                toProto(message: _130.QueryProjectsByReferenceIdResponse): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsByReferenceIdResponse): _130.QueryProjectsByReferenceIdResponseProtoMsg;
            };
            QueryProjectsByAdminRequest: {
                typeUrl: string;
                encode(message: _130.QueryProjectsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsByAdminRequest;
                fromJSON(object: any): _130.QueryProjectsByAdminRequest;
                toJSON(message: _130.QueryProjectsByAdminRequest): unknown;
                fromPartial(object: Partial<_130.QueryProjectsByAdminRequest>): _130.QueryProjectsByAdminRequest;
                fromAmino(object: _130.QueryProjectsByAdminRequestAmino): _130.QueryProjectsByAdminRequest;
                toAmino(message: _130.QueryProjectsByAdminRequest): _130.QueryProjectsByAdminRequestAmino;
                fromAminoMsg(object: _130.QueryProjectsByAdminRequestAminoMsg): _130.QueryProjectsByAdminRequest;
                fromProtoMsg(message: _130.QueryProjectsByAdminRequestProtoMsg): _130.QueryProjectsByAdminRequest;
                toProto(message: _130.QueryProjectsByAdminRequest): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsByAdminRequest): _130.QueryProjectsByAdminRequestProtoMsg;
            };
            QueryProjectsByAdminResponse: {
                typeUrl: string;
                encode(message: _130.QueryProjectsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectsByAdminResponse;
                fromJSON(object: any): _130.QueryProjectsByAdminResponse;
                toJSON(message: _130.QueryProjectsByAdminResponse): unknown;
                fromPartial(object: Partial<_130.QueryProjectsByAdminResponse>): _130.QueryProjectsByAdminResponse;
                fromAmino(object: _130.QueryProjectsByAdminResponseAmino): _130.QueryProjectsByAdminResponse;
                toAmino(message: _130.QueryProjectsByAdminResponse): _130.QueryProjectsByAdminResponseAmino;
                fromAminoMsg(object: _130.QueryProjectsByAdminResponseAminoMsg): _130.QueryProjectsByAdminResponse;
                fromProtoMsg(message: _130.QueryProjectsByAdminResponseProtoMsg): _130.QueryProjectsByAdminResponse;
                toProto(message: _130.QueryProjectsByAdminResponse): Uint8Array;
                toProtoMsg(message: _130.QueryProjectsByAdminResponse): _130.QueryProjectsByAdminResponseProtoMsg;
            };
            QueryProjectRequest: {
                typeUrl: string;
                encode(message: _130.QueryProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectRequest;
                fromJSON(object: any): _130.QueryProjectRequest;
                toJSON(message: _130.QueryProjectRequest): unknown;
                fromPartial(object: Partial<_130.QueryProjectRequest>): _130.QueryProjectRequest;
                fromAmino(object: _130.QueryProjectRequestAmino): _130.QueryProjectRequest;
                toAmino(message: _130.QueryProjectRequest): _130.QueryProjectRequestAmino;
                fromAminoMsg(object: _130.QueryProjectRequestAminoMsg): _130.QueryProjectRequest;
                fromProtoMsg(message: _130.QueryProjectRequestProtoMsg): _130.QueryProjectRequest;
                toProto(message: _130.QueryProjectRequest): Uint8Array;
                toProtoMsg(message: _130.QueryProjectRequest): _130.QueryProjectRequestProtoMsg;
            };
            QueryProjectResponse: {
                typeUrl: string;
                encode(message: _130.QueryProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryProjectResponse;
                fromJSON(object: any): _130.QueryProjectResponse;
                toJSON(message: _130.QueryProjectResponse): unknown;
                fromPartial(object: Partial<_130.QueryProjectResponse>): _130.QueryProjectResponse;
                fromAmino(object: _130.QueryProjectResponseAmino): _130.QueryProjectResponse;
                toAmino(message: _130.QueryProjectResponse): _130.QueryProjectResponseAmino;
                fromAminoMsg(object: _130.QueryProjectResponseAminoMsg): _130.QueryProjectResponse;
                fromProtoMsg(message: _130.QueryProjectResponseProtoMsg): _130.QueryProjectResponse;
                toProto(message: _130.QueryProjectResponse): Uint8Array;
                toProtoMsg(message: _130.QueryProjectResponse): _130.QueryProjectResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _130.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesRequest;
                fromJSON(object: any): _130.QueryBatchesRequest;
                toJSON(message: _130.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_130.QueryBatchesRequest>): _130.QueryBatchesRequest;
                fromAmino(object: _130.QueryBatchesRequestAmino): _130.QueryBatchesRequest;
                toAmino(message: _130.QueryBatchesRequest): _130.QueryBatchesRequestAmino;
                fromAminoMsg(object: _130.QueryBatchesRequestAminoMsg): _130.QueryBatchesRequest;
                fromProtoMsg(message: _130.QueryBatchesRequestProtoMsg): _130.QueryBatchesRequest;
                toProto(message: _130.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesRequest): _130.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _130.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesResponse;
                fromJSON(object: any): _130.QueryBatchesResponse;
                toJSON(message: _130.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_130.QueryBatchesResponse>): _130.QueryBatchesResponse;
                fromAmino(object: _130.QueryBatchesResponseAmino): _130.QueryBatchesResponse;
                toAmino(message: _130.QueryBatchesResponse): _130.QueryBatchesResponseAmino;
                fromAminoMsg(object: _130.QueryBatchesResponseAminoMsg): _130.QueryBatchesResponse;
                fromProtoMsg(message: _130.QueryBatchesResponseProtoMsg): _130.QueryBatchesResponse;
                toProto(message: _130.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesResponse): _130.QueryBatchesResponseProtoMsg;
            };
            QueryBatchesByIssuerRequest: {
                typeUrl: string;
                encode(message: _130.QueryBatchesByIssuerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _130.QueryBatchesByIssuerRequest;
                toJSON(message: _130.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: Partial<_130.QueryBatchesByIssuerRequest>): _130.QueryBatchesByIssuerRequest;
                fromAmino(object: _130.QueryBatchesByIssuerRequestAmino): _130.QueryBatchesByIssuerRequest;
                toAmino(message: _130.QueryBatchesByIssuerRequest): _130.QueryBatchesByIssuerRequestAmino;
                fromAminoMsg(object: _130.QueryBatchesByIssuerRequestAminoMsg): _130.QueryBatchesByIssuerRequest;
                fromProtoMsg(message: _130.QueryBatchesByIssuerRequestProtoMsg): _130.QueryBatchesByIssuerRequest;
                toProto(message: _130.QueryBatchesByIssuerRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesByIssuerRequest): _130.QueryBatchesByIssuerRequestProtoMsg;
            };
            QueryBatchesByIssuerResponse: {
                typeUrl: string;
                encode(message: _130.QueryBatchesByIssuerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _130.QueryBatchesByIssuerResponse;
                toJSON(message: _130.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: Partial<_130.QueryBatchesByIssuerResponse>): _130.QueryBatchesByIssuerResponse;
                fromAmino(object: _130.QueryBatchesByIssuerResponseAmino): _130.QueryBatchesByIssuerResponse;
                toAmino(message: _130.QueryBatchesByIssuerResponse): _130.QueryBatchesByIssuerResponseAmino;
                fromAminoMsg(object: _130.QueryBatchesByIssuerResponseAminoMsg): _130.QueryBatchesByIssuerResponse;
                fromProtoMsg(message: _130.QueryBatchesByIssuerResponseProtoMsg): _130.QueryBatchesByIssuerResponse;
                toProto(message: _130.QueryBatchesByIssuerResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesByIssuerResponse): _130.QueryBatchesByIssuerResponseProtoMsg;
            };
            QueryBatchesByClassRequest: {
                typeUrl: string;
                encode(message: _130.QueryBatchesByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesByClassRequest;
                fromJSON(object: any): _130.QueryBatchesByClassRequest;
                toJSON(message: _130.QueryBatchesByClassRequest): unknown;
                fromPartial(object: Partial<_130.QueryBatchesByClassRequest>): _130.QueryBatchesByClassRequest;
                fromAmino(object: _130.QueryBatchesByClassRequestAmino): _130.QueryBatchesByClassRequest;
                toAmino(message: _130.QueryBatchesByClassRequest): _130.QueryBatchesByClassRequestAmino;
                fromAminoMsg(object: _130.QueryBatchesByClassRequestAminoMsg): _130.QueryBatchesByClassRequest;
                fromProtoMsg(message: _130.QueryBatchesByClassRequestProtoMsg): _130.QueryBatchesByClassRequest;
                toProto(message: _130.QueryBatchesByClassRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesByClassRequest): _130.QueryBatchesByClassRequestProtoMsg;
            };
            QueryBatchesByProjectRequest: {
                typeUrl: string;
                encode(message: _130.QueryBatchesByProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesByProjectRequest;
                fromJSON(object: any): _130.QueryBatchesByProjectRequest;
                toJSON(message: _130.QueryBatchesByProjectRequest): unknown;
                fromPartial(object: Partial<_130.QueryBatchesByProjectRequest>): _130.QueryBatchesByProjectRequest;
                fromAmino(object: _130.QueryBatchesByProjectRequestAmino): _130.QueryBatchesByProjectRequest;
                toAmino(message: _130.QueryBatchesByProjectRequest): _130.QueryBatchesByProjectRequestAmino;
                fromAminoMsg(object: _130.QueryBatchesByProjectRequestAminoMsg): _130.QueryBatchesByProjectRequest;
                fromProtoMsg(message: _130.QueryBatchesByProjectRequestProtoMsg): _130.QueryBatchesByProjectRequest;
                toProto(message: _130.QueryBatchesByProjectRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesByProjectRequest): _130.QueryBatchesByProjectRequestProtoMsg;
            };
            QueryBatchesByProjectResponse: {
                typeUrl: string;
                encode(message: _130.QueryBatchesByProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesByProjectResponse;
                fromJSON(object: any): _130.QueryBatchesByProjectResponse;
                toJSON(message: _130.QueryBatchesByProjectResponse): unknown;
                fromPartial(object: Partial<_130.QueryBatchesByProjectResponse>): _130.QueryBatchesByProjectResponse;
                fromAmino(object: _130.QueryBatchesByProjectResponseAmino): _130.QueryBatchesByProjectResponse;
                toAmino(message: _130.QueryBatchesByProjectResponse): _130.QueryBatchesByProjectResponseAmino;
                fromAminoMsg(object: _130.QueryBatchesByProjectResponseAminoMsg): _130.QueryBatchesByProjectResponse;
                fromProtoMsg(message: _130.QueryBatchesByProjectResponseProtoMsg): _130.QueryBatchesByProjectResponse;
                toProto(message: _130.QueryBatchesByProjectResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesByProjectResponse): _130.QueryBatchesByProjectResponseProtoMsg;
            };
            QueryBatchesByClassResponse: {
                typeUrl: string;
                encode(message: _130.QueryBatchesByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchesByClassResponse;
                fromJSON(object: any): _130.QueryBatchesByClassResponse;
                toJSON(message: _130.QueryBatchesByClassResponse): unknown;
                fromPartial(object: Partial<_130.QueryBatchesByClassResponse>): _130.QueryBatchesByClassResponse;
                fromAmino(object: _130.QueryBatchesByClassResponseAmino): _130.QueryBatchesByClassResponse;
                toAmino(message: _130.QueryBatchesByClassResponse): _130.QueryBatchesByClassResponseAmino;
                fromAminoMsg(object: _130.QueryBatchesByClassResponseAminoMsg): _130.QueryBatchesByClassResponse;
                fromProtoMsg(message: _130.QueryBatchesByClassResponseProtoMsg): _130.QueryBatchesByClassResponse;
                toProto(message: _130.QueryBatchesByClassResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBatchesByClassResponse): _130.QueryBatchesByClassResponseProtoMsg;
            };
            QueryBatchRequest: {
                typeUrl: string;
                encode(message: _130.QueryBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchRequest;
                fromJSON(object: any): _130.QueryBatchRequest;
                toJSON(message: _130.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_130.QueryBatchRequest>): _130.QueryBatchRequest;
                fromAmino(object: _130.QueryBatchRequestAmino): _130.QueryBatchRequest;
                toAmino(message: _130.QueryBatchRequest): _130.QueryBatchRequestAmino;
                fromAminoMsg(object: _130.QueryBatchRequestAminoMsg): _130.QueryBatchRequest;
                fromProtoMsg(message: _130.QueryBatchRequestProtoMsg): _130.QueryBatchRequest;
                toProto(message: _130.QueryBatchRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBatchRequest): _130.QueryBatchRequestProtoMsg;
            };
            QueryBatchResponse: {
                typeUrl: string;
                encode(message: _130.QueryBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBatchResponse;
                fromJSON(object: any): _130.QueryBatchResponse;
                toJSON(message: _130.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_130.QueryBatchResponse>): _130.QueryBatchResponse;
                fromAmino(object: _130.QueryBatchResponseAmino): _130.QueryBatchResponse;
                toAmino(message: _130.QueryBatchResponse): _130.QueryBatchResponseAmino;
                fromAminoMsg(object: _130.QueryBatchResponseAminoMsg): _130.QueryBatchResponse;
                fromProtoMsg(message: _130.QueryBatchResponseProtoMsg): _130.QueryBatchResponse;
                toProto(message: _130.QueryBatchResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBatchResponse): _130.QueryBatchResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _130.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBalanceRequest;
                fromJSON(object: any): _130.QueryBalanceRequest;
                toJSON(message: _130.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_130.QueryBalanceRequest>): _130.QueryBalanceRequest;
                fromAmino(object: _130.QueryBalanceRequestAmino): _130.QueryBalanceRequest;
                toAmino(message: _130.QueryBalanceRequest): _130.QueryBalanceRequestAmino;
                fromAminoMsg(object: _130.QueryBalanceRequestAminoMsg): _130.QueryBalanceRequest;
                fromProtoMsg(message: _130.QueryBalanceRequestProtoMsg): _130.QueryBalanceRequest;
                toProto(message: _130.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBalanceRequest): _130.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _130.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBalanceResponse;
                fromJSON(object: any): _130.QueryBalanceResponse;
                toJSON(message: _130.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_130.QueryBalanceResponse>): _130.QueryBalanceResponse;
                fromAmino(object: _130.QueryBalanceResponseAmino): _130.QueryBalanceResponse;
                toAmino(message: _130.QueryBalanceResponse): _130.QueryBalanceResponseAmino;
                fromAminoMsg(object: _130.QueryBalanceResponseAminoMsg): _130.QueryBalanceResponse;
                fromProtoMsg(message: _130.QueryBalanceResponseProtoMsg): _130.QueryBalanceResponse;
                toProto(message: _130.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBalanceResponse): _130.QueryBalanceResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _130.QueryBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBalancesRequest;
                fromJSON(object: any): _130.QueryBalancesRequest;
                toJSON(message: _130.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_130.QueryBalancesRequest>): _130.QueryBalancesRequest;
                fromAmino(object: _130.QueryBalancesRequestAmino): _130.QueryBalancesRequest;
                toAmino(message: _130.QueryBalancesRequest): _130.QueryBalancesRequestAmino;
                fromAminoMsg(object: _130.QueryBalancesRequestAminoMsg): _130.QueryBalancesRequest;
                fromProtoMsg(message: _130.QueryBalancesRequestProtoMsg): _130.QueryBalancesRequest;
                toProto(message: _130.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBalancesRequest): _130.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _130.QueryBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBalancesResponse;
                fromJSON(object: any): _130.QueryBalancesResponse;
                toJSON(message: _130.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_130.QueryBalancesResponse>): _130.QueryBalancesResponse;
                fromAmino(object: _130.QueryBalancesResponseAmino): _130.QueryBalancesResponse;
                toAmino(message: _130.QueryBalancesResponse): _130.QueryBalancesResponseAmino;
                fromAminoMsg(object: _130.QueryBalancesResponseAminoMsg): _130.QueryBalancesResponse;
                fromProtoMsg(message: _130.QueryBalancesResponseProtoMsg): _130.QueryBalancesResponse;
                toProto(message: _130.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBalancesResponse): _130.QueryBalancesResponseProtoMsg;
            };
            QueryBalancesByBatchRequest: {
                typeUrl: string;
                encode(message: _130.QueryBalancesByBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBalancesByBatchRequest;
                fromJSON(object: any): _130.QueryBalancesByBatchRequest;
                toJSON(message: _130.QueryBalancesByBatchRequest): unknown;
                fromPartial(object: Partial<_130.QueryBalancesByBatchRequest>): _130.QueryBalancesByBatchRequest;
                fromAmino(object: _130.QueryBalancesByBatchRequestAmino): _130.QueryBalancesByBatchRequest;
                toAmino(message: _130.QueryBalancesByBatchRequest): _130.QueryBalancesByBatchRequestAmino;
                fromAminoMsg(object: _130.QueryBalancesByBatchRequestAminoMsg): _130.QueryBalancesByBatchRequest;
                fromProtoMsg(message: _130.QueryBalancesByBatchRequestProtoMsg): _130.QueryBalancesByBatchRequest;
                toProto(message: _130.QueryBalancesByBatchRequest): Uint8Array;
                toProtoMsg(message: _130.QueryBalancesByBatchRequest): _130.QueryBalancesByBatchRequestProtoMsg;
            };
            QueryBalancesByBatchResponse: {
                typeUrl: string;
                encode(message: _130.QueryBalancesByBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryBalancesByBatchResponse;
                fromJSON(object: any): _130.QueryBalancesByBatchResponse;
                toJSON(message: _130.QueryBalancesByBatchResponse): unknown;
                fromPartial(object: Partial<_130.QueryBalancesByBatchResponse>): _130.QueryBalancesByBatchResponse;
                fromAmino(object: _130.QueryBalancesByBatchResponseAmino): _130.QueryBalancesByBatchResponse;
                toAmino(message: _130.QueryBalancesByBatchResponse): _130.QueryBalancesByBatchResponseAmino;
                fromAminoMsg(object: _130.QueryBalancesByBatchResponseAminoMsg): _130.QueryBalancesByBatchResponse;
                fromProtoMsg(message: _130.QueryBalancesByBatchResponseProtoMsg): _130.QueryBalancesByBatchResponse;
                toProto(message: _130.QueryBalancesByBatchResponse): Uint8Array;
                toProtoMsg(message: _130.QueryBalancesByBatchResponse): _130.QueryBalancesByBatchResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _130.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryAllBalancesRequest;
                fromJSON(object: any): _130.QueryAllBalancesRequest;
                toJSON(message: _130.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_130.QueryAllBalancesRequest>): _130.QueryAllBalancesRequest;
                fromAmino(object: _130.QueryAllBalancesRequestAmino): _130.QueryAllBalancesRequest;
                toAmino(message: _130.QueryAllBalancesRequest): _130.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _130.QueryAllBalancesRequestAminoMsg): _130.QueryAllBalancesRequest;
                fromProtoMsg(message: _130.QueryAllBalancesRequestProtoMsg): _130.QueryAllBalancesRequest;
                toProto(message: _130.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _130.QueryAllBalancesRequest): _130.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _130.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryAllBalancesResponse;
                fromJSON(object: any): _130.QueryAllBalancesResponse;
                toJSON(message: _130.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_130.QueryAllBalancesResponse>): _130.QueryAllBalancesResponse;
                fromAmino(object: _130.QueryAllBalancesResponseAmino): _130.QueryAllBalancesResponse;
                toAmino(message: _130.QueryAllBalancesResponse): _130.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _130.QueryAllBalancesResponseAminoMsg): _130.QueryAllBalancesResponse;
                fromProtoMsg(message: _130.QueryAllBalancesResponseProtoMsg): _130.QueryAllBalancesResponse;
                toProto(message: _130.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _130.QueryAllBalancesResponse): _130.QueryAllBalancesResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _130.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QuerySupplyRequest;
                fromJSON(object: any): _130.QuerySupplyRequest;
                toJSON(message: _130.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_130.QuerySupplyRequest>): _130.QuerySupplyRequest;
                fromAmino(object: _130.QuerySupplyRequestAmino): _130.QuerySupplyRequest;
                toAmino(message: _130.QuerySupplyRequest): _130.QuerySupplyRequestAmino;
                fromAminoMsg(object: _130.QuerySupplyRequestAminoMsg): _130.QuerySupplyRequest;
                fromProtoMsg(message: _130.QuerySupplyRequestProtoMsg): _130.QuerySupplyRequest;
                toProto(message: _130.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _130.QuerySupplyRequest): _130.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _130.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QuerySupplyResponse;
                fromJSON(object: any): _130.QuerySupplyResponse;
                toJSON(message: _130.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_130.QuerySupplyResponse>): _130.QuerySupplyResponse;
                fromAmino(object: _130.QuerySupplyResponseAmino): _130.QuerySupplyResponse;
                toAmino(message: _130.QuerySupplyResponse): _130.QuerySupplyResponseAmino;
                fromAminoMsg(object: _130.QuerySupplyResponseAminoMsg): _130.QuerySupplyResponse;
                fromProtoMsg(message: _130.QuerySupplyResponseProtoMsg): _130.QuerySupplyResponse;
                toProto(message: _130.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _130.QuerySupplyResponse): _130.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _130.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryCreditTypesRequest;
                fromJSON(_: any): _130.QueryCreditTypesRequest;
                toJSON(_: _130.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_130.QueryCreditTypesRequest>): _130.QueryCreditTypesRequest;
                fromAmino(_: _130.QueryCreditTypesRequestAmino): _130.QueryCreditTypesRequest;
                toAmino(_: _130.QueryCreditTypesRequest): _130.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _130.QueryCreditTypesRequestAminoMsg): _130.QueryCreditTypesRequest;
                fromProtoMsg(message: _130.QueryCreditTypesRequestProtoMsg): _130.QueryCreditTypesRequest;
                toProto(message: _130.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _130.QueryCreditTypesRequest): _130.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _130.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryCreditTypesResponse;
                fromJSON(object: any): _130.QueryCreditTypesResponse;
                toJSON(message: _130.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_130.QueryCreditTypesResponse>): _130.QueryCreditTypesResponse;
                fromAmino(object: _130.QueryCreditTypesResponseAmino): _130.QueryCreditTypesResponse;
                toAmino(message: _130.QueryCreditTypesResponse): _130.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _130.QueryCreditTypesResponseAminoMsg): _130.QueryCreditTypesResponse;
                fromProtoMsg(message: _130.QueryCreditTypesResponseProtoMsg): _130.QueryCreditTypesResponse;
                toProto(message: _130.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _130.QueryCreditTypesResponse): _130.QueryCreditTypesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _130.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryParamsRequest;
                fromJSON(_: any): _130.QueryParamsRequest;
                toJSON(_: _130.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_130.QueryParamsRequest>): _130.QueryParamsRequest;
                fromAmino(_: _130.QueryParamsRequestAmino): _130.QueryParamsRequest;
                toAmino(_: _130.QueryParamsRequest): _130.QueryParamsRequestAmino;
                fromAminoMsg(object: _130.QueryParamsRequestAminoMsg): _130.QueryParamsRequest;
                fromProtoMsg(message: _130.QueryParamsRequestProtoMsg): _130.QueryParamsRequest;
                toProto(message: _130.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _130.QueryParamsRequest): _130.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _130.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryParamsResponse;
                fromJSON(object: any): _130.QueryParamsResponse;
                toJSON(message: _130.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_130.QueryParamsResponse>): _130.QueryParamsResponse;
                fromAmino(object: _130.QueryParamsResponseAmino): _130.QueryParamsResponse;
                toAmino(message: _130.QueryParamsResponse): _130.QueryParamsResponseAmino;
                fromAminoMsg(object: _130.QueryParamsResponseAminoMsg): _130.QueryParamsResponse;
                fromProtoMsg(message: _130.QueryParamsResponseProtoMsg): _130.QueryParamsResponse;
                toProto(message: _130.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _130.QueryParamsResponse): _130.QueryParamsResponseProtoMsg;
            };
            QueryCreditTypeRequest: {
                typeUrl: string;
                encode(message: _130.QueryCreditTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryCreditTypeRequest;
                fromJSON(object: any): _130.QueryCreditTypeRequest;
                toJSON(message: _130.QueryCreditTypeRequest): unknown;
                fromPartial(object: Partial<_130.QueryCreditTypeRequest>): _130.QueryCreditTypeRequest;
                fromAmino(object: _130.QueryCreditTypeRequestAmino): _130.QueryCreditTypeRequest;
                toAmino(message: _130.QueryCreditTypeRequest): _130.QueryCreditTypeRequestAmino;
                fromAminoMsg(object: _130.QueryCreditTypeRequestAminoMsg): _130.QueryCreditTypeRequest;
                fromProtoMsg(message: _130.QueryCreditTypeRequestProtoMsg): _130.QueryCreditTypeRequest;
                toProto(message: _130.QueryCreditTypeRequest): Uint8Array;
                toProtoMsg(message: _130.QueryCreditTypeRequest): _130.QueryCreditTypeRequestProtoMsg;
            };
            QueryCreditTypeResponse: {
                typeUrl: string;
                encode(message: _130.QueryCreditTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryCreditTypeResponse;
                fromJSON(object: any): _130.QueryCreditTypeResponse;
                toJSON(message: _130.QueryCreditTypeResponse): unknown;
                fromPartial(object: Partial<_130.QueryCreditTypeResponse>): _130.QueryCreditTypeResponse;
                fromAmino(object: _130.QueryCreditTypeResponseAmino): _130.QueryCreditTypeResponse;
                toAmino(message: _130.QueryCreditTypeResponse): _130.QueryCreditTypeResponseAmino;
                fromAminoMsg(object: _130.QueryCreditTypeResponseAminoMsg): _130.QueryCreditTypeResponse;
                fromProtoMsg(message: _130.QueryCreditTypeResponseProtoMsg): _130.QueryCreditTypeResponse;
                toProto(message: _130.QueryCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _130.QueryCreditTypeResponse): _130.QueryCreditTypeResponseProtoMsg;
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _130.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.ClassInfo;
                fromJSON(object: any): _130.ClassInfo;
                toJSON(message: _130.ClassInfo): unknown;
                fromPartial(object: Partial<_130.ClassInfo>): _130.ClassInfo;
                fromAmino(object: _130.ClassInfoAmino): _130.ClassInfo;
                toAmino(message: _130.ClassInfo): _130.ClassInfoAmino;
                fromAminoMsg(object: _130.ClassInfoAminoMsg): _130.ClassInfo;
                fromProtoMsg(message: _130.ClassInfoProtoMsg): _130.ClassInfo;
                toProto(message: _130.ClassInfo): Uint8Array;
                toProtoMsg(message: _130.ClassInfo): _130.ClassInfoProtoMsg;
            };
            ProjectInfo: {
                typeUrl: string;
                encode(message: _130.ProjectInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.ProjectInfo;
                fromJSON(object: any): _130.ProjectInfo;
                toJSON(message: _130.ProjectInfo): unknown;
                fromPartial(object: Partial<_130.ProjectInfo>): _130.ProjectInfo;
                fromAmino(object: _130.ProjectInfoAmino): _130.ProjectInfo;
                toAmino(message: _130.ProjectInfo): _130.ProjectInfoAmino;
                fromAminoMsg(object: _130.ProjectInfoAminoMsg): _130.ProjectInfo;
                fromProtoMsg(message: _130.ProjectInfoProtoMsg): _130.ProjectInfo;
                toProto(message: _130.ProjectInfo): Uint8Array;
                toProtoMsg(message: _130.ProjectInfo): _130.ProjectInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _130.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.BatchInfo;
                fromJSON(object: any): _130.BatchInfo;
                toJSON(message: _130.BatchInfo): unknown;
                fromPartial(object: Partial<_130.BatchInfo>): _130.BatchInfo;
                fromAmino(object: _130.BatchInfoAmino): _130.BatchInfo;
                toAmino(message: _130.BatchInfo): _130.BatchInfoAmino;
                fromAminoMsg(object: _130.BatchInfoAminoMsg): _130.BatchInfo;
                fromProtoMsg(message: _130.BatchInfoProtoMsg): _130.BatchInfo;
                toProto(message: _130.BatchInfo): Uint8Array;
                toProtoMsg(message: _130.BatchInfo): _130.BatchInfoProtoMsg;
            };
            BatchBalanceInfo: {
                typeUrl: string;
                encode(message: _130.BatchBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.BatchBalanceInfo;
                fromJSON(object: any): _130.BatchBalanceInfo;
                toJSON(message: _130.BatchBalanceInfo): unknown;
                fromPartial(object: Partial<_130.BatchBalanceInfo>): _130.BatchBalanceInfo;
                fromAmino(object: _130.BatchBalanceInfoAmino): _130.BatchBalanceInfo;
                toAmino(message: _130.BatchBalanceInfo): _130.BatchBalanceInfoAmino;
                fromAminoMsg(object: _130.BatchBalanceInfoAminoMsg): _130.BatchBalanceInfo;
                fromProtoMsg(message: _130.BatchBalanceInfoProtoMsg): _130.BatchBalanceInfo;
                toProto(message: _130.BatchBalanceInfo): Uint8Array;
                toProtoMsg(message: _130.BatchBalanceInfo): _130.BatchBalanceInfoProtoMsg;
            };
            QueryClassCreatorAllowlistRequest: {
                typeUrl: string;
                encode(_: _130.QueryClassCreatorAllowlistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassCreatorAllowlistRequest;
                fromJSON(_: any): _130.QueryClassCreatorAllowlistRequest;
                toJSON(_: _130.QueryClassCreatorAllowlistRequest): unknown;
                fromPartial(_: Partial<_130.QueryClassCreatorAllowlistRequest>): _130.QueryClassCreatorAllowlistRequest;
                fromAmino(_: _130.QueryClassCreatorAllowlistRequestAmino): _130.QueryClassCreatorAllowlistRequest;
                toAmino(_: _130.QueryClassCreatorAllowlistRequest): _130.QueryClassCreatorAllowlistRequestAmino;
                fromAminoMsg(object: _130.QueryClassCreatorAllowlistRequestAminoMsg): _130.QueryClassCreatorAllowlistRequest;
                fromProtoMsg(message: _130.QueryClassCreatorAllowlistRequestProtoMsg): _130.QueryClassCreatorAllowlistRequest;
                toProto(message: _130.QueryClassCreatorAllowlistRequest): Uint8Array;
                toProtoMsg(message: _130.QueryClassCreatorAllowlistRequest): _130.QueryClassCreatorAllowlistRequestProtoMsg;
            };
            QueryClassCreatorAllowlistResponse: {
                typeUrl: string;
                encode(message: _130.QueryClassCreatorAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassCreatorAllowlistResponse;
                fromJSON(object: any): _130.QueryClassCreatorAllowlistResponse;
                toJSON(message: _130.QueryClassCreatorAllowlistResponse): unknown;
                fromPartial(object: Partial<_130.QueryClassCreatorAllowlistResponse>): _130.QueryClassCreatorAllowlistResponse;
                fromAmino(object: _130.QueryClassCreatorAllowlistResponseAmino): _130.QueryClassCreatorAllowlistResponse;
                toAmino(message: _130.QueryClassCreatorAllowlistResponse): _130.QueryClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _130.QueryClassCreatorAllowlistResponseAminoMsg): _130.QueryClassCreatorAllowlistResponse;
                fromProtoMsg(message: _130.QueryClassCreatorAllowlistResponseProtoMsg): _130.QueryClassCreatorAllowlistResponse;
                toProto(message: _130.QueryClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _130.QueryClassCreatorAllowlistResponse): _130.QueryClassCreatorAllowlistResponseProtoMsg;
            };
            QueryAllowedClassCreatorsRequest: {
                typeUrl: string;
                encode(message: _130.QueryAllowedClassCreatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryAllowedClassCreatorsRequest;
                fromJSON(object: any): _130.QueryAllowedClassCreatorsRequest;
                toJSON(message: _130.QueryAllowedClassCreatorsRequest): unknown;
                fromPartial(object: Partial<_130.QueryAllowedClassCreatorsRequest>): _130.QueryAllowedClassCreatorsRequest;
                fromAmino(object: _130.QueryAllowedClassCreatorsRequestAmino): _130.QueryAllowedClassCreatorsRequest;
                toAmino(message: _130.QueryAllowedClassCreatorsRequest): _130.QueryAllowedClassCreatorsRequestAmino;
                fromAminoMsg(object: _130.QueryAllowedClassCreatorsRequestAminoMsg): _130.QueryAllowedClassCreatorsRequest;
                fromProtoMsg(message: _130.QueryAllowedClassCreatorsRequestProtoMsg): _130.QueryAllowedClassCreatorsRequest;
                toProto(message: _130.QueryAllowedClassCreatorsRequest): Uint8Array;
                toProtoMsg(message: _130.QueryAllowedClassCreatorsRequest): _130.QueryAllowedClassCreatorsRequestProtoMsg;
            };
            QueryAllowedClassCreatorsResponse: {
                typeUrl: string;
                encode(message: _130.QueryAllowedClassCreatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryAllowedClassCreatorsResponse;
                fromJSON(object: any): _130.QueryAllowedClassCreatorsResponse;
                toJSON(message: _130.QueryAllowedClassCreatorsResponse): unknown;
                fromPartial(object: Partial<_130.QueryAllowedClassCreatorsResponse>): _130.QueryAllowedClassCreatorsResponse;
                fromAmino(object: _130.QueryAllowedClassCreatorsResponseAmino): _130.QueryAllowedClassCreatorsResponse;
                toAmino(message: _130.QueryAllowedClassCreatorsResponse): _130.QueryAllowedClassCreatorsResponseAmino;
                fromAminoMsg(object: _130.QueryAllowedClassCreatorsResponseAminoMsg): _130.QueryAllowedClassCreatorsResponse;
                fromProtoMsg(message: _130.QueryAllowedClassCreatorsResponseProtoMsg): _130.QueryAllowedClassCreatorsResponse;
                toProto(message: _130.QueryAllowedClassCreatorsResponse): Uint8Array;
                toProtoMsg(message: _130.QueryAllowedClassCreatorsResponse): _130.QueryAllowedClassCreatorsResponseProtoMsg;
            };
            QueryClassFeeRequest: {
                typeUrl: string;
                encode(_: _130.QueryClassFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassFeeRequest;
                fromJSON(_: any): _130.QueryClassFeeRequest;
                toJSON(_: _130.QueryClassFeeRequest): unknown;
                fromPartial(_: Partial<_130.QueryClassFeeRequest>): _130.QueryClassFeeRequest;
                fromAmino(_: _130.QueryClassFeeRequestAmino): _130.QueryClassFeeRequest;
                toAmino(_: _130.QueryClassFeeRequest): _130.QueryClassFeeRequestAmino;
                fromAminoMsg(object: _130.QueryClassFeeRequestAminoMsg): _130.QueryClassFeeRequest;
                fromProtoMsg(message: _130.QueryClassFeeRequestProtoMsg): _130.QueryClassFeeRequest;
                toProto(message: _130.QueryClassFeeRequest): Uint8Array;
                toProtoMsg(message: _130.QueryClassFeeRequest): _130.QueryClassFeeRequestProtoMsg;
            };
            QueryClassFeeResponse: {
                typeUrl: string;
                encode(message: _130.QueryClassFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryClassFeeResponse;
                fromJSON(object: any): _130.QueryClassFeeResponse;
                toJSON(message: _130.QueryClassFeeResponse): unknown;
                fromPartial(object: Partial<_130.QueryClassFeeResponse>): _130.QueryClassFeeResponse;
                fromAmino(object: _130.QueryClassFeeResponseAmino): _130.QueryClassFeeResponse;
                toAmino(message: _130.QueryClassFeeResponse): _130.QueryClassFeeResponseAmino;
                fromAminoMsg(object: _130.QueryClassFeeResponseAminoMsg): _130.QueryClassFeeResponse;
                fromProtoMsg(message: _130.QueryClassFeeResponseProtoMsg): _130.QueryClassFeeResponse;
                toProto(message: _130.QueryClassFeeResponse): Uint8Array;
                toProtoMsg(message: _130.QueryClassFeeResponse): _130.QueryClassFeeResponseProtoMsg;
            };
            QueryAllowedBridgeChainsRequest: {
                typeUrl: string;
                encode(_: _130.QueryAllowedBridgeChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryAllowedBridgeChainsRequest;
                fromJSON(_: any): _130.QueryAllowedBridgeChainsRequest;
                toJSON(_: _130.QueryAllowedBridgeChainsRequest): unknown;
                fromPartial(_: Partial<_130.QueryAllowedBridgeChainsRequest>): _130.QueryAllowedBridgeChainsRequest;
                fromAmino(_: _130.QueryAllowedBridgeChainsRequestAmino): _130.QueryAllowedBridgeChainsRequest;
                toAmino(_: _130.QueryAllowedBridgeChainsRequest): _130.QueryAllowedBridgeChainsRequestAmino;
                fromAminoMsg(object: _130.QueryAllowedBridgeChainsRequestAminoMsg): _130.QueryAllowedBridgeChainsRequest;
                fromProtoMsg(message: _130.QueryAllowedBridgeChainsRequestProtoMsg): _130.QueryAllowedBridgeChainsRequest;
                toProto(message: _130.QueryAllowedBridgeChainsRequest): Uint8Array;
                toProtoMsg(message: _130.QueryAllowedBridgeChainsRequest): _130.QueryAllowedBridgeChainsRequestProtoMsg;
            };
            QueryAllowedBridgeChainsResponse: {
                typeUrl: string;
                encode(message: _130.QueryAllowedBridgeChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _130.QueryAllowedBridgeChainsResponse;
                fromJSON(object: any): _130.QueryAllowedBridgeChainsResponse;
                toJSON(message: _130.QueryAllowedBridgeChainsResponse): unknown;
                fromPartial(object: Partial<_130.QueryAllowedBridgeChainsResponse>): _130.QueryAllowedBridgeChainsResponse;
                fromAmino(object: _130.QueryAllowedBridgeChainsResponseAmino): _130.QueryAllowedBridgeChainsResponse;
                toAmino(message: _130.QueryAllowedBridgeChainsResponse): _130.QueryAllowedBridgeChainsResponseAmino;
                fromAminoMsg(object: _130.QueryAllowedBridgeChainsResponseAminoMsg): _130.QueryAllowedBridgeChainsResponse;
                fromProtoMsg(message: _130.QueryAllowedBridgeChainsResponseProtoMsg): _130.QueryAllowedBridgeChainsResponse;
                toProto(message: _130.QueryAllowedBridgeChainsResponse): Uint8Array;
                toProtoMsg(message: _130.QueryAllowedBridgeChainsResponse): _130.QueryAllowedBridgeChainsResponseProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _129.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventCreateClass;
                fromJSON(object: any): _129.EventCreateClass;
                toJSON(message: _129.EventCreateClass): unknown;
                fromPartial(object: Partial<_129.EventCreateClass>): _129.EventCreateClass;
                fromAmino(object: _129.EventCreateClassAmino): _129.EventCreateClass;
                toAmino(message: _129.EventCreateClass): _129.EventCreateClassAmino;
                fromAminoMsg(object: _129.EventCreateClassAminoMsg): _129.EventCreateClass;
                fromProtoMsg(message: _129.EventCreateClassProtoMsg): _129.EventCreateClass;
                toProto(message: _129.EventCreateClass): Uint8Array;
                toProtoMsg(message: _129.EventCreateClass): _129.EventCreateClassProtoMsg;
            };
            EventCreateProject: {
                typeUrl: string;
                encode(message: _129.EventCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventCreateProject;
                fromJSON(object: any): _129.EventCreateProject;
                toJSON(message: _129.EventCreateProject): unknown;
                fromPartial(object: Partial<_129.EventCreateProject>): _129.EventCreateProject;
                fromAmino(object: _129.EventCreateProjectAmino): _129.EventCreateProject;
                toAmino(message: _129.EventCreateProject): _129.EventCreateProjectAmino;
                fromAminoMsg(object: _129.EventCreateProjectAminoMsg): _129.EventCreateProject;
                fromProtoMsg(message: _129.EventCreateProjectProtoMsg): _129.EventCreateProject;
                toProto(message: _129.EventCreateProject): Uint8Array;
                toProtoMsg(message: _129.EventCreateProject): _129.EventCreateProjectProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _129.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventCreateBatch;
                fromJSON(object: any): _129.EventCreateBatch;
                toJSON(message: _129.EventCreateBatch): unknown;
                fromPartial(object: Partial<_129.EventCreateBatch>): _129.EventCreateBatch;
                fromAmino(object: _129.EventCreateBatchAmino): _129.EventCreateBatch;
                toAmino(message: _129.EventCreateBatch): _129.EventCreateBatchAmino;
                fromAminoMsg(object: _129.EventCreateBatchAminoMsg): _129.EventCreateBatch;
                fromProtoMsg(message: _129.EventCreateBatchProtoMsg): _129.EventCreateBatch;
                toProto(message: _129.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _129.EventCreateBatch): _129.EventCreateBatchProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _129.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventMint;
                fromJSON(object: any): _129.EventMint;
                toJSON(message: _129.EventMint): unknown;
                fromPartial(object: Partial<_129.EventMint>): _129.EventMint;
                fromAmino(object: _129.EventMintAmino): _129.EventMint;
                toAmino(message: _129.EventMint): _129.EventMintAmino;
                fromAminoMsg(object: _129.EventMintAminoMsg): _129.EventMint;
                fromProtoMsg(message: _129.EventMintProtoMsg): _129.EventMint;
                toProto(message: _129.EventMint): Uint8Array;
                toProtoMsg(message: _129.EventMint): _129.EventMintProtoMsg;
            };
            EventMintBatchCredits: {
                typeUrl: string;
                encode(message: _129.EventMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventMintBatchCredits;
                fromJSON(object: any): _129.EventMintBatchCredits;
                toJSON(message: _129.EventMintBatchCredits): unknown;
                fromPartial(object: Partial<_129.EventMintBatchCredits>): _129.EventMintBatchCredits;
                fromAmino(object: _129.EventMintBatchCreditsAmino): _129.EventMintBatchCredits;
                toAmino(message: _129.EventMintBatchCredits): _129.EventMintBatchCreditsAmino;
                fromAminoMsg(object: _129.EventMintBatchCreditsAminoMsg): _129.EventMintBatchCredits;
                fromProtoMsg(message: _129.EventMintBatchCreditsProtoMsg): _129.EventMintBatchCredits;
                toProto(message: _129.EventMintBatchCredits): Uint8Array;
                toProtoMsg(message: _129.EventMintBatchCredits): _129.EventMintBatchCreditsProtoMsg;
            };
            EventTransfer: {
                typeUrl: string;
                encode(message: _129.EventTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventTransfer;
                fromJSON(object: any): _129.EventTransfer;
                toJSON(message: _129.EventTransfer): unknown;
                fromPartial(object: Partial<_129.EventTransfer>): _129.EventTransfer;
                fromAmino(object: _129.EventTransferAmino): _129.EventTransfer;
                toAmino(message: _129.EventTransfer): _129.EventTransferAmino;
                fromAminoMsg(object: _129.EventTransferAminoMsg): _129.EventTransfer;
                fromProtoMsg(message: _129.EventTransferProtoMsg): _129.EventTransfer;
                toProto(message: _129.EventTransfer): Uint8Array;
                toProtoMsg(message: _129.EventTransfer): _129.EventTransferProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _129.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventRetire;
                fromJSON(object: any): _129.EventRetire;
                toJSON(message: _129.EventRetire): unknown;
                fromPartial(object: Partial<_129.EventRetire>): _129.EventRetire;
                fromAmino(object: _129.EventRetireAmino): _129.EventRetire;
                toAmino(message: _129.EventRetire): _129.EventRetireAmino;
                fromAminoMsg(object: _129.EventRetireAminoMsg): _129.EventRetire;
                fromProtoMsg(message: _129.EventRetireProtoMsg): _129.EventRetire;
                toProto(message: _129.EventRetire): Uint8Array;
                toProtoMsg(message: _129.EventRetire): _129.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _129.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventCancel;
                fromJSON(object: any): _129.EventCancel;
                toJSON(message: _129.EventCancel): unknown;
                fromPartial(object: Partial<_129.EventCancel>): _129.EventCancel;
                fromAmino(object: _129.EventCancelAmino): _129.EventCancel;
                toAmino(message: _129.EventCancel): _129.EventCancelAmino;
                fromAminoMsg(object: _129.EventCancelAminoMsg): _129.EventCancel;
                fromProtoMsg(message: _129.EventCancelProtoMsg): _129.EventCancel;
                toProto(message: _129.EventCancel): Uint8Array;
                toProtoMsg(message: _129.EventCancel): _129.EventCancelProtoMsg;
            };
            EventUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _129.EventUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventUpdateClassAdmin;
                fromJSON(object: any): _129.EventUpdateClassAdmin;
                toJSON(message: _129.EventUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_129.EventUpdateClassAdmin>): _129.EventUpdateClassAdmin;
                fromAmino(object: _129.EventUpdateClassAdminAmino): _129.EventUpdateClassAdmin;
                toAmino(message: _129.EventUpdateClassAdmin): _129.EventUpdateClassAdminAmino;
                fromAminoMsg(object: _129.EventUpdateClassAdminAminoMsg): _129.EventUpdateClassAdmin;
                fromProtoMsg(message: _129.EventUpdateClassAdminProtoMsg): _129.EventUpdateClassAdmin;
                toProto(message: _129.EventUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _129.EventUpdateClassAdmin): _129.EventUpdateClassAdminProtoMsg;
            };
            EventUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _129.EventUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventUpdateClassIssuers;
                fromJSON(object: any): _129.EventUpdateClassIssuers;
                toJSON(message: _129.EventUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_129.EventUpdateClassIssuers>): _129.EventUpdateClassIssuers;
                fromAmino(object: _129.EventUpdateClassIssuersAmino): _129.EventUpdateClassIssuers;
                toAmino(message: _129.EventUpdateClassIssuers): _129.EventUpdateClassIssuersAmino;
                fromAminoMsg(object: _129.EventUpdateClassIssuersAminoMsg): _129.EventUpdateClassIssuers;
                fromProtoMsg(message: _129.EventUpdateClassIssuersProtoMsg): _129.EventUpdateClassIssuers;
                toProto(message: _129.EventUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _129.EventUpdateClassIssuers): _129.EventUpdateClassIssuersProtoMsg;
            };
            EventUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _129.EventUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventUpdateClassMetadata;
                fromJSON(object: any): _129.EventUpdateClassMetadata;
                toJSON(message: _129.EventUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_129.EventUpdateClassMetadata>): _129.EventUpdateClassMetadata;
                fromAmino(object: _129.EventUpdateClassMetadataAmino): _129.EventUpdateClassMetadata;
                toAmino(message: _129.EventUpdateClassMetadata): _129.EventUpdateClassMetadataAmino;
                fromAminoMsg(object: _129.EventUpdateClassMetadataAminoMsg): _129.EventUpdateClassMetadata;
                fromProtoMsg(message: _129.EventUpdateClassMetadataProtoMsg): _129.EventUpdateClassMetadata;
                toProto(message: _129.EventUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _129.EventUpdateClassMetadata): _129.EventUpdateClassMetadataProtoMsg;
            };
            EventUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _129.EventUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventUpdateProjectAdmin;
                fromJSON(object: any): _129.EventUpdateProjectAdmin;
                toJSON(message: _129.EventUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_129.EventUpdateProjectAdmin>): _129.EventUpdateProjectAdmin;
                fromAmino(object: _129.EventUpdateProjectAdminAmino): _129.EventUpdateProjectAdmin;
                toAmino(message: _129.EventUpdateProjectAdmin): _129.EventUpdateProjectAdminAmino;
                fromAminoMsg(object: _129.EventUpdateProjectAdminAminoMsg): _129.EventUpdateProjectAdmin;
                fromProtoMsg(message: _129.EventUpdateProjectAdminProtoMsg): _129.EventUpdateProjectAdmin;
                toProto(message: _129.EventUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _129.EventUpdateProjectAdmin): _129.EventUpdateProjectAdminProtoMsg;
            };
            EventUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _129.EventUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventUpdateProjectMetadata;
                fromJSON(object: any): _129.EventUpdateProjectMetadata;
                toJSON(message: _129.EventUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_129.EventUpdateProjectMetadata>): _129.EventUpdateProjectMetadata;
                fromAmino(object: _129.EventUpdateProjectMetadataAmino): _129.EventUpdateProjectMetadata;
                toAmino(message: _129.EventUpdateProjectMetadata): _129.EventUpdateProjectMetadataAmino;
                fromAminoMsg(object: _129.EventUpdateProjectMetadataAminoMsg): _129.EventUpdateProjectMetadata;
                fromProtoMsg(message: _129.EventUpdateProjectMetadataProtoMsg): _129.EventUpdateProjectMetadata;
                toProto(message: _129.EventUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _129.EventUpdateProjectMetadata): _129.EventUpdateProjectMetadataProtoMsg;
            };
            EventUpdateBatchMetadata: {
                typeUrl: string;
                encode(message: _129.EventUpdateBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventUpdateBatchMetadata;
                fromJSON(object: any): _129.EventUpdateBatchMetadata;
                toJSON(message: _129.EventUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_129.EventUpdateBatchMetadata>): _129.EventUpdateBatchMetadata;
                fromAmino(object: _129.EventUpdateBatchMetadataAmino): _129.EventUpdateBatchMetadata;
                toAmino(message: _129.EventUpdateBatchMetadata): _129.EventUpdateBatchMetadataAmino;
                fromAminoMsg(object: _129.EventUpdateBatchMetadataAminoMsg): _129.EventUpdateBatchMetadata;
                fromProtoMsg(message: _129.EventUpdateBatchMetadataProtoMsg): _129.EventUpdateBatchMetadata;
                toProto(message: _129.EventUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _129.EventUpdateBatchMetadata): _129.EventUpdateBatchMetadataProtoMsg;
            };
            EventSealBatch: {
                typeUrl: string;
                encode(message: _129.EventSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventSealBatch;
                fromJSON(object: any): _129.EventSealBatch;
                toJSON(message: _129.EventSealBatch): unknown;
                fromPartial(object: Partial<_129.EventSealBatch>): _129.EventSealBatch;
                fromAmino(object: _129.EventSealBatchAmino): _129.EventSealBatch;
                toAmino(message: _129.EventSealBatch): _129.EventSealBatchAmino;
                fromAminoMsg(object: _129.EventSealBatchAminoMsg): _129.EventSealBatch;
                fromProtoMsg(message: _129.EventSealBatchProtoMsg): _129.EventSealBatch;
                toProto(message: _129.EventSealBatch): Uint8Array;
                toProtoMsg(message: _129.EventSealBatch): _129.EventSealBatchProtoMsg;
            };
            EventAddCreditType: {
                typeUrl: string;
                encode(message: _129.EventAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventAddCreditType;
                fromJSON(object: any): _129.EventAddCreditType;
                toJSON(message: _129.EventAddCreditType): unknown;
                fromPartial(object: Partial<_129.EventAddCreditType>): _129.EventAddCreditType;
                fromAmino(object: _129.EventAddCreditTypeAmino): _129.EventAddCreditType;
                toAmino(message: _129.EventAddCreditType): _129.EventAddCreditTypeAmino;
                fromAminoMsg(object: _129.EventAddCreditTypeAminoMsg): _129.EventAddCreditType;
                fromProtoMsg(message: _129.EventAddCreditTypeProtoMsg): _129.EventAddCreditType;
                toProto(message: _129.EventAddCreditType): Uint8Array;
                toProtoMsg(message: _129.EventAddCreditType): _129.EventAddCreditTypeProtoMsg;
            };
            EventBridge: {
                typeUrl: string;
                encode(message: _129.EventBridge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventBridge;
                fromJSON(object: any): _129.EventBridge;
                toJSON(message: _129.EventBridge): unknown;
                fromPartial(object: Partial<_129.EventBridge>): _129.EventBridge;
                fromAmino(object: _129.EventBridgeAmino): _129.EventBridge;
                toAmino(message: _129.EventBridge): _129.EventBridgeAmino;
                fromAminoMsg(object: _129.EventBridgeAminoMsg): _129.EventBridge;
                fromProtoMsg(message: _129.EventBridgeProtoMsg): _129.EventBridge;
                toProto(message: _129.EventBridge): Uint8Array;
                toProtoMsg(message: _129.EventBridge): _129.EventBridgeProtoMsg;
            };
            EventBridgeReceive: {
                typeUrl: string;
                encode(message: _129.EventBridgeReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _129.EventBridgeReceive;
                fromJSON(object: any): _129.EventBridgeReceive;
                toJSON(message: _129.EventBridgeReceive): unknown;
                fromPartial(object: Partial<_129.EventBridgeReceive>): _129.EventBridgeReceive;
                fromAmino(object: _129.EventBridgeReceiveAmino): _129.EventBridgeReceive;
                toAmino(message: _129.EventBridgeReceive): _129.EventBridgeReceiveAmino;
                fromAminoMsg(object: _129.EventBridgeReceiveAminoMsg): _129.EventBridgeReceive;
                fromProtoMsg(message: _129.EventBridgeReceiveProtoMsg): _129.EventBridgeReceive;
                toProto(message: _129.EventBridgeReceive): Uint8Array;
                toProtoMsg(message: _129.EventBridgeReceive): _129.EventBridgeReceiveProtoMsg;
            };
        };
        const v1alpha1: {
            MsgClientImpl: typeof _269.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _136.QueryClassesRequest | undefined): Promise<_136.QueryClassesResponse>;
                classInfo(request: _136.QueryClassInfoRequest): Promise<_136.QueryClassInfoResponse>;
                batches(request: _136.QueryBatchesRequest): Promise<_136.QueryBatchesResponse>;
                batchInfo(request: _136.QueryBatchInfoRequest): Promise<_136.QueryBatchInfoResponse>;
                balance(request: _136.QueryBalanceRequest): Promise<_136.QueryBalanceResponse>;
                supply(request: _136.QuerySupplyRequest): Promise<_136.QuerySupplyResponse>;
                creditTypes(request?: _136.QueryCreditTypesRequest | undefined): Promise<_136.QueryCreditTypesResponse>;
                params(request?: _136.QueryParamsRequest | undefined): Promise<_136.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _137.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _137.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _137.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _137.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _137.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _137.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _137.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _137.MsgCreateClass): {
                        typeUrl: string;
                        value: _137.MsgCreateClass;
                    };
                    createBatch(value: _137.MsgCreateBatch): {
                        typeUrl: string;
                        value: _137.MsgCreateBatch;
                    };
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                    retire(value: _137.MsgRetire): {
                        typeUrl: string;
                        value: _137.MsgRetire;
                    };
                    cancel(value: _137.MsgCancel): {
                        typeUrl: string;
                        value: _137.MsgCancel;
                    };
                    updateClassAdmin(value: _137.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _137.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _137.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _137.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _137.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _137.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _137.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _137.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _137.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _137.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _137.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _137.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _137.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _137.MsgCreateClass): {
                        typeUrl: string;
                        value: _137.MsgCreateClass;
                    };
                    createBatch(value: _137.MsgCreateBatch): {
                        typeUrl: string;
                        value: _137.MsgCreateBatch;
                    };
                    send(value: _137.MsgSend): {
                        typeUrl: string;
                        value: _137.MsgSend;
                    };
                    retire(value: _137.MsgRetire): {
                        typeUrl: string;
                        value: _137.MsgRetire;
                    };
                    cancel(value: _137.MsgCancel): {
                        typeUrl: string;
                        value: _137.MsgCancel;
                    };
                    updateClassAdmin(value: _137.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _137.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _137.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _137.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCreateClass) => _137.MsgCreateClassAmino;
                    fromAmino: (object: _137.MsgCreateClassAmino) => _137.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCreateBatch) => _137.MsgCreateBatchAmino;
                    fromAmino: (object: _137.MsgCreateBatchAmino) => _137.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _137.MsgSend) => _137.MsgSendAmino;
                    fromAmino: (object: _137.MsgSendAmino) => _137.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _137.MsgRetire) => _137.MsgRetireAmino;
                    fromAmino: (object: _137.MsgRetireAmino) => _137.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _137.MsgCancel) => _137.MsgCancelAmino;
                    fromAmino: (object: _137.MsgCancelAmino) => _137.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdateClassAdmin) => _137.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _137.MsgUpdateClassAdminAmino) => _137.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdateClassIssuers) => _137.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _137.MsgUpdateClassIssuersAmino) => _137.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdateClassMetadata) => _137.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _137.MsgUpdateClassMetadataAmino) => _137.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _138.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _138.ClassInfo;
                fromJSON(object: any): _138.ClassInfo;
                toJSON(message: _138.ClassInfo): unknown;
                fromPartial(object: Partial<_138.ClassInfo>): _138.ClassInfo;
                fromAmino(object: _138.ClassInfoAmino): _138.ClassInfo;
                toAmino(message: _138.ClassInfo): _138.ClassInfoAmino;
                fromAminoMsg(object: _138.ClassInfoAminoMsg): _138.ClassInfo;
                fromProtoMsg(message: _138.ClassInfoProtoMsg): _138.ClassInfo;
                toProto(message: _138.ClassInfo): Uint8Array;
                toProtoMsg(message: _138.ClassInfo): _138.ClassInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _138.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _138.BatchInfo;
                fromJSON(object: any): _138.BatchInfo;
                toJSON(message: _138.BatchInfo): unknown;
                fromPartial(object: Partial<_138.BatchInfo>): _138.BatchInfo;
                fromAmino(object: _138.BatchInfoAmino): _138.BatchInfo;
                toAmino(message: _138.BatchInfo): _138.BatchInfoAmino;
                fromAminoMsg(object: _138.BatchInfoAminoMsg): _138.BatchInfo;
                fromProtoMsg(message: _138.BatchInfoProtoMsg): _138.BatchInfo;
                toProto(message: _138.BatchInfo): Uint8Array;
                toProtoMsg(message: _138.BatchInfo): _138.BatchInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _138.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _138.Params;
                fromJSON(object: any): _138.Params;
                toJSON(message: _138.Params): unknown;
                fromPartial(object: Partial<_138.Params>): _138.Params;
                fromAmino(object: _138.ParamsAmino): _138.Params;
                toAmino(message: _138.Params): _138.ParamsAmino;
                fromAminoMsg(object: _138.ParamsAminoMsg): _138.Params;
                fromProtoMsg(message: _138.ParamsProtoMsg): _138.Params;
                toProto(message: _138.Params): Uint8Array;
                toProtoMsg(message: _138.Params): _138.ParamsProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _138.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _138.CreditType;
                fromJSON(object: any): _138.CreditType;
                toJSON(message: _138.CreditType): unknown;
                fromPartial(object: Partial<_138.CreditType>): _138.CreditType;
                fromAmino(object: _138.CreditTypeAmino): _138.CreditType;
                toAmino(message: _138.CreditType): _138.CreditTypeAmino;
                fromAminoMsg(object: _138.CreditTypeAminoMsg): _138.CreditType;
                fromProtoMsg(message: _138.CreditTypeProtoMsg): _138.CreditType;
                toProto(message: _138.CreditType): Uint8Array;
                toProtoMsg(message: _138.CreditType): _138.CreditTypeProtoMsg;
            };
            CreditTypeSeq: {
                typeUrl: string;
                encode(message: _138.CreditTypeSeq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _138.CreditTypeSeq;
                fromJSON(object: any): _138.CreditTypeSeq;
                toJSON(message: _138.CreditTypeSeq): unknown;
                fromPartial(object: Partial<_138.CreditTypeSeq>): _138.CreditTypeSeq;
                fromAmino(object: _138.CreditTypeSeqAmino): _138.CreditTypeSeq;
                toAmino(message: _138.CreditTypeSeq): _138.CreditTypeSeqAmino;
                fromAminoMsg(object: _138.CreditTypeSeqAminoMsg): _138.CreditTypeSeq;
                fromProtoMsg(message: _138.CreditTypeSeqProtoMsg): _138.CreditTypeSeq;
                toProto(message: _138.CreditTypeSeq): Uint8Array;
                toProtoMsg(message: _138.CreditTypeSeq): _138.CreditTypeSeqProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _137.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCreateClass;
                fromJSON(object: any): _137.MsgCreateClass;
                toJSON(message: _137.MsgCreateClass): unknown;
                fromPartial(object: Partial<_137.MsgCreateClass>): _137.MsgCreateClass;
                fromAmino(object: _137.MsgCreateClassAmino): _137.MsgCreateClass;
                toAmino(message: _137.MsgCreateClass): _137.MsgCreateClassAmino;
                fromAminoMsg(object: _137.MsgCreateClassAminoMsg): _137.MsgCreateClass;
                fromProtoMsg(message: _137.MsgCreateClassProtoMsg): _137.MsgCreateClass;
                toProto(message: _137.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _137.MsgCreateClass): _137.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _137.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCreateClassResponse;
                fromJSON(object: any): _137.MsgCreateClassResponse;
                toJSON(message: _137.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_137.MsgCreateClassResponse>): _137.MsgCreateClassResponse;
                fromAmino(object: _137.MsgCreateClassResponseAmino): _137.MsgCreateClassResponse;
                toAmino(message: _137.MsgCreateClassResponse): _137.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _137.MsgCreateClassResponseAminoMsg): _137.MsgCreateClassResponse;
                fromProtoMsg(message: _137.MsgCreateClassResponseProtoMsg): _137.MsgCreateClassResponse;
                toProto(message: _137.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCreateClassResponse): _137.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _137.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCreateBatch;
                fromJSON(object: any): _137.MsgCreateBatch;
                toJSON(message: _137.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_137.MsgCreateBatch>): _137.MsgCreateBatch;
                fromAmino(object: _137.MsgCreateBatchAmino): _137.MsgCreateBatch;
                toAmino(message: _137.MsgCreateBatch): _137.MsgCreateBatchAmino;
                fromAminoMsg(object: _137.MsgCreateBatchAminoMsg): _137.MsgCreateBatch;
                fromProtoMsg(message: _137.MsgCreateBatchProtoMsg): _137.MsgCreateBatch;
                toProto(message: _137.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _137.MsgCreateBatch): _137.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatch_BatchIssuance: {
                typeUrl: string;
                encode(message: _137.MsgCreateBatch_BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _137.MsgCreateBatch_BatchIssuance;
                toJSON(message: _137.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: Partial<_137.MsgCreateBatch_BatchIssuance>): _137.MsgCreateBatch_BatchIssuance;
                fromAmino(object: _137.MsgCreateBatch_BatchIssuanceAmino): _137.MsgCreateBatch_BatchIssuance;
                toAmino(message: _137.MsgCreateBatch_BatchIssuance): _137.MsgCreateBatch_BatchIssuanceAmino;
                fromAminoMsg(object: _137.MsgCreateBatch_BatchIssuanceAminoMsg): _137.MsgCreateBatch_BatchIssuance;
                fromProtoMsg(message: _137.MsgCreateBatch_BatchIssuanceProtoMsg): _137.MsgCreateBatch_BatchIssuance;
                toProto(message: _137.MsgCreateBatch_BatchIssuance): Uint8Array;
                toProtoMsg(message: _137.MsgCreateBatch_BatchIssuance): _137.MsgCreateBatch_BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _137.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCreateBatchResponse;
                fromJSON(object: any): _137.MsgCreateBatchResponse;
                toJSON(message: _137.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_137.MsgCreateBatchResponse>): _137.MsgCreateBatchResponse;
                fromAmino(object: _137.MsgCreateBatchResponseAmino): _137.MsgCreateBatchResponse;
                toAmino(message: _137.MsgCreateBatchResponse): _137.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _137.MsgCreateBatchResponseAminoMsg): _137.MsgCreateBatchResponse;
                fromProtoMsg(message: _137.MsgCreateBatchResponseProtoMsg): _137.MsgCreateBatchResponse;
                toProto(message: _137.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCreateBatchResponse): _137.MsgCreateBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _137.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgSend;
                fromJSON(object: any): _137.MsgSend;
                toJSON(message: _137.MsgSend): unknown;
                fromPartial(object: Partial<_137.MsgSend>): _137.MsgSend;
                fromAmino(object: _137.MsgSendAmino): _137.MsgSend;
                toAmino(message: _137.MsgSend): _137.MsgSendAmino;
                fromAminoMsg(object: _137.MsgSendAminoMsg): _137.MsgSend;
                fromProtoMsg(message: _137.MsgSendProtoMsg): _137.MsgSend;
                toProto(message: _137.MsgSend): Uint8Array;
                toProtoMsg(message: _137.MsgSend): _137.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _137.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgSend_SendCredits;
                fromJSON(object: any): _137.MsgSend_SendCredits;
                toJSON(message: _137.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_137.MsgSend_SendCredits>): _137.MsgSend_SendCredits;
                fromAmino(object: _137.MsgSend_SendCreditsAmino): _137.MsgSend_SendCredits;
                toAmino(message: _137.MsgSend_SendCredits): _137.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _137.MsgSend_SendCreditsAminoMsg): _137.MsgSend_SendCredits;
                fromProtoMsg(message: _137.MsgSend_SendCreditsProtoMsg): _137.MsgSend_SendCredits;
                toProto(message: _137.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _137.MsgSend_SendCredits): _137.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _137.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgSendResponse;
                fromJSON(_: any): _137.MsgSendResponse;
                toJSON(_: _137.MsgSendResponse): unknown;
                fromPartial(_: Partial<_137.MsgSendResponse>): _137.MsgSendResponse;
                fromAmino(_: _137.MsgSendResponseAmino): _137.MsgSendResponse;
                toAmino(_: _137.MsgSendResponse): _137.MsgSendResponseAmino;
                fromAminoMsg(object: _137.MsgSendResponseAminoMsg): _137.MsgSendResponse;
                fromProtoMsg(message: _137.MsgSendResponseProtoMsg): _137.MsgSendResponse;
                toProto(message: _137.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _137.MsgSendResponse): _137.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _137.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgRetire;
                fromJSON(object: any): _137.MsgRetire;
                toJSON(message: _137.MsgRetire): unknown;
                fromPartial(object: Partial<_137.MsgRetire>): _137.MsgRetire;
                fromAmino(object: _137.MsgRetireAmino): _137.MsgRetire;
                toAmino(message: _137.MsgRetire): _137.MsgRetireAmino;
                fromAminoMsg(object: _137.MsgRetireAminoMsg): _137.MsgRetire;
                fromProtoMsg(message: _137.MsgRetireProtoMsg): _137.MsgRetire;
                toProto(message: _137.MsgRetire): Uint8Array;
                toProtoMsg(message: _137.MsgRetire): _137.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                typeUrl: string;
                encode(message: _137.MsgRetire_RetireCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgRetire_RetireCredits;
                fromJSON(object: any): _137.MsgRetire_RetireCredits;
                toJSON(message: _137.MsgRetire_RetireCredits): unknown;
                fromPartial(object: Partial<_137.MsgRetire_RetireCredits>): _137.MsgRetire_RetireCredits;
                fromAmino(object: _137.MsgRetire_RetireCreditsAmino): _137.MsgRetire_RetireCredits;
                toAmino(message: _137.MsgRetire_RetireCredits): _137.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _137.MsgRetire_RetireCreditsAminoMsg): _137.MsgRetire_RetireCredits;
                fromProtoMsg(message: _137.MsgRetire_RetireCreditsProtoMsg): _137.MsgRetire_RetireCredits;
                toProto(message: _137.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _137.MsgRetire_RetireCredits): _137.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _137.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgRetireResponse;
                fromJSON(_: any): _137.MsgRetireResponse;
                toJSON(_: _137.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_137.MsgRetireResponse>): _137.MsgRetireResponse;
                fromAmino(_: _137.MsgRetireResponseAmino): _137.MsgRetireResponse;
                toAmino(_: _137.MsgRetireResponse): _137.MsgRetireResponseAmino;
                fromAminoMsg(object: _137.MsgRetireResponseAminoMsg): _137.MsgRetireResponse;
                fromProtoMsg(message: _137.MsgRetireResponseProtoMsg): _137.MsgRetireResponse;
                toProto(message: _137.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _137.MsgRetireResponse): _137.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _137.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCancel;
                fromJSON(object: any): _137.MsgCancel;
                toJSON(message: _137.MsgCancel): unknown;
                fromPartial(object: Partial<_137.MsgCancel>): _137.MsgCancel;
                fromAmino(object: _137.MsgCancelAmino): _137.MsgCancel;
                toAmino(message: _137.MsgCancel): _137.MsgCancelAmino;
                fromAminoMsg(object: _137.MsgCancelAminoMsg): _137.MsgCancel;
                fromProtoMsg(message: _137.MsgCancelProtoMsg): _137.MsgCancel;
                toProto(message: _137.MsgCancel): Uint8Array;
                toProtoMsg(message: _137.MsgCancel): _137.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                typeUrl: string;
                encode(message: _137.MsgCancel_CancelCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCancel_CancelCredits;
                fromJSON(object: any): _137.MsgCancel_CancelCredits;
                toJSON(message: _137.MsgCancel_CancelCredits): unknown;
                fromPartial(object: Partial<_137.MsgCancel_CancelCredits>): _137.MsgCancel_CancelCredits;
                fromAmino(object: _137.MsgCancel_CancelCreditsAmino): _137.MsgCancel_CancelCredits;
                toAmino(message: _137.MsgCancel_CancelCredits): _137.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _137.MsgCancel_CancelCreditsAminoMsg): _137.MsgCancel_CancelCredits;
                fromProtoMsg(message: _137.MsgCancel_CancelCreditsProtoMsg): _137.MsgCancel_CancelCredits;
                toProto(message: _137.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _137.MsgCancel_CancelCredits): _137.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _137.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgCancelResponse;
                fromJSON(_: any): _137.MsgCancelResponse;
                toJSON(_: _137.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_137.MsgCancelResponse>): _137.MsgCancelResponse;
                fromAmino(_: _137.MsgCancelResponseAmino): _137.MsgCancelResponse;
                toAmino(_: _137.MsgCancelResponse): _137.MsgCancelResponseAmino;
                fromAminoMsg(object: _137.MsgCancelResponseAminoMsg): _137.MsgCancelResponse;
                fromProtoMsg(message: _137.MsgCancelResponseProtoMsg): _137.MsgCancelResponse;
                toProto(message: _137.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _137.MsgCancelResponse): _137.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _137.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgUpdateClassAdmin;
                fromJSON(object: any): _137.MsgUpdateClassAdmin;
                toJSON(message: _137.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_137.MsgUpdateClassAdmin>): _137.MsgUpdateClassAdmin;
                fromAmino(object: _137.MsgUpdateClassAdminAmino): _137.MsgUpdateClassAdmin;
                toAmino(message: _137.MsgUpdateClassAdmin): _137.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _137.MsgUpdateClassAdminAminoMsg): _137.MsgUpdateClassAdmin;
                fromProtoMsg(message: _137.MsgUpdateClassAdminProtoMsg): _137.MsgUpdateClassAdmin;
                toProto(message: _137.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateClassAdmin): _137.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _137.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _137.MsgUpdateClassAdminResponse;
                toJSON(_: _137.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateClassAdminResponse>): _137.MsgUpdateClassAdminResponse;
                fromAmino(_: _137.MsgUpdateClassAdminResponseAmino): _137.MsgUpdateClassAdminResponse;
                toAmino(_: _137.MsgUpdateClassAdminResponse): _137.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _137.MsgUpdateClassAdminResponseAminoMsg): _137.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _137.MsgUpdateClassAdminResponseProtoMsg): _137.MsgUpdateClassAdminResponse;
                toProto(message: _137.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateClassAdminResponse): _137.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _137.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgUpdateClassIssuers;
                fromJSON(object: any): _137.MsgUpdateClassIssuers;
                toJSON(message: _137.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_137.MsgUpdateClassIssuers>): _137.MsgUpdateClassIssuers;
                fromAmino(object: _137.MsgUpdateClassIssuersAmino): _137.MsgUpdateClassIssuers;
                toAmino(message: _137.MsgUpdateClassIssuers): _137.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _137.MsgUpdateClassIssuersAminoMsg): _137.MsgUpdateClassIssuers;
                fromProtoMsg(message: _137.MsgUpdateClassIssuersProtoMsg): _137.MsgUpdateClassIssuers;
                toProto(message: _137.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateClassIssuers): _137.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _137.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _137.MsgUpdateClassIssuersResponse;
                toJSON(_: _137.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateClassIssuersResponse>): _137.MsgUpdateClassIssuersResponse;
                fromAmino(_: _137.MsgUpdateClassIssuersResponseAmino): _137.MsgUpdateClassIssuersResponse;
                toAmino(_: _137.MsgUpdateClassIssuersResponse): _137.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _137.MsgUpdateClassIssuersResponseAminoMsg): _137.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _137.MsgUpdateClassIssuersResponseProtoMsg): _137.MsgUpdateClassIssuersResponse;
                toProto(message: _137.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateClassIssuersResponse): _137.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _137.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgUpdateClassMetadata;
                fromJSON(object: any): _137.MsgUpdateClassMetadata;
                toJSON(message: _137.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_137.MsgUpdateClassMetadata>): _137.MsgUpdateClassMetadata;
                fromAmino(object: _137.MsgUpdateClassMetadataAmino): _137.MsgUpdateClassMetadata;
                toAmino(message: _137.MsgUpdateClassMetadata): _137.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _137.MsgUpdateClassMetadataAminoMsg): _137.MsgUpdateClassMetadata;
                fromProtoMsg(message: _137.MsgUpdateClassMetadataProtoMsg): _137.MsgUpdateClassMetadata;
                toProto(message: _137.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateClassMetadata): _137.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _137.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _137.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _137.MsgUpdateClassMetadataResponse;
                toJSON(_: _137.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_137.MsgUpdateClassMetadataResponse>): _137.MsgUpdateClassMetadataResponse;
                fromAmino(_: _137.MsgUpdateClassMetadataResponseAmino): _137.MsgUpdateClassMetadataResponse;
                toAmino(_: _137.MsgUpdateClassMetadataResponse): _137.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _137.MsgUpdateClassMetadataResponseAminoMsg): _137.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _137.MsgUpdateClassMetadataResponseProtoMsg): _137.MsgUpdateClassMetadataResponse;
                toProto(message: _137.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateClassMetadataResponse): _137.MsgUpdateClassMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _136.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryParamsRequest;
                fromJSON(_: any): _136.QueryParamsRequest;
                toJSON(_: _136.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_136.QueryParamsRequest>): _136.QueryParamsRequest;
                fromAmino(_: _136.QueryParamsRequestAmino): _136.QueryParamsRequest;
                toAmino(_: _136.QueryParamsRequest): _136.QueryParamsRequestAmino;
                fromAminoMsg(object: _136.QueryParamsRequestAminoMsg): _136.QueryParamsRequest;
                fromProtoMsg(message: _136.QueryParamsRequestProtoMsg): _136.QueryParamsRequest;
                toProto(message: _136.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _136.QueryParamsRequest): _136.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _136.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryParamsResponse;
                fromJSON(object: any): _136.QueryParamsResponse;
                toJSON(message: _136.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_136.QueryParamsResponse>): _136.QueryParamsResponse;
                fromAmino(object: _136.QueryParamsResponseAmino): _136.QueryParamsResponse;
                toAmino(message: _136.QueryParamsResponse): _136.QueryParamsResponseAmino;
                fromAminoMsg(object: _136.QueryParamsResponseAminoMsg): _136.QueryParamsResponse;
                fromProtoMsg(message: _136.QueryParamsResponseProtoMsg): _136.QueryParamsResponse;
                toProto(message: _136.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _136.QueryParamsResponse): _136.QueryParamsResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _136.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryClassesRequest;
                fromJSON(object: any): _136.QueryClassesRequest;
                toJSON(message: _136.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_136.QueryClassesRequest>): _136.QueryClassesRequest;
                fromAmino(object: _136.QueryClassesRequestAmino): _136.QueryClassesRequest;
                toAmino(message: _136.QueryClassesRequest): _136.QueryClassesRequestAmino;
                fromAminoMsg(object: _136.QueryClassesRequestAminoMsg): _136.QueryClassesRequest;
                fromProtoMsg(message: _136.QueryClassesRequestProtoMsg): _136.QueryClassesRequest;
                toProto(message: _136.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _136.QueryClassesRequest): _136.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _136.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryClassesResponse;
                fromJSON(object: any): _136.QueryClassesResponse;
                toJSON(message: _136.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_136.QueryClassesResponse>): _136.QueryClassesResponse;
                fromAmino(object: _136.QueryClassesResponseAmino): _136.QueryClassesResponse;
                toAmino(message: _136.QueryClassesResponse): _136.QueryClassesResponseAmino;
                fromAminoMsg(object: _136.QueryClassesResponseAminoMsg): _136.QueryClassesResponse;
                fromProtoMsg(message: _136.QueryClassesResponseProtoMsg): _136.QueryClassesResponse;
                toProto(message: _136.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _136.QueryClassesResponse): _136.QueryClassesResponseProtoMsg;
            };
            QueryClassInfoRequest: {
                typeUrl: string;
                encode(message: _136.QueryClassInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryClassInfoRequest;
                fromJSON(object: any): _136.QueryClassInfoRequest;
                toJSON(message: _136.QueryClassInfoRequest): unknown;
                fromPartial(object: Partial<_136.QueryClassInfoRequest>): _136.QueryClassInfoRequest;
                fromAmino(object: _136.QueryClassInfoRequestAmino): _136.QueryClassInfoRequest;
                toAmino(message: _136.QueryClassInfoRequest): _136.QueryClassInfoRequestAmino;
                fromAminoMsg(object: _136.QueryClassInfoRequestAminoMsg): _136.QueryClassInfoRequest;
                fromProtoMsg(message: _136.QueryClassInfoRequestProtoMsg): _136.QueryClassInfoRequest;
                toProto(message: _136.QueryClassInfoRequest): Uint8Array;
                toProtoMsg(message: _136.QueryClassInfoRequest): _136.QueryClassInfoRequestProtoMsg;
            };
            QueryClassInfoResponse: {
                typeUrl: string;
                encode(message: _136.QueryClassInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryClassInfoResponse;
                fromJSON(object: any): _136.QueryClassInfoResponse;
                toJSON(message: _136.QueryClassInfoResponse): unknown;
                fromPartial(object: Partial<_136.QueryClassInfoResponse>): _136.QueryClassInfoResponse;
                fromAmino(object: _136.QueryClassInfoResponseAmino): _136.QueryClassInfoResponse;
                toAmino(message: _136.QueryClassInfoResponse): _136.QueryClassInfoResponseAmino;
                fromAminoMsg(object: _136.QueryClassInfoResponseAminoMsg): _136.QueryClassInfoResponse;
                fromProtoMsg(message: _136.QueryClassInfoResponseProtoMsg): _136.QueryClassInfoResponse;
                toProto(message: _136.QueryClassInfoResponse): Uint8Array;
                toProtoMsg(message: _136.QueryClassInfoResponse): _136.QueryClassInfoResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _136.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryBatchesRequest;
                fromJSON(object: any): _136.QueryBatchesRequest;
                toJSON(message: _136.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_136.QueryBatchesRequest>): _136.QueryBatchesRequest;
                fromAmino(object: _136.QueryBatchesRequestAmino): _136.QueryBatchesRequest;
                toAmino(message: _136.QueryBatchesRequest): _136.QueryBatchesRequestAmino;
                fromAminoMsg(object: _136.QueryBatchesRequestAminoMsg): _136.QueryBatchesRequest;
                fromProtoMsg(message: _136.QueryBatchesRequestProtoMsg): _136.QueryBatchesRequest;
                toProto(message: _136.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _136.QueryBatchesRequest): _136.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _136.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryBatchesResponse;
                fromJSON(object: any): _136.QueryBatchesResponse;
                toJSON(message: _136.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_136.QueryBatchesResponse>): _136.QueryBatchesResponse;
                fromAmino(object: _136.QueryBatchesResponseAmino): _136.QueryBatchesResponse;
                toAmino(message: _136.QueryBatchesResponse): _136.QueryBatchesResponseAmino;
                fromAminoMsg(object: _136.QueryBatchesResponseAminoMsg): _136.QueryBatchesResponse;
                fromProtoMsg(message: _136.QueryBatchesResponseProtoMsg): _136.QueryBatchesResponse;
                toProto(message: _136.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _136.QueryBatchesResponse): _136.QueryBatchesResponseProtoMsg;
            };
            QueryBatchInfoRequest: {
                typeUrl: string;
                encode(message: _136.QueryBatchInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryBatchInfoRequest;
                fromJSON(object: any): _136.QueryBatchInfoRequest;
                toJSON(message: _136.QueryBatchInfoRequest): unknown;
                fromPartial(object: Partial<_136.QueryBatchInfoRequest>): _136.QueryBatchInfoRequest;
                fromAmino(object: _136.QueryBatchInfoRequestAmino): _136.QueryBatchInfoRequest;
                toAmino(message: _136.QueryBatchInfoRequest): _136.QueryBatchInfoRequestAmino;
                fromAminoMsg(object: _136.QueryBatchInfoRequestAminoMsg): _136.QueryBatchInfoRequest;
                fromProtoMsg(message: _136.QueryBatchInfoRequestProtoMsg): _136.QueryBatchInfoRequest;
                toProto(message: _136.QueryBatchInfoRequest): Uint8Array;
                toProtoMsg(message: _136.QueryBatchInfoRequest): _136.QueryBatchInfoRequestProtoMsg;
            };
            QueryBatchInfoResponse: {
                typeUrl: string;
                encode(message: _136.QueryBatchInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryBatchInfoResponse;
                fromJSON(object: any): _136.QueryBatchInfoResponse;
                toJSON(message: _136.QueryBatchInfoResponse): unknown;
                fromPartial(object: Partial<_136.QueryBatchInfoResponse>): _136.QueryBatchInfoResponse;
                fromAmino(object: _136.QueryBatchInfoResponseAmino): _136.QueryBatchInfoResponse;
                toAmino(message: _136.QueryBatchInfoResponse): _136.QueryBatchInfoResponseAmino;
                fromAminoMsg(object: _136.QueryBatchInfoResponseAminoMsg): _136.QueryBatchInfoResponse;
                fromProtoMsg(message: _136.QueryBatchInfoResponseProtoMsg): _136.QueryBatchInfoResponse;
                toProto(message: _136.QueryBatchInfoResponse): Uint8Array;
                toProtoMsg(message: _136.QueryBatchInfoResponse): _136.QueryBatchInfoResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _136.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryBalanceRequest;
                fromJSON(object: any): _136.QueryBalanceRequest;
                toJSON(message: _136.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_136.QueryBalanceRequest>): _136.QueryBalanceRequest;
                fromAmino(object: _136.QueryBalanceRequestAmino): _136.QueryBalanceRequest;
                toAmino(message: _136.QueryBalanceRequest): _136.QueryBalanceRequestAmino;
                fromAminoMsg(object: _136.QueryBalanceRequestAminoMsg): _136.QueryBalanceRequest;
                fromProtoMsg(message: _136.QueryBalanceRequestProtoMsg): _136.QueryBalanceRequest;
                toProto(message: _136.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _136.QueryBalanceRequest): _136.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _136.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryBalanceResponse;
                fromJSON(object: any): _136.QueryBalanceResponse;
                toJSON(message: _136.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_136.QueryBalanceResponse>): _136.QueryBalanceResponse;
                fromAmino(object: _136.QueryBalanceResponseAmino): _136.QueryBalanceResponse;
                toAmino(message: _136.QueryBalanceResponse): _136.QueryBalanceResponseAmino;
                fromAminoMsg(object: _136.QueryBalanceResponseAminoMsg): _136.QueryBalanceResponse;
                fromProtoMsg(message: _136.QueryBalanceResponseProtoMsg): _136.QueryBalanceResponse;
                toProto(message: _136.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _136.QueryBalanceResponse): _136.QueryBalanceResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _136.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QuerySupplyRequest;
                fromJSON(object: any): _136.QuerySupplyRequest;
                toJSON(message: _136.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_136.QuerySupplyRequest>): _136.QuerySupplyRequest;
                fromAmino(object: _136.QuerySupplyRequestAmino): _136.QuerySupplyRequest;
                toAmino(message: _136.QuerySupplyRequest): _136.QuerySupplyRequestAmino;
                fromAminoMsg(object: _136.QuerySupplyRequestAminoMsg): _136.QuerySupplyRequest;
                fromProtoMsg(message: _136.QuerySupplyRequestProtoMsg): _136.QuerySupplyRequest;
                toProto(message: _136.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _136.QuerySupplyRequest): _136.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _136.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QuerySupplyResponse;
                fromJSON(object: any): _136.QuerySupplyResponse;
                toJSON(message: _136.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_136.QuerySupplyResponse>): _136.QuerySupplyResponse;
                fromAmino(object: _136.QuerySupplyResponseAmino): _136.QuerySupplyResponse;
                toAmino(message: _136.QuerySupplyResponse): _136.QuerySupplyResponseAmino;
                fromAminoMsg(object: _136.QuerySupplyResponseAminoMsg): _136.QuerySupplyResponse;
                fromProtoMsg(message: _136.QuerySupplyResponseProtoMsg): _136.QuerySupplyResponse;
                toProto(message: _136.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _136.QuerySupplyResponse): _136.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _136.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryCreditTypesRequest;
                fromJSON(_: any): _136.QueryCreditTypesRequest;
                toJSON(_: _136.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_136.QueryCreditTypesRequest>): _136.QueryCreditTypesRequest;
                fromAmino(_: _136.QueryCreditTypesRequestAmino): _136.QueryCreditTypesRequest;
                toAmino(_: _136.QueryCreditTypesRequest): _136.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _136.QueryCreditTypesRequestAminoMsg): _136.QueryCreditTypesRequest;
                fromProtoMsg(message: _136.QueryCreditTypesRequestProtoMsg): _136.QueryCreditTypesRequest;
                toProto(message: _136.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _136.QueryCreditTypesRequest): _136.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _136.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _136.QueryCreditTypesResponse;
                fromJSON(object: any): _136.QueryCreditTypesResponse;
                toJSON(message: _136.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_136.QueryCreditTypesResponse>): _136.QueryCreditTypesResponse;
                fromAmino(object: _136.QueryCreditTypesResponseAmino): _136.QueryCreditTypesResponse;
                toAmino(message: _136.QueryCreditTypesResponse): _136.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _136.QueryCreditTypesResponseAminoMsg): _136.QueryCreditTypesResponse;
                fromProtoMsg(message: _136.QueryCreditTypesResponseProtoMsg): _136.QueryCreditTypesResponse;
                toProto(message: _136.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _136.QueryCreditTypesResponse): _136.QueryCreditTypesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _135.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
                fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
                toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
                fromAminoMsg(object: _135.GenesisStateAminoMsg): _135.GenesisState;
                fromProtoMsg(message: _135.GenesisStateProtoMsg): _135.GenesisState;
                toProto(message: _135.GenesisState): Uint8Array;
                toProtoMsg(message: _135.GenesisState): _135.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _135.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _135.Balance;
                fromJSON(object: any): _135.Balance;
                toJSON(message: _135.Balance): unknown;
                fromPartial(object: Partial<_135.Balance>): _135.Balance;
                fromAmino(object: _135.BalanceAmino): _135.Balance;
                toAmino(message: _135.Balance): _135.BalanceAmino;
                fromAminoMsg(object: _135.BalanceAminoMsg): _135.Balance;
                fromProtoMsg(message: _135.BalanceProtoMsg): _135.Balance;
                toProto(message: _135.Balance): Uint8Array;
                toProtoMsg(message: _135.Balance): _135.BalanceProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _135.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _135.Supply;
                fromJSON(object: any): _135.Supply;
                toJSON(message: _135.Supply): unknown;
                fromPartial(object: Partial<_135.Supply>): _135.Supply;
                fromAmino(object: _135.SupplyAmino): _135.Supply;
                toAmino(message: _135.Supply): _135.SupplyAmino;
                fromAminoMsg(object: _135.SupplyAminoMsg): _135.Supply;
                fromProtoMsg(message: _135.SupplyProtoMsg): _135.Supply;
                toProto(message: _135.Supply): Uint8Array;
                toProtoMsg(message: _135.Supply): _135.SupplyProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _134.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _134.EventCreateClass;
                fromJSON(object: any): _134.EventCreateClass;
                toJSON(message: _134.EventCreateClass): unknown;
                fromPartial(object: Partial<_134.EventCreateClass>): _134.EventCreateClass;
                fromAmino(object: _134.EventCreateClassAmino): _134.EventCreateClass;
                toAmino(message: _134.EventCreateClass): _134.EventCreateClassAmino;
                fromAminoMsg(object: _134.EventCreateClassAminoMsg): _134.EventCreateClass;
                fromProtoMsg(message: _134.EventCreateClassProtoMsg): _134.EventCreateClass;
                toProto(message: _134.EventCreateClass): Uint8Array;
                toProtoMsg(message: _134.EventCreateClass): _134.EventCreateClassProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _134.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _134.EventCreateBatch;
                fromJSON(object: any): _134.EventCreateBatch;
                toJSON(message: _134.EventCreateBatch): unknown;
                fromPartial(object: Partial<_134.EventCreateBatch>): _134.EventCreateBatch;
                fromAmino(object: _134.EventCreateBatchAmino): _134.EventCreateBatch;
                toAmino(message: _134.EventCreateBatch): _134.EventCreateBatchAmino;
                fromAminoMsg(object: _134.EventCreateBatchAminoMsg): _134.EventCreateBatch;
                fromProtoMsg(message: _134.EventCreateBatchProtoMsg): _134.EventCreateBatch;
                toProto(message: _134.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _134.EventCreateBatch): _134.EventCreateBatchProtoMsg;
            };
            EventReceive: {
                typeUrl: string;
                encode(message: _134.EventReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _134.EventReceive;
                fromJSON(object: any): _134.EventReceive;
                toJSON(message: _134.EventReceive): unknown;
                fromPartial(object: Partial<_134.EventReceive>): _134.EventReceive;
                fromAmino(object: _134.EventReceiveAmino): _134.EventReceive;
                toAmino(message: _134.EventReceive): _134.EventReceiveAmino;
                fromAminoMsg(object: _134.EventReceiveAminoMsg): _134.EventReceive;
                fromProtoMsg(message: _134.EventReceiveProtoMsg): _134.EventReceive;
                toProto(message: _134.EventReceive): Uint8Array;
                toProtoMsg(message: _134.EventReceive): _134.EventReceiveProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _134.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _134.EventRetire;
                fromJSON(object: any): _134.EventRetire;
                toJSON(message: _134.EventRetire): unknown;
                fromPartial(object: Partial<_134.EventRetire>): _134.EventRetire;
                fromAmino(object: _134.EventRetireAmino): _134.EventRetire;
                toAmino(message: _134.EventRetire): _134.EventRetireAmino;
                fromAminoMsg(object: _134.EventRetireAminoMsg): _134.EventRetire;
                fromProtoMsg(message: _134.EventRetireProtoMsg): _134.EventRetire;
                toProto(message: _134.EventRetire): Uint8Array;
                toProtoMsg(message: _134.EventRetire): _134.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _134.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _134.EventCancel;
                fromJSON(object: any): _134.EventCancel;
                toJSON(message: _134.EventCancel): unknown;
                fromPartial(object: Partial<_134.EventCancel>): _134.EventCancel;
                fromAmino(object: _134.EventCancelAmino): _134.EventCancel;
                toAmino(message: _134.EventCancel): _134.EventCancelAmino;
                fromAminoMsg(object: _134.EventCancelAminoMsg): _134.EventCancel;
                fromProtoMsg(message: _134.EventCancelProtoMsg): _134.EventCancel;
                toProto(message: _134.EventCancel): Uint8Array;
                toProtoMsg(message: _134.EventCancel): _134.EventCancelProtoMsg;
            };
        };
    }
    namespace intertx {
        const v1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                interchainAccount(request: _139.QueryInterchainAccountRequest): Promise<_139.QueryInterchainAccountResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _140.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _140.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _140.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _140.MsgRegisterAccount;
                    };
                    submitTx(value: _140.MsgSubmitTx): {
                        typeUrl: string;
                        value: _140.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _140.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _140.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _140.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _140.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _140.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _140.MsgRegisterAccount;
                    };
                    submitTx(value: _140.MsgSubmitTx): {
                        typeUrl: string;
                        value: _140.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _140.MsgRegisterAccount) => _140.MsgRegisterAccountAmino;
                    fromAmino: (object: _140.MsgRegisterAccountAmino) => _140.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _140.MsgSubmitTx) => _140.MsgSubmitTxAmino;
                    fromAmino: (object: _140.MsgSubmitTxAmino) => _140.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                typeUrl: string;
                encode(message: _140.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _140.MsgRegisterAccount;
                fromJSON(object: any): _140.MsgRegisterAccount;
                toJSON(message: _140.MsgRegisterAccount): unknown;
                fromPartial(object: Partial<_140.MsgRegisterAccount>): _140.MsgRegisterAccount;
                fromAmino(object: _140.MsgRegisterAccountAmino): _140.MsgRegisterAccount;
                toAmino(message: _140.MsgRegisterAccount): _140.MsgRegisterAccountAmino;
                fromAminoMsg(object: _140.MsgRegisterAccountAminoMsg): _140.MsgRegisterAccount;
                fromProtoMsg(message: _140.MsgRegisterAccountProtoMsg): _140.MsgRegisterAccount;
                toProto(message: _140.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _140.MsgRegisterAccount): _140.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                typeUrl: string;
                encode(_: _140.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _140.MsgRegisterAccountResponse;
                fromJSON(_: any): _140.MsgRegisterAccountResponse;
                toJSON(_: _140.MsgRegisterAccountResponse): unknown;
                fromPartial(_: Partial<_140.MsgRegisterAccountResponse>): _140.MsgRegisterAccountResponse;
                fromAmino(_: _140.MsgRegisterAccountResponseAmino): _140.MsgRegisterAccountResponse;
                toAmino(_: _140.MsgRegisterAccountResponse): _140.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _140.MsgRegisterAccountResponseAminoMsg): _140.MsgRegisterAccountResponse;
                fromProtoMsg(message: _140.MsgRegisterAccountResponseProtoMsg): _140.MsgRegisterAccountResponse;
                toProto(message: _140.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _140.MsgRegisterAccountResponse): _140.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                typeUrl: string;
                encode(message: _140.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _140.MsgSubmitTx;
                fromJSON(object: any): _140.MsgSubmitTx;
                toJSON(message: _140.MsgSubmitTx): unknown;
                fromPartial(object: Partial<_140.MsgSubmitTx>): _140.MsgSubmitTx;
                fromAmino(object: _140.MsgSubmitTxAmino): _140.MsgSubmitTx;
                toAmino(message: _140.MsgSubmitTx): _140.MsgSubmitTxAmino;
                fromAminoMsg(object: _140.MsgSubmitTxAminoMsg): _140.MsgSubmitTx;
                fromProtoMsg(message: _140.MsgSubmitTxProtoMsg): _140.MsgSubmitTx;
                toProto(message: _140.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _140.MsgSubmitTx): _140.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                typeUrl: string;
                encode(_: _140.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _140.MsgSubmitTxResponse;
                fromJSON(_: any): _140.MsgSubmitTxResponse;
                toJSON(_: _140.MsgSubmitTxResponse): unknown;
                fromPartial(_: Partial<_140.MsgSubmitTxResponse>): _140.MsgSubmitTxResponse;
                fromAmino(_: _140.MsgSubmitTxResponseAmino): _140.MsgSubmitTxResponse;
                toAmino(_: _140.MsgSubmitTxResponse): _140.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _140.MsgSubmitTxResponseAminoMsg): _140.MsgSubmitTxResponse;
                fromProtoMsg(message: _140.MsgSubmitTxResponseProtoMsg): _140.MsgSubmitTxResponse;
                toProto(message: _140.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _140.MsgSubmitTxResponse): _140.MsgSubmitTxResponseProtoMsg;
            };
            QueryInterchainAccountRequest: {
                typeUrl: string;
                encode(message: _139.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _139.QueryInterchainAccountRequest;
                fromJSON(object: any): _139.QueryInterchainAccountRequest;
                toJSON(message: _139.QueryInterchainAccountRequest): unknown;
                fromPartial(object: Partial<_139.QueryInterchainAccountRequest>): _139.QueryInterchainAccountRequest;
                fromAmino(object: _139.QueryInterchainAccountRequestAmino): _139.QueryInterchainAccountRequest;
                toAmino(message: _139.QueryInterchainAccountRequest): _139.QueryInterchainAccountRequestAmino;
                fromAminoMsg(object: _139.QueryInterchainAccountRequestAminoMsg): _139.QueryInterchainAccountRequest;
                fromProtoMsg(message: _139.QueryInterchainAccountRequestProtoMsg): _139.QueryInterchainAccountRequest;
                toProto(message: _139.QueryInterchainAccountRequest): Uint8Array;
                toProtoMsg(message: _139.QueryInterchainAccountRequest): _139.QueryInterchainAccountRequestProtoMsg;
            };
            QueryInterchainAccountResponse: {
                typeUrl: string;
                encode(message: _139.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _139.QueryInterchainAccountResponse;
                fromJSON(object: any): _139.QueryInterchainAccountResponse;
                toJSON(message: _139.QueryInterchainAccountResponse): unknown;
                fromPartial(object: Partial<_139.QueryInterchainAccountResponse>): _139.QueryInterchainAccountResponse;
                fromAmino(object: _139.QueryInterchainAccountResponseAmino): _139.QueryInterchainAccountResponse;
                toAmino(message: _139.QueryInterchainAccountResponse): _139.QueryInterchainAccountResponseAmino;
                fromAminoMsg(object: _139.QueryInterchainAccountResponseAminoMsg): _139.QueryInterchainAccountResponse;
                fromProtoMsg(message: _139.QueryInterchainAccountResponseProtoMsg): _139.QueryInterchainAccountResponse;
                toProto(message: _139.QueryInterchainAccountResponse): Uint8Array;
                toProtoMsg(message: _139.QueryInterchainAccountResponse): _139.QueryInterchainAccountResponseProtoMsg;
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
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                    v1: _265.MsgClientImpl;
                };
                ecocredit: {
                    basket: {
                        v1: _266.MsgClientImpl;
                    };
                    marketplace: {
                        v1: _267.MsgClientImpl;
                    };
                    v1: _268.MsgClientImpl;
                    v1alpha1: _269.MsgClientImpl;
                };
                intertx: {
                    v1: _270.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest | undefined): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
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
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest | undefined): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest | undefined): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest | undefined): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest | undefined): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest | undefined): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
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
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest | undefined): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest | undefined): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest | undefined): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest | undefined): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest | undefined): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
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
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest | undefined): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
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
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest | undefined): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest | undefined): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            regen: {
                data: {
                    v1: {
                        anchorByIRI(request: _114.QueryAnchorByIRIRequest): Promise<_114.QueryAnchorByIRIResponse>;
                        anchorByHash(request: _114.QueryAnchorByHashRequest): Promise<_114.QueryAnchorByHashResponse>;
                        attestationsByAttestor(request: _114.QueryAttestationsByAttestorRequest): Promise<_114.QueryAttestationsByAttestorResponse>;
                        attestationsByIRI(request: _114.QueryAttestationsByIRIRequest): Promise<_114.QueryAttestationsByIRIResponse>;
                        attestationsByHash(request: _114.QueryAttestationsByHashRequest): Promise<_114.QueryAttestationsByHashResponse>;
                        resolver(request: _114.QueryResolverRequest): Promise<_114.QueryResolverResponse>;
                        resolversByIRI(request: _114.QueryResolversByIRIRequest): Promise<_114.QueryResolversByIRIResponse>;
                        resolversByHash(request: _114.QueryResolversByHashRequest): Promise<_114.QueryResolversByHashResponse>;
                        resolversByURL(request: _114.QueryResolversByURLRequest): Promise<_114.QueryResolversByURLResponse>;
                        convertIRIToHash(request: _114.ConvertIRIToHashRequest): Promise<_114.ConvertIRIToHashResponse>;
                        convertHashToIRI(request: _114.ConvertHashToIRIRequest): Promise<_114.ConvertHashToIRIResponse>;
                    };
                };
                ecocredit: {
                    basket: {
                        v1: {
                            basket(request: _119.QueryBasketRequest): Promise<_119.QueryBasketResponse>;
                            baskets(request?: _119.QueryBasketsRequest | undefined): Promise<_119.QueryBasketsResponse>;
                            basketBalances(request: _119.QueryBasketBalancesRequest): Promise<_119.QueryBasketBalancesResponse>;
                            basketBalance(request: _119.QueryBasketBalanceRequest): Promise<_119.QueryBasketBalanceResponse>;
                            basketFee(request?: _119.QueryBasketFeeRequest | undefined): Promise<_119.QueryBasketFeeResponse>;
                        };
                    };
                    marketplace: {
                        v1: {
                            sellOrder(request: _124.QuerySellOrderRequest): Promise<_124.QuerySellOrderResponse>;
                            sellOrders(request?: _124.QuerySellOrdersRequest | undefined): Promise<_124.QuerySellOrdersResponse>;
                            sellOrdersByBatch(request: _124.QuerySellOrdersByBatchRequest): Promise<_124.QuerySellOrdersByBatchResponse>;
                            sellOrdersBySeller(request: _124.QuerySellOrdersBySellerRequest): Promise<_124.QuerySellOrdersBySellerResponse>;
                            allowedDenoms(request?: _124.QueryAllowedDenomsRequest | undefined): Promise<_124.QueryAllowedDenomsResponse>;
                        };
                    };
                    v1: {
                        classes(request?: _130.QueryClassesRequest | undefined): Promise<_130.QueryClassesResponse>;
                        classesByAdmin(request: _130.QueryClassesByAdminRequest): Promise<_130.QueryClassesByAdminResponse>;
                        class(request: _130.QueryClassRequest): Promise<_130.QueryClassResponse>;
                        classIssuers(request: _130.QueryClassIssuersRequest): Promise<_130.QueryClassIssuersResponse>;
                        projects(request?: _130.QueryProjectsRequest | undefined): Promise<_130.QueryProjectsResponse>;
                        projectsByClass(request: _130.QueryProjectsByClassRequest): Promise<_130.QueryProjectsByClassResponse>;
                        projectsByReferenceId(request: _130.QueryProjectsByReferenceIdRequest): Promise<_130.QueryProjectsByReferenceIdResponse>;
                        projectsByAdmin(request: _130.QueryProjectsByAdminRequest): Promise<_130.QueryProjectsByAdminResponse>;
                        project(request: _130.QueryProjectRequest): Promise<_130.QueryProjectResponse>;
                        batches(request?: _130.QueryBatchesRequest | undefined): Promise<_130.QueryBatchesResponse>;
                        batchesByIssuer(request: _130.QueryBatchesByIssuerRequest): Promise<_130.QueryBatchesByIssuerResponse>;
                        batchesByClass(request: _130.QueryBatchesByClassRequest): Promise<_130.QueryBatchesByClassResponse>;
                        batchesByProject(request: _130.QueryBatchesByProjectRequest): Promise<_130.QueryBatchesByProjectResponse>;
                        batch(request: _130.QueryBatchRequest): Promise<_130.QueryBatchResponse>;
                        balance(request: _130.QueryBalanceRequest): Promise<_130.QueryBalanceResponse>;
                        balances(request: _130.QueryBalancesRequest): Promise<_130.QueryBalancesResponse>;
                        balancesByBatch(request: _130.QueryBalancesByBatchRequest): Promise<_130.QueryBalancesByBatchResponse>;
                        allBalances(request?: _130.QueryAllBalancesRequest | undefined): Promise<_130.QueryAllBalancesResponse>;
                        supply(request: _130.QuerySupplyRequest): Promise<_130.QuerySupplyResponse>;
                        creditTypes(request?: _130.QueryCreditTypesRequest | undefined): Promise<_130.QueryCreditTypesResponse>;
                        params(request?: _130.QueryParamsRequest | undefined): Promise<_130.QueryParamsResponse>;
                        creditType(request: _130.QueryCreditTypeRequest): Promise<_130.QueryCreditTypeResponse>;
                        classCreatorAllowlist(request?: _130.QueryClassCreatorAllowlistRequest | undefined): Promise<_130.QueryClassCreatorAllowlistResponse>;
                        allowedClassCreators(request?: _130.QueryAllowedClassCreatorsRequest | undefined): Promise<_130.QueryAllowedClassCreatorsResponse>;
                        classFee(request?: _130.QueryClassFeeRequest | undefined): Promise<_130.QueryClassFeeResponse>;
                        allowedBridgeChains(request?: _130.QueryAllowedBridgeChainsRequest | undefined): Promise<_130.QueryAllowedBridgeChainsResponse>;
                    };
                    v1alpha1: {
                        classes(request?: _136.QueryClassesRequest | undefined): Promise<_136.QueryClassesResponse>;
                        classInfo(request: _136.QueryClassInfoRequest): Promise<_136.QueryClassInfoResponse>;
                        batches(request: _136.QueryBatchesRequest): Promise<_136.QueryBatchesResponse>;
                        batchInfo(request: _136.QueryBatchInfoRequest): Promise<_136.QueryBatchInfoResponse>;
                        balance(request: _136.QueryBalanceRequest): Promise<_136.QueryBalanceResponse>;
                        supply(request: _136.QuerySupplyRequest): Promise<_136.QuerySupplyResponse>;
                        creditTypes(request?: _136.QueryCreditTypesRequest | undefined): Promise<_136.QueryCreditTypesResponse>;
                        params(request?: _136.QueryParamsRequest | undefined): Promise<_136.QueryParamsResponse>;
                    };
                };
                intertx: {
                    v1: {
                        interchainAccount(request: _139.QueryInterchainAccountRequest): Promise<_139.QueryInterchainAccountResponse>;
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
                    v1: _253.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _254.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _255.LCDQueryClient;
                    };
                    v1: _256.LCDQueryClient;
                    v1alpha1: _257.LCDQueryClient;
                };
                intertx: {
                    v1: _258.LCDQueryClient;
                };
            };
        }>;
    };
}
