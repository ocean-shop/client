import Link from "next/link";
import { ProductCard } from "../../ui/product-card/product-card";
import { getCatalogCategories } from "../../shared/catalog-categories/api/get-catalog-categories";
import { filterParentCategoriesHelper } from "../../shared/catalog-categories/helpers/filter-parent-categories";
import { CATALOG_CATEGORIES_POPULAR_LIMIT } from "../../shared/catalog-categories/constants/catalog-categories.constants";
import { getPopularProducts } from "../../shared/products/api/get-popular-products";
import { mapProductToCardDataHelper } from "../../shared/products/helpers/map-product-to-card-data";
import { POPULAR_GRID_TITLE } from "./constants/popular-grid.constants";

export async function PopularGrid() {
  const [categories, products] = await Promise.all([getCatalogCategories(), getPopularProducts()]);
  const popularCategories = filterParentCategoriesHelper(
    categories,
    CATALOG_CATEGORIES_POPULAR_LIMIT
  );
  const popularProducts = products
    .filter((product) => product.images.length > 0)
    .map(mapProductToCardDataHelper);

  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-page px-10 pb-16 pt-14">
        <div className="flex flex-col gap-4 pb-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-.025em] text-foreground">
            {POPULAR_GRID_TITLE}
          </h2>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            {popularCategories.map((category) => (
              <Link
                key={category.id}
                href={`/catalog/${category.slug}`}
                className="border-b-2 border-transparent pb-0.5 text-muted-light hover:text-accent"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
