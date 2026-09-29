import type { ProductDeliveryCard } from "../types/product-delivery.types";

/** Storefront-wide promises, identical for every product, so they live as static copy. */
export const PRODUCT_DELIVERY_CARDS: ProductDeliveryCard[] = [
  { icon: "local_shipping", title: "Доставка завтра", note: "Нова пошта, від 0 ₴" },
  { icon: "verified_user", title: "Гарантія 12 міс", note: "Офіційний імпорт" },
  { icon: "autorenew", title: "Повернення 14 днів", note: "Без пояснень" },
];
