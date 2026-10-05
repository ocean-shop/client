export const CHECKOUT_DELIVERY_STEP = 2;
export const CHECKOUT_DELIVERY_TITLE = "Доставка";
export const CHECKOUT_DELIVERY_CARRIERS_LABEL = "Перевізник";
export const CHECKOUT_DELIVERY_METHODS_LABEL = "Спосіб доставки";

export const CHECKOUT_DELIVERY_COURIER_FIELDS = {
  street: {
    label: "Вулиця, будинок",
    placeholder: "вул. Хрещатик, 22",
    autoComplete: "address-line1",
  },
  apartment: { label: "Квартира", placeholder: "кв. 14", autoComplete: "address-line2" },
};

export const CHECKOUT_DELIVERY_METHOD_STATE_CLASS_NAMES = {
  selected: "border-accent bg-surface",
  idle: "border-border-soft bg-background hover:border-footer-border",
};
