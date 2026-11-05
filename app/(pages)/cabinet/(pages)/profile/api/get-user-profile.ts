import { readApiResponse } from "@/app/core/api/helpers/read-api-response";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { buildProfileClientApiUrlHelper } from "../helpers/build-profile-client-api-url";
import { normalizeProfileBirthdayHelper } from "../helpers/normalize-profile-birthday";
import type { UserProfile } from "../types/profile.types";

/**
 * The signed-in user's profile. Server-only, since it needs the access token cookie. Users who
 * never saved one still get a profile back, with every field set to `null`.
 */
export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  const response = await authFetch(buildProfileClientApiUrlHelper(userId));
  const { fullName, phoneNumber, birthday } = await readApiResponse<UserProfile>(response);

  return { userId, fullName, phoneNumber, birthday: normalizeProfileBirthdayHelper(birthday) };
};
