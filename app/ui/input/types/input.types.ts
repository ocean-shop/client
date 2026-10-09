export type InputSize = "sm" | "md" | "lg" | "xl" | "auto";

/**
 * `soft` is the tinted filter field; `outline` is the white form field with a focus ring;
 * `ghost` has no border or background, for inputs placed inside a custom field wrapper.
 */
export type InputVariant = "soft" | "outline" | "ghost";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  variant?: InputVariant;
};
