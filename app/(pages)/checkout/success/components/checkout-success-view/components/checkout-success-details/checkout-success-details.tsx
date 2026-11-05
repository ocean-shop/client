import { CHECKOUT_PAYMENTS } from "@/app/(pages)/checkout/constants/checkout.constants";
import { formatCheckoutDeliveryAddressHelper } from "@/app/(pages)/checkout/helpers/format-checkout-delivery-address";
import { formatCheckoutDeliveryEstimateHelper } from "@/app/(pages)/checkout/helpers/format-checkout-delivery-estimate";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { CheckoutSuccessInfo } from "./components/checkout-success-info/checkout-success-info";
import { CheckoutSuccessItem } from "./components/checkout-success-item/checkout-success-item";
import {
  CHECKOUT_SUCCESS_DELIVERY,
  CHECKOUT_SUCCESS_ESTIMATE,
  CHECKOUT_SUCCESS_PAYMENT,
  CHECKOUT_SUCCESS_PAYMENT_STATUS,
  CHECKOUT_SUCCESS_TOTAL_LABEL,
} from "./constants/checkout-success-details.constants";
import type { CheckoutSuccessDetailsProps } from "./types/checkout-success-details.types";

export const CheckoutSuccessDetails = ({ order }: CheckoutSuccessDetailsProps) => {
  const deliveryAddress = formatCheckoutDeliveryAddressHelper(order.delivery);
  const paymentLabel = CHECKOUT_PAYMENTS.find((option) => option.id === order.payment)?.label ?? "";

  return (
    <SurfaceCard className="flex flex-col gap-3.5 lg:gap-[18px]">
      <div className="grid gap-3.5 lg:grid-cols-3 lg:gap-5">
        <CheckoutSuccessInfo
          {...CHECKOUT_SUCCESS_DELIVERY}
          value={deliveryAddress.title}
          note={deliveryAddress.address}
        />
        <CheckoutSuccessInfo
          {...CHECKOUT_SUCCESS_ESTIMATE}
          value={formatCheckoutDeliveryEstimateHelper(order.placedAt, order.delivery.carrier)}
        />
        <CheckoutSuccessInfo
          {...CHECKOUT_SUCCESS_PAYMENT}
          value={paymentLabel}
          note={CHECKOUT_SUCCESS_PAYMENT_STATUS[order.payment]}
        />
      </div>

      <div className="flex flex-col border-t border-surface">
        {order.items.map((item) => (
          <CheckoutSuccessItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-baseline justify-between">
        <span className="text-[15px] font-semibold text-foreground">
          {CHECKOUT_SUCCESS_TOTAL_LABEL}
        </span>
        <span className="font-heading text-xl font-semibold text-foreground lg:text-[22px]">
          {formatProductPriceHelper(order.total)}
        </span>
      </div>
    </SurfaceCard>
  );
};
