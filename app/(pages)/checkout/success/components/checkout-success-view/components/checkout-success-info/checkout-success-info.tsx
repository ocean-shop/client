import type { CheckoutSuccessInfoProps } from "./types/checkout-success-info.types";

export function CheckoutSuccessInfo({ icon, label, value, note }: CheckoutSuccessInfoProps) {
  return (
    <div className="flex gap-2.5">
      <span className="font-symbols text-[21px] text-accent">{icon}</span>
      <div className="flex min-w-0 flex-col gap-[3px]">
        <span className="text-[12.5px] text-muted-light">{label}</span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
        <span className="text-[13px] text-muted">{note}</span>
      </div>
    </div>
  );
}
