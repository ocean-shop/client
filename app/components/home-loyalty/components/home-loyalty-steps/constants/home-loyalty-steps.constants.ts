import type { HomeLoyaltyStep } from "../types/home-loyalty-steps.types";

/** Step numbers render as `01`, `02`, … */
export const HOME_LOYALTY_STEP_NUMBER_LENGTH = 2;

export const HOME_LOYALTY_STEPS: HomeLoyaltyStep[] = [
  { icon: "person_add", title: "Зареєструйтесь", text: "200 бонусів одразу" },
  { icon: "shopping_bag", title: "Купуйте", text: "До 5% повертається бонусами" },
  { icon: "redeem", title: "Оплачуйте бонусами", text: "До 30% вартості замовлення" },
];
