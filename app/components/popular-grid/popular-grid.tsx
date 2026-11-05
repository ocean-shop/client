import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { CATALOG_CATEGORIES_POPULAR_LIMIT } from "@/app/shared/catalog-categories/constants/catalog-categories.constants";
import { filterParentCategoriesHelper } from "@/app/shared/catalog-categories/helpers/filter-parent-categories";
import { getPopularProducts } from "@/app/shared/products/api/get-popular-products";
import { mapProductToCardDataHelper } from "@/app/shared/products/helpers/map-product-to-card-data";
import { ProductActionsCard } from "../product-actions-card/product-actions-card";
import { PopularGridCategories } from "./components/popular-grid-categories/popular-grid-categories";
import { POPULAR_GRID_TITLE } from "./constants/popular-grid.constants";

export const PopularGrid = async () => {
  const [categories, products] = await Promise.all([getCatalogCategories(), getPopularProducts()]);
  const popularCategories = filterParentCategoriesHelper(
    categories,
    CATALOG_CATEGORIES_POPULAR_LIMIT
  );

  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-page px-10 pb-16 pt-14">
        <div className="flex flex-col gap-4 pb-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-.025em] text-foreground">
            {POPULAR_GRID_TITLE}
          </h2>

          <PopularGridCategories categories={popularCategories} />
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductActionsCard key={product.id} product={mapProductToCardDataHelper(product)} />
          ))}
        </div>
      </div>
    </section>
  );
};
