"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { ProductCardCartButton } from "@/app/components/product-card-cart-button/product-card-cart-button";
import { ProductFavoriteButton } from "@/app/components/product-favorite-button/product-favorite-button";
import { useFavorites } from "@/app/shared/favorites/hooks/use-favorites";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Pagination } from "@/app/ui/pagination/pagination";
import { ProductCard } from "@/app/ui/product-card/product-card";
import { CABINET_FAVORITES_PATH } from "../../../../constants/cabinet.constants";
import { FAVORITES_PAGE_SEARCH_PARAM } from "../../constants/favorites.constants";
import {
  CABINET_FAVORITES_EMPTY_LABEL,
  CABINET_FAVORITES_EMPTY_LINK_HREF,
  CABINET_FAVORITES_EMPTY_LINK_LABEL,
  CABINET_FAVORITES_GRID_CLASS_NAME,
  CABINET_FAVORITES_TITLE,
} from "./constants/cabinet-favorites.constants";
import type { CabinetFavoritesProps } from "./types/cabinet-favorites.types";

/**
 * The user's favourites. A card whose heart is cleared stays in place until the next visit, so a
 * misclick can be undone; the count already leaves it out.
 */
export function CabinetFavorites({ products, total, page, totalPages }: CabinetFavoritesProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { ids, status } = useFavorites();

  const removedCount =
    status === "ready" ? products.filter((product) => !ids.has(product.id)).length : 0;

  function handlePageChange(nextPage: number) {
    startTransition(() => {
      router.push(`${CABINET_FAVORITES_PATH}?${FAVORITES_PAGE_SEARCH_PARAM}=${nextPage}`);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <h1 className="hidden font-heading text-2xl font-semibold tracking-[-.025em] text-foreground lg:block">
          {CABINET_FAVORITES_TITLE}
        </h1>
        {total > 0 && (
          <span className="text-sm text-muted">
            {formatProductsCountHelper(Math.max(total - removedCount, 0))}
          </span>
        )}
      </div>

      {products.length === 0 && page === 1 ? (
        <div className="flex flex-col items-center gap-2.5 rounded-2xl bg-background px-5 py-11 text-center text-sm text-muted">
          <span className="font-symbols text-[32px] text-muted-light">favorite</span>
          {CABINET_FAVORITES_EMPTY_LABEL}
          <Link
            href={CABINET_FAVORITES_EMPTY_LINK_HREF}
            className="text-[13.5px] font-semibold text-accent hover:text-accent-dark"
          >
            {CABINET_FAVORITES_EMPTY_LINK_LABEL}
          </Link>
        </div>
      ) : (
        <>
          <div className={CABINET_FAVORITES_GRID_CLASS_NAME}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                size="compact"
                cta={<ProductCardCartButton productId={product.id} productName={product.name} />}
                favorite={
                  <ProductFavoriteButton
                    productId={product.id}
                    productName={product.name}
                    variant="card"
                    initialIsFavorite
                  />
                }
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
}
