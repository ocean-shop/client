import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { getCatalogCategoryAncestorsHelper } from "@/app/shared/catalog-categories/helpers/get-catalog-category-ancestors";
import type { CatalogCategory } from "@/app/shared/catalog-categories/types/catalog-categories.types";
import type { BreadcrumbItem } from "@/app/ui/breadcrumb/types/breadcrumb.types";
import { CATALOG_HOME_BREADCRUMB_ITEM } from "../../../constants/catalog.constants";

export const buildCatalogBodyBreadcrumbItemsHelper = (
  categories: CatalogCategory[],
  category: CatalogCategory
): BreadcrumbItem[] => {
  const ancestors = getCatalogCategoryAncestorsHelper(categories, category);

  return [
    CATALOG_HOME_BREADCRUMB_ITEM,
    ...ancestors.map((ancestor) => ({
      label: ancestor.name,
      href: buildCatalogCategoryHrefHelper(ancestor.slug),
    })),
    { label: category.name },
  ];
};
