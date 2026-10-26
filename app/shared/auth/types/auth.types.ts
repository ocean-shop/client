export type RequestClientOtpRequest = {
  /** Email or Ukrainian phone number in `+380XXXXXXXXX`, `380XXXXXXXXX` or `0XXXXXXXXX` format. */
  login: string;
};

export type RequestClientOtpResult = { ok: true } | { ok: false; status: number };

export type VerifyClientOtpRequest = RequestClientOtpRequest & {
  /** The four-digit one-time code. */
  code: string;
};

export type AuthUser = {
  id: string;
  email: string | null;
  mobileNumber: string | null;
  role: string | null;
};

/** Claims the backend signs into both tokens; `sub` is the user's id. */
export type AuthTokenPayload = {
  sub: string;
  email: string | null;
  mobileNumber: string | null;
  role?: string | null;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

/**
 * Body of both `verify-otp` and `refresh`. The refresh token comes in the `Set-Cookie` header;
 * only older backends still repeat it here.
 */
export type AuthSessionResponse = Pick<AuthTokens, "accessToken"> & {
  user: AuthUser;
  refreshToken?: string;
};

export type AuthSession = { user: AuthUser; tokens: AuthTokens };

/** `message` is the backend's own explanation, e.g. a wrong or expired code. */
export type VerifyClientOtpResult =
  { ok: true; user: AuthUser } | { ok: false; status: number; message: string | null };

export type AuthCookieOptions = {
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax";
  path: string;
  maxAge?: number;
};

/** The writable part of both `cookies()` in actions and `NextResponse#cookies` in the proxy. */
export type AuthCookieStore = {
  set(name: string, value: string, options: AuthCookieOptions): unknown;
  delete(name: string): unknown;
};
