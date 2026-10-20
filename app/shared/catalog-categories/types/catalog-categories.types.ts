import type { SeoFields } from "@/app/shared/seo/types/seo.types";

/** The SEO fields come from the list endpoint only; the search category options omit them. */
export type CatalogCategory = Partial<SeoFields> & {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
};

export type CatalogCategoriesResponse = {
  items: CatalogCategory[];
};

export type CatalogCategoryTree = CatalogCategory & {
  subs: CatalogCategory[];
};
