import type { Metadata } from "next";
import type { CatalogCategory } from "@/app/shared/catalog-categories/types/catalog-categories.types";
import { buildSeoMetadataHelper } from "@/app/shared/seo/helpers/build-seo-metadata";

/** Filtered, sorted and paged views of a category all point their canonical at the bare category. */
export const buildCatalogCategoryMetadataHelper = (category: CatalogCategory): Metadata => {
  return buildSeoMetadataHelper({
    title: category.name,
    path: `/catalog/${category.slug}`,
    metaTitle: category.metaTitle,
    metaDescription: category.metaDescription,
    canonicalUrl: category.canonicalUrl,
    noIndex: category.noIndex,
  });
};
