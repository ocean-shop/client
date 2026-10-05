import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { Button } from "@/app/ui/button/button";
import { CheckoutField } from "../checkout-field/checkout-field";
import { CheckoutSection } from "../checkout-section/checkout-section";
import {
  CHECKOUT_CONTACT_FIELDS,
  CHECKOUT_CONTACT_LOGIN_LABEL,
  CHECKOUT_CONTACT_LOGIN_TEXT,
  CHECKOUT_CONTACT_LOGIN_TITLE,
  CHECKOUT_CONTACT_LOGIN_TOAST_MESSAGE,
  CHECKOUT_CONTACT_LOGIN_TOAST_TITLE,
  CHECKOUT_CONTACT_STEP,
  CHECKOUT_CONTACT_TITLE,
} from "./constants/checkout-contact.constants";
import type { CheckoutContactProps } from "./types/checkout-contact.types";

export function CheckoutContact({ contact, onChange }: CheckoutContactProps) {
  function handleLogin() {
    toastStore.success(CHECKOUT_CONTACT_LOGIN_TOAST_TITLE, CHECKOUT_CONTACT_LOGIN_TOAST_MESSAGE);
  }

  return (
    <CheckoutSection step={CHECKOUT_CONTACT_STEP} title={CHECKOUT_CONTACT_TITLE}>
      <div className="flex flex-wrap items-center gap-3.5 rounded-xl bg-surface px-4 py-3.5 lg:flex-nowrap">
        <span className="font-symbols text-[22px] text-accent">person</span>
        <span className="min-w-[200px] flex-1 text-sm leading-[1.45] text-muted">
          <b className="font-semibold text-foreground">{CHECKOUT_CONTACT_LOGIN_TITLE}</b>{" "}
          {CHECKOUT_CONTACT_LOGIN_TEXT}
        </span>
        <Button
          variant="unstyled"
          size="auto"
          onClick={handleLogin}
          className="h-10 w-full rounded-[10px] border border-accent bg-background px-[18px] text-sm font-semibold text-accent hover:bg-accent-soft lg:w-auto"
        >
          {CHECKOUT_CONTACT_LOGIN_LABEL}
        </Button>
      </div>

      <div className="grid gap-3.5 lg:grid-cols-2">
        <CheckoutField
          {...CHECKOUT_CONTACT_FIELDS.name}
          value={contact.name}
          onChange={(event) => onChange({ ...contact, name: event.target.value })}
          className="lg:col-span-2"
        />
        <CheckoutField
          {...CHECKOUT_CONTACT_FIELDS.email}
          type="email"
          value={contact.email}
          onChange={(event) => onChange({ ...contact, email: event.target.value })}
        />
        <CheckoutField
          {...CHECKOUT_CONTACT_FIELDS.phone}
          type="tel"
          inputMode="tel"
          value={contact.phone}
          onChange={(event) => onChange({ ...contact, phone: event.target.value })}
        />
      </div>
    </CheckoutSection>
  );
}
