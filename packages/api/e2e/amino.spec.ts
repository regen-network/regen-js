import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import {
  MsgCancel,
  MsgCreateBatch,
  MsgCreateClass,
  MsgCreateProject,
  MsgRetire,
  MsgSend,
} from '../src/generated/regen/ecocredit/v1/tx';
import { StdFee } from '@cosmjs/amino/build/signdoc';
import { Secp256k1HdWallet } from '@cosmjs/amino/build/secp256k1hdwallet';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import {
  MsgCreate,
  MsgPut,
  MsgTake,
} from '../src/generated/regen/ecocredit/basket/v1/tx';
import {
  MsgBuyDirect,
  MsgSell,
  MsgCancelSellOrder,
} from '../src/generated/regen/ecocredit/marketplace/v1/tx';
import Long from 'long';
import { MessageClient } from '../src/tx/msg';
import {
  genRandomStr,
  makeEthContract,
  makeEthTxHash,
} from './amino-spec-helpers';
import { MsgSend as BankMsgSend } from '../src/generated/cosmos/bank/v1beta1/tx';

const TEST_ADDRESS = 'regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp';
const TEST_BUYER_ADDRESS = 'regen13hu59094gzfcpxl58fcz294p5g5956utwlpqll';

const NODE_URL =
  process.env['NODE_URL'] || 'http://redwood.regen.network:26657/';

