/** Forwards the visitor's browser to the backend, which records it against the session. */
export const buildUserAgentHeader = (userAgent: string | null): Record<string, string> =>
  userAgent ? { "User-Agent": userAgent } : {};
