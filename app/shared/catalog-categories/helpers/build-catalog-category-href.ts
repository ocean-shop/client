import { CATALOG_CATEGORY_PAGE_PATH } from "../constants/catalog-categories.constants";

/** Link to a category's product listing. */
export const buildCatalogCategoryHrefHelper = (categorySlug: string): string =>
  `${CATALOG_CATEGORY_PAGE_PATH}/${categorySlug}`;
