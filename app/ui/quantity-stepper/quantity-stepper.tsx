"use client";

import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  QUANTITY_STEPPER_BUTTON_CLASS_NAME,
  QUANTITY_STEPPER_DECREASE_LABEL,
  QUANTITY_STEPPER_DEFAULT_SIZE,
  QUANTITY_STEPPER_INCREASE_LABEL,
  QUANTITY_STEPPER_SIZE_STYLES,
} from "./constants/quantity-stepper.constants";
import type { QuantityStepperProps } from "./types/quantity-stepper.types";

export const QuantityStepper = ({
  value,
  min,
  max,
  size = QUANTITY_STEPPER_DEFAULT_SIZE,
  onChange,
}: QuantityStepperProps) => {
  const styles = QUANTITY_STEPPER_SIZE_STYLES[size];

  return (
    <div className={`flex items-center border border-footer-border ${styles.root}`}>
      <Button
        variant="unstyled"
        size="auto"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={QUANTITY_STEPPER_DECREASE_LABEL}
        className={`${QUANTITY_STEPPER_BUTTON_CLASS_NAME} ${styles.button}`}
      >
        <MaterialIcon name="remove" className={styles.icon} />
      </Button>

      <span className={`text-center font-semibold ${styles.value}`}>{value}</span>

      <Button
        variant="unstyled"
        size="auto"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={QUANTITY_STEPPER_INCREASE_LABEL}
        className={`${QUANTITY_STEPPER_BUTTON_CLASS_NAME} ${styles.button}`}
      >
        <MaterialIcon name="add" className={styles.icon} />
      </Button>
    </div>
  );
};
