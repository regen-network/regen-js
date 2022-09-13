import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import {
  MsgCreateClass,
  MsgSend,
} from '../src/generated/regen/ecocredit/v1/tx';
import { StdFee } from '@cosmjs/amino/build/signdoc';
import { Secp256k1HdWallet } from '@cosmjs/amino/build/secp256k1hdwallet';
import {
  MsgCreate,
  MsgPut,
  MsgTake,
} from '../src/generated/regen/ecocredit/basket/v1/tx';
import { BasketCredit } from '../src/generated/regen/ecocredit/basket/v1/types';

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
const TEST_BATCH_DENOM = 'C01-001-20170606-20210601-007';

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

const runAminoTest = async (msgClient: MessageClient | undefined, testMsg: any) => {
  let txRes: DeliverTxResponse | undefined;
  const signedTxBytes = await msgClient?.sign(
    TEST_ADDRESS,
    [testMsg],
    TEST_FEE,
    TEST_MEMO,
  );

  expect(signedTxBytes).toBeTruthy();
  if (signedTxBytes) {
    txRes = await msgClient?.broadcast(signedTxBytes);
    expect(txRes).toBeTruthy();
    expect(txRes?.code).toBe(0);
  }
}

describe('RegenApi with tendermint connection', () => {
  xdescribe('Signing and broadcasting Ecocredit txs', () => {
    it('should sign and broadcast MsgSend using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            tradableAmount: '0.01',
          },
        ],
      });

      runAminoTest(msgClient, TEST_MSG_SEND);
    });
    it('should sign and broadcast MsgCreateClass using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

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

      runAminoTest(msgClient, TEST_MSG_CREATE_CLASS);
    });
  });
  describe('Signing and broadcasting Basket txs using legacy amino sign mode', () => {
    xit('should sign and broadcast MsgCreate', async () => {
      const { msgClient } = await connect();

      const basketName = 'TEST' + (Date.now() % 1000);
      const TEST_BASKET_MSG_CREATE = MsgCreate.fromPartial({
        curator: TEST_ADDRESS,
        name: basketName,
        description: 'test description',
        exponent: 7,
        disableAutoRetire: false,
        creditTypeAbbrev: 'C',
        allowedClasses: ['C14', 'C13'],
        dateCriteria: undefined,
        fee: [
          {
            denom: 'uregen',
            amount: '20000000',
          },
        ],
      });

      runAminoTest(msgClient, TEST_BASKET_MSG_CREATE);

    });
    xit('should sign and broadcast MsgPut', async () => {
      const { msgClient } = await connect();

      const TEST_BASKET_MSG_PUT = MsgPut.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        credits: [{ batchDenom: TEST_BATCH_DENOM, amount: '1' }],
      });

      runAminoTest(msgClient, TEST_BASKET_MSG_PUT);
    });
    it('should sign and broadcast MsgTake', async () => {
      const { msgClient } = await connect();
      const TEST_BASKET_MSG_TAKE = MsgTake.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        amount: '1000000',
        retirementJurisdiction: 'US-CO 98765',
        retireOnTake: true,
      });

      runAminoTest(msgClient, TEST_BASKET_MSG_TAKE);
    });
  });
});
