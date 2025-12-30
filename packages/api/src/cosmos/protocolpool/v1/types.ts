//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** ContinuousFund defines the fields of continuous fund proposal. */
export interface ContinuousFund {
  /** Recipient is the address string of the account receiving funds. */
  recipient: string;
  /** Percentage is the percentage of funds to be allocated from Community pool. */
  percentage: string;
  /** Optional, if expiry is set, removes the state object when expired. */
  expiry?: Date;
}
export interface ContinuousFundProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.ContinuousFund";
  value: Uint8Array;
}
/** ContinuousFund defines the fields of continuous fund proposal. */
export interface ContinuousFundAmino {
  /** Recipient is the address string of the account receiving funds. */
  recipient?: string;
  /** Percentage is the percentage of funds to be allocated from Community pool. */
  percentage?: string;
  /** Optional, if expiry is set, removes the state object when expired. */
  expiry?: string;
}
export interface ContinuousFundAminoMsg {
  type: "cosmos-sdk/ContinuousFund";
  value: ContinuousFundAmino;
}
/** ContinuousFund defines the fields of continuous fund proposal. */
export interface ContinuousFundSDKType {
  recipient: string;
  percentage: string;
  expiry?: Date;
}
/** Params defines the parameters for the protocolpool module. */
export interface Params {
  /**
   * EnabledDistributionDenoms lists the denoms that are allowed to be distributed.
   * This is to avoid spending time distributing undesired tokens to continuous funds and budgets.
   */
  enabledDistributionDenoms: string[];
  /**
   * DistributionFrequency is the frequency (in terms of blocks) that funds are distributed out from the
   * x/protocolpool module.
   */
  distributionFrequency: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the protocolpool module. */
export interface ParamsAmino {
  /**
   * EnabledDistributionDenoms lists the denoms that are allowed to be distributed.
   * This is to avoid spending time distributing undesired tokens to continuous funds and budgets.
   */
  enabled_distribution_denoms?: string[];
  /**
   * DistributionFrequency is the frequency (in terms of blocks) that funds are distributed out from the
   * x/protocolpool module.
   */
  distribution_frequency?: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the protocolpool module. */
export interface ParamsSDKType {
  enabled_distribution_denoms: string[];
  distribution_frequency: bigint;
}
function createBaseContinuousFund(): ContinuousFund {
  return {
    recipient: "",
    percentage: "",
    expiry: undefined
  };
}
export const ContinuousFund = {
  typeUrl: "/cosmos.protocolpool.v1.ContinuousFund",
  encode(message: ContinuousFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.percentage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.percentage, 18).atomics);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContinuousFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.percentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContinuousFund>): ContinuousFund {
    const message = createBaseContinuousFund();
    message.recipient = object.recipient ?? "";
    message.percentage = object.percentage ?? "";
    message.expiry = object.expiry ?? undefined;
    return message;
  },
  fromAmino(object: ContinuousFundAmino): ContinuousFund {
    const message = createBaseContinuousFund();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = fromTimestamp(Timestamp.fromAmino(object.expiry));
    }
    return message;
  },
  toAmino(message: ContinuousFund): ContinuousFundAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.percentage = message.percentage === "" ? undefined : message.percentage;
    obj.expiry = message.expiry ? Timestamp.toAmino(toTimestamp(message.expiry)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContinuousFundAminoMsg): ContinuousFund {
    return ContinuousFund.fromAmino(object.value);
  },
  toAminoMsg(message: ContinuousFund): ContinuousFundAminoMsg {
    return {
      type: "cosmos-sdk/ContinuousFund",
      value: ContinuousFund.toAmino(message)
    };
  },
  fromProtoMsg(message: ContinuousFundProtoMsg): ContinuousFund {
    return ContinuousFund.decode(message.value);
  },
  toProto(message: ContinuousFund): Uint8Array {
    return ContinuousFund.encode(message).finish();
  },
  toProtoMsg(message: ContinuousFund): ContinuousFundProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.ContinuousFund",
      value: ContinuousFund.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enabledDistributionDenoms: [],
    distributionFrequency: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cosmos.protocolpool.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.enabledDistributionDenoms) {
      writer.uint32(10).string(v!);
    }
    if (message.distributionFrequency !== BigInt(0)) {
      writer.uint32(16).uint64(message.distributionFrequency);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabledDistributionDenoms.push(reader.string());
          break;
        case 2:
          message.distributionFrequency = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabledDistributionDenoms = object.enabledDistributionDenoms?.map(e => e) || [];
    message.distributionFrequency = object.distributionFrequency !== undefined && object.distributionFrequency !== null ? BigInt(object.distributionFrequency.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.enabledDistributionDenoms = object.enabled_distribution_denoms?.map(e => e) || [];
    if (object.distribution_frequency !== undefined && object.distribution_frequency !== null) {
      message.distributionFrequency = BigInt(object.distribution_frequency);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.enabledDistributionDenoms) {
      obj.enabled_distribution_denoms = message.enabledDistributionDenoms.map(e => e);
    } else {
      obj.enabled_distribution_denoms = message.enabledDistributionDenoms;
    }
    obj.distribution_frequency = message.distributionFrequency !== BigInt(0) ? message.distributionFrequency?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};