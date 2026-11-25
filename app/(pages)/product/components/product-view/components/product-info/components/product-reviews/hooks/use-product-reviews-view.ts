"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { DEFAULT_API_ERROR_MESSAGE } from "@/app/core/api/constants/api.constants";
import { toastStore } from "@/app/core/providers/toast-provider/toast-store";
import { getIsSignedInAction } from "@/app/shared/auth/actions/get-is-signed-in";
import { buildAuthLoginHref } from "@/app/shared/auth/helpers/build-auth-login-href";
import {
  PRODUCT_REVIEWS_INITIAL_VIEW,
  PRODUCT_REVIEWS_SESSION_ERROR_TOAST_TITLE,
} from "../constants/product-reviews.constants";
import type { ProductReviewsView } from "../types/product-reviews.types";

/**
 * Which view the reviews card shows. Only signed-in shoppers can write a review, so opening the
 * form first asks for the session and sends a guest to sign in, bringing them back to this page.
 */
export const useProductReviewsView = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [view, setView] = useState<ProductReviewsView>(PRODUCT_REVIEWS_INITIAL_VIEW);
  const [isCheckingSession, setIsCheckingSession] = useState(false);

  // The views differ a lot in height, so the card's title is brought back if it scrolled away.
  const changeView = (nextView: ProductReviewsView) => {
    setView(nextView);
    titleRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  const openForm = async () => {
    if (isCheckingSession) return;

    setIsCheckingSession(true);

    try {
      if (await getIsSignedInAction()) {
        changeView("form");
        return;
      }

      router.push(buildAuthLoginHref(`${window.location.pathname}${window.location.search}`));
    } catch {
      toastStore.error(PRODUCT_REVIEWS_SESSION_ERROR_TOAST_TITLE, DEFAULT_API_ERROR_MESSAGE);
    } finally {
      setIsCheckingSession(false);
    }
  };

  return {
    view,
    titleRef,
    isCheckingSession,
    openForm,
    showForm: () => changeView("form"),
    showList: () => changeView("list"),
    showSuccess: () => changeView("success"),
  };
};
