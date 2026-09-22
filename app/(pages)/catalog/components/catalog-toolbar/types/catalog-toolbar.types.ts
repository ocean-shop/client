import type { SelectOption } from "@/app/ui/select/types/select.types";
import type { CatalogFilterGroup } from "../../catalog-filters/types/catalog-filters.types";

export type CatalogToolbarProps = {
  sortOptions: SelectOption[];
  defaultSortId?: string;
  onSortChange?: (sortId: string) => void;
  resultsCount: number;
  filterGroups: CatalogFilterGroup[];
};
