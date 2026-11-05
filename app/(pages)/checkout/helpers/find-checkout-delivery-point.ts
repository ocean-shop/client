import { getNovaPoshtaWarehouses } from "@/app/shared/delivery/api/get-nova-poshta-warehouses";
import { getUkrposhtaPostOffices } from "@/app/shared/delivery/api/get-ukrposhta-post-offices";
import type {
  DeliveryPoint,
  DeliveryPointMethod,
} from "@/app/shared/delivery/types/delivery.types";
import { CHECKOUT_DELIVERY_POINT_NUMBER_PATTERN } from "../constants/checkout.constants";
import type { CheckoutDelivery } from "../types/checkout.types";

/** Searches by the point's number, so the match does not depend on the first page of results. */
export const findCheckoutDeliveryPointHelper = async (
  delivery: CheckoutDelivery,
  method: DeliveryPointMethod,
  title: string
): Promise<DeliveryPoint | null> => {
  const searchTerm = title.match(CHECKOUT_DELIVERY_POINT_NUMBER_PATTERN)?.[0] ?? "";
  const points =
    delivery.carrier === "ukr"
      ? await getUkrposhtaPostOffices(delivery.city, searchTerm)
      : await getNovaPoshtaWarehouses(delivery.city.id, method, searchTerm);

  return points.find((point) => point.title === title) ?? null;
};
