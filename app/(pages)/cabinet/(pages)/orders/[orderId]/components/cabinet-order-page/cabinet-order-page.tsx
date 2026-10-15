"use client";

import { useRouter } from "next/navigation";
import { CABINET_ORDERS_PATH } from "../../../../../constants/cabinet.constants";
import { CabinetOrderDetails } from "../../../components/cabinet-orders/components/cabinet-order-details/cabinet-order-details";
import { repeatCabinetOrderHelper } from "../../../components/cabinet-orders/helpers/repeat-cabinet-order";
import type { CabinetOrderPageProps } from "./types/cabinet-order-page.types";

/** An order opened by its own link, e.g. from the overview; "back" leads to the full list. */
export function CabinetOrderPage({ order }: CabinetOrderPageProps) {
  const router = useRouter();

  return (
    <CabinetOrderDetails
      order={order}
      onBack={() => router.push(CABINET_ORDERS_PATH)}
      onRepeat={() => repeatCabinetOrderHelper(order)}
    />
  );
}
