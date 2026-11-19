import type {
  LoginIdentifierKind,
  LoginIdentifierMode,
} from "@/app/(pages)/login/types/login.types";

export const LOGIN_IDENTIFIER_STEP_TITLE = "Вхід в Ocean";
export const LOGIN_IDENTIFIER_STEP_DESCRIPTIONS: Record<LoginIdentifierMode, string> = {
  emailOrPhone:
    "Введіть email або номер телефону. Ми надішлемо одноразовий код, пароль не потрібен.",
  email: "Введіть email. Ми надішлемо одноразовий код, пароль не потрібен.",
};
export const LOGIN_IDENTIFIER_STEP_LABELS: Record<LoginIdentifierMode, string> = {
  emailOrPhone: "Email або телефон",
  email: "Email",
};
export const LOGIN_IDENTIFIER_STEP_PLACEHOLDERS: Record<LoginIdentifierMode, string> = {
  emailOrPhone: "name@example.com або +380…",
  email: "name@example.com",
};
export const LOGIN_IDENTIFIER_STEP_SUBMIT_LABEL = "Отримати код";
export const LOGIN_IDENTIFIER_STEP_SUBMITTING_LABEL = "Надсилаємо код…";
export const LOGIN_IDENTIFIER_STEP_TERMS =
  "Продовжуючи, ви погоджуєтесь з умовами використання та політикою конфіденційності.";

/** Icon shown while the value is not yet recognisable as either kind; email-only login is always mail. */
export const LOGIN_IDENTIFIER_STEP_DEFAULT_ICONS: Record<LoginIdentifierMode, string> = {
  emailOrPhone: "person",
  email: "mail",
};

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
