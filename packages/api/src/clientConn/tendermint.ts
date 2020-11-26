import { Client } from '@cosmjs/tendermint-rpc';

/**
 * This is the RPC interface needed by ts-proto to implement a client-side
 * connection.
 */
export interface ClientConn {
	request(
		service: string,
		method: string,
		data: Uint8Array
	): Promise<Uint8Array>;
}

/**
 * Given a Tendermint client, generate the RPC object to be passed into the
 * ts-proto generated objects.
 *
 * @param client - A Tendermint client.
 */
export function createTendermintClientConn(client: Client): ClientConn {
	return {
		request(
			service: string,
			method: string,
			data: Uint8Array
		): Promise<Uint8Array> {
			return client
				.abciQuery({
					path: `/${service}/${method}`,
					data,
				})
				.then(({ value }) => value);
		},
	};
}
