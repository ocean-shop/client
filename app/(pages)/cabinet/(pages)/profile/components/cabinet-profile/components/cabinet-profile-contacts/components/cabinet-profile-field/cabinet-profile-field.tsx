import { Input } from "@/app/ui/input/input";
import type { CabinetProfileFieldProps } from "./types/cabinet-profile-field.types";

export const CabinetProfileField = ({ label, error, ...props }: CabinetProfileFieldProps) => {
  return (
    <label className="flex min-w-0 flex-col gap-1.5">
      <span className="text-[13px] font-medium text-muted">{label}</span>
      <Input
        variant="outline"
        size="xl"
        aria-invalid={error ? true : undefined}
        className={`disabled:bg-surface-soft disabled:text-muted-light ${
          error ? "!border-error-dark focus:!ring-error/12" : ""
        }`}
        {...props}
      />
      {error && <span className="text-[12.5px] text-error-dark">{error}</span>}
    </label>
  );
};
