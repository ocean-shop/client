import { FormInput } from "@/app/ui/form-input/form-input";
import { CheckoutSection } from "../checkout-section/checkout-section";
import { CheckoutContactLogin } from "./components/checkout-contact-login/checkout-contact-login";
import {
  CHECKOUT_CONTACT_FIELDS,
  CHECKOUT_CONTACT_STEP,
  CHECKOUT_CONTACT_TITLE,
} from "./constants/checkout-contact.constants";
import type { CheckoutContactProps } from "./types/checkout-contact.types";

export const CheckoutContact = ({ contact, isSignedIn, onChange }: CheckoutContactProps) => {
  return (
    <CheckoutSection step={CHECKOUT_CONTACT_STEP} title={CHECKOUT_CONTACT_TITLE}>
      {!isSignedIn && <CheckoutContactLogin />}

      <div className="grid gap-3.5 lg:grid-cols-2">
        <FormInput
          {...CHECKOUT_CONTACT_FIELDS.name}
          value={contact.name}
          onChange={(event) => onChange({ ...contact, name: event.target.value })}
          className="lg:col-span-2"
        />
        <FormInput
          {...CHECKOUT_CONTACT_FIELDS.email}
          type="email"
          value={contact.email}
          onChange={(event) => onChange({ ...contact, email: event.target.value })}
        />
        <FormInput
          {...CHECKOUT_CONTACT_FIELDS.phone}
          type="tel"
          inputMode="tel"
          value={contact.phone}
          onChange={(event) => onChange({ ...contact, phone: event.target.value })}
        />
      </div>
    </CheckoutSection>
  );
};
