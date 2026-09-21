import { notFound } from "next/navigation";
import { getCatalogCategories } from "@/app/shared/catalog-categories/api/get-catalog-categories";
import { findCatalogCategoryBySlugHelper } from "@/app/shared/catalog-categories/helpers/find-catalog-category-by-slug";
import { CatalogFilters } from "../components/catalog-filters/catalog-filters";
import { CatalogBody } from "../components/catalog-body/catalog-body";

export default async function CatalogPage({ params }: PageProps<"/catalog/[categoryName]">) {
  const { categoryName } = await params;
  const categories = await getCatalogCategories();
  const category = findCatalogCategoryBySlugHelper(categories, categoryName);

  if (!category) notFound();

  return (
    <div className="bg-surface-soft">
      <div className="mx-auto grid max-w-page grid-cols-[284px_1fr] items-start gap-8 px-10 pb-14 pt-6.5">
        <CatalogFilters />
        <CatalogBody category={category} />
      </div>
    </div>
  );
}
