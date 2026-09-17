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
