/** Anything but a positive whole number falls back to the first page. */
export function parseCabinetPageHelper(value: string | string[] | undefined): number {
  const page = Number(Array.isArray(value) ? value[0] : value);

  return Number.isInteger(page) && page > 0 ? page : 1;
}
