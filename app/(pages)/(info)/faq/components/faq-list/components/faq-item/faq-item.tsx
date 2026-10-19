import { useId } from "react";
import {
  FAQ_ITEM_CLOSED_ICON,
  FAQ_ITEM_ICON_CLOSED_CLASS_NAME,
  FAQ_ITEM_ICON_OPEN_CLASS_NAME,
  FAQ_ITEM_OPEN_ICON,
} from "./constants/faq-item.constants";
import type { FaqItemProps } from "./types/faq-item.types";

export function FaqItem({ entry, isOpen, onToggle }: FaqItemProps) {
  const answerId = useId();

  return (
    <div className="flex flex-col border-b border-surface last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex items-center gap-3.5 py-4 text-left lg:py-[18px]"
      >
        <span className="flex-1 text-[14.5px] font-semibold leading-[1.4] text-foreground lg:text-[15.5px]">
          {entry.question}
        </span>
        <span
          aria-hidden
          className={`flex h-8 w-8 flex-none items-center justify-center rounded-[9px] font-symbols text-xl transition-colors ${
            isOpen ? FAQ_ITEM_ICON_OPEN_CLASS_NAME : FAQ_ITEM_ICON_CLOSED_CLASS_NAME
          }`}
        >
          {isOpen ? FAQ_ITEM_OPEN_ICON : FAQ_ITEM_CLOSED_ICON}
        </span>
      </button>

      {isOpen && (
        <p
          id={answerId}
          className="text-pretty pb-[18px] pr-[46px] text-sm leading-[1.65] text-muted"
        >
          {entry.answer}
        </p>
      )}
    </div>
  );
}
