import { formatCabinetPhoneHelper } from "../../../../../../../helpers/format-cabinet-phone";
import type { CabinetProfileForm } from "../types/cabinet-profile-contacts.types";

/** "Коваль Олена Петрівна" → last, first and middle name; anything past the second word is kept as the middle name. */
export const buildCabinetProfileFormHelper = (
  fullName: string | null,
  phone: string | null,
  birthday: string | null
): CabinetProfileForm => {
  const [lastName = "", firstName = "", ...middleName] = (fullName ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return {
    lastName,
    firstName,
    middleName: middleName.join(" "),
    phone: phone ? formatCabinetPhoneHelper(phone) : "",
    birthday,
  };
};
