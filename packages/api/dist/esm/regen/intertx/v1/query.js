//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryInterchainAccountRequest() {
    return {
        owner: "",
        connectionId: ""
    };
}
export const QueryInterchainAccountRequest = {
    typeUrl: "/regen.intertx.v1.QueryInterchainAccountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountRequest();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInterchainAccountRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInterchainAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInterchainAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInterchainAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.intertx.v1.QueryInterchainAccountRequest",
            value: QueryInterchainAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInterchainAccountResponse() {
    return {
        interchainAccountAddress: ""
    };
}
export const QueryInterchainAccountResponse = {
    typeUrl: "/regen.intertx.v1.QueryInterchainAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchainAccountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountResponse();
        message.interchainAccountAddress = object.interchainAccountAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInterchainAccountResponse();
        if (object.interchain_account_address !== undefined && object.interchain_account_address !== null) {
            message.interchainAccountAddress = object.interchain_account_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.interchain_account_address = message.interchainAccountAddress === "" ? undefined : message.interchainAccountAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInterchainAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInterchainAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInterchainAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.intertx.v1.QueryInterchainAccountResponse",
            value: QueryInterchainAccountResponse.encode(message).finish()
        };
    }
};
