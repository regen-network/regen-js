import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import {
  MsgCreateClass,
  MsgSend,
} from '../src/generated/regen/ecocredit/v1/tx';
import { StdFee } from '@cosmjs/amino/build/signdoc';
import { Secp256k1HdWallet } from '@cosmjs/amino/build/secp256k1hdwallet';

const TEST_ADDRESS = 'regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp';
const REDWOOD_NODE_TM_URL = 'http://redwood.regen.network:26657/';
const TEST_FEE: StdFee = {
  amount: [
    {
      denom: 'uregen',
      amount: '5000',
    },
  ],
  gas: '200000',
};
const TEST_MEMO = `regen-js v${process.env.npm_package_version} tests`;

const connect = async (): Promise<RegenApi> => {
  const mnemonic =
    'time dice choose cabbage suit panic silly cattle picture auto grab hole';

  // This is an Amino signer
  const signer = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'regen',
  });

  return RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: REDWOOD_NODE_TM_URL,
      signer,
    },
  });
};

describe('RegenApi with tendermint connection', () => {
  describe('Signing and broadcasting txs', () => {
    it('should sign and broadcast MsgSend using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const api = await connect();
      const msgClient = api.msgClient;
      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: 'C01-001-20170606-20210601-007',
            tradableAmount: '0.01',
          },
        ],
      });

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_SEND],
        TEST_FEE,
        TEST_MEMO,
      );

      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await msgClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
        expect(txRes?.code).toBe(0);
      }
    });
    it('should sign and broadcast MsgCreateClass using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const api = await connect();
      const msgClient = api.msgClient;
      const TEST_MSG_CREATE_CLASS = MsgCreateClass.fromPartial({
        admin: TEST_ADDRESS,
        issuers: [TEST_ADDRESS],
        metadata: 'unit test metadata',
        creditTypeAbbrev: 'C',
        fee: {
          denom: 'uregen',
          amount: '20000000',
        },
      });

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_CREATE_CLASS],
        TEST_FEE,
        TEST_MEMO,
      );

      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await msgClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
        expect(txRes?.code).toBe(0);
      }
    });
  });
});
