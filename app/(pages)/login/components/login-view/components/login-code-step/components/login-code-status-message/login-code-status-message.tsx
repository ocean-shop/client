import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { SuccessMessage } from "@/app/ui/success-message/success-message";
import {
  LOGIN_CODE_STATUS_MESSAGE_INVALID_DESCRIPTION,
  LOGIN_CODE_STATUS_MESSAGE_INVALID_TITLE,
  LOGIN_CODE_STATUS_MESSAGE_VERIFIED_LABEL,
} from "./constants/login-code-status-message.constants";
import type { LoginCodeStatusMessageProps } from "./types/login-code-status-message.types";

/** Says how the last attempt ended; renders nothing while the code is still being typed. */
export const LoginCodeStatusMessage = ({ status, attemptsLeft }: LoginCodeStatusMessageProps) => {
  if (status === "verified") {
    return <SuccessMessage>{LOGIN_CODE_STATUS_MESSAGE_VERIFIED_LABEL}</SuccessMessage>;
  }

  if (status !== "invalid") return null;

  return (
    <div
      role="alert"
      className="flex items-start gap-2 text-[13.5px] leading-[1.45] text-error-dark"
    >
      <MaterialIcon name="error" className="text-[18px]" />
      <span>
        <b className="font-semibold">{LOGIN_CODE_STATUS_MESSAGE_INVALID_TITLE}</b>{" "}
        {LOGIN_CODE_STATUS_MESSAGE_INVALID_DESCRIPTION} {attemptsLeft}
      </span>
    </div>
  );
};
