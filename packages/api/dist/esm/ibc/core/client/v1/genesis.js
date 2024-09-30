//@ts-nocheck
import { IdentifiedClientState, ClientConsensusStates, Params } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseGenesisState() {
    return {
        clients: [],
        clientsConsensus: [],
        clientsMetadata: [],
        params: Params.fromPartial({}),
        createLocalhost: false,
        nextClientSequence: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/ibc.core.client.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.clients) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientsConsensus) {
            ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clientsMetadata) {
            IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (message.nextClientSequence !== BigInt(0)) {
            writer.uint32(48).uint64(message.nextClientSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createLocalhost = reader.bool();
                    break;
                case 6:
                    message.nextClientSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
        message.clientsConsensus = object.clientsConsensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
        message.clientsMetadata = object.clientsMetadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.createLocalhost = object.createLocalhost ?? false;
        message.nextClientSequence = object.nextClientSequence !== undefined && object.nextClientSequence !== null ? BigInt(object.nextClientSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.clients = object.clients?.map(e => IdentifiedClientState.fromAmino(e)) || [];
        message.clientsConsensus = object.clients_consensus?.map(e => ClientConsensusStates.fromAmino(e)) || [];
        message.clientsMetadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.create_localhost !== undefined && object.create_localhost !== null) {
            message.createLocalhost = object.create_localhost;
        }
        if (object.next_client_sequence !== undefined && object.next_client_sequence !== null) {
            message.nextClientSequence = BigInt(object.next_client_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.clients = message.clients;
        }
        if (message.clientsConsensus) {
            obj.clients_consensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toAmino(e) : undefined);
        }
        else {
            obj.clients_consensus = message.clientsConsensus;
        }
        if (message.clientsMetadata) {
            obj.clients_metadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.clients_metadata = message.clientsMetadata;
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.create_localhost = message.createLocalhost === false ? undefined : message.createLocalhost;
        obj.next_client_sequence = message.nextClientSequence !== BigInt(0) ? message.nextClientSequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisMetadata() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const GenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.GenesisMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisMetadata();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisMetadata();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisMetadata",
            value: GenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return GenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.GenesisMetadata",
            value: GenesisMetadata.encode(message).finish()
        };
    }
};
function createBaseIdentifiedGenesisMetadata() {
    return {
        clientId: "",
        clientMetadata: []
    };
}
export const IdentifiedGenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.clientMetadata) {
            GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedGenesisMetadata();
        message.clientId = object.clientId ?? "";
        message.clientMetadata = object.clientMetadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedGenesisMetadata();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        message.clientMetadata = object.client_metadata?.map(e => GenesisMetadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        if (message.clientMetadata) {
            obj.client_metadata = message.clientMetadata.map(e => e ? GenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.client_metadata = message.clientMetadata;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedGenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedGenesisMetadata",
            value: IdentifiedGenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedGenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return IdentifiedGenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
            value: IdentifiedGenesisMetadata.encode(message).finish()
        };
    }
};
