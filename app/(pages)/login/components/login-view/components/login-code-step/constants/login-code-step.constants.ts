import type { LoginIdentifierKind } from "@/app/(pages)/login/types/login.types";

export const LOGIN_CODE_STEP_BACK_LABEL = "Змінити";
export const LOGIN_CODE_STEP_TITLE = "Введіть код з 4 цифр";
export const LOGIN_CODE_STEP_VALIDITY = "Код дійсний 10 хвилин.";
export const LOGIN_CODE_STEP_SUBMIT_LABEL = "Увійти";
export const LOGIN_CODE_STEP_VERIFYING_LABEL = "Перевіряємо код…";

export const LOGIN_CODE_STEP_KIND_LABELS: Record<LoginIdentifierKind, string> = {
  email: "email",
  phone: "номер",
};
