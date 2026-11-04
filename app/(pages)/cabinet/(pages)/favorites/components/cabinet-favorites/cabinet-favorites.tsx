"use client";

import { ProductActionsCard } from "@/app/components/product-actions-card/product-actions-card";
import { useFavorites } from "@/app/shared/favorites/hooks/use-favorites";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { EmptyState } from "@/app/ui/empty-state/empty-state";
import { Pagination } from "@/app/ui/pagination/pagination";
import { CabinetPageHeader } from "../../../../components/cabinet-page-header/cabinet-page-header";
import {
  CABINET_EMPTY_LIST_LINK,
  CABINET_FAVORITES_PATH,
} from "../../../../constants/cabinet.constants";
import { useCabinetPagination } from "../../../../hooks/use-cabinet-pagination";
import { FAVORITES_PAGE_SEARCH_PARAM } from "../../constants/favorites.constants";
import {
  CABINET_FAVORITES_EMPTY_LABEL,
  CABINET_FAVORITES_GRID_CLASS_NAME,
  CABINET_FAVORITES_TITLE,
} from "./constants/cabinet-favorites.constants";
import type { CabinetFavoritesProps } from "./types/cabinet-favorites.types";

/**
 * The user's favourites. A card whose heart is cleared stays in place until the next visit, so a
 * misclick can be undone; the count already leaves it out.
 */
export const CabinetFavorites = ({ products, total, page, totalPages }: CabinetFavoritesProps) => {
  const { isPending, handlePageChange } = useCabinetPagination(
    CABINET_FAVORITES_PATH,
    FAVORITES_PAGE_SEARCH_PARAM
  );
  const { ids, status } = useFavorites();

  const removedCount =
    status === "ready" ? products.filter((product) => !ids.has(product.id)).length : 0;

  return (
    <div className="flex flex-col gap-4">
      <CabinetPageHeader
        title={CABINET_FAVORITES_TITLE}
        text={total > 0 ? formatProductsCountHelper(Math.max(total - removedCount, 0)) : undefined}
        isTextAlwaysVisible
      />

      {products.length === 0 && page === 1 ? (
        <EmptyState
          icon="favorite"
          label={CABINET_FAVORITES_EMPTY_LABEL}
          link={CABINET_EMPTY_LIST_LINK}
          className="gap-2.5 px-5 py-11"
        />
      ) : (
        <>
          <div className={CABINET_FAVORITES_GRID_CLASS_NAME}>
            {products.map((product) => (
              <ProductActionsCard
                key={product.id}
                product={product}
                size="compact"
                initialIsFavorite
              />
            ))}
          </div>

          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
            isDisabled={isPending}
          />
        </>
      )}
    </div>
  );
};
