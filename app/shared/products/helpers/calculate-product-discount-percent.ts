/** Returns `undefined` when there is nothing to advertise: no old price, or one that is not higher. */
export function calculateProductDiscountPercentHelper(
  price: string,
  oldPrice: string | null
): number | undefined {
  if (!oldPrice) return undefined;

  const priceAmount = Number(price);
  const oldPriceAmount = Number(oldPrice);
  if (oldPriceAmount <= priceAmount) return undefined;

  return Math.round(((oldPriceAmount - priceAmount) / oldPriceAmount) * 100);
}
