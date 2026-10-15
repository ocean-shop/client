import Image from "next/image";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Button } from "@/app/ui/button/button";
import { CabinetOrderStatusBadge } from "../cabinet-order-status-badge/cabinet-order-status-badge";
import {
  CABINET_ORDER_CARD_DETAILS_LABEL,
  CABINET_ORDER_CARD_META_SEPARATOR,
  CABINET_ORDER_CARD_MORE_PREFIX,
  CABINET_ORDER_CARD_REPEAT_LABEL,
  CABINET_ORDER_CARD_THUMBNAIL_CLASS_NAME,
  CABINET_ORDER_CARD_THUMBNAILS_LIMIT,
  CABINET_ORDER_CARD_TITLE_PREFIX,
  CABINET_ORDER_CARD_TOTAL_LABEL,
} from "./constants/cabinet-order-card.constants";
import type { CabinetOrderCardProps } from "./types/cabinet-order-card.types";

export function CabinetOrderCard({ order, onOpen, onRepeat }: CabinetOrderCardProps) {
  const thumbnails = order.items.slice(0, CABINET_ORDER_CARD_THUMBNAILS_LIMIT);
  const hiddenCount = order.items.length - thumbnails.length;

  return (
    <article className="flex flex-col gap-3.5 rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap lg:items-center">
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <span className="text-[15px] font-semibold text-foreground">
            {CABINET_ORDER_CARD_TITLE_PREFIX} {order.number}
          </span>
          <span className="text-[13px] text-muted-light">
            {order.placedAt}
            {CABINET_ORDER_CARD_META_SEPARATOR}
            {formatProductsCountHelper(order.quantity)}
          </span>
        </div>
        <CabinetOrderStatusBadge status={order.status} />
      </div>

      <div className="flex items-center gap-2 lg:gap-2.5">
        {thumbnails.map((item) => (
          <div key={item.id} className={CABINET_ORDER_CARD_THUMBNAIL_CLASS_NAME}>
            {item.image && (
              <Image src={item.image} alt={item.name} fill sizes="60px" className="object-cover" />
            )}
          </div>
        ))}
        {hiddenCount > 0 && (
          <div
            className={`${CABINET_ORDER_CARD_THUMBNAIL_CLASS_NAME} flex items-center justify-center text-[13px] font-semibold text-muted`}
          >
            {CABINET_ORDER_CARD_MORE_PREFIX}
            {hiddenCount}
          </div>
        )}
        <div className="flex-1" />
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-[12.5px] text-muted-light">{CABINET_ORDER_CARD_TOTAL_LABEL}</span>
          <span className="font-heading text-base font-semibold text-foreground lg:text-[17px]">
            {formatProductPriceHelper(order.amounts.total)}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 border-t border-surface pt-3 lg:flex-nowrap">
        <span className="flex min-w-[180px] flex-1 items-center gap-1.5 text-[13px] text-muted">
          <span className="font-symbols text-[17px] text-accent">local_shipping</span>
          <span className="min-w-0 truncate">{order.shipping.address}</span>
        </span>
        <Button
          variant="outline"
          size="auto"
          onClick={onOpen}
          className="h-10 flex-1 rounded-[10px] px-4 text-[13.5px] lg:flex-none"
        >
          {CABINET_ORDER_CARD_DETAILS_LABEL}
        </Button>
        <Button
          size="auto"
          onClick={onRepeat}
          className="h-10 flex-1 rounded-[10px] px-4 text-[13.5px] lg:flex-none"
        >
          {CABINET_ORDER_CARD_REPEAT_LABEL}
        </Button>
      </div>
    </article>
  );
}
