import { ButtonLink } from "@/app/ui/button-link/button-link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  CHECKOUT_CONTACT_LOGIN_HREF,
  CHECKOUT_CONTACT_LOGIN_LABEL,
  CHECKOUT_CONTACT_LOGIN_TEXT,
  CHECKOUT_CONTACT_LOGIN_TITLE,
} from "./constants/checkout-contact-login.constants";

/** Offers a guest to sign in, so their details and delivery address get filled in. */
export const CheckoutContactLogin = () => {
  return (
    <div className="flex flex-wrap items-center gap-3.5 rounded-xl bg-surface px-4 py-3.5 lg:flex-nowrap">
      <MaterialIcon name="person" className="text-[22px] text-accent" />
      <span className="min-w-[200px] flex-1 text-sm leading-[1.45] text-muted">
        <b className="font-semibold text-foreground">{CHECKOUT_CONTACT_LOGIN_TITLE}</b>{" "}
        {CHECKOUT_CONTACT_LOGIN_TEXT}
      </span>
      <ButtonLink
        href={CHECKOUT_CONTACT_LOGIN_HREF}
        variant="unstyled"
        size="auto"
        className="h-10 w-full rounded-[10px] border border-accent bg-background px-[18px] text-sm font-semibold text-accent hover:bg-accent-soft lg:w-auto"
      >
        {CHECKOUT_CONTACT_LOGIN_LABEL}
      </ButtonLink>
    </div>
  );
};
