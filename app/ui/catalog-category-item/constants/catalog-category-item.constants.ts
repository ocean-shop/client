import type { CatalogCategoryItemVariant } from "../types/catalog-category-item.types";

export const CATALOG_CATEGORY_ITEM_CLASS_NAMES: Record<CatalogCategoryItemVariant, string> = {
  desktop: "flex cursor-pointer items-center gap-2.5 rounded-[10px] border px-3 py-[11px]",
  mobile: "flex cursor-pointer items-center gap-2.5 rounded-xl border px-2.5 py-3",
};

export const CATALOG_CATEGORY_ITEM_LABEL_CLASS_NAMES: Record<CatalogCategoryItemVariant, string> = {
  desktop: "flex-1 text-sm",
  mobile: "flex-1 text-[13px] leading-[1.25]",
};

export const CATALOG_CATEGORY_ITEM_CHEVRON_CLASS_NAMES: Record<CatalogCategoryItemVariant, string> =
  {
    desktop: "text-[18px]",
    mobile: "text-[17px]",
  };
