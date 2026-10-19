import type { HomeAboutFeature, HomeAboutStat } from "../types/home-about.types";

export const HOME_ABOUT_EYEBROW_LABEL = "Про Ocean";

export const HOME_ABOUT_TITLE = "Техніка, якій довіряєш, з доставкою за день";

export const HOME_ABOUT_DESCRIPTION =
  "Ми почали у 2019 році у Львові з невеликого складу навушників. Сьогодні Ocean — це команда зі 120 людей і склад, з якого щодня їдуть тисячі посилок по всій Україні.";

export const HOME_ABOUT_PHOTO_CAPTION = "Фото команди або шоуруму";

export const HOME_ABOUT_STATS: HomeAboutStat[] = [
  { value: "2019", label: "рік заснування" },
  { value: "40 000+", label: "товарів" },
  { value: "4,8", label: "оцінка покупців" },
];

export const HOME_ABOUT_FEATURES: HomeAboutFeature[] = [
  {
    icon: "verified",
    title: "Лише офіційний товар",
    text: "Працюємо напряму з представництвами брендів. Офіційна гарантія на кожен товар.",
  },
  {
    icon: "local_shipping",
    title: "Відправка в день замовлення",
    text: "Замовте до 16:00, і посилка вже сьогодні поїде до вас.",
  },
  {
    icon: "support_agent",
    title: "Живі люди в підтримці",
    text: "Щодня 8:00–21:00 у Telegram, Viber і за номером 0 800 300 500.",
  },
];
