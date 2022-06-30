import { Secp256k1HdWallet } from '@cosmjs/amino';
import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import { MsgCreateClass } from '../src/generated/regen/ecocredit/v1/tx';

const TEST_ADDRESS = 'regen1m6d7al7yrgwv6j6sczt382x33yhxrtrxz2q09z';
const V4_NODE_TM_URL = 'http://194.37.81.19:26657/';
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
const TEST_MSG = MsgCreateClass.fromPartial({
  admin: TEST_ADDRESS,
  creditTypeAbbrev: 'C',
  issuers: [TEST_ADDRESS],
  metadata: 'some metadata',
  fee: {
    denom: 'uregen',
    amount: '20000000',
  },
});

const connect = async (): Promise<RegenApi> => {
  const mnemonic =
    'present weekend loan ladder cherry ill since ancient harsh smart enrich visa';
  const signer = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'regen',
  });

  return RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: V4_NODE_TM_URL,
      signer,
    },
  });
};

describe('RegenApi with tendermint connection', () => {
  describe('Signing and broadcasting txs', () => {
    it('should sign and broadcast using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const api = await connect();
      const msgClient = api.msgClient;

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG],
        TEST_FEE,
        TEST_MEMO,
      );
      console.log('LOG', signedTxBytes);

      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await msgClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
      }
    });
  });
});
