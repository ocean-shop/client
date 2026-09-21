import {
  CHECKBOX_BOX_BASE_CLASSNAME,
  CHECKBOX_BOX_STATE_CLASSNAMES,
  CHECKBOX_CHECK_ICON,
  CHECKBOX_COUNT_CLASSNAME,
  CHECKBOX_INPUT_CLASSNAME,
  CHECKBOX_LABEL_CLASSNAME,
  CHECKBOX_WRAPPER_CLASSNAME,
} from "./constants/checkbox.constants";
import type { CheckboxProps } from "./types/checkbox.types";

export function Checkbox({
  checked,
  onChange,
  label,
  count,
  wrapperClassName,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className={`${CHECKBOX_WRAPPER_CLASSNAME} ${wrapperClassName ?? ""}`}>
      <input
        {...props}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange?.(event.target.checked)}
        className={`${CHECKBOX_INPUT_CLASSNAME} ${className ?? ""}`}
      />
      <span
        className={`${CHECKBOX_BOX_BASE_CLASSNAME} ${
          checked ? CHECKBOX_BOX_STATE_CLASSNAMES.checked : CHECKBOX_BOX_STATE_CLASSNAMES.unchecked
        }`}
      >
        {checked && CHECKBOX_CHECK_ICON}
      </span>
      {label !== undefined && <span className={CHECKBOX_LABEL_CLASSNAME}>{label}</span>}
      {count !== undefined && <span className={CHECKBOX_COUNT_CLASSNAME}>{count}</span>}
    </label>
  );
}
