import { CatalogFiltersSheetContent } from "./components/catalog-filters-sheet-content/catalog-filters-sheet-content";
import type { CatalogFiltersSheetProps } from "./types/catalog-filters-sheet.types";

export function CatalogFiltersSheet({
  isOpen,
  onClose,
  resultsCount,
  groups,
  query,
}: CatalogFiltersSheetProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-300 ease-out lg:hidden ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Remounting on every open reseeds the draft selections from the applied query. */}
      <CatalogFiltersSheetContent
        key={String(isOpen)}
        onClose={onClose}
        resultsCount={resultsCount}
        groups={groups}
        query={query}
      />
    </div>
  );
}
