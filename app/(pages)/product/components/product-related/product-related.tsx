import { getRelatedProducts } from "@/app/shared/products/api/get-related-products";
import { mapProductToCardDataHelper } from "@/app/shared/products/helpers/map-product-to-card-data";
import { ProductRelatedCarousel } from "./components/product-related-carousel/product-related-carousel";
import {
  PRODUCT_RELATED_SECTION_CLASS_NAME,
  PRODUCT_RELATED_TITLE,
  PRODUCT_RELATED_TITLE_CLASS_NAME,
  PRODUCT_RELATED_TITLE_ID,
} from "./constants/product-related.constants";
import type { ProductRelatedProps } from "./types/product-related.types";

/** "Супутні товари" under the product; renders nothing when the product has no related products. */
export const ProductRelated = async ({ productId }: ProductRelatedProps) => {
  const products = await getRelatedProducts(productId);

  if (products.length === 0) return null;

  return (
    <section
      aria-labelledby={PRODUCT_RELATED_TITLE_ID}
      className={PRODUCT_RELATED_SECTION_CLASS_NAME}
    >
      <ProductRelatedCarousel
        title={
          <h2 id={PRODUCT_RELATED_TITLE_ID} className={PRODUCT_RELATED_TITLE_CLASS_NAME}>
            {PRODUCT_RELATED_TITLE}
          </h2>
        }
        products={products.map((product) => mapProductToCardDataHelper(product))}
      />
    </section>
  );
};
