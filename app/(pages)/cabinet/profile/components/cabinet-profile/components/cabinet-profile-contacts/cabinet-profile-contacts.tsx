"use client";

import { useState } from "react";
import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { useAuthUser } from "@/app/shared/auth/hooks/use-auth-user";
import { updateUserProfileAction } from "@/app/shared/profile/actions/update-user-profile";
import { Button } from "@/app/ui/button/button";
import { CabinetProfileField } from "./components/cabinet-profile-field/cabinet-profile-field";
import {
  CABINET_PROFILE_CONTACTS_CANCEL_LABEL,
  CABINET_PROFILE_CONTACTS_EDIT_LABEL,
  CABINET_PROFILE_CONTACTS_EMAIL_FIELD,
  CABINET_PROFILE_CONTACTS_EMPTY_FORM,
  CABINET_PROFILE_CONTACTS_FIELDS,
  CABINET_PROFILE_CONTACTS_NAME_MAX_LENGTH,
  CABINET_PROFILE_CONTACTS_SAVE_ERROR_TOAST_TITLE,
  CABINET_PROFILE_CONTACTS_SAVE_LABEL,
  CABINET_PROFILE_CONTACTS_SAVED_LABEL,
  CABINET_PROFILE_CONTACTS_TITLE,
} from "./constants/cabinet-profile-contacts.constants";
import { buildCabinetProfileFormHelper } from "./helpers/build-cabinet-profile-form";
import { buildCabinetProfileInfoHelper } from "./helpers/build-cabinet-profile-info";
import { buildCabinetProfileRequestHelper } from "./helpers/build-cabinet-profile-request";
import { validateCabinetProfileFormHelper } from "./helpers/validate-cabinet-profile-form";
import type {
  CabinetProfileContactsProps,
  CabinetProfileForm,
  CabinetProfileFormErrors,
  CabinetProfileFormField,
} from "./types/cabinet-profile-contacts.types";

/**
 * The user's name and phone, read-only until "Редагувати" is pressed. Users who signed in with a
 * phone and never saved another one see their login number, so checkout has it from the start.
 */
export function CabinetProfileContacts({ profile }: CabinetProfileContactsProps) {
  const user = useAuthUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [form, setForm] = useState<CabinetProfileForm>(CABINET_PROFILE_CONTACTS_EMPTY_FORM);
  const [errors, setErrors] = useState<CabinetProfileFormErrors>({});

  const phone = profile.phoneNumber ?? user.mobileNumber;
  const info = buildCabinetProfileInfoHelper(profile.fullName, phone, user.email);

  function handleEdit() {
    setForm(buildCabinetProfileFormHelper(profile.fullName, phone));
    setErrors({});
    setIsSaved(false);
    setIsEditing(true);
  }

  function handleChange(field: CabinetProfileFormField, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: null }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSaving) return;

    const nextErrors = validateCabinetProfileFormHelper(form);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    setIsSaving(true);

    try {
      const result = await updateUserProfileAction(buildCabinetProfileRequestHelper(form));

      if (!result.ok) {
        toastStore.error(
          CABINET_PROFILE_CONTACTS_SAVE_ERROR_TOAST_TITLE,
          (result.status < 500 && result.message) ||
            (API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE)
        );
        return;
      }

      setIsEditing(false);
      setIsSaved(true);
    } catch {
      toastStore.error(CABINET_PROFILE_CONTACTS_SAVE_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="flex flex-col gap-[18px] rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[15.5px] font-semibold text-foreground">
          {CABINET_PROFILE_CONTACTS_TITLE}
        </h2>
        {!isEditing && (
          <Button
            variant="text"
            size="auto"
            onClick={handleEdit}
            className="!gap-1.5 text-[13.5px]"
          >
            <span className="font-symbols text-[17px]">edit</span>
            {CABINET_PROFILE_CONTACTS_EDIT_LABEL}
          </Button>
        )}
      </div>

      {isEditing ? (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <div className="grid gap-4 lg:grid-cols-2">
            {CABINET_PROFILE_CONTACTS_FIELDS.map(({ name, ...field }) => (
              <CabinetProfileField
                key={name}
                {...field}
                name={name}
                value={form[name]}
                error={errors[name]}
                maxLength={name === "phone" ? undefined : CABINET_PROFILE_CONTACTS_NAME_MAX_LENGTH}
                onChange={(event) => handleChange(name, event.target.value)}
              />
            ))}
            {user.email && (
              <CabinetProfileField
                label={CABINET_PROFILE_CONTACTS_EMAIL_FIELD.label}
                type="email"
                value={user.email}
                disabled
              />
            )}
          </div>

          {user.email && (
            <div className="flex items-center gap-2.5 rounded-[11px] bg-surface-soft px-3.5 py-3 text-[13px] leading-[1.45] text-muted">
              <span className="font-symbols text-[19px] text-accent">info</span>
              {CABINET_PROFILE_CONTACTS_EMAIL_FIELD.note}
            </div>
          )}

          <div className="flex flex-col-reverse gap-2.5 lg:flex-row lg:justify-end">
            <Button
              variant="outline"
              size="auto"
              onClick={() => setIsEditing(false)}
              disabled={isSaving}
              className="h-[46px] rounded-[11px] px-5 text-sm"
            >
              {CABINET_PROFILE_CONTACTS_CANCEL_LABEL}
            </Button>
            <Button
              type="submit"
              size="auto"
              disabled={isSaving}
              className="h-[46px] rounded-[11px] px-6 text-sm"
            >
              {CABINET_PROFILE_CONTACTS_SAVE_LABEL}
            </Button>
          </div>
        </form>
      ) : (
        <dl className="grid gap-3.5 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-[18px]">
          {info.map(({ label, value }) => (
            <div key={label} className="flex min-w-0 flex-col gap-1">
              <dt className="text-[12.5px] text-muted-light">{label}</dt>
              <dd className="break-words text-[14.5px] font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {isSaved && (
        <div
          className="flex items-center gap-2 text-[13.5px] font-medium text-accent"
          role="status"
        >
          <span className="font-symbols text-[18px]">check_circle</span>
          {CABINET_PROFILE_CONTACTS_SAVED_LABEL}
        </div>
      )}
    </section>
  );
}
