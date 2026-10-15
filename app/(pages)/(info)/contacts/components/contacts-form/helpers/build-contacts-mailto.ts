import {
  CONTACTS_FORM_CONTACT_LABEL,
  CONTACTS_FORM_EMAIL,
  CONTACTS_FORM_EMAIL_SUBJECT,
  CONTACTS_FORM_NAME_LABEL,
} from "../constants/contacts-form.constants";
import type { ContactsFormValues } from "../types/contacts-form.types";

export function buildContactsMailtoHelper({ name, contact, message }: ContactsFormValues): string {
  const body = `${message}\n\n${CONTACTS_FORM_NAME_LABEL}: ${name}\n${CONTACTS_FORM_CONTACT_LABEL}: ${contact}`;

  return `mailto:${CONTACTS_FORM_EMAIL}?subject=${encodeURIComponent(
    CONTACTS_FORM_EMAIL_SUBJECT
  )}&body=${encodeURIComponent(body)}`;
}
