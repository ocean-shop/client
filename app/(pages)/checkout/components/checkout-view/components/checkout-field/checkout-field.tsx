import { Input } from "@/app/ui/input/input";
import type { CheckoutFieldProps } from "./types/checkout-field.types";

export function CheckoutField({ label, className, ...props }: CheckoutFieldProps) {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-[13px] font-medium text-muted">{label}</span>
      <Input variant="outline" size="xl" {...props} />
    </label>
  );
}
