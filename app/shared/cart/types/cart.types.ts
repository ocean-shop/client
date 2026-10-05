/**
 * One cart line. Everything the cart modal shows is copied in when the product is added, so the
 * cart renders straight from storage without asking the API for each line again.
 */
export type CartItem = {
  /** The offer id: the variation's for a variable product, the product's own otherwise. */
  id: string;
  productId: string;
  name: string;
  /** Title of the chosen variation; `null` for a product without variations. */
  variationLabel: string | null;
  sku: string | null;
  image: string | null;
  price: string;
  oldPrice: string | null;
  quantity: number;
};

export type CartItemInput = Omit<CartItem, "quantity">;

export type CartTotals = {
  quantity: number;
  /** Sum before discounts: the old price wherever a line has one. */
  subtotal: number;
  discount: number;
  total: number;
};

export type CartListener = () => void;
