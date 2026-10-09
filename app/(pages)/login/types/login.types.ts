export type LoginIdentifierKind = "email" | "phone";

export type LoginStep = "identifier" | "code";

/** `idle` while the code is typed, `invalid` after a rejected attempt, `verified` once accepted. */
export type LoginCodeStatus = "idle" | "invalid" | "verified";
