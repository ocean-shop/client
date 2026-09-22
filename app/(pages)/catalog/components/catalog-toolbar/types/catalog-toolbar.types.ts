import type { SelectOption } from "@/app/ui/select/types/select.types";

export type CatalogToolbarProps = {
  sortOptions: SelectOption[];
  defaultSortId?: string;
  onSortChange?: (sortId: string) => void;
  resultsCount: number;
};
