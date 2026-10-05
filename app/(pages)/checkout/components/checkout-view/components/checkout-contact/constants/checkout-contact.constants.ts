export const CHECKOUT_CONTACT_STEP = 1;
export const CHECKOUT_CONTACT_TITLE = "Контактні дані";

export const CHECKOUT_CONTACT_LOGIN_TITLE = "Вже купували в Ocean?";
export const CHECKOUT_CONTACT_LOGIN_TEXT =
  "Увійдіть, і ми підставимо ваші дані та адресу доставки.";
export const CHECKOUT_CONTACT_LOGIN_LABEL = "Увійти";

/** Accounts do not exist yet, so the button says so instead of pretending to sign in. */
export const CHECKOUT_CONTACT_LOGIN_TOAST_TITLE = "Скоро";
export const CHECKOUT_CONTACT_LOGIN_TOAST_MESSAGE =
  "Вхід в особистий кабінет буде доступний найближчим часом.";

export const CHECKOUT_CONTACT_FIELDS = {
  name: { label: "ПІБ", placeholder: "Прізвище, ім’я, по батькові", autoComplete: "name" },
  email: { label: "Email", placeholder: "name@example.com", autoComplete: "email" },
  phone: { label: "Мобільний", placeholder: "+380 __ ___ __ __", autoComplete: "tel" },
};
