import type { UserProfile } from "../../../../../../../types/profile.types";

export type CabinetProfileEditFormProps = {
  profile: UserProfile;
  /** The saved number, or the one the user signed in with. */
  phone: string | null;
  email: string | null;
  onCancel: () => void;
  onSaved: () => void;
};

/** The backend keeps one `fullName`; the form splits it the way Ukrainian names are written. */
export type CabinetProfileForm = {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  /** `YYYY-MM-DD`, or `null` while not picked. */
  birthday: string | null;
};

export type CabinetProfileFormField = keyof CabinetProfileForm;

export type CabinetProfileTextField = Exclude<CabinetProfileFormField, "birthday">;

export type CabinetProfileFormErrors = Partial<Record<CabinetProfileFormField, string | null>>;

export type CabinetProfileFieldConfig = {
  /** The birthday is picked from a calendar, not typed. */
  name: CabinetProfileTextField;
  label: string;
  placeholder: string;
  autoComplete: string;
  type?: "text" | "tel";
  inputMode?: "text" | "tel";
};
