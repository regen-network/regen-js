import { RegenApi } from './api';

let api: RegenApi;

describe('RegenApi', () => {
	beforeAll(async () => {
		api = await RegenApi.connect({
			grpcUrl: '18.223.151.187:9090',
			tendermintUrl: 'http://18.223.151.187:26657',
		});
	});

	it('should fetch last block using tendermint client', async () => {
		const lastHeight = await api.tendermintClient.block();
		expect(lastHeight.block.header.height).toBeGreaterThan(0);
	});

	it('should fetch balances using grpc client', async () => {
		const queryClient = api.protoImpl.cosmos.bank.v1beta1.Query.create(
			api.rpcImpl
		);
		const a = await queryClient.allBalances({});
		console.log(a);
		expect(a).toBe(true);
	});
});
