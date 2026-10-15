/** Keeps just the `YYYY-MM-DD` part, in case the backend sends the date as a full timestamp. */
export function normalizeProfileBirthdayHelper(birthday: string | null | undefined): string | null {
  return birthday ? birthday.slice(0, 10) : null;
}
