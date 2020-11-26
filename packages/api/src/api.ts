import { Client as TendermintClient } from '@cosmjs/tendermint-rpc';

import { ClientConn, createTendermintClientConn } from './clientConn';

interface TendermintClientConn {
	type: 'tendermint';
	url: string;
}

/**
 * Options to pass into the RegenApi constructor.
 */
export interface RegenApiOptions {
	clientConn: TendermintClientConn;
}

export class RegenApi {
	readonly clientConn: ClientConn;

	constructor(clientConn: ClientConn) {
		this.clientConn = clientConn;
	}

	/**
	 * Create a RegenApi object which connects to the gRPC and Tendermint
	 * endpoints.
	 *
	 * @param options - Options to pass into RegenAPI.
	 */
	public static async connect(options: RegenApiOptions): Promise<RegenApi> {
		switch (options.clientConn.type) {
			case 'tendermint': {
				const tendermintClient = await TendermintClient.connect(
					options.clientConn.url
				);

				return new RegenApi(
					createTendermintClientConn(tendermintClient)
				);
			}
		}
	}

	// /**
	//  * A RPC implementation using gRPC to pass into protobuf services.
	//  *
	//  * @todo Make this private, and create helper functions that will use this
	//  * implementation under the hood.
	//  */
	// public rpcImpl: RPCImpl = (method, requestData, callback) => {
	// 	console.log('AAA', (method as any).parent, requestData);
	// 	this.grpcClient.makeUnaryRequest<Uint8Array, Uint8Array>(
	// 		method.toString(),
	// 		(arg) => Buffer.from(arg),
	// 		(arg) => arg,
	// 		requestData,
	// 		callback
	// 	);
	// };
}
