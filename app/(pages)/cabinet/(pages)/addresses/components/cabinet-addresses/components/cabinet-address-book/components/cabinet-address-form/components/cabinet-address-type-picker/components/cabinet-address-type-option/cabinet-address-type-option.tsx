import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { RADIO_CARD_STATE_CLASS_NAMES } from "@/app/ui/radio-card/constants/radio-card.constants";
import type { CabinetAddressTypeOptionProps } from "./types/cabinet-address-type-option.types";

export const CabinetAddressTypeOption = ({
  option,
  isSelected,
  onSelect,
  disabled,
}: CabinetAddressTypeOptionProps) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onSelect}
      disabled={disabled}
      className={`flex cursor-pointer flex-col gap-1.5 rounded-xl border-[1.5px] p-3 text-left text-foreground transition-colors disabled:cursor-default ${
        RADIO_CARD_STATE_CLASS_NAMES[isSelected ? "selected" : "idle"]
      }`}
    >
      <MaterialIcon name={option.icon} className="text-[21px] text-accent" />
      <span className="text-[13.5px] font-semibold leading-[1.3]">{option.label}</span>
      <span className="text-xs text-muted-light">{option.note}</span>
    </button>
  );
};
