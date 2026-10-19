export const CONTACTS_FORM_NAME_LABEL = "Ім’я";
export const CONTACTS_FORM_NAME_PLACEHOLDER = "Олена";
export const CONTACTS_FORM_CONTACT_LABEL = "Телефон або email";
export const CONTACTS_FORM_CONTACT_PLACEHOLDER = "+380…";
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

/** Limits of the backend's `CreateContactDto`. */
export const CONTACTS_FORM_NAME_MAX_LENGTH = 255;
export const CONTACTS_FORM_CONTACT_MAX_LENGTH = 255;
export const CONTACTS_FORM_MESSAGE_MAX_LENGTH = 5000;

/** The backend's rule: `+380`, `380` or `0` followed by nine digits, or an email. */
export const CONTACTS_FORM_CONTACT_PATTERN = /^(?:(?:\+380|380|0)\d{9}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;
/** Stripped from phone numbers only, since an email may legitimately contain a dash. */
export const CONTACTS_FORM_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;

export const CONTACTS_FORM_LABEL_CLASS_NAME = "flex min-w-0 flex-col gap-1.5";
export const CONTACTS_FORM_ERROR_CLASS_NAME = "text-[12.5px] text-error-dark";
export const CONTACTS_FORM_INVALID_CLASS_NAME = "!border-error-dark focus:!ring-error/12";

/** Matches the `outline` variant of the shared input. */
export const CONTACTS_FORM_TEXTAREA_CLASS_NAME =
  "h-[110px] w-full min-w-0 resize-none rounded-[11px] border border-footer-border bg-background px-3.5 py-3 text-[14.5px] text-foreground outline-none transition-shadow placeholder:text-muted-light focus:border-accent focus:ring-[3px] focus:ring-accent/12";
