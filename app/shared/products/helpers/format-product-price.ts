export function formatProductPriceHelper(value: string): string {
  const amount = Math.round(Number(value));

  return `${new Intl.NumberFormat("uk-UA").format(amount)} ₴`;
}
