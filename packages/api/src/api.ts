import { Client, credentials } from '@grpc/grpc-js';

interface RegenApiOptions {
	grpcUrl: string;
	tendermintUrl: string;
}

export class RegenApi {
	grpcClient: Client;

	constructor(options: RegenApiOptions) {
		this.grpcClient = new Client(
			options.grpcUrl,
			credentials.createInsecure()
		);
	}

	private rpcImpl(method: string, requestData, callback) {
		this.grpcClient.makeUnaryRequest(
			method.name,
			(arg) => arg,
			(arg) => arg,
			requestData,
			callback
		);
	}
}
