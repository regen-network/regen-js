import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: [
        'cosmos/authz/v1beta1/tx.amino.ts',
        'cosmos/staking/v1beta1/tx.amino.ts',
      ],
    },
    interfaces: {
      enabled: true,
      useUnionTypes: false,
    },
    prototypes: {
      includePackageVar: false,
      addTypeUrlToDecoders: true,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration',
      },
      methods: {
        toJSON: true,
        fromJSON: true,
      },
    },
    aminoEncoding: {
      enabled: true,
      exceptions: AMINO_MAP,
      useRecursiveV2encoding: true,
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
  },
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
