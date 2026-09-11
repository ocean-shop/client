import { CATALOG_PANEL_CATEGORIES } from "../../catalog-panel/constants/catalog-panel.constants";
import type { MobileHeaderChip } from "../types/mobile-header.types";

export const MOBILE_HEADER_CHIP_CATEGORIES: MobileHeaderChip[] = CATALOG_PANEL_CATEGORIES.map(
  (category) => ({
    id: category.id,
    label: category.label,
  })
);
