"use client";

import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  QUANTITY_STEPPER_BUTTON_CLASS_NAME,
  QUANTITY_STEPPER_DECREASE_LABEL,
  QUANTITY_STEPPER_INCREASE_LABEL,
} from "./constants/quantity-stepper.constants";
import type { QuantityStepperProps } from "./types/quantity-stepper.types";

export const QuantityStepper = ({ value, min, max, onChange }: QuantityStepperProps) => {
  return (
    <div className="flex h-[38px] items-center rounded-[10px] border border-footer-border lg:h-10">
      <Button
        variant="unstyled"
        size="auto"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={QUANTITY_STEPPER_DECREASE_LABEL}
        className={QUANTITY_STEPPER_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name="remove" className="text-lg" />
      </Button>

      <span className="w-[26px] text-center text-[14.5px] font-semibold">{value}</span>

      <Button
        variant="unstyled"
        size="auto"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={QUANTITY_STEPPER_INCREASE_LABEL}
        className={QUANTITY_STEPPER_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name="add" className="text-lg" />
      </Button>
    </div>
  );
};
