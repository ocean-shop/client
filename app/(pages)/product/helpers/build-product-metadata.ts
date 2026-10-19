import type { Metadata } from "next";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import type { ProductDetails } from "@/app/shared/products/types/products.types";
import { buildSeoMetadataHelper } from "@/app/shared/seo/helpers/build-seo-metadata";

export function buildProductMetadataHelper(product: ProductDetails): Metadata {
  return buildSeoMetadataHelper({
    title: product.name,
    description: product.description,
    // The category query parameter only feeds the breadcrumbs, so it stays out of the canonical.
    path: buildProductHrefHelper(product.slug),
    images: product.images.map((image) => ({ url: image.url, alt: image.alt || product.name })),
    metaTitle: product.metaTitle,
    metaDescription: product.metaDescription,
    canonicalUrl: product.canonicalUrl,
    noIndex: product.noIndex,
  });
}
