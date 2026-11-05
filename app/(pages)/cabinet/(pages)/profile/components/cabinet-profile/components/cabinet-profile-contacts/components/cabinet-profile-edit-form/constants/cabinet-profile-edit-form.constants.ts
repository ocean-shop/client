import type { CabinetProfileFieldConfig } from "../types/cabinet-profile-edit-form.types";

export const CABINET_PROFILE_EDIT_FORM_CANCEL_LABEL = "Скасувати";
export const CABINET_PROFILE_EDIT_FORM_SAVE_LABEL = "Зберегти зміни";
export const CABINET_PROFILE_EDIT_FORM_SAVE_ERROR_TOAST_TITLE = "Не вдалося зберегти зміни";

export const CABINET_PROFILE_EDIT_FORM_FIELDS: CabinetProfileFieldConfig[] = [
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

export const CABINET_PROFILE_EDIT_FORM_BIRTHDAY_FIELD = {
  label: "Дата народження",
  /** Earliest pickable birthday; the latest is today. */
  min: "1900-01-01",
};

/** The email is the login, and the profile endpoint has no way to change it. */
export const CABINET_PROFILE_EDIT_FORM_EMAIL_FIELD = {
  label: "Email",
  note: "Email використовується для входу, тому змінити його тут не можна.",
};

export const CABINET_PROFILE_EDIT_FORM_VALIDATION_MESSAGES = {
  lastName: "Вкажіть прізвище.",
  firstName: "Вкажіть ім’я.",
  phone: "Вкажіть мобільний номер у форматі +380 XX XXX XX XX.",
};

/** Keeps the joined `fullName` well under the backend's 300-character limit. */
export const CABINET_PROFILE_EDIT_FORM_NAME_MAX_LENGTH = 90;
/** `+380`, `380` or a bare `0`, followed by the nine digits of a Ukrainian mobile number. */
export const CABINET_PROFILE_EDIT_FORM_PHONE_PATTERN = /^(?:\+?38)?0\d{9}$/;
export const CABINET_PROFILE_EDIT_FORM_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;
/** The backend stores numbers as `+380XXXXXXXXX`, the same shape the login uses. */
export const CABINET_PROFILE_EDIT_FORM_PHONE_PREFIX = "+380";
export const CABINET_PROFILE_EDIT_FORM_PHONE_DIGITS = 9;
