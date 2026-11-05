import type { ContactsFormInputField } from "../types/contacts-form.types";

/** Limits of the backend's `CreateContactDto`. */
const CONTACTS_FORM_NAME_MAX_LENGTH = 255;
const CONTACTS_FORM_CONTACT_MAX_LENGTH = 255;
export const CONTACTS_FORM_MESSAGE_MAX_LENGTH = 5000;

export const CONTACTS_FORM_INPUT_FIELDS: ContactsFormInputField[] = [
  {
    name: "name",
    label: "Ім’я",
    placeholder: "Олена",
    maxLength: CONTACTS_FORM_NAME_MAX_LENGTH,
    autoComplete: "given-name",
  },
  {
    name: "contact",
    label: "Телефон або email",
    placeholder: "+380…",
    maxLength: CONTACTS_FORM_CONTACT_MAX_LENGTH,
  },
];

export const CONTACTS_FORM_MESSAGE_LABEL = "Повідомлення";
export const CONTACTS_FORM_MESSAGE_PLACEHOLDER = "Номер замовлення та ваше питання";
export const CONTACTS_FORM_SUBMIT_LABEL = "Надіслати";

export const CONTACTS_FORM_SENT_TOAST_TITLE = "Повідомлення надіслано";
export const CONTACTS_FORM_SENT_TOAST_MESSAGE = "Ми відповімо вам якнайшвидше.";
export const CONTACTS_FORM_SEND_ERROR_TOAST_TITLE = "Не вдалося надіслати повідомлення";

export const CONTACTS_FORM_VALIDATION_MESSAGES = {
  name: "Вкажіть ім’я.",
  contact: "Вкажіть email або номер у форматі +380 XX XXX XX XX.",
  message: "Напишіть повідомлення.",
};

/** The backend's rule: `+380`, `380` or `0` followed by nine digits, or an email. */
export const CONTACTS_FORM_CONTACT_PATTERN = /^(?:(?:\+380|380|0)\d{9}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;
/** Stripped from phone numbers only, since an email may legitimately contain a dash. */
export const CONTACTS_FORM_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;

/** Matches the `outline` variant of the shared input. */
export const CONTACTS_FORM_TEXTAREA_CLASS_NAME =
  "h-[110px] w-full min-w-0 resize-none rounded-[11px] border border-footer-border bg-background px-3.5 py-3 text-[14.5px] text-foreground outline-none transition-shadow placeholder:text-muted-light focus:border-accent focus:ring-[3px] focus:ring-accent/12";
