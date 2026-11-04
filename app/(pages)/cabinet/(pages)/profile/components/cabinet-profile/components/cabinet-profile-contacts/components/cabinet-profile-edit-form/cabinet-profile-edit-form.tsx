"use client";

import { FormActions } from "@/app/ui/form-actions/form-actions";
import { FormInput } from "@/app/ui/form-input/form-input";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { CabinetProfileBirthdayField } from "./components/cabinet-profile-birthday-field/cabinet-profile-birthday-field";
import {
  CABINET_PROFILE_EDIT_FORM_BIRTHDAY_FIELD,
  CABINET_PROFILE_EDIT_FORM_CANCEL_LABEL,
  CABINET_PROFILE_EDIT_FORM_EMAIL_FIELD,
  CABINET_PROFILE_EDIT_FORM_FIELDS,
  CABINET_PROFILE_EDIT_FORM_NAME_MAX_LENGTH,
  CABINET_PROFILE_EDIT_FORM_SAVE_LABEL,
} from "./constants/cabinet-profile-edit-form.constants";
import { useCabinetProfileEditForm } from "./hooks/use-cabinet-profile-edit-form";
import type { CabinetProfileEditFormProps } from "./types/cabinet-profile-edit-form.types";

export const CabinetProfileEditForm = ({
  profile,
  phone,
  email,
  onCancel,
  onSaved,
}: CabinetProfileEditFormProps) => {
  const { form, errors, isSaving, handleChange, handleSubmit } = useCabinetProfileEditForm({
    profile,
    phone,
    onSaved,
  });

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
      <div className="grid gap-4 lg:grid-cols-2">
        {CABINET_PROFILE_EDIT_FORM_FIELDS.map(({ name, ...field }) => (
          <FormInput
            key={name}
            {...field}
            name={name}
            value={form[name]}
            error={errors[name]}
            maxLength={name === "phone" ? undefined : CABINET_PROFILE_EDIT_FORM_NAME_MAX_LENGTH}
            onChange={(event) => handleChange(name, event.target.value)}
          />
        ))}
        <CabinetProfileBirthdayField
          label={CABINET_PROFILE_EDIT_FORM_BIRTHDAY_FIELD.label}
          value={form.birthday}
          min={CABINET_PROFILE_EDIT_FORM_BIRTHDAY_FIELD.min}
          disabled={isSaving}
          onChange={(value) => handleChange("birthday", value)}
        />
        {email && (
          <FormInput
            label={CABINET_PROFILE_EDIT_FORM_EMAIL_FIELD.label}
            type="email"
            value={email}
            disabled
          />
        )}
      </div>

      {email && (
        <div className="flex items-center gap-2.5 rounded-[11px] bg-surface-soft px-3.5 py-3 text-[13px] leading-[1.45] text-muted">
          <MaterialIcon name="info" className="text-[19px] text-accent" />
          {CABINET_PROFILE_EDIT_FORM_EMAIL_FIELD.note}
        </div>
      )}

      <FormActions
        cancelLabel={CABINET_PROFILE_EDIT_FORM_CANCEL_LABEL}
        confirmLabel={CABINET_PROFILE_EDIT_FORM_SAVE_LABEL}
        onCancel={onCancel}
        disabled={isSaving}
      />
    </form>
  );
};
