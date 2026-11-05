import type { InputProps } from "@/app/ui/input/types/input.types";
import type { CatalogFilterVariant } from "../../../types/catalog-filters.types";

export const CATALOG_PRICE_SECTION_TITLE = "Ціна, ₴";
export const CATALOG_PRICE_SECTION_FROM_PLACEHOLDER = "від";
export const CATALOG_PRICE_SECTION_TO_PLACEHOLDER = "до";

/** `card` leaves the size to the input's own default. */
export const CATALOG_PRICE_SECTION_INPUT_SIZES: Record<CatalogFilterVariant, InputProps["size"]> = {
  card: undefined,
  sheet: "lg",
};
