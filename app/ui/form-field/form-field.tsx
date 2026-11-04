import type { FormFieldProps } from "./types/form-field.types";

/** Label above a control, with the validation message below it. */
export const FormField = ({ label, error, className, children }: FormFieldProps) => {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-[13px] font-medium text-muted">{label}</span>
      {children}
      {error && <span className="text-[12.5px] text-error-dark">{error}</span>}
    </label>
  );
};
