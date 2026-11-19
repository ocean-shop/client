import {
  LOGIN_EMAIL_PATTERN,
  LOGIN_PHONE_PATTERN,
  LOGIN_PHONE_SEPARATORS_PATTERN,
} from "../constants/login.constants";
import type { LoginIdentifierKind, LoginIdentifierMode } from "../types/login.types";

/**
 * `null` until the value is a complete email or Ukrainian mobile number. Phones are never
 * recognised in the email-only mode, i.e. while the shop has phone login off.
 */
export const getLoginIdentifierKindHelper = (
  value: string,
  mode: LoginIdentifierMode
): LoginIdentifierKind | null => {
  const trimmed = value.trim();

  if (LOGIN_EMAIL_PATTERN.test(trimmed)) return "email";
  if (
    mode === "emailOrPhone" &&
    LOGIN_PHONE_PATTERN.test(trimmed.replace(LOGIN_PHONE_SEPARATORS_PATTERN, ""))
  ) {
    return "phone";
  }

  return null;
};
