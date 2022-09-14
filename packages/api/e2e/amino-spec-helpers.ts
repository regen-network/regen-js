import * as crypto from 'crypto';
import * as ethers from 'ethers';

export function makeEthTxHash(): string {
  return '0x' + genRandomStr(64);
}

export function makeEthContract(): string {
  let key = crypto.randomBytes(32).toString('hex');
  let id = '0x' + key;
  var wallet = new ethers.Wallet(id);
  return wallet.address;
}

export function genRandomStr(length: Number): string {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
