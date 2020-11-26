import { RegenApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';

let api: RegenApi;

describe('RegenApi', () => {
	beforeAll(async () => {
		api = await RegenApi.connect({
			clientConn: {
				type: 'tendermint',
				url: 'http://devnet.regen.network:26657',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const impl = new QueryClientImpl(api.clientConn);
		const res = await impl.AllBalances({
			address: 'regen:1j9h8dpu7ah2hl9rg7ycu0e64kh90rrlpk9kagz', // Amaury's account.
		});

		// TODO So ideally, the two lines would be combined into one:
		// ```
		// api.query.cosmos.bank.v1beta1.AllBalances({});`
		// ```

		expect(res.balances).toHaveLength(1);
	});
});
