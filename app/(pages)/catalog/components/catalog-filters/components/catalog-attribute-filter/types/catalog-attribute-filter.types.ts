import type { CatalogFilter } from "@/app/shared/products/types/products.types";
import type {
  CatalogFilterGroup,
  CatalogFilterVariant,
} from "../../../types/catalog-filters.types";

export type CatalogAttributeFilterProps = {
  variant: CatalogFilterVariant;
  group: CatalogFilterGroup;
  selectedAttributes: CatalogFilter[];
  onToggle: (name: string, value: string) => void;
};
