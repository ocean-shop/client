import type { LoginIdentifierKind } from "../types/login.types";

export const LOGIN_PAGE_CLASS_NAME =
  "flex flex-1 flex-col bg-surface-soft px-4 pb-8 pt-7 lg:items-center lg:px-10 lg:pb-[88px] lg:pt-[72px]";

export const LOGIN_CODE_LENGTH = 4;
export const LOGIN_CODE_MAX_ATTEMPTS = 3;
export const LOGIN_RESEND_DELAY_SECONDS = 60;

export const LOGIN_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** `+380`, `380` or a bare `0`, followed by the nine digits of a Ukrainian mobile number. */
export const LOGIN_PHONE_PATTERN = /^(?:\+?38)?0\d{9}$/;
export const LOGIN_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;
export const LOGIN_NON_DIGIT_PATTERN = /\D/g;

export const LOGIN_IDENTIFIER_KIND_SHORT_LABELS: Record<LoginIdentifierKind, string> = {
  email: "email",
  phone: "номер",
};

export const LOGIN_IDENTIFIER_KIND_SENT_TO_LABELS: Record<LoginIdentifierKind, string> = {
  email: "на пошту",
  phone: "на номер",
};
