import { UKRPOSHTA_POINT_TITLE } from "../constants/delivery.constants";
import type { DeliveryPoint, UkrposhtaPostOffice } from "../types/delivery.types";

export function mapUkrposhtaPostOfficeHelper(office: UkrposhtaPostOffice): DeliveryPoint {
  return {
    id: office.ID,
    title: UKRPOSHTA_POINT_TITLE(office.POSTINDEX),
    address: office.ADDRESS,
    meta: office.TYPE_SHORT ?? "",
  };
}
