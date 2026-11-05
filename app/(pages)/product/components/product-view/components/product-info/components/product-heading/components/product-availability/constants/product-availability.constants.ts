import { PRODUCT_UNAVAILABLE_LABEL } from "@/app/shared/products/constants/products.constants";
import type { ProductAvailabilityStatus } from "../types/product-availability.types";

export const PRODUCT_AVAILABILITY_IN_STOCK: ProductAvailabilityStatus = {
  icon: "check_circle",
  label: "В наявності",
  className: "text-accent",
};

export const PRODUCT_AVAILABILITY_OUT_OF_STOCK: ProductAvailabilityStatus = {
  icon: "do_not_disturb_on",
  label: PRODUCT_UNAVAILABLE_LABEL,
  className: "text-error-dark",
};
