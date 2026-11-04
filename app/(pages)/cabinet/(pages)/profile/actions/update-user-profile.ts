"use server";

import { refresh } from "next/cache";
import { API_JSON_HEADERS } from "@/app/core/api/constants/api.constants";
import { readApiActionFailure } from "@/app/core/api/helpers/read-api-action-failure";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { CABINET_ACTION_UNAUTHORIZED_FAILURE } from "../../../constants/cabinet.constants";
import { buildProfileClientApiUrlHelper } from "../helpers/build-profile-client-api-url";
import { normalizeProfileBirthdayHelper } from "../helpers/normalize-profile-birthday";
import type {
  UpdateUserProfileRequest,
  UpdateUserProfileResult,
  UserProfile,
} from "../types/profile.types";

/**
 * Saves the signed-in user's profile and refreshes the page, so server-rendered views of it show
 * the new details. The user id comes from the session, never from the caller.
 */
export const updateUserProfileAction = async (
  body: UpdateUserProfileRequest
): Promise<UpdateUserProfileResult> => {
  const user = await getAuthUser();

  if (!user) return CABINET_ACTION_UNAUTHORIZED_FAILURE;

  const response = await authFetch(buildProfileClientApiUrlHelper(user.id), {
    method: "PUT",
    headers: API_JSON_HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) return readApiActionFailure(response);

  const { fullName, phoneNumber, birthday }: UserProfile = await response.json();

  refresh();

  return {
    ok: true,
    profile: {
      userId: user.id,
      fullName,
      phoneNumber,
      birthday: normalizeProfileBirthdayHelper(birthday),
    },
  };
};
