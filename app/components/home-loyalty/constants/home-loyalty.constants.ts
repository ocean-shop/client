import type { HomeLoyaltyStep } from "../types/home-loyalty.types";

export const HOME_LOYALTY_EYEBROW_LABEL = "Ocean Club";

export const HOME_LOYALTY_TITLE = "Повертаємо до 5% з кожної покупки";

export const HOME_LOYALTY_DESCRIPTION =
  "Безкоштовна бонусна програма для всіх покупців. Що більше купуєте, то вищий рівень і більше переваг.";

export const HOME_LOYALTY_JOIN_LABEL = "Приєднатися";
export const HOME_LOYALTY_JOIN_HREF = "/login";

export const HOME_LOYALTY_DETAILS_LABEL = "Детальніше";
export const HOME_LOYALTY_DETAILS_HREF = "/loyalty";

/** Step numbers render as `01`, `02`, … */
export const HOME_LOYALTY_STEP_NUMBER_LENGTH = 2;

export const HOME_LOYALTY_STEPS: HomeLoyaltyStep[] = [
  { icon: "person_add", title: "Зареєструйтесь", text: "200 бонусів одразу" },
  { icon: "shopping_bag", title: "Купуйте", text: "До 5% повертається бонусами" },
  { icon: "redeem", title: "Оплачуйте бонусами", text: "До 30% вартості замовлення" },
];
