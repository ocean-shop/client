import Image from "next/image";
import Link from "next/link";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import {
  HEADER_SEARCH_PANEL_ALL_RESULTS_CLASS_NAMES,
  HEADER_SEARCH_PANEL_ALL_RESULTS_LABEL,
  HEADER_SEARCH_PANEL_ALL_RESULTS_SHORT_LABEL,
  HEADER_SEARCH_PANEL_CLASS_NAMES,
  HEADER_SEARCH_PANEL_FOUND_LABEL,
  HEADER_SEARCH_PANEL_HEADING_CLASS_NAMES,
  HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES,
  HEADER_SEARCH_PANEL_LIST_CLASS_NAMES,
  HEADER_SEARCH_PANEL_NAME_CLASS_NAMES,
  HEADER_SEARCH_PANEL_NO_RESULTS_MESSAGE,
  HEADER_SEARCH_PANEL_PRICE_CLASS_NAMES,
  HEADER_SEARCH_PANEL_PRODUCTS_LABEL,
  HEADER_SEARCH_PANEL_SKELETON_COUNT,
} from "./constants/header-search-panel.constants";
import type { HeaderSearchPanelProps } from "./types/header-search-panel.types";

/** Suggestions for the term in the header field: rows straight to a product, plus the full listing. */
export function HeaderSearchPanel({
  variant,
  searchTerm,
  result,
  isSearching,
  allResultsHref,
  onProductSelect,
  onShowAllResults,
}: HeaderSearchPanelProps) {
  const items = result?.items ?? [];
  const isLoadingFirstResults = isSearching && items.length === 0;
  const hasNoResults = !isSearching && items.length === 0;

  return (
    <div className={HEADER_SEARCH_PANEL_CLASS_NAMES[variant]}>
      <div className={HEADER_SEARCH_PANEL_HEADING_CLASS_NAMES[variant]}>
        <span className="font-semibold tracking-[.08em] text-muted-light uppercase">
          {HEADER_SEARCH_PANEL_PRODUCTS_LABEL}
        </span>
        <span className={`text-muted-light ${isSearching ? "opacity-60" : ""}`}>
          {HEADER_SEARCH_PANEL_FOUND_LABEL(result?.total ?? 0)}
        </span>
      </div>

      <div className={HEADER_SEARCH_PANEL_LIST_CLASS_NAMES[variant]}>
        {isLoadingFirstResults &&
          Array.from({ length: HEADER_SEARCH_PANEL_SKELETON_COUNT }, (_, index) => (
            <div key={index} aria-hidden className="flex animate-pulse items-center gap-3 p-2">
              <div className={HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES[variant]} />
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-3.5 rounded bg-surface-strong" />
                <div className="h-3.5 w-2/3 rounded bg-surface-strong" />
              </div>
            </div>
          ))}

        {items.map((item) => (
          <Link
            key={item.id}
            href={buildProductHrefHelper(item.id)}
            onClick={onProductSelect}
            className={`flex items-center gap-3 rounded-xl p-2 hover:bg-surface ${
              isSearching ? "opacity-60" : ""
            }`}
          >
            <div className={HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES[variant]}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  sizes="56px"
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full items-center justify-center font-symbols text-[22px] text-muted-light">
                  image
                </span>
              )}
            </div>

            <span className={`min-w-0 flex-1 ${HEADER_SEARCH_PANEL_NAME_CLASS_NAMES[variant]}`}>
              {item.name}
            </span>

            <div className="flex flex-col items-end gap-0.5">
              <span className={HEADER_SEARCH_PANEL_PRICE_CLASS_NAMES[variant]}>
                {formatProductPriceHelper(item.price)}
              </span>
              {item.oldPrice && (
                <span className="text-xs text-muted-light line-through">
                  {formatProductPriceHelper(item.oldPrice)}
                </span>
              )}
            </div>
          </Link>
        ))}

        {hasNoResults && (
          <div className="flex flex-col items-center gap-1.5 px-3 py-7 text-center text-sm text-muted">
            <span className="font-symbols text-[30px] text-muted-light">search_off</span>
            {HEADER_SEARCH_PANEL_NO_RESULTS_MESSAGE(searchTerm)}
          </div>
        )}
      </div>

      {/* A listing of nothing is not worth opening, so the term with no matches hides the link. */}
      {!hasNoResults && (
        <Link
          href={allResultsHref}
          onClick={onShowAllResults}
          className={HEADER_SEARCH_PANEL_ALL_RESULTS_CLASS_NAMES[variant]}
        >
          {variant === "desktop"
            ? HEADER_SEARCH_PANEL_ALL_RESULTS_LABEL(searchTerm)
            : HEADER_SEARCH_PANEL_ALL_RESULTS_SHORT_LABEL}
        </Link>
      )}
    </div>
  );
}
