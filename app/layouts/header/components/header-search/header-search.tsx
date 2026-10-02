"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  PRODUCT_SEARCH_TERM_MAX_LENGTH,
  PRODUCT_SEARCH_TERM_MIN_LENGTH,
} from "@/app/shared/products/constants/products.constants";
import { buildCatalogSearchHrefHelper } from "@/app/shared/products/helpers/build-catalog-search-href";
import { HEADER_SEARCH_PLACEHOLDER } from "../../constants/header.constants";
import { HeaderSearchPanel } from "./components/header-search-panel/header-search-panel";
import {
  HEADER_SEARCH_FIELD_CLASS_NAMES,
  HEADER_SEARCH_FORM_CLASS_NAMES,
  HEADER_SEARCH_INPUT_CLASS_NAME,
} from "./constants/header-search.constants";
import { useProductSearch } from "./hooks/use-product-search";
import type { HeaderSearchProps } from "./types/header-search.types";

/** Header search field with its suggestions panel; submitting opens the full results listing. */
export function HeaderSearch({ variant }: HeaderSearchProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef<HTMLFormElement>(null);

  const trimmedSearchTerm = searchTerm.trim();
  const hasSearchableTerm = trimmedSearchTerm.length >= PRODUCT_SEARCH_TERM_MIN_LENGTH;
  const isPanelOpen = hasSearchableTerm && !isDismissed;

  const { result, isSearching } = useProductSearch(trimmedSearchTerm, isPanelOpen);

  useEffect(() => {
    if (!isPanelOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDismissed(true);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isPanelOpen]);

  /**
   * Leaving the header for a listing or a product empties the field: the destination page
   * quotes the term back itself, and an emptied field also closes the panel.
   */
  function clearSearchTerm() {
    setSearchTerm("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasSearchableTerm) return;

    clearSearchTerm();
    router.push(buildCatalogSearchHrefHelper(trimmedSearchTerm));
  }

  return (
    <form
      ref={containerRef}
      role="search"
      onSubmit={handleSubmit}
      className={HEADER_SEARCH_FORM_CLASS_NAMES[variant]}
    >
      <div className={HEADER_SEARCH_FIELD_CLASS_NAMES[variant]}>
        <span aria-hidden className="font-symbols text-[19px] text-muted">
          search
        </span>
        {/* `text` rather than `search`: the field keeps the design's own look, with no UA clear button. */}
        <input
          type="text"
          value={searchTerm}
          maxLength={PRODUCT_SEARCH_TERM_MAX_LENGTH}
          enterKeyHint="search"
          autoComplete="off"
          placeholder={HEADER_SEARCH_PLACEHOLDER}
          aria-label={HEADER_SEARCH_PLACEHOLDER}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setIsDismissed(false);
          }}
          onFocus={() => setIsDismissed(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsDismissed(true);
          }}
          className={HEADER_SEARCH_INPUT_CLASS_NAME}
        />
      </div>

      {isPanelOpen && (
        <HeaderSearchPanel
          variant={variant}
          searchTerm={trimmedSearchTerm}
          result={result}
          isSearching={isSearching}
          allResultsHref={buildCatalogSearchHrefHelper(trimmedSearchTerm)}
          onProductSelect={clearSearchTerm}
          onShowAllResults={clearSearchTerm}
        />
      )}
    </form>
  );
}
