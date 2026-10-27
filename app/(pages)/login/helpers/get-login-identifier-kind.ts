import {
  LOGIN_EMAIL_PATTERN,
  LOGIN_PHONE_ENABLED,
  LOGIN_PHONE_PATTERN,
  LOGIN_PHONE_SEPARATORS_PATTERN,
} from "../constants/login.constants";
import type { LoginIdentifierKind } from "../types/login.types";

/**
 * `null` until the value is a complete email or Ukrainian mobile number. Phones are never
 * recognised while phone login is disabled.
 */
export const getLoginIdentifierKindHelper = (value: string): LoginIdentifierKind | null => {
  const trimmed = value.trim();

  if (LOGIN_EMAIL_PATTERN.test(trimmed)) return "email";
  if (
    LOGIN_PHONE_ENABLED &&
    LOGIN_PHONE_PATTERN.test(trimmed.replace(LOGIN_PHONE_SEPARATORS_PATTERN, ""))
  ) {
    return "phone";
  }

  return null;
};
