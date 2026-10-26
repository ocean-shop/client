import { ApiError } from "@/app/core/api/api-fetch";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { getDashboardClientApiUrl } from "../constants/cabinet.constants";
import type { UserDashboardResponse } from "../types/cabinet.types";

/** Everything the cabinet's overview shows, in one request. Server-only, since it needs the access token cookie. */
export const getUserDashboard = async (userId: string): Promise<UserDashboardResponse> => {
  const response = await authFetch(getDashboardClientApiUrl(userId));

  if (!response.ok) throw new ApiError(response.status);

  return response.json();
};
