import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { ButtonLink } from "@/app/ui/button-link/button-link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import {
  ORDER_META_SEPARATOR,
  ORDER_STATUS_META,
  ORDER_TITLE_PREFIX,
} from "../../../../(pages)/orders/constants/orders.constants";
import { CABINET_ORDERS_PATH } from "../../../../constants/cabinet.constants";
import { CabinetActiveOrderProgress } from "./components/cabinet-active-order-progress/cabinet-active-order-progress";
import {
  CABINET_ACTIVE_ORDER_ACTION_CLASS_NAME,
  CABINET_ACTIVE_ORDER_DETAILS_LABEL,
  CABINET_ACTIVE_ORDER_EYEBROW,
  CABINET_ACTIVE_ORDER_PROGRESS,
  CABINET_ACTIVE_ORDER_THUMBNAILS_LIMIT,
  CABINET_ACTIVE_ORDER_TRACK_LABEL,
} from "./constants/cabinet-active-order.constants";
import type { CabinetActiveOrderProps } from "./types/cabinet-active-order.types";

/** The latest order that has not reached the user yet, with its delivery progress. */
export const CabinetActiveOrder = ({ order }: CabinetActiveOrderProps) => {
  const status = ORDER_STATUS_META[order.status];
  const items = order.items.slice(0, CABINET_ACTIVE_ORDER_THUMBNAILS_LIMIT);

  return (
    <SurfaceCard as="section" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap">
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <span className="text-[12.5px] font-semibold uppercase tracking-[.06em] text-accent">
            {CABINET_ACTIVE_ORDER_EYEBROW}
          </span>
          <span className="text-base font-semibold text-foreground lg:text-[17px]">
            {ORDER_TITLE_PREFIX} {order.number}
            {ORDER_META_SEPARATOR}
            {formatProductPriceHelper(order.totalAmount)}
          </span>
        </div>
        <span className="flex h-7 items-center gap-1.5 rounded-lg bg-accent-soft px-2.5 text-[12.5px] font-semibold text-accent-dark">
          <MaterialIcon name={status.icon} className="text-base" />
          {status.label}
        </span>
      </div>

      <CabinetActiveOrderProgress
        progress={CABINET_ACTIVE_ORDER_PROGRESS[order.status]}
        shippingNote={order.shippingNote}
        expectedDelivery={order.expectedDelivery}
      />

      <div className="flex flex-wrap items-center gap-2.5 lg:flex-nowrap">
        <div className="flex w-full gap-2 lg:w-auto lg:flex-1">
          {items.map((item) => (
            <ProductThumbnail
              key={item.id}
              image={item.image}
              alt={item.name}
              sizes="52px"
              className="h-[52px] w-[52px] rounded-[10px]"
            />
          ))}
        </div>
        <ButtonLink
          href={`${CABINET_ORDERS_PATH}/${order.id}`}
          variant="outline"
          size="auto"
          className={CABINET_ACTIVE_ORDER_ACTION_CLASS_NAME}
        >
          {CABINET_ACTIVE_ORDER_DETAILS_LABEL}
        </ButtonLink>
        {order.trackingHref && (
          <ButtonLink
            href={order.trackingHref}
            target="_blank"
            rel="noopener noreferrer"
            size="auto"
            className={CABINET_ACTIVE_ORDER_ACTION_CLASS_NAME}
          >
            {CABINET_ACTIVE_ORDER_TRACK_LABEL}
          </ButtonLink>
        )}
      </div>
    </SurfaceCard>
  );
};
