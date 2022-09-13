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
import {
  MsgBuyDirect,
  MsgSell,
  MsgCancelSellOrder,
} from '../src/generated/regen/ecocredit/marketplace/v1/tx';
import Long from 'long';
import { MessageClient } from '../src/tx/msg';

const TEST_ADDRESS = 'regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp';
const TEST_BUYER_ADDRESS = 'regen13hu59094gzfcpxl58fcz294p5g5956utwlpqll';
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

const runAminoTest = async (
  msgClient: MessageClient | undefined,
  testMsg: any,
): Promise<void> => {
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
    console.log('txRes');
    expect(txRes).toBeTruthy();
    expect(txRes?.code).toBe(0);
  }
};

describe('RegenApi with tendermint connection', () => {
  xdescribe('Signing and broadcasting Ecocredit txs using legacy amino sign mode', () => {
    it('should sign and broadcast MsgSend', async () => {
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
    xit('should sign and broadcast MsgCreateClass', async () => {
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
    xit('should sign and broadcast MsgTake', async () => {
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
describe('Signing and broadcasting Marketplace txs using legacy amino sign mode', () => {
  xit('should sign and broadcast MsgSell', async () => {
    const { msgClient } = await connect();
    const sellOrder = {
      batchDenom: TEST_BATCH_DENOM,
      quantity: '1',
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

    runAminoTest(msgClient, TEST_MSG_SELL);
  });
  xit('should sign and broadcast MsgCancelSellOrder', async () => {
    // This test passes, but it needs a real sellOrderId generated by the same address.
    // If sell order 50 doesn't work, run the MsgSell test to get a new sellOrderId to cancel.
    const { msgClient } = await connect();

    const TEST_MSG_CANCEL = MsgCancelSellOrder.fromPartial({
      seller: TEST_ADDRESS,
      sellOrderId: Long.fromValue(52), // If this id doesn't work, run the MsgSell test to get a new sellOrderId to cancel
    });

    runAminoTest(msgClient, TEST_MSG_CANCEL);
  });
  it('should sign and broadcast MsgBuyDirect', async () => {
    const connectBuyer = async (): Promise<RegenApi> => {
      // regen13hu59094gzfcpxl58fcz294p5g5956utwlpqll
      const mnemonic =
        'seminar throw sorry nerve outer lottery stuff blush couple medal wire pink';

      // const newAccount = await Secp256k1HdWallet.generate(12, {
      //   prefix: 'regen',
      // });
      // const accounts = await newAccount.getAccounts();
      // console.log('accounts', accounts);
      // console.log('newAccount', newAccount);

      const buyerSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: 'regen',
      });

      return RegenApi.connect({
        connection: {
          type: 'tendermint',
          endpoint: REDWOOD_NODE_TM_URL,
          signer: buyerSigner,
        },
      });
    };
    const { msgClient } = await connectBuyer(); // TODO - Error: Failed to retrieve account from signer

    const TEST_MSG_BUY = MsgBuyDirect.fromPartial({
      buyer: TEST_BUYER_ADDRESS,
      orders: [
        {
          sellOrderId: '53',
          quantity: '1',
          bidPrice: { denom: 'uregen', amount: '1000000' },
          disableAutoRetire: false,
          retirementJurisdiction: 'US',
        },
      ],
    });

    const signedTxBytes = await msgClient?.sign(
      TEST_ADDRESS,
      [TEST_MSG_BUY],
      TEST_FEE,
      TEST_MEMO,
    );

    expect(signedTxBytes).toBeTruthy();
    if (signedTxBytes) {
      let txRes = await msgClient?.broadcast(signedTxBytes);
      console.log('txRes');
      expect(txRes).toBeTruthy();
      expect(txRes?.code).toBe(0);
    }
  });
});
