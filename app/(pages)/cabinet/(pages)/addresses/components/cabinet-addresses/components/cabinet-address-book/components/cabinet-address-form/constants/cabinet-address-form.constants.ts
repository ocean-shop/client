import { DELIVERY_ENABLED_CARRIERS } from "@/app/shared/delivery/constants/delivery.constants";
import type { CabinetAddressType } from "../types/cabinet-address-form.types";

export const CABINET_ADDRESS_FORM_TYPES_LABEL = "Спосіб доставки";
export const CABINET_ADDRESS_FORM_MAIN_LABEL = "Зробити основною адресою";
export const CABINET_ADDRESS_FORM_CANCEL_LABEL = "Скасувати";
export const CABINET_ADDRESS_FORM_SAVE_LABEL = "Зберегти адресу";
export const CABINET_ADDRESS_FORM_SAVE_ERROR_TOAST_TITLE = "Не вдалося зберегти адресу";

export const CABINET_ADDRESS_FORM_TYPES: CabinetAddressType[] = [
  {
    carrier: "nova",
    method: "branch",
    icon: "storefront",
    label: "Відділення Нової Пошти",
    note: "1–2 дні",
  },
  {
    carrier: "nova",
    method: "postomat",
    icon: "inventory_2",
    label: "Поштомат Нової Пошти",
    note: "1–2 дні",
  },
  {
    carrier: "nova",
    method: "courier",
    icon: "local_shipping",
    label: "Кур’єр Нової Пошти",
    note: "1–2 дні",
  },
  {
    carrier: "ukr",
    method: "branch",
    icon: "markunread_mailbox",
    label: "Відділення Укрпошти",
    note: "2–5 днів",
  },
];

export const CABINET_ADDRESS_FORM_AVAILABLE_TYPES = CABINET_ADDRESS_FORM_TYPES.filter(
  ({ carrier }) => DELIVERY_ENABLED_CARRIERS[carrier]
);

export const CABINET_ADDRESS_FORM_COURIER_FIELDS = {
  street: {
    label: "Вулиця, будинок",
    placeholder: "вул. Зелена, 147",
    autoComplete: "address-line1",
  },
  apartment: {
    label: "Квартира, під’їзд, поверх",
    placeholder: "кв. 14, під’їзд 2",
    autoComplete: "address-line2",
  },
};

export const CABINET_ADDRESS_FORM_VALIDATION_MESSAGES = {
  point: "Оберіть відділення або поштомат.",
  manualPoint: "Вкажіть населений пункт і номер відділення або поштомату.",
  street: "Вкажіть вулицю та номер будинку.",
};

/** Leaves room in the saved line for the carrier and city around the street. */
export const CABINET_ADDRESS_FORM_STREET_MAX_LENGTH = 120;
