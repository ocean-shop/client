import type { DeliveryCity, NovaPoshtaSettlement } from "../types/delivery.types";

export function mapNovaPoshtaSettlementHelper(settlement: NovaPoshtaSettlement): DeliveryCity {
  const district = settlement.Region
    ? `${settlement.Region} ${settlement.RegionTypesCode}`.trim()
    : "";
  const area = settlement.Area ? `${settlement.Area} ${settlement.ParentRegionCode}`.trim() : "";

  return {
    id: settlement.DeliveryCity,
    name: settlement.MainDescription,
    area: settlement.Area,
    district: settlement.Region,
    region: [district, area].filter(Boolean).join(", "),
  };
}
