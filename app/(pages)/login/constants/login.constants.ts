export const LOGIN_PAGE_CLASS_NAME =
  "flex flex-1 flex-col bg-surface-soft px-4 pb-8 pt-7 lg:items-center lg:px-10 lg:pb-[88px] lg:pt-[72px]";

export const LOGIN_METADATA_TITLE = "Вхід";

export const LOGIN_CODE_LENGTH = 4;

/**
 * Whether visitors can sign in with a phone number. Public, so the client form sees it; phone
 * login stays on unless the flag is explicitly "false", leaving email as the only option.
 */
export const LOGIN_PHONE_ENABLED = process.env.NEXT_PUBLIC_PHONE_LOGIN_ENABLED !== "false";

export const LOGIN_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** `+380`, `380` or a bare `0`, followed by the nine digits of a Ukrainian mobile number. */
export const LOGIN_PHONE_PATTERN = /^(?:\+?38)?0\d{9}$/;
export const LOGIN_PHONE_SEPARATORS_PATTERN = /[\s()-]/g;
export const LOGIN_NON_DIGIT_PATTERN = /\D/g;
