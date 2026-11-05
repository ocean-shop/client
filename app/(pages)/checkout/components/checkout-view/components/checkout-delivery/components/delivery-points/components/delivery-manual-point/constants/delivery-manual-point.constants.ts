import type { DeliveryPointMethod } from "@/app/shared/delivery/types/delivery.types";

export const DELIVERY_MANUAL_POINT_CITY_FIELD = {
  label: "Місто або село",
  placeholder: "Наприклад, с. Петрівське",
  autoComplete: "address-level2",
};

export const DELIVERY_MANUAL_POINT_NUMBER_FIELDS: Record<
  DeliveryPointMethod,
  { label: string; placeholder: string }
> = {
  branch: { label: "Номер відділення", placeholder: "34" },
  postomat: { label: "Номер поштомату", placeholder: "1414" },
};

export const DELIVERY_MANUAL_POINT_CITY_MAX_LENGTH = 100;
/** Nova Poshta numbers and Ukrposhta postal indexes are both short runs of digits. */
export const DELIVERY_MANUAL_POINT_NUMBER_MAX_LENGTH = 10;
export const DELIVERY_MANUAL_POINT_NUMBER_IGNORED_PATTERN = /\D/g;
