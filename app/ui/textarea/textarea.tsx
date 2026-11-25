import { TEXTAREA_BASE_CLASS_NAME } from "./constants/textarea.constants";
import type { TextareaProps } from "./types/textarea.types";

/** Multi-line form field; `className` sets its height and whether it can be resized. */
export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea {...props} className={`${TEXTAREA_BASE_CLASS_NAME} ${className ?? ""}`} />;
};
