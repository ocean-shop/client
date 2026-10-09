import type { LoginIdentifierKind } from "@/app/(pages)/login/types/login.types";

export const LOGIN_IDENTIFIER_STEP_TITLE = "Вхід в Ocean";
export const LOGIN_IDENTIFIER_STEP_DESCRIPTION =
  "Введіть email або номер телефону. Ми надішлемо одноразовий код, пароль не потрібен.";
export const LOGIN_IDENTIFIER_STEP_LABEL = "Email або телефон";
export const LOGIN_IDENTIFIER_STEP_PLACEHOLDER = "name@example.com або +380…";
export const LOGIN_IDENTIFIER_STEP_SUBMIT_LABEL = "Отримати код";
export const LOGIN_IDENTIFIER_STEP_TERMS =
  "Продовжуючи, ви погоджуєтесь з умовами використання та політикою конфіденційності.";
export const LOGIN_IDENTIFIER_STEP_ERROR =
  "Вкажіть коректний email або номер у форматі +380 XX XXX XX XX.";

/** Icon shown while the value is not yet recognisable as either kind. */
export const LOGIN_IDENTIFIER_STEP_DEFAULT_ICON = "person";

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
