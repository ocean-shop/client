import Image from "next/image";
import Link from "next/link";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { CABINET_ORDERS_PATH } from "../../../../constants/cabinet.constants";
import {
  CABINET_ACTIVE_ORDER_DETAILS_LABEL,
  CABINET_ACTIVE_ORDER_EXPECTED_PREFIX,
  CABINET_ACTIVE_ORDER_EYEBROW,
  CABINET_ACTIVE_ORDER_PROGRESS_STEPS,
  CABINET_ACTIVE_ORDER_STATUSES,
  CABINET_ACTIVE_ORDER_THUMBNAILS_LIMIT,
  CABINET_ACTIVE_ORDER_TITLE_PREFIX,
  CABINET_ACTIVE_ORDER_TITLE_SEPARATOR,
  CABINET_ACTIVE_ORDER_TRACK_LABEL,
} from "./constants/cabinet-active-order.constants";
import type { CabinetActiveOrderProps } from "./types/cabinet-active-order.types";

/** The latest order that has not reached the user yet, with its delivery progress. */
export const CabinetActiveOrder = ({ order }: CabinetActiveOrderProps) => {
  const status = CABINET_ACTIVE_ORDER_STATUSES[order.status];
  const items = order.items.slice(0, CABINET_ACTIVE_ORDER_THUMBNAILS_LIMIT);

  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap">
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[.06em] text-accent">
            {CABINET_ACTIVE_ORDER_EYEBROW}
          </span>
          <span className="text-base font-semibold text-foreground lg:text-[17px]">
            {CABINET_ACTIVE_ORDER_TITLE_PREFIX} {order.number}
            {CABINET_ACTIVE_ORDER_TITLE_SEPARATOR}
            {formatProductPriceHelper(order.totalAmount)}
          </span>
        </div>
        <span className="flex h-7 items-center gap-1.5 rounded-lg bg-accent-soft px-2.5 text-[12.5px] font-semibold text-accent-dark">
          <span className="font-symbols text-base">{status.icon}</span>
          {status.label}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: CABINET_ACTIVE_ORDER_PROGRESS_STEPS }, (_, step) => (
            <span
              key={step}
              className={`h-1.5 rounded-[3px] ${step < status.progress ? "bg-accent" : "bg-surface-strong"}`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 text-[13px] text-muted lg:flex-row lg:justify-between lg:gap-2.5">
          <span>{order.shippingNote}</span>
          {order.expectedDelivery && (
            <span className="font-semibold text-foreground">
              {CABINET_ACTIVE_ORDER_EXPECTED_PREFIX} {order.expectedDelivery}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 lg:flex-nowrap">
        <div className="flex w-full gap-2 lg:w-auto lg:flex-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative h-[52px] w-[52px] flex-none overflow-hidden rounded-[10px] bg-footer"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="52px"
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <Link
          href={`${CABINET_ORDERS_PATH}/${order.id}`}
          className="flex h-[42px] flex-1 items-center justify-center rounded-[10px] border border-footer-border bg-background px-4 text-[13.5px] font-semibold text-foreground hover:border-accent lg:flex-none"
        >
          {CABINET_ACTIVE_ORDER_DETAILS_LABEL}
        </Link>
        {order.trackingHref && (
          <a
            href={order.trackingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[42px] flex-1 items-center justify-center rounded-[10px] bg-accent px-4 text-[13.5px] font-semibold text-white hover:bg-accent-dark lg:flex-none"
          >
            {CABINET_ACTIVE_ORDER_TRACK_LABEL}
          </a>
        )}
      </div>
    </section>
  );
};
