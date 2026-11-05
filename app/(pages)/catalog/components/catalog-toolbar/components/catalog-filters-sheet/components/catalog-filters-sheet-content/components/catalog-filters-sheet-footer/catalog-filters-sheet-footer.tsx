import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Button } from "@/app/ui/button/button";
import { CATALOG_FILTERS_SHEET_RESET_LABEL } from "../../../../constants/catalog-filters-sheet.constants";
import { CATALOG_FILTERS_SHEET_FOOTER_SHOW_RESULTS_LABEL } from "./constants/catalog-filters-sheet-footer.constants";
import type { CatalogFiltersSheetFooterProps } from "./types/catalog-filters-sheet-footer.types";

export const CatalogFiltersSheetFooter = ({
  onReset,
  onShowResults,
  isApplying,
  isCounting,
  count,
}: CatalogFiltersSheetFooterProps) => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex gap-2.5 border-t border-border-soft bg-background p-3.5 pb-5">
      <Button
        variant="outline"
        size="auto"
        onClick={onReset}
        className="h-[50px] w-[110px] flex-none rounded-xl px-2 text-[14.5px] font-semibold"
      >
        {CATALOG_FILTERS_SHEET_RESET_LABEL}
      </Button>
      <Button
        size="auto"
        onClick={onShowResults}
        disabled={isApplying}
        className="h-[50px] flex-1 rounded-xl text-[14.5px] font-semibold"
      >
        <span className={isCounting ? "opacity-60" : ""}>
          {CATALOG_FILTERS_SHEET_FOOTER_SHOW_RESULTS_LABEL} {formatProductsCountHelper(count)}
        </span>
      </Button>
    </div>
  );
};
