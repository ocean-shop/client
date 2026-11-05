import type { CatalogFilterVariant } from "../../../types/catalog-filters.types";

export const CATALOG_ATTRIBUTE_FILTER_MORE_LABEL = "Показати ще";

export const CATALOG_ATTRIBUTE_FILTER_VISIBLE_OPTIONS_COUNT = 4;

export const CATALOG_ATTRIBUTE_FILTER_ICON_CLASS_NAMES: Record<CatalogFilterVariant, string> = {
  card: "text-[20px]",
  sheet: "text-[21px]",
};

export const CATALOG_ATTRIBUTE_FILTER_OPTIONS_CLASS_NAMES: Record<CatalogFilterVariant, string> = {
  card: "gap-3",
  sheet: "",
};
