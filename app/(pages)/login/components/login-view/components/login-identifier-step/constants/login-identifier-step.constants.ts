import { LOGIN_PHONE_ENABLED } from "@/app/(pages)/login/constants/login.constants";
import type { LoginIdentifierKind } from "@/app/(pages)/login/types/login.types";

export const LOGIN_IDENTIFIER_STEP_TITLE = "Вхід в Ocean";
export const LOGIN_IDENTIFIER_STEP_DESCRIPTION = LOGIN_PHONE_ENABLED
  ? "Введіть email або номер телефону. Ми надішлемо одноразовий код, пароль не потрібен."
  : "Введіть email. Ми надішлемо одноразовий код, пароль не потрібен.";
export const LOGIN_IDENTIFIER_STEP_LABEL = LOGIN_PHONE_ENABLED ? "Email або телефон" : "Email";
export const LOGIN_IDENTIFIER_STEP_PLACEHOLDER = LOGIN_PHONE_ENABLED
  ? "name@example.com або +380…"
  : "name@example.com";
export const LOGIN_IDENTIFIER_STEP_SUBMIT_LABEL = "Отримати код";
export const LOGIN_IDENTIFIER_STEP_SUBMITTING_LABEL = "Надсилаємо код…";
export const LOGIN_IDENTIFIER_STEP_TERMS =
  "Продовжуючи, ви погоджуєтесь з умовами використання та політикою конфіденційності.";
export const LOGIN_IDENTIFIER_STEP_ERROR = LOGIN_PHONE_ENABLED
  ? "Вкажіть коректний email або номер у форматі +380 XX XXX XX XX."
  : "Вкажіть коректний email.";

/** Icon shown while the value is not yet recognisable as either kind; email-only login is always mail. */
export const LOGIN_IDENTIFIER_STEP_DEFAULT_ICON = LOGIN_PHONE_ENABLED ? "person" : "mail";

export const LOGIN_IDENTIFIER_STEP_ICONS: Record<LoginIdentifierKind, string> = {
  email: "mail",
  phone: "call",
};

export const LOGIN_IDENTIFIER_STEP_FIELD_CLASS_NAME =
  "flex h-[52px] items-center gap-2.5 rounded-xl border-[1.5px] bg-background px-3.5 transition-colors";
export const LOGIN_IDENTIFIER_STEP_FIELD_STATE_CLASS_NAMES = {
  default: "border-footer-border focus-within:border-accent",
  error: "border-error-dark",
};
