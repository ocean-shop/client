import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { CHECKOUT_SECTION_TITLE_CLASS_NAME } from "../../constants/checkout-view.constants";
import type { CheckoutSectionProps } from "./types/checkout-section.types";

/** One numbered step of the checkout form. */
export const CheckoutSection = ({ step, title, children }: CheckoutSectionProps) => {
  return (
    <SurfaceCard as="section" className="flex flex-col gap-[18px]">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-accent-soft text-[13px] font-bold text-accent">
          {step}
        </span>
        <h2 className={CHECKOUT_SECTION_TITLE_CLASS_NAME}>{title}</h2>
      </div>

      {children}
    </SurfaceCard>
  );
};
