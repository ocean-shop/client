import { Input } from "@/app/ui/input/input";
import type { CabinetAddressFieldProps } from "./types/cabinet-address-field.types";

export function CabinetAddressField({
  label,
  error,
  className,
  ...props
}: CabinetAddressFieldProps) {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-[13px] font-medium text-muted">{label}</span>
      <Input
        variant="outline"
        size="xl"
        aria-invalid={error ? true : undefined}
        className={error ? "!border-error-dark focus:!ring-error/12" : undefined}
        {...props}
      />
      {error && <span className="text-[12.5px] text-error-dark">{error}</span>}
    </label>
  );
}
