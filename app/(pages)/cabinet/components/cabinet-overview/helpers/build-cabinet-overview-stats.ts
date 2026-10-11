import { formatProductsCountHelper } from "@/app/shared/products/helpers/format-products-count";
import {
  CABINET_FAVORITES_PATH,
  CABINET_ORDERS_PATH,
  CABINET_PROFILE_PATH,
} from "../../../constants/cabinet.constants";
import type { CabinetOverview } from "../../../types/cabinet.types";
import {
  CABINET_OVERVIEW_ADDRESS_STAT,
  CABINET_OVERVIEW_FAVORITES_STAT,
  CABINET_OVERVIEW_LOCALE,
  CABINET_OVERVIEW_ORDER_WORD_FORMS,
  CABINET_OVERVIEW_ORDERS_STAT,
} from "../constants/cabinet-overview.constants";
import type { CabinetOverviewStat } from "../types/cabinet-overview.types";

const pluralRules = new Intl.PluralRules(CABINET_OVERVIEW_LOCALE);

function formatOrdersCount(count: number) {
  const word = CABINET_OVERVIEW_ORDER_WORD_FORMS[pluralRules.select(count)];

  return `${count.toLocaleString(CABINET_OVERVIEW_LOCALE)} ${word ?? CABINET_OVERVIEW_ORDER_WORD_FORMS.other}`;
}

/** The three shortcut cards under the active order, each with its own empty wording. */
export function buildCabinetOverviewStatsHelper(overview: CabinetOverview): CabinetOverviewStat[] {
  const { ordersCount, favoritesCount, mainAddress } = overview;
  const orders = CABINET_OVERVIEW_ORDERS_STAT;
  const favorites = CABINET_OVERVIEW_FAVORITES_STAT;
  const address = CABINET_OVERVIEW_ADDRESS_STAT;

  return [
    {
      id: "orders",
      href: CABINET_ORDERS_PATH,
      icon: orders.icon,
      label: orders.label,
      value: ordersCount ? formatOrdersCount(ordersCount) : orders.emptyValue,
      note: ordersCount ? orders.note : orders.emptyNote,
    },
    {
      id: "favorites",
      href: CABINET_FAVORITES_PATH,
      icon: favorites.icon,
      label: favorites.label,
      value: favoritesCount ? formatProductsCountHelper(favoritesCount) : favorites.emptyValue,
      note: favoritesCount ? favorites.note : favorites.emptyNote,
    },
    {
      id: "address",
      href: CABINET_PROFILE_PATH,
      icon: address.icon,
      label: address.label,
      value: mainAddress?.title ?? address.emptyValue,
      note: mainAddress?.address ?? address.emptyNote,
    },
  ];
}
