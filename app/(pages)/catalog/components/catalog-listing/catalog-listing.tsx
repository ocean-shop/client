import { CatalogGrid } from "@/app/components/catalog-grid/catalog-grid";
import { CatalogListingHeading } from "./components/catalog-listing-heading/catalog-listing-heading";
import { CatalogPagination } from "./components/catalog-pagination/catalog-pagination";
import { CatalogResults } from "./components/catalog-results/catalog-results";
import type { CatalogListingProps } from "./types/catalog-listing.types";

/** What a category page and a search have in common: heading, sorting, grid and pagination. */
export const CatalogListing = ({
  title,
  breadcrumbItems,
  query,
  productList,
  emptyMessage,
  categorySlug,
  isSortVisible,
  children,
}: CatalogListingProps) => {
  return (
    <div className="flex flex-col">
      <CatalogListingHeading
        title={title}
        breadcrumbItems={breadcrumbItems}
        total={productList.total}
        query={query}
        isSortVisible={isSortVisible}
      />

      {children}

      <CatalogResults productCount={productList.items.length}>
        <CatalogGrid
          products={productList.items}
          emptyMessage={emptyMessage}
          categorySlug={categorySlug}
        />
      </CatalogResults>

      <CatalogPagination query={query} totalPages={productList.totalPages} />
    </div>
  );
};
