/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.base.reflection.v2alpha1';

/** Since: cosmos-sdk 0.43 */

/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.AppDescriptor';
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptor;
  /** chain provides the chain descriptor */
  chain?: ChainDescriptor;
  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptor;
  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptor;
  /** query_services provides metadata information regarding the available queriable endpoints */
  queryServices?: QueryServicesDescriptor;
  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptor;
}

/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.TxDescriptor';
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname: string;
  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs: MsgDescriptor[];
}

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.AuthnDescriptor';
  /** sign_modes defines the supported signature algorithm */
  signModes: SigningModeDescriptor[];
}

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.SigningModeDescriptor';
  /** name defines the unique name of the signing mode */
  name: string;
  /** number is the unique int32 identifier for the sign_mode enum */
  number: number;
  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authnInfoProviderMethodFullname: string;
}

/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.ChainDescriptor';
  /** id is the chain id */
  id: string;
}

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.CodecDescriptor';
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces: InterfaceDescriptor[];
}

/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.InterfaceDescriptor';
  /** fullname is the name of the interface */
  fullname: string;
  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
  /** interface_implementers is a list of the descriptors of the interface implementers */
  interfaceImplementers: InterfaceImplementerDescriptor[];
}

/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor';
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname: string;
  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  typeUrl: string;
}

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor';
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname: string;
  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  fieldDescriptorNames: string[];
}

/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.ConfigurationDescriptor';
  /** bech32_account_address_prefix is the account address prefix */
  bech32AccountAddressPrefix: string;
}

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.MsgDescriptor';
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msgTypeUrl: string;
}

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
  $type: 'cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest';
}

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
  $type: 'cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse';
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptor;
}

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
  $type: 'cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest';
}

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
  $type: 'cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse';
  /** chain describes application chain information */
  chain?: ChainDescriptor;
}

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
  $type: 'cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest';
}

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
  $type: 'cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse';
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptor;
}

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
  $type: 'cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest';
}

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
  $type: 'cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse';
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptor;
}

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
  $type: 'cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest';
}

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
  $type: 'cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse';
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptor;
}

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
  $type: 'cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest';
}

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
  $type: 'cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse';
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptor;
}

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.QueryServicesDescriptor';
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  queryServices: QueryServiceDescriptor[];
}

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.QueryServiceDescriptor';
  /** fullname is the protobuf fullname of the service descriptor */
  fullname: string;
  /** is_module describes if this service is actually exposed by an application's module */
  isModule: boolean;
  /** methods provides a list of query service methods */
  methods: QueryMethodDescriptor[];
}

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
  $type: 'cosmos.base.reflection.v2alpha1.QueryMethodDescriptor';
  /** name is the protobuf name (not fullname) of the method */
  name: string;
  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  fullQueryPath: string;
}

function createBaseAppDescriptor(): AppDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.AppDescriptor',
    authn: undefined,
    chain: undefined,
    codec: undefined,
    configuration: undefined,
    queryServices: undefined,
    tx: undefined,
  };
}

