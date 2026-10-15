/** `card` sits on a product card's photo, `gallery` on the product page's main photo. */
export type ProductFavoriteButtonVariant = "card" | "gallery";

export type ProductFavoriteButtonProps = {
  productId: string;
  productName: string;
  variant: ProductFavoriteButtonVariant;
  /**
   * What to show until the user's favourites have loaded, for lists that are favourites
   * already, so their hearts do not start out empty.
   */
  initialIsFavorite?: boolean;
};

export type ProductFavoriteButtonStyles = {
  button: string;
  icon: string;
  active: string;
  inactive: string;
};
