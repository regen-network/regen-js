import { StakebirdApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';

let api: StakebirdApi;

describe('StakebirdApi', () => {
	beforeAll(async () => {
		api = await StakebirdApi.connect({
			connection: {
				type: 'tendermint',
				url: 'http://devnet.stakebird.com:26657',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const impl = new QueryClientImpl(api.connection.queryConnection);
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
