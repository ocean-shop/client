import {
  CABINET_PROFILE_EDIT_FORM_PHONE_PATTERN,
  CABINET_PROFILE_EDIT_FORM_PHONE_SEPARATORS_PATTERN,
  CABINET_PROFILE_EDIT_FORM_VALIDATION_MESSAGES,
} from "../constants/cabinet-profile-edit-form.constants";
import type {
  CabinetProfileForm,
  CabinetProfileFormErrors,
} from "../types/cabinet-profile-edit-form.types";

/** Every field that still needs attention, or `null` when the form can be saved. The phone is optional. */
export const validateCabinetProfileFormHelper = (
  form: CabinetProfileForm
): CabinetProfileFormErrors | null => {
  const errors: CabinetProfileFormErrors = {};
  const phone = form.phone.replace(CABINET_PROFILE_EDIT_FORM_PHONE_SEPARATORS_PATTERN, "");

  if (!form.lastName.trim()) {
    errors.lastName = CABINET_PROFILE_EDIT_FORM_VALIDATION_MESSAGES.lastName;
  }
  if (!form.firstName.trim()) {
    errors.firstName = CABINET_PROFILE_EDIT_FORM_VALIDATION_MESSAGES.firstName;
  }
  if (phone && !CABINET_PROFILE_EDIT_FORM_PHONE_PATTERN.test(phone)) {
    errors.phone = CABINET_PROFILE_EDIT_FORM_VALIDATION_MESSAGES.phone;
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
