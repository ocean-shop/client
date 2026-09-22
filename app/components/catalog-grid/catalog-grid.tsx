import { ProductCard } from "../../ui/product-card/product-card";
import { getProductsByCategory } from "../../shared/products/api/get-products-by-category";
import { mapProductToCardDataHelper } from "../../shared/products/helpers/map-product-to-card-data";
import { CATALOG_GRID_EMPTY_MESSAGE } from "./constants/catalog-grid.constants";
import type { CatalogGridProps } from "./types/catalog-grid.types";

export async function CatalogGrid({ category }: CatalogGridProps) {
  const products = await getProductsByCategory(category.id);
  const catalogProducts = products
    .filter((product) => product.images.length > 0)
    .map(mapProductToCardDataHelper);

  if (catalogProducts.length === 0) {
    return <p className="text-muted-light">{CATALOG_GRID_EMPTY_MESSAGE}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
      {catalogProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
