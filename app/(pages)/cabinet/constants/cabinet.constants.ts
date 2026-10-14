import { AUTH_CABINET_PAGE_PATH } from "@/app/shared/auth/constants/auth.constants";
import type { CabinetMenuItem, CabinetOverview } from "../types/cabinet.types";

export const CABINET_PAGE_CLASS_NAME = "flex flex-1 flex-col bg-surface-soft";

export const CABINET_HOME_PATH = AUTH_CABINET_PAGE_PATH;
export const CABINET_PROFILE_PATH = `${AUTH_CABINET_PAGE_PATH}/profile`;
export const CABINET_ORDERS_PATH = `${AUTH_CABINET_PAGE_PATH}/orders`;
export const CABINET_FAVORITES_PATH = `${AUTH_CABINET_PAGE_PATH}/favorites`;
export const CABINET_ADDRESSES_PATH = `${AUTH_CABINET_PAGE_PATH}/addresses`;

export const CABINET_MENU_ITEMS: CabinetMenuItem[] = [
  { href: CABINET_HOME_PATH, icon: "space_dashboard", label: "Огляд", shortLabel: "Огляд" },
  { href: CABINET_PROFILE_PATH, icon: "person", label: "Особисті дані", shortLabel: "Дані" },
  { href: CABINET_ADDRESSES_PATH, icon: "location_on", label: "Адреси", shortLabel: "Адреси" },
  {
    href: CABINET_ORDERS_PATH,
    icon: "receipt_long",
    label: "Замовлення",
    shortLabel: "Замовлення",
  },
  { href: CABINET_FAVORITES_PATH, icon: "favorite", label: "Обране", shortLabel: "Обране" },
];

export const CABINET_LOGOUT_LABEL = "Вийти";
export const CABINET_LOGOUT_ICON = "logout";
export const CABINET_LOGOUT_ERROR_TOAST_TITLE = "Не вдалося вийти";
export const CABINET_LOGOUT_REDIRECT_PATH = "/";

export const CABINET_EMPTY_OVERVIEW: CabinetOverview = {
  activeOrder: null,
  ordersCount: 0,
  favorites: [],
  favoritesCount: 0,
  mainAddress: null,
};

export const CABINET_USER_FALLBACK_ICON = "person";
export const CABINET_UA_PHONE_PATTERN = /^\+380(\d{2})(\d{3})(\d{2})(\d{2})$/;
