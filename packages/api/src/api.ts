import { Client as TendermintClient } from '@cosmjs/tendermint-rpc';

import { Connection, createTendermintConnection } from './connection';

interface TendermintConnection {
	type: 'tendermint';
	url: string;
}

/**
 * Options to pass into the StakebirdApi constructor.
 */
export interface StakebirdApiOptions {
	connection: TendermintConnection;
}

/**
 * The main entry point for interacting with the Regen Ledger. The class needs
 * a client connection
 */
export class StakebirdApi {
	readonly connection: Connection;

	constructor(connection: Connection) {
		this.connection = connection;
	}

	/**
	 * Create a StakebirdApi object which connects to the gRPC and Tendermint
	 * endpoints.
	 *
	 * @param options - Options to pass into StakebirdApi.
	 */
	public static async connect(
		options: StakebirdApiOptions
	): Promise<StakebirdApi> {
		switch (options.connection.type) {
			case 'tendermint': {
				const tendermintClient = await TendermintClient.connect(
					options.connection.url
				);

				return new StakebirdApi(
					createTendermintConnection(tendermintClient)
				);
			}
		}
	}
}
