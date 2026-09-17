import type { ProductCardData } from "@/app/ui/product-card/types/product-card.types";
import { PRODUCT_CARD_DEFAULT_CTA_LABEL } from "../constants/products.constants";
import { formatProductPriceHelper } from "./format-product-price";
import type { Product } from "../types/products.types";

function computeDiscountBadgeHelper(
  price: string,
  oldPrice: string | null
): ProductCardData["badge"] {
  if (!oldPrice) return undefined;

  const priceAmount = Number(price);
  const oldPriceAmount = Number(oldPrice);
  if (oldPriceAmount <= priceAmount) return undefined;

  const percentOff = Math.round(((oldPriceAmount - priceAmount) / oldPriceAmount) * 100);

  return { label: `−${percentOff}%`, tone: "sale" };
}

export function mapProductToCardDataHelper(product: Product): ProductCardData {
  return {
    id: product.id,
    image: product.images[0]?.url ?? "",
    imageAlt: product.name,
    name: product.name,
    price: formatProductPriceHelper(product.price),
    oldPrice: product.oldPrice ? formatProductPriceHelper(product.oldPrice) : undefined,
    badge: computeDiscountBadgeHelper(product.price, product.oldPrice),
    ctaLabel: PRODUCT_CARD_DEFAULT_CTA_LABEL,
  };
}
