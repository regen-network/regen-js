import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import { QueryClientImpl } from '../src/generated/cosmos/bank/v1beta1/query';
import { ServiceClientImpl } from '../src/generated/cosmos/tx/v1beta1/service';

const TEST_ADDRESS_HAMBACH = 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46';

const connect = async (clientType?: 'query' | 'signing'): Promise<RegenApi> => {
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
      url: 'http://hambach.regen.network:26657',
      clientType,
      signer,
    },
  });
};

describe('RegenApi with tendermint connection', () => {
  it('should fetch balances using tendermint query client', async () => {
    const api = await connect();
    const bankClient = new QueryClientImpl(api.connection.queryClient);

    const res = await bankClient.AllBalances({
      address: TEST_ADDRESS_HAMBACH,
    });
    expect(res.balances.length).toBeGreaterThanOrEqual(1);
  });

  it('should fetch a tx using tendermint service client', async () => {
    const hambachTxHash =
      '565A6A0134723E9EAF8ACFBF499DC65CA5C34259E74540135732BDE765E20117';
    const api = await connect();
    const serviceClient = new ServiceClientImpl(api.connection.queryClient);
    const res = await serviceClient.GetTx({
      hash: hambachTxHash,
    });
    expect(res.txResponse).toBeTruthy();
    expect(res.txResponse?.txhash).toEqual(hambachTxHash);
  });

  it('should get data back with a signing client - signed transaction', async () => {
    const api = await connect('signing');
    const signingClient = api.connection.msgClient;
    // TODO: this example signs a transaction to send tokens to the same address
    const signedTxBytes = await signingClient?.sendTokens(
      3.3,
      TEST_ADDRESS_HAMBACH,
      TEST_ADDRESS_HAMBACH,
    );

    expect(api.connection.msgClient).toBeTruthy();
    expect(signedTxBytes).toBeTruthy();
  });
});
