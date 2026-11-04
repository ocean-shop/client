import type { LoginIdentifierKind } from "@/app/(pages)/login/types/login.types";

export const LOGIN_CODE_SENT_NOTICE_LABEL = "Код надіслано";

export const LOGIN_CODE_SENT_NOTICE_KIND_LABELS: Record<LoginIdentifierKind, string> = {
  email: "на пошту",
  phone: "на номер",
};
