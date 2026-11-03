import { HOME_LOYALTY_STEP_NUMBER_LENGTH } from "../constants/home-loyalty-steps.constants";

/** Zero-based list index to a padded step number: `0` → `01`. */
export const formatHomeLoyaltyStepNumberHelper = (index: number): string =>
  String(index + 1).padStart(HOME_LOYALTY_STEP_NUMBER_LENGTH, "0");
