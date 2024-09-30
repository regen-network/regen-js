"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseModuleDescriptor() {
    return {
        goImport: "",
        usePackage: [],
        canMigrateFrom: []
    };
}
exports.ModuleDescriptor = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (const v of message.usePackage) {
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.canMigrateFrom) {
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
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
        message.usePackage = object.usePackage?.map(e => exports.PackageReference.fromPartial(e)) || [];
        message.canMigrateFrom = object.canMigrateFrom?.map(e => exports.MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleDescriptor();
        if (object.go_import !== undefined && object.go_import !== null) {
            message.goImport = object.go_import;
        }
        message.usePackage = object.use_package?.map(e => exports.PackageReference.fromAmino(e)) || [];
        message.canMigrateFrom = object.can_migrate_from?.map(e => exports.MigrateFromInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.go_import = message.goImport === "" ? undefined : message.goImport;
        if (message.usePackage) {
            obj.use_package = message.usePackage.map(e => e ? exports.PackageReference.toAmino(e) : undefined);
        }
        else {
            obj.use_package = message.usePackage;
        }
        if (message.canMigrateFrom) {
            obj.can_migrate_from = message.canMigrateFrom.map(e => e ? exports.MigrateFromInfo.toAmino(e) : undefined);
        }
        else {
            obj.can_migrate_from = message.canMigrateFrom;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: exports.ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: exports.ModuleDescriptor.encode(message).finish()
        };
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
exports.PackageReference = {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.PackageReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: exports.PackageReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PackageReference.decode(message.value);
    },
    toProto(message) {
        return exports.PackageReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: exports.PackageReference.encode(message).finish()
        };
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
exports.MigrateFromInfo = {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: exports.MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MigrateFromInfo.decode(message.value);
    },
    toProto(message) {
        return exports.MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: exports.MigrateFromInfo.encode(message).finish()
        };
    }
};
