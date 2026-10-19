import type { SendContactMessageRequest } from "../../../types/contacts.types";
import { CONTACTS_FORM_PHONE_SEPARATORS_PATTERN } from "../constants/contacts-form.constants";
import type { ContactsFormValues } from "../types/contacts-form.types";

/** Trims the fields and drops spaces, dashes and brackets typed into a phone number. */
export function buildContactsRequestHelper({
  name,
  contact,
  message,
}: ContactsFormValues): SendContactMessageRequest {
  const trimmedContact = contact.trim();

  return {
    username: name.trim(),
    contact: trimmedContact.includes("@")
      ? trimmedContact
      : trimmedContact.replace(CONTACTS_FORM_PHONE_SEPARATORS_PATTERN, ""),
    message: message.trim(),
  };
}
