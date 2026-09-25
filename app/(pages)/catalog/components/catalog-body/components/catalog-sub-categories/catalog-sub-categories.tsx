import Link from "next/link";
import { getCatalogSubCategories } from "@/app/shared/catalog-categories/api/get-catalog-sub-categories";
import {
  CATALOG_CATEGORY_DEFAULT_ICON,
  CATALOG_CATEGORY_ICONS,
} from "@/app/shared/catalog-categories/constants/catalog-categories.constants";
import { getCatalogProductsCountByCategory } from "@/app/shared/products/api/get-catalog-products-count-by-category";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import type { CatalogSubCategoriesProps } from "./types/catalog-sub-categories.types";

/** Shortcuts into the children of a parent category: a grid on desktop, a swipe rail on mobile. */
export async function CatalogSubCategories({ parentId }: CatalogSubCategoriesProps) {
  const subCategories = await getCatalogSubCategories(parentId);

  if (subCategories.length === 0) return null;

  const productCounts = await Promise.all(
    subCategories.map((subCategory) => getCatalogProductsCountByCategory(subCategory.id))
  );

  return (
    <div className="-mx-4.5 flex gap-2.5 overflow-x-auto px-4.5 pb-4.5 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-6.5">
      {subCategories.map((subCategory, index) => (
        <Link
          key={subCategory.id}
          href={`/catalog/${subCategory.slug}`}
          className="flex w-23 flex-none flex-col items-center gap-2 rounded-[14px] border border-border-soft bg-background px-1.5 py-3 hover:border-accent lg:w-auto lg:flex-row lg:gap-3 lg:px-3.5 lg:py-3"
        >
          <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-accent-soft font-symbols text-[23px] text-accent lg:size-[42px] lg:rounded-[11px] lg:text-[22px]">
            {CATALOG_CATEGORY_ICONS[subCategory.slug] ?? CATALOG_CATEGORY_DEFAULT_ICON}
          </span>

          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-center text-xs font-semibold leading-[1.25] text-foreground lg:truncate lg:text-left lg:text-sm">
              {subCategory.name}
            </span>
            <span className="hidden text-[12.5px] text-muted-light lg:block lg:truncate">
              {formatProductsCountHelper(productCounts[index])}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
