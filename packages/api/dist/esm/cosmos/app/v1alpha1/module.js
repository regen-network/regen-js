//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseModuleDescriptor() {
    return {
        goImport: "",
        usePackage: [],
        canMigrateFrom: []
    };
}
export const ModuleDescriptor = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (const v of message.usePackage) {
            PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.canMigrateFrom) {
            MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(MigrateFromInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleDescriptor();
        message.goImport = object.goImport ?? "";
        message.usePackage = object.usePackage?.map(e => PackageReference.fromPartial(e)) || [];
        message.canMigrateFrom = object.canMigrateFrom?.map(e => MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleDescriptor();
        if (object.go_import !== undefined && object.go_import !== null) {
            message.goImport = object.go_import;
        }
        message.usePackage = object.use_package?.map(e => PackageReference.fromAmino(e)) || [];
        message.canMigrateFrom = object.can_migrate_from?.map(e => MigrateFromInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.go_import = message.goImport === "" ? undefined : message.goImport;
        if (message.usePackage) {
            obj.use_package = message.usePackage.map(e => e ? PackageReference.toAmino(e) : undefined);
        }
        else {
            obj.use_package = message.usePackage;
        }
        if (message.canMigrateFrom) {
            obj.can_migrate_from = message.canMigrateFrom.map(e => e ? MigrateFromInfo.toAmino(e) : undefined);
        }
        else {
            obj.can_migrate_from = message.canMigrateFrom;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleDescriptor.decode(message.value);
    },
    toProto(message) {
        return ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: ModuleDescriptor.encode(message).finish()
        };
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
export const PackageReference = {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackageReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePackageReference();
        message.name = object.name ?? "";
        message.revision = object.revision ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBasePackageReference();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.revision !== undefined && object.revision !== null) {
            message.revision = object.revision;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.revision = message.revision === 0 ? undefined : message.revision;
        return obj;
    },
    fromAminoMsg(object) {
        return PackageReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: PackageReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PackageReference.decode(message.value);
    },
    toProto(message) {
        return PackageReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: PackageReference.encode(message).finish()
        };
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
export const MigrateFromInfo = {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMigrateFromInfo();
        message.module = object.module ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigrateFromInfo();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module === "" ? undefined : message.module;
        return obj;
    },
    fromAminoMsg(object) {
        return MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MigrateFromInfo.decode(message.value);
    },
    toProto(message) {
        return MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: MigrateFromInfo.encode(message).finish()
        };
    }
};
