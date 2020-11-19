import { RegenApi } from './api';

let api: RegenApi;

describe('RegenApi', () => {
	beforeAll(async () => {
		api = await RegenApi.connect({
			grpcUrl: 'devnet.regen.network:9090',
			tendermintUrl: 'http://devnet.regen.network:26657',
		});
	});

	it('should fetch last block using tendermint client', async () => {
		const lastHeight = await api.tendermintClient.block();
		expect(lastHeight.block.header.height).toBeGreaterThan(0);
	});

	it('should fetch balances using grpc client', async () => {
		const queryClient = api.pb.cosmos.bank.v1beta1.Query.create(
			api.rpcImpl
		);
		const balances = await queryClient.allBalances({});

		// TODO
		// The two lines above could ideally be squashed into one:
		// ``
		// const balances = await api.pb.cosmos.bank.v1beta1.Query.allBalances({})
		// ```

		expect(Object.keys(balances.balances)).toBeGreaterThan(0);
	});
});
