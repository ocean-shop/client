"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CABINET_FAVORITES_PATH } from "@/app/(pages)/cabinet/constants/cabinet.constants";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { getApiStatusErrorMessage } from "@/app/core/api/helpers/get-api-status-error-message";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { buildAuthLoginHref } from "@/app/shared/auth/helpers/build-auth-login-href";
import {
  FAVORITES_ADDED_TOAST_ACTION_LABEL,
  FAVORITES_ADDED_TOAST_TITLE,
  FAVORITES_ERROR_TOAST_TITLE,
  FAVORITES_UNAUTHORIZED_STATUS,
} from "@/app/shared/favorites/constants/favorites.constants";
import { favoritesStore } from "@/app/shared/favorites/favorites-store";

/** Toggles a product in favourites; guests are sent to sign in and brought back to this page. */
export const useProductFavoriteToggle = (productId: string, productName: string) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

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
        router.push(buildAuthLoginHref(`${window.location.pathname}${window.location.search}`));
        return;
      }

      toastStore.error(FAVORITES_ERROR_TOAST_TITLE, getApiStatusErrorMessage(result.status));
    } catch {
      toastStore.error(FAVORITES_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsPending(false);
    }
  };

  return { toggle, isPending };
};
