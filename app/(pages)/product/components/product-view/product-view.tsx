"use client";

import { useState } from "react";
import { calculateProductDiscountPercentHelper } from "@/app/shared/products/helpers/calculate-product-discount-percent";
import { resolveProductOfferHelper } from "@/app/shared/products/helpers/resolve-product-offer";
import { ProductGallery } from "./components/product-gallery/product-gallery";
import { ProductInfo } from "./components/product-info/product-info";
import { PRODUCT_CONTENT_CLASS_NAME } from "../../constants/product.constants";
import type { ProductViewProps } from "./types/product-view.types";

/**
 * Client boundary for the whole product body: the selected variation drives the gallery and the
 * price side by side, so both have to read the same piece of state.
 */
export function ProductView({ product, breadcrumbItems }: ProductViewProps) {
  const [selectedVariationId, setSelectedVariationId] = useState<string>();

  const offer = resolveProductOfferHelper(product, selectedVariationId);
  const discountPercent = calculateProductDiscountPercentHelper(offer.price, offer.oldPrice);

  return (
    <div className={PRODUCT_CONTENT_CLASS_NAME}>
      {/* Remounting on a variation switch reopens the gallery on the first photo of the new set. */}
      <ProductGallery
        key={offer.id}
        images={offer.images}
        name={product.name}
        discountPercent={discountPercent}
      />

      <ProductInfo
        product={product}
        offer={offer}
        breadcrumbItems={breadcrumbItems}
        onSelectVariation={setSelectedVariationId}
      />
    </div>
  );
}
