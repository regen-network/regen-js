//@ts-nocheck
import { ContinuousFund, ContinuousFundAmino, ContinuousFundSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the protocolpool module's genesis state. */
export interface GenesisState {
  /** ContinuousFunds defines the continuous funds at genesis. */
  continuousFunds: ContinuousFund[];
  /**
   * Params defines the parameters of this module, currently only contains the
   * denoms that will be used for continuous fund distributions.
   */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the protocolpool module's genesis state. */
export interface GenesisStateAmino {
  /** ContinuousFunds defines the continuous funds at genesis. */
  continuous_funds?: ContinuousFundAmino[];
  /**
   * Params defines the parameters of this module, currently only contains the
   * denoms that will be used for continuous fund distributions.
   */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the protocolpool module's genesis state. */
export interface GenesisStateSDKType {
  continuous_funds: ContinuousFundSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    continuousFunds: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.protocolpool.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.continuousFunds.push(ContinuousFund.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.continuousFunds = object.continuousFunds?.map(e => ContinuousFund.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.continuousFunds = object.continuous_funds?.map(e => ContinuousFund.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuous_funds = message.continuousFunds.map(e => e ? ContinuousFund.toAmino(e) : undefined);
    } else {
      obj.continuous_funds = message.continuousFunds;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};