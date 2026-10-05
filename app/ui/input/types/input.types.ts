export type InputSize = "sm" | "md" | "lg" | "xl";

/** `soft` is the tinted filter field; `outline` is the white form field with a focus ring. */
export type InputVariant = "soft" | "outline";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  variant?: InputVariant;
};
