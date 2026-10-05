import type { UkrposhtaEntries } from "../types/delivery.types";

/** Ukrposhta returns a bare object instead of a one-item array, and nothing at all for no match. */
export function unwrapUkrposhtaEntriesHelper<T>(response: UkrposhtaEntries<T>): T[] {
  const entry = response.Entries?.Entry;

  if (!entry) return [];

  return Array.isArray(entry) ? entry : [entry];
}
