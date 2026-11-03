import type { ProductCardData } from "@/app/ui/product-card/types/product-card.types";
import { buildProductHrefHelper } from "./build-product-href";
import { calculateProductDiscountPercentHelper } from "./calculate-product-discount-percent";
import { formatProductPriceHelper } from "./format-product-price";
import { resolveProductPreviewHelper } from "./resolve-product-preview";
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
  const { price, oldPrice, images } = resolveProductPreviewHelper(product);

  return {
    id: product.id,
    href: buildProductHrefHelper(product.slug, categorySlug),
    image: images[0]?.url ?? null,
    imageAlt: images[0]?.alt || product.name,
    name: product.name,
    price: formatProductPriceHelper(price),
    oldPrice: oldPrice ? formatProductPriceHelper(oldPrice) : undefined,
    badge: computeDiscountBadgeHelper(price, oldPrice),
  };
};
