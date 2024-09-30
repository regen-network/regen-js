//@ts-nocheck
import { AllowedDenom } from "./state";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseAllowDenomProposal() {
    return {
        title: "",
        description: "",
        denom: undefined
    };
}
export const AllowDenomProposal = {
    typeUrl: "/regen.ecocredit.marketplace.v1.AllowDenomProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== undefined) {
            AllowedDenom.encode(message.denom, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowDenomProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = AllowedDenom.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAllowDenomProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.denom = object.denom !== undefined && object.denom !== null ? AllowedDenom.fromPartial(object.denom) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowDenomProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = AllowedDenom.fromAmino(object.denom);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.denom = message.denom ? AllowedDenom.toAmino(message.denom) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AllowDenomProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AllowDenomProposal.decode(message.value);
    },
    toProto(message) {
        return AllowDenomProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.AllowDenomProposal",
            value: AllowDenomProposal.encode(message).finish()
        };
    }
};
