import type { ProductDetails } from "@/app/shared/products/types/products.types";
import { toUserShippingViewHelper } from "../(pages)/addresses/helpers/to-user-shipping-view";
import type { CabinetOverview, UserDashboardResponse } from "../types/cabinet.types";
import { toCabinetActiveOrderHelper } from "./to-cabinet-active-order";
import { toCabinetFavoriteProductHelper } from "./to-cabinet-favorite-product";

/** `products` only needs the items of the latest active order, the one the overview shows. */
export const toCabinetOverviewHelper = (
  dashboard: UserDashboardResponse,
  products: Map<string, ProductDetails>,
  greetingName: string | null
): CabinetOverview => {
  const [latestOrder] = dashboard.lastActiveOrders;
  const mainAddress = dashboard.mainShipping
    ? toUserShippingViewHelper(dashboard.mainShipping)
    : null;

  return {
    greetingName,
    activeOrder: latestOrder ? toCabinetActiveOrderHelper(latestOrder, products) : null,
    ordersCount: dashboard.ordersCount,
    activeOrdersCount: dashboard.activeOrdersCount,
    favorites: dashboard.lastFavoriteProducts.map(toCabinetFavoriteProductHelper),
    favoritesCount: dashboard.favoriteProductsCount,
    mainAddress: mainAddress && { title: mainAddress.title, address: mainAddress.address },
  };
};
