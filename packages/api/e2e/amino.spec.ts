import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { HdPath, Slip10RawIndex } from '@cosmjs/crypto/build/slip10';
import { DeliverTxResponse } from '@cosmjs/stargate';
import { fromBase64, fromHex, toBase64 } from '@cosmjs/encoding';
import { RegenApi } from '../src/api';
import { MsgSend } from '../src/generated/regen/ecocredit/v1/tx';
import { Secp256k1Wallet } from '@cosmjs/amino/build/secp256k1wallet';
import { makeSignDoc } from '@cosmjs/amino/build/signdoc';
import { Secp256k1HdWallet } from '@cosmjs/amino/build/secp256k1hdwallet';
// const TEST_ADDRESS = 'regen1f8q9cydxz32ct64hr3aqtt5nsvruggnymvcdxm';
const TEST_ADDRESS = 'regen1m6d7al7yrgwv6j6sczt382x33yhxrtrxz2q09z';
// const V4_NODE_TM_URL = 'http://194.37.81.19:26657/';
const REDWOOD_NODE_TM_URL = 'http://redwood.regen.network:26657/';
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
const TEST_MSG_SEND = MsgSend.fromPartial({
  sender: TEST_ADDRESS,
  recipient: TEST_ADDRESS,
  credits: [
    // { batchDenom: 'C02-001-19930101-20031031-001', tradableAmount: '0.01' },
    { batchDenom: 'C01-001-20170606-20210601-007', tradableAmount: '0.01' },
  ],
});

const connect = async (): Promise<RegenApi> => {
  const mnemonic =
    'present weekend loan ladder cherry ill since ancient harsh smart enrich visa';

  // const signerM = await DirectSecp256k1HdWallet. .fromMnemonic(mnemonic, {
  //   prefix: 'regen',
  //   bip39Password: 'test',
  // });

  // const accounts = await signerM.getAccounts();
  // console.log('accounts', accounts[0]);
  // const defaultPrivkey = fromHex(
  //   'b8c462d2bb0c1a92edf44f735021f16c270f28ee2c3d1cb49943a5e70a3c763e',
  // );
  // const defaultAddress = 'regen1m6d7al7yrgwv6j6sczt382x33yhxrtrxz2q09z';
  // const defaultPubkey = fromHex(
  //   '03f146c27639179e5b67b8646108f48e1a78b146c74939e34afaa5414ad5c93f8a',
  // );

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
    it('should sign and broadcast using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const api = await connect();
      const msgClient = api.msgClient;

      //   export interface StdSignDoc {
      //     readonly chain_id: string;
      //     readonly account_number: string;
      //     readonly sequence: string;
      //     readonly fee: StdFee;
      //     readonly msgs: readonly AminoMsg[];
      //     readonly memo: string;
      // }

      // const signDoc = makeSignDoc(
      //   [{ type: MsgSend.$type, value: TEST_MSG_SEND }],
      //   TEST_FEE,
      //   'regen-redwood-1',
      //   TEST_MEMO,
      //   TEST_ADDRESS,
      //   '',
      // );

      // const response = await signer?.signAmino(TEST_ADDRESS, signDoc);
      // const signedTxBytes = fromBase64(response.signature.signature);
      const signedTxBytes = await msgClient?.sign(
        TEST_ADDRESS,
        [TEST_MSG_SEND],
        TEST_FEE,
        TEST_MEMO,
      );
      console.log('signedTxBytes', signedTxBytes);
      // console.log('signedTxBytes', signedTxBytes);

      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        txRes = await msgClient?.broadcast(signedTxBytes);
        console.log('txRes', txRes);
        expect(txRes).toBeTruthy();
      }
    });
  });
});
