"use client";

import { useFavorites } from "@/app/shared/favorites/hooks/use-favorites";
import { Button } from "@/app/ui/button/button";
import {
  PRODUCT_FAVORITE_BUTTON_ADD_LABEL,
  PRODUCT_FAVORITE_BUTTON_ICON,
  PRODUCT_FAVORITE_BUTTON_ICON_FILL,
  PRODUCT_FAVORITE_BUTTON_REMOVE_LABEL,
  PRODUCT_FAVORITE_BUTTON_STYLES,
} from "./constants/product-favorite-button.constants";
import { useProductFavoriteToggle } from "./hooks/use-product-favorite-toggle";
import type { ProductFavoriteButtonProps } from "./types/product-favorite-button.types";

/** The heart on a product photo. Guests are sent to sign in and brought back to the same page. */
export const ProductFavoriteButton = ({
  productId,
  productName,
  variant,
  initialIsFavorite = false,
}: ProductFavoriteButtonProps) => {
  const { ids, status } = useFavorites();
  const { toggle, isPending } = useProductFavoriteToggle(productId, productName);

  const isFavorite = status === "ready" ? ids.has(productId) : initialIsFavorite;
  const styles = PRODUCT_FAVORITE_BUTTON_STYLES[variant];

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
        style={{
          fontVariationSettings: isFavorite
            ? PRODUCT_FAVORITE_BUTTON_ICON_FILL.filled
            : PRODUCT_FAVORITE_BUTTON_ICON_FILL.outlined,
        }}
      >
        {PRODUCT_FAVORITE_BUTTON_ICON}
      </span>
    </Button>
  );
};
