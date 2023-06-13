import * as _106 from "./applications/transfer/v1/genesis";
import * as _107 from "./applications/transfer/v1/query";
import * as _108 from "./applications/transfer/v1/transfer";
import * as _109 from "./applications/transfer/v1/tx";
import * as _110 from "./core/client/v1/client";
import * as _111 from "./core/client/v1/genesis";
import * as _112 from "./core/client/v1/query";
import * as _113 from "./core/client/v1/tx";
import * as _203 from "./applications/transfer/v1/query.lcd";
import * as _204 from "./core/client/v1/query.lcd";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                LCDQueryClient: typeof _203.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: _109.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _109.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _109.MsgTransfer): {
                            typeUrl: string;
                            value: _109.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _109.MsgTransfer) => _109.MsgTransferAmino;
                        fromAmino: (object: _109.MsgTransferAmino) => _109.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _109.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.MsgTransfer;
                    fromJSON(object: any): _109.MsgTransfer;
                    toJSON(message: _109.MsgTransfer): unknown;
                    fromPartial(object: Partial<_109.MsgTransfer>): _109.MsgTransfer;
                    fromAmino(object: _109.MsgTransferAmino): _109.MsgTransfer;
                    toAmino(message: _109.MsgTransfer): _109.MsgTransferAmino;
                    fromAminoMsg(object: _109.MsgTransferAminoMsg): _109.MsgTransfer;
                    toAminoMsg(message: _109.MsgTransfer): _109.MsgTransferAminoMsg;
                    fromProtoMsg(message: _109.MsgTransferProtoMsg): _109.MsgTransfer;
                    toProto(message: _109.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _109.MsgTransfer): _109.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(_: _109.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.MsgTransferResponse;
                    fromJSON(_: any): _109.MsgTransferResponse;
                    toJSON(_: _109.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_109.MsgTransferResponse>): _109.MsgTransferResponse;
                    fromAmino(_: _109.MsgTransferResponseAmino): _109.MsgTransferResponse;
                    toAmino(_: _109.MsgTransferResponse): _109.MsgTransferResponseAmino;
                    fromAminoMsg(object: _109.MsgTransferResponseAminoMsg): _109.MsgTransferResponse;
                    toAminoMsg(message: _109.MsgTransferResponse): _109.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgTransferResponseProtoMsg): _109.MsgTransferResponse;
                    toProto(message: _109.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgTransferResponse): _109.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _108.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.DenomTrace;
                    fromJSON(object: any): _108.DenomTrace;
                    toJSON(message: _108.DenomTrace): unknown;
                    fromPartial(object: Partial<_108.DenomTrace>): _108.DenomTrace;
                    fromAmino(object: _108.DenomTraceAmino): _108.DenomTrace;
                    toAmino(message: _108.DenomTrace): _108.DenomTraceAmino;
                    fromAminoMsg(object: _108.DenomTraceAminoMsg): _108.DenomTrace;
                    toAminoMsg(message: _108.DenomTrace): _108.DenomTraceAminoMsg;
                    fromProtoMsg(message: _108.DenomTraceProtoMsg): _108.DenomTrace;
                    toProto(message: _108.DenomTrace): Uint8Array;
                    toProtoMsg(message: _108.DenomTrace): _108.DenomTraceProtoMsg;
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
                QueryDenomTraceRequest: {
                    encode(message: _107.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryDenomTraceRequest;
                    fromJSON(object: any): _107.QueryDenomTraceRequest;
                    toJSON(message: _107.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_107.QueryDenomTraceRequest>): _107.QueryDenomTraceRequest;
                    fromAmino(object: _107.QueryDenomTraceRequestAmino): _107.QueryDenomTraceRequest;
                    toAmino(message: _107.QueryDenomTraceRequest): _107.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _107.QueryDenomTraceRequestAminoMsg): _107.QueryDenomTraceRequest;
                    toAminoMsg(message: _107.QueryDenomTraceRequest): _107.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryDenomTraceRequestProtoMsg): _107.QueryDenomTraceRequest;
                    toProto(message: _107.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryDenomTraceRequest): _107.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _107.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryDenomTraceResponse;
                    fromJSON(object: any): _107.QueryDenomTraceResponse;
                    toJSON(message: _107.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_107.QueryDenomTraceResponse>): _107.QueryDenomTraceResponse;
                    fromAmino(object: _107.QueryDenomTraceResponseAmino): _107.QueryDenomTraceResponse;
                    toAmino(message: _107.QueryDenomTraceResponse): _107.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _107.QueryDenomTraceResponseAminoMsg): _107.QueryDenomTraceResponse;
                    toAminoMsg(message: _107.QueryDenomTraceResponse): _107.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryDenomTraceResponseProtoMsg): _107.QueryDenomTraceResponse;
                    toProto(message: _107.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryDenomTraceResponse): _107.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _107.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryDenomTracesRequest;
                    fromJSON(object: any): _107.QueryDenomTracesRequest;
                    toJSON(message: _107.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_107.QueryDenomTracesRequest>): _107.QueryDenomTracesRequest;
                    fromAmino(object: _107.QueryDenomTracesRequestAmino): _107.QueryDenomTracesRequest;
                    toAmino(message: _107.QueryDenomTracesRequest): _107.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _107.QueryDenomTracesRequestAminoMsg): _107.QueryDenomTracesRequest;
                    toAminoMsg(message: _107.QueryDenomTracesRequest): _107.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryDenomTracesRequestProtoMsg): _107.QueryDenomTracesRequest;
                    toProto(message: _107.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryDenomTracesRequest): _107.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _107.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryDenomTracesResponse;
                    fromJSON(object: any): _107.QueryDenomTracesResponse;
                    toJSON(message: _107.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_107.QueryDenomTracesResponse>): _107.QueryDenomTracesResponse;
                    fromAmino(object: _107.QueryDenomTracesResponseAmino): _107.QueryDenomTracesResponse;
                    toAmino(message: _107.QueryDenomTracesResponse): _107.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _107.QueryDenomTracesResponseAminoMsg): _107.QueryDenomTracesResponse;
                    toAminoMsg(message: _107.QueryDenomTracesResponse): _107.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryDenomTracesResponseProtoMsg): _107.QueryDenomTracesResponse;
                    toProto(message: _107.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryDenomTracesResponse): _107.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryParamsRequest;
                    fromJSON(_: any): _107.QueryParamsRequest;
                    toJSON(_: _107.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                    fromAmino(_: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                    toAmino(_: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                    fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                    toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                    toProto(message: _107.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryParamsResponse;
                    fromJSON(object: any): _107.QueryParamsResponse;
                    toJSON(message: _107.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                    fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                    toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                    fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                    toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                    toProto(message: _107.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    encode(message: _107.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryDenomHashRequest;
                    fromJSON(object: any): _107.QueryDenomHashRequest;
                    toJSON(message: _107.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_107.QueryDenomHashRequest>): _107.QueryDenomHashRequest;
                    fromAmino(object: _107.QueryDenomHashRequestAmino): _107.QueryDenomHashRequest;
                    toAmino(message: _107.QueryDenomHashRequest): _107.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _107.QueryDenomHashRequestAminoMsg): _107.QueryDenomHashRequest;
                    toAminoMsg(message: _107.QueryDenomHashRequest): _107.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryDenomHashRequestProtoMsg): _107.QueryDenomHashRequest;
                    toProto(message: _107.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryDenomHashRequest): _107.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    encode(message: _107.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryDenomHashResponse;
                    fromJSON(object: any): _107.QueryDenomHashResponse;
                    toJSON(message: _107.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_107.QueryDenomHashResponse>): _107.QueryDenomHashResponse;
                    fromAmino(object: _107.QueryDenomHashResponseAmino): _107.QueryDenomHashResponse;
                    toAmino(message: _107.QueryDenomHashResponse): _107.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _107.QueryDenomHashResponseAminoMsg): _107.QueryDenomHashResponse;
                    toAminoMsg(message: _107.QueryDenomHashResponse): _107.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryDenomHashResponseProtoMsg): _107.QueryDenomHashResponse;
                    toProto(message: _107.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryDenomHashResponse): _107.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _107.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryEscrowAddressRequest;
                    fromJSON(object: any): _107.QueryEscrowAddressRequest;
                    toJSON(message: _107.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_107.QueryEscrowAddressRequest>): _107.QueryEscrowAddressRequest;
                    fromAmino(object: _107.QueryEscrowAddressRequestAmino): _107.QueryEscrowAddressRequest;
                    toAmino(message: _107.QueryEscrowAddressRequest): _107.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _107.QueryEscrowAddressRequestAminoMsg): _107.QueryEscrowAddressRequest;
                    toAminoMsg(message: _107.QueryEscrowAddressRequest): _107.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryEscrowAddressRequestProtoMsg): _107.QueryEscrowAddressRequest;
                    toProto(message: _107.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryEscrowAddressRequest): _107.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _107.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.QueryEscrowAddressResponse;
                    fromJSON(object: any): _107.QueryEscrowAddressResponse;
                    toJSON(message: _107.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_107.QueryEscrowAddressResponse>): _107.QueryEscrowAddressResponse;
                    fromAmino(object: _107.QueryEscrowAddressResponseAmino): _107.QueryEscrowAddressResponse;
                    toAmino(message: _107.QueryEscrowAddressResponse): _107.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _107.QueryEscrowAddressResponseAminoMsg): _107.QueryEscrowAddressResponse;
                    toAminoMsg(message: _107.QueryEscrowAddressResponse): _107.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryEscrowAddressResponseProtoMsg): _107.QueryEscrowAddressResponse;
                    toProto(message: _107.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryEscrowAddressResponse): _107.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.GenesisState;
                    fromJSON(object: any): _106.GenesisState;
                    toJSON(message: _106.GenesisState): unknown;
                    fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                    fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                    toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                    fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                    toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                    fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                    toProto(message: _106.GenesisState): Uint8Array;
                    toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace client {
            const v1: {
                LCDQueryClient: typeof _204.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _113.MsgCreateClient) => _113.MsgCreateClientAmino;
                        fromAmino: (object: _113.MsgCreateClientAmino) => _113.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _113.MsgUpdateClient) => _113.MsgUpdateClientAmino;
                        fromAmino: (object: _113.MsgUpdateClientAmino) => _113.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _113.MsgUpgradeClient) => _113.MsgUpgradeClientAmino;
                        fromAmino: (object: _113.MsgUpgradeClientAmino) => _113.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _113.MsgSubmitMisbehaviour) => _113.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _113.MsgSubmitMisbehaviourAmino) => _113.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _113.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgCreateClient;
                    fromJSON(object: any): _113.MsgCreateClient;
                    toJSON(message: _113.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_113.MsgCreateClient>): _113.MsgCreateClient;
                    fromAmino(object: _113.MsgCreateClientAmino): _113.MsgCreateClient;
                    toAmino(message: _113.MsgCreateClient): _113.MsgCreateClientAmino;
                    fromAminoMsg(object: _113.MsgCreateClientAminoMsg): _113.MsgCreateClient;
                    toAminoMsg(message: _113.MsgCreateClient): _113.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _113.MsgCreateClientProtoMsg): _113.MsgCreateClient;
                    toProto(message: _113.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _113.MsgCreateClient): _113.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _113.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgCreateClientResponse;
                    fromJSON(_: any): _113.MsgCreateClientResponse;
                    toJSON(_: _113.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_113.MsgCreateClientResponse>): _113.MsgCreateClientResponse;
                    fromAmino(_: _113.MsgCreateClientResponseAmino): _113.MsgCreateClientResponse;
                    toAmino(_: _113.MsgCreateClientResponse): _113.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _113.MsgCreateClientResponseAminoMsg): _113.MsgCreateClientResponse;
                    toAminoMsg(message: _113.MsgCreateClientResponse): _113.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgCreateClientResponseProtoMsg): _113.MsgCreateClientResponse;
                    toProto(message: _113.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgCreateClientResponse): _113.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _113.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateClient;
                    fromJSON(object: any): _113.MsgUpdateClient;
                    toJSON(message: _113.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_113.MsgUpdateClient>): _113.MsgUpdateClient;
                    fromAmino(object: _113.MsgUpdateClientAmino): _113.MsgUpdateClient;
                    toAmino(message: _113.MsgUpdateClient): _113.MsgUpdateClientAmino;
                    fromAminoMsg(object: _113.MsgUpdateClientAminoMsg): _113.MsgUpdateClient;
                    toAminoMsg(message: _113.MsgUpdateClient): _113.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _113.MsgUpdateClientProtoMsg): _113.MsgUpdateClient;
                    toProto(message: _113.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _113.MsgUpdateClient): _113.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _113.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpdateClientResponse;
                    fromJSON(_: any): _113.MsgUpdateClientResponse;
                    toJSON(_: _113.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_113.MsgUpdateClientResponse>): _113.MsgUpdateClientResponse;
                    fromAmino(_: _113.MsgUpdateClientResponseAmino): _113.MsgUpdateClientResponse;
                    toAmino(_: _113.MsgUpdateClientResponse): _113.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _113.MsgUpdateClientResponseAminoMsg): _113.MsgUpdateClientResponse;
                    toAminoMsg(message: _113.MsgUpdateClientResponse): _113.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgUpdateClientResponseProtoMsg): _113.MsgUpdateClientResponse;
                    toProto(message: _113.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgUpdateClientResponse): _113.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _113.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpgradeClient;
                    fromJSON(object: any): _113.MsgUpgradeClient;
                    toJSON(message: _113.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_113.MsgUpgradeClient>): _113.MsgUpgradeClient;
                    fromAmino(object: _113.MsgUpgradeClientAmino): _113.MsgUpgradeClient;
                    toAmino(message: _113.MsgUpgradeClient): _113.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _113.MsgUpgradeClientAminoMsg): _113.MsgUpgradeClient;
                    toAminoMsg(message: _113.MsgUpgradeClient): _113.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _113.MsgUpgradeClientProtoMsg): _113.MsgUpgradeClient;
                    toProto(message: _113.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _113.MsgUpgradeClient): _113.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _113.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgUpgradeClientResponse;
                    fromJSON(_: any): _113.MsgUpgradeClientResponse;
                    toJSON(_: _113.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_113.MsgUpgradeClientResponse>): _113.MsgUpgradeClientResponse;
                    fromAmino(_: _113.MsgUpgradeClientResponseAmino): _113.MsgUpgradeClientResponse;
                    toAmino(_: _113.MsgUpgradeClientResponse): _113.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _113.MsgUpgradeClientResponseAminoMsg): _113.MsgUpgradeClientResponse;
                    toAminoMsg(message: _113.MsgUpgradeClientResponse): _113.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgUpgradeClientResponseProtoMsg): _113.MsgUpgradeClientResponse;
                    toProto(message: _113.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgUpgradeClientResponse): _113.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _113.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _113.MsgSubmitMisbehaviour;
                    toJSON(message: _113.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_113.MsgSubmitMisbehaviour>): _113.MsgSubmitMisbehaviour;
                    fromAmino(object: _113.MsgSubmitMisbehaviourAmino): _113.MsgSubmitMisbehaviour;
                    toAmino(message: _113.MsgSubmitMisbehaviour): _113.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _113.MsgSubmitMisbehaviourAminoMsg): _113.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _113.MsgSubmitMisbehaviour): _113.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _113.MsgSubmitMisbehaviourProtoMsg): _113.MsgSubmitMisbehaviour;
                    toProto(message: _113.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _113.MsgSubmitMisbehaviour): _113.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _113.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _113.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _113.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_113.MsgSubmitMisbehaviourResponse>): _113.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _113.MsgSubmitMisbehaviourResponseAmino): _113.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _113.MsgSubmitMisbehaviourResponse): _113.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _113.MsgSubmitMisbehaviourResponseAminoMsg): _113.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _113.MsgSubmitMisbehaviourResponse): _113.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgSubmitMisbehaviourResponseProtoMsg): _113.MsgSubmitMisbehaviourResponse;
                    toProto(message: _113.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgSubmitMisbehaviourResponse): _113.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _112.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientStateRequest;
                    fromJSON(object: any): _112.QueryClientStateRequest;
                    toJSON(message: _112.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_112.QueryClientStateRequest>): _112.QueryClientStateRequest;
                    fromAmino(object: _112.QueryClientStateRequestAmino): _112.QueryClientStateRequest;
                    toAmino(message: _112.QueryClientStateRequest): _112.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _112.QueryClientStateRequestAminoMsg): _112.QueryClientStateRequest;
                    toAminoMsg(message: _112.QueryClientStateRequest): _112.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStateRequestProtoMsg): _112.QueryClientStateRequest;
                    toProto(message: _112.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStateRequest): _112.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _112.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientStateResponse;
                    fromJSON(object: any): _112.QueryClientStateResponse;
                    toJSON(message: _112.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_112.QueryClientStateResponse>): _112.QueryClientStateResponse;
                    fromAmino(object: _112.QueryClientStateResponseAmino): _112.QueryClientStateResponse;
                    toAmino(message: _112.QueryClientStateResponse): _112.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _112.QueryClientStateResponseAminoMsg): _112.QueryClientStateResponse;
                    toAminoMsg(message: _112.QueryClientStateResponse): _112.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStateResponseProtoMsg): _112.QueryClientStateResponse;
                    toProto(message: _112.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStateResponse): _112.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _112.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientStatesRequest;
                    fromJSON(object: any): _112.QueryClientStatesRequest;
                    toJSON(message: _112.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_112.QueryClientStatesRequest>): _112.QueryClientStatesRequest;
                    fromAmino(object: _112.QueryClientStatesRequestAmino): _112.QueryClientStatesRequest;
                    toAmino(message: _112.QueryClientStatesRequest): _112.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _112.QueryClientStatesRequestAminoMsg): _112.QueryClientStatesRequest;
                    toAminoMsg(message: _112.QueryClientStatesRequest): _112.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStatesRequestProtoMsg): _112.QueryClientStatesRequest;
                    toProto(message: _112.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStatesRequest): _112.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _112.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientStatesResponse;
                    fromJSON(object: any): _112.QueryClientStatesResponse;
                    toJSON(message: _112.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_112.QueryClientStatesResponse>): _112.QueryClientStatesResponse;
                    fromAmino(object: _112.QueryClientStatesResponseAmino): _112.QueryClientStatesResponse;
                    toAmino(message: _112.QueryClientStatesResponse): _112.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _112.QueryClientStatesResponseAminoMsg): _112.QueryClientStatesResponse;
                    toAminoMsg(message: _112.QueryClientStatesResponse): _112.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStatesResponseProtoMsg): _112.QueryClientStatesResponse;
                    toProto(message: _112.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStatesResponse): _112.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _112.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryConsensusStateRequest;
                    fromJSON(object: any): _112.QueryConsensusStateRequest;
                    toJSON(message: _112.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_112.QueryConsensusStateRequest>): _112.QueryConsensusStateRequest;
                    fromAmino(object: _112.QueryConsensusStateRequestAmino): _112.QueryConsensusStateRequest;
                    toAmino(message: _112.QueryConsensusStateRequest): _112.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _112.QueryConsensusStateRequestAminoMsg): _112.QueryConsensusStateRequest;
                    toAminoMsg(message: _112.QueryConsensusStateRequest): _112.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStateRequestProtoMsg): _112.QueryConsensusStateRequest;
                    toProto(message: _112.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStateRequest): _112.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _112.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryConsensusStateResponse;
                    fromJSON(object: any): _112.QueryConsensusStateResponse;
                    toJSON(message: _112.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_112.QueryConsensusStateResponse>): _112.QueryConsensusStateResponse;
                    fromAmino(object: _112.QueryConsensusStateResponseAmino): _112.QueryConsensusStateResponse;
                    toAmino(message: _112.QueryConsensusStateResponse): _112.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _112.QueryConsensusStateResponseAminoMsg): _112.QueryConsensusStateResponse;
                    toAminoMsg(message: _112.QueryConsensusStateResponse): _112.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStateResponseProtoMsg): _112.QueryConsensusStateResponse;
                    toProto(message: _112.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStateResponse): _112.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _112.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryConsensusStatesRequest;
                    fromJSON(object: any): _112.QueryConsensusStatesRequest;
                    toJSON(message: _112.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_112.QueryConsensusStatesRequest>): _112.QueryConsensusStatesRequest;
                    fromAmino(object: _112.QueryConsensusStatesRequestAmino): _112.QueryConsensusStatesRequest;
                    toAmino(message: _112.QueryConsensusStatesRequest): _112.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _112.QueryConsensusStatesRequestAminoMsg): _112.QueryConsensusStatesRequest;
                    toAminoMsg(message: _112.QueryConsensusStatesRequest): _112.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStatesRequestProtoMsg): _112.QueryConsensusStatesRequest;
                    toProto(message: _112.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStatesRequest): _112.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _112.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryConsensusStatesResponse;
                    fromJSON(object: any): _112.QueryConsensusStatesResponse;
                    toJSON(message: _112.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_112.QueryConsensusStatesResponse>): _112.QueryConsensusStatesResponse;
                    fromAmino(object: _112.QueryConsensusStatesResponseAmino): _112.QueryConsensusStatesResponse;
                    toAmino(message: _112.QueryConsensusStatesResponse): _112.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _112.QueryConsensusStatesResponseAminoMsg): _112.QueryConsensusStatesResponse;
                    toAminoMsg(message: _112.QueryConsensusStatesResponse): _112.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStatesResponseProtoMsg): _112.QueryConsensusStatesResponse;
                    toProto(message: _112.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStatesResponse): _112.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _112.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _112.QueryConsensusStateHeightsRequest;
                    toJSON(message: _112.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_112.QueryConsensusStateHeightsRequest>): _112.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _112.QueryConsensusStateHeightsRequestAmino): _112.QueryConsensusStateHeightsRequest;
                    toAmino(message: _112.QueryConsensusStateHeightsRequest): _112.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _112.QueryConsensusStateHeightsRequestAminoMsg): _112.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _112.QueryConsensusStateHeightsRequest): _112.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStateHeightsRequestProtoMsg): _112.QueryConsensusStateHeightsRequest;
                    toProto(message: _112.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStateHeightsRequest): _112.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _112.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _112.QueryConsensusStateHeightsResponse;
                    toJSON(message: _112.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_112.QueryConsensusStateHeightsResponse>): _112.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _112.QueryConsensusStateHeightsResponseAmino): _112.QueryConsensusStateHeightsResponse;
                    toAmino(message: _112.QueryConsensusStateHeightsResponse): _112.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _112.QueryConsensusStateHeightsResponseAminoMsg): _112.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _112.QueryConsensusStateHeightsResponse): _112.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStateHeightsResponseProtoMsg): _112.QueryConsensusStateHeightsResponse;
                    toProto(message: _112.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStateHeightsResponse): _112.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _112.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientStatusRequest;
                    fromJSON(object: any): _112.QueryClientStatusRequest;
                    toJSON(message: _112.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_112.QueryClientStatusRequest>): _112.QueryClientStatusRequest;
                    fromAmino(object: _112.QueryClientStatusRequestAmino): _112.QueryClientStatusRequest;
                    toAmino(message: _112.QueryClientStatusRequest): _112.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _112.QueryClientStatusRequestAminoMsg): _112.QueryClientStatusRequest;
                    toAminoMsg(message: _112.QueryClientStatusRequest): _112.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStatusRequestProtoMsg): _112.QueryClientStatusRequest;
                    toProto(message: _112.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStatusRequest): _112.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _112.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientStatusResponse;
                    fromJSON(object: any): _112.QueryClientStatusResponse;
                    toJSON(message: _112.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_112.QueryClientStatusResponse>): _112.QueryClientStatusResponse;
                    fromAmino(object: _112.QueryClientStatusResponseAmino): _112.QueryClientStatusResponse;
                    toAmino(message: _112.QueryClientStatusResponse): _112.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _112.QueryClientStatusResponseAminoMsg): _112.QueryClientStatusResponse;
                    toAminoMsg(message: _112.QueryClientStatusResponse): _112.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStatusResponseProtoMsg): _112.QueryClientStatusResponse;
                    toProto(message: _112.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStatusResponse): _112.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _112.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientParamsRequest;
                    fromJSON(_: any): _112.QueryClientParamsRequest;
                    toJSON(_: _112.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_112.QueryClientParamsRequest>): _112.QueryClientParamsRequest;
                    fromAmino(_: _112.QueryClientParamsRequestAmino): _112.QueryClientParamsRequest;
                    toAmino(_: _112.QueryClientParamsRequest): _112.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _112.QueryClientParamsRequestAminoMsg): _112.QueryClientParamsRequest;
                    toAminoMsg(message: _112.QueryClientParamsRequest): _112.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientParamsRequestProtoMsg): _112.QueryClientParamsRequest;
                    toProto(message: _112.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientParamsRequest): _112.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _112.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryClientParamsResponse;
                    fromJSON(object: any): _112.QueryClientParamsResponse;
                    toJSON(message: _112.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_112.QueryClientParamsResponse>): _112.QueryClientParamsResponse;
                    fromAmino(object: _112.QueryClientParamsResponseAmino): _112.QueryClientParamsResponse;
                    toAmino(message: _112.QueryClientParamsResponse): _112.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _112.QueryClientParamsResponseAminoMsg): _112.QueryClientParamsResponse;
                    toAminoMsg(message: _112.QueryClientParamsResponse): _112.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientParamsResponseProtoMsg): _112.QueryClientParamsResponse;
                    toProto(message: _112.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientParamsResponse): _112.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _112.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _112.QueryUpgradedClientStateRequest;
                    toJSON(_: _112.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_112.QueryUpgradedClientStateRequest>): _112.QueryUpgradedClientStateRequest;
                    fromAmino(_: _112.QueryUpgradedClientStateRequestAmino): _112.QueryUpgradedClientStateRequest;
                    toAmino(_: _112.QueryUpgradedClientStateRequest): _112.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _112.QueryUpgradedClientStateRequestAminoMsg): _112.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _112.QueryUpgradedClientStateRequest): _112.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryUpgradedClientStateRequestProtoMsg): _112.QueryUpgradedClientStateRequest;
                    toProto(message: _112.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryUpgradedClientStateRequest): _112.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _112.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _112.QueryUpgradedClientStateResponse;
                    toJSON(message: _112.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_112.QueryUpgradedClientStateResponse>): _112.QueryUpgradedClientStateResponse;
                    fromAmino(object: _112.QueryUpgradedClientStateResponseAmino): _112.QueryUpgradedClientStateResponse;
                    toAmino(message: _112.QueryUpgradedClientStateResponse): _112.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _112.QueryUpgradedClientStateResponseAminoMsg): _112.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _112.QueryUpgradedClientStateResponse): _112.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryUpgradedClientStateResponseProtoMsg): _112.QueryUpgradedClientStateResponse;
                    toProto(message: _112.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryUpgradedClientStateResponse): _112.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _112.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _112.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _112.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_112.QueryUpgradedConsensusStateRequest>): _112.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _112.QueryUpgradedConsensusStateRequestAmino): _112.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _112.QueryUpgradedConsensusStateRequest): _112.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _112.QueryUpgradedConsensusStateRequestAminoMsg): _112.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _112.QueryUpgradedConsensusStateRequest): _112.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryUpgradedConsensusStateRequestProtoMsg): _112.QueryUpgradedConsensusStateRequest;
                    toProto(message: _112.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryUpgradedConsensusStateRequest): _112.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _112.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _112.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _112.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_112.QueryUpgradedConsensusStateResponse>): _112.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _112.QueryUpgradedConsensusStateResponseAmino): _112.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _112.QueryUpgradedConsensusStateResponse): _112.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _112.QueryUpgradedConsensusStateResponseAminoMsg): _112.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _112.QueryUpgradedConsensusStateResponse): _112.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryUpgradedConsensusStateResponseProtoMsg): _112.QueryUpgradedConsensusStateResponse;
                    toProto(message: _112.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryUpgradedConsensusStateResponse): _112.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.GenesisState;
                    fromJSON(object: any): _111.GenesisState;
                    toJSON(message: _111.GenesisState): unknown;
                    fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                    fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                    toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                    fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                    toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                    fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                    toProto(message: _111.GenesisState): Uint8Array;
                    toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    encode(message: _111.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.GenesisMetadata;
                    fromJSON(object: any): _111.GenesisMetadata;
                    toJSON(message: _111.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_111.GenesisMetadata>): _111.GenesisMetadata;
                    fromAmino(object: _111.GenesisMetadataAmino): _111.GenesisMetadata;
                    toAmino(message: _111.GenesisMetadata): _111.GenesisMetadataAmino;
                    fromAminoMsg(object: _111.GenesisMetadataAminoMsg): _111.GenesisMetadata;
                    toAminoMsg(message: _111.GenesisMetadata): _111.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _111.GenesisMetadataProtoMsg): _111.GenesisMetadata;
                    toProto(message: _111.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _111.GenesisMetadata): _111.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _111.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _111.IdentifiedGenesisMetadata;
                    toJSON(message: _111.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_111.IdentifiedGenesisMetadata>): _111.IdentifiedGenesisMetadata;
                    fromAmino(object: _111.IdentifiedGenesisMetadataAmino): _111.IdentifiedGenesisMetadata;
                    toAmino(message: _111.IdentifiedGenesisMetadata): _111.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _111.IdentifiedGenesisMetadataAminoMsg): _111.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _111.IdentifiedGenesisMetadata): _111.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _111.IdentifiedGenesisMetadataProtoMsg): _111.IdentifiedGenesisMetadata;
                    toProto(message: _111.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _111.IdentifiedGenesisMetadata): _111.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _110.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.IdentifiedClientState;
                    fromJSON(object: any): _110.IdentifiedClientState;
                    toJSON(message: _110.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_110.IdentifiedClientState>): _110.IdentifiedClientState;
                    fromAmino(object: _110.IdentifiedClientStateAmino): _110.IdentifiedClientState;
                    toAmino(message: _110.IdentifiedClientState): _110.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _110.IdentifiedClientStateAminoMsg): _110.IdentifiedClientState;
                    toAminoMsg(message: _110.IdentifiedClientState): _110.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _110.IdentifiedClientStateProtoMsg): _110.IdentifiedClientState;
                    toProto(message: _110.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _110.IdentifiedClientState): _110.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _110.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.ConsensusStateWithHeight;
                    fromJSON(object: any): _110.ConsensusStateWithHeight;
                    toJSON(message: _110.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_110.ConsensusStateWithHeight>): _110.ConsensusStateWithHeight;
                    fromAmino(object: _110.ConsensusStateWithHeightAmino): _110.ConsensusStateWithHeight;
                    toAmino(message: _110.ConsensusStateWithHeight): _110.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _110.ConsensusStateWithHeightAminoMsg): _110.ConsensusStateWithHeight;
                    toAminoMsg(message: _110.ConsensusStateWithHeight): _110.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _110.ConsensusStateWithHeightProtoMsg): _110.ConsensusStateWithHeight;
                    toProto(message: _110.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _110.ConsensusStateWithHeight): _110.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _110.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.ClientConsensusStates;
                    fromJSON(object: any): _110.ClientConsensusStates;
                    toJSON(message: _110.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_110.ClientConsensusStates>): _110.ClientConsensusStates;
                    fromAmino(object: _110.ClientConsensusStatesAmino): _110.ClientConsensusStates;
                    toAmino(message: _110.ClientConsensusStates): _110.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _110.ClientConsensusStatesAminoMsg): _110.ClientConsensusStates;
                    toAminoMsg(message: _110.ClientConsensusStates): _110.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _110.ClientConsensusStatesProtoMsg): _110.ClientConsensusStates;
                    toProto(message: _110.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _110.ClientConsensusStates): _110.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _110.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.ClientUpdateProposal;
                    fromJSON(object: any): _110.ClientUpdateProposal;
                    toJSON(message: _110.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_110.ClientUpdateProposal>): _110.ClientUpdateProposal;
                    fromAmino(object: _110.ClientUpdateProposalAmino): _110.ClientUpdateProposal;
                    toAmino(message: _110.ClientUpdateProposal): _110.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _110.ClientUpdateProposalAminoMsg): _110.ClientUpdateProposal;
                    toAminoMsg(message: _110.ClientUpdateProposal): _110.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _110.ClientUpdateProposalProtoMsg): _110.ClientUpdateProposal;
                    toProto(message: _110.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _110.ClientUpdateProposal): _110.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _110.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.UpgradeProposal;
                    fromJSON(object: any): _110.UpgradeProposal;
                    toJSON(message: _110.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_110.UpgradeProposal>): _110.UpgradeProposal;
                    fromAmino(object: _110.UpgradeProposalAmino): _110.UpgradeProposal;
                    toAmino(message: _110.UpgradeProposal): _110.UpgradeProposalAmino;
                    fromAminoMsg(object: _110.UpgradeProposalAminoMsg): _110.UpgradeProposal;
                    toAminoMsg(message: _110.UpgradeProposal): _110.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _110.UpgradeProposalProtoMsg): _110.UpgradeProposal;
                    toProto(message: _110.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _110.UpgradeProposal): _110.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _110.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Height;
                    fromJSON(object: any): _110.Height;
                    toJSON(message: _110.Height): unknown;
                    fromPartial(object: Partial<_110.Height>): _110.Height;
                    fromAmino(object: _110.HeightAmino): _110.Height;
                    toAmino(message: _110.Height): _110.HeightAmino;
                    fromAminoMsg(object: _110.HeightAminoMsg): _110.Height;
                    toAminoMsg(message: _110.Height): _110.HeightAminoMsg;
                    fromProtoMsg(message: _110.HeightProtoMsg): _110.Height;
                    toProto(message: _110.Height): Uint8Array;
                    toProtoMsg(message: _110.Height): _110.HeightProtoMsg;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Params;
                    fromJSON(object: any): _110.Params;
                    toJSON(message: _110.Params): unknown;
                    fromPartial(object: Partial<_110.Params>): _110.Params;
                    fromAmino(object: _110.ParamsAmino): _110.Params;
                    toAmino(message: _110.Params): _110.ParamsAmino;
                    fromAminoMsg(object: _110.ParamsAminoMsg): _110.Params;
                    toAminoMsg(message: _110.Params): _110.ParamsAminoMsg;
                    fromProtoMsg(message: _110.ParamsProtoMsg): _110.Params;
                    toProto(message: _110.Params): Uint8Array;
                    toProtoMsg(message: _110.Params): _110.ParamsProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _203.LCDQueryClient;
                    };
                };
                core: {
                    client: {
                        v1: _204.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
