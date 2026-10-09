/** Drops float noise such as `599.9700000000001`, since the backend rejects more than two decimals. */
export function roundCheckoutAmountHelper(amount: number): number {
  return Math.round(amount * 100) / 100;
}
