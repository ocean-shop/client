import { calculateProductDiscountPercentHelper } from "@/app/shared/products/helpers/calculate-product-discount-percent";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { ProductCartActions } from "./components/product-cart-actions/product-cart-actions";
import { ProductDelivery } from "./components/product-delivery/product-delivery";
import { ProductDescription } from "./components/product-description/product-description";
import { ProductTags } from "./components/product-tags/product-tags";
import { ProductVariations } from "./components/product-variations/product-variations";
import {
  PRODUCT_INFO_IN_STOCK_ICON,
  PRODUCT_INFO_IN_STOCK_LABEL,
  PRODUCT_INFO_OUT_OF_STOCK_ICON,
  PRODUCT_INFO_OUT_OF_STOCK_LABEL,
  PRODUCT_INFO_SKU_LABEL,
} from "./constants/product-info.constants";
import type { ProductInfoProps } from "./types/product-info.types";

export function ProductInfo({
  product,
  offer,
  breadcrumbItems,
  onSelectVariation,
}: ProductInfoProps) {
  const discountPercent = calculateProductDiscountPercentHelper(offer.price, offer.oldPrice);

  return (
    <div className="flex flex-col gap-5 lg:gap-[22px]">
      <div className="flex flex-col gap-3">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-pretty font-heading text-2xl font-semibold leading-[1.2] tracking-[-.025em] text-foreground lg:text-[30px]">
          {product.name}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13.5px] text-muted-light">
          {offer.sku && (
            <span>
              {PRODUCT_INFO_SKU_LABEL}: {offer.sku}
            </span>
          )}

          <span
            className={`flex items-center gap-1.5 font-medium ${
              offer.available ? "text-accent" : "text-error-dark"
            }`}
          >
            <span className="font-symbols text-[17px]">
              {offer.available ? PRODUCT_INFO_IN_STOCK_ICON : PRODUCT_INFO_OUT_OF_STOCK_ICON}
            </span>
            {offer.available ? PRODUCT_INFO_IN_STOCK_LABEL : PRODUCT_INFO_OUT_OF_STOCK_LABEL}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-baseline gap-3 rounded-2xl bg-background px-5 py-[18px]">
        <span className="font-heading text-[26px] font-semibold text-foreground lg:text-[32px]">
          {formatProductPriceHelper(offer.price)}
        </span>

        {offer.oldPrice && (
          <span className="text-base text-muted-light line-through">
            {formatProductPriceHelper(offer.oldPrice)}
          </span>
        )}

        {discountPercent !== undefined && (
          <span className="ml-auto rounded-md bg-accent-soft px-2.5 py-1 text-[13px] font-semibold text-accent-dark">
            −{discountPercent}%
          </span>
        )}
      </div>

      {product.variations.length > 0 && (
        <ProductVariations
          variations={product.variations}
          selectedVariationId={offer.id}
          onSelect={onSelectVariation}
        />
      )}

      <ProductCartActions product={product} offer={offer} />

      <ProductDelivery />

      {product.description && <ProductDescription description={product.description} />}

      {product.tags.length > 0 && <ProductTags tags={product.tags} />}
    </div>
  );
}
