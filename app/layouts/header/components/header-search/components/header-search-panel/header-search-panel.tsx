import Link from "next/link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { HeaderSearchPanelItem } from "./components/header-search-panel-item/header-search-panel-item";
import { HeaderSearchPanelSkeleton } from "./components/header-search-panel-skeleton/header-search-panel-skeleton";
import {
  HEADER_SEARCH_PANEL_ALL_RESULTS_CLASS_NAMES,
  HEADER_SEARCH_PANEL_ALL_RESULTS_LABEL,
  HEADER_SEARCH_PANEL_ALL_RESULTS_SHORT_LABEL,
  HEADER_SEARCH_PANEL_CLASS_NAMES,
  HEADER_SEARCH_PANEL_FOUND_LABEL,
  HEADER_SEARCH_PANEL_HEADING_CLASS_NAMES,
  HEADER_SEARCH_PANEL_LIST_CLASS_NAMES,
  HEADER_SEARCH_PANEL_NO_RESULTS_MESSAGE,
  HEADER_SEARCH_PANEL_PRODUCTS_LABEL,
} from "./constants/header-search-panel.constants";
import type { HeaderSearchPanelProps } from "./types/header-search-panel.types";

/** Suggestions for the term in the header field: rows straight to a product, plus the full listing. */
export const HeaderSearchPanel = ({
  variant,
  searchTerm,
  result,
  isSearching,
  allResultsHref,
  onProductSelect,
  onShowAllResults,
}: HeaderSearchPanelProps) => {
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
        {isLoadingFirstResults && <HeaderSearchPanelSkeleton variant={variant} />}

        {items.map((item) => (
          <HeaderSearchPanelItem
            key={item.id}
            variant={variant}
            item={item}
            isStale={isSearching}
            onSelect={onProductSelect}
          />
        ))}

        {hasNoResults && (
          <div className="flex flex-col items-center gap-1.5 px-3 py-7 text-center text-sm text-muted">
            <MaterialIcon name="search_off" className="text-[30px] text-muted-light" />
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
};
