import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { CATALOG_FILTERS_SHEET_RESET_LABEL } from "../../../../constants/catalog-filters-sheet.constants";
import {
  CATALOG_FILTERS_SHEET_HEADER_CLOSE_LABEL,
  CATALOG_FILTERS_SHEET_HEADER_TITLE,
} from "./constants/catalog-filters-sheet-header.constants";
import type { CatalogFiltersSheetHeaderProps } from "./types/catalog-filters-sheet-header.types";

export const CatalogFiltersSheetHeader = ({ onReset, onClose }: CatalogFiltersSheetHeaderProps) => {
  return (
    <div className="flex items-center gap-3 border-b border-border-soft bg-background px-4.5 py-4">
      <span className="flex-1 font-heading text-[19px] font-semibold tracking-[-.02em] text-foreground">
        {CATALOG_FILTERS_SHEET_HEADER_TITLE}
      </span>
      <Button variant="text" size="auto" onClick={onReset} className="text-[13.5px]">
        {CATALOG_FILTERS_SHEET_RESET_LABEL}
      </Button>
      <Button
        variant="outline"
        size="auto"
        onClick={onClose}
        aria-label={CATALOG_FILTERS_SHEET_HEADER_CLOSE_LABEL}
        className="h-[38px] w-[38px] rounded-[11px] p-0 text-foreground"
      >
        <MaterialIcon name="close" className="text-[21px]" />
      </Button>
    </div>
  );
};
