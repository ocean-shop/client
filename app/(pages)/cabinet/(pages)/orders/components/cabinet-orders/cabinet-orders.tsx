"use client";

import { useState } from "react";
import { EmptyState } from "@/app/ui/empty-state/empty-state";
import { Pagination } from "@/app/ui/pagination/pagination";
import { CabinetPageHeader } from "../../../../components/cabinet-page-header/cabinet-page-header";
import {
  CABINET_EMPTY_LIST_LINK,
  CABINET_ORDERS_PATH,
} from "../../../../constants/cabinet.constants";
import { useCabinetPagination } from "../../../../hooks/use-cabinet-pagination";
import { ORDERS_PAGE_SEARCH_PARAM } from "../../constants/orders.constants";
import type { UserOrderView } from "../../types/orders.types";
import { CabinetOrderCard } from "./components/cabinet-order-card/cabinet-order-card";
import { CabinetOrderDetails } from "./components/cabinet-order-details/cabinet-order-details";
import { CabinetOrderFilters } from "./components/cabinet-order-filters/cabinet-order-filters";
import {
  CABINET_ORDERS_DEFAULT_FILTER,
  CABINET_ORDERS_EMPTY_CLASS_NAME,
  CABINET_ORDERS_EMPTY_FILTER_LABEL,
  CABINET_ORDERS_EMPTY_LABEL,
  CABINET_ORDERS_TITLE,
} from "./constants/cabinet-orders.constants";
import { buildCabinetOrderFiltersHelper } from "./helpers/build-cabinet-order-filters";
import { filterCabinetOrdersHelper } from "./helpers/filter-cabinet-orders";
import { repeatCabinetOrderHelper } from "./helpers/repeat-cabinet-order";
import type { CabinetOrdersFilterId, CabinetOrdersProps } from "./types/cabinet-orders.types";

/** The user's orders with status chips, swapped for one order's details once it is opened. */
export const CabinetOrders = ({ orders, page, totalPages }: CabinetOrdersProps) => {
  const { isPending, handlePageChange } = useCabinetPagination(
    CABINET_ORDERS_PATH,
    ORDERS_PAGE_SEARCH_PARAM
  );
  const [filterId, setFilterId] = useState<CabinetOrdersFilterId>(CABINET_ORDERS_DEFAULT_FILTER);
  const [openOrder, setOpenOrder] = useState<UserOrderView | null>(null);

  const filters = buildCabinetOrderFiltersHelper(orders);
  const statuses = filters.find((filter) => filter.id === filterId)?.statuses ?? null;
  const visibleOrders = filterCabinetOrdersHelper(orders, statuses);

  const handleOpen = (order: UserOrderView) => {
    setOpenOrder(order);
    window.scrollTo({ top: 0 });
  };

  if (openOrder) {
    return (
      <CabinetOrderDetails
        order={openOrder}
        onBack={() => setOpenOrder(null)}
        onRepeat={() => repeatCabinetOrderHelper(openOrder)}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <CabinetPageHeader title={CABINET_ORDERS_TITLE} />

      {orders.length === 0 && page === 1 ? (
        <EmptyState
          icon="receipt_long"
          label={CABINET_ORDERS_EMPTY_LABEL}
          link={CABINET_EMPTY_LIST_LINK}
          className={CABINET_ORDERS_EMPTY_CLASS_NAME}
        />
      ) : (
        <>
          <CabinetOrderFilters filters={filters} activeId={filterId} onChange={setFilterId} />

          {visibleOrders.map((order) => (
            <CabinetOrderCard
              key={order.id}
              order={order}
              onOpen={() => handleOpen(order)}
              onRepeat={() => repeatCabinetOrderHelper(order)}
            />
          ))}

          {visibleOrders.length === 0 && (
            <EmptyState
              label={CABINET_ORDERS_EMPTY_FILTER_LABEL}
              className={CABINET_ORDERS_EMPTY_CLASS_NAME}
            />
          )}

          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
            isDisabled={isPending}
          />
        </>
      )}
    </div>
  );
};
