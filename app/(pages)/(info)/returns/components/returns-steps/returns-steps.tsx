import type { ReturnsStepsProps } from "./types/returns-steps.types";

/** Numbered how-to of a return, from the request to the refund. */
export function ReturnsSteps({ steps }: ReturnsStepsProps) {
  return (
    <ol className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col gap-2.5 rounded-2xl bg-background p-4 lg:p-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-accent font-heading text-sm font-semibold text-white">
            {index + 1}
          </span>
          <span className="text-[15px] font-semibold text-foreground">{step.title}</span>
          <span className="text-[13.5px] leading-[1.55] text-muted">{step.text}</span>
        </li>
      ))}
    </ol>
  );
}
