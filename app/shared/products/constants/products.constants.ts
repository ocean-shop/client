export const POPULAR_PRODUCTS_API_URL = `${process.env.API_BASE_URL}/catalog/products-client/popular?shopId=${process.env.SHOP_ID}`;

export const PRODUCTS_BY_CATEGORY_API_URL = (categoryId: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/by-category/${categoryId}`;

export const CATALOG_FILTERS_BY_CATEGORY_API_URL = (categoryId: string) =>
  `${process.env.API_BASE_URL}/catalog/products-client/filters/by-category/${categoryId}`;

export const PRODUCT_CARD_DEFAULT_CTA_LABEL = "Додати в кошик";
