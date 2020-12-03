import { makeAuthInfoBytes, makeSignDoc } from '@cosmjs/proto-signing';
import { cosmos } from '@cosmjs/proto-signing/types/codec/generated/codecimpl';

import { RegenApi } from '../api';
import { Coin } from '../generated/cosmos/base/v1beta1/coin';
import { TxBody } from '../generated/cosmos/tx/v1beta1/tx';
import { SignDoc } from '../generated/cosmos/tx/v1beta1/tx';
import { Any } from '../generated/google/protobuf/any';

interface MakeSignDocOptions {
	pubkeys: readonly Any[];
	feeAmount: readonly Coin[];
	gasLimit: number;
	sequence: number;
	signMode: cosmos.tx.signing.v1beta1.SignMode;
	chainId: string;
	accountNumber: number;
}

export class TxBuilder {
	#api: RegenApi;
	#txBody: TxBody = {
		memo: '',
		messages: [],
		nonCriticalExtensionOptions: [],
		timeoutHeight: 0,
		extensionOptions: [],
	};

	constructor(api: RegenApi) {
		this.#api = api;
	}

	addMsgs(msg: Any): void {
		this.#txBody.messages.push(msg);
	}

	private makeBodyBytes(): Uint8Array {
		return TxBody.encode(this.#txBody).finish();
	}

	makeSignDoc(options: MakeSignDocOptions): SignDoc {
		return makeSignDoc(
			this.makeBodyBytes(),
			makeAuthInfoBytes(
				options.pubkeys,
				options.feeAmount,
				options.gasLimit,
				options.sequence
			),
			options.chainId,
			options.accountNumber
		) as SignDoc;
	}
}
