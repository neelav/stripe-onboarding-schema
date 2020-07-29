function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

// eslint-disable-next-line import/prefer-default-export
export { assertNever };
