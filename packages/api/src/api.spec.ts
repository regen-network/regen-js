import { RegenApi } from './api';

let api: RegenApi;

describe('RegenApi', () => {
	beforeAll(async () => {
		api = await RegenApi.connect('http://18.223.151.187:26657');
	});

	it('should fetch last block', async () => {
		const lastHeight = await api.getHeight();
		expect(lastHeight).toBeGreaterThan(0);
	});

	it('should query data', async () => {
		const a = api.query;
	});
});
