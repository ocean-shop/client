"use client";

import { Button } from "@/app/ui/button/button";
import { FORM_FIELD_INVALID_CLASS_NAME } from "@/app/ui/form-field/constants/form-field.constants";
import { FormField } from "@/app/ui/form-field/form-field";
import { Input } from "@/app/ui/input/input";
import {
  CONTACTS_FORM_INPUT_FIELDS,
  CONTACTS_FORM_MESSAGE_LABEL,
  CONTACTS_FORM_MESSAGE_MAX_LENGTH,
  CONTACTS_FORM_MESSAGE_PLACEHOLDER,
  CONTACTS_FORM_SUBMIT_LABEL,
  CONTACTS_FORM_TEXTAREA_CLASS_NAME,
} from "./constants/contacts-form.constants";
import { useContactsForm } from "./hooks/use-contacts-form";

/** Sends the message to the support inbox and clears the form once it is delivered. */
export const ContactsForm = () => {
  const { errors, isSending, clearError, handleSubmit } = useContactsForm();

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {CONTACTS_FORM_INPUT_FIELDS.map(({ label, ...field }) => (
          <FormField key={field.name} label={label} error={errors[field.name]}>
            <Input
              {...field}
              disabled={isSending}
              aria-invalid={errors[field.name] ? true : undefined}
              onChange={() => clearError(field.name)}
              className={errors[field.name] ? FORM_FIELD_INVALID_CLASS_NAME : ""}
              variant="outline"
              size="xl"
            />
          </FormField>
        ))}

        <FormField
          label={CONTACTS_FORM_MESSAGE_LABEL}
          error={errors.message}
          className="col-span-2"
        >
          <textarea
            name="message"
            placeholder={CONTACTS_FORM_MESSAGE_PLACEHOLDER}
            maxLength={CONTACTS_FORM_MESSAGE_MAX_LENGTH}
            disabled={isSending}
            aria-invalid={errors.message ? true : undefined}
            onChange={() => clearError("message")}
            className={`${CONTACTS_FORM_TEXTAREA_CLASS_NAME} ${
              errors.message ? FORM_FIELD_INVALID_CLASS_NAME : ""
            }`}
          />
        </FormField>
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
};
