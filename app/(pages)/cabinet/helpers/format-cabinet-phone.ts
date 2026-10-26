import { CABINET_UA_PHONE_PATTERN } from "../constants/cabinet.constants";

/** `+380991234567` → `+380 99 123 45 67`; anything else is shown as it came. */
export const formatCabinetPhoneHelper = (phone: string): string => {
  const match = phone.match(CABINET_UA_PHONE_PATTERN);

  return match ? `+380 ${match.slice(1).join(" ")}` : phone;
};
