import type {
  CabinetProfileFieldConfig,
  CabinetProfileForm,
} from "../types/cabinet-profile-contacts.types";

export const CABINET_PROFILE_CONTACTS_TITLE = "Контакти";
export const CABINET_PROFILE_CONTACTS_EDIT_LABEL = "Редагувати";
export const CABINET_PROFILE_CONTACTS_CANCEL_LABEL = "Скасувати";
export const CABINET_PROFILE_CONTACTS_SAVE_LABEL = "Зберегти зміни";
export const CABINET_PROFILE_CONTACTS_SAVED_LABEL = "Зміни збережено";
export const CABINET_PROFILE_CONTACTS_EMPTY_VALUE = "Не вказано";
export const CABINET_PROFILE_CONTACTS_SAVE_ERROR_TOAST_TITLE = "Не вдалося зберегти зміни";

export const CABINET_PROFILE_CONTACTS_INFO_LABELS = {
  fullName: "ПІБ",
  phone: "Мобільний",
  email: "Email",
};

export const CABINET_PROFILE_CONTACTS_FIELDS: CabinetProfileFieldConfig[] = [
  { name: "lastName", label: "Прізвище", placeholder: "Коваль", autoComplete: "family-name" },
  { name: "firstName", label: "Ім’я", placeholder: "Олена", autoComplete: "given-name" },
  {
    name: "middleName",
    label: "По батькові",
    placeholder: "Петрівна",
    autoComplete: "additional-name",
  },
  {
    name: "phone",
    label: "Мобільний",
    placeholder: "+380 __ ___ __ __",
    autoComplete: "tel",
    type: "tel",
    inputMode: "tel",
  },
];

/** The email is the login, and the profile endpoint has no way to change it. */
export const CABINET_PROFILE_CONTACTS_EMAIL_FIELD = {
  label: "Email",
  note: "Email використовується для входу, тому змінити його тут не можна.",
};

export const CABINET_PROFILE_CONTACTS_EMPTY_FORM: CabinetProfileForm = {
  lastName: "",
  firstName: "",
  middleName: "",
  phone: "",
};

export const CABINET_PROFILE_CONTACTS_VALIDATION_MESSAGES = {
  lastName: "Вкажіть прізвище.",
  firstName: "Вкажіть ім’я.",
  phone: "Вкажіть мобільний номер у форматі +380 XX XXX XX XX.",
};

/** Keeps the joined `fullName` well under the backend's 300-character limit. */
export const CABINET_PROFILE_CONTACTS_NAME_MAX_LENGTH = 90;
/** `+380`, `380` or a bare `0`, followed by the nine digits of a Ukrainian mobile number. */
export const CABINET_PROFILE_CONTACTS_PHONE_PATTERN = /^(?:\+?38)?0\d{9}$/;
export const CABINET_PROFILE_CONTACTS_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;
/** The backend stores numbers as `+380XXXXXXXXX`, the same shape the login uses. */
export const CABINET_PROFILE_CONTACTS_PHONE_PREFIX = "+380";
export const CABINET_PROFILE_CONTACTS_PHONE_DIGITS = 9;
