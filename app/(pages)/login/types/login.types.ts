export type LoginIdentifierKind = "email" | "phone";

/** Which identifiers the form accepts: phone numbers only while the shop has phone login on. */
export type LoginIdentifierMode = "emailOrPhone" | "email";

export type LoginStep = "identifier" | "code";

/** `idle` while the code is typed, `invalid` after a rejected attempt, `verified` once accepted. */
export type LoginCodeStatus = "idle" | "invalid" | "verified";
