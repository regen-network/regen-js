import Long from 'long';

export function omitDefault<
  T extends string | number | Long | undefined | boolean,
>(input: T): T | undefined {
  if (typeof input === 'string') {
    return input === '' ? undefined : input;
  }

  if (typeof input === 'number') {
    return input === 0 ? undefined : input;
  }

  if (Long.isLong(input)) {
    return input.isZero() ? undefined : input;
  }

  if (!input) {
    return undefined;
  }

  throw new Error(`Got unsupported type '${typeof input}'`);
}
