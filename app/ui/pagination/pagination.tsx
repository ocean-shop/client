"use client";

import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PAGINATION_NAV_BUTTON_CLASS_NAME,
  PAGINATION_NEXT_LABEL,
  PAGINATION_PAGE_CLASS_NAME,
  PAGINATION_PAGE_STATE_CLASS_NAMES,
  PAGINATION_PREVIOUS_LABEL,
} from "./constants/pagination.constants";
import { clampPaginationPageHelper } from "./helpers/clamp-pagination-page";
import { getPaginationPagesHelper } from "./helpers/get-pagination-pages";
import type { PaginationProps } from "./types/pagination.types";

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  isDisabled = false,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const activePage = clampPaginationPageHelper(currentPage, totalPages);

  const goToPage = (page: number) => {
    const nextPage = clampPaginationPageHelper(page, totalPages);
    if (nextPage === activePage) return;

    onPageChange(nextPage);
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 pt-9 ${isDisabled ? "pointer-events-none opacity-60" : ""}`}
    >
      <Button
        variant="unstyled"
        size="icon"
        aria-label={PAGINATION_PREVIOUS_LABEL}
        onClick={() => goToPage(activePage - 1)}
        disabled={activePage === 1}
        className={`${PAGINATION_NAV_BUTTON_CLASS_NAME} text-muted-light`}
      >
        <MaterialIcon name="chevron_left" className="text-xl" />
      </Button>

      {getPaginationPagesHelper(activePage, totalPages).map((page) => {
        const isActive = page === activePage;

        return (
          <Button
            key={page}
            variant="unstyled"
            size="auto"
            aria-current={isActive ? "page" : undefined}
            onClick={() => goToPage(page)}
            className={`${PAGINATION_PAGE_CLASS_NAME} ${
              PAGINATION_PAGE_STATE_CLASS_NAMES[isActive ? "active" : "default"]
            }`}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="unstyled"
        size="icon"
        aria-label={PAGINATION_NEXT_LABEL}
        onClick={() => goToPage(activePage + 1)}
        disabled={activePage === totalPages}
        className={`${PAGINATION_NAV_BUTTON_CLASS_NAME} text-foreground`}
      >
        <MaterialIcon name="chevron_right" className="text-xl" />
      </Button>
    </div>
  );
};
