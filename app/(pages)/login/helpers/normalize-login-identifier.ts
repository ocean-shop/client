import { LOGIN_PHONE_SEPARATORS_PATTERN } from "../constants/login.constants";
import type { LoginIdentifierKind } from "../types/login.types";

/** The backend accepts phones only as bare digits, so spaces, dashes and brackets are dropped. */
export function normalizeLoginIdentifierHelper(value: string, kind: LoginIdentifierKind) {
  const trimmed = value.trim();

  return kind === "phone" ? trimmed.replace(LOGIN_PHONE_SEPARATORS_PATTERN, "") : trimmed;
}
