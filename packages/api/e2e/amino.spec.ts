import { Secp256k1, Secp256k1Signature, sha256 } from '@cosmjs/crypto';
import { DeliverTxResponse } from '@cosmjs/stargate';
import { fromBase64 } from '@cosmjs/encoding';
import { RegenApi } from '../src/api';
import { MsgSend } from '../src/generated/regen/ecocredit/v1/tx';
import { makeSignDoc, StdFee } from '@cosmjs/amino/build/signdoc';
import { Secp256k1HdWallet } from '@cosmjs/amino/build/secp256k1hdwallet';
import { serializeSignDoc } from '@cosmjs/amino/build/signdoc';

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
const TEST_MSG_SEND = MsgSend.fromPartial({
  sender: TEST_ADDRESS,
  recipient: TEST_ADDRESS,
  credits: [
    { batchDenom: 'C01-001-20170606-20210601-007', tradableAmount: '0.01' },
  ],
});

const connect = async (): Promise<RegenApi> => {
  const mnemonic =
    'time dice choose cabbage suit panic silly cattle picture auto grab hole'; //regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp

  // Amino signer throws auth error:
  const signer = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'regen',
  });

  const accounts = await signer.getAccounts();

  console.log('accounts', accounts);

  // proto signer works:
  // const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
  //   prefix: 'regen',
  // });

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
    it('should create a valid signature using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const api = await connect();
      const msgClient = api.msgClient;
      const mnemonic =
        'time dice choose cabbage suit panic silly cattle picture auto grab hole'; //regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp

      // Amino signer throws auth error:
      const signer = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: 'regen',
      });
      const accounts = await signer.getAccounts();
      const pubkey = accounts[0].pubkey;

      const signDoc = makeSignDoc(
        [{ type: MsgSend.$type, value: TEST_MSG_SEND }],
        TEST_FEE,
        'regen-redwood-1',
        TEST_MEMO,
        96,
        2,
      );

      const { signature, signed } = await signer?.signAmino(
        TEST_ADDRESS,
        signDoc,
      );

      const valid = await Secp256k1.verifySignature(
        Secp256k1Signature.fromFixedLength(fromBase64(signature.signature)),
        sha256(serializeSignDoc(signed)),
        pubkey,
      );
      expect(valid).toEqual(true);
    });
    it('should sign and broadcast using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const api = await connect();
      const msgClient = api.msgClient;

      const signedTxBytes = await msgClient?.sign(TEST_ADDRESS,[TEST_MSG_SEND],TEST_FEE,TEST_MEMO)
      
      expect(signedTxBytes).toBeTruthy();
      if (signedTxBytes) {
        // console.log('signedTxBytes', signedTxBytes);
        txRes = await msgClient?.broadcast(signedTxBytes);
        console.log('txRes', txRes);
        expect(txRes).toBeTruthy();
      }
    });
  });
});
