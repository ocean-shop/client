/** `md` fits a list row; `lg` stands next to the large buttons of a product page. */
export type QuantityStepperSize = "md" | "lg";

export type QuantityStepperSizeStyles = {
  root: string;
  button: string;
  icon: string;
  value: string;
};

export type QuantityStepperProps = {
  value: number;
  min: number;
  max: number;
  size?: QuantityStepperSize;
  onChange: (value: number) => void;
};
