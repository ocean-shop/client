import {
  CABINET_ORDER_STEP_LINE_CLASS_NAMES,
  CABINET_ORDER_STEPS,
} from "./constants/cabinet-order-progress.constants";
import type { CabinetOrderProgressProps } from "./types/cabinet-order-progress.types";

/** A vertical trail on mobile that turns into a horizontal one on desktop. */
export function CabinetOrderProgress({ steps }: CabinetOrderProgressProps) {
  return (
    <ol className="flex flex-col lg:flex-row">
      {steps.map((step, index) => {
        const meta = CABINET_ORDER_STEPS[step.state];
        const nextStep = steps[index + 1];

        return (
          <li key={step.label} className="flex gap-3 lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-2">
            <div className="flex w-6 flex-col items-center lg:w-auto lg:flex-row">
              <span
                className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 font-symbols text-[15px] text-white lg:h-[26px] lg:w-[26px] lg:text-base ${meta.markerClassName}`}
              >
                {meta.icon}
              </span>
              {nextStep && (
                <span
                  className={`min-h-[18px] w-0.5 flex-1 lg:mx-1.5 lg:h-0.5 lg:min-h-0 lg:w-auto ${
                    CABINET_ORDER_STEP_LINE_CLASS_NAMES[
                      nextStep.state === "upcoming" ? "upcoming" : "reached"
                    ]
                  }`}
                />
              )}
            </div>
            <div
              className={`flex flex-col gap-0.5 pt-0.5 lg:gap-2 lg:p-0 lg:pr-2.5 ${nextStep ? "pb-3.5" : ""}`}
            >
              <span className={`text-sm lg:text-[13.5px] ${meta.labelClassName}`}>
                {step.label}
              </span>
              {step.date && <span className="text-[12.5px] text-muted-light">{step.date}</span>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
