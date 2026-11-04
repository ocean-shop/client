import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { resolveProductPreviewHelper } from "@/app/shared/products/helpers/resolve-product-preview";
import type { Product } from "@/app/shared/products/types/products.types";
import type { CabinetFavoriteProduct } from "../types/cabinet.types";

export const toCabinetFavoriteProductHelper = (product: Product): CabinetFavoriteProduct => {
  const { price, images } = resolveProductPreviewHelper(product);

  return {
    id: product.id,
    name: product.name,
    price: Number(price),
    image: images[0]?.url ?? null,
    href: buildProductHrefHelper(product.slug),
  };
};
