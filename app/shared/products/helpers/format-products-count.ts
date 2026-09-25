import {
  CATALOG_PRODUCTS_LOCALE,
  CATALOG_PRODUCTS_WORD_FORMS,
} from "../constants/products.constants";

const pluralRules = new Intl.PluralRules(CATALOG_PRODUCTS_LOCALE);

/** Formats a product total with the matching Ukrainian plural form, e.g. "9 товарів". */
export function formatProductsCountHelper(count: number): string {
  const word = CATALOG_PRODUCTS_WORD_FORMS[pluralRules.select(count)];

  return `${count.toLocaleString(CATALOG_PRODUCTS_LOCALE)} ${word ?? CATALOG_PRODUCTS_WORD_FORMS.other}`;
}
