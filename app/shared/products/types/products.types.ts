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
  /** Set on the search results page only; travels in the URL and in the API request alike. */
  searchTerm?: string;
};

/** Which listing a catalog query runs against: the products of a category, or a search term. */
export type CatalogProductsSource = { kind: "category"; categoryId: string } | { kind: "search" };

export type ProductListResponse = {
  items: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * A search page plus the filters the term can be narrowed by, so the results and the filter
 * panel come from a single request. The category page gets the same filters from
 * `filters/by-category/:categoryId`, which it asks for once per category instead of once per page.
 */
export type ProductSearchListResponse = ProductListResponse & {
  filters: CatalogFilter[];
};

export type CatalogProductsSearchParams = Record<string, string | string[] | undefined>;

/** A suggestion row in the header search panel: one image and one price, nothing else. */
export type ProductSearchItem = {
  id: string;
  name: string;
  price: string;
  oldPrice: string | null;
  image: string | null;
};

export type ProductSearchResponse = {
  total: number;
  items: ProductSearchItem[];
};