export const AppDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.AppDescriptor' as const,

  encode(
    message: AppDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(
        message.configuration,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(
        message.queryServices,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.queryServices = QueryServicesDescriptor.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppDescriptor {
    return {
      $type: AppDescriptor.$type,
      authn: isSet(object.authn)
        ? AuthnDescriptor.fromJSON(object.authn)
        : undefined,
      chain: isSet(object.chain)
        ? ChainDescriptor.fromJSON(object.chain)
        : undefined,
      codec: isSet(object.codec)
        ? CodecDescriptor.fromJSON(object.codec)
        : undefined,
      configuration: isSet(object.configuration)
        ? ConfigurationDescriptor.fromJSON(object.configuration)
        : undefined,
      queryServices: isSet(object.queryServices)
        ? QueryServicesDescriptor.fromJSON(object.queryServices)
        : undefined,
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined,
    };
  },

  toJSON(message: AppDescriptor): unknown {
    const obj: any = {};
    message.authn !== undefined &&
      (obj.authn = message.authn
        ? AuthnDescriptor.toJSON(message.authn)
        : undefined);
    message.chain !== undefined &&
      (obj.chain = message.chain
        ? ChainDescriptor.toJSON(message.chain)
        : undefined);
    message.codec !== undefined &&
      (obj.codec = message.codec
        ? CodecDescriptor.toJSON(message.codec)
        : undefined);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration
        ? ConfigurationDescriptor.toJSON(message.configuration)
        : undefined);
    message.queryServices !== undefined &&
      (obj.queryServices = message.queryServices
        ? QueryServicesDescriptor.toJSON(message.queryServices)
        : undefined);
    message.tx !== undefined &&
      (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppDescriptor>, I>>(
    object: I,
  ): AppDescriptor {
    const message = createBaseAppDescriptor();
    message.authn =
      object.authn !== undefined && object.authn !== null
        ? AuthnDescriptor.fromPartial(object.authn)
        : undefined;
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? ChainDescriptor.fromPartial(object.chain)
        : undefined;
    message.codec =
      object.codec !== undefined && object.codec !== null
        ? CodecDescriptor.fromPartial(object.codec)
        : undefined;
    message.configuration =
      object.configuration !== undefined && object.configuration !== null
        ? ConfigurationDescriptor.fromPartial(object.configuration)
        : undefined;
    message.queryServices =
      object.queryServices !== undefined && object.queryServices !== null
        ? QueryServicesDescriptor.fromPartial(object.queryServices)
        : undefined;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? TxDescriptor.fromPartial(object.tx)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(AppDescriptor.$type, AppDescriptor);

function createBaseTxDescriptor(): TxDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.TxDescriptor',
    fullname: '',
    msgs: [],
  };
}

export const TxDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.TxDescriptor' as const,

  encode(
    message: TxDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fullname !== '') {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxDescriptor {
    return {
      $type: TxDescriptor.$type,
      fullname: isSet(object.fullname) ? String(object.fullname) : '',
      msgs: Array.isArray(object?.msgs)
        ? object.msgs.map((e: any) => MsgDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TxDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e =>
        e ? MsgDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.msgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxDescriptor>, I>>(
    object: I,
  ): TxDescriptor {
    const message = createBaseTxDescriptor();
    message.fullname = object.fullname ?? '';
    message.msgs = object.msgs?.map(e => MsgDescriptor.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(TxDescriptor.$type, TxDescriptor);

function createBaseAuthnDescriptor(): AuthnDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.AuthnDescriptor',
    signModes: [],
  };
}

export const AuthnDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.AuthnDescriptor' as const,

  encode(
    message: AuthnDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthnDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signModes.push(
            SigningModeDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthnDescriptor {
    return {
      $type: AuthnDescriptor.$type,
      signModes: Array.isArray(object?.signModes)
        ? object.signModes.map((e: any) => SigningModeDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuthnDescriptor): unknown {
    const obj: any = {};
    if (message.signModes) {
      obj.signModes = message.signModes.map(e =>
        e ? SigningModeDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.signModes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthnDescriptor>, I>>(
    object: I,
  ): AuthnDescriptor {
    const message = createBaseAuthnDescriptor();
    message.signModes =
      object.signModes?.map(e => SigningModeDescriptor.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AuthnDescriptor.$type, AuthnDescriptor);

function createBaseSigningModeDescriptor(): SigningModeDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.SigningModeDescriptor',
    name: '',
    number: 0,
    authnInfoProviderMethodFullname: '',
  };
}

export const SigningModeDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.SigningModeDescriptor' as const,

  encode(
    message: SigningModeDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== '') {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SigningModeDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningModeDescriptor {
    return {
      $type: SigningModeDescriptor.$type,
      name: isSet(object.name) ? String(object.name) : '',
      number: isSet(object.number) ? Number(object.number) : 0,
      authnInfoProviderMethodFullname: isSet(
        object.authnInfoProviderMethodFullname,
      )
        ? String(object.authnInfoProviderMethodFullname)
        : '',
    };
  },

  toJSON(message: SigningModeDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.authnInfoProviderMethodFullname !== undefined &&
      (obj.authnInfoProviderMethodFullname =
        message.authnInfoProviderMethodFullname);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningModeDescriptor>, I>>(
    object: I,
  ): SigningModeDescriptor {
    const message = createBaseSigningModeDescriptor();
    message.name = object.name ?? '';
    message.number = object.number ?? 0;
    message.authnInfoProviderMethodFullname =
      object.authnInfoProviderMethodFullname ?? '';
    return message;
  },
};

messageTypeRegistry.set(SigningModeDescriptor.$type, SigningModeDescriptor);

function createBaseChainDescriptor(): ChainDescriptor {
  return { $type: 'cosmos.base.reflection.v2alpha1.ChainDescriptor', id: '' };
}

export const ChainDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.ChainDescriptor' as const,

  encode(
    message: ChainDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainDescriptor {
    return {
      $type: ChainDescriptor.$type,
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: ChainDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainDescriptor>, I>>(
    object: I,
  ): ChainDescriptor {
    const message = createBaseChainDescriptor();
    message.id = object.id ?? '';
    return message;
  },
};

messageTypeRegistry.set(ChainDescriptor.$type, ChainDescriptor);

function createBaseCodecDescriptor(): CodecDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.CodecDescriptor',
    interfaces: [],
  };
}

export const CodecDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.CodecDescriptor' as const,

  encode(
    message: CodecDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodecDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(
            InterfaceDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CodecDescriptor {
    return {
      $type: CodecDescriptor.$type,
      interfaces: Array.isArray(object?.interfaces)
        ? object.interfaces.map((e: any) => InterfaceDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CodecDescriptor): unknown {
    const obj: any = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e =>
        e ? InterfaceDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.interfaces = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CodecDescriptor>, I>>(
    object: I,
  ): CodecDescriptor {
    const message = createBaseCodecDescriptor();
    message.interfaces =
      object.interfaces?.map(e => InterfaceDescriptor.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CodecDescriptor.$type, CodecDescriptor);

function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.InterfaceDescriptor',
    fullname: '',
    interfaceAcceptingMessages: [],
    interfaceImplementers: [],
  };
}

export const InterfaceDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.InterfaceDescriptor' as const,

  encode(
    message: InterfaceDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fullname !== '') {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interfaceAcceptingMessages.push(
            InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.interfaceImplementers.push(
            InterfaceImplementerDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceDescriptor {
    return {
      $type: InterfaceDescriptor.$type,
      fullname: isSet(object.fullname) ? String(object.fullname) : '',
      interfaceAcceptingMessages: Array.isArray(
        object?.interfaceAcceptingMessages,
      )
        ? object.interfaceAcceptingMessages.map((e: any) =>
            InterfaceAcceptingMessageDescriptor.fromJSON(e),
          )
        : [],
      interfaceImplementers: Array.isArray(object?.interfaceImplementers)
        ? object.interfaceImplementers.map((e: any) =>
            InterfaceImplementerDescriptor.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: InterfaceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.interfaceAcceptingMessages) {
      obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(
        e => (e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined),
      );
    } else {
      obj.interfaceAcceptingMessages = [];
    }
    if (message.interfaceImplementers) {
      obj.interfaceImplementers = message.interfaceImplementers.map(e =>
        e ? InterfaceImplementerDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.interfaceImplementers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterfaceDescriptor>, I>>(
    object: I,
  ): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.fullname = object.fullname ?? '';
    message.interfaceAcceptingMessages =
      object.interfaceAcceptingMessages?.map(e =>
        InterfaceAcceptingMessageDescriptor.fromPartial(e),
      ) || [];
    message.interfaceImplementers =
      object.interfaceImplementers?.map(e =>
        InterfaceImplementerDescriptor.fromPartial(e),
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(InterfaceDescriptor.$type, InterfaceDescriptor);

function createBaseInterfaceImplementerDescriptor(): InterfaceImplementerDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor',
    fullname: '',
    typeUrl: '',
  };
}

export const InterfaceImplementerDescriptor = {
  $type:
    'cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor' as const,

  encode(
    message: InterfaceImplementerDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fullname !== '') {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== '') {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): InterfaceImplementerDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.typeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceImplementerDescriptor {
    return {
      $type: InterfaceImplementerDescriptor.$type,
      fullname: isSet(object.fullname) ? String(object.fullname) : '',
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : '',
    };
  },

  toJSON(message: InterfaceImplementerDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterfaceImplementerDescriptor>, I>>(
    object: I,
  ): InterfaceImplementerDescriptor {
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = object.fullname ?? '';
    message.typeUrl = object.typeUrl ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  InterfaceImplementerDescriptor.$type,
  InterfaceImplementerDescriptor,
);

function createBaseInterfaceAcceptingMessageDescriptor(): InterfaceAcceptingMessageDescriptor {
  return {
    $type:
      'cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor',
    fullname: '',
    fieldDescriptorNames: [],
  };
}

export const InterfaceAcceptingMessageDescriptor = {
  $type:
    'cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor' as const,

  encode(
    message: InterfaceAcceptingMessageDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fullname !== '') {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): InterfaceAcceptingMessageDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
    return {
      $type: InterfaceAcceptingMessageDescriptor.$type,
      fullname: isSet(object.fullname) ? String(object.fullname) : '',
      fieldDescriptorNames: Array.isArray(object?.fieldDescriptorNames)
        ? object.fieldDescriptorNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: InterfaceAcceptingMessageDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.fieldDescriptorNames) {
      obj.fieldDescriptorNames = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.fieldDescriptorNames = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<InterfaceAcceptingMessageDescriptor>, I>,
  >(object: I): InterfaceAcceptingMessageDescriptor {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = object.fullname ?? '';
    message.fieldDescriptorNames =
      object.fieldDescriptorNames?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  InterfaceAcceptingMessageDescriptor.$type,
  InterfaceAcceptingMessageDescriptor,
);

function createBaseConfigurationDescriptor(): ConfigurationDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.ConfigurationDescriptor',
    bech32AccountAddressPrefix: '',
  };
}

export const ConfigurationDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.ConfigurationDescriptor' as const,

  encode(
    message: ConfigurationDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bech32AccountAddressPrefix !== '') {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ConfigurationDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigurationDescriptor {
    return {
      $type: ConfigurationDescriptor.$type,
      bech32AccountAddressPrefix: isSet(object.bech32AccountAddressPrefix)
        ? String(object.bech32AccountAddressPrefix)
        : '',
    };
  },

  toJSON(message: ConfigurationDescriptor): unknown {
    const obj: any = {};
    message.bech32AccountAddressPrefix !== undefined &&
      (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigurationDescriptor>, I>>(
    object: I,
  ): ConfigurationDescriptor {
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix =
      object.bech32AccountAddressPrefix ?? '';
    return message;
  },
};

messageTypeRegistry.set(ConfigurationDescriptor.$type, ConfigurationDescriptor);

function createBaseMsgDescriptor(): MsgDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.MsgDescriptor',
    msgTypeUrl: '',
  };
}

export const MsgDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.MsgDescriptor' as const,

  encode(
    message: MsgDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.msgTypeUrl !== '') {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDescriptor {
    return {
      $type: MsgDescriptor.$type,
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : '',
    };
  },

  toJSON(message: MsgDescriptor): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDescriptor>, I>>(
    object: I,
  ): MsgDescriptor {
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = object.msgTypeUrl ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgDescriptor.$type, MsgDescriptor);

function createBaseGetAuthnDescriptorRequest(): GetAuthnDescriptorRequest {
  return { $type: 'cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest' };
}

export const GetAuthnDescriptorRequest = {
  $type: 'cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest' as const,

  encode(
    _: GetAuthnDescriptorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAuthnDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetAuthnDescriptorRequest {
    return {
      $type: GetAuthnDescriptorRequest.$type,
    };
  },

  toJSON(_: GetAuthnDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorRequest>, I>>(
    _: I,
  ): GetAuthnDescriptorRequest {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
};

messageTypeRegistry.set(
  GetAuthnDescriptorRequest.$type,
  GetAuthnDescriptorRequest,
);

function createBaseGetAuthnDescriptorResponse(): GetAuthnDescriptorResponse {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse',
    authn: undefined,
  };
}

export const GetAuthnDescriptorResponse = {
  $type: 'cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse' as const,

  encode(
    message: GetAuthnDescriptorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAuthnDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAuthnDescriptorResponse {
    return {
      $type: GetAuthnDescriptorResponse.$type,
      authn: isSet(object.authn)
        ? AuthnDescriptor.fromJSON(object.authn)
        : undefined,
    };
  },

  toJSON(message: GetAuthnDescriptorResponse): unknown {
    const obj: any = {};
    message.authn !== undefined &&
      (obj.authn = message.authn
        ? AuthnDescriptor.toJSON(message.authn)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorResponse>, I>>(
    object: I,
  ): GetAuthnDescriptorResponse {
    const message = createBaseGetAuthnDescriptorResponse();
    message.authn =
      object.authn !== undefined && object.authn !== null
        ? AuthnDescriptor.fromPartial(object.authn)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GetAuthnDescriptorResponse.$type,
  GetAuthnDescriptorResponse,
);

function createBaseGetChainDescriptorRequest(): GetChainDescriptorRequest {
  return { $type: 'cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest' };
}

export const GetChainDescriptorRequest = {
  $type: 'cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest' as const,

  encode(
    _: GetChainDescriptorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetChainDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetChainDescriptorRequest {
    return {
      $type: GetChainDescriptorRequest.$type,
    };
  },

  toJSON(_: GetChainDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetChainDescriptorRequest>, I>>(
    _: I,
  ): GetChainDescriptorRequest {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
};

messageTypeRegistry.set(
  GetChainDescriptorRequest.$type,
  GetChainDescriptorRequest,
);

function createBaseGetChainDescriptorResponse(): GetChainDescriptorResponse {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse',
    chain: undefined,
  };
}

export const GetChainDescriptorResponse = {
  $type: 'cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse' as const,

  encode(
    message: GetChainDescriptorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetChainDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChainDescriptorResponse {
    return {
      $type: GetChainDescriptorResponse.$type,
      chain: isSet(object.chain)
        ? ChainDescriptor.fromJSON(object.chain)
        : undefined,
    };
  },

  toJSON(message: GetChainDescriptorResponse): unknown {
    const obj: any = {};
    message.chain !== undefined &&
      (obj.chain = message.chain
        ? ChainDescriptor.toJSON(message.chain)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetChainDescriptorResponse>, I>>(
    object: I,
  ): GetChainDescriptorResponse {
    const message = createBaseGetChainDescriptorResponse();
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? ChainDescriptor.fromPartial(object.chain)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GetChainDescriptorResponse.$type,
  GetChainDescriptorResponse,
);

function createBaseGetCodecDescriptorRequest(): GetCodecDescriptorRequest {
  return { $type: 'cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest' };
}

export const GetCodecDescriptorRequest = {
  $type: 'cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest' as const,

  encode(
    _: GetCodecDescriptorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetCodecDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetCodecDescriptorRequest {
    return {
      $type: GetCodecDescriptorRequest.$type,
    };
  },

  toJSON(_: GetCodecDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorRequest>, I>>(
    _: I,
  ): GetCodecDescriptorRequest {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
};

messageTypeRegistry.set(
  GetCodecDescriptorRequest.$type,
  GetCodecDescriptorRequest,
);

function createBaseGetCodecDescriptorResponse(): GetCodecDescriptorResponse {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse',
    codec: undefined,
  };
}

export const GetCodecDescriptorResponse = {
  $type: 'cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse' as const,

  encode(
    message: GetCodecDescriptorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetCodecDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCodecDescriptorResponse {
    return {
      $type: GetCodecDescriptorResponse.$type,
      codec: isSet(object.codec)
        ? CodecDescriptor.fromJSON(object.codec)
        : undefined,
    };
  },

  toJSON(message: GetCodecDescriptorResponse): unknown {
    const obj: any = {};
    message.codec !== undefined &&
      (obj.codec = message.codec
        ? CodecDescriptor.toJSON(message.codec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorResponse>, I>>(
    object: I,
  ): GetCodecDescriptorResponse {
    const message = createBaseGetCodecDescriptorResponse();
    message.codec =
      object.codec !== undefined && object.codec !== null
        ? CodecDescriptor.fromPartial(object.codec)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GetCodecDescriptorResponse.$type,
  GetCodecDescriptorResponse,
);

function createBaseGetConfigurationDescriptorRequest(): GetConfigurationDescriptorRequest {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest',
  };
}

export const GetConfigurationDescriptorRequest = {
  $type:
    'cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest' as const,

  encode(
    _: GetConfigurationDescriptorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetConfigurationDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetConfigurationDescriptorRequest {
    return {
      $type: GetConfigurationDescriptorRequest.$type,
    };
  },

  toJSON(_: GetConfigurationDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetConfigurationDescriptorRequest>, I>,
  >(_: I): GetConfigurationDescriptorRequest {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
};

messageTypeRegistry.set(
  GetConfigurationDescriptorRequest.$type,
  GetConfigurationDescriptorRequest,
);

function createBaseGetConfigurationDescriptorResponse(): GetConfigurationDescriptorResponse {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse',
    config: undefined,
  };
}

export const GetConfigurationDescriptorResponse = {
  $type:
    'cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse' as const,

  encode(
    message: GetConfigurationDescriptorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(
        message.config,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetConfigurationDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetConfigurationDescriptorResponse {
    return {
      $type: GetConfigurationDescriptorResponse.$type,
      config: isSet(object.config)
        ? ConfigurationDescriptor.fromJSON(object.config)
        : undefined,
    };
  },

  toJSON(message: GetConfigurationDescriptorResponse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ConfigurationDescriptor.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetConfigurationDescriptorResponse>, I>,
  >(object: I): GetConfigurationDescriptorResponse {
    const message = createBaseGetConfigurationDescriptorResponse();
    message.config =
      object.config !== undefined && object.config !== null
        ? ConfigurationDescriptor.fromPartial(object.config)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GetConfigurationDescriptorResponse.$type,
  GetConfigurationDescriptorResponse,
);

function createBaseGetQueryServicesDescriptorRequest(): GetQueryServicesDescriptorRequest {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest',
  };
}

export const GetQueryServicesDescriptorRequest = {
  $type:
    'cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest' as const,

  encode(
    _: GetQueryServicesDescriptorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetQueryServicesDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetQueryServicesDescriptorRequest {
    return {
      $type: GetQueryServicesDescriptorRequest.$type,
    };
  },

  toJSON(_: GetQueryServicesDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetQueryServicesDescriptorRequest>, I>,
  >(_: I): GetQueryServicesDescriptorRequest {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
};

messageTypeRegistry.set(
  GetQueryServicesDescriptorRequest.$type,
  GetQueryServicesDescriptorRequest,
);

function createBaseGetQueryServicesDescriptorResponse(): GetQueryServicesDescriptorResponse {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse',
    queries: undefined,
  };
}

export const GetQueryServicesDescriptorResponse = {
  $type:
    'cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse' as const,

  encode(
    message: GetQueryServicesDescriptorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(
        message.queries,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetQueryServicesDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetQueryServicesDescriptorResponse {
    return {
      $type: GetQueryServicesDescriptorResponse.$type,
      queries: isSet(object.queries)
        ? QueryServicesDescriptor.fromJSON(object.queries)
        : undefined,
    };
  },

  toJSON(message: GetQueryServicesDescriptorResponse): unknown {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries
        ? QueryServicesDescriptor.toJSON(message.queries)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetQueryServicesDescriptorResponse>, I>,
  >(object: I): GetQueryServicesDescriptorResponse {
    const message = createBaseGetQueryServicesDescriptorResponse();
    message.queries =
      object.queries !== undefined && object.queries !== null
        ? QueryServicesDescriptor.fromPartial(object.queries)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  GetQueryServicesDescriptorResponse.$type,
  GetQueryServicesDescriptorResponse,
);

function createBaseGetTxDescriptorRequest(): GetTxDescriptorRequest {
  return { $type: 'cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest' };
}

export const GetTxDescriptorRequest = {
  $type: 'cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest' as const,

  encode(
    _: GetTxDescriptorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetTxDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetTxDescriptorRequest {
    return {
      $type: GetTxDescriptorRequest.$type,
    };
  },

  toJSON(_: GetTxDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTxDescriptorRequest>, I>>(
    _: I,
  ): GetTxDescriptorRequest {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
};

messageTypeRegistry.set(GetTxDescriptorRequest.$type, GetTxDescriptorRequest);

function createBaseGetTxDescriptorResponse(): GetTxDescriptorResponse {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse',
    tx: undefined,
  };
}

export const GetTxDescriptorResponse = {
  $type: 'cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse' as const,

  encode(
    message: GetTxDescriptorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetTxDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTxDescriptorResponse {
    return {
      $type: GetTxDescriptorResponse.$type,
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined,
    };
  },

  toJSON(message: GetTxDescriptorResponse): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTxDescriptorResponse>, I>>(
    object: I,
  ): GetTxDescriptorResponse {
    const message = createBaseGetTxDescriptorResponse();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? TxDescriptor.fromPartial(object.tx)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GetTxDescriptorResponse.$type, GetTxDescriptorResponse);

function createBaseQueryServicesDescriptor(): QueryServicesDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.QueryServicesDescriptor',
    queryServices: [],
  };
}

export const QueryServicesDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.QueryServicesDescriptor' as const,

  encode(
    message: QueryServicesDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryServicesDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(
            QueryServiceDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServicesDescriptor {
    return {
      $type: QueryServicesDescriptor.$type,
      queryServices: Array.isArray(object?.queryServices)
        ? object.queryServices.map((e: any) =>
            QueryServiceDescriptor.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: QueryServicesDescriptor): unknown {
    const obj: any = {};
    if (message.queryServices) {
      obj.queryServices = message.queryServices.map(e =>
        e ? QueryServiceDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.queryServices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryServicesDescriptor>, I>>(
    object: I,
  ): QueryServicesDescriptor {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices =
      object.queryServices?.map(e => QueryServiceDescriptor.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(QueryServicesDescriptor.$type, QueryServicesDescriptor);

function createBaseQueryServiceDescriptor(): QueryServiceDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.QueryServiceDescriptor',
    fullname: '',
    isModule: false,
    methods: [],
  };
}

export const QueryServiceDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.QueryServiceDescriptor' as const,

  encode(
    message: QueryServiceDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fullname !== '') {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryServiceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.isModule = reader.bool();
          break;
        case 3:
          message.methods.push(
            QueryMethodDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServiceDescriptor {
    return {
      $type: QueryServiceDescriptor.$type,
      fullname: isSet(object.fullname) ? String(object.fullname) : '',
      isModule: isSet(object.isModule) ? Boolean(object.isModule) : false,
      methods: Array.isArray(object?.methods)
        ? object.methods.map((e: any) => QueryMethodDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryServiceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.isModule !== undefined && (obj.isModule = message.isModule);
    if (message.methods) {
      obj.methods = message.methods.map(e =>
        e ? QueryMethodDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.methods = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryServiceDescriptor>, I>>(
    object: I,
  ): QueryServiceDescriptor {
    const message = createBaseQueryServiceDescriptor();
    message.fullname = object.fullname ?? '';
    message.isModule = object.isModule ?? false;
    message.methods =
      object.methods?.map(e => QueryMethodDescriptor.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryServiceDescriptor.$type, QueryServiceDescriptor);

function createBaseQueryMethodDescriptor(): QueryMethodDescriptor {
  return {
    $type: 'cosmos.base.reflection.v2alpha1.QueryMethodDescriptor',
    name: '',
    fullQueryPath: '',
  };
}

export const QueryMethodDescriptor = {
  $type: 'cosmos.base.reflection.v2alpha1.QueryMethodDescriptor' as const,

  encode(
    message: QueryMethodDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== '') {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMethodDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fullQueryPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMethodDescriptor {
    return {
      $type: QueryMethodDescriptor.$type,
      name: isSet(object.name) ? String(object.name) : '',
      fullQueryPath: isSet(object.fullQueryPath)
        ? String(object.fullQueryPath)
        : '',
    };
  },

  toJSON(message: QueryMethodDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.fullQueryPath !== undefined &&
      (obj.fullQueryPath = message.fullQueryPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMethodDescriptor>, I>>(
    object: I,
  ): QueryMethodDescriptor {
    const message = createBaseQueryMethodDescriptor();
    message.name = object.name ?? '';
    message.fullQueryPath = object.fullQueryPath ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryMethodDescriptor.$type, QueryMethodDescriptor);

/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
  /**
   * GetAuthnDescriptor returns information on how to authenticate transactions in the application
   * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
   * future releases of the cosmos-sdk.
   */
  GetAuthnDescriptor(
    request: DeepPartial<GetAuthnDescriptorRequest>,
  ): Promise<GetAuthnDescriptorResponse>;
  /** GetChainDescriptor returns the description of the chain */
  GetChainDescriptor(
    request: DeepPartial<GetChainDescriptorRequest>,
  ): Promise<GetChainDescriptorResponse>;
  /** GetCodecDescriptor returns the descriptor of the codec of the application */
  GetCodecDescriptor(
    request: DeepPartial<GetCodecDescriptorRequest>,
  ): Promise<GetCodecDescriptorResponse>;
  /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
  GetConfigurationDescriptor(
    request: DeepPartial<GetConfigurationDescriptorRequest>,
  ): Promise<GetConfigurationDescriptorResponse>;
  /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
  GetQueryServicesDescriptor(
    request: DeepPartial<GetQueryServicesDescriptorRequest>,
  ): Promise<GetQueryServicesDescriptorResponse>;
  /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
  GetTxDescriptor(
    request: DeepPartial<GetTxDescriptorRequest>,
  ): Promise<GetTxDescriptorResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAuthnDescriptor = this.GetAuthnDescriptor.bind(this);
    this.GetChainDescriptor = this.GetChainDescriptor.bind(this);
    this.GetCodecDescriptor = this.GetCodecDescriptor.bind(this);
    this.GetConfigurationDescriptor =
      this.GetConfigurationDescriptor.bind(this);
    this.GetQueryServicesDescriptor =
      this.GetQueryServicesDescriptor.bind(this);
    this.GetTxDescriptor = this.GetTxDescriptor.bind(this);
  }
  GetAuthnDescriptor(
    request: DeepPartial<GetAuthnDescriptorRequest>,
  ): Promise<GetAuthnDescriptorResponse> {
    const fromPartial = GetAuthnDescriptorRequest.fromPartial(request);
    const data = GetAuthnDescriptorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v2alpha1.ReflectionService',
      'GetAuthnDescriptor',
      data,
    );
    return promise.then(data =>
      GetAuthnDescriptorResponse.decode(new _m0.Reader(data)),
    );
  }

  GetChainDescriptor(
    request: DeepPartial<GetChainDescriptorRequest>,
  ): Promise<GetChainDescriptorResponse> {
    const fromPartial = GetChainDescriptorRequest.fromPartial(request);
    const data = GetChainDescriptorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v2alpha1.ReflectionService',
      'GetChainDescriptor',
      data,
    );
    return promise.then(data =>
      GetChainDescriptorResponse.decode(new _m0.Reader(data)),
    );
  }

  GetCodecDescriptor(
    request: DeepPartial<GetCodecDescriptorRequest>,
  ): Promise<GetCodecDescriptorResponse> {
    const fromPartial = GetCodecDescriptorRequest.fromPartial(request);
    const data = GetCodecDescriptorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v2alpha1.ReflectionService',
      'GetCodecDescriptor',
      data,
    );
    return promise.then(data =>
      GetCodecDescriptorResponse.decode(new _m0.Reader(data)),
    );
  }

  GetConfigurationDescriptor(
    request: DeepPartial<GetConfigurationDescriptorRequest>,
  ): Promise<GetConfigurationDescriptorResponse> {
    const fromPartial = GetConfigurationDescriptorRequest.fromPartial(request);
    const data = GetConfigurationDescriptorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v2alpha1.ReflectionService',
      'GetConfigurationDescriptor',
      data,
    );
    return promise.then(data =>
      GetConfigurationDescriptorResponse.decode(new _m0.Reader(data)),
    );
  }

  GetQueryServicesDescriptor(
    request: DeepPartial<GetQueryServicesDescriptorRequest>,
  ): Promise<GetQueryServicesDescriptorResponse> {
    const fromPartial = GetQueryServicesDescriptorRequest.fromPartial(request);
    const data = GetQueryServicesDescriptorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v2alpha1.ReflectionService',
      'GetQueryServicesDescriptor',
      data,
    );
    return promise.then(data =>
      GetQueryServicesDescriptorResponse.decode(new _m0.Reader(data)),
    );
  }

  GetTxDescriptor(
    request: DeepPartial<GetTxDescriptorRequest>,
  ): Promise<GetTxDescriptorResponse> {
    const fromPartial = GetTxDescriptorRequest.fromPartial(request);
    const data = GetTxDescriptorRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.base.reflection.v2alpha1.ReflectionService',
      'GetTxDescriptor',
      data,
    );
    return promise.then(data =>
      GetTxDescriptorResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

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
