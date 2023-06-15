import * as _112 from "./data/v1/events";
import * as _113 from "./data/v1/query";
import * as _114 from "./data/v1/state";
import * as _115 from "./data/v1/tx";
import * as _116 from "./data/v1/types";
import * as _117 from "./ecocredit/basket/v1/events";
import * as _118 from "./ecocredit/basket/v1/query";
import * as _119 from "./ecocredit/basket/v1/state";
import * as _120 from "./ecocredit/basket/v1/tx";
import * as _121 from "./ecocredit/basket/v1/types";
import * as _122 from "./ecocredit/marketplace/v1/events";
import * as _123 from "./ecocredit/marketplace/v1/query";
import * as _124 from "./ecocredit/marketplace/v1/state";
import * as _125 from "./ecocredit/marketplace/v1/tx";
import * as _126 from "./ecocredit/marketplace/v1/types";
import * as _127 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _128 from "./ecocredit/v1/events";
import * as _129 from "./ecocredit/v1/query";
import * as _130 from "./ecocredit/v1/state";
import * as _131 from "./ecocredit/v1/tx";
import * as _132 from "./ecocredit/v1/types";
import * as _133 from "./ecocredit/v1alpha1/events";
import * as _134 from "./ecocredit/v1alpha1/genesis";
import * as _135 from "./ecocredit/v1alpha1/query";
import * as _136 from "./ecocredit/v1alpha1/tx";
import * as _137 from "./ecocredit/v1alpha1/types";
import * as _138 from "./intertx/v1/query";
import * as _139 from "./intertx/v1/tx";
import * as _215 from "./data/v1/query.lcd";
import * as _216 from "./ecocredit/basket/v1/query.lcd";
import * as _217 from "./ecocredit/marketplace/v1/query.lcd";
import * as _218 from "./ecocredit/v1/query.lcd";
import * as _219 from "./ecocredit/v1alpha1/query.lcd";
import * as _220 from "./intertx/v1/query.lcd";
export declare namespace regen {
    namespace data {
        const v1: {
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _115.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _115.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _115.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _115.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _115.MsgAnchor): {
                        typeUrl: string;
                        value: _115.MsgAnchor;
                    };
                    attest(value: _115.MsgAttest): {
                        typeUrl: string;
                        value: _115.MsgAttest;
                    };
                    defineResolver(value: _115.MsgDefineResolver): {
                        typeUrl: string;
                        value: _115.MsgDefineResolver;
                    };
                    registerResolver(value: _115.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _115.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _115.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _115.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _115.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _115.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _115.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _115.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _115.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _115.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _115.MsgAnchor): {
                        typeUrl: string;
                        value: _115.MsgAnchor;
                    };
                    attest(value: _115.MsgAttest): {
                        typeUrl: string;
                        value: _115.MsgAttest;
                    };
                    defineResolver(value: _115.MsgDefineResolver): {
                        typeUrl: string;
                        value: _115.MsgDefineResolver;
                    };
                    registerResolver(value: _115.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _115.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: (message: _115.MsgAnchor) => _115.MsgAnchorAmino;
                    fromAmino: (object: _115.MsgAnchorAmino) => _115.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: (message: _115.MsgAttest) => _115.MsgAttestAmino;
                    fromAmino: (object: _115.MsgAttestAmino) => _115.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: (message: _115.MsgDefineResolver) => _115.MsgDefineResolverAmino;
                    fromAmino: (object: _115.MsgDefineResolverAmino) => _115.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: (message: _115.MsgRegisterResolver) => _115.MsgRegisterResolverAmino;
                    fromAmino: (object: _115.MsgRegisterResolverAmino) => _115.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _116.DigestAlgorithm;
            digestAlgorithmToJSON(object: _116.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _116.RawMediaType;
            rawMediaTypeToJSON(object: _116.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _116.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _116.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _116.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _116.GraphMerkleTree): string;
            DigestAlgorithm: typeof _116.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _116.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _116.DigestAlgorithm;
            RawMediaType: typeof _116.RawMediaType;
            RawMediaTypeSDKType: typeof _116.RawMediaType;
            RawMediaTypeAmino: typeof _116.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _116.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _116.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _116.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _116.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _116.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _116.GraphMerkleTree;
            ContentHash: {
                encode(message: _116.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.ContentHash;
                fromJSON(object: any): _116.ContentHash;
                toJSON(message: _116.ContentHash): unknown;
                fromPartial(object: Partial<_116.ContentHash>): _116.ContentHash;
                fromAmino(object: _116.ContentHashAmino): _116.ContentHash;
                toAmino(message: _116.ContentHash): _116.ContentHashAmino;
                fromAminoMsg(object: _116.ContentHashAminoMsg): _116.ContentHash;
                fromProtoMsg(message: _116.ContentHashProtoMsg): _116.ContentHash;
                toProto(message: _116.ContentHash): Uint8Array;
                toProtoMsg(message: _116.ContentHash): _116.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                encode(message: _116.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.ContentHash_Raw;
                fromJSON(object: any): _116.ContentHash_Raw;
                toJSON(message: _116.ContentHash_Raw): unknown;
                fromPartial(object: Partial<_116.ContentHash_Raw>): _116.ContentHash_Raw;
                fromAmino(object: _116.ContentHash_RawAmino): _116.ContentHash_Raw;
                toAmino(message: _116.ContentHash_Raw): _116.ContentHash_RawAmino;
                fromAminoMsg(object: _116.ContentHash_RawAminoMsg): _116.ContentHash_Raw;
                fromProtoMsg(message: _116.ContentHash_RawProtoMsg): _116.ContentHash_Raw;
                toProto(message: _116.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _116.ContentHash_Raw): _116.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                encode(message: _116.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.ContentHash_Graph;
                fromJSON(object: any): _116.ContentHash_Graph;
                toJSON(message: _116.ContentHash_Graph): unknown;
                fromPartial(object: Partial<_116.ContentHash_Graph>): _116.ContentHash_Graph;
                fromAmino(object: _116.ContentHash_GraphAmino): _116.ContentHash_Graph;
                toAmino(message: _116.ContentHash_Graph): _116.ContentHash_GraphAmino;
                fromAminoMsg(object: _116.ContentHash_GraphAminoMsg): _116.ContentHash_Graph;
                fromProtoMsg(message: _116.ContentHash_GraphProtoMsg): _116.ContentHash_Graph;
                toProto(message: _116.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _116.ContentHash_Graph): _116.ContentHash_GraphProtoMsg;
            };
            ContentHashes: {
                encode(message: _116.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.ContentHashes;
                fromJSON(object: any): _116.ContentHashes;
                toJSON(message: _116.ContentHashes): unknown;
                fromPartial(object: Partial<_116.ContentHashes>): _116.ContentHashes;
                fromAmino(object: _116.ContentHashesAmino): _116.ContentHashes;
                toAmino(message: _116.ContentHashes): _116.ContentHashesAmino;
                fromAminoMsg(object: _116.ContentHashesAminoMsg): _116.ContentHashes;
                fromProtoMsg(message: _116.ContentHashesProtoMsg): _116.ContentHashes;
                toProto(message: _116.ContentHashes): Uint8Array;
                toProtoMsg(message: _116.ContentHashes): _116.ContentHashesProtoMsg;
            };
            MsgAnchor: {
                encode(message: _115.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgAnchor;
                fromJSON(object: any): _115.MsgAnchor;
                toJSON(message: _115.MsgAnchor): unknown;
                fromPartial(object: Partial<_115.MsgAnchor>): _115.MsgAnchor;
                fromAmino(object: _115.MsgAnchorAmino): _115.MsgAnchor;
                toAmino(message: _115.MsgAnchor): _115.MsgAnchorAmino;
                fromAminoMsg(object: _115.MsgAnchorAminoMsg): _115.MsgAnchor;
                toAminoMsg(message: _115.MsgAnchor): _115.MsgAnchorAminoMsg;
                fromProtoMsg(message: _115.MsgAnchorProtoMsg): _115.MsgAnchor;
                toProto(message: _115.MsgAnchor): Uint8Array;
                toProtoMsg(message: _115.MsgAnchor): _115.MsgAnchorProtoMsg;
            };
            MsgAnchorResponse: {
                encode(message: _115.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgAnchorResponse;
                fromJSON(object: any): _115.MsgAnchorResponse;
                toJSON(message: _115.MsgAnchorResponse): unknown;
                fromPartial(object: Partial<_115.MsgAnchorResponse>): _115.MsgAnchorResponse;
                fromAmino(object: _115.MsgAnchorResponseAmino): _115.MsgAnchorResponse;
                toAmino(message: _115.MsgAnchorResponse): _115.MsgAnchorResponseAmino;
                fromAminoMsg(object: _115.MsgAnchorResponseAminoMsg): _115.MsgAnchorResponse;
                fromProtoMsg(message: _115.MsgAnchorResponseProtoMsg): _115.MsgAnchorResponse;
                toProto(message: _115.MsgAnchorResponse): Uint8Array;
                toProtoMsg(message: _115.MsgAnchorResponse): _115.MsgAnchorResponseProtoMsg;
            };
            MsgAttest: {
                encode(message: _115.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgAttest;
                fromJSON(object: any): _115.MsgAttest;
                toJSON(message: _115.MsgAttest): unknown;
                fromPartial(object: Partial<_115.MsgAttest>): _115.MsgAttest;
                fromAmino(object: _115.MsgAttestAmino): _115.MsgAttest;
                toAmino(message: _115.MsgAttest): _115.MsgAttestAmino;
                fromAminoMsg(object: _115.MsgAttestAminoMsg): _115.MsgAttest;
                toAminoMsg(message: _115.MsgAttest): _115.MsgAttestAminoMsg;
                fromProtoMsg(message: _115.MsgAttestProtoMsg): _115.MsgAttest;
                toProto(message: _115.MsgAttest): Uint8Array;
                toProtoMsg(message: _115.MsgAttest): _115.MsgAttestProtoMsg;
            };
            MsgAttestResponse: {
                encode(message: _115.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgAttestResponse;
                fromJSON(object: any): _115.MsgAttestResponse;
                toJSON(message: _115.MsgAttestResponse): unknown;
                fromPartial(object: Partial<_115.MsgAttestResponse>): _115.MsgAttestResponse;
                fromAmino(object: _115.MsgAttestResponseAmino): _115.MsgAttestResponse;
                toAmino(message: _115.MsgAttestResponse): _115.MsgAttestResponseAmino;
                fromAminoMsg(object: _115.MsgAttestResponseAminoMsg): _115.MsgAttestResponse;
                fromProtoMsg(message: _115.MsgAttestResponseProtoMsg): _115.MsgAttestResponse;
                toProto(message: _115.MsgAttestResponse): Uint8Array;
                toProtoMsg(message: _115.MsgAttestResponse): _115.MsgAttestResponseProtoMsg;
            };
            MsgDefineResolver: {
                encode(message: _115.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgDefineResolver;
                fromJSON(object: any): _115.MsgDefineResolver;
                toJSON(message: _115.MsgDefineResolver): unknown;
                fromPartial(object: Partial<_115.MsgDefineResolver>): _115.MsgDefineResolver;
                fromAmino(object: _115.MsgDefineResolverAmino): _115.MsgDefineResolver;
                toAmino(message: _115.MsgDefineResolver): _115.MsgDefineResolverAmino;
                fromAminoMsg(object: _115.MsgDefineResolverAminoMsg): _115.MsgDefineResolver;
                toAminoMsg(message: _115.MsgDefineResolver): _115.MsgDefineResolverAminoMsg;
                fromProtoMsg(message: _115.MsgDefineResolverProtoMsg): _115.MsgDefineResolver;
                toProto(message: _115.MsgDefineResolver): Uint8Array;
                toProtoMsg(message: _115.MsgDefineResolver): _115.MsgDefineResolverProtoMsg;
            };
            MsgDefineResolverResponse: {
                encode(message: _115.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgDefineResolverResponse;
                fromJSON(object: any): _115.MsgDefineResolverResponse;
                toJSON(message: _115.MsgDefineResolverResponse): unknown;
                fromPartial(object: Partial<_115.MsgDefineResolverResponse>): _115.MsgDefineResolverResponse;
                fromAmino(object: _115.MsgDefineResolverResponseAmino): _115.MsgDefineResolverResponse;
                toAmino(message: _115.MsgDefineResolverResponse): _115.MsgDefineResolverResponseAmino;
                fromAminoMsg(object: _115.MsgDefineResolverResponseAminoMsg): _115.MsgDefineResolverResponse;
                fromProtoMsg(message: _115.MsgDefineResolverResponseProtoMsg): _115.MsgDefineResolverResponse;
                toProto(message: _115.MsgDefineResolverResponse): Uint8Array;
                toProtoMsg(message: _115.MsgDefineResolverResponse): _115.MsgDefineResolverResponseProtoMsg;
            };
            MsgRegisterResolver: {
                encode(message: _115.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgRegisterResolver;
                fromJSON(object: any): _115.MsgRegisterResolver;
                toJSON(message: _115.MsgRegisterResolver): unknown;
                fromPartial(object: Partial<_115.MsgRegisterResolver>): _115.MsgRegisterResolver;
                fromAmino(object: _115.MsgRegisterResolverAmino): _115.MsgRegisterResolver;
                toAmino(message: _115.MsgRegisterResolver): _115.MsgRegisterResolverAmino;
                fromAminoMsg(object: _115.MsgRegisterResolverAminoMsg): _115.MsgRegisterResolver;
                toAminoMsg(message: _115.MsgRegisterResolver): _115.MsgRegisterResolverAminoMsg;
                fromProtoMsg(message: _115.MsgRegisterResolverProtoMsg): _115.MsgRegisterResolver;
                toProto(message: _115.MsgRegisterResolver): Uint8Array;
                toProtoMsg(message: _115.MsgRegisterResolver): _115.MsgRegisterResolverProtoMsg;
            };
            MsgRegisterResolverResponse: {
                encode(_: _115.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.MsgRegisterResolverResponse;
                fromJSON(_: any): _115.MsgRegisterResolverResponse;
                toJSON(_: _115.MsgRegisterResolverResponse): unknown;
                fromPartial(_: Partial<_115.MsgRegisterResolverResponse>): _115.MsgRegisterResolverResponse;
                fromAmino(_: _115.MsgRegisterResolverResponseAmino): _115.MsgRegisterResolverResponse;
                toAmino(_: _115.MsgRegisterResolverResponse): _115.MsgRegisterResolverResponseAmino;
                fromAminoMsg(object: _115.MsgRegisterResolverResponseAminoMsg): _115.MsgRegisterResolverResponse;
                fromProtoMsg(message: _115.MsgRegisterResolverResponseProtoMsg): _115.MsgRegisterResolverResponse;
                toProto(message: _115.MsgRegisterResolverResponse): Uint8Array;
                toProtoMsg(message: _115.MsgRegisterResolverResponse): _115.MsgRegisterResolverResponseProtoMsg;
            };
            DataID: {
                encode(message: _114.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.DataID;
                fromJSON(object: any): _114.DataID;
                toJSON(message: _114.DataID): unknown;
                fromPartial(object: Partial<_114.DataID>): _114.DataID;
                fromAmino(object: _114.DataIDAmino): _114.DataID;
                toAmino(message: _114.DataID): _114.DataIDAmino;
                fromAminoMsg(object: _114.DataIDAminoMsg): _114.DataID;
                fromProtoMsg(message: _114.DataIDProtoMsg): _114.DataID;
                toProto(message: _114.DataID): Uint8Array;
                toProtoMsg(message: _114.DataID): _114.DataIDProtoMsg;
            };
            DataAnchor: {
                encode(message: _114.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.DataAnchor;
                fromJSON(object: any): _114.DataAnchor;
                toJSON(message: _114.DataAnchor): unknown;
                fromPartial(object: Partial<_114.DataAnchor>): _114.DataAnchor;
                fromAmino(object: _114.DataAnchorAmino): _114.DataAnchor;
                toAmino(message: _114.DataAnchor): _114.DataAnchorAmino;
                fromAminoMsg(object: _114.DataAnchorAminoMsg): _114.DataAnchor;
                fromProtoMsg(message: _114.DataAnchorProtoMsg): _114.DataAnchor;
                toProto(message: _114.DataAnchor): Uint8Array;
                toProtoMsg(message: _114.DataAnchor): _114.DataAnchorProtoMsg;
            };
            DataAttestor: {
                encode(message: _114.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.DataAttestor;
                fromJSON(object: any): _114.DataAttestor;
                toJSON(message: _114.DataAttestor): unknown;
                fromPartial(object: Partial<_114.DataAttestor>): _114.DataAttestor;
                fromAmino(object: _114.DataAttestorAmino): _114.DataAttestor;
                toAmino(message: _114.DataAttestor): _114.DataAttestorAmino;
                fromAminoMsg(object: _114.DataAttestorAminoMsg): _114.DataAttestor;
                fromProtoMsg(message: _114.DataAttestorProtoMsg): _114.DataAttestor;
                toProto(message: _114.DataAttestor): Uint8Array;
                toProtoMsg(message: _114.DataAttestor): _114.DataAttestorProtoMsg;
            };
            Resolver: {
                encode(message: _114.Resolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.Resolver;
                fromJSON(object: any): _114.Resolver;
                toJSON(message: _114.Resolver): unknown;
                fromPartial(object: Partial<_114.Resolver>): _114.Resolver;
                fromAmino(object: _114.ResolverAmino): _114.Resolver;
                toAmino(message: _114.Resolver): _114.ResolverAmino;
                fromAminoMsg(object: _114.ResolverAminoMsg): _114.Resolver;
                fromProtoMsg(message: _114.ResolverProtoMsg): _114.Resolver;
                toProto(message: _114.Resolver): Uint8Array;
                toProtoMsg(message: _114.Resolver): _114.ResolverProtoMsg;
            };
            DataResolver: {
                encode(message: _114.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.DataResolver;
                fromJSON(object: any): _114.DataResolver;
                toJSON(message: _114.DataResolver): unknown;
                fromPartial(object: Partial<_114.DataResolver>): _114.DataResolver;
                fromAmino(object: _114.DataResolverAmino): _114.DataResolver;
                toAmino(message: _114.DataResolver): _114.DataResolverAmino;
                fromAminoMsg(object: _114.DataResolverAminoMsg): _114.DataResolver;
                fromProtoMsg(message: _114.DataResolverProtoMsg): _114.DataResolver;
                toProto(message: _114.DataResolver): Uint8Array;
                toProtoMsg(message: _114.DataResolver): _114.DataResolverProtoMsg;
            };
            QueryAnchorByIRIRequest: {
                encode(message: _113.QueryAnchorByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAnchorByIRIRequest;
                fromJSON(object: any): _113.QueryAnchorByIRIRequest;
                toJSON(message: _113.QueryAnchorByIRIRequest): unknown;
                fromPartial(object: Partial<_113.QueryAnchorByIRIRequest>): _113.QueryAnchorByIRIRequest;
                fromAmino(object: _113.QueryAnchorByIRIRequestAmino): _113.QueryAnchorByIRIRequest;
                toAmino(message: _113.QueryAnchorByIRIRequest): _113.QueryAnchorByIRIRequestAmino;
                fromAminoMsg(object: _113.QueryAnchorByIRIRequestAminoMsg): _113.QueryAnchorByIRIRequest;
                fromProtoMsg(message: _113.QueryAnchorByIRIRequestProtoMsg): _113.QueryAnchorByIRIRequest;
                toProto(message: _113.QueryAnchorByIRIRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAnchorByIRIRequest): _113.QueryAnchorByIRIRequestProtoMsg;
            };
            QueryAnchorByIRIResponse: {
                encode(message: _113.QueryAnchorByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAnchorByIRIResponse;
                fromJSON(object: any): _113.QueryAnchorByIRIResponse;
                toJSON(message: _113.QueryAnchorByIRIResponse): unknown;
                fromPartial(object: Partial<_113.QueryAnchorByIRIResponse>): _113.QueryAnchorByIRIResponse;
                fromAmino(object: _113.QueryAnchorByIRIResponseAmino): _113.QueryAnchorByIRIResponse;
                toAmino(message: _113.QueryAnchorByIRIResponse): _113.QueryAnchorByIRIResponseAmino;
                fromAminoMsg(object: _113.QueryAnchorByIRIResponseAminoMsg): _113.QueryAnchorByIRIResponse;
                fromProtoMsg(message: _113.QueryAnchorByIRIResponseProtoMsg): _113.QueryAnchorByIRIResponse;
                toProto(message: _113.QueryAnchorByIRIResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAnchorByIRIResponse): _113.QueryAnchorByIRIResponseProtoMsg;
            };
            QueryAnchorByHashRequest: {
                encode(message: _113.QueryAnchorByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAnchorByHashRequest;
                fromJSON(object: any): _113.QueryAnchorByHashRequest;
                toJSON(message: _113.QueryAnchorByHashRequest): unknown;
                fromPartial(object: Partial<_113.QueryAnchorByHashRequest>): _113.QueryAnchorByHashRequest;
                fromAmino(object: _113.QueryAnchorByHashRequestAmino): _113.QueryAnchorByHashRequest;
                toAmino(message: _113.QueryAnchorByHashRequest): _113.QueryAnchorByHashRequestAmino;
                fromAminoMsg(object: _113.QueryAnchorByHashRequestAminoMsg): _113.QueryAnchorByHashRequest;
                fromProtoMsg(message: _113.QueryAnchorByHashRequestProtoMsg): _113.QueryAnchorByHashRequest;
                toProto(message: _113.QueryAnchorByHashRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAnchorByHashRequest): _113.QueryAnchorByHashRequestProtoMsg;
            };
            QueryAnchorByHashResponse: {
                encode(message: _113.QueryAnchorByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAnchorByHashResponse;
                fromJSON(object: any): _113.QueryAnchorByHashResponse;
                toJSON(message: _113.QueryAnchorByHashResponse): unknown;
                fromPartial(object: Partial<_113.QueryAnchorByHashResponse>): _113.QueryAnchorByHashResponse;
                fromAmino(object: _113.QueryAnchorByHashResponseAmino): _113.QueryAnchorByHashResponse;
                toAmino(message: _113.QueryAnchorByHashResponse): _113.QueryAnchorByHashResponseAmino;
                fromAminoMsg(object: _113.QueryAnchorByHashResponseAminoMsg): _113.QueryAnchorByHashResponse;
                fromProtoMsg(message: _113.QueryAnchorByHashResponseProtoMsg): _113.QueryAnchorByHashResponse;
                toProto(message: _113.QueryAnchorByHashResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAnchorByHashResponse): _113.QueryAnchorByHashResponseProtoMsg;
            };
            QueryAttestationsByAttestorRequest: {
                encode(message: _113.QueryAttestationsByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAttestationsByAttestorRequest;
                fromJSON(object: any): _113.QueryAttestationsByAttestorRequest;
                toJSON(message: _113.QueryAttestationsByAttestorRequest): unknown;
                fromPartial(object: Partial<_113.QueryAttestationsByAttestorRequest>): _113.QueryAttestationsByAttestorRequest;
                fromAmino(object: _113.QueryAttestationsByAttestorRequestAmino): _113.QueryAttestationsByAttestorRequest;
                toAmino(message: _113.QueryAttestationsByAttestorRequest): _113.QueryAttestationsByAttestorRequestAmino;
                fromAminoMsg(object: _113.QueryAttestationsByAttestorRequestAminoMsg): _113.QueryAttestationsByAttestorRequest;
                fromProtoMsg(message: _113.QueryAttestationsByAttestorRequestProtoMsg): _113.QueryAttestationsByAttestorRequest;
                toProto(message: _113.QueryAttestationsByAttestorRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAttestationsByAttestorRequest): _113.QueryAttestationsByAttestorRequestProtoMsg;
            };
            QueryAttestationsByAttestorResponse: {
                encode(message: _113.QueryAttestationsByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAttestationsByAttestorResponse;
                fromJSON(object: any): _113.QueryAttestationsByAttestorResponse;
                toJSON(message: _113.QueryAttestationsByAttestorResponse): unknown;
                fromPartial(object: Partial<_113.QueryAttestationsByAttestorResponse>): _113.QueryAttestationsByAttestorResponse;
                fromAmino(object: _113.QueryAttestationsByAttestorResponseAmino): _113.QueryAttestationsByAttestorResponse;
                toAmino(message: _113.QueryAttestationsByAttestorResponse): _113.QueryAttestationsByAttestorResponseAmino;
                fromAminoMsg(object: _113.QueryAttestationsByAttestorResponseAminoMsg): _113.QueryAttestationsByAttestorResponse;
                fromProtoMsg(message: _113.QueryAttestationsByAttestorResponseProtoMsg): _113.QueryAttestationsByAttestorResponse;
                toProto(message: _113.QueryAttestationsByAttestorResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAttestationsByAttestorResponse): _113.QueryAttestationsByAttestorResponseProtoMsg;
            };
            QueryAttestationsByIRIRequest: {
                encode(message: _113.QueryAttestationsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAttestationsByIRIRequest;
                fromJSON(object: any): _113.QueryAttestationsByIRIRequest;
                toJSON(message: _113.QueryAttestationsByIRIRequest): unknown;
                fromPartial(object: Partial<_113.QueryAttestationsByIRIRequest>): _113.QueryAttestationsByIRIRequest;
                fromAmino(object: _113.QueryAttestationsByIRIRequestAmino): _113.QueryAttestationsByIRIRequest;
                toAmino(message: _113.QueryAttestationsByIRIRequest): _113.QueryAttestationsByIRIRequestAmino;
                fromAminoMsg(object: _113.QueryAttestationsByIRIRequestAminoMsg): _113.QueryAttestationsByIRIRequest;
                fromProtoMsg(message: _113.QueryAttestationsByIRIRequestProtoMsg): _113.QueryAttestationsByIRIRequest;
                toProto(message: _113.QueryAttestationsByIRIRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAttestationsByIRIRequest): _113.QueryAttestationsByIRIRequestProtoMsg;
            };
            QueryAttestationsByIRIResponse: {
                encode(message: _113.QueryAttestationsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAttestationsByIRIResponse;
                fromJSON(object: any): _113.QueryAttestationsByIRIResponse;
                toJSON(message: _113.QueryAttestationsByIRIResponse): unknown;
                fromPartial(object: Partial<_113.QueryAttestationsByIRIResponse>): _113.QueryAttestationsByIRIResponse;
                fromAmino(object: _113.QueryAttestationsByIRIResponseAmino): _113.QueryAttestationsByIRIResponse;
                toAmino(message: _113.QueryAttestationsByIRIResponse): _113.QueryAttestationsByIRIResponseAmino;
                fromAminoMsg(object: _113.QueryAttestationsByIRIResponseAminoMsg): _113.QueryAttestationsByIRIResponse;
                fromProtoMsg(message: _113.QueryAttestationsByIRIResponseProtoMsg): _113.QueryAttestationsByIRIResponse;
                toProto(message: _113.QueryAttestationsByIRIResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAttestationsByIRIResponse): _113.QueryAttestationsByIRIResponseProtoMsg;
            };
            QueryAttestationsByHashRequest: {
                encode(message: _113.QueryAttestationsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAttestationsByHashRequest;
                fromJSON(object: any): _113.QueryAttestationsByHashRequest;
                toJSON(message: _113.QueryAttestationsByHashRequest): unknown;
                fromPartial(object: Partial<_113.QueryAttestationsByHashRequest>): _113.QueryAttestationsByHashRequest;
                fromAmino(object: _113.QueryAttestationsByHashRequestAmino): _113.QueryAttestationsByHashRequest;
                toAmino(message: _113.QueryAttestationsByHashRequest): _113.QueryAttestationsByHashRequestAmino;
                fromAminoMsg(object: _113.QueryAttestationsByHashRequestAminoMsg): _113.QueryAttestationsByHashRequest;
                fromProtoMsg(message: _113.QueryAttestationsByHashRequestProtoMsg): _113.QueryAttestationsByHashRequest;
                toProto(message: _113.QueryAttestationsByHashRequest): Uint8Array;
                toProtoMsg(message: _113.QueryAttestationsByHashRequest): _113.QueryAttestationsByHashRequestProtoMsg;
            };
            QueryAttestationsByHashResponse: {
                encode(message: _113.QueryAttestationsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryAttestationsByHashResponse;
                fromJSON(object: any): _113.QueryAttestationsByHashResponse;
                toJSON(message: _113.QueryAttestationsByHashResponse): unknown;
                fromPartial(object: Partial<_113.QueryAttestationsByHashResponse>): _113.QueryAttestationsByHashResponse;
                fromAmino(object: _113.QueryAttestationsByHashResponseAmino): _113.QueryAttestationsByHashResponse;
                toAmino(message: _113.QueryAttestationsByHashResponse): _113.QueryAttestationsByHashResponseAmino;
                fromAminoMsg(object: _113.QueryAttestationsByHashResponseAminoMsg): _113.QueryAttestationsByHashResponse;
                fromProtoMsg(message: _113.QueryAttestationsByHashResponseProtoMsg): _113.QueryAttestationsByHashResponse;
                toProto(message: _113.QueryAttestationsByHashResponse): Uint8Array;
                toProtoMsg(message: _113.QueryAttestationsByHashResponse): _113.QueryAttestationsByHashResponseProtoMsg;
            };
            QueryResolverRequest: {
                encode(message: _113.QueryResolverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolverRequest;
                fromJSON(object: any): _113.QueryResolverRequest;
                toJSON(message: _113.QueryResolverRequest): unknown;
                fromPartial(object: Partial<_113.QueryResolverRequest>): _113.QueryResolverRequest;
                fromAmino(object: _113.QueryResolverRequestAmino): _113.QueryResolverRequest;
                toAmino(message: _113.QueryResolverRequest): _113.QueryResolverRequestAmino;
                fromAminoMsg(object: _113.QueryResolverRequestAminoMsg): _113.QueryResolverRequest;
                fromProtoMsg(message: _113.QueryResolverRequestProtoMsg): _113.QueryResolverRequest;
                toProto(message: _113.QueryResolverRequest): Uint8Array;
                toProtoMsg(message: _113.QueryResolverRequest): _113.QueryResolverRequestProtoMsg;
            };
            QueryResolverResponse: {
                encode(message: _113.QueryResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolverResponse;
                fromJSON(object: any): _113.QueryResolverResponse;
                toJSON(message: _113.QueryResolverResponse): unknown;
                fromPartial(object: Partial<_113.QueryResolverResponse>): _113.QueryResolverResponse;
                fromAmino(object: _113.QueryResolverResponseAmino): _113.QueryResolverResponse;
                toAmino(message: _113.QueryResolverResponse): _113.QueryResolverResponseAmino;
                fromAminoMsg(object: _113.QueryResolverResponseAminoMsg): _113.QueryResolverResponse;
                fromProtoMsg(message: _113.QueryResolverResponseProtoMsg): _113.QueryResolverResponse;
                toProto(message: _113.QueryResolverResponse): Uint8Array;
                toProtoMsg(message: _113.QueryResolverResponse): _113.QueryResolverResponseProtoMsg;
            };
            QueryResolversByIRIRequest: {
                encode(message: _113.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolversByIRIRequest;
                fromJSON(object: any): _113.QueryResolversByIRIRequest;
                toJSON(message: _113.QueryResolversByIRIRequest): unknown;
                fromPartial(object: Partial<_113.QueryResolversByIRIRequest>): _113.QueryResolversByIRIRequest;
                fromAmino(object: _113.QueryResolversByIRIRequestAmino): _113.QueryResolversByIRIRequest;
                toAmino(message: _113.QueryResolversByIRIRequest): _113.QueryResolversByIRIRequestAmino;
                fromAminoMsg(object: _113.QueryResolversByIRIRequestAminoMsg): _113.QueryResolversByIRIRequest;
                fromProtoMsg(message: _113.QueryResolversByIRIRequestProtoMsg): _113.QueryResolversByIRIRequest;
                toProto(message: _113.QueryResolversByIRIRequest): Uint8Array;
                toProtoMsg(message: _113.QueryResolversByIRIRequest): _113.QueryResolversByIRIRequestProtoMsg;
            };
            QueryResolversByIRIResponse: {
                encode(message: _113.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolversByIRIResponse;
                fromJSON(object: any): _113.QueryResolversByIRIResponse;
                toJSON(message: _113.QueryResolversByIRIResponse): unknown;
                fromPartial(object: Partial<_113.QueryResolversByIRIResponse>): _113.QueryResolversByIRIResponse;
                fromAmino(object: _113.QueryResolversByIRIResponseAmino): _113.QueryResolversByIRIResponse;
                toAmino(message: _113.QueryResolversByIRIResponse): _113.QueryResolversByIRIResponseAmino;
                fromAminoMsg(object: _113.QueryResolversByIRIResponseAminoMsg): _113.QueryResolversByIRIResponse;
                fromProtoMsg(message: _113.QueryResolversByIRIResponseProtoMsg): _113.QueryResolversByIRIResponse;
                toProto(message: _113.QueryResolversByIRIResponse): Uint8Array;
                toProtoMsg(message: _113.QueryResolversByIRIResponse): _113.QueryResolversByIRIResponseProtoMsg;
            };
            QueryResolversByHashRequest: {
                encode(message: _113.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolversByHashRequest;
                fromJSON(object: any): _113.QueryResolversByHashRequest;
                toJSON(message: _113.QueryResolversByHashRequest): unknown;
                fromPartial(object: Partial<_113.QueryResolversByHashRequest>): _113.QueryResolversByHashRequest;
                fromAmino(object: _113.QueryResolversByHashRequestAmino): _113.QueryResolversByHashRequest;
                toAmino(message: _113.QueryResolversByHashRequest): _113.QueryResolversByHashRequestAmino;
                fromAminoMsg(object: _113.QueryResolversByHashRequestAminoMsg): _113.QueryResolversByHashRequest;
                fromProtoMsg(message: _113.QueryResolversByHashRequestProtoMsg): _113.QueryResolversByHashRequest;
                toProto(message: _113.QueryResolversByHashRequest): Uint8Array;
                toProtoMsg(message: _113.QueryResolversByHashRequest): _113.QueryResolversByHashRequestProtoMsg;
            };
            QueryResolversByHashResponse: {
                encode(message: _113.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolversByHashResponse;
                fromJSON(object: any): _113.QueryResolversByHashResponse;
                toJSON(message: _113.QueryResolversByHashResponse): unknown;
                fromPartial(object: Partial<_113.QueryResolversByHashResponse>): _113.QueryResolversByHashResponse;
                fromAmino(object: _113.QueryResolversByHashResponseAmino): _113.QueryResolversByHashResponse;
                toAmino(message: _113.QueryResolversByHashResponse): _113.QueryResolversByHashResponseAmino;
                fromAminoMsg(object: _113.QueryResolversByHashResponseAminoMsg): _113.QueryResolversByHashResponse;
                fromProtoMsg(message: _113.QueryResolversByHashResponseProtoMsg): _113.QueryResolversByHashResponse;
                toProto(message: _113.QueryResolversByHashResponse): Uint8Array;
                toProtoMsg(message: _113.QueryResolversByHashResponse): _113.QueryResolversByHashResponseProtoMsg;
            };
            QueryResolversByURLRequest: {
                encode(message: _113.QueryResolversByURLRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolversByURLRequest;
                fromJSON(object: any): _113.QueryResolversByURLRequest;
                toJSON(message: _113.QueryResolversByURLRequest): unknown;
                fromPartial(object: Partial<_113.QueryResolversByURLRequest>): _113.QueryResolversByURLRequest;
                fromAmino(object: _113.QueryResolversByURLRequestAmino): _113.QueryResolversByURLRequest;
                toAmino(message: _113.QueryResolversByURLRequest): _113.QueryResolversByURLRequestAmino;
                fromAminoMsg(object: _113.QueryResolversByURLRequestAminoMsg): _113.QueryResolversByURLRequest;
                fromProtoMsg(message: _113.QueryResolversByURLRequestProtoMsg): _113.QueryResolversByURLRequest;
                toProto(message: _113.QueryResolversByURLRequest): Uint8Array;
                toProtoMsg(message: _113.QueryResolversByURLRequest): _113.QueryResolversByURLRequestProtoMsg;
            };
            QueryResolversByURLResponse: {
                encode(message: _113.QueryResolversByURLResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.QueryResolversByURLResponse;
                fromJSON(object: any): _113.QueryResolversByURLResponse;
                toJSON(message: _113.QueryResolversByURLResponse): unknown;
                fromPartial(object: Partial<_113.QueryResolversByURLResponse>): _113.QueryResolversByURLResponse;
                fromAmino(object: _113.QueryResolversByURLResponseAmino): _113.QueryResolversByURLResponse;
                toAmino(message: _113.QueryResolversByURLResponse): _113.QueryResolversByURLResponseAmino;
                fromAminoMsg(object: _113.QueryResolversByURLResponseAminoMsg): _113.QueryResolversByURLResponse;
                fromProtoMsg(message: _113.QueryResolversByURLResponseProtoMsg): _113.QueryResolversByURLResponse;
                toProto(message: _113.QueryResolversByURLResponse): Uint8Array;
                toProtoMsg(message: _113.QueryResolversByURLResponse): _113.QueryResolversByURLResponseProtoMsg;
            };
            ConvertIRIToHashRequest: {
                encode(message: _113.ConvertIRIToHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.ConvertIRIToHashRequest;
                fromJSON(object: any): _113.ConvertIRIToHashRequest;
                toJSON(message: _113.ConvertIRIToHashRequest): unknown;
                fromPartial(object: Partial<_113.ConvertIRIToHashRequest>): _113.ConvertIRIToHashRequest;
                fromAmino(object: _113.ConvertIRIToHashRequestAmino): _113.ConvertIRIToHashRequest;
                toAmino(message: _113.ConvertIRIToHashRequest): _113.ConvertIRIToHashRequestAmino;
                fromAminoMsg(object: _113.ConvertIRIToHashRequestAminoMsg): _113.ConvertIRIToHashRequest;
                fromProtoMsg(message: _113.ConvertIRIToHashRequestProtoMsg): _113.ConvertIRIToHashRequest;
                toProto(message: _113.ConvertIRIToHashRequest): Uint8Array;
                toProtoMsg(message: _113.ConvertIRIToHashRequest): _113.ConvertIRIToHashRequestProtoMsg;
            };
            ConvertIRIToHashResponse: {
                encode(message: _113.ConvertIRIToHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.ConvertIRIToHashResponse;
                fromJSON(object: any): _113.ConvertIRIToHashResponse;
                toJSON(message: _113.ConvertIRIToHashResponse): unknown;
                fromPartial(object: Partial<_113.ConvertIRIToHashResponse>): _113.ConvertIRIToHashResponse;
                fromAmino(object: _113.ConvertIRIToHashResponseAmino): _113.ConvertIRIToHashResponse;
                toAmino(message: _113.ConvertIRIToHashResponse): _113.ConvertIRIToHashResponseAmino;
                fromAminoMsg(object: _113.ConvertIRIToHashResponseAminoMsg): _113.ConvertIRIToHashResponse;
                fromProtoMsg(message: _113.ConvertIRIToHashResponseProtoMsg): _113.ConvertIRIToHashResponse;
                toProto(message: _113.ConvertIRIToHashResponse): Uint8Array;
                toProtoMsg(message: _113.ConvertIRIToHashResponse): _113.ConvertIRIToHashResponseProtoMsg;
            };
            ConvertHashToIRIRequest: {
                encode(message: _113.ConvertHashToIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.ConvertHashToIRIRequest;
                fromJSON(object: any): _113.ConvertHashToIRIRequest;
                toJSON(message: _113.ConvertHashToIRIRequest): unknown;
                fromPartial(object: Partial<_113.ConvertHashToIRIRequest>): _113.ConvertHashToIRIRequest;
                fromAmino(object: _113.ConvertHashToIRIRequestAmino): _113.ConvertHashToIRIRequest;
                toAmino(message: _113.ConvertHashToIRIRequest): _113.ConvertHashToIRIRequestAmino;
                fromAminoMsg(object: _113.ConvertHashToIRIRequestAminoMsg): _113.ConvertHashToIRIRequest;
                fromProtoMsg(message: _113.ConvertHashToIRIRequestProtoMsg): _113.ConvertHashToIRIRequest;
                toProto(message: _113.ConvertHashToIRIRequest): Uint8Array;
                toProtoMsg(message: _113.ConvertHashToIRIRequest): _113.ConvertHashToIRIRequestProtoMsg;
            };
            ConvertHashToIRIResponse: {
                encode(message: _113.ConvertHashToIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.ConvertHashToIRIResponse;
                fromJSON(object: any): _113.ConvertHashToIRIResponse;
                toJSON(message: _113.ConvertHashToIRIResponse): unknown;
                fromPartial(object: Partial<_113.ConvertHashToIRIResponse>): _113.ConvertHashToIRIResponse;
                fromAmino(object: _113.ConvertHashToIRIResponseAmino): _113.ConvertHashToIRIResponse;
                toAmino(message: _113.ConvertHashToIRIResponse): _113.ConvertHashToIRIResponseAmino;
                fromAminoMsg(object: _113.ConvertHashToIRIResponseAminoMsg): _113.ConvertHashToIRIResponse;
                fromProtoMsg(message: _113.ConvertHashToIRIResponseProtoMsg): _113.ConvertHashToIRIResponse;
                toProto(message: _113.ConvertHashToIRIResponse): Uint8Array;
                toProtoMsg(message: _113.ConvertHashToIRIResponse): _113.ConvertHashToIRIResponseProtoMsg;
            };
            AnchorInfo: {
                encode(message: _113.AnchorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.AnchorInfo;
                fromJSON(object: any): _113.AnchorInfo;
                toJSON(message: _113.AnchorInfo): unknown;
                fromPartial(object: Partial<_113.AnchorInfo>): _113.AnchorInfo;
                fromAmino(object: _113.AnchorInfoAmino): _113.AnchorInfo;
                toAmino(message: _113.AnchorInfo): _113.AnchorInfoAmino;
                fromAminoMsg(object: _113.AnchorInfoAminoMsg): _113.AnchorInfo;
                fromProtoMsg(message: _113.AnchorInfoProtoMsg): _113.AnchorInfo;
                toProto(message: _113.AnchorInfo): Uint8Array;
                toProtoMsg(message: _113.AnchorInfo): _113.AnchorInfoProtoMsg;
            };
            AttestationInfo: {
                encode(message: _113.AttestationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.AttestationInfo;
                fromJSON(object: any): _113.AttestationInfo;
                toJSON(message: _113.AttestationInfo): unknown;
                fromPartial(object: Partial<_113.AttestationInfo>): _113.AttestationInfo;
                fromAmino(object: _113.AttestationInfoAmino): _113.AttestationInfo;
                toAmino(message: _113.AttestationInfo): _113.AttestationInfoAmino;
                fromAminoMsg(object: _113.AttestationInfoAminoMsg): _113.AttestationInfo;
                fromProtoMsg(message: _113.AttestationInfoProtoMsg): _113.AttestationInfo;
                toProto(message: _113.AttestationInfo): Uint8Array;
                toProtoMsg(message: _113.AttestationInfo): _113.AttestationInfoProtoMsg;
            };
            ResolverInfo: {
                encode(message: _113.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.ResolverInfo;
                fromJSON(object: any): _113.ResolverInfo;
                toJSON(message: _113.ResolverInfo): unknown;
                fromPartial(object: Partial<_113.ResolverInfo>): _113.ResolverInfo;
                fromAmino(object: _113.ResolverInfoAmino): _113.ResolverInfo;
                toAmino(message: _113.ResolverInfo): _113.ResolverInfoAmino;
                fromAminoMsg(object: _113.ResolverInfoAminoMsg): _113.ResolverInfo;
                fromProtoMsg(message: _113.ResolverInfoProtoMsg): _113.ResolverInfo;
                toProto(message: _113.ResolverInfo): Uint8Array;
                toProtoMsg(message: _113.ResolverInfo): _113.ResolverInfoProtoMsg;
            };
            EventAnchor: {
                encode(message: _112.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.EventAnchor;
                fromJSON(object: any): _112.EventAnchor;
                toJSON(message: _112.EventAnchor): unknown;
                fromPartial(object: Partial<_112.EventAnchor>): _112.EventAnchor;
                fromAmino(object: _112.EventAnchorAmino): _112.EventAnchor;
                toAmino(message: _112.EventAnchor): _112.EventAnchorAmino;
                fromAminoMsg(object: _112.EventAnchorAminoMsg): _112.EventAnchor;
                fromProtoMsg(message: _112.EventAnchorProtoMsg): _112.EventAnchor;
                toProto(message: _112.EventAnchor): Uint8Array;
                toProtoMsg(message: _112.EventAnchor): _112.EventAnchorProtoMsg;
            };
            EventAttest: {
                encode(message: _112.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.EventAttest;
                fromJSON(object: any): _112.EventAttest;
                toJSON(message: _112.EventAttest): unknown;
                fromPartial(object: Partial<_112.EventAttest>): _112.EventAttest;
                fromAmino(object: _112.EventAttestAmino): _112.EventAttest;
                toAmino(message: _112.EventAttest): _112.EventAttestAmino;
                fromAminoMsg(object: _112.EventAttestAminoMsg): _112.EventAttest;
                fromProtoMsg(message: _112.EventAttestProtoMsg): _112.EventAttest;
                toProto(message: _112.EventAttest): Uint8Array;
                toProtoMsg(message: _112.EventAttest): _112.EventAttestProtoMsg;
            };
            EventDefineResolver: {
                encode(message: _112.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.EventDefineResolver;
                fromJSON(object: any): _112.EventDefineResolver;
                toJSON(message: _112.EventDefineResolver): unknown;
                fromPartial(object: Partial<_112.EventDefineResolver>): _112.EventDefineResolver;
                fromAmino(object: _112.EventDefineResolverAmino): _112.EventDefineResolver;
                toAmino(message: _112.EventDefineResolver): _112.EventDefineResolverAmino;
                fromAminoMsg(object: _112.EventDefineResolverAminoMsg): _112.EventDefineResolver;
                fromProtoMsg(message: _112.EventDefineResolverProtoMsg): _112.EventDefineResolver;
                toProto(message: _112.EventDefineResolver): Uint8Array;
                toProtoMsg(message: _112.EventDefineResolver): _112.EventDefineResolverProtoMsg;
            };
            EventRegisterResolver: {
                encode(message: _112.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.EventRegisterResolver;
                fromJSON(object: any): _112.EventRegisterResolver;
                toJSON(message: _112.EventRegisterResolver): unknown;
                fromPartial(object: Partial<_112.EventRegisterResolver>): _112.EventRegisterResolver;
                fromAmino(object: _112.EventRegisterResolverAmino): _112.EventRegisterResolver;
                toAmino(message: _112.EventRegisterResolver): _112.EventRegisterResolverAmino;
                fromAminoMsg(object: _112.EventRegisterResolverAminoMsg): _112.EventRegisterResolver;
                fromProtoMsg(message: _112.EventRegisterResolverProtoMsg): _112.EventRegisterResolver;
                toProto(message: _112.EventRegisterResolver): Uint8Array;
                toProtoMsg(message: _112.EventRegisterResolver): _112.EventRegisterResolverProtoMsg;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                LCDQueryClient: typeof _216.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _120.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _120.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _120.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _120.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _120.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _120.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _120.MsgCreate): {
                            typeUrl: string;
                            value: _120.MsgCreate;
                        };
                        put(value: _120.MsgPut): {
                            typeUrl: string;
                            value: _120.MsgPut;
                        };
                        take(value: _120.MsgTake): {
                            typeUrl: string;
                            value: _120.MsgTake;
                        };
                        updateBasketFee(value: _120.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _120.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _120.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _120.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _120.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _120.MsgUpdateDateCriteria;
                        };
                    };
                    toJSON: {
                        create(value: _120.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _120.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _120.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateBasketFee(value: _120.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateCurator(value: _120.MsgUpdateCurator): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateDateCriteria(value: _120.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _120.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _120.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _120.MsgTake;
                        };
                        updateBasketFee(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpdateBasketFee;
                        };
                        updateCurator(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _120.MsgCreate): {
                            typeUrl: string;
                            value: _120.MsgCreate;
                        };
                        put(value: _120.MsgPut): {
                            typeUrl: string;
                            value: _120.MsgPut;
                        };
                        take(value: _120.MsgTake): {
                            typeUrl: string;
                            value: _120.MsgTake;
                        };
                        updateBasketFee(value: _120.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _120.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _120.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _120.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _120.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _120.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: (message: _120.MsgCreate) => _120.MsgCreateAmino;
                        fromAmino: (object: _120.MsgCreateAmino) => _120.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: (message: _120.MsgPut) => _120.MsgPutAmino;
                        fromAmino: (object: _120.MsgPutAmino) => _120.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: (message: _120.MsgTake) => _120.MsgTakeAmino;
                        fromAmino: (object: _120.MsgTakeAmino) => _120.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: (message: _120.MsgUpdateBasketFee) => _120.MsgUpdateBasketFeeAmino;
                        fromAmino: (object: _120.MsgUpdateBasketFeeAmino) => _120.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: (message: _120.MsgUpdateCurator) => _120.MsgUpdateCuratorAmino;
                        fromAmino: (object: _120.MsgUpdateCuratorAmino) => _120.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: (message: _120.MsgUpdateDateCriteria) => _120.MsgUpdateDateCriteriaAmino;
                        fromAmino: (object: _120.MsgUpdateDateCriteriaAmino) => _120.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    encode(message: _121.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.BasketCredit;
                    fromJSON(object: any): _121.BasketCredit;
                    toJSON(message: _121.BasketCredit): unknown;
                    fromPartial(object: Partial<_121.BasketCredit>): _121.BasketCredit;
                    fromAmino(object: _121.BasketCreditAmino): _121.BasketCredit;
                    toAmino(message: _121.BasketCredit): _121.BasketCreditAmino;
                    fromAminoMsg(object: _121.BasketCreditAminoMsg): _121.BasketCredit;
                    fromProtoMsg(message: _121.BasketCreditProtoMsg): _121.BasketCredit;
                    toProto(message: _121.BasketCredit): Uint8Array;
                    toProtoMsg(message: _121.BasketCredit): _121.BasketCreditProtoMsg;
                };
                DateCriteria: {
                    encode(message: _121.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.DateCriteria;
                    fromJSON(object: any): _121.DateCriteria;
                    toJSON(message: _121.DateCriteria): unknown;
                    fromPartial(object: Partial<_121.DateCriteria>): _121.DateCriteria;
                    fromAmino(object: _121.DateCriteriaAmino): _121.DateCriteria;
                    toAmino(message: _121.DateCriteria): _121.DateCriteriaAmino;
                    fromAminoMsg(object: _121.DateCriteriaAminoMsg): _121.DateCriteria;
                    fromProtoMsg(message: _121.DateCriteriaProtoMsg): _121.DateCriteria;
                    toProto(message: _121.DateCriteria): Uint8Array;
                    toProtoMsg(message: _121.DateCriteria): _121.DateCriteriaProtoMsg;
                };
                MsgCreate: {
                    encode(message: _120.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgCreate;
                    fromJSON(object: any): _120.MsgCreate;
                    toJSON(message: _120.MsgCreate): unknown;
                    fromPartial(object: Partial<_120.MsgCreate>): _120.MsgCreate;
                    fromAmino(object: _120.MsgCreateAmino): _120.MsgCreate;
                    toAmino(message: _120.MsgCreate): _120.MsgCreateAmino;
                    fromAminoMsg(object: _120.MsgCreateAminoMsg): _120.MsgCreate;
                    toAminoMsg(message: _120.MsgCreate): _120.MsgCreateAminoMsg;
                    fromProtoMsg(message: _120.MsgCreateProtoMsg): _120.MsgCreate;
                    toProto(message: _120.MsgCreate): Uint8Array;
                    toProtoMsg(message: _120.MsgCreate): _120.MsgCreateProtoMsg;
                };
                MsgCreateResponse: {
                    encode(message: _120.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgCreateResponse;
                    fromJSON(object: any): _120.MsgCreateResponse;
                    toJSON(message: _120.MsgCreateResponse): unknown;
                    fromPartial(object: Partial<_120.MsgCreateResponse>): _120.MsgCreateResponse;
                    fromAmino(object: _120.MsgCreateResponseAmino): _120.MsgCreateResponse;
                    toAmino(message: _120.MsgCreateResponse): _120.MsgCreateResponseAmino;
                    fromAminoMsg(object: _120.MsgCreateResponseAminoMsg): _120.MsgCreateResponse;
                    fromProtoMsg(message: _120.MsgCreateResponseProtoMsg): _120.MsgCreateResponse;
                    toProto(message: _120.MsgCreateResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgCreateResponse): _120.MsgCreateResponseProtoMsg;
                };
                MsgPut: {
                    encode(message: _120.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgPut;
                    fromJSON(object: any): _120.MsgPut;
                    toJSON(message: _120.MsgPut): unknown;
                    fromPartial(object: Partial<_120.MsgPut>): _120.MsgPut;
                    fromAmino(object: _120.MsgPutAmino): _120.MsgPut;
                    toAmino(message: _120.MsgPut): _120.MsgPutAmino;
                    fromAminoMsg(object: _120.MsgPutAminoMsg): _120.MsgPut;
                    toAminoMsg(message: _120.MsgPut): _120.MsgPutAminoMsg;
                    fromProtoMsg(message: _120.MsgPutProtoMsg): _120.MsgPut;
                    toProto(message: _120.MsgPut): Uint8Array;
                    toProtoMsg(message: _120.MsgPut): _120.MsgPutProtoMsg;
                };
                MsgPutResponse: {
                    encode(message: _120.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgPutResponse;
                    fromJSON(object: any): _120.MsgPutResponse;
                    toJSON(message: _120.MsgPutResponse): unknown;
                    fromPartial(object: Partial<_120.MsgPutResponse>): _120.MsgPutResponse;
                    fromAmino(object: _120.MsgPutResponseAmino): _120.MsgPutResponse;
                    toAmino(message: _120.MsgPutResponse): _120.MsgPutResponseAmino;
                    fromAminoMsg(object: _120.MsgPutResponseAminoMsg): _120.MsgPutResponse;
                    fromProtoMsg(message: _120.MsgPutResponseProtoMsg): _120.MsgPutResponse;
                    toProto(message: _120.MsgPutResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgPutResponse): _120.MsgPutResponseProtoMsg;
                };
                MsgTake: {
                    encode(message: _120.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgTake;
                    fromJSON(object: any): _120.MsgTake;
                    toJSON(message: _120.MsgTake): unknown;
                    fromPartial(object: Partial<_120.MsgTake>): _120.MsgTake;
                    fromAmino(object: _120.MsgTakeAmino): _120.MsgTake;
                    toAmino(message: _120.MsgTake): _120.MsgTakeAmino;
                    fromAminoMsg(object: _120.MsgTakeAminoMsg): _120.MsgTake;
                    toAminoMsg(message: _120.MsgTake): _120.MsgTakeAminoMsg;
                    fromProtoMsg(message: _120.MsgTakeProtoMsg): _120.MsgTake;
                    toProto(message: _120.MsgTake): Uint8Array;
                    toProtoMsg(message: _120.MsgTake): _120.MsgTakeProtoMsg;
                };
                MsgTakeResponse: {
                    encode(message: _120.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgTakeResponse;
                    fromJSON(object: any): _120.MsgTakeResponse;
                    toJSON(message: _120.MsgTakeResponse): unknown;
                    fromPartial(object: Partial<_120.MsgTakeResponse>): _120.MsgTakeResponse;
                    fromAmino(object: _120.MsgTakeResponseAmino): _120.MsgTakeResponse;
                    toAmino(message: _120.MsgTakeResponse): _120.MsgTakeResponseAmino;
                    fromAminoMsg(object: _120.MsgTakeResponseAminoMsg): _120.MsgTakeResponse;
                    fromProtoMsg(message: _120.MsgTakeResponseProtoMsg): _120.MsgTakeResponse;
                    toProto(message: _120.MsgTakeResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgTakeResponse): _120.MsgTakeResponseProtoMsg;
                };
                MsgUpdateBasketFee: {
                    encode(message: _120.MsgUpdateBasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgUpdateBasketFee;
                    fromJSON(object: any): _120.MsgUpdateBasketFee;
                    toJSON(message: _120.MsgUpdateBasketFee): unknown;
                    fromPartial(object: Partial<_120.MsgUpdateBasketFee>): _120.MsgUpdateBasketFee;
                    fromAmino(object: _120.MsgUpdateBasketFeeAmino): _120.MsgUpdateBasketFee;
                    toAmino(message: _120.MsgUpdateBasketFee): _120.MsgUpdateBasketFeeAmino;
                    fromAminoMsg(object: _120.MsgUpdateBasketFeeAminoMsg): _120.MsgUpdateBasketFee;
                    toAminoMsg(message: _120.MsgUpdateBasketFee): _120.MsgUpdateBasketFeeAminoMsg;
                    fromProtoMsg(message: _120.MsgUpdateBasketFeeProtoMsg): _120.MsgUpdateBasketFee;
                    toProto(message: _120.MsgUpdateBasketFee): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateBasketFee): _120.MsgUpdateBasketFeeProtoMsg;
                };
                MsgUpdateBasketFeeResponse: {
                    encode(_: _120.MsgUpdateBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgUpdateBasketFeeResponse;
                    fromJSON(_: any): _120.MsgUpdateBasketFeeResponse;
                    toJSON(_: _120.MsgUpdateBasketFeeResponse): unknown;
                    fromPartial(_: Partial<_120.MsgUpdateBasketFeeResponse>): _120.MsgUpdateBasketFeeResponse;
                    fromAmino(_: _120.MsgUpdateBasketFeeResponseAmino): _120.MsgUpdateBasketFeeResponse;
                    toAmino(_: _120.MsgUpdateBasketFeeResponse): _120.MsgUpdateBasketFeeResponseAmino;
                    fromAminoMsg(object: _120.MsgUpdateBasketFeeResponseAminoMsg): _120.MsgUpdateBasketFeeResponse;
                    fromProtoMsg(message: _120.MsgUpdateBasketFeeResponseProtoMsg): _120.MsgUpdateBasketFeeResponse;
                    toProto(message: _120.MsgUpdateBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateBasketFeeResponse): _120.MsgUpdateBasketFeeResponseProtoMsg;
                };
                MsgUpdateCurator: {
                    encode(message: _120.MsgUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgUpdateCurator;
                    fromJSON(object: any): _120.MsgUpdateCurator;
                    toJSON(message: _120.MsgUpdateCurator): unknown;
                    fromPartial(object: Partial<_120.MsgUpdateCurator>): _120.MsgUpdateCurator;
                    fromAmino(object: _120.MsgUpdateCuratorAmino): _120.MsgUpdateCurator;
                    toAmino(message: _120.MsgUpdateCurator): _120.MsgUpdateCuratorAmino;
                    fromAminoMsg(object: _120.MsgUpdateCuratorAminoMsg): _120.MsgUpdateCurator;
                    toAminoMsg(message: _120.MsgUpdateCurator): _120.MsgUpdateCuratorAminoMsg;
                    fromProtoMsg(message: _120.MsgUpdateCuratorProtoMsg): _120.MsgUpdateCurator;
                    toProto(message: _120.MsgUpdateCurator): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateCurator): _120.MsgUpdateCuratorProtoMsg;
                };
                MsgUpdateCuratorResponse: {
                    encode(_: _120.MsgUpdateCuratorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgUpdateCuratorResponse;
                    fromJSON(_: any): _120.MsgUpdateCuratorResponse;
                    toJSON(_: _120.MsgUpdateCuratorResponse): unknown;
                    fromPartial(_: Partial<_120.MsgUpdateCuratorResponse>): _120.MsgUpdateCuratorResponse;
                    fromAmino(_: _120.MsgUpdateCuratorResponseAmino): _120.MsgUpdateCuratorResponse;
                    toAmino(_: _120.MsgUpdateCuratorResponse): _120.MsgUpdateCuratorResponseAmino;
                    fromAminoMsg(object: _120.MsgUpdateCuratorResponseAminoMsg): _120.MsgUpdateCuratorResponse;
                    fromProtoMsg(message: _120.MsgUpdateCuratorResponseProtoMsg): _120.MsgUpdateCuratorResponse;
                    toProto(message: _120.MsgUpdateCuratorResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateCuratorResponse): _120.MsgUpdateCuratorResponseProtoMsg;
                };
                MsgUpdateDateCriteria: {
                    encode(message: _120.MsgUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgUpdateDateCriteria;
                    fromJSON(object: any): _120.MsgUpdateDateCriteria;
                    toJSON(message: _120.MsgUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_120.MsgUpdateDateCriteria>): _120.MsgUpdateDateCriteria;
                    fromAmino(object: _120.MsgUpdateDateCriteriaAmino): _120.MsgUpdateDateCriteria;
                    toAmino(message: _120.MsgUpdateDateCriteria): _120.MsgUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _120.MsgUpdateDateCriteriaAminoMsg): _120.MsgUpdateDateCriteria;
                    toAminoMsg(message: _120.MsgUpdateDateCriteria): _120.MsgUpdateDateCriteriaAminoMsg;
                    fromProtoMsg(message: _120.MsgUpdateDateCriteriaProtoMsg): _120.MsgUpdateDateCriteria;
                    toProto(message: _120.MsgUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateDateCriteria): _120.MsgUpdateDateCriteriaProtoMsg;
                };
                MsgUpdateDateCriteriaResponse: {
                    encode(_: _120.MsgUpdateDateCriteriaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.MsgUpdateDateCriteriaResponse;
                    fromJSON(_: any): _120.MsgUpdateDateCriteriaResponse;
                    toJSON(_: _120.MsgUpdateDateCriteriaResponse): unknown;
                    fromPartial(_: Partial<_120.MsgUpdateDateCriteriaResponse>): _120.MsgUpdateDateCriteriaResponse;
                    fromAmino(_: _120.MsgUpdateDateCriteriaResponseAmino): _120.MsgUpdateDateCriteriaResponse;
                    toAmino(_: _120.MsgUpdateDateCriteriaResponse): _120.MsgUpdateDateCriteriaResponseAmino;
                    fromAminoMsg(object: _120.MsgUpdateDateCriteriaResponseAminoMsg): _120.MsgUpdateDateCriteriaResponse;
                    fromProtoMsg(message: _120.MsgUpdateDateCriteriaResponseProtoMsg): _120.MsgUpdateDateCriteriaResponse;
                    toProto(message: _120.MsgUpdateDateCriteriaResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateDateCriteriaResponse): _120.MsgUpdateDateCriteriaResponseProtoMsg;
                };
                Basket: {
                    encode(message: _119.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.Basket;
                    fromJSON(object: any): _119.Basket;
                    toJSON(message: _119.Basket): unknown;
                    fromPartial(object: Partial<_119.Basket>): _119.Basket;
                    fromAmino(object: _119.BasketAmino): _119.Basket;
                    toAmino(message: _119.Basket): _119.BasketAmino;
                    fromAminoMsg(object: _119.BasketAminoMsg): _119.Basket;
                    fromProtoMsg(message: _119.BasketProtoMsg): _119.Basket;
                    toProto(message: _119.Basket): Uint8Array;
                    toProtoMsg(message: _119.Basket): _119.BasketProtoMsg;
                };
                BasketClass: {
                    encode(message: _119.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BasketClass;
                    fromJSON(object: any): _119.BasketClass;
                    toJSON(message: _119.BasketClass): unknown;
                    fromPartial(object: Partial<_119.BasketClass>): _119.BasketClass;
                    fromAmino(object: _119.BasketClassAmino): _119.BasketClass;
                    toAmino(message: _119.BasketClass): _119.BasketClassAmino;
                    fromAminoMsg(object: _119.BasketClassAminoMsg): _119.BasketClass;
                    fromProtoMsg(message: _119.BasketClassProtoMsg): _119.BasketClass;
                    toProto(message: _119.BasketClass): Uint8Array;
                    toProtoMsg(message: _119.BasketClass): _119.BasketClassProtoMsg;
                };
                BasketBalance: {
                    encode(message: _119.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BasketBalance;
                    fromJSON(object: any): _119.BasketBalance;
                    toJSON(message: _119.BasketBalance): unknown;
                    fromPartial(object: Partial<_119.BasketBalance>): _119.BasketBalance;
                    fromAmino(object: _119.BasketBalanceAmino): _119.BasketBalance;
                    toAmino(message: _119.BasketBalance): _119.BasketBalanceAmino;
                    fromAminoMsg(object: _119.BasketBalanceAminoMsg): _119.BasketBalance;
                    fromProtoMsg(message: _119.BasketBalanceProtoMsg): _119.BasketBalance;
                    toProto(message: _119.BasketBalance): Uint8Array;
                    toProtoMsg(message: _119.BasketBalance): _119.BasketBalanceProtoMsg;
                };
                BasketFee: {
                    encode(message: _119.BasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.BasketFee;
                    fromJSON(object: any): _119.BasketFee;
                    toJSON(message: _119.BasketFee): unknown;
                    fromPartial(object: Partial<_119.BasketFee>): _119.BasketFee;
                    fromAmino(object: _119.BasketFeeAmino): _119.BasketFee;
                    toAmino(message: _119.BasketFee): _119.BasketFeeAmino;
                    fromAminoMsg(object: _119.BasketFeeAminoMsg): _119.BasketFee;
                    fromProtoMsg(message: _119.BasketFeeProtoMsg): _119.BasketFee;
                    toProto(message: _119.BasketFee): Uint8Array;
                    toProtoMsg(message: _119.BasketFee): _119.BasketFeeProtoMsg;
                };
                QueryBasketRequest: {
                    encode(message: _118.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketRequest;
                    fromJSON(object: any): _118.QueryBasketRequest;
                    toJSON(message: _118.QueryBasketRequest): unknown;
                    fromPartial(object: Partial<_118.QueryBasketRequest>): _118.QueryBasketRequest;
                    fromAmino(object: _118.QueryBasketRequestAmino): _118.QueryBasketRequest;
                    toAmino(message: _118.QueryBasketRequest): _118.QueryBasketRequestAmino;
                    fromAminoMsg(object: _118.QueryBasketRequestAminoMsg): _118.QueryBasketRequest;
                    fromProtoMsg(message: _118.QueryBasketRequestProtoMsg): _118.QueryBasketRequest;
                    toProto(message: _118.QueryBasketRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketRequest): _118.QueryBasketRequestProtoMsg;
                };
                QueryBasketResponse: {
                    encode(message: _118.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketResponse;
                    fromJSON(object: any): _118.QueryBasketResponse;
                    toJSON(message: _118.QueryBasketResponse): unknown;
                    fromPartial(object: Partial<_118.QueryBasketResponse>): _118.QueryBasketResponse;
                    fromAmino(object: _118.QueryBasketResponseAmino): _118.QueryBasketResponse;
                    toAmino(message: _118.QueryBasketResponse): _118.QueryBasketResponseAmino;
                    fromAminoMsg(object: _118.QueryBasketResponseAminoMsg): _118.QueryBasketResponse;
                    fromProtoMsg(message: _118.QueryBasketResponseProtoMsg): _118.QueryBasketResponse;
                    toProto(message: _118.QueryBasketResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketResponse): _118.QueryBasketResponseProtoMsg;
                };
                QueryBasketsRequest: {
                    encode(message: _118.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketsRequest;
                    fromJSON(object: any): _118.QueryBasketsRequest;
                    toJSON(message: _118.QueryBasketsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryBasketsRequest>): _118.QueryBasketsRequest;
                    fromAmino(object: _118.QueryBasketsRequestAmino): _118.QueryBasketsRequest;
                    toAmino(message: _118.QueryBasketsRequest): _118.QueryBasketsRequestAmino;
                    fromAminoMsg(object: _118.QueryBasketsRequestAminoMsg): _118.QueryBasketsRequest;
                    fromProtoMsg(message: _118.QueryBasketsRequestProtoMsg): _118.QueryBasketsRequest;
                    toProto(message: _118.QueryBasketsRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketsRequest): _118.QueryBasketsRequestProtoMsg;
                };
                QueryBasketsResponse: {
                    encode(message: _118.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketsResponse;
                    fromJSON(object: any): _118.QueryBasketsResponse;
                    toJSON(message: _118.QueryBasketsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryBasketsResponse>): _118.QueryBasketsResponse;
                    fromAmino(object: _118.QueryBasketsResponseAmino): _118.QueryBasketsResponse;
                    toAmino(message: _118.QueryBasketsResponse): _118.QueryBasketsResponseAmino;
                    fromAminoMsg(object: _118.QueryBasketsResponseAminoMsg): _118.QueryBasketsResponse;
                    fromProtoMsg(message: _118.QueryBasketsResponseProtoMsg): _118.QueryBasketsResponse;
                    toProto(message: _118.QueryBasketsResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketsResponse): _118.QueryBasketsResponseProtoMsg;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _118.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketBalancesRequest;
                    fromJSON(object: any): _118.QueryBasketBalancesRequest;
                    toJSON(message: _118.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: Partial<_118.QueryBasketBalancesRequest>): _118.QueryBasketBalancesRequest;
                    fromAmino(object: _118.QueryBasketBalancesRequestAmino): _118.QueryBasketBalancesRequest;
                    toAmino(message: _118.QueryBasketBalancesRequest): _118.QueryBasketBalancesRequestAmino;
                    fromAminoMsg(object: _118.QueryBasketBalancesRequestAminoMsg): _118.QueryBasketBalancesRequest;
                    fromProtoMsg(message: _118.QueryBasketBalancesRequestProtoMsg): _118.QueryBasketBalancesRequest;
                    toProto(message: _118.QueryBasketBalancesRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketBalancesRequest): _118.QueryBasketBalancesRequestProtoMsg;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _118.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketBalancesResponse;
                    fromJSON(object: any): _118.QueryBasketBalancesResponse;
                    toJSON(message: _118.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: Partial<_118.QueryBasketBalancesResponse>): _118.QueryBasketBalancesResponse;
                    fromAmino(object: _118.QueryBasketBalancesResponseAmino): _118.QueryBasketBalancesResponse;
                    toAmino(message: _118.QueryBasketBalancesResponse): _118.QueryBasketBalancesResponseAmino;
                    fromAminoMsg(object: _118.QueryBasketBalancesResponseAminoMsg): _118.QueryBasketBalancesResponse;
                    fromProtoMsg(message: _118.QueryBasketBalancesResponseProtoMsg): _118.QueryBasketBalancesResponse;
                    toProto(message: _118.QueryBasketBalancesResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketBalancesResponse): _118.QueryBasketBalancesResponseProtoMsg;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _118.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketBalanceRequest;
                    fromJSON(object: any): _118.QueryBasketBalanceRequest;
                    toJSON(message: _118.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: Partial<_118.QueryBasketBalanceRequest>): _118.QueryBasketBalanceRequest;
                    fromAmino(object: _118.QueryBasketBalanceRequestAmino): _118.QueryBasketBalanceRequest;
                    toAmino(message: _118.QueryBasketBalanceRequest): _118.QueryBasketBalanceRequestAmino;
                    fromAminoMsg(object: _118.QueryBasketBalanceRequestAminoMsg): _118.QueryBasketBalanceRequest;
                    fromProtoMsg(message: _118.QueryBasketBalanceRequestProtoMsg): _118.QueryBasketBalanceRequest;
                    toProto(message: _118.QueryBasketBalanceRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketBalanceRequest): _118.QueryBasketBalanceRequestProtoMsg;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _118.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketBalanceResponse;
                    fromJSON(object: any): _118.QueryBasketBalanceResponse;
                    toJSON(message: _118.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: Partial<_118.QueryBasketBalanceResponse>): _118.QueryBasketBalanceResponse;
                    fromAmino(object: _118.QueryBasketBalanceResponseAmino): _118.QueryBasketBalanceResponse;
                    toAmino(message: _118.QueryBasketBalanceResponse): _118.QueryBasketBalanceResponseAmino;
                    fromAminoMsg(object: _118.QueryBasketBalanceResponseAminoMsg): _118.QueryBasketBalanceResponse;
                    fromProtoMsg(message: _118.QueryBasketBalanceResponseProtoMsg): _118.QueryBasketBalanceResponse;
                    toProto(message: _118.QueryBasketBalanceResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketBalanceResponse): _118.QueryBasketBalanceResponseProtoMsg;
                };
                BasketInfo: {
                    encode(message: _118.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.BasketInfo;
                    fromJSON(object: any): _118.BasketInfo;
                    toJSON(message: _118.BasketInfo): unknown;
                    fromPartial(object: Partial<_118.BasketInfo>): _118.BasketInfo;
                    fromAmino(object: _118.BasketInfoAmino): _118.BasketInfo;
                    toAmino(message: _118.BasketInfo): _118.BasketInfoAmino;
                    fromAminoMsg(object: _118.BasketInfoAminoMsg): _118.BasketInfo;
                    fromProtoMsg(message: _118.BasketInfoProtoMsg): _118.BasketInfo;
                    toProto(message: _118.BasketInfo): Uint8Array;
                    toProtoMsg(message: _118.BasketInfo): _118.BasketInfoProtoMsg;
                };
                BasketBalanceInfo: {
                    encode(message: _118.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.BasketBalanceInfo;
                    fromJSON(object: any): _118.BasketBalanceInfo;
                    toJSON(message: _118.BasketBalanceInfo): unknown;
                    fromPartial(object: Partial<_118.BasketBalanceInfo>): _118.BasketBalanceInfo;
                    fromAmino(object: _118.BasketBalanceInfoAmino): _118.BasketBalanceInfo;
                    toAmino(message: _118.BasketBalanceInfo): _118.BasketBalanceInfoAmino;
                    fromAminoMsg(object: _118.BasketBalanceInfoAminoMsg): _118.BasketBalanceInfo;
                    fromProtoMsg(message: _118.BasketBalanceInfoProtoMsg): _118.BasketBalanceInfo;
                    toProto(message: _118.BasketBalanceInfo): Uint8Array;
                    toProtoMsg(message: _118.BasketBalanceInfo): _118.BasketBalanceInfoProtoMsg;
                };
                QueryBasketFeeRequest: {
                    encode(_: _118.QueryBasketFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketFeeRequest;
                    fromJSON(_: any): _118.QueryBasketFeeRequest;
                    toJSON(_: _118.QueryBasketFeeRequest): unknown;
                    fromPartial(_: Partial<_118.QueryBasketFeeRequest>): _118.QueryBasketFeeRequest;
                    fromAmino(_: _118.QueryBasketFeeRequestAmino): _118.QueryBasketFeeRequest;
                    toAmino(_: _118.QueryBasketFeeRequest): _118.QueryBasketFeeRequestAmino;
                    fromAminoMsg(object: _118.QueryBasketFeeRequestAminoMsg): _118.QueryBasketFeeRequest;
                    fromProtoMsg(message: _118.QueryBasketFeeRequestProtoMsg): _118.QueryBasketFeeRequest;
                    toProto(message: _118.QueryBasketFeeRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketFeeRequest): _118.QueryBasketFeeRequestProtoMsg;
                };
                QueryBasketFeeResponse: {
                    encode(message: _118.QueryBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.QueryBasketFeeResponse;
                    fromJSON(object: any): _118.QueryBasketFeeResponse;
                    toJSON(message: _118.QueryBasketFeeResponse): unknown;
                    fromPartial(object: Partial<_118.QueryBasketFeeResponse>): _118.QueryBasketFeeResponse;
                    fromAmino(object: _118.QueryBasketFeeResponseAmino): _118.QueryBasketFeeResponse;
                    toAmino(message: _118.QueryBasketFeeResponse): _118.QueryBasketFeeResponseAmino;
                    fromAminoMsg(object: _118.QueryBasketFeeResponseAminoMsg): _118.QueryBasketFeeResponse;
                    fromProtoMsg(message: _118.QueryBasketFeeResponseProtoMsg): _118.QueryBasketFeeResponse;
                    toProto(message: _118.QueryBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryBasketFeeResponse): _118.QueryBasketFeeResponseProtoMsg;
                };
                EventCreate: {
                    encode(message: _117.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.EventCreate;
                    fromJSON(object: any): _117.EventCreate;
                    toJSON(message: _117.EventCreate): unknown;
                    fromPartial(object: Partial<_117.EventCreate>): _117.EventCreate;
                    fromAmino(object: _117.EventCreateAmino): _117.EventCreate;
                    toAmino(message: _117.EventCreate): _117.EventCreateAmino;
                    fromAminoMsg(object: _117.EventCreateAminoMsg): _117.EventCreate;
                    fromProtoMsg(message: _117.EventCreateProtoMsg): _117.EventCreate;
                    toProto(message: _117.EventCreate): Uint8Array;
                    toProtoMsg(message: _117.EventCreate): _117.EventCreateProtoMsg;
                };
                EventPut: {
                    encode(message: _117.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.EventPut;
                    fromJSON(object: any): _117.EventPut;
                    toJSON(message: _117.EventPut): unknown;
                    fromPartial(object: Partial<_117.EventPut>): _117.EventPut;
                    fromAmino(object: _117.EventPutAmino): _117.EventPut;
                    toAmino(message: _117.EventPut): _117.EventPutAmino;
                    fromAminoMsg(object: _117.EventPutAminoMsg): _117.EventPut;
                    fromProtoMsg(message: _117.EventPutProtoMsg): _117.EventPut;
                    toProto(message: _117.EventPut): Uint8Array;
                    toProtoMsg(message: _117.EventPut): _117.EventPutProtoMsg;
                };
                EventTake: {
                    encode(message: _117.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.EventTake;
                    fromJSON(object: any): _117.EventTake;
                    toJSON(message: _117.EventTake): unknown;
                    fromPartial(object: Partial<_117.EventTake>): _117.EventTake;
                    fromAmino(object: _117.EventTakeAmino): _117.EventTake;
                    toAmino(message: _117.EventTake): _117.EventTakeAmino;
                    fromAminoMsg(object: _117.EventTakeAminoMsg): _117.EventTake;
                    fromProtoMsg(message: _117.EventTakeProtoMsg): _117.EventTake;
                    toProto(message: _117.EventTake): Uint8Array;
                    toProtoMsg(message: _117.EventTake): _117.EventTakeProtoMsg;
                };
                EventUpdateCurator: {
                    encode(message: _117.EventUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.EventUpdateCurator;
                    fromJSON(object: any): _117.EventUpdateCurator;
                    toJSON(message: _117.EventUpdateCurator): unknown;
                    fromPartial(object: Partial<_117.EventUpdateCurator>): _117.EventUpdateCurator;
                    fromAmino(object: _117.EventUpdateCuratorAmino): _117.EventUpdateCurator;
                    toAmino(message: _117.EventUpdateCurator): _117.EventUpdateCuratorAmino;
                    fromAminoMsg(object: _117.EventUpdateCuratorAminoMsg): _117.EventUpdateCurator;
                    fromProtoMsg(message: _117.EventUpdateCuratorProtoMsg): _117.EventUpdateCurator;
                    toProto(message: _117.EventUpdateCurator): Uint8Array;
                    toProtoMsg(message: _117.EventUpdateCurator): _117.EventUpdateCuratorProtoMsg;
                };
                EventUpdateDateCriteria: {
                    encode(message: _117.EventUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.EventUpdateDateCriteria;
                    fromJSON(object: any): _117.EventUpdateDateCriteria;
                    toJSON(message: _117.EventUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_117.EventUpdateDateCriteria>): _117.EventUpdateDateCriteria;
                    fromAmino(object: _117.EventUpdateDateCriteriaAmino): _117.EventUpdateDateCriteria;
                    toAmino(message: _117.EventUpdateDateCriteria): _117.EventUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _117.EventUpdateDateCriteriaAminoMsg): _117.EventUpdateDateCriteria;
                    fromProtoMsg(message: _117.EventUpdateDateCriteriaProtoMsg): _117.EventUpdateDateCriteria;
                    toProto(message: _117.EventUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _117.EventUpdateDateCriteria): _117.EventUpdateDateCriteriaProtoMsg;
                };
            };
        }
        namespace marketplace {
            const v1: {
                LCDQueryClient: typeof _217.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _125.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _125.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _125.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _125.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _125.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _125.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _125.MsgSell): {
                            typeUrl: string;
                            value: _125.MsgSell;
                        };
                        updateSellOrders(value: _125.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _125.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _125.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _125.MsgCancelSellOrder;
                        };
                        buyDirect(value: _125.MsgBuyDirect): {
                            typeUrl: string;
                            value: _125.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _125.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _125.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _125.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _125.MsgRemoveAllowedDenom;
                        };
                    };
                    toJSON: {
                        sell(value: _125.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _125.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _125.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _125.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                        addAllowedDenom(value: _125.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                        removeAllowedDenom(value: _125.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _125.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _125.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _125.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _125.MsgBuyDirect;
                        };
                        addAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _125.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _125.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _125.MsgSell): {
                            typeUrl: string;
                            value: _125.MsgSell;
                        };
                        updateSellOrders(value: _125.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _125.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _125.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _125.MsgCancelSellOrder;
                        };
                        buyDirect(value: _125.MsgBuyDirect): {
                            typeUrl: string;
                            value: _125.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _125.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _125.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _125.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _125.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: (message: _125.MsgSell) => _125.MsgSellAmino;
                        fromAmino: (object: _125.MsgSellAmino) => _125.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: (message: _125.MsgUpdateSellOrders) => _125.MsgUpdateSellOrdersAmino;
                        fromAmino: (object: _125.MsgUpdateSellOrdersAmino) => _125.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: (message: _125.MsgCancelSellOrder) => _125.MsgCancelSellOrderAmino;
                        fromAmino: (object: _125.MsgCancelSellOrderAmino) => _125.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: (message: _125.MsgBuyDirect) => _125.MsgBuyDirectAmino;
                        fromAmino: (object: _125.MsgBuyDirectAmino) => _125.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _125.MsgAddAllowedDenom) => _125.MsgAddAllowedDenomAmino;
                        fromAmino: (object: _125.MsgAddAllowedDenomAmino) => _125.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _125.MsgRemoveAllowedDenom) => _125.MsgRemoveAllowedDenomAmino;
                        fromAmino: (object: _125.MsgRemoveAllowedDenomAmino) => _125.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _126.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.AllowDenomProposal;
                    fromJSON(object: any): _126.AllowDenomProposal;
                    toJSON(message: _126.AllowDenomProposal): unknown;
                    fromPartial(object: Partial<_126.AllowDenomProposal>): _126.AllowDenomProposal;
                    fromAmino(object: _126.AllowDenomProposalAmino): _126.AllowDenomProposal;
                    toAmino(message: _126.AllowDenomProposal): _126.AllowDenomProposalAmino;
                    fromAminoMsg(object: _126.AllowDenomProposalAminoMsg): _126.AllowDenomProposal;
                    fromProtoMsg(message: _126.AllowDenomProposalProtoMsg): _126.AllowDenomProposal;
                    toProto(message: _126.AllowDenomProposal): Uint8Array;
                    toProtoMsg(message: _126.AllowDenomProposal): _126.AllowDenomProposalProtoMsg;
                };
                MsgSell: {
                    encode(message: _125.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgSell;
                    fromJSON(object: any): _125.MsgSell;
                    toJSON(message: _125.MsgSell): unknown;
                    fromPartial(object: Partial<_125.MsgSell>): _125.MsgSell;
                    fromAmino(object: _125.MsgSellAmino): _125.MsgSell;
                    toAmino(message: _125.MsgSell): _125.MsgSellAmino;
                    fromAminoMsg(object: _125.MsgSellAminoMsg): _125.MsgSell;
                    toAminoMsg(message: _125.MsgSell): _125.MsgSellAminoMsg;
                    fromProtoMsg(message: _125.MsgSellProtoMsg): _125.MsgSell;
                    toProto(message: _125.MsgSell): Uint8Array;
                    toProtoMsg(message: _125.MsgSell): _125.MsgSellProtoMsg;
                };
                MsgSell_Order: {
                    encode(message: _125.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgSell_Order;
                    fromJSON(object: any): _125.MsgSell_Order;
                    toJSON(message: _125.MsgSell_Order): unknown;
                    fromPartial(object: Partial<_125.MsgSell_Order>): _125.MsgSell_Order;
                    fromAmino(object: _125.MsgSell_OrderAmino): _125.MsgSell_Order;
                    toAmino(message: _125.MsgSell_Order): _125.MsgSell_OrderAmino;
                    fromAminoMsg(object: _125.MsgSell_OrderAminoMsg): _125.MsgSell_Order;
                    fromProtoMsg(message: _125.MsgSell_OrderProtoMsg): _125.MsgSell_Order;
                    toProto(message: _125.MsgSell_Order): Uint8Array;
                    toProtoMsg(message: _125.MsgSell_Order): _125.MsgSell_OrderProtoMsg;
                };
                MsgSellResponse: {
                    encode(message: _125.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgSellResponse;
                    fromJSON(object: any): _125.MsgSellResponse;
                    toJSON(message: _125.MsgSellResponse): unknown;
                    fromPartial(object: Partial<_125.MsgSellResponse>): _125.MsgSellResponse;
                    fromAmino(object: _125.MsgSellResponseAmino): _125.MsgSellResponse;
                    toAmino(message: _125.MsgSellResponse): _125.MsgSellResponseAmino;
                    fromAminoMsg(object: _125.MsgSellResponseAminoMsg): _125.MsgSellResponse;
                    fromProtoMsg(message: _125.MsgSellResponseProtoMsg): _125.MsgSellResponse;
                    toProto(message: _125.MsgSellResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgSellResponse): _125.MsgSellResponseProtoMsg;
                };
                MsgUpdateSellOrders: {
                    encode(message: _125.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgUpdateSellOrders;
                    fromJSON(object: any): _125.MsgUpdateSellOrders;
                    toJSON(message: _125.MsgUpdateSellOrders): unknown;
                    fromPartial(object: Partial<_125.MsgUpdateSellOrders>): _125.MsgUpdateSellOrders;
                    fromAmino(object: _125.MsgUpdateSellOrdersAmino): _125.MsgUpdateSellOrders;
                    toAmino(message: _125.MsgUpdateSellOrders): _125.MsgUpdateSellOrdersAmino;
                    fromAminoMsg(object: _125.MsgUpdateSellOrdersAminoMsg): _125.MsgUpdateSellOrders;
                    toAminoMsg(message: _125.MsgUpdateSellOrders): _125.MsgUpdateSellOrdersAminoMsg;
                    fromProtoMsg(message: _125.MsgUpdateSellOrdersProtoMsg): _125.MsgUpdateSellOrders;
                    toProto(message: _125.MsgUpdateSellOrders): Uint8Array;
                    toProtoMsg(message: _125.MsgUpdateSellOrders): _125.MsgUpdateSellOrdersProtoMsg;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _125.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _125.MsgUpdateSellOrders_Update;
                    toJSON(message: _125.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: Partial<_125.MsgUpdateSellOrders_Update>): _125.MsgUpdateSellOrders_Update;
                    fromAmino(object: _125.MsgUpdateSellOrders_UpdateAmino): _125.MsgUpdateSellOrders_Update;
                    toAmino(message: _125.MsgUpdateSellOrders_Update): _125.MsgUpdateSellOrders_UpdateAmino;
                    fromAminoMsg(object: _125.MsgUpdateSellOrders_UpdateAminoMsg): _125.MsgUpdateSellOrders_Update;
                    fromProtoMsg(message: _125.MsgUpdateSellOrders_UpdateProtoMsg): _125.MsgUpdateSellOrders_Update;
                    toProto(message: _125.MsgUpdateSellOrders_Update): Uint8Array;
                    toProtoMsg(message: _125.MsgUpdateSellOrders_Update): _125.MsgUpdateSellOrders_UpdateProtoMsg;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _125.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _125.MsgUpdateSellOrdersResponse;
                    toJSON(_: _125.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: Partial<_125.MsgUpdateSellOrdersResponse>): _125.MsgUpdateSellOrdersResponse;
                    fromAmino(_: _125.MsgUpdateSellOrdersResponseAmino): _125.MsgUpdateSellOrdersResponse;
                    toAmino(_: _125.MsgUpdateSellOrdersResponse): _125.MsgUpdateSellOrdersResponseAmino;
                    fromAminoMsg(object: _125.MsgUpdateSellOrdersResponseAminoMsg): _125.MsgUpdateSellOrdersResponse;
                    fromProtoMsg(message: _125.MsgUpdateSellOrdersResponseProtoMsg): _125.MsgUpdateSellOrdersResponse;
                    toProto(message: _125.MsgUpdateSellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgUpdateSellOrdersResponse): _125.MsgUpdateSellOrdersResponseProtoMsg;
                };
                MsgCancelSellOrder: {
                    encode(message: _125.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgCancelSellOrder;
                    fromJSON(object: any): _125.MsgCancelSellOrder;
                    toJSON(message: _125.MsgCancelSellOrder): unknown;
                    fromPartial(object: Partial<_125.MsgCancelSellOrder>): _125.MsgCancelSellOrder;
                    fromAmino(object: _125.MsgCancelSellOrderAmino): _125.MsgCancelSellOrder;
                    toAmino(message: _125.MsgCancelSellOrder): _125.MsgCancelSellOrderAmino;
                    fromAminoMsg(object: _125.MsgCancelSellOrderAminoMsg): _125.MsgCancelSellOrder;
                    toAminoMsg(message: _125.MsgCancelSellOrder): _125.MsgCancelSellOrderAminoMsg;
                    fromProtoMsg(message: _125.MsgCancelSellOrderProtoMsg): _125.MsgCancelSellOrder;
                    toProto(message: _125.MsgCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _125.MsgCancelSellOrder): _125.MsgCancelSellOrderProtoMsg;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _125.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _125.MsgCancelSellOrderResponse;
                    toJSON(_: _125.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: Partial<_125.MsgCancelSellOrderResponse>): _125.MsgCancelSellOrderResponse;
                    fromAmino(_: _125.MsgCancelSellOrderResponseAmino): _125.MsgCancelSellOrderResponse;
                    toAmino(_: _125.MsgCancelSellOrderResponse): _125.MsgCancelSellOrderResponseAmino;
                    fromAminoMsg(object: _125.MsgCancelSellOrderResponseAminoMsg): _125.MsgCancelSellOrderResponse;
                    fromProtoMsg(message: _125.MsgCancelSellOrderResponseProtoMsg): _125.MsgCancelSellOrderResponse;
                    toProto(message: _125.MsgCancelSellOrderResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgCancelSellOrderResponse): _125.MsgCancelSellOrderResponseProtoMsg;
                };
                MsgBuyDirect: {
                    encode(message: _125.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgBuyDirect;
                    fromJSON(object: any): _125.MsgBuyDirect;
                    toJSON(message: _125.MsgBuyDirect): unknown;
                    fromPartial(object: Partial<_125.MsgBuyDirect>): _125.MsgBuyDirect;
                    fromAmino(object: _125.MsgBuyDirectAmino): _125.MsgBuyDirect;
                    toAmino(message: _125.MsgBuyDirect): _125.MsgBuyDirectAmino;
                    fromAminoMsg(object: _125.MsgBuyDirectAminoMsg): _125.MsgBuyDirect;
                    toAminoMsg(message: _125.MsgBuyDirect): _125.MsgBuyDirectAminoMsg;
                    fromProtoMsg(message: _125.MsgBuyDirectProtoMsg): _125.MsgBuyDirect;
                    toProto(message: _125.MsgBuyDirect): Uint8Array;
                    toProtoMsg(message: _125.MsgBuyDirect): _125.MsgBuyDirectProtoMsg;
                };
                MsgBuyDirect_Order: {
                    encode(message: _125.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgBuyDirect_Order;
                    fromJSON(object: any): _125.MsgBuyDirect_Order;
                    toJSON(message: _125.MsgBuyDirect_Order): unknown;
                    fromPartial(object: Partial<_125.MsgBuyDirect_Order>): _125.MsgBuyDirect_Order;
                    fromAmino(object: _125.MsgBuyDirect_OrderAmino): _125.MsgBuyDirect_Order;
                    toAmino(message: _125.MsgBuyDirect_Order): _125.MsgBuyDirect_OrderAmino;
                    fromAminoMsg(object: _125.MsgBuyDirect_OrderAminoMsg): _125.MsgBuyDirect_Order;
                    fromProtoMsg(message: _125.MsgBuyDirect_OrderProtoMsg): _125.MsgBuyDirect_Order;
                    toProto(message: _125.MsgBuyDirect_Order): Uint8Array;
                    toProtoMsg(message: _125.MsgBuyDirect_Order): _125.MsgBuyDirect_OrderProtoMsg;
                };
                MsgBuyDirectResponse: {
                    encode(_: _125.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgBuyDirectResponse;
                    fromJSON(_: any): _125.MsgBuyDirectResponse;
                    toJSON(_: _125.MsgBuyDirectResponse): unknown;
                    fromPartial(_: Partial<_125.MsgBuyDirectResponse>): _125.MsgBuyDirectResponse;
                    fromAmino(_: _125.MsgBuyDirectResponseAmino): _125.MsgBuyDirectResponse;
                    toAmino(_: _125.MsgBuyDirectResponse): _125.MsgBuyDirectResponseAmino;
                    fromAminoMsg(object: _125.MsgBuyDirectResponseAminoMsg): _125.MsgBuyDirectResponse;
                    fromProtoMsg(message: _125.MsgBuyDirectResponseProtoMsg): _125.MsgBuyDirectResponse;
                    toProto(message: _125.MsgBuyDirectResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgBuyDirectResponse): _125.MsgBuyDirectResponseProtoMsg;
                };
                MsgAddAllowedDenom: {
                    encode(message: _125.MsgAddAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgAddAllowedDenom;
                    fromJSON(object: any): _125.MsgAddAllowedDenom;
                    toJSON(message: _125.MsgAddAllowedDenom): unknown;
                    fromPartial(object: Partial<_125.MsgAddAllowedDenom>): _125.MsgAddAllowedDenom;
                    fromAmino(object: _125.MsgAddAllowedDenomAmino): _125.MsgAddAllowedDenom;
                    toAmino(message: _125.MsgAddAllowedDenom): _125.MsgAddAllowedDenomAmino;
                    fromAminoMsg(object: _125.MsgAddAllowedDenomAminoMsg): _125.MsgAddAllowedDenom;
                    toAminoMsg(message: _125.MsgAddAllowedDenom): _125.MsgAddAllowedDenomAminoMsg;
                    fromProtoMsg(message: _125.MsgAddAllowedDenomProtoMsg): _125.MsgAddAllowedDenom;
                    toProto(message: _125.MsgAddAllowedDenom): Uint8Array;
                    toProtoMsg(message: _125.MsgAddAllowedDenom): _125.MsgAddAllowedDenomProtoMsg;
                };
                MsgAddAllowedDenomResponse: {
                    encode(_: _125.MsgAddAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgAddAllowedDenomResponse;
                    fromJSON(_: any): _125.MsgAddAllowedDenomResponse;
                    toJSON(_: _125.MsgAddAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_125.MsgAddAllowedDenomResponse>): _125.MsgAddAllowedDenomResponse;
                    fromAmino(_: _125.MsgAddAllowedDenomResponseAmino): _125.MsgAddAllowedDenomResponse;
                    toAmino(_: _125.MsgAddAllowedDenomResponse): _125.MsgAddAllowedDenomResponseAmino;
                    fromAminoMsg(object: _125.MsgAddAllowedDenomResponseAminoMsg): _125.MsgAddAllowedDenomResponse;
                    fromProtoMsg(message: _125.MsgAddAllowedDenomResponseProtoMsg): _125.MsgAddAllowedDenomResponse;
                    toProto(message: _125.MsgAddAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgAddAllowedDenomResponse): _125.MsgAddAllowedDenomResponseProtoMsg;
                };
                MsgRemoveAllowedDenom: {
                    encode(message: _125.MsgRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgRemoveAllowedDenom;
                    fromJSON(object: any): _125.MsgRemoveAllowedDenom;
                    toJSON(message: _125.MsgRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_125.MsgRemoveAllowedDenom>): _125.MsgRemoveAllowedDenom;
                    fromAmino(object: _125.MsgRemoveAllowedDenomAmino): _125.MsgRemoveAllowedDenom;
                    toAmino(message: _125.MsgRemoveAllowedDenom): _125.MsgRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _125.MsgRemoveAllowedDenomAminoMsg): _125.MsgRemoveAllowedDenom;
                    toAminoMsg(message: _125.MsgRemoveAllowedDenom): _125.MsgRemoveAllowedDenomAminoMsg;
                    fromProtoMsg(message: _125.MsgRemoveAllowedDenomProtoMsg): _125.MsgRemoveAllowedDenom;
                    toProto(message: _125.MsgRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _125.MsgRemoveAllowedDenom): _125.MsgRemoveAllowedDenomProtoMsg;
                };
                MsgRemoveAllowedDenomResponse: {
                    encode(_: _125.MsgRemoveAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.MsgRemoveAllowedDenomResponse;
                    fromJSON(_: any): _125.MsgRemoveAllowedDenomResponse;
                    toJSON(_: _125.MsgRemoveAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_125.MsgRemoveAllowedDenomResponse>): _125.MsgRemoveAllowedDenomResponse;
                    fromAmino(_: _125.MsgRemoveAllowedDenomResponseAmino): _125.MsgRemoveAllowedDenomResponse;
                    toAmino(_: _125.MsgRemoveAllowedDenomResponse): _125.MsgRemoveAllowedDenomResponseAmino;
                    fromAminoMsg(object: _125.MsgRemoveAllowedDenomResponseAminoMsg): _125.MsgRemoveAllowedDenomResponse;
                    fromProtoMsg(message: _125.MsgRemoveAllowedDenomResponseProtoMsg): _125.MsgRemoveAllowedDenomResponse;
                    toProto(message: _125.MsgRemoveAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgRemoveAllowedDenomResponse): _125.MsgRemoveAllowedDenomResponseProtoMsg;
                };
                SellOrder: {
                    encode(message: _124.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.SellOrder;
                    fromJSON(object: any): _124.SellOrder;
                    toJSON(message: _124.SellOrder): unknown;
                    fromPartial(object: Partial<_124.SellOrder>): _124.SellOrder;
                    fromAmino(object: _124.SellOrderAmino): _124.SellOrder;
                    toAmino(message: _124.SellOrder): _124.SellOrderAmino;
                    fromAminoMsg(object: _124.SellOrderAminoMsg): _124.SellOrder;
                    fromProtoMsg(message: _124.SellOrderProtoMsg): _124.SellOrder;
                    toProto(message: _124.SellOrder): Uint8Array;
                    toProtoMsg(message: _124.SellOrder): _124.SellOrderProtoMsg;
                };
                AllowedDenom: {
                    encode(message: _124.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.AllowedDenom;
                    fromJSON(object: any): _124.AllowedDenom;
                    toJSON(message: _124.AllowedDenom): unknown;
                    fromPartial(object: Partial<_124.AllowedDenom>): _124.AllowedDenom;
                    fromAmino(object: _124.AllowedDenomAmino): _124.AllowedDenom;
                    toAmino(message: _124.AllowedDenom): _124.AllowedDenomAmino;
                    fromAminoMsg(object: _124.AllowedDenomAminoMsg): _124.AllowedDenom;
                    fromProtoMsg(message: _124.AllowedDenomProtoMsg): _124.AllowedDenom;
                    toProto(message: _124.AllowedDenom): Uint8Array;
                    toProtoMsg(message: _124.AllowedDenom): _124.AllowedDenomProtoMsg;
                };
                Market: {
                    encode(message: _124.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.Market;
                    fromJSON(object: any): _124.Market;
                    toJSON(message: _124.Market): unknown;
                    fromPartial(object: Partial<_124.Market>): _124.Market;
                    fromAmino(object: _124.MarketAmino): _124.Market;
                    toAmino(message: _124.Market): _124.MarketAmino;
                    fromAminoMsg(object: _124.MarketAminoMsg): _124.Market;
                    fromProtoMsg(message: _124.MarketProtoMsg): _124.Market;
                    toProto(message: _124.Market): Uint8Array;
                    toProtoMsg(message: _124.Market): _124.MarketProtoMsg;
                };
                QuerySellOrderRequest: {
                    encode(message: _123.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrderRequest;
                    fromJSON(object: any): _123.QuerySellOrderRequest;
                    toJSON(message: _123.QuerySellOrderRequest): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrderRequest>): _123.QuerySellOrderRequest;
                    fromAmino(object: _123.QuerySellOrderRequestAmino): _123.QuerySellOrderRequest;
                    toAmino(message: _123.QuerySellOrderRequest): _123.QuerySellOrderRequestAmino;
                    fromAminoMsg(object: _123.QuerySellOrderRequestAminoMsg): _123.QuerySellOrderRequest;
                    fromProtoMsg(message: _123.QuerySellOrderRequestProtoMsg): _123.QuerySellOrderRequest;
                    toProto(message: _123.QuerySellOrderRequest): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrderRequest): _123.QuerySellOrderRequestProtoMsg;
                };
                QuerySellOrderResponse: {
                    encode(message: _123.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrderResponse;
                    fromJSON(object: any): _123.QuerySellOrderResponse;
                    toJSON(message: _123.QuerySellOrderResponse): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrderResponse>): _123.QuerySellOrderResponse;
                    fromAmino(object: _123.QuerySellOrderResponseAmino): _123.QuerySellOrderResponse;
                    toAmino(message: _123.QuerySellOrderResponse): _123.QuerySellOrderResponseAmino;
                    fromAminoMsg(object: _123.QuerySellOrderResponseAminoMsg): _123.QuerySellOrderResponse;
                    fromProtoMsg(message: _123.QuerySellOrderResponseProtoMsg): _123.QuerySellOrderResponse;
                    toProto(message: _123.QuerySellOrderResponse): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrderResponse): _123.QuerySellOrderResponseProtoMsg;
                };
                QuerySellOrdersRequest: {
                    encode(message: _123.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrdersRequest;
                    fromJSON(object: any): _123.QuerySellOrdersRequest;
                    toJSON(message: _123.QuerySellOrdersRequest): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrdersRequest>): _123.QuerySellOrdersRequest;
                    fromAmino(object: _123.QuerySellOrdersRequestAmino): _123.QuerySellOrdersRequest;
                    toAmino(message: _123.QuerySellOrdersRequest): _123.QuerySellOrdersRequestAmino;
                    fromAminoMsg(object: _123.QuerySellOrdersRequestAminoMsg): _123.QuerySellOrdersRequest;
                    fromProtoMsg(message: _123.QuerySellOrdersRequestProtoMsg): _123.QuerySellOrdersRequest;
                    toProto(message: _123.QuerySellOrdersRequest): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrdersRequest): _123.QuerySellOrdersRequestProtoMsg;
                };
                QuerySellOrdersResponse: {
                    encode(message: _123.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrdersResponse;
                    fromJSON(object: any): _123.QuerySellOrdersResponse;
                    toJSON(message: _123.QuerySellOrdersResponse): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrdersResponse>): _123.QuerySellOrdersResponse;
                    fromAmino(object: _123.QuerySellOrdersResponseAmino): _123.QuerySellOrdersResponse;
                    toAmino(message: _123.QuerySellOrdersResponse): _123.QuerySellOrdersResponseAmino;
                    fromAminoMsg(object: _123.QuerySellOrdersResponseAminoMsg): _123.QuerySellOrdersResponse;
                    fromProtoMsg(message: _123.QuerySellOrdersResponseProtoMsg): _123.QuerySellOrdersResponse;
                    toProto(message: _123.QuerySellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrdersResponse): _123.QuerySellOrdersResponseProtoMsg;
                };
                QuerySellOrdersByBatchRequest: {
                    encode(message: _123.QuerySellOrdersByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrdersByBatchRequest;
                    fromJSON(object: any): _123.QuerySellOrdersByBatchRequest;
                    toJSON(message: _123.QuerySellOrdersByBatchRequest): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrdersByBatchRequest>): _123.QuerySellOrdersByBatchRequest;
                    fromAmino(object: _123.QuerySellOrdersByBatchRequestAmino): _123.QuerySellOrdersByBatchRequest;
                    toAmino(message: _123.QuerySellOrdersByBatchRequest): _123.QuerySellOrdersByBatchRequestAmino;
                    fromAminoMsg(object: _123.QuerySellOrdersByBatchRequestAminoMsg): _123.QuerySellOrdersByBatchRequest;
                    fromProtoMsg(message: _123.QuerySellOrdersByBatchRequestProtoMsg): _123.QuerySellOrdersByBatchRequest;
                    toProto(message: _123.QuerySellOrdersByBatchRequest): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrdersByBatchRequest): _123.QuerySellOrdersByBatchRequestProtoMsg;
                };
                QuerySellOrdersByBatchResponse: {
                    encode(message: _123.QuerySellOrdersByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrdersByBatchResponse;
                    fromJSON(object: any): _123.QuerySellOrdersByBatchResponse;
                    toJSON(message: _123.QuerySellOrdersByBatchResponse): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrdersByBatchResponse>): _123.QuerySellOrdersByBatchResponse;
                    fromAmino(object: _123.QuerySellOrdersByBatchResponseAmino): _123.QuerySellOrdersByBatchResponse;
                    toAmino(message: _123.QuerySellOrdersByBatchResponse): _123.QuerySellOrdersByBatchResponseAmino;
                    fromAminoMsg(object: _123.QuerySellOrdersByBatchResponseAminoMsg): _123.QuerySellOrdersByBatchResponse;
                    fromProtoMsg(message: _123.QuerySellOrdersByBatchResponseProtoMsg): _123.QuerySellOrdersByBatchResponse;
                    toProto(message: _123.QuerySellOrdersByBatchResponse): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrdersByBatchResponse): _123.QuerySellOrdersByBatchResponseProtoMsg;
                };
                QuerySellOrdersBySellerRequest: {
                    encode(message: _123.QuerySellOrdersBySellerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrdersBySellerRequest;
                    fromJSON(object: any): _123.QuerySellOrdersBySellerRequest;
                    toJSON(message: _123.QuerySellOrdersBySellerRequest): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrdersBySellerRequest>): _123.QuerySellOrdersBySellerRequest;
                    fromAmino(object: _123.QuerySellOrdersBySellerRequestAmino): _123.QuerySellOrdersBySellerRequest;
                    toAmino(message: _123.QuerySellOrdersBySellerRequest): _123.QuerySellOrdersBySellerRequestAmino;
                    fromAminoMsg(object: _123.QuerySellOrdersBySellerRequestAminoMsg): _123.QuerySellOrdersBySellerRequest;
                    fromProtoMsg(message: _123.QuerySellOrdersBySellerRequestProtoMsg): _123.QuerySellOrdersBySellerRequest;
                    toProto(message: _123.QuerySellOrdersBySellerRequest): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrdersBySellerRequest): _123.QuerySellOrdersBySellerRequestProtoMsg;
                };
                QuerySellOrdersBySellerResponse: {
                    encode(message: _123.QuerySellOrdersBySellerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QuerySellOrdersBySellerResponse;
                    fromJSON(object: any): _123.QuerySellOrdersBySellerResponse;
                    toJSON(message: _123.QuerySellOrdersBySellerResponse): unknown;
                    fromPartial(object: Partial<_123.QuerySellOrdersBySellerResponse>): _123.QuerySellOrdersBySellerResponse;
                    fromAmino(object: _123.QuerySellOrdersBySellerResponseAmino): _123.QuerySellOrdersBySellerResponse;
                    toAmino(message: _123.QuerySellOrdersBySellerResponse): _123.QuerySellOrdersBySellerResponseAmino;
                    fromAminoMsg(object: _123.QuerySellOrdersBySellerResponseAminoMsg): _123.QuerySellOrdersBySellerResponse;
                    fromProtoMsg(message: _123.QuerySellOrdersBySellerResponseProtoMsg): _123.QuerySellOrdersBySellerResponse;
                    toProto(message: _123.QuerySellOrdersBySellerResponse): Uint8Array;
                    toProtoMsg(message: _123.QuerySellOrdersBySellerResponse): _123.QuerySellOrdersBySellerResponseProtoMsg;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _123.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _123.QueryAllowedDenomsRequest;
                    toJSON(message: _123.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: Partial<_123.QueryAllowedDenomsRequest>): _123.QueryAllowedDenomsRequest;
                    fromAmino(object: _123.QueryAllowedDenomsRequestAmino): _123.QueryAllowedDenomsRequest;
                    toAmino(message: _123.QueryAllowedDenomsRequest): _123.QueryAllowedDenomsRequestAmino;
                    fromAminoMsg(object: _123.QueryAllowedDenomsRequestAminoMsg): _123.QueryAllowedDenomsRequest;
                    fromProtoMsg(message: _123.QueryAllowedDenomsRequestProtoMsg): _123.QueryAllowedDenomsRequest;
                    toProto(message: _123.QueryAllowedDenomsRequest): Uint8Array;
                    toProtoMsg(message: _123.QueryAllowedDenomsRequest): _123.QueryAllowedDenomsRequestProtoMsg;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _123.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _123.QueryAllowedDenomsResponse;
                    toJSON(message: _123.QueryAllowedDenomsResponse): unknown;
                    fromPartial(object: Partial<_123.QueryAllowedDenomsResponse>): _123.QueryAllowedDenomsResponse;
                    fromAmino(object: _123.QueryAllowedDenomsResponseAmino): _123.QueryAllowedDenomsResponse;
                    toAmino(message: _123.QueryAllowedDenomsResponse): _123.QueryAllowedDenomsResponseAmino;
                    fromAminoMsg(object: _123.QueryAllowedDenomsResponseAminoMsg): _123.QueryAllowedDenomsResponse;
                    fromProtoMsg(message: _123.QueryAllowedDenomsResponseProtoMsg): _123.QueryAllowedDenomsResponse;
                    toProto(message: _123.QueryAllowedDenomsResponse): Uint8Array;
                    toProtoMsg(message: _123.QueryAllowedDenomsResponse): _123.QueryAllowedDenomsResponseProtoMsg;
                };
                SellOrderInfo: {
                    encode(message: _123.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.SellOrderInfo;
                    fromJSON(object: any): _123.SellOrderInfo;
                    toJSON(message: _123.SellOrderInfo): unknown;
                    fromPartial(object: Partial<_123.SellOrderInfo>): _123.SellOrderInfo;
                    fromAmino(object: _123.SellOrderInfoAmino): _123.SellOrderInfo;
                    toAmino(message: _123.SellOrderInfo): _123.SellOrderInfoAmino;
                    fromAminoMsg(object: _123.SellOrderInfoAminoMsg): _123.SellOrderInfo;
                    fromProtoMsg(message: _123.SellOrderInfoProtoMsg): _123.SellOrderInfo;
                    toProto(message: _123.SellOrderInfo): Uint8Array;
                    toProtoMsg(message: _123.SellOrderInfo): _123.SellOrderInfoProtoMsg;
                };
                EventSell: {
                    encode(message: _122.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.EventSell;
                    fromJSON(object: any): _122.EventSell;
                    toJSON(message: _122.EventSell): unknown;
                    fromPartial(object: Partial<_122.EventSell>): _122.EventSell;
                    fromAmino(object: _122.EventSellAmino): _122.EventSell;
                    toAmino(message: _122.EventSell): _122.EventSellAmino;
                    fromAminoMsg(object: _122.EventSellAminoMsg): _122.EventSell;
                    fromProtoMsg(message: _122.EventSellProtoMsg): _122.EventSell;
                    toProto(message: _122.EventSell): Uint8Array;
                    toProtoMsg(message: _122.EventSell): _122.EventSellProtoMsg;
                };
                EventBuyDirect: {
                    encode(message: _122.EventBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.EventBuyDirect;
                    fromJSON(object: any): _122.EventBuyDirect;
                    toJSON(message: _122.EventBuyDirect): unknown;
                    fromPartial(object: Partial<_122.EventBuyDirect>): _122.EventBuyDirect;
                    fromAmino(object: _122.EventBuyDirectAmino): _122.EventBuyDirect;
                    toAmino(message: _122.EventBuyDirect): _122.EventBuyDirectAmino;
                    fromAminoMsg(object: _122.EventBuyDirectAminoMsg): _122.EventBuyDirect;
                    fromProtoMsg(message: _122.EventBuyDirectProtoMsg): _122.EventBuyDirect;
                    toProto(message: _122.EventBuyDirect): Uint8Array;
                    toProtoMsg(message: _122.EventBuyDirect): _122.EventBuyDirectProtoMsg;
                };
                EventUpdateSellOrder: {
                    encode(message: _122.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.EventUpdateSellOrder;
                    fromJSON(object: any): _122.EventUpdateSellOrder;
                    toJSON(message: _122.EventUpdateSellOrder): unknown;
                    fromPartial(object: Partial<_122.EventUpdateSellOrder>): _122.EventUpdateSellOrder;
                    fromAmino(object: _122.EventUpdateSellOrderAmino): _122.EventUpdateSellOrder;
                    toAmino(message: _122.EventUpdateSellOrder): _122.EventUpdateSellOrderAmino;
                    fromAminoMsg(object: _122.EventUpdateSellOrderAminoMsg): _122.EventUpdateSellOrder;
                    fromProtoMsg(message: _122.EventUpdateSellOrderProtoMsg): _122.EventUpdateSellOrder;
                    toProto(message: _122.EventUpdateSellOrder): Uint8Array;
                    toProtoMsg(message: _122.EventUpdateSellOrder): _122.EventUpdateSellOrderProtoMsg;
                };
                EventCancelSellOrder: {
                    encode(message: _122.EventCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.EventCancelSellOrder;
                    fromJSON(object: any): _122.EventCancelSellOrder;
                    toJSON(message: _122.EventCancelSellOrder): unknown;
                    fromPartial(object: Partial<_122.EventCancelSellOrder>): _122.EventCancelSellOrder;
                    fromAmino(object: _122.EventCancelSellOrderAmino): _122.EventCancelSellOrder;
                    toAmino(message: _122.EventCancelSellOrder): _122.EventCancelSellOrderAmino;
                    fromAminoMsg(object: _122.EventCancelSellOrderAminoMsg): _122.EventCancelSellOrder;
                    fromProtoMsg(message: _122.EventCancelSellOrderProtoMsg): _122.EventCancelSellOrder;
                    toProto(message: _122.EventCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _122.EventCancelSellOrder): _122.EventCancelSellOrderProtoMsg;
                };
                EventAllowDenom: {
                    encode(message: _122.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.EventAllowDenom;
                    fromJSON(object: any): _122.EventAllowDenom;
                    toJSON(message: _122.EventAllowDenom): unknown;
                    fromPartial(object: Partial<_122.EventAllowDenom>): _122.EventAllowDenom;
                    fromAmino(object: _122.EventAllowDenomAmino): _122.EventAllowDenom;
                    toAmino(message: _122.EventAllowDenom): _122.EventAllowDenomAmino;
                    fromAminoMsg(object: _122.EventAllowDenomAminoMsg): _122.EventAllowDenom;
                    fromProtoMsg(message: _122.EventAllowDenomProtoMsg): _122.EventAllowDenom;
                    toProto(message: _122.EventAllowDenom): Uint8Array;
                    toProtoMsg(message: _122.EventAllowDenom): _122.EventAllowDenomProtoMsg;
                };
                EventRemoveAllowedDenom: {
                    encode(message: _122.EventRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.EventRemoveAllowedDenom;
                    fromJSON(object: any): _122.EventRemoveAllowedDenom;
                    toJSON(message: _122.EventRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_122.EventRemoveAllowedDenom>): _122.EventRemoveAllowedDenom;
                    fromAmino(object: _122.EventRemoveAllowedDenomAmino): _122.EventRemoveAllowedDenom;
                    toAmino(message: _122.EventRemoveAllowedDenom): _122.EventRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _122.EventRemoveAllowedDenomAminoMsg): _122.EventRemoveAllowedDenom;
                    fromProtoMsg(message: _122.EventRemoveAllowedDenomProtoMsg): _122.EventRemoveAllowedDenom;
                    toProto(message: _122.EventRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _122.EventRemoveAllowedDenom): _122.EventRemoveAllowedDenomProtoMsg;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _127.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _127.BuyOrderSellOrderMatch;
                    toJSON(message: _127.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: Partial<_127.BuyOrderSellOrderMatch>): _127.BuyOrderSellOrderMatch;
                    fromAmino(object: _127.BuyOrderSellOrderMatchAmino): _127.BuyOrderSellOrderMatch;
                    toAmino(message: _127.BuyOrderSellOrderMatch): _127.BuyOrderSellOrderMatchAmino;
                    fromAminoMsg(object: _127.BuyOrderSellOrderMatchAminoMsg): _127.BuyOrderSellOrderMatch;
                    fromProtoMsg(message: _127.BuyOrderSellOrderMatchProtoMsg): _127.BuyOrderSellOrderMatch;
                    toProto(message: _127.BuyOrderSellOrderMatch): Uint8Array;
                    toProtoMsg(message: _127.BuyOrderSellOrderMatch): _127.BuyOrderSellOrderMatchProtoMsg;
                };
                BuyOrderClassSelector: {
                    encode(message: _127.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.BuyOrderClassSelector;
                    fromJSON(object: any): _127.BuyOrderClassSelector;
                    toJSON(message: _127.BuyOrderClassSelector): unknown;
                    fromPartial(object: Partial<_127.BuyOrderClassSelector>): _127.BuyOrderClassSelector;
                    fromAmino(object: _127.BuyOrderClassSelectorAmino): _127.BuyOrderClassSelector;
                    toAmino(message: _127.BuyOrderClassSelector): _127.BuyOrderClassSelectorAmino;
                    fromAminoMsg(object: _127.BuyOrderClassSelectorAminoMsg): _127.BuyOrderClassSelector;
                    fromProtoMsg(message: _127.BuyOrderClassSelectorProtoMsg): _127.BuyOrderClassSelector;
                    toProto(message: _127.BuyOrderClassSelector): Uint8Array;
                    toProtoMsg(message: _127.BuyOrderClassSelector): _127.BuyOrderClassSelectorProtoMsg;
                };
                BuyOrderProjectSelector: {
                    encode(message: _127.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.BuyOrderProjectSelector;
                    fromJSON(object: any): _127.BuyOrderProjectSelector;
                    toJSON(message: _127.BuyOrderProjectSelector): unknown;
                    fromPartial(object: Partial<_127.BuyOrderProjectSelector>): _127.BuyOrderProjectSelector;
                    fromAmino(object: _127.BuyOrderProjectSelectorAmino): _127.BuyOrderProjectSelector;
                    toAmino(message: _127.BuyOrderProjectSelector): _127.BuyOrderProjectSelectorAmino;
                    fromAminoMsg(object: _127.BuyOrderProjectSelectorAminoMsg): _127.BuyOrderProjectSelector;
                    fromProtoMsg(message: _127.BuyOrderProjectSelectorProtoMsg): _127.BuyOrderProjectSelector;
                    toProto(message: _127.BuyOrderProjectSelector): Uint8Array;
                    toProtoMsg(message: _127.BuyOrderProjectSelector): _127.BuyOrderProjectSelectorProtoMsg;
                };
                BuyOrderBatchSelector: {
                    encode(message: _127.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.BuyOrderBatchSelector;
                    fromJSON(object: any): _127.BuyOrderBatchSelector;
                    toJSON(message: _127.BuyOrderBatchSelector): unknown;
                    fromPartial(object: Partial<_127.BuyOrderBatchSelector>): _127.BuyOrderBatchSelector;
                    fromAmino(object: _127.BuyOrderBatchSelectorAmino): _127.BuyOrderBatchSelector;
                    toAmino(message: _127.BuyOrderBatchSelector): _127.BuyOrderBatchSelectorAmino;
                    fromAminoMsg(object: _127.BuyOrderBatchSelectorAminoMsg): _127.BuyOrderBatchSelector;
                    fromProtoMsg(message: _127.BuyOrderBatchSelectorProtoMsg): _127.BuyOrderBatchSelector;
                    toProto(message: _127.BuyOrderBatchSelector): Uint8Array;
                    toProtoMsg(message: _127.BuyOrderBatchSelector): _127.BuyOrderBatchSelectorProtoMsg;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _131.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _131.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _131.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _131.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _131.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _131.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _131.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _131.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _131.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _131.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _131.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _131.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _131.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _131.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _131.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _131.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _131.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _131.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _131.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _131.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _131.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _131.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _131.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _131.MsgCreateClass): {
                        typeUrl: string;
                        value: _131.MsgCreateClass;
                    };
                    createProject(value: _131.MsgCreateProject): {
                        typeUrl: string;
                        value: _131.MsgCreateProject;
                    };
                    createBatch(value: _131.MsgCreateBatch): {
                        typeUrl: string;
                        value: _131.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _131.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _131.MsgMintBatchCredits;
                    };
                    sealBatch(value: _131.MsgSealBatch): {
                        typeUrl: string;
                        value: _131.MsgSealBatch;
                    };
                    send(value: _131.MsgSend): {
                        typeUrl: string;
                        value: _131.MsgSend;
                    };
                    retire(value: _131.MsgRetire): {
                        typeUrl: string;
                        value: _131.MsgRetire;
                    };
                    cancel(value: _131.MsgCancel): {
                        typeUrl: string;
                        value: _131.MsgCancel;
                    };
                    updateClassAdmin(value: _131.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _131.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _131.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _131.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _131.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _131.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _131.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _131.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _131.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _131.MsgBridge): {
                        typeUrl: string;
                        value: _131.MsgBridge;
                    };
                    bridgeReceive(value: _131.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _131.MsgBridgeReceive;
                    };
                    addCreditType(value: _131.MsgAddCreditType): {
                        typeUrl: string;
                        value: _131.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _131.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _131.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _131.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _131.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _131.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _131.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _131.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _131.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _131.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _131.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _131.MsgRemoveAllowedBridgeChain;
                    };
                };
                toJSON: {
                    createClass(value: _131.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _131.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _131.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _131.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _131.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _131.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _131.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _131.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _131.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _131.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _131.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _131.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _131.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBatchMetadata(value: _131.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridge(value: _131.MsgBridge): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridgeReceive(value: _131.MsgBridgeReceive): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCreditType(value: _131.MsgAddCreditType): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setClassCreatorAllowlist(value: _131.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addClassCreator(value: _131.MsgAddClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeClassCreator(value: _131.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassFee(value: _131.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addAllowedBridgeChain(value: _131.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAllowedBridgeChain(value: _131.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _131.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _131.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _131.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _131.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _131.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _131.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateBatchMetadata;
                    };
                    bridge(value: any): {
                        typeUrl: string;
                        value: _131.MsgBridge;
                    };
                    bridgeReceive(value: any): {
                        typeUrl: string;
                        value: _131.MsgBridgeReceive;
                    };
                    addCreditType(value: any): {
                        typeUrl: string;
                        value: _131.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: any): {
                        typeUrl: string;
                        value: _131.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: any): {
                        typeUrl: string;
                        value: _131.MsgAddClassCreator;
                    };
                    removeClassCreator(value: any): {
                        typeUrl: string;
                        value: _131.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: any): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _131.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _131.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _131.MsgCreateClass): {
                        typeUrl: string;
                        value: _131.MsgCreateClass;
                    };
                    createProject(value: _131.MsgCreateProject): {
                        typeUrl: string;
                        value: _131.MsgCreateProject;
                    };
                    createBatch(value: _131.MsgCreateBatch): {
                        typeUrl: string;
                        value: _131.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _131.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _131.MsgMintBatchCredits;
                    };
                    sealBatch(value: _131.MsgSealBatch): {
                        typeUrl: string;
                        value: _131.MsgSealBatch;
                    };
                    send(value: _131.MsgSend): {
                        typeUrl: string;
                        value: _131.MsgSend;
                    };
                    retire(value: _131.MsgRetire): {
                        typeUrl: string;
                        value: _131.MsgRetire;
                    };
                    cancel(value: _131.MsgCancel): {
                        typeUrl: string;
                        value: _131.MsgCancel;
                    };
                    updateClassAdmin(value: _131.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _131.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _131.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _131.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _131.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _131.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _131.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _131.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _131.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _131.MsgBridge): {
                        typeUrl: string;
                        value: _131.MsgBridge;
                    };
                    bridgeReceive(value: _131.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _131.MsgBridgeReceive;
                    };
                    addCreditType(value: _131.MsgAddCreditType): {
                        typeUrl: string;
                        value: _131.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _131.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _131.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _131.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _131.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _131.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _131.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _131.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _131.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _131.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _131.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _131.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _131.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreateClass) => _131.MsgCreateClassAmino;
                    fromAmino: (object: _131.MsgCreateClassAmino) => _131.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreateProject) => _131.MsgCreateProjectAmino;
                    fromAmino: (object: _131.MsgCreateProjectAmino) => _131.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreateBatch) => _131.MsgCreateBatchAmino;
                    fromAmino: (object: _131.MsgCreateBatchAmino) => _131.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: (message: _131.MsgMintBatchCredits) => _131.MsgMintBatchCreditsAmino;
                    fromAmino: (object: _131.MsgMintBatchCreditsAmino) => _131.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: (message: _131.MsgSealBatch) => _131.MsgSealBatchAmino;
                    fromAmino: (object: _131.MsgSealBatchAmino) => _131.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _131.MsgSend) => _131.MsgSendAmino;
                    fromAmino: (object: _131.MsgSendAmino) => _131.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _131.MsgRetire) => _131.MsgRetireAmino;
                    fromAmino: (object: _131.MsgRetireAmino) => _131.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCancel) => _131.MsgCancelAmino;
                    fromAmino: (object: _131.MsgCancelAmino) => _131.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateClassAdmin) => _131.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _131.MsgUpdateClassAdminAmino) => _131.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateClassIssuers) => _131.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _131.MsgUpdateClassIssuersAmino) => _131.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateClassMetadata) => _131.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _131.MsgUpdateClassMetadataAmino) => _131.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateProjectAdmin) => _131.MsgUpdateProjectAdminAmino;
                    fromAmino: (object: _131.MsgUpdateProjectAdminAmino) => _131.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateProjectMetadata) => _131.MsgUpdateProjectMetadataAmino;
                    fromAmino: (object: _131.MsgUpdateProjectMetadataAmino) => _131.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateBatchMetadata) => _131.MsgUpdateBatchMetadataAmino;
                    fromAmino: (object: _131.MsgUpdateBatchMetadataAmino) => _131.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: (message: _131.MsgBridge) => _131.MsgBridgeAmino;
                    fromAmino: (object: _131.MsgBridgeAmino) => _131.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: (message: _131.MsgBridgeReceive) => _131.MsgBridgeReceiveAmino;
                    fromAmino: (object: _131.MsgBridgeReceiveAmino) => _131.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: (message: _131.MsgAddCreditType) => _131.MsgAddCreditTypeAmino;
                    fromAmino: (object: _131.MsgAddCreditTypeAmino) => _131.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: (message: _131.MsgSetClassCreatorAllowlist) => _131.MsgSetClassCreatorAllowlistAmino;
                    fromAmino: (object: _131.MsgSetClassCreatorAllowlistAmino) => _131.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: (message: _131.MsgAddClassCreator) => _131.MsgAddClassCreatorAmino;
                    fromAmino: (object: _131.MsgAddClassCreatorAmino) => _131.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: (message: _131.MsgRemoveClassCreator) => _131.MsgRemoveClassCreatorAmino;
                    fromAmino: (object: _131.MsgRemoveClassCreatorAmino) => _131.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: (message: _131.MsgUpdateClassFee) => _131.MsgUpdateClassFeeAmino;
                    fromAmino: (object: _131.MsgUpdateClassFeeAmino) => _131.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _131.MsgAddAllowedBridgeChain) => _131.MsgAddAllowedBridgeChainAmino;
                    fromAmino: (object: _131.MsgAddAllowedBridgeChainAmino) => _131.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _131.MsgRemoveAllowedBridgeChain) => _131.MsgRemoveAllowedBridgeChainAmino;
                    fromAmino: (object: _131.MsgRemoveAllowedBridgeChainAmino) => _131.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Params;
                fromJSON(object: any): _132.Params;
                toJSON(message: _132.Params): unknown;
                fromPartial(object: Partial<_132.Params>): _132.Params;
                fromAmino(object: _132.ParamsAmino): _132.Params;
                toAmino(message: _132.Params): _132.ParamsAmino;
                fromAminoMsg(object: _132.ParamsAminoMsg): _132.Params;
                fromProtoMsg(message: _132.ParamsProtoMsg): _132.Params;
                toProto(message: _132.Params): Uint8Array;
                toProtoMsg(message: _132.Params): _132.ParamsProtoMsg;
            };
            Credits: {
                encode(message: _132.Credits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Credits;
                fromJSON(object: any): _132.Credits;
                toJSON(message: _132.Credits): unknown;
                fromPartial(object: Partial<_132.Credits>): _132.Credits;
                fromAmino(object: _132.CreditsAmino): _132.Credits;
                toAmino(message: _132.Credits): _132.CreditsAmino;
                fromAminoMsg(object: _132.CreditsAminoMsg): _132.Credits;
                fromProtoMsg(message: _132.CreditsProtoMsg): _132.Credits;
                toProto(message: _132.Credits): Uint8Array;
                toProtoMsg(message: _132.Credits): _132.CreditsProtoMsg;
            };
            BatchIssuance: {
                encode(message: _132.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.BatchIssuance;
                fromJSON(object: any): _132.BatchIssuance;
                toJSON(message: _132.BatchIssuance): unknown;
                fromPartial(object: Partial<_132.BatchIssuance>): _132.BatchIssuance;
                fromAmino(object: _132.BatchIssuanceAmino): _132.BatchIssuance;
                toAmino(message: _132.BatchIssuance): _132.BatchIssuanceAmino;
                fromAminoMsg(object: _132.BatchIssuanceAminoMsg): _132.BatchIssuance;
                fromProtoMsg(message: _132.BatchIssuanceProtoMsg): _132.BatchIssuance;
                toProto(message: _132.BatchIssuance): Uint8Array;
                toProtoMsg(message: _132.BatchIssuance): _132.BatchIssuanceProtoMsg;
            };
            OriginTx: {
                encode(message: _132.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.OriginTx;
                fromJSON(object: any): _132.OriginTx;
                toJSON(message: _132.OriginTx): unknown;
                fromPartial(object: Partial<_132.OriginTx>): _132.OriginTx;
                fromAmino(object: _132.OriginTxAmino): _132.OriginTx;
                toAmino(message: _132.OriginTx): _132.OriginTxAmino;
                fromAminoMsg(object: _132.OriginTxAminoMsg): _132.OriginTx;
                fromProtoMsg(message: _132.OriginTxProtoMsg): _132.OriginTx;
                toProto(message: _132.OriginTx): Uint8Array;
                toProtoMsg(message: _132.OriginTx): _132.OriginTxProtoMsg;
            };
            CreditTypeProposal: {
                encode(message: _132.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.CreditTypeProposal;
                fromJSON(object: any): _132.CreditTypeProposal;
                toJSON(message: _132.CreditTypeProposal): unknown;
                fromPartial(object: Partial<_132.CreditTypeProposal>): _132.CreditTypeProposal;
                fromAmino(object: _132.CreditTypeProposalAmino): _132.CreditTypeProposal;
                toAmino(message: _132.CreditTypeProposal): _132.CreditTypeProposalAmino;
                fromAminoMsg(object: _132.CreditTypeProposalAminoMsg): _132.CreditTypeProposal;
                fromProtoMsg(message: _132.CreditTypeProposalProtoMsg): _132.CreditTypeProposal;
                toProto(message: _132.CreditTypeProposal): Uint8Array;
                toProtoMsg(message: _132.CreditTypeProposal): _132.CreditTypeProposalProtoMsg;
            };
            AllowedDenom: {
                encode(message: _132.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.AllowedDenom;
                fromJSON(object: any): _132.AllowedDenom;
                toJSON(message: _132.AllowedDenom): unknown;
                fromPartial(object: Partial<_132.AllowedDenom>): _132.AllowedDenom;
                fromAmino(object: _132.AllowedDenomAmino): _132.AllowedDenom;
                toAmino(message: _132.AllowedDenom): _132.AllowedDenomAmino;
                fromAminoMsg(object: _132.AllowedDenomAminoMsg): _132.AllowedDenom;
                fromProtoMsg(message: _132.AllowedDenomProtoMsg): _132.AllowedDenom;
                toProto(message: _132.AllowedDenom): Uint8Array;
                toProtoMsg(message: _132.AllowedDenom): _132.AllowedDenomProtoMsg;
            };
            MsgAddCreditType: {
                encode(message: _131.MsgAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgAddCreditType;
                fromJSON(object: any): _131.MsgAddCreditType;
                toJSON(message: _131.MsgAddCreditType): unknown;
                fromPartial(object: Partial<_131.MsgAddCreditType>): _131.MsgAddCreditType;
                fromAmino(object: _131.MsgAddCreditTypeAmino): _131.MsgAddCreditType;
                toAmino(message: _131.MsgAddCreditType): _131.MsgAddCreditTypeAmino;
                fromAminoMsg(object: _131.MsgAddCreditTypeAminoMsg): _131.MsgAddCreditType;
                toAminoMsg(message: _131.MsgAddCreditType): _131.MsgAddCreditTypeAminoMsg;
                fromProtoMsg(message: _131.MsgAddCreditTypeProtoMsg): _131.MsgAddCreditType;
                toProto(message: _131.MsgAddCreditType): Uint8Array;
                toProtoMsg(message: _131.MsgAddCreditType): _131.MsgAddCreditTypeProtoMsg;
            };
            MsgAddCreditTypeResponse: {
                encode(_: _131.MsgAddCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgAddCreditTypeResponse;
                fromJSON(_: any): _131.MsgAddCreditTypeResponse;
                toJSON(_: _131.MsgAddCreditTypeResponse): unknown;
                fromPartial(_: Partial<_131.MsgAddCreditTypeResponse>): _131.MsgAddCreditTypeResponse;
                fromAmino(_: _131.MsgAddCreditTypeResponseAmino): _131.MsgAddCreditTypeResponse;
                toAmino(_: _131.MsgAddCreditTypeResponse): _131.MsgAddCreditTypeResponseAmino;
                fromAminoMsg(object: _131.MsgAddCreditTypeResponseAminoMsg): _131.MsgAddCreditTypeResponse;
                fromProtoMsg(message: _131.MsgAddCreditTypeResponseProtoMsg): _131.MsgAddCreditTypeResponse;
                toProto(message: _131.MsgAddCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _131.MsgAddCreditTypeResponse): _131.MsgAddCreditTypeResponseProtoMsg;
            };
            MsgCreateClass: {
                encode(message: _131.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCreateClass;
                fromJSON(object: any): _131.MsgCreateClass;
                toJSON(message: _131.MsgCreateClass): unknown;
                fromPartial(object: Partial<_131.MsgCreateClass>): _131.MsgCreateClass;
                fromAmino(object: _131.MsgCreateClassAmino): _131.MsgCreateClass;
                toAmino(message: _131.MsgCreateClass): _131.MsgCreateClassAmino;
                fromAminoMsg(object: _131.MsgCreateClassAminoMsg): _131.MsgCreateClass;
                toAminoMsg(message: _131.MsgCreateClass): _131.MsgCreateClassAminoMsg;
                fromProtoMsg(message: _131.MsgCreateClassProtoMsg): _131.MsgCreateClass;
                toProto(message: _131.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _131.MsgCreateClass): _131.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                encode(message: _131.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCreateClassResponse;
                fromJSON(object: any): _131.MsgCreateClassResponse;
                toJSON(message: _131.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_131.MsgCreateClassResponse>): _131.MsgCreateClassResponse;
                fromAmino(object: _131.MsgCreateClassResponseAmino): _131.MsgCreateClassResponse;
                toAmino(message: _131.MsgCreateClassResponse): _131.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _131.MsgCreateClassResponseAminoMsg): _131.MsgCreateClassResponse;
                fromProtoMsg(message: _131.MsgCreateClassResponseProtoMsg): _131.MsgCreateClassResponse;
                toProto(message: _131.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreateClassResponse): _131.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateProject: {
                encode(message: _131.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCreateProject;
                fromJSON(object: any): _131.MsgCreateProject;
                toJSON(message: _131.MsgCreateProject): unknown;
                fromPartial(object: Partial<_131.MsgCreateProject>): _131.MsgCreateProject;
                fromAmino(object: _131.MsgCreateProjectAmino): _131.MsgCreateProject;
                toAmino(message: _131.MsgCreateProject): _131.MsgCreateProjectAmino;
                fromAminoMsg(object: _131.MsgCreateProjectAminoMsg): _131.MsgCreateProject;
                toAminoMsg(message: _131.MsgCreateProject): _131.MsgCreateProjectAminoMsg;
                fromProtoMsg(message: _131.MsgCreateProjectProtoMsg): _131.MsgCreateProject;
                toProto(message: _131.MsgCreateProject): Uint8Array;
                toProtoMsg(message: _131.MsgCreateProject): _131.MsgCreateProjectProtoMsg;
            };
            MsgCreateProjectResponse: {
                encode(message: _131.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCreateProjectResponse;
                fromJSON(object: any): _131.MsgCreateProjectResponse;
                toJSON(message: _131.MsgCreateProjectResponse): unknown;
                fromPartial(object: Partial<_131.MsgCreateProjectResponse>): _131.MsgCreateProjectResponse;
                fromAmino(object: _131.MsgCreateProjectResponseAmino): _131.MsgCreateProjectResponse;
                toAmino(message: _131.MsgCreateProjectResponse): _131.MsgCreateProjectResponseAmino;
                fromAminoMsg(object: _131.MsgCreateProjectResponseAminoMsg): _131.MsgCreateProjectResponse;
                fromProtoMsg(message: _131.MsgCreateProjectResponseProtoMsg): _131.MsgCreateProjectResponse;
                toProto(message: _131.MsgCreateProjectResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreateProjectResponse): _131.MsgCreateProjectResponseProtoMsg;
            };
            MsgCreateBatch: {
                encode(message: _131.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCreateBatch;
                fromJSON(object: any): _131.MsgCreateBatch;
                toJSON(message: _131.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_131.MsgCreateBatch>): _131.MsgCreateBatch;
                fromAmino(object: _131.MsgCreateBatchAmino): _131.MsgCreateBatch;
                toAmino(message: _131.MsgCreateBatch): _131.MsgCreateBatchAmino;
                fromAminoMsg(object: _131.MsgCreateBatchAminoMsg): _131.MsgCreateBatch;
                toAminoMsg(message: _131.MsgCreateBatch): _131.MsgCreateBatchAminoMsg;
                fromProtoMsg(message: _131.MsgCreateBatchProtoMsg): _131.MsgCreateBatch;
                toProto(message: _131.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _131.MsgCreateBatch): _131.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatchResponse: {
                encode(message: _131.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCreateBatchResponse;
                fromJSON(object: any): _131.MsgCreateBatchResponse;
                toJSON(message: _131.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_131.MsgCreateBatchResponse>): _131.MsgCreateBatchResponse;
                fromAmino(object: _131.MsgCreateBatchResponseAmino): _131.MsgCreateBatchResponse;
                toAmino(message: _131.MsgCreateBatchResponse): _131.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _131.MsgCreateBatchResponseAminoMsg): _131.MsgCreateBatchResponse;
                fromProtoMsg(message: _131.MsgCreateBatchResponseProtoMsg): _131.MsgCreateBatchResponse;
                toProto(message: _131.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreateBatchResponse): _131.MsgCreateBatchResponseProtoMsg;
            };
            MsgMintBatchCredits: {
                encode(message: _131.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgMintBatchCredits;
                fromJSON(object: any): _131.MsgMintBatchCredits;
                toJSON(message: _131.MsgMintBatchCredits): unknown;
                fromPartial(object: Partial<_131.MsgMintBatchCredits>): _131.MsgMintBatchCredits;
                fromAmino(object: _131.MsgMintBatchCreditsAmino): _131.MsgMintBatchCredits;
                toAmino(message: _131.MsgMintBatchCredits): _131.MsgMintBatchCreditsAmino;
                fromAminoMsg(object: _131.MsgMintBatchCreditsAminoMsg): _131.MsgMintBatchCredits;
                toAminoMsg(message: _131.MsgMintBatchCredits): _131.MsgMintBatchCreditsAminoMsg;
                fromProtoMsg(message: _131.MsgMintBatchCreditsProtoMsg): _131.MsgMintBatchCredits;
                toProto(message: _131.MsgMintBatchCredits): Uint8Array;
                toProtoMsg(message: _131.MsgMintBatchCredits): _131.MsgMintBatchCreditsProtoMsg;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _131.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _131.MsgMintBatchCreditsResponse;
                toJSON(_: _131.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: Partial<_131.MsgMintBatchCreditsResponse>): _131.MsgMintBatchCreditsResponse;
                fromAmino(_: _131.MsgMintBatchCreditsResponseAmino): _131.MsgMintBatchCreditsResponse;
                toAmino(_: _131.MsgMintBatchCreditsResponse): _131.MsgMintBatchCreditsResponseAmino;
                fromAminoMsg(object: _131.MsgMintBatchCreditsResponseAminoMsg): _131.MsgMintBatchCreditsResponse;
                fromProtoMsg(message: _131.MsgMintBatchCreditsResponseProtoMsg): _131.MsgMintBatchCreditsResponse;
                toProto(message: _131.MsgMintBatchCreditsResponse): Uint8Array;
                toProtoMsg(message: _131.MsgMintBatchCreditsResponse): _131.MsgMintBatchCreditsResponseProtoMsg;
            };
            MsgSealBatch: {
                encode(message: _131.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSealBatch;
                fromJSON(object: any): _131.MsgSealBatch;
                toJSON(message: _131.MsgSealBatch): unknown;
                fromPartial(object: Partial<_131.MsgSealBatch>): _131.MsgSealBatch;
                fromAmino(object: _131.MsgSealBatchAmino): _131.MsgSealBatch;
                toAmino(message: _131.MsgSealBatch): _131.MsgSealBatchAmino;
                fromAminoMsg(object: _131.MsgSealBatchAminoMsg): _131.MsgSealBatch;
                toAminoMsg(message: _131.MsgSealBatch): _131.MsgSealBatchAminoMsg;
                fromProtoMsg(message: _131.MsgSealBatchProtoMsg): _131.MsgSealBatch;
                toProto(message: _131.MsgSealBatch): Uint8Array;
                toProtoMsg(message: _131.MsgSealBatch): _131.MsgSealBatchProtoMsg;
            };
            MsgSealBatchResponse: {
                encode(_: _131.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSealBatchResponse;
                fromJSON(_: any): _131.MsgSealBatchResponse;
                toJSON(_: _131.MsgSealBatchResponse): unknown;
                fromPartial(_: Partial<_131.MsgSealBatchResponse>): _131.MsgSealBatchResponse;
                fromAmino(_: _131.MsgSealBatchResponseAmino): _131.MsgSealBatchResponse;
                toAmino(_: _131.MsgSealBatchResponse): _131.MsgSealBatchResponseAmino;
                fromAminoMsg(object: _131.MsgSealBatchResponseAminoMsg): _131.MsgSealBatchResponse;
                fromProtoMsg(message: _131.MsgSealBatchResponseProtoMsg): _131.MsgSealBatchResponse;
                toProto(message: _131.MsgSealBatchResponse): Uint8Array;
                toProtoMsg(message: _131.MsgSealBatchResponse): _131.MsgSealBatchResponseProtoMsg;
            };
            MsgSend: {
                encode(message: _131.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSend;
                fromJSON(object: any): _131.MsgSend;
                toJSON(message: _131.MsgSend): unknown;
                fromPartial(object: Partial<_131.MsgSend>): _131.MsgSend;
                fromAmino(object: _131.MsgSendAmino): _131.MsgSend;
                toAmino(message: _131.MsgSend): _131.MsgSendAmino;
                fromAminoMsg(object: _131.MsgSendAminoMsg): _131.MsgSend;
                toAminoMsg(message: _131.MsgSend): _131.MsgSendAminoMsg;
                fromProtoMsg(message: _131.MsgSendProtoMsg): _131.MsgSend;
                toProto(message: _131.MsgSend): Uint8Array;
                toProtoMsg(message: _131.MsgSend): _131.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                encode(message: _131.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSend_SendCredits;
                fromJSON(object: any): _131.MsgSend_SendCredits;
                toJSON(message: _131.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_131.MsgSend_SendCredits>): _131.MsgSend_SendCredits;
                fromAmino(object: _131.MsgSend_SendCreditsAmino): _131.MsgSend_SendCredits;
                toAmino(message: _131.MsgSend_SendCredits): _131.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _131.MsgSend_SendCreditsAminoMsg): _131.MsgSend_SendCredits;
                fromProtoMsg(message: _131.MsgSend_SendCreditsProtoMsg): _131.MsgSend_SendCredits;
                toProto(message: _131.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _131.MsgSend_SendCredits): _131.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _131.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSendResponse;
                fromJSON(_: any): _131.MsgSendResponse;
                toJSON(_: _131.MsgSendResponse): unknown;
                fromPartial(_: Partial<_131.MsgSendResponse>): _131.MsgSendResponse;
                fromAmino(_: _131.MsgSendResponseAmino): _131.MsgSendResponse;
                toAmino(_: _131.MsgSendResponse): _131.MsgSendResponseAmino;
                fromAminoMsg(object: _131.MsgSendResponseAminoMsg): _131.MsgSendResponse;
                fromProtoMsg(message: _131.MsgSendResponseProtoMsg): _131.MsgSendResponse;
                toProto(message: _131.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _131.MsgSendResponse): _131.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                encode(message: _131.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRetire;
                fromJSON(object: any): _131.MsgRetire;
                toJSON(message: _131.MsgRetire): unknown;
                fromPartial(object: Partial<_131.MsgRetire>): _131.MsgRetire;
                fromAmino(object: _131.MsgRetireAmino): _131.MsgRetire;
                toAmino(message: _131.MsgRetire): _131.MsgRetireAmino;
                fromAminoMsg(object: _131.MsgRetireAminoMsg): _131.MsgRetire;
                toAminoMsg(message: _131.MsgRetire): _131.MsgRetireAminoMsg;
                fromProtoMsg(message: _131.MsgRetireProtoMsg): _131.MsgRetire;
                toProto(message: _131.MsgRetire): Uint8Array;
                toProtoMsg(message: _131.MsgRetire): _131.MsgRetireProtoMsg;
            };
            MsgRetireResponse: {
                encode(_: _131.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRetireResponse;
                fromJSON(_: any): _131.MsgRetireResponse;
                toJSON(_: _131.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_131.MsgRetireResponse>): _131.MsgRetireResponse;
                fromAmino(_: _131.MsgRetireResponseAmino): _131.MsgRetireResponse;
                toAmino(_: _131.MsgRetireResponse): _131.MsgRetireResponseAmino;
                fromAminoMsg(object: _131.MsgRetireResponseAminoMsg): _131.MsgRetireResponse;
                fromProtoMsg(message: _131.MsgRetireResponseProtoMsg): _131.MsgRetireResponse;
                toProto(message: _131.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _131.MsgRetireResponse): _131.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                encode(message: _131.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCancel;
                fromJSON(object: any): _131.MsgCancel;
                toJSON(message: _131.MsgCancel): unknown;
                fromPartial(object: Partial<_131.MsgCancel>): _131.MsgCancel;
                fromAmino(object: _131.MsgCancelAmino): _131.MsgCancel;
                toAmino(message: _131.MsgCancel): _131.MsgCancelAmino;
                fromAminoMsg(object: _131.MsgCancelAminoMsg): _131.MsgCancel;
                toAminoMsg(message: _131.MsgCancel): _131.MsgCancelAminoMsg;
                fromProtoMsg(message: _131.MsgCancelProtoMsg): _131.MsgCancel;
                toProto(message: _131.MsgCancel): Uint8Array;
                toProtoMsg(message: _131.MsgCancel): _131.MsgCancelProtoMsg;
            };
            MsgCancelResponse: {
                encode(_: _131.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgCancelResponse;
                fromJSON(_: any): _131.MsgCancelResponse;
                toJSON(_: _131.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_131.MsgCancelResponse>): _131.MsgCancelResponse;
                fromAmino(_: _131.MsgCancelResponseAmino): _131.MsgCancelResponse;
                toAmino(_: _131.MsgCancelResponse): _131.MsgCancelResponseAmino;
                fromAminoMsg(object: _131.MsgCancelResponseAminoMsg): _131.MsgCancelResponse;
                fromProtoMsg(message: _131.MsgCancelResponseProtoMsg): _131.MsgCancelResponse;
                toProto(message: _131.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCancelResponse): _131.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                encode(message: _131.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassAdmin;
                fromJSON(object: any): _131.MsgUpdateClassAdmin;
                toJSON(message: _131.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_131.MsgUpdateClassAdmin>): _131.MsgUpdateClassAdmin;
                fromAmino(object: _131.MsgUpdateClassAdminAmino): _131.MsgUpdateClassAdmin;
                toAmino(message: _131.MsgUpdateClassAdmin): _131.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _131.MsgUpdateClassAdminAminoMsg): _131.MsgUpdateClassAdmin;
                toAminoMsg(message: _131.MsgUpdateClassAdmin): _131.MsgUpdateClassAdminAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateClassAdminProtoMsg): _131.MsgUpdateClassAdmin;
                toProto(message: _131.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassAdmin): _131.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _131.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _131.MsgUpdateClassAdminResponse;
                toJSON(_: _131.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateClassAdminResponse>): _131.MsgUpdateClassAdminResponse;
                fromAmino(_: _131.MsgUpdateClassAdminResponseAmino): _131.MsgUpdateClassAdminResponse;
                toAmino(_: _131.MsgUpdateClassAdminResponse): _131.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateClassAdminResponseAminoMsg): _131.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _131.MsgUpdateClassAdminResponseProtoMsg): _131.MsgUpdateClassAdminResponse;
                toProto(message: _131.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassAdminResponse): _131.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                encode(message: _131.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassIssuers;
                fromJSON(object: any): _131.MsgUpdateClassIssuers;
                toJSON(message: _131.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_131.MsgUpdateClassIssuers>): _131.MsgUpdateClassIssuers;
                fromAmino(object: _131.MsgUpdateClassIssuersAmino): _131.MsgUpdateClassIssuers;
                toAmino(message: _131.MsgUpdateClassIssuers): _131.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _131.MsgUpdateClassIssuersAminoMsg): _131.MsgUpdateClassIssuers;
                toAminoMsg(message: _131.MsgUpdateClassIssuers): _131.MsgUpdateClassIssuersAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateClassIssuersProtoMsg): _131.MsgUpdateClassIssuers;
                toProto(message: _131.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassIssuers): _131.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _131.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _131.MsgUpdateClassIssuersResponse;
                toJSON(_: _131.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateClassIssuersResponse>): _131.MsgUpdateClassIssuersResponse;
                fromAmino(_: _131.MsgUpdateClassIssuersResponseAmino): _131.MsgUpdateClassIssuersResponse;
                toAmino(_: _131.MsgUpdateClassIssuersResponse): _131.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateClassIssuersResponseAminoMsg): _131.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _131.MsgUpdateClassIssuersResponseProtoMsg): _131.MsgUpdateClassIssuersResponse;
                toProto(message: _131.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassIssuersResponse): _131.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                encode(message: _131.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassMetadata;
                fromJSON(object: any): _131.MsgUpdateClassMetadata;
                toJSON(message: _131.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_131.MsgUpdateClassMetadata>): _131.MsgUpdateClassMetadata;
                fromAmino(object: _131.MsgUpdateClassMetadataAmino): _131.MsgUpdateClassMetadata;
                toAmino(message: _131.MsgUpdateClassMetadata): _131.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _131.MsgUpdateClassMetadataAminoMsg): _131.MsgUpdateClassMetadata;
                toAminoMsg(message: _131.MsgUpdateClassMetadata): _131.MsgUpdateClassMetadataAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateClassMetadataProtoMsg): _131.MsgUpdateClassMetadata;
                toProto(message: _131.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassMetadata): _131.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _131.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _131.MsgUpdateClassMetadataResponse;
                toJSON(_: _131.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateClassMetadataResponse>): _131.MsgUpdateClassMetadataResponse;
                fromAmino(_: _131.MsgUpdateClassMetadataResponseAmino): _131.MsgUpdateClassMetadataResponse;
                toAmino(_: _131.MsgUpdateClassMetadataResponse): _131.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateClassMetadataResponseAminoMsg): _131.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _131.MsgUpdateClassMetadataResponseProtoMsg): _131.MsgUpdateClassMetadataResponse;
                toProto(message: _131.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassMetadataResponse): _131.MsgUpdateClassMetadataResponseProtoMsg;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _131.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateProjectAdmin;
                fromJSON(object: any): _131.MsgUpdateProjectAdmin;
                toJSON(message: _131.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_131.MsgUpdateProjectAdmin>): _131.MsgUpdateProjectAdmin;
                fromAmino(object: _131.MsgUpdateProjectAdminAmino): _131.MsgUpdateProjectAdmin;
                toAmino(message: _131.MsgUpdateProjectAdmin): _131.MsgUpdateProjectAdminAmino;
                fromAminoMsg(object: _131.MsgUpdateProjectAdminAminoMsg): _131.MsgUpdateProjectAdmin;
                toAminoMsg(message: _131.MsgUpdateProjectAdmin): _131.MsgUpdateProjectAdminAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateProjectAdminProtoMsg): _131.MsgUpdateProjectAdmin;
                toProto(message: _131.MsgUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateProjectAdmin): _131.MsgUpdateProjectAdminProtoMsg;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _131.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _131.MsgUpdateProjectAdminResponse;
                toJSON(_: _131.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateProjectAdminResponse>): _131.MsgUpdateProjectAdminResponse;
                fromAmino(_: _131.MsgUpdateProjectAdminResponseAmino): _131.MsgUpdateProjectAdminResponse;
                toAmino(_: _131.MsgUpdateProjectAdminResponse): _131.MsgUpdateProjectAdminResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateProjectAdminResponseAminoMsg): _131.MsgUpdateProjectAdminResponse;
                fromProtoMsg(message: _131.MsgUpdateProjectAdminResponseProtoMsg): _131.MsgUpdateProjectAdminResponse;
                toProto(message: _131.MsgUpdateProjectAdminResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateProjectAdminResponse): _131.MsgUpdateProjectAdminResponseProtoMsg;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _131.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateProjectMetadata;
                fromJSON(object: any): _131.MsgUpdateProjectMetadata;
                toJSON(message: _131.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_131.MsgUpdateProjectMetadata>): _131.MsgUpdateProjectMetadata;
                fromAmino(object: _131.MsgUpdateProjectMetadataAmino): _131.MsgUpdateProjectMetadata;
                toAmino(message: _131.MsgUpdateProjectMetadata): _131.MsgUpdateProjectMetadataAmino;
                fromAminoMsg(object: _131.MsgUpdateProjectMetadataAminoMsg): _131.MsgUpdateProjectMetadata;
                toAminoMsg(message: _131.MsgUpdateProjectMetadata): _131.MsgUpdateProjectMetadataAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateProjectMetadataProtoMsg): _131.MsgUpdateProjectMetadata;
                toProto(message: _131.MsgUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateProjectMetadata): _131.MsgUpdateProjectMetadataProtoMsg;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _131.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _131.MsgUpdateProjectMetadataResponse;
                toJSON(_: _131.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateProjectMetadataResponse>): _131.MsgUpdateProjectMetadataResponse;
                fromAmino(_: _131.MsgUpdateProjectMetadataResponseAmino): _131.MsgUpdateProjectMetadataResponse;
                toAmino(_: _131.MsgUpdateProjectMetadataResponse): _131.MsgUpdateProjectMetadataResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateProjectMetadataResponseAminoMsg): _131.MsgUpdateProjectMetadataResponse;
                fromProtoMsg(message: _131.MsgUpdateProjectMetadataResponseProtoMsg): _131.MsgUpdateProjectMetadataResponse;
                toProto(message: _131.MsgUpdateProjectMetadataResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateProjectMetadataResponse): _131.MsgUpdateProjectMetadataResponseProtoMsg;
            };
            MsgBridge: {
                encode(message: _131.MsgBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgBridge;
                fromJSON(object: any): _131.MsgBridge;
                toJSON(message: _131.MsgBridge): unknown;
                fromPartial(object: Partial<_131.MsgBridge>): _131.MsgBridge;
                fromAmino(object: _131.MsgBridgeAmino): _131.MsgBridge;
                toAmino(message: _131.MsgBridge): _131.MsgBridgeAmino;
                fromAminoMsg(object: _131.MsgBridgeAminoMsg): _131.MsgBridge;
                toAminoMsg(message: _131.MsgBridge): _131.MsgBridgeAminoMsg;
                fromProtoMsg(message: _131.MsgBridgeProtoMsg): _131.MsgBridge;
                toProto(message: _131.MsgBridge): Uint8Array;
                toProtoMsg(message: _131.MsgBridge): _131.MsgBridgeProtoMsg;
            };
            MsgUpdateBatchMetadata: {
                encode(message: _131.MsgUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateBatchMetadata;
                fromJSON(object: any): _131.MsgUpdateBatchMetadata;
                toJSON(message: _131.MsgUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_131.MsgUpdateBatchMetadata>): _131.MsgUpdateBatchMetadata;
                fromAmino(object: _131.MsgUpdateBatchMetadataAmino): _131.MsgUpdateBatchMetadata;
                toAmino(message: _131.MsgUpdateBatchMetadata): _131.MsgUpdateBatchMetadataAmino;
                fromAminoMsg(object: _131.MsgUpdateBatchMetadataAminoMsg): _131.MsgUpdateBatchMetadata;
                toAminoMsg(message: _131.MsgUpdateBatchMetadata): _131.MsgUpdateBatchMetadataAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateBatchMetadataProtoMsg): _131.MsgUpdateBatchMetadata;
                toProto(message: _131.MsgUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateBatchMetadata): _131.MsgUpdateBatchMetadataProtoMsg;
            };
            MsgUpdateBatchMetadataResponse: {
                encode(_: _131.MsgUpdateBatchMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateBatchMetadataResponse;
                fromJSON(_: any): _131.MsgUpdateBatchMetadataResponse;
                toJSON(_: _131.MsgUpdateBatchMetadataResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateBatchMetadataResponse>): _131.MsgUpdateBatchMetadataResponse;
                fromAmino(_: _131.MsgUpdateBatchMetadataResponseAmino): _131.MsgUpdateBatchMetadataResponse;
                toAmino(_: _131.MsgUpdateBatchMetadataResponse): _131.MsgUpdateBatchMetadataResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateBatchMetadataResponseAminoMsg): _131.MsgUpdateBatchMetadataResponse;
                fromProtoMsg(message: _131.MsgUpdateBatchMetadataResponseProtoMsg): _131.MsgUpdateBatchMetadataResponse;
                toProto(message: _131.MsgUpdateBatchMetadataResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateBatchMetadataResponse): _131.MsgUpdateBatchMetadataResponseProtoMsg;
            };
            MsgBridgeResponse: {
                encode(_: _131.MsgBridgeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgBridgeResponse;
                fromJSON(_: any): _131.MsgBridgeResponse;
                toJSON(_: _131.MsgBridgeResponse): unknown;
                fromPartial(_: Partial<_131.MsgBridgeResponse>): _131.MsgBridgeResponse;
                fromAmino(_: _131.MsgBridgeResponseAmino): _131.MsgBridgeResponse;
                toAmino(_: _131.MsgBridgeResponse): _131.MsgBridgeResponseAmino;
                fromAminoMsg(object: _131.MsgBridgeResponseAminoMsg): _131.MsgBridgeResponse;
                fromProtoMsg(message: _131.MsgBridgeResponseProtoMsg): _131.MsgBridgeResponse;
                toProto(message: _131.MsgBridgeResponse): Uint8Array;
                toProtoMsg(message: _131.MsgBridgeResponse): _131.MsgBridgeResponseProtoMsg;
            };
            MsgBridgeReceive: {
                encode(message: _131.MsgBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgBridgeReceive;
                fromJSON(object: any): _131.MsgBridgeReceive;
                toJSON(message: _131.MsgBridgeReceive): unknown;
                fromPartial(object: Partial<_131.MsgBridgeReceive>): _131.MsgBridgeReceive;
                fromAmino(object: _131.MsgBridgeReceiveAmino): _131.MsgBridgeReceive;
                toAmino(message: _131.MsgBridgeReceive): _131.MsgBridgeReceiveAmino;
                fromAminoMsg(object: _131.MsgBridgeReceiveAminoMsg): _131.MsgBridgeReceive;
                toAminoMsg(message: _131.MsgBridgeReceive): _131.MsgBridgeReceiveAminoMsg;
                fromProtoMsg(message: _131.MsgBridgeReceiveProtoMsg): _131.MsgBridgeReceive;
                toProto(message: _131.MsgBridgeReceive): Uint8Array;
                toProtoMsg(message: _131.MsgBridgeReceive): _131.MsgBridgeReceiveProtoMsg;
            };
            MsgBridgeReceive_Batch: {
                encode(message: _131.MsgBridgeReceive_Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgBridgeReceive_Batch;
                fromJSON(object: any): _131.MsgBridgeReceive_Batch;
                toJSON(message: _131.MsgBridgeReceive_Batch): unknown;
                fromPartial(object: Partial<_131.MsgBridgeReceive_Batch>): _131.MsgBridgeReceive_Batch;
                fromAmino(object: _131.MsgBridgeReceive_BatchAmino): _131.MsgBridgeReceive_Batch;
                toAmino(message: _131.MsgBridgeReceive_Batch): _131.MsgBridgeReceive_BatchAmino;
                fromAminoMsg(object: _131.MsgBridgeReceive_BatchAminoMsg): _131.MsgBridgeReceive_Batch;
                fromProtoMsg(message: _131.MsgBridgeReceive_BatchProtoMsg): _131.MsgBridgeReceive_Batch;
                toProto(message: _131.MsgBridgeReceive_Batch): Uint8Array;
                toProtoMsg(message: _131.MsgBridgeReceive_Batch): _131.MsgBridgeReceive_BatchProtoMsg;
            };
            MsgBridgeReceive_Project: {
                encode(message: _131.MsgBridgeReceive_Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgBridgeReceive_Project;
                fromJSON(object: any): _131.MsgBridgeReceive_Project;
                toJSON(message: _131.MsgBridgeReceive_Project): unknown;
                fromPartial(object: Partial<_131.MsgBridgeReceive_Project>): _131.MsgBridgeReceive_Project;
                fromAmino(object: _131.MsgBridgeReceive_ProjectAmino): _131.MsgBridgeReceive_Project;
                toAmino(message: _131.MsgBridgeReceive_Project): _131.MsgBridgeReceive_ProjectAmino;
                fromAminoMsg(object: _131.MsgBridgeReceive_ProjectAminoMsg): _131.MsgBridgeReceive_Project;
                fromProtoMsg(message: _131.MsgBridgeReceive_ProjectProtoMsg): _131.MsgBridgeReceive_Project;
                toProto(message: _131.MsgBridgeReceive_Project): Uint8Array;
                toProtoMsg(message: _131.MsgBridgeReceive_Project): _131.MsgBridgeReceive_ProjectProtoMsg;
            };
            MsgBridgeReceiveResponse: {
                encode(message: _131.MsgBridgeReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgBridgeReceiveResponse;
                fromJSON(object: any): _131.MsgBridgeReceiveResponse;
                toJSON(message: _131.MsgBridgeReceiveResponse): unknown;
                fromPartial(object: Partial<_131.MsgBridgeReceiveResponse>): _131.MsgBridgeReceiveResponse;
                fromAmino(object: _131.MsgBridgeReceiveResponseAmino): _131.MsgBridgeReceiveResponse;
                toAmino(message: _131.MsgBridgeReceiveResponse): _131.MsgBridgeReceiveResponseAmino;
                fromAminoMsg(object: _131.MsgBridgeReceiveResponseAminoMsg): _131.MsgBridgeReceiveResponse;
                fromProtoMsg(message: _131.MsgBridgeReceiveResponseProtoMsg): _131.MsgBridgeReceiveResponse;
                toProto(message: _131.MsgBridgeReceiveResponse): Uint8Array;
                toProtoMsg(message: _131.MsgBridgeReceiveResponse): _131.MsgBridgeReceiveResponseProtoMsg;
            };
            MsgAddClassCreator: {
                encode(message: _131.MsgAddClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgAddClassCreator;
                fromJSON(object: any): _131.MsgAddClassCreator;
                toJSON(message: _131.MsgAddClassCreator): unknown;
                fromPartial(object: Partial<_131.MsgAddClassCreator>): _131.MsgAddClassCreator;
                fromAmino(object: _131.MsgAddClassCreatorAmino): _131.MsgAddClassCreator;
                toAmino(message: _131.MsgAddClassCreator): _131.MsgAddClassCreatorAmino;
                fromAminoMsg(object: _131.MsgAddClassCreatorAminoMsg): _131.MsgAddClassCreator;
                toAminoMsg(message: _131.MsgAddClassCreator): _131.MsgAddClassCreatorAminoMsg;
                fromProtoMsg(message: _131.MsgAddClassCreatorProtoMsg): _131.MsgAddClassCreator;
                toProto(message: _131.MsgAddClassCreator): Uint8Array;
                toProtoMsg(message: _131.MsgAddClassCreator): _131.MsgAddClassCreatorProtoMsg;
            };
            MsgAddClassCreatorResponse: {
                encode(_: _131.MsgAddClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgAddClassCreatorResponse;
                fromJSON(_: any): _131.MsgAddClassCreatorResponse;
                toJSON(_: _131.MsgAddClassCreatorResponse): unknown;
                fromPartial(_: Partial<_131.MsgAddClassCreatorResponse>): _131.MsgAddClassCreatorResponse;
                fromAmino(_: _131.MsgAddClassCreatorResponseAmino): _131.MsgAddClassCreatorResponse;
                toAmino(_: _131.MsgAddClassCreatorResponse): _131.MsgAddClassCreatorResponseAmino;
                fromAminoMsg(object: _131.MsgAddClassCreatorResponseAminoMsg): _131.MsgAddClassCreatorResponse;
                fromProtoMsg(message: _131.MsgAddClassCreatorResponseProtoMsg): _131.MsgAddClassCreatorResponse;
                toProto(message: _131.MsgAddClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _131.MsgAddClassCreatorResponse): _131.MsgAddClassCreatorResponseProtoMsg;
            };
            MsgSetClassCreatorAllowlist: {
                encode(message: _131.MsgSetClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSetClassCreatorAllowlist;
                fromJSON(object: any): _131.MsgSetClassCreatorAllowlist;
                toJSON(message: _131.MsgSetClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_131.MsgSetClassCreatorAllowlist>): _131.MsgSetClassCreatorAllowlist;
                fromAmino(object: _131.MsgSetClassCreatorAllowlistAmino): _131.MsgSetClassCreatorAllowlist;
                toAmino(message: _131.MsgSetClassCreatorAllowlist): _131.MsgSetClassCreatorAllowlistAmino;
                fromAminoMsg(object: _131.MsgSetClassCreatorAllowlistAminoMsg): _131.MsgSetClassCreatorAllowlist;
                toAminoMsg(message: _131.MsgSetClassCreatorAllowlist): _131.MsgSetClassCreatorAllowlistAminoMsg;
                fromProtoMsg(message: _131.MsgSetClassCreatorAllowlistProtoMsg): _131.MsgSetClassCreatorAllowlist;
                toProto(message: _131.MsgSetClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _131.MsgSetClassCreatorAllowlist): _131.MsgSetClassCreatorAllowlistProtoMsg;
            };
            MsgSetClassCreatorAllowlistResponse: {
                encode(_: _131.MsgSetClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgSetClassCreatorAllowlistResponse;
                fromJSON(_: any): _131.MsgSetClassCreatorAllowlistResponse;
                toJSON(_: _131.MsgSetClassCreatorAllowlistResponse): unknown;
                fromPartial(_: Partial<_131.MsgSetClassCreatorAllowlistResponse>): _131.MsgSetClassCreatorAllowlistResponse;
                fromAmino(_: _131.MsgSetClassCreatorAllowlistResponseAmino): _131.MsgSetClassCreatorAllowlistResponse;
                toAmino(_: _131.MsgSetClassCreatorAllowlistResponse): _131.MsgSetClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _131.MsgSetClassCreatorAllowlistResponseAminoMsg): _131.MsgSetClassCreatorAllowlistResponse;
                fromProtoMsg(message: _131.MsgSetClassCreatorAllowlistResponseProtoMsg): _131.MsgSetClassCreatorAllowlistResponse;
                toProto(message: _131.MsgSetClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _131.MsgSetClassCreatorAllowlistResponse): _131.MsgSetClassCreatorAllowlistResponseProtoMsg;
            };
            MsgRemoveClassCreator: {
                encode(message: _131.MsgRemoveClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRemoveClassCreator;
                fromJSON(object: any): _131.MsgRemoveClassCreator;
                toJSON(message: _131.MsgRemoveClassCreator): unknown;
                fromPartial(object: Partial<_131.MsgRemoveClassCreator>): _131.MsgRemoveClassCreator;
                fromAmino(object: _131.MsgRemoveClassCreatorAmino): _131.MsgRemoveClassCreator;
                toAmino(message: _131.MsgRemoveClassCreator): _131.MsgRemoveClassCreatorAmino;
                fromAminoMsg(object: _131.MsgRemoveClassCreatorAminoMsg): _131.MsgRemoveClassCreator;
                toAminoMsg(message: _131.MsgRemoveClassCreator): _131.MsgRemoveClassCreatorAminoMsg;
                fromProtoMsg(message: _131.MsgRemoveClassCreatorProtoMsg): _131.MsgRemoveClassCreator;
                toProto(message: _131.MsgRemoveClassCreator): Uint8Array;
                toProtoMsg(message: _131.MsgRemoveClassCreator): _131.MsgRemoveClassCreatorProtoMsg;
            };
            MsgRemoveClassCreatorResponse: {
                encode(_: _131.MsgRemoveClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRemoveClassCreatorResponse;
                fromJSON(_: any): _131.MsgRemoveClassCreatorResponse;
                toJSON(_: _131.MsgRemoveClassCreatorResponse): unknown;
                fromPartial(_: Partial<_131.MsgRemoveClassCreatorResponse>): _131.MsgRemoveClassCreatorResponse;
                fromAmino(_: _131.MsgRemoveClassCreatorResponseAmino): _131.MsgRemoveClassCreatorResponse;
                toAmino(_: _131.MsgRemoveClassCreatorResponse): _131.MsgRemoveClassCreatorResponseAmino;
                fromAminoMsg(object: _131.MsgRemoveClassCreatorResponseAminoMsg): _131.MsgRemoveClassCreatorResponse;
                fromProtoMsg(message: _131.MsgRemoveClassCreatorResponseProtoMsg): _131.MsgRemoveClassCreatorResponse;
                toProto(message: _131.MsgRemoveClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _131.MsgRemoveClassCreatorResponse): _131.MsgRemoveClassCreatorResponseProtoMsg;
            };
            MsgUpdateClassFee: {
                encode(message: _131.MsgUpdateClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassFee;
                fromJSON(object: any): _131.MsgUpdateClassFee;
                toJSON(message: _131.MsgUpdateClassFee): unknown;
                fromPartial(object: Partial<_131.MsgUpdateClassFee>): _131.MsgUpdateClassFee;
                fromAmino(object: _131.MsgUpdateClassFeeAmino): _131.MsgUpdateClassFee;
                toAmino(message: _131.MsgUpdateClassFee): _131.MsgUpdateClassFeeAmino;
                fromAminoMsg(object: _131.MsgUpdateClassFeeAminoMsg): _131.MsgUpdateClassFee;
                toAminoMsg(message: _131.MsgUpdateClassFee): _131.MsgUpdateClassFeeAminoMsg;
                fromProtoMsg(message: _131.MsgUpdateClassFeeProtoMsg): _131.MsgUpdateClassFee;
                toProto(message: _131.MsgUpdateClassFee): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassFee): _131.MsgUpdateClassFeeProtoMsg;
            };
            MsgUpdateClassFeeResponse: {
                encode(_: _131.MsgUpdateClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgUpdateClassFeeResponse;
                fromJSON(_: any): _131.MsgUpdateClassFeeResponse;
                toJSON(_: _131.MsgUpdateClassFeeResponse): unknown;
                fromPartial(_: Partial<_131.MsgUpdateClassFeeResponse>): _131.MsgUpdateClassFeeResponse;
                fromAmino(_: _131.MsgUpdateClassFeeResponseAmino): _131.MsgUpdateClassFeeResponse;
                toAmino(_: _131.MsgUpdateClassFeeResponse): _131.MsgUpdateClassFeeResponseAmino;
                fromAminoMsg(object: _131.MsgUpdateClassFeeResponseAminoMsg): _131.MsgUpdateClassFeeResponse;
                fromProtoMsg(message: _131.MsgUpdateClassFeeResponseProtoMsg): _131.MsgUpdateClassFeeResponse;
                toProto(message: _131.MsgUpdateClassFeeResponse): Uint8Array;
                toProtoMsg(message: _131.MsgUpdateClassFeeResponse): _131.MsgUpdateClassFeeResponseProtoMsg;
            };
            MsgAddAllowedBridgeChain: {
                encode(message: _131.MsgAddAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgAddAllowedBridgeChain;
                fromJSON(object: any): _131.MsgAddAllowedBridgeChain;
                toJSON(message: _131.MsgAddAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_131.MsgAddAllowedBridgeChain>): _131.MsgAddAllowedBridgeChain;
                fromAmino(object: _131.MsgAddAllowedBridgeChainAmino): _131.MsgAddAllowedBridgeChain;
                toAmino(message: _131.MsgAddAllowedBridgeChain): _131.MsgAddAllowedBridgeChainAmino;
                fromAminoMsg(object: _131.MsgAddAllowedBridgeChainAminoMsg): _131.MsgAddAllowedBridgeChain;
                toAminoMsg(message: _131.MsgAddAllowedBridgeChain): _131.MsgAddAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _131.MsgAddAllowedBridgeChainProtoMsg): _131.MsgAddAllowedBridgeChain;
                toProto(message: _131.MsgAddAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _131.MsgAddAllowedBridgeChain): _131.MsgAddAllowedBridgeChainProtoMsg;
            };
            MsgAddAllowedBridgeChainResponse: {
                encode(_: _131.MsgAddAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgAddAllowedBridgeChainResponse;
                fromJSON(_: any): _131.MsgAddAllowedBridgeChainResponse;
                toJSON(_: _131.MsgAddAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_131.MsgAddAllowedBridgeChainResponse>): _131.MsgAddAllowedBridgeChainResponse;
                fromAmino(_: _131.MsgAddAllowedBridgeChainResponseAmino): _131.MsgAddAllowedBridgeChainResponse;
                toAmino(_: _131.MsgAddAllowedBridgeChainResponse): _131.MsgAddAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _131.MsgAddAllowedBridgeChainResponseAminoMsg): _131.MsgAddAllowedBridgeChainResponse;
                fromProtoMsg(message: _131.MsgAddAllowedBridgeChainResponseProtoMsg): _131.MsgAddAllowedBridgeChainResponse;
                toProto(message: _131.MsgAddAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _131.MsgAddAllowedBridgeChainResponse): _131.MsgAddAllowedBridgeChainResponseProtoMsg;
            };
            MsgRemoveAllowedBridgeChain: {
                encode(message: _131.MsgRemoveAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRemoveAllowedBridgeChain;
                fromJSON(object: any): _131.MsgRemoveAllowedBridgeChain;
                toJSON(message: _131.MsgRemoveAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_131.MsgRemoveAllowedBridgeChain>): _131.MsgRemoveAllowedBridgeChain;
                fromAmino(object: _131.MsgRemoveAllowedBridgeChainAmino): _131.MsgRemoveAllowedBridgeChain;
                toAmino(message: _131.MsgRemoveAllowedBridgeChain): _131.MsgRemoveAllowedBridgeChainAmino;
                fromAminoMsg(object: _131.MsgRemoveAllowedBridgeChainAminoMsg): _131.MsgRemoveAllowedBridgeChain;
                toAminoMsg(message: _131.MsgRemoveAllowedBridgeChain): _131.MsgRemoveAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _131.MsgRemoveAllowedBridgeChainProtoMsg): _131.MsgRemoveAllowedBridgeChain;
                toProto(message: _131.MsgRemoveAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _131.MsgRemoveAllowedBridgeChain): _131.MsgRemoveAllowedBridgeChainProtoMsg;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                encode(_: _131.MsgRemoveAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.MsgRemoveAllowedBridgeChainResponse;
                fromJSON(_: any): _131.MsgRemoveAllowedBridgeChainResponse;
                toJSON(_: _131.MsgRemoveAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_131.MsgRemoveAllowedBridgeChainResponse>): _131.MsgRemoveAllowedBridgeChainResponse;
                fromAmino(_: _131.MsgRemoveAllowedBridgeChainResponseAmino): _131.MsgRemoveAllowedBridgeChainResponse;
                toAmino(_: _131.MsgRemoveAllowedBridgeChainResponse): _131.MsgRemoveAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _131.MsgRemoveAllowedBridgeChainResponseAminoMsg): _131.MsgRemoveAllowedBridgeChainResponse;
                fromProtoMsg(message: _131.MsgRemoveAllowedBridgeChainResponseProtoMsg): _131.MsgRemoveAllowedBridgeChainResponse;
                toProto(message: _131.MsgRemoveAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _131.MsgRemoveAllowedBridgeChainResponse): _131.MsgRemoveAllowedBridgeChainResponseProtoMsg;
            };
            CreditType: {
                encode(message: _130.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.CreditType;
                fromJSON(object: any): _130.CreditType;
                toJSON(message: _130.CreditType): unknown;
                fromPartial(object: Partial<_130.CreditType>): _130.CreditType;
                fromAmino(object: _130.CreditTypeAmino): _130.CreditType;
                toAmino(message: _130.CreditType): _130.CreditTypeAmino;
                fromAminoMsg(object: _130.CreditTypeAminoMsg): _130.CreditType;
                fromProtoMsg(message: _130.CreditTypeProtoMsg): _130.CreditType;
                toProto(message: _130.CreditType): Uint8Array;
                toProtoMsg(message: _130.CreditType): _130.CreditTypeProtoMsg;
            };
            Class: {
                encode(message: _130.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.Class;
                fromJSON(object: any): _130.Class;
                toJSON(message: _130.Class): unknown;
                fromPartial(object: Partial<_130.Class>): _130.Class;
                fromAmino(object: _130.ClassAmino): _130.Class;
                toAmino(message: _130.Class): _130.ClassAmino;
                fromAminoMsg(object: _130.ClassAminoMsg): _130.Class;
                fromProtoMsg(message: _130.ClassProtoMsg): _130.Class;
                toProto(message: _130.Class): Uint8Array;
                toProtoMsg(message: _130.Class): _130.ClassProtoMsg;
            };
            ClassIssuer: {
                encode(message: _130.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.ClassIssuer;
                fromJSON(object: any): _130.ClassIssuer;
                toJSON(message: _130.ClassIssuer): unknown;
                fromPartial(object: Partial<_130.ClassIssuer>): _130.ClassIssuer;
                fromAmino(object: _130.ClassIssuerAmino): _130.ClassIssuer;
                toAmino(message: _130.ClassIssuer): _130.ClassIssuerAmino;
                fromAminoMsg(object: _130.ClassIssuerAminoMsg): _130.ClassIssuer;
                fromProtoMsg(message: _130.ClassIssuerProtoMsg): _130.ClassIssuer;
                toProto(message: _130.ClassIssuer): Uint8Array;
                toProtoMsg(message: _130.ClassIssuer): _130.ClassIssuerProtoMsg;
            };
            Project: {
                encode(message: _130.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.Project;
                fromJSON(object: any): _130.Project;
                toJSON(message: _130.Project): unknown;
                fromPartial(object: Partial<_130.Project>): _130.Project;
                fromAmino(object: _130.ProjectAmino): _130.Project;
                toAmino(message: _130.Project): _130.ProjectAmino;
                fromAminoMsg(object: _130.ProjectAminoMsg): _130.Project;
                fromProtoMsg(message: _130.ProjectProtoMsg): _130.Project;
                toProto(message: _130.Project): Uint8Array;
                toProtoMsg(message: _130.Project): _130.ProjectProtoMsg;
            };
            Batch: {
                encode(message: _130.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.Batch;
                fromJSON(object: any): _130.Batch;
                toJSON(message: _130.Batch): unknown;
                fromPartial(object: Partial<_130.Batch>): _130.Batch;
                fromAmino(object: _130.BatchAmino): _130.Batch;
                toAmino(message: _130.Batch): _130.BatchAmino;
                fromAminoMsg(object: _130.BatchAminoMsg): _130.Batch;
                fromProtoMsg(message: _130.BatchProtoMsg): _130.Batch;
                toProto(message: _130.Batch): Uint8Array;
                toProtoMsg(message: _130.Batch): _130.BatchProtoMsg;
            };
            ClassSequence: {
                encode(message: _130.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.ClassSequence;
                fromJSON(object: any): _130.ClassSequence;
                toJSON(message: _130.ClassSequence): unknown;
                fromPartial(object: Partial<_130.ClassSequence>): _130.ClassSequence;
                fromAmino(object: _130.ClassSequenceAmino): _130.ClassSequence;
                toAmino(message: _130.ClassSequence): _130.ClassSequenceAmino;
                fromAminoMsg(object: _130.ClassSequenceAminoMsg): _130.ClassSequence;
                fromProtoMsg(message: _130.ClassSequenceProtoMsg): _130.ClassSequence;
                toProto(message: _130.ClassSequence): Uint8Array;
                toProtoMsg(message: _130.ClassSequence): _130.ClassSequenceProtoMsg;
            };
            ProjectSequence: {
                encode(message: _130.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.ProjectSequence;
                fromJSON(object: any): _130.ProjectSequence;
                toJSON(message: _130.ProjectSequence): unknown;
                fromPartial(object: Partial<_130.ProjectSequence>): _130.ProjectSequence;
                fromAmino(object: _130.ProjectSequenceAmino): _130.ProjectSequence;
                toAmino(message: _130.ProjectSequence): _130.ProjectSequenceAmino;
                fromAminoMsg(object: _130.ProjectSequenceAminoMsg): _130.ProjectSequence;
                fromProtoMsg(message: _130.ProjectSequenceProtoMsg): _130.ProjectSequence;
                toProto(message: _130.ProjectSequence): Uint8Array;
                toProtoMsg(message: _130.ProjectSequence): _130.ProjectSequenceProtoMsg;
            };
            BatchSequence: {
                encode(message: _130.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.BatchSequence;
                fromJSON(object: any): _130.BatchSequence;
                toJSON(message: _130.BatchSequence): unknown;
                fromPartial(object: Partial<_130.BatchSequence>): _130.BatchSequence;
                fromAmino(object: _130.BatchSequenceAmino): _130.BatchSequence;
                toAmino(message: _130.BatchSequence): _130.BatchSequenceAmino;
                fromAminoMsg(object: _130.BatchSequenceAminoMsg): _130.BatchSequence;
                fromProtoMsg(message: _130.BatchSequenceProtoMsg): _130.BatchSequence;
                toProto(message: _130.BatchSequence): Uint8Array;
                toProtoMsg(message: _130.BatchSequence): _130.BatchSequenceProtoMsg;
            };
            BatchBalance: {
                encode(message: _130.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.BatchBalance;
                fromJSON(object: any): _130.BatchBalance;
                toJSON(message: _130.BatchBalance): unknown;
                fromPartial(object: Partial<_130.BatchBalance>): _130.BatchBalance;
                fromAmino(object: _130.BatchBalanceAmino): _130.BatchBalance;
                toAmino(message: _130.BatchBalance): _130.BatchBalanceAmino;
                fromAminoMsg(object: _130.BatchBalanceAminoMsg): _130.BatchBalance;
                fromProtoMsg(message: _130.BatchBalanceProtoMsg): _130.BatchBalance;
                toProto(message: _130.BatchBalance): Uint8Array;
                toProtoMsg(message: _130.BatchBalance): _130.BatchBalanceProtoMsg;
            };
            BatchSupply: {
                encode(message: _130.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.BatchSupply;
                fromJSON(object: any): _130.BatchSupply;
                toJSON(message: _130.BatchSupply): unknown;
                fromPartial(object: Partial<_130.BatchSupply>): _130.BatchSupply;
                fromAmino(object: _130.BatchSupplyAmino): _130.BatchSupply;
                toAmino(message: _130.BatchSupply): _130.BatchSupplyAmino;
                fromAminoMsg(object: _130.BatchSupplyAminoMsg): _130.BatchSupply;
                fromProtoMsg(message: _130.BatchSupplyProtoMsg): _130.BatchSupply;
                toProto(message: _130.BatchSupply): Uint8Array;
                toProtoMsg(message: _130.BatchSupply): _130.BatchSupplyProtoMsg;
            };
            OriginTxIndex: {
                encode(message: _130.OriginTxIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.OriginTxIndex;
                fromJSON(object: any): _130.OriginTxIndex;
                toJSON(message: _130.OriginTxIndex): unknown;
                fromPartial(object: Partial<_130.OriginTxIndex>): _130.OriginTxIndex;
                fromAmino(object: _130.OriginTxIndexAmino): _130.OriginTxIndex;
                toAmino(message: _130.OriginTxIndex): _130.OriginTxIndexAmino;
                fromAminoMsg(object: _130.OriginTxIndexAminoMsg): _130.OriginTxIndex;
                fromProtoMsg(message: _130.OriginTxIndexProtoMsg): _130.OriginTxIndex;
                toProto(message: _130.OriginTxIndex): Uint8Array;
                toProtoMsg(message: _130.OriginTxIndex): _130.OriginTxIndexProtoMsg;
            };
            BatchContract: {
                encode(message: _130.BatchContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.BatchContract;
                fromJSON(object: any): _130.BatchContract;
                toJSON(message: _130.BatchContract): unknown;
                fromPartial(object: Partial<_130.BatchContract>): _130.BatchContract;
                fromAmino(object: _130.BatchContractAmino): _130.BatchContract;
                toAmino(message: _130.BatchContract): _130.BatchContractAmino;
                fromAminoMsg(object: _130.BatchContractAminoMsg): _130.BatchContract;
                fromProtoMsg(message: _130.BatchContractProtoMsg): _130.BatchContract;
                toProto(message: _130.BatchContract): Uint8Array;
                toProtoMsg(message: _130.BatchContract): _130.BatchContractProtoMsg;
            };
            ClassCreatorAllowlist: {
                encode(message: _130.ClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.ClassCreatorAllowlist;
                fromJSON(object: any): _130.ClassCreatorAllowlist;
                toJSON(message: _130.ClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_130.ClassCreatorAllowlist>): _130.ClassCreatorAllowlist;
                fromAmino(object: _130.ClassCreatorAllowlistAmino): _130.ClassCreatorAllowlist;
                toAmino(message: _130.ClassCreatorAllowlist): _130.ClassCreatorAllowlistAmino;
                fromAminoMsg(object: _130.ClassCreatorAllowlistAminoMsg): _130.ClassCreatorAllowlist;
                fromProtoMsg(message: _130.ClassCreatorAllowlistProtoMsg): _130.ClassCreatorAllowlist;
                toProto(message: _130.ClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _130.ClassCreatorAllowlist): _130.ClassCreatorAllowlistProtoMsg;
            };
            AllowedClassCreator: {
                encode(message: _130.AllowedClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.AllowedClassCreator;
                fromJSON(object: any): _130.AllowedClassCreator;
                toJSON(message: _130.AllowedClassCreator): unknown;
                fromPartial(object: Partial<_130.AllowedClassCreator>): _130.AllowedClassCreator;
                fromAmino(object: _130.AllowedClassCreatorAmino): _130.AllowedClassCreator;
                toAmino(message: _130.AllowedClassCreator): _130.AllowedClassCreatorAmino;
                fromAminoMsg(object: _130.AllowedClassCreatorAminoMsg): _130.AllowedClassCreator;
                fromProtoMsg(message: _130.AllowedClassCreatorProtoMsg): _130.AllowedClassCreator;
                toProto(message: _130.AllowedClassCreator): Uint8Array;
                toProtoMsg(message: _130.AllowedClassCreator): _130.AllowedClassCreatorProtoMsg;
            };
            ClassFee: {
                encode(message: _130.ClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.ClassFee;
                fromJSON(object: any): _130.ClassFee;
                toJSON(message: _130.ClassFee): unknown;
                fromPartial(object: Partial<_130.ClassFee>): _130.ClassFee;
                fromAmino(object: _130.ClassFeeAmino): _130.ClassFee;
                toAmino(message: _130.ClassFee): _130.ClassFeeAmino;
                fromAminoMsg(object: _130.ClassFeeAminoMsg): _130.ClassFee;
                fromProtoMsg(message: _130.ClassFeeProtoMsg): _130.ClassFee;
                toProto(message: _130.ClassFee): Uint8Array;
                toProtoMsg(message: _130.ClassFee): _130.ClassFeeProtoMsg;
            };
            AllowedBridgeChain: {
                encode(message: _130.AllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.AllowedBridgeChain;
                fromJSON(object: any): _130.AllowedBridgeChain;
                toJSON(message: _130.AllowedBridgeChain): unknown;
                fromPartial(object: Partial<_130.AllowedBridgeChain>): _130.AllowedBridgeChain;
                fromAmino(object: _130.AllowedBridgeChainAmino): _130.AllowedBridgeChain;
                toAmino(message: _130.AllowedBridgeChain): _130.AllowedBridgeChainAmino;
                fromAminoMsg(object: _130.AllowedBridgeChainAminoMsg): _130.AllowedBridgeChain;
                fromProtoMsg(message: _130.AllowedBridgeChainProtoMsg): _130.AllowedBridgeChain;
                toProto(message: _130.AllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _130.AllowedBridgeChain): _130.AllowedBridgeChainProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _129.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassesRequest;
                fromJSON(object: any): _129.QueryClassesRequest;
                toJSON(message: _129.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_129.QueryClassesRequest>): _129.QueryClassesRequest;
                fromAmino(object: _129.QueryClassesRequestAmino): _129.QueryClassesRequest;
                toAmino(message: _129.QueryClassesRequest): _129.QueryClassesRequestAmino;
                fromAminoMsg(object: _129.QueryClassesRequestAminoMsg): _129.QueryClassesRequest;
                fromProtoMsg(message: _129.QueryClassesRequestProtoMsg): _129.QueryClassesRequest;
                toProto(message: _129.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryClassesRequest): _129.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _129.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassesResponse;
                fromJSON(object: any): _129.QueryClassesResponse;
                toJSON(message: _129.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_129.QueryClassesResponse>): _129.QueryClassesResponse;
                fromAmino(object: _129.QueryClassesResponseAmino): _129.QueryClassesResponse;
                toAmino(message: _129.QueryClassesResponse): _129.QueryClassesResponseAmino;
                fromAminoMsg(object: _129.QueryClassesResponseAminoMsg): _129.QueryClassesResponse;
                fromProtoMsg(message: _129.QueryClassesResponseProtoMsg): _129.QueryClassesResponse;
                toProto(message: _129.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryClassesResponse): _129.QueryClassesResponseProtoMsg;
            };
            QueryClassesByAdminRequest: {
                encode(message: _129.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassesByAdminRequest;
                fromJSON(object: any): _129.QueryClassesByAdminRequest;
                toJSON(message: _129.QueryClassesByAdminRequest): unknown;
                fromPartial(object: Partial<_129.QueryClassesByAdminRequest>): _129.QueryClassesByAdminRequest;
                fromAmino(object: _129.QueryClassesByAdminRequestAmino): _129.QueryClassesByAdminRequest;
                toAmino(message: _129.QueryClassesByAdminRequest): _129.QueryClassesByAdminRequestAmino;
                fromAminoMsg(object: _129.QueryClassesByAdminRequestAminoMsg): _129.QueryClassesByAdminRequest;
                fromProtoMsg(message: _129.QueryClassesByAdminRequestProtoMsg): _129.QueryClassesByAdminRequest;
                toProto(message: _129.QueryClassesByAdminRequest): Uint8Array;
                toProtoMsg(message: _129.QueryClassesByAdminRequest): _129.QueryClassesByAdminRequestProtoMsg;
            };
            QueryClassesByAdminResponse: {
                encode(message: _129.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassesByAdminResponse;
                fromJSON(object: any): _129.QueryClassesByAdminResponse;
                toJSON(message: _129.QueryClassesByAdminResponse): unknown;
                fromPartial(object: Partial<_129.QueryClassesByAdminResponse>): _129.QueryClassesByAdminResponse;
                fromAmino(object: _129.QueryClassesByAdminResponseAmino): _129.QueryClassesByAdminResponse;
                toAmino(message: _129.QueryClassesByAdminResponse): _129.QueryClassesByAdminResponseAmino;
                fromAminoMsg(object: _129.QueryClassesByAdminResponseAminoMsg): _129.QueryClassesByAdminResponse;
                fromProtoMsg(message: _129.QueryClassesByAdminResponseProtoMsg): _129.QueryClassesByAdminResponse;
                toProto(message: _129.QueryClassesByAdminResponse): Uint8Array;
                toProtoMsg(message: _129.QueryClassesByAdminResponse): _129.QueryClassesByAdminResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _129.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassRequest;
                fromJSON(object: any): _129.QueryClassRequest;
                toJSON(message: _129.QueryClassRequest): unknown;
                fromPartial(object: Partial<_129.QueryClassRequest>): _129.QueryClassRequest;
                fromAmino(object: _129.QueryClassRequestAmino): _129.QueryClassRequest;
                toAmino(message: _129.QueryClassRequest): _129.QueryClassRequestAmino;
                fromAminoMsg(object: _129.QueryClassRequestAminoMsg): _129.QueryClassRequest;
                fromProtoMsg(message: _129.QueryClassRequestProtoMsg): _129.QueryClassRequest;
                toProto(message: _129.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _129.QueryClassRequest): _129.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _129.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassResponse;
                fromJSON(object: any): _129.QueryClassResponse;
                toJSON(message: _129.QueryClassResponse): unknown;
                fromPartial(object: Partial<_129.QueryClassResponse>): _129.QueryClassResponse;
                fromAmino(object: _129.QueryClassResponseAmino): _129.QueryClassResponse;
                toAmino(message: _129.QueryClassResponse): _129.QueryClassResponseAmino;
                fromAminoMsg(object: _129.QueryClassResponseAminoMsg): _129.QueryClassResponse;
                fromProtoMsg(message: _129.QueryClassResponseProtoMsg): _129.QueryClassResponse;
                toProto(message: _129.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _129.QueryClassResponse): _129.QueryClassResponseProtoMsg;
            };
            QueryClassIssuersRequest: {
                encode(message: _129.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassIssuersRequest;
                fromJSON(object: any): _129.QueryClassIssuersRequest;
                toJSON(message: _129.QueryClassIssuersRequest): unknown;
                fromPartial(object: Partial<_129.QueryClassIssuersRequest>): _129.QueryClassIssuersRequest;
                fromAmino(object: _129.QueryClassIssuersRequestAmino): _129.QueryClassIssuersRequest;
                toAmino(message: _129.QueryClassIssuersRequest): _129.QueryClassIssuersRequestAmino;
                fromAminoMsg(object: _129.QueryClassIssuersRequestAminoMsg): _129.QueryClassIssuersRequest;
                fromProtoMsg(message: _129.QueryClassIssuersRequestProtoMsg): _129.QueryClassIssuersRequest;
                toProto(message: _129.QueryClassIssuersRequest): Uint8Array;
                toProtoMsg(message: _129.QueryClassIssuersRequest): _129.QueryClassIssuersRequestProtoMsg;
            };
            QueryClassIssuersResponse: {
                encode(message: _129.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassIssuersResponse;
                fromJSON(object: any): _129.QueryClassIssuersResponse;
                toJSON(message: _129.QueryClassIssuersResponse): unknown;
                fromPartial(object: Partial<_129.QueryClassIssuersResponse>): _129.QueryClassIssuersResponse;
                fromAmino(object: _129.QueryClassIssuersResponseAmino): _129.QueryClassIssuersResponse;
                toAmino(message: _129.QueryClassIssuersResponse): _129.QueryClassIssuersResponseAmino;
                fromAminoMsg(object: _129.QueryClassIssuersResponseAminoMsg): _129.QueryClassIssuersResponse;
                fromProtoMsg(message: _129.QueryClassIssuersResponseProtoMsg): _129.QueryClassIssuersResponse;
                toProto(message: _129.QueryClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _129.QueryClassIssuersResponse): _129.QueryClassIssuersResponseProtoMsg;
            };
            QueryProjectsRequest: {
                encode(message: _129.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsRequest;
                fromJSON(object: any): _129.QueryProjectsRequest;
                toJSON(message: _129.QueryProjectsRequest): unknown;
                fromPartial(object: Partial<_129.QueryProjectsRequest>): _129.QueryProjectsRequest;
                fromAmino(object: _129.QueryProjectsRequestAmino): _129.QueryProjectsRequest;
                toAmino(message: _129.QueryProjectsRequest): _129.QueryProjectsRequestAmino;
                fromAminoMsg(object: _129.QueryProjectsRequestAminoMsg): _129.QueryProjectsRequest;
                fromProtoMsg(message: _129.QueryProjectsRequestProtoMsg): _129.QueryProjectsRequest;
                toProto(message: _129.QueryProjectsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsRequest): _129.QueryProjectsRequestProtoMsg;
            };
            QueryProjectsResponse: {
                encode(message: _129.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsResponse;
                fromJSON(object: any): _129.QueryProjectsResponse;
                toJSON(message: _129.QueryProjectsResponse): unknown;
                fromPartial(object: Partial<_129.QueryProjectsResponse>): _129.QueryProjectsResponse;
                fromAmino(object: _129.QueryProjectsResponseAmino): _129.QueryProjectsResponse;
                toAmino(message: _129.QueryProjectsResponse): _129.QueryProjectsResponseAmino;
                fromAminoMsg(object: _129.QueryProjectsResponseAminoMsg): _129.QueryProjectsResponse;
                fromProtoMsg(message: _129.QueryProjectsResponseProtoMsg): _129.QueryProjectsResponse;
                toProto(message: _129.QueryProjectsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsResponse): _129.QueryProjectsResponseProtoMsg;
            };
            QueryProjectsByClassRequest: {
                encode(message: _129.QueryProjectsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsByClassRequest;
                fromJSON(object: any): _129.QueryProjectsByClassRequest;
                toJSON(message: _129.QueryProjectsByClassRequest): unknown;
                fromPartial(object: Partial<_129.QueryProjectsByClassRequest>): _129.QueryProjectsByClassRequest;
                fromAmino(object: _129.QueryProjectsByClassRequestAmino): _129.QueryProjectsByClassRequest;
                toAmino(message: _129.QueryProjectsByClassRequest): _129.QueryProjectsByClassRequestAmino;
                fromAminoMsg(object: _129.QueryProjectsByClassRequestAminoMsg): _129.QueryProjectsByClassRequest;
                fromProtoMsg(message: _129.QueryProjectsByClassRequestProtoMsg): _129.QueryProjectsByClassRequest;
                toProto(message: _129.QueryProjectsByClassRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsByClassRequest): _129.QueryProjectsByClassRequestProtoMsg;
            };
            QueryProjectsByClassResponse: {
                encode(message: _129.QueryProjectsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsByClassResponse;
                fromJSON(object: any): _129.QueryProjectsByClassResponse;
                toJSON(message: _129.QueryProjectsByClassResponse): unknown;
                fromPartial(object: Partial<_129.QueryProjectsByClassResponse>): _129.QueryProjectsByClassResponse;
                fromAmino(object: _129.QueryProjectsByClassResponseAmino): _129.QueryProjectsByClassResponse;
                toAmino(message: _129.QueryProjectsByClassResponse): _129.QueryProjectsByClassResponseAmino;
                fromAminoMsg(object: _129.QueryProjectsByClassResponseAminoMsg): _129.QueryProjectsByClassResponse;
                fromProtoMsg(message: _129.QueryProjectsByClassResponseProtoMsg): _129.QueryProjectsByClassResponse;
                toProto(message: _129.QueryProjectsByClassResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsByClassResponse): _129.QueryProjectsByClassResponseProtoMsg;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _129.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _129.QueryProjectsByReferenceIdRequest;
                toJSON(message: _129.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: Partial<_129.QueryProjectsByReferenceIdRequest>): _129.QueryProjectsByReferenceIdRequest;
                fromAmino(object: _129.QueryProjectsByReferenceIdRequestAmino): _129.QueryProjectsByReferenceIdRequest;
                toAmino(message: _129.QueryProjectsByReferenceIdRequest): _129.QueryProjectsByReferenceIdRequestAmino;
                fromAminoMsg(object: _129.QueryProjectsByReferenceIdRequestAminoMsg): _129.QueryProjectsByReferenceIdRequest;
                fromProtoMsg(message: _129.QueryProjectsByReferenceIdRequestProtoMsg): _129.QueryProjectsByReferenceIdRequest;
                toProto(message: _129.QueryProjectsByReferenceIdRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsByReferenceIdRequest): _129.QueryProjectsByReferenceIdRequestProtoMsg;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _129.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _129.QueryProjectsByReferenceIdResponse;
                toJSON(message: _129.QueryProjectsByReferenceIdResponse): unknown;
                fromPartial(object: Partial<_129.QueryProjectsByReferenceIdResponse>): _129.QueryProjectsByReferenceIdResponse;
                fromAmino(object: _129.QueryProjectsByReferenceIdResponseAmino): _129.QueryProjectsByReferenceIdResponse;
                toAmino(message: _129.QueryProjectsByReferenceIdResponse): _129.QueryProjectsByReferenceIdResponseAmino;
                fromAminoMsg(object: _129.QueryProjectsByReferenceIdResponseAminoMsg): _129.QueryProjectsByReferenceIdResponse;
                fromProtoMsg(message: _129.QueryProjectsByReferenceIdResponseProtoMsg): _129.QueryProjectsByReferenceIdResponse;
                toProto(message: _129.QueryProjectsByReferenceIdResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsByReferenceIdResponse): _129.QueryProjectsByReferenceIdResponseProtoMsg;
            };
            QueryProjectsByAdminRequest: {
                encode(message: _129.QueryProjectsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsByAdminRequest;
                fromJSON(object: any): _129.QueryProjectsByAdminRequest;
                toJSON(message: _129.QueryProjectsByAdminRequest): unknown;
                fromPartial(object: Partial<_129.QueryProjectsByAdminRequest>): _129.QueryProjectsByAdminRequest;
                fromAmino(object: _129.QueryProjectsByAdminRequestAmino): _129.QueryProjectsByAdminRequest;
                toAmino(message: _129.QueryProjectsByAdminRequest): _129.QueryProjectsByAdminRequestAmino;
                fromAminoMsg(object: _129.QueryProjectsByAdminRequestAminoMsg): _129.QueryProjectsByAdminRequest;
                fromProtoMsg(message: _129.QueryProjectsByAdminRequestProtoMsg): _129.QueryProjectsByAdminRequest;
                toProto(message: _129.QueryProjectsByAdminRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsByAdminRequest): _129.QueryProjectsByAdminRequestProtoMsg;
            };
            QueryProjectsByAdminResponse: {
                encode(message: _129.QueryProjectsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectsByAdminResponse;
                fromJSON(object: any): _129.QueryProjectsByAdminResponse;
                toJSON(message: _129.QueryProjectsByAdminResponse): unknown;
                fromPartial(object: Partial<_129.QueryProjectsByAdminResponse>): _129.QueryProjectsByAdminResponse;
                fromAmino(object: _129.QueryProjectsByAdminResponseAmino): _129.QueryProjectsByAdminResponse;
                toAmino(message: _129.QueryProjectsByAdminResponse): _129.QueryProjectsByAdminResponseAmino;
                fromAminoMsg(object: _129.QueryProjectsByAdminResponseAminoMsg): _129.QueryProjectsByAdminResponse;
                fromProtoMsg(message: _129.QueryProjectsByAdminResponseProtoMsg): _129.QueryProjectsByAdminResponse;
                toProto(message: _129.QueryProjectsByAdminResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProjectsByAdminResponse): _129.QueryProjectsByAdminResponseProtoMsg;
            };
            QueryProjectRequest: {
                encode(message: _129.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectRequest;
                fromJSON(object: any): _129.QueryProjectRequest;
                toJSON(message: _129.QueryProjectRequest): unknown;
                fromPartial(object: Partial<_129.QueryProjectRequest>): _129.QueryProjectRequest;
                fromAmino(object: _129.QueryProjectRequestAmino): _129.QueryProjectRequest;
                toAmino(message: _129.QueryProjectRequest): _129.QueryProjectRequestAmino;
                fromAminoMsg(object: _129.QueryProjectRequestAminoMsg): _129.QueryProjectRequest;
                fromProtoMsg(message: _129.QueryProjectRequestProtoMsg): _129.QueryProjectRequest;
                toProto(message: _129.QueryProjectRequest): Uint8Array;
                toProtoMsg(message: _129.QueryProjectRequest): _129.QueryProjectRequestProtoMsg;
            };
            QueryProjectResponse: {
                encode(message: _129.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryProjectResponse;
                fromJSON(object: any): _129.QueryProjectResponse;
                toJSON(message: _129.QueryProjectResponse): unknown;
                fromPartial(object: Partial<_129.QueryProjectResponse>): _129.QueryProjectResponse;
                fromAmino(object: _129.QueryProjectResponseAmino): _129.QueryProjectResponse;
                toAmino(message: _129.QueryProjectResponse): _129.QueryProjectResponseAmino;
                fromAminoMsg(object: _129.QueryProjectResponseAminoMsg): _129.QueryProjectResponse;
                fromProtoMsg(message: _129.QueryProjectResponseProtoMsg): _129.QueryProjectResponse;
                toProto(message: _129.QueryProjectResponse): Uint8Array;
                toProtoMsg(message: _129.QueryProjectResponse): _129.QueryProjectResponseProtoMsg;
            };
            QueryBatchesRequest: {
                encode(message: _129.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesRequest;
                fromJSON(object: any): _129.QueryBatchesRequest;
                toJSON(message: _129.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_129.QueryBatchesRequest>): _129.QueryBatchesRequest;
                fromAmino(object: _129.QueryBatchesRequestAmino): _129.QueryBatchesRequest;
                toAmino(message: _129.QueryBatchesRequest): _129.QueryBatchesRequestAmino;
                fromAminoMsg(object: _129.QueryBatchesRequestAminoMsg): _129.QueryBatchesRequest;
                fromProtoMsg(message: _129.QueryBatchesRequestProtoMsg): _129.QueryBatchesRequest;
                toProto(message: _129.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesRequest): _129.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                encode(message: _129.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesResponse;
                fromJSON(object: any): _129.QueryBatchesResponse;
                toJSON(message: _129.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_129.QueryBatchesResponse>): _129.QueryBatchesResponse;
                fromAmino(object: _129.QueryBatchesResponseAmino): _129.QueryBatchesResponse;
                toAmino(message: _129.QueryBatchesResponse): _129.QueryBatchesResponseAmino;
                fromAminoMsg(object: _129.QueryBatchesResponseAminoMsg): _129.QueryBatchesResponse;
                fromProtoMsg(message: _129.QueryBatchesResponseProtoMsg): _129.QueryBatchesResponse;
                toProto(message: _129.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesResponse): _129.QueryBatchesResponseProtoMsg;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _129.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _129.QueryBatchesByIssuerRequest;
                toJSON(message: _129.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: Partial<_129.QueryBatchesByIssuerRequest>): _129.QueryBatchesByIssuerRequest;
                fromAmino(object: _129.QueryBatchesByIssuerRequestAmino): _129.QueryBatchesByIssuerRequest;
                toAmino(message: _129.QueryBatchesByIssuerRequest): _129.QueryBatchesByIssuerRequestAmino;
                fromAminoMsg(object: _129.QueryBatchesByIssuerRequestAminoMsg): _129.QueryBatchesByIssuerRequest;
                fromProtoMsg(message: _129.QueryBatchesByIssuerRequestProtoMsg): _129.QueryBatchesByIssuerRequest;
                toProto(message: _129.QueryBatchesByIssuerRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesByIssuerRequest): _129.QueryBatchesByIssuerRequestProtoMsg;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _129.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _129.QueryBatchesByIssuerResponse;
                toJSON(message: _129.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: Partial<_129.QueryBatchesByIssuerResponse>): _129.QueryBatchesByIssuerResponse;
                fromAmino(object: _129.QueryBatchesByIssuerResponseAmino): _129.QueryBatchesByIssuerResponse;
                toAmino(message: _129.QueryBatchesByIssuerResponse): _129.QueryBatchesByIssuerResponseAmino;
                fromAminoMsg(object: _129.QueryBatchesByIssuerResponseAminoMsg): _129.QueryBatchesByIssuerResponse;
                fromProtoMsg(message: _129.QueryBatchesByIssuerResponseProtoMsg): _129.QueryBatchesByIssuerResponse;
                toProto(message: _129.QueryBatchesByIssuerResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesByIssuerResponse): _129.QueryBatchesByIssuerResponseProtoMsg;
            };
            QueryBatchesByClassRequest: {
                encode(message: _129.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesByClassRequest;
                fromJSON(object: any): _129.QueryBatchesByClassRequest;
                toJSON(message: _129.QueryBatchesByClassRequest): unknown;
                fromPartial(object: Partial<_129.QueryBatchesByClassRequest>): _129.QueryBatchesByClassRequest;
                fromAmino(object: _129.QueryBatchesByClassRequestAmino): _129.QueryBatchesByClassRequest;
                toAmino(message: _129.QueryBatchesByClassRequest): _129.QueryBatchesByClassRequestAmino;
                fromAminoMsg(object: _129.QueryBatchesByClassRequestAminoMsg): _129.QueryBatchesByClassRequest;
                fromProtoMsg(message: _129.QueryBatchesByClassRequestProtoMsg): _129.QueryBatchesByClassRequest;
                toProto(message: _129.QueryBatchesByClassRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesByClassRequest): _129.QueryBatchesByClassRequestProtoMsg;
            };
            QueryBatchesByProjectRequest: {
                encode(message: _129.QueryBatchesByProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesByProjectRequest;
                fromJSON(object: any): _129.QueryBatchesByProjectRequest;
                toJSON(message: _129.QueryBatchesByProjectRequest): unknown;
                fromPartial(object: Partial<_129.QueryBatchesByProjectRequest>): _129.QueryBatchesByProjectRequest;
                fromAmino(object: _129.QueryBatchesByProjectRequestAmino): _129.QueryBatchesByProjectRequest;
                toAmino(message: _129.QueryBatchesByProjectRequest): _129.QueryBatchesByProjectRequestAmino;
                fromAminoMsg(object: _129.QueryBatchesByProjectRequestAminoMsg): _129.QueryBatchesByProjectRequest;
                fromProtoMsg(message: _129.QueryBatchesByProjectRequestProtoMsg): _129.QueryBatchesByProjectRequest;
                toProto(message: _129.QueryBatchesByProjectRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesByProjectRequest): _129.QueryBatchesByProjectRequestProtoMsg;
            };
            QueryBatchesByProjectResponse: {
                encode(message: _129.QueryBatchesByProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesByProjectResponse;
                fromJSON(object: any): _129.QueryBatchesByProjectResponse;
                toJSON(message: _129.QueryBatchesByProjectResponse): unknown;
                fromPartial(object: Partial<_129.QueryBatchesByProjectResponse>): _129.QueryBatchesByProjectResponse;
                fromAmino(object: _129.QueryBatchesByProjectResponseAmino): _129.QueryBatchesByProjectResponse;
                toAmino(message: _129.QueryBatchesByProjectResponse): _129.QueryBatchesByProjectResponseAmino;
                fromAminoMsg(object: _129.QueryBatchesByProjectResponseAminoMsg): _129.QueryBatchesByProjectResponse;
                fromProtoMsg(message: _129.QueryBatchesByProjectResponseProtoMsg): _129.QueryBatchesByProjectResponse;
                toProto(message: _129.QueryBatchesByProjectResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesByProjectResponse): _129.QueryBatchesByProjectResponseProtoMsg;
            };
            QueryBatchesByClassResponse: {
                encode(message: _129.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchesByClassResponse;
                fromJSON(object: any): _129.QueryBatchesByClassResponse;
                toJSON(message: _129.QueryBatchesByClassResponse): unknown;
                fromPartial(object: Partial<_129.QueryBatchesByClassResponse>): _129.QueryBatchesByClassResponse;
                fromAmino(object: _129.QueryBatchesByClassResponseAmino): _129.QueryBatchesByClassResponse;
                toAmino(message: _129.QueryBatchesByClassResponse): _129.QueryBatchesByClassResponseAmino;
                fromAminoMsg(object: _129.QueryBatchesByClassResponseAminoMsg): _129.QueryBatchesByClassResponse;
                fromProtoMsg(message: _129.QueryBatchesByClassResponseProtoMsg): _129.QueryBatchesByClassResponse;
                toProto(message: _129.QueryBatchesByClassResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBatchesByClassResponse): _129.QueryBatchesByClassResponseProtoMsg;
            };
            QueryBatchRequest: {
                encode(message: _129.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchRequest;
                fromJSON(object: any): _129.QueryBatchRequest;
                toJSON(message: _129.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_129.QueryBatchRequest>): _129.QueryBatchRequest;
                fromAmino(object: _129.QueryBatchRequestAmino): _129.QueryBatchRequest;
                toAmino(message: _129.QueryBatchRequest): _129.QueryBatchRequestAmino;
                fromAminoMsg(object: _129.QueryBatchRequestAminoMsg): _129.QueryBatchRequest;
                fromProtoMsg(message: _129.QueryBatchRequestProtoMsg): _129.QueryBatchRequest;
                toProto(message: _129.QueryBatchRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBatchRequest): _129.QueryBatchRequestProtoMsg;
            };
            QueryBatchResponse: {
                encode(message: _129.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBatchResponse;
                fromJSON(object: any): _129.QueryBatchResponse;
                toJSON(message: _129.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_129.QueryBatchResponse>): _129.QueryBatchResponse;
                fromAmino(object: _129.QueryBatchResponseAmino): _129.QueryBatchResponse;
                toAmino(message: _129.QueryBatchResponse): _129.QueryBatchResponseAmino;
                fromAminoMsg(object: _129.QueryBatchResponseAminoMsg): _129.QueryBatchResponse;
                fromProtoMsg(message: _129.QueryBatchResponseProtoMsg): _129.QueryBatchResponse;
                toProto(message: _129.QueryBatchResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBatchResponse): _129.QueryBatchResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _129.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBalanceRequest;
                fromJSON(object: any): _129.QueryBalanceRequest;
                toJSON(message: _129.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_129.QueryBalanceRequest>): _129.QueryBalanceRequest;
                fromAmino(object: _129.QueryBalanceRequestAmino): _129.QueryBalanceRequest;
                toAmino(message: _129.QueryBalanceRequest): _129.QueryBalanceRequestAmino;
                fromAminoMsg(object: _129.QueryBalanceRequestAminoMsg): _129.QueryBalanceRequest;
                fromProtoMsg(message: _129.QueryBalanceRequestProtoMsg): _129.QueryBalanceRequest;
                toProto(message: _129.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBalanceRequest): _129.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _129.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBalanceResponse;
                fromJSON(object: any): _129.QueryBalanceResponse;
                toJSON(message: _129.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_129.QueryBalanceResponse>): _129.QueryBalanceResponse;
                fromAmino(object: _129.QueryBalanceResponseAmino): _129.QueryBalanceResponse;
                toAmino(message: _129.QueryBalanceResponse): _129.QueryBalanceResponseAmino;
                fromAminoMsg(object: _129.QueryBalanceResponseAminoMsg): _129.QueryBalanceResponse;
                fromProtoMsg(message: _129.QueryBalanceResponseProtoMsg): _129.QueryBalanceResponse;
                toProto(message: _129.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBalanceResponse): _129.QueryBalanceResponseProtoMsg;
            };
            QueryBalancesRequest: {
                encode(message: _129.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBalancesRequest;
                fromJSON(object: any): _129.QueryBalancesRequest;
                toJSON(message: _129.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_129.QueryBalancesRequest>): _129.QueryBalancesRequest;
                fromAmino(object: _129.QueryBalancesRequestAmino): _129.QueryBalancesRequest;
                toAmino(message: _129.QueryBalancesRequest): _129.QueryBalancesRequestAmino;
                fromAminoMsg(object: _129.QueryBalancesRequestAminoMsg): _129.QueryBalancesRequest;
                fromProtoMsg(message: _129.QueryBalancesRequestProtoMsg): _129.QueryBalancesRequest;
                toProto(message: _129.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBalancesRequest): _129.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                encode(message: _129.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBalancesResponse;
                fromJSON(object: any): _129.QueryBalancesResponse;
                toJSON(message: _129.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_129.QueryBalancesResponse>): _129.QueryBalancesResponse;
                fromAmino(object: _129.QueryBalancesResponseAmino): _129.QueryBalancesResponse;
                toAmino(message: _129.QueryBalancesResponse): _129.QueryBalancesResponseAmino;
                fromAminoMsg(object: _129.QueryBalancesResponseAminoMsg): _129.QueryBalancesResponse;
                fromProtoMsg(message: _129.QueryBalancesResponseProtoMsg): _129.QueryBalancesResponse;
                toProto(message: _129.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBalancesResponse): _129.QueryBalancesResponseProtoMsg;
            };
            QueryBalancesByBatchRequest: {
                encode(message: _129.QueryBalancesByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBalancesByBatchRequest;
                fromJSON(object: any): _129.QueryBalancesByBatchRequest;
                toJSON(message: _129.QueryBalancesByBatchRequest): unknown;
                fromPartial(object: Partial<_129.QueryBalancesByBatchRequest>): _129.QueryBalancesByBatchRequest;
                fromAmino(object: _129.QueryBalancesByBatchRequestAmino): _129.QueryBalancesByBatchRequest;
                toAmino(message: _129.QueryBalancesByBatchRequest): _129.QueryBalancesByBatchRequestAmino;
                fromAminoMsg(object: _129.QueryBalancesByBatchRequestAminoMsg): _129.QueryBalancesByBatchRequest;
                fromProtoMsg(message: _129.QueryBalancesByBatchRequestProtoMsg): _129.QueryBalancesByBatchRequest;
                toProto(message: _129.QueryBalancesByBatchRequest): Uint8Array;
                toProtoMsg(message: _129.QueryBalancesByBatchRequest): _129.QueryBalancesByBatchRequestProtoMsg;
            };
            QueryBalancesByBatchResponse: {
                encode(message: _129.QueryBalancesByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryBalancesByBatchResponse;
                fromJSON(object: any): _129.QueryBalancesByBatchResponse;
                toJSON(message: _129.QueryBalancesByBatchResponse): unknown;
                fromPartial(object: Partial<_129.QueryBalancesByBatchResponse>): _129.QueryBalancesByBatchResponse;
                fromAmino(object: _129.QueryBalancesByBatchResponseAmino): _129.QueryBalancesByBatchResponse;
                toAmino(message: _129.QueryBalancesByBatchResponse): _129.QueryBalancesByBatchResponseAmino;
                fromAminoMsg(object: _129.QueryBalancesByBatchResponseAminoMsg): _129.QueryBalancesByBatchResponse;
                fromProtoMsg(message: _129.QueryBalancesByBatchResponseProtoMsg): _129.QueryBalancesByBatchResponse;
                toProto(message: _129.QueryBalancesByBatchResponse): Uint8Array;
                toProtoMsg(message: _129.QueryBalancesByBatchResponse): _129.QueryBalancesByBatchResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _129.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryAllBalancesRequest;
                fromJSON(object: any): _129.QueryAllBalancesRequest;
                toJSON(message: _129.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_129.QueryAllBalancesRequest>): _129.QueryAllBalancesRequest;
                fromAmino(object: _129.QueryAllBalancesRequestAmino): _129.QueryAllBalancesRequest;
                toAmino(message: _129.QueryAllBalancesRequest): _129.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _129.QueryAllBalancesRequestAminoMsg): _129.QueryAllBalancesRequest;
                fromProtoMsg(message: _129.QueryAllBalancesRequestProtoMsg): _129.QueryAllBalancesRequest;
                toProto(message: _129.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAllBalancesRequest): _129.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _129.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryAllBalancesResponse;
                fromJSON(object: any): _129.QueryAllBalancesResponse;
                toJSON(message: _129.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_129.QueryAllBalancesResponse>): _129.QueryAllBalancesResponse;
                fromAmino(object: _129.QueryAllBalancesResponseAmino): _129.QueryAllBalancesResponse;
                toAmino(message: _129.QueryAllBalancesResponse): _129.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _129.QueryAllBalancesResponseAminoMsg): _129.QueryAllBalancesResponse;
                fromProtoMsg(message: _129.QueryAllBalancesResponseProtoMsg): _129.QueryAllBalancesResponse;
                toProto(message: _129.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAllBalancesResponse): _129.QueryAllBalancesResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _129.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QuerySupplyRequest;
                fromJSON(object: any): _129.QuerySupplyRequest;
                toJSON(message: _129.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_129.QuerySupplyRequest>): _129.QuerySupplyRequest;
                fromAmino(object: _129.QuerySupplyRequestAmino): _129.QuerySupplyRequest;
                toAmino(message: _129.QuerySupplyRequest): _129.QuerySupplyRequestAmino;
                fromAminoMsg(object: _129.QuerySupplyRequestAminoMsg): _129.QuerySupplyRequest;
                fromProtoMsg(message: _129.QuerySupplyRequestProtoMsg): _129.QuerySupplyRequest;
                toProto(message: _129.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _129.QuerySupplyRequest): _129.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _129.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QuerySupplyResponse;
                fromJSON(object: any): _129.QuerySupplyResponse;
                toJSON(message: _129.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_129.QuerySupplyResponse>): _129.QuerySupplyResponse;
                fromAmino(object: _129.QuerySupplyResponseAmino): _129.QuerySupplyResponse;
                toAmino(message: _129.QuerySupplyResponse): _129.QuerySupplyResponseAmino;
                fromAminoMsg(object: _129.QuerySupplyResponseAminoMsg): _129.QuerySupplyResponse;
                fromProtoMsg(message: _129.QuerySupplyResponseProtoMsg): _129.QuerySupplyResponse;
                toProto(message: _129.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _129.QuerySupplyResponse): _129.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                encode(_: _129.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryCreditTypesRequest;
                fromJSON(_: any): _129.QueryCreditTypesRequest;
                toJSON(_: _129.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_129.QueryCreditTypesRequest>): _129.QueryCreditTypesRequest;
                fromAmino(_: _129.QueryCreditTypesRequestAmino): _129.QueryCreditTypesRequest;
                toAmino(_: _129.QueryCreditTypesRequest): _129.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _129.QueryCreditTypesRequestAminoMsg): _129.QueryCreditTypesRequest;
                fromProtoMsg(message: _129.QueryCreditTypesRequestProtoMsg): _129.QueryCreditTypesRequest;
                toProto(message: _129.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryCreditTypesRequest): _129.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                encode(message: _129.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryCreditTypesResponse;
                fromJSON(object: any): _129.QueryCreditTypesResponse;
                toJSON(message: _129.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_129.QueryCreditTypesResponse>): _129.QueryCreditTypesResponse;
                fromAmino(object: _129.QueryCreditTypesResponseAmino): _129.QueryCreditTypesResponse;
                toAmino(message: _129.QueryCreditTypesResponse): _129.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _129.QueryCreditTypesResponseAminoMsg): _129.QueryCreditTypesResponse;
                fromProtoMsg(message: _129.QueryCreditTypesResponseProtoMsg): _129.QueryCreditTypesResponse;
                toProto(message: _129.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryCreditTypesResponse): _129.QueryCreditTypesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryParamsRequest;
                fromJSON(_: any): _129.QueryParamsRequest;
                toJSON(_: _129.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
                fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
                toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
                fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
                fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
                toProto(message: _129.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryParamsResponse;
                fromJSON(object: any): _129.QueryParamsResponse;
                toJSON(message: _129.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
                fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
                toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
                fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
                fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
                toProto(message: _129.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
            };
            QueryCreditTypeRequest: {
                encode(message: _129.QueryCreditTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryCreditTypeRequest;
                fromJSON(object: any): _129.QueryCreditTypeRequest;
                toJSON(message: _129.QueryCreditTypeRequest): unknown;
                fromPartial(object: Partial<_129.QueryCreditTypeRequest>): _129.QueryCreditTypeRequest;
                fromAmino(object: _129.QueryCreditTypeRequestAmino): _129.QueryCreditTypeRequest;
                toAmino(message: _129.QueryCreditTypeRequest): _129.QueryCreditTypeRequestAmino;
                fromAminoMsg(object: _129.QueryCreditTypeRequestAminoMsg): _129.QueryCreditTypeRequest;
                fromProtoMsg(message: _129.QueryCreditTypeRequestProtoMsg): _129.QueryCreditTypeRequest;
                toProto(message: _129.QueryCreditTypeRequest): Uint8Array;
                toProtoMsg(message: _129.QueryCreditTypeRequest): _129.QueryCreditTypeRequestProtoMsg;
            };
            QueryCreditTypeResponse: {
                encode(message: _129.QueryCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryCreditTypeResponse;
                fromJSON(object: any): _129.QueryCreditTypeResponse;
                toJSON(message: _129.QueryCreditTypeResponse): unknown;
                fromPartial(object: Partial<_129.QueryCreditTypeResponse>): _129.QueryCreditTypeResponse;
                fromAmino(object: _129.QueryCreditTypeResponseAmino): _129.QueryCreditTypeResponse;
                toAmino(message: _129.QueryCreditTypeResponse): _129.QueryCreditTypeResponseAmino;
                fromAminoMsg(object: _129.QueryCreditTypeResponseAminoMsg): _129.QueryCreditTypeResponse;
                fromProtoMsg(message: _129.QueryCreditTypeResponseProtoMsg): _129.QueryCreditTypeResponse;
                toProto(message: _129.QueryCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _129.QueryCreditTypeResponse): _129.QueryCreditTypeResponseProtoMsg;
            };
            ClassInfo: {
                encode(message: _129.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.ClassInfo;
                fromJSON(object: any): _129.ClassInfo;
                toJSON(message: _129.ClassInfo): unknown;
                fromPartial(object: Partial<_129.ClassInfo>): _129.ClassInfo;
                fromAmino(object: _129.ClassInfoAmino): _129.ClassInfo;
                toAmino(message: _129.ClassInfo): _129.ClassInfoAmino;
                fromAminoMsg(object: _129.ClassInfoAminoMsg): _129.ClassInfo;
                fromProtoMsg(message: _129.ClassInfoProtoMsg): _129.ClassInfo;
                toProto(message: _129.ClassInfo): Uint8Array;
                toProtoMsg(message: _129.ClassInfo): _129.ClassInfoProtoMsg;
            };
            ProjectInfo: {
                encode(message: _129.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.ProjectInfo;
                fromJSON(object: any): _129.ProjectInfo;
                toJSON(message: _129.ProjectInfo): unknown;
                fromPartial(object: Partial<_129.ProjectInfo>): _129.ProjectInfo;
                fromAmino(object: _129.ProjectInfoAmino): _129.ProjectInfo;
                toAmino(message: _129.ProjectInfo): _129.ProjectInfoAmino;
                fromAminoMsg(object: _129.ProjectInfoAminoMsg): _129.ProjectInfo;
                fromProtoMsg(message: _129.ProjectInfoProtoMsg): _129.ProjectInfo;
                toProto(message: _129.ProjectInfo): Uint8Array;
                toProtoMsg(message: _129.ProjectInfo): _129.ProjectInfoProtoMsg;
            };
            BatchInfo: {
                encode(message: _129.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BatchInfo;
                fromJSON(object: any): _129.BatchInfo;
                toJSON(message: _129.BatchInfo): unknown;
                fromPartial(object: Partial<_129.BatchInfo>): _129.BatchInfo;
                fromAmino(object: _129.BatchInfoAmino): _129.BatchInfo;
                toAmino(message: _129.BatchInfo): _129.BatchInfoAmino;
                fromAminoMsg(object: _129.BatchInfoAminoMsg): _129.BatchInfo;
                fromProtoMsg(message: _129.BatchInfoProtoMsg): _129.BatchInfo;
                toProto(message: _129.BatchInfo): Uint8Array;
                toProtoMsg(message: _129.BatchInfo): _129.BatchInfoProtoMsg;
            };
            BatchBalanceInfo: {
                encode(message: _129.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BatchBalanceInfo;
                fromJSON(object: any): _129.BatchBalanceInfo;
                toJSON(message: _129.BatchBalanceInfo): unknown;
                fromPartial(object: Partial<_129.BatchBalanceInfo>): _129.BatchBalanceInfo;
                fromAmino(object: _129.BatchBalanceInfoAmino): _129.BatchBalanceInfo;
                toAmino(message: _129.BatchBalanceInfo): _129.BatchBalanceInfoAmino;
                fromAminoMsg(object: _129.BatchBalanceInfoAminoMsg): _129.BatchBalanceInfo;
                fromProtoMsg(message: _129.BatchBalanceInfoProtoMsg): _129.BatchBalanceInfo;
                toProto(message: _129.BatchBalanceInfo): Uint8Array;
                toProtoMsg(message: _129.BatchBalanceInfo): _129.BatchBalanceInfoProtoMsg;
            };
            QueryClassCreatorAllowlistRequest: {
                encode(_: _129.QueryClassCreatorAllowlistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassCreatorAllowlistRequest;
                fromJSON(_: any): _129.QueryClassCreatorAllowlistRequest;
                toJSON(_: _129.QueryClassCreatorAllowlistRequest): unknown;
                fromPartial(_: Partial<_129.QueryClassCreatorAllowlistRequest>): _129.QueryClassCreatorAllowlistRequest;
                fromAmino(_: _129.QueryClassCreatorAllowlistRequestAmino): _129.QueryClassCreatorAllowlistRequest;
                toAmino(_: _129.QueryClassCreatorAllowlistRequest): _129.QueryClassCreatorAllowlistRequestAmino;
                fromAminoMsg(object: _129.QueryClassCreatorAllowlistRequestAminoMsg): _129.QueryClassCreatorAllowlistRequest;
                fromProtoMsg(message: _129.QueryClassCreatorAllowlistRequestProtoMsg): _129.QueryClassCreatorAllowlistRequest;
                toProto(message: _129.QueryClassCreatorAllowlistRequest): Uint8Array;
                toProtoMsg(message: _129.QueryClassCreatorAllowlistRequest): _129.QueryClassCreatorAllowlistRequestProtoMsg;
            };
            QueryClassCreatorAllowlistResponse: {
                encode(message: _129.QueryClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassCreatorAllowlistResponse;
                fromJSON(object: any): _129.QueryClassCreatorAllowlistResponse;
                toJSON(message: _129.QueryClassCreatorAllowlistResponse): unknown;
                fromPartial(object: Partial<_129.QueryClassCreatorAllowlistResponse>): _129.QueryClassCreatorAllowlistResponse;
                fromAmino(object: _129.QueryClassCreatorAllowlistResponseAmino): _129.QueryClassCreatorAllowlistResponse;
                toAmino(message: _129.QueryClassCreatorAllowlistResponse): _129.QueryClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _129.QueryClassCreatorAllowlistResponseAminoMsg): _129.QueryClassCreatorAllowlistResponse;
                fromProtoMsg(message: _129.QueryClassCreatorAllowlistResponseProtoMsg): _129.QueryClassCreatorAllowlistResponse;
                toProto(message: _129.QueryClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _129.QueryClassCreatorAllowlistResponse): _129.QueryClassCreatorAllowlistResponseProtoMsg;
            };
            QueryAllowedClassCreatorsRequest: {
                encode(message: _129.QueryAllowedClassCreatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryAllowedClassCreatorsRequest;
                fromJSON(object: any): _129.QueryAllowedClassCreatorsRequest;
                toJSON(message: _129.QueryAllowedClassCreatorsRequest): unknown;
                fromPartial(object: Partial<_129.QueryAllowedClassCreatorsRequest>): _129.QueryAllowedClassCreatorsRequest;
                fromAmino(object: _129.QueryAllowedClassCreatorsRequestAmino): _129.QueryAllowedClassCreatorsRequest;
                toAmino(message: _129.QueryAllowedClassCreatorsRequest): _129.QueryAllowedClassCreatorsRequestAmino;
                fromAminoMsg(object: _129.QueryAllowedClassCreatorsRequestAminoMsg): _129.QueryAllowedClassCreatorsRequest;
                fromProtoMsg(message: _129.QueryAllowedClassCreatorsRequestProtoMsg): _129.QueryAllowedClassCreatorsRequest;
                toProto(message: _129.QueryAllowedClassCreatorsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAllowedClassCreatorsRequest): _129.QueryAllowedClassCreatorsRequestProtoMsg;
            };
            QueryAllowedClassCreatorsResponse: {
                encode(message: _129.QueryAllowedClassCreatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryAllowedClassCreatorsResponse;
                fromJSON(object: any): _129.QueryAllowedClassCreatorsResponse;
                toJSON(message: _129.QueryAllowedClassCreatorsResponse): unknown;
                fromPartial(object: Partial<_129.QueryAllowedClassCreatorsResponse>): _129.QueryAllowedClassCreatorsResponse;
                fromAmino(object: _129.QueryAllowedClassCreatorsResponseAmino): _129.QueryAllowedClassCreatorsResponse;
                toAmino(message: _129.QueryAllowedClassCreatorsResponse): _129.QueryAllowedClassCreatorsResponseAmino;
                fromAminoMsg(object: _129.QueryAllowedClassCreatorsResponseAminoMsg): _129.QueryAllowedClassCreatorsResponse;
                fromProtoMsg(message: _129.QueryAllowedClassCreatorsResponseProtoMsg): _129.QueryAllowedClassCreatorsResponse;
                toProto(message: _129.QueryAllowedClassCreatorsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAllowedClassCreatorsResponse): _129.QueryAllowedClassCreatorsResponseProtoMsg;
            };
            QueryClassFeeRequest: {
                encode(_: _129.QueryClassFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassFeeRequest;
                fromJSON(_: any): _129.QueryClassFeeRequest;
                toJSON(_: _129.QueryClassFeeRequest): unknown;
                fromPartial(_: Partial<_129.QueryClassFeeRequest>): _129.QueryClassFeeRequest;
                fromAmino(_: _129.QueryClassFeeRequestAmino): _129.QueryClassFeeRequest;
                toAmino(_: _129.QueryClassFeeRequest): _129.QueryClassFeeRequestAmino;
                fromAminoMsg(object: _129.QueryClassFeeRequestAminoMsg): _129.QueryClassFeeRequest;
                fromProtoMsg(message: _129.QueryClassFeeRequestProtoMsg): _129.QueryClassFeeRequest;
                toProto(message: _129.QueryClassFeeRequest): Uint8Array;
                toProtoMsg(message: _129.QueryClassFeeRequest): _129.QueryClassFeeRequestProtoMsg;
            };
            QueryClassFeeResponse: {
                encode(message: _129.QueryClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryClassFeeResponse;
                fromJSON(object: any): _129.QueryClassFeeResponse;
                toJSON(message: _129.QueryClassFeeResponse): unknown;
                fromPartial(object: Partial<_129.QueryClassFeeResponse>): _129.QueryClassFeeResponse;
                fromAmino(object: _129.QueryClassFeeResponseAmino): _129.QueryClassFeeResponse;
                toAmino(message: _129.QueryClassFeeResponse): _129.QueryClassFeeResponseAmino;
                fromAminoMsg(object: _129.QueryClassFeeResponseAminoMsg): _129.QueryClassFeeResponse;
                fromProtoMsg(message: _129.QueryClassFeeResponseProtoMsg): _129.QueryClassFeeResponse;
                toProto(message: _129.QueryClassFeeResponse): Uint8Array;
                toProtoMsg(message: _129.QueryClassFeeResponse): _129.QueryClassFeeResponseProtoMsg;
            };
            QueryAllowedBridgeChainsRequest: {
                encode(_: _129.QueryAllowedBridgeChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryAllowedBridgeChainsRequest;
                fromJSON(_: any): _129.QueryAllowedBridgeChainsRequest;
                toJSON(_: _129.QueryAllowedBridgeChainsRequest): unknown;
                fromPartial(_: Partial<_129.QueryAllowedBridgeChainsRequest>): _129.QueryAllowedBridgeChainsRequest;
                fromAmino(_: _129.QueryAllowedBridgeChainsRequestAmino): _129.QueryAllowedBridgeChainsRequest;
                toAmino(_: _129.QueryAllowedBridgeChainsRequest): _129.QueryAllowedBridgeChainsRequestAmino;
                fromAminoMsg(object: _129.QueryAllowedBridgeChainsRequestAminoMsg): _129.QueryAllowedBridgeChainsRequest;
                fromProtoMsg(message: _129.QueryAllowedBridgeChainsRequestProtoMsg): _129.QueryAllowedBridgeChainsRequest;
                toProto(message: _129.QueryAllowedBridgeChainsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryAllowedBridgeChainsRequest): _129.QueryAllowedBridgeChainsRequestProtoMsg;
            };
            QueryAllowedBridgeChainsResponse: {
                encode(message: _129.QueryAllowedBridgeChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.QueryAllowedBridgeChainsResponse;
                fromJSON(object: any): _129.QueryAllowedBridgeChainsResponse;
                toJSON(message: _129.QueryAllowedBridgeChainsResponse): unknown;
                fromPartial(object: Partial<_129.QueryAllowedBridgeChainsResponse>): _129.QueryAllowedBridgeChainsResponse;
                fromAmino(object: _129.QueryAllowedBridgeChainsResponseAmino): _129.QueryAllowedBridgeChainsResponse;
                toAmino(message: _129.QueryAllowedBridgeChainsResponse): _129.QueryAllowedBridgeChainsResponseAmino;
                fromAminoMsg(object: _129.QueryAllowedBridgeChainsResponseAminoMsg): _129.QueryAllowedBridgeChainsResponse;
                fromProtoMsg(message: _129.QueryAllowedBridgeChainsResponseProtoMsg): _129.QueryAllowedBridgeChainsResponse;
                toProto(message: _129.QueryAllowedBridgeChainsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryAllowedBridgeChainsResponse): _129.QueryAllowedBridgeChainsResponseProtoMsg;
            };
            EventCreateClass: {
                encode(message: _128.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventCreateClass;
                fromJSON(object: any): _128.EventCreateClass;
                toJSON(message: _128.EventCreateClass): unknown;
                fromPartial(object: Partial<_128.EventCreateClass>): _128.EventCreateClass;
                fromAmino(object: _128.EventCreateClassAmino): _128.EventCreateClass;
                toAmino(message: _128.EventCreateClass): _128.EventCreateClassAmino;
                fromAminoMsg(object: _128.EventCreateClassAminoMsg): _128.EventCreateClass;
                fromProtoMsg(message: _128.EventCreateClassProtoMsg): _128.EventCreateClass;
                toProto(message: _128.EventCreateClass): Uint8Array;
                toProtoMsg(message: _128.EventCreateClass): _128.EventCreateClassProtoMsg;
            };
            EventCreateProject: {
                encode(message: _128.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventCreateProject;
                fromJSON(object: any): _128.EventCreateProject;
                toJSON(message: _128.EventCreateProject): unknown;
                fromPartial(object: Partial<_128.EventCreateProject>): _128.EventCreateProject;
                fromAmino(object: _128.EventCreateProjectAmino): _128.EventCreateProject;
                toAmino(message: _128.EventCreateProject): _128.EventCreateProjectAmino;
                fromAminoMsg(object: _128.EventCreateProjectAminoMsg): _128.EventCreateProject;
                fromProtoMsg(message: _128.EventCreateProjectProtoMsg): _128.EventCreateProject;
                toProto(message: _128.EventCreateProject): Uint8Array;
                toProtoMsg(message: _128.EventCreateProject): _128.EventCreateProjectProtoMsg;
            };
            EventCreateBatch: {
                encode(message: _128.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventCreateBatch;
                fromJSON(object: any): _128.EventCreateBatch;
                toJSON(message: _128.EventCreateBatch): unknown;
                fromPartial(object: Partial<_128.EventCreateBatch>): _128.EventCreateBatch;
                fromAmino(object: _128.EventCreateBatchAmino): _128.EventCreateBatch;
                toAmino(message: _128.EventCreateBatch): _128.EventCreateBatchAmino;
                fromAminoMsg(object: _128.EventCreateBatchAminoMsg): _128.EventCreateBatch;
                fromProtoMsg(message: _128.EventCreateBatchProtoMsg): _128.EventCreateBatch;
                toProto(message: _128.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _128.EventCreateBatch): _128.EventCreateBatchProtoMsg;
            };
            EventMint: {
                encode(message: _128.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventMint;
                fromJSON(object: any): _128.EventMint;
                toJSON(message: _128.EventMint): unknown;
                fromPartial(object: Partial<_128.EventMint>): _128.EventMint;
                fromAmino(object: _128.EventMintAmino): _128.EventMint;
                toAmino(message: _128.EventMint): _128.EventMintAmino;
                fromAminoMsg(object: _128.EventMintAminoMsg): _128.EventMint;
                fromProtoMsg(message: _128.EventMintProtoMsg): _128.EventMint;
                toProto(message: _128.EventMint): Uint8Array;
                toProtoMsg(message: _128.EventMint): _128.EventMintProtoMsg;
            };
            EventMintBatchCredits: {
                encode(message: _128.EventMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventMintBatchCredits;
                fromJSON(object: any): _128.EventMintBatchCredits;
                toJSON(message: _128.EventMintBatchCredits): unknown;
                fromPartial(object: Partial<_128.EventMintBatchCredits>): _128.EventMintBatchCredits;
                fromAmino(object: _128.EventMintBatchCreditsAmino): _128.EventMintBatchCredits;
                toAmino(message: _128.EventMintBatchCredits): _128.EventMintBatchCreditsAmino;
                fromAminoMsg(object: _128.EventMintBatchCreditsAminoMsg): _128.EventMintBatchCredits;
                fromProtoMsg(message: _128.EventMintBatchCreditsProtoMsg): _128.EventMintBatchCredits;
                toProto(message: _128.EventMintBatchCredits): Uint8Array;
                toProtoMsg(message: _128.EventMintBatchCredits): _128.EventMintBatchCreditsProtoMsg;
            };
            EventTransfer: {
                encode(message: _128.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventTransfer;
                fromJSON(object: any): _128.EventTransfer;
                toJSON(message: _128.EventTransfer): unknown;
                fromPartial(object: Partial<_128.EventTransfer>): _128.EventTransfer;
                fromAmino(object: _128.EventTransferAmino): _128.EventTransfer;
                toAmino(message: _128.EventTransfer): _128.EventTransferAmino;
                fromAminoMsg(object: _128.EventTransferAminoMsg): _128.EventTransfer;
                fromProtoMsg(message: _128.EventTransferProtoMsg): _128.EventTransfer;
                toProto(message: _128.EventTransfer): Uint8Array;
                toProtoMsg(message: _128.EventTransfer): _128.EventTransferProtoMsg;
            };
            EventRetire: {
                encode(message: _128.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventRetire;
                fromJSON(object: any): _128.EventRetire;
                toJSON(message: _128.EventRetire): unknown;
                fromPartial(object: Partial<_128.EventRetire>): _128.EventRetire;
                fromAmino(object: _128.EventRetireAmino): _128.EventRetire;
                toAmino(message: _128.EventRetire): _128.EventRetireAmino;
                fromAminoMsg(object: _128.EventRetireAminoMsg): _128.EventRetire;
                fromProtoMsg(message: _128.EventRetireProtoMsg): _128.EventRetire;
                toProto(message: _128.EventRetire): Uint8Array;
                toProtoMsg(message: _128.EventRetire): _128.EventRetireProtoMsg;
            };
            EventCancel: {
                encode(message: _128.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventCancel;
                fromJSON(object: any): _128.EventCancel;
                toJSON(message: _128.EventCancel): unknown;
                fromPartial(object: Partial<_128.EventCancel>): _128.EventCancel;
                fromAmino(object: _128.EventCancelAmino): _128.EventCancel;
                toAmino(message: _128.EventCancel): _128.EventCancelAmino;
                fromAminoMsg(object: _128.EventCancelAminoMsg): _128.EventCancel;
                fromProtoMsg(message: _128.EventCancelProtoMsg): _128.EventCancel;
                toProto(message: _128.EventCancel): Uint8Array;
                toProtoMsg(message: _128.EventCancel): _128.EventCancelProtoMsg;
            };
            EventUpdateClassAdmin: {
                encode(message: _128.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventUpdateClassAdmin;
                fromJSON(object: any): _128.EventUpdateClassAdmin;
                toJSON(message: _128.EventUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_128.EventUpdateClassAdmin>): _128.EventUpdateClassAdmin;
                fromAmino(object: _128.EventUpdateClassAdminAmino): _128.EventUpdateClassAdmin;
                toAmino(message: _128.EventUpdateClassAdmin): _128.EventUpdateClassAdminAmino;
                fromAminoMsg(object: _128.EventUpdateClassAdminAminoMsg): _128.EventUpdateClassAdmin;
                fromProtoMsg(message: _128.EventUpdateClassAdminProtoMsg): _128.EventUpdateClassAdmin;
                toProto(message: _128.EventUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _128.EventUpdateClassAdmin): _128.EventUpdateClassAdminProtoMsg;
            };
            EventUpdateClassIssuers: {
                encode(message: _128.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventUpdateClassIssuers;
                fromJSON(object: any): _128.EventUpdateClassIssuers;
                toJSON(message: _128.EventUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_128.EventUpdateClassIssuers>): _128.EventUpdateClassIssuers;
                fromAmino(object: _128.EventUpdateClassIssuersAmino): _128.EventUpdateClassIssuers;
                toAmino(message: _128.EventUpdateClassIssuers): _128.EventUpdateClassIssuersAmino;
                fromAminoMsg(object: _128.EventUpdateClassIssuersAminoMsg): _128.EventUpdateClassIssuers;
                fromProtoMsg(message: _128.EventUpdateClassIssuersProtoMsg): _128.EventUpdateClassIssuers;
                toProto(message: _128.EventUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _128.EventUpdateClassIssuers): _128.EventUpdateClassIssuersProtoMsg;
            };
            EventUpdateClassMetadata: {
                encode(message: _128.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventUpdateClassMetadata;
                fromJSON(object: any): _128.EventUpdateClassMetadata;
                toJSON(message: _128.EventUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_128.EventUpdateClassMetadata>): _128.EventUpdateClassMetadata;
                fromAmino(object: _128.EventUpdateClassMetadataAmino): _128.EventUpdateClassMetadata;
                toAmino(message: _128.EventUpdateClassMetadata): _128.EventUpdateClassMetadataAmino;
                fromAminoMsg(object: _128.EventUpdateClassMetadataAminoMsg): _128.EventUpdateClassMetadata;
                fromProtoMsg(message: _128.EventUpdateClassMetadataProtoMsg): _128.EventUpdateClassMetadata;
                toProto(message: _128.EventUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _128.EventUpdateClassMetadata): _128.EventUpdateClassMetadataProtoMsg;
            };
            EventUpdateProjectAdmin: {
                encode(message: _128.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventUpdateProjectAdmin;
                fromJSON(object: any): _128.EventUpdateProjectAdmin;
                toJSON(message: _128.EventUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_128.EventUpdateProjectAdmin>): _128.EventUpdateProjectAdmin;
                fromAmino(object: _128.EventUpdateProjectAdminAmino): _128.EventUpdateProjectAdmin;
                toAmino(message: _128.EventUpdateProjectAdmin): _128.EventUpdateProjectAdminAmino;
                fromAminoMsg(object: _128.EventUpdateProjectAdminAminoMsg): _128.EventUpdateProjectAdmin;
                fromProtoMsg(message: _128.EventUpdateProjectAdminProtoMsg): _128.EventUpdateProjectAdmin;
                toProto(message: _128.EventUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _128.EventUpdateProjectAdmin): _128.EventUpdateProjectAdminProtoMsg;
            };
            EventUpdateProjectMetadata: {
                encode(message: _128.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventUpdateProjectMetadata;
                fromJSON(object: any): _128.EventUpdateProjectMetadata;
                toJSON(message: _128.EventUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_128.EventUpdateProjectMetadata>): _128.EventUpdateProjectMetadata;
                fromAmino(object: _128.EventUpdateProjectMetadataAmino): _128.EventUpdateProjectMetadata;
                toAmino(message: _128.EventUpdateProjectMetadata): _128.EventUpdateProjectMetadataAmino;
                fromAminoMsg(object: _128.EventUpdateProjectMetadataAminoMsg): _128.EventUpdateProjectMetadata;
                fromProtoMsg(message: _128.EventUpdateProjectMetadataProtoMsg): _128.EventUpdateProjectMetadata;
                toProto(message: _128.EventUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _128.EventUpdateProjectMetadata): _128.EventUpdateProjectMetadataProtoMsg;
            };
            EventUpdateBatchMetadata: {
                encode(message: _128.EventUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventUpdateBatchMetadata;
                fromJSON(object: any): _128.EventUpdateBatchMetadata;
                toJSON(message: _128.EventUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_128.EventUpdateBatchMetadata>): _128.EventUpdateBatchMetadata;
                fromAmino(object: _128.EventUpdateBatchMetadataAmino): _128.EventUpdateBatchMetadata;
                toAmino(message: _128.EventUpdateBatchMetadata): _128.EventUpdateBatchMetadataAmino;
                fromAminoMsg(object: _128.EventUpdateBatchMetadataAminoMsg): _128.EventUpdateBatchMetadata;
                fromProtoMsg(message: _128.EventUpdateBatchMetadataProtoMsg): _128.EventUpdateBatchMetadata;
                toProto(message: _128.EventUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _128.EventUpdateBatchMetadata): _128.EventUpdateBatchMetadataProtoMsg;
            };
            EventSealBatch: {
                encode(message: _128.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventSealBatch;
                fromJSON(object: any): _128.EventSealBatch;
                toJSON(message: _128.EventSealBatch): unknown;
                fromPartial(object: Partial<_128.EventSealBatch>): _128.EventSealBatch;
                fromAmino(object: _128.EventSealBatchAmino): _128.EventSealBatch;
                toAmino(message: _128.EventSealBatch): _128.EventSealBatchAmino;
                fromAminoMsg(object: _128.EventSealBatchAminoMsg): _128.EventSealBatch;
                fromProtoMsg(message: _128.EventSealBatchProtoMsg): _128.EventSealBatch;
                toProto(message: _128.EventSealBatch): Uint8Array;
                toProtoMsg(message: _128.EventSealBatch): _128.EventSealBatchProtoMsg;
            };
            EventAddCreditType: {
                encode(message: _128.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventAddCreditType;
                fromJSON(object: any): _128.EventAddCreditType;
                toJSON(message: _128.EventAddCreditType): unknown;
                fromPartial(object: Partial<_128.EventAddCreditType>): _128.EventAddCreditType;
                fromAmino(object: _128.EventAddCreditTypeAmino): _128.EventAddCreditType;
                toAmino(message: _128.EventAddCreditType): _128.EventAddCreditTypeAmino;
                fromAminoMsg(object: _128.EventAddCreditTypeAminoMsg): _128.EventAddCreditType;
                fromProtoMsg(message: _128.EventAddCreditTypeProtoMsg): _128.EventAddCreditType;
                toProto(message: _128.EventAddCreditType): Uint8Array;
                toProtoMsg(message: _128.EventAddCreditType): _128.EventAddCreditTypeProtoMsg;
            };
            EventBridge: {
                encode(message: _128.EventBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventBridge;
                fromJSON(object: any): _128.EventBridge;
                toJSON(message: _128.EventBridge): unknown;
                fromPartial(object: Partial<_128.EventBridge>): _128.EventBridge;
                fromAmino(object: _128.EventBridgeAmino): _128.EventBridge;
                toAmino(message: _128.EventBridge): _128.EventBridgeAmino;
                fromAminoMsg(object: _128.EventBridgeAminoMsg): _128.EventBridge;
                fromProtoMsg(message: _128.EventBridgeProtoMsg): _128.EventBridge;
                toProto(message: _128.EventBridge): Uint8Array;
                toProtoMsg(message: _128.EventBridge): _128.EventBridgeProtoMsg;
            };
            EventBridgeReceive: {
                encode(message: _128.EventBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.EventBridgeReceive;
                fromJSON(object: any): _128.EventBridgeReceive;
                toJSON(message: _128.EventBridgeReceive): unknown;
                fromPartial(object: Partial<_128.EventBridgeReceive>): _128.EventBridgeReceive;
                fromAmino(object: _128.EventBridgeReceiveAmino): _128.EventBridgeReceive;
                toAmino(message: _128.EventBridgeReceive): _128.EventBridgeReceiveAmino;
                fromAminoMsg(object: _128.EventBridgeReceiveAminoMsg): _128.EventBridgeReceive;
                fromProtoMsg(message: _128.EventBridgeReceiveProtoMsg): _128.EventBridgeReceive;
                toProto(message: _128.EventBridgeReceive): Uint8Array;
                toProtoMsg(message: _128.EventBridgeReceive): _128.EventBridgeReceiveProtoMsg;
            };
        };
        const v1alpha1: {
            LCDQueryClient: typeof _219.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _136.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _136.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _136.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _136.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _136.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _136.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _136.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _136.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _136.MsgCreateClass): {
                        typeUrl: string;
                        value: _136.MsgCreateClass;
                    };
                    createBatch(value: _136.MsgCreateBatch): {
                        typeUrl: string;
                        value: _136.MsgCreateBatch;
                    };
                    send(value: _136.MsgSend): {
                        typeUrl: string;
                        value: _136.MsgSend;
                    };
                    retire(value: _136.MsgRetire): {
                        typeUrl: string;
                        value: _136.MsgRetire;
                    };
                    cancel(value: _136.MsgCancel): {
                        typeUrl: string;
                        value: _136.MsgCancel;
                    };
                    updateClassAdmin(value: _136.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _136.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _136.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _136.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _136.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _136.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _136.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _136.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _136.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _136.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _136.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _136.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _136.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _136.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _136.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _136.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _136.MsgCreateClass): {
                        typeUrl: string;
                        value: _136.MsgCreateClass;
                    };
                    createBatch(value: _136.MsgCreateBatch): {
                        typeUrl: string;
                        value: _136.MsgCreateBatch;
                    };
                    send(value: _136.MsgSend): {
                        typeUrl: string;
                        value: _136.MsgSend;
                    };
                    retire(value: _136.MsgRetire): {
                        typeUrl: string;
                        value: _136.MsgRetire;
                    };
                    cancel(value: _136.MsgCancel): {
                        typeUrl: string;
                        value: _136.MsgCancel;
                    };
                    updateClassAdmin(value: _136.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _136.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _136.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _136.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _136.MsgCreateClass) => _136.MsgCreateClassAmino;
                    fromAmino: (object: _136.MsgCreateClassAmino) => _136.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _136.MsgCreateBatch) => _136.MsgCreateBatchAmino;
                    fromAmino: (object: _136.MsgCreateBatchAmino) => _136.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _136.MsgSend) => _136.MsgSendAmino;
                    fromAmino: (object: _136.MsgSendAmino) => _136.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _136.MsgRetire) => _136.MsgRetireAmino;
                    fromAmino: (object: _136.MsgRetireAmino) => _136.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _136.MsgCancel) => _136.MsgCancelAmino;
                    fromAmino: (object: _136.MsgCancelAmino) => _136.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _136.MsgUpdateClassAdmin) => _136.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _136.MsgUpdateClassAdminAmino) => _136.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _136.MsgUpdateClassIssuers) => _136.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _136.MsgUpdateClassIssuersAmino) => _136.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _136.MsgUpdateClassMetadata) => _136.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _136.MsgUpdateClassMetadataAmino) => _136.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _137.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.ClassInfo;
                fromJSON(object: any): _137.ClassInfo;
                toJSON(message: _137.ClassInfo): unknown;
                fromPartial(object: Partial<_137.ClassInfo>): _137.ClassInfo;
                fromAmino(object: _137.ClassInfoAmino): _137.ClassInfo;
                toAmino(message: _137.ClassInfo): _137.ClassInfoAmino;
                fromAminoMsg(object: _137.ClassInfoAminoMsg): _137.ClassInfo;
                fromProtoMsg(message: _137.ClassInfoProtoMsg): _137.ClassInfo;
                toProto(message: _137.ClassInfo): Uint8Array;
                toProtoMsg(message: _137.ClassInfo): _137.ClassInfoProtoMsg;
            };
            BatchInfo: {
                encode(message: _137.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.BatchInfo;
                fromJSON(object: any): _137.BatchInfo;
                toJSON(message: _137.BatchInfo): unknown;
                fromPartial(object: Partial<_137.BatchInfo>): _137.BatchInfo;
                fromAmino(object: _137.BatchInfoAmino): _137.BatchInfo;
                toAmino(message: _137.BatchInfo): _137.BatchInfoAmino;
                fromAminoMsg(object: _137.BatchInfoAminoMsg): _137.BatchInfo;
                fromProtoMsg(message: _137.BatchInfoProtoMsg): _137.BatchInfo;
                toProto(message: _137.BatchInfo): Uint8Array;
                toProtoMsg(message: _137.BatchInfo): _137.BatchInfoProtoMsg;
            };
            Params: {
                encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.Params;
                fromJSON(object: any): _137.Params;
                toJSON(message: _137.Params): unknown;
                fromPartial(object: Partial<_137.Params>): _137.Params;
                fromAmino(object: _137.ParamsAmino): _137.Params;
                toAmino(message: _137.Params): _137.ParamsAmino;
                fromAminoMsg(object: _137.ParamsAminoMsg): _137.Params;
                fromProtoMsg(message: _137.ParamsProtoMsg): _137.Params;
                toProto(message: _137.Params): Uint8Array;
                toProtoMsg(message: _137.Params): _137.ParamsProtoMsg;
            };
            CreditType: {
                encode(message: _137.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.CreditType;
                fromJSON(object: any): _137.CreditType;
                toJSON(message: _137.CreditType): unknown;
                fromPartial(object: Partial<_137.CreditType>): _137.CreditType;
                fromAmino(object: _137.CreditTypeAmino): _137.CreditType;
                toAmino(message: _137.CreditType): _137.CreditTypeAmino;
                fromAminoMsg(object: _137.CreditTypeAminoMsg): _137.CreditType;
                fromProtoMsg(message: _137.CreditTypeProtoMsg): _137.CreditType;
                toProto(message: _137.CreditType): Uint8Array;
                toProtoMsg(message: _137.CreditType): _137.CreditTypeProtoMsg;
            };
            CreditTypeSeq: {
                encode(message: _137.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.CreditTypeSeq;
                fromJSON(object: any): _137.CreditTypeSeq;
                toJSON(message: _137.CreditTypeSeq): unknown;
                fromPartial(object: Partial<_137.CreditTypeSeq>): _137.CreditTypeSeq;
                fromAmino(object: _137.CreditTypeSeqAmino): _137.CreditTypeSeq;
                toAmino(message: _137.CreditTypeSeq): _137.CreditTypeSeqAmino;
                fromAminoMsg(object: _137.CreditTypeSeqAminoMsg): _137.CreditTypeSeq;
                fromProtoMsg(message: _137.CreditTypeSeqProtoMsg): _137.CreditTypeSeq;
                toProto(message: _137.CreditTypeSeq): Uint8Array;
                toProtoMsg(message: _137.CreditTypeSeq): _137.CreditTypeSeqProtoMsg;
            };
            MsgCreateClass: {
                encode(message: _136.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCreateClass;
                fromJSON(object: any): _136.MsgCreateClass;
                toJSON(message: _136.MsgCreateClass): unknown;
                fromPartial(object: Partial<_136.MsgCreateClass>): _136.MsgCreateClass;
                fromAmino(object: _136.MsgCreateClassAmino): _136.MsgCreateClass;
                toAmino(message: _136.MsgCreateClass): _136.MsgCreateClassAmino;
                fromAminoMsg(object: _136.MsgCreateClassAminoMsg): _136.MsgCreateClass;
                fromProtoMsg(message: _136.MsgCreateClassProtoMsg): _136.MsgCreateClass;
                toProto(message: _136.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _136.MsgCreateClass): _136.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                encode(message: _136.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCreateClassResponse;
                fromJSON(object: any): _136.MsgCreateClassResponse;
                toJSON(message: _136.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_136.MsgCreateClassResponse>): _136.MsgCreateClassResponse;
                fromAmino(object: _136.MsgCreateClassResponseAmino): _136.MsgCreateClassResponse;
                toAmino(message: _136.MsgCreateClassResponse): _136.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _136.MsgCreateClassResponseAminoMsg): _136.MsgCreateClassResponse;
                fromProtoMsg(message: _136.MsgCreateClassResponseProtoMsg): _136.MsgCreateClassResponse;
                toProto(message: _136.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _136.MsgCreateClassResponse): _136.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateBatch: {
                encode(message: _136.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCreateBatch;
                fromJSON(object: any): _136.MsgCreateBatch;
                toJSON(message: _136.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_136.MsgCreateBatch>): _136.MsgCreateBatch;
                fromAmino(object: _136.MsgCreateBatchAmino): _136.MsgCreateBatch;
                toAmino(message: _136.MsgCreateBatch): _136.MsgCreateBatchAmino;
                fromAminoMsg(object: _136.MsgCreateBatchAminoMsg): _136.MsgCreateBatch;
                fromProtoMsg(message: _136.MsgCreateBatchProtoMsg): _136.MsgCreateBatch;
                toProto(message: _136.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _136.MsgCreateBatch): _136.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _136.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _136.MsgCreateBatch_BatchIssuance;
                toJSON(message: _136.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: Partial<_136.MsgCreateBatch_BatchIssuance>): _136.MsgCreateBatch_BatchIssuance;
                fromAmino(object: _136.MsgCreateBatch_BatchIssuanceAmino): _136.MsgCreateBatch_BatchIssuance;
                toAmino(message: _136.MsgCreateBatch_BatchIssuance): _136.MsgCreateBatch_BatchIssuanceAmino;
                fromAminoMsg(object: _136.MsgCreateBatch_BatchIssuanceAminoMsg): _136.MsgCreateBatch_BatchIssuance;
                fromProtoMsg(message: _136.MsgCreateBatch_BatchIssuanceProtoMsg): _136.MsgCreateBatch_BatchIssuance;
                toProto(message: _136.MsgCreateBatch_BatchIssuance): Uint8Array;
                toProtoMsg(message: _136.MsgCreateBatch_BatchIssuance): _136.MsgCreateBatch_BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                encode(message: _136.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCreateBatchResponse;
                fromJSON(object: any): _136.MsgCreateBatchResponse;
                toJSON(message: _136.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_136.MsgCreateBatchResponse>): _136.MsgCreateBatchResponse;
                fromAmino(object: _136.MsgCreateBatchResponseAmino): _136.MsgCreateBatchResponse;
                toAmino(message: _136.MsgCreateBatchResponse): _136.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _136.MsgCreateBatchResponseAminoMsg): _136.MsgCreateBatchResponse;
                fromProtoMsg(message: _136.MsgCreateBatchResponseProtoMsg): _136.MsgCreateBatchResponse;
                toProto(message: _136.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _136.MsgCreateBatchResponse): _136.MsgCreateBatchResponseProtoMsg;
            };
            MsgSend: {
                encode(message: _136.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgSend;
                fromJSON(object: any): _136.MsgSend;
                toJSON(message: _136.MsgSend): unknown;
                fromPartial(object: Partial<_136.MsgSend>): _136.MsgSend;
                fromAmino(object: _136.MsgSendAmino): _136.MsgSend;
                toAmino(message: _136.MsgSend): _136.MsgSendAmino;
                fromAminoMsg(object: _136.MsgSendAminoMsg): _136.MsgSend;
                fromProtoMsg(message: _136.MsgSendProtoMsg): _136.MsgSend;
                toProto(message: _136.MsgSend): Uint8Array;
                toProtoMsg(message: _136.MsgSend): _136.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                encode(message: _136.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgSend_SendCredits;
                fromJSON(object: any): _136.MsgSend_SendCredits;
                toJSON(message: _136.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_136.MsgSend_SendCredits>): _136.MsgSend_SendCredits;
                fromAmino(object: _136.MsgSend_SendCreditsAmino): _136.MsgSend_SendCredits;
                toAmino(message: _136.MsgSend_SendCredits): _136.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _136.MsgSend_SendCreditsAminoMsg): _136.MsgSend_SendCredits;
                fromProtoMsg(message: _136.MsgSend_SendCreditsProtoMsg): _136.MsgSend_SendCredits;
                toProto(message: _136.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _136.MsgSend_SendCredits): _136.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _136.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgSendResponse;
                fromJSON(_: any): _136.MsgSendResponse;
                toJSON(_: _136.MsgSendResponse): unknown;
                fromPartial(_: Partial<_136.MsgSendResponse>): _136.MsgSendResponse;
                fromAmino(_: _136.MsgSendResponseAmino): _136.MsgSendResponse;
                toAmino(_: _136.MsgSendResponse): _136.MsgSendResponseAmino;
                fromAminoMsg(object: _136.MsgSendResponseAminoMsg): _136.MsgSendResponse;
                fromProtoMsg(message: _136.MsgSendResponseProtoMsg): _136.MsgSendResponse;
                toProto(message: _136.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _136.MsgSendResponse): _136.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                encode(message: _136.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgRetire;
                fromJSON(object: any): _136.MsgRetire;
                toJSON(message: _136.MsgRetire): unknown;
                fromPartial(object: Partial<_136.MsgRetire>): _136.MsgRetire;
                fromAmino(object: _136.MsgRetireAmino): _136.MsgRetire;
                toAmino(message: _136.MsgRetire): _136.MsgRetireAmino;
                fromAminoMsg(object: _136.MsgRetireAminoMsg): _136.MsgRetire;
                fromProtoMsg(message: _136.MsgRetireProtoMsg): _136.MsgRetire;
                toProto(message: _136.MsgRetire): Uint8Array;
                toProtoMsg(message: _136.MsgRetire): _136.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                encode(message: _136.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgRetire_RetireCredits;
                fromJSON(object: any): _136.MsgRetire_RetireCredits;
                toJSON(message: _136.MsgRetire_RetireCredits): unknown;
                fromPartial(object: Partial<_136.MsgRetire_RetireCredits>): _136.MsgRetire_RetireCredits;
                fromAmino(object: _136.MsgRetire_RetireCreditsAmino): _136.MsgRetire_RetireCredits;
                toAmino(message: _136.MsgRetire_RetireCredits): _136.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _136.MsgRetire_RetireCreditsAminoMsg): _136.MsgRetire_RetireCredits;
                fromProtoMsg(message: _136.MsgRetire_RetireCreditsProtoMsg): _136.MsgRetire_RetireCredits;
                toProto(message: _136.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _136.MsgRetire_RetireCredits): _136.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                encode(_: _136.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgRetireResponse;
                fromJSON(_: any): _136.MsgRetireResponse;
                toJSON(_: _136.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_136.MsgRetireResponse>): _136.MsgRetireResponse;
                fromAmino(_: _136.MsgRetireResponseAmino): _136.MsgRetireResponse;
                toAmino(_: _136.MsgRetireResponse): _136.MsgRetireResponseAmino;
                fromAminoMsg(object: _136.MsgRetireResponseAminoMsg): _136.MsgRetireResponse;
                fromProtoMsg(message: _136.MsgRetireResponseProtoMsg): _136.MsgRetireResponse;
                toProto(message: _136.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _136.MsgRetireResponse): _136.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                encode(message: _136.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCancel;
                fromJSON(object: any): _136.MsgCancel;
                toJSON(message: _136.MsgCancel): unknown;
                fromPartial(object: Partial<_136.MsgCancel>): _136.MsgCancel;
                fromAmino(object: _136.MsgCancelAmino): _136.MsgCancel;
                toAmino(message: _136.MsgCancel): _136.MsgCancelAmino;
                fromAminoMsg(object: _136.MsgCancelAminoMsg): _136.MsgCancel;
                fromProtoMsg(message: _136.MsgCancelProtoMsg): _136.MsgCancel;
                toProto(message: _136.MsgCancel): Uint8Array;
                toProtoMsg(message: _136.MsgCancel): _136.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                encode(message: _136.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCancel_CancelCredits;
                fromJSON(object: any): _136.MsgCancel_CancelCredits;
                toJSON(message: _136.MsgCancel_CancelCredits): unknown;
                fromPartial(object: Partial<_136.MsgCancel_CancelCredits>): _136.MsgCancel_CancelCredits;
                fromAmino(object: _136.MsgCancel_CancelCreditsAmino): _136.MsgCancel_CancelCredits;
                toAmino(message: _136.MsgCancel_CancelCredits): _136.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _136.MsgCancel_CancelCreditsAminoMsg): _136.MsgCancel_CancelCredits;
                fromProtoMsg(message: _136.MsgCancel_CancelCreditsProtoMsg): _136.MsgCancel_CancelCredits;
                toProto(message: _136.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _136.MsgCancel_CancelCredits): _136.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                encode(_: _136.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgCancelResponse;
                fromJSON(_: any): _136.MsgCancelResponse;
                toJSON(_: _136.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_136.MsgCancelResponse>): _136.MsgCancelResponse;
                fromAmino(_: _136.MsgCancelResponseAmino): _136.MsgCancelResponse;
                toAmino(_: _136.MsgCancelResponse): _136.MsgCancelResponseAmino;
                fromAminoMsg(object: _136.MsgCancelResponseAminoMsg): _136.MsgCancelResponse;
                fromProtoMsg(message: _136.MsgCancelResponseProtoMsg): _136.MsgCancelResponse;
                toProto(message: _136.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _136.MsgCancelResponse): _136.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                encode(message: _136.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgUpdateClassAdmin;
                fromJSON(object: any): _136.MsgUpdateClassAdmin;
                toJSON(message: _136.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_136.MsgUpdateClassAdmin>): _136.MsgUpdateClassAdmin;
                fromAmino(object: _136.MsgUpdateClassAdminAmino): _136.MsgUpdateClassAdmin;
                toAmino(message: _136.MsgUpdateClassAdmin): _136.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _136.MsgUpdateClassAdminAminoMsg): _136.MsgUpdateClassAdmin;
                fromProtoMsg(message: _136.MsgUpdateClassAdminProtoMsg): _136.MsgUpdateClassAdmin;
                toProto(message: _136.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateClassAdmin): _136.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _136.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _136.MsgUpdateClassAdminResponse;
                toJSON(_: _136.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_136.MsgUpdateClassAdminResponse>): _136.MsgUpdateClassAdminResponse;
                fromAmino(_: _136.MsgUpdateClassAdminResponseAmino): _136.MsgUpdateClassAdminResponse;
                toAmino(_: _136.MsgUpdateClassAdminResponse): _136.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _136.MsgUpdateClassAdminResponseAminoMsg): _136.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _136.MsgUpdateClassAdminResponseProtoMsg): _136.MsgUpdateClassAdminResponse;
                toProto(message: _136.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateClassAdminResponse): _136.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                encode(message: _136.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgUpdateClassIssuers;
                fromJSON(object: any): _136.MsgUpdateClassIssuers;
                toJSON(message: _136.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_136.MsgUpdateClassIssuers>): _136.MsgUpdateClassIssuers;
                fromAmino(object: _136.MsgUpdateClassIssuersAmino): _136.MsgUpdateClassIssuers;
                toAmino(message: _136.MsgUpdateClassIssuers): _136.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _136.MsgUpdateClassIssuersAminoMsg): _136.MsgUpdateClassIssuers;
                fromProtoMsg(message: _136.MsgUpdateClassIssuersProtoMsg): _136.MsgUpdateClassIssuers;
                toProto(message: _136.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateClassIssuers): _136.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _136.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _136.MsgUpdateClassIssuersResponse;
                toJSON(_: _136.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_136.MsgUpdateClassIssuersResponse>): _136.MsgUpdateClassIssuersResponse;
                fromAmino(_: _136.MsgUpdateClassIssuersResponseAmino): _136.MsgUpdateClassIssuersResponse;
                toAmino(_: _136.MsgUpdateClassIssuersResponse): _136.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _136.MsgUpdateClassIssuersResponseAminoMsg): _136.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _136.MsgUpdateClassIssuersResponseProtoMsg): _136.MsgUpdateClassIssuersResponse;
                toProto(message: _136.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateClassIssuersResponse): _136.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                encode(message: _136.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgUpdateClassMetadata;
                fromJSON(object: any): _136.MsgUpdateClassMetadata;
                toJSON(message: _136.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_136.MsgUpdateClassMetadata>): _136.MsgUpdateClassMetadata;
                fromAmino(object: _136.MsgUpdateClassMetadataAmino): _136.MsgUpdateClassMetadata;
                toAmino(message: _136.MsgUpdateClassMetadata): _136.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _136.MsgUpdateClassMetadataAminoMsg): _136.MsgUpdateClassMetadata;
                fromProtoMsg(message: _136.MsgUpdateClassMetadataProtoMsg): _136.MsgUpdateClassMetadata;
                toProto(message: _136.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateClassMetadata): _136.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _136.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _136.MsgUpdateClassMetadataResponse;
                toJSON(_: _136.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_136.MsgUpdateClassMetadataResponse>): _136.MsgUpdateClassMetadataResponse;
                fromAmino(_: _136.MsgUpdateClassMetadataResponseAmino): _136.MsgUpdateClassMetadataResponse;
                toAmino(_: _136.MsgUpdateClassMetadataResponse): _136.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _136.MsgUpdateClassMetadataResponseAminoMsg): _136.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _136.MsgUpdateClassMetadataResponseProtoMsg): _136.MsgUpdateClassMetadataResponse;
                toProto(message: _136.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _136.MsgUpdateClassMetadataResponse): _136.MsgUpdateClassMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _135.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryParamsRequest;
                fromJSON(_: any): _135.QueryParamsRequest;
                toJSON(_: _135.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_135.QueryParamsRequest>): _135.QueryParamsRequest;
                fromAmino(_: _135.QueryParamsRequestAmino): _135.QueryParamsRequest;
                toAmino(_: _135.QueryParamsRequest): _135.QueryParamsRequestAmino;
                fromAminoMsg(object: _135.QueryParamsRequestAminoMsg): _135.QueryParamsRequest;
                fromProtoMsg(message: _135.QueryParamsRequestProtoMsg): _135.QueryParamsRequest;
                toProto(message: _135.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _135.QueryParamsRequest): _135.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _135.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryParamsResponse;
                fromJSON(object: any): _135.QueryParamsResponse;
                toJSON(message: _135.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_135.QueryParamsResponse>): _135.QueryParamsResponse;
                fromAmino(object: _135.QueryParamsResponseAmino): _135.QueryParamsResponse;
                toAmino(message: _135.QueryParamsResponse): _135.QueryParamsResponseAmino;
                fromAminoMsg(object: _135.QueryParamsResponseAminoMsg): _135.QueryParamsResponse;
                fromProtoMsg(message: _135.QueryParamsResponseProtoMsg): _135.QueryParamsResponse;
                toProto(message: _135.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _135.QueryParamsResponse): _135.QueryParamsResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _135.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryClassesRequest;
                fromJSON(object: any): _135.QueryClassesRequest;
                toJSON(message: _135.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_135.QueryClassesRequest>): _135.QueryClassesRequest;
                fromAmino(object: _135.QueryClassesRequestAmino): _135.QueryClassesRequest;
                toAmino(message: _135.QueryClassesRequest): _135.QueryClassesRequestAmino;
                fromAminoMsg(object: _135.QueryClassesRequestAminoMsg): _135.QueryClassesRequest;
                fromProtoMsg(message: _135.QueryClassesRequestProtoMsg): _135.QueryClassesRequest;
                toProto(message: _135.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _135.QueryClassesRequest): _135.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _135.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryClassesResponse;
                fromJSON(object: any): _135.QueryClassesResponse;
                toJSON(message: _135.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_135.QueryClassesResponse>): _135.QueryClassesResponse;
                fromAmino(object: _135.QueryClassesResponseAmino): _135.QueryClassesResponse;
                toAmino(message: _135.QueryClassesResponse): _135.QueryClassesResponseAmino;
                fromAminoMsg(object: _135.QueryClassesResponseAminoMsg): _135.QueryClassesResponse;
                fromProtoMsg(message: _135.QueryClassesResponseProtoMsg): _135.QueryClassesResponse;
                toProto(message: _135.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _135.QueryClassesResponse): _135.QueryClassesResponseProtoMsg;
            };
            QueryClassInfoRequest: {
                encode(message: _135.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryClassInfoRequest;
                fromJSON(object: any): _135.QueryClassInfoRequest;
                toJSON(message: _135.QueryClassInfoRequest): unknown;
                fromPartial(object: Partial<_135.QueryClassInfoRequest>): _135.QueryClassInfoRequest;
                fromAmino(object: _135.QueryClassInfoRequestAmino): _135.QueryClassInfoRequest;
                toAmino(message: _135.QueryClassInfoRequest): _135.QueryClassInfoRequestAmino;
                fromAminoMsg(object: _135.QueryClassInfoRequestAminoMsg): _135.QueryClassInfoRequest;
                fromProtoMsg(message: _135.QueryClassInfoRequestProtoMsg): _135.QueryClassInfoRequest;
                toProto(message: _135.QueryClassInfoRequest): Uint8Array;
                toProtoMsg(message: _135.QueryClassInfoRequest): _135.QueryClassInfoRequestProtoMsg;
            };
            QueryClassInfoResponse: {
                encode(message: _135.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryClassInfoResponse;
                fromJSON(object: any): _135.QueryClassInfoResponse;
                toJSON(message: _135.QueryClassInfoResponse): unknown;
                fromPartial(object: Partial<_135.QueryClassInfoResponse>): _135.QueryClassInfoResponse;
                fromAmino(object: _135.QueryClassInfoResponseAmino): _135.QueryClassInfoResponse;
                toAmino(message: _135.QueryClassInfoResponse): _135.QueryClassInfoResponseAmino;
                fromAminoMsg(object: _135.QueryClassInfoResponseAminoMsg): _135.QueryClassInfoResponse;
                fromProtoMsg(message: _135.QueryClassInfoResponseProtoMsg): _135.QueryClassInfoResponse;
                toProto(message: _135.QueryClassInfoResponse): Uint8Array;
                toProtoMsg(message: _135.QueryClassInfoResponse): _135.QueryClassInfoResponseProtoMsg;
            };
            QueryBatchesRequest: {
                encode(message: _135.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryBatchesRequest;
                fromJSON(object: any): _135.QueryBatchesRequest;
                toJSON(message: _135.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_135.QueryBatchesRequest>): _135.QueryBatchesRequest;
                fromAmino(object: _135.QueryBatchesRequestAmino): _135.QueryBatchesRequest;
                toAmino(message: _135.QueryBatchesRequest): _135.QueryBatchesRequestAmino;
                fromAminoMsg(object: _135.QueryBatchesRequestAminoMsg): _135.QueryBatchesRequest;
                fromProtoMsg(message: _135.QueryBatchesRequestProtoMsg): _135.QueryBatchesRequest;
                toProto(message: _135.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _135.QueryBatchesRequest): _135.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                encode(message: _135.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryBatchesResponse;
                fromJSON(object: any): _135.QueryBatchesResponse;
                toJSON(message: _135.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_135.QueryBatchesResponse>): _135.QueryBatchesResponse;
                fromAmino(object: _135.QueryBatchesResponseAmino): _135.QueryBatchesResponse;
                toAmino(message: _135.QueryBatchesResponse): _135.QueryBatchesResponseAmino;
                fromAminoMsg(object: _135.QueryBatchesResponseAminoMsg): _135.QueryBatchesResponse;
                fromProtoMsg(message: _135.QueryBatchesResponseProtoMsg): _135.QueryBatchesResponse;
                toProto(message: _135.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _135.QueryBatchesResponse): _135.QueryBatchesResponseProtoMsg;
            };
            QueryBatchInfoRequest: {
                encode(message: _135.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryBatchInfoRequest;
                fromJSON(object: any): _135.QueryBatchInfoRequest;
                toJSON(message: _135.QueryBatchInfoRequest): unknown;
                fromPartial(object: Partial<_135.QueryBatchInfoRequest>): _135.QueryBatchInfoRequest;
                fromAmino(object: _135.QueryBatchInfoRequestAmino): _135.QueryBatchInfoRequest;
                toAmino(message: _135.QueryBatchInfoRequest): _135.QueryBatchInfoRequestAmino;
                fromAminoMsg(object: _135.QueryBatchInfoRequestAminoMsg): _135.QueryBatchInfoRequest;
                fromProtoMsg(message: _135.QueryBatchInfoRequestProtoMsg): _135.QueryBatchInfoRequest;
                toProto(message: _135.QueryBatchInfoRequest): Uint8Array;
                toProtoMsg(message: _135.QueryBatchInfoRequest): _135.QueryBatchInfoRequestProtoMsg;
            };
            QueryBatchInfoResponse: {
                encode(message: _135.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryBatchInfoResponse;
                fromJSON(object: any): _135.QueryBatchInfoResponse;
                toJSON(message: _135.QueryBatchInfoResponse): unknown;
                fromPartial(object: Partial<_135.QueryBatchInfoResponse>): _135.QueryBatchInfoResponse;
                fromAmino(object: _135.QueryBatchInfoResponseAmino): _135.QueryBatchInfoResponse;
                toAmino(message: _135.QueryBatchInfoResponse): _135.QueryBatchInfoResponseAmino;
                fromAminoMsg(object: _135.QueryBatchInfoResponseAminoMsg): _135.QueryBatchInfoResponse;
                fromProtoMsg(message: _135.QueryBatchInfoResponseProtoMsg): _135.QueryBatchInfoResponse;
                toProto(message: _135.QueryBatchInfoResponse): Uint8Array;
                toProtoMsg(message: _135.QueryBatchInfoResponse): _135.QueryBatchInfoResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _135.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryBalanceRequest;
                fromJSON(object: any): _135.QueryBalanceRequest;
                toJSON(message: _135.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_135.QueryBalanceRequest>): _135.QueryBalanceRequest;
                fromAmino(object: _135.QueryBalanceRequestAmino): _135.QueryBalanceRequest;
                toAmino(message: _135.QueryBalanceRequest): _135.QueryBalanceRequestAmino;
                fromAminoMsg(object: _135.QueryBalanceRequestAminoMsg): _135.QueryBalanceRequest;
                fromProtoMsg(message: _135.QueryBalanceRequestProtoMsg): _135.QueryBalanceRequest;
                toProto(message: _135.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _135.QueryBalanceRequest): _135.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _135.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryBalanceResponse;
                fromJSON(object: any): _135.QueryBalanceResponse;
                toJSON(message: _135.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_135.QueryBalanceResponse>): _135.QueryBalanceResponse;
                fromAmino(object: _135.QueryBalanceResponseAmino): _135.QueryBalanceResponse;
                toAmino(message: _135.QueryBalanceResponse): _135.QueryBalanceResponseAmino;
                fromAminoMsg(object: _135.QueryBalanceResponseAminoMsg): _135.QueryBalanceResponse;
                fromProtoMsg(message: _135.QueryBalanceResponseProtoMsg): _135.QueryBalanceResponse;
                toProto(message: _135.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _135.QueryBalanceResponse): _135.QueryBalanceResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _135.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QuerySupplyRequest;
                fromJSON(object: any): _135.QuerySupplyRequest;
                toJSON(message: _135.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_135.QuerySupplyRequest>): _135.QuerySupplyRequest;
                fromAmino(object: _135.QuerySupplyRequestAmino): _135.QuerySupplyRequest;
                toAmino(message: _135.QuerySupplyRequest): _135.QuerySupplyRequestAmino;
                fromAminoMsg(object: _135.QuerySupplyRequestAminoMsg): _135.QuerySupplyRequest;
                fromProtoMsg(message: _135.QuerySupplyRequestProtoMsg): _135.QuerySupplyRequest;
                toProto(message: _135.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _135.QuerySupplyRequest): _135.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _135.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QuerySupplyResponse;
                fromJSON(object: any): _135.QuerySupplyResponse;
                toJSON(message: _135.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_135.QuerySupplyResponse>): _135.QuerySupplyResponse;
                fromAmino(object: _135.QuerySupplyResponseAmino): _135.QuerySupplyResponse;
                toAmino(message: _135.QuerySupplyResponse): _135.QuerySupplyResponseAmino;
                fromAminoMsg(object: _135.QuerySupplyResponseAminoMsg): _135.QuerySupplyResponse;
                fromProtoMsg(message: _135.QuerySupplyResponseProtoMsg): _135.QuerySupplyResponse;
                toProto(message: _135.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _135.QuerySupplyResponse): _135.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                encode(_: _135.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryCreditTypesRequest;
                fromJSON(_: any): _135.QueryCreditTypesRequest;
                toJSON(_: _135.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_135.QueryCreditTypesRequest>): _135.QueryCreditTypesRequest;
                fromAmino(_: _135.QueryCreditTypesRequestAmino): _135.QueryCreditTypesRequest;
                toAmino(_: _135.QueryCreditTypesRequest): _135.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _135.QueryCreditTypesRequestAminoMsg): _135.QueryCreditTypesRequest;
                fromProtoMsg(message: _135.QueryCreditTypesRequestProtoMsg): _135.QueryCreditTypesRequest;
                toProto(message: _135.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _135.QueryCreditTypesRequest): _135.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                encode(message: _135.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.QueryCreditTypesResponse;
                fromJSON(object: any): _135.QueryCreditTypesResponse;
                toJSON(message: _135.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_135.QueryCreditTypesResponse>): _135.QueryCreditTypesResponse;
                fromAmino(object: _135.QueryCreditTypesResponseAmino): _135.QueryCreditTypesResponse;
                toAmino(message: _135.QueryCreditTypesResponse): _135.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _135.QueryCreditTypesResponseAminoMsg): _135.QueryCreditTypesResponse;
                fromProtoMsg(message: _135.QueryCreditTypesResponseProtoMsg): _135.QueryCreditTypesResponse;
                toProto(message: _135.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _135.QueryCreditTypesResponse): _135.QueryCreditTypesResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.GenesisState;
                fromJSON(object: any): _134.GenesisState;
                toJSON(message: _134.GenesisState): unknown;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
                fromAmino(object: _134.GenesisStateAmino): _134.GenesisState;
                toAmino(message: _134.GenesisState): _134.GenesisStateAmino;
                fromAminoMsg(object: _134.GenesisStateAminoMsg): _134.GenesisState;
                fromProtoMsg(message: _134.GenesisStateProtoMsg): _134.GenesisState;
                toProto(message: _134.GenesisState): Uint8Array;
                toProtoMsg(message: _134.GenesisState): _134.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _134.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.Balance;
                fromJSON(object: any): _134.Balance;
                toJSON(message: _134.Balance): unknown;
                fromPartial(object: Partial<_134.Balance>): _134.Balance;
                fromAmino(object: _134.BalanceAmino): _134.Balance;
                toAmino(message: _134.Balance): _134.BalanceAmino;
                fromAminoMsg(object: _134.BalanceAminoMsg): _134.Balance;
                fromProtoMsg(message: _134.BalanceProtoMsg): _134.Balance;
                toProto(message: _134.Balance): Uint8Array;
                toProtoMsg(message: _134.Balance): _134.BalanceProtoMsg;
            };
            Supply: {
                encode(message: _134.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.Supply;
                fromJSON(object: any): _134.Supply;
                toJSON(message: _134.Supply): unknown;
                fromPartial(object: Partial<_134.Supply>): _134.Supply;
                fromAmino(object: _134.SupplyAmino): _134.Supply;
                toAmino(message: _134.Supply): _134.SupplyAmino;
                fromAminoMsg(object: _134.SupplyAminoMsg): _134.Supply;
                fromProtoMsg(message: _134.SupplyProtoMsg): _134.Supply;
                toProto(message: _134.Supply): Uint8Array;
                toProtoMsg(message: _134.Supply): _134.SupplyProtoMsg;
            };
            EventCreateClass: {
                encode(message: _133.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.EventCreateClass;
                fromJSON(object: any): _133.EventCreateClass;
                toJSON(message: _133.EventCreateClass): unknown;
                fromPartial(object: Partial<_133.EventCreateClass>): _133.EventCreateClass;
                fromAmino(object: _133.EventCreateClassAmino): _133.EventCreateClass;
                toAmino(message: _133.EventCreateClass): _133.EventCreateClassAmino;
                fromAminoMsg(object: _133.EventCreateClassAminoMsg): _133.EventCreateClass;
                fromProtoMsg(message: _133.EventCreateClassProtoMsg): _133.EventCreateClass;
                toProto(message: _133.EventCreateClass): Uint8Array;
                toProtoMsg(message: _133.EventCreateClass): _133.EventCreateClassProtoMsg;
            };
            EventCreateBatch: {
                encode(message: _133.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.EventCreateBatch;
                fromJSON(object: any): _133.EventCreateBatch;
                toJSON(message: _133.EventCreateBatch): unknown;
                fromPartial(object: Partial<_133.EventCreateBatch>): _133.EventCreateBatch;
                fromAmino(object: _133.EventCreateBatchAmino): _133.EventCreateBatch;
                toAmino(message: _133.EventCreateBatch): _133.EventCreateBatchAmino;
                fromAminoMsg(object: _133.EventCreateBatchAminoMsg): _133.EventCreateBatch;
                fromProtoMsg(message: _133.EventCreateBatchProtoMsg): _133.EventCreateBatch;
                toProto(message: _133.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _133.EventCreateBatch): _133.EventCreateBatchProtoMsg;
            };
            EventReceive: {
                encode(message: _133.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.EventReceive;
                fromJSON(object: any): _133.EventReceive;
                toJSON(message: _133.EventReceive): unknown;
                fromPartial(object: Partial<_133.EventReceive>): _133.EventReceive;
                fromAmino(object: _133.EventReceiveAmino): _133.EventReceive;
                toAmino(message: _133.EventReceive): _133.EventReceiveAmino;
                fromAminoMsg(object: _133.EventReceiveAminoMsg): _133.EventReceive;
                fromProtoMsg(message: _133.EventReceiveProtoMsg): _133.EventReceive;
                toProto(message: _133.EventReceive): Uint8Array;
                toProtoMsg(message: _133.EventReceive): _133.EventReceiveProtoMsg;
            };
            EventRetire: {
                encode(message: _133.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.EventRetire;
                fromJSON(object: any): _133.EventRetire;
                toJSON(message: _133.EventRetire): unknown;
                fromPartial(object: Partial<_133.EventRetire>): _133.EventRetire;
                fromAmino(object: _133.EventRetireAmino): _133.EventRetire;
                toAmino(message: _133.EventRetire): _133.EventRetireAmino;
                fromAminoMsg(object: _133.EventRetireAminoMsg): _133.EventRetire;
                fromProtoMsg(message: _133.EventRetireProtoMsg): _133.EventRetire;
                toProto(message: _133.EventRetire): Uint8Array;
                toProtoMsg(message: _133.EventRetire): _133.EventRetireProtoMsg;
            };
            EventCancel: {
                encode(message: _133.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.EventCancel;
                fromJSON(object: any): _133.EventCancel;
                toJSON(message: _133.EventCancel): unknown;
                fromPartial(object: Partial<_133.EventCancel>): _133.EventCancel;
                fromAmino(object: _133.EventCancelAmino): _133.EventCancel;
                toAmino(message: _133.EventCancel): _133.EventCancelAmino;
                fromAminoMsg(object: _133.EventCancelAminoMsg): _133.EventCancel;
                fromProtoMsg(message: _133.EventCancelProtoMsg): _133.EventCancel;
                toProto(message: _133.EventCancel): Uint8Array;
                toProtoMsg(message: _133.EventCancel): _133.EventCancelProtoMsg;
            };
        };
    }
    namespace intertx {
        const v1: {
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _139.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _139.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _139.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _139.MsgRegisterAccount;
                    };
                    submitTx(value: _139.MsgSubmitTx): {
                        typeUrl: string;
                        value: _139.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _139.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _139.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _139.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _139.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _139.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _139.MsgRegisterAccount;
                    };
                    submitTx(value: _139.MsgSubmitTx): {
                        typeUrl: string;
                        value: _139.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _139.MsgRegisterAccount) => _139.MsgRegisterAccountAmino;
                    fromAmino: (object: _139.MsgRegisterAccountAmino) => _139.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _139.MsgSubmitTx) => _139.MsgSubmitTxAmino;
                    fromAmino: (object: _139.MsgSubmitTxAmino) => _139.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _139.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.MsgRegisterAccount;
                fromJSON(object: any): _139.MsgRegisterAccount;
                toJSON(message: _139.MsgRegisterAccount): unknown;
                fromPartial(object: Partial<_139.MsgRegisterAccount>): _139.MsgRegisterAccount;
                fromAmino(object: _139.MsgRegisterAccountAmino): _139.MsgRegisterAccount;
                toAmino(message: _139.MsgRegisterAccount): _139.MsgRegisterAccountAmino;
                fromAminoMsg(object: _139.MsgRegisterAccountAminoMsg): _139.MsgRegisterAccount;
                fromProtoMsg(message: _139.MsgRegisterAccountProtoMsg): _139.MsgRegisterAccount;
                toProto(message: _139.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _139.MsgRegisterAccount): _139.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                encode(_: _139.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.MsgRegisterAccountResponse;
                fromJSON(_: any): _139.MsgRegisterAccountResponse;
                toJSON(_: _139.MsgRegisterAccountResponse): unknown;
                fromPartial(_: Partial<_139.MsgRegisterAccountResponse>): _139.MsgRegisterAccountResponse;
                fromAmino(_: _139.MsgRegisterAccountResponseAmino): _139.MsgRegisterAccountResponse;
                toAmino(_: _139.MsgRegisterAccountResponse): _139.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _139.MsgRegisterAccountResponseAminoMsg): _139.MsgRegisterAccountResponse;
                fromProtoMsg(message: _139.MsgRegisterAccountResponseProtoMsg): _139.MsgRegisterAccountResponse;
                toProto(message: _139.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _139.MsgRegisterAccountResponse): _139.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                encode(message: _139.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.MsgSubmitTx;
                fromJSON(object: any): _139.MsgSubmitTx;
                toJSON(message: _139.MsgSubmitTx): unknown;
                fromPartial(object: Partial<_139.MsgSubmitTx>): _139.MsgSubmitTx;
                fromAmino(object: _139.MsgSubmitTxAmino): _139.MsgSubmitTx;
                toAmino(message: _139.MsgSubmitTx): _139.MsgSubmitTxAmino;
                fromAminoMsg(object: _139.MsgSubmitTxAminoMsg): _139.MsgSubmitTx;
                fromProtoMsg(message: _139.MsgSubmitTxProtoMsg): _139.MsgSubmitTx;
                toProto(message: _139.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _139.MsgSubmitTx): _139.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                encode(_: _139.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.MsgSubmitTxResponse;
                fromJSON(_: any): _139.MsgSubmitTxResponse;
                toJSON(_: _139.MsgSubmitTxResponse): unknown;
                fromPartial(_: Partial<_139.MsgSubmitTxResponse>): _139.MsgSubmitTxResponse;
                fromAmino(_: _139.MsgSubmitTxResponseAmino): _139.MsgSubmitTxResponse;
                toAmino(_: _139.MsgSubmitTxResponse): _139.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _139.MsgSubmitTxResponseAminoMsg): _139.MsgSubmitTxResponse;
                fromProtoMsg(message: _139.MsgSubmitTxResponseProtoMsg): _139.MsgSubmitTxResponse;
                toProto(message: _139.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _139.MsgSubmitTxResponse): _139.MsgSubmitTxResponseProtoMsg;
            };
            QueryInterchainAccountRequest: {
                encode(message: _138.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.QueryInterchainAccountRequest;
                fromJSON(object: any): _138.QueryInterchainAccountRequest;
                toJSON(message: _138.QueryInterchainAccountRequest): unknown;
                fromPartial(object: Partial<_138.QueryInterchainAccountRequest>): _138.QueryInterchainAccountRequest;
                fromAmino(object: _138.QueryInterchainAccountRequestAmino): _138.QueryInterchainAccountRequest;
                toAmino(message: _138.QueryInterchainAccountRequest): _138.QueryInterchainAccountRequestAmino;
                fromAminoMsg(object: _138.QueryInterchainAccountRequestAminoMsg): _138.QueryInterchainAccountRequest;
                fromProtoMsg(message: _138.QueryInterchainAccountRequestProtoMsg): _138.QueryInterchainAccountRequest;
                toProto(message: _138.QueryInterchainAccountRequest): Uint8Array;
                toProtoMsg(message: _138.QueryInterchainAccountRequest): _138.QueryInterchainAccountRequestProtoMsg;
            };
            QueryInterchainAccountResponse: {
                encode(message: _138.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.QueryInterchainAccountResponse;
                fromJSON(object: any): _138.QueryInterchainAccountResponse;
                toJSON(message: _138.QueryInterchainAccountResponse): unknown;
                fromPartial(object: Partial<_138.QueryInterchainAccountResponse>): _138.QueryInterchainAccountResponse;
                fromAmino(object: _138.QueryInterchainAccountResponseAmino): _138.QueryInterchainAccountResponse;
                toAmino(message: _138.QueryInterchainAccountResponse): _138.QueryInterchainAccountResponseAmino;
                fromAminoMsg(object: _138.QueryInterchainAccountResponseAminoMsg): _138.QueryInterchainAccountResponse;
                fromProtoMsg(message: _138.QueryInterchainAccountResponseProtoMsg): _138.QueryInterchainAccountResponse;
                toProto(message: _138.QueryInterchainAccountResponse): Uint8Array;
                toProtoMsg(message: _138.QueryInterchainAccountResponse): _138.QueryInterchainAccountResponseProtoMsg;
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
                    v1: _215.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _216.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _217.LCDQueryClient;
                    };
                    v1: _218.LCDQueryClient;
                    v1alpha1: _219.LCDQueryClient;
                };
                intertx: {
                    v1: _220.LCDQueryClient;
                };
            };
        }>;
    };
}
