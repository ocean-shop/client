import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  LOGIN_CODE_SENT_NOTICE_KIND_LABELS,
  LOGIN_CODE_SENT_NOTICE_LABEL,
} from "./constants/login-code-sent-notice.constants";
import type { LoginCodeSentNoticeProps } from "./types/login-code-sent-notice.types";

export const LoginCodeSentNotice = ({ identifier, identifierKind }: LoginCodeSentNoticeProps) => {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-accent-soft px-4 py-3.5">
      <MaterialIcon name="mark_email_read" className="text-[22px] text-accent" />
      <p className="min-w-0 break-words text-sm leading-normal text-accent-dark">
        <b className="font-semibold">{LOGIN_CODE_SENT_NOTICE_LABEL}</b>{" "}
        {LOGIN_CODE_SENT_NOTICE_KIND_LABELS[identifierKind]}{" "}
        <b className="font-semibold">{identifier}</b>
      </p>
    </div>
  );
};
