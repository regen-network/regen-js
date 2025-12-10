//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Token defines a struct which represents a token to be transferred. */
export interface Token {
  /** the token denomination */
  denom: Denom;
  /** the token amount to be transferred */
  amount: string;
}
export interface TokenProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Token";
  value: Uint8Array;
}
/** Token defines a struct which represents a token to be transferred. */
export interface TokenAmino {
  /** the token denomination */
  denom?: DenomAmino;
  /** the token amount to be transferred */
  amount?: string;
}
export interface TokenAminoMsg {
  type: "cosmos-sdk/Token";
  value: TokenAmino;
}
/** Token defines a struct which represents a token to be transferred. */
export interface TokenSDKType {
  denom: DenomSDKType;
  amount: string;
}
/** Denom holds the base denom of a Token and a trace of the chains it was sent through. */
export interface Denom {
  /** the base token denomination */
  base: string;
  /** the trace of the token */
  trace: Hop[];
}
export interface DenomProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Denom";
  value: Uint8Array;
}
/** Denom holds the base denom of a Token and a trace of the chains it was sent through. */
export interface DenomAmino {
  /** the base token denomination */
  base?: string;
  /** the trace of the token */
  trace?: HopAmino[];
}
export interface DenomAminoMsg {
  type: "cosmos-sdk/Denom";
  value: DenomAmino;
}
/** Denom holds the base denom of a Token and a trace of the chains it was sent through. */
export interface DenomSDKType {
  base: string;
  trace: HopSDKType[];
}
/** Hop defines a port ID, channel ID pair specifying a unique "hop" in a trace */
export interface Hop {
  portId: string;
  channelId: string;
}
export interface HopProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Hop";
  value: Uint8Array;
}
/** Hop defines a port ID, channel ID pair specifying a unique "hop" in a trace */
export interface HopAmino {
  port_id?: string;
  channel_id?: string;
}
export interface HopAminoMsg {
  type: "cosmos-sdk/Hop";
  value: HopAmino;
}
/** Hop defines a port ID, channel ID pair specifying a unique "hop" in a trace */
export interface HopSDKType {
  port_id: string;
  channel_id: string;
}
function createBaseToken(): Token {
  return {
    denom: Denom.fromPartial({}),
    amount: ""
  };
}
export const Token = {
  typeUrl: "/ibc.applications.transfer.v1.Token",
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromAmino(object.denom);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  toAminoMsg(message: Token): TokenAminoMsg {
    return {
      type: "cosmos-sdk/Token",
      value: Token.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Token",
      value: Token.encode(message).finish()
    };
  }
};
function createBaseDenom(): Denom {
  return {
    base: "",
    trace: []
  };
}
export const Denom = {
  typeUrl: "/ibc.applications.transfer.v1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    for (const v of message.trace) {
      Hop.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 3:
          message.trace.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.base = object.base ?? "";
    message.trace = object.trace?.map(e => Hop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    message.trace = object.trace?.map(e => Hop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.base = message.base === "" ? undefined : message.base;
    if (message.trace) {
      obj.trace = message.trace.map(e => e ? Hop.toAmino(e) : undefined);
    } else {
      obj.trace = message.trace;
    }
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  toAminoMsg(message: Denom): DenomAminoMsg {
    return {
      type: "cosmos-sdk/Denom",
      value: Denom.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
function createBaseHop(): Hop {
  return {
    portId: "",
    channelId: ""
  };
}
export const Hop = {
  typeUrl: "/ibc.applications.transfer.v1.Hop",
  encode(message: Hop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Hop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Hop>): Hop {
    const message = createBaseHop();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: HopAmino): Hop {
    const message = createBaseHop();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: Hop): HopAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: HopAminoMsg): Hop {
    return Hop.fromAmino(object.value);
  },
  toAminoMsg(message: Hop): HopAminoMsg {
    return {
      type: "cosmos-sdk/Hop",
      value: Hop.toAmino(message)
    };
  },
  fromProtoMsg(message: HopProtoMsg): Hop {
    return Hop.decode(message.value);
  },
  toProto(message: Hop): Uint8Array {
    return Hop.encode(message).finish();
  },
  toProtoMsg(message: Hop): HopProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Hop",
      value: Hop.encode(message).finish()
    };
  }
};