const TEST_FEE: StdFee = {
  amount: [
    {
      denom: 'stake',
      amount: '5000',
    },
  ],
  gas: '200000',
};
const TEST_MEMO = `regen-js v${process.env.npm_package_version} tests`;
const TEST_BATCH_DENOM = 'C01-001-20170606-20210601-007';
const TEST_CLASS_ID = 'C22';
const MIN_CREDIT_AMOUNT = '0.000001';

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
    return BankMsgSend.fromPartial({
      fromAddress: faucetAddress,
      toAddress: walletAddress,
      amount: [{ amount: '30000000', denom: 'stake' }],
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

const runAminoTest = async (
  msgClient: MessageClient | undefined,
  testMsg: any,
  signerAddress?: string,
): Promise<void> => {
  let txRes: DeliverTxResponse | undefined;

  const signedTxBytes = await msgClient?.sign(
    signerAddress || TEST_ADDRESS,
    [testMsg],
    TEST_FEE,
    TEST_MEMO,
  );

  expect(signedTxBytes).toBeTruthy();
  if (signedTxBytes) {
    txRes = await msgClient?.broadcast(signedTxBytes);
    expect(txRes).toBeTruthy();
    console.log(txRes);
    expect(txRes?.code).toBe(0);
  }
};

describe('RegenApi with tendermint connection - Amino Tests', () => {
  it('should successfully fund test accounts', async () => {
    await fundWallets([TEST_ADDRESS, TEST_BUYER_ADDRESS]);
  });
  describe('Signing and broadcasting ecocredit administration & issuance', () => {
    it('should sign and broadcast MsgCreateClass', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_CREATE_CLASS = MsgCreateClass.fromPartial({
        admin: TEST_ADDRESS,
        issuers: [TEST_ADDRESS],
        metadata: 'unit test metadata',
        creditTypeAbbrev: 'C',
        fee: {
          denom: 'stake',
          amount: '20000000',
        },
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_CLASS);
    });
    xit('should sign and broadcast MsgCreateProject using legacy amino sign mode', async () => {
      const { msgClient } = await connect();
      const TEST_MSG_CREATE_PROJECT = MsgCreateProject.fromPartial({
        admin: TEST_ADDRESS,
        classId: TEST_CLASS_ID,
        jurisdiction: 'US-OR',
        referenceId: genRandomStr(10),
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_PROJECT);
    });
    xit('should sign and broadcast MsgCreateProject with no reference id using legacy amino sign mode', async () => {
      const { msgClient } = await connect();
      const TEST_MSG_CREATE_PROJECT = MsgCreateProject.fromPartial({
        admin: TEST_ADDRESS,
        classId: TEST_CLASS_ID,
        jurisdiction: 'US-OR',
        metadata: 'foo',
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_PROJECT);
    });
    xit('should sign and broadcast MsgCreateBatch using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      let startDate: Date = new Date('2019-01-16');
      let endDate: Date = new Date('2020-01-16');

      const TEST_MSG_CREATE_BATCH = MsgCreateBatch.fromPartial({
        issuer: TEST_ADDRESS,
        projectId: 'C22-001',
        issuance: [
          {
            recipient: TEST_ADDRESS,
            tradableAmount: '1.503',
            retiredAmount: '1.503',
            retirementJurisdiction: 'US-OR',
          },
        ],
        startDate: startDate,
        endDate: endDate,
        metadata: 'foobar',
        open: true,
        originTx: {
          id: makeEthTxHash(),
          source: 'polygon',
          contract: makeEthContract(),
          note: 'bridged from another chain',
        },
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_BATCH);
    });
    xit('should sign and broadcast MsgCreateBatch with default values using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      let startDate: Date = new Date('2019-01-16');
      let endDate: Date = new Date('2020-01-16');

      const TEST_MSG_CREATE_BATCH = MsgCreateBatch.fromPartial({
        issuer: TEST_ADDRESS,
        projectId: 'C22-001',
        issuance: [
          {
            recipient: TEST_ADDRESS,
            tradableAmount: '1.503',
          },
        ],
        startDate: startDate,
        endDate: endDate,
        metadata: 'foobar',
        open: false,
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_BATCH);
    });
  });
  xdescribe('Signing and broadcasting Ecocredit transfer & reture txs', () => {
    it('should sign and broadcast MsgSend with tradable credits using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            tradableAmount: MIN_CREDIT_AMOUNT,
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });
    it('should sign and broadcast MsgSend with retired credits using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            retiredAmount: MIN_CREDIT_AMOUNT,
            retirementJurisdiction: 'US-WA',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });
    it('should sign and broadcast MsgSend with retired and tradable credits using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            tradableAmount: MIN_CREDIT_AMOUNT,
            retiredAmount: MIN_CREDIT_AMOUNT,
            retirementJurisdiction: 'US-WA',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });

    it('should sign and broadcast MsgRetire using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_RETIRE = MsgRetire.fromPartial({
        owner: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            amount: '0.000001',
          },
        ],
        jurisdiction: 'US-OR',
      });

      await runAminoTest(msgClient, TEST_MSG_RETIRE);
    });
    it('should sign and broadcast MsgCancel using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_CANCEL = MsgCancel.fromPartial({
        owner: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            amount: MIN_CREDIT_AMOUNT,
          },
        ],
        reason: 'nope',
      });

      await runAminoTest(msgClient, TEST_MSG_CANCEL);
    });
  });
  xdescribe('Signing and broadcasting Basket txs using legacy amino sign mode', () => {
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

      await runAminoTest(msgClient, TEST_BASKET_MSG_CREATE);
    });
    it('should sign and broadcast MsgPut', async () => {
      const { msgClient } = await connect();

      const TEST_BASKET_MSG_PUT = MsgPut.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        credits: [{ batchDenom: TEST_BATCH_DENOM, amount: '1' }],
      });

      await runAminoTest(msgClient, TEST_BASKET_MSG_PUT);
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

      await runAminoTest(msgClient, TEST_BASKET_MSG_TAKE);
    });
  });
  xdescribe('Signing and broadcasting Marketplace txs using legacy amino sign mode', () => {
    it('should sign and broadcast MsgSell', async () => {
      const { msgClient } = await connect();
      const sellOrder = {
        batchDenom: TEST_BATCH_DENOM,
        quantity: '.01',
        askPrice: {
          denom: 'uregen',
          amount: '1000000',
        },
        disableAutoRetire: false,
        expiration: new Date('October 31, 2099'),
      };
      const TEST_MSG_SELL = MsgSell.fromPartial({
        seller: TEST_ADDRESS,
        orders: [sellOrder],
      });

      await runAminoTest(msgClient, TEST_MSG_SELL);
    });
    it('should sign and broadcast MsgSell without expiration', async () => {
      const { msgClient } = await connect();
      const sellOrder = {
        batchDenom: TEST_BATCH_DENOM,
        quantity: '.01',
        askPrice: {
          denom: 'uregen',
          amount: '1000000',
        },
        disableAutoRetire: true,
      };
      const TEST_MSG_SELL = MsgSell.fromPartial({
        seller: TEST_ADDRESS,
        orders: [sellOrder],
      });

      await runAminoTest(msgClient, TEST_MSG_SELL);
    });
    xit('should sign and broadcast MsgCancelSellOrder', async () => {
      // This test passes, but it needs a real sellOrderId generated by the same address.
      // If sell order 50 doesn't work, run the MsgSell test to get a new sellOrderId to cancel.
      const { msgClient } = await connect();

      const TEST_MSG_CANCEL = MsgCancelSellOrder.fromPartial({
        seller: TEST_ADDRESS,
        sellOrderId: Long.fromValue(52), // If this id doesn't work, run the MsgSell test to get a new sellOrderId to cancel
      });

      await runAminoTest(msgClient, TEST_MSG_CANCEL);
    });
    it('should sign and broadcast MsgBuyDirect with auto retirement', async () => {
      const connectBuyer = async (): Promise<RegenApi> => {
        // TEST_BUYER_ADDRESS mnemonic
        const mnemonic =
          'seminar throw sorry nerve outer lottery stuff blush couple medal wire pink';

        const buyerSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
          prefix: 'regen',
        });

        return RegenApi.connect({
          connection: {
            type: 'tendermint',
            endpoint: NODE_URL,
            signer: buyerSigner,
          },
        });
      };
      const { msgClient } = await connectBuyer();

      const TEST_MSG_BUY = MsgBuyDirect.fromPartial({
        buyer: TEST_BUYER_ADDRESS,
        orders: [
          {
            sellOrderId: '50',
            quantity: '.000001',
            bidPrice: { denom: 'uregen', amount: '1000000' },
            disableAutoRetire: false,
            retirementJurisdiction: 'US',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_BUY, TEST_BUYER_ADDRESS);
    });
    it('should sign and broadcast MsgBuyDirect with auto retirement disabled', async () => {
      const connectBuyer = async (): Promise<RegenApi> => {
        // TEST_BUYER_ADDRESS mnemonic
        const mnemonic =
          'seminar throw sorry nerve outer lottery stuff blush couple medal wire pink';

        const buyerSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
          prefix: 'regen',
        });

        return RegenApi.connect({
          connection: {
            type: 'tendermint',
            endpoint: NODE_URL,
            signer: buyerSigner,
          },
        });
      };
      const { msgClient } = await connectBuyer();

      const TEST_MSG_BUY = MsgBuyDirect.fromPartial({
        buyer: TEST_BUYER_ADDRESS,
        orders: [
          {
            sellOrderId: '12', // sell order with disableAutoRetire: true
            quantity: '.000001',
            bidPrice: { denom: 'uregen', amount: '13000000' },
            disableAutoRetire: true,
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_BUY, TEST_BUYER_ADDRESS);
    });
  });
});
