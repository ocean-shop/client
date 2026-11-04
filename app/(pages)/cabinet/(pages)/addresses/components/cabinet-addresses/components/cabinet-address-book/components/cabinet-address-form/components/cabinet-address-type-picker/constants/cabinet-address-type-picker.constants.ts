import { DELIVERY_ENABLED_CARRIERS } from "@/app/shared/delivery/constants/delivery.constants";
import type { CabinetAddressType } from "../../../types/cabinet-address-form.types";

export const CABINET_ADDRESS_TYPE_PICKER_LABEL = "Спосіб доставки";

export const CABINET_ADDRESS_TYPE_PICKER_TYPES: CabinetAddressType[] = [
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

export const CABINET_ADDRESS_TYPE_PICKER_AVAILABLE_TYPES = CABINET_ADDRESS_TYPE_PICKER_TYPES.filter(
  ({ carrier }) => DELIVERY_ENABLED_CARRIERS[carrier]
);
