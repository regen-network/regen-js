import * as _2 from "./app/module/v1alpha1/module";
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/node/v1beta1/query";
import * as _18 from "./base/query/v1beta1/pagination";
import * as _19 from "./base/reflection/v2alpha1/reflection";
import * as _20 from "./base/v1beta1/coin";
import * as _21 from "./crypto/ed25519/keys";
import * as _22 from "./crypto/hd/v1/hd";
import * as _23 from "./crypto/keyring/v1/record";
import * as _24 from "./crypto/multisig/keys";
import * as _25 from "./crypto/secp256k1/keys";
import * as _26 from "./crypto/secp256r1/keys";
import * as _27 from "./distribution/v1beta1/distribution";
import * as _28 from "./distribution/v1beta1/genesis";
import * as _29 from "./distribution/v1beta1/query";
import * as _30 from "./distribution/v1beta1/tx";
import * as _31 from "./feegrant/v1beta1/feegrant";
import * as _32 from "./feegrant/v1beta1/genesis";
import * as _33 from "./feegrant/v1beta1/query";
import * as _34 from "./feegrant/v1beta1/tx";
import * as _35 from "./gov/v1/genesis";
import * as _36 from "./gov/v1/gov";
import * as _37 from "./gov/v1/query";
import * as _38 from "./gov/v1/tx";
import * as _39 from "./gov/v1beta1/genesis";
import * as _40 from "./gov/v1beta1/gov";
import * as _41 from "./gov/v1beta1/query";
import * as _42 from "./gov/v1beta1/tx";
import * as _43 from "./group/v1/events";
import * as _44 from "./group/v1/genesis";
import * as _45 from "./group/v1/query";
import * as _46 from "./group/v1/tx";
import * as _47 from "./group/v1/types";
import * as _48 from "./mint/v1beta1/genesis";
import * as _49 from "./mint/v1beta1/mint";
import * as _50 from "./mint/v1beta1/query";
import * as _51 from "./orm/module/v1alpha1/module";
import * as _52 from "./params/v1beta1/params";
import * as _53 from "./params/v1beta1/query";
import * as _54 from "./staking/v1beta1/authz";
import * as _55 from "./staking/v1beta1/genesis";
import * as _56 from "./staking/v1beta1/query";
import * as _57 from "./staking/v1beta1/staking";
import * as _58 from "./staking/v1beta1/tx";
import * as _59 from "./tx/signing/v1beta1/signing";
import * as _60 from "./tx/v1beta1/service";
import * as _61 from "./tx/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/query";
import * as _63 from "./upgrade/v1beta1/tx";
import * as _64 from "./upgrade/v1beta1/upgrade";
import * as _65 from "./vesting/v1beta1/tx";
import * as _66 from "./vesting/v1beta1/vesting";
import * as _139 from "./auth/v1beta1/query.lcd";
import * as _140 from "./authz/v1beta1/query.lcd";
import * as _141 from "./bank/v1beta1/query.lcd";
import * as _142 from "./base/node/v1beta1/query.lcd";
import * as _143 from "./distribution/v1beta1/query.lcd";
import * as _144 from "./feegrant/v1beta1/query.lcd";
import * as _145 from "./gov/v1/query.lcd";
import * as _146 from "./gov/v1beta1/query.lcd";
import * as _147 from "./group/v1/query.lcd";
import * as _148 from "./mint/v1beta1/query.lcd";
import * as _149 from "./params/v1beta1/query.lcd";
import * as _150 from "./staking/v1beta1/query.lcd";
import * as _151 from "./tx/v1beta1/service.lcd";
import * as _152 from "./upgrade/v1beta1/query.lcd";
import * as _153 from "./auth/v1beta1/query.rpc.Query";
import * as _154 from "./authz/v1beta1/query.rpc.Query";
import * as _155 from "./bank/v1beta1/query.rpc.Query";
import * as _156 from "./base/node/v1beta1/query.rpc.Service";
import * as _157 from "./distribution/v1beta1/query.rpc.Query";
import * as _158 from "./feegrant/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1/query.rpc.Query";
import * as _160 from "./gov/v1beta1/query.rpc.Query";
import * as _161 from "./group/v1/query.rpc.Query";
import * as _162 from "./mint/v1beta1/query.rpc.Query";
import * as _163 from "./params/v1beta1/query.rpc.Query";
import * as _164 from "./staking/v1beta1/query.rpc.Query";
import * as _165 from "./tx/v1beta1/service.rpc.Service";
import * as _166 from "./upgrade/v1beta1/query.rpc.Query";
import * as _167 from "./authz/v1beta1/tx.rpc.msg";
import * as _168 from "./bank/v1beta1/tx.rpc.msg";
import * as _169 from "./distribution/v1beta1/tx.rpc.msg";
import * as _170 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _171 from "./gov/v1/tx.rpc.msg";
import * as _172 from "./gov/v1beta1/tx.rpc.msg";
import * as _173 from "./group/v1/tx.rpc.msg";
import * as _174 from "./staking/v1beta1/tx.rpc.msg";
import * as _175 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _176 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _2.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.Module;
                    fromPartial(_: Partial<_2.Module>): _2.Module;
                    fromAmino(_: _2.ModuleAmino): _2.Module;
                    toAmino(_: _2.Module): _2.ModuleAmino;
                    fromAminoMsg(object: _2.ModuleAminoMsg): _2.Module;
                    toAminoMsg(message: _2.Module): _2.ModuleAminoMsg;
                    fromProtoMsg(message: _2.ModuleProtoMsg): _2.Module;
                    toProto(message: _2.Module): Uint8Array;
                    toProtoMsg(message: _2.Module): _2.ModuleProtoMsg;
                };
            };
        }
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _5.QueryAccountsRequest): Promise<_5.QueryAccountsResponse>;
                account(request: _5.QueryAccountRequest): Promise<_5.QueryAccountResponse>;
                accountAddressByID(request: _5.QueryAccountAddressByIDRequest): Promise<_5.QueryAccountAddressByIDResponse>;
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                moduleAccounts(request?: _5.QueryModuleAccountsRequest): Promise<_5.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _5.QueryModuleAccountByNameRequest): Promise<_5.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _5.Bech32PrefixRequest): Promise<_5.Bech32PrefixResponse>;
                addressBytesToString(request: _5.AddressBytesToStringRequest): Promise<_5.AddressBytesToStringResponse>;
                addressStringToBytes(request: _5.AddressStringToBytesRequest): Promise<_5.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _5.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountsRequest;
                fromPartial(object: Partial<_5.QueryAccountsRequest>): _5.QueryAccountsRequest;
                fromAmino(object: _5.QueryAccountsRequestAmino): _5.QueryAccountsRequest;
                toAmino(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryAccountsRequestAminoMsg): _5.QueryAccountsRequest;
                toAminoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsRequestProtoMsg): _5.QueryAccountsRequest;
                toProto(message: _5.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _5.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountsResponse;
                fromPartial(object: Partial<_5.QueryAccountsResponse>): _5.QueryAccountsResponse;
                fromAmino(object: _5.QueryAccountsResponseAmino): _5.QueryAccountsResponse;
                toAmino(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryAccountsResponseAminoMsg): _5.QueryAccountsResponse;
                toAminoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsResponseProtoMsg): _5.QueryAccountsResponse;
                toProto(message: _5.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _5.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountRequest;
                fromPartial(object: Partial<_5.QueryAccountRequest>): _5.QueryAccountRequest;
                fromAmino(object: _5.QueryAccountRequestAmino): _5.QueryAccountRequest;
                toAmino(message: _5.QueryAccountRequest): _5.QueryAccountRequestAmino;
                fromAminoMsg(object: _5.QueryAccountRequestAminoMsg): _5.QueryAccountRequest;
                toAminoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountRequestProtoMsg): _5.QueryAccountRequest;
                toProto(message: _5.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _5.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountResponse;
                fromPartial(object: Partial<_5.QueryAccountResponse>): _5.QueryAccountResponse;
                fromAmino(object: _5.QueryAccountResponseAmino): _5.QueryAccountResponse;
                toAmino(message: _5.QueryAccountResponse): _5.QueryAccountResponseAmino;
                fromAminoMsg(object: _5.QueryAccountResponseAminoMsg): _5.QueryAccountResponse;
                toAminoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountResponseProtoMsg): _5.QueryAccountResponse;
                toProto(message: _5.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryParamsRequest;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                toAminoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryParamsResponse;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                toAminoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _5.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_5.QueryModuleAccountsRequest>): _5.QueryModuleAccountsRequest;
                fromAmino(_: _5.QueryModuleAccountsRequestAmino): _5.QueryModuleAccountsRequest;
                toAmino(_: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryModuleAccountsRequestAminoMsg): _5.QueryModuleAccountsRequest;
                toAminoMsg(message: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountsRequestProtoMsg): _5.QueryModuleAccountsRequest;
                toProto(message: _5.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _5.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_5.QueryModuleAccountsResponse>): _5.QueryModuleAccountsResponse;
                fromAmino(object: _5.QueryModuleAccountsResponseAmino): _5.QueryModuleAccountsResponse;
                toAmino(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryModuleAccountsResponseAminoMsg): _5.QueryModuleAccountsResponse;
                toAminoMsg(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountsResponseProtoMsg): _5.QueryModuleAccountsResponse;
                toProto(message: _5.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _5.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_5.QueryModuleAccountByNameRequest>): _5.QueryModuleAccountByNameRequest;
                fromAmino(object: _5.QueryModuleAccountByNameRequestAmino): _5.QueryModuleAccountByNameRequest;
                toAmino(message: _5.QueryModuleAccountByNameRequest): _5.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _5.QueryModuleAccountByNameRequestAminoMsg): _5.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _5.QueryModuleAccountByNameRequest): _5.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountByNameRequestProtoMsg): _5.QueryModuleAccountByNameRequest;
                toProto(message: _5.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountByNameRequest): _5.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _5.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_5.QueryModuleAccountByNameResponse>): _5.QueryModuleAccountByNameResponse;
                fromAmino(object: _5.QueryModuleAccountByNameResponseAmino): _5.QueryModuleAccountByNameResponse;
                toAmino(message: _5.QueryModuleAccountByNameResponse): _5.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _5.QueryModuleAccountByNameResponseAminoMsg): _5.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _5.QueryModuleAccountByNameResponse): _5.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountByNameResponseProtoMsg): _5.QueryModuleAccountByNameResponse;
                toProto(message: _5.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountByNameResponse): _5.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _5.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.Bech32PrefixRequest;
                fromPartial(_: Partial<_5.Bech32PrefixRequest>): _5.Bech32PrefixRequest;
                fromAmino(_: _5.Bech32PrefixRequestAmino): _5.Bech32PrefixRequest;
                toAmino(_: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _5.Bech32PrefixRequestAminoMsg): _5.Bech32PrefixRequest;
                toAminoMsg(message: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _5.Bech32PrefixRequestProtoMsg): _5.Bech32PrefixRequest;
                toProto(message: _5.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _5.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.Bech32PrefixResponse;
                fromPartial(object: Partial<_5.Bech32PrefixResponse>): _5.Bech32PrefixResponse;
                fromAmino(object: _5.Bech32PrefixResponseAmino): _5.Bech32PrefixResponse;
                toAmino(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _5.Bech32PrefixResponseAminoMsg): _5.Bech32PrefixResponse;
                toAminoMsg(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _5.Bech32PrefixResponseProtoMsg): _5.Bech32PrefixResponse;
                toProto(message: _5.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _5.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressBytesToStringRequest;
                fromPartial(object: Partial<_5.AddressBytesToStringRequest>): _5.AddressBytesToStringRequest;
                fromAmino(object: _5.AddressBytesToStringRequestAmino): _5.AddressBytesToStringRequest;
                toAmino(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _5.AddressBytesToStringRequestAminoMsg): _5.AddressBytesToStringRequest;
                toAminoMsg(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _5.AddressBytesToStringRequestProtoMsg): _5.AddressBytesToStringRequest;
                toProto(message: _5.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _5.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressBytesToStringResponse;
                fromPartial(object: Partial<_5.AddressBytesToStringResponse>): _5.AddressBytesToStringResponse;
                fromAmino(object: _5.AddressBytesToStringResponseAmino): _5.AddressBytesToStringResponse;
                toAmino(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _5.AddressBytesToStringResponseAminoMsg): _5.AddressBytesToStringResponse;
                toAminoMsg(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _5.AddressBytesToStringResponseProtoMsg): _5.AddressBytesToStringResponse;
                toProto(message: _5.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _5.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressStringToBytesRequest;
                fromPartial(object: Partial<_5.AddressStringToBytesRequest>): _5.AddressStringToBytesRequest;
                fromAmino(object: _5.AddressStringToBytesRequestAmino): _5.AddressStringToBytesRequest;
                toAmino(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _5.AddressStringToBytesRequestAminoMsg): _5.AddressStringToBytesRequest;
                toAminoMsg(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _5.AddressStringToBytesRequestProtoMsg): _5.AddressStringToBytesRequest;
                toProto(message: _5.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _5.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressStringToBytesResponse;
                fromPartial(object: Partial<_5.AddressStringToBytesResponse>): _5.AddressStringToBytesResponse;
                fromAmino(object: _5.AddressStringToBytesResponseAmino): _5.AddressStringToBytesResponse;
                toAmino(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _5.AddressStringToBytesResponseAminoMsg): _5.AddressStringToBytesResponse;
                toAminoMsg(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _5.AddressStringToBytesResponseProtoMsg): _5.AddressStringToBytesResponse;
                toProto(message: _5.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _5.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_5.QueryAccountAddressByIDRequest>): _5.QueryAccountAddressByIDRequest;
                fromAmino(object: _5.QueryAccountAddressByIDRequestAmino): _5.QueryAccountAddressByIDRequest;
                toAmino(message: _5.QueryAccountAddressByIDRequest): _5.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _5.QueryAccountAddressByIDRequestAminoMsg): _5.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _5.QueryAccountAddressByIDRequest): _5.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountAddressByIDRequestProtoMsg): _5.QueryAccountAddressByIDRequest;
                toProto(message: _5.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountAddressByIDRequest): _5.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _5.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_5.QueryAccountAddressByIDResponse>): _5.QueryAccountAddressByIDResponse;
                fromAmino(object: _5.QueryAccountAddressByIDResponseAmino): _5.QueryAccountAddressByIDResponse;
                toAmino(message: _5.QueryAccountAddressByIDResponse): _5.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _5.QueryAccountAddressByIDResponseAminoMsg): _5.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _5.QueryAccountAddressByIDResponse): _5.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountAddressByIDResponseProtoMsg): _5.QueryAccountAddressByIDResponse;
                toProto(message: _5.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountAddressByIDResponse): _5.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _3.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _3.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                toAminoMsg(message: _4.GenesisState): _4.GenesisStateAminoMsg;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _3.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.BaseAccount;
                fromPartial(object: Partial<_3.BaseAccount>): _3.BaseAccount;
                fromAmino(object: _3.BaseAccountAmino): _3.BaseAccount;
                toAmino(message: _3.BaseAccount): _3.BaseAccountAmino;
                fromAminoMsg(object: _3.BaseAccountAminoMsg): _3.BaseAccount;
                toAminoMsg(message: _3.BaseAccount): _3.BaseAccountAminoMsg;
                fromProtoMsg(message: _3.BaseAccountProtoMsg): _3.BaseAccount;
                toProto(message: _3.BaseAccount): Uint8Array;
                toProtoMsg(message: _3.BaseAccount): _3.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _3.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.ModuleAccount;
                fromPartial(object: Partial<_3.ModuleAccount>): _3.ModuleAccount;
                fromAmino(object: _3.ModuleAccountAmino): _3.ModuleAccount;
                toAmino(message: _3.ModuleAccount): _3.ModuleAccountAmino;
                fromAminoMsg(object: _3.ModuleAccountAminoMsg): _3.ModuleAccount;
                toAminoMsg(message: _3.ModuleAccount): _3.ModuleAccountAminoMsg;
                fromProtoMsg(message: _3.ModuleAccountProtoMsg): _3.ModuleAccount;
                toProto(message: _3.ModuleAccount): Uint8Array;
                toProtoMsg(message: _3.ModuleAccount): _3.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.Params;
                fromPartial(object: Partial<_3.Params>): _3.Params;
                fromAmino(object: _3.ParamsAmino): _3.Params;
                toAmino(message: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                toAminoMsg(message: _3.Params): _3.ParamsAminoMsg;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _9.QueryGrantsRequest): Promise<_9.QueryGrantsResponse>;
                granterGrants(request: _9.QueryGranterGrantsRequest): Promise<_9.QueryGranterGrantsResponse>;
                granteeGrants(request: _9.QueryGranteeGrantsRequest): Promise<_9.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _10.MsgGrant) => _10.MsgGrantAmino;
                    fromAmino: (object: _10.MsgGrantAmino) => _10.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _10.MsgExec) => _10.MsgExecAmino;
                    fromAmino: (object: _10.MsgExecAmino) => _10.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _10.MsgRevoke) => _10.MsgRevokeAmino;
                    fromAmino: (object: _10.MsgRevokeAmino) => _10.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _10.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgGrant;
                fromPartial(object: Partial<_10.MsgGrant>): _10.MsgGrant;
                fromAmino(object: _10.MsgGrantAmino): _10.MsgGrant;
                toAmino(message: _10.MsgGrant): _10.MsgGrantAmino;
                fromAminoMsg(object: _10.MsgGrantAminoMsg): _10.MsgGrant;
                toAminoMsg(message: _10.MsgGrant): _10.MsgGrantAminoMsg;
                fromProtoMsg(message: _10.MsgGrantProtoMsg): _10.MsgGrant;
                toProto(message: _10.MsgGrant): Uint8Array;
                toProtoMsg(message: _10.MsgGrant): _10.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _10.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgExecResponse;
                fromPartial(object: Partial<_10.MsgExecResponse>): _10.MsgExecResponse;
                fromAmino(object: _10.MsgExecResponseAmino): _10.MsgExecResponse;
                toAmino(message: _10.MsgExecResponse): _10.MsgExecResponseAmino;
                fromAminoMsg(object: _10.MsgExecResponseAminoMsg): _10.MsgExecResponse;
                toAminoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _10.MsgExecResponseProtoMsg): _10.MsgExecResponse;
                toProto(message: _10.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _10.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgExec;
                fromPartial(object: Partial<_10.MsgExec>): _10.MsgExec;
                fromAmino(object: _10.MsgExecAmino): _10.MsgExec;
                toAmino(message: _10.MsgExec): _10.MsgExecAmino;
                fromAminoMsg(object: _10.MsgExecAminoMsg): _10.MsgExec;
                toAminoMsg(message: _10.MsgExec): _10.MsgExecAminoMsg;
                fromProtoMsg(message: _10.MsgExecProtoMsg): _10.MsgExec;
                toProto(message: _10.MsgExec): Uint8Array;
                toProtoMsg(message: _10.MsgExec): _10.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _10.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgGrantResponse;
                fromPartial(_: Partial<_10.MsgGrantResponse>): _10.MsgGrantResponse;
                fromAmino(_: _10.MsgGrantResponseAmino): _10.MsgGrantResponse;
                toAmino(_: _10.MsgGrantResponse): _10.MsgGrantResponseAmino;
                fromAminoMsg(object: _10.MsgGrantResponseAminoMsg): _10.MsgGrantResponse;
                toAminoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _10.MsgGrantResponseProtoMsg): _10.MsgGrantResponse;
                toProto(message: _10.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _10.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRevoke;
                fromPartial(object: Partial<_10.MsgRevoke>): _10.MsgRevoke;
                fromAmino(object: _10.MsgRevokeAmino): _10.MsgRevoke;
                toAmino(message: _10.MsgRevoke): _10.MsgRevokeAmino;
                fromAminoMsg(object: _10.MsgRevokeAminoMsg): _10.MsgRevoke;
                toAminoMsg(message: _10.MsgRevoke): _10.MsgRevokeAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeProtoMsg): _10.MsgRevoke;
                toProto(message: _10.MsgRevoke): Uint8Array;
                toProtoMsg(message: _10.MsgRevoke): _10.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _10.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRevokeResponse;
                fromPartial(_: Partial<_10.MsgRevokeResponse>): _10.MsgRevokeResponse;
                fromAmino(_: _10.MsgRevokeResponseAmino): _10.MsgRevokeResponse;
                toAmino(_: _10.MsgRevokeResponse): _10.MsgRevokeResponseAmino;
                fromAminoMsg(object: _10.MsgRevokeResponseAminoMsg): _10.MsgRevokeResponse;
                toAminoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeResponseProtoMsg): _10.MsgRevokeResponse;
                toProto(message: _10.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _9.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGrantsRequest;
                fromPartial(object: Partial<_9.QueryGrantsRequest>): _9.QueryGrantsRequest;
                fromAmino(object: _9.QueryGrantsRequestAmino): _9.QueryGrantsRequest;
                toAmino(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGrantsRequestAminoMsg): _9.QueryGrantsRequest;
                toAminoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsRequestProtoMsg): _9.QueryGrantsRequest;
                toProto(message: _9.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _9.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGrantsResponse;
                fromPartial(object: Partial<_9.QueryGrantsResponse>): _9.QueryGrantsResponse;
                fromAmino(object: _9.QueryGrantsResponseAmino): _9.QueryGrantsResponse;
                toAmino(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGrantsResponseAminoMsg): _9.QueryGrantsResponse;
                toAminoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsResponseProtoMsg): _9.QueryGrantsResponse;
                toProto(message: _9.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _9.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_9.QueryGranterGrantsRequest>): _9.QueryGranterGrantsRequest;
                fromAmino(object: _9.QueryGranterGrantsRequestAmino): _9.QueryGranterGrantsRequest;
                toAmino(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsRequestAminoMsg): _9.QueryGranterGrantsRequest;
                toAminoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsRequestProtoMsg): _9.QueryGranterGrantsRequest;
                toProto(message: _9.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _9.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_9.QueryGranterGrantsResponse>): _9.QueryGranterGrantsResponse;
                fromAmino(object: _9.QueryGranterGrantsResponseAmino): _9.QueryGranterGrantsResponse;
                toAmino(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsResponseAminoMsg): _9.QueryGranterGrantsResponse;
                toAminoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsResponseProtoMsg): _9.QueryGranterGrantsResponse;
                toProto(message: _9.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _9.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_9.QueryGranteeGrantsRequest>): _9.QueryGranteeGrantsRequest;
                fromAmino(object: _9.QueryGranteeGrantsRequestAmino): _9.QueryGranteeGrantsRequest;
                toAmino(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsRequestAminoMsg): _9.QueryGranteeGrantsRequest;
                toAminoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsRequestProtoMsg): _9.QueryGranteeGrantsRequest;
                toProto(message: _9.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _9.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_9.QueryGranteeGrantsResponse>): _9.QueryGranteeGrantsResponse;
                fromAmino(object: _9.QueryGranteeGrantsResponseAmino): _9.QueryGranteeGrantsResponse;
                toAmino(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsResponseAminoMsg): _9.QueryGranteeGrantsResponse;
                toAminoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsResponseProtoMsg): _9.QueryGranteeGrantsResponse;
                toProto(message: _9.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _7.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.EventGrant;
                fromPartial(object: Partial<_7.EventGrant>): _7.EventGrant;
                fromAmino(object: _7.EventGrantAmino): _7.EventGrant;
                toAmino(message: _7.EventGrant): _7.EventGrantAmino;
                fromAminoMsg(object: _7.EventGrantAminoMsg): _7.EventGrant;
                toAminoMsg(message: _7.EventGrant): _7.EventGrantAminoMsg;
                fromProtoMsg(message: _7.EventGrantProtoMsg): _7.EventGrant;
                toProto(message: _7.EventGrant): Uint8Array;
                toProtoMsg(message: _7.EventGrant): _7.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _7.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.EventRevoke;
                fromPartial(object: Partial<_7.EventRevoke>): _7.EventRevoke;
                fromAmino(object: _7.EventRevokeAmino): _7.EventRevoke;
                toAmino(message: _7.EventRevoke): _7.EventRevokeAmino;
                fromAminoMsg(object: _7.EventRevokeAminoMsg): _7.EventRevoke;
                toAminoMsg(message: _7.EventRevoke): _7.EventRevokeAminoMsg;
                fromProtoMsg(message: _7.EventRevokeProtoMsg): _7.EventRevoke;
                toProto(message: _7.EventRevoke): Uint8Array;
                toProtoMsg(message: _7.EventRevoke): _7.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _6.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GenericAuthorization;
                fromPartial(object: Partial<_6.GenericAuthorization>): _6.GenericAuthorization;
                fromAmino(object: _6.GenericAuthorizationAmino): _6.GenericAuthorization;
                toAmino(message: _6.GenericAuthorization): _6.GenericAuthorizationAmino;
                fromAminoMsg(object: _6.GenericAuthorizationAminoMsg): _6.GenericAuthorization;
                toAminoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GenericAuthorizationProtoMsg): _6.GenericAuthorization;
                toProto(message: _6.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _6.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.Grant;
                fromPartial(object: Partial<_6.Grant>): _6.Grant;
                fromAmino(object: _6.GrantAmino): _6.Grant;
                toAmino(message: _6.Grant): _6.GrantAmino;
                fromAminoMsg(object: _6.GrantAminoMsg): _6.Grant;
                toAminoMsg(message: _6.Grant): _6.GrantAminoMsg;
                fromProtoMsg(message: _6.GrantProtoMsg): _6.Grant;
                toProto(message: _6.Grant): Uint8Array;
                toProtoMsg(message: _6.Grant): _6.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _6.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GrantAuthorization;
                fromPartial(object: Partial<_6.GrantAuthorization>): _6.GrantAuthorization;
                fromAmino(object: _6.GrantAuthorizationAmino): _6.GrantAuthorization;
                toAmino(message: _6.GrantAuthorization): _6.GrantAuthorizationAmino;
                fromAminoMsg(object: _6.GrantAuthorizationAminoMsg): _6.GrantAuthorization;
                toAminoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GrantAuthorizationProtoMsg): _6.GrantAuthorization;
                toProto(message: _6.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _6.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GrantQueueItem;
                fromPartial(object: Partial<_6.GrantQueueItem>): _6.GrantQueueItem;
                fromAmino(object: _6.GrantQueueItemAmino): _6.GrantQueueItem;
                toAmino(message: _6.GrantQueueItem): _6.GrantQueueItemAmino;
                fromAminoMsg(object: _6.GrantQueueItemAminoMsg): _6.GrantQueueItem;
                toAminoMsg(message: _6.GrantQueueItem): _6.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _6.GrantQueueItemProtoMsg): _6.GrantQueueItem;
                toProto(message: _6.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _6.GrantQueueItem): _6.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _11.SendAuthorization | _54.StakeAuthorization | _6.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _14.QueryBalanceRequest): Promise<_14.QueryBalanceResponse>;
                allBalances(request: _14.QueryAllBalancesRequest): Promise<_14.QueryAllBalancesResponse>;
                spendableBalances(request: _14.QuerySpendableBalancesRequest): Promise<_14.QuerySpendableBalancesResponse>;
                totalSupply(request?: _14.QueryTotalSupplyRequest): Promise<_14.QueryTotalSupplyResponse>;
                supplyOf(request: _14.QuerySupplyOfRequest): Promise<_14.QuerySupplyOfResponse>;
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                denomMetadata(request: _14.QueryDenomMetadataRequest): Promise<_14.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _14.QueryDenomsMetadataRequest): Promise<_14.QueryDenomsMetadataResponse>;
                denomOwners(request: _14.QueryDenomOwnersRequest): Promise<_14.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgSend) => _15.MsgSendAmino;
                    fromAmino: (object: _15.MsgSendAmino) => _15.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgMultiSend) => _15.MsgMultiSendAmino;
                    fromAmino: (object: _15.MsgMultiSendAmino) => _15.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _15.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgSend;
                fromPartial(object: Partial<_15.MsgSend>): _15.MsgSend;
                fromAmino(object: _15.MsgSendAmino): _15.MsgSend;
                toAmino(message: _15.MsgSend): _15.MsgSendAmino;
                fromAminoMsg(object: _15.MsgSendAminoMsg): _15.MsgSend;
                toAminoMsg(message: _15.MsgSend): _15.MsgSendAminoMsg;
                fromProtoMsg(message: _15.MsgSendProtoMsg): _15.MsgSend;
                toProto(message: _15.MsgSend): Uint8Array;
                toProtoMsg(message: _15.MsgSend): _15.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _15.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgSendResponse;
                fromPartial(_: Partial<_15.MsgSendResponse>): _15.MsgSendResponse;
                fromAmino(_: _15.MsgSendResponseAmino): _15.MsgSendResponse;
                toAmino(_: _15.MsgSendResponse): _15.MsgSendResponseAmino;
                fromAminoMsg(object: _15.MsgSendResponseAminoMsg): _15.MsgSendResponse;
                toAminoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgSendResponseProtoMsg): _15.MsgSendResponse;
                toProto(message: _15.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _15.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgMultiSend;
                fromPartial(object: Partial<_15.MsgMultiSend>): _15.MsgMultiSend;
                fromAmino(object: _15.MsgMultiSendAmino): _15.MsgMultiSend;
                toAmino(message: _15.MsgMultiSend): _15.MsgMultiSendAmino;
                fromAminoMsg(object: _15.MsgMultiSendAminoMsg): _15.MsgMultiSend;
                toAminoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendProtoMsg): _15.MsgMultiSend;
                toProto(message: _15.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _15.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgMultiSendResponse;
                fromPartial(_: Partial<_15.MsgMultiSendResponse>): _15.MsgMultiSendResponse;
                fromAmino(_: _15.MsgMultiSendResponseAmino): _15.MsgMultiSendResponse;
                toAmino(_: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _15.MsgMultiSendResponseAminoMsg): _15.MsgMultiSendResponse;
                toAminoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendResponseProtoMsg): _15.MsgMultiSendResponse;
                toProto(message: _15.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _14.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryBalanceRequest;
                fromPartial(object: Partial<_14.QueryBalanceRequest>): _14.QueryBalanceRequest;
                fromAmino(object: _14.QueryBalanceRequestAmino): _14.QueryBalanceRequest;
                toAmino(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAmino;
                fromAminoMsg(object: _14.QueryBalanceRequestAminoMsg): _14.QueryBalanceRequest;
                toAminoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceRequestProtoMsg): _14.QueryBalanceRequest;
                toProto(message: _14.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _14.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryBalanceResponse;
                fromPartial(object: Partial<_14.QueryBalanceResponse>): _14.QueryBalanceResponse;
                fromAmino(object: _14.QueryBalanceResponseAmino): _14.QueryBalanceResponse;
                toAmino(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAmino;
                fromAminoMsg(object: _14.QueryBalanceResponseAminoMsg): _14.QueryBalanceResponse;
                toAminoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceResponseProtoMsg): _14.QueryBalanceResponse;
                toProto(message: _14.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _14.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryAllBalancesRequest;
                fromPartial(object: Partial<_14.QueryAllBalancesRequest>): _14.QueryAllBalancesRequest;
                fromAmino(object: _14.QueryAllBalancesRequestAmino): _14.QueryAllBalancesRequest;
                toAmino(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _14.QueryAllBalancesRequestAminoMsg): _14.QueryAllBalancesRequest;
                toAminoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesRequestProtoMsg): _14.QueryAllBalancesRequest;
                toProto(message: _14.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _14.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryAllBalancesResponse;
                fromPartial(object: Partial<_14.QueryAllBalancesResponse>): _14.QueryAllBalancesResponse;
                fromAmino(object: _14.QueryAllBalancesResponseAmino): _14.QueryAllBalancesResponse;
                toAmino(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _14.QueryAllBalancesResponseAminoMsg): _14.QueryAllBalancesResponse;
                toAminoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesResponseProtoMsg): _14.QueryAllBalancesResponse;
                toProto(message: _14.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _14.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_14.QuerySpendableBalancesRequest>): _14.QuerySpendableBalancesRequest;
                fromAmino(object: _14.QuerySpendableBalancesRequestAmino): _14.QuerySpendableBalancesRequest;
                toAmino(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesRequestAminoMsg): _14.QuerySpendableBalancesRequest;
                toAminoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesRequestProtoMsg): _14.QuerySpendableBalancesRequest;
                toProto(message: _14.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _14.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_14.QuerySpendableBalancesResponse>): _14.QuerySpendableBalancesResponse;
                fromAmino(object: _14.QuerySpendableBalancesResponseAmino): _14.QuerySpendableBalancesResponse;
                toAmino(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesResponseAminoMsg): _14.QuerySpendableBalancesResponse;
                toAminoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesResponseProtoMsg): _14.QuerySpendableBalancesResponse;
                toProto(message: _14.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _14.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_14.QueryTotalSupplyRequest>): _14.QueryTotalSupplyRequest;
                fromAmino(object: _14.QueryTotalSupplyRequestAmino): _14.QueryTotalSupplyRequest;
                toAmino(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyRequestAminoMsg): _14.QueryTotalSupplyRequest;
                toAminoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyRequestProtoMsg): _14.QueryTotalSupplyRequest;
                toProto(message: _14.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _14.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_14.QueryTotalSupplyResponse>): _14.QueryTotalSupplyResponse;
                fromAmino(object: _14.QueryTotalSupplyResponseAmino): _14.QueryTotalSupplyResponse;
                toAmino(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyResponseAminoMsg): _14.QueryTotalSupplyResponse;
                toAminoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyResponseProtoMsg): _14.QueryTotalSupplyResponse;
                toProto(message: _14.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _14.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySupplyOfRequest;
                fromPartial(object: Partial<_14.QuerySupplyOfRequest>): _14.QuerySupplyOfRequest;
                fromAmino(object: _14.QuerySupplyOfRequestAmino): _14.QuerySupplyOfRequest;
                toAmino(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _14.QuerySupplyOfRequestAminoMsg): _14.QuerySupplyOfRequest;
                toAminoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfRequestProtoMsg): _14.QuerySupplyOfRequest;
                toProto(message: _14.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _14.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySupplyOfResponse;
                fromPartial(object: Partial<_14.QuerySupplyOfResponse>): _14.QuerySupplyOfResponse;
                fromAmino(object: _14.QuerySupplyOfResponseAmino): _14.QuerySupplyOfResponse;
                toAmino(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _14.QuerySupplyOfResponseAminoMsg): _14.QuerySupplyOfResponse;
                toAminoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfResponseProtoMsg): _14.QuerySupplyOfResponse;
                toProto(message: _14.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryParamsRequest;
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                toAminoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryParamsResponse;
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                toAminoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _14.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_14.QueryDenomsMetadataRequest>): _14.QueryDenomsMetadataRequest;
                fromAmino(object: _14.QueryDenomsMetadataRequestAmino): _14.QueryDenomsMetadataRequest;
                toAmino(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataRequestAminoMsg): _14.QueryDenomsMetadataRequest;
                toAminoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataRequestProtoMsg): _14.QueryDenomsMetadataRequest;
                toProto(message: _14.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _14.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_14.QueryDenomsMetadataResponse>): _14.QueryDenomsMetadataResponse;
                fromAmino(object: _14.QueryDenomsMetadataResponseAmino): _14.QueryDenomsMetadataResponse;
                toAmino(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataResponseAminoMsg): _14.QueryDenomsMetadataResponse;
                toAminoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataResponseProtoMsg): _14.QueryDenomsMetadataResponse;
                toProto(message: _14.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _14.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_14.QueryDenomMetadataRequest>): _14.QueryDenomMetadataRequest;
                fromAmino(object: _14.QueryDenomMetadataRequestAmino): _14.QueryDenomMetadataRequest;
                toAmino(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataRequestAminoMsg): _14.QueryDenomMetadataRequest;
                toAminoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataRequestProtoMsg): _14.QueryDenomMetadataRequest;
                toProto(message: _14.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _14.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_14.QueryDenomMetadataResponse>): _14.QueryDenomMetadataResponse;
                fromAmino(object: _14.QueryDenomMetadataResponseAmino): _14.QueryDenomMetadataResponse;
                toAmino(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataResponseAminoMsg): _14.QueryDenomMetadataResponse;
                toAminoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataResponseProtoMsg): _14.QueryDenomMetadataResponse;
                toProto(message: _14.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _14.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_14.QueryDenomOwnersRequest>): _14.QueryDenomOwnersRequest;
                fromAmino(object: _14.QueryDenomOwnersRequestAmino): _14.QueryDenomOwnersRequest;
                toAmino(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _14.QueryDenomOwnersRequestAminoMsg): _14.QueryDenomOwnersRequest;
                toAminoMsg(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomOwnersRequestProtoMsg): _14.QueryDenomOwnersRequest;
                toProto(message: _14.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _14.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.DenomOwner;
                fromPartial(object: Partial<_14.DenomOwner>): _14.DenomOwner;
                fromAmino(object: _14.DenomOwnerAmino): _14.DenomOwner;
                toAmino(message: _14.DenomOwner): _14.DenomOwnerAmino;
                fromAminoMsg(object: _14.DenomOwnerAminoMsg): _14.DenomOwner;
                toAminoMsg(message: _14.DenomOwner): _14.DenomOwnerAminoMsg;
                fromProtoMsg(message: _14.DenomOwnerProtoMsg): _14.DenomOwner;
                toProto(message: _14.DenomOwner): Uint8Array;
                toProtoMsg(message: _14.DenomOwner): _14.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _14.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_14.QueryDenomOwnersResponse>): _14.QueryDenomOwnersResponse;
                fromAmino(object: _14.QueryDenomOwnersResponseAmino): _14.QueryDenomOwnersResponse;
                toAmino(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _14.QueryDenomOwnersResponseAminoMsg): _14.QueryDenomOwnersResponse;
                toAminoMsg(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomOwnersResponseProtoMsg): _14.QueryDenomOwnersResponse;
                toProto(message: _14.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _13.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.Balance;
                fromPartial(object: Partial<_13.Balance>): _13.Balance;
                fromAmino(object: _13.BalanceAmino): _13.Balance;
                toAmino(message: _13.Balance): _13.BalanceAmino;
                fromAminoMsg(object: _13.BalanceAminoMsg): _13.Balance;
                toAminoMsg(message: _13.Balance): _13.BalanceAminoMsg;
                fromProtoMsg(message: _13.BalanceProtoMsg): _13.Balance;
                toProto(message: _13.Balance): Uint8Array;
                toProtoMsg(message: _13.Balance): _13.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _12.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.SendEnabled;
                fromPartial(object: Partial<_12.SendEnabled>): _12.SendEnabled;
                fromAmino(object: _12.SendEnabledAmino): _12.SendEnabled;
                toAmino(message: _12.SendEnabled): _12.SendEnabledAmino;
                fromAminoMsg(object: _12.SendEnabledAminoMsg): _12.SendEnabled;
                toAminoMsg(message: _12.SendEnabled): _12.SendEnabledAminoMsg;
                fromProtoMsg(message: _12.SendEnabledProtoMsg): _12.SendEnabled;
                toProto(message: _12.SendEnabled): Uint8Array;
                toProtoMsg(message: _12.SendEnabled): _12.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _12.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Input;
                fromPartial(object: Partial<_12.Input>): _12.Input;
                fromAmino(object: _12.InputAmino): _12.Input;
                toAmino(message: _12.Input): _12.InputAmino;
                fromAminoMsg(object: _12.InputAminoMsg): _12.Input;
                toAminoMsg(message: _12.Input): _12.InputAminoMsg;
                fromProtoMsg(message: _12.InputProtoMsg): _12.Input;
                toProto(message: _12.Input): Uint8Array;
                toProtoMsg(message: _12.Input): _12.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _12.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Output;
                fromPartial(object: Partial<_12.Output>): _12.Output;
                fromAmino(object: _12.OutputAmino): _12.Output;
                toAmino(message: _12.Output): _12.OutputAmino;
                fromAminoMsg(object: _12.OutputAminoMsg): _12.Output;
                toAminoMsg(message: _12.Output): _12.OutputAminoMsg;
                fromProtoMsg(message: _12.OutputProtoMsg): _12.Output;
                toProto(message: _12.Output): Uint8Array;
                toProtoMsg(message: _12.Output): _12.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _12.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Supply;
                fromPartial(object: Partial<_12.Supply>): _12.Supply;
                fromAmino(object: _12.SupplyAmino): _12.Supply;
                toAmino(message: _12.Supply): _12.SupplyAmino;
                fromAminoMsg(object: _12.SupplyAminoMsg): _12.Supply;
                toAminoMsg(message: _12.Supply): _12.SupplyAminoMsg;
                fromProtoMsg(message: _12.SupplyProtoMsg): _12.Supply;
                toProto(message: _12.Supply): Uint8Array;
                toProtoMsg(message: _12.Supply): _12.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _12.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.DenomUnit;
                fromPartial(object: Partial<_12.DenomUnit>): _12.DenomUnit;
                fromAmino(object: _12.DenomUnitAmino): _12.DenomUnit;
                toAmino(message: _12.DenomUnit): _12.DenomUnitAmino;
                fromAminoMsg(object: _12.DenomUnitAminoMsg): _12.DenomUnit;
                toAminoMsg(message: _12.DenomUnit): _12.DenomUnitAminoMsg;
                fromProtoMsg(message: _12.DenomUnitProtoMsg): _12.DenomUnit;
                toProto(message: _12.DenomUnit): Uint8Array;
                toProtoMsg(message: _12.DenomUnit): _12.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _12.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Metadata;
                fromPartial(object: Partial<_12.Metadata>): _12.Metadata;
                fromAmino(object: _12.MetadataAmino): _12.Metadata;
                toAmino(message: _12.Metadata): _12.MetadataAmino;
                fromAminoMsg(object: _12.MetadataAminoMsg): _12.Metadata;
                toAminoMsg(message: _12.Metadata): _12.MetadataAminoMsg;
                fromProtoMsg(message: _12.MetadataProtoMsg): _12.Metadata;
                toProto(message: _12.Metadata): Uint8Array;
                toProtoMsg(message: _12.Metadata): _12.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _11.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.SendAuthorization;
                fromPartial(object: Partial<_11.SendAuthorization>): _11.SendAuthorization;
                fromAmino(object: _11.SendAuthorizationAmino): _11.SendAuthorization;
                toAmino(message: _11.SendAuthorization): _11.SendAuthorizationAmino;
                fromAminoMsg(object: _11.SendAuthorizationAminoMsg): _11.SendAuthorization;
                toAminoMsg(message: _11.SendAuthorization): _11.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _11.SendAuthorizationProtoMsg): _11.SendAuthorization;
                toProto(message: _11.SendAuthorization): Uint8Array;
                toProtoMsg(message: _11.SendAuthorization): _11.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _16.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.TxResponse;
                    fromPartial(object: Partial<_16.TxResponse>): _16.TxResponse;
                    fromAmino(object: _16.TxResponseAmino): _16.TxResponse;
                    toAmino(message: _16.TxResponse): _16.TxResponseAmino;
                    fromAminoMsg(object: _16.TxResponseAminoMsg): _16.TxResponse;
                    toAminoMsg(message: _16.TxResponse): _16.TxResponseAminoMsg;
                    fromProtoMsg(message: _16.TxResponseProtoMsg): _16.TxResponse;
                    toProto(message: _16.TxResponse): Uint8Array;
                    toProtoMsg(message: _16.TxResponse): _16.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _16.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.ABCIMessageLog;
                    fromPartial(object: Partial<_16.ABCIMessageLog>): _16.ABCIMessageLog;
                    fromAmino(object: _16.ABCIMessageLogAmino): _16.ABCIMessageLog;
                    toAmino(message: _16.ABCIMessageLog): _16.ABCIMessageLogAmino;
                    fromAminoMsg(object: _16.ABCIMessageLogAminoMsg): _16.ABCIMessageLog;
                    toAminoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _16.ABCIMessageLogProtoMsg): _16.ABCIMessageLog;
                    toProto(message: _16.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _16.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.StringEvent;
                    fromPartial(object: Partial<_16.StringEvent>): _16.StringEvent;
                    fromAmino(object: _16.StringEventAmino): _16.StringEvent;
                    toAmino(message: _16.StringEvent): _16.StringEventAmino;
                    fromAminoMsg(object: _16.StringEventAminoMsg): _16.StringEvent;
                    toAminoMsg(message: _16.StringEvent): _16.StringEventAminoMsg;
                    fromProtoMsg(message: _16.StringEventProtoMsg): _16.StringEvent;
                    toProto(message: _16.StringEvent): Uint8Array;
                    toProtoMsg(message: _16.StringEvent): _16.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _16.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Attribute;
                    fromPartial(object: Partial<_16.Attribute>): _16.Attribute;
                    fromAmino(object: _16.AttributeAmino): _16.Attribute;
                    toAmino(message: _16.Attribute): _16.AttributeAmino;
                    fromAminoMsg(object: _16.AttributeAminoMsg): _16.Attribute;
                    toAminoMsg(message: _16.Attribute): _16.AttributeAminoMsg;
                    fromProtoMsg(message: _16.AttributeProtoMsg): _16.Attribute;
                    toProto(message: _16.Attribute): Uint8Array;
                    toProtoMsg(message: _16.Attribute): _16.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _16.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GasInfo;
                    fromPartial(object: Partial<_16.GasInfo>): _16.GasInfo;
                    fromAmino(object: _16.GasInfoAmino): _16.GasInfo;
                    toAmino(message: _16.GasInfo): _16.GasInfoAmino;
                    fromAminoMsg(object: _16.GasInfoAminoMsg): _16.GasInfo;
                    toAminoMsg(message: _16.GasInfo): _16.GasInfoAminoMsg;
                    fromProtoMsg(message: _16.GasInfoProtoMsg): _16.GasInfo;
                    toProto(message: _16.GasInfo): Uint8Array;
                    toProtoMsg(message: _16.GasInfo): _16.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _16.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Result;
                    fromPartial(object: Partial<_16.Result>): _16.Result;
                    fromAmino(object: _16.ResultAmino): _16.Result;
                    toAmino(message: _16.Result): _16.ResultAmino;
                    fromAminoMsg(object: _16.ResultAminoMsg): _16.Result;
                    toAminoMsg(message: _16.Result): _16.ResultAminoMsg;
                    fromProtoMsg(message: _16.ResultProtoMsg): _16.Result;
                    toProto(message: _16.Result): Uint8Array;
                    toProtoMsg(message: _16.Result): _16.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _16.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.SimulationResponse;
                    fromPartial(object: Partial<_16.SimulationResponse>): _16.SimulationResponse;
                    fromAmino(object: _16.SimulationResponseAmino): _16.SimulationResponse;
                    toAmino(message: _16.SimulationResponse): _16.SimulationResponseAmino;
                    fromAminoMsg(object: _16.SimulationResponseAminoMsg): _16.SimulationResponse;
                    toAminoMsg(message: _16.SimulationResponse): _16.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _16.SimulationResponseProtoMsg): _16.SimulationResponse;
                    toProto(message: _16.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _16.SimulationResponse): _16.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _16.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgData;
                    fromPartial(object: Partial<_16.MsgData>): _16.MsgData;
                    fromAmino(object: _16.MsgDataAmino): _16.MsgData;
                    toAmino(message: _16.MsgData): _16.MsgDataAmino;
                    fromAminoMsg(object: _16.MsgDataAminoMsg): _16.MsgData;
                    toAminoMsg(message: _16.MsgData): _16.MsgDataAminoMsg;
                    fromProtoMsg(message: _16.MsgDataProtoMsg): _16.MsgData;
                    toProto(message: _16.MsgData): Uint8Array;
                    toProtoMsg(message: _16.MsgData): _16.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _16.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.TxMsgData;
                    fromPartial(object: Partial<_16.TxMsgData>): _16.TxMsgData;
                    fromAmino(object: _16.TxMsgDataAmino): _16.TxMsgData;
                    toAmino(message: _16.TxMsgData): _16.TxMsgDataAmino;
                    fromAminoMsg(object: _16.TxMsgDataAminoMsg): _16.TxMsgData;
                    toAminoMsg(message: _16.TxMsgData): _16.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _16.TxMsgDataProtoMsg): _16.TxMsgData;
                    toProto(message: _16.TxMsgData): Uint8Array;
                    toProtoMsg(message: _16.TxMsgData): _16.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _16.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.SearchTxsResult;
                    fromPartial(object: Partial<_16.SearchTxsResult>): _16.SearchTxsResult;
                    fromAmino(object: _16.SearchTxsResultAmino): _16.SearchTxsResult;
                    toAmino(message: _16.SearchTxsResult): _16.SearchTxsResultAmino;
                    fromAminoMsg(object: _16.SearchTxsResultAminoMsg): _16.SearchTxsResult;
                    toAminoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _16.SearchTxsResultProtoMsg): _16.SearchTxsResult;
                    toProto(message: _16.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _156.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                };
                LCDQueryClient: typeof _142.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _17.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ConfigRequest;
                    fromPartial(_: Partial<_17.ConfigRequest>): _17.ConfigRequest;
                    fromAmino(_: _17.ConfigRequestAmino): _17.ConfigRequest;
                    toAmino(_: _17.ConfigRequest): _17.ConfigRequestAmino;
                    fromAminoMsg(object: _17.ConfigRequestAminoMsg): _17.ConfigRequest;
                    toAminoMsg(message: _17.ConfigRequest): _17.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _17.ConfigRequestProtoMsg): _17.ConfigRequest;
                    toProto(message: _17.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _17.ConfigRequest): _17.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _17.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.ConfigResponse;
                    fromPartial(object: Partial<_17.ConfigResponse>): _17.ConfigResponse;
                    fromAmino(object: _17.ConfigResponseAmino): _17.ConfigResponse;
                    toAmino(message: _17.ConfigResponse): _17.ConfigResponseAmino;
                    fromAminoMsg(object: _17.ConfigResponseAminoMsg): _17.ConfigResponse;
                    toAminoMsg(message: _17.ConfigResponse): _17.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _17.ConfigResponseProtoMsg): _17.ConfigResponse;
                    toProto(message: _17.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _17.ConfigResponse): _17.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _18.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.PageRequest;
                    fromPartial(object: Partial<_18.PageRequest>): _18.PageRequest;
                    fromAmino(object: _18.PageRequestAmino): _18.PageRequest;
                    toAmino(message: _18.PageRequest): _18.PageRequestAmino;
                    fromAminoMsg(object: _18.PageRequestAminoMsg): _18.PageRequest;
                    toAminoMsg(message: _18.PageRequest): _18.PageRequestAminoMsg;
                    fromProtoMsg(message: _18.PageRequestProtoMsg): _18.PageRequest;
                    toProto(message: _18.PageRequest): Uint8Array;
                    toProtoMsg(message: _18.PageRequest): _18.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _18.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.PageResponse;
                    fromPartial(object: Partial<_18.PageResponse>): _18.PageResponse;
                    fromAmino(object: _18.PageResponseAmino): _18.PageResponse;
                    toAmino(message: _18.PageResponse): _18.PageResponseAmino;
                    fromAminoMsg(object: _18.PageResponseAminoMsg): _18.PageResponse;
                    toAminoMsg(message: _18.PageResponse): _18.PageResponseAminoMsg;
                    fromProtoMsg(message: _18.PageResponseProtoMsg): _18.PageResponse;
                    toProto(message: _18.PageResponse): Uint8Array;
                    toProtoMsg(message: _18.PageResponse): _18.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _19.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.AppDescriptor;
                    fromPartial(object: Partial<_19.AppDescriptor>): _19.AppDescriptor;
                    fromAmino(object: _19.AppDescriptorAmino): _19.AppDescriptor;
                    toAmino(message: _19.AppDescriptor): _19.AppDescriptorAmino;
                    fromAminoMsg(object: _19.AppDescriptorAminoMsg): _19.AppDescriptor;
                    toAminoMsg(message: _19.AppDescriptor): _19.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _19.AppDescriptorProtoMsg): _19.AppDescriptor;
                    toProto(message: _19.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _19.AppDescriptor): _19.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _19.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.TxDescriptor;
                    fromPartial(object: Partial<_19.TxDescriptor>): _19.TxDescriptor;
                    fromAmino(object: _19.TxDescriptorAmino): _19.TxDescriptor;
                    toAmino(message: _19.TxDescriptor): _19.TxDescriptorAmino;
                    fromAminoMsg(object: _19.TxDescriptorAminoMsg): _19.TxDescriptor;
                    toAminoMsg(message: _19.TxDescriptor): _19.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _19.TxDescriptorProtoMsg): _19.TxDescriptor;
                    toProto(message: _19.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _19.TxDescriptor): _19.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _19.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.AuthnDescriptor;
                    fromPartial(object: Partial<_19.AuthnDescriptor>): _19.AuthnDescriptor;
                    fromAmino(object: _19.AuthnDescriptorAmino): _19.AuthnDescriptor;
                    toAmino(message: _19.AuthnDescriptor): _19.AuthnDescriptorAmino;
                    fromAminoMsg(object: _19.AuthnDescriptorAminoMsg): _19.AuthnDescriptor;
                    toAminoMsg(message: _19.AuthnDescriptor): _19.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _19.AuthnDescriptorProtoMsg): _19.AuthnDescriptor;
                    toProto(message: _19.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _19.AuthnDescriptor): _19.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _19.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.SigningModeDescriptor;
                    fromPartial(object: Partial<_19.SigningModeDescriptor>): _19.SigningModeDescriptor;
                    fromAmino(object: _19.SigningModeDescriptorAmino): _19.SigningModeDescriptor;
                    toAmino(message: _19.SigningModeDescriptor): _19.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _19.SigningModeDescriptorAminoMsg): _19.SigningModeDescriptor;
                    toAminoMsg(message: _19.SigningModeDescriptor): _19.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _19.SigningModeDescriptorProtoMsg): _19.SigningModeDescriptor;
                    toProto(message: _19.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _19.SigningModeDescriptor): _19.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _19.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.ChainDescriptor;
                    fromPartial(object: Partial<_19.ChainDescriptor>): _19.ChainDescriptor;
                    fromAmino(object: _19.ChainDescriptorAmino): _19.ChainDescriptor;
                    toAmino(message: _19.ChainDescriptor): _19.ChainDescriptorAmino;
                    fromAminoMsg(object: _19.ChainDescriptorAminoMsg): _19.ChainDescriptor;
                    toAminoMsg(message: _19.ChainDescriptor): _19.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _19.ChainDescriptorProtoMsg): _19.ChainDescriptor;
                    toProto(message: _19.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _19.ChainDescriptor): _19.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _19.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.CodecDescriptor;
                    fromPartial(object: Partial<_19.CodecDescriptor>): _19.CodecDescriptor;
                    fromAmino(object: _19.CodecDescriptorAmino): _19.CodecDescriptor;
                    toAmino(message: _19.CodecDescriptor): _19.CodecDescriptorAmino;
                    fromAminoMsg(object: _19.CodecDescriptorAminoMsg): _19.CodecDescriptor;
                    toAminoMsg(message: _19.CodecDescriptor): _19.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _19.CodecDescriptorProtoMsg): _19.CodecDescriptor;
                    toProto(message: _19.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _19.CodecDescriptor): _19.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _19.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.InterfaceDescriptor;
                    fromPartial(object: Partial<_19.InterfaceDescriptor>): _19.InterfaceDescriptor;
                    fromAmino(object: _19.InterfaceDescriptorAmino): _19.InterfaceDescriptor;
                    toAmino(message: _19.InterfaceDescriptor): _19.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _19.InterfaceDescriptorAminoMsg): _19.InterfaceDescriptor;
                    toAminoMsg(message: _19.InterfaceDescriptor): _19.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _19.InterfaceDescriptorProtoMsg): _19.InterfaceDescriptor;
                    toProto(message: _19.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _19.InterfaceDescriptor): _19.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _19.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_19.InterfaceImplementerDescriptor>): _19.InterfaceImplementerDescriptor;
                    fromAmino(object: _19.InterfaceImplementerDescriptorAmino): _19.InterfaceImplementerDescriptor;
                    toAmino(message: _19.InterfaceImplementerDescriptor): _19.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _19.InterfaceImplementerDescriptorAminoMsg): _19.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _19.InterfaceImplementerDescriptor): _19.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _19.InterfaceImplementerDescriptorProtoMsg): _19.InterfaceImplementerDescriptor;
                    toProto(message: _19.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _19.InterfaceImplementerDescriptor): _19.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _19.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_19.InterfaceAcceptingMessageDescriptor>): _19.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _19.InterfaceAcceptingMessageDescriptorAmino): _19.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _19.InterfaceAcceptingMessageDescriptor): _19.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _19.InterfaceAcceptingMessageDescriptorAminoMsg): _19.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _19.InterfaceAcceptingMessageDescriptor): _19.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _19.InterfaceAcceptingMessageDescriptorProtoMsg): _19.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _19.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _19.InterfaceAcceptingMessageDescriptor): _19.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _19.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.ConfigurationDescriptor;
                    fromPartial(object: Partial<_19.ConfigurationDescriptor>): _19.ConfigurationDescriptor;
                    fromAmino(object: _19.ConfigurationDescriptorAmino): _19.ConfigurationDescriptor;
                    toAmino(message: _19.ConfigurationDescriptor): _19.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _19.ConfigurationDescriptorAminoMsg): _19.ConfigurationDescriptor;
                    toAminoMsg(message: _19.ConfigurationDescriptor): _19.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _19.ConfigurationDescriptorProtoMsg): _19.ConfigurationDescriptor;
                    toProto(message: _19.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _19.ConfigurationDescriptor): _19.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _19.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.MsgDescriptor;
                    fromPartial(object: Partial<_19.MsgDescriptor>): _19.MsgDescriptor;
                    fromAmino(object: _19.MsgDescriptorAmino): _19.MsgDescriptor;
                    toAmino(message: _19.MsgDescriptor): _19.MsgDescriptorAmino;
                    fromAminoMsg(object: _19.MsgDescriptorAminoMsg): _19.MsgDescriptor;
                    toAminoMsg(message: _19.MsgDescriptor): _19.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _19.MsgDescriptorProtoMsg): _19.MsgDescriptor;
                    toProto(message: _19.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _19.MsgDescriptor): _19.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _19.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_19.GetAuthnDescriptorRequest>): _19.GetAuthnDescriptorRequest;
                    fromAmino(_: _19.GetAuthnDescriptorRequestAmino): _19.GetAuthnDescriptorRequest;
                    toAmino(_: _19.GetAuthnDescriptorRequest): _19.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _19.GetAuthnDescriptorRequestAminoMsg): _19.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _19.GetAuthnDescriptorRequest): _19.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _19.GetAuthnDescriptorRequestProtoMsg): _19.GetAuthnDescriptorRequest;
                    toProto(message: _19.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _19.GetAuthnDescriptorRequest): _19.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _19.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_19.GetAuthnDescriptorResponse>): _19.GetAuthnDescriptorResponse;
                    fromAmino(object: _19.GetAuthnDescriptorResponseAmino): _19.GetAuthnDescriptorResponse;
                    toAmino(message: _19.GetAuthnDescriptorResponse): _19.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _19.GetAuthnDescriptorResponseAminoMsg): _19.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _19.GetAuthnDescriptorResponse): _19.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _19.GetAuthnDescriptorResponseProtoMsg): _19.GetAuthnDescriptorResponse;
                    toProto(message: _19.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _19.GetAuthnDescriptorResponse): _19.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _19.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_19.GetChainDescriptorRequest>): _19.GetChainDescriptorRequest;
                    fromAmino(_: _19.GetChainDescriptorRequestAmino): _19.GetChainDescriptorRequest;
                    toAmino(_: _19.GetChainDescriptorRequest): _19.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _19.GetChainDescriptorRequestAminoMsg): _19.GetChainDescriptorRequest;
                    toAminoMsg(message: _19.GetChainDescriptorRequest): _19.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _19.GetChainDescriptorRequestProtoMsg): _19.GetChainDescriptorRequest;
                    toProto(message: _19.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _19.GetChainDescriptorRequest): _19.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _19.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_19.GetChainDescriptorResponse>): _19.GetChainDescriptorResponse;
                    fromAmino(object: _19.GetChainDescriptorResponseAmino): _19.GetChainDescriptorResponse;
                    toAmino(message: _19.GetChainDescriptorResponse): _19.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _19.GetChainDescriptorResponseAminoMsg): _19.GetChainDescriptorResponse;
                    toAminoMsg(message: _19.GetChainDescriptorResponse): _19.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _19.GetChainDescriptorResponseProtoMsg): _19.GetChainDescriptorResponse;
                    toProto(message: _19.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _19.GetChainDescriptorResponse): _19.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _19.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_19.GetCodecDescriptorRequest>): _19.GetCodecDescriptorRequest;
                    fromAmino(_: _19.GetCodecDescriptorRequestAmino): _19.GetCodecDescriptorRequest;
                    toAmino(_: _19.GetCodecDescriptorRequest): _19.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _19.GetCodecDescriptorRequestAminoMsg): _19.GetCodecDescriptorRequest;
                    toAminoMsg(message: _19.GetCodecDescriptorRequest): _19.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _19.GetCodecDescriptorRequestProtoMsg): _19.GetCodecDescriptorRequest;
                    toProto(message: _19.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _19.GetCodecDescriptorRequest): _19.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _19.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_19.GetCodecDescriptorResponse>): _19.GetCodecDescriptorResponse;
                    fromAmino(object: _19.GetCodecDescriptorResponseAmino): _19.GetCodecDescriptorResponse;
                    toAmino(message: _19.GetCodecDescriptorResponse): _19.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _19.GetCodecDescriptorResponseAminoMsg): _19.GetCodecDescriptorResponse;
                    toAminoMsg(message: _19.GetCodecDescriptorResponse): _19.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _19.GetCodecDescriptorResponseProtoMsg): _19.GetCodecDescriptorResponse;
                    toProto(message: _19.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _19.GetCodecDescriptorResponse): _19.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _19.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_19.GetConfigurationDescriptorRequest>): _19.GetConfigurationDescriptorRequest;
                    fromAmino(_: _19.GetConfigurationDescriptorRequestAmino): _19.GetConfigurationDescriptorRequest;
                    toAmino(_: _19.GetConfigurationDescriptorRequest): _19.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _19.GetConfigurationDescriptorRequestAminoMsg): _19.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _19.GetConfigurationDescriptorRequest): _19.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _19.GetConfigurationDescriptorRequestProtoMsg): _19.GetConfigurationDescriptorRequest;
                    toProto(message: _19.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _19.GetConfigurationDescriptorRequest): _19.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _19.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_19.GetConfigurationDescriptorResponse>): _19.GetConfigurationDescriptorResponse;
                    fromAmino(object: _19.GetConfigurationDescriptorResponseAmino): _19.GetConfigurationDescriptorResponse;
                    toAmino(message: _19.GetConfigurationDescriptorResponse): _19.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _19.GetConfigurationDescriptorResponseAminoMsg): _19.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _19.GetConfigurationDescriptorResponse): _19.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _19.GetConfigurationDescriptorResponseProtoMsg): _19.GetConfigurationDescriptorResponse;
                    toProto(message: _19.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _19.GetConfigurationDescriptorResponse): _19.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _19.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_19.GetQueryServicesDescriptorRequest>): _19.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _19.GetQueryServicesDescriptorRequestAmino): _19.GetQueryServicesDescriptorRequest;
                    toAmino(_: _19.GetQueryServicesDescriptorRequest): _19.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _19.GetQueryServicesDescriptorRequestAminoMsg): _19.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _19.GetQueryServicesDescriptorRequest): _19.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _19.GetQueryServicesDescriptorRequestProtoMsg): _19.GetQueryServicesDescriptorRequest;
                    toProto(message: _19.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _19.GetQueryServicesDescriptorRequest): _19.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _19.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_19.GetQueryServicesDescriptorResponse>): _19.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _19.GetQueryServicesDescriptorResponseAmino): _19.GetQueryServicesDescriptorResponse;
                    toAmino(message: _19.GetQueryServicesDescriptorResponse): _19.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _19.GetQueryServicesDescriptorResponseAminoMsg): _19.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _19.GetQueryServicesDescriptorResponse): _19.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _19.GetQueryServicesDescriptorResponseProtoMsg): _19.GetQueryServicesDescriptorResponse;
                    toProto(message: _19.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _19.GetQueryServicesDescriptorResponse): _19.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _19.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_19.GetTxDescriptorRequest>): _19.GetTxDescriptorRequest;
                    fromAmino(_: _19.GetTxDescriptorRequestAmino): _19.GetTxDescriptorRequest;
                    toAmino(_: _19.GetTxDescriptorRequest): _19.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _19.GetTxDescriptorRequestAminoMsg): _19.GetTxDescriptorRequest;
                    toAminoMsg(message: _19.GetTxDescriptorRequest): _19.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _19.GetTxDescriptorRequestProtoMsg): _19.GetTxDescriptorRequest;
                    toProto(message: _19.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _19.GetTxDescriptorRequest): _19.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _19.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_19.GetTxDescriptorResponse>): _19.GetTxDescriptorResponse;
                    fromAmino(object: _19.GetTxDescriptorResponseAmino): _19.GetTxDescriptorResponse;
                    toAmino(message: _19.GetTxDescriptorResponse): _19.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _19.GetTxDescriptorResponseAminoMsg): _19.GetTxDescriptorResponse;
                    toAminoMsg(message: _19.GetTxDescriptorResponse): _19.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _19.GetTxDescriptorResponseProtoMsg): _19.GetTxDescriptorResponse;
                    toProto(message: _19.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _19.GetTxDescriptorResponse): _19.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _19.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryServicesDescriptor;
                    fromPartial(object: Partial<_19.QueryServicesDescriptor>): _19.QueryServicesDescriptor;
                    fromAmino(object: _19.QueryServicesDescriptorAmino): _19.QueryServicesDescriptor;
                    toAmino(message: _19.QueryServicesDescriptor): _19.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _19.QueryServicesDescriptorAminoMsg): _19.QueryServicesDescriptor;
                    toAminoMsg(message: _19.QueryServicesDescriptor): _19.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _19.QueryServicesDescriptorProtoMsg): _19.QueryServicesDescriptor;
                    toProto(message: _19.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _19.QueryServicesDescriptor): _19.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _19.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryServiceDescriptor;
                    fromPartial(object: Partial<_19.QueryServiceDescriptor>): _19.QueryServiceDescriptor;
                    fromAmino(object: _19.QueryServiceDescriptorAmino): _19.QueryServiceDescriptor;
                    toAmino(message: _19.QueryServiceDescriptor): _19.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _19.QueryServiceDescriptorAminoMsg): _19.QueryServiceDescriptor;
                    toAminoMsg(message: _19.QueryServiceDescriptor): _19.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _19.QueryServiceDescriptorProtoMsg): _19.QueryServiceDescriptor;
                    toProto(message: _19.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _19.QueryServiceDescriptor): _19.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _19.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.QueryMethodDescriptor;
                    fromPartial(object: Partial<_19.QueryMethodDescriptor>): _19.QueryMethodDescriptor;
                    fromAmino(object: _19.QueryMethodDescriptorAmino): _19.QueryMethodDescriptor;
                    toAmino(message: _19.QueryMethodDescriptor): _19.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _19.QueryMethodDescriptorAminoMsg): _19.QueryMethodDescriptor;
                    toAminoMsg(message: _19.QueryMethodDescriptor): _19.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _19.QueryMethodDescriptorProtoMsg): _19.QueryMethodDescriptor;
                    toProto(message: _19.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _19.QueryMethodDescriptor): _19.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _20.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.Coin;
                fromPartial(object: Partial<_20.Coin>): _20.Coin;
                fromAmino(object: _20.CoinAmino): _20.Coin;
                toAmino(message: _20.Coin): _20.CoinAmino;
                fromAminoMsg(object: _20.CoinAminoMsg): _20.Coin;
                toAminoMsg(message: _20.Coin): _20.CoinAminoMsg;
                fromProtoMsg(message: _20.CoinProtoMsg): _20.Coin;
                toProto(message: _20.Coin): Uint8Array;
                toProtoMsg(message: _20.Coin): _20.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _20.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.DecCoin;
                fromPartial(object: Partial<_20.DecCoin>): _20.DecCoin;
                fromAmino(object: _20.DecCoinAmino): _20.DecCoin;
                toAmino(message: _20.DecCoin): _20.DecCoinAmino;
                fromAminoMsg(object: _20.DecCoinAminoMsg): _20.DecCoin;
                toAminoMsg(message: _20.DecCoin): _20.DecCoinAminoMsg;
                fromProtoMsg(message: _20.DecCoinProtoMsg): _20.DecCoin;
                toProto(message: _20.DecCoin): Uint8Array;
                toProtoMsg(message: _20.DecCoin): _20.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _20.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.IntProto;
                fromPartial(object: Partial<_20.IntProto>): _20.IntProto;
                fromAmino(object: _20.IntProtoAmino): _20.IntProto;
                toAmino(message: _20.IntProto): _20.IntProtoAmino;
                fromAminoMsg(object: _20.IntProtoAminoMsg): _20.IntProto;
                toAminoMsg(message: _20.IntProto): _20.IntProtoAminoMsg;
                fromProtoMsg(message: _20.IntProtoProtoMsg): _20.IntProto;
                toProto(message: _20.IntProto): Uint8Array;
                toProtoMsg(message: _20.IntProto): _20.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _20.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.DecProto;
                fromPartial(object: Partial<_20.DecProto>): _20.DecProto;
                fromAmino(object: _20.DecProtoAmino): _20.DecProto;
                toAmino(message: _20.DecProto): _20.DecProtoAmino;
                fromAminoMsg(object: _20.DecProtoAminoMsg): _20.DecProto;
                toAminoMsg(message: _20.DecProto): _20.DecProtoAminoMsg;
                fromProtoMsg(message: _20.DecProtoProtoMsg): _20.DecProto;
                toProto(message: _20.DecProto): Uint8Array;
                toProtoMsg(message: _20.DecProto): _20.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _21.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.PubKey;
                fromPartial(object: Partial<_21.PubKey>): _21.PubKey;
                fromAmino(object: _21.PubKeyAmino): _21.PubKey;
                toAmino(message: _21.PubKey): _21.PubKeyAmino;
                fromAminoMsg(object: _21.PubKeyAminoMsg): _21.PubKey;
                toAminoMsg(message: _21.PubKey): _21.PubKeyAminoMsg;
                fromProtoMsg(message: _21.PubKeyProtoMsg): _21.PubKey;
                toProto(message: _21.PubKey): Uint8Array;
                toProtoMsg(message: _21.PubKey): _21.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _21.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.PrivKey;
                fromPartial(object: Partial<_21.PrivKey>): _21.PrivKey;
                fromAmino(object: _21.PrivKeyAmino): _21.PrivKey;
                toAmino(message: _21.PrivKey): _21.PrivKeyAmino;
                fromAminoMsg(object: _21.PrivKeyAminoMsg): _21.PrivKey;
                toAminoMsg(message: _21.PrivKey): _21.PrivKeyAminoMsg;
                fromProtoMsg(message: _21.PrivKeyProtoMsg): _21.PrivKey;
                toProto(message: _21.PrivKey): Uint8Array;
                toProtoMsg(message: _21.PrivKey): _21.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _22.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.BIP44Params;
                    fromPartial(object: Partial<_22.BIP44Params>): _22.BIP44Params;
                    fromAmino(object: _22.BIP44ParamsAmino): _22.BIP44Params;
                    toAmino(message: _22.BIP44Params): _22.BIP44ParamsAmino;
                    fromAminoMsg(object: _22.BIP44ParamsAminoMsg): _22.BIP44Params;
                    toAminoMsg(message: _22.BIP44Params): _22.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _22.BIP44ParamsProtoMsg): _22.BIP44Params;
                    toProto(message: _22.BIP44Params): Uint8Array;
                    toProtoMsg(message: _22.BIP44Params): _22.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _23.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Record;
                    fromPartial(object: Partial<_23.Record>): _23.Record;
                    fromAmino(object: _23.RecordAmino): _23.Record;
                    toAmino(message: _23.Record): _23.RecordAmino;
                    fromAminoMsg(object: _23.RecordAminoMsg): _23.Record;
                    toAminoMsg(message: _23.Record): _23.RecordAminoMsg;
                    fromProtoMsg(message: _23.RecordProtoMsg): _23.Record;
                    toProto(message: _23.Record): Uint8Array;
                    toProtoMsg(message: _23.Record): _23.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _23.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Record_Local;
                    fromPartial(object: Partial<_23.Record_Local>): _23.Record_Local;
                    fromAmino(object: _23.Record_LocalAmino): _23.Record_Local;
                    toAmino(message: _23.Record_Local): _23.Record_LocalAmino;
                    fromAminoMsg(object: _23.Record_LocalAminoMsg): _23.Record_Local;
                    toAminoMsg(message: _23.Record_Local): _23.Record_LocalAminoMsg;
                    fromProtoMsg(message: _23.Record_LocalProtoMsg): _23.Record_Local;
                    toProto(message: _23.Record_Local): Uint8Array;
                    toProtoMsg(message: _23.Record_Local): _23.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _23.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Record_Ledger;
                    fromPartial(object: Partial<_23.Record_Ledger>): _23.Record_Ledger;
                    fromAmino(object: _23.Record_LedgerAmino): _23.Record_Ledger;
                    toAmino(message: _23.Record_Ledger): _23.Record_LedgerAmino;
                    fromAminoMsg(object: _23.Record_LedgerAminoMsg): _23.Record_Ledger;
                    toAminoMsg(message: _23.Record_Ledger): _23.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _23.Record_LedgerProtoMsg): _23.Record_Ledger;
                    toProto(message: _23.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _23.Record_Ledger): _23.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _23.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Record_Multi;
                    fromPartial(_: Partial<_23.Record_Multi>): _23.Record_Multi;
                    fromAmino(_: _23.Record_MultiAmino): _23.Record_Multi;
                    toAmino(_: _23.Record_Multi): _23.Record_MultiAmino;
                    fromAminoMsg(object: _23.Record_MultiAminoMsg): _23.Record_Multi;
                    toAminoMsg(message: _23.Record_Multi): _23.Record_MultiAminoMsg;
                    fromProtoMsg(message: _23.Record_MultiProtoMsg): _23.Record_Multi;
                    toProto(message: _23.Record_Multi): Uint8Array;
                    toProtoMsg(message: _23.Record_Multi): _23.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _23.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Record_Offline;
                    fromPartial(_: Partial<_23.Record_Offline>): _23.Record_Offline;
                    fromAmino(_: _23.Record_OfflineAmino): _23.Record_Offline;
                    toAmino(_: _23.Record_Offline): _23.Record_OfflineAmino;
                    fromAminoMsg(object: _23.Record_OfflineAminoMsg): _23.Record_Offline;
                    toAminoMsg(message: _23.Record_Offline): _23.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _23.Record_OfflineProtoMsg): _23.Record_Offline;
                    toProto(message: _23.Record_Offline): Uint8Array;
                    toProtoMsg(message: _23.Record_Offline): _23.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _24.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.LegacyAminoPubKey;
                fromPartial(object: Partial<_24.LegacyAminoPubKey>): _24.LegacyAminoPubKey;
                fromAmino(object: _24.LegacyAminoPubKeyAmino): _24.LegacyAminoPubKey;
                toAmino(message: _24.LegacyAminoPubKey): _24.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _24.LegacyAminoPubKeyAminoMsg): _24.LegacyAminoPubKey;
                toAminoMsg(message: _24.LegacyAminoPubKey): _24.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _24.LegacyAminoPubKeyProtoMsg): _24.LegacyAminoPubKey;
                toProto(message: _24.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _24.LegacyAminoPubKey): _24.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _25.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.PubKey;
                fromPartial(object: Partial<_25.PubKey>): _25.PubKey;
                fromAmino(object: _25.PubKeyAmino): _25.PubKey;
                toAmino(message: _25.PubKey): _25.PubKeyAmino;
                fromAminoMsg(object: _25.PubKeyAminoMsg): _25.PubKey;
                toAminoMsg(message: _25.PubKey): _25.PubKeyAminoMsg;
                fromProtoMsg(message: _25.PubKeyProtoMsg): _25.PubKey;
                toProto(message: _25.PubKey): Uint8Array;
                toProtoMsg(message: _25.PubKey): _25.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _25.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.PrivKey;
                fromPartial(object: Partial<_25.PrivKey>): _25.PrivKey;
                fromAmino(object: _25.PrivKeyAmino): _25.PrivKey;
                toAmino(message: _25.PrivKey): _25.PrivKeyAmino;
                fromAminoMsg(object: _25.PrivKeyAminoMsg): _25.PrivKey;
                toAminoMsg(message: _25.PrivKey): _25.PrivKeyAminoMsg;
                fromProtoMsg(message: _25.PrivKeyProtoMsg): _25.PrivKey;
                toProto(message: _25.PrivKey): Uint8Array;
                toProtoMsg(message: _25.PrivKey): _25.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _26.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.PubKey;
                fromPartial(object: Partial<_26.PubKey>): _26.PubKey;
                fromAmino(object: _26.PubKeyAmino): _26.PubKey;
                toAmino(message: _26.PubKey): _26.PubKeyAmino;
                fromAminoMsg(object: _26.PubKeyAminoMsg): _26.PubKey;
                toAminoMsg(message: _26.PubKey): _26.PubKeyAminoMsg;
                fromProtoMsg(message: _26.PubKeyProtoMsg): _26.PubKey;
                toProto(message: _26.PubKey): Uint8Array;
                toProtoMsg(message: _26.PubKey): _26.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _26.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.PrivKey;
                fromPartial(object: Partial<_26.PrivKey>): _26.PrivKey;
                fromAmino(object: _26.PrivKeyAmino): _26.PrivKey;
                toAmino(message: _26.PrivKey): _26.PrivKeyAmino;
                fromAminoMsg(object: _26.PrivKeyAminoMsg): _26.PrivKey;
                toAminoMsg(message: _26.PrivKey): _26.PrivKeyAminoMsg;
                fromProtoMsg(message: _26.PrivKeyProtoMsg): _26.PrivKey;
                toProto(message: _26.PrivKey): Uint8Array;
                toProtoMsg(message: _26.PrivKey): _26.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                validatorOutstandingRewards(request: _29.QueryValidatorOutstandingRewardsRequest): Promise<_29.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _29.QueryValidatorCommissionRequest): Promise<_29.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _29.QueryValidatorSlashesRequest): Promise<_29.QueryValidatorSlashesResponse>;
                delegationRewards(request: _29.QueryDelegationRewardsRequest): Promise<_29.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _29.QueryDelegationTotalRewardsRequest): Promise<_29.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _29.QueryDelegatorValidatorsRequest): Promise<_29.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _29.QueryDelegatorWithdrawAddressRequest): Promise<_29.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _29.QueryCommunityPoolRequest): Promise<_29.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _30.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _30.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _30.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _30.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _30.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _30.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _30.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _30.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _30.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _30.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _30.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _30.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _30.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _30.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _30.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _30.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _30.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _30.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _30.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _30.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSetWithdrawAddress) => _30.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _30.MsgSetWithdrawAddressAmino) => _30.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _30.MsgWithdrawDelegatorReward) => _30.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _30.MsgWithdrawDelegatorRewardAmino) => _30.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _30.MsgWithdrawValidatorCommission) => _30.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _30.MsgWithdrawValidatorCommissionAmino) => _30.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _30.MsgFundCommunityPool) => _30.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _30.MsgFundCommunityPoolAmino) => _30.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _30.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_30.MsgSetWithdrawAddress>): _30.MsgSetWithdrawAddress;
                fromAmino(object: _30.MsgSetWithdrawAddressAmino): _30.MsgSetWithdrawAddress;
                toAmino(message: _30.MsgSetWithdrawAddress): _30.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _30.MsgSetWithdrawAddressAminoMsg): _30.MsgSetWithdrawAddress;
                toAminoMsg(message: _30.MsgSetWithdrawAddress): _30.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _30.MsgSetWithdrawAddressProtoMsg): _30.MsgSetWithdrawAddress;
                toProto(message: _30.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _30.MsgSetWithdrawAddress): _30.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _30.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_30.MsgSetWithdrawAddressResponse>): _30.MsgSetWithdrawAddressResponse;
                fromAmino(_: _30.MsgSetWithdrawAddressResponseAmino): _30.MsgSetWithdrawAddressResponse;
                toAmino(_: _30.MsgSetWithdrawAddressResponse): _30.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _30.MsgSetWithdrawAddressResponseAminoMsg): _30.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _30.MsgSetWithdrawAddressResponse): _30.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _30.MsgSetWithdrawAddressResponseProtoMsg): _30.MsgSetWithdrawAddressResponse;
                toProto(message: _30.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSetWithdrawAddressResponse): _30.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _30.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_30.MsgWithdrawDelegatorReward>): _30.MsgWithdrawDelegatorReward;
                fromAmino(object: _30.MsgWithdrawDelegatorRewardAmino): _30.MsgWithdrawDelegatorReward;
                toAmino(message: _30.MsgWithdrawDelegatorReward): _30.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _30.MsgWithdrawDelegatorRewardAminoMsg): _30.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _30.MsgWithdrawDelegatorReward): _30.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _30.MsgWithdrawDelegatorRewardProtoMsg): _30.MsgWithdrawDelegatorReward;
                toProto(message: _30.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _30.MsgWithdrawDelegatorReward): _30.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _30.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_30.MsgWithdrawDelegatorRewardResponse>): _30.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _30.MsgWithdrawDelegatorRewardResponseAmino): _30.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _30.MsgWithdrawDelegatorRewardResponse): _30.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _30.MsgWithdrawDelegatorRewardResponseAminoMsg): _30.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _30.MsgWithdrawDelegatorRewardResponse): _30.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _30.MsgWithdrawDelegatorRewardResponseProtoMsg): _30.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _30.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _30.MsgWithdrawDelegatorRewardResponse): _30.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _30.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_30.MsgWithdrawValidatorCommission>): _30.MsgWithdrawValidatorCommission;
                fromAmino(object: _30.MsgWithdrawValidatorCommissionAmino): _30.MsgWithdrawValidatorCommission;
                toAmino(message: _30.MsgWithdrawValidatorCommission): _30.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _30.MsgWithdrawValidatorCommissionAminoMsg): _30.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _30.MsgWithdrawValidatorCommission): _30.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _30.MsgWithdrawValidatorCommissionProtoMsg): _30.MsgWithdrawValidatorCommission;
                toProto(message: _30.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _30.MsgWithdrawValidatorCommission): _30.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _30.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_30.MsgWithdrawValidatorCommissionResponse>): _30.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _30.MsgWithdrawValidatorCommissionResponseAmino): _30.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _30.MsgWithdrawValidatorCommissionResponse): _30.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _30.MsgWithdrawValidatorCommissionResponseAminoMsg): _30.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _30.MsgWithdrawValidatorCommissionResponse): _30.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _30.MsgWithdrawValidatorCommissionResponseProtoMsg): _30.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _30.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _30.MsgWithdrawValidatorCommissionResponse): _30.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _30.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgFundCommunityPool;
                fromPartial(object: Partial<_30.MsgFundCommunityPool>): _30.MsgFundCommunityPool;
                fromAmino(object: _30.MsgFundCommunityPoolAmino): _30.MsgFundCommunityPool;
                toAmino(message: _30.MsgFundCommunityPool): _30.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _30.MsgFundCommunityPoolAminoMsg): _30.MsgFundCommunityPool;
                toAminoMsg(message: _30.MsgFundCommunityPool): _30.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _30.MsgFundCommunityPoolProtoMsg): _30.MsgFundCommunityPool;
                toProto(message: _30.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _30.MsgFundCommunityPool): _30.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _30.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_30.MsgFundCommunityPoolResponse>): _30.MsgFundCommunityPoolResponse;
                fromAmino(_: _30.MsgFundCommunityPoolResponseAmino): _30.MsgFundCommunityPoolResponse;
                toAmino(_: _30.MsgFundCommunityPoolResponse): _30.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _30.MsgFundCommunityPoolResponseAminoMsg): _30.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _30.MsgFundCommunityPoolResponse): _30.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _30.MsgFundCommunityPoolResponseProtoMsg): _30.MsgFundCommunityPoolResponse;
                toProto(message: _30.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _30.MsgFundCommunityPoolResponse): _30.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryParamsRequest;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
                fromAmino(_: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(_: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryParamsResponse;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _29.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_29.QueryValidatorOutstandingRewardsRequest>): _29.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _29.QueryValidatorOutstandingRewardsRequestAmino): _29.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _29.QueryValidatorOutstandingRewardsRequest): _29.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _29.QueryValidatorOutstandingRewardsRequestAminoMsg): _29.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _29.QueryValidatorOutstandingRewardsRequest): _29.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryValidatorOutstandingRewardsRequestProtoMsg): _29.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _29.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryValidatorOutstandingRewardsRequest): _29.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _29.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_29.QueryValidatorOutstandingRewardsResponse>): _29.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _29.QueryValidatorOutstandingRewardsResponseAmino): _29.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _29.QueryValidatorOutstandingRewardsResponse): _29.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _29.QueryValidatorOutstandingRewardsResponseAminoMsg): _29.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _29.QueryValidatorOutstandingRewardsResponse): _29.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryValidatorOutstandingRewardsResponseProtoMsg): _29.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _29.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryValidatorOutstandingRewardsResponse): _29.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _29.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_29.QueryValidatorCommissionRequest>): _29.QueryValidatorCommissionRequest;
                fromAmino(object: _29.QueryValidatorCommissionRequestAmino): _29.QueryValidatorCommissionRequest;
                toAmino(message: _29.QueryValidatorCommissionRequest): _29.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _29.QueryValidatorCommissionRequestAminoMsg): _29.QueryValidatorCommissionRequest;
                toAminoMsg(message: _29.QueryValidatorCommissionRequest): _29.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _29.QueryValidatorCommissionRequestProtoMsg): _29.QueryValidatorCommissionRequest;
                toProto(message: _29.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _29.QueryValidatorCommissionRequest): _29.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _29.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_29.QueryValidatorCommissionResponse>): _29.QueryValidatorCommissionResponse;
                fromAmino(object: _29.QueryValidatorCommissionResponseAmino): _29.QueryValidatorCommissionResponse;
                toAmino(message: _29.QueryValidatorCommissionResponse): _29.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _29.QueryValidatorCommissionResponseAminoMsg): _29.QueryValidatorCommissionResponse;
                toAminoMsg(message: _29.QueryValidatorCommissionResponse): _29.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _29.QueryValidatorCommissionResponseProtoMsg): _29.QueryValidatorCommissionResponse;
                toProto(message: _29.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _29.QueryValidatorCommissionResponse): _29.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _29.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_29.QueryValidatorSlashesRequest>): _29.QueryValidatorSlashesRequest;
                fromAmino(object: _29.QueryValidatorSlashesRequestAmino): _29.QueryValidatorSlashesRequest;
                toAmino(message: _29.QueryValidatorSlashesRequest): _29.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _29.QueryValidatorSlashesRequestAminoMsg): _29.QueryValidatorSlashesRequest;
                toAminoMsg(message: _29.QueryValidatorSlashesRequest): _29.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _29.QueryValidatorSlashesRequestProtoMsg): _29.QueryValidatorSlashesRequest;
                toProto(message: _29.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _29.QueryValidatorSlashesRequest): _29.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _29.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_29.QueryValidatorSlashesResponse>): _29.QueryValidatorSlashesResponse;
                fromAmino(object: _29.QueryValidatorSlashesResponseAmino): _29.QueryValidatorSlashesResponse;
                toAmino(message: _29.QueryValidatorSlashesResponse): _29.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _29.QueryValidatorSlashesResponseAminoMsg): _29.QueryValidatorSlashesResponse;
                toAminoMsg(message: _29.QueryValidatorSlashesResponse): _29.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _29.QueryValidatorSlashesResponseProtoMsg): _29.QueryValidatorSlashesResponse;
                toProto(message: _29.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _29.QueryValidatorSlashesResponse): _29.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _29.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_29.QueryDelegationRewardsRequest>): _29.QueryDelegationRewardsRequest;
                fromAmino(object: _29.QueryDelegationRewardsRequestAmino): _29.QueryDelegationRewardsRequest;
                toAmino(message: _29.QueryDelegationRewardsRequest): _29.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _29.QueryDelegationRewardsRequestAminoMsg): _29.QueryDelegationRewardsRequest;
                toAminoMsg(message: _29.QueryDelegationRewardsRequest): _29.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDelegationRewardsRequestProtoMsg): _29.QueryDelegationRewardsRequest;
                toProto(message: _29.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDelegationRewardsRequest): _29.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _29.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_29.QueryDelegationRewardsResponse>): _29.QueryDelegationRewardsResponse;
                fromAmino(object: _29.QueryDelegationRewardsResponseAmino): _29.QueryDelegationRewardsResponse;
                toAmino(message: _29.QueryDelegationRewardsResponse): _29.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _29.QueryDelegationRewardsResponseAminoMsg): _29.QueryDelegationRewardsResponse;
                toAminoMsg(message: _29.QueryDelegationRewardsResponse): _29.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDelegationRewardsResponseProtoMsg): _29.QueryDelegationRewardsResponse;
                toProto(message: _29.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDelegationRewardsResponse): _29.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _29.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_29.QueryDelegationTotalRewardsRequest>): _29.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _29.QueryDelegationTotalRewardsRequestAmino): _29.QueryDelegationTotalRewardsRequest;
                toAmino(message: _29.QueryDelegationTotalRewardsRequest): _29.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _29.QueryDelegationTotalRewardsRequestAminoMsg): _29.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _29.QueryDelegationTotalRewardsRequest): _29.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDelegationTotalRewardsRequestProtoMsg): _29.QueryDelegationTotalRewardsRequest;
                toProto(message: _29.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDelegationTotalRewardsRequest): _29.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _29.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_29.QueryDelegationTotalRewardsResponse>): _29.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _29.QueryDelegationTotalRewardsResponseAmino): _29.QueryDelegationTotalRewardsResponse;
                toAmino(message: _29.QueryDelegationTotalRewardsResponse): _29.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _29.QueryDelegationTotalRewardsResponseAminoMsg): _29.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _29.QueryDelegationTotalRewardsResponse): _29.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDelegationTotalRewardsResponseProtoMsg): _29.QueryDelegationTotalRewardsResponse;
                toProto(message: _29.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDelegationTotalRewardsResponse): _29.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _29.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_29.QueryDelegatorValidatorsRequest>): _29.QueryDelegatorValidatorsRequest;
                fromAmino(object: _29.QueryDelegatorValidatorsRequestAmino): _29.QueryDelegatorValidatorsRequest;
                toAmino(message: _29.QueryDelegatorValidatorsRequest): _29.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _29.QueryDelegatorValidatorsRequestAminoMsg): _29.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _29.QueryDelegatorValidatorsRequest): _29.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDelegatorValidatorsRequestProtoMsg): _29.QueryDelegatorValidatorsRequest;
                toProto(message: _29.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDelegatorValidatorsRequest): _29.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _29.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_29.QueryDelegatorValidatorsResponse>): _29.QueryDelegatorValidatorsResponse;
                fromAmino(object: _29.QueryDelegatorValidatorsResponseAmino): _29.QueryDelegatorValidatorsResponse;
                toAmino(message: _29.QueryDelegatorValidatorsResponse): _29.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _29.QueryDelegatorValidatorsResponseAminoMsg): _29.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _29.QueryDelegatorValidatorsResponse): _29.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDelegatorValidatorsResponseProtoMsg): _29.QueryDelegatorValidatorsResponse;
                toProto(message: _29.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDelegatorValidatorsResponse): _29.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _29.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_29.QueryDelegatorWithdrawAddressRequest>): _29.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _29.QueryDelegatorWithdrawAddressRequestAmino): _29.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _29.QueryDelegatorWithdrawAddressRequest): _29.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _29.QueryDelegatorWithdrawAddressRequestAminoMsg): _29.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _29.QueryDelegatorWithdrawAddressRequest): _29.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDelegatorWithdrawAddressRequestProtoMsg): _29.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _29.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDelegatorWithdrawAddressRequest): _29.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _29.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_29.QueryDelegatorWithdrawAddressResponse>): _29.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _29.QueryDelegatorWithdrawAddressResponseAmino): _29.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _29.QueryDelegatorWithdrawAddressResponse): _29.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _29.QueryDelegatorWithdrawAddressResponseAminoMsg): _29.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _29.QueryDelegatorWithdrawAddressResponse): _29.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDelegatorWithdrawAddressResponseProtoMsg): _29.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _29.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDelegatorWithdrawAddressResponse): _29.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _29.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_29.QueryCommunityPoolRequest>): _29.QueryCommunityPoolRequest;
                fromAmino(_: _29.QueryCommunityPoolRequestAmino): _29.QueryCommunityPoolRequest;
                toAmino(_: _29.QueryCommunityPoolRequest): _29.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _29.QueryCommunityPoolRequestAminoMsg): _29.QueryCommunityPoolRequest;
                toAminoMsg(message: _29.QueryCommunityPoolRequest): _29.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _29.QueryCommunityPoolRequestProtoMsg): _29.QueryCommunityPoolRequest;
                toProto(message: _29.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _29.QueryCommunityPoolRequest): _29.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _29.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_29.QueryCommunityPoolResponse>): _29.QueryCommunityPoolResponse;
                fromAmino(object: _29.QueryCommunityPoolResponseAmino): _29.QueryCommunityPoolResponse;
                toAmino(message: _29.QueryCommunityPoolResponse): _29.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _29.QueryCommunityPoolResponseAminoMsg): _29.QueryCommunityPoolResponse;
                toAminoMsg(message: _29.QueryCommunityPoolResponse): _29.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _29.QueryCommunityPoolResponseProtoMsg): _29.QueryCommunityPoolResponse;
                toProto(message: _29.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _29.QueryCommunityPoolResponse): _29.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _28.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_28.DelegatorWithdrawInfo>): _28.DelegatorWithdrawInfo;
                fromAmino(object: _28.DelegatorWithdrawInfoAmino): _28.DelegatorWithdrawInfo;
                toAmino(message: _28.DelegatorWithdrawInfo): _28.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _28.DelegatorWithdrawInfoAminoMsg): _28.DelegatorWithdrawInfo;
                toAminoMsg(message: _28.DelegatorWithdrawInfo): _28.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _28.DelegatorWithdrawInfoProtoMsg): _28.DelegatorWithdrawInfo;
                toProto(message: _28.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _28.DelegatorWithdrawInfo): _28.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _28.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_28.ValidatorOutstandingRewardsRecord>): _28.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _28.ValidatorOutstandingRewardsRecordAmino): _28.ValidatorOutstandingRewardsRecord;
                toAmino(message: _28.ValidatorOutstandingRewardsRecord): _28.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _28.ValidatorOutstandingRewardsRecordAminoMsg): _28.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _28.ValidatorOutstandingRewardsRecord): _28.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _28.ValidatorOutstandingRewardsRecordProtoMsg): _28.ValidatorOutstandingRewardsRecord;
                toProto(message: _28.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _28.ValidatorOutstandingRewardsRecord): _28.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _28.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_28.ValidatorAccumulatedCommissionRecord>): _28.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _28.ValidatorAccumulatedCommissionRecordAmino): _28.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _28.ValidatorAccumulatedCommissionRecord): _28.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _28.ValidatorAccumulatedCommissionRecordAminoMsg): _28.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _28.ValidatorAccumulatedCommissionRecord): _28.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _28.ValidatorAccumulatedCommissionRecordProtoMsg): _28.ValidatorAccumulatedCommissionRecord;
                toProto(message: _28.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _28.ValidatorAccumulatedCommissionRecord): _28.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _28.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_28.ValidatorHistoricalRewardsRecord>): _28.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _28.ValidatorHistoricalRewardsRecordAmino): _28.ValidatorHistoricalRewardsRecord;
                toAmino(message: _28.ValidatorHistoricalRewardsRecord): _28.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _28.ValidatorHistoricalRewardsRecordAminoMsg): _28.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _28.ValidatorHistoricalRewardsRecord): _28.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _28.ValidatorHistoricalRewardsRecordProtoMsg): _28.ValidatorHistoricalRewardsRecord;
                toProto(message: _28.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _28.ValidatorHistoricalRewardsRecord): _28.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _28.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_28.ValidatorCurrentRewardsRecord>): _28.ValidatorCurrentRewardsRecord;
                fromAmino(object: _28.ValidatorCurrentRewardsRecordAmino): _28.ValidatorCurrentRewardsRecord;
                toAmino(message: _28.ValidatorCurrentRewardsRecord): _28.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _28.ValidatorCurrentRewardsRecordAminoMsg): _28.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _28.ValidatorCurrentRewardsRecord): _28.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _28.ValidatorCurrentRewardsRecordProtoMsg): _28.ValidatorCurrentRewardsRecord;
                toProto(message: _28.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _28.ValidatorCurrentRewardsRecord): _28.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _28.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_28.DelegatorStartingInfoRecord>): _28.DelegatorStartingInfoRecord;
                fromAmino(object: _28.DelegatorStartingInfoRecordAmino): _28.DelegatorStartingInfoRecord;
                toAmino(message: _28.DelegatorStartingInfoRecord): _28.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _28.DelegatorStartingInfoRecordAminoMsg): _28.DelegatorStartingInfoRecord;
                toAminoMsg(message: _28.DelegatorStartingInfoRecord): _28.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _28.DelegatorStartingInfoRecordProtoMsg): _28.DelegatorStartingInfoRecord;
                toProto(message: _28.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _28.DelegatorStartingInfoRecord): _28.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _28.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_28.ValidatorSlashEventRecord>): _28.ValidatorSlashEventRecord;
                fromAmino(object: _28.ValidatorSlashEventRecordAmino): _28.ValidatorSlashEventRecord;
                toAmino(message: _28.ValidatorSlashEventRecord): _28.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _28.ValidatorSlashEventRecordAminoMsg): _28.ValidatorSlashEventRecord;
                toAminoMsg(message: _28.ValidatorSlashEventRecord): _28.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _28.ValidatorSlashEventRecordProtoMsg): _28.ValidatorSlashEventRecord;
                toProto(message: _28.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _28.ValidatorSlashEventRecord): _28.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                toAminoMsg(message: _28.GenesisState): _28.GenesisStateAminoMsg;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _27.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
                fromAmino(object: _27.ParamsAmino): _27.Params;
                toAmino(message: _27.Params): _27.ParamsAmino;
                fromAminoMsg(object: _27.ParamsAminoMsg): _27.Params;
                toAminoMsg(message: _27.Params): _27.ParamsAminoMsg;
                fromProtoMsg(message: _27.ParamsProtoMsg): _27.Params;
                toProto(message: _27.Params): Uint8Array;
                toProtoMsg(message: _27.Params): _27.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _27.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_27.ValidatorHistoricalRewards>): _27.ValidatorHistoricalRewards;
                fromAmino(object: _27.ValidatorHistoricalRewardsAmino): _27.ValidatorHistoricalRewards;
                toAmino(message: _27.ValidatorHistoricalRewards): _27.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _27.ValidatorHistoricalRewardsAminoMsg): _27.ValidatorHistoricalRewards;
                toAminoMsg(message: _27.ValidatorHistoricalRewards): _27.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _27.ValidatorHistoricalRewardsProtoMsg): _27.ValidatorHistoricalRewards;
                toProto(message: _27.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _27.ValidatorHistoricalRewards): _27.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _27.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorCurrentRewards;
                fromPartial(object: Partial<_27.ValidatorCurrentRewards>): _27.ValidatorCurrentRewards;
                fromAmino(object: _27.ValidatorCurrentRewardsAmino): _27.ValidatorCurrentRewards;
                toAmino(message: _27.ValidatorCurrentRewards): _27.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _27.ValidatorCurrentRewardsAminoMsg): _27.ValidatorCurrentRewards;
                toAminoMsg(message: _27.ValidatorCurrentRewards): _27.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _27.ValidatorCurrentRewardsProtoMsg): _27.ValidatorCurrentRewards;
                toProto(message: _27.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _27.ValidatorCurrentRewards): _27.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _27.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_27.ValidatorAccumulatedCommission>): _27.ValidatorAccumulatedCommission;
                fromAmino(object: _27.ValidatorAccumulatedCommissionAmino): _27.ValidatorAccumulatedCommission;
                toAmino(message: _27.ValidatorAccumulatedCommission): _27.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _27.ValidatorAccumulatedCommissionAminoMsg): _27.ValidatorAccumulatedCommission;
                toAminoMsg(message: _27.ValidatorAccumulatedCommission): _27.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _27.ValidatorAccumulatedCommissionProtoMsg): _27.ValidatorAccumulatedCommission;
                toProto(message: _27.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _27.ValidatorAccumulatedCommission): _27.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _27.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_27.ValidatorOutstandingRewards>): _27.ValidatorOutstandingRewards;
                fromAmino(object: _27.ValidatorOutstandingRewardsAmino): _27.ValidatorOutstandingRewards;
                toAmino(message: _27.ValidatorOutstandingRewards): _27.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _27.ValidatorOutstandingRewardsAminoMsg): _27.ValidatorOutstandingRewards;
                toAminoMsg(message: _27.ValidatorOutstandingRewards): _27.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _27.ValidatorOutstandingRewardsProtoMsg): _27.ValidatorOutstandingRewards;
                toProto(message: _27.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _27.ValidatorOutstandingRewards): _27.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _27.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorSlashEvent;
                fromPartial(object: Partial<_27.ValidatorSlashEvent>): _27.ValidatorSlashEvent;
                fromAmino(object: _27.ValidatorSlashEventAmino): _27.ValidatorSlashEvent;
                toAmino(message: _27.ValidatorSlashEvent): _27.ValidatorSlashEventAmino;
                fromAminoMsg(object: _27.ValidatorSlashEventAminoMsg): _27.ValidatorSlashEvent;
                toAminoMsg(message: _27.ValidatorSlashEvent): _27.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _27.ValidatorSlashEventProtoMsg): _27.ValidatorSlashEvent;
                toProto(message: _27.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _27.ValidatorSlashEvent): _27.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _27.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorSlashEvents;
                fromPartial(object: Partial<_27.ValidatorSlashEvents>): _27.ValidatorSlashEvents;
                fromAmino(object: _27.ValidatorSlashEventsAmino): _27.ValidatorSlashEvents;
                toAmino(message: _27.ValidatorSlashEvents): _27.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _27.ValidatorSlashEventsAminoMsg): _27.ValidatorSlashEvents;
                toAminoMsg(message: _27.ValidatorSlashEvents): _27.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _27.ValidatorSlashEventsProtoMsg): _27.ValidatorSlashEvents;
                toProto(message: _27.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _27.ValidatorSlashEvents): _27.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _27.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.FeePool;
                fromPartial(object: Partial<_27.FeePool>): _27.FeePool;
                fromAmino(object: _27.FeePoolAmino): _27.FeePool;
                toAmino(message: _27.FeePool): _27.FeePoolAmino;
                fromAminoMsg(object: _27.FeePoolAminoMsg): _27.FeePool;
                toAminoMsg(message: _27.FeePool): _27.FeePoolAminoMsg;
                fromProtoMsg(message: _27.FeePoolProtoMsg): _27.FeePool;
                toProto(message: _27.FeePool): Uint8Array;
                toProtoMsg(message: _27.FeePool): _27.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _27.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_27.CommunityPoolSpendProposal>): _27.CommunityPoolSpendProposal;
                fromAmino(object: _27.CommunityPoolSpendProposalAmino): _27.CommunityPoolSpendProposal;
                toAmino(message: _27.CommunityPoolSpendProposal): _27.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _27.CommunityPoolSpendProposalAminoMsg): _27.CommunityPoolSpendProposal;
                toAminoMsg(message: _27.CommunityPoolSpendProposal): _27.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _27.CommunityPoolSpendProposalProtoMsg): _27.CommunityPoolSpendProposal;
                toProto(message: _27.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _27.CommunityPoolSpendProposal): _27.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _27.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.DelegatorStartingInfo;
                fromPartial(object: Partial<_27.DelegatorStartingInfo>): _27.DelegatorStartingInfo;
                fromAmino(object: _27.DelegatorStartingInfoAmino): _27.DelegatorStartingInfo;
                toAmino(message: _27.DelegatorStartingInfo): _27.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _27.DelegatorStartingInfoAminoMsg): _27.DelegatorStartingInfo;
                toAminoMsg(message: _27.DelegatorStartingInfo): _27.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _27.DelegatorStartingInfoProtoMsg): _27.DelegatorStartingInfo;
                toProto(message: _27.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _27.DelegatorStartingInfo): _27.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _27.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.DelegationDelegatorReward;
                fromPartial(object: Partial<_27.DelegationDelegatorReward>): _27.DelegationDelegatorReward;
                fromAmino(object: _27.DelegationDelegatorRewardAmino): _27.DelegationDelegatorReward;
                toAmino(message: _27.DelegationDelegatorReward): _27.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _27.DelegationDelegatorRewardAminoMsg): _27.DelegationDelegatorReward;
                toAminoMsg(message: _27.DelegationDelegatorReward): _27.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _27.DelegationDelegatorRewardProtoMsg): _27.DelegationDelegatorReward;
                toProto(message: _27.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _27.DelegationDelegatorReward): _27.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _27.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_27.CommunityPoolSpendProposalWithDeposit>): _27.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _27.CommunityPoolSpendProposalWithDepositAmino): _27.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _27.CommunityPoolSpendProposalWithDeposit): _27.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _27.CommunityPoolSpendProposalWithDepositAminoMsg): _27.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _27.CommunityPoolSpendProposalWithDeposit): _27.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _27.CommunityPoolSpendProposalWithDepositProtoMsg): _27.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _27.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _27.CommunityPoolSpendProposalWithDeposit): _27.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _33.QueryAllowanceRequest): Promise<_33.QueryAllowanceResponse>;
                allowances(request: _33.QueryAllowancesRequest): Promise<_33.QueryAllowancesResponse>;
                allowancesByGranter(request: _33.QueryAllowancesByGranterRequest): Promise<_33.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _34.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _34.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _34.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _34.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _34.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _34.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _34.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _34.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _34.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _34.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _34.MsgGrantAllowance) => _34.MsgGrantAllowanceAmino;
                    fromAmino: (object: _34.MsgGrantAllowanceAmino) => _34.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _34.MsgRevokeAllowance) => _34.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _34.MsgRevokeAllowanceAmino) => _34.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _34.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.MsgGrantAllowance;
                fromPartial(object: Partial<_34.MsgGrantAllowance>): _34.MsgGrantAllowance;
                fromAmino(object: _34.MsgGrantAllowanceAmino): _34.MsgGrantAllowance;
                toAmino(message: _34.MsgGrantAllowance): _34.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _34.MsgGrantAllowanceAminoMsg): _34.MsgGrantAllowance;
                toAminoMsg(message: _34.MsgGrantAllowance): _34.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _34.MsgGrantAllowanceProtoMsg): _34.MsgGrantAllowance;
                toProto(message: _34.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _34.MsgGrantAllowance): _34.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _34.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_34.MsgGrantAllowanceResponse>): _34.MsgGrantAllowanceResponse;
                fromAmino(_: _34.MsgGrantAllowanceResponseAmino): _34.MsgGrantAllowanceResponse;
                toAmino(_: _34.MsgGrantAllowanceResponse): _34.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _34.MsgGrantAllowanceResponseAminoMsg): _34.MsgGrantAllowanceResponse;
                toAminoMsg(message: _34.MsgGrantAllowanceResponse): _34.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _34.MsgGrantAllowanceResponseProtoMsg): _34.MsgGrantAllowanceResponse;
                toProto(message: _34.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _34.MsgGrantAllowanceResponse): _34.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _34.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.MsgRevokeAllowance;
                fromPartial(object: Partial<_34.MsgRevokeAllowance>): _34.MsgRevokeAllowance;
                fromAmino(object: _34.MsgRevokeAllowanceAmino): _34.MsgRevokeAllowance;
                toAmino(message: _34.MsgRevokeAllowance): _34.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _34.MsgRevokeAllowanceAminoMsg): _34.MsgRevokeAllowance;
                toAminoMsg(message: _34.MsgRevokeAllowance): _34.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _34.MsgRevokeAllowanceProtoMsg): _34.MsgRevokeAllowance;
                toProto(message: _34.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _34.MsgRevokeAllowance): _34.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _34.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_34.MsgRevokeAllowanceResponse>): _34.MsgRevokeAllowanceResponse;
                fromAmino(_: _34.MsgRevokeAllowanceResponseAmino): _34.MsgRevokeAllowanceResponse;
                toAmino(_: _34.MsgRevokeAllowanceResponse): _34.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _34.MsgRevokeAllowanceResponseAminoMsg): _34.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _34.MsgRevokeAllowanceResponse): _34.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _34.MsgRevokeAllowanceResponseProtoMsg): _34.MsgRevokeAllowanceResponse;
                toProto(message: _34.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _34.MsgRevokeAllowanceResponse): _34.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _31.BasicAllowance | _31.PeriodicAllowance | _31.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _33.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryAllowanceRequest;
                fromPartial(object: Partial<_33.QueryAllowanceRequest>): _33.QueryAllowanceRequest;
                fromAmino(object: _33.QueryAllowanceRequestAmino): _33.QueryAllowanceRequest;
                toAmino(message: _33.QueryAllowanceRequest): _33.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _33.QueryAllowanceRequestAminoMsg): _33.QueryAllowanceRequest;
                toAminoMsg(message: _33.QueryAllowanceRequest): _33.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAllowanceRequestProtoMsg): _33.QueryAllowanceRequest;
                toProto(message: _33.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAllowanceRequest): _33.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _33.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryAllowanceResponse;
                fromPartial(object: Partial<_33.QueryAllowanceResponse>): _33.QueryAllowanceResponse;
                fromAmino(object: _33.QueryAllowanceResponseAmino): _33.QueryAllowanceResponse;
                toAmino(message: _33.QueryAllowanceResponse): _33.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _33.QueryAllowanceResponseAminoMsg): _33.QueryAllowanceResponse;
                toAminoMsg(message: _33.QueryAllowanceResponse): _33.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAllowanceResponseProtoMsg): _33.QueryAllowanceResponse;
                toProto(message: _33.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAllowanceResponse): _33.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _33.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryAllowancesRequest;
                fromPartial(object: Partial<_33.QueryAllowancesRequest>): _33.QueryAllowancesRequest;
                fromAmino(object: _33.QueryAllowancesRequestAmino): _33.QueryAllowancesRequest;
                toAmino(message: _33.QueryAllowancesRequest): _33.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _33.QueryAllowancesRequestAminoMsg): _33.QueryAllowancesRequest;
                toAminoMsg(message: _33.QueryAllowancesRequest): _33.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAllowancesRequestProtoMsg): _33.QueryAllowancesRequest;
                toProto(message: _33.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAllowancesRequest): _33.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _33.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryAllowancesResponse;
                fromPartial(object: Partial<_33.QueryAllowancesResponse>): _33.QueryAllowancesResponse;
                fromAmino(object: _33.QueryAllowancesResponseAmino): _33.QueryAllowancesResponse;
                toAmino(message: _33.QueryAllowancesResponse): _33.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _33.QueryAllowancesResponseAminoMsg): _33.QueryAllowancesResponse;
                toAminoMsg(message: _33.QueryAllowancesResponse): _33.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAllowancesResponseProtoMsg): _33.QueryAllowancesResponse;
                toProto(message: _33.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAllowancesResponse): _33.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _33.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_33.QueryAllowancesByGranterRequest>): _33.QueryAllowancesByGranterRequest;
                fromAmino(object: _33.QueryAllowancesByGranterRequestAmino): _33.QueryAllowancesByGranterRequest;
                toAmino(message: _33.QueryAllowancesByGranterRequest): _33.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _33.QueryAllowancesByGranterRequestAminoMsg): _33.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _33.QueryAllowancesByGranterRequest): _33.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAllowancesByGranterRequestProtoMsg): _33.QueryAllowancesByGranterRequest;
                toProto(message: _33.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAllowancesByGranterRequest): _33.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _33.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_33.QueryAllowancesByGranterResponse>): _33.QueryAllowancesByGranterResponse;
                fromAmino(object: _33.QueryAllowancesByGranterResponseAmino): _33.QueryAllowancesByGranterResponse;
                toAmino(message: _33.QueryAllowancesByGranterResponse): _33.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _33.QueryAllowancesByGranterResponseAminoMsg): _33.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _33.QueryAllowancesByGranterResponse): _33.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAllowancesByGranterResponseProtoMsg): _33.QueryAllowancesByGranterResponse;
                toProto(message: _33.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAllowancesByGranterResponse): _33.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _31.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.BasicAllowance;
                fromPartial(object: Partial<_31.BasicAllowance>): _31.BasicAllowance;
                fromAmino(object: _31.BasicAllowanceAmino): _31.BasicAllowance;
                toAmino(message: _31.BasicAllowance): _31.BasicAllowanceAmino;
                fromAminoMsg(object: _31.BasicAllowanceAminoMsg): _31.BasicAllowance;
                toAminoMsg(message: _31.BasicAllowance): _31.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _31.BasicAllowanceProtoMsg): _31.BasicAllowance;
                toProto(message: _31.BasicAllowance): Uint8Array;
                toProtoMsg(message: _31.BasicAllowance): _31.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _31.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.PeriodicAllowance;
                fromPartial(object: Partial<_31.PeriodicAllowance>): _31.PeriodicAllowance;
                fromAmino(object: _31.PeriodicAllowanceAmino): _31.PeriodicAllowance;
                toAmino(message: _31.PeriodicAllowance): _31.PeriodicAllowanceAmino;
                fromAminoMsg(object: _31.PeriodicAllowanceAminoMsg): _31.PeriodicAllowance;
                toAminoMsg(message: _31.PeriodicAllowance): _31.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _31.PeriodicAllowanceProtoMsg): _31.PeriodicAllowance;
                toProto(message: _31.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _31.PeriodicAllowance): _31.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _31.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.AllowedMsgAllowance;
                fromPartial(object: Partial<_31.AllowedMsgAllowance>): _31.AllowedMsgAllowance;
                fromAmino(object: _31.AllowedMsgAllowanceAmino): _31.AllowedMsgAllowance;
                toAmino(message: _31.AllowedMsgAllowance): _31.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _31.AllowedMsgAllowanceAminoMsg): _31.AllowedMsgAllowance;
                toAminoMsg(message: _31.AllowedMsgAllowance): _31.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _31.AllowedMsgAllowanceProtoMsg): _31.AllowedMsgAllowance;
                toProto(message: _31.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _31.AllowedMsgAllowance): _31.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _31.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Grant;
                fromPartial(object: Partial<_31.Grant>): _31.Grant;
                fromAmino(object: _31.GrantAmino): _31.Grant;
                toAmino(message: _31.Grant): _31.GrantAmino;
                fromAminoMsg(object: _31.GrantAminoMsg): _31.Grant;
                toAminoMsg(message: _31.Grant): _31.GrantAminoMsg;
                fromProtoMsg(message: _31.GrantProtoMsg): _31.Grant;
                toProto(message: _31.Grant): Uint8Array;
                toProtoMsg(message: _31.Grant): _31.GrantProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _171.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _37.QueryProposalRequest): Promise<_37.QueryProposalResponse>;
                proposals(request: _37.QueryProposalsRequest): Promise<_37.QueryProposalsResponse>;
                vote(request: _37.QueryVoteRequest): Promise<_37.QueryVoteResponse>;
                votes(request: _37.QueryVotesRequest): Promise<_37.QueryVotesResponse>;
                params(request: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                deposit(request: _37.QueryDepositRequest): Promise<_37.QueryDepositResponse>;
                deposits(request: _37.QueryDepositsRequest): Promise<_37.QueryDepositsResponse>;
                tallyResult(request: _37.QueryTallyResultRequest): Promise<_37.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _38.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _38.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _38.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _38.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _38.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _38.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _38.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _38.MsgExecLegacyContent;
                    };
                    vote(value: _38.MsgVote): {
                        typeUrl: string;
                        value: _38.MsgVote;
                    };
                    voteWeighted(value: _38.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _38.MsgVoteWeighted;
                    };
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _38.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _38.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _38.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _38.MsgExecLegacyContent;
                    };
                    vote(value: _38.MsgVote): {
                        typeUrl: string;
                        value: _38.MsgVote;
                    };
                    voteWeighted(value: _38.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _38.MsgVoteWeighted;
                    };
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _38.MsgSubmitProposal) => _38.MsgSubmitProposalAmino;
                    fromAmino: (object: _38.MsgSubmitProposalAmino) => _38.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _38.MsgExecLegacyContent) => _38.MsgExecLegacyContentAmino;
                    fromAmino: (object: _38.MsgExecLegacyContentAmino) => _38.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _38.MsgVote) => _38.MsgVoteAmino;
                    fromAmino: (object: _38.MsgVoteAmino) => _38.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _38.MsgVoteWeighted) => _38.MsgVoteWeightedAmino;
                    fromAmino: (object: _38.MsgVoteWeightedAmino) => _38.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _38.MsgDeposit) => _38.MsgDepositAmino;
                    fromAmino: (object: _38.MsgDepositAmino) => _38.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _38.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgSubmitProposal;
                fromPartial(object: Partial<_38.MsgSubmitProposal>): _38.MsgSubmitProposal;
                fromAmino(object: _38.MsgSubmitProposalAmino): _38.MsgSubmitProposal;
                toAmino(message: _38.MsgSubmitProposal): _38.MsgSubmitProposalAmino;
                fromAminoMsg(object: _38.MsgSubmitProposalAminoMsg): _38.MsgSubmitProposal;
                toAminoMsg(message: _38.MsgSubmitProposal): _38.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _38.MsgSubmitProposalProtoMsg): _38.MsgSubmitProposal;
                toProto(message: _38.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _38.MsgSubmitProposal): _38.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _38.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_38.MsgSubmitProposalResponse>): _38.MsgSubmitProposalResponse;
                fromAmino(object: _38.MsgSubmitProposalResponseAmino): _38.MsgSubmitProposalResponse;
                toAmino(message: _38.MsgSubmitProposalResponse): _38.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _38.MsgSubmitProposalResponseAminoMsg): _38.MsgSubmitProposalResponse;
                toAminoMsg(message: _38.MsgSubmitProposalResponse): _38.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _38.MsgSubmitProposalResponseProtoMsg): _38.MsgSubmitProposalResponse;
                toProto(message: _38.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _38.MsgSubmitProposalResponse): _38.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _38.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgExecLegacyContent;
                fromPartial(object: Partial<_38.MsgExecLegacyContent>): _38.MsgExecLegacyContent;
                fromAmino(object: _38.MsgExecLegacyContentAmino): _38.MsgExecLegacyContent;
                toAmino(message: _38.MsgExecLegacyContent): _38.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _38.MsgExecLegacyContentAminoMsg): _38.MsgExecLegacyContent;
                toAminoMsg(message: _38.MsgExecLegacyContent): _38.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _38.MsgExecLegacyContentProtoMsg): _38.MsgExecLegacyContent;
                toProto(message: _38.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _38.MsgExecLegacyContent): _38.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _38.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_38.MsgExecLegacyContentResponse>): _38.MsgExecLegacyContentResponse;
                fromAmino(_: _38.MsgExecLegacyContentResponseAmino): _38.MsgExecLegacyContentResponse;
                toAmino(_: _38.MsgExecLegacyContentResponse): _38.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _38.MsgExecLegacyContentResponseAminoMsg): _38.MsgExecLegacyContentResponse;
                toAminoMsg(message: _38.MsgExecLegacyContentResponse): _38.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _38.MsgExecLegacyContentResponseProtoMsg): _38.MsgExecLegacyContentResponse;
                toProto(message: _38.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _38.MsgExecLegacyContentResponse): _38.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _38.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgVote;
                fromPartial(object: Partial<_38.MsgVote>): _38.MsgVote;
                fromAmino(object: _38.MsgVoteAmino): _38.MsgVote;
                toAmino(message: _38.MsgVote): _38.MsgVoteAmino;
                fromAminoMsg(object: _38.MsgVoteAminoMsg): _38.MsgVote;
                toAminoMsg(message: _38.MsgVote): _38.MsgVoteAminoMsg;
                fromProtoMsg(message: _38.MsgVoteProtoMsg): _38.MsgVote;
                toProto(message: _38.MsgVote): Uint8Array;
                toProtoMsg(message: _38.MsgVote): _38.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _38.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgVoteResponse;
                fromPartial(_: Partial<_38.MsgVoteResponse>): _38.MsgVoteResponse;
                fromAmino(_: _38.MsgVoteResponseAmino): _38.MsgVoteResponse;
                toAmino(_: _38.MsgVoteResponse): _38.MsgVoteResponseAmino;
                fromAminoMsg(object: _38.MsgVoteResponseAminoMsg): _38.MsgVoteResponse;
                toAminoMsg(message: _38.MsgVoteResponse): _38.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _38.MsgVoteResponseProtoMsg): _38.MsgVoteResponse;
                toProto(message: _38.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _38.MsgVoteResponse): _38.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _38.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgVoteWeighted;
                fromPartial(object: Partial<_38.MsgVoteWeighted>): _38.MsgVoteWeighted;
                fromAmino(object: _38.MsgVoteWeightedAmino): _38.MsgVoteWeighted;
                toAmino(message: _38.MsgVoteWeighted): _38.MsgVoteWeightedAmino;
                fromAminoMsg(object: _38.MsgVoteWeightedAminoMsg): _38.MsgVoteWeighted;
                toAminoMsg(message: _38.MsgVoteWeighted): _38.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _38.MsgVoteWeightedProtoMsg): _38.MsgVoteWeighted;
                toProto(message: _38.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _38.MsgVoteWeighted): _38.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _38.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_38.MsgVoteWeightedResponse>): _38.MsgVoteWeightedResponse;
                fromAmino(_: _38.MsgVoteWeightedResponseAmino): _38.MsgVoteWeightedResponse;
                toAmino(_: _38.MsgVoteWeightedResponse): _38.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _38.MsgVoteWeightedResponseAminoMsg): _38.MsgVoteWeightedResponse;
                toAminoMsg(message: _38.MsgVoteWeightedResponse): _38.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _38.MsgVoteWeightedResponseProtoMsg): _38.MsgVoteWeightedResponse;
                toProto(message: _38.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _38.MsgVoteWeightedResponse): _38.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _38.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgDeposit;
                fromPartial(object: Partial<_38.MsgDeposit>): _38.MsgDeposit;
                fromAmino(object: _38.MsgDepositAmino): _38.MsgDeposit;
                toAmino(message: _38.MsgDeposit): _38.MsgDepositAmino;
                fromAminoMsg(object: _38.MsgDepositAminoMsg): _38.MsgDeposit;
                toAminoMsg(message: _38.MsgDeposit): _38.MsgDepositAminoMsg;
                fromProtoMsg(message: _38.MsgDepositProtoMsg): _38.MsgDeposit;
                toProto(message: _38.MsgDeposit): Uint8Array;
                toProtoMsg(message: _38.MsgDeposit): _38.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _38.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgDepositResponse;
                fromPartial(_: Partial<_38.MsgDepositResponse>): _38.MsgDepositResponse;
                fromAmino(_: _38.MsgDepositResponseAmino): _38.MsgDepositResponse;
                toAmino(_: _38.MsgDepositResponse): _38.MsgDepositResponseAmino;
                fromAminoMsg(object: _38.MsgDepositResponseAminoMsg): _38.MsgDepositResponse;
                toAminoMsg(message: _38.MsgDepositResponse): _38.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _38.MsgDepositResponseProtoMsg): _38.MsgDepositResponse;
                toProto(message: _38.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _38.MsgDepositResponse): _38.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _40.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _37.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryProposalRequest;
                fromPartial(object: Partial<_37.QueryProposalRequest>): _37.QueryProposalRequest;
                fromAmino(object: _37.QueryProposalRequestAmino): _37.QueryProposalRequest;
                toAmino(message: _37.QueryProposalRequest): _37.QueryProposalRequestAmino;
                fromAminoMsg(object: _37.QueryProposalRequestAminoMsg): _37.QueryProposalRequest;
                toAminoMsg(message: _37.QueryProposalRequest): _37.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _37.QueryProposalRequestProtoMsg): _37.QueryProposalRequest;
                toProto(message: _37.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _37.QueryProposalRequest): _37.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _37.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryProposalResponse;
                fromPartial(object: Partial<_37.QueryProposalResponse>): _37.QueryProposalResponse;
                fromAmino(object: _37.QueryProposalResponseAmino): _37.QueryProposalResponse;
                toAmino(message: _37.QueryProposalResponse): _37.QueryProposalResponseAmino;
                fromAminoMsg(object: _37.QueryProposalResponseAminoMsg): _37.QueryProposalResponse;
                toAminoMsg(message: _37.QueryProposalResponse): _37.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _37.QueryProposalResponseProtoMsg): _37.QueryProposalResponse;
                toProto(message: _37.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _37.QueryProposalResponse): _37.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _37.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryProposalsRequest;
                fromPartial(object: Partial<_37.QueryProposalsRequest>): _37.QueryProposalsRequest;
                fromAmino(object: _37.QueryProposalsRequestAmino): _37.QueryProposalsRequest;
                toAmino(message: _37.QueryProposalsRequest): _37.QueryProposalsRequestAmino;
                fromAminoMsg(object: _37.QueryProposalsRequestAminoMsg): _37.QueryProposalsRequest;
                toAminoMsg(message: _37.QueryProposalsRequest): _37.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryProposalsRequestProtoMsg): _37.QueryProposalsRequest;
                toProto(message: _37.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryProposalsRequest): _37.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _37.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryProposalsResponse;
                fromPartial(object: Partial<_37.QueryProposalsResponse>): _37.QueryProposalsResponse;
                fromAmino(object: _37.QueryProposalsResponseAmino): _37.QueryProposalsResponse;
                toAmino(message: _37.QueryProposalsResponse): _37.QueryProposalsResponseAmino;
                fromAminoMsg(object: _37.QueryProposalsResponseAminoMsg): _37.QueryProposalsResponse;
                toAminoMsg(message: _37.QueryProposalsResponse): _37.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryProposalsResponseProtoMsg): _37.QueryProposalsResponse;
                toProto(message: _37.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryProposalsResponse): _37.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _37.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryVoteRequest;
                fromPartial(object: Partial<_37.QueryVoteRequest>): _37.QueryVoteRequest;
                fromAmino(object: _37.QueryVoteRequestAmino): _37.QueryVoteRequest;
                toAmino(message: _37.QueryVoteRequest): _37.QueryVoteRequestAmino;
                fromAminoMsg(object: _37.QueryVoteRequestAminoMsg): _37.QueryVoteRequest;
                toAminoMsg(message: _37.QueryVoteRequest): _37.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _37.QueryVoteRequestProtoMsg): _37.QueryVoteRequest;
                toProto(message: _37.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _37.QueryVoteRequest): _37.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _37.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryVoteResponse;
                fromPartial(object: Partial<_37.QueryVoteResponse>): _37.QueryVoteResponse;
                fromAmino(object: _37.QueryVoteResponseAmino): _37.QueryVoteResponse;
                toAmino(message: _37.QueryVoteResponse): _37.QueryVoteResponseAmino;
                fromAminoMsg(object: _37.QueryVoteResponseAminoMsg): _37.QueryVoteResponse;
                toAminoMsg(message: _37.QueryVoteResponse): _37.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _37.QueryVoteResponseProtoMsg): _37.QueryVoteResponse;
                toProto(message: _37.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _37.QueryVoteResponse): _37.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _37.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryVotesRequest;
                fromPartial(object: Partial<_37.QueryVotesRequest>): _37.QueryVotesRequest;
                fromAmino(object: _37.QueryVotesRequestAmino): _37.QueryVotesRequest;
                toAmino(message: _37.QueryVotesRequest): _37.QueryVotesRequestAmino;
                fromAminoMsg(object: _37.QueryVotesRequestAminoMsg): _37.QueryVotesRequest;
                toAminoMsg(message: _37.QueryVotesRequest): _37.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _37.QueryVotesRequestProtoMsg): _37.QueryVotesRequest;
                toProto(message: _37.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _37.QueryVotesRequest): _37.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _37.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryVotesResponse;
                fromPartial(object: Partial<_37.QueryVotesResponse>): _37.QueryVotesResponse;
                fromAmino(object: _37.QueryVotesResponseAmino): _37.QueryVotesResponse;
                toAmino(message: _37.QueryVotesResponse): _37.QueryVotesResponseAmino;
                fromAminoMsg(object: _37.QueryVotesResponseAminoMsg): _37.QueryVotesResponse;
                toAminoMsg(message: _37.QueryVotesResponse): _37.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _37.QueryVotesResponseProtoMsg): _37.QueryVotesResponse;
                toProto(message: _37.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _37.QueryVotesResponse): _37.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _37.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryParamsRequest;
                fromPartial(object: Partial<_37.QueryParamsRequest>): _37.QueryParamsRequest;
                fromAmino(object: _37.QueryParamsRequestAmino): _37.QueryParamsRequest;
                toAmino(message: _37.QueryParamsRequest): _37.QueryParamsRequestAmino;
                fromAminoMsg(object: _37.QueryParamsRequestAminoMsg): _37.QueryParamsRequest;
                toAminoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryParamsRequestProtoMsg): _37.QueryParamsRequest;
                toProto(message: _37.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _37.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryParamsResponse;
                fromPartial(object: Partial<_37.QueryParamsResponse>): _37.QueryParamsResponse;
                fromAmino(object: _37.QueryParamsResponseAmino): _37.QueryParamsResponse;
                toAmino(message: _37.QueryParamsResponse): _37.QueryParamsResponseAmino;
                fromAminoMsg(object: _37.QueryParamsResponseAminoMsg): _37.QueryParamsResponse;
                toAminoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryParamsResponseProtoMsg): _37.QueryParamsResponse;
                toProto(message: _37.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _37.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDepositRequest;
                fromPartial(object: Partial<_37.QueryDepositRequest>): _37.QueryDepositRequest;
                fromAmino(object: _37.QueryDepositRequestAmino): _37.QueryDepositRequest;
                toAmino(message: _37.QueryDepositRequest): _37.QueryDepositRequestAmino;
                fromAminoMsg(object: _37.QueryDepositRequestAminoMsg): _37.QueryDepositRequest;
                toAminoMsg(message: _37.QueryDepositRequest): _37.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _37.QueryDepositRequestProtoMsg): _37.QueryDepositRequest;
                toProto(message: _37.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDepositRequest): _37.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _37.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDepositResponse;
                fromPartial(object: Partial<_37.QueryDepositResponse>): _37.QueryDepositResponse;
                fromAmino(object: _37.QueryDepositResponseAmino): _37.QueryDepositResponse;
                toAmino(message: _37.QueryDepositResponse): _37.QueryDepositResponseAmino;
                fromAminoMsg(object: _37.QueryDepositResponseAminoMsg): _37.QueryDepositResponse;
                toAminoMsg(message: _37.QueryDepositResponse): _37.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _37.QueryDepositResponseProtoMsg): _37.QueryDepositResponse;
                toProto(message: _37.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDepositResponse): _37.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _37.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDepositsRequest;
                fromPartial(object: Partial<_37.QueryDepositsRequest>): _37.QueryDepositsRequest;
                fromAmino(object: _37.QueryDepositsRequestAmino): _37.QueryDepositsRequest;
                toAmino(message: _37.QueryDepositsRequest): _37.QueryDepositsRequestAmino;
                fromAminoMsg(object: _37.QueryDepositsRequestAminoMsg): _37.QueryDepositsRequest;
                toAminoMsg(message: _37.QueryDepositsRequest): _37.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _37.QueryDepositsRequestProtoMsg): _37.QueryDepositsRequest;
                toProto(message: _37.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDepositsRequest): _37.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _37.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryDepositsResponse;
                fromPartial(object: Partial<_37.QueryDepositsResponse>): _37.QueryDepositsResponse;
                fromAmino(object: _37.QueryDepositsResponseAmino): _37.QueryDepositsResponse;
                toAmino(message: _37.QueryDepositsResponse): _37.QueryDepositsResponseAmino;
                fromAminoMsg(object: _37.QueryDepositsResponseAminoMsg): _37.QueryDepositsResponse;
                toAminoMsg(message: _37.QueryDepositsResponse): _37.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _37.QueryDepositsResponseProtoMsg): _37.QueryDepositsResponse;
                toProto(message: _37.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDepositsResponse): _37.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _37.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryTallyResultRequest;
                fromPartial(object: Partial<_37.QueryTallyResultRequest>): _37.QueryTallyResultRequest;
                fromAmino(object: _37.QueryTallyResultRequestAmino): _37.QueryTallyResultRequest;
                toAmino(message: _37.QueryTallyResultRequest): _37.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _37.QueryTallyResultRequestAminoMsg): _37.QueryTallyResultRequest;
                toAminoMsg(message: _37.QueryTallyResultRequest): _37.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _37.QueryTallyResultRequestProtoMsg): _37.QueryTallyResultRequest;
                toProto(message: _37.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _37.QueryTallyResultRequest): _37.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _37.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.QueryTallyResultResponse;
                fromPartial(object: Partial<_37.QueryTallyResultResponse>): _37.QueryTallyResultResponse;
                fromAmino(object: _37.QueryTallyResultResponseAmino): _37.QueryTallyResultResponse;
                toAmino(message: _37.QueryTallyResultResponse): _37.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _37.QueryTallyResultResponseAminoMsg): _37.QueryTallyResultResponse;
                toAminoMsg(message: _37.QueryTallyResultResponse): _37.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _37.QueryTallyResultResponseProtoMsg): _37.QueryTallyResultResponse;
                toProto(message: _37.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _37.QueryTallyResultResponse): _37.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _36.VoteOption;
            voteOptionToJSON(object: _36.VoteOption): string;
            proposalStatusFromJSON(object: any): _36.ProposalStatus;
            proposalStatusToJSON(object: _36.ProposalStatus): string;
            VoteOption: typeof _36.VoteOption;
            VoteOptionSDKType: typeof _36.VoteOption;
            VoteOptionAmino: typeof _36.VoteOption;
            ProposalStatus: typeof _36.ProposalStatus;
            ProposalStatusSDKType: typeof _36.ProposalStatus;
            ProposalStatusAmino: typeof _36.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _36.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.WeightedVoteOption;
                fromPartial(object: Partial<_36.WeightedVoteOption>): _36.WeightedVoteOption;
                fromAmino(object: _36.WeightedVoteOptionAmino): _36.WeightedVoteOption;
                toAmino(message: _36.WeightedVoteOption): _36.WeightedVoteOptionAmino;
                fromAminoMsg(object: _36.WeightedVoteOptionAminoMsg): _36.WeightedVoteOption;
                toAminoMsg(message: _36.WeightedVoteOption): _36.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _36.WeightedVoteOptionProtoMsg): _36.WeightedVoteOption;
                toProto(message: _36.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _36.WeightedVoteOption): _36.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _36.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.Deposit;
                fromPartial(object: Partial<_36.Deposit>): _36.Deposit;
                fromAmino(object: _36.DepositAmino): _36.Deposit;
                toAmino(message: _36.Deposit): _36.DepositAmino;
                fromAminoMsg(object: _36.DepositAminoMsg): _36.Deposit;
                toAminoMsg(message: _36.Deposit): _36.DepositAminoMsg;
                fromProtoMsg(message: _36.DepositProtoMsg): _36.Deposit;
                toProto(message: _36.Deposit): Uint8Array;
                toProtoMsg(message: _36.Deposit): _36.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _36.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.Proposal;
                fromPartial(object: Partial<_36.Proposal>): _36.Proposal;
                fromAmino(object: _36.ProposalAmino): _36.Proposal;
                toAmino(message: _36.Proposal): _36.ProposalAmino;
                fromAminoMsg(object: _36.ProposalAminoMsg): _36.Proposal;
                toAminoMsg(message: _36.Proposal): _36.ProposalAminoMsg;
                fromProtoMsg(message: _36.ProposalProtoMsg): _36.Proposal;
                toProto(message: _36.Proposal): Uint8Array;
                toProtoMsg(message: _36.Proposal): _36.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _36.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.TallyResult;
                fromPartial(object: Partial<_36.TallyResult>): _36.TallyResult;
                fromAmino(object: _36.TallyResultAmino): _36.TallyResult;
                toAmino(message: _36.TallyResult): _36.TallyResultAmino;
                fromAminoMsg(object: _36.TallyResultAminoMsg): _36.TallyResult;
                toAminoMsg(message: _36.TallyResult): _36.TallyResultAminoMsg;
                fromProtoMsg(message: _36.TallyResultProtoMsg): _36.TallyResult;
                toProto(message: _36.TallyResult): Uint8Array;
                toProtoMsg(message: _36.TallyResult): _36.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _36.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.Vote;
                fromPartial(object: Partial<_36.Vote>): _36.Vote;
                fromAmino(object: _36.VoteAmino): _36.Vote;
                toAmino(message: _36.Vote): _36.VoteAmino;
                fromAminoMsg(object: _36.VoteAminoMsg): _36.Vote;
                toAminoMsg(message: _36.Vote): _36.VoteAminoMsg;
                fromProtoMsg(message: _36.VoteProtoMsg): _36.Vote;
                toProto(message: _36.Vote): Uint8Array;
                toProtoMsg(message: _36.Vote): _36.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _36.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.DepositParams;
                fromPartial(object: Partial<_36.DepositParams>): _36.DepositParams;
                fromAmino(object: _36.DepositParamsAmino): _36.DepositParams;
                toAmino(message: _36.DepositParams): _36.DepositParamsAmino;
                fromAminoMsg(object: _36.DepositParamsAminoMsg): _36.DepositParams;
                toAminoMsg(message: _36.DepositParams): _36.DepositParamsAminoMsg;
                fromProtoMsg(message: _36.DepositParamsProtoMsg): _36.DepositParams;
                toProto(message: _36.DepositParams): Uint8Array;
                toProtoMsg(message: _36.DepositParams): _36.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _36.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.VotingParams;
                fromPartial(object: Partial<_36.VotingParams>): _36.VotingParams;
                fromAmino(object: _36.VotingParamsAmino): _36.VotingParams;
                toAmino(message: _36.VotingParams): _36.VotingParamsAmino;
                fromAminoMsg(object: _36.VotingParamsAminoMsg): _36.VotingParams;
                toAminoMsg(message: _36.VotingParams): _36.VotingParamsAminoMsg;
                fromProtoMsg(message: _36.VotingParamsProtoMsg): _36.VotingParams;
                toProto(message: _36.VotingParams): Uint8Array;
                toProtoMsg(message: _36.VotingParams): _36.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _36.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.TallyParams;
                fromPartial(object: Partial<_36.TallyParams>): _36.TallyParams;
                fromAmino(object: _36.TallyParamsAmino): _36.TallyParams;
                toAmino(message: _36.TallyParams): _36.TallyParamsAmino;
                fromAminoMsg(object: _36.TallyParamsAminoMsg): _36.TallyParams;
                toAminoMsg(message: _36.TallyParams): _36.TallyParamsAminoMsg;
                fromProtoMsg(message: _36.TallyParamsProtoMsg): _36.TallyParams;
                toProto(message: _36.TallyParams): Uint8Array;
                toProtoMsg(message: _36.TallyParams): _36.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _172.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _41.QueryProposalRequest): Promise<_41.QueryProposalResponse>;
                proposals(request: _41.QueryProposalsRequest): Promise<_41.QueryProposalsResponse>;
                vote(request: _41.QueryVoteRequest): Promise<_41.QueryVoteResponse>;
                votes(request: _41.QueryVotesRequest): Promise<_41.QueryVotesResponse>;
                params(request: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                deposit(request: _41.QueryDepositRequest): Promise<_41.QueryDepositResponse>;
                deposits(request: _41.QueryDepositsRequest): Promise<_41.QueryDepositsResponse>;
                tallyResult(request: _41.QueryTallyResultRequest): Promise<_41.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _42.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _42.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _42.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _42.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _42.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _42.MsgSubmitProposal;
                    };
                    vote(value: _42.MsgVote): {
                        typeUrl: string;
                        value: _42.MsgVote;
                    };
                    voteWeighted(value: _42.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _42.MsgVoteWeighted;
                    };
                    deposit(value: _42.MsgDeposit): {
                        typeUrl: string;
                        value: _42.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _42.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _42.MsgSubmitProposal;
                    };
                    vote(value: _42.MsgVote): {
                        typeUrl: string;
                        value: _42.MsgVote;
                    };
                    voteWeighted(value: _42.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _42.MsgVoteWeighted;
                    };
                    deposit(value: _42.MsgDeposit): {
                        typeUrl: string;
                        value: _42.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _42.MsgSubmitProposal) => _42.MsgSubmitProposalAmino;
                    fromAmino: (object: _42.MsgSubmitProposalAmino) => _42.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _42.MsgVote) => _42.MsgVoteAmino;
                    fromAmino: (object: _42.MsgVoteAmino) => _42.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _42.MsgVoteWeighted) => _42.MsgVoteWeightedAmino;
                    fromAmino: (object: _42.MsgVoteWeightedAmino) => _42.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _42.MsgDeposit) => _42.MsgDepositAmino;
                    fromAmino: (object: _42.MsgDepositAmino) => _42.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _42.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgSubmitProposal;
                fromPartial(object: Partial<_42.MsgSubmitProposal>): _42.MsgSubmitProposal;
                fromAmino(object: _42.MsgSubmitProposalAmino): _42.MsgSubmitProposal;
                toAmino(message: _42.MsgSubmitProposal): _42.MsgSubmitProposalAmino;
                fromAminoMsg(object: _42.MsgSubmitProposalAminoMsg): _42.MsgSubmitProposal;
                toAminoMsg(message: _42.MsgSubmitProposal): _42.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _42.MsgSubmitProposalProtoMsg): _42.MsgSubmitProposal;
                toProto(message: _42.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _42.MsgSubmitProposal): _42.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _42.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_42.MsgSubmitProposalResponse>): _42.MsgSubmitProposalResponse;
                fromAmino(object: _42.MsgSubmitProposalResponseAmino): _42.MsgSubmitProposalResponse;
                toAmino(message: _42.MsgSubmitProposalResponse): _42.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _42.MsgSubmitProposalResponseAminoMsg): _42.MsgSubmitProposalResponse;
                toAminoMsg(message: _42.MsgSubmitProposalResponse): _42.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _42.MsgSubmitProposalResponseProtoMsg): _42.MsgSubmitProposalResponse;
                toProto(message: _42.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _42.MsgSubmitProposalResponse): _42.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _42.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgVote;
                fromPartial(object: Partial<_42.MsgVote>): _42.MsgVote;
                fromAmino(object: _42.MsgVoteAmino): _42.MsgVote;
                toAmino(message: _42.MsgVote): _42.MsgVoteAmino;
                fromAminoMsg(object: _42.MsgVoteAminoMsg): _42.MsgVote;
                toAminoMsg(message: _42.MsgVote): _42.MsgVoteAminoMsg;
                fromProtoMsg(message: _42.MsgVoteProtoMsg): _42.MsgVote;
                toProto(message: _42.MsgVote): Uint8Array;
                toProtoMsg(message: _42.MsgVote): _42.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _42.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgVoteResponse;
                fromPartial(_: Partial<_42.MsgVoteResponse>): _42.MsgVoteResponse;
                fromAmino(_: _42.MsgVoteResponseAmino): _42.MsgVoteResponse;
                toAmino(_: _42.MsgVoteResponse): _42.MsgVoteResponseAmino;
                fromAminoMsg(object: _42.MsgVoteResponseAminoMsg): _42.MsgVoteResponse;
                toAminoMsg(message: _42.MsgVoteResponse): _42.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _42.MsgVoteResponseProtoMsg): _42.MsgVoteResponse;
                toProto(message: _42.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _42.MsgVoteResponse): _42.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _42.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgVoteWeighted;
                fromPartial(object: Partial<_42.MsgVoteWeighted>): _42.MsgVoteWeighted;
                fromAmino(object: _42.MsgVoteWeightedAmino): _42.MsgVoteWeighted;
                toAmino(message: _42.MsgVoteWeighted): _42.MsgVoteWeightedAmino;
                fromAminoMsg(object: _42.MsgVoteWeightedAminoMsg): _42.MsgVoteWeighted;
                toAminoMsg(message: _42.MsgVoteWeighted): _42.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _42.MsgVoteWeightedProtoMsg): _42.MsgVoteWeighted;
                toProto(message: _42.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _42.MsgVoteWeighted): _42.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _42.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_42.MsgVoteWeightedResponse>): _42.MsgVoteWeightedResponse;
                fromAmino(_: _42.MsgVoteWeightedResponseAmino): _42.MsgVoteWeightedResponse;
                toAmino(_: _42.MsgVoteWeightedResponse): _42.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _42.MsgVoteWeightedResponseAminoMsg): _42.MsgVoteWeightedResponse;
                toAminoMsg(message: _42.MsgVoteWeightedResponse): _42.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _42.MsgVoteWeightedResponseProtoMsg): _42.MsgVoteWeightedResponse;
                toProto(message: _42.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _42.MsgVoteWeightedResponse): _42.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _42.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgDeposit;
                fromPartial(object: Partial<_42.MsgDeposit>): _42.MsgDeposit;
                fromAmino(object: _42.MsgDepositAmino): _42.MsgDeposit;
                toAmino(message: _42.MsgDeposit): _42.MsgDepositAmino;
                fromAminoMsg(object: _42.MsgDepositAminoMsg): _42.MsgDeposit;
                toAminoMsg(message: _42.MsgDeposit): _42.MsgDepositAminoMsg;
                fromProtoMsg(message: _42.MsgDepositProtoMsg): _42.MsgDeposit;
                toProto(message: _42.MsgDeposit): Uint8Array;
                toProtoMsg(message: _42.MsgDeposit): _42.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _42.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.MsgDepositResponse;
                fromPartial(_: Partial<_42.MsgDepositResponse>): _42.MsgDepositResponse;
                fromAmino(_: _42.MsgDepositResponseAmino): _42.MsgDepositResponse;
                toAmino(_: _42.MsgDepositResponse): _42.MsgDepositResponseAmino;
                fromAminoMsg(object: _42.MsgDepositResponseAminoMsg): _42.MsgDepositResponse;
                toAminoMsg(message: _42.MsgDepositResponse): _42.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _42.MsgDepositResponseProtoMsg): _42.MsgDepositResponse;
                toProto(message: _42.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _42.MsgDepositResponse): _42.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _40.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _41.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryProposalRequest;
                fromPartial(object: Partial<_41.QueryProposalRequest>): _41.QueryProposalRequest;
                fromAmino(object: _41.QueryProposalRequestAmino): _41.QueryProposalRequest;
                toAmino(message: _41.QueryProposalRequest): _41.QueryProposalRequestAmino;
                fromAminoMsg(object: _41.QueryProposalRequestAminoMsg): _41.QueryProposalRequest;
                toAminoMsg(message: _41.QueryProposalRequest): _41.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _41.QueryProposalRequestProtoMsg): _41.QueryProposalRequest;
                toProto(message: _41.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _41.QueryProposalRequest): _41.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _41.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryProposalResponse;
                fromPartial(object: Partial<_41.QueryProposalResponse>): _41.QueryProposalResponse;
                fromAmino(object: _41.QueryProposalResponseAmino): _41.QueryProposalResponse;
                toAmino(message: _41.QueryProposalResponse): _41.QueryProposalResponseAmino;
                fromAminoMsg(object: _41.QueryProposalResponseAminoMsg): _41.QueryProposalResponse;
                toAminoMsg(message: _41.QueryProposalResponse): _41.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _41.QueryProposalResponseProtoMsg): _41.QueryProposalResponse;
                toProto(message: _41.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _41.QueryProposalResponse): _41.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _41.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryProposalsRequest;
                fromPartial(object: Partial<_41.QueryProposalsRequest>): _41.QueryProposalsRequest;
                fromAmino(object: _41.QueryProposalsRequestAmino): _41.QueryProposalsRequest;
                toAmino(message: _41.QueryProposalsRequest): _41.QueryProposalsRequestAmino;
                fromAminoMsg(object: _41.QueryProposalsRequestAminoMsg): _41.QueryProposalsRequest;
                toAminoMsg(message: _41.QueryProposalsRequest): _41.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryProposalsRequestProtoMsg): _41.QueryProposalsRequest;
                toProto(message: _41.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryProposalsRequest): _41.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _41.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryProposalsResponse;
                fromPartial(object: Partial<_41.QueryProposalsResponse>): _41.QueryProposalsResponse;
                fromAmino(object: _41.QueryProposalsResponseAmino): _41.QueryProposalsResponse;
                toAmino(message: _41.QueryProposalsResponse): _41.QueryProposalsResponseAmino;
                fromAminoMsg(object: _41.QueryProposalsResponseAminoMsg): _41.QueryProposalsResponse;
                toAminoMsg(message: _41.QueryProposalsResponse): _41.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryProposalsResponseProtoMsg): _41.QueryProposalsResponse;
                toProto(message: _41.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryProposalsResponse): _41.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _41.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryVoteRequest;
                fromPartial(object: Partial<_41.QueryVoteRequest>): _41.QueryVoteRequest;
                fromAmino(object: _41.QueryVoteRequestAmino): _41.QueryVoteRequest;
                toAmino(message: _41.QueryVoteRequest): _41.QueryVoteRequestAmino;
                fromAminoMsg(object: _41.QueryVoteRequestAminoMsg): _41.QueryVoteRequest;
                toAminoMsg(message: _41.QueryVoteRequest): _41.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _41.QueryVoteRequestProtoMsg): _41.QueryVoteRequest;
                toProto(message: _41.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _41.QueryVoteRequest): _41.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _41.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryVoteResponse;
                fromPartial(object: Partial<_41.QueryVoteResponse>): _41.QueryVoteResponse;
                fromAmino(object: _41.QueryVoteResponseAmino): _41.QueryVoteResponse;
                toAmino(message: _41.QueryVoteResponse): _41.QueryVoteResponseAmino;
                fromAminoMsg(object: _41.QueryVoteResponseAminoMsg): _41.QueryVoteResponse;
                toAminoMsg(message: _41.QueryVoteResponse): _41.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _41.QueryVoteResponseProtoMsg): _41.QueryVoteResponse;
                toProto(message: _41.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _41.QueryVoteResponse): _41.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _41.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryVotesRequest;
                fromPartial(object: Partial<_41.QueryVotesRequest>): _41.QueryVotesRequest;
                fromAmino(object: _41.QueryVotesRequestAmino): _41.QueryVotesRequest;
                toAmino(message: _41.QueryVotesRequest): _41.QueryVotesRequestAmino;
                fromAminoMsg(object: _41.QueryVotesRequestAminoMsg): _41.QueryVotesRequest;
                toAminoMsg(message: _41.QueryVotesRequest): _41.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _41.QueryVotesRequestProtoMsg): _41.QueryVotesRequest;
                toProto(message: _41.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _41.QueryVotesRequest): _41.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _41.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryVotesResponse;
                fromPartial(object: Partial<_41.QueryVotesResponse>): _41.QueryVotesResponse;
                fromAmino(object: _41.QueryVotesResponseAmino): _41.QueryVotesResponse;
                toAmino(message: _41.QueryVotesResponse): _41.QueryVotesResponseAmino;
                fromAminoMsg(object: _41.QueryVotesResponseAminoMsg): _41.QueryVotesResponse;
                toAminoMsg(message: _41.QueryVotesResponse): _41.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _41.QueryVotesResponseProtoMsg): _41.QueryVotesResponse;
                toProto(message: _41.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _41.QueryVotesResponse): _41.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _41.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryParamsRequest;
                fromPartial(object: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
                fromAmino(object: _41.QueryParamsRequestAmino): _41.QueryParamsRequest;
                toAmino(message: _41.QueryParamsRequest): _41.QueryParamsRequestAmino;
                fromAminoMsg(object: _41.QueryParamsRequestAminoMsg): _41.QueryParamsRequest;
                toAminoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryParamsRequestProtoMsg): _41.QueryParamsRequest;
                toProto(message: _41.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _41.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryParamsResponse;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
                fromAmino(object: _41.QueryParamsResponseAmino): _41.QueryParamsResponse;
                toAmino(message: _41.QueryParamsResponse): _41.QueryParamsResponseAmino;
                fromAminoMsg(object: _41.QueryParamsResponseAminoMsg): _41.QueryParamsResponse;
                toAminoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryParamsResponseProtoMsg): _41.QueryParamsResponse;
                toProto(message: _41.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _41.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryDepositRequest;
                fromPartial(object: Partial<_41.QueryDepositRequest>): _41.QueryDepositRequest;
                fromAmino(object: _41.QueryDepositRequestAmino): _41.QueryDepositRequest;
                toAmino(message: _41.QueryDepositRequest): _41.QueryDepositRequestAmino;
                fromAminoMsg(object: _41.QueryDepositRequestAminoMsg): _41.QueryDepositRequest;
                toAminoMsg(message: _41.QueryDepositRequest): _41.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDepositRequestProtoMsg): _41.QueryDepositRequest;
                toProto(message: _41.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDepositRequest): _41.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _41.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryDepositResponse;
                fromPartial(object: Partial<_41.QueryDepositResponse>): _41.QueryDepositResponse;
                fromAmino(object: _41.QueryDepositResponseAmino): _41.QueryDepositResponse;
                toAmino(message: _41.QueryDepositResponse): _41.QueryDepositResponseAmino;
                fromAminoMsg(object: _41.QueryDepositResponseAminoMsg): _41.QueryDepositResponse;
                toAminoMsg(message: _41.QueryDepositResponse): _41.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDepositResponseProtoMsg): _41.QueryDepositResponse;
                toProto(message: _41.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDepositResponse): _41.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _41.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryDepositsRequest;
                fromPartial(object: Partial<_41.QueryDepositsRequest>): _41.QueryDepositsRequest;
                fromAmino(object: _41.QueryDepositsRequestAmino): _41.QueryDepositsRequest;
                toAmino(message: _41.QueryDepositsRequest): _41.QueryDepositsRequestAmino;
                fromAminoMsg(object: _41.QueryDepositsRequestAminoMsg): _41.QueryDepositsRequest;
                toAminoMsg(message: _41.QueryDepositsRequest): _41.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryDepositsRequestProtoMsg): _41.QueryDepositsRequest;
                toProto(message: _41.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryDepositsRequest): _41.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _41.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryDepositsResponse;
                fromPartial(object: Partial<_41.QueryDepositsResponse>): _41.QueryDepositsResponse;
                fromAmino(object: _41.QueryDepositsResponseAmino): _41.QueryDepositsResponse;
                toAmino(message: _41.QueryDepositsResponse): _41.QueryDepositsResponseAmino;
                fromAminoMsg(object: _41.QueryDepositsResponseAminoMsg): _41.QueryDepositsResponse;
                toAminoMsg(message: _41.QueryDepositsResponse): _41.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryDepositsResponseProtoMsg): _41.QueryDepositsResponse;
                toProto(message: _41.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryDepositsResponse): _41.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _41.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryTallyResultRequest;
                fromPartial(object: Partial<_41.QueryTallyResultRequest>): _41.QueryTallyResultRequest;
                fromAmino(object: _41.QueryTallyResultRequestAmino): _41.QueryTallyResultRequest;
                toAmino(message: _41.QueryTallyResultRequest): _41.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _41.QueryTallyResultRequestAminoMsg): _41.QueryTallyResultRequest;
                toAminoMsg(message: _41.QueryTallyResultRequest): _41.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _41.QueryTallyResultRequestProtoMsg): _41.QueryTallyResultRequest;
                toProto(message: _41.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _41.QueryTallyResultRequest): _41.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _41.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.QueryTallyResultResponse;
                fromPartial(object: Partial<_41.QueryTallyResultResponse>): _41.QueryTallyResultResponse;
                fromAmino(object: _41.QueryTallyResultResponseAmino): _41.QueryTallyResultResponse;
                toAmino(message: _41.QueryTallyResultResponse): _41.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _41.QueryTallyResultResponseAminoMsg): _41.QueryTallyResultResponse;
                toAminoMsg(message: _41.QueryTallyResultResponse): _41.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _41.QueryTallyResultResponseProtoMsg): _41.QueryTallyResultResponse;
                toProto(message: _41.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _41.QueryTallyResultResponse): _41.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _40.VoteOption;
            voteOptionToJSON(object: _40.VoteOption): string;
            proposalStatusFromJSON(object: any): _40.ProposalStatus;
            proposalStatusToJSON(object: _40.ProposalStatus): string;
            VoteOption: typeof _40.VoteOption;
            VoteOptionSDKType: typeof _40.VoteOption;
            VoteOptionAmino: typeof _40.VoteOption;
            ProposalStatus: typeof _40.ProposalStatus;
            ProposalStatusSDKType: typeof _40.ProposalStatus;
            ProposalStatusAmino: typeof _40.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _40.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.WeightedVoteOption;
                fromPartial(object: Partial<_40.WeightedVoteOption>): _40.WeightedVoteOption;
                fromAmino(object: _40.WeightedVoteOptionAmino): _40.WeightedVoteOption;
                toAmino(message: _40.WeightedVoteOption): _40.WeightedVoteOptionAmino;
                fromAminoMsg(object: _40.WeightedVoteOptionAminoMsg): _40.WeightedVoteOption;
                toAminoMsg(message: _40.WeightedVoteOption): _40.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _40.WeightedVoteOptionProtoMsg): _40.WeightedVoteOption;
                toProto(message: _40.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _40.WeightedVoteOption): _40.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _40.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.TextProposal;
                fromPartial(object: Partial<_40.TextProposal>): _40.TextProposal;
                fromAmino(object: _40.TextProposalAmino): _40.TextProposal;
                toAmino(message: _40.TextProposal): _40.TextProposalAmino;
                fromAminoMsg(object: _40.TextProposalAminoMsg): _40.TextProposal;
                toAminoMsg(message: _40.TextProposal): _40.TextProposalAminoMsg;
                fromProtoMsg(message: _40.TextProposalProtoMsg): _40.TextProposal;
                toProto(message: _40.TextProposal): Uint8Array;
                toProtoMsg(message: _40.TextProposal): _40.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _40.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.Deposit;
                fromPartial(object: Partial<_40.Deposit>): _40.Deposit;
                fromAmino(object: _40.DepositAmino): _40.Deposit;
                toAmino(message: _40.Deposit): _40.DepositAmino;
                fromAminoMsg(object: _40.DepositAminoMsg): _40.Deposit;
                toAminoMsg(message: _40.Deposit): _40.DepositAminoMsg;
                fromProtoMsg(message: _40.DepositProtoMsg): _40.Deposit;
                toProto(message: _40.Deposit): Uint8Array;
                toProtoMsg(message: _40.Deposit): _40.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _40.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.Proposal;
                fromPartial(object: Partial<_40.Proposal>): _40.Proposal;
                fromAmino(object: _40.ProposalAmino): _40.Proposal;
                toAmino(message: _40.Proposal): _40.ProposalAmino;
                fromAminoMsg(object: _40.ProposalAminoMsg): _40.Proposal;
                toAminoMsg(message: _40.Proposal): _40.ProposalAminoMsg;
                fromProtoMsg(message: _40.ProposalProtoMsg): _40.Proposal;
                toProto(message: _40.Proposal): Uint8Array;
                toProtoMsg(message: _40.Proposal): _40.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _40.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.TallyResult;
                fromPartial(object: Partial<_40.TallyResult>): _40.TallyResult;
                fromAmino(object: _40.TallyResultAmino): _40.TallyResult;
                toAmino(message: _40.TallyResult): _40.TallyResultAmino;
                fromAminoMsg(object: _40.TallyResultAminoMsg): _40.TallyResult;
                toAminoMsg(message: _40.TallyResult): _40.TallyResultAminoMsg;
                fromProtoMsg(message: _40.TallyResultProtoMsg): _40.TallyResult;
                toProto(message: _40.TallyResult): Uint8Array;
                toProtoMsg(message: _40.TallyResult): _40.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _40.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.Vote;
                fromPartial(object: Partial<_40.Vote>): _40.Vote;
                fromAmino(object: _40.VoteAmino): _40.Vote;
                toAmino(message: _40.Vote): _40.VoteAmino;
                fromAminoMsg(object: _40.VoteAminoMsg): _40.Vote;
                toAminoMsg(message: _40.Vote): _40.VoteAminoMsg;
                fromProtoMsg(message: _40.VoteProtoMsg): _40.Vote;
                toProto(message: _40.Vote): Uint8Array;
                toProtoMsg(message: _40.Vote): _40.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _40.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.DepositParams;
                fromPartial(object: Partial<_40.DepositParams>): _40.DepositParams;
                fromAmino(object: _40.DepositParamsAmino): _40.DepositParams;
                toAmino(message: _40.DepositParams): _40.DepositParamsAmino;
                fromAminoMsg(object: _40.DepositParamsAminoMsg): _40.DepositParams;
                toAminoMsg(message: _40.DepositParams): _40.DepositParamsAminoMsg;
                fromProtoMsg(message: _40.DepositParamsProtoMsg): _40.DepositParams;
                toProto(message: _40.DepositParams): Uint8Array;
                toProtoMsg(message: _40.DepositParams): _40.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _40.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.VotingParams;
                fromPartial(object: Partial<_40.VotingParams>): _40.VotingParams;
                fromAmino(object: _40.VotingParamsAmino): _40.VotingParams;
                toAmino(message: _40.VotingParams): _40.VotingParamsAmino;
                fromAminoMsg(object: _40.VotingParamsAminoMsg): _40.VotingParams;
                toAminoMsg(message: _40.VotingParams): _40.VotingParamsAminoMsg;
                fromProtoMsg(message: _40.VotingParamsProtoMsg): _40.VotingParams;
                toProto(message: _40.VotingParams): Uint8Array;
                toProtoMsg(message: _40.VotingParams): _40.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _40.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.TallyParams;
                fromPartial(object: Partial<_40.TallyParams>): _40.TallyParams;
                fromAmino(object: _40.TallyParamsAmino): _40.TallyParams;
                toAmino(message: _40.TallyParams): _40.TallyParamsAmino;
                fromAminoMsg(object: _40.TallyParamsAminoMsg): _40.TallyParams;
                toAminoMsg(message: _40.TallyParams): _40.TallyParamsAminoMsg;
                fromProtoMsg(message: _40.TallyParamsProtoMsg): _40.TallyParams;
                toProto(message: _40.TallyParams): Uint8Array;
                toProtoMsg(message: _40.TallyParams): _40.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _39.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                toAminoMsg(message: _39.GenesisState): _39.GenesisStateAminoMsg;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _45.QueryGroupInfoRequest): Promise<_45.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _45.QueryGroupPolicyInfoRequest): Promise<_45.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _45.QueryGroupMembersRequest): Promise<_45.QueryGroupMembersResponse>;
                groupsByAdmin(request: _45.QueryGroupsByAdminRequest): Promise<_45.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _45.QueryGroupPoliciesByGroupRequest): Promise<_45.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _45.QueryGroupPoliciesByAdminRequest): Promise<_45.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _45.QueryProposalRequest): Promise<_45.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _45.QueryProposalsByGroupPolicyRequest): Promise<_45.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _45.QueryVoteByProposalVoterRequest): Promise<_45.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _45.QueryVotesByProposalRequest): Promise<_45.QueryVotesByProposalResponse>;
                votesByVoter(request: _45.QueryVotesByVoterRequest): Promise<_45.QueryVotesByVoterResponse>;
                groupsByMember(request: _45.QueryGroupsByMemberRequest): Promise<_45.QueryGroupsByMemberResponse>;
                tallyResult(request: _45.QueryTallyResultRequest): Promise<_45.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _46.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _46.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _46.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _46.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _46.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _46.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _46.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _46.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _46.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _46.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _46.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _46.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _46.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _46.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _46.MsgCreateGroup): {
                        typeUrl: string;
                        value: _46.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _46.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _46.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _46.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _46.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _46.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _46.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _46.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _46.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _46.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _46.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _46.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _46.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _46.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _46.MsgWithdrawProposal;
                    };
                    vote(value: _46.MsgVote): {
                        typeUrl: string;
                        value: _46.MsgVote;
                    };
                    exec(value: _46.MsgExec): {
                        typeUrl: string;
                        value: _46.MsgExec;
                    };
                    leaveGroup(value: _46.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _46.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _46.MsgCreateGroup): {
                        typeUrl: string;
                        value: _46.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _46.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _46.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _46.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _46.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _46.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _46.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _46.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _46.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _46.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _46.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _46.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _46.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _46.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _46.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _46.MsgWithdrawProposal;
                    };
                    vote(value: _46.MsgVote): {
                        typeUrl: string;
                        value: _46.MsgVote;
                    };
                    exec(value: _46.MsgExec): {
                        typeUrl: string;
                        value: _46.MsgExec;
                    };
                    leaveGroup(value: _46.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _46.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _46.MsgCreateGroup) => _46.MsgCreateGroupAmino;
                    fromAmino: (object: _46.MsgCreateGroupAmino) => _46.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateGroupMembers) => _46.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _46.MsgUpdateGroupMembersAmino) => _46.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateGroupAdmin) => _46.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _46.MsgUpdateGroupAdminAmino) => _46.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateGroupMetadata) => _46.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _46.MsgUpdateGroupMetadataAmino) => _46.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _46.MsgCreateGroupPolicy) => _46.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _46.MsgCreateGroupPolicyAmino) => _46.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _46.MsgCreateGroupWithPolicy) => _46.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _46.MsgCreateGroupWithPolicyAmino) => _46.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateGroupPolicyAdmin) => _46.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _46.MsgUpdateGroupPolicyAdminAmino) => _46.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateGroupPolicyDecisionPolicy) => _46.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _46.MsgUpdateGroupPolicyDecisionPolicyAmino) => _46.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUpdateGroupPolicyMetadata) => _46.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _46.MsgUpdateGroupPolicyMetadataAmino) => _46.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _46.MsgSubmitProposal) => _46.MsgSubmitProposalAmino;
                    fromAmino: (object: _46.MsgSubmitProposalAmino) => _46.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _46.MsgWithdrawProposal) => _46.MsgWithdrawProposalAmino;
                    fromAmino: (object: _46.MsgWithdrawProposalAmino) => _46.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _46.MsgVote) => _46.MsgVoteAmino;
                    fromAmino: (object: _46.MsgVoteAmino) => _46.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _46.MsgExec) => _46.MsgExecAmino;
                    fromAmino: (object: _46.MsgExecAmino) => _46.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _46.MsgLeaveGroup) => _46.MsgLeaveGroupAmino;
                    fromAmino: (object: _46.MsgLeaveGroupAmino) => _46.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _47.VoteOption;
            voteOptionToJSON(object: _47.VoteOption): string;
            proposalStatusFromJSON(object: any): _47.ProposalStatus;
            proposalStatusToJSON(object: _47.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _47.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _47.ProposalExecutorResult): string;
            VoteOption: typeof _47.VoteOption;
            VoteOptionSDKType: typeof _47.VoteOption;
            VoteOptionAmino: typeof _47.VoteOption;
            ProposalStatus: typeof _47.ProposalStatus;
            ProposalStatusSDKType: typeof _47.ProposalStatus;
            ProposalStatusAmino: typeof _47.ProposalStatus;
            ProposalExecutorResult: typeof _47.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _47.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _47.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _47.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Member;
                fromPartial(object: Partial<_47.Member>): _47.Member;
                fromAmino(object: _47.MemberAmino): _47.Member;
                toAmino(message: _47.Member): _47.MemberAmino;
                fromAminoMsg(object: _47.MemberAminoMsg): _47.Member;
                toAminoMsg(message: _47.Member): _47.MemberAminoMsg;
                fromProtoMsg(message: _47.MemberProtoMsg): _47.Member;
                toProto(message: _47.Member): Uint8Array;
                toProtoMsg(message: _47.Member): _47.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _47.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.MemberRequest;
                fromPartial(object: Partial<_47.MemberRequest>): _47.MemberRequest;
                fromAmino(object: _47.MemberRequestAmino): _47.MemberRequest;
                toAmino(message: _47.MemberRequest): _47.MemberRequestAmino;
                fromAminoMsg(object: _47.MemberRequestAminoMsg): _47.MemberRequest;
                toAminoMsg(message: _47.MemberRequest): _47.MemberRequestAminoMsg;
                fromProtoMsg(message: _47.MemberRequestProtoMsg): _47.MemberRequest;
                toProto(message: _47.MemberRequest): Uint8Array;
                toProtoMsg(message: _47.MemberRequest): _47.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _47.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_47.ThresholdDecisionPolicy>): _47.ThresholdDecisionPolicy;
                fromAmino(object: _47.ThresholdDecisionPolicyAmino): _47.ThresholdDecisionPolicy;
                toAmino(message: _47.ThresholdDecisionPolicy): _47.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _47.ThresholdDecisionPolicyAminoMsg): _47.ThresholdDecisionPolicy;
                toAminoMsg(message: _47.ThresholdDecisionPolicy): _47.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _47.ThresholdDecisionPolicyProtoMsg): _47.ThresholdDecisionPolicy;
                toProto(message: _47.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _47.ThresholdDecisionPolicy): _47.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _47.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.PercentageDecisionPolicy;
                fromPartial(object: Partial<_47.PercentageDecisionPolicy>): _47.PercentageDecisionPolicy;
                fromAmino(object: _47.PercentageDecisionPolicyAmino): _47.PercentageDecisionPolicy;
                toAmino(message: _47.PercentageDecisionPolicy): _47.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _47.PercentageDecisionPolicyAminoMsg): _47.PercentageDecisionPolicy;
                toAminoMsg(message: _47.PercentageDecisionPolicy): _47.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _47.PercentageDecisionPolicyProtoMsg): _47.PercentageDecisionPolicy;
                toProto(message: _47.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _47.PercentageDecisionPolicy): _47.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _47.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.DecisionPolicyWindows;
                fromPartial(object: Partial<_47.DecisionPolicyWindows>): _47.DecisionPolicyWindows;
                fromAmino(object: _47.DecisionPolicyWindowsAmino): _47.DecisionPolicyWindows;
                toAmino(message: _47.DecisionPolicyWindows): _47.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _47.DecisionPolicyWindowsAminoMsg): _47.DecisionPolicyWindows;
                toAminoMsg(message: _47.DecisionPolicyWindows): _47.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _47.DecisionPolicyWindowsProtoMsg): _47.DecisionPolicyWindows;
                toProto(message: _47.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _47.DecisionPolicyWindows): _47.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _47.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.GroupInfo;
                fromPartial(object: Partial<_47.GroupInfo>): _47.GroupInfo;
                fromAmino(object: _47.GroupInfoAmino): _47.GroupInfo;
                toAmino(message: _47.GroupInfo): _47.GroupInfoAmino;
                fromAminoMsg(object: _47.GroupInfoAminoMsg): _47.GroupInfo;
                toAminoMsg(message: _47.GroupInfo): _47.GroupInfoAminoMsg;
                fromProtoMsg(message: _47.GroupInfoProtoMsg): _47.GroupInfo;
                toProto(message: _47.GroupInfo): Uint8Array;
                toProtoMsg(message: _47.GroupInfo): _47.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _47.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.GroupMember;
                fromPartial(object: Partial<_47.GroupMember>): _47.GroupMember;
                fromAmino(object: _47.GroupMemberAmino): _47.GroupMember;
                toAmino(message: _47.GroupMember): _47.GroupMemberAmino;
                fromAminoMsg(object: _47.GroupMemberAminoMsg): _47.GroupMember;
                toAminoMsg(message: _47.GroupMember): _47.GroupMemberAminoMsg;
                fromProtoMsg(message: _47.GroupMemberProtoMsg): _47.GroupMember;
                toProto(message: _47.GroupMember): Uint8Array;
                toProtoMsg(message: _47.GroupMember): _47.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _47.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.GroupPolicyInfo;
                fromPartial(object: Partial<_47.GroupPolicyInfo>): _47.GroupPolicyInfo;
                fromAmino(object: _47.GroupPolicyInfoAmino): _47.GroupPolicyInfo;
                toAmino(message: _47.GroupPolicyInfo): _47.GroupPolicyInfoAmino;
                fromAminoMsg(object: _47.GroupPolicyInfoAminoMsg): _47.GroupPolicyInfo;
                toAminoMsg(message: _47.GroupPolicyInfo): _47.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _47.GroupPolicyInfoProtoMsg): _47.GroupPolicyInfo;
                toProto(message: _47.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _47.GroupPolicyInfo): _47.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _47.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Proposal;
                fromPartial(object: Partial<_47.Proposal>): _47.Proposal;
                fromAmino(object: _47.ProposalAmino): _47.Proposal;
                toAmino(message: _47.Proposal): _47.ProposalAmino;
                fromAminoMsg(object: _47.ProposalAminoMsg): _47.Proposal;
                toAminoMsg(message: _47.Proposal): _47.ProposalAminoMsg;
                fromProtoMsg(message: _47.ProposalProtoMsg): _47.Proposal;
                toProto(message: _47.Proposal): Uint8Array;
                toProtoMsg(message: _47.Proposal): _47.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _47.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.TallyResult;
                fromPartial(object: Partial<_47.TallyResult>): _47.TallyResult;
                fromAmino(object: _47.TallyResultAmino): _47.TallyResult;
                toAmino(message: _47.TallyResult): _47.TallyResultAmino;
                fromAminoMsg(object: _47.TallyResultAminoMsg): _47.TallyResult;
                toAminoMsg(message: _47.TallyResult): _47.TallyResultAminoMsg;
                fromProtoMsg(message: _47.TallyResultProtoMsg): _47.TallyResult;
                toProto(message: _47.TallyResult): Uint8Array;
                toProtoMsg(message: _47.TallyResult): _47.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _47.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Vote;
                fromPartial(object: Partial<_47.Vote>): _47.Vote;
                fromAmino(object: _47.VoteAmino): _47.Vote;
                toAmino(message: _47.Vote): _47.VoteAmino;
                fromAminoMsg(object: _47.VoteAminoMsg): _47.Vote;
                toAminoMsg(message: _47.Vote): _47.VoteAminoMsg;
                fromProtoMsg(message: _47.VoteProtoMsg): _47.Vote;
                toProto(message: _47.Vote): Uint8Array;
                toProtoMsg(message: _47.Vote): _47.VoteProtoMsg;
            };
            DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _47.ThresholdDecisionPolicy | _47.PercentageDecisionPolicy;
            DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _46.Exec;
            execToJSON(object: _46.Exec): string;
            Exec: typeof _46.Exec;
            ExecSDKType: typeof _46.Exec;
            ExecAmino: typeof _46.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _46.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgCreateGroup;
                fromPartial(object: Partial<_46.MsgCreateGroup>): _46.MsgCreateGroup;
                fromAmino(object: _46.MsgCreateGroupAmino): _46.MsgCreateGroup;
                toAmino(message: _46.MsgCreateGroup): _46.MsgCreateGroupAmino;
                fromAminoMsg(object: _46.MsgCreateGroupAminoMsg): _46.MsgCreateGroup;
                toAminoMsg(message: _46.MsgCreateGroup): _46.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _46.MsgCreateGroupProtoMsg): _46.MsgCreateGroup;
                toProto(message: _46.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _46.MsgCreateGroup): _46.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _46.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgCreateGroupResponse;
                fromPartial(object: Partial<_46.MsgCreateGroupResponse>): _46.MsgCreateGroupResponse;
                fromAmino(object: _46.MsgCreateGroupResponseAmino): _46.MsgCreateGroupResponse;
                toAmino(message: _46.MsgCreateGroupResponse): _46.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _46.MsgCreateGroupResponseAminoMsg): _46.MsgCreateGroupResponse;
                toAminoMsg(message: _46.MsgCreateGroupResponse): _46.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _46.MsgCreateGroupResponseProtoMsg): _46.MsgCreateGroupResponse;
                toProto(message: _46.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _46.MsgCreateGroupResponse): _46.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _46.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_46.MsgUpdateGroupMembers>): _46.MsgUpdateGroupMembers;
                fromAmino(object: _46.MsgUpdateGroupMembersAmino): _46.MsgUpdateGroupMembers;
                toAmino(message: _46.MsgUpdateGroupMembers): _46.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupMembersAminoMsg): _46.MsgUpdateGroupMembers;
                toAminoMsg(message: _46.MsgUpdateGroupMembers): _46.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupMembersProtoMsg): _46.MsgUpdateGroupMembers;
                toProto(message: _46.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupMembers): _46.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _46.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_46.MsgUpdateGroupMembersResponse>): _46.MsgUpdateGroupMembersResponse;
                fromAmino(_: _46.MsgUpdateGroupMembersResponseAmino): _46.MsgUpdateGroupMembersResponse;
                toAmino(_: _46.MsgUpdateGroupMembersResponse): _46.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupMembersResponseAminoMsg): _46.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _46.MsgUpdateGroupMembersResponse): _46.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupMembersResponseProtoMsg): _46.MsgUpdateGroupMembersResponse;
                toProto(message: _46.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupMembersResponse): _46.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _46.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_46.MsgUpdateGroupAdmin>): _46.MsgUpdateGroupAdmin;
                fromAmino(object: _46.MsgUpdateGroupAdminAmino): _46.MsgUpdateGroupAdmin;
                toAmino(message: _46.MsgUpdateGroupAdmin): _46.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupAdminAminoMsg): _46.MsgUpdateGroupAdmin;
                toAminoMsg(message: _46.MsgUpdateGroupAdmin): _46.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupAdminProtoMsg): _46.MsgUpdateGroupAdmin;
                toProto(message: _46.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupAdmin): _46.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _46.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_46.MsgUpdateGroupAdminResponse>): _46.MsgUpdateGroupAdminResponse;
                fromAmino(_: _46.MsgUpdateGroupAdminResponseAmino): _46.MsgUpdateGroupAdminResponse;
                toAmino(_: _46.MsgUpdateGroupAdminResponse): _46.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupAdminResponseAminoMsg): _46.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _46.MsgUpdateGroupAdminResponse): _46.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupAdminResponseProtoMsg): _46.MsgUpdateGroupAdminResponse;
                toProto(message: _46.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupAdminResponse): _46.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _46.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_46.MsgUpdateGroupMetadata>): _46.MsgUpdateGroupMetadata;
                fromAmino(object: _46.MsgUpdateGroupMetadataAmino): _46.MsgUpdateGroupMetadata;
                toAmino(message: _46.MsgUpdateGroupMetadata): _46.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupMetadataAminoMsg): _46.MsgUpdateGroupMetadata;
                toAminoMsg(message: _46.MsgUpdateGroupMetadata): _46.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupMetadataProtoMsg): _46.MsgUpdateGroupMetadata;
                toProto(message: _46.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupMetadata): _46.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _46.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_46.MsgUpdateGroupMetadataResponse>): _46.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _46.MsgUpdateGroupMetadataResponseAmino): _46.MsgUpdateGroupMetadataResponse;
                toAmino(_: _46.MsgUpdateGroupMetadataResponse): _46.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupMetadataResponseAminoMsg): _46.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _46.MsgUpdateGroupMetadataResponse): _46.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupMetadataResponseProtoMsg): _46.MsgUpdateGroupMetadataResponse;
                toProto(message: _46.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupMetadataResponse): _46.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _46.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_46.MsgCreateGroupPolicy>): _46.MsgCreateGroupPolicy;
                fromAmino(object: _46.MsgCreateGroupPolicyAmino): _46.MsgCreateGroupPolicy;
                toAmino(message: _46.MsgCreateGroupPolicy): _46.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _46.MsgCreateGroupPolicyAminoMsg): _46.MsgCreateGroupPolicy;
                toAminoMsg(message: _46.MsgCreateGroupPolicy): _46.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _46.MsgCreateGroupPolicyProtoMsg): _46.MsgCreateGroupPolicy;
                toProto(message: _46.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _46.MsgCreateGroupPolicy): _46.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _46.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_46.MsgCreateGroupPolicyResponse>): _46.MsgCreateGroupPolicyResponse;
                fromAmino(object: _46.MsgCreateGroupPolicyResponseAmino): _46.MsgCreateGroupPolicyResponse;
                toAmino(message: _46.MsgCreateGroupPolicyResponse): _46.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _46.MsgCreateGroupPolicyResponseAminoMsg): _46.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _46.MsgCreateGroupPolicyResponse): _46.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _46.MsgCreateGroupPolicyResponseProtoMsg): _46.MsgCreateGroupPolicyResponse;
                toProto(message: _46.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _46.MsgCreateGroupPolicyResponse): _46.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _46.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_46.MsgUpdateGroupPolicyAdmin>): _46.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _46.MsgUpdateGroupPolicyAdminAmino): _46.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _46.MsgUpdateGroupPolicyAdmin): _46.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupPolicyAdminAminoMsg): _46.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _46.MsgUpdateGroupPolicyAdmin): _46.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupPolicyAdminProtoMsg): _46.MsgUpdateGroupPolicyAdmin;
                toProto(message: _46.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupPolicyAdmin): _46.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _46.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_46.MsgUpdateGroupPolicyAdminResponse>): _46.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _46.MsgUpdateGroupPolicyAdminResponseAmino): _46.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _46.MsgUpdateGroupPolicyAdminResponse): _46.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupPolicyAdminResponseAminoMsg): _46.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _46.MsgUpdateGroupPolicyAdminResponse): _46.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupPolicyAdminResponseProtoMsg): _46.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _46.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupPolicyAdminResponse): _46.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _46.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_46.MsgCreateGroupWithPolicy>): _46.MsgCreateGroupWithPolicy;
                fromAmino(object: _46.MsgCreateGroupWithPolicyAmino): _46.MsgCreateGroupWithPolicy;
                toAmino(message: _46.MsgCreateGroupWithPolicy): _46.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _46.MsgCreateGroupWithPolicyAminoMsg): _46.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _46.MsgCreateGroupWithPolicy): _46.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _46.MsgCreateGroupWithPolicyProtoMsg): _46.MsgCreateGroupWithPolicy;
                toProto(message: _46.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _46.MsgCreateGroupWithPolicy): _46.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _46.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_46.MsgCreateGroupWithPolicyResponse>): _46.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _46.MsgCreateGroupWithPolicyResponseAmino): _46.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _46.MsgCreateGroupWithPolicyResponse): _46.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _46.MsgCreateGroupWithPolicyResponseAminoMsg): _46.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _46.MsgCreateGroupWithPolicyResponse): _46.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _46.MsgCreateGroupWithPolicyResponseProtoMsg): _46.MsgCreateGroupWithPolicyResponse;
                toProto(message: _46.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _46.MsgCreateGroupWithPolicyResponse): _46.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _46.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_46.MsgUpdateGroupPolicyDecisionPolicy>): _46.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _46.MsgUpdateGroupPolicyDecisionPolicyAmino): _46.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _46.MsgUpdateGroupPolicyDecisionPolicy): _46.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _46.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _46.MsgUpdateGroupPolicyDecisionPolicy): _46.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _46.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _46.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupPolicyDecisionPolicy): _46.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _46.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_46.MsgUpdateGroupPolicyDecisionPolicyResponse>): _46.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _46.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _46.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _46.MsgUpdateGroupPolicyDecisionPolicyResponse): _46.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _46.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _46.MsgUpdateGroupPolicyDecisionPolicyResponse): _46.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _46.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _46.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupPolicyDecisionPolicyResponse): _46.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _46.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_46.MsgUpdateGroupPolicyMetadata>): _46.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _46.MsgUpdateGroupPolicyMetadataAmino): _46.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _46.MsgUpdateGroupPolicyMetadata): _46.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupPolicyMetadataAminoMsg): _46.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _46.MsgUpdateGroupPolicyMetadata): _46.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupPolicyMetadataProtoMsg): _46.MsgUpdateGroupPolicyMetadata;
                toProto(message: _46.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupPolicyMetadata): _46.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _46.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_46.MsgUpdateGroupPolicyMetadataResponse>): _46.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _46.MsgUpdateGroupPolicyMetadataResponseAmino): _46.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _46.MsgUpdateGroupPolicyMetadataResponse): _46.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _46.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _46.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _46.MsgUpdateGroupPolicyMetadataResponse): _46.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _46.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _46.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUpdateGroupPolicyMetadataResponse): _46.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _46.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgSubmitProposal;
                fromPartial(object: Partial<_46.MsgSubmitProposal>): _46.MsgSubmitProposal;
                fromAmino(object: _46.MsgSubmitProposalAmino): _46.MsgSubmitProposal;
                toAmino(message: _46.MsgSubmitProposal): _46.MsgSubmitProposalAmino;
                fromAminoMsg(object: _46.MsgSubmitProposalAminoMsg): _46.MsgSubmitProposal;
                toAminoMsg(message: _46.MsgSubmitProposal): _46.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _46.MsgSubmitProposalProtoMsg): _46.MsgSubmitProposal;
                toProto(message: _46.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _46.MsgSubmitProposal): _46.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _46.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_46.MsgSubmitProposalResponse>): _46.MsgSubmitProposalResponse;
                fromAmino(object: _46.MsgSubmitProposalResponseAmino): _46.MsgSubmitProposalResponse;
                toAmino(message: _46.MsgSubmitProposalResponse): _46.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _46.MsgSubmitProposalResponseAminoMsg): _46.MsgSubmitProposalResponse;
                toAminoMsg(message: _46.MsgSubmitProposalResponse): _46.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _46.MsgSubmitProposalResponseProtoMsg): _46.MsgSubmitProposalResponse;
                toProto(message: _46.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _46.MsgSubmitProposalResponse): _46.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _46.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgWithdrawProposal;
                fromPartial(object: Partial<_46.MsgWithdrawProposal>): _46.MsgWithdrawProposal;
                fromAmino(object: _46.MsgWithdrawProposalAmino): _46.MsgWithdrawProposal;
                toAmino(message: _46.MsgWithdrawProposal): _46.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _46.MsgWithdrawProposalAminoMsg): _46.MsgWithdrawProposal;
                toAminoMsg(message: _46.MsgWithdrawProposal): _46.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _46.MsgWithdrawProposalProtoMsg): _46.MsgWithdrawProposal;
                toProto(message: _46.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _46.MsgWithdrawProposal): _46.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _46.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_46.MsgWithdrawProposalResponse>): _46.MsgWithdrawProposalResponse;
                fromAmino(_: _46.MsgWithdrawProposalResponseAmino): _46.MsgWithdrawProposalResponse;
                toAmino(_: _46.MsgWithdrawProposalResponse): _46.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _46.MsgWithdrawProposalResponseAminoMsg): _46.MsgWithdrawProposalResponse;
                toAminoMsg(message: _46.MsgWithdrawProposalResponse): _46.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _46.MsgWithdrawProposalResponseProtoMsg): _46.MsgWithdrawProposalResponse;
                toProto(message: _46.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _46.MsgWithdrawProposalResponse): _46.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _46.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgVote;
                fromPartial(object: Partial<_46.MsgVote>): _46.MsgVote;
                fromAmino(object: _46.MsgVoteAmino): _46.MsgVote;
                toAmino(message: _46.MsgVote): _46.MsgVoteAmino;
                fromAminoMsg(object: _46.MsgVoteAminoMsg): _46.MsgVote;
                toAminoMsg(message: _46.MsgVote): _46.MsgVoteAminoMsg;
                fromProtoMsg(message: _46.MsgVoteProtoMsg): _46.MsgVote;
                toProto(message: _46.MsgVote): Uint8Array;
                toProtoMsg(message: _46.MsgVote): _46.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _46.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgVoteResponse;
                fromPartial(_: Partial<_46.MsgVoteResponse>): _46.MsgVoteResponse;
                fromAmino(_: _46.MsgVoteResponseAmino): _46.MsgVoteResponse;
                toAmino(_: _46.MsgVoteResponse): _46.MsgVoteResponseAmino;
                fromAminoMsg(object: _46.MsgVoteResponseAminoMsg): _46.MsgVoteResponse;
                toAminoMsg(message: _46.MsgVoteResponse): _46.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _46.MsgVoteResponseProtoMsg): _46.MsgVoteResponse;
                toProto(message: _46.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _46.MsgVoteResponse): _46.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _46.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgExec;
                fromPartial(object: Partial<_46.MsgExec>): _46.MsgExec;
                fromAmino(object: _46.MsgExecAmino): _46.MsgExec;
                toAmino(message: _46.MsgExec): _46.MsgExecAmino;
                fromAminoMsg(object: _46.MsgExecAminoMsg): _46.MsgExec;
                toAminoMsg(message: _46.MsgExec): _46.MsgExecAminoMsg;
                fromProtoMsg(message: _46.MsgExecProtoMsg): _46.MsgExec;
                toProto(message: _46.MsgExec): Uint8Array;
                toProtoMsg(message: _46.MsgExec): _46.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _46.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgExecResponse;
                fromPartial(object: Partial<_46.MsgExecResponse>): _46.MsgExecResponse;
                fromAmino(object: _46.MsgExecResponseAmino): _46.MsgExecResponse;
                toAmino(message: _46.MsgExecResponse): _46.MsgExecResponseAmino;
                fromAminoMsg(object: _46.MsgExecResponseAminoMsg): _46.MsgExecResponse;
                toAminoMsg(message: _46.MsgExecResponse): _46.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _46.MsgExecResponseProtoMsg): _46.MsgExecResponse;
                toProto(message: _46.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _46.MsgExecResponse): _46.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _46.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgLeaveGroup;
                fromPartial(object: Partial<_46.MsgLeaveGroup>): _46.MsgLeaveGroup;
                fromAmino(object: _46.MsgLeaveGroupAmino): _46.MsgLeaveGroup;
                toAmino(message: _46.MsgLeaveGroup): _46.MsgLeaveGroupAmino;
                fromAminoMsg(object: _46.MsgLeaveGroupAminoMsg): _46.MsgLeaveGroup;
                toAminoMsg(message: _46.MsgLeaveGroup): _46.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _46.MsgLeaveGroupProtoMsg): _46.MsgLeaveGroup;
                toProto(message: _46.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _46.MsgLeaveGroup): _46.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _46.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_46.MsgLeaveGroupResponse>): _46.MsgLeaveGroupResponse;
                fromAmino(_: _46.MsgLeaveGroupResponseAmino): _46.MsgLeaveGroupResponse;
                toAmino(_: _46.MsgLeaveGroupResponse): _46.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _46.MsgLeaveGroupResponseAminoMsg): _46.MsgLeaveGroupResponse;
                toAminoMsg(message: _46.MsgLeaveGroupResponse): _46.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _46.MsgLeaveGroupResponseProtoMsg): _46.MsgLeaveGroupResponse;
                toProto(message: _46.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _46.MsgLeaveGroupResponse): _46.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupInfoRequest;
                fromPartial(object: Partial<_45.QueryGroupInfoRequest>): _45.QueryGroupInfoRequest;
                fromAmino(object: _45.QueryGroupInfoRequestAmino): _45.QueryGroupInfoRequest;
                toAmino(message: _45.QueryGroupInfoRequest): _45.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _45.QueryGroupInfoRequestAminoMsg): _45.QueryGroupInfoRequest;
                toAminoMsg(message: _45.QueryGroupInfoRequest): _45.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupInfoRequestProtoMsg): _45.QueryGroupInfoRequest;
                toProto(message: _45.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupInfoRequest): _45.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupInfoResponse;
                fromPartial(object: Partial<_45.QueryGroupInfoResponse>): _45.QueryGroupInfoResponse;
                fromAmino(object: _45.QueryGroupInfoResponseAmino): _45.QueryGroupInfoResponse;
                toAmino(message: _45.QueryGroupInfoResponse): _45.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _45.QueryGroupInfoResponseAminoMsg): _45.QueryGroupInfoResponse;
                toAminoMsg(message: _45.QueryGroupInfoResponse): _45.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupInfoResponseProtoMsg): _45.QueryGroupInfoResponse;
                toProto(message: _45.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupInfoResponse): _45.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_45.QueryGroupPolicyInfoRequest>): _45.QueryGroupPolicyInfoRequest;
                fromAmino(object: _45.QueryGroupPolicyInfoRequestAmino): _45.QueryGroupPolicyInfoRequest;
                toAmino(message: _45.QueryGroupPolicyInfoRequest): _45.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _45.QueryGroupPolicyInfoRequestAminoMsg): _45.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _45.QueryGroupPolicyInfoRequest): _45.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupPolicyInfoRequestProtoMsg): _45.QueryGroupPolicyInfoRequest;
                toProto(message: _45.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupPolicyInfoRequest): _45.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_45.QueryGroupPolicyInfoResponse>): _45.QueryGroupPolicyInfoResponse;
                fromAmino(object: _45.QueryGroupPolicyInfoResponseAmino): _45.QueryGroupPolicyInfoResponse;
                toAmino(message: _45.QueryGroupPolicyInfoResponse): _45.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _45.QueryGroupPolicyInfoResponseAminoMsg): _45.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _45.QueryGroupPolicyInfoResponse): _45.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupPolicyInfoResponseProtoMsg): _45.QueryGroupPolicyInfoResponse;
                toProto(message: _45.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupPolicyInfoResponse): _45.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupMembersRequest;
                fromPartial(object: Partial<_45.QueryGroupMembersRequest>): _45.QueryGroupMembersRequest;
                fromAmino(object: _45.QueryGroupMembersRequestAmino): _45.QueryGroupMembersRequest;
                toAmino(message: _45.QueryGroupMembersRequest): _45.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _45.QueryGroupMembersRequestAminoMsg): _45.QueryGroupMembersRequest;
                toAminoMsg(message: _45.QueryGroupMembersRequest): _45.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupMembersRequestProtoMsg): _45.QueryGroupMembersRequest;
                toProto(message: _45.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupMembersRequest): _45.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupMembersResponse;
                fromPartial(object: Partial<_45.QueryGroupMembersResponse>): _45.QueryGroupMembersResponse;
                fromAmino(object: _45.QueryGroupMembersResponseAmino): _45.QueryGroupMembersResponse;
                toAmino(message: _45.QueryGroupMembersResponse): _45.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _45.QueryGroupMembersResponseAminoMsg): _45.QueryGroupMembersResponse;
                toAminoMsg(message: _45.QueryGroupMembersResponse): _45.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupMembersResponseProtoMsg): _45.QueryGroupMembersResponse;
                toProto(message: _45.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupMembersResponse): _45.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_45.QueryGroupsByAdminRequest>): _45.QueryGroupsByAdminRequest;
                fromAmino(object: _45.QueryGroupsByAdminRequestAmino): _45.QueryGroupsByAdminRequest;
                toAmino(message: _45.QueryGroupsByAdminRequest): _45.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _45.QueryGroupsByAdminRequestAminoMsg): _45.QueryGroupsByAdminRequest;
                toAminoMsg(message: _45.QueryGroupsByAdminRequest): _45.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupsByAdminRequestProtoMsg): _45.QueryGroupsByAdminRequest;
                toProto(message: _45.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupsByAdminRequest): _45.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_45.QueryGroupsByAdminResponse>): _45.QueryGroupsByAdminResponse;
                fromAmino(object: _45.QueryGroupsByAdminResponseAmino): _45.QueryGroupsByAdminResponse;
                toAmino(message: _45.QueryGroupsByAdminResponse): _45.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _45.QueryGroupsByAdminResponseAminoMsg): _45.QueryGroupsByAdminResponse;
                toAminoMsg(message: _45.QueryGroupsByAdminResponse): _45.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupsByAdminResponseProtoMsg): _45.QueryGroupsByAdminResponse;
                toProto(message: _45.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupsByAdminResponse): _45.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_45.QueryGroupPoliciesByGroupRequest>): _45.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _45.QueryGroupPoliciesByGroupRequestAmino): _45.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _45.QueryGroupPoliciesByGroupRequest): _45.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _45.QueryGroupPoliciesByGroupRequestAminoMsg): _45.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _45.QueryGroupPoliciesByGroupRequest): _45.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupPoliciesByGroupRequestProtoMsg): _45.QueryGroupPoliciesByGroupRequest;
                toProto(message: _45.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupPoliciesByGroupRequest): _45.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_45.QueryGroupPoliciesByGroupResponse>): _45.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _45.QueryGroupPoliciesByGroupResponseAmino): _45.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _45.QueryGroupPoliciesByGroupResponse): _45.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _45.QueryGroupPoliciesByGroupResponseAminoMsg): _45.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _45.QueryGroupPoliciesByGroupResponse): _45.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupPoliciesByGroupResponseProtoMsg): _45.QueryGroupPoliciesByGroupResponse;
                toProto(message: _45.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupPoliciesByGroupResponse): _45.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_45.QueryGroupPoliciesByAdminRequest>): _45.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _45.QueryGroupPoliciesByAdminRequestAmino): _45.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _45.QueryGroupPoliciesByAdminRequest): _45.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _45.QueryGroupPoliciesByAdminRequestAminoMsg): _45.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _45.QueryGroupPoliciesByAdminRequest): _45.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupPoliciesByAdminRequestProtoMsg): _45.QueryGroupPoliciesByAdminRequest;
                toProto(message: _45.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupPoliciesByAdminRequest): _45.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_45.QueryGroupPoliciesByAdminResponse>): _45.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _45.QueryGroupPoliciesByAdminResponseAmino): _45.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _45.QueryGroupPoliciesByAdminResponse): _45.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _45.QueryGroupPoliciesByAdminResponseAminoMsg): _45.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _45.QueryGroupPoliciesByAdminResponse): _45.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupPoliciesByAdminResponseProtoMsg): _45.QueryGroupPoliciesByAdminResponse;
                toProto(message: _45.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupPoliciesByAdminResponse): _45.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _45.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryProposalRequest;
                fromPartial(object: Partial<_45.QueryProposalRequest>): _45.QueryProposalRequest;
                fromAmino(object: _45.QueryProposalRequestAmino): _45.QueryProposalRequest;
                toAmino(message: _45.QueryProposalRequest): _45.QueryProposalRequestAmino;
                fromAminoMsg(object: _45.QueryProposalRequestAminoMsg): _45.QueryProposalRequest;
                toAminoMsg(message: _45.QueryProposalRequest): _45.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _45.QueryProposalRequestProtoMsg): _45.QueryProposalRequest;
                toProto(message: _45.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _45.QueryProposalRequest): _45.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _45.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryProposalResponse;
                fromPartial(object: Partial<_45.QueryProposalResponse>): _45.QueryProposalResponse;
                fromAmino(object: _45.QueryProposalResponseAmino): _45.QueryProposalResponse;
                toAmino(message: _45.QueryProposalResponse): _45.QueryProposalResponseAmino;
                fromAminoMsg(object: _45.QueryProposalResponseAminoMsg): _45.QueryProposalResponse;
                toAminoMsg(message: _45.QueryProposalResponse): _45.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _45.QueryProposalResponseProtoMsg): _45.QueryProposalResponse;
                toProto(message: _45.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _45.QueryProposalResponse): _45.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _45.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_45.QueryProposalsByGroupPolicyRequest>): _45.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _45.QueryProposalsByGroupPolicyRequestAmino): _45.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _45.QueryProposalsByGroupPolicyRequest): _45.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _45.QueryProposalsByGroupPolicyRequestAminoMsg): _45.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _45.QueryProposalsByGroupPolicyRequest): _45.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _45.QueryProposalsByGroupPolicyRequestProtoMsg): _45.QueryProposalsByGroupPolicyRequest;
                toProto(message: _45.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _45.QueryProposalsByGroupPolicyRequest): _45.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _45.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_45.QueryProposalsByGroupPolicyResponse>): _45.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _45.QueryProposalsByGroupPolicyResponseAmino): _45.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _45.QueryProposalsByGroupPolicyResponse): _45.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _45.QueryProposalsByGroupPolicyResponseAminoMsg): _45.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _45.QueryProposalsByGroupPolicyResponse): _45.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _45.QueryProposalsByGroupPolicyResponseProtoMsg): _45.QueryProposalsByGroupPolicyResponse;
                toProto(message: _45.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _45.QueryProposalsByGroupPolicyResponse): _45.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _45.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_45.QueryVoteByProposalVoterRequest>): _45.QueryVoteByProposalVoterRequest;
                fromAmino(object: _45.QueryVoteByProposalVoterRequestAmino): _45.QueryVoteByProposalVoterRequest;
                toAmino(message: _45.QueryVoteByProposalVoterRequest): _45.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _45.QueryVoteByProposalVoterRequestAminoMsg): _45.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _45.QueryVoteByProposalVoterRequest): _45.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _45.QueryVoteByProposalVoterRequestProtoMsg): _45.QueryVoteByProposalVoterRequest;
                toProto(message: _45.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _45.QueryVoteByProposalVoterRequest): _45.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _45.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_45.QueryVoteByProposalVoterResponse>): _45.QueryVoteByProposalVoterResponse;
                fromAmino(object: _45.QueryVoteByProposalVoterResponseAmino): _45.QueryVoteByProposalVoterResponse;
                toAmino(message: _45.QueryVoteByProposalVoterResponse): _45.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _45.QueryVoteByProposalVoterResponseAminoMsg): _45.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _45.QueryVoteByProposalVoterResponse): _45.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _45.QueryVoteByProposalVoterResponseProtoMsg): _45.QueryVoteByProposalVoterResponse;
                toProto(message: _45.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _45.QueryVoteByProposalVoterResponse): _45.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _45.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_45.QueryVotesByProposalRequest>): _45.QueryVotesByProposalRequest;
                fromAmino(object: _45.QueryVotesByProposalRequestAmino): _45.QueryVotesByProposalRequest;
                toAmino(message: _45.QueryVotesByProposalRequest): _45.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _45.QueryVotesByProposalRequestAminoMsg): _45.QueryVotesByProposalRequest;
                toAminoMsg(message: _45.QueryVotesByProposalRequest): _45.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _45.QueryVotesByProposalRequestProtoMsg): _45.QueryVotesByProposalRequest;
                toProto(message: _45.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _45.QueryVotesByProposalRequest): _45.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _45.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_45.QueryVotesByProposalResponse>): _45.QueryVotesByProposalResponse;
                fromAmino(object: _45.QueryVotesByProposalResponseAmino): _45.QueryVotesByProposalResponse;
                toAmino(message: _45.QueryVotesByProposalResponse): _45.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _45.QueryVotesByProposalResponseAminoMsg): _45.QueryVotesByProposalResponse;
                toAminoMsg(message: _45.QueryVotesByProposalResponse): _45.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _45.QueryVotesByProposalResponseProtoMsg): _45.QueryVotesByProposalResponse;
                toProto(message: _45.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _45.QueryVotesByProposalResponse): _45.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _45.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_45.QueryVotesByVoterRequest>): _45.QueryVotesByVoterRequest;
                fromAmino(object: _45.QueryVotesByVoterRequestAmino): _45.QueryVotesByVoterRequest;
                toAmino(message: _45.QueryVotesByVoterRequest): _45.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _45.QueryVotesByVoterRequestAminoMsg): _45.QueryVotesByVoterRequest;
                toAminoMsg(message: _45.QueryVotesByVoterRequest): _45.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _45.QueryVotesByVoterRequestProtoMsg): _45.QueryVotesByVoterRequest;
                toProto(message: _45.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _45.QueryVotesByVoterRequest): _45.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _45.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_45.QueryVotesByVoterResponse>): _45.QueryVotesByVoterResponse;
                fromAmino(object: _45.QueryVotesByVoterResponseAmino): _45.QueryVotesByVoterResponse;
                toAmino(message: _45.QueryVotesByVoterResponse): _45.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _45.QueryVotesByVoterResponseAminoMsg): _45.QueryVotesByVoterResponse;
                toAminoMsg(message: _45.QueryVotesByVoterResponse): _45.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _45.QueryVotesByVoterResponseProtoMsg): _45.QueryVotesByVoterResponse;
                toProto(message: _45.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _45.QueryVotesByVoterResponse): _45.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_45.QueryGroupsByMemberRequest>): _45.QueryGroupsByMemberRequest;
                fromAmino(object: _45.QueryGroupsByMemberRequestAmino): _45.QueryGroupsByMemberRequest;
                toAmino(message: _45.QueryGroupsByMemberRequest): _45.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _45.QueryGroupsByMemberRequestAminoMsg): _45.QueryGroupsByMemberRequest;
                toAminoMsg(message: _45.QueryGroupsByMemberRequest): _45.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _45.QueryGroupsByMemberRequestProtoMsg): _45.QueryGroupsByMemberRequest;
                toProto(message: _45.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupsByMemberRequest): _45.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_45.QueryGroupsByMemberResponse>): _45.QueryGroupsByMemberResponse;
                fromAmino(object: _45.QueryGroupsByMemberResponseAmino): _45.QueryGroupsByMemberResponse;
                toAmino(message: _45.QueryGroupsByMemberResponse): _45.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _45.QueryGroupsByMemberResponseAminoMsg): _45.QueryGroupsByMemberResponse;
                toAminoMsg(message: _45.QueryGroupsByMemberResponse): _45.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _45.QueryGroupsByMemberResponseProtoMsg): _45.QueryGroupsByMemberResponse;
                toProto(message: _45.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupsByMemberResponse): _45.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _45.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryTallyResultRequest;
                fromPartial(object: Partial<_45.QueryTallyResultRequest>): _45.QueryTallyResultRequest;
                fromAmino(object: _45.QueryTallyResultRequestAmino): _45.QueryTallyResultRequest;
                toAmino(message: _45.QueryTallyResultRequest): _45.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _45.QueryTallyResultRequestAminoMsg): _45.QueryTallyResultRequest;
                toAminoMsg(message: _45.QueryTallyResultRequest): _45.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _45.QueryTallyResultRequestProtoMsg): _45.QueryTallyResultRequest;
                toProto(message: _45.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _45.QueryTallyResultRequest): _45.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _45.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.QueryTallyResultResponse;
                fromPartial(object: Partial<_45.QueryTallyResultResponse>): _45.QueryTallyResultResponse;
                fromAmino(object: _45.QueryTallyResultResponseAmino): _45.QueryTallyResultResponse;
                toAmino(message: _45.QueryTallyResultResponse): _45.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _45.QueryTallyResultResponseAminoMsg): _45.QueryTallyResultResponse;
                toAminoMsg(message: _45.QueryTallyResultResponse): _45.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _45.QueryTallyResultResponseProtoMsg): _45.QueryTallyResultResponse;
                toProto(message: _45.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _45.QueryTallyResultResponse): _45.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _43.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventCreateGroup;
                fromPartial(object: Partial<_43.EventCreateGroup>): _43.EventCreateGroup;
                fromAmino(object: _43.EventCreateGroupAmino): _43.EventCreateGroup;
                toAmino(message: _43.EventCreateGroup): _43.EventCreateGroupAmino;
                fromAminoMsg(object: _43.EventCreateGroupAminoMsg): _43.EventCreateGroup;
                toAminoMsg(message: _43.EventCreateGroup): _43.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _43.EventCreateGroupProtoMsg): _43.EventCreateGroup;
                toProto(message: _43.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _43.EventCreateGroup): _43.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _43.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventUpdateGroup;
                fromPartial(object: Partial<_43.EventUpdateGroup>): _43.EventUpdateGroup;
                fromAmino(object: _43.EventUpdateGroupAmino): _43.EventUpdateGroup;
                toAmino(message: _43.EventUpdateGroup): _43.EventUpdateGroupAmino;
                fromAminoMsg(object: _43.EventUpdateGroupAminoMsg): _43.EventUpdateGroup;
                toAminoMsg(message: _43.EventUpdateGroup): _43.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _43.EventUpdateGroupProtoMsg): _43.EventUpdateGroup;
                toProto(message: _43.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _43.EventUpdateGroup): _43.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _43.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventCreateGroupPolicy;
                fromPartial(object: Partial<_43.EventCreateGroupPolicy>): _43.EventCreateGroupPolicy;
                fromAmino(object: _43.EventCreateGroupPolicyAmino): _43.EventCreateGroupPolicy;
                toAmino(message: _43.EventCreateGroupPolicy): _43.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _43.EventCreateGroupPolicyAminoMsg): _43.EventCreateGroupPolicy;
                toAminoMsg(message: _43.EventCreateGroupPolicy): _43.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _43.EventCreateGroupPolicyProtoMsg): _43.EventCreateGroupPolicy;
                toProto(message: _43.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _43.EventCreateGroupPolicy): _43.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _43.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_43.EventUpdateGroupPolicy>): _43.EventUpdateGroupPolicy;
                fromAmino(object: _43.EventUpdateGroupPolicyAmino): _43.EventUpdateGroupPolicy;
                toAmino(message: _43.EventUpdateGroupPolicy): _43.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _43.EventUpdateGroupPolicyAminoMsg): _43.EventUpdateGroupPolicy;
                toAminoMsg(message: _43.EventUpdateGroupPolicy): _43.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _43.EventUpdateGroupPolicyProtoMsg): _43.EventUpdateGroupPolicy;
                toProto(message: _43.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _43.EventUpdateGroupPolicy): _43.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _43.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventSubmitProposal;
                fromPartial(object: Partial<_43.EventSubmitProposal>): _43.EventSubmitProposal;
                fromAmino(object: _43.EventSubmitProposalAmino): _43.EventSubmitProposal;
                toAmino(message: _43.EventSubmitProposal): _43.EventSubmitProposalAmino;
                fromAminoMsg(object: _43.EventSubmitProposalAminoMsg): _43.EventSubmitProposal;
                toAminoMsg(message: _43.EventSubmitProposal): _43.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _43.EventSubmitProposalProtoMsg): _43.EventSubmitProposal;
                toProto(message: _43.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _43.EventSubmitProposal): _43.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _43.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventWithdrawProposal;
                fromPartial(object: Partial<_43.EventWithdrawProposal>): _43.EventWithdrawProposal;
                fromAmino(object: _43.EventWithdrawProposalAmino): _43.EventWithdrawProposal;
                toAmino(message: _43.EventWithdrawProposal): _43.EventWithdrawProposalAmino;
                fromAminoMsg(object: _43.EventWithdrawProposalAminoMsg): _43.EventWithdrawProposal;
                toAminoMsg(message: _43.EventWithdrawProposal): _43.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _43.EventWithdrawProposalProtoMsg): _43.EventWithdrawProposal;
                toProto(message: _43.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _43.EventWithdrawProposal): _43.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _43.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventVote;
                fromPartial(object: Partial<_43.EventVote>): _43.EventVote;
                fromAmino(object: _43.EventVoteAmino): _43.EventVote;
                toAmino(message: _43.EventVote): _43.EventVoteAmino;
                fromAminoMsg(object: _43.EventVoteAminoMsg): _43.EventVote;
                toAminoMsg(message: _43.EventVote): _43.EventVoteAminoMsg;
                fromProtoMsg(message: _43.EventVoteProtoMsg): _43.EventVote;
                toProto(message: _43.EventVote): Uint8Array;
                toProtoMsg(message: _43.EventVote): _43.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _43.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventExec;
                fromPartial(object: Partial<_43.EventExec>): _43.EventExec;
                fromAmino(object: _43.EventExecAmino): _43.EventExec;
                toAmino(message: _43.EventExec): _43.EventExecAmino;
                fromAminoMsg(object: _43.EventExecAminoMsg): _43.EventExec;
                toAminoMsg(message: _43.EventExec): _43.EventExecAminoMsg;
                fromProtoMsg(message: _43.EventExecProtoMsg): _43.EventExec;
                toProto(message: _43.EventExec): Uint8Array;
                toProtoMsg(message: _43.EventExec): _43.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _43.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.EventLeaveGroup;
                fromPartial(object: Partial<_43.EventLeaveGroup>): _43.EventLeaveGroup;
                fromAmino(object: _43.EventLeaveGroupAmino): _43.EventLeaveGroup;
                toAmino(message: _43.EventLeaveGroup): _43.EventLeaveGroupAmino;
                fromAminoMsg(object: _43.EventLeaveGroupAminoMsg): _43.EventLeaveGroup;
                toAminoMsg(message: _43.EventLeaveGroup): _43.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _43.EventLeaveGroupProtoMsg): _43.EventLeaveGroup;
                toProto(message: _43.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _43.EventLeaveGroup): _43.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                inflation(request?: _50.QueryInflationRequest): Promise<_50.QueryInflationResponse>;
                annualProvisions(request?: _50.QueryAnnualProvisionsRequest): Promise<_50.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _50.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryParamsRequest;
                fromPartial(_: Partial<_50.QueryParamsRequest>): _50.QueryParamsRequest;
                fromAmino(_: _50.QueryParamsRequestAmino): _50.QueryParamsRequest;
                toAmino(_: _50.QueryParamsRequest): _50.QueryParamsRequestAmino;
                fromAminoMsg(object: _50.QueryParamsRequestAminoMsg): _50.QueryParamsRequest;
                toAminoMsg(message: _50.QueryParamsRequest): _50.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _50.QueryParamsRequestProtoMsg): _50.QueryParamsRequest;
                toProto(message: _50.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _50.QueryParamsRequest): _50.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _50.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryParamsResponse;
                fromPartial(object: Partial<_50.QueryParamsResponse>): _50.QueryParamsResponse;
                fromAmino(object: _50.QueryParamsResponseAmino): _50.QueryParamsResponse;
                toAmino(message: _50.QueryParamsResponse): _50.QueryParamsResponseAmino;
                fromAminoMsg(object: _50.QueryParamsResponseAminoMsg): _50.QueryParamsResponse;
                toAminoMsg(message: _50.QueryParamsResponse): _50.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _50.QueryParamsResponseProtoMsg): _50.QueryParamsResponse;
                toProto(message: _50.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _50.QueryParamsResponse): _50.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _50.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryInflationRequest;
                fromPartial(_: Partial<_50.QueryInflationRequest>): _50.QueryInflationRequest;
                fromAmino(_: _50.QueryInflationRequestAmino): _50.QueryInflationRequest;
                toAmino(_: _50.QueryInflationRequest): _50.QueryInflationRequestAmino;
                fromAminoMsg(object: _50.QueryInflationRequestAminoMsg): _50.QueryInflationRequest;
                toAminoMsg(message: _50.QueryInflationRequest): _50.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _50.QueryInflationRequestProtoMsg): _50.QueryInflationRequest;
                toProto(message: _50.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _50.QueryInflationRequest): _50.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _50.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryInflationResponse;
                fromPartial(object: Partial<_50.QueryInflationResponse>): _50.QueryInflationResponse;
                fromAmino(object: _50.QueryInflationResponseAmino): _50.QueryInflationResponse;
                toAmino(message: _50.QueryInflationResponse): _50.QueryInflationResponseAmino;
                fromAminoMsg(object: _50.QueryInflationResponseAminoMsg): _50.QueryInflationResponse;
                toAminoMsg(message: _50.QueryInflationResponse): _50.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _50.QueryInflationResponseProtoMsg): _50.QueryInflationResponse;
                toProto(message: _50.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _50.QueryInflationResponse): _50.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _50.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_50.QueryAnnualProvisionsRequest>): _50.QueryAnnualProvisionsRequest;
                fromAmino(_: _50.QueryAnnualProvisionsRequestAmino): _50.QueryAnnualProvisionsRequest;
                toAmino(_: _50.QueryAnnualProvisionsRequest): _50.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _50.QueryAnnualProvisionsRequestAminoMsg): _50.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _50.QueryAnnualProvisionsRequest): _50.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _50.QueryAnnualProvisionsRequestProtoMsg): _50.QueryAnnualProvisionsRequest;
                toProto(message: _50.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _50.QueryAnnualProvisionsRequest): _50.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _50.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_50.QueryAnnualProvisionsResponse>): _50.QueryAnnualProvisionsResponse;
                fromAmino(object: _50.QueryAnnualProvisionsResponseAmino): _50.QueryAnnualProvisionsResponse;
                toAmino(message: _50.QueryAnnualProvisionsResponse): _50.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _50.QueryAnnualProvisionsResponseAminoMsg): _50.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _50.QueryAnnualProvisionsResponse): _50.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _50.QueryAnnualProvisionsResponseProtoMsg): _50.QueryAnnualProvisionsResponse;
                toProto(message: _50.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _50.QueryAnnualProvisionsResponse): _50.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _49.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.Minter;
                fromPartial(object: Partial<_49.Minter>): _49.Minter;
                fromAmino(object: _49.MinterAmino): _49.Minter;
                toAmino(message: _49.Minter): _49.MinterAmino;
                fromAminoMsg(object: _49.MinterAminoMsg): _49.Minter;
                toAminoMsg(message: _49.Minter): _49.MinterAminoMsg;
                fromProtoMsg(message: _49.MinterProtoMsg): _49.Minter;
                toProto(message: _49.Minter): Uint8Array;
                toProtoMsg(message: _49.Minter): _49.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _49.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.Params;
                fromPartial(object: Partial<_49.Params>): _49.Params;
                fromAmino(object: _49.ParamsAmino): _49.Params;
                toAmino(message: _49.Params): _49.ParamsAmino;
                fromAminoMsg(object: _49.ParamsAminoMsg): _49.Params;
                toAminoMsg(message: _49.Params): _49.ParamsAminoMsg;
                fromProtoMsg(message: _49.ParamsProtoMsg): _49.Params;
                toProto(message: _49.Params): Uint8Array;
                toProtoMsg(message: _49.Params): _49.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _51.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.Module;
                    fromPartial(_: Partial<_51.Module>): _51.Module;
                    fromAmino(_: _51.ModuleAmino): _51.Module;
                    toAmino(_: _51.Module): _51.ModuleAmino;
                    fromAminoMsg(object: _51.ModuleAminoMsg): _51.Module;
                    toAminoMsg(message: _51.Module): _51.ModuleAminoMsg;
                    fromProtoMsg(message: _51.ModuleProtoMsg): _51.Module;
                    toProto(message: _51.Module): Uint8Array;
                    toProtoMsg(message: _51.Module): _51.ModuleProtoMsg;
                };
            };
        }
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                subspaces(request?: _53.QuerySubspacesRequest): Promise<_53.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryParamsRequest;
                fromPartial(object: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
                fromAmino(object: _53.QueryParamsRequestAmino): _53.QueryParamsRequest;
                toAmino(message: _53.QueryParamsRequest): _53.QueryParamsRequestAmino;
                fromAminoMsg(object: _53.QueryParamsRequestAminoMsg): _53.QueryParamsRequest;
                toAminoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryParamsRequestProtoMsg): _53.QueryParamsRequest;
                toProto(message: _53.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _53.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryParamsResponse;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
                fromAmino(object: _53.QueryParamsResponseAmino): _53.QueryParamsResponse;
                toAmino(message: _53.QueryParamsResponse): _53.QueryParamsResponseAmino;
                fromAminoMsg(object: _53.QueryParamsResponseAminoMsg): _53.QueryParamsResponse;
                toAminoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryParamsResponseProtoMsg): _53.QueryParamsResponse;
                toProto(message: _53.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _53.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QuerySubspacesRequest;
                fromPartial(_: Partial<_53.QuerySubspacesRequest>): _53.QuerySubspacesRequest;
                fromAmino(_: _53.QuerySubspacesRequestAmino): _53.QuerySubspacesRequest;
                toAmino(_: _53.QuerySubspacesRequest): _53.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _53.QuerySubspacesRequestAminoMsg): _53.QuerySubspacesRequest;
                toAminoMsg(message: _53.QuerySubspacesRequest): _53.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _53.QuerySubspacesRequestProtoMsg): _53.QuerySubspacesRequest;
                toProto(message: _53.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _53.QuerySubspacesRequest): _53.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _53.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QuerySubspacesResponse;
                fromPartial(object: Partial<_53.QuerySubspacesResponse>): _53.QuerySubspacesResponse;
                fromAmino(object: _53.QuerySubspacesResponseAmino): _53.QuerySubspacesResponse;
                toAmino(message: _53.QuerySubspacesResponse): _53.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _53.QuerySubspacesResponseAminoMsg): _53.QuerySubspacesResponse;
                toAminoMsg(message: _53.QuerySubspacesResponse): _53.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _53.QuerySubspacesResponseProtoMsg): _53.QuerySubspacesResponse;
                toProto(message: _53.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _53.QuerySubspacesResponse): _53.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _53.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.Subspace;
                fromPartial(object: Partial<_53.Subspace>): _53.Subspace;
                fromAmino(object: _53.SubspaceAmino): _53.Subspace;
                toAmino(message: _53.Subspace): _53.SubspaceAmino;
                fromAminoMsg(object: _53.SubspaceAminoMsg): _53.Subspace;
                toAminoMsg(message: _53.Subspace): _53.SubspaceAminoMsg;
                fromProtoMsg(message: _53.SubspaceProtoMsg): _53.Subspace;
                toProto(message: _53.Subspace): Uint8Array;
                toProtoMsg(message: _53.Subspace): _53.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _52.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ParameterChangeProposal;
                fromPartial(object: Partial<_52.ParameterChangeProposal>): _52.ParameterChangeProposal;
                fromAmino(object: _52.ParameterChangeProposalAmino): _52.ParameterChangeProposal;
                toAmino(message: _52.ParameterChangeProposal): _52.ParameterChangeProposalAmino;
                fromAminoMsg(object: _52.ParameterChangeProposalAminoMsg): _52.ParameterChangeProposal;
                toAminoMsg(message: _52.ParameterChangeProposal): _52.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _52.ParameterChangeProposalProtoMsg): _52.ParameterChangeProposal;
                toProto(message: _52.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _52.ParameterChangeProposal): _52.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _52.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ParamChange;
                fromPartial(object: Partial<_52.ParamChange>): _52.ParamChange;
                fromAmino(object: _52.ParamChangeAmino): _52.ParamChange;
                toAmino(message: _52.ParamChange): _52.ParamChangeAmino;
                fromAminoMsg(object: _52.ParamChangeAminoMsg): _52.ParamChange;
                toAminoMsg(message: _52.ParamChange): _52.ParamChangeAminoMsg;
                fromProtoMsg(message: _52.ParamChangeProtoMsg): _52.ParamChange;
                toProto(message: _52.ParamChange): Uint8Array;
                toProtoMsg(message: _52.ParamChange): _52.ParamChangeProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _164.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _56.QueryValidatorsRequest): Promise<_56.QueryValidatorsResponse>;
                validator(request: _56.QueryValidatorRequest): Promise<_56.QueryValidatorResponse>;
                validatorDelegations(request: _56.QueryValidatorDelegationsRequest): Promise<_56.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _56.QueryValidatorUnbondingDelegationsRequest): Promise<_56.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _56.QueryDelegationRequest): Promise<_56.QueryDelegationResponse>;
                unbondingDelegation(request: _56.QueryUnbondingDelegationRequest): Promise<_56.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _56.QueryDelegatorDelegationsRequest): Promise<_56.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _56.QueryDelegatorUnbondingDelegationsRequest): Promise<_56.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _56.QueryRedelegationsRequest): Promise<_56.QueryRedelegationsResponse>;
                delegatorValidators(request: _56.QueryDelegatorValidatorsRequest): Promise<_56.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _56.QueryDelegatorValidatorRequest): Promise<_56.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _56.QueryHistoricalInfoRequest): Promise<_56.QueryHistoricalInfoResponse>;
                pool(request?: _56.QueryPoolRequest): Promise<_56.QueryPoolResponse>;
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _58.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _58.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _58.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _58.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _58.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _58.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _58.MsgCreateValidator): {
                        typeUrl: string;
                        value: _58.MsgCreateValidator;
                    };
                    editValidator(value: _58.MsgEditValidator): {
                        typeUrl: string;
                        value: _58.MsgEditValidator;
                    };
                    delegate(value: _58.MsgDelegate): {
                        typeUrl: string;
                        value: _58.MsgDelegate;
                    };
                    beginRedelegate(value: _58.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _58.MsgBeginRedelegate;
                    };
                    undelegate(value: _58.MsgUndelegate): {
                        typeUrl: string;
                        value: _58.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _58.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _58.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _58.MsgCreateValidator): {
                        typeUrl: string;
                        value: _58.MsgCreateValidator;
                    };
                    editValidator(value: _58.MsgEditValidator): {
                        typeUrl: string;
                        value: _58.MsgEditValidator;
                    };
                    delegate(value: _58.MsgDelegate): {
                        typeUrl: string;
                        value: _58.MsgDelegate;
                    };
                    beginRedelegate(value: _58.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _58.MsgBeginRedelegate;
                    };
                    undelegate(value: _58.MsgUndelegate): {
                        typeUrl: string;
                        value: _58.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _58.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _58.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _58.MsgCreateValidator) => _58.MsgCreateValidatorAmino;
                    fromAmino: (object: _58.MsgCreateValidatorAmino) => _58.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _58.MsgEditValidator) => _58.MsgEditValidatorAmino;
                    fromAmino: (object: _58.MsgEditValidatorAmino) => _58.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _58.MsgDelegate) => _58.MsgDelegateAmino;
                    fromAmino: (object: _58.MsgDelegateAmino) => _58.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _58.MsgBeginRedelegate) => _58.MsgBeginRedelegateAmino;
                    fromAmino: (object: _58.MsgBeginRedelegateAmino) => _58.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _58.MsgUndelegate) => _58.MsgUndelegateAmino;
                    fromAmino: (object: _58.MsgUndelegateAmino) => _58.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _58.MsgCancelUnbondingDelegation) => _58.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _58.MsgCancelUnbondingDelegationAmino) => _58.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _58.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgCreateValidator;
                fromPartial(object: Partial<_58.MsgCreateValidator>): _58.MsgCreateValidator;
                fromAmino(object: _58.MsgCreateValidatorAmino): _58.MsgCreateValidator;
                toAmino(message: _58.MsgCreateValidator): _58.MsgCreateValidatorAmino;
                fromAminoMsg(object: _58.MsgCreateValidatorAminoMsg): _58.MsgCreateValidator;
                toAminoMsg(message: _58.MsgCreateValidator): _58.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _58.MsgCreateValidatorProtoMsg): _58.MsgCreateValidator;
                toProto(message: _58.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _58.MsgCreateValidator): _58.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _58.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_58.MsgCreateValidatorResponse>): _58.MsgCreateValidatorResponse;
                fromAmino(_: _58.MsgCreateValidatorResponseAmino): _58.MsgCreateValidatorResponse;
                toAmino(_: _58.MsgCreateValidatorResponse): _58.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _58.MsgCreateValidatorResponseAminoMsg): _58.MsgCreateValidatorResponse;
                toAminoMsg(message: _58.MsgCreateValidatorResponse): _58.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _58.MsgCreateValidatorResponseProtoMsg): _58.MsgCreateValidatorResponse;
                toProto(message: _58.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _58.MsgCreateValidatorResponse): _58.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _58.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgEditValidator;
                fromPartial(object: Partial<_58.MsgEditValidator>): _58.MsgEditValidator;
                fromAmino(object: _58.MsgEditValidatorAmino): _58.MsgEditValidator;
                toAmino(message: _58.MsgEditValidator): _58.MsgEditValidatorAmino;
                fromAminoMsg(object: _58.MsgEditValidatorAminoMsg): _58.MsgEditValidator;
                toAminoMsg(message: _58.MsgEditValidator): _58.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _58.MsgEditValidatorProtoMsg): _58.MsgEditValidator;
                toProto(message: _58.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _58.MsgEditValidator): _58.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _58.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgEditValidatorResponse;
                fromPartial(_: Partial<_58.MsgEditValidatorResponse>): _58.MsgEditValidatorResponse;
                fromAmino(_: _58.MsgEditValidatorResponseAmino): _58.MsgEditValidatorResponse;
                toAmino(_: _58.MsgEditValidatorResponse): _58.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _58.MsgEditValidatorResponseAminoMsg): _58.MsgEditValidatorResponse;
                toAminoMsg(message: _58.MsgEditValidatorResponse): _58.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _58.MsgEditValidatorResponseProtoMsg): _58.MsgEditValidatorResponse;
                toProto(message: _58.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _58.MsgEditValidatorResponse): _58.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _58.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgDelegate;
                fromPartial(object: Partial<_58.MsgDelegate>): _58.MsgDelegate;
                fromAmino(object: _58.MsgDelegateAmino): _58.MsgDelegate;
                toAmino(message: _58.MsgDelegate): _58.MsgDelegateAmino;
                fromAminoMsg(object: _58.MsgDelegateAminoMsg): _58.MsgDelegate;
                toAminoMsg(message: _58.MsgDelegate): _58.MsgDelegateAminoMsg;
                fromProtoMsg(message: _58.MsgDelegateProtoMsg): _58.MsgDelegate;
                toProto(message: _58.MsgDelegate): Uint8Array;
                toProtoMsg(message: _58.MsgDelegate): _58.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _58.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgDelegateResponse;
                fromPartial(_: Partial<_58.MsgDelegateResponse>): _58.MsgDelegateResponse;
                fromAmino(_: _58.MsgDelegateResponseAmino): _58.MsgDelegateResponse;
                toAmino(_: _58.MsgDelegateResponse): _58.MsgDelegateResponseAmino;
                fromAminoMsg(object: _58.MsgDelegateResponseAminoMsg): _58.MsgDelegateResponse;
                toAminoMsg(message: _58.MsgDelegateResponse): _58.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _58.MsgDelegateResponseProtoMsg): _58.MsgDelegateResponse;
                toProto(message: _58.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _58.MsgDelegateResponse): _58.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _58.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgBeginRedelegate;
                fromPartial(object: Partial<_58.MsgBeginRedelegate>): _58.MsgBeginRedelegate;
                fromAmino(object: _58.MsgBeginRedelegateAmino): _58.MsgBeginRedelegate;
                toAmino(message: _58.MsgBeginRedelegate): _58.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _58.MsgBeginRedelegateAminoMsg): _58.MsgBeginRedelegate;
                toAminoMsg(message: _58.MsgBeginRedelegate): _58.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _58.MsgBeginRedelegateProtoMsg): _58.MsgBeginRedelegate;
                toProto(message: _58.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _58.MsgBeginRedelegate): _58.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _58.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_58.MsgBeginRedelegateResponse>): _58.MsgBeginRedelegateResponse;
                fromAmino(object: _58.MsgBeginRedelegateResponseAmino): _58.MsgBeginRedelegateResponse;
                toAmino(message: _58.MsgBeginRedelegateResponse): _58.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _58.MsgBeginRedelegateResponseAminoMsg): _58.MsgBeginRedelegateResponse;
                toAminoMsg(message: _58.MsgBeginRedelegateResponse): _58.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _58.MsgBeginRedelegateResponseProtoMsg): _58.MsgBeginRedelegateResponse;
                toProto(message: _58.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _58.MsgBeginRedelegateResponse): _58.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _58.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgUndelegate;
                fromPartial(object: Partial<_58.MsgUndelegate>): _58.MsgUndelegate;
                fromAmino(object: _58.MsgUndelegateAmino): _58.MsgUndelegate;
                toAmino(message: _58.MsgUndelegate): _58.MsgUndelegateAmino;
                fromAminoMsg(object: _58.MsgUndelegateAminoMsg): _58.MsgUndelegate;
                toAminoMsg(message: _58.MsgUndelegate): _58.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _58.MsgUndelegateProtoMsg): _58.MsgUndelegate;
                toProto(message: _58.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _58.MsgUndelegate): _58.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _58.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgUndelegateResponse;
                fromPartial(object: Partial<_58.MsgUndelegateResponse>): _58.MsgUndelegateResponse;
                fromAmino(object: _58.MsgUndelegateResponseAmino): _58.MsgUndelegateResponse;
                toAmino(message: _58.MsgUndelegateResponse): _58.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _58.MsgUndelegateResponseAminoMsg): _58.MsgUndelegateResponse;
                toAminoMsg(message: _58.MsgUndelegateResponse): _58.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _58.MsgUndelegateResponseProtoMsg): _58.MsgUndelegateResponse;
                toProto(message: _58.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _58.MsgUndelegateResponse): _58.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _58.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_58.MsgCancelUnbondingDelegation>): _58.MsgCancelUnbondingDelegation;
                fromAmino(object: _58.MsgCancelUnbondingDelegationAmino): _58.MsgCancelUnbondingDelegation;
                toAmino(message: _58.MsgCancelUnbondingDelegation): _58.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _58.MsgCancelUnbondingDelegationAminoMsg): _58.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _58.MsgCancelUnbondingDelegation): _58.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _58.MsgCancelUnbondingDelegationProtoMsg): _58.MsgCancelUnbondingDelegation;
                toProto(message: _58.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _58.MsgCancelUnbondingDelegation): _58.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _58.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_58.MsgCancelUnbondingDelegationResponse>): _58.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _58.MsgCancelUnbondingDelegationResponseAmino): _58.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _58.MsgCancelUnbondingDelegationResponse): _58.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _58.MsgCancelUnbondingDelegationResponseAminoMsg): _58.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _58.MsgCancelUnbondingDelegationResponse): _58.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _58.MsgCancelUnbondingDelegationResponseProtoMsg): _58.MsgCancelUnbondingDelegationResponse;
                toProto(message: _58.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _58.MsgCancelUnbondingDelegationResponse): _58.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _57.BondStatus;
            bondStatusToJSON(object: _57.BondStatus): string;
            BondStatus: typeof _57.BondStatus;
            BondStatusSDKType: typeof _57.BondStatus;
            BondStatusAmino: typeof _57.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _57.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.HistoricalInfo;
                fromPartial(object: Partial<_57.HistoricalInfo>): _57.HistoricalInfo;
                fromAmino(object: _57.HistoricalInfoAmino): _57.HistoricalInfo;
                toAmino(message: _57.HistoricalInfo): _57.HistoricalInfoAmino;
                fromAminoMsg(object: _57.HistoricalInfoAminoMsg): _57.HistoricalInfo;
                toAminoMsg(message: _57.HistoricalInfo): _57.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _57.HistoricalInfoProtoMsg): _57.HistoricalInfo;
                toProto(message: _57.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _57.HistoricalInfo): _57.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _57.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.CommissionRates;
                fromPartial(object: Partial<_57.CommissionRates>): _57.CommissionRates;
                fromAmino(object: _57.CommissionRatesAmino): _57.CommissionRates;
                toAmino(message: _57.CommissionRates): _57.CommissionRatesAmino;
                fromAminoMsg(object: _57.CommissionRatesAminoMsg): _57.CommissionRates;
                toAminoMsg(message: _57.CommissionRates): _57.CommissionRatesAminoMsg;
                fromProtoMsg(message: _57.CommissionRatesProtoMsg): _57.CommissionRates;
                toProto(message: _57.CommissionRates): Uint8Array;
                toProtoMsg(message: _57.CommissionRates): _57.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _57.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Commission;
                fromPartial(object: Partial<_57.Commission>): _57.Commission;
                fromAmino(object: _57.CommissionAmino): _57.Commission;
                toAmino(message: _57.Commission): _57.CommissionAmino;
                fromAminoMsg(object: _57.CommissionAminoMsg): _57.Commission;
                toAminoMsg(message: _57.Commission): _57.CommissionAminoMsg;
                fromProtoMsg(message: _57.CommissionProtoMsg): _57.Commission;
                toProto(message: _57.Commission): Uint8Array;
                toProtoMsg(message: _57.Commission): _57.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _57.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Description;
                fromPartial(object: Partial<_57.Description>): _57.Description;
                fromAmino(object: _57.DescriptionAmino): _57.Description;
                toAmino(message: _57.Description): _57.DescriptionAmino;
                fromAminoMsg(object: _57.DescriptionAminoMsg): _57.Description;
                toAminoMsg(message: _57.Description): _57.DescriptionAminoMsg;
                fromProtoMsg(message: _57.DescriptionProtoMsg): _57.Description;
                toProto(message: _57.Description): Uint8Array;
                toProtoMsg(message: _57.Description): _57.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _57.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Validator;
                fromPartial(object: Partial<_57.Validator>): _57.Validator;
                fromAmino(object: _57.ValidatorAmino): _57.Validator;
                toAmino(message: _57.Validator): _57.ValidatorAmino;
                fromAminoMsg(object: _57.ValidatorAminoMsg): _57.Validator;
                toAminoMsg(message: _57.Validator): _57.ValidatorAminoMsg;
                fromProtoMsg(message: _57.ValidatorProtoMsg): _57.Validator;
                toProto(message: _57.Validator): Uint8Array;
                toProtoMsg(message: _57.Validator): _57.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _57.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.ValAddresses;
                fromPartial(object: Partial<_57.ValAddresses>): _57.ValAddresses;
                fromAmino(object: _57.ValAddressesAmino): _57.ValAddresses;
                toAmino(message: _57.ValAddresses): _57.ValAddressesAmino;
                fromAminoMsg(object: _57.ValAddressesAminoMsg): _57.ValAddresses;
                toAminoMsg(message: _57.ValAddresses): _57.ValAddressesAminoMsg;
                fromProtoMsg(message: _57.ValAddressesProtoMsg): _57.ValAddresses;
                toProto(message: _57.ValAddresses): Uint8Array;
                toProtoMsg(message: _57.ValAddresses): _57.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _57.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.DVPair;
                fromPartial(object: Partial<_57.DVPair>): _57.DVPair;
                fromAmino(object: _57.DVPairAmino): _57.DVPair;
                toAmino(message: _57.DVPair): _57.DVPairAmino;
                fromAminoMsg(object: _57.DVPairAminoMsg): _57.DVPair;
                toAminoMsg(message: _57.DVPair): _57.DVPairAminoMsg;
                fromProtoMsg(message: _57.DVPairProtoMsg): _57.DVPair;
                toProto(message: _57.DVPair): Uint8Array;
                toProtoMsg(message: _57.DVPair): _57.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _57.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.DVPairs;
                fromPartial(object: Partial<_57.DVPairs>): _57.DVPairs;
                fromAmino(object: _57.DVPairsAmino): _57.DVPairs;
                toAmino(message: _57.DVPairs): _57.DVPairsAmino;
                fromAminoMsg(object: _57.DVPairsAminoMsg): _57.DVPairs;
                toAminoMsg(message: _57.DVPairs): _57.DVPairsAminoMsg;
                fromProtoMsg(message: _57.DVPairsProtoMsg): _57.DVPairs;
                toProto(message: _57.DVPairs): Uint8Array;
                toProtoMsg(message: _57.DVPairs): _57.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _57.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.DVVTriplet;
                fromPartial(object: Partial<_57.DVVTriplet>): _57.DVVTriplet;
                fromAmino(object: _57.DVVTripletAmino): _57.DVVTriplet;
                toAmino(message: _57.DVVTriplet): _57.DVVTripletAmino;
                fromAminoMsg(object: _57.DVVTripletAminoMsg): _57.DVVTriplet;
                toAminoMsg(message: _57.DVVTriplet): _57.DVVTripletAminoMsg;
                fromProtoMsg(message: _57.DVVTripletProtoMsg): _57.DVVTriplet;
                toProto(message: _57.DVVTriplet): Uint8Array;
                toProtoMsg(message: _57.DVVTriplet): _57.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _57.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.DVVTriplets;
                fromPartial(object: Partial<_57.DVVTriplets>): _57.DVVTriplets;
                fromAmino(object: _57.DVVTripletsAmino): _57.DVVTriplets;
                toAmino(message: _57.DVVTriplets): _57.DVVTripletsAmino;
                fromAminoMsg(object: _57.DVVTripletsAminoMsg): _57.DVVTriplets;
                toAminoMsg(message: _57.DVVTriplets): _57.DVVTripletsAminoMsg;
                fromProtoMsg(message: _57.DVVTripletsProtoMsg): _57.DVVTriplets;
                toProto(message: _57.DVVTriplets): Uint8Array;
                toProtoMsg(message: _57.DVVTriplets): _57.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _57.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Delegation;
                fromPartial(object: Partial<_57.Delegation>): _57.Delegation;
                fromAmino(object: _57.DelegationAmino): _57.Delegation;
                toAmino(message: _57.Delegation): _57.DelegationAmino;
                fromAminoMsg(object: _57.DelegationAminoMsg): _57.Delegation;
                toAminoMsg(message: _57.Delegation): _57.DelegationAminoMsg;
                fromProtoMsg(message: _57.DelegationProtoMsg): _57.Delegation;
                toProto(message: _57.Delegation): Uint8Array;
                toProtoMsg(message: _57.Delegation): _57.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _57.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.UnbondingDelegation;
                fromPartial(object: Partial<_57.UnbondingDelegation>): _57.UnbondingDelegation;
                fromAmino(object: _57.UnbondingDelegationAmino): _57.UnbondingDelegation;
                toAmino(message: _57.UnbondingDelegation): _57.UnbondingDelegationAmino;
                fromAminoMsg(object: _57.UnbondingDelegationAminoMsg): _57.UnbondingDelegation;
                toAminoMsg(message: _57.UnbondingDelegation): _57.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _57.UnbondingDelegationProtoMsg): _57.UnbondingDelegation;
                toProto(message: _57.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _57.UnbondingDelegation): _57.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _57.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.UnbondingDelegationEntry;
                fromPartial(object: Partial<_57.UnbondingDelegationEntry>): _57.UnbondingDelegationEntry;
                fromAmino(object: _57.UnbondingDelegationEntryAmino): _57.UnbondingDelegationEntry;
                toAmino(message: _57.UnbondingDelegationEntry): _57.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _57.UnbondingDelegationEntryAminoMsg): _57.UnbondingDelegationEntry;
                toAminoMsg(message: _57.UnbondingDelegationEntry): _57.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _57.UnbondingDelegationEntryProtoMsg): _57.UnbondingDelegationEntry;
                toProto(message: _57.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _57.UnbondingDelegationEntry): _57.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _57.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.RedelegationEntry;
                fromPartial(object: Partial<_57.RedelegationEntry>): _57.RedelegationEntry;
                fromAmino(object: _57.RedelegationEntryAmino): _57.RedelegationEntry;
                toAmino(message: _57.RedelegationEntry): _57.RedelegationEntryAmino;
                fromAminoMsg(object: _57.RedelegationEntryAminoMsg): _57.RedelegationEntry;
                toAminoMsg(message: _57.RedelegationEntry): _57.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _57.RedelegationEntryProtoMsg): _57.RedelegationEntry;
                toProto(message: _57.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _57.RedelegationEntry): _57.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _57.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Redelegation;
                fromPartial(object: Partial<_57.Redelegation>): _57.Redelegation;
                fromAmino(object: _57.RedelegationAmino): _57.Redelegation;
                toAmino(message: _57.Redelegation): _57.RedelegationAmino;
                fromAminoMsg(object: _57.RedelegationAminoMsg): _57.Redelegation;
                toAminoMsg(message: _57.Redelegation): _57.RedelegationAminoMsg;
                fromProtoMsg(message: _57.RedelegationProtoMsg): _57.Redelegation;
                toProto(message: _57.Redelegation): Uint8Array;
                toProtoMsg(message: _57.Redelegation): _57.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _57.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
                fromAmino(object: _57.ParamsAmino): _57.Params;
                toAmino(message: _57.Params): _57.ParamsAmino;
                fromAminoMsg(object: _57.ParamsAminoMsg): _57.Params;
                toAminoMsg(message: _57.Params): _57.ParamsAminoMsg;
                fromProtoMsg(message: _57.ParamsProtoMsg): _57.Params;
                toProto(message: _57.Params): Uint8Array;
                toProtoMsg(message: _57.Params): _57.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _57.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.DelegationResponse;
                fromPartial(object: Partial<_57.DelegationResponse>): _57.DelegationResponse;
                fromAmino(object: _57.DelegationResponseAmino): _57.DelegationResponse;
                toAmino(message: _57.DelegationResponse): _57.DelegationResponseAmino;
                fromAminoMsg(object: _57.DelegationResponseAminoMsg): _57.DelegationResponse;
                toAminoMsg(message: _57.DelegationResponse): _57.DelegationResponseAminoMsg;
                fromProtoMsg(message: _57.DelegationResponseProtoMsg): _57.DelegationResponse;
                toProto(message: _57.DelegationResponse): Uint8Array;
                toProtoMsg(message: _57.DelegationResponse): _57.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _57.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.RedelegationEntryResponse;
                fromPartial(object: Partial<_57.RedelegationEntryResponse>): _57.RedelegationEntryResponse;
                fromAmino(object: _57.RedelegationEntryResponseAmino): _57.RedelegationEntryResponse;
                toAmino(message: _57.RedelegationEntryResponse): _57.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _57.RedelegationEntryResponseAminoMsg): _57.RedelegationEntryResponse;
                toAminoMsg(message: _57.RedelegationEntryResponse): _57.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _57.RedelegationEntryResponseProtoMsg): _57.RedelegationEntryResponse;
                toProto(message: _57.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _57.RedelegationEntryResponse): _57.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _57.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.RedelegationResponse;
                fromPartial(object: Partial<_57.RedelegationResponse>): _57.RedelegationResponse;
                fromAmino(object: _57.RedelegationResponseAmino): _57.RedelegationResponse;
                toAmino(message: _57.RedelegationResponse): _57.RedelegationResponseAmino;
                fromAminoMsg(object: _57.RedelegationResponseAminoMsg): _57.RedelegationResponse;
                toAminoMsg(message: _57.RedelegationResponse): _57.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _57.RedelegationResponseProtoMsg): _57.RedelegationResponse;
                toProto(message: _57.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _57.RedelegationResponse): _57.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _57.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Pool;
                fromPartial(object: Partial<_57.Pool>): _57.Pool;
                fromAmino(object: _57.PoolAmino): _57.Pool;
                toAmino(message: _57.Pool): _57.PoolAmino;
                fromAminoMsg(object: _57.PoolAminoMsg): _57.Pool;
                toAminoMsg(message: _57.Pool): _57.PoolAminoMsg;
                fromProtoMsg(message: _57.PoolProtoMsg): _57.Pool;
                toProto(message: _57.Pool): Uint8Array;
                toProtoMsg(message: _57.Pool): _57.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorsRequest;
                fromPartial(object: Partial<_56.QueryValidatorsRequest>): _56.QueryValidatorsRequest;
                fromAmino(object: _56.QueryValidatorsRequestAmino): _56.QueryValidatorsRequest;
                toAmino(message: _56.QueryValidatorsRequest): _56.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorsRequestAminoMsg): _56.QueryValidatorsRequest;
                toAminoMsg(message: _56.QueryValidatorsRequest): _56.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorsRequestProtoMsg): _56.QueryValidatorsRequest;
                toProto(message: _56.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorsRequest): _56.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorsResponse;
                fromPartial(object: Partial<_56.QueryValidatorsResponse>): _56.QueryValidatorsResponse;
                fromAmino(object: _56.QueryValidatorsResponseAmino): _56.QueryValidatorsResponse;
                toAmino(message: _56.QueryValidatorsResponse): _56.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorsResponseAminoMsg): _56.QueryValidatorsResponse;
                toAminoMsg(message: _56.QueryValidatorsResponse): _56.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorsResponseProtoMsg): _56.QueryValidatorsResponse;
                toProto(message: _56.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorsResponse): _56.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorRequest;
                fromPartial(object: Partial<_56.QueryValidatorRequest>): _56.QueryValidatorRequest;
                fromAmino(object: _56.QueryValidatorRequestAmino): _56.QueryValidatorRequest;
                toAmino(message: _56.QueryValidatorRequest): _56.QueryValidatorRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorRequestAminoMsg): _56.QueryValidatorRequest;
                toAminoMsg(message: _56.QueryValidatorRequest): _56.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorRequestProtoMsg): _56.QueryValidatorRequest;
                toProto(message: _56.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorRequest): _56.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorResponse;
                fromPartial(object: Partial<_56.QueryValidatorResponse>): _56.QueryValidatorResponse;
                fromAmino(object: _56.QueryValidatorResponseAmino): _56.QueryValidatorResponse;
                toAmino(message: _56.QueryValidatorResponse): _56.QueryValidatorResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorResponseAminoMsg): _56.QueryValidatorResponse;
                toAminoMsg(message: _56.QueryValidatorResponse): _56.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorResponseProtoMsg): _56.QueryValidatorResponse;
                toProto(message: _56.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorResponse): _56.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_56.QueryValidatorDelegationsRequest>): _56.QueryValidatorDelegationsRequest;
                fromAmino(object: _56.QueryValidatorDelegationsRequestAmino): _56.QueryValidatorDelegationsRequest;
                toAmino(message: _56.QueryValidatorDelegationsRequest): _56.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorDelegationsRequestAminoMsg): _56.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _56.QueryValidatorDelegationsRequest): _56.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorDelegationsRequestProtoMsg): _56.QueryValidatorDelegationsRequest;
                toProto(message: _56.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorDelegationsRequest): _56.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_56.QueryValidatorDelegationsResponse>): _56.QueryValidatorDelegationsResponse;
                fromAmino(object: _56.QueryValidatorDelegationsResponseAmino): _56.QueryValidatorDelegationsResponse;
                toAmino(message: _56.QueryValidatorDelegationsResponse): _56.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorDelegationsResponseAminoMsg): _56.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _56.QueryValidatorDelegationsResponse): _56.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorDelegationsResponseProtoMsg): _56.QueryValidatorDelegationsResponse;
                toProto(message: _56.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorDelegationsResponse): _56.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_56.QueryValidatorUnbondingDelegationsRequest>): _56.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _56.QueryValidatorUnbondingDelegationsRequestAmino): _56.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _56.QueryValidatorUnbondingDelegationsRequest): _56.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorUnbondingDelegationsRequestAminoMsg): _56.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _56.QueryValidatorUnbondingDelegationsRequest): _56.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorUnbondingDelegationsRequestProtoMsg): _56.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _56.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorUnbondingDelegationsRequest): _56.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_56.QueryValidatorUnbondingDelegationsResponse>): _56.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _56.QueryValidatorUnbondingDelegationsResponseAmino): _56.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _56.QueryValidatorUnbondingDelegationsResponse): _56.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorUnbondingDelegationsResponseAminoMsg): _56.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _56.QueryValidatorUnbondingDelegationsResponse): _56.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorUnbondingDelegationsResponseProtoMsg): _56.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _56.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorUnbondingDelegationsResponse): _56.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegationRequest;
                fromPartial(object: Partial<_56.QueryDelegationRequest>): _56.QueryDelegationRequest;
                fromAmino(object: _56.QueryDelegationRequestAmino): _56.QueryDelegationRequest;
                toAmino(message: _56.QueryDelegationRequest): _56.QueryDelegationRequestAmino;
                fromAminoMsg(object: _56.QueryDelegationRequestAminoMsg): _56.QueryDelegationRequest;
                toAminoMsg(message: _56.QueryDelegationRequest): _56.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationRequestProtoMsg): _56.QueryDelegationRequest;
                toProto(message: _56.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationRequest): _56.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegationResponse;
                fromPartial(object: Partial<_56.QueryDelegationResponse>): _56.QueryDelegationResponse;
                fromAmino(object: _56.QueryDelegationResponseAmino): _56.QueryDelegationResponse;
                toAmino(message: _56.QueryDelegationResponse): _56.QueryDelegationResponseAmino;
                fromAminoMsg(object: _56.QueryDelegationResponseAminoMsg): _56.QueryDelegationResponse;
                toAminoMsg(message: _56.QueryDelegationResponse): _56.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationResponseProtoMsg): _56.QueryDelegationResponse;
                toProto(message: _56.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationResponse): _56.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _56.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_56.QueryUnbondingDelegationRequest>): _56.QueryUnbondingDelegationRequest;
                fromAmino(object: _56.QueryUnbondingDelegationRequestAmino): _56.QueryUnbondingDelegationRequest;
                toAmino(message: _56.QueryUnbondingDelegationRequest): _56.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _56.QueryUnbondingDelegationRequestAminoMsg): _56.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _56.QueryUnbondingDelegationRequest): _56.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _56.QueryUnbondingDelegationRequestProtoMsg): _56.QueryUnbondingDelegationRequest;
                toProto(message: _56.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _56.QueryUnbondingDelegationRequest): _56.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _56.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_56.QueryUnbondingDelegationResponse>): _56.QueryUnbondingDelegationResponse;
                fromAmino(object: _56.QueryUnbondingDelegationResponseAmino): _56.QueryUnbondingDelegationResponse;
                toAmino(message: _56.QueryUnbondingDelegationResponse): _56.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _56.QueryUnbondingDelegationResponseAminoMsg): _56.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _56.QueryUnbondingDelegationResponse): _56.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _56.QueryUnbondingDelegationResponseProtoMsg): _56.QueryUnbondingDelegationResponse;
                toProto(message: _56.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _56.QueryUnbondingDelegationResponse): _56.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorDelegationsRequest>): _56.QueryDelegatorDelegationsRequest;
                fromAmino(object: _56.QueryDelegatorDelegationsRequestAmino): _56.QueryDelegatorDelegationsRequest;
                toAmino(message: _56.QueryDelegatorDelegationsRequest): _56.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorDelegationsRequestAminoMsg): _56.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _56.QueryDelegatorDelegationsRequest): _56.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorDelegationsRequestProtoMsg): _56.QueryDelegatorDelegationsRequest;
                toProto(message: _56.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorDelegationsRequest): _56.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorDelegationsResponse>): _56.QueryDelegatorDelegationsResponse;
                fromAmino(object: _56.QueryDelegatorDelegationsResponseAmino): _56.QueryDelegatorDelegationsResponse;
                toAmino(message: _56.QueryDelegatorDelegationsResponse): _56.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorDelegationsResponseAminoMsg): _56.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _56.QueryDelegatorDelegationsResponse): _56.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorDelegationsResponseProtoMsg): _56.QueryDelegatorDelegationsResponse;
                toProto(message: _56.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorDelegationsResponse): _56.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorUnbondingDelegationsRequest>): _56.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _56.QueryDelegatorUnbondingDelegationsRequestAmino): _56.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _56.QueryDelegatorUnbondingDelegationsRequest): _56.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _56.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _56.QueryDelegatorUnbondingDelegationsRequest): _56.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _56.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _56.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorUnbondingDelegationsRequest): _56.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorUnbondingDelegationsResponse>): _56.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _56.QueryDelegatorUnbondingDelegationsResponseAmino): _56.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _56.QueryDelegatorUnbondingDelegationsResponse): _56.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _56.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _56.QueryDelegatorUnbondingDelegationsResponse): _56.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _56.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _56.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorUnbondingDelegationsResponse): _56.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _56.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryRedelegationsRequest;
                fromPartial(object: Partial<_56.QueryRedelegationsRequest>): _56.QueryRedelegationsRequest;
                fromAmino(object: _56.QueryRedelegationsRequestAmino): _56.QueryRedelegationsRequest;
                toAmino(message: _56.QueryRedelegationsRequest): _56.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _56.QueryRedelegationsRequestAminoMsg): _56.QueryRedelegationsRequest;
                toAminoMsg(message: _56.QueryRedelegationsRequest): _56.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryRedelegationsRequestProtoMsg): _56.QueryRedelegationsRequest;
                toProto(message: _56.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryRedelegationsRequest): _56.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _56.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryRedelegationsResponse;
                fromPartial(object: Partial<_56.QueryRedelegationsResponse>): _56.QueryRedelegationsResponse;
                fromAmino(object: _56.QueryRedelegationsResponseAmino): _56.QueryRedelegationsResponse;
                toAmino(message: _56.QueryRedelegationsResponse): _56.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _56.QueryRedelegationsResponseAminoMsg): _56.QueryRedelegationsResponse;
                toAminoMsg(message: _56.QueryRedelegationsResponse): _56.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryRedelegationsResponseProtoMsg): _56.QueryRedelegationsResponse;
                toProto(message: _56.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryRedelegationsResponse): _56.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsRequest>): _56.QueryDelegatorValidatorsRequest;
                fromAmino(object: _56.QueryDelegatorValidatorsRequestAmino): _56.QueryDelegatorValidatorsRequest;
                toAmino(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorsRequestAminoMsg): _56.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorsRequestProtoMsg): _56.QueryDelegatorValidatorsRequest;
                toProto(message: _56.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsResponse>): _56.QueryDelegatorValidatorsResponse;
                fromAmino(object: _56.QueryDelegatorValidatorsResponseAmino): _56.QueryDelegatorValidatorsResponse;
                toAmino(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorsResponseAminoMsg): _56.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorsResponseProtoMsg): _56.QueryDelegatorValidatorsResponse;
                toProto(message: _56.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorRequest>): _56.QueryDelegatorValidatorRequest;
                fromAmino(object: _56.QueryDelegatorValidatorRequestAmino): _56.QueryDelegatorValidatorRequest;
                toAmino(message: _56.QueryDelegatorValidatorRequest): _56.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorRequestAminoMsg): _56.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _56.QueryDelegatorValidatorRequest): _56.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorRequestProtoMsg): _56.QueryDelegatorValidatorRequest;
                toProto(message: _56.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorRequest): _56.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorResponse>): _56.QueryDelegatorValidatorResponse;
                fromAmino(object: _56.QueryDelegatorValidatorResponseAmino): _56.QueryDelegatorValidatorResponse;
                toAmino(message: _56.QueryDelegatorValidatorResponse): _56.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorResponseAminoMsg): _56.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _56.QueryDelegatorValidatorResponse): _56.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorResponseProtoMsg): _56.QueryDelegatorValidatorResponse;
                toProto(message: _56.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorResponse): _56.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _56.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_56.QueryHistoricalInfoRequest>): _56.QueryHistoricalInfoRequest;
                fromAmino(object: _56.QueryHistoricalInfoRequestAmino): _56.QueryHistoricalInfoRequest;
                toAmino(message: _56.QueryHistoricalInfoRequest): _56.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _56.QueryHistoricalInfoRequestAminoMsg): _56.QueryHistoricalInfoRequest;
                toAminoMsg(message: _56.QueryHistoricalInfoRequest): _56.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _56.QueryHistoricalInfoRequestProtoMsg): _56.QueryHistoricalInfoRequest;
                toProto(message: _56.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _56.QueryHistoricalInfoRequest): _56.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _56.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_56.QueryHistoricalInfoResponse>): _56.QueryHistoricalInfoResponse;
                fromAmino(object: _56.QueryHistoricalInfoResponseAmino): _56.QueryHistoricalInfoResponse;
                toAmino(message: _56.QueryHistoricalInfoResponse): _56.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _56.QueryHistoricalInfoResponseAminoMsg): _56.QueryHistoricalInfoResponse;
                toAminoMsg(message: _56.QueryHistoricalInfoResponse): _56.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _56.QueryHistoricalInfoResponseProtoMsg): _56.QueryHistoricalInfoResponse;
                toProto(message: _56.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _56.QueryHistoricalInfoResponse): _56.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _56.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryPoolRequest;
                fromPartial(_: Partial<_56.QueryPoolRequest>): _56.QueryPoolRequest;
                fromAmino(_: _56.QueryPoolRequestAmino): _56.QueryPoolRequest;
                toAmino(_: _56.QueryPoolRequest): _56.QueryPoolRequestAmino;
                fromAminoMsg(object: _56.QueryPoolRequestAminoMsg): _56.QueryPoolRequest;
                toAminoMsg(message: _56.QueryPoolRequest): _56.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _56.QueryPoolRequestProtoMsg): _56.QueryPoolRequest;
                toProto(message: _56.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _56.QueryPoolRequest): _56.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _56.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryPoolResponse;
                fromPartial(object: Partial<_56.QueryPoolResponse>): _56.QueryPoolResponse;
                fromAmino(object: _56.QueryPoolResponseAmino): _56.QueryPoolResponse;
                toAmino(message: _56.QueryPoolResponse): _56.QueryPoolResponseAmino;
                fromAminoMsg(object: _56.QueryPoolResponseAminoMsg): _56.QueryPoolResponse;
                toAminoMsg(message: _56.QueryPoolResponse): _56.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _56.QueryPoolResponseProtoMsg): _56.QueryPoolResponse;
                toProto(message: _56.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _56.QueryPoolResponse): _56.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _56.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryParamsRequest;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromAmino(_: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(_: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
                fromAminoMsg(object: _56.QueryParamsRequestAminoMsg): _56.QueryParamsRequest;
                toAminoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryParamsRequestProtoMsg): _56.QueryParamsRequest;
                toProto(message: _56.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _56.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
                fromAmino(object: _56.QueryParamsResponseAmino): _56.QueryParamsResponse;
                toAmino(message: _56.QueryParamsResponse): _56.QueryParamsResponseAmino;
                fromAminoMsg(object: _56.QueryParamsResponseAminoMsg): _56.QueryParamsResponse;
                toAminoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryParamsResponseProtoMsg): _56.QueryParamsResponse;
                toProto(message: _56.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _55.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.LastValidatorPower;
                fromPartial(object: Partial<_55.LastValidatorPower>): _55.LastValidatorPower;
                fromAmino(object: _55.LastValidatorPowerAmino): _55.LastValidatorPower;
                toAmino(message: _55.LastValidatorPower): _55.LastValidatorPowerAmino;
                fromAminoMsg(object: _55.LastValidatorPowerAminoMsg): _55.LastValidatorPower;
                toAminoMsg(message: _55.LastValidatorPower): _55.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _55.LastValidatorPowerProtoMsg): _55.LastValidatorPower;
                toProto(message: _55.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _55.LastValidatorPower): _55.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _54.AuthorizationType;
            authorizationTypeToJSON(object: _54.AuthorizationType): string;
            AuthorizationType: typeof _54.AuthorizationType;
            AuthorizationTypeSDKType: typeof _54.AuthorizationType;
            AuthorizationTypeAmino: typeof _54.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _54.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.StakeAuthorization;
                fromPartial(object: Partial<_54.StakeAuthorization>): _54.StakeAuthorization;
                fromAmino(object: _54.StakeAuthorizationAmino): _54.StakeAuthorization;
                toAmino(message: _54.StakeAuthorization): _54.StakeAuthorizationAmino;
                fromAminoMsg(object: _54.StakeAuthorizationAminoMsg): _54.StakeAuthorization;
                toAminoMsg(message: _54.StakeAuthorization): _54.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _54.StakeAuthorizationProtoMsg): _54.StakeAuthorization;
                toProto(message: _54.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _54.StakeAuthorization): _54.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _54.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.StakeAuthorization_Validators;
                fromPartial(object: Partial<_54.StakeAuthorization_Validators>): _54.StakeAuthorization_Validators;
                fromAmino(object: _54.StakeAuthorization_ValidatorsAmino): _54.StakeAuthorization_Validators;
                toAmino(message: _54.StakeAuthorization_Validators): _54.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _54.StakeAuthorization_ValidatorsAminoMsg): _54.StakeAuthorization_Validators;
                toAminoMsg(message: _54.StakeAuthorization_Validators): _54.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _54.StakeAuthorization_ValidatorsProtoMsg): _54.StakeAuthorization_Validators;
                toProto(message: _54.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _54.StakeAuthorization_Validators): _54.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _59.SignMode;
                signModeToJSON(object: _59.SignMode): string;
                SignMode: typeof _59.SignMode;
                SignModeSDKType: typeof _59.SignMode;
                SignModeAmino: typeof _59.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _59.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.SignatureDescriptors;
                    fromPartial(object: Partial<_59.SignatureDescriptors>): _59.SignatureDescriptors;
                    fromAmino(object: _59.SignatureDescriptorsAmino): _59.SignatureDescriptors;
                    toAmino(message: _59.SignatureDescriptors): _59.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _59.SignatureDescriptorsAminoMsg): _59.SignatureDescriptors;
                    toAminoMsg(message: _59.SignatureDescriptors): _59.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _59.SignatureDescriptorsProtoMsg): _59.SignatureDescriptors;
                    toProto(message: _59.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _59.SignatureDescriptors): _59.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _59.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.SignatureDescriptor;
                    fromPartial(object: Partial<_59.SignatureDescriptor>): _59.SignatureDescriptor;
                    fromAmino(object: _59.SignatureDescriptorAmino): _59.SignatureDescriptor;
                    toAmino(message: _59.SignatureDescriptor): _59.SignatureDescriptorAmino;
                    fromAminoMsg(object: _59.SignatureDescriptorAminoMsg): _59.SignatureDescriptor;
                    toAminoMsg(message: _59.SignatureDescriptor): _59.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _59.SignatureDescriptorProtoMsg): _59.SignatureDescriptor;
                    toProto(message: _59.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _59.SignatureDescriptor): _59.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _59.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_59.SignatureDescriptor_Data>): _59.SignatureDescriptor_Data;
                    fromAmino(object: _59.SignatureDescriptor_DataAmino): _59.SignatureDescriptor_Data;
                    toAmino(message: _59.SignatureDescriptor_Data): _59.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _59.SignatureDescriptor_DataAminoMsg): _59.SignatureDescriptor_Data;
                    toAminoMsg(message: _59.SignatureDescriptor_Data): _59.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _59.SignatureDescriptor_DataProtoMsg): _59.SignatureDescriptor_Data;
                    toProto(message: _59.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _59.SignatureDescriptor_Data): _59.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _59.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_59.SignatureDescriptor_Data_Single>): _59.SignatureDescriptor_Data_Single;
                    fromAmino(object: _59.SignatureDescriptor_Data_SingleAmino): _59.SignatureDescriptor_Data_Single;
                    toAmino(message: _59.SignatureDescriptor_Data_Single): _59.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _59.SignatureDescriptor_Data_SingleAminoMsg): _59.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _59.SignatureDescriptor_Data_Single): _59.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _59.SignatureDescriptor_Data_SingleProtoMsg): _59.SignatureDescriptor_Data_Single;
                    toProto(message: _59.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _59.SignatureDescriptor_Data_Single): _59.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _59.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_59.SignatureDescriptor_Data_Multi>): _59.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _59.SignatureDescriptor_Data_MultiAmino): _59.SignatureDescriptor_Data_Multi;
                    toAmino(message: _59.SignatureDescriptor_Data_Multi): _59.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _59.SignatureDescriptor_Data_MultiAminoMsg): _59.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _59.SignatureDescriptor_Data_Multi): _59.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _59.SignatureDescriptor_Data_MultiProtoMsg): _59.SignatureDescriptor_Data_Multi;
                    toProto(message: _59.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _59.SignatureDescriptor_Data_Multi): _59.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _165.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _60.SimulateRequest): Promise<_60.SimulateResponse>;
                getTx(request: _60.GetTxRequest): Promise<_60.GetTxResponse>;
                broadcastTx(request: _60.BroadcastTxRequest): Promise<_60.BroadcastTxResponse>;
                getTxsEvent(request: _60.GetTxsEventRequest): Promise<_60.GetTxsEventResponse>;
                getBlockWithTxs(request: _60.GetBlockWithTxsRequest): Promise<_60.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _61.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Tx;
                fromPartial(object: Partial<_61.Tx>): _61.Tx;
                fromAmino(object: _61.TxAmino): _61.Tx;
                toAmino(message: _61.Tx): _61.TxAmino;
                fromAminoMsg(object: _61.TxAminoMsg): _61.Tx;
                toAminoMsg(message: _61.Tx): _61.TxAminoMsg;
                fromProtoMsg(message: _61.TxProtoMsg): _61.Tx;
                toProto(message: _61.Tx): Uint8Array;
                toProtoMsg(message: _61.Tx): _61.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _61.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.TxRaw;
                fromPartial(object: Partial<_61.TxRaw>): _61.TxRaw;
                fromAmino(object: _61.TxRawAmino): _61.TxRaw;
                toAmino(message: _61.TxRaw): _61.TxRawAmino;
                fromAminoMsg(object: _61.TxRawAminoMsg): _61.TxRaw;
                toAminoMsg(message: _61.TxRaw): _61.TxRawAminoMsg;
                fromProtoMsg(message: _61.TxRawProtoMsg): _61.TxRaw;
                toProto(message: _61.TxRaw): Uint8Array;
                toProtoMsg(message: _61.TxRaw): _61.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _61.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.SignDoc;
                fromPartial(object: Partial<_61.SignDoc>): _61.SignDoc;
                fromAmino(object: _61.SignDocAmino): _61.SignDoc;
                toAmino(message: _61.SignDoc): _61.SignDocAmino;
                fromAminoMsg(object: _61.SignDocAminoMsg): _61.SignDoc;
                toAminoMsg(message: _61.SignDoc): _61.SignDocAminoMsg;
                fromProtoMsg(message: _61.SignDocProtoMsg): _61.SignDoc;
                toProto(message: _61.SignDoc): Uint8Array;
                toProtoMsg(message: _61.SignDoc): _61.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _61.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.SignDocDirectAux;
                fromPartial(object: Partial<_61.SignDocDirectAux>): _61.SignDocDirectAux;
                fromAmino(object: _61.SignDocDirectAuxAmino): _61.SignDocDirectAux;
                toAmino(message: _61.SignDocDirectAux): _61.SignDocDirectAuxAmino;
                fromAminoMsg(object: _61.SignDocDirectAuxAminoMsg): _61.SignDocDirectAux;
                toAminoMsg(message: _61.SignDocDirectAux): _61.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _61.SignDocDirectAuxProtoMsg): _61.SignDocDirectAux;
                toProto(message: _61.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _61.SignDocDirectAux): _61.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _61.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.TxBody;
                fromPartial(object: Partial<_61.TxBody>): _61.TxBody;
                fromAmino(object: _61.TxBodyAmino): _61.TxBody;
                toAmino(message: _61.TxBody): _61.TxBodyAmino;
                fromAminoMsg(object: _61.TxBodyAminoMsg): _61.TxBody;
                toAminoMsg(message: _61.TxBody): _61.TxBodyAminoMsg;
                fromProtoMsg(message: _61.TxBodyProtoMsg): _61.TxBody;
                toProto(message: _61.TxBody): Uint8Array;
                toProtoMsg(message: _61.TxBody): _61.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _61.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.AuthInfo;
                fromPartial(object: Partial<_61.AuthInfo>): _61.AuthInfo;
                fromAmino(object: _61.AuthInfoAmino): _61.AuthInfo;
                toAmino(message: _61.AuthInfo): _61.AuthInfoAmino;
                fromAminoMsg(object: _61.AuthInfoAminoMsg): _61.AuthInfo;
                toAminoMsg(message: _61.AuthInfo): _61.AuthInfoAminoMsg;
                fromProtoMsg(message: _61.AuthInfoProtoMsg): _61.AuthInfo;
                toProto(message: _61.AuthInfo): Uint8Array;
                toProtoMsg(message: _61.AuthInfo): _61.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _61.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.SignerInfo;
                fromPartial(object: Partial<_61.SignerInfo>): _61.SignerInfo;
                fromAmino(object: _61.SignerInfoAmino): _61.SignerInfo;
                toAmino(message: _61.SignerInfo): _61.SignerInfoAmino;
                fromAminoMsg(object: _61.SignerInfoAminoMsg): _61.SignerInfo;
                toAminoMsg(message: _61.SignerInfo): _61.SignerInfoAminoMsg;
                fromProtoMsg(message: _61.SignerInfoProtoMsg): _61.SignerInfo;
                toProto(message: _61.SignerInfo): Uint8Array;
                toProtoMsg(message: _61.SignerInfo): _61.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _61.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ModeInfo;
                fromPartial(object: Partial<_61.ModeInfo>): _61.ModeInfo;
                fromAmino(object: _61.ModeInfoAmino): _61.ModeInfo;
                toAmino(message: _61.ModeInfo): _61.ModeInfoAmino;
                fromAminoMsg(object: _61.ModeInfoAminoMsg): _61.ModeInfo;
                toAminoMsg(message: _61.ModeInfo): _61.ModeInfoAminoMsg;
                fromProtoMsg(message: _61.ModeInfoProtoMsg): _61.ModeInfo;
                toProto(message: _61.ModeInfo): Uint8Array;
                toProtoMsg(message: _61.ModeInfo): _61.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _61.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ModeInfo_Single;
                fromPartial(object: Partial<_61.ModeInfo_Single>): _61.ModeInfo_Single;
                fromAmino(object: _61.ModeInfo_SingleAmino): _61.ModeInfo_Single;
                toAmino(message: _61.ModeInfo_Single): _61.ModeInfo_SingleAmino;
                fromAminoMsg(object: _61.ModeInfo_SingleAminoMsg): _61.ModeInfo_Single;
                toAminoMsg(message: _61.ModeInfo_Single): _61.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _61.ModeInfo_SingleProtoMsg): _61.ModeInfo_Single;
                toProto(message: _61.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _61.ModeInfo_Single): _61.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _61.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ModeInfo_Multi;
                fromPartial(object: Partial<_61.ModeInfo_Multi>): _61.ModeInfo_Multi;
                fromAmino(object: _61.ModeInfo_MultiAmino): _61.ModeInfo_Multi;
                toAmino(message: _61.ModeInfo_Multi): _61.ModeInfo_MultiAmino;
                fromAminoMsg(object: _61.ModeInfo_MultiAminoMsg): _61.ModeInfo_Multi;
                toAminoMsg(message: _61.ModeInfo_Multi): _61.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _61.ModeInfo_MultiProtoMsg): _61.ModeInfo_Multi;
                toProto(message: _61.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _61.ModeInfo_Multi): _61.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _61.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Fee;
                fromPartial(object: Partial<_61.Fee>): _61.Fee;
                fromAmino(object: _61.FeeAmino): _61.Fee;
                toAmino(message: _61.Fee): _61.FeeAmino;
                fromAminoMsg(object: _61.FeeAminoMsg): _61.Fee;
                toAminoMsg(message: _61.Fee): _61.FeeAminoMsg;
                fromProtoMsg(message: _61.FeeProtoMsg): _61.Fee;
                toProto(message: _61.Fee): Uint8Array;
                toProtoMsg(message: _61.Fee): _61.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _61.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Tip;
                fromPartial(object: Partial<_61.Tip>): _61.Tip;
                fromAmino(object: _61.TipAmino): _61.Tip;
                toAmino(message: _61.Tip): _61.TipAmino;
                fromAminoMsg(object: _61.TipAminoMsg): _61.Tip;
                toAminoMsg(message: _61.Tip): _61.TipAminoMsg;
                fromProtoMsg(message: _61.TipProtoMsg): _61.Tip;
                toProto(message: _61.Tip): Uint8Array;
                toProtoMsg(message: _61.Tip): _61.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _61.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.AuxSignerData;
                fromPartial(object: Partial<_61.AuxSignerData>): _61.AuxSignerData;
                fromAmino(object: _61.AuxSignerDataAmino): _61.AuxSignerData;
                toAmino(message: _61.AuxSignerData): _61.AuxSignerDataAmino;
                fromAminoMsg(object: _61.AuxSignerDataAminoMsg): _61.AuxSignerData;
                toAminoMsg(message: _61.AuxSignerData): _61.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _61.AuxSignerDataProtoMsg): _61.AuxSignerData;
                toProto(message: _61.AuxSignerData): Uint8Array;
                toProtoMsg(message: _61.AuxSignerData): _61.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _60.OrderBy;
            orderByToJSON(object: _60.OrderBy): string;
            broadcastModeFromJSON(object: any): _60.BroadcastMode;
            broadcastModeToJSON(object: _60.BroadcastMode): string;
            OrderBy: typeof _60.OrderBy;
            OrderBySDKType: typeof _60.OrderBy;
            OrderByAmino: typeof _60.OrderBy;
            BroadcastMode: typeof _60.BroadcastMode;
            BroadcastModeSDKType: typeof _60.BroadcastMode;
            BroadcastModeAmino: typeof _60.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _60.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GetTxsEventRequest;
                fromPartial(object: Partial<_60.GetTxsEventRequest>): _60.GetTxsEventRequest;
                fromAmino(object: _60.GetTxsEventRequestAmino): _60.GetTxsEventRequest;
                toAmino(message: _60.GetTxsEventRequest): _60.GetTxsEventRequestAmino;
                fromAminoMsg(object: _60.GetTxsEventRequestAminoMsg): _60.GetTxsEventRequest;
                toAminoMsg(message: _60.GetTxsEventRequest): _60.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _60.GetTxsEventRequestProtoMsg): _60.GetTxsEventRequest;
                toProto(message: _60.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _60.GetTxsEventRequest): _60.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _60.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GetTxsEventResponse;
                fromPartial(object: Partial<_60.GetTxsEventResponse>): _60.GetTxsEventResponse;
                fromAmino(object: _60.GetTxsEventResponseAmino): _60.GetTxsEventResponse;
                toAmino(message: _60.GetTxsEventResponse): _60.GetTxsEventResponseAmino;
                fromAminoMsg(object: _60.GetTxsEventResponseAminoMsg): _60.GetTxsEventResponse;
                toAminoMsg(message: _60.GetTxsEventResponse): _60.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _60.GetTxsEventResponseProtoMsg): _60.GetTxsEventResponse;
                toProto(message: _60.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _60.GetTxsEventResponse): _60.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _60.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.BroadcastTxRequest;
                fromPartial(object: Partial<_60.BroadcastTxRequest>): _60.BroadcastTxRequest;
                fromAmino(object: _60.BroadcastTxRequestAmino): _60.BroadcastTxRequest;
                toAmino(message: _60.BroadcastTxRequest): _60.BroadcastTxRequestAmino;
                fromAminoMsg(object: _60.BroadcastTxRequestAminoMsg): _60.BroadcastTxRequest;
                toAminoMsg(message: _60.BroadcastTxRequest): _60.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _60.BroadcastTxRequestProtoMsg): _60.BroadcastTxRequest;
                toProto(message: _60.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _60.BroadcastTxRequest): _60.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _60.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.BroadcastTxResponse;
                fromPartial(object: Partial<_60.BroadcastTxResponse>): _60.BroadcastTxResponse;
                fromAmino(object: _60.BroadcastTxResponseAmino): _60.BroadcastTxResponse;
                toAmino(message: _60.BroadcastTxResponse): _60.BroadcastTxResponseAmino;
                fromAminoMsg(object: _60.BroadcastTxResponseAminoMsg): _60.BroadcastTxResponse;
                toAminoMsg(message: _60.BroadcastTxResponse): _60.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _60.BroadcastTxResponseProtoMsg): _60.BroadcastTxResponse;
                toProto(message: _60.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _60.BroadcastTxResponse): _60.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _60.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.SimulateRequest;
                fromPartial(object: Partial<_60.SimulateRequest>): _60.SimulateRequest;
                fromAmino(object: _60.SimulateRequestAmino): _60.SimulateRequest;
                toAmino(message: _60.SimulateRequest): _60.SimulateRequestAmino;
                fromAminoMsg(object: _60.SimulateRequestAminoMsg): _60.SimulateRequest;
                toAminoMsg(message: _60.SimulateRequest): _60.SimulateRequestAminoMsg;
                fromProtoMsg(message: _60.SimulateRequestProtoMsg): _60.SimulateRequest;
                toProto(message: _60.SimulateRequest): Uint8Array;
                toProtoMsg(message: _60.SimulateRequest): _60.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _60.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.SimulateResponse;
                fromPartial(object: Partial<_60.SimulateResponse>): _60.SimulateResponse;
                fromAmino(object: _60.SimulateResponseAmino): _60.SimulateResponse;
                toAmino(message: _60.SimulateResponse): _60.SimulateResponseAmino;
                fromAminoMsg(object: _60.SimulateResponseAminoMsg): _60.SimulateResponse;
                toAminoMsg(message: _60.SimulateResponse): _60.SimulateResponseAminoMsg;
                fromProtoMsg(message: _60.SimulateResponseProtoMsg): _60.SimulateResponse;
                toProto(message: _60.SimulateResponse): Uint8Array;
                toProtoMsg(message: _60.SimulateResponse): _60.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _60.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GetTxRequest;
                fromPartial(object: Partial<_60.GetTxRequest>): _60.GetTxRequest;
                fromAmino(object: _60.GetTxRequestAmino): _60.GetTxRequest;
                toAmino(message: _60.GetTxRequest): _60.GetTxRequestAmino;
                fromAminoMsg(object: _60.GetTxRequestAminoMsg): _60.GetTxRequest;
                toAminoMsg(message: _60.GetTxRequest): _60.GetTxRequestAminoMsg;
                fromProtoMsg(message: _60.GetTxRequestProtoMsg): _60.GetTxRequest;
                toProto(message: _60.GetTxRequest): Uint8Array;
                toProtoMsg(message: _60.GetTxRequest): _60.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _60.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GetTxResponse;
                fromPartial(object: Partial<_60.GetTxResponse>): _60.GetTxResponse;
                fromAmino(object: _60.GetTxResponseAmino): _60.GetTxResponse;
                toAmino(message: _60.GetTxResponse): _60.GetTxResponseAmino;
                fromAminoMsg(object: _60.GetTxResponseAminoMsg): _60.GetTxResponse;
                toAminoMsg(message: _60.GetTxResponse): _60.GetTxResponseAminoMsg;
                fromProtoMsg(message: _60.GetTxResponseProtoMsg): _60.GetTxResponse;
                toProto(message: _60.GetTxResponse): Uint8Array;
                toProtoMsg(message: _60.GetTxResponse): _60.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _60.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_60.GetBlockWithTxsRequest>): _60.GetBlockWithTxsRequest;
                fromAmino(object: _60.GetBlockWithTxsRequestAmino): _60.GetBlockWithTxsRequest;
                toAmino(message: _60.GetBlockWithTxsRequest): _60.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _60.GetBlockWithTxsRequestAminoMsg): _60.GetBlockWithTxsRequest;
                toAminoMsg(message: _60.GetBlockWithTxsRequest): _60.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _60.GetBlockWithTxsRequestProtoMsg): _60.GetBlockWithTxsRequest;
                toProto(message: _60.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _60.GetBlockWithTxsRequest): _60.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _60.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_60.GetBlockWithTxsResponse>): _60.GetBlockWithTxsResponse;
                fromAmino(object: _60.GetBlockWithTxsResponseAmino): _60.GetBlockWithTxsResponse;
                toAmino(message: _60.GetBlockWithTxsResponse): _60.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _60.GetBlockWithTxsResponseAminoMsg): _60.GetBlockWithTxsResponse;
                toAminoMsg(message: _60.GetBlockWithTxsResponse): _60.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _60.GetBlockWithTxsResponseProtoMsg): _60.GetBlockWithTxsResponse;
                toProto(message: _60.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _60.GetBlockWithTxsResponse): _60.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _62.QueryCurrentPlanRequest): Promise<_62.QueryCurrentPlanResponse>;
                appliedPlan(request: _62.QueryAppliedPlanRequest): Promise<_62.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _62.QueryUpgradedConsensusStateRequest): Promise<_62.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _62.QueryModuleVersionsRequest): Promise<_62.QueryModuleVersionsResponse>;
                authority(request?: _62.QueryAuthorityRequest): Promise<_62.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _63.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _63.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _63.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _63.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _63.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _63.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _63.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _63.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _63.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _63.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSoftwareUpgrade) => _63.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _63.MsgSoftwareUpgradeAmino) => _63.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCancelUpgrade) => _63.MsgCancelUpgradeAmino;
                    fromAmino: (object: _63.MsgCancelUpgradeAmino) => _63.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _64.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.Plan;
                fromPartial(object: Partial<_64.Plan>): _64.Plan;
                fromAmino(object: _64.PlanAmino): _64.Plan;
                toAmino(message: _64.Plan): _64.PlanAmino;
                fromAminoMsg(object: _64.PlanAminoMsg): _64.Plan;
                toAminoMsg(message: _64.Plan): _64.PlanAminoMsg;
                fromProtoMsg(message: _64.PlanProtoMsg): _64.Plan;
                toProto(message: _64.Plan): Uint8Array;
                toProtoMsg(message: _64.Plan): _64.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _64.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_64.SoftwareUpgradeProposal>): _64.SoftwareUpgradeProposal;
                fromAmino(object: _64.SoftwareUpgradeProposalAmino): _64.SoftwareUpgradeProposal;
                toAmino(message: _64.SoftwareUpgradeProposal): _64.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _64.SoftwareUpgradeProposalAminoMsg): _64.SoftwareUpgradeProposal;
                toAminoMsg(message: _64.SoftwareUpgradeProposal): _64.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _64.SoftwareUpgradeProposalProtoMsg): _64.SoftwareUpgradeProposal;
                toProto(message: _64.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _64.SoftwareUpgradeProposal): _64.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _64.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_64.CancelSoftwareUpgradeProposal>): _64.CancelSoftwareUpgradeProposal;
                fromAmino(object: _64.CancelSoftwareUpgradeProposalAmino): _64.CancelSoftwareUpgradeProposal;
                toAmino(message: _64.CancelSoftwareUpgradeProposal): _64.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _64.CancelSoftwareUpgradeProposalAminoMsg): _64.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _64.CancelSoftwareUpgradeProposal): _64.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _64.CancelSoftwareUpgradeProposalProtoMsg): _64.CancelSoftwareUpgradeProposal;
                toProto(message: _64.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _64.CancelSoftwareUpgradeProposal): _64.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _64.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.ModuleVersion;
                fromPartial(object: Partial<_64.ModuleVersion>): _64.ModuleVersion;
                fromAmino(object: _64.ModuleVersionAmino): _64.ModuleVersion;
                toAmino(message: _64.ModuleVersion): _64.ModuleVersionAmino;
                fromAminoMsg(object: _64.ModuleVersionAminoMsg): _64.ModuleVersion;
                toAminoMsg(message: _64.ModuleVersion): _64.ModuleVersionAminoMsg;
                fromProtoMsg(message: _64.ModuleVersionProtoMsg): _64.ModuleVersion;
                toProto(message: _64.ModuleVersion): Uint8Array;
                toProtoMsg(message: _64.ModuleVersion): _64.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _63.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_63.MsgSoftwareUpgrade>): _63.MsgSoftwareUpgrade;
                fromAmino(object: _63.MsgSoftwareUpgradeAmino): _63.MsgSoftwareUpgrade;
                toAmino(message: _63.MsgSoftwareUpgrade): _63.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _63.MsgSoftwareUpgradeAminoMsg): _63.MsgSoftwareUpgrade;
                toAminoMsg(message: _63.MsgSoftwareUpgrade): _63.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _63.MsgSoftwareUpgradeProtoMsg): _63.MsgSoftwareUpgrade;
                toProto(message: _63.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _63.MsgSoftwareUpgrade): _63.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _63.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_63.MsgSoftwareUpgradeResponse>): _63.MsgSoftwareUpgradeResponse;
                fromAmino(_: _63.MsgSoftwareUpgradeResponseAmino): _63.MsgSoftwareUpgradeResponse;
                toAmino(_: _63.MsgSoftwareUpgradeResponse): _63.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _63.MsgSoftwareUpgradeResponseAminoMsg): _63.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _63.MsgSoftwareUpgradeResponse): _63.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _63.MsgSoftwareUpgradeResponseProtoMsg): _63.MsgSoftwareUpgradeResponse;
                toProto(message: _63.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSoftwareUpgradeResponse): _63.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _63.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgCancelUpgrade;
                fromPartial(object: Partial<_63.MsgCancelUpgrade>): _63.MsgCancelUpgrade;
                fromAmino(object: _63.MsgCancelUpgradeAmino): _63.MsgCancelUpgrade;
                toAmino(message: _63.MsgCancelUpgrade): _63.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _63.MsgCancelUpgradeAminoMsg): _63.MsgCancelUpgrade;
                toAminoMsg(message: _63.MsgCancelUpgrade): _63.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _63.MsgCancelUpgradeProtoMsg): _63.MsgCancelUpgrade;
                toProto(message: _63.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _63.MsgCancelUpgrade): _63.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _63.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_63.MsgCancelUpgradeResponse>): _63.MsgCancelUpgradeResponse;
                fromAmino(_: _63.MsgCancelUpgradeResponseAmino): _63.MsgCancelUpgradeResponse;
                toAmino(_: _63.MsgCancelUpgradeResponse): _63.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _63.MsgCancelUpgradeResponseAminoMsg): _63.MsgCancelUpgradeResponse;
                toAminoMsg(message: _63.MsgCancelUpgradeResponse): _63.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCancelUpgradeResponseProtoMsg): _63.MsgCancelUpgradeResponse;
                toProto(message: _63.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCancelUpgradeResponse): _63.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _62.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_62.QueryCurrentPlanRequest>): _62.QueryCurrentPlanRequest;
                fromAmino(_: _62.QueryCurrentPlanRequestAmino): _62.QueryCurrentPlanRequest;
                toAmino(_: _62.QueryCurrentPlanRequest): _62.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _62.QueryCurrentPlanRequestAminoMsg): _62.QueryCurrentPlanRequest;
                toAminoMsg(message: _62.QueryCurrentPlanRequest): _62.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _62.QueryCurrentPlanRequestProtoMsg): _62.QueryCurrentPlanRequest;
                toProto(message: _62.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _62.QueryCurrentPlanRequest): _62.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _62.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_62.QueryCurrentPlanResponse>): _62.QueryCurrentPlanResponse;
                fromAmino(object: _62.QueryCurrentPlanResponseAmino): _62.QueryCurrentPlanResponse;
                toAmino(message: _62.QueryCurrentPlanResponse): _62.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _62.QueryCurrentPlanResponseAminoMsg): _62.QueryCurrentPlanResponse;
                toAminoMsg(message: _62.QueryCurrentPlanResponse): _62.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _62.QueryCurrentPlanResponseProtoMsg): _62.QueryCurrentPlanResponse;
                toProto(message: _62.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _62.QueryCurrentPlanResponse): _62.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _62.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_62.QueryAppliedPlanRequest>): _62.QueryAppliedPlanRequest;
                fromAmino(object: _62.QueryAppliedPlanRequestAmino): _62.QueryAppliedPlanRequest;
                toAmino(message: _62.QueryAppliedPlanRequest): _62.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _62.QueryAppliedPlanRequestAminoMsg): _62.QueryAppliedPlanRequest;
                toAminoMsg(message: _62.QueryAppliedPlanRequest): _62.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAppliedPlanRequestProtoMsg): _62.QueryAppliedPlanRequest;
                toProto(message: _62.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAppliedPlanRequest): _62.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _62.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_62.QueryAppliedPlanResponse>): _62.QueryAppliedPlanResponse;
                fromAmino(object: _62.QueryAppliedPlanResponseAmino): _62.QueryAppliedPlanResponse;
                toAmino(message: _62.QueryAppliedPlanResponse): _62.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _62.QueryAppliedPlanResponseAminoMsg): _62.QueryAppliedPlanResponse;
                toAminoMsg(message: _62.QueryAppliedPlanResponse): _62.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAppliedPlanResponseProtoMsg): _62.QueryAppliedPlanResponse;
                toProto(message: _62.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAppliedPlanResponse): _62.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _62.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_62.QueryUpgradedConsensusStateRequest>): _62.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _62.QueryUpgradedConsensusStateRequestAmino): _62.QueryUpgradedConsensusStateRequest;
                toAmino(message: _62.QueryUpgradedConsensusStateRequest): _62.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _62.QueryUpgradedConsensusStateRequestAminoMsg): _62.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _62.QueryUpgradedConsensusStateRequest): _62.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _62.QueryUpgradedConsensusStateRequestProtoMsg): _62.QueryUpgradedConsensusStateRequest;
                toProto(message: _62.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _62.QueryUpgradedConsensusStateRequest): _62.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _62.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_62.QueryUpgradedConsensusStateResponse>): _62.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _62.QueryUpgradedConsensusStateResponseAmino): _62.QueryUpgradedConsensusStateResponse;
                toAmino(message: _62.QueryUpgradedConsensusStateResponse): _62.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _62.QueryUpgradedConsensusStateResponseAminoMsg): _62.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _62.QueryUpgradedConsensusStateResponse): _62.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _62.QueryUpgradedConsensusStateResponseProtoMsg): _62.QueryUpgradedConsensusStateResponse;
                toProto(message: _62.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _62.QueryUpgradedConsensusStateResponse): _62.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _62.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_62.QueryModuleVersionsRequest>): _62.QueryModuleVersionsRequest;
                fromAmino(object: _62.QueryModuleVersionsRequestAmino): _62.QueryModuleVersionsRequest;
                toAmino(message: _62.QueryModuleVersionsRequest): _62.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _62.QueryModuleVersionsRequestAminoMsg): _62.QueryModuleVersionsRequest;
                toAminoMsg(message: _62.QueryModuleVersionsRequest): _62.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryModuleVersionsRequestProtoMsg): _62.QueryModuleVersionsRequest;
                toProto(message: _62.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryModuleVersionsRequest): _62.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _62.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_62.QueryModuleVersionsResponse>): _62.QueryModuleVersionsResponse;
                fromAmino(object: _62.QueryModuleVersionsResponseAmino): _62.QueryModuleVersionsResponse;
                toAmino(message: _62.QueryModuleVersionsResponse): _62.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _62.QueryModuleVersionsResponseAminoMsg): _62.QueryModuleVersionsResponse;
                toAminoMsg(message: _62.QueryModuleVersionsResponse): _62.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryModuleVersionsResponseProtoMsg): _62.QueryModuleVersionsResponse;
                toProto(message: _62.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryModuleVersionsResponse): _62.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _62.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryAuthorityRequest;
                fromPartial(_: Partial<_62.QueryAuthorityRequest>): _62.QueryAuthorityRequest;
                fromAmino(_: _62.QueryAuthorityRequestAmino): _62.QueryAuthorityRequest;
                toAmino(_: _62.QueryAuthorityRequest): _62.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _62.QueryAuthorityRequestAminoMsg): _62.QueryAuthorityRequest;
                toAminoMsg(message: _62.QueryAuthorityRequest): _62.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAuthorityRequestProtoMsg): _62.QueryAuthorityRequest;
                toProto(message: _62.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAuthorityRequest): _62.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _62.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.QueryAuthorityResponse;
                fromPartial(object: Partial<_62.QueryAuthorityResponse>): _62.QueryAuthorityResponse;
                fromAmino(object: _62.QueryAuthorityResponseAmino): _62.QueryAuthorityResponse;
                toAmino(message: _62.QueryAuthorityResponse): _62.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _62.QueryAuthorityResponseAminoMsg): _62.QueryAuthorityResponse;
                toAminoMsg(message: _62.QueryAuthorityResponse): _62.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAuthorityResponseProtoMsg): _62.QueryAuthorityResponse;
                toProto(message: _62.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAuthorityResponse): _62.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _176.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _65.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _65.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _65.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _65.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _65.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _65.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _65.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _65.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _65.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _65.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _65.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _65.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _65.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _65.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _65.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateVestingAccount) => _65.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _65.MsgCreateVestingAccountAmino) => _65.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreatePermanentLockedAccount) => _65.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _65.MsgCreatePermanentLockedAccountAmino) => _65.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreatePeriodicVestingAccount) => _65.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _65.MsgCreatePeriodicVestingAccountAmino) => _65.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _66.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.BaseVestingAccount;
                fromPartial(object: Partial<_66.BaseVestingAccount>): _66.BaseVestingAccount;
                fromAmino(object: _66.BaseVestingAccountAmino): _66.BaseVestingAccount;
                toAmino(message: _66.BaseVestingAccount): _66.BaseVestingAccountAmino;
                fromAminoMsg(object: _66.BaseVestingAccountAminoMsg): _66.BaseVestingAccount;
                toAminoMsg(message: _66.BaseVestingAccount): _66.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _66.BaseVestingAccountProtoMsg): _66.BaseVestingAccount;
                toProto(message: _66.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _66.BaseVestingAccount): _66.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _66.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.ContinuousVestingAccount;
                fromPartial(object: Partial<_66.ContinuousVestingAccount>): _66.ContinuousVestingAccount;
                fromAmino(object: _66.ContinuousVestingAccountAmino): _66.ContinuousVestingAccount;
                toAmino(message: _66.ContinuousVestingAccount): _66.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _66.ContinuousVestingAccountAminoMsg): _66.ContinuousVestingAccount;
                toAminoMsg(message: _66.ContinuousVestingAccount): _66.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _66.ContinuousVestingAccountProtoMsg): _66.ContinuousVestingAccount;
                toProto(message: _66.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _66.ContinuousVestingAccount): _66.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _66.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.DelayedVestingAccount;
                fromPartial(object: Partial<_66.DelayedVestingAccount>): _66.DelayedVestingAccount;
                fromAmino(object: _66.DelayedVestingAccountAmino): _66.DelayedVestingAccount;
                toAmino(message: _66.DelayedVestingAccount): _66.DelayedVestingAccountAmino;
                fromAminoMsg(object: _66.DelayedVestingAccountAminoMsg): _66.DelayedVestingAccount;
                toAminoMsg(message: _66.DelayedVestingAccount): _66.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _66.DelayedVestingAccountProtoMsg): _66.DelayedVestingAccount;
                toProto(message: _66.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _66.DelayedVestingAccount): _66.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _66.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.Period;
                fromPartial(object: Partial<_66.Period>): _66.Period;
                fromAmino(object: _66.PeriodAmino): _66.Period;
                toAmino(message: _66.Period): _66.PeriodAmino;
                fromAminoMsg(object: _66.PeriodAminoMsg): _66.Period;
                toAminoMsg(message: _66.Period): _66.PeriodAminoMsg;
                fromProtoMsg(message: _66.PeriodProtoMsg): _66.Period;
                toProto(message: _66.Period): Uint8Array;
                toProtoMsg(message: _66.Period): _66.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _66.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.PeriodicVestingAccount;
                fromPartial(object: Partial<_66.PeriodicVestingAccount>): _66.PeriodicVestingAccount;
                fromAmino(object: _66.PeriodicVestingAccountAmino): _66.PeriodicVestingAccount;
                toAmino(message: _66.PeriodicVestingAccount): _66.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _66.PeriodicVestingAccountAminoMsg): _66.PeriodicVestingAccount;
                toAminoMsg(message: _66.PeriodicVestingAccount): _66.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _66.PeriodicVestingAccountProtoMsg): _66.PeriodicVestingAccount;
                toProto(message: _66.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _66.PeriodicVestingAccount): _66.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _66.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.PermanentLockedAccount;
                fromPartial(object: Partial<_66.PermanentLockedAccount>): _66.PermanentLockedAccount;
                fromAmino(object: _66.PermanentLockedAccountAmino): _66.PermanentLockedAccount;
                toAmino(message: _66.PermanentLockedAccount): _66.PermanentLockedAccountAmino;
                fromAminoMsg(object: _66.PermanentLockedAccountAminoMsg): _66.PermanentLockedAccount;
                toAminoMsg(message: _66.PermanentLockedAccount): _66.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _66.PermanentLockedAccountProtoMsg): _66.PermanentLockedAccount;
                toProto(message: _66.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _66.PermanentLockedAccount): _66.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _65.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgCreateVestingAccount;
                fromPartial(object: Partial<_65.MsgCreateVestingAccount>): _65.MsgCreateVestingAccount;
                fromAmino(object: _65.MsgCreateVestingAccountAmino): _65.MsgCreateVestingAccount;
                toAmino(message: _65.MsgCreateVestingAccount): _65.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _65.MsgCreateVestingAccountAminoMsg): _65.MsgCreateVestingAccount;
                toAminoMsg(message: _65.MsgCreateVestingAccount): _65.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _65.MsgCreateVestingAccountProtoMsg): _65.MsgCreateVestingAccount;
                toProto(message: _65.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _65.MsgCreateVestingAccount): _65.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _65.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_65.MsgCreateVestingAccountResponse>): _65.MsgCreateVestingAccountResponse;
                fromAmino(_: _65.MsgCreateVestingAccountResponseAmino): _65.MsgCreateVestingAccountResponse;
                toAmino(_: _65.MsgCreateVestingAccountResponse): _65.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _65.MsgCreateVestingAccountResponseAminoMsg): _65.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _65.MsgCreateVestingAccountResponse): _65.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCreateVestingAccountResponseProtoMsg): _65.MsgCreateVestingAccountResponse;
                toProto(message: _65.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCreateVestingAccountResponse): _65.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _65.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_65.MsgCreatePermanentLockedAccount>): _65.MsgCreatePermanentLockedAccount;
                fromAmino(object: _65.MsgCreatePermanentLockedAccountAmino): _65.MsgCreatePermanentLockedAccount;
                toAmino(message: _65.MsgCreatePermanentLockedAccount): _65.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _65.MsgCreatePermanentLockedAccountAminoMsg): _65.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _65.MsgCreatePermanentLockedAccount): _65.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _65.MsgCreatePermanentLockedAccountProtoMsg): _65.MsgCreatePermanentLockedAccount;
                toProto(message: _65.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _65.MsgCreatePermanentLockedAccount): _65.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _65.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_65.MsgCreatePermanentLockedAccountResponse>): _65.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _65.MsgCreatePermanentLockedAccountResponseAmino): _65.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _65.MsgCreatePermanentLockedAccountResponse): _65.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _65.MsgCreatePermanentLockedAccountResponseAminoMsg): _65.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _65.MsgCreatePermanentLockedAccountResponse): _65.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCreatePermanentLockedAccountResponseProtoMsg): _65.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _65.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCreatePermanentLockedAccountResponse): _65.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _65.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_65.MsgCreatePeriodicVestingAccount>): _65.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _65.MsgCreatePeriodicVestingAccountAmino): _65.MsgCreatePeriodicVestingAccount;
                toAmino(message: _65.MsgCreatePeriodicVestingAccount): _65.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _65.MsgCreatePeriodicVestingAccountAminoMsg): _65.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _65.MsgCreatePeriodicVestingAccount): _65.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _65.MsgCreatePeriodicVestingAccountProtoMsg): _65.MsgCreatePeriodicVestingAccount;
                toProto(message: _65.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _65.MsgCreatePeriodicVestingAccount): _65.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _65.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_65.MsgCreatePeriodicVestingAccountResponse>): _65.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _65.MsgCreatePeriodicVestingAccountResponseAmino): _65.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _65.MsgCreatePeriodicVestingAccountResponse): _65.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _65.MsgCreatePeriodicVestingAccountResponseAminoMsg): _65.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _65.MsgCreatePeriodicVestingAccountResponse): _65.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCreatePeriodicVestingAccountResponseProtoMsg): _65.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _65.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCreatePeriodicVestingAccountResponse): _65.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _167.MsgClientImpl;
                };
                bank: {
                    v1beta1: _168.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _169.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _170.MsgClientImpl;
                };
                gov: {
                    v1: _171.MsgClientImpl;
                    v1beta1: _172.MsgClientImpl;
                };
                group: {
                    v1: _173.MsgClientImpl;
                };
                staking: {
                    v1beta1: _174.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _175.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _176.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _5.QueryAccountsRequest): Promise<_5.QueryAccountsResponse>;
                        account(request: _5.QueryAccountRequest): Promise<_5.QueryAccountResponse>;
                        accountAddressByID(request: _5.QueryAccountAddressByIDRequest): Promise<_5.QueryAccountAddressByIDResponse>;
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        moduleAccounts(request?: _5.QueryModuleAccountsRequest): Promise<_5.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _5.QueryModuleAccountByNameRequest): Promise<_5.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _5.Bech32PrefixRequest): Promise<_5.Bech32PrefixResponse>;
                        addressBytesToString(request: _5.AddressBytesToStringRequest): Promise<_5.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _5.AddressStringToBytesRequest): Promise<_5.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _9.QueryGrantsRequest): Promise<_9.QueryGrantsResponse>;
                        granterGrants(request: _9.QueryGranterGrantsRequest): Promise<_9.QueryGranterGrantsResponse>;
                        granteeGrants(request: _9.QueryGranteeGrantsRequest): Promise<_9.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _14.QueryBalanceRequest): Promise<_14.QueryBalanceResponse>;
                        allBalances(request: _14.QueryAllBalancesRequest): Promise<_14.QueryAllBalancesResponse>;
                        spendableBalances(request: _14.QuerySpendableBalancesRequest): Promise<_14.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _14.QueryTotalSupplyRequest): Promise<_14.QueryTotalSupplyResponse>;
                        supplyOf(request: _14.QuerySupplyOfRequest): Promise<_14.QuerySupplyOfResponse>;
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        denomMetadata(request: _14.QueryDenomMetadataRequest): Promise<_14.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _14.QueryDenomsMetadataRequest): Promise<_14.QueryDenomsMetadataResponse>;
                        denomOwners(request: _14.QueryDenomOwnersRequest): Promise<_14.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _17.ConfigRequest): Promise<_17.ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _29.QueryValidatorOutstandingRewardsRequest): Promise<_29.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _29.QueryValidatorCommissionRequest): Promise<_29.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _29.QueryValidatorSlashesRequest): Promise<_29.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _29.QueryDelegationRewardsRequest): Promise<_29.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _29.QueryDelegationTotalRewardsRequest): Promise<_29.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _29.QueryDelegatorValidatorsRequest): Promise<_29.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _29.QueryDelegatorWithdrawAddressRequest): Promise<_29.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _29.QueryCommunityPoolRequest): Promise<_29.QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _33.QueryAllowanceRequest): Promise<_33.QueryAllowanceResponse>;
                        allowances(request: _33.QueryAllowancesRequest): Promise<_33.QueryAllowancesResponse>;
                        allowancesByGranter(request: _33.QueryAllowancesByGranterRequest): Promise<_33.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _37.QueryProposalRequest): Promise<_37.QueryProposalResponse>;
                        proposals(request: _37.QueryProposalsRequest): Promise<_37.QueryProposalsResponse>;
                        vote(request: _37.QueryVoteRequest): Promise<_37.QueryVoteResponse>;
                        votes(request: _37.QueryVotesRequest): Promise<_37.QueryVotesResponse>;
                        params(request: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                        deposit(request: _37.QueryDepositRequest): Promise<_37.QueryDepositResponse>;
                        deposits(request: _37.QueryDepositsRequest): Promise<_37.QueryDepositsResponse>;
                        tallyResult(request: _37.QueryTallyResultRequest): Promise<_37.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _41.QueryProposalRequest): Promise<_41.QueryProposalResponse>;
                        proposals(request: _41.QueryProposalsRequest): Promise<_41.QueryProposalsResponse>;
                        vote(request: _41.QueryVoteRequest): Promise<_41.QueryVoteResponse>;
                        votes(request: _41.QueryVotesRequest): Promise<_41.QueryVotesResponse>;
                        params(request: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        deposit(request: _41.QueryDepositRequest): Promise<_41.QueryDepositResponse>;
                        deposits(request: _41.QueryDepositsRequest): Promise<_41.QueryDepositsResponse>;
                        tallyResult(request: _41.QueryTallyResultRequest): Promise<_41.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _45.QueryGroupInfoRequest): Promise<_45.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _45.QueryGroupPolicyInfoRequest): Promise<_45.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _45.QueryGroupMembersRequest): Promise<_45.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _45.QueryGroupsByAdminRequest): Promise<_45.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _45.QueryGroupPoliciesByGroupRequest): Promise<_45.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _45.QueryGroupPoliciesByAdminRequest): Promise<_45.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _45.QueryProposalRequest): Promise<_45.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _45.QueryProposalsByGroupPolicyRequest): Promise<_45.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _45.QueryVoteByProposalVoterRequest): Promise<_45.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _45.QueryVotesByProposalRequest): Promise<_45.QueryVotesByProposalResponse>;
                        votesByVoter(request: _45.QueryVotesByVoterRequest): Promise<_45.QueryVotesByVoterResponse>;
                        groupsByMember(request: _45.QueryGroupsByMemberRequest): Promise<_45.QueryGroupsByMemberResponse>;
                        tallyResult(request: _45.QueryTallyResultRequest): Promise<_45.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                        inflation(request?: _50.QueryInflationRequest): Promise<_50.QueryInflationResponse>;
                        annualProvisions(request?: _50.QueryAnnualProvisionsRequest): Promise<_50.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        subspaces(request?: _53.QuerySubspacesRequest): Promise<_53.QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _56.QueryValidatorsRequest): Promise<_56.QueryValidatorsResponse>;
                        validator(request: _56.QueryValidatorRequest): Promise<_56.QueryValidatorResponse>;
                        validatorDelegations(request: _56.QueryValidatorDelegationsRequest): Promise<_56.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _56.QueryValidatorUnbondingDelegationsRequest): Promise<_56.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _56.QueryDelegationRequest): Promise<_56.QueryDelegationResponse>;
                        unbondingDelegation(request: _56.QueryUnbondingDelegationRequest): Promise<_56.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _56.QueryDelegatorDelegationsRequest): Promise<_56.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _56.QueryDelegatorUnbondingDelegationsRequest): Promise<_56.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _56.QueryRedelegationsRequest): Promise<_56.QueryRedelegationsResponse>;
                        delegatorValidators(request: _56.QueryDelegatorValidatorsRequest): Promise<_56.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _56.QueryDelegatorValidatorRequest): Promise<_56.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _56.QueryHistoricalInfoRequest): Promise<_56.QueryHistoricalInfoResponse>;
                        pool(request?: _56.QueryPoolRequest): Promise<_56.QueryPoolResponse>;
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _60.SimulateRequest): Promise<_60.SimulateResponse>;
                        getTx(request: _60.GetTxRequest): Promise<_60.GetTxResponse>;
                        broadcastTx(request: _60.BroadcastTxRequest): Promise<_60.BroadcastTxResponse>;
                        getTxsEvent(request: _60.GetTxsEventRequest): Promise<_60.GetTxsEventResponse>;
                        getBlockWithTxs(request: _60.GetBlockWithTxsRequest): Promise<_60.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _62.QueryCurrentPlanRequest): Promise<_62.QueryCurrentPlanResponse>;
                        appliedPlan(request: _62.QueryAppliedPlanRequest): Promise<_62.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _62.QueryUpgradedConsensusStateRequest): Promise<_62.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _62.QueryModuleVersionsRequest): Promise<_62.QueryModuleVersionsResponse>;
                        authority(request?: _62.QueryAuthorityRequest): Promise<_62.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _139.LCDQueryClient;
                };
                authz: {
                    v1beta1: _140.LCDQueryClient;
                };
                bank: {
                    v1beta1: _141.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _142.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _143.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _144.LCDQueryClient;
                };
                gov: {
                    v1: _145.LCDQueryClient;
                    v1beta1: _146.LCDQueryClient;
                };
                group: {
                    v1: _147.LCDQueryClient;
                };
                mint: {
                    v1beta1: _148.LCDQueryClient;
                };
                params: {
                    v1beta1: _149.LCDQueryClient;
                };
                staking: {
                    v1beta1: _150.LCDQueryClient;
                };
                tx: {
                    v1beta1: _151.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _152.LCDQueryClient;
                };
            };
        }>;
    };
}
