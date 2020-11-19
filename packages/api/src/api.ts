import { Client as TendermintClient } from '@cosmjs/tendermint-rpc';
import { Client, credentials } from '@grpc/grpc-js';
import { RPCImpl } from 'protobufjs';

import protoImpl from './generated/protoImpl';

interface RegenApiOptions {
	grpcUrl: string;
	tendermintUrl: string;
}

export class RegenApi {
	private readonly grpcClient: Client;
	readonly protoImpl = protoImpl;
	readonly tendermintClient: TendermintClient;

	constructor(grpcClient: Client, tendermintClient: TendermintClient) {
		this.grpcClient = grpcClient;
		this.tendermintClient = tendermintClient;
	}

	public static async connect(options: RegenApiOptions): Promise<RegenApi> {
		const grpcClient = new Client(
			options.grpcUrl,
			credentials.createInsecure()
		);
		const tendermintClient = await TendermintClient.connect(
			options.tendermintUrl
		);

		return new RegenApi(grpcClient, tendermintClient);
	}

	public rpcImpl: RPCImpl = (method, requestData, callback) => {
		this.grpcClient.makeUnaryRequest<Uint8Array, Uint8Array>(
			method.name,
			Buffer.from,
			(arg) => arg,
			requestData,
			callback
		);
	};
}
