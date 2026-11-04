import type { ContactsFormValues } from "../types/contacts-form.types";

export const readContactsFormValuesHelper = (form: HTMLFormElement): ContactsFormValues => {
  const data = new FormData(form);

  return {
    name: String(data.get("name") ?? ""),
    contact: String(data.get("contact") ?? ""),
    message: String(data.get("message") ?? ""),
  };
};
