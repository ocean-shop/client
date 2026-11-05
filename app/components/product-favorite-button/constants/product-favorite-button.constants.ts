import type {
  ProductFavoriteButtonStyles,
  ProductFavoriteButtonVariant,
} from "../types/product-favorite-button.types";

export const PRODUCT_FAVORITE_BUTTON_ADD_LABEL = "Додати в обране";
export const PRODUCT_FAVORITE_BUTTON_REMOVE_LABEL = "Прибрати з обраного";

export const PRODUCT_FAVORITE_BUTTON_ICON = "favorite";

/** Material Symbols axis: a filled heart for favourites, an outline otherwise. */
export const PRODUCT_FAVORITE_BUTTON_ICON_FILL = {
  filled: "'FILL' 1",
  outlined: "'FILL' 0",
} as const;

export const PRODUCT_FAVORITE_BUTTON_STYLES: Record<
  ProductFavoriteButtonVariant,
  ProductFavoriteButtonStyles
> = {
  card: {
    button: "h-[34px] w-[34px] rounded-[10px] bg-white/90",
    icon: "text-[19px]",
    active: "text-accent",
    inactive: "text-muted-light",
  },
  gallery: {
    button: "h-[42px] w-[42px] rounded-xl bg-white/95 hover:bg-white",
    icon: "text-[22px]",
    active: "text-error",
    inactive: "text-muted",
  },
};
