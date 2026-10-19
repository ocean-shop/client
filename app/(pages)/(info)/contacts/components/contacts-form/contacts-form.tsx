"use client";

import { useState } from "react";
import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { Button } from "@/app/ui/button/button";
import { Input } from "@/app/ui/input/input";
import { sendContactMessageAction } from "../../actions/send-contact-message";
import {
  CONTACTS_FORM_CONTACT_LABEL,
  CONTACTS_FORM_CONTACT_MAX_LENGTH,
  CONTACTS_FORM_CONTACT_PLACEHOLDER,
  CONTACTS_FORM_ERROR_CLASS_NAME,
  CONTACTS_FORM_INVALID_CLASS_NAME,
  CONTACTS_FORM_LABEL_CLASS_NAME,
  CONTACTS_FORM_MESSAGE_LABEL,
  CONTACTS_FORM_MESSAGE_MAX_LENGTH,
  CONTACTS_FORM_MESSAGE_PLACEHOLDER,
  CONTACTS_FORM_NAME_LABEL,
  CONTACTS_FORM_NAME_MAX_LENGTH,
  CONTACTS_FORM_NAME_PLACEHOLDER,
  CONTACTS_FORM_SEND_ERROR_TOAST_TITLE,
  CONTACTS_FORM_SENT_TOAST_MESSAGE,
  CONTACTS_FORM_SENT_TOAST_TITLE,
  CONTACTS_FORM_SUBMIT_LABEL,
  CONTACTS_FORM_TEXTAREA_CLASS_NAME,
} from "./constants/contacts-form.constants";
import { buildContactsRequestHelper } from "./helpers/build-contacts-request";
import { validateContactsFormHelper } from "./helpers/validate-contacts-form";
import type { ContactsFormErrors, ContactsFormValues } from "./types/contacts-form.types";

/** Sends the message to the support inbox and clears the form once it is delivered. */
export function ContactsForm() {
  const [errors, setErrors] = useState<ContactsFormErrors>({});
  const [isSending, setIsSending] = useState(false);

  function clearError(field: keyof ContactsFormValues) {
    setErrors((current) => ({ ...current, [field]: null }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const request = buildContactsRequestHelper({
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    const nextErrors = validateContactsFormHelper(request);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    setIsSending(true);

    try {
      const result = await sendContactMessageAction(request);

      if (!result.ok) {
        toastStore.error(
          CONTACTS_FORM_SEND_ERROR_TOAST_TITLE,
          API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE
        );
        return;
      }

      form.reset();
      toastStore.success(CONTACTS_FORM_SENT_TOAST_TITLE, CONTACTS_FORM_SENT_TOAST_MESSAGE);
    } catch {
      toastStore.error(CONTACTS_FORM_SEND_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <label className={CONTACTS_FORM_LABEL_CLASS_NAME}>
          <span className="text-[13px] font-medium text-muted">{CONTACTS_FORM_NAME_LABEL}</span>
          <Input
            name="name"
            autoComplete="given-name"
            placeholder={CONTACTS_FORM_NAME_PLACEHOLDER}
            maxLength={CONTACTS_FORM_NAME_MAX_LENGTH}
            disabled={isSending}
            aria-invalid={errors.name ? true : undefined}
            onChange={() => clearError("name")}
            className={errors.name ? CONTACTS_FORM_INVALID_CLASS_NAME : ""}
            variant="outline"
            size="xl"
          />
          {errors.name && <span className={CONTACTS_FORM_ERROR_CLASS_NAME}>{errors.name}</span>}
        </label>

        <label className={CONTACTS_FORM_LABEL_CLASS_NAME}>
          <span className="text-[13px] font-medium text-muted">{CONTACTS_FORM_CONTACT_LABEL}</span>
          <Input
            name="contact"
            placeholder={CONTACTS_FORM_CONTACT_PLACEHOLDER}
            maxLength={CONTACTS_FORM_CONTACT_MAX_LENGTH}
            disabled={isSending}
            aria-invalid={errors.contact ? true : undefined}
            onChange={() => clearError("contact")}
            className={errors.contact ? CONTACTS_FORM_INVALID_CLASS_NAME : ""}
            variant="outline"
            size="xl"
          />
          {errors.contact && (
            <span className={CONTACTS_FORM_ERROR_CLASS_NAME}>{errors.contact}</span>
          )}
        </label>

        <label className={`${CONTACTS_FORM_LABEL_CLASS_NAME} col-span-2`}>
          <span className="text-[13px] font-medium text-muted">{CONTACTS_FORM_MESSAGE_LABEL}</span>
          <textarea
            name="message"
            placeholder={CONTACTS_FORM_MESSAGE_PLACEHOLDER}
            maxLength={CONTACTS_FORM_MESSAGE_MAX_LENGTH}
            disabled={isSending}
            aria-invalid={errors.message ? true : undefined}
            onChange={() => clearError("message")}
            className={`${CONTACTS_FORM_TEXTAREA_CLASS_NAME} ${
              errors.message ? CONTACTS_FORM_INVALID_CLASS_NAME : ""
            }`}
          />
          {errors.message && (
            <span className={CONTACTS_FORM_ERROR_CLASS_NAME}>{errors.message}</span>
          )}
        </label>
      </div>

      <Button
        type="submit"
        size="auto"
        disabled={isSending}
        className="h-12 rounded-xl text-[14.5px]"
      >
        {CONTACTS_FORM_SUBMIT_LABEL}
      </Button>
    </form>
  );
}
