"use client";

import { useState } from "react";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiStatusErrorMessage } from "@/app/core/api/helpers/get-api-status-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { sendContactMessageAction } from "../../../actions/send-contact-message";
import type { SendContactMessageRequest } from "../../../types/contacts.types";
import {
  CONTACTS_FORM_SEND_ERROR_TOAST_TITLE,
  CONTACTS_FORM_SENT_TOAST_MESSAGE,
  CONTACTS_FORM_SENT_TOAST_TITLE,
} from "../constants/contacts-form.constants";
import { buildContactsRequestHelper } from "../helpers/build-contacts-request";
import { readContactsFormValuesHelper } from "../helpers/read-contacts-form-values";
import { validateContactsFormHelper } from "../helpers/validate-contacts-form";
import type { ContactsFormErrors, ContactsFormValues } from "../types/contacts-form.types";

/** Validates the form on submit and reports the delivery of the message in a toast. */
export const useContactsForm = () => {
  const [errors, setErrors] = useState<ContactsFormErrors>({});
  const [isSending, setIsSending] = useState(false);

  const clearError = (field: keyof ContactsFormValues) => {
    setErrors((current) => ({ ...current, [field]: null }));
  };

  const sendMessage = async (form: HTMLFormElement, request: SendContactMessageRequest) => {
    setIsSending(true);

    try {
      const result = await sendContactMessageAction(request);

      if (!result.ok) {
        toastStore.error(
          CONTACTS_FORM_SEND_ERROR_TOAST_TITLE,
          getApiStatusErrorMessage(result.status)
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
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;
    const request = buildContactsRequestHelper(readContactsFormValuesHelper(form));
    const nextErrors = validateContactsFormHelper(request);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    await sendMessage(form, request);
  };

  return { errors, isSending, clearError, handleSubmit };
};
