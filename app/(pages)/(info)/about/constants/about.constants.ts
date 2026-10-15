import type { AboutStat } from "../components/about-stats/types/about-stats.types";
import type { AboutValue } from "../components/about-values/types/about-values.types";

export const ABOUT_TITLE = "Про Ocean";
export const ABOUT_LEAD =
  "Ocean — український онлайн-магазин електроніки та товарів для дому. Ми почали у 2019 році у Львові з невеликого складу навушників, а сьогодні відправляємо замовлення по всій Україні.";

export const ABOUT_PHOTO_CAPTION = "Фото команди або складу";

export const ABOUT_STATS: AboutStat[] = [
  { value: "2019", label: "рік заснування" },
  { value: "40 000+", label: "товарів у каталозі" },
  { value: "1–2 дні", label: "доставка по Україні" },
  { value: "4,8", label: "середня оцінка магазину" },
];

export const ABOUT_VALUES_TITLE = "Що для нас важливо";

export const ABOUT_VALUES: AboutValue[] = [
  {
    icon: "verified",
    title: "Лише офіційний товар",
    text: "Працюємо напряму з українськими представництвами брендів. На кожен товар — офіційна гарантія.",
  },
  {
    icon: "schedule",
    title: "Швидко і чесно",
    text: "Відправляємо в день замовлення та показуємо реальну наявність на складі.",
  },
  {
    icon: "volunteer_activism",
    title: "Підтримуємо своїх",
    text: "1% з кожного замовлення передаємо на потреби ЗСУ через фонд «Повернись живим».",
  },
];
