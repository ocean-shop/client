import Link from "next/link";
import { buildCatalogCategoryHrefHelper } from "@/app/shared/catalog-categories/helpers/build-catalog-category-href";
import type { PopularGridCategoriesProps } from "./types/popular-grid-categories.types";

export const PopularGridCategories = ({ categories }: PopularGridCategoriesProps) => {
  return (
    <div className="flex flex-wrap items-center gap-5 text-sm">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={buildCatalogCategoryHrefHelper(category.slug)}
          className="border-b-2 border-transparent pb-0.5 text-muted-light hover:text-accent"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};
