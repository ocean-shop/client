import type { CatalogFilterVariant } from "../types/catalog-filters.types";

export const CATALOG_FILTERS_RESET_LABEL = "Скинути фільтри";

/** Checkbox rows are tap targets in the sheet, so they get a touch-sized height there. */
export const CATALOG_FILTERS_ROW_CLASS_NAMES: Record<CatalogFilterVariant, string> = {
  card: "",
  sheet: "min-h-11",
};
