/** The user's own contact details; every field stays `null` until the user fills it in. */
export type UserProfile = {
  userId: string;
  fullName: string | null;
  phoneNumber: string | null;
  /** `YYYY-MM-DD`. */
  birthday: string | null;
};

/**
 * `fullName` is at most 300 characters, `phoneNumber` at most 30, `birthday` is `YYYY-MM-DD`;
 * `null` clears the field.
 */
export type UpdateUserProfileRequest = {
  fullName: string | null;
  phoneNumber: string | null;
  birthday: string | null;
};

/** `message` is the backend's own explanation, e.g. a failed validation. */
export type UpdateUserProfileResult =
  { ok: true; profile: UserProfile } | { ok: false; status: number; message: string | null };
