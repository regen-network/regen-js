import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    submitter: string;
    evidence: (Any) | undefined;
}
export interface MsgSubmitEvidenceProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
    value: Uint8Array;
}
export type MsgSubmitEvidenceEncoded = Omit<MsgSubmitEvidence, "evidence"> & {
    evidence?: AnyProtoMsg | undefined;
};
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceAmino {
    submitter: string;
    evidence?: AnyAmino;
}
export interface MsgSubmitEvidenceAminoMsg {
    type: "cosmos-sdk/MsgSubmitEvidence";
    value: MsgSubmitEvidenceAmino;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
    submitter: string;
    evidence: AnySDKType | undefined;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
    value: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseAmino {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitEvidenceResponse";
    value: MsgSubmitEvidenceResponseAmino;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    encode(message: MsgSubmitEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidence;
    fromJSON(object: any): MsgSubmitEvidence;
    toJSON(message: MsgSubmitEvidence): unknown;
    fromPartial(object: Partial<MsgSubmitEvidence>): MsgSubmitEvidence;
    fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence;
    toAmino(message: MsgSubmitEvidence): MsgSubmitEvidenceAmino;
    fromAminoMsg(object: MsgSubmitEvidenceAminoMsg): MsgSubmitEvidence;
    toAminoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceAminoMsg;
    fromProtoMsg(message: MsgSubmitEvidenceProtoMsg): MsgSubmitEvidence;
    toProto(message: MsgSubmitEvidence): Uint8Array;
    toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg;
};
export declare const MsgSubmitEvidenceResponse: {
    encode(message: MsgSubmitEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidenceResponse;
    fromJSON(object: any): MsgSubmitEvidenceResponse;
    toJSON(message: MsgSubmitEvidenceResponse): unknown;
    fromPartial(object: Partial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse;
    fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse;
    toAmino(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAmino;
    fromAminoMsg(object: MsgSubmitEvidenceResponseAminoMsg): MsgSubmitEvidenceResponse;
    toAminoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg): MsgSubmitEvidenceResponse;
    toProto(message: MsgSubmitEvidenceResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg;
};
export declare const Evidence_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Any;
export declare const Evidence_FromAmino: (content: AnyAmino) => Any;
export declare const Evidence_ToAmino: (content: Any) => AnyAmino;
