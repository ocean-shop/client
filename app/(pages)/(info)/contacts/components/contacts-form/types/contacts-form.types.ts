export type ContactsFormValues = {
  name: string;
  contact: string;
  message: string;
};

export type ContactsFormErrors = Partial<Record<keyof ContactsFormValues, string | null>>;
