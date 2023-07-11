import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./core/client/v1/client";
import * as _109 from "./core/client/v1/genesis";
import * as _110 from "./core/client/v1/query";
import * as _111 from "./core/client/v1/tx";
import * as _234 from "./applications/transfer/v1/query.lcd";
import * as _235 from "./core/client/v1/query.lcd";
import * as _236 from "./applications/transfer/v1/query.rpc.Query";
import * as _237 from "./core/client/v1/query.rpc.Query";
import * as _238 from "./applications/transfer/v1/tx.rpc.msg";
import * as _239 from "./core/client/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _238.MsgClientImpl;
                QueryClientImpl: typeof _236.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _105.QueryDenomTraceRequest): Promise<_105.QueryDenomTraceResponse>;
                    denomTraces(request?: _105.QueryDenomTracesRequest | undefined): Promise<_105.QueryDenomTracesResponse>;
                    params(request?: _105.QueryParamsRequest | undefined): Promise<_105.QueryParamsResponse>;
                    denomHash(request: _105.QueryDenomHashRequest): Promise<_105.QueryDenomHashResponse>;
                    escrowAddress(request: _105.QueryEscrowAddressRequest): Promise<_105.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _234.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _107.MsgTransfer) => _107.MsgTransferAmino;
                        fromAmino: (object: _107.MsgTransferAmino) => _107.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _107.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgTransfer;
                    fromJSON(object: any): _107.MsgTransfer;
                    toJSON(message: _107.MsgTransfer): unknown;
                    fromPartial(object: Partial<_107.MsgTransfer>): _107.MsgTransfer;
                    fromAmino(object: _107.MsgTransferAmino): _107.MsgTransfer;
                    toAmino(message: _107.MsgTransfer): _107.MsgTransferAmino;
                    fromAminoMsg(object: _107.MsgTransferAminoMsg): _107.MsgTransfer;
                    toAminoMsg(message: _107.MsgTransfer): _107.MsgTransferAminoMsg;
                    fromProtoMsg(message: _107.MsgTransferProtoMsg): _107.MsgTransfer;
                    toProto(message: _107.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _107.MsgTransfer): _107.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(_: _107.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgTransferResponse;
                    fromJSON(_: any): _107.MsgTransferResponse;
                    toJSON(_: _107.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_107.MsgTransferResponse>): _107.MsgTransferResponse;
                    fromAmino(_: _107.MsgTransferResponseAmino): _107.MsgTransferResponse;
                    toAmino(_: _107.MsgTransferResponse): _107.MsgTransferResponseAmino;
                    fromAminoMsg(object: _107.MsgTransferResponseAminoMsg): _107.MsgTransferResponse;
                    toAminoMsg(message: _107.MsgTransferResponse): _107.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgTransferResponseProtoMsg): _107.MsgTransferResponse;
                    toProto(message: _107.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgTransferResponse): _107.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _106.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.DenomTrace;
                    fromJSON(object: any): _106.DenomTrace;
                    toJSON(message: _106.DenomTrace): unknown;
                    fromPartial(object: Partial<_106.DenomTrace>): _106.DenomTrace;
                    fromAmino(object: _106.DenomTraceAmino): _106.DenomTrace;
                    toAmino(message: _106.DenomTrace): _106.DenomTraceAmino;
                    fromAminoMsg(object: _106.DenomTraceAminoMsg): _106.DenomTrace;
                    toAminoMsg(message: _106.DenomTrace): _106.DenomTraceAminoMsg;
                    fromProtoMsg(message: _106.DenomTraceProtoMsg): _106.DenomTrace;
                    toProto(message: _106.DenomTrace): Uint8Array;
                    toProtoMsg(message: _106.DenomTrace): _106.DenomTraceProtoMsg;
                };
                Params: {
                    encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.Params;
                    fromJSON(object: any): _106.Params;
                    toJSON(message: _106.Params): unknown;
                    fromPartial(object: Partial<_106.Params>): _106.Params;
                    fromAmino(object: _106.ParamsAmino): _106.Params;
                    toAmino(message: _106.Params): _106.ParamsAmino;
                    fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                    toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                    fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                    toProto(message: _106.Params): Uint8Array;
                    toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    encode(message: _105.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryDenomTraceRequest;
                    fromJSON(object: any): _105.QueryDenomTraceRequest;
                    toJSON(message: _105.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTraceRequest>): _105.QueryDenomTraceRequest;
                    fromAmino(object: _105.QueryDenomTraceRequestAmino): _105.QueryDenomTraceRequest;
                    toAmino(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomTraceRequestAminoMsg): _105.QueryDenomTraceRequest;
                    toAminoMsg(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTraceRequestProtoMsg): _105.QueryDenomTraceRequest;
                    toProto(message: _105.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _105.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryDenomTraceResponse;
                    fromJSON(object: any): _105.QueryDenomTraceResponse;
                    toJSON(message: _105.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTraceResponse>): _105.QueryDenomTraceResponse;
                    fromAmino(object: _105.QueryDenomTraceResponseAmino): _105.QueryDenomTraceResponse;
                    toAmino(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomTraceResponseAminoMsg): _105.QueryDenomTraceResponse;
                    toAminoMsg(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTraceResponseProtoMsg): _105.QueryDenomTraceResponse;
                    toProto(message: _105.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _105.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryDenomTracesRequest;
                    fromJSON(object: any): _105.QueryDenomTracesRequest;
                    toJSON(message: _105.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTracesRequest>): _105.QueryDenomTracesRequest;
                    fromAmino(object: _105.QueryDenomTracesRequestAmino): _105.QueryDenomTracesRequest;
                    toAmino(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomTracesRequestAminoMsg): _105.QueryDenomTracesRequest;
                    toAminoMsg(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTracesRequestProtoMsg): _105.QueryDenomTracesRequest;
                    toProto(message: _105.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _105.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryDenomTracesResponse;
                    fromJSON(object: any): _105.QueryDenomTracesResponse;
                    toJSON(message: _105.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTracesResponse>): _105.QueryDenomTracesResponse;
                    fromAmino(object: _105.QueryDenomTracesResponseAmino): _105.QueryDenomTracesResponse;
                    toAmino(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomTracesResponseAminoMsg): _105.QueryDenomTracesResponse;
                    toAminoMsg(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTracesResponseProtoMsg): _105.QueryDenomTracesResponse;
                    toProto(message: _105.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryParamsRequest;
                    fromJSON(_: any): _105.QueryParamsRequest;
                    toJSON(_: _105.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                    fromAmino(_: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                    toAmino(_: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
                    fromAminoMsg(object: _105.QueryParamsRequestAminoMsg): _105.QueryParamsRequest;
                    toAminoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryParamsRequestProtoMsg): _105.QueryParamsRequest;
                    toProto(message: _105.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryParamsResponse;
                    fromJSON(object: any): _105.QueryParamsResponse;
                    toJSON(message: _105.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
                    fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                    toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                    fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                    toAminoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                    toProto(message: _105.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    encode(message: _105.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryDenomHashRequest;
                    fromJSON(object: any): _105.QueryDenomHashRequest;
                    toJSON(message: _105.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_105.QueryDenomHashRequest>): _105.QueryDenomHashRequest;
                    fromAmino(object: _105.QueryDenomHashRequestAmino): _105.QueryDenomHashRequest;
                    toAmino(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomHashRequestAminoMsg): _105.QueryDenomHashRequest;
                    toAminoMsg(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomHashRequestProtoMsg): _105.QueryDenomHashRequest;
                    toProto(message: _105.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    encode(message: _105.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryDenomHashResponse;
                    fromJSON(object: any): _105.QueryDenomHashResponse;
                    toJSON(message: _105.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_105.QueryDenomHashResponse>): _105.QueryDenomHashResponse;
                    fromAmino(object: _105.QueryDenomHashResponseAmino): _105.QueryDenomHashResponse;
                    toAmino(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomHashResponseAminoMsg): _105.QueryDenomHashResponse;
                    toAminoMsg(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomHashResponseProtoMsg): _105.QueryDenomHashResponse;
                    toProto(message: _105.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _105.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryEscrowAddressRequest;
                    fromJSON(object: any): _105.QueryEscrowAddressRequest;
                    toJSON(message: _105.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_105.QueryEscrowAddressRequest>): _105.QueryEscrowAddressRequest;
                    fromAmino(object: _105.QueryEscrowAddressRequestAmino): _105.QueryEscrowAddressRequest;
                    toAmino(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _105.QueryEscrowAddressRequestAminoMsg): _105.QueryEscrowAddressRequest;
                    toAminoMsg(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryEscrowAddressRequestProtoMsg): _105.QueryEscrowAddressRequest;
                    toProto(message: _105.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _105.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.QueryEscrowAddressResponse;
                    fromJSON(object: any): _105.QueryEscrowAddressResponse;
                    toJSON(message: _105.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_105.QueryEscrowAddressResponse>): _105.QueryEscrowAddressResponse;
                    fromAmino(object: _105.QueryEscrowAddressResponseAmino): _105.QueryEscrowAddressResponse;
                    toAmino(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _105.QueryEscrowAddressResponseAminoMsg): _105.QueryEscrowAddressResponse;
                    toAminoMsg(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryEscrowAddressResponseProtoMsg): _105.QueryEscrowAddressResponse;
                    toProto(message: _105.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.GenesisState;
                    fromJSON(object: any): _104.GenesisState;
                    toJSON(message: _104.GenesisState): unknown;
                    fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                    fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                    toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                    fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                    toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                    fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                    toProto(message: _104.GenesisState): Uint8Array;
                    toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace client {
            const v1: {
                MsgClientImpl: typeof _239.MsgClientImpl;
                QueryClientImpl: typeof _237.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _110.QueryClientStateRequest): Promise<_110.QueryClientStateResponse>;
                    clientStates(request?: _110.QueryClientStatesRequest | undefined): Promise<_110.QueryClientStatesResponse>;
                    consensusState(request: _110.QueryConsensusStateRequest): Promise<_110.QueryConsensusStateResponse>;
                    consensusStates(request: _110.QueryConsensusStatesRequest): Promise<_110.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _110.QueryConsensusStateHeightsRequest): Promise<_110.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _110.QueryClientStatusRequest): Promise<_110.QueryClientStatusResponse>;
                    clientParams(request?: _110.QueryClientParamsRequest | undefined): Promise<_110.QueryClientParamsResponse>;
                    upgradedClientState(request?: _110.QueryUpgradedClientStateRequest | undefined): Promise<_110.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _110.QueryUpgradedConsensusStateRequest | undefined): Promise<_110.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _235.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _111.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _111.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _111.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _111.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _111.MsgCreateClient): {
                            typeUrl: string;
                            value: _111.MsgCreateClient;
                        };
                        updateClient(value: _111.MsgUpdateClient): {
                            typeUrl: string;
                            value: _111.MsgUpdateClient;
                        };
                        upgradeClient(value: _111.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _111.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _111.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _111.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _111.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _111.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _111.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _111.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _111.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _111.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _111.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _111.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _111.MsgCreateClient): {
                            typeUrl: string;
                            value: _111.MsgCreateClient;
                        };
                        updateClient(value: _111.MsgUpdateClient): {
                            typeUrl: string;
                            value: _111.MsgUpdateClient;
                        };
                        upgradeClient(value: _111.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _111.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _111.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _111.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _111.MsgCreateClient) => _111.MsgCreateClientAmino;
                        fromAmino: (object: _111.MsgCreateClientAmino) => _111.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _111.MsgUpdateClient) => _111.MsgUpdateClientAmino;
                        fromAmino: (object: _111.MsgUpdateClientAmino) => _111.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _111.MsgUpgradeClient) => _111.MsgUpgradeClientAmino;
                        fromAmino: (object: _111.MsgUpgradeClientAmino) => _111.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _111.MsgSubmitMisbehaviour) => _111.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _111.MsgSubmitMisbehaviourAmino) => _111.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _111.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgCreateClient;
                    fromJSON(object: any): _111.MsgCreateClient;
                    toJSON(message: _111.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_111.MsgCreateClient>): _111.MsgCreateClient;
                    fromAmino(object: _111.MsgCreateClientAmino): _111.MsgCreateClient;
                    toAmino(message: _111.MsgCreateClient): _111.MsgCreateClientAmino;
                    fromAminoMsg(object: _111.MsgCreateClientAminoMsg): _111.MsgCreateClient;
                    toAminoMsg(message: _111.MsgCreateClient): _111.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _111.MsgCreateClientProtoMsg): _111.MsgCreateClient;
                    toProto(message: _111.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _111.MsgCreateClient): _111.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _111.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgCreateClientResponse;
                    fromJSON(_: any): _111.MsgCreateClientResponse;
                    toJSON(_: _111.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_111.MsgCreateClientResponse>): _111.MsgCreateClientResponse;
                    fromAmino(_: _111.MsgCreateClientResponseAmino): _111.MsgCreateClientResponse;
                    toAmino(_: _111.MsgCreateClientResponse): _111.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _111.MsgCreateClientResponseAminoMsg): _111.MsgCreateClientResponse;
                    toAminoMsg(message: _111.MsgCreateClientResponse): _111.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _111.MsgCreateClientResponseProtoMsg): _111.MsgCreateClientResponse;
                    toProto(message: _111.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _111.MsgCreateClientResponse): _111.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _111.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUpdateClient;
                    fromJSON(object: any): _111.MsgUpdateClient;
                    toJSON(message: _111.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_111.MsgUpdateClient>): _111.MsgUpdateClient;
                    fromAmino(object: _111.MsgUpdateClientAmino): _111.MsgUpdateClient;
                    toAmino(message: _111.MsgUpdateClient): _111.MsgUpdateClientAmino;
                    fromAminoMsg(object: _111.MsgUpdateClientAminoMsg): _111.MsgUpdateClient;
                    toAminoMsg(message: _111.MsgUpdateClient): _111.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _111.MsgUpdateClientProtoMsg): _111.MsgUpdateClient;
                    toProto(message: _111.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _111.MsgUpdateClient): _111.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _111.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUpdateClientResponse;
                    fromJSON(_: any): _111.MsgUpdateClientResponse;
                    toJSON(_: _111.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_111.MsgUpdateClientResponse>): _111.MsgUpdateClientResponse;
                    fromAmino(_: _111.MsgUpdateClientResponseAmino): _111.MsgUpdateClientResponse;
                    toAmino(_: _111.MsgUpdateClientResponse): _111.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _111.MsgUpdateClientResponseAminoMsg): _111.MsgUpdateClientResponse;
                    toAminoMsg(message: _111.MsgUpdateClientResponse): _111.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _111.MsgUpdateClientResponseProtoMsg): _111.MsgUpdateClientResponse;
                    toProto(message: _111.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _111.MsgUpdateClientResponse): _111.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _111.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUpgradeClient;
                    fromJSON(object: any): _111.MsgUpgradeClient;
                    toJSON(message: _111.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_111.MsgUpgradeClient>): _111.MsgUpgradeClient;
                    fromAmino(object: _111.MsgUpgradeClientAmino): _111.MsgUpgradeClient;
                    toAmino(message: _111.MsgUpgradeClient): _111.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _111.MsgUpgradeClientAminoMsg): _111.MsgUpgradeClient;
                    toAminoMsg(message: _111.MsgUpgradeClient): _111.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _111.MsgUpgradeClientProtoMsg): _111.MsgUpgradeClient;
                    toProto(message: _111.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _111.MsgUpgradeClient): _111.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _111.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgUpgradeClientResponse;
                    fromJSON(_: any): _111.MsgUpgradeClientResponse;
                    toJSON(_: _111.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_111.MsgUpgradeClientResponse>): _111.MsgUpgradeClientResponse;
                    fromAmino(_: _111.MsgUpgradeClientResponseAmino): _111.MsgUpgradeClientResponse;
                    toAmino(_: _111.MsgUpgradeClientResponse): _111.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _111.MsgUpgradeClientResponseAminoMsg): _111.MsgUpgradeClientResponse;
                    toAminoMsg(message: _111.MsgUpgradeClientResponse): _111.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _111.MsgUpgradeClientResponseProtoMsg): _111.MsgUpgradeClientResponse;
                    toProto(message: _111.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _111.MsgUpgradeClientResponse): _111.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _111.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _111.MsgSubmitMisbehaviour;
                    toJSON(message: _111.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_111.MsgSubmitMisbehaviour>): _111.MsgSubmitMisbehaviour;
                    fromAmino(object: _111.MsgSubmitMisbehaviourAmino): _111.MsgSubmitMisbehaviour;
                    toAmino(message: _111.MsgSubmitMisbehaviour): _111.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _111.MsgSubmitMisbehaviourAminoMsg): _111.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _111.MsgSubmitMisbehaviour): _111.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _111.MsgSubmitMisbehaviourProtoMsg): _111.MsgSubmitMisbehaviour;
                    toProto(message: _111.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _111.MsgSubmitMisbehaviour): _111.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _111.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _111.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _111.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_111.MsgSubmitMisbehaviourResponse>): _111.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _111.MsgSubmitMisbehaviourResponseAmino): _111.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _111.MsgSubmitMisbehaviourResponse): _111.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _111.MsgSubmitMisbehaviourResponseAminoMsg): _111.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _111.MsgSubmitMisbehaviourResponse): _111.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _111.MsgSubmitMisbehaviourResponseProtoMsg): _111.MsgSubmitMisbehaviourResponse;
                    toProto(message: _111.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _111.MsgSubmitMisbehaviourResponse): _111.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _110.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientStateRequest;
                    fromJSON(object: any): _110.QueryClientStateRequest;
                    toJSON(message: _110.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_110.QueryClientStateRequest>): _110.QueryClientStateRequest;
                    fromAmino(object: _110.QueryClientStateRequestAmino): _110.QueryClientStateRequest;
                    toAmino(message: _110.QueryClientStateRequest): _110.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _110.QueryClientStateRequestAminoMsg): _110.QueryClientStateRequest;
                    toAminoMsg(message: _110.QueryClientStateRequest): _110.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryClientStateRequestProtoMsg): _110.QueryClientStateRequest;
                    toProto(message: _110.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryClientStateRequest): _110.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _110.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientStateResponse;
                    fromJSON(object: any): _110.QueryClientStateResponse;
                    toJSON(message: _110.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_110.QueryClientStateResponse>): _110.QueryClientStateResponse;
                    fromAmino(object: _110.QueryClientStateResponseAmino): _110.QueryClientStateResponse;
                    toAmino(message: _110.QueryClientStateResponse): _110.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _110.QueryClientStateResponseAminoMsg): _110.QueryClientStateResponse;
                    toAminoMsg(message: _110.QueryClientStateResponse): _110.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryClientStateResponseProtoMsg): _110.QueryClientStateResponse;
                    toProto(message: _110.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryClientStateResponse): _110.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _110.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientStatesRequest;
                    fromJSON(object: any): _110.QueryClientStatesRequest;
                    toJSON(message: _110.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_110.QueryClientStatesRequest>): _110.QueryClientStatesRequest;
                    fromAmino(object: _110.QueryClientStatesRequestAmino): _110.QueryClientStatesRequest;
                    toAmino(message: _110.QueryClientStatesRequest): _110.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _110.QueryClientStatesRequestAminoMsg): _110.QueryClientStatesRequest;
                    toAminoMsg(message: _110.QueryClientStatesRequest): _110.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryClientStatesRequestProtoMsg): _110.QueryClientStatesRequest;
                    toProto(message: _110.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryClientStatesRequest): _110.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _110.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientStatesResponse;
                    fromJSON(object: any): _110.QueryClientStatesResponse;
                    toJSON(message: _110.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_110.QueryClientStatesResponse>): _110.QueryClientStatesResponse;
                    fromAmino(object: _110.QueryClientStatesResponseAmino): _110.QueryClientStatesResponse;
                    toAmino(message: _110.QueryClientStatesResponse): _110.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _110.QueryClientStatesResponseAminoMsg): _110.QueryClientStatesResponse;
                    toAminoMsg(message: _110.QueryClientStatesResponse): _110.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryClientStatesResponseProtoMsg): _110.QueryClientStatesResponse;
                    toProto(message: _110.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryClientStatesResponse): _110.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _110.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryConsensusStateRequest;
                    fromJSON(object: any): _110.QueryConsensusStateRequest;
                    toJSON(message: _110.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_110.QueryConsensusStateRequest>): _110.QueryConsensusStateRequest;
                    fromAmino(object: _110.QueryConsensusStateRequestAmino): _110.QueryConsensusStateRequest;
                    toAmino(message: _110.QueryConsensusStateRequest): _110.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _110.QueryConsensusStateRequestAminoMsg): _110.QueryConsensusStateRequest;
                    toAminoMsg(message: _110.QueryConsensusStateRequest): _110.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryConsensusStateRequestProtoMsg): _110.QueryConsensusStateRequest;
                    toProto(message: _110.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryConsensusStateRequest): _110.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _110.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryConsensusStateResponse;
                    fromJSON(object: any): _110.QueryConsensusStateResponse;
                    toJSON(message: _110.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_110.QueryConsensusStateResponse>): _110.QueryConsensusStateResponse;
                    fromAmino(object: _110.QueryConsensusStateResponseAmino): _110.QueryConsensusStateResponse;
                    toAmino(message: _110.QueryConsensusStateResponse): _110.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _110.QueryConsensusStateResponseAminoMsg): _110.QueryConsensusStateResponse;
                    toAminoMsg(message: _110.QueryConsensusStateResponse): _110.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryConsensusStateResponseProtoMsg): _110.QueryConsensusStateResponse;
                    toProto(message: _110.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryConsensusStateResponse): _110.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _110.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryConsensusStatesRequest;
                    fromJSON(object: any): _110.QueryConsensusStatesRequest;
                    toJSON(message: _110.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_110.QueryConsensusStatesRequest>): _110.QueryConsensusStatesRequest;
                    fromAmino(object: _110.QueryConsensusStatesRequestAmino): _110.QueryConsensusStatesRequest;
                    toAmino(message: _110.QueryConsensusStatesRequest): _110.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _110.QueryConsensusStatesRequestAminoMsg): _110.QueryConsensusStatesRequest;
                    toAminoMsg(message: _110.QueryConsensusStatesRequest): _110.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryConsensusStatesRequestProtoMsg): _110.QueryConsensusStatesRequest;
                    toProto(message: _110.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryConsensusStatesRequest): _110.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _110.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryConsensusStatesResponse;
                    fromJSON(object: any): _110.QueryConsensusStatesResponse;
                    toJSON(message: _110.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_110.QueryConsensusStatesResponse>): _110.QueryConsensusStatesResponse;
                    fromAmino(object: _110.QueryConsensusStatesResponseAmino): _110.QueryConsensusStatesResponse;
                    toAmino(message: _110.QueryConsensusStatesResponse): _110.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _110.QueryConsensusStatesResponseAminoMsg): _110.QueryConsensusStatesResponse;
                    toAminoMsg(message: _110.QueryConsensusStatesResponse): _110.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryConsensusStatesResponseProtoMsg): _110.QueryConsensusStatesResponse;
                    toProto(message: _110.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryConsensusStatesResponse): _110.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _110.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _110.QueryConsensusStateHeightsRequest;
                    toJSON(message: _110.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_110.QueryConsensusStateHeightsRequest>): _110.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _110.QueryConsensusStateHeightsRequestAmino): _110.QueryConsensusStateHeightsRequest;
                    toAmino(message: _110.QueryConsensusStateHeightsRequest): _110.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _110.QueryConsensusStateHeightsRequestAminoMsg): _110.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _110.QueryConsensusStateHeightsRequest): _110.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryConsensusStateHeightsRequestProtoMsg): _110.QueryConsensusStateHeightsRequest;
                    toProto(message: _110.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryConsensusStateHeightsRequest): _110.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _110.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _110.QueryConsensusStateHeightsResponse;
                    toJSON(message: _110.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryConsensusStateHeightsResponse>): _110.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _110.QueryConsensusStateHeightsResponseAmino): _110.QueryConsensusStateHeightsResponse;
                    toAmino(message: _110.QueryConsensusStateHeightsResponse): _110.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _110.QueryConsensusStateHeightsResponseAminoMsg): _110.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _110.QueryConsensusStateHeightsResponse): _110.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryConsensusStateHeightsResponseProtoMsg): _110.QueryConsensusStateHeightsResponse;
                    toProto(message: _110.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryConsensusStateHeightsResponse): _110.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _110.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientStatusRequest;
                    fromJSON(object: any): _110.QueryClientStatusRequest;
                    toJSON(message: _110.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_110.QueryClientStatusRequest>): _110.QueryClientStatusRequest;
                    fromAmino(object: _110.QueryClientStatusRequestAmino): _110.QueryClientStatusRequest;
                    toAmino(message: _110.QueryClientStatusRequest): _110.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _110.QueryClientStatusRequestAminoMsg): _110.QueryClientStatusRequest;
                    toAminoMsg(message: _110.QueryClientStatusRequest): _110.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryClientStatusRequestProtoMsg): _110.QueryClientStatusRequest;
                    toProto(message: _110.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryClientStatusRequest): _110.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _110.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientStatusResponse;
                    fromJSON(object: any): _110.QueryClientStatusResponse;
                    toJSON(message: _110.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_110.QueryClientStatusResponse>): _110.QueryClientStatusResponse;
                    fromAmino(object: _110.QueryClientStatusResponseAmino): _110.QueryClientStatusResponse;
                    toAmino(message: _110.QueryClientStatusResponse): _110.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _110.QueryClientStatusResponseAminoMsg): _110.QueryClientStatusResponse;
                    toAminoMsg(message: _110.QueryClientStatusResponse): _110.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryClientStatusResponseProtoMsg): _110.QueryClientStatusResponse;
                    toProto(message: _110.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryClientStatusResponse): _110.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _110.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientParamsRequest;
                    fromJSON(_: any): _110.QueryClientParamsRequest;
                    toJSON(_: _110.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_110.QueryClientParamsRequest>): _110.QueryClientParamsRequest;
                    fromAmino(_: _110.QueryClientParamsRequestAmino): _110.QueryClientParamsRequest;
                    toAmino(_: _110.QueryClientParamsRequest): _110.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _110.QueryClientParamsRequestAminoMsg): _110.QueryClientParamsRequest;
                    toAminoMsg(message: _110.QueryClientParamsRequest): _110.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryClientParamsRequestProtoMsg): _110.QueryClientParamsRequest;
                    toProto(message: _110.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryClientParamsRequest): _110.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _110.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryClientParamsResponse;
                    fromJSON(object: any): _110.QueryClientParamsResponse;
                    toJSON(message: _110.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_110.QueryClientParamsResponse>): _110.QueryClientParamsResponse;
                    fromAmino(object: _110.QueryClientParamsResponseAmino): _110.QueryClientParamsResponse;
                    toAmino(message: _110.QueryClientParamsResponse): _110.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _110.QueryClientParamsResponseAminoMsg): _110.QueryClientParamsResponse;
                    toAminoMsg(message: _110.QueryClientParamsResponse): _110.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryClientParamsResponseProtoMsg): _110.QueryClientParamsResponse;
                    toProto(message: _110.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryClientParamsResponse): _110.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _110.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _110.QueryUpgradedClientStateRequest;
                    toJSON(_: _110.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_110.QueryUpgradedClientStateRequest>): _110.QueryUpgradedClientStateRequest;
                    fromAmino(_: _110.QueryUpgradedClientStateRequestAmino): _110.QueryUpgradedClientStateRequest;
                    toAmino(_: _110.QueryUpgradedClientStateRequest): _110.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _110.QueryUpgradedClientStateRequestAminoMsg): _110.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _110.QueryUpgradedClientStateRequest): _110.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryUpgradedClientStateRequestProtoMsg): _110.QueryUpgradedClientStateRequest;
                    toProto(message: _110.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryUpgradedClientStateRequest): _110.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _110.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _110.QueryUpgradedClientStateResponse;
                    toJSON(message: _110.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_110.QueryUpgradedClientStateResponse>): _110.QueryUpgradedClientStateResponse;
                    fromAmino(object: _110.QueryUpgradedClientStateResponseAmino): _110.QueryUpgradedClientStateResponse;
                    toAmino(message: _110.QueryUpgradedClientStateResponse): _110.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _110.QueryUpgradedClientStateResponseAminoMsg): _110.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _110.QueryUpgradedClientStateResponse): _110.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryUpgradedClientStateResponseProtoMsg): _110.QueryUpgradedClientStateResponse;
                    toProto(message: _110.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryUpgradedClientStateResponse): _110.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _110.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _110.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _110.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_110.QueryUpgradedConsensusStateRequest>): _110.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _110.QueryUpgradedConsensusStateRequestAmino): _110.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _110.QueryUpgradedConsensusStateRequestAminoMsg): _110.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _110.QueryUpgradedConsensusStateRequestProtoMsg): _110.QueryUpgradedConsensusStateRequest;
                    toProto(message: _110.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _110.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _110.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _110.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_110.QueryUpgradedConsensusStateResponse>): _110.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _110.QueryUpgradedConsensusStateResponseAmino): _110.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _110.QueryUpgradedConsensusStateResponseAminoMsg): _110.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _110.QueryUpgradedConsensusStateResponseProtoMsg): _110.QueryUpgradedConsensusStateResponse;
                    toProto(message: _110.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.GenesisState;
                    fromJSON(object: any): _109.GenesisState;
                    toJSON(message: _109.GenesisState): unknown;
                    fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                    fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                    toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                    fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                    toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                    fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                    toProto(message: _109.GenesisState): Uint8Array;
                    toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    encode(message: _109.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.GenesisMetadata;
                    fromJSON(object: any): _109.GenesisMetadata;
                    toJSON(message: _109.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_109.GenesisMetadata>): _109.GenesisMetadata;
                    fromAmino(object: _109.GenesisMetadataAmino): _109.GenesisMetadata;
                    toAmino(message: _109.GenesisMetadata): _109.GenesisMetadataAmino;
                    fromAminoMsg(object: _109.GenesisMetadataAminoMsg): _109.GenesisMetadata;
                    toAminoMsg(message: _109.GenesisMetadata): _109.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _109.GenesisMetadataProtoMsg): _109.GenesisMetadata;
                    toProto(message: _109.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _109.GenesisMetadata): _109.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _109.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _109.IdentifiedGenesisMetadata;
                    toJSON(message: _109.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_109.IdentifiedGenesisMetadata>): _109.IdentifiedGenesisMetadata;
                    fromAmino(object: _109.IdentifiedGenesisMetadataAmino): _109.IdentifiedGenesisMetadata;
                    toAmino(message: _109.IdentifiedGenesisMetadata): _109.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _109.IdentifiedGenesisMetadataAminoMsg): _109.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _109.IdentifiedGenesisMetadata): _109.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _109.IdentifiedGenesisMetadataProtoMsg): _109.IdentifiedGenesisMetadata;
                    toProto(message: _109.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _109.IdentifiedGenesisMetadata): _109.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _108.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.IdentifiedClientState;
                    fromJSON(object: any): _108.IdentifiedClientState;
                    toJSON(message: _108.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_108.IdentifiedClientState>): _108.IdentifiedClientState;
                    fromAmino(object: _108.IdentifiedClientStateAmino): _108.IdentifiedClientState;
                    toAmino(message: _108.IdentifiedClientState): _108.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _108.IdentifiedClientStateAminoMsg): _108.IdentifiedClientState;
                    toAminoMsg(message: _108.IdentifiedClientState): _108.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _108.IdentifiedClientStateProtoMsg): _108.IdentifiedClientState;
                    toProto(message: _108.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _108.IdentifiedClientState): _108.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _108.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ConsensusStateWithHeight;
                    fromJSON(object: any): _108.ConsensusStateWithHeight;
                    toJSON(message: _108.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_108.ConsensusStateWithHeight>): _108.ConsensusStateWithHeight;
                    fromAmino(object: _108.ConsensusStateWithHeightAmino): _108.ConsensusStateWithHeight;
                    toAmino(message: _108.ConsensusStateWithHeight): _108.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _108.ConsensusStateWithHeightAminoMsg): _108.ConsensusStateWithHeight;
                    toAminoMsg(message: _108.ConsensusStateWithHeight): _108.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _108.ConsensusStateWithHeightProtoMsg): _108.ConsensusStateWithHeight;
                    toProto(message: _108.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _108.ConsensusStateWithHeight): _108.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _108.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ClientConsensusStates;
                    fromJSON(object: any): _108.ClientConsensusStates;
                    toJSON(message: _108.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_108.ClientConsensusStates>): _108.ClientConsensusStates;
                    fromAmino(object: _108.ClientConsensusStatesAmino): _108.ClientConsensusStates;
                    toAmino(message: _108.ClientConsensusStates): _108.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _108.ClientConsensusStatesAminoMsg): _108.ClientConsensusStates;
                    toAminoMsg(message: _108.ClientConsensusStates): _108.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _108.ClientConsensusStatesProtoMsg): _108.ClientConsensusStates;
                    toProto(message: _108.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _108.ClientConsensusStates): _108.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _108.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.ClientUpdateProposal;
                    fromJSON(object: any): _108.ClientUpdateProposal;
                    toJSON(message: _108.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_108.ClientUpdateProposal>): _108.ClientUpdateProposal;
                    fromAmino(object: _108.ClientUpdateProposalAmino): _108.ClientUpdateProposal;
                    toAmino(message: _108.ClientUpdateProposal): _108.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _108.ClientUpdateProposalAminoMsg): _108.ClientUpdateProposal;
                    toAminoMsg(message: _108.ClientUpdateProposal): _108.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _108.ClientUpdateProposalProtoMsg): _108.ClientUpdateProposal;
                    toProto(message: _108.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _108.ClientUpdateProposal): _108.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _108.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.UpgradeProposal;
                    fromJSON(object: any): _108.UpgradeProposal;
                    toJSON(message: _108.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_108.UpgradeProposal>): _108.UpgradeProposal;
                    fromAmino(object: _108.UpgradeProposalAmino): _108.UpgradeProposal;
                    toAmino(message: _108.UpgradeProposal): _108.UpgradeProposalAmino;
                    fromAminoMsg(object: _108.UpgradeProposalAminoMsg): _108.UpgradeProposal;
                    toAminoMsg(message: _108.UpgradeProposal): _108.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _108.UpgradeProposalProtoMsg): _108.UpgradeProposal;
                    toProto(message: _108.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _108.UpgradeProposal): _108.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _108.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.Height;
                    fromJSON(object: any): _108.Height;
                    toJSON(message: _108.Height): unknown;
                    fromPartial(object: Partial<_108.Height>): _108.Height;
                    fromAmino(object: _108.HeightAmino): _108.Height;
                    toAmino(message: _108.Height): _108.HeightAmino;
                    fromAminoMsg(object: _108.HeightAminoMsg): _108.Height;
                    toAminoMsg(message: _108.Height): _108.HeightAminoMsg;
                    fromProtoMsg(message: _108.HeightProtoMsg): _108.Height;
                    toProto(message: _108.Height): Uint8Array;
                    toProtoMsg(message: _108.Height): _108.HeightProtoMsg;
                };
                Params: {
                    encode(message: _108.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.Params;
                    fromJSON(object: any): _108.Params;
                    toJSON(message: _108.Params): unknown;
                    fromPartial(object: Partial<_108.Params>): _108.Params;
                    fromAmino(object: _108.ParamsAmino): _108.Params;
                    toAmino(message: _108.Params): _108.ParamsAmino;
                    fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                    toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                    fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                    toProto(message: _108.Params): Uint8Array;
                    toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _238.MsgClientImpl;
                    };
                };
                core: {
                    client: {
                        v1: _239.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _105.QueryDenomTraceRequest): Promise<_105.QueryDenomTraceResponse>;
                            denomTraces(request?: _105.QueryDenomTracesRequest | undefined): Promise<_105.QueryDenomTracesResponse>;
                            params(request?: _105.QueryParamsRequest | undefined): Promise<_105.QueryParamsResponse>;
                            denomHash(request: _105.QueryDenomHashRequest): Promise<_105.QueryDenomHashResponse>;
                            escrowAddress(request: _105.QueryEscrowAddressRequest): Promise<_105.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    client: {
                        v1: {
                            clientState(request: _110.QueryClientStateRequest): Promise<_110.QueryClientStateResponse>;
                            clientStates(request?: _110.QueryClientStatesRequest | undefined): Promise<_110.QueryClientStatesResponse>;
                            consensusState(request: _110.QueryConsensusStateRequest): Promise<_110.QueryConsensusStateResponse>;
                            consensusStates(request: _110.QueryConsensusStatesRequest): Promise<_110.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _110.QueryConsensusStateHeightsRequest): Promise<_110.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _110.QueryClientStatusRequest): Promise<_110.QueryClientStatusResponse>;
                            clientParams(request?: _110.QueryClientParamsRequest | undefined): Promise<_110.QueryClientParamsResponse>;
                            upgradedClientState(request?: _110.QueryUpgradedClientStateRequest | undefined): Promise<_110.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _110.QueryUpgradedConsensusStateRequest | undefined): Promise<_110.QueryUpgradedConsensusStateResponse>;
                        };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _234.LCDQueryClient;
                    };
                };
                core: {
                    client: {
                        v1: _235.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
