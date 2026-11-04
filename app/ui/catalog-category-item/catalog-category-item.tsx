import Link from "next/link";
import {
  CATALOG_CATEGORY_DEFAULT_ICON,
  CATALOG_CATEGORY_ICONS,
} from "@/app/shared/catalog-categories/constants/catalog-categories.constants";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  CATALOG_CATEGORY_ITEM_CHEVRON_CLASS_NAMES,
  CATALOG_CATEGORY_ITEM_CLASS_NAMES,
  CATALOG_CATEGORY_ITEM_LABEL_CLASS_NAMES,
} from "./constants/catalog-category-item.constants";
import type { CatalogCategoryItemProps } from "./types/catalog-category-item.types";

/** One row of a catalog menu's top-level category column. */
export const CatalogCategoryItem = ({
  variant,
  category,
  isActive,
  onSelect,
  onNavigate,
}: CatalogCategoryItemProps) => {
  const hasSubs = category.subs.length > 0;
  const className = `${CATALOG_CATEGORY_ITEM_CLASS_NAMES[variant]} ${
    isActive
      ? "border-accent-soft bg-accent-soft text-accent-dark"
      : "border-transparent text-foreground"
  }`;

  const content = (
    <>
      <MaterialIcon
        name={CATALOG_CATEGORY_ICONS[category.slug] ?? CATALOG_CATEGORY_DEFAULT_ICON}
        className={`text-[20px] ${isActive ? "text-accent" : "text-muted"}`}
      />
      <span
        className={`${CATALOG_CATEGORY_ITEM_LABEL_CLASS_NAMES[variant]} ${
          isActive ? "font-semibold" : "font-medium"
        }`}
      >
        {category.name}
      </span>
      {hasSubs && (
        <MaterialIcon
          name="chevron_right"
          className={`${CATALOG_CATEGORY_ITEM_CHEVRON_CLASS_NAMES[variant]} ${
            isActive ? "text-accent" : "text-muted-light"
          }`}
        />
      )}
    </>
  );

  if (!hasSubs) {
    return (
      <Link
        href={buildCatalogCategoryHrefHelper(category.slug)}
        onClick={onNavigate}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onSelect} className={className}>
      {content}
    </div>
  );
};
