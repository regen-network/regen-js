import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    height: Long;
    time?: Timestamp;
    power: Long;
    consensusAddress: string;
}
export interface EquivocationProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation";
    value: Uint8Array;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationAmino {
    height: string;
    time?: TimestampAmino;
    power: string;
    consensus_address: string;
}
export interface EquivocationAminoMsg {
    type: "cosmos-sdk/Equivocation";
    value: EquivocationAmino;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
    height: Long;
    time?: TimestampSDKType;
    power: Long;
    consensus_address: string;
}
export declare const Equivocation: {
    encode(message: Equivocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation;
    fromJSON(object: any): Equivocation;
    toJSON(message: Equivocation): unknown;
    fromPartial(object: Partial<Equivocation>): Equivocation;
    fromAmino(object: EquivocationAmino): Equivocation;
    toAmino(message: Equivocation): EquivocationAmino;
    fromAminoMsg(object: EquivocationAminoMsg): Equivocation;
    toAminoMsg(message: Equivocation): EquivocationAminoMsg;
    fromProtoMsg(message: EquivocationProtoMsg): Equivocation;
    toProto(message: Equivocation): Uint8Array;
    toProtoMsg(message: Equivocation): EquivocationProtoMsg;
};
