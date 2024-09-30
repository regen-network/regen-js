//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseTableDescriptor() {
    return {
        primaryKey: undefined,
        index: [],
        id: 0
    };
}
export const TableDescriptor = {
    typeUrl: "/cosmos.orm.v1.TableDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.primaryKey !== undefined) {
            PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.index) {
            SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTableDescriptor();
        message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
        message.index = object.index?.map(e => SecondaryIndexDescriptor.fromPartial(e)) || [];
        message.id = object.id ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTableDescriptor();
        if (object.primary_key !== undefined && object.primary_key !== null) {
            message.primaryKey = PrimaryKeyDescriptor.fromAmino(object.primary_key);
        }
        message.index = object.index?.map(e => SecondaryIndexDescriptor.fromAmino(e)) || [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.primary_key = message.primaryKey ? PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
        if (message.index) {
            obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.index = message.index;
        }
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return TableDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TableDescriptor",
            value: TableDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TableDescriptor.decode(message.value);
    },
    toProto(message) {
        return TableDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.TableDescriptor",
            value: TableDescriptor.encode(message).finish()
        };
    }
};
function createBasePrimaryKeyDescriptor() {
    return {
        fields: "",
        autoIncrement: false
    };
}
export const PrimaryKeyDescriptor = {
    typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.autoIncrement = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrimaryKeyDescriptor();
        message.fields = object.fields ?? "";
        message.autoIncrement = object.autoIncrement ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBasePrimaryKeyDescriptor();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = object.fields;
        }
        if (object.auto_increment !== undefined && object.auto_increment !== null) {
            message.autoIncrement = object.auto_increment;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields === "" ? undefined : message.fields;
        obj.auto_increment = message.autoIncrement === false ? undefined : message.autoIncrement;
        return obj;
    },
    fromAminoMsg(object) {
        return PrimaryKeyDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrimaryKeyDescriptor",
            value: PrimaryKeyDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PrimaryKeyDescriptor.decode(message.value);
    },
    toProto(message) {
        return PrimaryKeyDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
            value: PrimaryKeyDescriptor.encode(message).finish()
        };
    }
};
function createBaseSecondaryIndexDescriptor() {
    return {
        fields: "",
        id: 0,
        unique: false
    };
}
export const SecondaryIndexDescriptor = {
    typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSecondaryIndexDescriptor();
        message.fields = object.fields ?? "";
        message.id = object.id ?? 0;
        message.unique = object.unique ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSecondaryIndexDescriptor();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = object.fields;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.unique !== undefined && object.unique !== null) {
            message.unique = object.unique;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields === "" ? undefined : message.fields;
        obj.id = message.id === 0 ? undefined : message.id;
        obj.unique = message.unique === false ? undefined : message.unique;
        return obj;
    },
    fromAminoMsg(object) {
        return SecondaryIndexDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SecondaryIndexDescriptor",
            value: SecondaryIndexDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SecondaryIndexDescriptor.decode(message.value);
    },
    toProto(message) {
        return SecondaryIndexDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
            value: SecondaryIndexDescriptor.encode(message).finish()
        };
    }
};
function createBaseSingletonDescriptor() {
    return {
        id: 0
    };
}
export const SingletonDescriptor = {
    typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSingletonDescriptor();
        message.id = object.id ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSingletonDescriptor();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return SingletonDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SingletonDescriptor",
            value: SingletonDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SingletonDescriptor.decode(message.value);
    },
    toProto(message) {
        return SingletonDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
            value: SingletonDescriptor.encode(message).finish()
        };
    }
};
