/** Takes the API's decimal strings as well as amounts already computed on the client. */
export function formatProductPriceHelper(value: string | number): string {
  const amount = Math.round(Number(value));

  return `${new Intl.NumberFormat("uk-UA").format(amount)} ₴`;
}
