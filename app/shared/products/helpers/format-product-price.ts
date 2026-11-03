import {
  CATALOG_PRODUCTS_LOCALE,
  PRODUCT_PRICE_CURRENCY_SIGN,
} from "../constants/products.constants";

const priceFormatter = new Intl.NumberFormat(CATALOG_PRODUCTS_LOCALE);

/** Takes the API's decimal strings as well as amounts already computed on the client. */
export const formatProductPriceHelper = (value: string | number): string => {
  const amount = Math.round(Number(value));

  return `${priceFormatter.format(amount)} ${PRODUCT_PRICE_CURRENCY_SIGN}`;
};
