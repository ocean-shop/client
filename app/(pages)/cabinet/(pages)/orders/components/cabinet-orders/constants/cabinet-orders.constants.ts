import type { CabinetOrdersFilter, CabinetOrdersFilterId } from "../types/cabinet-orders.types";

export const CABINET_ORDERS_TITLE = "Мої замовлення";

export const CABINET_ORDERS_DEFAULT_FILTER: CabinetOrdersFilterId = "all";

/** The endpoint cannot filter by status, so the chips narrow down the page already loaded. */
export const CABINET_ORDERS_FILTERS: CabinetOrdersFilter[] = [
  { id: "all", label: "Усі", statuses: null },
  { id: "active", label: "В обробці", statuses: ["pending", "processing"] },
  { id: "shipped", label: "Відправлені", statuses: ["shipped"] },
  { id: "cancelled", label: "Скасовані", statuses: ["cancelled"] },
];

export const CABINET_ORDERS_EMPTY_FILTER_LABEL = "Замовлень у цій категорії немає";
export const CABINET_ORDERS_EMPTY_LABEL = "Ви ще нічого не замовляли";
export const CABINET_ORDERS_EMPTY_LINK_LABEL = "Перейти до покупок";
export const CABINET_ORDERS_EMPTY_LINK_HREF = "/";

export const CABINET_ORDERS_REPEAT_TOAST_TITLE = "Додано в кошик";
export const CABINET_ORDERS_REPEAT_TOAST_MESSAGE = (number: string, products: string) =>
  `${products} із замовлення ${number}`;
export const CABINET_ORDERS_REPEAT_TOAST_ACTION_LABEL = "Перейти в кошик";
export const CABINET_ORDERS_REPEAT_ERROR_TOAST_TITLE = "Не вдалося повторити замовлення";
export const CABINET_ORDERS_REPEAT_ERROR_TOAST_MESSAGE =
  "Товарів із цього замовлення зараз немає в наявності.";
