import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { Modal } from "@/app/ui/modal/modal";
import {
  CATALOG_SORT_SHEET_CLOSE_LABEL,
  CATALOG_SORT_SHEET_OPTION_CLASS_NAME,
  CATALOG_SORT_SHEET_OPTION_STATE_CLASS_NAMES,
  CATALOG_SORT_SHEET_TITLE,
} from "./constants/catalog-sort-sheet.constants";
import type { CatalogSortSheetProps } from "./types/catalog-sort-sheet.types";

export const CatalogSortSheet = ({
  isOpen,
  onClose,
  options,
  selectedId,
  onSelect,
}: CatalogSortSheetProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={CATALOG_SORT_SHEET_TITLE}
      closeLabel={CATALOG_SORT_SHEET_CLOSE_LABEL}
    >
      <div className="-mx-2.5 flex flex-col pb-[calc(env(safe-area-inset-bottom)+8px)]">
        {options.map((option) => {
          const isSelected = option.id === selectedId;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option.id)}
              className={`${CATALOG_SORT_SHEET_OPTION_CLASS_NAME} ${
                CATALOG_SORT_SHEET_OPTION_STATE_CLASS_NAMES[isSelected ? "selected" : "default"]
              }`}
            >
              <span className="w-[18px]">
                {isSelected && <MaterialIcon name="check" className="text-lg text-accent" />}
              </span>
              {option.label}
            </button>
          );
        })}
      </div>
    </Modal>
  );
};
