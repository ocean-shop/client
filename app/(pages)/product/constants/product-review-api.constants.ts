import { withShopIdSearchParams } from "@/app/core/api/helpers/with-shop-id-search-params";
import { PRODUCT_REVIEWS_PAGE_SIZE } from "./product-review.constants";

const PRODUCT_REVIEWS_CLIENT_API_URL = `${process.env.API_BASE_URL}/catalog/product-reviews-client`;

/** Server-only: read by the review actions and the page's first read, never by client components. */
export const PRODUCT_REVIEWS_API_URL = (productId: string, page: number) =>
  `${PRODUCT_REVIEWS_CLIENT_API_URL}/products/${encodeURIComponent(productId)}?${withShopIdSearchParams(
    { page: String(page), limit: String(PRODUCT_REVIEWS_PAGE_SIZE) }
  )}`;

/** Server-only: the review is created for the signed-in user and waits for moderation. */
export const PRODUCT_REVIEW_CREATE_API_URL = PRODUCT_REVIEWS_CLIENT_API_URL;
