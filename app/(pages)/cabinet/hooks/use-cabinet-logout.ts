"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { logoutAction } from "@/app/shared/auth/actions/logout";
import { favoritesStore } from "@/app/shared/favorites/favorites-store";
import {
  CABINET_LOGOUT_ERROR_TOAST_TITLE,
  CABINET_LOGOUT_REDIRECT_PATH,
} from "../constants/cabinet.constants";

/** Ends the session and leaves the cabinet, which is no longer reachable without one. */
export function useCabinetLogout() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function logout() {
    startTransition(async () => {
      try {
        await logoutAction();
        favoritesStore.reset();
        router.replace(CABINET_LOGOUT_REDIRECT_PATH);
      } catch {
        toastStore.error(CABINET_LOGOUT_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
      }
    });
  }

  return { logout, isPending };
}
