export const isPresentableValue = (
  value: unknown
): value is number | string | boolean =>
  ['string', 'number', 'boolean'].includes(typeof value);
