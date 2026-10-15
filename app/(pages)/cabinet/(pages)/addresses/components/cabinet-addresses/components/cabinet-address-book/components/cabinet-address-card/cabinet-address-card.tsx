import { Button } from "@/app/ui/button/button";
import {
  CABINET_ADDRESS_CARD_MAIN_BADGE,
  CABINET_ADDRESS_CARD_REMOVE_LABEL,
  CABINET_ADDRESS_CARD_SET_MAIN_LABEL,
  CABINET_ADDRESS_CARD_STATE_CLASS_NAMES,
} from "./constants/cabinet-address-card.constants";
import type { CabinetAddressCardProps } from "./types/cabinet-address-card.types";

export function CabinetAddressCard({
  address,
  onSetMain,
  onRemove,
  disabled,
}: CabinetAddressCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-[14px] border-[1.5px] p-4 transition-colors ${
        CABINET_ADDRESS_CARD_STATE_CLASS_NAMES[address.isMain ? "main" : "idle"]
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="font-symbols text-xl text-accent">{address.icon}</span>
        <span className="min-w-0 flex-1 text-[14.5px] font-semibold text-foreground">
          {address.title}
        </span>
        {address.isMain && (
          <span className="flex-none rounded-md bg-accent px-2 py-[3px] text-[11px] font-bold text-white">
            {CABINET_ADDRESS_CARD_MAIN_BADGE}
          </span>
        )}
      </div>
      <span className="break-words text-[13.5px] leading-normal text-muted">{address.address}</span>

      <div className="flex gap-4 pt-1">
        {!address.isMain && (
          <Button
            variant="text"
            size="auto"
            onClick={onSetMain}
            disabled={disabled}
            className="text-[13px]"
          >
            {CABINET_ADDRESS_CARD_SET_MAIN_LABEL}
          </Button>
        )}
        <Button
          variant="text"
          size="auto"
          onClick={onRemove}
          disabled={disabled}
          className="text-[13px] !text-error-dark"
        >
          {CABINET_ADDRESS_CARD_REMOVE_LABEL}
        </Button>
      </div>
    </div>
  );
}
