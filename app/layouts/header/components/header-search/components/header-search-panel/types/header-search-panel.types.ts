import type { ProductSearchResponse } from "@/app/shared/products/types/products.types";
import type { HeaderSearchVariant } from "../../../types/header-search.types";

export type HeaderSearchPanelProps = {
  variant: HeaderSearchVariant;
  /** The term the shown results belong to; also what the copy quotes back. */
  searchTerm: string;
  result: ProductSearchResponse | undefined;
  isSearching: boolean;
  allResultsHref: string;
  /** Clears the field: the visitor is leaving the search for a single product. */
  onProductSelect: () => void;
  /** Closes the panel but keeps the term, which the results page quotes back. */
  onShowAllResults: () => void;
};
