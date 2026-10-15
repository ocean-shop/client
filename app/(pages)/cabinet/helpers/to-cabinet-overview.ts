import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import type { ProductDetails } from "@/app/shared/products/types/products.types";
import { toUserShippingViewHelper } from "../(pages)/addresses/helpers/to-user-shipping-view";
import type { UserOrder } from "../(pages)/orders/types/orders.types";
import { toUserOrderViewHelper } from "../(pages)/orders/helpers/to-user-order-view";
import type {
  CabinetActiveOrder,
  CabinetOverview,
  UserDashboardResponse,
} from "../types/cabinet.types";

function toCabinetActiveOrder(
  order: UserOrder,
  products: Map<string, ProductDetails>
): CabinetActiveOrder | null {
  if (order.status === "cancelled") return null;

  const view = toUserOrderViewHelper(order, products);

  return {
    id: view.id,
    number: view.number,
    totalAmount: view.amounts.total,
    status: order.status,
    shippingNote: view.shipping.address,
    // The backend keeps neither a delivery estimate nor a tracking number yet.
    expectedDelivery: null,
    items: view.items.map(({ id, name, image }) => ({ id, name, image })),
    trackingHref: null,
  };
}

/** `products` only needs the items of the latest active order, the one the overview shows. */
export function toCabinetOverviewHelper(
  dashboard: UserDashboardResponse,
  products: Map<string, ProductDetails>,
  greetingName: string | null
): CabinetOverview {
  const [latestOrder] = dashboard.lastActiveOrders;
  const mainAddress = dashboard.mainShipping
    ? toUserShippingViewHelper(dashboard.mainShipping)
    : null;

  return {
    greetingName,
    activeOrder: latestOrder ? toCabinetActiveOrder(latestOrder, products) : null,
    ordersCount: dashboard.ordersCount,
    activeOrdersCount: dashboard.activeOrdersCount,
    favorites: dashboard.lastFavoriteProducts.map((product) => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.images[0]?.url ?? null,
      href: buildProductHrefHelper(product.id),
    })),
    favoritesCount: dashboard.favoriteProductsCount,
    mainAddress: mainAddress && { title: mainAddress.title, address: mainAddress.address },
  };
}
