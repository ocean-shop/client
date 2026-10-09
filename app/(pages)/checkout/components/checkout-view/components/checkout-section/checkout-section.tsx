import type { CheckoutSectionProps } from "./types/checkout-section.types";

/** One numbered step of the checkout form. */
export function CheckoutSection({ step, title, children }: CheckoutSectionProps) {
  return (
    <section className="flex flex-col gap-[18px] rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-accent-soft text-[13px] font-bold text-accent">
          {step}
        </span>
        <h2 className="font-heading text-base font-semibold tracking-[-.015em] text-foreground lg:text-[17px]">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}
