/** The user's own contact details; both fields stay `null` until the user fills them in. */
export type UserProfile = {
  userId: string;
  fullName: string | null;
  phoneNumber: string | null;
};

/** `fullName` is at most 300 characters, `phoneNumber` at most 30; `null` clears the field. */
export type UpdateUserProfileRequest = {
  fullName: string | null;
  phoneNumber: string | null;
};

/** `message` is the backend's own explanation, e.g. a failed validation. */
export type UpdateUserProfileResult =
  { ok: true; profile: UserProfile } | { ok: false; status: number; message: string | null };
