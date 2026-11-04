import {
  CABINET_OVERVIEW_LOCALE,
  CABINET_OVERVIEW_ORDER_WORD_FORMS,
} from "../constants/cabinet-overview.constants";

const pluralRules = new Intl.PluralRules(CABINET_OVERVIEW_LOCALE);

/** Formats an order total with the matching Ukrainian plural form, e.g. "9 замовлень". */
export const formatCabinetOrdersCountHelper = (count: number): string => {
  const word = CABINET_OVERVIEW_ORDER_WORD_FORMS[pluralRules.select(count)];

  return `${count.toLocaleString(CABINET_OVERVIEW_LOCALE)} ${word ?? CABINET_OVERVIEW_ORDER_WORD_FORMS.other}`;
};
