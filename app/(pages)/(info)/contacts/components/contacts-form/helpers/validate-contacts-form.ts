import type { SendContactMessageRequest } from "../../../types/contacts.types";
import {
  CONTACTS_FORM_CONTACT_PATTERN,
  CONTACTS_FORM_VALIDATION_MESSAGES,
} from "../constants/contacts-form.constants";
import type { ContactsFormErrors } from "../types/contacts-form.types";

/** Every field that still needs attention, or `null` when the message can be sent. */
export function validateContactsFormHelper(
  request: SendContactMessageRequest
): ContactsFormErrors | null {
  const errors: ContactsFormErrors = {};

  if (!request.username) errors.name = CONTACTS_FORM_VALIDATION_MESSAGES.name;
  if (!CONTACTS_FORM_CONTACT_PATTERN.test(request.contact)) {
    errors.contact = CONTACTS_FORM_VALIDATION_MESSAGES.contact;
  }
  if (!request.message) errors.message = CONTACTS_FORM_VALIDATION_MESSAGES.message;

  return Object.keys(errors).length > 0 ? errors : null;
}
