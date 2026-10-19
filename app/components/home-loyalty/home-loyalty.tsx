import Link from "next/link";
import {
  HOME_LOYALTY_DESCRIPTION,
  HOME_LOYALTY_DETAILS_HREF,
  HOME_LOYALTY_DETAILS_LABEL,
  HOME_LOYALTY_EYEBROW_LABEL,
  HOME_LOYALTY_JOIN_HREF,
  HOME_LOYALTY_JOIN_LABEL,
  HOME_LOYALTY_STEP_NUMBER_LENGTH,
  HOME_LOYALTY_STEPS,
  HOME_LOYALTY_TITLE,
} from "./constants/home-loyalty.constants";

export function HomeLoyalty() {
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
              <Link
                href={HOME_LOYALTY_JOIN_HREF}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-[14.5px] font-semibold text-accent transition-colors hover:bg-accent-soft"
              >
                {HOME_LOYALTY_JOIN_LABEL}
              </Link>
              <Link
                href={HOME_LOYALTY_DETAILS_HREF}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-5 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                {HOME_LOYALTY_DETAILS_LABEL}
              </Link>
            </div>
          </div>

          <ol className="flex flex-col gap-2.5 lg:grid lg:grid-cols-3 lg:gap-3.5">
            {HOME_LOYALTY_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex items-center gap-3 rounded-xl bg-white/10 p-3 lg:flex-col lg:items-stretch lg:rounded-2xl lg:px-5 lg:py-[22px]"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className="font-symbols text-[22px] text-accent-highlight lg:text-[26px]"
                  >
                    {step.icon}
                  </span>
                  <span className="hidden font-heading text-[13px] text-accent-highlight lg:inline">
                    {String(index + 1).padStart(HOME_LOYALTY_STEP_NUMBER_LENGTH, "0")}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 lg:gap-3">
                  <span className="text-sm font-semibold lg:text-[15.5px]">{step.title}</span>
                  <span className="text-[12.5px] text-on-accent-muted lg:text-[13.5px] lg:leading-[1.5]">
                    {step.text}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href={HOME_LOYALTY_JOIN_HREF}
            className="inline-flex h-[46px] items-center justify-center rounded-xl bg-white text-sm font-semibold text-accent transition-colors hover:bg-accent-soft lg:hidden"
          >
            {HOME_LOYALTY_JOIN_LABEL}
          </Link>
        </div>
      </div>
    </section>
  );
}
