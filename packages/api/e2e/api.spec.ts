import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { RegenApi } from '../src/api';
import { QueryClientImpl, QueryAllBalancesRequest } from '../src/generated/cosmos/bank/v1beta1/query';
import { ServiceClientImpl } from '../src/generated/cosmos/tx/v1beta1/service';

const TEST_ADDRESS = 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46';
const REDWOOD_NODE_TM_URL = 'http://209.182.218.23:26657';
// const HAMBACH_NODE_TM_URL = 'http://hambach.regen.network:26657';

const connect = async (): Promise<RegenApi> => {
  const mnemonic = // mnemonic for TEST_ADDRESS_HAMBACH
    'coast scheme approve soccer juice wealth bunker state fetch warrior inmate belt';

  // Inside an async function...
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(
    mnemonic,
    { prefix: 'regen' }, // Replace with your own Bech32 address prefix
  );

  return RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: REDWOOD_NODE_TM_URL,
      signer,
    },
  });
};

describe('RegenApi with tendermint connection', () => {
  it('should fetch balances using tendermint query client', async () => {
    const api = await connect();
    const bankClient = new QueryClientImpl(api.queryClient);

    const res = await bankClient.AllBalances({
      address: TEST_ADDRESS,
    });
    expect(res.balances.length).toBeGreaterThanOrEqual(1);
  });

  it('should fetch a tx using tendermint service client', async () => {
    const redwoodTxHash =
      'F6A31AB068F49C5719ECB3793E0C3C4412EDD1F0C3D3C954EE0D9B1C81A0BEC8';
    const api = await connect();
    const serviceClient = new ServiceClientImpl(api.queryClient);
    const res = await serviceClient.GetTx({
      hash: redwoodTxHash,
    });
    expect(res.txResponse).toBeTruthy();
    expect(res.txResponse?.txhash).toEqual(redwoodTxHash);
  });

  it('should get data back with a signing client - signed transaction', async () => {
    const api = await connect();
    // TODO: this example signs a transaction to send tokens to the same address
    const signedTxBytes = await api.msgClient?.sign(
      3.3,
      TEST_ADDRESS,
      TEST_ADDRESS,
    );

    expect(api.msgClient).toBeTruthy();
    expect(signedTxBytes).toBeTruthy();
  });

  it('should return a tx hash when sending tokens', async () => {
    jest.setTimeout(10000);
    let txHash;
    const api = await connect();
    const signingClient = api.msgClient;
    // TODO: this example signs a transaction to send tokens to the same address
    const signedTxBytes = await signingClient?.sendTokens(
      0.111,
      TEST_ADDRESS,
      TEST_ADDRESS,
    );
    if (signedTxBytes) {
      txHash = await signingClient?.broadcast(signedTxBytes);
    }
    expect(txHash).toBeTruthy();
  });

  it('should fetch a tx using tendermint service client', async () => {
    const api = await connect();
    const serviceClient = new ServiceClientImpl(api.queryClient);
    const res = await serviceClient.GetTx({
      hash: '565A6A0134723E9EAF8ACFBF499DC65CA5C34259E74540135732BDE765E20117', // a Hambach tx
    });
    expect(res.txResponse).toBeTruthy();
    expect(res.txResponse?.data).toBeTruthy();
  });
});
