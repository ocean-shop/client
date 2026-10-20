import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";

/** The backend's own explanation for a client error; a generic message for anything else. */
export const getCabinetAddressErrorMessageHelper = ({
  status,
  message,
}: {
  status: number;
  message: string | null;
}): string => {
  return (status < 500 && message) || (API_ERROR_MESSAGES[status] ?? DEFAULT_API_ERROR_MESSAGE);
};
