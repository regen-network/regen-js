import * as _100 from "./protobuf/descriptor";
import * as _101 from "./protobuf/any";
import * as _102 from "./protobuf/timestamp";
import * as _103 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _103.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.Duration;
            fromJSON(object: any): _103.Duration;
            toJSON(message: _103.Duration): unknown;
            fromPartial(object: Partial<_103.Duration>): _103.Duration;
        };
        Timestamp: {
            encode(message: _102.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _102.Timestamp;
            fromJSON(object: any): _102.Timestamp;
            toJSON(message: _102.Timestamp): unknown;
            fromPartial(object: Partial<_102.Timestamp>): _102.Timestamp;
        };
        Any: {
            encode(message: _101.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.Any;
            fromJSON(object: any): _101.Any;
            toJSON(message: _101.Any): unknown;
            fromPartial(object: Partial<_101.Any>): _101.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _100.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _100.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _100.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _100.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _100.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _100.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _100.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _100.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _100.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _100.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _100.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _100.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _100.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _100.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _100.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _100.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _100.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _100.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _100.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _100.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _100.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _100.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _100.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _100.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _100.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FileDescriptorSet;
            fromJSON(object: any): _100.FileDescriptorSet;
            toJSON(message: _100.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_100.FileDescriptorSet>): _100.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _100.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FileDescriptorProto;
            fromJSON(object: any): _100.FileDescriptorProto;
            toJSON(message: _100.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_100.FileDescriptorProto>): _100.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _100.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.DescriptorProto;
            fromJSON(object: any): _100.DescriptorProto;
            toJSON(message: _100.DescriptorProto): unknown;
            fromPartial(object: Partial<_100.DescriptorProto>): _100.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _100.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _100.DescriptorProto_ExtensionRange;
            toJSON(message: _100.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_100.DescriptorProto_ExtensionRange>): _100.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _100.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.DescriptorProto_ReservedRange;
            fromJSON(object: any): _100.DescriptorProto_ReservedRange;
            toJSON(message: _100.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_100.DescriptorProto_ReservedRange>): _100.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _100.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.ExtensionRangeOptions;
            fromJSON(object: any): _100.ExtensionRangeOptions;
            toJSON(message: _100.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_100.ExtensionRangeOptions>): _100.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _100.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FieldDescriptorProto;
            fromJSON(object: any): _100.FieldDescriptorProto;
            toJSON(message: _100.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_100.FieldDescriptorProto>): _100.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _100.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.OneofDescriptorProto;
            fromJSON(object: any): _100.OneofDescriptorProto;
            toJSON(message: _100.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_100.OneofDescriptorProto>): _100.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _100.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.EnumDescriptorProto;
            fromJSON(object: any): _100.EnumDescriptorProto;
            toJSON(message: _100.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_100.EnumDescriptorProto>): _100.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _100.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _100.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _100.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_100.EnumDescriptorProto_EnumReservedRange>): _100.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _100.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.EnumValueDescriptorProto;
            fromJSON(object: any): _100.EnumValueDescriptorProto;
            toJSON(message: _100.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_100.EnumValueDescriptorProto>): _100.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _100.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.ServiceDescriptorProto;
            fromJSON(object: any): _100.ServiceDescriptorProto;
            toJSON(message: _100.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_100.ServiceDescriptorProto>): _100.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _100.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.MethodDescriptorProto;
            fromJSON(object: any): _100.MethodDescriptorProto;
            toJSON(message: _100.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_100.MethodDescriptorProto>): _100.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _100.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FileOptions;
            fromJSON(object: any): _100.FileOptions;
            toJSON(message: _100.FileOptions): unknown;
            fromPartial(object: Partial<_100.FileOptions>): _100.FileOptions;
        };
        MessageOptions: {
            encode(message: _100.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.MessageOptions;
            fromJSON(object: any): _100.MessageOptions;
            toJSON(message: _100.MessageOptions): unknown;
            fromPartial(object: Partial<_100.MessageOptions>): _100.MessageOptions;
        };
        FieldOptions: {
            encode(message: _100.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.FieldOptions;
            fromJSON(object: any): _100.FieldOptions;
            toJSON(message: _100.FieldOptions): unknown;
            fromPartial(object: Partial<_100.FieldOptions>): _100.FieldOptions;
        };
        OneofOptions: {
            encode(message: _100.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.OneofOptions;
            fromJSON(object: any): _100.OneofOptions;
            toJSON(message: _100.OneofOptions): unknown;
            fromPartial(object: Partial<_100.OneofOptions>): _100.OneofOptions;
        };
        EnumOptions: {
            encode(message: _100.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.EnumOptions;
            fromJSON(object: any): _100.EnumOptions;
            toJSON(message: _100.EnumOptions): unknown;
            fromPartial(object: Partial<_100.EnumOptions>): _100.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _100.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.EnumValueOptions;
            fromJSON(object: any): _100.EnumValueOptions;
            toJSON(message: _100.EnumValueOptions): unknown;
            fromPartial(object: Partial<_100.EnumValueOptions>): _100.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _100.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.ServiceOptions;
            fromJSON(object: any): _100.ServiceOptions;
            toJSON(message: _100.ServiceOptions): unknown;
            fromPartial(object: Partial<_100.ServiceOptions>): _100.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _100.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.MethodOptions;
            fromJSON(object: any): _100.MethodOptions;
            toJSON(message: _100.MethodOptions): unknown;
            fromPartial(object: Partial<_100.MethodOptions>): _100.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _100.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.UninterpretedOption;
            fromJSON(object: any): _100.UninterpretedOption;
            toJSON(message: _100.UninterpretedOption): unknown;
            fromPartial(object: Partial<_100.UninterpretedOption>): _100.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _100.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.UninterpretedOption_NamePart;
            fromJSON(object: any): _100.UninterpretedOption_NamePart;
            toJSON(message: _100.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_100.UninterpretedOption_NamePart>): _100.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _100.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.SourceCodeInfo;
            fromJSON(object: any): _100.SourceCodeInfo;
            toJSON(message: _100.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_100.SourceCodeInfo>): _100.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _100.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.SourceCodeInfo_Location;
            fromJSON(object: any): _100.SourceCodeInfo_Location;
            toJSON(message: _100.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_100.SourceCodeInfo_Location>): _100.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _100.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.GeneratedCodeInfo;
            fromJSON(object: any): _100.GeneratedCodeInfo;
            toJSON(message: _100.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_100.GeneratedCodeInfo>): _100.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _100.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _100.GeneratedCodeInfo_Annotation;
            toJSON(message: _100.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_100.GeneratedCodeInfo_Annotation>): _100.GeneratedCodeInfo_Annotation;
        };
    };
}
