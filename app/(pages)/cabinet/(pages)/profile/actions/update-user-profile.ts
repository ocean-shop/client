"use server";

import { refresh } from "next/cache";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getApiErrorMessage } from "@/app/shared/auth/helpers/get-api-error-message";
import { getAuthUser } from "@/app/shared/auth/helpers/get-auth-user";
import { getProfileClientApiUrl, PROFILE_REQUEST_HEADERS } from "../constants/profile.constants";
import type {
  UpdateUserProfileRequest,
  UpdateUserProfileResult,
  UserProfile,
} from "../types/profile.types";

/**
 * Saves the signed-in user's profile and refreshes the page, so server-rendered views of it show
 * the new details. The user id comes from the session, never from the caller.
 */
export async function updateUserProfileAction(
  body: UpdateUserProfileRequest
): Promise<UpdateUserProfileResult> {
  const user = await getAuthUser();

  if (!user) return { ok: false, status: 401, message: null };

  const response = await authFetch(getProfileClientApiUrl(user.id), {
    method: "PUT",
    headers: PROFILE_REQUEST_HEADERS,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return { ok: false, status: response.status, message: await getApiErrorMessage(response) };
  }

  const { fullName, phoneNumber }: UserProfile = await response.json();

  refresh();

  return { ok: true, profile: { userId: user.id, fullName, phoneNumber } };
}
