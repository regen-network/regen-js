import type { Client } from '@cosmjs/tendermint-rpc';

import type { Any } from '../generated/google/protobuf/any';
import type { TxBuilder } from './txBuilder';
import type { Connection } from './types';

/**
 * Given a Tendermint client, generate the client connection object to be
 * passed into the ts-proto generated functions.
 *
 * @param client - A Tendermint client.
 */
export function createTendermintConnection(client: Client): Connection {
	return {
		queryConnection: {
			async request(
				service: string,
				method: string,
				data: Uint8Array
			): Promise<Uint8Array> {
				const { value } = await client.abciQuery({
					path: `/${service}/${method}`,
					data,
				});

				return value;
			},
		},
		txBuilderConnection(txBuilder: TxBuilder) {
			return {
				request(
					service: string,
					method: string,
					data: Uint8Array
				): Promise<Uint8Array> {
					const any: Any = {
						typeUrl: `/${service}/${method}`,
						value: data,
					};
					txBuilder.addMsgs(any);

					// We don't really care (for now) about the response value.
					return Promise.resolve(Uint8Array.from([]));
				},
			};
		},
	};
}
