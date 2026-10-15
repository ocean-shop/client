import type { CabinetAddressBookStatus } from "../types/cabinet-address-book.types";

export const CABINET_ADDRESS_BOOK_TITLES = {
  list: "Збережені адреси",
  adding: "Нова адреса",
};

export const CABINET_ADDRESS_BOOK_ADD_LABEL = "Додати";
export const CABINET_ADDRESS_BOOK_EMPTY_LABEL =
  "Ви ще не зберегли жодної адреси. Додайте відділення, поштомат чи адресу для кур’єра.";

export const CABINET_ADDRESS_BOOK_STATUS_LABELS: Record<CabinetAddressBookStatus, string> = {
  saved: "Адресу збережено",
  main: "Основну адресу змінено",
  removed: "Адресу видалено",
};

export const CABINET_ADDRESS_BOOK_ERROR_TOAST_TITLES = {
  setMain: "Не вдалося зробити адресу основною",
  remove: "Не вдалося видалити адресу",
};
