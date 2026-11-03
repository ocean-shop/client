import { API_ERROR_MESSAGES, DEFAULT_API_ERROR_MESSAGE } from "../constants/api.constants";

/** User-facing text for an HTTP status, falling back to a generic message. */
export const getApiStatusErrorMessage = (status: number): string =>
  API_ERROR_MESSAGES[status] ?? DEFAULT_API_ERROR_MESSAGE;
