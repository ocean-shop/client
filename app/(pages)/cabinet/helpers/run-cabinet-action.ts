import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiActionErrorMessage } from "@/app/core/api/helpers/get-api-action-error-message";
import type { ApiActionMessageFailure } from "@/app/core/api/types/api.types";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";

/** Runs a server action and reports any failure in a toast; resolves to whether it went through. */
export const runCabinetActionHelper = async (
  action: () => Promise<{ ok: true } | ApiActionMessageFailure>,
  errorToastTitle: string
): Promise<boolean> => {
  try {
    const result = await action();

    if (result.ok) return true;

    toastStore.error(errorToastTitle, getApiActionErrorMessage(result));
  } catch {
    toastStore.error(errorToastTitle, DEFAULT_API_ERROR_MESSAGE);
  }

  return false;
};
