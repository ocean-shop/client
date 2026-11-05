import { CATALOG_FILTER_SECTION_VARIANT_CLASS_NAMES } from "./constants/catalog-filter-section.constants";
import type { CatalogFilterSectionProps } from "./types/catalog-filter-section.types";

/** The frame every filter shares: a titled block, styled for the desktop panel or the sheet. */
export const CatalogFilterSection = ({
  variant,
  title,
  action,
  children,
}: CatalogFilterSectionProps) => {
  return (
    <div
      className={`flex flex-col bg-background ${CATALOG_FILTER_SECTION_VARIANT_CLASS_NAMES[variant]}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-foreground">{title}</span>
        {action}
      </div>

      {children}
    </div>
  );
};
