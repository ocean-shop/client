"use client";

import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { FormActions } from "@/app/ui/form-actions/form-actions";
import { FORM_FIELD_INVALID_CLASS_NAME } from "@/app/ui/form-field/constants/form-field.constants";
import { FormField } from "@/app/ui/form-field/form-field";
import { Input } from "@/app/ui/input/input";
import { Modal } from "@/app/ui/modal/modal";
import {
  PRODUCT_QUICK_ORDER_MODAL_ACTIONS_CLASS_NAME,
  PRODUCT_QUICK_ORDER_MODAL_CANCEL_LABEL,
  PRODUCT_QUICK_ORDER_MODAL_INPUT_FIELDS,
  PRODUCT_QUICK_ORDER_MODAL_SUBMIT_LABEL,
  PRODUCT_QUICK_ORDER_MODAL_TEXT,
  PRODUCT_QUICK_ORDER_MODAL_TITLE,
} from "./constants/product-quick-order-modal.constants";
import { useProductQuickOrderForm } from "./hooks/use-product-quick-order-form";
import type { ProductQuickOrderModalProps } from "./types/product-quick-order-modal.types";

/** Collects a name and a phone so the shop can call back and finish the order by phone. */
export const ProductQuickOrderModal = ({
  product,
  offer,
  isOpen,
  onClose,
}: ProductQuickOrderModalProps) => {
  const { formRef, errors, isSending, clearError, handleClose, handleSubmit } =
    useProductQuickOrderForm(product.id, onClose);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={PRODUCT_QUICK_ORDER_MODAL_TITLE}>
      <form ref={formRef} noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
        <div className="flex items-baseline justify-between gap-3 rounded-xl bg-surface-soft px-3.5 py-3">
          <span className="min-w-0 break-words text-[14.5px] font-semibold text-foreground">
            {product.name}
          </span>
          <span className="shrink-0 text-[15px] font-bold text-foreground">
            {formatProductPriceHelper(offer.price)}
          </span>
        </div>

        <p className="text-sm text-muted">{PRODUCT_QUICK_ORDER_MODAL_TEXT}</p>

        {PRODUCT_QUICK_ORDER_MODAL_INPUT_FIELDS.map(({ label, ...field }) => (
          <FormField key={field.name} label={label} error={errors[field.name]}>
            <Input
              {...field}
              disabled={isSending}
              aria-invalid={errors[field.name] ? true : undefined}
              onChange={() => clearError(field.name)}
              className={errors[field.name] ? FORM_FIELD_INVALID_CLASS_NAME : ""}
              variant="outline"
              size="xl"
            />
          </FormField>
        ))}

        <FormActions
          cancelLabel={PRODUCT_QUICK_ORDER_MODAL_CANCEL_LABEL}
          confirmLabel={PRODUCT_QUICK_ORDER_MODAL_SUBMIT_LABEL}
          onCancel={handleClose}
          disabled={isSending}
          className={PRODUCT_QUICK_ORDER_MODAL_ACTIONS_CLASS_NAME}
        />
      </form>
    </Modal>
  );
};
