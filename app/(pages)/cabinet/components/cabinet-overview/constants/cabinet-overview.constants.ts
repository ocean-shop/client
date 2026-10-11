export const CABINET_OVERVIEW_TITLE = "Вітаємо!";
export const CABINET_OVERVIEW_TEXT = "Тут ваші активні замовлення, обране та дані для доставки.";

export const CABINET_OVERVIEW_LOCALE = "uk-UA";

/** Ukrainian needs three forms: 1 замовлення, 3 замовлення, 9 замовлень. */
export const CABINET_OVERVIEW_ORDER_WORD_FORMS: Partial<Record<Intl.LDMLPluralRule, string>> = {
  one: "замовлення",
  few: "замовлення",
  many: "замовлень",
  other: "замовлень",
};

export const CABINET_OVERVIEW_ORDERS_STAT = {
  icon: "receipt_long",
  label: "Замовлення",
  emptyValue: "Замовлень ще немає",
  emptyNote: "Тут з’являться ваші покупки та їхні статуси",
  note: "Історія покупок і статуси доставки",
};

export const CABINET_OVERVIEW_FAVORITES_STAT = {
  icon: "favorite",
  label: "Обране",
  emptyValue: "Список порожній",
  emptyNote: "Зберігайте товари, щоб повернутися до них пізніше",
  note: "Слідкуйте за цінами та наявністю",
};

export const CABINET_OVERVIEW_ADDRESS_STAT = {
  icon: "location_on",
  label: "Основна адреса",
  emptyValue: "Не вказано",
  emptyNote: "Додайте адресу, щоб швидше оформлювати замовлення",
};
