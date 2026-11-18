import { getCheckoutAvailableCarriersHelper } from "@/app/(pages)/checkout/helpers/get-checkout-available-carriers";
import { useShopFeatures } from "@/app/shared/shop-settings/hooks/use-shop-features";
import { RadioCard } from "@/app/ui/radio-card/radio-card";
import { DELIVERY_CARRIERS_LABEL } from "./constants/delivery-carriers.constants";
import type { DeliveryCarriersProps } from "./types/delivery-carriers.types";

export const DeliveryCarriers = ({ selectedCarrier, onChange }: DeliveryCarriersProps) => {
  const carriers = getCheckoutAvailableCarriersHelper(useShopFeatures());

  return (
    <div role="radiogroup" aria-label={DELIVERY_CARRIERS_LABEL} className="grid grid-cols-2 gap-3">
      {carriers.map((option) => (
        <RadioCard
          key={option.id}
          isSelected={option.id === selectedCarrier}
          onSelect={() => onChange(option.id)}
          className="items-start p-3.5"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="text-[14.5px] font-semibold">{option.label}</span>
            <span className="text-[12.5px] text-muted-light">{option.note}</span>
          </span>
        </RadioCard>
      ))}
    </div>
  );
};
