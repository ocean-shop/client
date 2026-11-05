import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiActionErrorMessage } from "@/app/core/api/helpers/get-api-action-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { verifyClientOtpAction } from "@/app/shared/auth/actions/verify-client-otp";
import {
  LOGIN_INVALID_CODE_API_MESSAGE,
  LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE,
} from "../constants/login-view.constants";
import type { LoginCodeVerifyOutcome } from "../types/login-view.types";

/** A mistyped code is left for the form to show inline; any other failure goes to a toast. */
export const verifyLoginCodeHelper = async (
  login: string,
  code: string
): Promise<LoginCodeVerifyOutcome> => {
  try {
    const result = await verifyClientOtpAction({ login, code });

    if (result.ok) return "verified";
    if (result.message === LOGIN_INVALID_CODE_API_MESSAGE) return "invalid";

    toastStore.error(LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE, getApiActionErrorMessage(result));
  } catch {
    toastStore.error(LOGIN_VERIFY_OTP_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
  }

  return "failed";
};
