import type { UserProfile } from "@/app/shared/profile/types/profile.types";

export type CabinetProfileContactsProps = {
  profile: UserProfile;
};

/** The backend keeps one `fullName`; the form splits it the way Ukrainian names are written. */
export type CabinetProfileForm = {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
};

export type CabinetProfileFormField = keyof CabinetProfileForm;

export type CabinetProfileFormErrors = Partial<Record<CabinetProfileFormField, string | null>>;

export type CabinetProfileFieldConfig = {
  name: CabinetProfileFormField;
  label: string;
  placeholder: string;
  autoComplete: string;
  type?: "text" | "tel";
  inputMode?: "text" | "tel";
};

/** One label-and-value pair of the read-only view. */
export type CabinetProfileInfoItem = {
  label: string;
  value: string;
};
