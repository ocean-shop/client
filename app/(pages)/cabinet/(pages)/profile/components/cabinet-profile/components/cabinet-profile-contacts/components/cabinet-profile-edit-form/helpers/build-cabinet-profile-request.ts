import type { UpdateUserProfileRequest } from "../../../../../../../types/profile.types";
import {
  CABINET_PROFILE_EDIT_FORM_PHONE_DIGITS,
  CABINET_PROFILE_EDIT_FORM_PHONE_PREFIX,
  CABINET_PROFILE_EDIT_FORM_PHONE_SEPARATORS_PATTERN,
} from "../constants/cabinet-profile-edit-form.constants";
import type { CabinetProfileForm } from "../types/cabinet-profile-edit-form.types";

/** Joins the name back into one `fullName` and brings the phone to `+380XXXXXXXXX`; blanks become `null`. */
export const buildCabinetProfileRequestHelper = (
  form: CabinetProfileForm
): UpdateUserProfileRequest => {
  const fullName = [form.lastName, form.firstName, form.middleName]
    .map((part) => part.trim().replace(/\s+/g, " "))
    .filter(Boolean)
    .join(" ");
  const phoneDigits = form.phone.replace(CABINET_PROFILE_EDIT_FORM_PHONE_SEPARATORS_PATTERN, "");

  return {
    fullName: fullName || null,
    phoneNumber: phoneDigits
      ? `${CABINET_PROFILE_EDIT_FORM_PHONE_PREFIX}${phoneDigits.slice(-CABINET_PROFILE_EDIT_FORM_PHONE_DIGITS)}`
      : null,
    birthday: form.birthday,
  };
};
