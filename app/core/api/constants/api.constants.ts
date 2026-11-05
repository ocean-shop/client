import type { ApiErrorMessages } from "../types/api.types";

export const API_ERROR_MESSAGES: ApiErrorMessages = {
  400: "Сервер не зміг обробити цей запит.",
  401: "Щоб продовжити, увійдіть у свій акаунт.",
  403: "У вас немає прав для виконання цієї дії.",
  404: "Ми не змогли знайти те, що ви шукали.",
  408: "Час очікування запиту вичерпано. Спробуйте ще раз.",
  429: "Забагато запитів. Зачекайте трохи і спробуйте ще раз.",
  500: "Щось пішло не так на нашому боці.",
  502: "Щось пішло не так на нашому боці.",
  503: "Сервіс тимчасово недоступний.",
  504: "Запит виконувався занадто довго.",
};

export const DEFAULT_API_ERROR_MESSAGE = "Щось пішло не так. Спробуйте ще раз.";
export const API_ERROR_TOAST_TITLE = "Помилка запиту";

export const API_JSON_HEADERS = { "Content-Type": "application/json" };

/** Server-only: the storefront every catalog, auth and order request is scoped to. */
export const API_SHOP_ID = process.env.SHOP_ID ?? "";
export const API_SHOP_ID_QUERY_PARAM = "shopId";

/** How long catalog reads (products, categories, filters) stay cached. */
export const API_DEFAULT_REVALIDATE_SECONDS = 300;
