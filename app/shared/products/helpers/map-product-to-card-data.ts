import type { ProductCardData } from "@/app/ui/product-card/types/product-card.types";
import { buildProductHrefHelper } from "./build-product-href";
import { calculateProductDiscountPercentHelper } from "./calculate-product-discount-percent";
import { formatProductPriceHelper } from "./format-product-price";
import type { Product } from "../types/products.types";

const computeDiscountBadgeHelper = (
  price: string,
  oldPrice: string | null
): ProductCardData["badge"] => {
  const percentOff = calculateProductDiscountPercentHelper(price, oldPrice);

  if (percentOff === undefined) return undefined;

  return { label: `−${percentOff}%`, tone: "sale" };
};

/** `categorySlug` is only known when the card comes from a catalog page; it feeds the breadcrumbs. */
export const mapProductToCardDataHelper = (
  product: Product,
  categorySlug?: string
): ProductCardData => {
  return {
    id: product.id,
    href: buildProductHrefHelper(product.slug, categorySlug),
    image: product.images[0]?.url ?? "",
    imageAlt: product.images[0]?.alt || product.name,
    name: product.name,
    price: formatProductPriceHelper(product.price),
    oldPrice: product.oldPrice ? formatProductPriceHelper(product.oldPrice) : undefined,
    badge: computeDiscountBadgeHelper(product.price, product.oldPrice),
  };
};
