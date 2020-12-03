import { fromHex } from '@cosmjs/encoding';
import { coins } from '@cosmjs/launchpad';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import { RegenApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';
import { MsgClientImpl } from './generated/cosmos/bank/v1beta1/tx';
import { Any } from './generated/google/protobuf/any';
import { TxBuilder } from './connection/txBuilder';

let api: RegenApi;

describe('RegenApi', () => {
	beforeAll(async () => {
		api = await RegenApi.connect({
			connection: {
				type: 'tendermint',
				url: 'http://devnet.regen.network:26657',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const impl = new QueryClientImpl(api.connection.queryConnection);
		const res = await impl.AllBalances({
			address: 'regen:1j9h8dpu7ah2hl9rg7ycu0e64kh90rrlpk9kagz', // Amaury's account.
		});

		// TODO So ideally, the two lines would be combined into one:
		// ```
		// api.query.cosmos.bank.v1beta1.AllBalances({});`
		// ```

		expect(res.balances).toHaveLength(1);
	});

	it('should create and broadcast a tx', async () => {
		// Set up sender account
		// m/44'/118'/0'/0/0
		// pubkey: 02baa4ef93f2ce84592a49b1d729c074eab640112522a7a89f7d03ebab21ded7b6
		const defaultMnemonic =
			'special sign fit simple patrol salute grocery chicken wheat radar tonight ceiling';
		const defaultPubkey = fromHex(
			'02baa4ef93f2ce84592a49b1d729c074eab640112522a7a89f7d03ebab21ded7b6'
		);
		const defaultAddress = 'cosmos1jhg0e7s6gn44tfc5k37kr04sznyhedtc9rzys5';

		// Generate TxBody.
		const txBuilder = new TxBuilder(api);
		const impl = new MsgClientImpl(api.txBuilderConnection(txBuilder));
		await impl.Send({
			amount: [
				{
					denom: 'utree',
					amount: '1',
				},
			],
			fromAddress: defaultAddress,
			toAddress: defaultAddress,
		});

		const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
			defaultMnemonic
		);
		const pubkey: Any = {
			typeUrl: '/cosmos.crypto.secp256k1.PubKey',
			value: defaultPubkey,
		};
		const feeAmount = coins(1, 'utree');
		const gasLimit = 200000;
		const chainId = 'devnet-1';
		const accountNumber = 1;
		const sequence = 1;

		const signDoc = txBuilder.makeSignDoc({
			accountNumber,
			chainId,
			feeAmount,
			gasLimit,
			pubkeys: [pubkey],
			sequence,
			signMode: sequence,
		});
		const { signature } = await wallet.signDirect(defaultAddress, signDoc);
	});
});
