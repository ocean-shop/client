import { Checkbox } from "@/app/ui/checkbox/checkbox";
import { CATALOG_FILTERS_ROW_CLASS_NAMES } from "../../constants/catalog-filters.constants";
import { CatalogFilterSection } from "../catalog-filter-section/catalog-filter-section";
import {
  CATALOG_AVAILABILITY_FILTER_LABEL,
  CATALOG_AVAILABILITY_FILTER_TITLE,
} from "./constants/catalog-availability-filter.constants";
import type { CatalogAvailabilityFilterProps } from "./types/catalog-availability-filter.types";

export const CatalogAvailabilityFilter = ({
  variant,
  checked,
  onChange,
}: CatalogAvailabilityFilterProps) => {
  return (
    <CatalogFilterSection variant={variant} title={CATALOG_AVAILABILITY_FILTER_TITLE}>
      <Checkbox
        checked={checked}
        onChange={onChange}
        label={CATALOG_AVAILABILITY_FILTER_LABEL}
        wrapperClassName={CATALOG_FILTERS_ROW_CLASS_NAMES[variant]}
      />
    </CatalogFilterSection>
  );
};
