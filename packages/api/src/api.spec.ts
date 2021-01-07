import { StargazeApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';

let api: StargazeApi;

describe('StargazeApi', () => {
	beforeAll(async () => {
		api = await StargazeApi.connect({
			connection: {
				type: 'tendermint',
				url: 'localhost:26657',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const impl = new QueryClientImpl(api.connection.queryConnection);
		const res = await impl.AllBalances({
			address: 'stb1nnz4naa7f0z6pwga3xkvcn3ju0unclm700rqpe', // Shane's account.
		});

		// TODO So ideally, the two lines would be combined into one:
		// ```
		// api.query.cosmos.bank.v1beta1.AllBalances({});`
		// ```

		expect(res.balances).toHaveLength(2);
	});
});
