import { ApiError } from "@/app/core/api/api-fetch";
import {
  API_ERROR_TOAST_TITLE,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { toastStore } from "../toast-provider/toast-store";

export function handleApiError(error: unknown) {
  const message = error instanceof ApiError ? error.message : DEFAULT_API_ERROR_MESSAGE;

  toastStore.error(API_ERROR_TOAST_TITLE, message);
}
