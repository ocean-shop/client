"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Pagination } from "@/app/ui/pagination/pagination";
import { CABINET_ORDERS_PATH } from "../../../../constants/cabinet.constants";
import { ORDERS_PAGE_SEARCH_PARAM } from "../../constants/orders.constants";
import type { UserOrderView } from "../../types/orders.types";
import { CabinetOrderCard } from "./components/cabinet-order-card/cabinet-order-card";
import { CabinetOrderDetails } from "./components/cabinet-order-details/cabinet-order-details";
import { CabinetOrderFilters } from "./components/cabinet-order-filters/cabinet-order-filters";
import {
  CABINET_ORDERS_DEFAULT_FILTER,
  CABINET_ORDERS_EMPTY_FILTER_LABEL,
  CABINET_ORDERS_EMPTY_LABEL,
  CABINET_ORDERS_EMPTY_LINK_HREF,
  CABINET_ORDERS_EMPTY_LINK_LABEL,
  CABINET_ORDERS_FILTERS,
  CABINET_ORDERS_TITLE,
} from "./constants/cabinet-orders.constants";
import { repeatCabinetOrderHelper } from "./helpers/repeat-cabinet-order";
import type { CabinetOrdersFilterId, CabinetOrdersProps } from "./types/cabinet-orders.types";

/** The user's orders with status chips, swapped for one order's details once it is opened. */
export const CabinetOrders = ({ orders, page, totalPages }: CabinetOrdersProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [filterId, setFilterId] = useState<CabinetOrdersFilterId>(CABINET_ORDERS_DEFAULT_FILTER);
  const [openOrder, setOpenOrder] = useState<UserOrderView | null>(null);

  const filters = CABINET_ORDERS_FILTERS.map((filter) => ({
    ...filter,
    count: orders.filter((order) => !filter.statuses || filter.statuses.includes(order.status))
      .length,
  }));
  const statuses = filters.find((filter) => filter.id === filterId)?.statuses ?? null;
  const visibleOrders = orders.filter((order) => !statuses || statuses.includes(order.status));

  const handleOpen = (order: UserOrderView) => {
    setOpenOrder(order);
    window.scrollTo({ top: 0 });
  };

  const handlePageChange = (nextPage: number) => {
    startTransition(() => {
      router.push(`${CABINET_ORDERS_PATH}?${ORDERS_PAGE_SEARCH_PARAM}=${nextPage}`);
    });
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
      <h1 className="hidden font-heading text-2xl font-semibold tracking-[-.025em] text-foreground lg:block">
        {CABINET_ORDERS_TITLE}
      </h1>

      {orders.length === 0 && page === 1 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-background p-10 text-center text-sm text-muted">
          <span className="font-symbols text-[32px] text-muted-light">receipt_long</span>
          {CABINET_ORDERS_EMPTY_LABEL}
          <Link
            href={CABINET_ORDERS_EMPTY_LINK_HREF}
            className="text-[13.5px] font-semibold text-accent hover:text-accent-dark"
          >
            {CABINET_ORDERS_EMPTY_LINK_LABEL}
          </Link>
        </div>
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
            <div className="rounded-2xl bg-background p-10 text-center text-sm text-muted">
              {CABINET_ORDERS_EMPTY_FILTER_LABEL}
            </div>
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
