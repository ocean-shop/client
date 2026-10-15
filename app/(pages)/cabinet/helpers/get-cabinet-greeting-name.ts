import { CABINET_GREETING_NAME_INDEX } from "../constants/cabinet.constants";

/** A name typed as a single word is taken as the first name itself. */
export function getCabinetGreetingNameHelper(fullName: string | null): string | null {
  const words = fullName?.trim().split(/\s+/).filter(Boolean) ?? [];

  return words[CABINET_GREETING_NAME_INDEX] ?? words[0] ?? null;
}
