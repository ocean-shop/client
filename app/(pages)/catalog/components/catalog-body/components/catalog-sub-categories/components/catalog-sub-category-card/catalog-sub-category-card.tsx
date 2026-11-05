import Link from "next/link";
import {
  CATALOG_CATEGORY_DEFAULT_ICON,
  CATALOG_CATEGORY_ICONS,
} from "@/app/shared/catalog-categories/constants/catalog-categories.constants";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  CATALOG_SUB_CATEGORY_CARD_CLASS_NAME,
  CATALOG_SUB_CATEGORY_CARD_ICON_CLASS_NAME,
} from "./constants/catalog-sub-category-card.constants";
import type { CatalogSubCategoryCardProps } from "./types/catalog-sub-category-card.types";

export const CatalogSubCategoryCard = ({
  subCategory,
  productCount,
}: CatalogSubCategoryCardProps) => {
  return (
    <Link
      href={buildCatalogCategoryHrefHelper(subCategory.slug)}
      className={CATALOG_SUB_CATEGORY_CARD_CLASS_NAME}
    >
      <MaterialIcon
        name={CATALOG_CATEGORY_ICONS[subCategory.slug] ?? CATALOG_CATEGORY_DEFAULT_ICON}
        className={CATALOG_SUB_CATEGORY_CARD_ICON_CLASS_NAME}
      />

      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-center text-xs font-semibold leading-[1.25] text-foreground lg:truncate lg:text-left lg:text-sm">
          {subCategory.name}
        </span>
        <span className="hidden text-[12.5px] text-muted-light lg:block lg:truncate">
          {formatProductsCountHelper(productCount)}
        </span>
      </div>
    </Link>
  );
};
