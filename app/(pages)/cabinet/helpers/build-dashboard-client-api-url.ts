import { withShopIdSearchParams } from "@/app/core/api/helpers/with-shop-id-search-params";
import { DASHBOARD_CLIENT_API_URL } from "../constants/cabinet.constants";

export const buildDashboardClientApiUrlHelper = (userId: string): string =>
  `${DASHBOARD_CLIENT_API_URL}/${userId}?${withShopIdSearchParams()}`;
