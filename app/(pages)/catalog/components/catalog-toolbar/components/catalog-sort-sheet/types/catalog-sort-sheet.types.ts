import type { SelectOption } from "@/app/ui/select/types/select.types";

export type CatalogSortSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  options: SelectOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
};
