import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import {
  MsgCreateBatch,
  MsgCreateClass,
  MsgCreateProject,
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
const TEST_CLASS_ID = 'C22';

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

  // CORE MESSAGES
  describe('Signing and broadcasting Ecocredit txs', () => {
    xit('should sign and broadcast MsgSend using legacy amino sign mode', async () => {
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
    xit('should sign and broadcast MsgCreateClass using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
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
    xit('should sign and broadcast MsgCreateProject using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();
      const TEST_MSG_CREATE_PROJECT = MsgCreateProject.fromPartial({
        admin: TEST_ADDRESS,
        classId: TEST_CLASS_ID,
        jurisdiction: 'US-OR',
      });

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_CREATE_PROJECT],
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
    it('should sign and broadcast MsgCreateBatch using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      let startDate: Date = new Date("2019-01-16"); 
      let endDate: Date = new Date("2020-01-16");

      const TEST_MSG_CREATE_BATCH = MsgCreateBatch.fromPartial({
        issuer: TEST_ADDRESS,
        projectId: "C22-001",
        issuance: [
          {
            recipient: TEST_ADDRESS,
            tradableAmount: "50",
            retiredAmount: "50",
            retirementJurisdiction: "US-OR",
          },
        ],
        startDate: startDate,
        endDate: endDate,
        metadata: "foobar",
        open: true,
        note: "hello",
      });

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_CREATE_BATCH],
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

  // BASKET MESSAGES
  xdescribe('Signing and broadcasting Basket txs using legacy amino sign mode', () => {
    it('should sign and broadcast MsgCreate', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();
      const basketName = 'TEST' + (Date.now() % 1000);
      const TEST_MSG_CREATE = MsgCreate.fromPartial({
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

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_CREATE],
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
    it('should sign and broadcast MsgPut', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();
      const TEST_MSG_PUT = MsgPut.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        credits: [{ batchDenom: TEST_BATCH_DENOM, amount: '1' }],
      });

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_PUT],
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
    it('should sign and broadcast MsgTake', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();
      const TEST_MSG_TAKE = MsgTake.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        amount: '1000000',
        retirementJurisdiction: 'US-CO 98765',
        retireOnTake: true,
      });

      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_TAKE],
        TEST_FEE,
        TEST_MEMO,
      );

      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await msgClient?.broadcast(signedTxBytes);
        console.log('txRes', txRes);
        expect(txRes).toBeTruthy();
        expect(txRes?.code).toBe(0);
      }
    });
  });
});
