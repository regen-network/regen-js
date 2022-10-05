import { DirectSecp256k1HdWallet, OfflineSigner } from '@cosmjs/proto-signing';
import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import { QueryClientImpl } from '../src/generated/cosmos/bank/v1beta1/query';
import { MsgSend } from '../src/generated/cosmos/bank/v1beta1/tx';
import { ServiceClientImpl } from '../src/generated/cosmos/tx/v1beta1/service';

const NODE_URL = process.env.NODE_URL || 'http://localhost:26657';
const TEST_FEE = {
  amount: [
    {
      denom: 'uregen',
      amount: '5000',
    },
  ],
  gas: '200000',
};
const TEST_MEMO = `regen-js v${process.env.npm_package_version} tests`;
// This test msg just sends tokens to the same address

const connect = async (signer: OfflineSigner): Promise<RegenApi> => {
  return RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: NODE_URL,
      signer,
    },
  });
};

let api: RegenApi;
let signerAddress: string;
let testTxHash: string | undefined;

describe('RegenApi with tendermint connection', () => {
  beforeAll(async () => {
    const mnemonic = // mnemonic for signerAddress
      'time dice choose cabbage suit panic silly cattle picture auto grab hole';
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: 'regen',
    });
    api = await connect(signer);

    const accounts = await signer.getAccounts();
    signerAddress = accounts[0].address;
  });
  describe('Signing and broadcasting txs', () => {
    it('should get data back with a signing client - signed transaction', async () => {
      const signedTxBytes = await api.msgClient?.sign(
        signerAddress,
        [
          MsgSend.fromPartial({
            fromAddress: signerAddress,
            toAddress: signerAddress,
            amount: [{ amount: '1000', denom: 'uregen' }],
          }),
        ],
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
        signerAddress,
        [
          MsgSend.fromPartial({
            fromAddress: signerAddress,
            toAddress: signerAddress,
            amount: [{ amount: '1000', denom: 'uregen' }],
          }),
        ],
        TEST_FEE,
        TEST_MEMO,
      );
      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await signingClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
        expect(txRes?.transactionHash).toBeTruthy();
        testTxHash = txRes?.transactionHash;
      }
    });
  });
  describe('Querying', () => {
    it('should fetch balances using tendermint query client', async () => {
      const bankClient = new QueryClientImpl(api.queryClient);

      const res = await bankClient.AllBalances({
        address: signerAddress,
      });
      expect(res.balances.length).toBeGreaterThanOrEqual(1);
    });

    it('should fetch a tx using tendermint service client', async () => {
      const serviceClient = new ServiceClientImpl(api.queryClient);

      const res = await serviceClient.GetTx({
        hash: testTxHash,
      });
      expect(res.txResponse).toBeTruthy();
      expect(res.txResponse?.data).toBeTruthy();
      expect(res.txResponse?.txhash).toEqual(testTxHash);
    });
  });
});
