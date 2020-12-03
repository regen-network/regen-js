/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  Message that represents an arbitrary HTTP body. It should only be used for
 *  payload formats that can't be represented as JSON, such as raw binary or
 *  an HTML page.
 *
 *
 *  This message can be used both in streaming and non-streaming API methods in
 *  the request as well as the response.
 *
 *  It can be used as a top-level request field, which is convenient if one
 *  wants to extract parameters from either the URL or HTTP template into the
 *  request fields and also want access to the raw HTTP body.
 *
 *  Example:
 *
 *      message GetResourceRequest {
 *        // A unique request id.
 *        string request_id = 1;
 *
 *        // The raw HTTP body is bound to this field.
 *        google.api.HttpBody http_body = 2;
 *      }
 *
 *      service ResourceService {
 *        rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *        rpc UpdateResource(google.api.HttpBody) returns
 *        (google.protobuf.Empty);
 *      }
 *
 *  Example with streaming methods:
 *
 *      service CaldavService {
 *        rpc GetCalendar(stream google.api.HttpBody)
 *          returns (stream google.api.HttpBody);
 *        rpc UpdateCalendar(stream google.api.HttpBody)
 *          returns (stream google.api.HttpBody);
 *      }
 *
 *  Use of this type only changes how the request and response bodies are
 *  handled, all other features will continue to work unchanged.
 */
export interface HttpBody {
  /**
   *  The HTTP Content-Type header value specifying the content type of the body.
   */
  contentType: string;
  /**
   *  The HTTP request/response body as raw binary.
   */
  data: Uint8Array;
  /**
   *  Application specific response metadata. Must be set in the first response
   *  for streaming APIs.
   */
  extensions: Any[];
}

const baseHttpBody: object = {
  contentType: "",
};

export const protobufPackage = 'google.api'

export const HttpBody = {
  encode(message: HttpBody, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.contentType);
    writer.uint32(18).bytes(message.data);
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): HttpBody {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHttpBody } as HttpBody;
    message.extensions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HttpBody {
    const message = { ...baseHttpBody } as HttpBody;
    message.extensions = [];
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.extensions !== undefined && object.extensions !== null) {
      for (const e of object.extensions) {
        message.extensions.push(Any.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HttpBody>): HttpBody {
    const message = { ...baseHttpBody } as HttpBody;
    message.extensions = [];
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (object.extensions !== undefined && object.extensions !== null) {
      for (const e of object.extensions) {
        message.extensions.push(Any.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: HttpBody): unknown {
    const obj: any = {};
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
};

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;