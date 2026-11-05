import { CABINET_ORDERS_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import { ButtonLink } from "@/app/ui/button-link/button-link";
import {
  CHECKOUT_SUCCESS_CONTINUE_HREF,
  CHECKOUT_SUCCESS_CONTINUE_LABEL,
  CHECKOUT_SUCCESS_ORDERS_LABEL,
} from "./constants/checkout-success-actions.constants";
import type { CheckoutSuccessActionsProps } from "./types/checkout-success-actions.types";

export const CheckoutSuccessActions = ({ isSignedIn }: CheckoutSuccessActionsProps) => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:justify-center">
      <ButtonLink href={CHECKOUT_SUCCESS_CONTINUE_HREF} size="xl">
        {CHECKOUT_SUCCESS_CONTINUE_LABEL}
      </ButtonLink>
      {isSignedIn && (
        <ButtonLink href={CABINET_ORDERS_PATH} variant="outline" size="xl">
          {CHECKOUT_SUCCESS_ORDERS_LABEL}
        </ButtonLink>
      )}
    </div>
  );
};
