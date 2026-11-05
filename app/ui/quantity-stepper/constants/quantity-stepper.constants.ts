import type {
  QuantityStepperSize,
  QuantityStepperSizeStyles,
} from "../types/quantity-stepper.types";

export const QUANTITY_STEPPER_DECREASE_LABEL = "Зменшити кількість";
export const QUANTITY_STEPPER_INCREASE_LABEL = "Збільшити кількість";

export const QUANTITY_STEPPER_DEFAULT_SIZE: QuantityStepperSize = "md";

export const QUANTITY_STEPPER_BUTTON_CLASS_NAME =
  "flex h-full items-center justify-center text-muted";

export const QUANTITY_STEPPER_SIZE_STYLES: Record<QuantityStepperSize, QuantityStepperSizeStyles> =
  {
    md: {
      root: "h-[38px] rounded-[10px] lg:h-10",
      button: "w-9 lg:w-[38px]",
      icon: "text-lg",
      value: "w-[26px] text-[14.5px]",
    },
    lg: {
      root: "h-[52px] rounded-xl bg-background",
      button: "w-[46px]",
      icon: "text-xl",
      value: "w-8 text-[15px]",
    },
  };
