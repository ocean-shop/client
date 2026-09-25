import type { CatalogFilter } from "@/app/shared/products/types/products.types";
import type { CatalogFilterGroup } from "../types/catalog-filters.types";

export function mapCatalogFiltersToGroupsHelper(filters: CatalogFilter[]): CatalogFilterGroup[] {
  return filters.map((filter) => ({
    id: filter.name,
    name: filter.name,
    title: filter.name,
    options: filter.values.map((value) => ({
      id: `${filter.name}-${value}`,
      value,
      label: value,
    })),
  }));
}
