"use client";

import { useRef, useState } from "react";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiActionErrorMessage } from "@/app/core/api/helpers/get-api-action-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { createProductQuickOrderAction } from "@/app/(pages)/product/actions/create-product-quick-order";
import { buildProductQuickOrderInputHelper } from "@/app/(pages)/product/helpers/build-product-quick-order-input";
import { validateProductQuickOrderInputHelper } from "@/app/(pages)/product/helpers/validate-product-quick-order-input";
import type {
  ProductQuickOrderErrors,
  ProductQuickOrderField,
  ProductQuickOrderInput,
} from "@/app/(pages)/product/types/product-quick-order.types";
import {
  PRODUCT_QUICK_ORDER_MODAL_ERROR_TOAST_TITLE,
  PRODUCT_QUICK_ORDER_MODAL_SUCCESS_TOAST_MESSAGE,
  PRODUCT_QUICK_ORDER_MODAL_SUCCESS_TOAST_TITLE,
} from "../constants/product-quick-order-modal.constants";
import { readProductQuickOrderFormValuesHelper } from "../helpers/read-product-quick-order-form-values";

/**
 * Validates the form on submit, sends the order and reports the outcome in a toast. The modal
 * stays mounted while closed, so closing it also clears the fields and errors for the next open.
 */
export const useProductQuickOrderForm = (productId: string, onClose: () => void) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ProductQuickOrderErrors>({});
  const [isSending, setIsSending] = useState(false);

  const clearError = (field: ProductQuickOrderField) => {
    setErrors((current) => ({ ...current, [field]: null }));
  };

  const resetAndClose = () => {
    formRef.current?.reset();
    setErrors({});
    onClose();
  };

  const handleClose = () => {
    if (isSending) return;

    resetAndClose();
  };

  const sendOrder = async (input: ProductQuickOrderInput) => {
    setIsSending(true);

    try {
      const result = await createProductQuickOrderAction(input);

      if (!result.ok) {
        toastStore.error(
          PRODUCT_QUICK_ORDER_MODAL_ERROR_TOAST_TITLE,
          getApiActionErrorMessage(result)
        );
        return;
      }

      resetAndClose();
      toastStore.success(
        PRODUCT_QUICK_ORDER_MODAL_SUCCESS_TOAST_TITLE,
        PRODUCT_QUICK_ORDER_MODAL_SUCCESS_TOAST_MESSAGE
      );
    } catch {
      toastStore.error(PRODUCT_QUICK_ORDER_MODAL_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    const input = buildProductQuickOrderInputHelper({
      productId,
      ...readProductQuickOrderFormValuesHelper(event.currentTarget),
    });
    const nextErrors = validateProductQuickOrderInputHelper(input);

    if (nextErrors) {
      setErrors(nextErrors);
      return;
    }

    await sendOrder(input);
  };

  return { formRef, errors, isSending, clearError, handleClose, handleSubmit };
};
