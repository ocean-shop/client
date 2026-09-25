export function parsePriceInputHelper(value: string): number | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  const price = Number(trimmed);

  return Number.isFinite(price) && price >= 0 ? price : undefined;
}
