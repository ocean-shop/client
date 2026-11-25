"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductReviewsAction } from "@/app/(pages)/product/actions/get-product-reviews";
import { PRODUCT_REVIEWS_FIRST_PAGE } from "@/app/(pages)/product/constants/product-review.constants";
import type { ProductReviewsResponse } from "@/app/(pages)/product/types/product-review.types";
import { ApiError } from "@/app/core/api/api-error";
import {
  PRODUCT_REVIEWS_QUERY_KEY,
  PRODUCT_REVIEWS_STALE_TIME_MS,
} from "../constants/product-reviews-list.constants";

/**
 * A product's approved reviews, starting from the page rendered on the server and growing one
 * page per "show more". Reviews are paged by offset, so one approved in between can show up on
 * two pages; the list keeps its first copy.
 */
export const useProductReviews = (productId: string, initialReviews: ProductReviewsResponse) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [PRODUCT_REVIEWS_QUERY_KEY, productId],
    queryFn: async ({ pageParam }) => {
      const result = await getProductReviewsAction(productId, pageParam);

      if (!result.ok) throw new ApiError(result.status);

      return result.reviews;
    },
    initialPageParam: PRODUCT_REVIEWS_FIRST_PAGE,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialData: { pages: [initialReviews], pageParams: [PRODUCT_REVIEWS_FIRST_PAGE] },
    staleTime: PRODUCT_REVIEWS_STALE_TIME_MS,
  });

  const seenIds = new Set<string>();
  const reviews = data.pages
    .flatMap((page) => page.items)
    .filter((review) => {
      if (seenIds.has(review.id)) return false;

      seenIds.add(review.id);

      return true;
    });
  const total = data.pages.at(-1)?.total ?? 0;

  return {
    reviews,
    remainingCount: Math.max(total - reviews.length, 0),
    hasNextPage,
    isFetchingNextPage,
    loadMore: () => fetchNextPage(),
  };
};
