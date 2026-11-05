import { HOME_LOYALTY_STEPS } from "./constants/home-loyalty-steps.constants";
import { formatHomeLoyaltyStepNumberHelper } from "./helpers/format-home-loyalty-step-number";

export const HomeLoyaltySteps = () => {
  return (
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
              {formatHomeLoyaltyStepNumberHelper(index)}
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
  );
};
