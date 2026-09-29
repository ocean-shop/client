import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { findCatalogCategoryBySlugHelper } from "@/app/shared/catalog-categories/helpers/find-catalog-category-by-slug";
import { getCatalogCategoryAncestorsHelper } from "@/app/shared/catalog-categories/helpers/get-catalog-category-ancestors";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";
import { PRODUCT_HOME_BREADCRUMB_ITEM } from "../constants/product.constants";

/**
 * The category chain is only available when the visitor arrives from a catalog page, which passes
 * the slug along. Direct hits and stale slugs fall back to `Головна / product name`.
 */
export async function buildProductBreadcrumbItemsHelper(
  productName: string,
  categorySlug?: string
): Promise<BreadcrumbItem[]> {
  const items: BreadcrumbItem[] = [PRODUCT_HOME_BREADCRUMB_ITEM];

  if (categorySlug) {
    const categories = await getCatalogCategories();
    const category = findCatalogCategoryBySlugHelper(categories, categorySlug);

    if (category) {
      const trail = [...getCatalogCategoryAncestorsHelper(categories, category), category];

      items.push(...trail.map((item) => ({ label: item.name, href: `/catalog/${item.slug}` })));
    }
  }

  items.push({ label: productName });

  return items;
}
