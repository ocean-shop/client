import type { ProductSearchItem } from "@/app/shared/products/types/products.types";
import type { HeaderSearchVariant } from "../../../../../types/header-search.types";

export type HeaderSearchPanelItemProps = {
  variant: HeaderSearchVariant;
  item: ProductSearchItem;
  /** Dims the row while newer results are on their way. */
  isStale: boolean;
  onSelect: () => void;
};
