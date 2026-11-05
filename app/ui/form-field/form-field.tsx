import { FORM_FIELD_LABEL_CLASS_NAME } from "./constants/form-field.constants";
import type { FormFieldProps } from "./types/form-field.types";

/** Label above a control, with the validation message below it. */
export const FormField = ({ label, error, className, children }: FormFieldProps) => {
  return (
    <label className={`flex min-w-0 flex-col gap-1.5 ${className ?? ""}`}>
      <span className={FORM_FIELD_LABEL_CLASS_NAME}>{label}</span>
      {children}
      {error && <span className="text-[12.5px] text-error-dark">{error}</span>}
    </label>
  );
};
