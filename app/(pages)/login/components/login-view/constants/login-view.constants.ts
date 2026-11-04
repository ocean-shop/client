import { LOGIN_PHONE_ENABLED } from "../../../constants/login.constants";

export const LOGIN_VIEW_CARD_CLASS_NAME =
  "flex w-full flex-col gap-5 rounded-[20px] bg-background px-5 py-6 lg:max-w-[440px] lg:gap-6 lg:p-9 lg:shadow-[0_20px_50px_-36px_color-mix(in_srgb,var(--color-foreground)_35%,transparent)]";

export const LOGIN_IDENTIFIER_ERROR = LOGIN_PHONE_ENABLED
  ? "Вкажіть коректний email або номер у форматі +380 XX XXX XX XX."
  : "Вкажіть коректний email.";

/** Mirrors the backend, which blocks the code after five wrong attempts. */
export const LOGIN_CODE_MAX_ATTEMPTS = 5;
export const LOGIN_RESEND_DELAY_SECONDS = 60;
export const LOGIN_RESEND_TICK_MS = 1000;

export const LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE = "Не вдалося надіслати код";
export const LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE = "Не вдалося увійти";
/**
 * The backend answers every rejected code with a 400, so only this message tells a mistyped code
 * apart from an expired or blocked one.
 */
export const LOGIN_INVALID_CODE_API_MESSAGE = "Неправильний OTP-код";
