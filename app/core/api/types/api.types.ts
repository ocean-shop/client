export type ApiErrorMessages = Record<number, string>;

/** A server action cannot throw a typed error to the client, so a failure carries its status. */
export type ApiActionFailure = { ok: false; status: number };

/** `T` is whatever a successful action hands back next to `ok: true`. */
export type ApiActionResult<T extends object = Record<never, never>> =
  ({ ok: true } & T) | ApiActionFailure;
