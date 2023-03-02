/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { AllowedDenom } from './state';

export const protobufPackage = 'regen.ecocredit.marketplace.v1';

/**
 * AllowDenomProposal is a gov Content type for approving a denom for use in the
 * marketplace.
 *
 * Deprecated (Since Revision 1): This message is no longer used and will be
 * removed in the next version. See MsgAddAllowedDenom.
 */
export interface AllowDenomProposal {
  $type: 'regen.ecocredit.marketplace.v1.AllowDenomProposal';
  /** title is the title of the proposal. */
  title: string;
  /** description is the description of the proposal. */
  description: string;
  /**
   * denom contains coin denom information that will be added to the
   * list of allowed denoms for use in the marketplace.
   */
  denom?: AllowedDenom;
}

function createBaseAllowDenomProposal(): AllowDenomProposal {
  return {
    $type: 'regen.ecocredit.marketplace.v1.AllowDenomProposal',
    title: '',
    description: '',
    denom: undefined,
  };
}

export const AllowDenomProposal = {
  $type: 'regen.ecocredit.marketplace.v1.AllowDenomProposal' as const,

  encode(
    message: AllowDenomProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== undefined) {
      AllowedDenom.encode(message.denom, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowDenomProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowDenomProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = AllowedDenom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowDenomProposal {
    return {
      $type: AllowDenomProposal.$type,
      title: isSet(object.title) ? String(object.title) : '',
      description: isSet(object.description) ? String(object.description) : '',
      denom: isSet(object.denom)
        ? AllowedDenom.fromJSON(object.denom)
        : undefined,
    };
  },

  toJSON(message: AllowDenomProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined &&
      (obj.denom = message.denom
        ? AllowedDenom.toJSON(message.denom)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowDenomProposal>, I>>(
    object: I,
  ): AllowDenomProposal {
    const message = createBaseAllowDenomProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? AllowedDenom.fromPartial(object.denom)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AllowDenomProposal.$type, AllowDenomProposal);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
