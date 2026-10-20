import type { AuthTokenPayload, AuthUser } from "../types/auth.types";

/**
 * Reads the user out of a JWT without verifying its signature. Good enough for showing the user
 * their own details: every request for real data still goes to the backend, which verifies it.
 */
export const decodeAuthToken = (token: string): AuthUser | null => {
  try {
    const payload: AuthTokenPayload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64url").toString("utf8")
    );

    if (typeof payload.sub !== "string") return null;

    return {
      id: payload.sub,
      email: payload.email ?? null,
      mobileNumber: payload.mobileNumber ?? null,
      role: payload.role ?? null,
    };
  } catch {
    return null;
  }
};
