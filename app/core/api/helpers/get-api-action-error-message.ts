import type { ApiActionMessageFailure } from "../types/api.types";
import { getApiStatusErrorMessage } from "./get-api-status-error-message";

/** The backend's own explanation for a client error; a generic message for anything else. */
export const getApiActionErrorMessage = ({ status, message }: ApiActionMessageFailure): string => {
  return (status < 500 && message) || getApiStatusErrorMessage(status);
};
