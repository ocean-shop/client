import type { DeliveryPaymentsProps } from "./types/delivery-payments.types";

export const DeliveryPayments = ({ methods }: DeliveryPaymentsProps) => {
  return (
    <ul className="grid gap-3 md:grid-cols-2 lg:gap-4">
      {methods.map((method) => (
        <li key={method.title} className="flex gap-3 rounded-xl bg-surface-soft p-3.5">
          <span aria-hidden className="flex-none font-symbols text-[22px] text-accent">
            {method.icon}
          </span>
          <div className="flex flex-col gap-[3px]">
            <span className="text-[14.5px] font-semibold text-foreground">{method.title}</span>
            <span className="text-[13px] leading-[1.5] text-muted">{method.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
