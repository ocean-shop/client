import { ApiError } from "@/app/core/api/api-fetch";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getProfileClientApiUrl } from "../constants/profile.constants";
import type { UserProfile } from "../types/profile.types";

/**
 * The signed-in user's profile. Server-only, since it needs the access token cookie. Users who
 * never saved one still get a profile back, with every field set to `null`.
 */
export async function getUserProfile(userId: string): Promise<UserProfile> {
  const response = await authFetch(getProfileClientApiUrl(userId));

  if (!response.ok) throw new ApiError(response.status);

  const { fullName, phoneNumber }: UserProfile = await response.json();

  return { userId, fullName, phoneNumber };
}
