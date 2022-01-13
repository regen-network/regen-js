import { RegenApi } from '../src/api';
import { QueryClientImpl } from '../src/generated/cosmos/bank/v1beta1/query';

let api: RegenApi;

describe('RegenApi with tendermint connection', () => {
	beforeAll(async () => {
		api = await RegenApi.connect({
			connection: {
				type: 'tendermint',
				url: 'http://hambach.regen.network:26657',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const bankClient = new QueryClientImpl(api.client);
		const res = await bankClient.AllBalances({
			address: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46', // Test account.
		});
		expect(res.balances.length).toBeGreaterThanOrEqual(1);
	});
});
