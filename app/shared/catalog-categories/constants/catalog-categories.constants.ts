import { withShopIdSearchParams } from "@/app/core/api/helpers/with-shop-id-search-params";
import type { CatalogCategoriesResponse } from "../types/catalog-categories.types";

export const CATALOG_CATEGORIES_API_URL = `${process.env.API_BASE_URL}/catalog/categories-client?limit=20`;

/** Sub categories are scoped to this storefront, so `shopId` rides along with the request. */
export const CATALOG_SUB_CATEGORIES_API_URL = (parentId: string) =>
  `${process.env.API_BASE_URL}/catalog/categories-client/sub-categories/${parentId}?${withShopIdSearchParams()}`;

export const CATALOG_CATEGORIES_EMPTY_RESPONSE: CatalogCategoriesResponse = { items: [] };

export const CATALOG_CATEGORIES_POPULAR_LIMIT = 5;

export const CATALOG_CATEGORY_PAGE_PATH = "/catalog";

export const CATALOG_CATEGORY_ICONS: Record<string, string> = {
  electronics: "devices",
  shoes: "checkroom",
  house: "chair",
  beatiful: "spa",
  sport: "fitness_center",
  phones: "smartphone",
  tablets: "tablet_mac",
  tv: "tv",
  closes: "apparel",
  shoess: "steps",
};

export const CATALOG_CATEGORY_DEFAULT_ICON = "category";
