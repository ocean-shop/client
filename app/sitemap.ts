import type { MetadataRoute } from "next";
import {
  INFO_ABOUT_PATH,
  INFO_CONTACTS_PATH,
  INFO_DELIVERY_PATH,
  INFO_FAQ_PATH,
  INFO_LOYALTY_PATH,
  INFO_RETURNS_PATH,
  INFO_TERMS_PATH,
} from "./(pages)/(info)/constants/info.constants";
import { getCatalogCategories } from "./shared/catalog-categories/api/get-catalog-categories";
import { getProductSitemapEntries } from "./shared/products/api/get-product-sitemap-entries";
import { buildProductHrefHelper } from "./shared/products/helpers/build-product-href";
import { SITE_URL } from "./shared/seo/constants/seo.constants";

const INFO_PATHS = [
  INFO_DELIVERY_PATH,
  INFO_RETURNS_PATH,
  INFO_LOYALTY_PATH,
  INFO_FAQ_PATH,
  INFO_ABOUT_PATH,
  INFO_CONTACTS_PATH,
  INFO_TERMS_PATH,
];

const toUrl = (path: string) => new URL(path, SITE_URL).toString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, products] = await Promise.all([
    getCatalogCategories(),
    getProductSitemapEntries(),
  ]);

  return [
    { url: toUrl("/"), changeFrequency: "daily", priority: 1 },
    ...categories
      // An admin-set `noIndex` asks to stay out of search, so the sitemap must not list it either.
      .filter((category) => !category.noIndex)
      .map((category) => ({
        url: toUrl(`/catalog/${category.slug}`),
        changeFrequency: "daily" as const,
        priority: 0.8,
      })),
    ...products.map((product) => ({
      url: toUrl(buildProductHrefHelper(product.slug)),
      lastModified: product.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...INFO_PATHS.map((path) => ({
      url: toUrl(path),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
