import type { InfoFeatureItem } from "../../components/info-feature-list/types/info-feature-list.types";
import type { LoyaltyTierData } from "../components/loyalty-tiers/types/loyalty-tiers.types";

export const LOYALTY_TITLE = "Ocean Club";
export const LOYALTY_LEAD =
  "Бонусна програма для всіх зареєстрованих покупців. Бонуси нараховуються з кожної покупки та діють 365 днів.";

export const LOYALTY_TIERS: LoyaltyTierData[] = [
  {
    threshold: "Від першої покупки",
    name: "Хвиля",
    rate: "1%",
    perks: ["200 бонусів за реєстрацію", "Подвійні бонуси в день народження"],
  },
  {
    threshold: "Від 10 000 ₴ за рік",
    name: "Течія",
    rate: "3%",
    perks: [
      "Усе з рівня «Хвиля»",
      "Ранній доступ до розпродажів",
      "Безкоштовна доставка від 800 ₴",
    ],
    isFeatured: true,
  },
  {
    threshold: "Від 30 000 ₴ за рік",
    name: "Глибина",
    rate: "5%",
    perks: [
      "Усе з рівня «Течія»",
      "Безкоштовна доставка будь-якого замовлення",
      "Особистий менеджер у Telegram",
    ],
  },
];

export const LOYALTY_EARN_TITLE = "Як отримати більше бонусів";

export const LOYALTY_EARN_WAYS: InfoFeatureItem[] = [
  {
    icon: "rate_review",
    title: "Відгук про товар",
    text: "Після отримання замовлення, з фото — вдвічі більше",
    value: "+20",
    caption: "бонусів",
  },
  {
    icon: "group_add",
    title: "Запросіть друга",
    text: "Друг отримає 150 бонусів на першу покупку від 1 500 ₴",
    value: "+150",
    caption: "бонусів",
  },
  {
    icon: "cake",
    title: "День народження",
    text: "Тиждень до і після — подвійне нарахування",
    value: "×2",
    caption: "бонусів",
  },
];

export const LOYALTY_NOTE =
  "1 бонус = 1 ₴. Бонусами можна оплатити до 30% вартості замовлення. Бонуси не нараховуються на подарункові сертифікати та на суму, сплачену бонусами.";
