import { CHECKOUT_PAGE_CLASS_NAME } from "../constants/checkout.constants";
import { CheckoutSuccessView } from "./components/checkout-success-view/checkout-success-view";

export default function CheckoutSuccessPage() {
  return (
    <div className={CHECKOUT_PAGE_CLASS_NAME}>
      <CheckoutSuccessView />
    </div>
  );
}
