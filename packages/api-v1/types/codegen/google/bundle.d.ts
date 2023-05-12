import * as _100 from "./api/http";
import * as _101 from "./protobuf/descriptor";
import * as _102 from "./protobuf/any";
import * as _103 from "./protobuf/timestamp";
import * as _104 from "./protobuf/duration";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _100.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.Http;
            fromJSON(object: any): _100.Http;
            toJSON(message: _100.Http): unknown;
            fromPartial(object: Partial<_100.Http>): _100.Http;
        };
        HttpRule: {
            encode(message: _100.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.HttpRule;
            fromJSON(object: any): _100.HttpRule;
            toJSON(message: _100.HttpRule): unknown;
            fromPartial(object: Partial<_100.HttpRule>): _100.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _100.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _100.CustomHttpPattern;
            fromJSON(object: any): _100.CustomHttpPattern;
            toJSON(message: _100.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_100.CustomHttpPattern>): _100.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _104.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.Duration;
            fromJSON(object: any): _104.Duration;
            toJSON(message: _104.Duration): unknown;
            fromPartial(object: Partial<_104.Duration>): _104.Duration;
        };
        Timestamp: {
            encode(message: _103.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _103.Timestamp;
            fromJSON(object: any): _103.Timestamp;
            toJSON(message: _103.Timestamp): unknown;
            fromPartial(object: Partial<_103.Timestamp>): _103.Timestamp;
        };
        Any: {
            encode(message: _102.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _102.Any;
            fromJSON(object: any): _102.Any;
            toJSON(message: _102.Any): unknown;
            fromPartial(object: Partial<_102.Any>): _102.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _101.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _101.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _101.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _101.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _101.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _101.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _101.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _101.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _101.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _101.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _101.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _101.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _101.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _101.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _101.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _101.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _101.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _101.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _101.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _101.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _101.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _101.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _101.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _101.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _101.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.FileDescriptorSet;
            fromJSON(object: any): _101.FileDescriptorSet;
            toJSON(message: _101.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_101.FileDescriptorSet>): _101.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _101.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.FileDescriptorProto;
            fromJSON(object: any): _101.FileDescriptorProto;
            toJSON(message: _101.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_101.FileDescriptorProto>): _101.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _101.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.DescriptorProto;
            fromJSON(object: any): _101.DescriptorProto;
            toJSON(message: _101.DescriptorProto): unknown;
            fromPartial(object: Partial<_101.DescriptorProto>): _101.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _101.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _101.DescriptorProto_ExtensionRange;
            toJSON(message: _101.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_101.DescriptorProto_ExtensionRange>): _101.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _101.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.DescriptorProto_ReservedRange;
            fromJSON(object: any): _101.DescriptorProto_ReservedRange;
            toJSON(message: _101.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_101.DescriptorProto_ReservedRange>): _101.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _101.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.ExtensionRangeOptions;
            fromJSON(object: any): _101.ExtensionRangeOptions;
            toJSON(message: _101.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_101.ExtensionRangeOptions>): _101.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _101.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.FieldDescriptorProto;
            fromJSON(object: any): _101.FieldDescriptorProto;
            toJSON(message: _101.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_101.FieldDescriptorProto>): _101.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _101.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.OneofDescriptorProto;
            fromJSON(object: any): _101.OneofDescriptorProto;
            toJSON(message: _101.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_101.OneofDescriptorProto>): _101.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _101.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.EnumDescriptorProto;
            fromJSON(object: any): _101.EnumDescriptorProto;
            toJSON(message: _101.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_101.EnumDescriptorProto>): _101.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _101.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _101.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _101.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_101.EnumDescriptorProto_EnumReservedRange>): _101.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _101.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.EnumValueDescriptorProto;
            fromJSON(object: any): _101.EnumValueDescriptorProto;
            toJSON(message: _101.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_101.EnumValueDescriptorProto>): _101.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _101.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.ServiceDescriptorProto;
            fromJSON(object: any): _101.ServiceDescriptorProto;
            toJSON(message: _101.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_101.ServiceDescriptorProto>): _101.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _101.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.MethodDescriptorProto;
            fromJSON(object: any): _101.MethodDescriptorProto;
            toJSON(message: _101.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_101.MethodDescriptorProto>): _101.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _101.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.FileOptions;
            fromJSON(object: any): _101.FileOptions;
            toJSON(message: _101.FileOptions): unknown;
            fromPartial(object: Partial<_101.FileOptions>): _101.FileOptions;
        };
        MessageOptions: {
            encode(message: _101.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.MessageOptions;
            fromJSON(object: any): _101.MessageOptions;
            toJSON(message: _101.MessageOptions): unknown;
            fromPartial(object: Partial<_101.MessageOptions>): _101.MessageOptions;
        };
        FieldOptions: {
            encode(message: _101.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.FieldOptions;
            fromJSON(object: any): _101.FieldOptions;
            toJSON(message: _101.FieldOptions): unknown;
            fromPartial(object: Partial<_101.FieldOptions>): _101.FieldOptions;
        };
        OneofOptions: {
            encode(message: _101.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.OneofOptions;
            fromJSON(object: any): _101.OneofOptions;
            toJSON(message: _101.OneofOptions): unknown;
            fromPartial(object: Partial<_101.OneofOptions>): _101.OneofOptions;
        };
        EnumOptions: {
            encode(message: _101.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.EnumOptions;
            fromJSON(object: any): _101.EnumOptions;
            toJSON(message: _101.EnumOptions): unknown;
            fromPartial(object: Partial<_101.EnumOptions>): _101.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _101.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.EnumValueOptions;
            fromJSON(object: any): _101.EnumValueOptions;
            toJSON(message: _101.EnumValueOptions): unknown;
            fromPartial(object: Partial<_101.EnumValueOptions>): _101.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _101.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.ServiceOptions;
            fromJSON(object: any): _101.ServiceOptions;
            toJSON(message: _101.ServiceOptions): unknown;
            fromPartial(object: Partial<_101.ServiceOptions>): _101.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _101.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.MethodOptions;
            fromJSON(object: any): _101.MethodOptions;
            toJSON(message: _101.MethodOptions): unknown;
            fromPartial(object: Partial<_101.MethodOptions>): _101.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _101.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.UninterpretedOption;
            fromJSON(object: any): _101.UninterpretedOption;
            toJSON(message: _101.UninterpretedOption): unknown;
            fromPartial(object: Partial<_101.UninterpretedOption>): _101.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _101.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.UninterpretedOption_NamePart;
            fromJSON(object: any): _101.UninterpretedOption_NamePart;
            toJSON(message: _101.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_101.UninterpretedOption_NamePart>): _101.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _101.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.SourceCodeInfo;
            fromJSON(object: any): _101.SourceCodeInfo;
            toJSON(message: _101.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_101.SourceCodeInfo>): _101.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _101.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.SourceCodeInfo_Location;
            fromJSON(object: any): _101.SourceCodeInfo_Location;
            toJSON(message: _101.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_101.SourceCodeInfo_Location>): _101.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _101.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.GeneratedCodeInfo;
            fromJSON(object: any): _101.GeneratedCodeInfo;
            toJSON(message: _101.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_101.GeneratedCodeInfo>): _101.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _101.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _101.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _101.GeneratedCodeInfo_Annotation;
            toJSON(message: _101.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_101.GeneratedCodeInfo_Annotation>): _101.GeneratedCodeInfo_Annotation;
        };
    };
}
