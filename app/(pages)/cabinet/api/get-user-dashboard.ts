import { readApiResponse } from "@/app/core/api/helpers/read-api-response";
import { authFetch } from "@/app/shared/auth/helpers/auth-fetch";
import { buildDashboardClientApiUrlHelper } from "../helpers/build-dashboard-client-api-url";
import type { UserDashboardResponse } from "../types/cabinet.types";

/** Everything the cabinet's overview shows, in one request. Server-only, since it needs the access token cookie. */
export const getUserDashboard = async (userId: string): Promise<UserDashboardResponse> => {
  const response = await authFetch(buildDashboardClientApiUrlHelper(userId));

  return readApiResponse<UserDashboardResponse>(response);
};
