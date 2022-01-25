import { RegenApi } from '../src/api';
import { QueryClientImpl } from '../src/generated/cosmos/bank/v1beta1/query';
import { ServiceClientImpl } from '../src/generated/cosmos/tx/v1beta1/service';

let api: RegenApi;

describe('RegenApi with tendermint connection', () => {
  beforeAll(async () => {
    api = await RegenApi.connect({
      connection: {
        type: 'tendermint',
        url: 'http://hambach.regen.network:26657',
        clientType: 'query',
      },
    });
  });

  it('should fetch balances using tendermint query client', async () => {
    const bankClient = new QueryClientImpl(api.connection.queryClient);

    const res = await bankClient.AllBalances({
      address: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46', // Test account.
    });
    expect(res.balances.length).toBeGreaterThanOrEqual(1);
  });

  it('should fetch a tx using tendermint service client', async () => {
    const serviceClient = new ServiceClientImpl(api.connection.queryClient);
    const res = await serviceClient.GetTx({
      hash: '565A6A0134723E9EAF8ACFBF499DC65CA5C34259E74540135732BDE765E20117', // a Hambach tx
    });
    expect(res.txResponse).toBeTruthy();
    expect(res.txResponse?.data).toBeTruthy();
  });
});
