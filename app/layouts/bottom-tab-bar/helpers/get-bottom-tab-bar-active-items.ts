import { CABINET_FAVORITES_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import { HEADER_HOME_HREF } from "@/app/layouts/header/constants/header.constants";
import {
  AUTH_CABINET_PAGE_PATH,
  AUTH_LOGIN_PAGE_PATH,
} from "@/app/shared/auth/constants/auth.constants";
import type {
  BottomTabBarActiveItemsParams,
  BottomTabBarItemId,
} from "../types/bottom-tab-bar.types";

/** An open overlay takes the highlight from the home tab; the favorites page is not the account's. */
export const getBottomTabBarActiveItemsHelper = ({
  pathname,
  isCatalogOpen,
  isCartOpen,
}: BottomTabBarActiveItemsParams): Record<BottomTabBarItemId, boolean> => {
  const isFavoritesPage = pathname.startsWith(CABINET_FAVORITES_PATH);

  return {
    home: pathname === HEADER_HOME_HREF && !isCatalogOpen && !isCartOpen,
    catalog: isCatalogOpen,
    cart: isCartOpen,
    favorites: isFavoritesPage,
    account:
      !isFavoritesPage &&
      (pathname === AUTH_LOGIN_PAGE_PATH ||
        pathname === AUTH_CABINET_PAGE_PATH ||
        pathname.startsWith(`${AUTH_CABINET_PAGE_PATH}/`)),
  };
};
