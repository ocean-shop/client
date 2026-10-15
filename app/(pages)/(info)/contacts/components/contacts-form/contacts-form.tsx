"use client";

import { Button } from "@/app/ui/button/button";
import { Input } from "@/app/ui/input/input";
import {
  CONTACTS_FORM_CONTACT_LABEL,
  CONTACTS_FORM_CONTACT_PLACEHOLDER,
  CONTACTS_FORM_LABEL_CLASS_NAME,
  CONTACTS_FORM_MESSAGE_LABEL,
  CONTACTS_FORM_MESSAGE_PLACEHOLDER,
  CONTACTS_FORM_NAME_LABEL,
  CONTACTS_FORM_NAME_PLACEHOLDER,
  CONTACTS_FORM_SUBMIT_LABEL,
  CONTACTS_FORM_TEXTAREA_CLASS_NAME,
} from "./constants/contacts-form.constants";
import { buildContactsMailtoHelper } from "./helpers/build-contacts-mailto";

/** There is no feedback endpoint yet, so the form opens a pre-filled email to support. */
export function ContactsForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    window.location.href = buildContactsMailtoHelper({
      name: String(data.get("name") ?? ""),
      contact: String(data.get("contact") ?? ""),
      message: String(data.get("message") ?? ""),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <label className={CONTACTS_FORM_LABEL_CLASS_NAME}>
          <span className="text-[13px] font-medium text-muted">{CONTACTS_FORM_NAME_LABEL}</span>
          <Input
            name="name"
            required
            autoComplete="given-name"
            placeholder={CONTACTS_FORM_NAME_PLACEHOLDER}
            variant="outline"
            size="xl"
          />
        </label>

        <label className={CONTACTS_FORM_LABEL_CLASS_NAME}>
          <span className="text-[13px] font-medium text-muted">{CONTACTS_FORM_CONTACT_LABEL}</span>
          <Input
            name="contact"
            required
            placeholder={CONTACTS_FORM_CONTACT_PLACEHOLDER}
            variant="outline"
            size="xl"
          />
        </label>

        <label className={`${CONTACTS_FORM_LABEL_CLASS_NAME} col-span-2`}>
          <span className="text-[13px] font-medium text-muted">{CONTACTS_FORM_MESSAGE_LABEL}</span>
          <textarea
            name="message"
            required
            placeholder={CONTACTS_FORM_MESSAGE_PLACEHOLDER}
            className={CONTACTS_FORM_TEXTAREA_CLASS_NAME}
          />
        </label>
      </div>

      <Button type="submit" size="auto" className="h-12 rounded-xl text-[14.5px]">
        {CONTACTS_FORM_SUBMIT_LABEL}
      </Button>
    </form>
  );
}
