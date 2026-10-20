import { CHECKOUT_OPTION_STATE_CLASS_NAMES } from "@/app/(pages)/checkout/components/checkout-view/components/checkout-option/constants/checkout-option.constants";
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
        CHECKOUT_OPTION_STATE_CLASS_NAMES[isSelected ? "selected" : "idle"]
      }`}
    >
      <span className="font-symbols text-[21px] text-accent">{option.icon}</span>
      <span className="text-[13.5px] font-semibold leading-[1.3]">{option.label}</span>
      <span className="text-xs text-muted-light">{option.note}</span>
    </button>
  );
};
