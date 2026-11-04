import { FORM_FIELD_INVALID_CLASS_NAME } from "../form-field/constants/form-field.constants";
import { FormField } from "../form-field/form-field";
import { Input } from "../input/input";
import { FORM_INPUT_CLASS_NAME } from "./constants/form-input.constants";
import type { FormInputProps } from "./types/form-input.types";

/** The standard text field of a form: a label, an outlined input and its validation message. */
export const FormInput = ({ label, error, className, ...props }: FormInputProps) => {
  return (
    <FormField label={label} error={error} className={className}>
      <Input
        variant="outline"
        size="xl"
        aria-invalid={error ? true : undefined}
        className={`${FORM_INPUT_CLASS_NAME} ${error ? FORM_FIELD_INVALID_CLASS_NAME : ""}`}
        {...props}
      />
    </FormField>
  );
};
