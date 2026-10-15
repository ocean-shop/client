import type { InfoFeatureItem } from "../../components/info-feature-list/types/info-feature-list.types";
import type { DeliveryPaymentMethod } from "../components/delivery-payments/types/delivery-payments.types";

export const DELIVERY_TITLE = "Доставка та оплата";
export const DELIVERY_LEAD =
  "Відправляємо замовлення в день оформлення, якщо ви встигли до 16:00. Безкоштовна доставка у відділення Нової Пошти для замовлень від 1 500 ₴.";

export const DELIVERY_METHODS_TITLE = "Способи доставки";

export const DELIVERY_METHODS: InfoFeatureItem[] = [
  {
    icon: "store",
    title: "Нова Пошта, відділення",
    text: "Понад 11 000 відділень по Україні. Зберігання 7 днів безкоштовно.",
    value: "80 ₴",
    caption: "1–2 дні",
  },
  {
    icon: "inventory_2",
    title: "Нова Пошта, поштомат",
    text: "Цілодобово, для посилок до 20 кг і до 30 кг за габаритами.",
    value: "70 ₴",
    caption: "1–2 дні",
  },
  {
    icon: "local_shipping",
    title: "Кур’єр Нової Пошти",
    text: "Доставка до дверей у зручний 3-годинний інтервал.",
    value: "120 ₴",
    caption: "1–2 дні",
  },
  {
    icon: "local_post_office",
    title: "Укрпошта",
    text: "Відділення у кожному населеному пункті, зокрема в селах.",
    value: "50 ₴",
    caption: "2–5 днів",
  },
  {
    icon: "storefront",
    title: "Самовивіз з шоуруму",
    text: "Київ, вул. Велика Васильківська, 100. Пн–Нд 10:00–21:00.",
    value: "Безкоштовно",
    caption: "через 2 год",
  },
];

export const DELIVERY_PAYMENTS_TITLE = "Оплата";

export const DELIVERY_PAYMENT_METHODS: DeliveryPaymentMethod[] = [
  {
    icon: "credit_card",
    title: "Банківська картка",
    text: "Visa, Mastercard онлайн. Кошти списуються після підтвердження замовлення.",
  },
  {
    icon: "contactless",
    title: "Apple Pay та Google Pay",
    text: "Оплата в один дотик без введення даних картки.",
  },
  {
    icon: "payments",
    title: "Накладений платіж",
    text: "Оплата при отриманні. Комісія перевізника: 20 ₴ + 2% від суми.",
  },
  {
    icon: "calendar_month",
    title: "Оплата частинами",
    text: "monobank та ПриватБанк, до 6 платежів без переплат. Для замовлень від 1 000 ₴.",
  },
  {
    icon: "receipt_long",
    title: "Безготівковий розрахунок",
    text: "Для юридичних осіб і ФОП. Рахунок з ПДВ надсилаємо протягом 1 години.",
  },
  {
    icon: "redeem",
    title: "Бонуси Ocean Club",
    text: "Можна оплатити до 30% вартості замовлення. 1 бонус = 1 ₴.",
  },
];

export const DELIVERY_NOTE =
  "Після оплати ви отримаєте фіскальний чек на email або в SMS. Номер ТТН надсилаємо одразу після передачі посилки перевізнику.";
