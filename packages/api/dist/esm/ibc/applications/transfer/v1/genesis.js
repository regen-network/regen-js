//@ts-nocheck
import { DenomTrace, Params } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseGenesisState() {
    return {
        portId: "",
        denomTraces: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/ibc.applications.transfer.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        for (const v of message.denomTraces) {
            DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.portId = reader.string();
                    break;
                case 2:
                    message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.portId = object.portId ?? "";
        message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        message.denomTraces = object.denom_traces?.map(e => DenomTrace.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        if (message.denomTraces) {
            obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = message.denomTraces;
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
            typeUrl: "/ibc.applications.transfer.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
