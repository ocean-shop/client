export type ContactsFormValues = {
  name: string;
  contact: string;
  message: string;
};

export type ContactsFormErrors = Partial<Record<keyof ContactsFormValues, string | null>>;

/** A single-line field; the message is a textarea and stays out of this config. */
export type ContactsFormInputField = {
  name: "name" | "contact";
  label: string;
  placeholder: string;
  maxLength: number;
  autoComplete?: string;
};
