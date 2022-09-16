import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse } from '@cosmjs/stargate';
import { resolveConfig } from 'prettier';
import { RegenApi } from '../src/api';
import { QueryClientImpl } from '../src/generated/cosmos/bank/v1beta1/query';
import { MsgSend } from '../src/generated/cosmos/bank/v1beta1/tx';
import { ServiceClientImpl } from '../src/generated/cosmos/tx/v1beta1/service';

const TEST_ADDRESS = 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46';
const NODE_URL =
  process.env['NODE_URL'] || 'http://redwood.regen.network:26657/';
const TEST_FEE = {
  amount: [
    {
      denom: 'stake',
      amount: '5000',
    },
  ],
  gas: '200000',
};
const TEST_MEMO = `regen-js v${process.env.npm_package_version} tests`;
// This test msg just sends tokens to the same address
const TEST_MSG = MsgSend.fromPartial({
  fromAddress: TEST_ADDRESS,
  toAddress: TEST_ADDRESS,
  amount: [{ amount: '1000', denom: 'uregen' }],
});

const connect = async (): Promise<RegenApi> => {
  const mnemonic = // mnemonic for TEST_ADDRESS
    'coast scheme approve soccer juice wealth bunker state fetch warrior inmate belt';

  const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'regen',
  });

  return RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: NODE_URL,
      signer,
    },
  });
};

const fundWallets = async (
  wallets: string[],
): Promise<DeliverTxResponse | undefined> => {
  let txRes: DeliverTxResponse | undefined;
  const mnemonic = process.env['FAUCET_MNEMONIC'] || '';

  const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'regen',
  });
  const faucetAccount = await signer.getAccounts();
  const faucetAddress = faucetAccount[0].address;

  const faucetApi = await RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: NODE_URL,
      signer,
    },
  });
  const signingClient = faucetApi.msgClient;

  const messages = wallets.map(walletAddress => {
    return MsgSend.fromPartial({
      fromAddress: faucetAddress,
      toAddress: walletAddress,
      amount: [{ amount: '1000000', denom: 'stake' }],
    });
  });

  const signedTxBytes = await faucetApi.msgClient?.sign(
    faucetAddress,
    messages,
    TEST_FEE,
    TEST_MEMO,
  );

  expect(signedTxBytes).toBeTruthy();
  if (signedTxBytes) {
    txRes = await signingClient?.broadcast(signedTxBytes);
    expect(txRes).toBeTruthy();
  }
  return txRes;
};

let api: RegenApi;

describe('RegenApi with tendermint connection', () => {
  beforeAll(async () => {
    api = await connect();
  });
  xdescribe('Signing and broadcasting txs', () => {
    it('should fund the test account with an initial regen balance', async () => {
      await fundWallets([TEST_ADDRESS]);
    });
    it('should get data back with a signing client - signed transaction', async () => {
      const signedTxBytes = await api.msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG],
        TEST_FEE,
        TEST_MEMO,
      );
      expect(api.msgClient).toBeTruthy();
      expect(signedTxBytes).toBeTruthy();
    });
    it('should return a tx hash when sending tokens', async () => {
      jest.setTimeout(10000);
      let txRes: DeliverTxResponse | undefined;
      const signingClient = api.msgClient;

      const signedTxBytes = await api.msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG],
        TEST_FEE,
        TEST_MEMO,
      );
      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await signingClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
      }
    });
  });
  describe('Querying', () => {
    it('should fetch balances using tendermint query client', async () => {
      const bankClient = new QueryClientImpl(api.queryClient);

      const res = await bankClient.AllBalances({
        address: TEST_ADDRESS,
      });
      expect(res.balances.length).toBeGreaterThanOrEqual(1);
    });

    xit('should fetch a tx using tendermint service client', async () => {
      const redwoodTxHash =
        'F6A31AB068F49C5719ECB3793E0C3C4412EDD1F0C3D3C954EE0D9B1C81A0BEC8';
      const serviceClient = new ServiceClientImpl(api.queryClient);

      const res = await serviceClient.GetTx({
        hash: redwoodTxHash,
      });
      expect(res.txResponse).toBeTruthy();
      expect(res.txResponse?.data).toBeTruthy();
      expect(res.txResponse?.txhash).toEqual(redwoodTxHash);
    });
  });
});
