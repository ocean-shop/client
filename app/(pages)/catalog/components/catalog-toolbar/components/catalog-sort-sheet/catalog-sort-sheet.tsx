import { Button } from "@/app/ui/button/button";
import {
  CATALOG_SORT_SHEET_CLOSE_LABEL,
  CATALOG_SORT_SHEET_TITLE,
} from "./constants/catalog-sort-sheet.constants";
import type { CatalogSortSheetProps } from "./types/catalog-sort-sheet.types";

export function CatalogSortSheet({
  isOpen,
  onClose,
  options,
  selectedId,
  onSelect,
}: CatalogSortSheetProps) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-foreground/45 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-background transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-soft px-4.5 py-4">
          <span className="font-heading text-[17px] font-semibold text-foreground">
            {CATALOG_SORT_SHEET_TITLE}
          </span>
          <Button
            variant="unstyled"
            size="auto"
            onClick={onClose}
            aria-label={CATALOG_SORT_SHEET_CLOSE_LABEL}
            className="font-symbols text-2xl text-muted"
          >
            close
          </Button>
        </div>

        <div className="flex flex-col p-2 pb-[calc(env(safe-area-inset-bottom)+8px)]">
          {options.map((option) => {
            const isSelected = option.id === selectedId;

            return (
              <div
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl px-3.5 py-3.5 text-[14.5px] ${
                  isSelected ? "font-semibold text-accent-dark" : "font-medium text-foreground"
                }`}
              >
                <span className="w-[18px] font-symbols text-lg text-accent">
                  {isSelected ? "check" : ""}
                </span>
                {option.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
