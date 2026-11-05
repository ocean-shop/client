import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  PRODUCT_AVAILABILITY_IN_STOCK,
  PRODUCT_AVAILABILITY_OUT_OF_STOCK,
} from "./constants/product-availability.constants";
import type { ProductAvailabilityProps } from "./types/product-availability.types";

export const ProductAvailability = ({ available }: ProductAvailabilityProps) => {
  const status = available ? PRODUCT_AVAILABILITY_IN_STOCK : PRODUCT_AVAILABILITY_OUT_OF_STOCK;

  return (
    <span className={`flex items-center gap-1.5 font-medium ${status.className}`}>
      <MaterialIcon name={status.icon} className="text-[17px]" />
      {status.label}
    </span>
  );
};
