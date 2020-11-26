import { Client } from '@cosmjs/tendermint-rpc';

/**
 * This is the RPC interface needed by ts-proto to implement a client-side
 * connection.
 */
export interface Connection {
	request(
		service: string,
		method: string,
		data: Uint8Array
	): Promise<Uint8Array>;
}

/**
 * Given a Tendermint client, generate the client connection object to be
 * passed into the ts-proto generated functions.
 *
 * @param client - A Tendermint client.
 */
export function createTendermintConnection(client: Client): Connection {
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
