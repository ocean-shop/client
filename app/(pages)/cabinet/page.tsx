import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { getOrderProducts } from "./(pages)/orders/api/get-order-products";
import { getUserProfile } from "./(pages)/profile/api/get-user-profile";
import { getUserDashboard } from "./api/get-user-dashboard";
import { CabinetOverview } from "./components/cabinet-overview/cabinet-overview";
import { getCabinetGreetingNameHelper } from "./helpers/get-cabinet-greeting-name";
import { toCabinetOverviewHelper } from "./helpers/to-cabinet-overview";

const CabinetPage = async () => {
  const user = await requireAuthUser();
  const [dashboard, profile] = await Promise.all([
    getUserDashboard(user.id),
    getUserProfile(user.id),
  ]);
  // Order lines carry no photos, so the thumbnails of the order on display come from the catalog.
  const products = await getOrderProducts(dashboard.lastActiveOrders.slice(0, 1));
  const greetingName = getCabinetGreetingNameHelper(profile.fullName);

  return <CabinetOverview overview={toCabinetOverviewHelper(dashboard, products, greetingName)} />;
};

export default CabinetPage;
