import { buildAuthLoginHref } from "@/app/shared/auth/helpers/build-auth-login-href";
import { CHECKOUT_PAGE_PATH } from "@/app/shared/cart/constants/cart.constants";

export const CHECKOUT_CONTACT_LOGIN_TITLE = "Вже купували в Ocean?";
export const CHECKOUT_CONTACT_LOGIN_TEXT =
  "Увійдіть, і ми підставимо ваші дані та адресу доставки.";
export const CHECKOUT_CONTACT_LOGIN_LABEL = "Увійти";
/** The cart lives in browser storage, so it is still there when the user comes back signed in. */
export const CHECKOUT_CONTACT_LOGIN_HREF = buildAuthLoginHref(CHECKOUT_PAGE_PATH);
