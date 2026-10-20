import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { resolveProductOfferHelper } from "@/app/shared/products/helpers/resolve-product-offer";
import type { ProductDetails } from "@/app/shared/products/types/products.types";
import {
  SCHEMA_ORG_CONTEXT,
  SCHEMA_ORG_IN_STOCK,
  SCHEMA_ORG_OUT_OF_STOCK,
  SEO_CURRENCY,
  SITE_URL,
} from "@/app/shared/seo/constants/seo.constants";
import { truncateSeoDescriptionHelper } from "@/app/shared/seo/helpers/truncate-seo-description";
import type { JsonLdData } from "@/app/shared/seo/types/seo.types";

/**
 * A `Product` with the offer the page opens on, which is what makes Google show the price and
 * stock under the result. The variation picker is client state, so the default variation stands
 * for the product here.
 */
export function buildProductJsonLdHelper(product: ProductDetails): JsonLdData {
  const offer = resolveProductOfferHelper(product);
  const url = new URL(buildProductHrefHelper(product.slug), SITE_URL).toString();

  return {
    "@context": SCHEMA_ORG_CONTEXT,
    "@type": "Product",
    name: product.name,
    description: product.description
      ? truncateSeoDescriptionHelper(product.description)
      : undefined,
    sku: offer.sku ?? undefined,
    image: offer.images.map((image) => image.url),
    url,
    offers: {
      "@type": "Offer",
      url,
      price: offer.price,
      priceCurrency: SEO_CURRENCY,
      availability: offer.available ? SCHEMA_ORG_IN_STOCK : SCHEMA_ORG_OUT_OF_STOCK,
    },
  };
}
