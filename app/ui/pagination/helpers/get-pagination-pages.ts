import { PAGINATION_VISIBLE_PAGES_COUNT } from "../constants/pagination.constants";

/** A window of page numbers centred on `activePage`, shifted to stay within `1..totalPages`. */
export const getPaginationPagesHelper = (activePage: number, totalPages: number): number[] => {
  const halfWindow = Math.floor(PAGINATION_VISIBLE_PAGES_COUNT / 2);
  const windowStart = Math.min(
    Math.max(activePage - halfWindow, 1),
    Math.max(totalPages - PAGINATION_VISIBLE_PAGES_COUNT + 1, 1)
  );

  return Array.from(
    { length: Math.min(PAGINATION_VISIBLE_PAGES_COUNT, totalPages) },
    (_, index) => windowStart + index
  );
};
