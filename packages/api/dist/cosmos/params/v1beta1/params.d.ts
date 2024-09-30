import { BinaryReader, BinaryWriter } from "../../../binary";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
    $typeUrl?: "/cosmos.params.v1beta1.ParameterChangeProposal";
    title: string;
    description: string;
    changes: ParamChange[];
}
export interface ParameterChangeProposalProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal";
    value: Uint8Array;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalAmino {
    title?: string;
    description?: string;
    changes?: ParamChangeAmino[];
}
export interface ParameterChangeProposalAminoMsg {
    type: "cosmos-sdk/ParameterChangeProposal";
    value: ParameterChangeProposalAmino;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalSDKType {
    $typeUrl?: "/cosmos.params.v1beta1.ParameterChangeProposal";
    title: string;
    description: string;
    changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
export interface ParamChangeProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.ParamChange";
    value: Uint8Array;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeAmino {
    subspace?: string;
    key?: string;
    value?: string;
}
export interface ParamChangeAminoMsg {
    type: "cosmos-sdk/ParamChange";
    value: ParamChangeAmino;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeSDKType {
    subspace: string;
    key: string;
    value: string;
}
export declare const ParameterChangeProposal: {
    typeUrl: string;
    encode(message: ParameterChangeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParameterChangeProposal;
    fromPartial(object: Partial<ParameterChangeProposal>): ParameterChangeProposal;
    fromAmino(object: ParameterChangeProposalAmino): ParameterChangeProposal;
    toAmino(message: ParameterChangeProposal): ParameterChangeProposalAmino;
    fromAminoMsg(object: ParameterChangeProposalAminoMsg): ParameterChangeProposal;
    toAminoMsg(message: ParameterChangeProposal): ParameterChangeProposalAminoMsg;
    fromProtoMsg(message: ParameterChangeProposalProtoMsg): ParameterChangeProposal;
    toProto(message: ParameterChangeProposal): Uint8Array;
    toProtoMsg(message: ParameterChangeProposal): ParameterChangeProposalProtoMsg;
};
export declare const ParamChange: {
    typeUrl: string;
    encode(message: ParamChange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamChange;
    fromPartial(object: Partial<ParamChange>): ParamChange;
    fromAmino(object: ParamChangeAmino): ParamChange;
    toAmino(message: ParamChange): ParamChangeAmino;
    fromAminoMsg(object: ParamChangeAminoMsg): ParamChange;
    toAminoMsg(message: ParamChange): ParamChangeAminoMsg;
    fromProtoMsg(message: ParamChangeProtoMsg): ParamChange;
    toProto(message: ParamChange): Uint8Array;
    toProtoMsg(message: ParamChange): ParamChangeProtoMsg;
};
