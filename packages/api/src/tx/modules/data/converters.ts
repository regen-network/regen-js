import { AminoConverters } from '@cosmjs/stargate';
import { attestConverter, attestTypeUrl } from './v1/attest_amino';

export function createDataAminoConverters(): AminoConverters {
  return {
    [attestTypeUrl]: attestConverter(),
  };
}
