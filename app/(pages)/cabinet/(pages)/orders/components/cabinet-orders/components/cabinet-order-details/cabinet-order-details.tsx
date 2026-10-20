import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Button } from "@/app/ui/button/button";
import { CabinetOrderStatusBadge } from "../cabinet-order-status-badge/cabinet-order-status-badge";
import { CabinetOrderInfoCard } from "./components/cabinet-order-info-card/cabinet-order-info-card";
import { CabinetOrderLine } from "./components/cabinet-order-line/cabinet-order-line";
import { CabinetOrderProgress } from "./components/cabinet-order-progress/cabinet-order-progress";
import { CabinetOrderSummary } from "./components/cabinet-order-summary/cabinet-order-summary";
import {
  CABINET_ORDER_DETAILS_BACK_LABEL,
  CABINET_ORDER_DETAILS_DATE_PREFIX,
  CABINET_ORDER_DETAILS_META_SEPARATOR,
  CABINET_ORDER_DETAILS_PAYMENT_LABEL,
  CABINET_ORDER_DETAILS_RECIPIENT_FALLBACK,
  CABINET_ORDER_DETAILS_RECIPIENT_LABEL,
  CABINET_ORDER_DETAILS_SHIPPING_LABEL,
  CABINET_ORDER_DETAILS_TITLE_PREFIX,
} from "./constants/cabinet-order-details.constants";
import type { CabinetOrderDetailsProps } from "./types/cabinet-order-details.types";

/** Everything about one order: its progress, lines, delivery, recipient, payment and totals. */
export const CabinetOrderDetails = ({ order, onBack, onRepeat }: CabinetOrderDetailsProps) => {
  const { recipient } = order;

  return (
    <div className="flex flex-col gap-3.5 lg:gap-4">
      <Button
        variant="text"
        size="auto"
        onClick={onBack}
        className="self-start !gap-1 text-[13.5px]"
      >
        <span className="font-symbols text-lg">arrow_back</span>
        {CABINET_ORDER_DETAILS_BACK_LABEL}
      </Button>

      <section className="flex flex-col gap-[18px] rounded-2xl bg-background p-[18px] lg:gap-[22px] lg:p-6">
        <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <h1 className="font-heading text-lg font-semibold tracking-[-.02em] text-foreground lg:text-[21px]">
              {CABINET_ORDER_DETAILS_TITLE_PREFIX} {order.number}
            </h1>
            <span className="text-[13px] text-muted-light">
              {CABINET_ORDER_DETAILS_DATE_PREFIX} {order.placedAt}
              {CABINET_ORDER_DETAILS_META_SEPARATOR}
              {formatProductsCountHelper(order.quantity)}
            </span>
          </div>
          <CabinetOrderStatusBadge status={order.status} size="md" />
        </div>

        <CabinetOrderProgress steps={order.steps} />
      </section>

      <section className="flex flex-col rounded-2xl bg-background px-[18px] py-1.5 lg:px-6 lg:py-2">
        {order.items.map((item, index) => (
          <CabinetOrderLine key={item.id} item={item} isLast={index === order.items.length - 1} />
        ))}
      </section>

      <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
        <CabinetOrderInfoCard
          icon="local_shipping"
          label={CABINET_ORDER_DETAILS_SHIPPING_LABEL}
          title={order.shipping.carrier}
          lines={[order.shipping.address]}
        />
        <CabinetOrderInfoCard
          icon="person"
          label={CABINET_ORDER_DETAILS_RECIPIENT_LABEL}
          title={recipient.name ?? CABINET_ORDER_DETAILS_RECIPIENT_FALLBACK}
          lines={[recipient.phone, recipient.email].filter((line) => line !== null)}
        />
        <CabinetOrderInfoCard
          icon="credit_card"
          label={CABINET_ORDER_DETAILS_PAYMENT_LABEL}
          title={order.payment.method}
          lines={[order.payment.note]}
        />
      </div>

      <CabinetOrderSummary order={order} onRepeat={onRepeat} />
    </div>
  );
};
