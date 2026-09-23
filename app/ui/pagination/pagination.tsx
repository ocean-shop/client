"use client";

import { Button } from "@/app/ui/button/button";
import { PAGINATION_VISIBLE_PAGES_COUNT } from "./constants/pagination.constants";
import type { PaginationProps } from "./types/pagination.types";

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  isDisabled = false,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const activePage = Math.min(Math.max(currentPage, 1), totalPages);

  function goToPage(page: number) {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    if (nextPage === activePage) return;

    onPageChange(nextPage);
  }

  const halfWindow = Math.floor(PAGINATION_VISIBLE_PAGES_COUNT / 2);
  const windowStart = Math.min(
    Math.max(activePage - halfWindow, 1),
    Math.max(totalPages - PAGINATION_VISIBLE_PAGES_COUNT + 1, 1)
  );
  const pages = Array.from(
    { length: Math.min(PAGINATION_VISIBLE_PAGES_COUNT, totalPages) },
    (_, index) => windowStart + index
  );

  return (
    <div
      className={`flex items-center justify-center gap-2 pt-9 ${isDisabled ? "pointer-events-none opacity-60" : ""}`}
    >
      <Button
        variant="unstyled"
        size="icon"
        onClick={() => goToPage(activePage - 1)}
        disabled={activePage === 1}
        className="border border-footer-border bg-background text-muted-light"
      >
        <span className="font-symbols text-xl">chevron_left</span>
      </Button>

      {pages.map((page) => {
        const isActive = page === activePage;

        return (
          <div
            key={page}
            onClick={() => goToPage(page)}
            className={`flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-[10px] border px-3 text-sm ${
              isActive
                ? "border-accent bg-accent font-semibold text-white"
                : "border-footer-border bg-background font-medium text-foreground"
            }`}
          >
            {page}
          </div>
        );
      })}

      <Button
        variant="unstyled"
        size="icon"
        onClick={() => goToPage(activePage + 1)}
        disabled={activePage === totalPages}
        className="border border-footer-border bg-background text-foreground"
      >
        <span className="font-symbols text-xl">chevron_right</span>
      </Button>
    </div>
  );
}
