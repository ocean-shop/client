import type { LoginIdentifierKind } from "@/app/(pages)/login/types/login.types";

export type LoginCodeSentNoticeProps = {
  identifier: string;
  identifierKind: LoginIdentifierKind;
};
