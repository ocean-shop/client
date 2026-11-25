import type { ApiActionMessageResult, ApiActionResult } from "@/app/core/api/types/api.types";

/** An approved review as `GET catalog/product-reviews-client/products/:productId` lists it. */
export type ProductReview = {
  id: string;
  productId: string;
  name: string;
  advantages: string | null;
  drawbacks: string | null;
  comment: string;
  /** Whole stars, 1 to 5. */
  rating: number;
  /** Set by the backend when the author has a shipped order with this product. */
  approvedPurchase: boolean;
  /** How many shoppers marked the review as useful. */
  isUseful: number;
  /** ISO timestamp. */
  createdAt: string;
};

/** One page of approved reviews, newest first. */
export type ProductReviewsResponse = {
  items: ProductReview[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ProductReviewsResult = ApiActionResult<{ reviews: ProductReviewsResponse }>;

/** What the author submits from the review form; `shopId` is added on the server. */
export type ProductReviewInput = {
  productId: string;
  rating: number;
  name: string;
  advantages: string;
  drawbacks: string;
  comment: string;
};

/** Body of `POST catalog/product-reviews-client`; empty pros and cons are left out. */
export type ProductReviewRequest = Pick<
  ProductReviewInput,
  "productId" | "rating" | "name" | "comment"
> & {
  shopId: string;
  advantages?: string;
  drawbacks?: string;
};

export type ProductReviewField = "rating" | "name" | "advantages" | "drawbacks" | "comment";

export type ProductReviewErrors = Partial<Record<ProductReviewField, string | null>>;

export type ProductReviewResult = ApiActionMessageResult;

/** The visitor opening the review form; `firstName` is `null` when the profile has no name. */
export type ProductReviewAuthor = {
  isSignedIn: boolean;
  firstName: string | null;
};
