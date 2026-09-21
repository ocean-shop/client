export type PaginationProps = {
  totalPages: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
};
