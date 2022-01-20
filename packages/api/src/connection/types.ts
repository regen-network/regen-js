/**
 * This is the RPC interface needed by ts-proto to implement a client-side
 * connection.
 * @todo Weirdly enough, this interface is not exported by the generated code
 * from ts-proto, so we're copy pasting here.
 */
export interface TsProtoRpc {
  request(
    _service: string,
    _method: string,
    _data: Uint8Array,
  ): Promise<Uint8Array>;
}

/**
 * This is the interface needed by ts-proto to implement a client-side
 * connection.
 */
export interface Connection {
  /**
   * Custom connection implementation for `Query` services.
   */
  queryConnection: TsProtoRpc;
}
