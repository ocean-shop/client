export type ProductImage = {
  id: string;
  url: string;
};

export type ProductTag = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string | null;
  price: string;
  oldPrice: string | null;
  images: ProductImage[];
};

export type ProductVariation = {
  id: string;
  sku: string | null;
  name: string | null;
  title: string | null;
  price: string;
  oldPrice: string | null;
  available: boolean;
  isDefault: boolean;
  images: ProductImage[];
};

/** A single product as returned by the product endpoint, with its relations loaded. */
export type ProductDetails = Product & {
  description: string | null;
  available: boolean;
  tags: ProductTag[];
  variations: ProductVariation[];
};

/**
 * Price, stock and photos the product page currently shows: they come from the selected
 * variation when the product has any, and from the product itself when it does not.
 */
export type ProductOffer = {
  id: string;
  sku: string | null;
  price: string;
  oldPrice: string | null;
  available: boolean;
  images: ProductImage[];
};

export type CatalogFilter = {
  name: string;
  values: string[];
};

export type CatalogProductSort = "popular" | "cheaper" | "expensive" | "new";

export type CatalogProductsQuery = {
  page: number;
  attributes: CatalogFilter[];
  sort?: CatalogProductSort;
  priceFrom?: number;
  priceTo?: number;
  available?: boolean;
};

export type ProductListResponse = {
  items: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type CatalogProductsSearchParams = Record<string, string | string[] | undefined>;
