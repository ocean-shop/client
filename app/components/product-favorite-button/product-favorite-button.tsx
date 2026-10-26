"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CABINET_FAVORITES_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import {
  API_ERROR_MESSAGES,
  DEFAULT_API_ERROR_MESSAGE,
} from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import {
  AUTH_LOGIN_PAGE_PATH,
  AUTH_REDIRECT_PARAM,
} from "@/app/shared/auth/constants/auth.constants";
import {
  FAVORITES_ADDED_TOAST_ACTION_LABEL,
  FAVORITES_ADDED_TOAST_TITLE,
  FAVORITES_ERROR_TOAST_TITLE,
  FAVORITES_UNAUTHORIZED_STATUS,
} from "@/app/shared/favorites/constants/favorites.constants";
import { favoritesStore } from "@/app/shared/favorites/favorites-store";
import { useFavorites } from "@/app/shared/favorites/hooks/use-favorites";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_FAVORITE_BUTTON_ADD_LABEL,
  PRODUCT_FAVORITE_BUTTON_REMOVE_LABEL,
  PRODUCT_FAVORITE_BUTTON_STYLES,
} from "./constants/product-favorite-button.constants";
import type { ProductFavoriteButtonProps } from "./types/product-favorite-button.types";

/** The heart on a product photo. Guests are sent to sign in and brought back to the same page. */
export const ProductFavoriteButton = ({
  productId,
  productName,
  variant,
  initialIsFavorite = false,
}: ProductFavoriteButtonProps) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const { ids, status } = useFavorites();

  const isFavorite = status === "ready" ? ids.has(productId) : initialIsFavorite;
  const styles = PRODUCT_FAVORITE_BUTTON_STYLES[variant];

  const notifyAdded = () => {
    const toastId = toastStore.success(FAVORITES_ADDED_TOAST_TITLE, productName, [
      {
        label: FAVORITES_ADDED_TOAST_ACTION_LABEL,
        onClick: () => {
          toastStore.dismiss(toastId);
          router.push(CABINET_FAVORITES_PATH);
        },
      },
    ]);
  };

  const toggle = async () => {
    setIsPending(true);

    try {
      const result = await favoritesStore.toggle(productId);

      if (result.ok) {
        if (result.isFavorite) notifyAdded();
        return;
      }

      if (result.status === FAVORITES_UNAUTHORIZED_STATUS) {
        const redirectTo = `${window.location.pathname}${window.location.search}`;

        router.push(
          `${AUTH_LOGIN_PAGE_PATH}?${AUTH_REDIRECT_PARAM}=${encodeURIComponent(redirectTo)}`
        );
        return;
      }

      toastStore.error(
        FAVORITES_ERROR_TOAST_TITLE,
        API_ERROR_MESSAGES[result.status] ?? DEFAULT_API_ERROR_MESSAGE
      );
    } catch {
      toastStore.error(FAVORITES_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button
      variant="unstyled"
      size="auto"
      onClick={toggle}
      disabled={isPending}
      aria-label={
        isFavorite ? PRODUCT_FAVORITE_BUTTON_REMOVE_LABEL : PRODUCT_FAVORITE_BUTTON_ADD_LABEL
      }
      aria-pressed={isFavorite}
      className={`flex items-center justify-center ${styles.button}`}
    >
      <span
        className={`font-symbols ${styles.icon} ${isFavorite ? styles.active : styles.inactive}`}
        style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
      >
        favorite
      </span>
    </Button>
  );
};
