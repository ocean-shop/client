import type { DeliveryPointMethod } from "@/app/shared/delivery/types/delivery.types";

export const DELIVERY_POINTS_TITLES: Record<DeliveryPointMethod, string> = {
  branch: "Оберіть відділення",
  postomat: "Оберіть поштомат",
};

export const DELIVERY_POINTS_SEARCH_PLACEHOLDER = "Номер або адреса";
export const DELIVERY_POINTS_EMPTY_LABEL = "Нічого не знайдено. Спробуйте інший номер чи адресу.";
export const DELIVERY_POINTS_ERROR_LABEL =
  "Не вдалося завантажити відділення перевізника. Спробуйте ще раз трохи пізніше.";
export const DELIVERY_POINTS_SKELETON_ROWS = 3;

export const DELIVERY_POINTS_QUERY_KEY = "delivery-points";
export const DELIVERY_POINTS_DEBOUNCE_MS = 300;
/** Branch lists change rarely, so going back to a city or method is answered from cache. */
export const DELIVERY_POINTS_STALE_TIME_MS = 60 * 60 * 1000;
