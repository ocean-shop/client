import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiStatusErrorMessage } from "@/app/core/api/helpers/get-api-status-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { createOrderAction } from "@/app/shared/orders/actions/create-order";
import type { Order } from "@/app/shared/orders/types/orders.types";
import { buildCheckoutOrderHelper } from "../../../helpers/build-checkout-order";
import type { CheckoutOrderDraft } from "../../../types/checkout.types";
import { CHECKOUT_ORDER_ERROR_TOAST_TITLE } from "../constants/checkout-view.constants";

/** Resolves to the created order, or to `null` once the failure is reported with a toast. */
export const createCheckoutOrderHelper = async (
  draft: CheckoutOrderDraft
): Promise<Order | null> => {
  try {
    const result = await createOrderAction(buildCheckoutOrderHelper(draft));

    if (result.ok) return result.order;

    toastStore.error(CHECKOUT_ORDER_ERROR_TOAST_TITLE, getApiStatusErrorMessage(result.status));
  } catch {
    toastStore.error(CHECKOUT_ORDER_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
  }

  return null;
};
