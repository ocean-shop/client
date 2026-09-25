export const CATALOG_CATEGORIES_API_URL =
  "https://api-production-1765.up.railway.app/catalog/categories-client?limit=20";

const SHOP_ID_QUERY_PARAM = "shopId";

/** Sub categories are scoped to this storefront, so `shopId` rides along with the request. */
export const CATALOG_SUB_CATEGORIES_API_URL = (parentId: string) => {
  const params = new URLSearchParams();

  if (process.env.SHOP_ID) params.set(SHOP_ID_QUERY_PARAM, process.env.SHOP_ID);

  return `${process.env.API_BASE_URL}/catalog/categories-client/sub-categories/${parentId}?${params.toString()}`;
};

export const CATALOG_CATEGORIES_POPULAR_LIMIT = 5;

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
