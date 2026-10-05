"use client";

import { cartStore } from "@/app/shared/cart/cart-store";
import { calculateCartTotalsHelper } from "@/app/shared/cart/helpers/calculate-cart-totals";
import { useCartItems } from "@/app/shared/cart/hooks/use-cart-items";
import { useCartOpen } from "@/app/shared/cart/hooks/use-cart-open";
import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import { Modal } from "@/app/ui/modal/modal";
import { CartModalItem } from "./components/cart-modal-item/cart-modal-item";
import { CartModalSummary } from "./components/cart-modal-summary/cart-modal-summary";
import {
  CART_MODAL_CLOSE_LABEL,
  CART_MODAL_EMPTY_ICON,
  CART_MODAL_EMPTY_LABEL,
  CART_MODAL_TITLE,
} from "./constants/cart-modal.constants";

export function CartModal() {
  const items = useCartItems();
  const isOpen = useCartOpen();
  const totals = calculateCartTotalsHelper(items);

  return (
    <Modal
      isOpen={isOpen}
      onClose={cartStore.close}
      title={CART_MODAL_TITLE}
      subtitle={formatProductsCountHelper(totals.quantity)}
      closeLabel={CART_MODAL_CLOSE_LABEL}
      footer={<CartModalSummary totals={totals} onClose={cartStore.close} />}
    >
      {items.map((item) => (
        <CartModalItem key={item.id} item={item} onNavigate={cartStore.close} />
      ))}

      {items.length === 0 && (
        <div className="flex flex-col items-center gap-2 px-3 py-10 text-center text-[14.5px] text-muted">
          <span className="font-symbols text-[34px] text-muted-light">{CART_MODAL_EMPTY_ICON}</span>
          {CART_MODAL_EMPTY_LABEL}
        </div>
      )}
    </Modal>
  );
}
