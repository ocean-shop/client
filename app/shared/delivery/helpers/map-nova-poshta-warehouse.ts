import {
  NOVA_POSHTA_SCHEDULE_DAYS,
  NOVA_POSHTA_WAREHOUSE_TITLES,
  NOVA_POSHTA_WEIGHT_LABEL,
} from "../constants/delivery.constants";
import type { DeliveryPoint, NovaPoshtaWarehouse } from "../types/delivery.types";

/** `Description` reads "Відділення №7 (до 10 кг): вул. Гната Хоткевича, 8", so the address follows the colon. */
function extractAddress(warehouse: NovaPoshtaWarehouse) {
  const separatorIndex = warehouse.Description.indexOf(": ");

  return separatorIndex === -1
    ? warehouse.ShortAddress
    : warehouse.Description.slice(separatorIndex + 2);
}

function buildMeta(warehouse: NovaPoshtaWarehouse) {
  const schedule = NOVA_POSHTA_SCHEDULE_DAYS.flatMap(({ key, label }) => {
    const hours = warehouse.Schedule[key];

    return hours && hours !== "-" ? [`${label} ${hours}`] : [];
  });
  const weight = Number(warehouse.PlaceMaxWeightAllowed);

  return [...schedule, ...(weight > 0 ? [NOVA_POSHTA_WEIGHT_LABEL(String(weight))] : [])].join(
    " · "
  );
}

export function mapNovaPoshtaWarehouseHelper(warehouse: NovaPoshtaWarehouse): DeliveryPoint {
  return {
    id: warehouse.Ref,
    title: `${NOVA_POSHTA_WAREHOUSE_TITLES[warehouse.CategoryOfWarehouse] ?? NOVA_POSHTA_WAREHOUSE_TITLES.Branch} №${warehouse.Number}`,
    address: extractAddress(warehouse),
    meta: buildMeta(warehouse),
  };
}
