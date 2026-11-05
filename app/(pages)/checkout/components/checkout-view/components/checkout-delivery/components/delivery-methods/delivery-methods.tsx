import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { RADIO_CARD_STATE_CLASS_NAMES } from "@/app/ui/radio-card/constants/radio-card.constants";
import { DELIVERY_METHODS_LABEL } from "./constants/delivery-methods.constants";
import type { DeliveryMethodsProps } from "./types/delivery-methods.types";

export const DeliveryMethods = ({ methods, selectedMethod, onChange }: DeliveryMethodsProps) => {
  return (
    <div role="radiogroup" aria-label={DELIVERY_METHODS_LABEL} className="flex flex-wrap gap-2">
      {methods.map((method) => {
        const isSelected = method.id === selectedMethod;

        return (
          <button
            key={method.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(method.id)}
            className={`flex h-[42px] items-center gap-2 rounded-[10px] border-[1.5px] px-3.5 text-sm font-semibold text-foreground transition-colors ${
              RADIO_CARD_STATE_CLASS_NAMES[isSelected ? "selected" : "idle"]
            }`}
          >
            <MaterialIcon name={method.icon} className="text-[19px] text-accent" />
            {method.label}
            <span className="font-normal text-muted-light">
              {formatProductPriceHelper(method.price)}
            </span>
          </button>
        );
      })}
    </div>
  );
};
