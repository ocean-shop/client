import { CheckoutView } from "./components/checkout-view/checkout-view";
import { CHECKOUT_PAGE_CLASS_NAME } from "./constants/checkout.constants";

export default function CheckoutPage() {
  return (
    <div className={CHECKOUT_PAGE_CLASS_NAME}>
      <CheckoutView />
    </div>
  );
}
