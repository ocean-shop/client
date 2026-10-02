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
  /** Clears the field too: the results page quotes the term back in its own heading. */
  onShowAllResults: () => void;
};
