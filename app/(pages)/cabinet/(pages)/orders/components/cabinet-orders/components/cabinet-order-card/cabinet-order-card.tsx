import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { ORDER_META_SEPARATOR, ORDER_TITLE_PREFIX } from "../../../../constants/orders.constants";
import { CabinetOrderStatusBadge } from "../cabinet-order-status-badge/cabinet-order-status-badge";
import {
  CABINET_ORDER_CARD_ACTION_CLASS_NAME,
  CABINET_ORDER_CARD_DETAILS_LABEL,
  CABINET_ORDER_CARD_MORE_PREFIX,
  CABINET_ORDER_CARD_REPEAT_LABEL,
  CABINET_ORDER_CARD_THUMBNAIL_CLASS_NAME,
  CABINET_ORDER_CARD_THUMBNAILS_LIMIT,
  CABINET_ORDER_CARD_TOTAL_LABEL,
} from "./constants/cabinet-order-card.constants";
import type { CabinetOrderCardProps } from "./types/cabinet-order-card.types";

export const CabinetOrderCard = ({ order, onOpen, onRepeat }: CabinetOrderCardProps) => {
  const thumbnails = order.items.slice(0, CABINET_ORDER_CARD_THUMBNAILS_LIMIT);
  const hiddenCount = order.items.length - thumbnails.length;

  return (
    <SurfaceCard as="article" className="flex flex-col gap-3.5">
      <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap lg:items-center">
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <span className="text-[15px] font-semibold text-foreground">
            {ORDER_TITLE_PREFIX} {order.number}
          </span>
          <span className="text-[13px] text-muted-light">
            {order.placedAt}
            {ORDER_META_SEPARATOR}
            {formatProductsCountHelper(order.quantity)}
          </span>
        </div>
        <CabinetOrderStatusBadge status={order.status} />
      </div>

      <div className="flex items-center gap-2 lg:gap-2.5">
        {thumbnails.map((item) => (
          <ProductThumbnail
            key={item.id}
            image={item.image}
            alt={item.name}
            sizes="60px"
            className={CABINET_ORDER_CARD_THUMBNAIL_CLASS_NAME}
          />
        ))}
        {hiddenCount > 0 && (
          <ProductThumbnail
            className={`${CABINET_ORDER_CARD_THUMBNAIL_CLASS_NAME} flex items-center justify-center text-[13px] font-semibold text-muted`}
          >
            {CABINET_ORDER_CARD_MORE_PREFIX}
            {hiddenCount}
          </ProductThumbnail>
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
          <MaterialIcon name="local_shipping" className="text-[17px] text-accent" />
          <span className="min-w-0 truncate">{order.shipping.address}</span>
        </span>
        <Button
          variant="outline"
          size="auto"
          onClick={onOpen}
          className={CABINET_ORDER_CARD_ACTION_CLASS_NAME}
        >
          {CABINET_ORDER_CARD_DETAILS_LABEL}
        </Button>
        <Button size="auto" onClick={onRepeat} className={CABINET_ORDER_CARD_ACTION_CLASS_NAME}>
          {CABINET_ORDER_CARD_REPEAT_LABEL}
        </Button>
      </div>
    </SurfaceCard>
  );
};
