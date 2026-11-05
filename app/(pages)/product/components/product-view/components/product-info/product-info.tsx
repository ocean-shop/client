import { ProductCartActions } from "./components/product-cart-actions/product-cart-actions";
import { ProductDelivery } from "./components/product-delivery/product-delivery";
import { ProductDescription } from "./components/product-description/product-description";
import { ProductHeading } from "./components/product-heading/product-heading";
import { ProductPrice } from "./components/product-price/product-price";
import { ProductTags } from "./components/product-tags/product-tags";
import { ProductVariations } from "./components/product-variations/product-variations";
import type { ProductInfoProps } from "./types/product-info.types";

export const ProductInfo = ({
  product,
  offer,
  discountPercent,
  breadcrumbItems,
  onSelectVariation,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-[22px]">
      <ProductHeading name={product.name} offer={offer} breadcrumbItems={breadcrumbItems} />

      <ProductPrice offer={offer} discountPercent={discountPercent} />

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
};
