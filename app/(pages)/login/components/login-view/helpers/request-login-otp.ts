import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiStatusErrorMessage } from "@/app/core/api/helpers/get-api-status-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { requestClientOtpAction } from "@/app/shared/auth/actions/request-client-otp";
import { LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE } from "../constants/login-view.constants";

/** Resolves to whether the code was sent; failures are reported with a toast. */
export const requestLoginOtpHelper = async (login: string): Promise<boolean> => {
  try {
    const result = await requestClientOtpAction({ login });

    if (result.ok) return true;

    toastStore.error(LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE, getApiStatusErrorMessage(result.status));
  } catch {
    toastStore.error(LOGIN_REQUEST_OTP_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
  }

  return false;
};
