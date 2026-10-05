import { CHECKOUT_GRID_CLASS_NAME } from "../../constants/checkout-view.constants";

/** Holds the layout while the cart is read from browser storage. */
export function CheckoutSkeleton() {
  return (
    <div className={`${CHECKOUT_GRID_CLASS_NAME} animate-pulse`}>
      <div className="flex flex-col gap-3.5 lg:gap-4">
        <div className="h-[300px] rounded-2xl bg-background" />
        <div className="h-[420px] rounded-2xl bg-background" />
        <div className="h-[360px] rounded-2xl bg-background" />
      </div>

      <div className="h-[460px] rounded-2xl bg-background" />
    </div>
  );
}
