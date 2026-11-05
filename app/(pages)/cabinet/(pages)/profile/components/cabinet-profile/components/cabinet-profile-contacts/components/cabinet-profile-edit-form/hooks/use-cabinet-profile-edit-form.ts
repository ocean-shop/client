"use client";

import { useState } from "react";
import { runCabinetActionHelper } from "../../../../../../../../../helpers/run-cabinet-action";
import { updateUserProfileAction } from "../../../../../../../actions/update-user-profile";
import { CABINET_PROFILE_EDIT_FORM_SAVE_ERROR_TOAST_TITLE } from "../constants/cabinet-profile-edit-form.constants";
import { buildCabinetProfileFormHelper } from "../helpers/build-cabinet-profile-form";
import { buildCabinetProfileRequestHelper } from "../helpers/build-cabinet-profile-request";
import { validateCabinetProfileFormHelper } from "../helpers/validate-cabinet-profile-form";
import type {
  CabinetProfileEditFormProps,
  CabinetProfileForm,
  CabinetProfileFormErrors,
  CabinetProfileFormField,
} from "../types/cabinet-profile-edit-form.types";

/** The form opens with the saved details each time, since it mounts anew on every edit. */
export const useCabinetProfileEditForm = ({
  profile,
  phone,
  onSaved,
}: Pick<CabinetProfileEditFormProps, "profile" | "phone" | "onSaved">) => {
  const [form, setForm] = useState<CabinetProfileForm>(() =>
    buildCabinetProfileFormHelper(profile.fullName, phone, profile.birthday)
  );
  const [errors, setErrors] = useState<CabinetProfileFormErrors>({});
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (field: CabinetProfileFormField, value: string | null) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: null }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSaving) return;

    const nextErrors = validateCabinetProfileFormHelper(form);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    setIsSaving(true);

    const isSaved = await runCabinetActionHelper(
      () => updateUserProfileAction(buildCabinetProfileRequestHelper(form)),
      CABINET_PROFILE_EDIT_FORM_SAVE_ERROR_TOAST_TITLE
    );

    setIsSaving(false);

    if (isSaved) onSaved();
  };

  return { form, errors, isSaving, handleChange, handleSubmit };
};
