import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { PRODUCT_DELIVERY_CARDS } from "./constants/product-delivery.constants";

export const ProductDelivery = () => {
  return (
    <div className="grid gap-2.5 sm:grid-cols-3">
      {PRODUCT_DELIVERY_CARDS.map((card) => (
        <div key={card.title} className="flex flex-col gap-1 rounded-[14px] bg-background p-3.5">
          <MaterialIcon name={card.icon} className="text-[22px] text-accent" />
          <span className="text-[13.5px] font-semibold text-foreground">{card.title}</span>
          <span className="text-[12.5px] text-muted-light">{card.note}</span>
        </div>
      ))}
    </div>
  );
};
