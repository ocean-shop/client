import {
  RADIO_CARD_MARK_STATE_CLASS_NAMES,
  RADIO_CARD_STATE_CLASS_NAMES,
} from "./constants/radio-card.constants";
import type { RadioCardProps } from "./types/radio-card.types";

/** A radio button drawn as a card: the mark on the left, whatever describes the option on the right. */
export const RadioCard = ({
  isSelected,
  onSelect,
  disabled,
  className,
  children,
}: RadioCardProps) => {
  const state = isSelected ? "selected" : "idle";

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onSelect}
      disabled={disabled}
      className={`flex w-full cursor-pointer gap-3 rounded-xl border-[1.5px] text-left text-foreground transition-colors disabled:cursor-default ${RADIO_CARD_STATE_CLASS_NAMES[state]} ${className ?? ""}`}
    >
      <span
        className={`mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 ${RADIO_CARD_MARK_STATE_CLASS_NAMES[state]}`}
      >
        {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
      </span>

      {children}
    </button>
  );
};
