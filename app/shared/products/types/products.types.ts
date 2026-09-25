export type ProductImage = {
  id: string;
  url: string;
};

export type Product = {
  id: string;
  name: string;
  sku: string | null;
  price: string;
  oldPrice: string | null;
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
