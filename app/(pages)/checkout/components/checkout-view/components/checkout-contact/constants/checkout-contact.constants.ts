import {
  AUTH_LOGIN_PAGE_PATH,
  AUTH_REDIRECT_PARAM,
} from "@/app/shared/auth/constants/auth.constants";
import { CHECKOUT_PAGE_PATH } from "@/app/shared/cart/constants/cart.constants";

export const CHECKOUT_CONTACT_STEP = 1;
export const CHECKOUT_CONTACT_TITLE = "Контактні дані";

export const CHECKOUT_CONTACT_LOGIN_TITLE = "Вже купували в Ocean?";
export const CHECKOUT_CONTACT_LOGIN_TEXT =
  "Увійдіть, і ми підставимо ваші дані та адресу доставки.";
export const CHECKOUT_CONTACT_LOGIN_LABEL = "Увійти";
/** The cart lives in browser storage, so it is still there when the user comes back signed in. */
export const CHECKOUT_CONTACT_LOGIN_HREF = `${AUTH_LOGIN_PAGE_PATH}?${AUTH_REDIRECT_PARAM}=${encodeURIComponent(CHECKOUT_PAGE_PATH)}`;

export const CHECKOUT_CONTACT_FIELDS = {
  name: { label: "ПІБ", placeholder: "Прізвище, ім’я, по батькові", autoComplete: "name" },
  email: { label: "Email", placeholder: "name@example.com", autoComplete: "email" },
  phone: { label: "Мобільний", placeholder: "+380 __ ___ __ __", autoComplete: "tel" },
};
