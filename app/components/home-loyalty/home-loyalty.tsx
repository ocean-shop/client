import { ButtonLink } from "@/app/ui/button-link/button-link";
import { HomeLoyaltySteps } from "./components/home-loyalty-steps/home-loyalty-steps";
import {
  HOME_LOYALTY_DESCRIPTION,
  HOME_LOYALTY_DETAILS_HREF,
  HOME_LOYALTY_DETAILS_LABEL,
  HOME_LOYALTY_EYEBROW_LABEL,
  HOME_LOYALTY_JOIN_HREF,
  HOME_LOYALTY_JOIN_LABEL,
  HOME_LOYALTY_TITLE,
} from "./constants/home-loyalty.constants";

export const HomeLoyalty = () => {
  return (
    <section className="bg-surface-soft lg:bg-background">
      <div className="mx-auto max-w-page px-4.5 pb-8 pt-6 lg:px-10 lg:pb-[72px] lg:pt-0">
        <div className="flex flex-col gap-4 rounded-[20px] bg-accent px-[18px] py-[22px] text-white lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-center lg:gap-12 lg:rounded-3xl lg:px-[52px] lg:py-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[.1em] text-accent-highlight lg:text-[12.5px]">
              {HOME_LOYALTY_EYEBROW_LABEL}
            </span>

            <h2 className="text-pretty font-heading text-[21px] font-semibold leading-[1.2] tracking-[-.025em] lg:text-[32px] lg:leading-[1.15] lg:tracking-[-.03em]">
              {HOME_LOYALTY_TITLE}
            </h2>

            <p className="hidden text-pretty text-[15px] leading-[1.6] text-on-accent-muted lg:block">
              {HOME_LOYALTY_DESCRIPTION}
            </p>

            <div className="hidden gap-3 pt-1.5 lg:flex">
              <ButtonLink
                href={HOME_LOYALTY_JOIN_HREF}
                variant="primary-inverse"
                size="auto"
                className="h-12 rounded-xl px-6 text-[14.5px]"
              >
                {HOME_LOYALTY_JOIN_LABEL}
              </ButtonLink>
              <ButtonLink
                href={HOME_LOYALTY_DETAILS_HREF}
                variant="unstyled"
                size="auto"
                className="h-12 rounded-xl border border-white/40 px-5 text-[14.5px] font-semibold text-white hover:bg-white/10"
              >
                {HOME_LOYALTY_DETAILS_LABEL}
              </ButtonLink>
            </div>
          </div>

          <HomeLoyaltySteps />

          <ButtonLink
            href={HOME_LOYALTY_JOIN_HREF}
            variant="primary-inverse"
            size="auto"
            className="h-[46px] rounded-xl text-sm lg:hidden"
          >
            {HOME_LOYALTY_JOIN_LABEL}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
