import { getCatalogSubCategories } from "@/app/shared/catalog-categories/api/get-catalog-sub-categories";
import { getCatalogProductsCountByCategory } from "@/app/shared/products/api/get-catalog-products-count-by-category";
import { CatalogSubCategoryCard } from "./components/catalog-sub-category-card/catalog-sub-category-card";
import type { CatalogSubCategoriesProps } from "./types/catalog-sub-categories.types";

/** Shortcuts into the children of a parent category: a grid on desktop, a swipe rail on mobile. */
export const CatalogSubCategories = async ({ parentId }: CatalogSubCategoriesProps) => {
  const subCategories = await getCatalogSubCategories(parentId);

  if (subCategories.length === 0) return null;

  const productCounts = await Promise.all(
    subCategories.map((subCategory) => getCatalogProductsCountByCategory(subCategory.id))
  );

  return (
    <div className="-mx-4.5 flex gap-2.5 overflow-x-auto px-4.5 pb-4.5 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-6.5">
      {subCategories.map((subCategory, index) => (
        <CatalogSubCategoryCard
          key={subCategory.id}
          subCategory={subCategory}
          productCount={productCounts[index]}
        />
      ))}
    </div>
  );
};
