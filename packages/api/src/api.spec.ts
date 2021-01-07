import { RegenApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';

let api: RegenApi;

describe('RegenApi', () => {
	beforeAll(async () => {
		api = await RegenApi.connect({
			connection: {
				type: 'tendermint',
				url: 'http://devnet.regen.network:26657',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const bankClient = new QueryClientImpl(api.connection.queryConnection);
		const res = await bankClient.AllBalances({
			address: 'regen:1j9h8dpu7ah2hl9rg7ycu0e64kh90rrlpk9kagz', // Amaury's account.
		});

		// TODO So ideally, the two lines would be combined into one:
		// https://github.com/regen-network/regen-js/issues/2
		// ```ts
		// api.query.cosmos.bank.v1beta1.AllBalances({});`
		// ```

		expect(res.balances).toHaveLength(1);
	});
});
