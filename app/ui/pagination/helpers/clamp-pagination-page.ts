/** Keeps `page` within `1..totalPages`. */
export const clampPaginationPageHelper = (page: number, totalPages: number): number => {
  return Math.min(Math.max(page, 1), totalPages);
};
